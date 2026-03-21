# Character Points

In the old world, you were what your training made you. In the Wasteland, you're what you *choose* to become.

**Character Points (CP)** are the currency of advancement. Every ability, technique, and discipline in Ashfall is available to any character willing to invest the CP and meet the prerequisites. There are no class-locked features — only choices, costs, and consequences.

Your chassis (see **Chassis**) determines your physical baseline. CP determines everything else.

### What CP Replaces

The Character Points system replaces the following existing systems:
- **Advancement Points (AP)** — All AP spending on class abilities is replaced by CP spending in shared skill trees. The total budget remains 205 (1 CP = 1 AP).
- **Cross-Training** — The 1.5x AP multiplier and 2-archetype cap are replaced by the escalating surcharge system, which is more nuanced and less punitive for moderate breadth.
- **Multiclassing** — The 20 AP entry cost for a second class is eliminated. Any character can invest in any tree from Level 1.
- **Archetype-Locked Doctrines** — Doctrines become universal free picks (1 at Level 1, 1 at Level 6), no longer tied to specific archetypes.

> **Note on abbreviations:** CP = Character Points (this file). BP = Burnout Points (see **Magic** — Burnout). These are separate systems with distinct abbreviations.

---

## CP Pool

### Starting CP

At Level 1, you receive **15 CP** to spend. Humans receive **20 CP** (per the Bonus Advancement species trait, which grants +5 bonus CP at Level 1).

### CP Per Level

You gain **10 CP** at each level from 2 through 20.

| Level | CP Gained | Cumulative CP |
|-------|-----------|---------------|
| 1 | 15 | 15 |
| 2 | 10 | 25 |
| 3 | 10 | 35 |
| 4 | 10 | 45 |
| 5 | 10 | 55 |
| 6 | 10 | 65 |
| 7 | 10 | 75 |
| 8 | 10 | 85 |
| 9 | 10 | 95 |
| 10 | 10 | 105 |
| 11 | 10 | 115 |
| 12 | 10 | 125 |
| 13 | 10 | 135 |
| 14 | 10 | 145 |
| 15 | 10 | 155 |
| 16 | 10 | 165 |
| 17 | 10 | 175 |
| 18 | 10 | 185 |
| 19 | 10 | 195 |
| 20 | 10 | 205 |

Unspent CP carries over between levels.

---

## Spending CP

### Ability Costs

Abilities are organized into **shared skill trees** (see **Skill Trees**). Each tree has three tiers of abilities, a capstone ability, and a signature capstone (Level 15+) at the top.

| Purchase | Base Cost | Prerequisites |
|----------|-----------|---------------|
| Tier 1 ability | 5 CP | None (any character can enter any tree) |
| Tier 2 ability | 10 CP | At least 1 Tier 1 ability in the same tree |
| Tier 3 ability | 15 CP | Level 5+, at least 1 Tier 2 ability in the same tree |
| Capstone ability | 25 CP | Level 10+, at least 2 Tier 3 abilities in the same tree |
| Signature capstone | 30 CP | Level 15+, capstone in same tree |

### Other Purchases

| Purchase | Cost | Prerequisites |
|----------|------|---------------|
| Attribute +1 | 10 CP | Maximum 20 |
| Weapon group proficiency | 5 CP | — |
| Martial weapon group proficiency | 8 CP | — |
| Medium armor proficiency | 10 CP | — |
| Heavy armor proficiency | 15 CP | Medium armor proficiency |
| Shield proficiency | 5 CP | — |
| Third save proficiency | 20 CP | Level 7+ |
| Skill proficiency | 2 CP (1 CP for Specialist chassis) | — |
| Skill expertise | 4 CP (2 CP for Specialist chassis) | Proficiency in the chosen skill |
| Advanced skill access | 3 CP (2 CP for Specialist chassis) | Level 3+, relevant skill proficiency |
| Cantrip | 15 CP / 12 CP (Leadership & Social tree Initiate+) / 10 CP (Divine Channeling or Medicine tree Initiate+) | — |
| Doctrine (passive bonus) | 0 CP | Free pick: 1 at Level 1, 1 at Level 6. Max 2 active. Replaceable on long rest. |

