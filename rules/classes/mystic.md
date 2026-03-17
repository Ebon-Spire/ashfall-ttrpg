---
game_data: true
name: Mystic
primary_stats: [INT, WIS]
hit_die: d6
hp_base: 8
hp_per_level: 4
starting_humanity: 10
armor_proficiency: [None]
weapon_proficiency: [Simple]
save_proficiencies: [Will, Reflex]
skill_bonuses:
  - {skill: Arcana, bonus: 2}
  - {skill: Investigation, bonus: 2}
starting_ap: 15
role: AOE Mage/Control
magic_type: "Full caster (7th-level cap)"
level_1_features: [Spell Crafting, Cantrips, Arcane Ward]
skill_trees:
  - name: Elemental Mastery
    focus: Offense
    abilities:
      - {name: Elemental Focus, ap_cost: 5, tier: 1, effect: "+1 damage per die on chosen element"}
      - {name: Elemental Penetration, ap_cost: 10, tier: 2, effect: "Enemies have disadvantage on saves vs your chosen element spells"}
      - {name: Elemental Apotheosis, ap_cost: 15, tier: 3, effect: "Maximize damage dice on chosen element spell 1/SR"}
  - name: Esoteric Knowledge
    focus: Utility
    abilities:
      - {name: Spell Lore, ap_cost: 5, tier: 1, effect: "Identify any spell being cast within 60 ft"}
      - {name: Arcane Sight, ap_cost: 10, tier: 2, effect: "Detect magic at will"}
      - {name: Forbidden Grimoire, ap_cost: 15, tier: 3, effect: "Access to restricted spells"}
  - name: Arcane Defense
    focus: Defense
    abilities:
      - {name: Mage Armor, ap_cost: 5, tier: 1, effect: "Base DV becomes 13 + AGI modifier (doesn't stack with worn armor)"}
      - {name: Arcane Shield, ap_cost: 10, tier: 2, effect: "+5 DV as reaction spell (uses spell slot)"}
      - {name: Spell Reflection, ap_cost: 15, tier: 3, effect: "Redirect spell back at caster"}
features:
  - name: Spell Crafting
    level: 1
    action: Varies
    frequency: "Spell Slots"
    description: "Modular spell system: combine Base Cantrip + Delivery Shape + Effect Modifiers. Combination determines spell level and slot cost."
  - name: Cantrips
    level: 1
    action: "1 Action"
    frequency: At-Will
    description: "Start with 3 cantrips. At-will, no slot cost. Add INT mod to damage. +1 damage die at L5, L11, L17. Can power with spell slot for +1 die per slot level. Gain additional cantrips at L5 (4), L11 (5), L17 (6)."
    num_choices: 3
    choice_label: "Choose 3 Cantrips"
  - name: Arcane Ward
    level: 1
    action: Passive
    frequency: "On Spell Cast"
    description: "When casting a 1st+ level spell, gain temp HP equal to 2x spell level. Ward temp HP stacks with itself only. Maximum temp HP: 2x Mystic level."
  - name: Ritual Casting
    level: 2
    action: "10 minutes + 10 minutes per spell level"
    frequency: At-Will
    description: "Cast any known spell as a ritual without consuming a slot. Takes 10 minutes + 10 minutes per spell level (see Magic chapter for full ritual casting rules). Cannot be used in combat."
  - name: Arcane Recovery
    level: 3
    action: "1 minute"
    frequency: "1/Short Rest"
    description: "Recover spell slots totaling half Mystic level (rounded up)."
  - name: Counterspell
    level: 4
    action: Reaction
    frequency: "1/Short Rest"
    description: "When creature within 60 ft casts a spell, make INT check DC 10 + spell level. Success: spell fails."
  - name: Attribute Improvement
    level: 4
    action: Passive
    frequency: Permanent
    description: "Increase one attribute by +2, or two attributes by +1 each. Maximum 20."
  - name: Signature Spell
    level: 5
    action: Passive
    frequency: Permanent
    description: "Choose one 1st or 2nd-level spell. Cast it at-will without a slot. Costs 15 AP for 1st-level, 25 AP for 2nd-level."
    num_choices: 1
    choice_label: "Choose Signature Spell"
