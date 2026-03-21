# Cross-Training

> **v0.5 Classless System:** Cross-training is **replaced** by the Character Points (CP) skill tree system. Any character can spend CP in any of the 11 shared trees without the 1.5x cost multiplier or 2-archetype cap described below. The escalating tree surcharge (see **Character Points**) takes its place as the anti-convergence mechanism. This chapter is retained for reference and for GMs running pre-v0.5 content.

Cross-Training allows characters to learn abilities from other archetypes without taking levels in those archetypes. It represents studying under mentors, adapting enemy techniques, or natural talent crossing disciplinary boundaries.

**Design Philosophy:** Cross-Training is the recommended path for "I want a taste of another archetype." Traditional multiclassing (taking levels in multiple archetypes) remains available for players who want a full dual-archetype identity, but Cross-Training is simpler, less punitive, and more flexible.

---

## How Cross-Training Works

### Basic Rules

1. **Spend CP to buy abilities from another archetype's skill trees** at an increased cost.
2. **You stay in your own archetype** — you do not take levels in the other archetype, and your archetype progression is uninterrupted.
3. **You can cross-train from at most 2 other archetypes** (your own + 2 others = 3 total skill tree pools).

### CP Costs

Cross-trained abilities cost **1.5x their normal CP cost** (rounded up):

| Ability Tier | Normal CP Cost | Cross-Training CP Cost | Level Requirement |
|-------------|---------------|----------------------|-------------------|
| Tier 1 | 5 CP | 8 CP | Any level |
| Tier 2 | 10 CP | 15 CP | Level 5+ |
| Tier 3 | 15 CP | 23 CP | Level 10+ |

### Prerequisites

**Attribute Gate:** You must have 13+ in the target archetype's primary attribute to cross-train from it.

| Archetype | Required Attribute |
|-----------|-------------------|
| Warrior | Might 13 or Endurance 13 |
| Gunslinger | Agility 13 |
| Mystic | Intellect 13 |
| Technician | Intellect 13 |
| Medic | Wisdom 13 |
| Operative | Agility 13 |
| Diplomat | Presence 13 |
| Channeler | Wisdom 13 |
| Scavenger | Endurance 13 or Wisdom 13 |
| Infiltrator | Intellect 13 |
| Psion | **Cannot be cross-trained** (see Restricted Abilities) |
| Mutant | Endurance 13 or Might 13 |

**Tier Prerequisites:** You must purchase a Tier 1 ability before a Tier 2 ability, and a Tier 2 before a Tier 3, within the same skill tree. Cross-training does not bypass tier requirements.

---

## The Dedication Lock-In

**This is the core anti-dip mechanism.** Inspired by PF2E's Dedication system, the lock-in prevents shallow cherry-picking across many archetypes.

### The Rule

**After cross-training your first ability from a new archetype, you must purchase at least 2 total abilities from that archetype before you can begin cross-training from a third archetype.**

### How It Works