---

## Anti-Convergence Mechanics

The CP system uses three interlocking mechanisms to ensure that specialists outperform generalists in their niche while generalists maintain breadth as a legitimate tradeoff.

### 1. Escalating Tree Access Cost

The first tree you invest in costs nothing extra. Each additional tree beyond your second imposes a **cumulative surcharge** on all future **tree ability purchases** (Tier 1, 2, 3, and Capstone abilities — not Signature capstones). The surcharge does NOT apply to Other Purchases (attribute increases, skill proficiencies, armor/weapon proficiency, doctrines, cantrips, or save proficiency). The surcharge targets tree breadth specifically — it should not penalize a character for raising an attribute.

| Trees Invested In | Surcharge Per Purchase |
|--------------------|----------------------|
| 1-2 trees | +0 CP (no surcharge) |
| 3 trees | +1 CP per purchase |
| 4 trees | +2 CP per purchase |
| 5+ trees | +3 CP per purchase |

**"Invested in"** means you have purchased at least one Tier 1 ability from that tree. Buying a single Tier 1 ability to test a tree counts. The surcharge applies retroactively to all future purchases once you cross the threshold.

> **Example:** Kara (Striker chassis) has abilities in Ranged Combat and Martial Combat (2 trees, no surcharge). She buys a Tier 1 ability from Stealth & Subterfuge — her 3rd tree. All future CP purchases now cost +1 CP each (Tier 1 abilities cost 6 instead of 5, Tier 2 costs 11 instead of 10, etc.).

### 2. Depth Discounts

Deep investment in a single tree is rewarded. When you reach certain thresholds of total CP spent in one tree, future purchases in that tree cost less.

| CP Spent in One Tree | Discount |
|----------------------|----------|
| 20+ CP | -1 CP on future purchases in that tree |
| 40+ CP | -2 CP on future purchases in that tree |
| 60+ CP | -3 CP on future purchases in that tree |

Depth discounts stack with (offset against) the generalist surcharge. A specialist who puts 40+ CP into their primary tree and then dips a third tree pays -2 (depth) + +1 (surcharge) = net -1 CP per purchase in their primary tree.

**Minimum Cost:** No ability can cost less than half its base cost after all discounts and surcharges are applied (round up). A Tier 1 ability always costs at least 3 CP. A Tier 2 ability always costs at least 5 CP.

> **Example:** Marcus (Heavy chassis) has spent 45 CP in the Martial Combat tree. He gets -2 CP on all Martial Combat purchases. A Tier 3 ability costs him 13 CP instead of 15. If he also opens a 3rd tree, his Martial Combat purchases cost 13 + 1 = 14 CP (still cheaper than base).

### 3. Hard Tier Caps

No character can reach the highest tiers in every tree. These caps are absolute.

| Tier | Maximum Trees at This Tier |
|------|---------------------------|
| Tier 1 | Unlimited |
| Tier 2 | 4 trees maximum |
| Tier 3 | 2 trees maximum |
| Capstone | 1 tree maximum |

A character can dabble in many Tier 1 abilities but can only achieve deep mastery (Tier 3+) in two disciplines, and true pinnacle (Capstone) in one.

---

## Specialization Milestones

When you concentrate CP in a single tree, you unlock free passive bonuses that reward focus. These bonuses are automatic and do not cost CP.

| Milestone | Requirement | Bonus |
|-----------|-------------|-------|
| **Initiate** | 15+ CP spent in one tree | +1 to one skill associated with that tree (chosen when milestone is reached) |
| **Journeyman** | 30+ CP spent in one tree | Gain a minor passive ability thematic to the tree (defined per tree) |
| **Master** | 50+ CP spent in one tree | +1 to attack rolls, save DCs, or skill checks with abilities from this tree (defined per tree) |

