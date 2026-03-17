/**
 * Minimal YAML parser for frontmatter.
 * Handles: scalars, inline arrays [ ], nested objects, and block sequences (- item).
 * Does NOT handle multi-line strings, anchors, or advanced YAML features.
 */

type YamlValue = string | number | boolean | null | YamlValue[] | { [key: string]: YamlValue };

function parseScalar(raw: string): YamlValue {
  const trimmed = raw.trim();
  if (trimmed === '' || trimmed === 'null' || trimmed === '~') return null;
  if (trimmed === 'true') return true;
  if (trimmed === 'false') return false;
  // Quoted string
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) ||
      (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1);
  }
  // Number
  const num = Number(trimmed);
  if (!isNaN(num) && trimmed !== '') return num;
  return trimmed;
}

function parseInlineArray(raw: string): YamlValue[] {
  // Strip [ ]
  const inner = raw.trim().slice(1, -1).trim();
  if (inner === '') return [];
  // Split on commas, respecting nested brackets
  const items: string[] = [];
  let depth = 0;
  let current = '';
  for (const ch of inner) {
    if (ch === '[' || ch === '{') depth++;
    else if (ch === ']' || ch === '}') depth--;
    if (ch === ',' && depth === 0) {
      items.push(current);
      current = '';
    } else {
      current += ch;
    }
  }
  if (current.trim()) items.push(current);
  return items.map(item => {
    const t = item.trim();
    if (t.startsWith('[')) return parseInlineArray(t);
    if (t.startsWith('{')) return parseInlineObject(t);
    return parseScalar(t);
  });
}

function parseInlineObject(raw: string): { [key: string]: YamlValue } {
  const inner = raw.trim().slice(1, -1).trim();
  const obj: { [key: string]: YamlValue } = {};
  if (inner === '') return obj;
  // Split on commas, respecting nested brackets and quotes
  const pairs: string[] = [];
  let depth = 0;
  let inQuote: string | null = null;
  let current = '';
  for (let i = 0; i < inner.length; i++) {
    const ch = inner[i];
    if (inQuote) {
      current += ch;
      if (ch === inQuote) inQuote = null;
      continue;
    }
    if (ch === '"' || ch === "'") {
      inQuote = ch;
      current += ch;
      continue;
    }
    if (ch === '[' || ch === '{') depth++;
    else if (ch === ']' || ch === '}') depth--;
    if (ch === ',' && depth === 0) {
      pairs.push(current);
      current = '';
    } else {
      current += ch;
    }
  }
  if (current.trim()) pairs.push(current);
  for (const pair of pairs) {
    const colonIdx = pair.indexOf(':');
    if (colonIdx === -1) continue;
    const key = pair.slice(0, colonIdx).trim();
    const val = pair.slice(colonIdx + 1).trim();
    if (val.startsWith('[')) {
      obj[key] = parseInlineArray(val);
    } else if (val.startsWith('{')) {
      obj[key] = parseInlineObject(val);
    } else {
      obj[key] = parseScalar(val);
    }
  }
  return obj;
}

interface Line {
  indent: number;
  raw: string;
  text: string; // trimmed
}

function getLines(yaml: string): Line[] {
  return yaml.split('\n').map(raw => {
    const match = raw.match(/^(\s*)/);
    const indent = match ? match[1].length : 0;
    return { indent, raw, text: raw.trim() };
  });
}

function parseBlock(lines: Line[], startIdx: number, baseIndent: number): { value: YamlValue; nextIdx: number } {
  // Determine if this block is a sequence or a mapping
  if (startIdx >= lines.length) return { value: null, nextIdx: startIdx };

  // Skip blank lines
  let idx = startIdx;
  while (idx < lines.length && lines[idx].text === '') idx++;
  if (idx >= lines.length) return { value: null, nextIdx: idx };

  const firstLine = lines[idx];

  // Sequence block (lines starting with "- ")
  if (firstLine.text.startsWith('- ')) {
    return parseSequenceBlock(lines, idx, firstLine.indent);
  }

  // Mapping block
  return parseMappingBlock(lines, idx, baseIndent);
}

