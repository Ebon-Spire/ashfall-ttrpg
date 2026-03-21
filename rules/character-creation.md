---
game_data: true
species:
  - name: Human
    attribute_bonus: "+1 to two different attributes"
    traits:
      - name: Versatile
        effect: Gain 1 bonus skill proficiency
      - name: Bonus Advancement
        effect: "+5 bonus CP at Level 1 (total 20 CP)"
  - name: Altered Human
    attribute_bonus: "+2 to one attribute"
    traits:
      - name: Elemental Resistance
        effect: "Choose one: Fire, Cold, Electric, Acid, or Poison resistance"
        choices: [Fire, Cold, Electric, Acid, Poison]
      - name: Wasteland Hardened
        effect: "Advantage on Fortitude saves vs environmental hazards (radiation, extreme weather, disease, contamination)"
      - name: Scar Tissue
        effect: "Gain temporary HP equal to proficiency bonus at start of each combat encounter"
  - name: Synthetic
    attribute_bonus: "+1 INT, +1 END"
    humanity: 0
    traits:
      - name: Constructed Resilience
        effect: Immune to poison and disease. No need to eat, drink, or breathe.
      - name: Synthetic Body
        effect: Cannot benefit from magical healing. Repaired via Technology check (DC 15, 10 min, 2d8 HP).
      - name: No Humanity
        effect: "Humanity score is permanently 0. Cannot learn or use magic in any form — no cantrips, no spells, no ritual casting, no magical items requiring attunement."
      - name: Chrome Compatible
        effect: "Augmentations have no Humanity cost. No social penalties from the Humanity threshold table. Maximum augmentations = 5 + END modifier."
  - name: Xylar
    attribute_bonus: "+1 INT, +1 WIS"
    traits:
      - name: Chitinous Exoskeleton
        effect: "+1 DV (stacks with worn armor). Resistance to falling damage."
      - name: Compound Vision
        effect: "Darkvision 60 ft. Cannot be flanked."
      - name: Resonance Echo
        effect: "Telepathy 30 ft (willing, line of sight). With another Xylar within 30 ft, both gain advantage on Perception."
      - name: Isolation Vulnerability
        effect: "Disadvantage on Will saves vs Frightened when no allies within 30 ft."
  - name: Kromath
    attribute_bonus: "+1 END, +1 PRE"
    traits:
      - name: Reptilian Scales
        effect: "+1 DV (stacks with worn armor). Resistance to acid damage."
      - name: Cold-Blooded Physiology
        effect: "Advantage on Fortitude vs heat exhaustion. Disadvantage on Fortitude vs cold exhaustion. Extreme Cold: exhaustion every 30 min."
      - name: Historical Memory
        effect: "Advantage on INT checks (History, Technology, Science) for pre-Fall tech, alien cultures, trade routes. 1/SR: ask GM one history question."
      - name: Patient Predator
        effect: "Readied attacks deal +1d6 damage when triggered."
  - name: Neo-Bestial
    attribute_bonus: "Varies by subtype"
    traits:
      - name: Engineered Resilience
        effect: "Advantage on saves against disease."
      - name: Chosen Name
        effect: "Gain proficiency in one skill of your choice."
      - name: Subtype Traits
        effect: "Choose subtype for additional traits and attribute bonus."
        choices:
          - {name: "Canine (+1 MIG, +1 WIS)", effect: "Pack Instinct (+1 ally attack within 5 ft). Scent Tracking (advantage Perception/Survival by smell)."}
          - {name: "Feline (+2 AGI)", effect: "Predator's Grace (climb speed, no fall damage ≤20 ft). Low-Light Hunter (darkvision 60 ft, Stealth advantage in dim/dark)."}
          - {name: "Simian (+1 MIG, +1 AGI)", effect: "Prehensile Limbs (climb speed, use feet as hands). Tool User (proficiency with one toolkit)."}
          - {name: "Avian (+1 AGI, +1 WIS)", effect: "Keen Senses (advantage all Perception). Hollow Bones (+5 speed, vulnerable to bludgeoning melee). Glide (30 ft horizontal from 10+ ft height)."}
          - {name: "Reptilian (+1 END, +1 MIG)", effect: "Thick Hide (+1 DV). Hold Breath (30 min, swim speed). Cold-Blooded (disadvantage cold exhaustion saves)."}
  - name: Alien Hybrid
    attribute_bonus: "+2 to one attribute"
    traits:
      - name: Alien Trait
        effect: "Choose one alien trait"
        choices:
          - {name: Amphibious, effect: "Swim speed = walk speed, breathe underwater"}
          - {name: Toxic Blood, effect: "Melee attackers in 5 ft take 1d4 acid (1d6 at L5). Vulnerable to Bleeding."}
          - {name: Adaptive Camouflage, effect: "1 action: advantage on Stealth while stationary. Disadvantage on Persuasion when shifting."}
          - {name: Echolocation, effect: "Perceive 30 ft without sight. Sonic damage causes Dazed 1 round."}
          - {name: Pheromone Glands, effect: "1/SR: 15 ft radius — Charmed (Will save) or +1 attacks allies 1 round. Breath-dependent."}
          - {name: Extra Limbs, effect: "Secondary arms: hold items, reload, interact as free action. Cannot attack or grapple."}
          - {name: Bioelectric Discharge, effect: "1/SR: 10 ft radius, 1d6 electric (2d6 at L5), Reflex half. Metal armor = disadvantage."}
backgrounds:
  - name: Wastelander
    skill_bonus: "Survival +2"
    feature: Advantage on foraging checks in wilderness terrain
  - name: Settlement Born
    skill_bonus: "Persuasion +2"
    feature: Find contacts in any settlement (1/long rest)
  - name: Nomad
    skill_bonus: "Athletics +2"
    feature: "Travel speed increased by 25% for your party when you navigate"
  - name: Corporate Remnant
    skill_bonus: "Technology +2"
    feature: "Access pre-Fall networks and databases (Technology DC 20, 1/long rest)"
  - name: Military Survivor
    skill_bonus: "Intimidation +2"
    feature: Proficiency with all martial weapons
  - name: Outcast
    skill_bonus: "Stealth +2"
    feature: Advantage on checks to find hidden paths or secret entrances
  - name: Caravan Runner
    skill_bonus: "Streetwise +2"
    feature: "Know major trade routes, rest stops, and danger zones. Party cannot become lost on established trade routes; identify safe camps automatically. Estimate fair market value of any item within 10% accuracy."
  - name: Vault Dweller
    skill_bonus: "Science +2"
    feature: "Read and understand pre-Fall technical documents without a check. 1/long rest when encountering pre-war tech, INT check (DC 15) to recall one useful fact about its function, dangers, or purpose."
  - name: Cult Survivor
    skill_bonus: "Insight +2"
    feature: "Advantage on Insight checks to detect lies, manipulation, or hidden motives. After observing a group for 1 hour, identify cult-like behavior patterns and the general method of manipulation."
  - name: Pit Fighter
    skill_bonus: "Acrobatics +2"
    feature: "Advantage on Initiative in confined spaces (rooms smaller than 40x40 ft). As 1 action, size up a combat opponent within 30 ft: Perception check (DC 12) to learn their fighting style and relative combat level."
  - name: Faction Operative
    skill_bonus: "Deception +2"
    feature: "Choose a major faction. You have a reliable contact within that faction who can provide information, arrange meetings, or offer limited assistance. Overuse or acting against the faction may damage the relationship."
    choices: [Hearthstone Compact, Iron Wolves, Convergence of the Lit Path, Ashen Veil, Dynaxis Solutions, Kethara Collective]
  - name: Resonance-Touched
    skill_bonus: "Arcana +2"
    feature: "Passively sense active magical effects within 60 ft (direction only, no specifics). First time targeted by a magical effect each combat, advantage on the saving throw."
  - name: Plague Survivor
    skill_bonus: "Medicine +2"
    feature: "Advantage on Fortitude saves vs disease/poison; detect contaminated substances 1/LR (no check)"
  - name: Ruin Delver
    skill_bonus: "Investigation +2"
    feature: "Detect structural instability within 30 ft; recall pre-Fall building layouts 1/SR"
  - name: Rift-Touched
    skill_bonus: "Perception +2"
    feature: "Sense dimensional anomalies/void-tainted creatures within 60 ft; reroll failed Will save 1/LR"
attributes: [MIG, AGI, END, INT, WIS, PRE]
attribute_names:
  MIG: Might
  AGI: Agility
  END: Endurance
  INT: Intellect
  WIS: Wisdom
  PRE: Presence
standard_array: [15, 14, 13, 12, 10, 8]
point_buy_points: 27
point_buy_costs:
  - {score: 8, cost: 0}
  - {score: 9, cost: 1}
  - {score: 10, cost: 2}
  - {score: 11, cost: 3}
  - {score: 12, cost: 4}
  - {score: 13, cost: 5}
  - {score: 14, cost: 7}
  - {score: 15, cost: 9}
modifier_table:
  - {min: 1, max: 1, mod: -5}
  - {min: 2, max: 3, mod: -4}
  - {min: 4, max: 5, mod: -3}
  - {min: 6, max: 7, mod: -2}
  - {min: 8, max: 9, mod: -1}
  - {min: 10, max: 11, mod: 0}
  - {min: 12, max: 13, mod: 1}
  - {min: 14, max: 15, mod: 2}
  - {min: 16, max: 17, mod: 3}
  - {min: 18, max: 19, mod: 4}
  - {min: 20, max: 20, mod: 5}
proficiency_by_level:
  - {min_level: 1, max_level: 4, bonus: 2}
  - {min_level: 5, max_level: 8, bonus: 3}
  - {min_level: 9, max_level: 12, bonus: 4}
  - {min_level: 13, max_level: 16, bonus: 5}
  - {min_level: 17, max_level: 20, bonus: 6}
cp_costs:
  - {name: "Skill tree ability (Tier 1)", cost: 5}
  - {name: "Skill tree ability (Tier 2)", cost: 10, requires: "Tier 1 in same tree"}
  - {name: "Skill tree ability (Tier 3)", cost: 15, requires: "Level 5+ and Tier 2"}
  - {name: "Skill proficiency", cost: 2, note: "1 CP for Specialists"}
  - {name: "Skill expertise", cost: 4, requires: "Proficient in skill", note: "2 CP for Specialists"}
  - {name: "Advanced skill", cost: 3, requires: "Level 3+ and prerequisite base skill at Proficient", note: "2 CP for Specialists. Max 2 per character (3 for Specialists)"}
  - {name: "Cantrip (non-caster)", cost: 15}
  - {name: "Cantrip (Diplomat)", cost: 12}
  - {name: "Cantrip (Channeler/Medic)", cost: 10}
  - {name: "Attribute increase (+1)", cost: 10}
free_proficiency_levels: [3, 8, 15]
player_choice_proficiencies: 2
starting_cp: 15
cp_per_level: 10
base_movement: 30
base_humanity: 10
---
# Character Creation

---

## Overview

Creating a character in Ashfall is a process of layered choices. Each decision — chassis, species, background, attributes — shapes who your character is mechanically and narratively. This chapter walks you through every step.

**Quick Reference — Character Creation Steps:**