These milestones are exclusive — you can only achieve Master in 1-2 trees at most, given the 205 CP budget. This ensures that deep specialists have tangible advantages that generalists cannot replicate.

---

## Doctrines

Doctrines transition from class-locked passive bonuses to universal flavor picks available to any character.

- **Cost:** Free (0 CP). Doctrines are flavor picks, not CP investments.
- **Limit:** Maximum 2 doctrines at any time. You gain 1 doctrine slot at Level 1 and a second at Level 6. You can replace a doctrine during a long rest.
- **Prerequisites:** None. Any character can take any doctrine. Doctrines no longer reference specific archetypes.
- **Effect:** Doctrines provide small, flavorful passive bonuses (+1-2 to specific rolls, minor conditional advantages). They are the "seasoning" of a build, not its foundation. Making doctrines cost CP would force them to compete with tree abilities, and tree abilities will always win — resulting in the doctrine system becoming vestigial.

> **Example doctrines:** Brute Force (+2 melee damage with two-handed weapons), Deadeye (+1 ranged damage at 30+ ft), Shadow Walker (advantage on Stealth in dim light), Combat Surgeon (healing abilities usable from 10 ft instead of touch).

---

## Talents

Talents remain a parallel advancement track, separate from CP spending. You gain talent slots at the same levels as the current system:

| Level | Talent Slots Gained | Total Slots |
|-------|-------------------|-------------|
| 1 | 0 | 0 |
| 2 | 1 | 1 |
| 4 | 1 | 2 |
| 7 | 1 | 3 |
| 9 | 1 | 4 |
| 12 | 1 | 5 |
| 14 | 1 | 6 |
| 18 | 1 (Legendary) | 7 |
| 19 | 1 (Legendary) | 8 |

**Tree-Gated Talents:** Some talents require minimum CP investment in a specific tree to select. Universal talents remain available to all characters. This replaces the current "class talent" restrictions.

| Talent Requirement | Example |
|-------------------|---------|
| Universal (no gate) | Tough, Alert, Durable |
| 10+ CP in Martial Combat | Weapon Bond, Sentinel |
| 10+ CP in Arcane Arts | Spell Sniper, War Caster |
| 10+ CP in Medicine | Field Medic, Plague Doctor |
| 15+ CP in any tree | Advanced talents requiring demonstrated investment |

---

## Mastery Paths

Mastery Paths (L11-15) remain as-is, but prerequisites are updated to reference chassis and CP investment instead of archetype names.

**Old prerequisite format:** "Warrior archetype, MIG 15+, END 14+"
**New prerequisite format:** "Heavy or Survivor chassis, 30+ CP in Martial Combat tree, MIG 15+, END 14+"

This opens Mastery Paths to cross-chassis builds. A Striker who invests heavily in Martial Combat can qualify for paths previously restricted to Warriors — they've earned it through CP investment.

---

## Example Builds

### Build A: Specialist Melee Fighter (Deep Specialist)

**Chassis:** Heavy | **Fantasy:** Warrior equivalent