function parseSequenceBlock(lines: Line[], startIdx: number, seqIndent: number): { value: YamlValue[]; nextIdx: number } {
  const arr: YamlValue[] = [];
  let idx = startIdx;

  while (idx < lines.length) {
    // Skip blanks
    while (idx < lines.length && lines[idx].text === '') idx++;
    if (idx >= lines.length) break;

    const line = lines[idx];
    if (line.indent < seqIndent) break;
    if (line.indent === seqIndent && !line.text.startsWith('- ')) break;

    if (line.text.startsWith('- ')) {
      const after = line.text.slice(2).trim();

      // Inline object within sequence: - { key: val }
      if (after.startsWith('{')) {
        arr.push(parseInlineObject(after));
        idx++;
        continue;
      }

      // Inline array within sequence: - [a, b]
      if (after.startsWith('[')) {
        arr.push(parseInlineArray(after));
        idx++;
        continue;
      }

      // Check if this is a mapping item: - key: value
      const colonMatch = after.match(/^([^:]+):\s*(.*)/);
      if (colonMatch) {
        // This is a nested mapping starting at this sequence item
        // We need to parse it as a mapping
        const key = colonMatch[1].trim();
        const val = colonMatch[2].trim();
        const obj: { [k: string]: YamlValue } = {};

        if (val === '' || val === undefined) {
          // Value on next lines
          idx++;
          const childIndent = seqIndent + 2;
          const sub = parseBlock(lines, idx, childIndent);
          obj[key] = sub.value;
          idx = sub.nextIdx;
        } else if (val.startsWith('[')) {
          obj[key] = parseInlineArray(val);
          idx++;
        } else if (val.startsWith('{')) {
          obj[key] = parseInlineObject(val);
          idx++;
        } else {
          obj[key] = parseScalar(val);
          idx++;
        }

        // Continue reading sibling keys at deeper indent
        while (idx < lines.length) {
          while (idx < lines.length && lines[idx].text === '') idx++;
          if (idx >= lines.length) break;
          const nextLine = lines[idx];
          if (nextLine.indent <= seqIndent) break;
          if (nextLine.text.startsWith('- ')) break;

          const nextColon = nextLine.text.match(/^([^:]+):\s*(.*)/);
          if (nextColon) {
            const nk = nextColon[1].trim();
            const nv = nextColon[2].trim();
            if (nv === '' || nv === undefined) {
              idx++;
              const sub = parseBlock(lines, idx, nextLine.indent + 2);
              obj[nk] = sub.value;
              idx = sub.nextIdx;
            } else if (nv.startsWith('[')) {
              obj[nk] = parseInlineArray(nv);
              idx++;
            } else if (nv.startsWith('{')) {
              obj[nk] = parseInlineObject(nv);
              idx++;
            } else {
              obj[nk] = parseScalar(nv);
              idx++;
            }
          } else {
            break;
          }
        }

        arr.push(obj);
        continue;
      }

      // Simple scalar
      arr.push(parseScalar(after));
      idx++;
      continue;
    }

    break;
  }

  return { value: arr, nextIdx: idx };
}

function parseMappingBlock(lines: Line[], startIdx: number, baseIndent: number): { value: { [key: string]: YamlValue }; nextIdx: number } {
  const obj: { [key: string]: YamlValue } = {};
  let idx = startIdx;

  while (idx < lines.length) {
    // Skip blanks
    while (idx < lines.length && lines[idx].text === '') idx++;
    if (idx >= lines.length) break;

    const line = lines[idx];
    if (line.indent < baseIndent) break;

    const colonMatch = line.text.match(/^([^:]+):\s*(.*)/);
    if (!colonMatch) {
      idx++;
      continue;
    }

    const key = colonMatch[1].trim();
    const val = colonMatch[2].trim();

    if (val === '' || val === undefined) {
      // Value is a nested block on subsequent lines
      idx++;
      // Find next non-blank line to determine child indent
      let peekIdx = idx;
      while (peekIdx < lines.length && lines[peekIdx].text === '') peekIdx++;
      if (peekIdx < lines.length && lines[peekIdx].indent > line.indent) {
        const sub = parseBlock(lines, peekIdx, lines[peekIdx].indent);
        obj[key] = sub.value;
        idx = sub.nextIdx;
      } else {
        obj[key] = null;
      }
    } else if (val.startsWith('[')) {
      obj[key] = parseInlineArray(val);
      idx++;
    } else if (val.startsWith('{')) {
      obj[key] = parseInlineObject(val);
      idx++;
    } else {
      obj[key] = parseScalar(val);
      idx++;
    }
  }

  return { value: obj, nextIdx: idx };
}

export function parse(yaml: string): YamlValue {
  const lines = getLines(yaml);
  const { value } = parseBlock(lines, 0, 0);
  return value;
}