1. Choose your **Chassis** (Heavy, Striker, Specialist, Adept, or Survivor) — see **Chassis**
2. Choose your **Species** (1 of 7) — see **Species** below
3. Choose your **Background** (1 of 18) — see **Backgrounds** below
4. **Roll or assign Attributes** (standard array: 15, 14, 13, 12, 10, 8)
5. Apply species and background modifiers
6. **Calculate Derived Stats:** HP (from chassis formula), Defense Value (DV), Initiative, Saving Throws, Humanity
7. Note your chassis **proficiencies** (armor, weapons, saves, and starting skill count)
8. **Choose skill proficiencies** (number based on chassis: Heavy 2, Striker 3, Adept 3, Survivor 4, Specialist 5) plus 2 bonus from personal history
9. Select starting **Doctrine** (1 free pick at Level 1 — see **Character Points**)
10. Receive your **starting equipment package** from your chassis — see **Chassis**
11. **Spend starting CP** (15 CP; 20 CP if Human) on skill tree abilities or save for later — see **Character Points** and **Skill Trees**

As you level:
- **Each level:** Gain 10 CP to spend in any skill tree (unspent CP carries over)
- **Level 2, 4, 7, 9, 12, 14:** Gain a talent slot (see **Talents**)
- **Level 6:** Gain a second free Doctrine pick
- **Level 11:** Qualify for a Mastery Path (see **Mastery Paths**)
- **Level 18-19:** Gain Legendary talent slots

---

## Core Attributes

All characters have **six primary attributes** rated from 1-20 (human average: 10):

### Might (MIG)
Physical power, raw strength, carrying capacity, melee damage.
- **Skills:** Athletics, Intimidation (physical)
- **Derived Stats:** Melee damage bonus, encumbrance limit, Fortitude saves

### Agility (AGI)
Reflexes, coordination, speed, finesse.
- **Skills:** Acrobatics, Stealth, Sleight of Hand, Piloting
- **Derived Stats:** Initiative, Defense Value, Reflex saves

### Endurance (END)
Physical resilience, stamina, health, survival.
- **Skills:** Endurance, Survival (physical aspects)
- **Derived Stats:** Hit Points, Fortitude saves, Exhaustion resistance

### Intellect (INT)
Reasoning, memory, technical knowledge, analytical thinking.
- **Skills:** Science, Technology, Investigation, Arcana, Engineering, Weapon Systems
- **Derived Stats:** Tech abilities, hacking DCs

### Wisdom (WIS)
Awareness, intuition, willpower, perception.
- **Skills:** Perception, Insight, Survival, Medicine, Navigation
- **Derived Stats:** Will saves, Burnout resistance

### Presence (PRE)
Charisma, force of personality, leadership, manipulation.
- **Skills:** Persuasion, Deception, Streetwise, Intimidation (social)
- **Derived Stats:** Will saves, social interaction, companion morale

### Attribute Generation

**Option 1 — Standard Array:** 15, 14, 13, 12, 10, 8. Assign each value to one attribute.

**Option 2 — Point Buy:** Start with all attributes at 8. You have 27 points. Each attribute increase costs:
- 8→9: 1 point
- 9→10: 1 point
- 10→11: 1 point
- 11→12: 1 point
- 12→13: 1 point
- 13→14: 2 points
- 14→15: 2 points

No attribute can exceed 15 before species modifiers.

**Option 3 — Rolled:** Roll 4d6, drop the lowest die, six times. Assign totals to attributes.

### Attribute Score Modifiers

```
Score 1:       -5
Score 2-3:     -4
Score 4-5:     -3
Score 6-7:     -2
Score 8-9:     -1
Score 10-11:    0
Score 12-13:   +1
Score 14-15:   +2
Score 16-17:   +3
Score 18-19:   +4
Score 20:      +5
```

---

## Derived Statistics

### Hit Points (HP)
Your capacity to absorb damage before falling unconscious or dying.

**At Level 1:** Determined by your chassis (see **Chassis**).

**Per Level (2+):** Roll your Hit Die + END modifier (minimum 1), or take the fixed value.

| Chassis | Hit Die | HP at Level 1 | HP per Level (2+) |
|---------|---------|----------------|-------------------|
| **Heavy** | d12 | 14 + END modifier | 1d12 (or 7) + END modifier |
| **Striker** | d8 | 10 + END modifier | 1d8 (or 5) + END modifier |
| **Specialist** | d8 | 10 + END modifier | 1d8 (or 5) + END modifier |
| **Adept** | d6 | 8 + END modifier | 1d6 (or 4) + END modifier |
| **Survivor** | d10 | 12 + END modifier | 1d10 (or 6) + END modifier |

### Initiative
Determines turn order in combat.

**Formula:** `AGI modifier + proficiency bonus + equipment modifiers`