| Level | CP Gained | Purchases | Trees | Cumulative |
|-------|-----------|-----------|-------|------------|
| 1 | 15 CP | Martial T1: Power Strike (5), Armor Mastery (5), Combat Stance (5) | 1 | 15/15 — *Initiate milestone (15+ CP) reached* |
| 2 | 10 CP | Martial T2: Shield Wall (10) | 1 | 25/25 |
| 3 | 10 CP | Martial T2: Extra Attack (10) | 1 | 35/35 — *Journeyman milestone (30+ CP) reached* |
| 4 | 10 CP | save 10 (no purchase) | — | 45 earned / 35 spent (10 saved) |
| 5 | 10 CP | Martial T3: Devastating Critical (15 - 1 depth = 14; uses 4 from savings) | 1 | 55 earned / 49 spent (6 saved) |
| 6 | 10 CP | Attribute +1 MIG (10) | — | 65 earned / 59 spent (6 saved) |
| 7 | 10 CP | Martial T3: Fortress Stance (15 - 2 depth = 13) | 1 | 75 earned / 72 spent (3 saved) — *Master milestone (50+ CP) reached* |
| 8 | 10 CP | save 10 | — | 85 earned / 72 spent (13 saved) |
| 9 | 10 CP | Attribute +1 END (10) | — | 95 earned / 82 spent (13 saved) |
| 10 | 10 CP | Martial Capstone: Immovable Object (25 - 3 depth = 22; uses 12 from savings) | 1 | 105 earned / 104 spent (1 saved) |

**Total CP in Martial Combat by L10:** 84 CP. **Trees:** 1 (Martial). **Capstone unlocked in:** 1 tree.
This character is devastating in melee. High HP (d12), heavy armor, capstone unlocked by L10. All CP flows into a single tree — maximum specialist depth with no breadth.

### Build B: Versatile Operative (Generalist)

**Chassis:** Specialist | **Fantasy:** Operative equivalent

| Level | CP Gained | Purchases | Trees | Cumulative |
|-------|----------|-----------|-------|------------|
| 1 | 15 CP | Stealth T1: Sneak Attack (5), Stealth T1: Evasion (5), Stealth T1: Lockpicking (5) | 1 | 15/15 |
| 2 | 10 CP | Stealth T2: Ambush (10) | 1 | 25/25 |
| 3 | 10 CP | Leadership T1: Deception Mastery (5), Leadership T1: Fast Talk (5) | 2 | 35/35 |
| 4 | 10 CP | Attribute +1 AGI (10) | — | 45/45 |
| 5 | 10 CP | Stealth T2: Shadow Step (10) | 1 | 55/55 — *Journeyman in Stealth at 35 CP* |
| 6 | 10 CP | Technology T1: Basic Hacking (5), Technology T1: Trap Detection (5) — *3rd tree, +1 surcharge starts* | 3 | 65/65 |
| 7 | 10 CP | *Save — banking CP for Assassinate* | — | 75 earned / 65 spent (10 saved) |
| 8 | 10 CP | Stealth T3: Assassinate (15 + 1 surcharge - 1 depth = 15; uses 10 saved + 5 earned) | 1 | 85 earned / 80 spent (5 saved) |
| 9 | 10 CP | Leadership T2: Misdirection (10 + 1 surcharge = 11; uses 5 saved + 6 earned) | 2 | 95 earned / 91 spent (4 saved) |
| 10 | 10 CP | Stealth T3: Ghost (15 + 1 surcharge - 2 depth = 14; uses 4 saved + 10 earned) | 1 | 105 earned / 105 spent (0 saved) — *Master in Stealth at 65 CP* |

**Total CP in Stealth by L10:** 65 CP. **Trees:** 3 (Stealth, Leadership, Technology). **Tier 3 in:** 1 tree (Stealth). **Tier 2 in:** 1 tree (Leadership).

**Note on CP banking:** Assassinate (15 CP) and Ghost (14 CP) both cost more than a single level's earnings (10 CP). To afford them, this character banks CP at Level 7 — skipping a purchase to accumulate 10 saved, then spends banked + earned in a later level. This is standard practice for expensive tree abilities. **Attribute +1 PRE** is deferred to Level 11+ (the L1–L10 window earns exactly 40 CP in levels 7–10, which is entirely consumed by Assassinate + Misdirection + Ghost; PRE cannot be added without pushing another purchase out of range).

This character is good at stealth (Tier 3), decent at social manipulation (Tier 2), and has basic hacking (Tier 1). They can't match the melee fighter's raw combat power, but they solve more types of problems.

### Comparison

