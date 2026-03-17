---
game_data: true
species:
  - name: Human
    attribute_bonus: "+1 to two different attributes"
    traits:
      - name: Versatile
        effect: Gain 1 bonus skill proficiency
      - name: Bonus Advancement
        effect: "+5 bonus AP at Level 1 (total 20 AP)"
  - name: Altered Human
    attribute_bonus: "+2 to one attribute"
    traits:
      - name: Elemental Resistance
        effect: "Choose one: Fire, Cold, Electric, Acid, or Poison resistance"
        choices: [Fire, Cold, Electric, Acid, Poison]
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
  - name: Alien Hybrid
    attribute_bonus: "+2 to one attribute"
    traits:
      - name: Alien Trait
        effect: "Choose one alien trait"
        choices: [Darkvision, Natural Armor, Telepathy, Amphibious]
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
ap_costs:
  - {name: "Class ability (Tier 1)", cost: 5}
  - {name: "Class ability (Tier 2)", cost: 10, requires: "Tier 1 in same tree"}
  - {name: "Class ability (Tier 3)", cost: 15, requires: "Level 5+ and Tier 2"}
  - {name: "Skill proficiency", cost: 2, note: "1 AP for Operatives"}
  - {name: "Skill expertise", cost: 4, requires: "Proficient in skill", note: "2 AP for Operatives"}
  - {name: "Advanced skill", cost: 3, requires: "Level 3+ and prerequisite base skill at Proficient", note: "2 AP for Operatives. Max 2 per character (3 for Operatives)"}
  - {name: "Cantrip (non-caster)", cost: 15}
  - {name: "Cantrip (Diplomat)", cost: 12}
  - {name: "Cantrip (Channeler/Medic)", cost: 10}
  - {name: "Attribute increase (+1)", cost: 10}
  - {name: "Multiclass first level", cost: 20}
free_proficiency_levels: [3, 8, 15]
player_choice_proficiencies: 2
starting_ap: 15
ap_per_level: 10
base_movement: 30
base_humanity: 10
---
# Character Creation

---

## Overview

Creating a character in Ashfall is a process of layered choices. Each decision — archetype, species, background, attributes — shapes who your character is mechanically and narratively. This chapter walks you through every step.

**Quick Reference — Character Creation Steps:**