*All characters add their proficiency bonus to initiative. Some abilities (e.g., Gunslinger's Quick Draw) grant additional initiative bonuses.*

### Defense Value (DV)
Your difficulty to hit in combat. Replaces Armor Class (AC).

**Formula:** `10 + AGI modifier + armor bonus + shield bonus + miscellaneous modifiers`

### Saving Throws
Three categories of saves, each tied to one or two attributes (use the higher modifier when two apply):

- **Fortitude (FORT):** END or MIG — resist physical effects (poison, disease, fatigue)
- **Reflex (REF):** AGI — dodge area effects (explosions, traps)
- **Will (WILL):** WIS or PRE — resist mental effects (fear, compulsion, illusion)

**Save Formula:** `d20 + higher attribute modifier + proficiency bonus (if trained)`

Your chassis grants proficiency in two saving throws (see **Chassis**).

### Humanity
Your biological and spiritual integrity. Starts at **10** for most characters. Exceptions:
- **Technicians** start at **9** (neural interface reduces Humanity by 1 at creation)
- **Mutants** start at **8** (their bodies have already been altered by post-Fall forces — radiation, bioweapons, or dimensional bleed. This does not affect their capacity for empathy; it reflects biological divergence from baseline human.)

**Used for:**
- Installing augmentations (each costs 1-3 Humanity)
- Magical capacity (each Humanity spent removes your highest available spell level)
- Resisting tech-magic interference

### Movement Speed
Base movement per action in Combat Mode.

**Standard:** 30 feet (6 squares)
**Modified by:** Species, armor, encumbrance, conditions

### Carrying Capacity

- **Light Load:** MIG score x 5 lbs (no penalties)
- **Medium Load:** MIG score x 10 lbs (-10 ft speed)
- **Heavy Load:** MIG score x 15 lbs (-20 ft speed, disadvantage on AGI checks)
- **Maximum Drag:** MIG score x 30 lbs (5 ft speed, cannot act effectively)

---

## Recommended Build Reference

Ashfall uses a **classless chassis + CP system** — you choose a chassis for starting stats and proficiencies, then spend **Character Points (CP)** in any skill trees that fit your concept. The twelve recommended build guides in *Classes* are curated CP-spending paths that produce iconic characters. You are not locked to any of them.

The table below shows the recommended chassis and role for each build. For full details, see *Classes* and *Chassis*.

### Recommended Build Comparison

| Recommended Build | Hit Die | Primary Stats | Role | Save Proficiencies | Magic Type |
|-------------------|---------|---------------|------|--------------------|------------|
| **Warrior** | d12 | MIG/END | Tank, striker | Fortitude, Reflex | None (15 CP/cantrip) |
| **Gunslinger** | d8 | AGI/WIS | Ranged DPS | Reflex, Will | None (15 CP/cantrip) |
| **Mystic** | d6 | INT/WIS | AOE mage, battlefield control | Will, Reflex | Full caster (7th-level cap) |
| **Technician** | d6 | INT/AGI | Pet/support, tech | Reflex, Will | None (tech replicates magic) |
| **Medic** | d8 | WIS/INT | Healer, support | Will, Fortitude | Half-caster (healing/support) |
| **Operative** | d6 | AGI/PRE | Stealth, burst damage | Reflex, Will | None (15 CP/cantrip) |
| **Diplomat** | d8 | PRE/WIS | Social, command, buffs | Will, Reflex | None (12 CP/cantrip) |
| **Channeler** | d8 | WIS/END | Hybrid warrior/mage | Fortitude, Will | Half-caster (all schools) |
| **Scavenger** | d8 | AGI/END | Resourceful generalist | Fortitude, Reflex | None (15 CP/cantrip) |
| **Infiltrator** | d8 | INT/PRE | Intelligence, tactical support | Will, Reflex | None (15 CP/cantrip) |
| **Psion** | d6 | MIG/WIS | Controller, damage | Will, Fortitude | Psionic (Focus system) |
| **Mutant** | d10 | MIG/END | Adaptive striker/bruiser | Fortitude, Reflex | None (15 CP/cantrip) |

### Warrior
*Steel, grit, and the will to stand when others fall.*

**Primary Attributes:** Might (MIG), Endurance (END)
**Hit Die:** d12 | **HP at Level 1:** 14 + END modifier
**Armor Proficiency:** All armor, shields
**Weapon Proficiency:** All weapons
**Save Proficiencies:** Fortitude, Reflex
**Skill Bonuses:** Athletics +2, Intimidation +2
**Key Features:** Combat Stance, Second Wind, Grit, Bodyguard, Extra Attack (L3), Unbreakable (L5)

Warriors are the party's frontline anchor. With the highest Hit Die in the game, damage reduction when bloodied, and the ability to intercept attacks on allies, they are built to absorb punishment and hold the line. See *Classes: Warrior* for full details.

### Gunslinger
*Precision incarnate — every bullet counts.*

**Primary Attributes:** Agility (AGI), Wisdom (WIS)
**Hit Die:** d8 | **HP at Level 1:** 10 + END modifier
**Armor Proficiency:** Light armor
**Weapon Proficiency:** All ranged weapons, simple melee weapons
**Save Proficiencies:** Reflex, Will
**Skill Bonuses:** Perception +2, Stealth +2
**Key Features:** Steady Aim, Quick Draw, Called Shot (L2), Extra Attack (L3), Dead Eye (L5)

Gunslingers are ranged damage dealers who make every shot count. Whether sniping from a rooftop or fighting through cover in close quarters, they combine patience, precision, and devastating burst damage. See *Classes: Gunslinger* for full details.

### Mystic
*Reality is negotiable — and you know how to negotiate.*

**Primary Attributes:** Intellect (INT), Wisdom (WIS)
**Hit Die:** d6 | **HP at Level 1:** 8 + END modifier
**Armor Proficiency:** None
**Weapon Proficiency:** Simple weapons only
**Save Proficiencies:** Will, Reflex
**Skill Bonuses:** Arcana +2, Investigation +2
**Key Features:** Spell Crafting, Arcane Ward, Ritual Casting (L2), Arcane Recovery (L3), Signature Spell (L5)

Mystics are the game's full casters, wielding a modular spell crafting system capped at 7th-level spells. They reshape battlefields but pay for that power with fragility. See *Classes: Mystic* for full details.

### Technician
*Where others see junk, you see potential.*

**Primary Attributes:** Intellect (INT), Agility (AGI)
**Hit Die:** d6 | **HP at Level 1:** 8 + END modifier
**Starting Humanity:** 9 (neural interface reduces Humanity by 1 at creation)
**Armor Proficiency:** Light armor
**Weapon Proficiency:** Simple weapons, sidearms (pistols, SMGs)
**Save Proficiencies:** Reflex, Will
**Skill Bonuses:** Technology +3, Science +2, Investigation +2
**Key Features:** Neural Interface, Jury-Rig, Drone Companion (L2), Overclock (L3), Masterwork (L5)

Technicians command drones, hack systems, and build gadgets that replicate magical effects through technology. Their unique action economy with a pet companion sets them apart. See *Classes: Technician* for full details.

### Medic
*Keeping people alive is the hardest job there is.*

**Primary Attributes:** Wisdom (WIS), Intellect (INT)
**Hit Die:** d8 | **HP at Level 1:** 10 + END modifier
**Armor Proficiency:** Light, Medium armor
**Weapon Proficiency:** Simple weapons, sidearms
**Save Proficiencies:** Will, Fortitude
**Skill Bonuses:** Medicine +2, Science +2, plus 2 of your choice
**Key Features:** Field Medic, Triage, Emergency Stabilization (L2), Combat Medic (L3), Miracle Worker (L5)

In the gritty rest economy where a full recovery takes a week, the Medic's short-rest healing is critical. They are half-casters with access to healing and support magic. See *Classes: Medic* for full details.

### Operative
*Shadows have value in the Wasteland.*

**Primary Attributes:** Agility (AGI), Presence (PRE)
**Hit Die:** d6 | **HP at Level 1:** 8 + END modifier
**Armor Proficiency:** Light armor
**Weapon Proficiency:** Simple weapons, sidearms, melee finesse weapons
**Save Proficiencies:** Reflex, Will
**Skill Bonuses:** Stealth, Deception, plus 3 of your choice (most of any build)
**Key Features:** Sneak Attack, Expertise, Cunning Action (L2), Uncanny Dodge (L3), Ghost Strike (L5)

Operatives are scouts, assassins, and infiltrators with the most skill proficiencies in the game. They strike from advantage and vanish before retaliation. See *Classes: Operative* for full details.

### Diplomat
*Words are weapons — and yours are loaded.*

**Primary Attributes:** Presence (PRE), Wisdom (WIS)
**Hit Die:** d8 | **HP at Level 1:** 10 + END modifier
**Armor Proficiency:** Light armor
**Weapon Proficiency:** Simple weapons, sidearms
**Save Proficiencies:** Will, Reflex
**Skill Bonuses:** Persuasion, Insight, plus 3 of your choice
**Key Features:** Silver Tongue, Commanding Presence, Duck and Cover, Inspire (L2), Rally Cry (L5)

Diplomats ensure **no dead turns** — Commanding Presence (free action) lets them contribute every round. They are force multipliers through buffs, inspiration, and social dominance. See *Classes: Diplomat* for full details.

### Channeler
*Magic in your bones, steel in your hand.*

**Primary Attributes:** Wisdom (WIS), Endurance (END)
**Hit Die:** d8 | **HP at Level 1:** 10 + END modifier
**Armor Proficiency:** Medium armor, shields
**Weapon Proficiency:** Simple weapons, martial melee weapons
**Save Proficiencies:** Fortitude, Will
**Skill Bonuses:** Arcana, Survival, plus 2 of your choice
**Key Features:** Channel Energy, Spiritual Sense (L2), Extra Attack (L3), Overflow (L5)

Channelers are hybrid warrior-mages — competent in melee with half-caster spellcasting and short-rest Channel Energy for healing or damage. See *Classes: Channeler* for full details.

### Scavenger
*The wasteland provides — if you know where to look.*

**Primary Attributes:** Agility (AGI), Endurance (END)
**Hit Die:** d8 | **HP at Level 1:** 10 + END modifier
**Armor Proficiency:** Light armor, medium armor
**Weapon Proficiency:** Simple weapons, sidearms
**Save Proficiencies:** Fortitude, Reflex
**Skill Bonuses:** Survival +2, Investigation +2
**Key Features:** Scrounger's Instinct, Improvised Arsenal, Salvage Dice, Makeshift Solution (L2), Scrapyard Strike (L3), Wasteland Ingenuity (L5)

Scavengers are resourceful generalists who turn the environment into a weapon. With proficiency in all improvised weapons (1d8 damage), a Salvage Dice resource pool, and the ability to create barricades, caltrops, and field explosives from junk, they adapt to any situation. See *Classes: Scavenger* for full details.

### Infiltrator
*Everyone has secrets. You collect them.*

**Primary Attributes:** Intellect (INT), Presence (PRE)
**Hit Die:** d8 | **HP at Level 1:** 10 + END modifier
**Armor Proficiency:** Light armor
**Weapon Proficiency:** Simple weapons, sidearms, finesse melee weapons
**Save Proficiencies:** Will, Reflex
**Skill Bonuses:** Deception +2, Insight +2
**Key Features:** Assess Target, Prepared for Anything, Intel Dice, Contingency (L2), Exploit Weakness (L3), Mastermind (L5)

Infiltrators are intelligence operatives who turn information into power. They study enemies to gain attack bonuses, create tactical advantages for the entire party, and maintain cover identities for social infiltration. They cannot be surprised. See *Classes: Infiltrator* for full details.

### Psion
*Your mind is a weapon — raw, barely controlled, and terrifying.*

**Primary Attributes:** Might (MIG), Wisdom (WIS)
**Hit Die:** d6 | **HP at Level 1:** 8 + END modifier
**Armor Proficiency:** Light armor
**Weapon Proficiency:** Simple weapons
**Save Proficiencies:** Will, Fortitude
**Skill Bonuses:** Perception +2, Insight +2
**Key Features:** Psionic Awakening, Psi Strike, Focus system, Centering (L2), Discipline Surge (L2), Psionic Overcharge (L5)

Psions are escalating controllers whose power grows as combat continues. Their Focus system starts at 0 each encounter and builds with each psionic action, increasing damage and save DCs — but pushing too far risks catastrophic Backlash. Psionics is not magic: it cannot be Counterspelled and functions in antimagic fields. **Species restriction:** Synthetics cannot be Psions. See *Classes: Psion* for full details.

### Mutant
*Your body is a battlefield between what you were and what you're becoming.*

**Primary Attributes:** Might (MIG), Endurance (END)
**Hit Die:** d10 | **HP at Level 1:** 12 + END modifier
**Starting Humanity:** 8 (see Humanity below)
**Armor Proficiency:** Light armor, medium armor
**Weapon Proficiency:** Simple weapons, natural weapons
**Save Proficiencies:** Fortitude, Reflex
**Skill Bonuses:** Athletics +2, Survival +2
**Key Features:** Mutagen Physiology, Mutations (3 known, 2 active), Strain Dice, Adapt (L2), Mutation Surge (L3), Feral Evolution (L5)

Mutants are adaptive melee combatants whose body is both weapon and armor. They choose from 6 mutations (Predator Claws, Carapace, Regeneration, Venomous, Prehensile Limbs, Heightened Senses) and can swap active mutations mid-combat. Feral Evolution transforms them into a devastating but exhaustion-costing combat form. See *Classes: Mutant* for full details.

---

## Species and Origin

![An avian scholar studies ancient texts, their feathered hands carefully turning weathered pages](/images/illustrations/avian-scholar.png)

Choose your character's species. Each provides unique mechanical traits and narrative flavor. Ashfall has **seven species**, each offering a genuinely different play experience.

| Species | Attribute Bonus | Key Trait | Play Style |
|---------|----------------|-----------|------------|
| **Human** | +1 to two attributes | Bonus CP, extra skill | Versatile generalist |
| **Altered Human** | +2 to one attribute | Elemental resistance, Wasteland Hardened, Scar Tissue | Environmental survivor |
| **Synthetic** | +1 INT, +1 END | No magic, unlimited chrome | Tech-focused, durable |
| **Xylar** | +1 INT, +1 WIS | Resonance Echo, chitin | Cooperative psychic, resilient |
| **Kromath** | +1 END, +1 PRE | Historical Memory, scales | Patient trader, cold-blooded |
| **Neo-Bestial** | +2 to one attribute (by subtype) | Subtype traits | Animal-specific specialist |
| **Alien Hybrid** | +2 to one attribute | Choose 1 alien trait | Customizable mixed heritage |

---

#### Human (Baseline)

![A weathered human survivor stands with arms crossed before a wasteland settlement](/images/illustrations/species-human.png)
The most numerous survivors, adaptable and resilient.

**Traits:**
- **Attribute Increase:** +1 to two different attributes of your choice
- **Versatile:** Gain 1 bonus skill proficiency
- **Bonus Advancement:** Gain +5 bonus CP at Level 1 (total 20 CP)

---

#### Altered Human (Post-Fall Mutation)

![An Altered Human with glowing veins of mutation energy beneath their skin](/images/illustrations/species-altered-human.png)

Humans transformed by radiation, bioweapons, or strange post-Fall energies. The first generation was scarred and sickened. The second generation adapted. Altered Humans are the survivors of survivors — their bodies have internalized the wasteland's worst and emerged harder for it. They are the most numerous species in the frontier settlements, because everything that could kill them already tried.

**Traits:**
- **Attribute Increase:** +2 to one attribute of your choice
- **Elemental Resistance:** Choose one damage type — Fire, Cold, Electric, Acid, or Poison. You have resistance to that damage type.
- **Wasteland Hardened:** You have **advantage on Fortitude saves** against environmental hazards: radiation exposure, extreme heat and cold, disease, contaminated food and water, and toxic atmospheres. Your body has been pressure-tested by the wasteland for two generations — what kills others merely makes you uncomfortable.
- **Scar Tissue:** At the start of each combat encounter, you gain **temporary HP equal to your proficiency bonus**. This represents accumulated resilience from a lifetime of injuries — your body has been broken and healed so many times that it absorbs punishment reflexively. These temporary HP last until depleted or until the encounter ends.

---

#### Synthetic (Android/Construct)

![A Synthetic with visible mechanical joints and a glowing amber eye](/images/illustrations/species-synthetic.png)
Artificial beings — some pre-war, others newly awakened. Synthetics are machines. Whatever quality allows organic creatures to channel magic — Humanity — does not exist in a Synthetic body. This is both their greatest limitation and their greatest freedom.

**Traits:**
- **Attribute Increase:** +1 INT, +1 END
- **Constructed Resilience:** Immune to poison and disease. You do not need to eat, drink, or breathe.
- **Synthetic Body:** You cannot benefit from magical healing (Vitae, Channel Energy, etc.). Instead, you must be repaired: a creature (including yourself) makes a Technology check (DC 15) as a 10-minute activity, restoring 2d8 HP on success.
- **No Humanity:** Your Humanity score is permanently **0**. You cannot learn or use magic in any form — no cantrips, no spells, no ritual casting, no magical items that require attunement. You cannot spend CP in the Arcane, Psionic, or Spirit magic trees. Cantrips cannot be purchased with CP.
- **Chrome Compatible:** Augmentations have **no Humanity cost** for you — install as many as your body can hold (maximum augmentations = 5 + END modifier). You do not suffer social penalties from the Humanity threshold table. You do not pay augmentation maintenance costs (your body integrates chrome natively).

**Build Restrictions:** Synthetics cannot spend CP in magic skill trees (Arcane, Psionic Disciplines, Spirit). All non-magic skill trees are available. A Synthetic following the Medic recommended build uses surgical healing exclusively — they cannot learn Vitae cantrips but can use all non-magical Medicine tree features.

---

#### Xylar (Insectoid)

![A Xylar with chitinous exoskeleton and bioluminescent patches](/images/illustrations/species-xylar.png)

*"You ask what it is like to be alone in my own skull. Imagine hearing music your entire life — every voice in harmony, every thought a thread in a symphony. Then silence. Just silence."* — Chitin-Singer Vexx, Xylar emissary

The Xylar arrived decades after the Fall, their colony ships limping in from a dying homeworld. Insectoid in form, with chitinous exoskeletons ranging from iridescent blue-black to mottled amber, the Xylar stand between four and seven feet tall depending on caste. What defines them is the **Resonance** — the shattered remnant of their species' hive-mind. Every Xylar feels its absence, and every Xylar copes with that silence differently. See **Setting** for full Xylar cultural details.

**Traits:**
- **Attribute Increase:** +1 INT, +1 WIS
- **Chitinous Exoskeleton:** +1 to Defense Value (stacks with worn armor). Your body is covered in plates of natural chitin — not as flexible as skin, but far harder. You have resistance to falling damage.
- **Compound Vision:** You have darkvision out to 60 feet. You cannot be flanked (enemies do not gain advantage from flanking against you). Your peripheral vision spans nearly 270 degrees.
- **Resonance Echo:** You retain a fragment of the Xylar hive-mind. You can communicate telepathically with any willing creature within 30 feet that you can see. This communication is silent and private. Additionally, when you and at least one other Xylar are within 30 feet of each other, both of you gain **advantage on Perception checks** — the Resonance flickers to life between you, sharing sensory data instinctively.
- **Isolation Vulnerability:** The severed hive-mind left a wound. You have **disadvantage on Will saves against effects that cause the Frightened condition** when no allies are within 30 feet of you. The silence of isolation makes fear harder to resist. This disadvantage does not apply if any ally (not just Xylar) is nearby.

**Xylar and Builds:** Xylar make strong Psions (their Resonance is a natural psionic substrate), capable Technicians (their precision is legendary), and effective Infiltrators (compound vision and telepathy are powerful intelligence tools). Their INT/WIS bonus and psychic traits also synergize with Mystics and Channelers.

---

#### Kromath (Reptilian)

![A Kromath merchant in robes, holding a data-slate with patient amber eyes](/images/illustrations/species-kromath.png)

*"The Kromath sold us medicine when no one else would trade. Fair price, clean goods. Then they came back ten years later and called in the favor. That favor cost us a war."* — Jorin Blackwell, mayor of Dusthaven

Towering reptilian beings — scaled, heavy-browed, with teeth built for tearing and eyes built for patience. The Kromath were interstellar traders long before humanity's civilization crumbled, and their decentralized merchant fleets weathered the Fall better than most. A Kromath lives for two centuries or more, and this longevity shapes everything about their society: they think in generations, hold grudges across lifetimes, and honor debts with terrifying precision. See **Setting** for full Kromath cultural details.

**Traits:**
- **Attribute Increase:** +1 END, +1 PRE
- **Reptilian Scales:** +1 to Defense Value (stacks with worn armor). Dense, overlapping scales cover your body. You have resistance to acid damage.
- **Cold-Blooded Physiology:** You have **advantage on Fortitude saves against heat-based exhaustion** (Harsh and Extreme Heat). However, you have **disadvantage on Fortitude saves against cold-based exhaustion** (Harsh and Extreme Cold). In Extreme Cold, you gain exhaustion every 30 minutes instead of every hour. Your body slows when the temperature drops — a fundamental vulnerability your species never evolved past.
- **Historical Memory:** Your species' long lifespan and oral tradition grant you access to knowledge others have lost. You have **advantage on INT checks** (History, Technology, Science) related to **pre-Fall technology, alien cultures, or trade routes**. Once per short rest, you can declare "I remember this" — ask the GM one question about the history or function of a location, object, or faction, and receive a truthful (if potentially incomplete) answer. The GM determines whether your character would plausibly have this knowledge.
- **Patient Predator:** When you take the Ready action (preparing an attack or action for a specific trigger), the readied attack deals an additional **1d6 damage** if triggered. Your species hunted by ambush for millennia before developing civilization — patience is in your blood.

**Kromath and Builds:** Kromath excel as Diplomats (PRE bonus plus Historical Memory makes them devastating negotiators), Channelers (END/PRE and their patient combat style), and Warriors (natural armor and predatory instincts). Their Cold-Blooded Physiology creates genuine environmental challenges that reward planning.

---

#### Neo-Bestial (Uplifted Animal)

![A canine Neo-Bestial in tactical gear, other animal types silhouetted behind](/images/illustrations/species-neo-bestial.png)

*"They gave us minds so we could understand orders. They didn't expect us to understand injustice."* — Sable, Neo-Bestial elder, former K-9 combat unit

Before the Fall, corporations engineered animals into sapient laborers — dogs bred for loyalty became soldiers, primates bred for dexterity became factory workers, raptors bred for aggression became living weapons. The Fall shattered the chains. Neo-Bestials walked out of the labs into a world that no longer controlled them. They formed packs, tribes, communes. They named themselves. See **Setting** for full Neo-Bestial cultural details.

Choose a **subtype** that reflects your animal heritage. Each subtype provides different traits.

**Shared Traits (All Neo-Bestials):**
- **Engineered Resilience:** You have advantage on saves against disease. Your enhanced biology was designed to resist contamination in hostile work environments.
- **Chosen Name:** You gain proficiency in one skill of your choice. Your identity is self-made — you define yourself by what you choose to learn, not what you were built to do.

**Subtype: Canine (Wolf, Dog, Hyena)**
- **Attribute Increase:** +1 MIG, +1 WIS
- **Pack Instinct:** When an ally within 5 feet of you makes an attack roll against a creature you can see, they gain +1 to the roll. This bonus does not stack with multiple Canine characters. Your engineered pack-bonding instincts translate into combat coordination.
- **Scent Tracking:** You have advantage on Perception and Survival checks that rely on smell. You can track creatures by scent alone (Survival DC varies by age of trail and conditions).

**Subtype: Feline (Cat, Panther, Tiger)**
- **Attribute Increase:** +2 AGI
- **Predator's Grace:** You have a climbing speed equal to your walking speed. You take no damage from falls of 20 feet or less (your body instinctively adjusts). Falls above 20 feet deal damage as normal minus 20 feet.
- **Low-Light Hunter:** You have darkvision out to 60 feet. You have advantage on Stealth checks made in dim light or darkness.

**Subtype: Simian (Ape, Monkey)**
- **Attribute Increase:** +1 MIG, +1 AGI
- **Prehensile Limbs:** You have a climbing speed equal to your walking speed. You can use your feet as hands for the purpose of holding items, interacting with objects, and maintaining grip while climbing. This effectively gives you a free hand while climbing (you can attack or cast while hanging from a surface).
- **Tool User:** You gain proficiency with one toolkit of your choice (Technology toolkit, Medical kit, etc.). Pre-war engineers designed your ancestors for complex manual tasks — the aptitude remains.

**Subtype: Avian (Raptor, Corvid, Owl)**
- **Attribute Increase:** +1 AGI, +1 WIS
- **Keen Senses:** You have advantage on all Perception checks. Your visual acuity far exceeds human capability — you can read text at 200 feet and spot movement at extreme range.
- **Hollow Bones:** Your movement speed increases by 5 feet. However, you have **vulnerability to bludgeoning damage** from melee attacks. Your lightweight skeleton is fast but fragile.
- **Glide:** If you fall or jump from a height of at least 10 feet, you can glide horizontally up to 30 feet, reducing your falling speed to 60 feet per round (no falling damage if you land during the glide). You cannot gain altitude. Vestigial wing structures and light bones make this possible, though true flight is beyond you.

**Subtype: Reptilian (Lizard, Crocodilian)**
- **Attribute Increase:** +1 END, +1 MIG
- **Thick Hide:** +1 to Defense Value (stacks with worn armor). Your engineered scales are dense and overlapping.
- **Hold Breath:** You can hold your breath for up to 30 minutes. You have a swim speed equal to your walking speed.
- **Cold-Blooded:** You have disadvantage on Fortitude saves against cold-based exhaustion. In Extreme Cold, you gain exhaustion every 30 minutes instead of every hour.

**Neo-Bestials and Builds:** Neo-Bestials are diverse enough that every subtype pairs differently. Canines make natural Warriors and Operatives (pack tactics + scent). Felines excel as Infiltrators and Operatives (stealth + mobility). Simians suit Technicians and Scavengers (tool proficiency + climbing). Avians favor Gunslingers and Infiltrators (perception + elevation). Reptilians lean toward Warriors and Channelers (durability + patience).

---

#### Alien Hybrid (Mixed Heritage)

![An Alien Hybrid with bioluminescent markings and heterochromatic eyes](/images/illustrations/species-alien-hybrid.png)

![A construct guardian stands vigilant, mechanical eyes scanning for threats to their settlement](/images/illustrations/construct-guardian.png)

Beings with mixed human and alien heritage, exhibiting unusual traits. This species covers characters whose non-human ancestry doesn't fit neatly into the Xylar, Kromath, or Neo-Bestial categories — half-breeds, experimental subjects, rare alien refugees, or those with heritage from species not yet documented in the known wasteland. If you want to play a character of primarily Xylar, Kromath, or Neo-Bestial heritage, use those species entries instead.

**Traits:**
- **Attribute Increase:** +2 to one attribute of your choice

##### Alien Trait (Choose one)

*Your alien heritage manifests in a biological trait inherited from your non-human ancestry. This is a permanent, stable feature — part of your DNA, not a mutation or augmentation.*

- **Amphibious:** You have a swim speed equal to your walking speed and can breathe underwater indefinitely. *Gill slits, modified lungs, or osmotic skin let you thrive in aquatic environments.*

- **Toxic Blood:** When a creature within 5 feet deals slashing or piercing damage to you with a melee attack, the attacker takes **1d4 acid damage** as your blood sprays from the wound. This increases to **1d6** at character level 5. *Your blood is corrosive — a defense mechanism inherited from species that evolved on hostile worlds.* **Downside:** You are **vulnerable to the Bleeding condition** — when you gain the Bleeding condition, the damage per round is doubled (your blood doesn't clot normally).

- **Adaptive Camouflage:** As **1 action**, your skin shifts color and texture to match your immediate surroundings. You gain **advantage on Stealth checks** while you remain stationary (no movement on your turn). The effect ends when you move more than 5 feet, attack, cast a spell, or take damage. *Chromatophores inherited from cephalopod-like ancestors ripple across your skin, matching stone, metal, or foliage in seconds.* **Downside:** When your skin is visibly shifting (the first round after activation, or when it deactivates), you have **disadvantage on Persuasion checks** — the effect is deeply unsettling to watch.

- **Echolocation:** You can perceive your surroundings within **30 feet without relying on sight**. Within this range, you are effectively immune to the Blinded condition for purposes of attacking or detecting creatures. This sense does not penetrate solid barriers thicker than 1 foot. *You emit ultrasonic pulses that map your environment in three dimensions — a gift from ancestors who hunted in lightless environments.* **Downside:** Sonic damage (thunder, Sonus cantrip, concussion grenades) causes you to lose this sense for **1 round** and you become **Dazed** until the end of your next turn. Loud environments (explosions, heavy machinery) impose disadvantage on Echolocation-based Perception checks.

- **Pheromone Glands:** Once per short rest, as **1 action**, you release a cloud of bioactive pheromones in a **15-foot radius** centered on you. Choose one effect:
  - **Calming Pheromones:** All creatures in the area that can breathe must make a **Will save (DC 8 + proficiency + PRE modifier)** or become **Charmed** by you for 1 minute. Charmed creatures are not aware they've been affected — they simply feel inexplicably well-disposed toward you. The effect ends if you or your allies harm the target.
  - **Adrenaline Pheromones:** All allies in the area gain **+1 to attack rolls** for 1 round as your pheromones trigger a sympathetic fight response.

  *Specialized glands beneath your jaw or along your wrists secrete complex biochemicals that affect nearby organisms.* Does not affect creatures that don't breathe (Synthetics, undead, sealed-suit wearers).

- **Extra Limbs (Vestigial):** You have a pair of smaller, secondary arms. They can **hold items, reload weapons, interact with objects, or retrieve stored items** as a **free action** (no action cost). They are not strong enough for weapon attacks, grappling, or any action requiring significant force (effective MIG 8). You cannot wield a weapon or shield in your secondary arms. *Two smaller limbs — insectoid forelegs, prehensile tentacles, or jointed appendages — extend from your torso or shoulders.* **Design note:** This does not grant extra attacks. It changes your item-interaction economy: reloading, drawing potions, swapping equipment, and object manipulation become free actions.

- **Bioelectric Discharge:** Once per short rest, as **1 action**, you discharge stored bioelectricity in a **10-foot radius** around you. All creatures in the area take **1d6 electric damage** (Reflex save DC 8 + proficiency + END modifier for half). At character level 5, this increases to **2d6**. Creatures wearing metal armor make the save at **disadvantage**. *Your body stores electrical charge in specialized organs — a remnant of species that evolved to stun prey or deter predators.* This also produces bright light in a 30-foot radius for 1 round.

**Note on trait redistribution:** Some traits from the original Alien Hybrid menu (Darkvision, Natural Armor, Telepathy) are now built into specific species entries (Xylar, Kromath, Neo-Bestial Feline/Reptilian). These traits remain appropriate for Alien Hybrid characters whose heritage includes those species' bloodlines — the GM may allow a trait from the removed list if it fits the character's specific mixed heritage. The traits listed above are those most appropriate for truly exotic or undocumented alien ancestry.

---

## Backgrounds

**Backgrounds** provide skill bonuses, a unique feature, and narrative hooks for your character's history before adventuring.

### Background Growth

As characters gain experience, their origins continue to shape their capabilities. At **Level 6**, each background unlocks a **Veteran Feature** — a moderate upgrade reflecting five levels of adventuring experience building on their history. At **Level 11**, each background unlocks an **Expert Feature** — a significant capability representing true mastery of their background's domain.

Background features scale alongside chassis and skill tree features but occupy a different design space — they provide utility, information, and narrative options rather than raw combat power.

---

### Wastelander
You grew up in the wilds, surviving on instinct and grit.
- **Skill Bonus:** +2 Survival
- **Feature:** Advantage on foraging checks in wilderness terrain
- **Starting Contact — Wilderness Guide (Reliability 2):** A survivalist, hermit, or experienced tracker who knows the wilds outside a specific region. Can provide safe passage routes, hazard warnings, and foraging locations.

**Veteran (L6+) — Herbalist's Eye:** During short rests in wilderness terrain, you automatically find **1d4 doses of medicinal herbs** (equivalent to Tier 1 stim components, worth 1 Salvage each). No Survival check required — you've memorized every edible plant and clean water source within 50 miles of settlements you've visited.

**Expert (L11+) — Terrain Reader:** Once per long rest, spend **10 minutes** scouting an area to learn the locations of all creatures, water sources, and structural hazards within **1 mile**. The GM provides a rough tactical map of the area. Additionally, you cannot be surprised in wilderness terrain — your survival instincts have become preternatural.

### Settlement Born
You were raised behind walls, learning the art of community and negotiation.
- **Skill Bonus:** +2 Persuasion
- **Feature:** You can find contacts in any settlement (1/long rest, GM determines NPC and disposition)
- **Starting Contact — Community Insider (Reliability 2):** A merchant, local official, or well-connected resident in a specific settlement. Can provide community gossip, access to local services, and introductions to settlement leadership. *(Note: The existing Feature represents quick new contacts at Reliability 1; this Starting Contact is a pre-established Reliability 2 relationship. Both coexist.)*

**Veteran (L6+) — Community Broker:** When performing the **Gather Intelligence** or **Recruit** downtime activity in a settlement, you require **1 fewer day** (minimum 1 day). Your network of contacts has grown — you know someone who knows someone in every town.

**Expert (L11+) — Civic Authority:** When using the Social Encounter Framework to negotiate with settlement leaders, officials, or community figures, your starting disposition is treated as **one step higher** (e.g., Neutral becomes Friendly). Additionally, you can spend **1 Influence** to arrange a meeting with any settlement leader — normally a 3-Influence cost.

### Nomad
You traveled the wasteland with a roaming band, never staying in one place.
- **Skill Bonus:** +2 Athletics
- **Feature:** Travel speed increased by 25% for your entire party when you navigate
- **Starting Contact — Road Trader (Reliability 2):** A traveling merchant or caravan driver who moves the Span regularly. Can provide safe passage information, black market goods at fair prices, and news from distant settlements.

**Veteran (L6+) — Trailbreaker:** When you take the **Navigate** or **Scout Ahead** exploration activity, your party ignores difficult terrain penalties for that travel segment (4 hours). You know shortcuts through every type of terrain.

**Expert (L11+) — Wayfinder's Instinct:** Your party's overland travel speed increases by **50%** (replacing the 25% L1 bonus). Once per long rest, when your party would trigger a random encounter during travel, you can choose to **avoid it entirely** — you spotted the danger and rerouted. The GM describes what you avoided.

### Corporate Remnant
You worked for (or were made by) one of the pre-Fall megacorporations.
- **Skill Bonus:** +2 Technology
- **Feature:** You can attempt to access pre-Fall networks and databases (Technology DC 20, 1/long rest)
- **Starting Contact — Data Broker (Reliability 2):** A pre-Fall archivist, corporate defector, or information merchant who deals in recovered corporate intelligence and technical documentation. Can provide historical data, technical specifications, and access to pre-Fall networks.

**Veteran (L6+) — Data Miner:** When you successfully access a pre-Fall network or database (your L1 feature), you extract **2 useful pieces of information** instead of 1, and the Technology DC decreases to **15** (from 20). Your familiarity with corporate data architecture has grown — you know where the good files are buried.

**Expert (L11+) — Corporate Ghost:** You gain access to dormant corporate supply caches. Once per long rest, when in an urban ruin or pre-Fall facility, you can make a **Technology check (DC 16)** to locate a sealed corporate cache containing **2d6 x 50 credits** worth of salvageable goods (Salvage or Tech capital, your choice). Additionally, you can spend **1 Tech capital** to forge corporate credentials that grant your party access to restricted pre-Fall areas for 24 hours.

### Military Survivor
You served in a pre-Fall or post-Fall military force.
- **Skill Bonus:** +2 Intimidation
- **Feature:** Proficiency with all martial weapons
- **Starting Contact — Military Quartermaster (Reliability 2):** A former supply officer, armorer, or logistics specialist — still moving military equipment through the wasteland, legitimately or otherwise. Can provide weapons, military-grade supplies, and tactical intelligence on fortified positions.

**Veteran (L6+) — Combat Drills:** During a short rest, you can drill your party. Choose one: all allies gain **+1 to Initiative** for the next encounter, OR all allies gain **proficiency with one weapon type** of your choice until the next short rest. You can't grant proficiency with weapons they already know.

**Expert (L11+) — Tactical Assessment:** At the start of combat, as a **free action**, you can assess the battlefield. You learn the **approximate HP range** (full, bloodied, critical) and **highest combat stat** (MIG, AGI, INT, etc.) of up to 3 enemies you can see. Additionally, once per long rest, you can declare a **tactical retreat** — your party automatically succeeds on checks to disengage and withdraw from combat, and all allies gain +10 ft movement speed for 1 minute.

### Outcast
You were exiled, abandoned, or fled from society — and learned to survive in the margins.
- **Skill Bonus:** +2 Stealth
- **Feature:** Advantage on checks to find hidden paths or secret entrances
- **Starting Contact — Black Market Fence (Reliability 2):** A criminal middleman who moves stolen or restricted goods without questions. Can provide black market goods, underground connections, and a quiet place to lie low.

**Veteran (L6+) — Margin Walker:** You have advantage on checks to **find black markets, illegal services, and underground contacts** in any settlement. When performing the **Trade Favors** downtime activity, you can trade Salvage for Influence at a **1:1 ratio** (normally 1 Salvage = 0.67 Influence by credit value). People on the margins owe each other — and you know how to collect.

**Expert (L11+) — Ghost in the Crowd:** You can create a **false identity** as a downtime activity (2 days, no capital cost). The identity includes a cover story, forged documents, and a plausible background. NPCs interacting with you for the first time use Insight against your **Deception + 5** to see through it. Additionally, once per long rest, when you would be recognized or identified by someone you'd rather avoid, you can **vanish into a crowd or environment** — make a Stealth check with advantage to disappear, even in plain sight.

### Caravan Runner
You traveled the Span with a trade convoy, learning the roads, the dangers, and the art of the deal.
- **Skill Bonus:** +2 Streetwise
- **Feature — Road Knowledge:** You know the major trade routes, rest stops, and danger zones along the Span and its connected roads. When traveling on established trade routes, your party cannot become lost and you can identify safe camp locations automatically (no Survival check required). Additionally, you can estimate the fair market value of any item within 10% accuracy — you've seen enough deals to know when you're being cheated.
- **Starting Contact — Trade Network Contact (Reliability 2):** A fellow caravan runner or trade settlement merchant who still works the same routes. Can provide market intelligence, transportation, and introductions to trade communities along the Span.

**Veteran (L6+) — Supply Line Expert:** When performing the **Earn Capital** downtime activity to earn Salvage, you earn **+1 bonus Salvage** per successful check. You know which routes have the richest scrap, which settlements overpay for what, and where the abandoned supply depots are. Additionally, your market value estimation improves to **5% accuracy** (from 10%).

**Expert (L11+) — Trade Network:** You establish a **passive trade network** during downtime. Once per long rest (1 week), you can exchange capital at favorable rates: trade any capital type at a **25% bonus** (e.g., 4 Salvage for 5 Salvage worth of Influence). Additionally, when your base has a Market Stall upgrade, its weekly income increases by **+2 credits** per your level.

### Vault Dweller
You grew up sealed underground in a pre-Fall survival vault, emerging only recently into a world you've studied but never experienced.
- **Skill Bonus:** +2 Science
- **Feature — Pre-War Education:** You can read and understand pre-Fall technical documents, signage, and instruction manuals without a check. Once per long rest, when you encounter pre-war technology or infrastructure, you can make an **INT check (DC 15)** to recall relevant knowledge from vault archives — the GM provides one useful fact about the technology's function, dangers, or original purpose. You also know pre-Fall history that most Wastelanders consider myth.
- **Starting Contact — Vault Liaison (Reliability 2):** Another vault dweller or pre-Fall researcher who emerged from a different vault, or a historian who collects oral histories from vault survivors. Can provide pre-Fall technical knowledge, vault locations, and academic research assistance.

**Veteran (L6+) — Technical Archive:** Your Pre-War Education expands. You can now attempt INT checks to recall pre-Fall knowledge **twice per long rest** (up from once), and the DC decreases to **12** (from 15). When you encounter a technology or system you've previously identified, you automatically recall all known information without a check.

**Expert (L11+) — Blueprint Reader:** When you encounter pre-Fall technology of **Tier 3 or higher**, you can spend 10 minutes studying it to learn its **exact function, power requirements, and one design flaw or hidden feature** (no check required — your vault education covered this). Additionally, when performing the **Research** downtime activity for crafting formulas, your research takes **half the normal time**. Your vault archives taught you the theory; the wasteland taught you the practice.

### Cult Survivor
You escaped a post-Fall cult — whether they worshipped magic, technology, a warlord, or something from the Voidscars. You know how groups manipulate, and you can spot it a mile away.
- **Skill Bonus:** +2 Insight
- **Feature — Pattern Recognition:** You have **advantage on Insight checks** to detect lies, manipulation, or hidden motives in conversation. Additionally, when you observe an organization or group for at least 1 hour, you can identify cult-like behavior patterns — blind loyalty, information control, charismatic dominance, ritualized obedience — and the GM will tell you whether the organization is manipulating its members and, if so, the general method (fear, ideology, material dependence, etc.).
- **Starting Contact — Underground Network (Reliability 2):** A loose network of other cult escapees, represented by one trusted contact who serves as a node in this underground. Can provide safe harbor for those fleeing organizations, psychological support resources, and intelligence on manipulative groups and cults. *(This contact represents a network relationship — the specific NPC is defined by the GM.)*

**Veteran (L6+) — Deprogramming:** Once per long rest, you can spend 1 hour talking with a creature that is **charmed, frightened, or under a compulsion effect** (magical or mundane). The creature makes a new saving throw against the effect with **advantage**. Your experience escaping mental manipulation lets you guide others through the process. This works on magical and non-magical influence alike.

**Expert (L11+) — Social Architect:** When using the Social Encounter Framework, you can use **Insight** to gain **+1 progress** (in addition to its normal benefit of granting advantage). You've moved beyond merely reading people — you can weaponize your understanding of group dynamics. Additionally, you have **advantage on all saves against charm, compulsion, and fear effects** — mundane and magical. You will never be controlled again.

### Pit Fighter
You survived the fighting pits — underground arenas where settlements, raiders, and warlords settle scores with blood sport.
- **Skill Bonus:** +2 Acrobatics
- **Feature — Arena Veteran:** You have **advantage on Initiative rolls** in confined spaces (rooms smaller than 40×40 ft — the kind of spaces pits, basements, and corridors create). Additionally, as 1 action, you can size up a combat opponent within 30 feet: make a **Perception check (DC 12)** to learn their fighting style (highest combat-relevant skill or proficiency) and whether they are above, below, or roughly equal to your level in combat ability.
- **Starting Contact — Arena Insider (Reliability 2):** A bookmaker, pit promoter, or underworld figure who organizes the fighting circuit. Can provide access to underground gambling networks, criminal contacts, and intelligence on which factions and warlords use the pits for political leverage.

**Veteran (L6+) — Crowd Reader:** Your Arena Veteran advantage on Initiative extends to **all enclosed spaces** (not just confined rooms under 40x40 ft). Additionally, when you successfully size up an opponent (your L1 Perception check), you also learn whether they have **any conditions, injuries, or are low on resources** (HP below half, spell slots expended, etc.).

**Expert (L11+) — Arena Champion:** Once per long rest, when you reduce a creature to 0 HP in melee combat, you can make an **Intimidation check as a free action** against all enemies within 30 ft who can see you (contested by their Will save). On a success, they are **Frightened of you** until the end of your next turn. Additionally, you have **advantage on saves against Frightened** — after the pits, nothing scares you.

### Faction Operative
You served one of the six major factions — not as a leader, but as an agent, enforcer, courier, or specialist carrying out the faction's will across the wasteland. This background works equally well for human operatives and alien characters embedded in factions like the Kethara Collective.
- **Skill Bonus:** +2 Deception
- **Feature — Faction Contact:** Choose one of the six major factions: Hearthstone Compact, Iron Wolves, Convergence of the Lit Path, Ashen Veil, Dynaxis Solutions, or Kethara Collective. You have a **reliable contact** within that faction — a specific NPC (work with your GM to define them) who can provide information, arrange meetings, or offer limited assistance. This contact can be reached via radio or in person at faction strongholds. Using your contact too aggressively, making unreasonable demands, or acting against the faction's interests may damage or sever the relationship. Your contact is a person, not a service — treat them accordingly.
- **Starting Contact — Faction Contact (Reliability 3):** An active, tested working relationship with a specific faction member. Reliability starts at 3 (rather than the standard 2) — reflecting an established professional relationship rather than a social acquaintance. See Contact Networks in *Game-Mastering* for full rules.

**Veteran (L6+) — Expanded Network:** You gain a **second Faction Contact** in a different faction from your first. This contact is less reliable — their starting disposition is one step lower than your primary contact's. Additionally, when spending Influence capital on faction-related social encounters, you get **double the benefit** (1 Influence = advantage on 2 social checks instead of 1).

**Expert (L11+) — Double Agent:** You can maintain standing with **two factions simultaneously**, even if those factions are opposed, without either faction discovering your dual loyalty (contested Deception vs. faction Insight, checked once per long rest). Additionally, once per long rest, you can invoke your faction authority to **requisition supplies** — spend 2 Influence to receive Tier 2 equipment or lower (up to 200 credits value) delivered within 1d4 days.

### Resonance-Touched
You manifested magical ability early — perhaps violently — and were persecuted for it before finding acceptance or learning to hide. Whether you still practice magic or have turned away from it, the experience marked you.
- **Skill Bonus:** +2 Arcana
- **Feature — Magical Sensitivity:** You can sense active magical effects within **60 feet** — you know magic is present and its general direction, but not specifics (school, strength, or caster). This detection is passive and automatic; it does not require an action. Additionally, the first time you are targeted by a magical effect in each combat encounter, you have **advantage on the saving throw** against it. Your body learned to flinch before your mind did.
- **Starting Contact — Underground Mage (Reliability 2):** A hedge witch, illegal magic practitioner, or member of the Ashen Veil's outer circle who operates away from official channels. Can provide magical knowledge, obscure arcane components, and access to the informal networks that hide magic users from faction persecution.

**Veteran (L6+) — Magical Attunement:** Your passive magical detection range increases to **120 feet** (from 60 ft), and you can now identify the **school of magic** (evocation, abjuration, etc.) of detected effects. Additionally, when you encounter a magical item, you can sense whether it is **cursed** without requiring an Arcana check — you feel the wrongness in its resonance.

**Expert (L11+) — Resonance Shield:** Once per long rest, when you are targeted by a spell or magical effect, you can activate your innate magical resonance as a **reaction** to gain **advantage on the saving throw** and **resistance to the damage** (if any) from that single effect. This replaces your L1 first-encounter advantage — it is now on-demand rather than automatic, but far more powerful. Additionally, you can detect active magical effects through **up to 5 feet of solid material** (walls, doors, containers).

### Plague Survivor

You or your family survived the plagues that swept through the colonies during the Collapse. While billions died, your bloodline carried something — antibodies, genetic quirk, or sheer luck — that let you endure what killed everyone around you. You grew up in quarantine zones, learned to read the signs of sickness before anyone else could see them, and carry the survivor's burden: the knowledge that you lived when others didn't.

- **Skill Bonus:** +2 Medicine
- **Feature — Survivor's Constitution:** You have **advantage on Fortitude saves** against disease and poison. Additionally, once per long rest, you can determine by touch or smell whether food, water, or a substance is **contaminated or diseased** — no check required. Your body remembers what nearly killed it.

**Veteran (L6+) — Quarantine Protocols:** When an ally within 30 ft fails a save against disease or poison, you can use your **reaction** to grant them a **reroll** on that save. You've guided people through plague symptoms since you were a child. Additionally, you have **advantage on Medicine checks** to diagnose illness or identify toxins — you recognize the stages faster than trained physicians.

**Expert (L11+) — Plague Hardened:** You gain **resistance to poison damage** and are **immune to mundane diseases** (magical diseases still affect you, but you have advantage on saves against them). Once per long rest, you can spend 10 minutes treating a creature suffering from a disease or poison to **remove one instance** of a non-magical disease or reduce a poison's remaining duration by half. Your immune system is a weapon — and you've learned to share its lessons.

### Ruin Delver

You make your living descending into the bones of the old world. While Vault Dwellers grew up sealed inside pre-Fall shelters, you break into them from the outside — navigating collapsed corridors, bypassing automated defenses that still execute protocols for a dead government, and extracting the technology buried beneath rubble and rad-zones. You know pre-war building codes better than the engineers who wrote them, because understanding the structure is the difference between finding treasure and being buried alive.

- **Skill Bonus:** +2 Investigation
- **Feature — Structural Sense:** You can detect **structural instability** within **30 feet** automatically — cracked load-bearing walls, weakened floors, unstable ceilings — without a check. You know when a ruin is about to collapse. Additionally, once per short rest, when you enter a pre-Fall building or installation, you can recall the **standard layout** for that building type (hospital, military base, factory, residential arcology). The GM provides a rough map of the likely floor plan. The old world built to templates; you've memorized them all.

**Veteran (L6+) — Deep Diver:** You have **advantage on Investigation checks** in pre-Fall ruins, underground structures, and sealed installations. Additionally, when you encounter a pre-Fall automated defense system (turrets, security doors, patrol drones), you can make an **INT check (DC 14)** to identify its **trigger conditions and patrol pattern** before it activates. You've tripped enough alarms to know where the sensors are.

**Expert (L11+) — Salvage Instinct:** Once per long rest, when exploring a pre-Fall ruin or structure, you can declare a **targeted search**. Spend 30 minutes searching a single room or area and you automatically find the **most valuable salvageable item** present (GM determines the item; minimum Tier 2 value). If the room has been previously looted, you find something others missed — a hidden compartment, a sealed sub-floor, a maintenance crawlspace with cached supplies. Additionally, you can spend **1 Salvage** to jury-rig a structural repair on a collapsing passage, creating a **safe path** through unstable terrain for 1 hour.

### Rift-Touched

You've been inside a Voidscar — or one reached out and touched you. Maybe you wandered too close to the northern highlands. Maybe the expanding boundary swept over your settlement in the night. Maybe you were born near Threshold and the ambient wrongness seeped into your bones before you could walk. Whatever happened, you came back changed. Colors are slightly wrong. Sounds arrive a half-beat late. You sometimes remember conversations that haven't happened yet. The rift took something from you — or gave you something. You're not sure which is worse.

- **Skill Bonus:** +2 Perception
- **Feature — Void Sense:** You passively sense **dimensional anomalies, void-tainted creatures, and active Voidscar phenomena** within **60 feet**. You know something is wrong and its general direction, but not specifics. This detection is automatic and does not require an action. Additionally, once per long rest, you can **reroll a failed Will save**. Reality bent around you once; your mind learned to bend with it.

**Veteran (L6+) — Temporal Stutter:** Your perception of time is slightly fractured. You have **advantage on Initiative rolls** — you sometimes react to things a split-second before they happen. Additionally, you can sense when time or space is being manipulated within 120 ft (teleportation, time dilation, dimensional portals, illusions that distort spatial perception). You feel it like a pressure change in your skull.

**Expert (L11+) — Rift Flicker:** Once per long rest, as a **reaction** when you take damage or are targeted by an attack, you can **briefly phase through the void**, teleporting up to **15 feet** to an unoccupied space you can see. You disappear from one point and appear at another — for a heartbeat, you are nowhere. This movement does not provoke opportunity attacks. Additionally, you are **immune to the Confused condition** — your mind already operates in a state that others would call confusion. You call it clarity.


---

## Starting Equipment

Your starting equipment is determined by your **chassis**. Choose one package from your chassis's options — these are listed in full in **Chassis**.

| Chassis | Packages |
|---------|----------|
| **Heavy** | A — Frontliner (heavy armor, martial melee, shield) or B — Bruiser (medium armor, two-handed weapon, simple ranged) |
| **Striker** | A — Sharpshooter (light armor, martial ranged, simple melee weapon) or B — Skirmisher (medium armor, martial melee, sidearm) |
| **Specialist** | A — Field Agent (light armor, finesse melee, sidearm, toolkit) or B — Medic's Kit (light armor, simple weapon, sidearm, medical kit) or C — Technician's Rig (light armor, simple weapon, hacking terminal) |
| **Adept** | A — Arcanist (light armor, simple weapon, arcane focus) or B — Psion (light armor, simple weapon, psionic focus) |
| **Survivor** | A — Scavenger (medium armor, improvised weapon, sidearm, scavenging kit) or B — Wasteland Mutant (light armor, simple melee, antitoxin) |

All characters also receive **2d6 × 10 credits** for additional gear purchases. See **Equipment** for the full gear list.

> **Background equipment:** Some backgrounds describe specific tools or contacts your character carries. These are narrative details — they do not grant additional mechanical starting gear beyond what the chassis package provides.

---

## Character Points (CP)

Rather than fixed abilities at each level, you earn **Character Points (CP)** to spend on skill tree abilities. CP provides horizontal customization — you choose how your character grows.

**Every level grants 10 CP.** All characters also begin with **15 starting CP** at Level 1 (20 CP for Humans due to their Bonus Advancement trait).

For the full CP economy, anti-convergence mechanics, and Doctrine rules, see **Character Points**.

### CP Spending Options

| Purchase | CP Cost | Notes |
|----------|---------|-------|
| **Skill tree ability (Tier 1)** | 5 CP | Available to any chassis; see **Skill Trees** |
| **Skill tree ability (Tier 2)** | 10 CP | Requires one Tier 1 in same tree |
| **Skill tree ability (Tier 3)** | 15 CP | Requires Level 5+ and one Tier 2 in same tree |
| **Skill proficiency** | 2 CP | Gain proficiency in any untrained skill (1 CP for Specialist chassis) |
| **Skill expertise** | 4 CP | Upgrade Proficient to Expert (2 CP for Specialist chassis) |
| **Advanced skill** | 3 CP | Level 3+, requires prerequisite base skill at Proficient (2 CP for Specialist chassis). Max 2 (3 for Specialist). See *Advanced Skills* |
| **Cantrip (non-caster)** | 15 CP | For Heavy, Striker, Specialist chassis (most builds) |
| **Cantrip (Diplomat build)** | 12 CP | For Diplomat build (Specialist chassis) |
| **Cantrip (half-caster build)** | 10 CP | For Channeler and Medic builds |
| **Attribute increase (+1)** | 10 CP | Maximum attribute score of 20 |
| **Multiclass first level** | 20 CP | See *Multiclassing* for requirements |

The following purchases are primarily relevant at higher levels but are listed here for completeness:

| Purchase | CP Cost | Notes |
|----------|---------|-------|
| **Skill tree capstone ability** | 25 CP | Level 10+, requires at least 2 Tier 3 abilities in same tree |
| **Signature capstone** | 30 CP | Level 15+, requires capstone ability in same tree |
| **Weapon group proficiency** | 5 CP | — |
| **Martial weapon group proficiency** | 8 CP | — |
| **Medium armor proficiency** | 10 CP | — |
| **Heavy armor proficiency** | 15 CP | Requires medium armor proficiency |
| **Shield proficiency** | 5 CP | — |
| **Third save proficiency** | 20 CP | Level 7+ |

**Notes:**
- Specific costs for skill tree abilities are listed in **Skill Trees**.
- You cannot purchase abilities above your character level's gate.
- You must meet prerequisites (earlier abilities in same tree, attribute requirements).
- Unspent CP carries over between levels.

### Proficiency Bonus by Level

Your proficiency bonus scales with character level:

```
Levels 1-4:   +2
Levels 5-8:   +3
Levels 9-12:  +4
Levels 13-16: +5
Levels 17-20: +6
```

---

## Progression Structure

Character progression spans **20 levels** divided into four phases:

### Phase 1: Foundation (Levels 1-5)
Your foundation. Core skill tree investments, chassis features, and your first combat loop. By Level 5, you're a competent professional with a signature capstone ability.

**Power Level:** Protect a settlement, defeat raider bands, explore local ruins.
**Equipment:** Tier 1-2 gear (salvaged, basic).

### Phase 2: Specialization (Levels 6-10)
At Level 6, you gain a second free **Doctrine** pick and continue deepening your skill tree investments with CP. This is the phase where builds diverge: a character who spent L1-5 spreading across trees now commits to their core identity, while one who front-loaded a single tree pushes toward Tier 3 and Capstone abilities. There are no locked paths — your choices are driven entirely by CP allocation and Doctrine selection.

**Power Level:** Lead settlement defense, clear major ruins, influence regional politics.
**Equipment:** Tier 3-4 gear (military-grade, rare tech).

### Phase 3: Mastery Path (Levels 11-15)
At Level 11, select a Mastery Path representing legendary techniques or philosophies. See *Mastery Paths* for the 15 available options.

**Power Level:** Forge alliances between settlements, combat planetary threats.

### Phase 4: Apex (Levels 16-20)
All three previous layers deepen. At Level 20, you receive an Apex Capstone — a once-per-long-rest ability representing peak mortal capability.

**Power Level:** Legendary status, strategic influence.

**Important:** Level 20 is not godhood. Ashfall rejects power creep. A Level 20 character is the most dangerous thing on two legs, but they still bleed, still need to eat, and can still be outmaneuvered. Bounded accuracy ensures threats remain threats at every level.

---

## Experience and Leveling

### Option 1: Traditional XP

**XP Required for Each Level:**
```
Level 1:  0 XP (starting level)
Level 2:  300 XP
Level 3:  900 XP
Level 4:  2,700 XP
Level 5:  6,500 XP
Level 6:  14,000 XP
Level 7:  23,000 XP
Level 8:  34,000 XP
Level 9:  48,000 XP
Level 10: 64,000 XP
Level 11: 85,000 XP
Level 12: 100,000 XP
Level 13: 120,000 XP
Level 14: 140,000 XP
Level 15: 165,000 XP
Level 16: 195,000 XP
Level 17: 225,000 XP
Level 18: 265,000 XP
Level 19: 305,000 XP
Level 20: 355,000 XP
```

**XP Awards:**
- Defeating creatures: CR x 100 XP
- Overcoming challenges: GM discretion (50-500 XP)
- Story milestones: 500-2000 XP
- Roleplaying/creativity: 50-200 XP

### Option 2: Milestone Leveling

GM declares level-up at narrative milestones:
- Complete major story arc
- Defeat significant antagonist
- Achieve faction goals
- Discover crucial secrets
- Survive impossible odds

**Recommended pacing:** 1 level per 3-4 sessions (adjust for table preference)

### Option 3: Hybrid System (Recommended)

Combine both approaches:
- Track XP for continuous progression feedback
- Award bonus XP for story milestones
- Level-up occurs when EITHER:
  - Required XP is reached, OR
  - Major story milestone achieved (even if XP is 80%+ of requirement)

---

## Rest and Recovery (Quick Reference)

Ashfall uses a **gritty rest economy** that fundamentally changes resource management:

- **Short Rest:** 8 hours of sleep in a safe or defensible location. Recover HP via Hit Dice, regain short-rest abilities, and recover limited spell slots. You cannot benefit from multiple short rests in the same 24-hour period.

- **Long Rest:** 1 week (7 consecutive days) in a safe settlement with food, water, and shelter. Full recovery of HP, Hit Dice, spell slots, and long-rest abilities. Remove all Exhaustion levels (except 5-6, which require 2 weeks).

This means **at-will** and **short-rest abilities** are the backbone of your combat loop. Long-rest powers are clutch plays, not your default strategy. You cannot nova every fight and rest it off — you need sustainability.

For full rules on rest, recovery, field medicine, and survival, see *Exploration & Survival*.

---

## Step-by-Step Character Creation Checklist

Use this checklist to build your character from start to finish.

**Step 1 — Choose Chassis**
- [ ] Read the five chassis descriptions in **Chassis**: Heavy, Striker, Specialist, Adept, Survivor
- [ ] Select the chassis that matches the physical and training baseline you want
- [ ] Note your **Hit Die**, **Starting HP formula**, **HP per level**, **armor proficiencies**, **weapon proficiencies**, and **save proficiencies**
- [ ] Note your **starting skill proficiency count** (Heavy 2, Striker 3, Adept 3, Survivor 4, Specialist 5)

**Step 2 — Choose Species**
- [ ] Select one species: Human, Altered Human, Synthetic, Xylar, Kromath, Neo-Bestial, or Alien Hybrid
- [ ] Note your attribute bonuses and species traits
- [ ] **Synthetic characters** cannot be Psions (cannot spend CP in Psionic Disciplines tree)
- [ ] **Human characters** receive 20 starting CP instead of 15 (per the Bonus Advancement trait: +5 bonus CP at Level 1)

**Step 3 — Choose Background**
- [ ] Select one of the 18 backgrounds
- [ ] Note your background **skill bonus** (+2 to one skill)
- [ ] Note your background **feature** (passive narrative ability)
- [ ] Note your **starting contact** (Reliability 2 by default)
- [ ] Record background Veteran (L6) and Expert (L11) upgrades — these activate automatically at the appropriate level

**Step 4 — Determine Attributes**
- [ ] Choose your generation method: **Standard Array** (15, 14, 13, 12, 10, 8), **Point Buy** (27 points), or **Rolled** (4d6 drop lowest, six times)
- [ ] Assign values to MIG, AGI, END, INT, WIS, PRE
- [ ] Apply species attribute bonuses
- [ ] Calculate attribute modifiers using the modifier table (10-11 = +0, 12-13 = +1, 14-15 = +2, etc.)

**Step 5 — Calculate Derived Stats**
- [ ] **HP:** Chassis Starting HP formula (e.g., Heavy: 14 + END mod, Adept: 8 + END mod)
- [ ] **Defense Value (DV):** 10 + AGI modifier + armor bonus (armor bonus from chassis starting equipment)
- [ ] **Initiative:** AGI modifier + any relevant bonuses from species or background
- [ ] **Saving Throws:** Add proficiency bonus (+2 at L1) to your two chassis save proficiencies; calculate all three saves (FORT, REF, WILL) using the appropriate attribute modifiers
- [ ] **Humanity:** 10 for most characters. Synthetic = 0 (permanent). Note that Mutation tree abilities may reduce Humanity as you level.
- [ ] **Movement Speed:** 30 feet (baseline; modified by armor or abilities)
- [ ] **Carrying Capacity:** MIG score × 5 (light), × 10 (medium), × 15 (heavy)

**Step 6 — Record Proficiencies**
- [ ] Note weapon and armor proficiencies from your **chassis**
- [ ] Note your two **save proficiencies** from your chassis
- [ ] Record your chassis **starting skill proficiency count** (see Step 1)
- [ ] Add background skill bonus to the relevant skill

**Step 7 — Choose Skill Proficiencies**
- [ ] Choose skill proficiencies equal to your chassis starting count (Heavy: 2, Striker: 3, Adept: 3, Survivor: 4, Specialist: 5)
- [ ] **Additionally**, choose **2 bonus skill proficiencies** from any skill — these represent personal history
- [ ] Human characters choose **3 bonus** instead of 2 (Versatile trait)
- [ ] Record all proficiencies; apply proficiency bonus (+2 at L1) to all checks using a proficient skill

> **Automatic Skill Growth:** You gain 1 free skill proficiency at **Level 3**, **Level 8**, and **Level 15**. Choose any skill each time. See **Skills** for the full progression table.

**Step 8 — Select Doctrine**
- [ ] Choose **1 free Doctrine** (see **Character Points — Doctrines**). This costs 0 CP.
- [ ] Doctrines provide small passive bonuses — they are flavor picks, not tree investments
- [ ] You gain a **second free Doctrine** at Level 6
- [ ] You can replace a doctrine during a long rest

**Step 9 — Receive Starting Equipment**
- [ ] Take your chassis's starting equipment package (choose A, B, or C depending on chassis) — see **Chassis** for full package details
- [ ] Roll **2d6 × 10 credits** for additional purchases
- [ ] Purchase any extra gear from **Equipment**

**Step 10 — Spend Starting CP**
- [ ] You have **15 CP** to spend (20 CP if Human)
- [ ] Browse the skill trees in **Skill Trees**
- [ ] Spend CP on **Tier 1 abilities** (5 CP each) from any tree, **skill proficiencies** (2 CP each; 1 CP for Specialist chassis), or **attribute increases** (10 CP for +1), or **save for later**
- [ ] You can enter any tree at character creation — no chassis gate. Buy what fits your concept.
- [ ] Record purchased abilities on your character sheet

**Step 11 — Finishing Touches**
- [ ] Name your character
- [ ] Write a brief backstory connecting your species, background, and chassis choice
- [ ] Determine personality, motivations, and connections to the party
- [ ] Review the gritty rest rules: **Short Rest = 8 hours**, **Long Rest = 1 week** — plan your resource management accordingly
- [ ] Ask your GM about the starting settlement, faction context, and your contact's name

You are ready to survive the Wasteland.

---

## Worked Example: Building Kira Vaslov

The following example walks through creating a character from scratch using the chassis + CP system. Kira Vaslov is a field surgeon and former Convergence of the Lit Path medic — someone who stitches wounds in combat and knows enough gunplay to protect her patients when the shooting starts.

---

### Step 1 — Choose Chassis

Kira is a healer who works at close range, needs high skills, and carries a weapon for self-defense. She doesn't want to be a primary combatant.

**Choice: Specialist** (d8 hit die, Light armor, Simple + Sidearms + melee finesse weapons, 5 skill proficiencies, Reflex + Will saves)

- Starting HP: 10 + END modifier
- She'll choose **Package B — Medic's Kit**: light armor, simple weapon, sidearm, 10 ammo, medical kit, 2 rations, 75 cr

---

### Step 2 — Choose Species

Kira is **Human**. She receives:
- +1 to two different attributes of her choice
- **Versatile** trait: 1 bonus skill proficiency
- **Bonus Advancement**: 20 starting CP instead of 15

---

### Step 3 — Choose Background

**Plague Survivor** — Kira grew up in a quarantine zone. Her background gives her:
- +2 Medicine (skill bonus)
- **Survivor's Constitution**: advantage on Fortitude saves vs disease and poison
- **Starting Contact — Underground Mage (Reliability 2)** *(GM will reskin this as a contact within the quarantine network)*
- L6 Veteran: grant an ally a reroll on disease/poison saves (reaction)
- L11 Expert: resistance to poison damage, immunity to mundane disease

---

### Step 4 — Determine Attributes

Using the standard array (15, 14, 13, 12, 10, 8), Kira assigns:

| Attribute | Score | Modifier | Reasoning |
|-----------|-------|----------|-----------|
| **WIS** | 15 | +2 | Primary healing stat; Medicine checks, Will saves |
| **END** | 14 | +2 | Survivability; HP, Fortitude resistance |
| **INT** | 13 | +1 | Field medicine, diagnosis, knowledge checks |
| **PRE** | 12 | +1 | Convincing patients to comply; faction contacts |
| **AGI** | 10 | +0 | Adequate; Reflex saves, sidearm attacks |
| **MIG** | 8 | -1 | She's no melee fighter |

**Human Attribute Bonus:** +1 WIS, +1 END (the two attributes she cares most about)

Final scores: WIS 16 (+3), END 15 (+2), INT 13 (+1), PRE 12 (+1), AGI 10 (+0), MIG 8 (-1)

---

### Step 5 — Calculate Derived Stats

- **HP:** 10 + 2 (END mod) = **12 HP** at Level 1
- **Defense Value:** 10 + 0 (AGI) + 1 (light armor) = **DV 11**
- **Initiative:** +0 (AGI mod)
- **Saving Throws:**
  - REF: +0 (AGI) + 2 (proficiency) = **+2** ✓ (Specialist save)
  - WILL: max(WIS, PRE) mod + proficiency = +3 + 2 = **+5** ✓ (Specialist save)
  - FORT: +2 (END mod, no proficiency) = **+2** (no proficiency, but good END mod)
- **Humanity:** 10
- **Movement Speed:** 30 feet

> **Note:** Kira has high Will saves from both her chassis (Specialist gets Will proficiency) and WIS 16. She'll resist Frightened and Charm effects reliably. Her FORT save is decent for an unproficient save because of strong END.

---

### Step 6 — Record Proficiencies

From **Specialist chassis:**
- **Armor:** Light armor
- **Weapons:** Simple weapons, Sidearms, melee finesse weapons
- **Saves:** Reflex, Will
- **Starting skills:** 5 proficiencies to choose (plus 2 bonus, plus 1 Human Versatile bonus)

---

### Step 7 — Choose Skill Proficiencies

Kira has **5** (chassis) + **2** (personal history bonus) + **1** (Human Versatile) = **8 skill proficiencies** to choose. Plus her background adds +2 Medicine (she gains proficiency from the bonus).

| Skill | Source |
|-------|--------|
| Medicine | Background (Plague Survivor) |
| Perception | Chassis pick 1 |
| Insight | Chassis pick 2 |
| Science | Chassis pick 3 — field pharmacology |
| Stealth | Chassis pick 4 — move quietly through combat zones |
| Persuasion | Chassis pick 5 |
| Survival | Personal history pick 1 — navigating the wastes between settlements |
| Deception | Personal history pick 2 — navigating faction politics |
| Investigation | Human Versatile bonus |

> **Note:** Kira plans to unlock **First Aid** (Advanced Skill) at Level 3 by spending 3 CP — it requires Medicine proficiency, Level 3+, and 3 CP. At Level 1, she uses base Medicine for all healing checks.

---

### Step 8 — Select Doctrine

**Doctrine:** Kira selects **Combat Surgeon** (healing abilities usable from 10 ft instead of touch). This is a free Level 1 doctrine pick — 0 CP cost.

---

### Step 9 — Starting Equipment

Kira takes the **Medic's Kit** package from the Specialist chassis:
- Light armor
- Simple weapon (she takes a combat knife — finesse, 1d4+AGI)
- Sidearm (pistol, 1d6, 30 ft, 1 ammo per attack)
- 10 ammo
- Medical kit (required for Medicine checks; can perform field surgery)
- 2 rations
- 75 cr starting credits

She spends 25 cr of her starting credits on **2 stimpacks** (basic healing items, 1d6+2 HP, Bonus Action to apply).

---

### Step 10 — Spend Starting CP

Kira has **20 CP** (Human bonus).

| Purchase | CP Cost | Running Total |
|----------|---------|---------------|
| **Medicine Tree — Tier 1: Field Medic** (5 CP) | 5 | 5/20 |
| *Field Medic: 1 Action — touch an ally, restore 1d6+WIS modifier HP. Uses: WIS modifier per short rest. Entry ability.* | | |
| **Medicine Tree — Tier 1: Triage** (5 CP) | 5 | 10/20 |
| *Triage: Free Action — learn exact current HP of all visible allies within 60 ft and identify any conditions affecting them.* | | |
| **Medicine Tree — Tier 1: Preventive Care** (5 CP) | 5 | 15/20 |
| *Preventive Care: 1 Bonus Action — grant an ally DR 2 against the next damage they take (lasts 10 min). WIS modifier uses per short rest.* | | |
| Save 5 CP for Level 2 | — | 20/20 |

**Total trees entered:** 1 (Medicine). No surcharge applies (2 trees = no surcharge).

At Level 2 (10 more CP + 5 saved = 15 CP), Kira plans:
- Medicine Tier 2: Surgical Precision (10 CP) — her first Tier 2 ability
- Save 5 CP

**Initiate milestone** (15+ CP in Medicine): reached at **Level 1** — Kira spends exactly 15 CP in Medicine at character creation. She immediately gains +1 to Medicine checks.

---

### Kira at Level 1 — Summary

| Stat | Value |
|------|-------|
| Chassis | Specialist |
| Species | Human |
| Background | Plague Survivor |
| HP | 12 |
| DV | 11 |
| Initiative | +0 |
| REF / WILL / FORT | +2 / +5 / +2 |
| Speed | 30 ft |
| Humanity | 10 |
| CP Spent | 15 / 20 |
| CP Saved | 5 |

**Combat round (typical):** Kira spends 2 actions healing allies (Field Medic as 1 action + Preventive Care as a Bonus Action for preemptive damage reduction), uses her 3rd action to fire her sidearm or move to safety. She has a reaction available for opportunity situations. She is never without a meaningful choice — Field Medic's healing and Preventive Care's damage mitigation give her two meaningful support actions every turn without burning resources.

**Skill suite:** Medicine (proficient + background bonus), Perception, Insight, Science, Stealth, Persuasion, Deception, Investigation. She covers healing, knowledge, social, and awareness. She cannot hack, pick locks, or perform heavy melee — that's for her party.

**What she isn't:** Kira is not a combat character. She will go down quickly if focus-fired. Her DV is low and her HP is average for a Specialist. She succeeds by staying mobile, keeping allies on their feet, and using Stealth to avoid being the target. Her party should protect her.

---

> **Build Flexibility Note:** This same chassis + background combination supports many different characters. A Specialist (Plague Survivor) who spends CP in Stealth & Subterfuge becomes a shadow assassin who grew up in quarantine zones. One who spends CP in Technology becomes a field engineer. The chassis sets your frame — the CP spending defines who you become.

---

*For full skill tree options, see **Skill Trees**. For CP spending rules and anti-convergence mechanics, see **Character Points**. For chassis details and starting packages, see **Chassis**.*