| Metric | Build A (Specialist) | Build B (Generalist) |
|--------|---------------------|---------------------|
| Trees accessed | 1 | 3 |
| Highest tier reached | Capstone | Tier 3 |
| CP in primary tree | 84 | ~64 |
| Milestones earned | Master (primary) | Master (primary) |
| Surcharges paid | 0 | ~10 CP total |
| Combat power | Excellent (melee) | Good (ambush only) |
| Out-of-combat utility | Limited | Broad |

The specialist is clearly superior in melee combat (Capstone + Master milestone + more abilities). The generalist is clearly more versatile (3 trees, social + tech + stealth). Neither build is "wrong" — they represent genuine, meaningful choices.

---

## Edge Cases

### "Tier 1 Grazer" — Buying the best T1 from 8 trees

With 8 trees at Tier 1, the surcharge is +3 CP per purchase. Eight T1 abilities cost 5+5+5+6+7+8+8+8 = 52 CP. But these are all basic abilities — no character with only Tier 1 abilities can compete with a specialist who has Tier 3 + Capstone + Master milestone. The hard tier cap (T2 in max 4, T3 in max 2) prevents the grazer from ever reaching meaningful power in most trees.

**Verdict:** Legal but suboptimal. The system does not need to prevent this — the math punishes it naturally.

### "Dual Specialist" — Deep investment in 2 trees

Spending ~50 CP each in 2 trees (100 CP by L10) is viable. Both trees reach Tier 3, both earn Journeyman milestones. The character is strong in two areas but cannot reach any Capstone until late game (L15+ at best). This is the "dual-specialist" build pattern and is intentionally supported.

**Verdict:** Desirable outcome. The system should support this.

### "One-Trick Master" — All CP into one tree

A character who puts 105 CP into one tree by L10 has the Capstone, Master milestone, and maximum depth discounts. They are extremely powerful in their niche and nearly useless outside it. This mirrors the current "pure class with no cross-training" pattern.

**Verdict:** Viable and intentional. The depth discounts and milestones reward this, and the chassis provides baseline competence (HP, saves, proficiencies) outside the tree's specialty.

---

## Design Notes for Pipeline

**Why single pool, not split pools:**
Split pools (Combat CP + Utility CP + Magic CP) prevent convergence by fiat but add significant cognitive load and create feel-bad moments when you have 8 unspent Magic CP and no interest in magic. A single pool with cost scaling achieves the same anti-convergence effect more elegantly — you *can* generalize, but the math discourages it progressively. This mirrors Shadowrun's karma system, which is proven at scale.

**Why 1 CP = 1 AP:**
The existing 205 AP budget is already balanced across 20 levels. Changing the scale (e.g., 1 CP = 2 AP, total 410 CP) would provide finer granularity but require recosting every ability. The current costs (5/10/15 AP) already work — preserve them and adjust only the cross-training multiplier (which is replaced by the surcharge system).

**Why the surcharge replaces the cross-training multiplier:**
The current 1.5x cross-training cost is a flat tax on any cross-class investment. The escalating surcharge is more nuanced — your first cross-tree investment is free (2 trees, no surcharge), encouraging moderate breadth. Only the 3rd+ tree incurs cost, and the cost escalates. This is less punitive for "dual-class" builds and more punitive for "dip everything" builds — a better incentive structure.

**Why Capstone is limited to 1 tree:**
A character with 2 Capstones is strictly better than a character with 1 Capstone + Tier 3 in another tree. The hard cap ensures that every character has ONE signature ability at the top of their build, creating clear identity. "I'm the Immovable Object Martial Master" vs "I'm the Ghost Stealth Master" — this is the identity-defining choice that replaces archetype selection.

**Talent track preserved as separate:**
Folding talents into CP would make the single pool even more strained. Keeping talents on their own schedule (level-gated slots) gives characters reliable customization points that don't compete with tree progression. Tree-gating some talents by CP investment replaces the current "class talent" restriction more flexibly.