spell_slots:
  - {level: 1, slots: [2, 0, 0, 0, 0, 0, 0]}
  - {level: 2, slots: [3, 0, 0, 0, 0, 0, 0]}
  - {level: 3, slots: [3, 2, 0, 0, 0, 0, 0]}
  - {level: 4, slots: [4, 3, 0, 0, 0, 0, 0]}
  - {level: 5, slots: [4, 3, 2, 0, 0, 0, 0]}
  - {level: 6, slots: [4, 3, 3, 0, 0, 0, 0]}
  - {level: 7, slots: [4, 3, 3, 1, 0, 0, 0]}
  - {level: 8, slots: [4, 3, 3, 2, 0, 0, 0]}
  - {level: 9, slots: [4, 3, 3, 2, 1, 0, 0]}
  - {level: 10, slots: [4, 3, 3, 3, 2, 0, 0]}
  - {level: 11, slots: [4, 3, 3, 3, 2, 1, 0]}
  - {level: 12, slots: [4, 3, 3, 3, 2, 1, 0]}
  - {level: 13, slots: [4, 3, 3, 3, 2, 1, 1]}
  - {level: 14, slots: [4, 3, 3, 3, 2, 1, 1]}
  - {level: 15, slots: [4, 3, 3, 3, 2, 1, 1]}
starting_cantrips: 3
cantrips_by_level:
  - {level: 1, count: 3}
  - {level: 5, count: 4}
  - {level: 11, count: 5}
  - {level: 17, count: 6}
specialization_details:
  - name: Elementalist
    role: Elemental Damage
    features:
      - name: Elemental Affinity
        level: 6
        action: Passive
        description: "Choose one element. Add INT mod to damage of chosen element spells. Can change any spell to chosen element type."
        choices:
          - {name: Fire, effect: "Fire affinity: +INT to fire damage"}
          - {name: Cold, effect: "Cold affinity: +INT to cold damage"}
          - {name: Lightning, effect: "Lightning affinity: +INT to lightning damage"}
          - {name: Acid, effect: "Acid affinity: +INT to acid damage"}
      - {name: Potent Cantrips, level: 6, action: Passive, description: "+1d4 damage on damage-dealing cantrips."}
      - {name: Sculpt Spells, level: 8, action: Passive, description: "When casting AOE, choose up to INT mod creatures in area: they auto-succeed saves and take no damage."}
      - {name: Elemental Surge, level: 8, action: "On Spell Cast", description: "1/Short Rest. Maximize one damage die on a damage spell."}
      - {name: Cataclysm, level: 10, action: "On Spell Cast", description: "1/Long Rest. Cast at +2 spell levels (no higher slot). Ignores resistance. Treats immunity as resistance."}
  - name: Seer
    role: Divination/Control
    features:
      - {name: Portent, level: 6, action: Passive, description: "After long rest roll 2d20, record results. Use reaction to replace any visible creature roll with a portent die."}
      - name: Third Eye
        level: 6
        action: "1 Action"
        description: "1/Short Rest. Lasts 1 hour. Choose one benefit."
        choices:
          - {name: Darkvision, effect: "120 ft darkvision"}
          - {name: See Invisibility, effect: "See invisible creatures and objects"}
          - {name: Comprehend Languages, effect: "Read any written language"}
      - {name: Bend Luck, level: 8, action: Reaction, description: "WIS mod times/Short Rest. Add or subtract 1d4 from any creature roll."}
      - {name: Cognitive Assault, level: 8, action: "1 Action", description: "60 ft. Will save DC 8+INT+prof. Fail: 3d6 psychic + dazed 1 round. Success: half damage."}
      - {name: Foresight Echo, level: 10, action: "1 Action", description: "1/Long Rest. 10 minutes. Cannot be surprised. Advantage on all rolls. Attacks against you have disadvantage."}
  - name: Necromancer
    role: Undead/Drain
    features:
      - {name: Raise Servant, level: 6, action: "1 min ritual", description: "1/Long Rest. Animate corpse as servant (HP 15, DV 12, 1d6+2 damage, 30 ft speed). Lasts until destroyed or long rest. Max 1 (2 at L9)."}
      - {name: Life Drain, level: 6, action: Passive, description: "When dealing necrotic damage, heal HP equal to half damage dealt."}
      - {name: Necrotic Shroud, level: 8, action: "1 Action", description: "1/Short Rest. 1 minute. Creatures starting turn within 10 ft take 1d6 necrotic. Resistance to necrotic. Advantage on Intimidation."}
      - {name: Weaken, level: 8, action: "1 Action", description: "Concentration, 1 minute. 30 ft. Will save DC 8+INT+prof. Fail: disadvantage on attacks and MIG checks. Repeat save each turn."}
      - name: "Death's Embrace"
        level: 10
        action: Touch
        description: "1/Long Rest. Choose one effect."
        choices:
          - {name: Resurrection, effect: "Target dead less than 1 hour returns to life at half max HP. Costs you 1 exhaustion."}
          - {name: Death Touch, effect: "Will save DC 8+INT+prof. Fail: 10d6 necrotic. Success: half. Heal equal to half damage via Life Drain."}
