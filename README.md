# Ashfall TTRPG

**A Post-Apocalyptic Tabletop Roleplaying Game**

The world burned. Civilization fell. But humanity endures.

Ashfall is a d20-based TTRPG set 50-100 years after cascading catastrophes destroyed galactic civilization. It emphasizes tactical combat, gritty resource management, and a modular magic system called the Sigil System.

**Website:** [ashfallrpg.com](https://ashfallrpg.com)
**Discord:** [Join the Community](https://discord.gg/pTUYgRsXRc)
**License:** [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)

---

## What Makes Ashfall Different

- **3-Action Combat** — Move, Strike, and Bonus Action every turn. No dead turns.
- **8 Unique Archetypes** — Warrior, Gunslinger, Mystic, Medic, Technician, Operative, Diplomat, Channeler.
- **The Sigil System** — Build spells from modular components: Cantrip + Form + Metamagic = Spell Level.
- **Bounded Lethality** — Max +18 bonus cap. The wasteland never gets safe.
- **Gritty Rest Economy** — Short rests take 8 hours. Long rests take a week. Every bullet and bandage counts.
- **Humanity System** — Augmentations make you stronger but erode your connection to magic. Choose your path.

---

## Repository Structure

```
ashfall-ttrpg/
├── rules/                    # All game rules (source of truth)
│   ├── introduction.md       # Design philosophy, core mechanics
│   ├── character-creation.md # Species, backgrounds, attributes
│   ├── classes/              # 8 archetype files
│   ├── combat.md             # 3-action economy, attacks, damage
│   ├── magic.md              # Sigil System, spells, burnout
│   ├── equipment.md          # Weapons, armor, gear, chems, augmentations
│   ├── setting.md            # Kael Morra, factions, cultures, religions
│   ├── generators.md         # Random generation tables (GM toolkit)
│   ├── bestiary/             # Creature stat blocks (5 categories)
│   └── ...                   # Exploration, crafting, vehicles, etc.
├── site/                     # Astro website (ashfallrpg.com)
│   ├── src/                  # Components, layouts, pages
│   └── public/               # Images, illustrations, assets
├── bestiary/                 # Full bestiary source files
└── LICENSE                   # CC BY-NC-SA 4.0
```

---

## Contributing

We welcome contributions from the community. Here's how to get involved.

### Report Issues

Found a bug, typo, rules error, or broken link? Open an issue:

- **[Report a Bug](../../issues/new?template=bug-report.yml)** — Rules errors, broken links, site issues
- **[Share Feedback](../../issues/new?template=feedback.yml)** — Ideas, suggestions, balance opinions
- **[Submit a Playtest Report](../../issues/new?template=playtest-report.yml)** — Session results and observations

Or use the feedback button (speech bubble icon) on any page of the website.

### Submit Changes

1. **Fork this repository**
2. **Create a branch** for your change (`fix/typo-in-combat` or `feat/new-creature`)
3. **Make your changes** — edit the markdown files in `rules/` or the site code in `site/`
4. **Submit a pull request** with a clear description of what you changed and why

### What We're Looking For

- **Rules fixes** — Typos, unclear wording, math errors, contradictions between chapters
- **Balance feedback** — Backed by playtest data or detailed analysis
- **New creatures** — Follow the stat block format in `bestiary/` (see below)
- **Setting contributions** — New locations, NPCs, faction details, cultural additions
- **Website improvements** — Accessibility, mobile fixes, design polish
- **Translations** — Help make Ashfall accessible in other languages

### What to Avoid

- **Do not change the 4 design pillars** (3-Action Combat, Bounded Lethality, Gritty Rests, No Dead Turns) without discussion first
- **Do not rebalance archetypes** without playtest evidence — open a discussion issue instead
- **Do not add external dependencies** to the site (Astro + standard web stack only)

### Creature Stat Block Format

When contributing creatures, follow this format:

```markdown
### Creature Name
*Size Type, Disposition*
**CR X**

> Flavor text describing the creature.

**HP:** X | **DV:** X | **Speed:** X ft

| MIG | AGI | END | INT | WIS | PRE |
|---|---|---|---|---|---|
| X(+X) | X(+X) | X(+X) | X(+X) | X(+X) | X(+X) |

**Saves:** FORT +X, REF +X, WILL +X
**Skills:** Relevant +X
**Senses:** Darkvision X ft, passive Perception X

**Traits:**
- **Trait Name:** Description.

**Actions:**
- **Attack Name:** Melee/Ranged weapon attack, +X to hit, reach/range X ft.
  *Hit:* XdX+X damage type (X avg).

**Loot:** What the creature drops.
**Encounter Notes:** GM advice for running this creature.
```

---

## Running the Site Locally

```bash
cd site
npm install
npm run dev
```

The site reads rules directly from `rules/*.md` at build time. Edit a rules file and the site updates automatically.

---

## Current Version

**v0.5** — 8 balanced archetypes, the Sigil System for modular spell crafting, a complete setting with factions and cultures, 116 bestiary creatures, and a full GM toolkit with random generators.

---

## Credits

**Design & Development:** ByteSnap

---

## License

Ashfall is licensed under [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/).

You are free to share and adapt the material for non-commercial purposes, as long as you give credit and share under the same license.