1. Choose your **Base Archetype** (1 of 8)
2. Choose your **Species** (1 of 4)
3. Choose your **Background** (1 of 6)
4. **Roll or assign Attributes** (standard array: 15, 14, 13, 12, 10, 8)
5. Apply species and background modifiers
6. **Calculate Derived Stats:** HP, Defense Value (DV), Initiative, Saving Throws, Humanity
7. Note your archetype's **proficiencies and starting features**
8. **Choose 2 bonus skill proficiencies** from any skill (representing your character's personal history)
9. Receive your **starting equipment package** (class-based, free) plus bonus credits for extra purchases
10. **Spend starting AP** (15 AP) on class abilities or save for later

As you level:
- **L1-5:** Deepen your archetype via AP spending and automatic feature unlocks.
- **L6:** Choose your Advanced Specialization and commit to a combat identity.
- **L11:** Qualify for and select your Mastery Path (see *Mastery Paths*).
- **L16-20:** Ascend to Apex and claim your place among the Wasteland's legends.

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
- **Derived Stats:** Reflex saves, Will saves, Burnout resistance

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

**At Level 1:** Determined by your archetype (see Archetype Selection below).

**Per Level (2+):** Roll your Hit Die + END modifier (minimum 1), or take the fixed value.

| Archetype | Hit Die | HP at Level 1 | HP per Level (2+) |
|-----------|---------|----------------|-------------------|
| **Warrior** | d12 | 14 + END modifier | 1d12 (or 7) + END modifier |
| **Gunslinger** | d8 | 10 + END modifier | 1d8 (or 5) + END modifier |
| **Mystic** | d6 | 8 + END modifier | 1d6 (or 4) + END modifier |
| **Technician** | d6 | 8 + END modifier | 1d6 (or 4) + END modifier |
| **Medic** | d6 | 8 + END modifier | 1d6 (or 4) + END modifier |
| **Operative** | d6 | 8 + END modifier | 1d6 (or 4) + END modifier |
| **Diplomat** | d8 | 10 + END modifier | 1d8 (or 5) + END modifier |
| **Channeler** | d8 | 10 + END modifier | 1d8 (or 5) + END modifier |

### Initiative
Determines turn order in combat.

**Formula:** `AGI modifier + proficiency bonus + equipment modifiers`

*All archetypes add their proficiency bonus to initiative. Some features (e.g., Gunslinger's Quick Draw) grant additional initiative bonuses.*

### Defense Value (DV)
Your difficulty to hit in combat. Replaces Armor Class (AC).

**Formula:** `10 + AGI modifier + armor bonus + shield bonus + miscellaneous modifiers`

### Saving Throws
Three categories of saves, each tied to two attributes (use the higher modifier):

- **Fortitude (FORT):** END or MIG — resist physical effects (poison, disease, fatigue)
- **Reflex (REF):** AGI or WIS — dodge area effects (explosions, traps)
- **Will (WILL):** WIS or PRE — resist mental effects (fear, compulsion, illusion)

**Save Formula:** `d20 + higher attribute modifier + proficiency bonus (if trained)`

Each archetype grants proficiency in two saving throws (see Archetype Selection).

### Humanity
Your biological and spiritual integrity. Starts at **10** for most characters (Technicians start at 9 due to their neural interface).

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

## Archetype Selection

**Archetypes** provide your character's foundation — starting abilities, hit dice, proficiencies, and skill tree access. Ashfall has **eight Base Archetypes**, each filling a distinct role. Unlike rigid classes, archetypes open **skill trees** that you advance through with **Advancement Points (AP)**.

For full details on each archetype's features, skill trees, and specializations, see the individual class files in *Classes*.

### Archetype Comparison Table

| Archetype | Hit Die | Primary Stats | Role | Save Proficiencies | Magic Type |
|-----------|---------|---------------|------|--------------------|------------|
| **Warrior** | d12 | MIG/END | Tank, striker | Fortitude, Reflex | None (15 AP/cantrip) |
| **Gunslinger** | d8 | AGI/WIS | Ranged DPS | Reflex, Will | None (15 AP/cantrip) |
| **Mystic** | d6 | INT/WIS | AOE mage, battlefield control | Will, Reflex | Full caster (7th-level cap) |
| **Technician** | d6 | INT/AGI | Pet/support, tech | Reflex, Will | None (tech replicates magic) |
| **Medic** | d6 | WIS/INT | Healer, support | Will, Fortitude | Half-caster (healing/support) |
| **Operative** | d6 | AGI/PRE | Stealth, burst damage | Reflex, Will | None (15 AP/cantrip) |
| **Diplomat** | d8 | PRE/WIS | Social, command, buffs | Will, Reflex | None (12 AP/cantrip) |
| **Channeler** | d8 | WIS/END | Hybrid warrior/mage | Fortitude, Will | Half-caster (all schools) |

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
**Starting Humanity:** 9 (neural interface costs -1 at creation)
**Armor Proficiency:** Light armor
**Weapon Proficiency:** Simple weapons, sidearms (pistols, SMGs)
**Save Proficiencies:** Reflex, Will
**Skill Bonuses:** Technology +3, Science +2, Investigation +2
**Key Features:** Neural Interface, Jury-Rig, Drone Companion (L2), Overclock (L3), Masterwork (L5)

Technicians command drones, hack systems, and build gadgets that replicate magical effects through technology. Their unique action economy with a pet companion sets them apart. See *Classes: Technician* for full details.

### Medic
*Keeping people alive is the hardest job there is.*

**Primary Attributes:** Wisdom (WIS), Intellect (INT)
**Hit Die:** d6 | **HP at Level 1:** 8 + END modifier
**Armor Proficiency:** Light armor
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
**Skill Bonuses:** Stealth, Deception, plus 3 of your choice (most of any archetype)
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

---

## Species and Origin

![An avian scholar studies ancient texts, their feathered hands carefully turning weathered pages](/images/illustrations/avian-scholar.png)

Choose your character's species. Each provides unique mechanical traits and narrative flavor.

### Human (Baseline)
The most numerous survivors, adaptable and resilient.

**Traits:**
- **Attribute Increase:** +1 to two different attributes of your choice
- **Versatile:** Gain 1 bonus skill proficiency
- **Bonus Advancement:** Gain +5 bonus AP at Level 1 (total 20 AP)

### Altered Human (Post-Fall Mutation)
Humans transformed by radiation, bioweapons, or strange post-Fall energies.

**Traits:**
- **Attribute Increase:** +2 to one attribute of your choice
- **Elemental Resistance:** Choose one damage type — Fire, Cold, Electric, Acid, or Poison. You have resistance to that damage type.

### Synthetic (Android/Construct)
Artificial beings — some pre-war, others newly awakened. Synthetics are machines. Whatever quality allows organic creatures to channel magic — Humanity — does not exist in a Synthetic body. This is both their greatest limitation and their greatest freedom.

**Traits:**
- **Attribute Increase:** +1 INT, +1 END
- **Constructed Resilience:** Immune to poison and disease. You do not need to eat, drink, or breathe.
- **Synthetic Body:** You cannot benefit from magical healing (Vitae, Channel Energy, etc.). Instead, you must be repaired: a creature (including yourself) makes a Technology check (DC 15) as a 10-minute activity, restoring 2d8 HP on success.
- **No Humanity:** Your Humanity score is permanently **0**. You cannot learn or use magic in any form — no cantrips, no spells, no ritual casting, no magical items that require attunement. You cannot multiclass into Mystic, Channeler, or any archetype that requires spellcasting. Cantrips cannot be purchased with AP.
- **Chrome Compatible:** Augmentations have **no Humanity cost** for you — install as many as your body can hold (maximum augmentations = 5 + END modifier). You do not suffer social penalties from the Humanity threshold table. You do not pay augmentation maintenance costs (your body integrates chrome natively).

**Archetype Restrictions:** Synthetics cannot play the Mystic or Channeler archetypes (both require spellcasting). All other archetypes are available. A Synthetic Medic uses surgical healing exclusively — they cannot learn Vitae cantrips but can use all non-magical Medic features.

### Alien Hybrid

![A construct guardian stands vigilant, mechanical eyes scanning for threats to their settlement](/images/illustrations/construct-guardian.png)

Beings with mixed human and alien heritage, exhibiting unusual traits. This species covers characters of Xylar (insectoid), Kromath (reptilian), Neo-Bestial (uplifted animal), or other non-human ancestry. See [Setting](setting.md) for lore on each culture.

**Traits:**
- **Attribute Increase:** +2 to one attribute of your choice
- **Alien Trait:** Choose one of the following:
  - **Darkvision:** You can see in dim light within 60 feet as if it were bright light, and in darkness as if it were dim light.
  - **Natural Armor:** +1 to Defense Value (stacks with worn armor).
  - **Telepathy:** You can communicate mentally with any creature within 30 feet that shares at least one language with you.
  - **Amphibious:** You have a swim speed equal to your walking speed and can breathe underwater.

---

## Backgrounds

**Backgrounds** provide skill bonuses, a unique feature, and narrative hooks for your character's history before adventuring.

### Wastelander
You grew up in the wilds, surviving on instinct and grit.
- **Skill Bonus:** +2 Survival
- **Feature:** Advantage on foraging checks in wilderness terrain

### Settlement Born
You were raised behind walls, learning the art of community and negotiation.
- **Skill Bonus:** +2 Persuasion
- **Feature:** You can find contacts in any settlement (1/long rest, GM determines NPC and disposition)

### Nomad
You traveled the wasteland with a roaming band, never staying in one place.
- **Skill Bonus:** +2 Athletics
- **Feature:** Travel speed increased by 25% for your entire party when you navigate

### Corporate Remnant
You worked for (or were made by) one of the pre-Fall megacorporations.
- **Skill Bonus:** +2 Technology
- **Feature:** You can attempt to access pre-Fall networks and databases (Technology DC 20, 1/long rest)

### Military Survivor
You served in a pre-Fall or post-Fall military force.
- **Skill Bonus:** +2 Intimidation
- **Feature:** Proficiency with all martial weapons

### Outcast
You were exiled, abandoned, or fled from society — and learned to survive in the margins.
- **Skill Bonus:** +2 Stealth
- **Feature:** Advantage on checks to find hidden paths or secret entrances

---

## Starting Equipment

Each archetype receives a **starting equipment package** for free, representing the gear they've accumulated through training and experience. In addition, all characters receive **2d6 x 10 credits** for extra purchases.

### Warrior Starting Package
- Heavy melee weapon or martial weapon of choice
- Medium armor and shield (or heavy armor without shield)
- Survival kit (bedroll, waterskin, rations for 3 days, flint and steel)
- 2d6 x 10 credits

### Gunslinger Starting Package
- Rifle or two sidearms
- Light armor
- 30 rounds of ammunition
- Weapon cleaning kit and binoculars
- 2d6 x 10 credits

### Mystic Starting Package
- Simple weapon (staff, knife, or similar)
- Ritual components pouch
- Scholar's kit (journal, ink, pre-war texts)
- Wasteland robes (no armor bonus, but functional clothing)
- 2d6 x 10 credits

### Technician Starting Package
- Sidearm (pistol or SMG)
- Light armor
- Tech toolkit (advanced) — required for Jury-Rig and drone repairs
- Salvage scanner
- Scrap materials (100 scrap value)
- 2d6 x 10 credits

### Medic Starting Package
- Simple weapon of choice (scalpel, baton, or sidearm)
- Light armor (scavenged surgical scrubs + padding)
- Medical kit (20 uses)
- Field bag: 3 stims (heal 1d8+2 HP), 10 bandages, 1 vial of antiseptic
- Surgical tools (advantage on Medicine checks for surgery)
- 2d6 x 10 credits

### Operative Starting Package
- Two melee finesse weapons (combat knives, garrote, etc.)
- Sidearm (pistol or suppressed firearm)
- Light armor (dark tactical gear)
- Operative's kit: lockpicks, climbing gear, grappling hook, smoke bomb (1 use)
- Camouflage cloak (advantage on Stealth in low light)
- 2d6 x 10 credits

### Diplomat Starting Package
- Sidearm (pistol, cane-sword, or holdout weapon)
- Light armor (formal pre-war suit or elegant scavenged clothing)
- Diplomat's kit: forged documents, bottle of whiskey, symbol of authority
- Small notebook for recording debts, secrets, and favors
- 50 credits in various currencies (in addition to rolled credits)
- 2d6 x 10 credits

### Channeler Starting Package
- Martial melee weapon of choice (longsword, battleaxe, spear, etc.)
- Medium armor (reinforced leather and scavenged plates)
- Shield (+2 DV, optional)
- Channeler's focus (personal talisman, holy symbol, or inscribed weapon)
- Ritual kit (candles, chalk, incense)
- 2d6 x 10 credits

---

## Advancement Points (AP) System

Rather than fixed class features at each level, you earn **Advancement Points (AP)** to spend on abilities. AP provides horizontal customization — you choose how your character grows.

**Every level grants 10 AP.** All characters also begin with **15 starting AP** at Level 1 (20 AP for Humans due to their Bonus Advancement trait).

### AP Spending Options

| Purchase | AP Cost | Notes |
|----------|---------|-------|
| **Class skill tree feature (Tier 1)** | 5 AP | See individual class files |
| **Class skill tree feature (Tier 2)** | 10 AP | Requires one Tier 1 in same tree |
| **Class skill tree feature (Tier 3)** | 15 AP | Requires Level 5+ and one Tier 2 in same tree |
| **Skill proficiency** | 2 AP | Gain proficiency in any untrained skill (1 AP for Operatives) |
| **Skill expertise** | 4 AP | Upgrade Proficient to Expert (2 AP for Operatives) |
| **Advanced skill** | 3 AP | Level 3+, requires prerequisite base skill at Proficient (2 AP for Operatives). Max 2 (3 for Operatives). See *Advanced Skills* |
| **Cantrip (non-caster)** | 15 AP | For Warrior, Gunslinger, Operative, Technician |
| **Cantrip (Diplomat)** | 12 AP | Diplomats have a reduced cost |
| **Cantrip (Channeler/Medic)** | 10 AP | Half-casters have the cheapest cantrip access |
| **Attribute increase (+1)** | 10 AP | Maximum attribute score of 20 |
| **Multiclass first level** | 20 AP | See *Multiclassing* for requirements |

**Notes:**
- Specific costs for class features are listed in each class file's skill tree section.
- You cannot purchase abilities above your character level's gate.
- You must meet prerequisites (earlier abilities in same tree, attribute requirements).
- Unspent AP carries over between levels.

### Proficiency Bonus by Level

Your proficiency bonus scales with character level, not class level:

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

### Phase 1: Base Archetype (Levels 1-5)
Your foundation. Core features, skill trees, and your first combat loop. By Level 5, you're a competent professional with a signature capstone ability.

**Power Level:** Protect a settlement, defeat raider bands, explore local ruins.
**Equipment:** Tier 1-2 gear (salvaged, basic).

### Phase 2: Advanced Specialization (Levels 6-10)
At Level 6, choose one of three specialization paths unique to your archetype. This deepens your combat identity with enhanced features at L6, L8, and L10.

**Power Level:** Lead settlement defense, clear major ruins, influence regional politics.
**Equipment:** Tier 3-4 gear (military-grade, rare tech).

### Phase 3: Mastery Path (Levels 11-15)
At Level 11, select a cross-archetype Mastery Path representing legendary techniques or philosophies. See *Mastery Paths* for the 12 available options.

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

Use this checklist to build your character from start to finish:

**Step 1 — Choose Archetype**
- [ ] Select one of the 8 Base Archetypes (see Archetype Selection above)
- [ ] Note your Hit Die, HP formula, proficiencies, and save proficiencies
- [ ] Read your archetype's full entry in *Classes* for features and skill trees

**Step 2 — Choose Species**
- [ ] Select Human, Altered Human, Synthetic, or Alien Hybrid
- [ ] Note attribute increases and special traits

**Step 3 — Choose Background**
- [ ] Select one of the 6 backgrounds
- [ ] Note your skill bonus and background feature

**Step 4 — Determine Attributes**
- [ ] Use Standard Array (15, 14, 13, 12, 10, 8), Point Buy, or Rolled method
- [ ] Assign values to MIG, AGI, END, INT, WIS, PRE
- [ ] Apply species attribute modifiers
- [ ] Calculate attribute modifiers using the modifier table

**Step 5 — Calculate Derived Stats**
- [ ] **HP:** Use your archetype's Level 1 formula (e.g., 14 + END mod for Warrior)
- [ ] **Defense Value (DV):** 10 + AGI modifier + armor bonus
- [ ] **Initiative:** AGI modifier + proficiency bonus (if applicable) + equipment
- [ ] **Saving Throws:** Note which two saves you have proficiency in; calculate FORT (higher of END/MIG mod), REF (higher of AGI/WIS mod), WILL (higher of WIS/PRE mod), adding proficiency bonus to trained saves
- [ ] **Humanity:** 10 (or 9 for Technicians)
- [ ] **Movement Speed:** 30 feet (modified by species, armor, etc.)
- [ ] **Carrying Capacity:** MIG score x 5 (light), x 10 (medium), x 15 (heavy)

**Step 6 — Record Proficiencies and Features**
- [ ] Note weapon and armor proficiencies from your archetype
- [ ] Note skill proficiencies from archetype (2 fixed, or 5 for Operative) and background (1 fixed)
- [ ] Record Level 1 class features

**Step 7 — Choose Bonus Skill Proficiencies**
- [ ] Choose **2 additional skill proficiencies** from any skill on the skill list
- [ ] These represent your character's personal history — a Warrior might take Insight and Survival, a Mystic might take Stealth and Deception
- [ ] Humans choose **3** instead of 2 (Versatile trait grants 1 bonus)
- [ ] Record all proficiencies on your character sheet

**Step 8 — Equip Your Character**
- [ ] Take your archetype's starting equipment package (free)
- [ ] Roll 2d6 x 10 for additional credits
- [ ] Purchase any extra gear from *Equipment*

**Step 9 — Spend Starting AP**
- [ ] You have 15 starting AP (20 if Human)
- [ ] Browse your archetype's class abilities in *Classes*
- [ ] Spend AP on Tier 1 abilities (5 AP each), skill proficiencies (2 AP), or save for later
- [ ] Record purchased abilities on your character sheet

**Step 10 — Finishing Touches**
- [ ] Name your character
- [ ] Write a brief backstory connecting your species, background, and archetype
- [ ] Determine your character's personality, motivations, and connections to the party
- [ ] Review the gritty rest rules (Short Rest = 8 hours, Long Rest = 1 week) — plan your resource usage accordingly

You are ready to survive the Wasteland.