specializations: [Elementalist, Seer, Necromancer]
starting_equipment:
  - Simple weapon
  - Ritual components pouch
  - "Scholar's kit"
  - Wasteland robes
---
# Mystic

*The old world burned because it forgot the first rule: reality is negotiable. You haven't. While others cling to steel and circuits, you manipulate the fundamental forces that underpin existence. Magic in the Wasteland isn't flashy or safe — it's raw, unpredictable, and hungry. Every spell you cast is a gamble, a pact, a scream into the void. And the void? It screams back.*

*You are the Mystic. You've learned to weave spells from fragments of pre-war grimoires, whispered secrets from the irradiated dead, and your own desperate experimentation. You are fragile, yes — bullets kill you just as easily as anyone else. But you don't need armor when you can reshape the battlefield, unmake your enemies, and bend probability itself. You are not a survivor. You are an inevitability.*

![A mystic channels raw arcane energy, reality bending around their outstretched hands](/images/illustrations/mystic-casting.png)

---

## Base Archetype (Levels 1-5)

### Core Stats

| Attribute | Value |
|-----------|-------|
| **Primary Attributes** | Intellect (INT), Wisdom (WIS) |
| **Hit Die** | d6 |
| **HP at Level 1** | 8 + END modifier |
| **HP per Level** | 1d6 (or 4) + END modifier |
| **Starting Humanity** | 10 |
| **Armor Proficiency** | None |
| **Weapon Proficiency** | Simple weapons only |
| **Save Proficiencies** | Will, Reflex |
| **Skill Bonuses** | Arcana +2, Investigation +2 |
| **Starting AP** | 15 |

### Starting Equipment

- Simple weapon of choice
- Ritual components pouch
- Scholar's kit (ink, parchment, reference texts)
- Wasteland robes

### Level Progression (1-5)

#### Level 1: Spell Crafting, Cantrips & Arcane Ward

- **Spell Crafting (Core Mechanic):** Mystics use a modular spell system. Each spell is constructed from:
  - **Base Cantrip** (damage type, effect type)
  - **Delivery Shape** (single target, area, cone, line)
  - **Effect Modifiers** (range, duration, additional effects)

  The combination determines the **spell level** and **spell slot cost**. Details of the spell crafting system are in the [Magic](../magic.md) chapter.