1. **First cross-train:** You purchase Power Strike (Tier 1, 8 CP) from the Warrior's Combat Mastery tree. You are now **committed** to the Warrior cross-training track.
2. **Second cross-train:** Before you can open a third archetype, you must buy a second ability from any Warrior skill tree. You choose Armor Mastery (Tier 1, 8 CP) from Fortification.
3. **Lock-in satisfied:** With 2 Warrior abilities purchased, you may now open a second cross-training archetype (e.g., Mystic).
4. **Second archetype lock-in:** Same rule applies — you must buy 2 Mystic abilities before opening a hypothetical third (but you can't; max is 2 other archetypes).

### Why This Matters

Without the lock-in, a character could cherry-pick the single best Tier 1 ability from 8 different archetypes. The lock-in ensures that cross-training represents genuine investment in another discipline, not just grabbing the "best in slot" ability from each archetype.

**Example of what the lock-in prevents:**
- WITHOUT lock-in: An Operative could grab Power Strike (Warrior), Mage Armor (Mystic), Protective Injection (Medic), System Breach (Technician), and Commanding Presence... wait, that's an archetype feature. But the point stands — no shallow sampling from everything.
- WITH lock-in: An Operative must commit to 2 Warrior abilities before branching to Mystic. This means spending 16+ CP on Warrior skills, a meaningful investment.

---

## Restricted Abilities

Some abilities are too fundamental to an archetype's identity to be cross-trained. These represent years of specialized training or innate archetype properties that cannot be replicated through casual study.

### Cannot Be Cross-Trained

| Ability | Archetype | Reason |
|---------|-----------|--------|
| Extra Attack | Warrior, Gunslinger, Channeler | Core combat identity |
| Sneak Attack | Operative | Defines burst damage model |
| Spell Crafting | Mystic | Core magic system |
| Channel Energy | Channeler | Fundamental archetype mechanic |
| Drone Companion | Technician | Requires Neural Interface |
| Silver Tongue | Diplomat | Innate social gift |
| Combat Stimulants | Medic | Requires specialized medical training |
| Dead Eye | Gunslinger | Core archetype capstone |
| Scrapyard Strike | Scavenger | Core archetype damage mechanic (requires Salvage Dice) |
| Scrounger's Instinct | Scavenger | Foundational archetype feature (passive loot detection) |
| Improvised Arsenal | Scavenger | Core weapon proficiency (tied to archetype identity) |
| Assess Target | Infiltrator | Core intelligence mechanic (requires Intel Dice) |
| Contingency | Infiltrator | Fundamental archetype feature (prepared gambits) |
| Intel Dice | Infiltrator | Core resource system (archetype-specific) |
| Exploit Weakness | Infiltrator | Core damage mechanic (requires Intel Dice) |
| **ALL Psion abilities** | **Psion** | **Psionics is innate neurological power, not learnable. "Psionics cannot be learned by non-Psions through CP expenditure (you either have the awakening or you don't)." — rules/classes/psion.md** |
| Mutation system | Mutant | Biological adaptations (Predator Claws, Carapace, Regeneration, Venomous, Prehensile Limbs, Heightened Senses — all innate biological features, not teachable skills) |
| Adapt | Mutant | Mutation swapping is biological (tied to Mutant physiology) |
| Mutation Surge | Mutant | Surge riders are mutation-specific (biological, not technique) |
| Feral Evolution | Mutant | Core capstone (biological transformation, not learnable) |
| Strain Dice | Mutant | Core resource system (archetype-specific, mutation-linked) |

### Psion: Complete Cross-Training Restriction

The Psion is the **only archetype in Ashfall that is entirely restricted from cross-training**. This is by explicit design:

> *"Psionic power comes from within — from the Psion's own neural architecture. Psionics cannot be learned by non-Psions through CP expenditure (you either have the awakening or you don't)."* — Psion archetype description

**What this means in practice:**
- You **cannot** spend CP to learn any Psion ability through cross-training
- The Psion does not appear in the "Specifically Allowed" cross-training list
- The Psion's attribute gate row reads "Cannot be cross-trained" — there is no attribute requirement because there is no path
- Characters who want psionic abilities must **multiclass into Psion** (biological species only, WIS 13+, narrative justification for awakening)
- The Dedication Lock-In does not apply to Psion because you cannot begin cross-training from them

**Why this restriction is stronger than other classes:** Other restricted abilities (Extra Attack, Sneak Attack, Channel Energy) are individual features that are too archetype-defining to share — but the rest of those archetypes have cross-trainable skill trees. The Psion has **nothing** cross-trainable because the entire archetype is built on a biological foundation (Focus, Psi Strike, Disciplines, Surges) that requires the awakening event.

### Specifically Allowed Cross-Training

These are the abilities most suited to cross-training — they represent learnable skills rather than innate archetype identity:

**From Warrior:**
- Combat Mastery tree (all tiers): Martial techniques anyone can learn
- Fortification tree (Tier 1-2): Defensive training
- Tactical Operations tree (Tier 1): Basic leadership

**From Gunslinger:**
- Marksmanship tree (Tier 1-2): Ranged training
- Gunsmith tree (all tiers): Weapon maintenance
- Skirmisher tree (Tier 1): Movement techniques

**From Mystic:**
- Esoteric Knowledge tree (Tier 1-2): Magical lore (does not grant spell slots)
- Arcane Defense tree (Tier 1): Basic magical protection

**From Technician:**
- Engineering tree (Tier 1-2): Gadget building
- Cyberwarfare tree (Tier 1-2): Hacking skills
- Augmentation Tech tree (Tier 1): Basic implant installation

**From Medic:**
- Trauma Surgery tree (Tier 1-2): First aid and field medicine
- Pharmacology tree (Tier 1-2): Drug and stim crafting
- Field Support tree (Tier 1): Basic combat medicine

**From Operative:**
- Infiltration tree (all tiers): Lockpicking and security
- Recon tree (Tier 1-2): Scouting and surveillance

**From Diplomat:**
- Leadership tree (Tier 1-2): Tactical command
- Negotiation tree (Tier 1): Social techniques
- Manipulation tree (Tier 1): Intimidation techniques

**From Channeler:**
- Battle Channeling tree (Tier 1): Basic divine combat (requires Wisdom 13)
- Spirit Bond tree (Tier 1): Spirit communication
- Resilience tree (Tier 1-2): Mental fortitude training

**From Scavenger:**

All Scavenger abilities are learned skills — improvisation, combat maneuvers, and resource management developed through wasteland survival. Cross-training represents studying under a Scavenger mentor or surviving alongside one long enough to pick up their tricks.

- **Scrapper tree (Tier 1-2):** Combat techniques using improvised weapons and debris. Shrapnel Throw (ranged improvised attack), Relentless Scrapper (bonus damage when bloodied). These are fighting techniques anyone can learn from a scrapper.
- **Salvager tree (Tier 1-2):** Resource extraction skills. Efficient Salvage (more materials from salvage checks), Field Strip (quickly disassemble equipment for parts). Practical survival skills, not archetype-defining features.
- **Survivor tree (Tier 1):** Wasteland Gut (advantage on Fortitude saves against ingested toxins and contaminated food/water). Basic survival conditioning.

*Restricted (cannot cross-train):* Scrapyard Strike, Scrounger's Instinct, Improvised Arsenal, Salvage Dice system, Wasteland Ingenuity capstone, all Tier 3 abilities.

> **Niche protection:** Cross-trained Scrapper abilities give decent improvised combat utility, but without Scrapyard Strike and Salvage Dice, the cross-trainer can't match a Scavenger's sustained damage or resource generation.

**From Infiltrator:**

Infiltrator abilities are learned skills — espionage, tactical analysis, and psychological manipulation developed through intelligence training. Cross-training represents formal instruction or field experience working alongside intelligence operatives.

- **Tradecraft tree (Tier 1):** Deep Cover (maintain cover identities, resist interrogation). Espionage fundamentals that any character with INT 13+ can learn from an intelligence mentor.
- **Field Operations tree (Tier 1-2):** Tactical Assessment (analyze enemy formations, share tactical intel with allies), Coordinated Exploit (set up allies for advantage on attacks against assessed targets). These are the most attractive cross-training options — genuine team utility that any martial or support character benefits from.
- **Subversion tree (Tier 1):** Sow Doubt (demoralize enemies, impose disadvantage on their next action). Psychological warfare basics.

*Restricted (cannot cross-train):* Assess Target, Contingency, Intel Dice system, Exploit Weakness, Mastermind capstone, Subversion Tier 2+, all Tier 3 abilities.

> **Niche protection:** Field Operations T1-2 is the prize for cross-trainers — Tactical Assessment + Coordinated Exploit give excellent team support. But without Assess Target and Intel Dice, the cross-trainer can't generate the detailed target analysis that powers the Infiltrator's full kit.

**From Psion:**

**Psion abilities cannot be cross-trained.** Psionics is an innate neurological capability, not a learnable discipline. See "Psion: Complete Cross-Training Restriction" above.

Characters who want psionic capabilities must multiclass into Psion (WIS 13+, biological species only).

**From Mutant:**

Mutant abilities are split between biological adaptations (innate, not teachable) and tactical optimization (learned skills). Cross-training represents studying mutation-based combat techniques and learning to fight like a Mutant — not growing claws or carapace.

- **Apex Predator tree (Tier 1):** Savage Strikes (bonus damage on natural weapon or unarmed attacks when you have advantage). A fighting technique — aggressive exploitation of openings — not a biological adaptation.
- **Thick Hide tree (Tier 1-2):** Damage Reduction (passive physical DR when not wearing heavy armor), Mutation Resilience (advantage on saves against mutation-targeting effects and environmental hazards). These represent physical conditioning and pain tolerance, not mutations.
- **Rapid Adaptation tree (Tier 1):** Quick Adapt (when hit by a damage type, gain resistance to it for 1 round, 1/encounter). This is a trained response — reading the attack and bracing — not an actual biological adaptation.

*Restricted (cannot cross-train):* All mutations, Mutation Surge, Adapt, Feral Evolution capstone, Strain Dice system, Evolved Biology, Multi-Limb Attack, all Tier 3 abilities.

> **Niche protection:** Cross-trained Mutant abilities give defensive toughness and an offensive edge, but without mutations, Adapt, and Mutation Surge, the cross-trainer has no access to the Mutant's shapeshifting versatility.

---

## Cross-Training vs. Traditional Multiclassing

| Aspect | Cross-Training | Traditional Multiclassing |
|--------|---------------|--------------------------|
| **Archetype progression** | Uninterrupted | Split between archetypes |
| **What you gain** | Specific skill tree abilities | Full L1 features + skill trees |
| **CP cost** | 1.5x normal | Normal (but you have fewer total CP to spend) |
| **Specialization access** | No | Yes (at 5+ levels in that archetype) |
| **Archetype features** | No (only skill tree abilities) | Yes (L1 features of new archetype) |
| **Mastery Path** | Unaffected | Only 1 regardless |
| **Best for** | "Splash of flavor" | "I am two things equally" |
| **Power trade-off** | Pay more CP, keep full archetype | Pay opportunity cost on progression |

### When to Cross-Train (Not Multiclass)

- You want 1-3 specific abilities from another archetype
- You don't want to delay your specialization or mastery path
- Your concept is "primarily X with a side of Y"
- You want tactical flexibility without structural commitment

### When to Multiclass (Not Cross-Train)

- You want the L1 archetype features (Combat Stance, Sneak Attack, Spell Crafting, etc.)
- You want a specialization from the second archetype
- Your concept is "equally X and Y"
- You want full access to the second archetype's restricted abilities

---

## Interaction with Talents

Cross-trained abilities **can** be enhanced by universal Talents but **cannot** be enhanced by the source archetype's Build Talents.

**Example:** A Warrior who cross-trains Mage Armor (Mystic, Arcane Defense Tier 1) benefits from the Mage Armor ability normally. However, they cannot take the Mystic's Arcane Resilience Talent (which enhances Arcane Ward) because they don't have Arcane Ward — they only have one specific ability from that tree.

**Exception:** If a universal Talent broadly applies (e.g., Tough grants +2 HP/level regardless of archetype), it works normally for cross-trained characters.

---

## Interaction with Bounded Accuracy

Cross-Training does not create new bonus types. All bonuses from cross-trained abilities follow normal stacking rules and are subject to the +18 bonus cap. The 1.5x CP cost ensures that cross-training is always less CP-efficient than staying in-archetype, preventing it from becoming the dominant strategy.

---

## Example Builds

### The Arcane Warrior (Warrior primary, Mystic cross-training)

A Warrior who learned basic magical defenses from a Mystic mentor.

**Requirements:** Intellect 13+

**Cross-Training Purchases:**
- Level 3: Mage Armor (Mystic, Arcane Defense T1) — 8 CP. Gains +4 DV when unarmored.
- Level 5: Spell Lore (Mystic, Esoteric Knowledge T1) — 8 CP. Learns 2 cantrips for utility.
- *Lock-in satisfied (2 Mystic abilities).*

**Total CP Spent on Cross-Training:** 16 CP (equivalent to ~1.5 levels of CP).
**Trade-off:** 16 fewer CP for Warrior skill trees. Still has full Warrior progression, specialization, mastery path.

### The Combat Medic (Medic primary, Warrior cross-training)

A field doctor who trained with soldiers to survive the front lines.

**Requirements:** Might 13 or Endurance 13

**Cross-Training Purchases:**
- Level 2: Armor Mastery (Warrior, Fortification T1) — 8 CP. Gains -2 physical damage.
- Level 4: Power Strike (Warrior, Combat Mastery T1) — 8 CP. Gains +1d6 damage/turn.
- *Lock-in satisfied (2 Warrior abilities).*
- Level 8: Locksmith (Operative, Infiltration T1) — 8 CP. Gains +5 to lockpicking.
- Level 10: Security Bypass (Operative, Infiltration T2) — 15 CP. Disables electronic security.
- *Second lock-in satisfied (2 Operative abilities).*

**Total CP Spent on Cross-Training:** 39 CP across 10 levels.
**Trade-off:** Significant CP investment means fewer Medic tree abilities. But the character can survive the front lines AND breach secure facilities — a unique niche.

### The Tech-Scout (Operative primary, Technician cross-training)

A spy who augments infiltration with hacking.

**Requirements:** Intellect 13

**Cross-Training Purchases:**
- Level 3: System Breach (Technician, Cyberwarfare T1) — 8 CP. Hacks electronic systems.
- Level 6: Digital Ghost (Technician, Cyberwarfare T2) — 15 CP. Invisible to electronic detection.
- *Lock-in satisfied (2 Technician abilities).*

**Total CP Spent on Cross-Training:** 23 CP.
**Trade-off:** Two fewer Operative tree abilities, but now invisible to both human perception (Stealth) and electronic detection (Digital Ghost). The Operative's dream.