- **Cantrips Known (3 at Level 1):** You know three cantrips of your choice. Cantrips are at-will, do not consume spell slots, and scale with your level (additional damage die at L5, L11, and L17). Damage-dealing cantrips always add your **Intelligence modifier** to damage. You can also power cantrips with a spell slot for additional damage dice (see [Cantrip Damage Scaling](../magic.md#cantrip-damage-scaling)). You learn additional cantrips at L5 (4 total), L11 (5 total), and L17 (6 total).

- **Arcane Ward (Passive):** When you cast a spell of 1st level or higher, you gain **temporary HP equal to 2 x spell level cast**. These temporary HP stack with existing temporary HP from Arcane Ward (but not other sources) up to a maximum of **2 x your Mystic level**. At Level 3, your maximum ward is 6 temp HP. This represents the protective aura that forms around you as you manipulate arcane energies.

- **VITAE Cantrip (Enhanced):** One of your starting cantrips can be VITAE (Life). In addition to its normal stabilization effect, you can use it as **1 action (bonus) (1/Short Rest)** to touch a creature (including yourself) and restore **1d4 + your INT modifier HP**. This healing increases to 2d4 at 5th level, 3d4 at 11th level, and 4d4 at 17th level.

#### Level 2: Ritual Casting

**Ritual Casting (Requires Spell Known):** You can cast any spell you know as a **ritual**, even if it doesn't normally have the ritual tag. Casting a spell as a ritual takes **10 minutes + 10 minutes per spell level** (see Magic chapter for full ritual casting rules) and does not consume a spell slot. You cannot ritual cast during combat.

#### Level 3: Arcane Recovery

**Arcane Recovery (1/Short Rest, 1 Minute):** During a short rest, you can recover expended spell slots. The total levels of recovered slots equals **half your Mystic level, rounded up**. At Level 3, you can recover one 1st-level slot or one 2nd-level slot. At Level 5, you can recover two 1st-level slots, one 2nd-level slot, or one 3rd-level slot.

#### Level 4: Attribute Improvement & Counterspell

- **Attribute Improvement:** Increase one attribute by +2, or two attributes by +1 each (maximum 20 before modifiers).
- **Counterspell (Baseline Feature):** As a **reaction (1/Short Rest)**, when you see a creature cast a spell within 60 feet, you can attempt to counter it. Make an INT check (DC = 10 + spell level). On success, the spell fails. *Note: This class feature replaces the legacy Counterspell spell (3rd-level, Magic chapter). Mystics who have this feature do not need to prepare or use the legacy spell version — the class feature supersedes it.*

#### Level 5 Capstone: Signature Spell

**Signature Spell (Permanent Enhancement):** Choose one 1st-level or 2nd-level spell you know. You can cast this spell **at-will without consuming a spell slot**. If you choose a 2nd-level spell, it costs 10 additional AP to unlock this capstone (total 25 AP).

### Spell Slots by Level

| Level | 1st | 2nd | 3rd | 4th | 5th | 6th | 7th |
|-------|-----|-----|-----|-----|-----|-----|-----|
| 1 | 2 | — | — | — | — | — | — |
| 2 | 3 | — | — | — | — | — | — |
| 3 | 3 | 2 | — | — | — | — | — |
| 4 | 4 | 3 | — | — | — | — | — |
| 5 | 4 | 3 | 2 | — | — | — | — |

*Note: Mystics continue to gain spell slots through Level 20, capping at 7th-level spells. Full progression table in the [Magic](../magic.md) chapter and the [Reference Tables](../appendices/tables.md).*

### Skill Trees

Mystics have access to three skill trees:

#### Elemental Mastery (Damage & Destruction)

- **Elemental Focus (5 AP):** Choose one damage type (fire, cold, lightning, acid, or force). Your spells of that type deal +1 damage per die rolled.
- **Elemental Penetration (10 AP, Requires Elemental Focus):** Enemies have disadvantage on saves against your spells of your chosen damage type.
- **Elemental Apotheosis (15 AP, Requires Elemental Penetration):** Once per short rest, maximize all damage dice on one spell of your chosen damage type.

#### Esoteric Knowledge (Utility & Information)

- **Spell Lore (5 AP):** You can identify any spell being cast within 60 feet as a free action.
- **Arcane Sight (10 AP, At-Will Cantrip):** You can see magical auras, invisible creatures, and illusions within 30 feet.
- **Forbidden Grimoire (15 AP, Requires Spell Lore):** Learn one spell from any class's spell list. This spell counts as a Mystic spell for you.

#### Arcane Defense (Survival & Protection)

- **Mage Armor (5 AP, At-Will):** As a 1-action activity, your base DV becomes **13 + AGI modifier** for 8 hours. Doesn't stack with worn armor.
- **Arcane Shield (10 AP, Learned Spell):** You learn the *Arcane Shield* spell and can add it to your spellbook. *Arcane Shield* is a 1st-level spell that you can cast as a **reaction** when you are hit by an attack or spell, granting you **+5 DV** until the start of your next turn. (Distinct from the Ward cantrip, which grants +3 DV at no slot cost.)
- **Spell Reflection (15 AP, Requires Arcane Shield):** When you successfully use *Arcane Shield* to cause an attack to miss you (the attack roll + your boosted DV fails to hit), you can redirect the attack to a target of your choice within 30 feet using the same attack roll.

### Magic Relationship

Mystics are **full casters** and have the most robust spellcasting progression in the game. However, their magic caps at **7th-level spells** at Level 20 (not 9th, as in some systems). This maintains bounded accuracy and ensures Mystics remain powerful but mortal. Mystics rely on intelligence and creativity, not raw cosmic power.

---

## Advanced Specializations (Levels 6-10)

Mystics who reach level 6 have demonstrated control over the wasteland's strange energies. Now they focus their craft: unleashing raw destruction as an Elementalist, manipulating fate as a Seer, or commanding the dead as a Necromancer.

**System Notes:**
- All characters gain 10 AP per level from levels 6-10
- Short rest: 8 hours
- Long rest: 1 week
- Bounded accuracy: maximum total bonus of +18
- 3-action economy per turn

### Elementalist (Damage Spells)

*Raw destructive power given form. The Elementalist commands fire, ice, lightning, and acid — whatever energies the wasteland's corrupted ley lines offer. Where others see magic as a tool, the Elementalist sees it as a weapon.*

**Prerequisites:** Level 6, Mystic archetype

**New Skill Tree Unlocked:** Destruction (maximize spell damage, AoE enhancement, elemental mastery, spell penetration)

#### Level 6 Features

**Elemental Affinity** (Choose One Element)
Choose one damage type: fire, cold, lightning, or acid. You gain the following benefits:
- Add your **Intellect (INT) modifier** to damage rolls for spells that deal your chosen element
- When you cast a spell that deals damage, you can **change its damage type** to your chosen element

*Example: With INT +3 and fire affinity, your fireball deals +3 damage. You could also cast an ice-based spell and change it to fire damage.*

**Potent Cantrips** (Passive)
Your damage-dealing cantrips deal an additional **+1d4 damage**.

*Example: A cantrip that normally deals 1d10 + INT mod now deals 1d10 + INT mod + 1d4. With INT +3, that's 1d10+1d4+3.*

#### Level 8 Features

**Sculpt Spells** (Passive)
When you cast a spell that affects an area (AoE), you can choose a number of creatures in the area up to your **Intellect modifier**. Those creatures:
- Automatically succeed on their saving throw against the spell
- Take no damage from the spell

This allows you to drop a fireball on your allies without harming them.

**Elemental Surge** (1/Short Rest)
Once per short rest, when you cast a damage-dealing spell, you can maximize one of the spell's damage dice instead of rolling it.

*Example: You cast a spell that deals 4d6 fire damage. You choose to maximize one die, so you roll 3d6 and add 6, guaranteeing at least partial maximum damage.*

#### Level 10 Capstone Ability

**Cataclysm** (1/Long Rest)
Once per long rest, when you cast a damage-dealing spell, you can invoke Cataclysm. The spell gains the following benefits:
- Cast at **+2 spell levels** without using a higher-level spell slot
- **Ignores damage resistance** (treats resistance as normal damage)
- **Treats immunity as resistance** (immune creatures take half damage)

*Example: You cast a 3rd-level fireball as if it were 5th-level (10d6 damage instead of 8d6), and even fire-immune creatures take half damage.*

![An arcane cataclysm erupts as magical forces tear through the wasteland](/images/illustrations/arcane-cataclysm.png)

---

### Seer (Divination/Control)

*The Seer perceives the threads of possibility woven through reality. They manipulate probability, read minds, and control the flow of battle through foresight. To fight a Seer is to struggle against fate itself.*

**Prerequisites:** Level 6, Mystic archetype

**New Skill Tree Unlocked:** Prescience (probability manipulation, scrying, mind reading, temporal awareness)

#### Level 6 Features

**Portent** (Daily Ability)
After each long rest, roll **2d20** and record the results. Before any creature you can see makes an attack roll, saving throw, or ability check, you can use your reaction to replace their roll with one of your portent rolls.

Each portent die can only be used once. Unused portent dice are lost when you complete your next long rest.

*Example: You roll 3 and 19 at the start of the day. Later, an enemy is about to hit your ally — you replace their attack roll with your 3, causing them to miss. Later, you replace your ally's saving throw with your 19, ensuring they succeed.*

**Third Eye** (1/Short Rest)
Once per short rest as 1 action, you can activate your Third Eye for 1 hour. Choose one of the following benefits:
- **Darkvision:** 120 feet
- **See Invisibility:** See invisible creatures and objects
- **Comprehend Languages:** Read any written language

#### Level 8 Features

**Bend Luck** (Reaction)
As a reaction when a creature you can see makes an attack roll, ability check, or saving throw, you can add or subtract **1d4** from the result.

You can use this feature a number of times equal to your **Wisdom (WIS) modifier** per short rest (minimum 1).

**Cognitive Assault** (1 Action)
As 1 action, target one creature within 60 feet. The target must make a **Will save (DC = 8 + INT + proficiency)** or take **3d6 psychic damage** and become **dazed** for 1 round.

While dazed, the creature can take either an action or movement on their turn, not both, and cannot take reactions.

On a successful save, the target takes half damage and is not dazed.

#### Level 10 Capstone Ability

**Foresight Echo** (1/Long Rest)
Once per long rest as 1 action, you can activate Foresight Echo for **1 minute (10 rounds)**. While active:
- You **cannot be surprised**
- You have **advantage** on all attack rolls, ability checks, and saving throws
- Attack rolls against you have **disadvantage**

This represents seeing moments into the future and reacting before events occur.

---

### Necromancer (Undead/Debuff)

*The line between life and death has always been thin in the wasteland. Radiation creates ghouls, technology resurrects the dead as cyborgs, and stranger energies animate the fallen. The Necromancer learns to blur that line further, commanding death itself.*

**Prerequisites:** Level 6, Mystic archetype

**New Skill Tree Unlocked:** Death Magic (undead control, life drain, debuffs, fear effects, necrotic enhancement)

#### Level 6 Features

**Raise Servant** (1/Long Rest, 1-Minute Ritual)
Once per long rest, you can perform a 1-minute ritual to animate a Medium or smaller corpse as an undead servant. The servant has:
- **HP:** 15
- **DV:** 12
- **Attack:** 1d6+2 damage (your choice of melee or ranged at time of creation)
- **Speed:** 30 feet
- **Duration:** Until destroyed, or until your next long rest

The servant obeys your commands (uses 1 action (bonus) to command). You can have **1 active servant** at a time. This increases to **2 active servants** at level 9.

**Life Drain** (Passive)
When you deal necrotic damage to a creature, you heal hit points equal to **half the necrotic damage dealt** (rounded down).

*Example: Your spell deals 16 necrotic damage. You heal 8 HP.*

#### Level 8 Features

**Necrotic Shroud** (1/Short Rest, 1 Action)
Once per short rest as 1 action, you can shroud yourself in necrotic energy for 1 minute. While the shroud is active:
- Creatures that start their turn within **10 feet** of you take **1d6 necrotic damage**
- You have **resistance to necrotic damage**
- You have **advantage on Intimidation** checks

**Weaken** (1 Action, Concentration)
As 1 action, target one creature within 30 feet. The target must make a **Will save (DC = 8 + INT + proficiency)** or become weakened for up to **1 minute** (concentration).

While weakened:
- The target has **disadvantage** on all attack rolls
- The target has **disadvantage** on all Might (MIG) checks

The target can repeat the save at the end of each of their turns to end the effect.

#### Level 10 Capstone Ability

**Death's Embrace** (1/Long Rest, Touch)
Once per long rest, you can touch a creature and channel the energies of life and death. Choose one of the following effects:

**Resurrection:**
- Touch a creature that has been dead for no more than 1 hour
- The creature returns to life with **half their maximum hit points**
- You take **1 level of exhaustion**
- The creature suffers no penalties for returning from death

**Death Touch:**
- Touch a living creature
- The target must make a **Will save (DC 8 + INT + proficiency)**
- Failed save: **10d6 necrotic damage**
- Successful save: **Half damage** (5d6)
- You heal hit points equal to half the necrotic damage dealt (via Life Drain)

*Game Master Note: This is the Necromancer's ultimate expression of their power over the boundary between life and death.*

---

## Level 16: Arcane Mastery

Your command of magic deepens to legendary proportions. You gain 2 additional spell slots of each level from 1st to 5th. Your cantrips deal maximum damage when cast against creatures with fewer Hit Dice than your character level. When you craft a spell, you may add one additional component without increasing the crafting time.

## Level 17: Specialization Final Evolution

### Elementalist — Elemental Convergence

Choose a second element (fire, cold, lightning, or acid) — you now have mastery over two elements. You can cast two spells with elemental damage in the same turn (still limited by action economy). Your elemental damage ignores resistance (but not immunity).

### Seer — Omniscient Eye

Your divination abilities have no range limit on the same plane. You can maintain two instances of Foresight Echo simultaneously. When you use Portent, you roll 3d20 (instead of 2d20) and can replace any roll within 120 ft. Once per long rest, you can glimpse 1 minute into the future, gaining advantage on all rolls and immunity to being surprised for that duration.

### Necromancer — Lord of the Dead

You can control up to 20 undead simultaneously (instead of the usual limit). Your raised undead gain +2 to all rolls and +10 HP. You can cast one necromancy spell as a ritual without increasing casting time. Once per short rest, you can drain life from a corpse within 30 ft to heal yourself for 4d8 HP.

---

## Level 20 Apex Ability: Arcane Singularity

**Once per long rest (1 week)**

You tear a hole in the fabric of magic itself, becoming a living conduit for unlimited arcane power. For a brief moment, you transcend the normal limits of spellcasting.

**Effects:**
- Immediately cast any spell you know of 5th level or lower without expending a spell slot
- For 1 minute, you can cast two spells per turn (instead of the normal spell + cantrip limitation) — you are limited only by your action economy (3 actions)
- Your spell save DC increases by +3
- You ignore material components for spells (except those consumed and with a listed cost)
- Counterspell attempts against your spells automatically fail

**Drawback:** When Arcane Singularity ends, you immediately gain 2 Burnout Points as magical backlash courses through your body. The arcane power leaves scars.
