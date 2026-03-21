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
starting_cp: 15
role: AOE Mage/Control
magic_type: "Full caster (7th-level cap)"
level_1_features: [Spell Crafting, Cantrips, Arcane Ward]
skill_trees:
  - name: Elemental Mastery
    focus: Offense
    abilities:
      - {name: Elemental Focus, cp_cost: 5, tier: 1, effect: "+1 damage per die on chosen element"}
      - {name: Elemental Penetration, cp_cost: 10, tier: 2, effect: "Enemies have disadvantage on saves vs your chosen element spells"}
      - {name: Elemental Apotheosis, cp_cost: 15, tier: 3, effect: "Maximize damage dice on chosen element spell 1/SR"}
  - name: Esoteric Knowledge
    focus: Utility
    abilities:
      - {name: Spell Lore, cp_cost: 5, tier: 1, effect: "Identify any spell being cast within 60 ft"}
      - {name: Arcane Sight, cp_cost: 10, tier: 2, effect: "Detect magic at will"}
      - {name: Forbidden Grimoire, cp_cost: 15, tier: 3, effect: "Access to restricted spells"}
  - name: Arcane Defense
    focus: Defense
    abilities:
      - {name: Mage Armor, cp_cost: 5, tier: 1, effect: "Base DV becomes 13 + AGI modifier (doesn't stack with worn armor)"}
      - {name: Arcane Shield, cp_cost: 10, tier: 2, effect: "+5 DV as reaction spell (uses spell slot)"}
      - {name: Spell Reflection, cp_cost: 15, tier: 3, effect: "Redirect spell back at caster"}
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
    description: "Choose one 1st or 2nd-level spell. Cast it at-will without a slot. Costs 15 CP for 1st-level, 25 CP for 2nd-level."
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
  - {level: 16, slots: [4, 3, 3, 3, 2, 1, 1]}
  - {level: 17, slots: [4, 3, 3, 3, 2, 1, 1]}
  - {level: 18, slots: [4, 3, 3, 3, 2, 1, 1]}
  - {level: 19, slots: [4, 3, 3, 3, 2, 1, 1]}
  - {level: 20, slots: [4, 3, 3, 3, 2, 1, 1]}
starting_cantrips: 3
cantrips_by_level:
  - {level: 1, count: 3}
  - {level: 5, count: 4}
  - {level: 11, count: 5}
  - {level: 17, count: 6}
specialization_details:
  - name: Elementalist
    role: Elemental Control
    features:
      - name: Elemental Affinity
        level: 6
        action: Passive
        description: "Choose one element (fire, cold, electric, acid). Add INT mod to damage of chosen element spells. Can change any spell's damage type to chosen element. Grants Elemental Resonance system — elemental spells mark targets/areas with resonance; hitting a resonant target with a different element triggers a Resonance Combo (secondary effect based on the element pair)."
        choices:
          - {name: Fire, effect: "Fire affinity: +INT to fire damage"}
          - {name: Cold, effect: "Cold affinity: +INT to cold damage"}
          - {name: Electric, effect: "Electric affinity: +INT to electric damage"}
          - {name: Acid, effect: "Acid affinity: +INT to acid damage"}
      - {name: Sculpt Spells, level: 6, action: Passive, description: "When casting AOE, choose up to INT mod creatures in area: they auto-succeed saves, take no damage, and are immune to Resonance Combo effects from that spell."}
      - {name: Elemental Surge, level: 8, action: "On Combo Trigger", description: "1/Short Rest. Empower a Resonance Combo: damage combos deal double damage, condition combos impose disadvantage on saves, duration combos last twice as long. Resonance is not consumed (persists for a follow-up combo)."}
      - {name: Elemental Adaptation, level: 8, action: Passive, description: "Resistance to chosen element. When you take chosen element damage, next spell of that element within 1 min deals +1d4 bonus damage."}
      - {name: Cataclysm, level: 10, action: "On Spell Cast", description: "1/Long Rest. Spell triggers Resonance Combos with ALL elements simultaneously. Ignores resistance (treats as normal). Treats immunity as resistance. All affected creatures gain resonance matching spell element (old resonance combos trigger first)."}
      - {name: Resonance Attunement, level: 11, action: Passive, description: "When triggering a Resonance Combo vs. single target, target immediately gains new resonance matching triggering spell's element (post-combo re-seeding). Combo damage +1d6 of triggering element if combo imposes a condition."}
      - {name: Primed Field, level: 13, action: Passive, description: "Elemental Resonance persists 2 rounds (until end of second next turn). Resonance on Slowed or Immobilized targets persists 4 rounds."}
      - {name: Elemental Cascade Mastery, level: 15, action: Passive, description: "When Cataclysm triggers combos: damage combos +1 die, condition combos +2 DC, duration combos +1 round. All triggered combos are heightened simultaneously. Stacks with Elemental Surge."}
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
      - {name: Foresight Echo, level: 10, action: "1 Action", description: "1/Long Rest. 1 minute. Cannot be surprised. Attacks against you have disadvantage. On activation: roll 3d20 as Destiny Dice. Spend Destiny Dice as free reactions (not regular reaction) to replace any visible creature roll (like Portent). Each Destiny Die spent generates 1 Sight token (Fated Insight). Portent dice and Destiny Dice are separate pools, usable simultaneously. Unused Destiny Dice lost on window end."}
      - {name: Prophet's Clarity, level: 11, action: Passive, description: "Portent increases to 3d20 per long rest (4d20 if Deep Portent is also purchased). Forewarning (3 Sight) now applies to all allies within 60 ft, not just one."}
      - {name: Thread of Fate, level: 13, action: Free, description: "1/Short Rest. Spend 2 Sight tokens to reroll your own attack roll, save, or ability check. Must take second result."}
      - {name: Unwritten Outcome, level: 15, action: Passive, description: "On Foresight Echo activation: prime up to 2 Sight tokens (free actions during window). Sight token max increases to 5 while Foresight Echo is active (returns to 3 when Echo ends)."}
  - name: Necromancer
    role: Undead/Drain
    features:
      - name: Soul Harvest
        level: 6
        action: Passive
        description: "When a creature dies within 30 ft, gain 1 Soul Essence (max 4). Includes kills by your servant. Essences fade at end of encounter or after 1 minute."
      - name: Raise Servant
        level: 6
        action: "1 min ritual / 1 Action + 1 Essence"
        description: "1/Long Rest ritual. OR spend 1 Soul Essence + 1 Action to raise from a fresh corpse (died within 1 hour). Servant HP: 10 + (Necromancer level × 3). DV 12. Attack: +4 + (half prof bonus) to hit; 1d8 + (Necromancer level ÷ 2) damage. 30 ft speed. Saves: Fort +3/Ref +0/Will +0. Command: 1 action. Max 1 servant (increases to 2 at L15 via Choir of the Dead). Feed Essence when commanding: Bolster (heal 2d8+level HP), Empower (+1d6 necrotic next attack), or Quicken (extra attack this turn)."
      - name: Life Drain
        level: 6
        action: Passive
        description: "When dealing necrotic damage, heal HP equal to half damage dealt. Amplified Drain: spend 1 Soul Essence after dealing necrotic damage to heal the full amount instead."
      - {name: Armored Vessel, cp_cost: 10, tier: 2, effect: "Servant DV = your spell save DC (8 + INT mod + proficiency bonus) instead of 12. Scales with your stats."}
      - {name: Undying Resolve, cp_cost: 15, tier: 3, effect: "1/LR: servant reduced to 0 HP → reduced to 1 HP instead. Also: reaction + 2 Essences to reduce incoming servant damage by WIS mod × 2."}
      - {name: Death's Harvest, level: 11, action: Passive, description: "Soul Essence cap increases to 6. Lingering Harvest overflow persists until end of next turn (was: must spend before end of current turn)."}
      - {name: Strengthened Binding, level: 13, action: Passive, description: "Servant attack rolls use full proficiency bonus (up from half). Servant saves use +WIS modifier. Servant attacks count as magical. If Servant's Acuity is also purchased: attack = +4 + full proficiency bonus + INT modifier (stays within the +14 bounded accuracy ceiling)."}
      - {name: Choir of the Dead, level: 15, action: Passive, description: "May maintain 2 active servants simultaneously. Second servant raised via same methods as first (ritual or Quick Raise: 1 action + 1 Essence). Shared command costs 1 action; individual commands cost 1 action each. Feed Essence applies per-servant."}
      - name: "Death's Command"
        level: 8
        action: "1 Action"
        description: "Spend Soul Essences for powerful effects. Soul Burst (2 Essences): 15-ft radius on self or servant, 3d6 necrotic, Fortitude half, triggers Life Drain. Corpse Detonation (1 Essence): detonate corpse within 30 ft, 2d6 necrotic 10-ft radius, Reflex half. Soul Bind (1 Essence): link target to servant, damage to one hurts both for half."
      - name: Weaken
        level: 8
        action: "1 Action"
        description: "Concentration, 1 minute. 30 ft. Will save DC 8+INT+prof. Fail: disadvantage on attacks and MIG checks. Repeat save each turn."
      - name: "Death's Embrace"
        level: 10
        action: Touch
        description: "1/Long Rest. Choose one effect. Soul Essence integration: Death Touch kill grants 4 Essences; Resurrection target provides 2 Essences."
        choices:
          - {name: Resurrection, effect: "Target dead less than 1 hour returns to life at half max HP. Costs you 1 exhaustion. You gain 2 Soul Essences (the echo of a soul pulled back from death)."}
          - {name: Death Touch, effect: "Will save DC 8+INT+prof. Fail: 10d6 necrotic. Success: half. Life Drain applies. If target dies, gain 4 Soul Essences."}
specializations: [Elementalist, Seer, Necromancer]
starting_equipment:
  - Simple weapon
  - Ritual components pouch
  - "Scholar's kit"
  - Wasteland robes
---
# Mystic

> **Recommended Build Guide — Classless System**
> This file describes the **Mystic recommended build**: a curated path through Ashfall's shared skill trees designed for this build's core fantasy. Under the current rules, you are **not locked to this build**. Choose a **chassis** for your starting stats and proficiencies, then spend **Character Points (CP)** in any skill trees that match your character concept.
>
> - **Chassis selection and starting stats:** see [Chassis](../chassis.md)
> - **CP economy, spending rules, and milestones:** see [Character Points](../character-points.md)
> - **Full skill tree catalog:** see [Skill Trees](../skill-trees.md)
>
> The ability descriptions, skill tree layouts, and feature details in this file remain the authoritative rules reference for those abilities. The CP values listed in the skill trees are the costs for purchasing abilities.

*The old world burned because it forgot the first rule: reality is negotiable. You haven't. While others cling to steel and circuits, you manipulate the fundamental forces that underpin existence. Magic in the Wasteland isn't flashy or safe — it's raw, unpredictable, and hungry. Every spell you cast is a gamble, a pact, a scream into the void. And the void? It screams back.*

*You are the Mystic. You've learned to weave spells from fragments of pre-war grimoires, whispered secrets from the irradiated dead, and your own desperate experimentation. You are fragile, yes — bullets kill you just as easily as anyone else. But you don't need armor when you can reshape the battlefield, unmake your enemies, and bend probability itself. You are not a survivor. You are an inevitability.*

![A mystic channels raw arcane energy, reality bending around their outstretched hands](/images/illustrations/mystic-casting.png)

---

## Base Build (Levels 1-5)

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
| **Starting CP** | 15 |

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

- **VITAE Cantrip (Enhanced):** One of your starting cantrips can be VITAE (Life). In addition to its normal stabilization effect, you can use it as **1 action (1/Short Rest)** to touch a creature (including yourself) and restore **1d4 + your INT modifier HP**. This healing increases to 2d4 at 5th level, 3d4 at 11th level, and 4d4 at 17th level.

#### Level 2: Ritual Casting

**Ritual Casting (Requires Spell Known):** You can cast any spell you know as a **ritual**, even if it doesn't normally have the ritual tag. Casting a spell as a ritual takes **10 minutes + 10 minutes per spell level** (see Magic chapter for full ritual casting rules) and does not consume a spell slot. You cannot ritual cast during combat.

#### Level 3: Arcane Recovery

**Arcane Recovery (1/Short Rest, 1 Minute):** During a short rest, you can recover expended spell slots. The total levels of recovered slots equals **half your Mystic level, rounded up**. At Level 3, you can recover one 1st-level slot or one 2nd-level slot. At Level 5, you can recover two 1st-level slots, one 2nd-level slot, or one 3rd-level slot.

#### Level 4: Attribute Improvement & Counterspell

- **Attribute Improvement:** Increase one attribute by +2, or two attributes by +1 each (maximum 20 before modifiers).
- **Counterspell (Baseline Feature):** As a **reaction (1/Short Rest)**, when you see a creature cast a spell within 60 feet, you can attempt to counter it. Make an INT check (DC = 10 + spell level). On success, the spell fails. *Note: This feature replaces the legacy Counterspell spell (3rd-level, Magic chapter). Mystics who have this feature do not need to prepare or use the legacy spell version — this feature supersedes it.*

#### Level 5 Capstone: Signature Spell

**Signature Spell (Permanent Enhancement):** Choose one 1st-level or 2nd-level spell you know. You can cast this spell **at-will without consuming a spell slot**. If you choose a 2nd-level spell, it costs 10 additional CP to unlock this capstone (total 25 CP).

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

- **Elemental Focus (5 CP):** Choose one damage type (fire, cold, electric, acid, or force). Your spells of that type deal +1 damage per die rolled.
- **Elemental Penetration (10 CP, Requires Elemental Focus):** Enemies have disadvantage on saves against your spells of your chosen damage type.
- **Elemental Apotheosis (15 CP, Requires Elemental Penetration):** Once per short rest, maximize all damage dice on one spell of your chosen damage type.

#### Esoteric Knowledge (Utility & Information)

- **Spell Lore (5 CP):** You can identify any spell being cast within 60 feet as a free action.
- **Arcane Sight (10 CP, At-Will Cantrip):** You can see magical auras, invisible creatures, and illusions within 30 feet.
- **Forbidden Grimoire (15 CP, Requires Spell Lore):** Learn one spell from any class's spell list. This spell counts as a Mystic spell for you.

#### Arcane Defense (Survival & Protection)

- **Mage Armor (5 CP, At-Will):** As a 1-action activity, your base DV becomes **13 + AGI modifier** for 8 hours. Doesn't stack with worn armor.
- **Arcane Shield (10 CP, Learned Spell):** You learn the *Arcane Shield* spell and can add it to your spellbook. *Arcane Shield* is a 1st-level spell that you can cast as a **reaction** when you are hit by an attack or spell, granting you **+5 DV** until the start of your next turn. (Distinct from the Ward cantrip, which grants +3 DV at no slot cost.)
- **Spell Reflection (15 CP, Requires Arcane Shield):** When you successfully use *Arcane Shield* to cause an attack to miss you (the attack roll + your boosted DV fails to hit), you can redirect the attack to a target of your choice within 30 feet using the same attack roll.

### Magic Relationship

Mystics are **full casters** and have the most robust spellcasting progression in the game. However, their magic caps at **7th-level spells** at Level 20 (not 9th, as in some systems). This maintains bounded accuracy and ensures Mystics remain powerful but mortal. Mystics rely on intelligence and creativity, not raw cosmic power.

---

## Advanced Specializations (Levels 6-10)

Mystics who reach level 6 have demonstrated control over the wasteland's strange energies. Now they focus their craft: unleashing raw destruction as an Elementalist, manipulating fate as a Seer, or commanding the dead as a Necromancer.

**System Notes:**
- All characters gain 10 CP per level from levels 6-10
- Short rest: 8 hours
- Long rest: 1 week
- Bounded accuracy: maximum total bonus of +18
- 3-action economy per turn

### Elementalist (Elemental Control)

*Raw elemental power channeled through intellect and instinct. The Elementalist doesn't just throw fire — they reshape the battlefield into a crucible of layered elemental forces. Where others see a single spell, the Elementalist sees a chain reaction waiting to happen.*

**Prerequisites:** Level 6, Mystic build

**New Skill Tree Unlocked:** Destruction (maximize spell damage, AoE enhancement, elemental mastery, spell penetration)

#### Core Mechanic: Elemental Resonance

When you cast a spell that deals elemental damage (fire, cold, electric, or acid), the area or target gains **Elemental Resonance** matching that element. Resonance lingers until the end of your next turn.

- **On a single target:** The target is marked with that element's resonance.
- **On an area (AoE):** The affected area retains resonance in a zone matching the spell's area.

When you cast a second elemental spell that strikes a resonant target or area, you trigger a **Resonance Combo** — a secondary effect based on the combination of the two elements. The first resonance is then consumed.

**Resonance Combo Table:**

| First Element | Second Element | Combo Effect |
|---------------|----------------|--------------|
| Fire | Cold | **Thermal Shock:** 2d6 force damage to all creatures in the area. Objects and constructs take double this damage. |
| Fire | Electric | **Plasma Burst:** 2d6 fire damage in a 10-ft radius around the point of impact. Creatures that fail a Reflex save (your spell DC) are Dazed for 1 round. |
| Fire | Acid | **Caustic Blaze:** Burning acid clings to targets. Creatures take 1d6 acid damage at the start of their next turn (no save). Flammable objects in the area ignite. |
| Cold | Electric | **Flash Freeze:** Targets are encased in crackling ice. Creatures that fail a Fortitude save (your spell DC) are **Slowed** until the end of their next turn. |
| Cold | Acid | **Brittle:** Targets' armor and natural defenses crack. Creatures that fail a Fortitude save (your spell DC) take -2 DV until the end of their next turn. |
| Electric | Acid | **Galvanic Corrosion:** Electrically charged acid eats through defenses. Targets lose resistance to acid and electric damage until the end of their next turn. If they had no resistance, they instead take +1d6 electric damage. |

**Matching Elements:** If you apply the same element twice (e.g., fire on fire), the resonance intensifies instead of triggering a combo. The second spell deals +1d6 damage of that element (elemental overload).

**Limitations:**
- Only YOUR spells create and trigger resonance. Allies' elemental spells don't interact with your resonance.
- A target or area can only hold one resonance at a time. Applying a new element replaces the old one (unless you trigger the combo).
- Resonance combos trigger automatically when the second spell hits — you don't spend an additional action.
- Cantrips create and trigger resonance just like leveled spells.

> *Example: You cast Cryo Ray (cold damage) at a bandit, marking them with cold resonance. Next turn, you cast Volta Bolt (electric damage) at the same bandit. The cold + electric combo triggers Flash Freeze: the bandit must make a Fortitude save or be Slowed (half speed, no reactions, disadvantage on AGI saves). You still deal the normal Volta Bolt damage — the combo is a bonus effect layered on top.*

#### Level 6 Features

**Elemental Affinity** (Choose One Element)
Choose one damage type: fire, cold, electric, or acid. You gain the following benefits:
- Add your **Intellect (INT) modifier** to damage rolls for spells that deal your chosen element
- When you cast a spell that deals damage, you can **change its damage type** to your chosen element
- You gain the **Elemental Resonance** system described above (resonance works with ALL elements you cast, not just your chosen one)

*Your chosen element is your primary weapon, but mastery means understanding how all elements interact. A fire Elementalist who opens with a cold spell to set up a Thermal Shock combo is playing exactly as intended.*

**Sculpt Spells** (Passive)
When you cast a spell that affects an area (AoE), you can choose a number of creatures in the area up to your **Intellect modifier**. Those creatures:
- Automatically succeed on their saving throw against the spell
- Take no damage from the spell

Sculpted creatures are also immune to any Resonance Combo effects triggered by that spell.

*This allows you to layer elemental zones on the battlefield without harming your allies — the Elementalist's precision control over their destructive power.*

#### Level 8 Features

**Elemental Surge** (1/Short Rest)
Once per short rest, when you trigger a Resonance Combo, you can empower it. The combo's effects are enhanced:
- Damage-dealing combos deal **double damage** (e.g., Thermal Shock deals 4d6 instead of 2d6)
- Condition-inflicting combos impose **disadvantage** on the saving throw
- Duration-based combos last **twice as long** (e.g., Slowed lasts until end of target's second turn instead of next turn)

Additionally, when you use Elemental Surge, the combo does not consume the resonance — the original resonance persists, allowing you to trigger a second combo with a third spell on your next turn.

*Elemental Surge is your "big moment" ability — the turn where a carefully planned chain of elemental effects cascades across the battlefield. Timing it correctly (after setting up resonance the previous turn) is the difference between a good Elementalist and a great one.*

> *Example: You have a group of enemies marked with cold resonance from last turn. You cast a fire AoE this turn and activate Elemental Surge. Thermal Shock triggers at double damage (4d6 force), AND the cold resonance persists — meaning next turn, you can trigger another combo (cold + whatever you cast) without needing to reapply cold first.*

**Elemental Adaptation** (Passive)
You gain **resistance** to your chosen element's damage type. Additionally, when you take damage of your chosen element, your next spell of that element (cast within 1 minute) deals +1d4 bonus damage as you absorb and redirect the energy.

*The Elementalist doesn't just command the elements — they commune with them. Taking fire damage makes your next fire spell burn hotter. This creates a risk-reward dynamic: standing in your own Resonance Combo zone is dangerous, but it fuels your next attack.*

#### Level 10 Capstone Ability

**Cataclysm** (1/Long Rest)
Once per long rest, you can invoke Cataclysm when you cast a damage-dealing spell. The spell gains the following benefits:

- The spell triggers Resonance Combos with **ALL elements simultaneously** — every combo that includes the spell's element fires at once. If the target or area has cold resonance and you cast a fire spell under Cataclysm, the Fire+Cold combo triggers. If you also had acid resonance on another target in the area, Fire+Acid triggers on that target too.
- The spell **ignores damage resistance** (treats resistance as normal damage)
- The spell **treats damage immunity as resistance** (immune creatures take half damage)
- Every creature affected by the spell gains resonance matching the spell's element, even if they already had a different resonance (the old resonance triggers its combo first, then the new resonance applies)

*Cataclysm is the Elementalist's ultimate expression of elemental mastery — a single spell that detonates every lingering elemental charge on the battlefield. The ideal Cataclysm turn: spend previous rounds painting the battlefield with different resonances, then unleash one massive spell that triggers chain reactions across every affected target.*

> *Example: Three enemies are clustered together. Over the past two rounds, you've marked them with cold, acid, and electric resonance respectively. You cast a 3rd-level Fireball under Cataclysm. The fireball hits all three: the cold-resonant enemy triggers Thermal Shock (2d6 force), the acid-resonant enemy triggers Caustic Blaze (1d6 acid next turn), and the electric-resonant enemy triggers Plasma Burst (2d6 fire + Dazed save). All three also take full fireball damage (8d6 fire, ignoring resistance). Then all three gain fire resonance, setting up your next turn.*

#### Interaction with L17 Elemental Convergence

The L17 feature **Elemental Convergence** (see **Progression**) allows combining two damage types into a single spell and, once per short rest, casting a spell that deals all four elemental damage types simultaneously. This interacts with Resonance as follows:

**Dual-Type Spells:** When a spell deals two damage types (e.g., fire + cold), it applies resonance for the **first listed type** (caster's choice if simultaneous). If the target already has resonance, the spell triggers a combo using whichever of its two types matches the existing resonance. If both types could trigger a combo, the caster chooses which combo fires. The target then gains resonance matching the spell's other damage type.

> *Example: You cast a fire+cold spell at a target with acid resonance. You choose whether Fire+Acid (Caustic Blaze) or Cold+Acid (Brittle) triggers. The target then gains resonance matching the unchosen type.*

**All-Element Spell (1/SR):** When you cast a spell dealing all four elemental damage types, it triggers a combo with ANY existing resonance on the target (caster's choice of which element pair). The target then gains resonance of the caster's choice from the remaining types. Under **Cataclysm**, the all-element spell triggers ALL possible combos with existing resonance simultaneously — this is the Elementalist's ultimate fantasy, a single spell detonating every elemental charge on the battlefield at once.

![An arcane cataclysm erupts as magical forces tear through the wasteland](/images/illustrations/arcane-cataclysm.png)

---

### Destruction (Elemental Mastery — Specialization Tree)

Available only to Elementalists (L6+ specialization). The Destruction tree deepens the Elemental Resonance engine: extending combo windows, opening new resonance possibilities, and eventually rewriting how combos cascade across the battlefield. Every ability here is designed to make your resonance setups more powerful, more reliable, and more devastating when they fire.

**Tier 1 Abilities (5 CP each):**

- **Extended Resonance (5 CP):** Elemental Resonance you apply persists for **2 rounds** (until the end of your second next turn) on single targets. Resonance applied via **area-of-effect spells** persists for **3 rounds** instead.

  Additionally, when resonance you applied expires **naturally** on a target without being combo-triggered (the mark runs out before you land the second element), it releases a **Resonance Echo**: deal **1d4** damage of the expiring element's type to that target. No attack roll or action required — the discharge happens automatically at the moment the mark fades. This triggers once per mark expiry.

  *Extended Resonance was always about time pressure. Now the pressure has teeth: survive my mark and still take damage.*

  > *Stacking note: At L13, Primed Field grants all resonance 2-round duration as a feature. Extended Resonance's single-target duration is then matched by Primed Field — but its area resonance extension (3 rounds) and Resonance Echo pulse remain unique at all levels. Purchasing Extended Resonance before L13 provides the full duration benefit during L6–12; after L13, the value shifts to AoE coverage and the Echo.*

- **Overload (5 CP):** When you cast an elemental spell at a target that already has matching resonance (normally triggering the +1d6 bonus via Matching Elements), you can choose to **Overload** instead. The target makes a **Fortitude save (your spell DC)**. On a failure, they are **Dazed until the end of their next turn** (actions OR movement, not both; no reactions). The +1d6 Matching Elements bonus still applies. You must declare Overload before rolling the save. *The same-element doubling-down now has teeth — fire-on-fire stuns instead of just burning harder.*

**Tier 2 Abilities (10 CP each, requires one Tier 1):**

- **Resonance Cascade (10 CP):** When you trigger a Resonance Combo from an area spell (any AoE that hits multiple targets), each affected creature gains resonance matching your **second spell's element** after the combo resolves. You effectively repaint the area with a new resonance in a single casting. Additionally, your allies' elemental spells can now **spend your resonance** — if an ally hits a creature you've resonance-marked, their elemental spell triggers the combo (they don't apply new resonance, just trigger yours). The resonance is consumed normally. *The Elementalist becomes a resonance broker: you paint the field, your allies ignite it.*

- **Dual Mark (10 CP):** A single target can hold **two simultaneous resonances**. When you apply a second element to a marked target rather than triggering a combo, you may choose to **stack** the marks instead (both elements persist). When you cast a third elemental spell that matches either mark, **both combos trigger simultaneously** — each is resolved separately, in an order you choose. Both resonances are then consumed. Elemental Surge can empower one of the two triggered combos (you choose which when activating Surge). *The double-setup fantasy: a boss saturated in two elements becomes a detonation waiting for a single match.*

**Tier 3 Abilities (15 CP each, requires one Tier 2):**

- **Cataclysm Unleashed (15 CP):** Cataclysm's recharge changes from **1/Long Rest** to **1/Short Rest**. Additionally, when you use Cataclysm, choose one Resonance Combo it triggers — that combo fires as if you had used **Elemental Surge** simultaneously (double damage on damage combos, disadvantage on saves for condition combos, doubled duration on duration combos). This applies even if you've already used Elemental Surge this combat. *Weekly rest makes Cataclysm a once-per-arc moment. Short rest returns it to what it should be: the Elementalist's defining tool, not a novelty.*

- **Chain Resonance (15 CP):** When you trigger a Resonance Combo, the combo element automatically applies as a new resonance to all creatures within a **10-foot radius** of the primary target — not just the target itself. This "splash" resonance doesn't trigger additional combos during the current spell's resolution, but any subsequent elemental spell can chain reactions through the cluster. Additionally, when a Resonance Combo you trigger inflicts a duration-based condition (Slowed, Dazed, Brittle, Galvanic Corrosion), the duration increases by **1 round**. *One combo seeds the room. Next turn, a single spell through the cluster detonates everything at once.*

---

### Seer (Divination/Control)

*The Seer perceives the threads of possibility woven through reality. They manipulate probability, read minds, and control the flow of battle through foresight. To fight a Seer is to struggle against fate itself.*

**Prerequisites:** Level 6, Mystic build

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

**Fated Insight** (Passive — Sight Tokens)

When you actively manipulate probability using your Seer abilities, you accumulate **Sight tokens** — brief crystallizations of foreknowledge that can be redirected into decisive actions. Sight tokens represent the Seer's growing clarity as the combat pattern reveals itself.

**Gaining Sight:**
- You use a Portent die to replace a creature's roll → gain **1 Sight**
- You successfully alter a roll with Bend Luck (the creature's final result changes because of your use) → gain **1 Sight**
- Cognitive Assault hits a target (regardless of save result) → gain **1 Sight**

You can hold a maximum of **3 Sight** at a time. Unspent Sight fades at the end of combat or after 1 minute out of combat.

**Spending Sight:**

| Sight Cost | Effect | Trigger |
|-----------|--------|---------|
| **1 Sight** | **Freeform Read:** Your next use of a Portent die (this round only) does not cost your reaction — it triggers as a free action when the same circumstance would normally prompt you to use a Portent die. Your reaction remains available for other uses this round. | Declare before using a Portent die |
| **2 Sight** | **Veil of Inevitability:** Your next Cognitive Assault, whether it hits or misses, causes the target to have **disadvantage on both their next attack roll AND their next saving throw** (until the end of their next turn). This replaces the normal Daze-on-fail effect — the target still takes full damage on a failed save and half damage on a success, but the daze is swapped for the guaranteed dual disadvantage. | Declare before rolling Cognitive Assault |
| **3 Sight** | **Forewarning:** As a free action, you issue a precise warning to one ally within 60 feet who can hear you. That ally gains **advantage on their next saving throw this round** — any save, of any type. The warning can be as brief as a word or gesture. You don't need to know what the save is against. | Free action, any point on your turn |

**The Seer's Loop:**

The Seer's combat turn now has a proactive rhythm: use Portent and Bend Luck to accumulate Sight, then spend it. A Seer who opens with Cognitive Assault (1 Sight) and burns a Portent die (1 Sight) has 2 Sight — enough to declare Veil of Inevitability on their next Cognitive Assault. A Seer who manages the Sight pool for two turns can Forewarning an ally before a critical moment. The resource is deliberately temporary (fades at end of combat) to incentivize active spending over cautious hoarding.

*The Elementalist asks "what combo do I set up?" The Necromancer asks "what do I spend this on?" The Seer, now, asks: "how much do I know right now, and what can I do with it?"*

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

Once per long rest as 1 action, you can activate Foresight Echo for **1 minute (10 rounds)**.

While Foresight Echo is active, you see moments ahead of time in crystalline clarity — not as passive premonition, but as active foreknowledge you must choose how to spend.

**When you activate Foresight Echo:**
Roll **3d20** and record all three results. These are your **Destiny Dice** — a concentrated burst of prescience available for the duration of the window.

**During Foresight Echo:**
- **You cannot be surprised**
- **Attack rolls against you have disadvantage**
- You may spend Destiny Dice as **free reactions** — these do not consume your regular reaction. You may spend a Destiny Die and still use your reaction for Bend Luck, opportunity attacks, or other effects in the same round.
- Each Destiny Die you spend works exactly like a **Portent die**: replace any visible creature's attack roll, saving throw, or ability check (before or after the roll, as with Portent) with the recorded Destiny result. Fated Insight applies — spending a Destiny Die generates **1 Sight token**, identical to spending a Portent die.
- Unused Destiny Dice are lost when Foresight Echo ends.

*The Seer who activates Foresight Echo and plays their three dice wisely — saving a high result to negate an enemy crit, burning a low result to force a save failure on a key target — performs at a level no passive buff can match. The advantage on your own rolls is gone. In its place: three moments where you decide what the dice say.*

> *Example: You activate Foresight Echo and roll 2, 17, and 11 as your Destiny Dice. Round 1 — the enemy commander rolls a critical hit against your ally. You spend your 2 as a free reaction, reducing their attack roll to a miss. Round 3 — the boss attempts to resist your Cognitive Assault. You spend the 17 to replace their Will save, guaranteeing failure. Two Sight tokens generated.*

**Interaction with Portent:**
Your stored Portent dice (from your daily long rest rolls) are separate from your Destiny Dice. Both pools are available simultaneously during Foresight Echo. You may use a Portent die via your normal reaction and a Destiny Die via a free reaction in the same round.

**Interaction with Bend Luck:**
Bend Luck (add or subtract 1d4/1d6 from a roll) uses your reaction as normal. Destiny Dice use free reactions. Both can apply to the same target's roll if desired.

**Interaction with Anticipated Action:**
Spending a Destiny Die during Foresight Echo triggers **Anticipated Action** (Prescience Tier 2) — Destiny Dice replace rolls via the same prescience mechanic as Portent, and Anticipated Action rewards the same behavior regardless of which pool the die comes from.

---

### Prescience (Probability Mastery — Specialization Tree)

Available only to Seers (L6+ specialization). The Prescience tree expands the Seer's probability engine: more Portent dice, sharper Bend Luck, and higher-stakes uses for the Sight tokens generated by active probability manipulation (see **Fated Insight** — the passive ability in the Seer's Level 6 Features). Every ability here rewards the player who engages with Portent and Bend Luck actively, rather than hoarding dice for a safe moment that might never come.

**Tier 1 Abilities (5 CP each):**

- **Deep Portent (5 CP):** After each long rest, you roll **+1d20** for Portent (for a total of 3d20, or 4d20 if **Prophet's Clarity** is also in effect at L11), recording all results. You may use any die to replace a visible creature's roll, as normal — unused dice are lost at next long rest. Additionally, when you use a Portent die to replace a natural 1 or natural 20 (in either direction — preventing a crit or preventing a crit-fail), you gain **1 Sight token** immediately. Foreknowledge of the extreme moments is the sharpest foreknowledge of all.

- **Sharpened Luck (5 CP):** When you use Bend Luck, add or subtract **1d6** (instead of 1d4) from the target roll. Additionally, Bend Luck can now target your own rolls: when you make an attack roll, ability check, or saving throw, you can use your reaction to add or subtract 1d6 from your own result. This consumes one of your WIS modifier uses per short rest, as normal. *Bend Luck was always good. Now it bends further.*

**Tier 2 Abilities (10 CP each, requires one Tier 1):**

- **Fated Knowledge (10 CP):** Once per short rest, as a free action, you may discard one stored Portent die (it is lost, not used as a replacement) to extract a flash of fated insight. You immediately learn one of the following (truthfully, as if you had directly perceived it): the most dangerous enemy's current exact HP total, whether a specific creature is lying about a statement made in the last 10 minutes, or the DC of the next skill check or saving throw the party will face this scene. Using this ability also grants **1 Sight token**.

- **Anticipated Action (10 CP):** When you use a Portent die as a reaction to replace a visible creature's roll (standard Portent), you may choose one additional effect at no extra cost: move up to half your speed without provoking opportunity attacks (you saw them moving before they committed), grant one ally within 30 ft their reaction back if they've already spent it this round (you warned them in time), or gain **1 Sight token** from the foreknowledge expended. Choose one effect each time you use Portent — you may not use the same effect twice in a row.

**Tier 3 Abilities (15 CP each, requires one Tier 2):**

- **Crisis Foresight (15 CP):** Once per short rest, when any creature within 60 feet is reduced to 0 HP, you may immediately use a Portent die as a **free action** (not a reaction — this happens in the moment, outside the normal action economy) to retroactively replace the attack or check that reduced them to 0 HP. If the replacement prevents the hit or save failure, the creature is at 1 HP instead of 0. If you have no Portent dice remaining, Crisis Foresight generates one emergency die — roll 1d20 and use it as the replacement (this die is not a stored Portent die; it appears and is spent in the same instant). *The Seer's ultimate purpose: seeing the killing blow before it lands and redirecting fate at the last moment.*

- **Mind Unveiled (15 CP):** Whenever Cognitive Assault hits a target (regardless of whether they save), you may spend **2 Sight tokens** as a free action to read the surface layer of their mind. You immediately learn three things: their current primary directive or goal (stated as a one-sentence motivation), their deepest fear (stated as a descriptor the GM deems relevant), and one mechanically relevant weakness the GM chooses to reveal (a vulnerability, an unactivated special ability, a missing immunity, or a key weak point). This information can be communicated to your allies as a free action. Mindless creatures are immune. *Cognitive Assault was always a probe. Now it's a key.*

---

### Necromancer

*The boundary between life and death is a resource. Every corpse is fuel. Every kill is currency. The Necromancer doesn't fear death --- they manage it.*

The Necromancer specialization transforms the Mystic into a death-powered controller who harvests energy from fallen creatures and reinvests it into an escalating cycle of minion empowerment and necrotic destruction. Where the Elementalist plans combos across elements and the Battlemage builds charges through alternating spell and steel, the Necromancer's power comes from **external events** --- things dying around them. The more death, the more options. The question is never "can I afford to act?" but "**what do I spend this on?**"

---

#### Core Mechanic: Soul Essence

When a creature dies within **30 feet** of you, you collect a **Soul Essence** --- a visible wisp of ghostly energy that orbits your body. Soul Essences are the fuel for your Necromancer abilities.

**Gaining Essences:**
- A creature (ally, enemy, or neutral) dies within 30 feet of you -> gain **1 Soul Essence**
- Your servant reduces a creature to 0 HP -> gain **1 Soul Essence** (even if beyond 30 feet)
- You can hold a maximum of **4 Soul Essences** at a time

**Spending Essences:**
- Essences fuel **Feed Essence** (servant upgrades), **Amplified Drain** (enhanced healing), and **Death's Command** (L8 abilities)
- Spending is always a conscious choice --- nothing triggers automatically

**Decay:**
- Unspent Essences fade at the **end of combat** or after **1 minute** out of combat
- This creates spend-or-lose tension: hoarding is punished, but spending too early wastes potential

**Visual Flavor:** Essences manifest as pale, ghostly wisps that orbit the Necromancer's head and shoulders. Each wisp flickers like a guttering candle flame. Allies and enemies can see them --- a Necromancer surrounded by four orbiting wisps is visibly dangerous. When spent, the wisp is drawn into the Necromancer's hands, weapon, or servant and consumed in a flash of cold light.

---

#### Level 6 Features

**Soul Harvest** (Passive)

You gain the Soul Essence system described above. Whenever a creature dies within 30 feet of you --- or whenever your raised servant reduces a creature to 0 HP at any range --- you collect 1 Soul Essence. This works regardless of who or what killed the creature. An enemy slain by an ally's attack, a minion that bleeds out from a wound you inflicted three rounds ago, a civilian caught in crossfire --- death is death. You collect.

*Example: The Warrior cleaves a raider standing 25 feet from you. You gain 1 Soul Essence. Your servant then finishes off a wounded scout 40 feet away. You gain another. You now hold 2 Essences and it's your turn.*

---

**Raise Servant** (1/Long Rest Ritual, OR 1 Action + 1 Soul Essence)

You can raise an undead servant in one of two ways:

- **Ritual (Standard):** Spend **1 minute** performing a ritual over a Medium or smaller corpse. This costs no Soul Essences and does not count against your daily limit if the servant is later destroyed and re-raised via the quick method. Usable **once per long rest.**
- **Quick Raise (Combat):** Spend **1 Action** and **1 Soul Essence** to raise a fresh corpse (creature that died within the last hour) within 10 feet of you. This is how you replace a destroyed servant mid-fight.

The servant has the following statistics:

| Stat | Value |
|------|-------|
| HP | 10 + (Necromancer level × 3) |
| DV | 12 |
| Attack | +4 + (half your proficiency bonus, round down) to hit; 1d8 + (Necromancer level ÷ 2, round down) damage (slashing or bludgeoning, chosen at creation) |
| Speed | 30 feet |
| Saves | Fortitude +3, Reflex +0, Will +0 |

**Scaling Reference:**

| Level | HP | Attack Bonus | Damage |
|-------|----|-------------|--------|
| 6 | 28 | +5 | 1d8+3 |
| 8 | 34 | +5 | 1d8+4 |
| 10 | 40 | +6 | 1d8+5 |
| 13 | 49 | +6 | 1d8+6 |
| 15 | 55 | +6 | 1d8+7 |
| 20 | 70 | +7 | 1d8+10 |

The servant obeys your verbal commands. Issuing a command costs **1 action**. Without a command, the servant defends itself but does not move or attack. It acts on your initiative, immediately after your turn. You can have **1 active servant** at a time.

> *Note: You gain the ability to maintain 2 active servants simultaneously at Level 15 via Choir of the Dead (see Level 11–15: Specialization Escalation).*

**Feed Essence** (Part of Command Action)

When you issue a command to your servant (1 action), you may also spend **1 Soul Essence** as part of the same action to apply one of the following enhancements:

| Essence Spent | Enhancement | Effect |
|---------------|-------------|--------|
| 1 | **Bolster** | Servant **heals** hit points equal to **2d8 + Necromancer level** (actual healing, not temporary HP — can restore past damage, cannot exceed max HP) |
| 1 | **Empower** | Servant's next attack deals **+1d6 necrotic damage** (consumed on hit or end of its next turn) |
| 1 | **Quicken** | Servant gains **one additional attack** this turn |

You can only Feed one Essence per command action. This bundles investment and direction into a single action --- you tell your servant what to do and fuel it in the same breath.

*The servant is your investment project. A Necromancer who feeds their servant consistently creates a persistent threat that forces enemies to deal with two targets. A Necromancer who hoards Essences for L8 abilities has a weaker servant but stronger burst options. This is the core tension.*

---

**Life Drain** (Passive)

When you deal necrotic damage to a creature, you heal hit points equal to **half the necrotic damage dealt** (rounded down). This applies to all sources of necrotic damage you deal: spells, cantrips, Death's Command abilities (L8), and your servant's empowered attacks (if dealing necrotic damage via Feed Essence: Empower).

**Amplified Drain** (Spend 1 Soul Essence)

When you deal necrotic damage, you may spend **1 Soul Essence** (no action required --- decided after seeing the damage roll) to heal the **full necrotic damage dealt** instead of half. This decision is made per instance of damage; you don't need to commit before rolling.

*Example: Your necrotic cantrip deals 14 damage. Normal Life Drain heals you for 7. If you spend 1 Essence, you heal for 14 instead. If you're at full HP, save the Essence --- the heal is wasted above maximum.*

---

#### Level 8 Features

**Death's Command** (1 Action, Spend Soul Essences)

You learn to channel Soul Essences into direct applications of death magic. Each use costs **1 Action** and a specified number of Soul Essences. You can use Death's Command once per turn (you have only 3 actions; this competes with spellcasting and servant commands for action economy).

---

**Soul Burst** (2 Soul Essences, 1 Action)

Channel two Soul Essences into a detonation of necrotic energy. Choose the origin point: **yourself** or **your servant** (if the servant is active and you can see it).

- **Area:** 15-foot radius centered on the chosen origin
- **Damage:** 3d6 necrotic damage
- **Save:** Fortitude save (DC = 8 + INT + proficiency) for half
- The origin creature (you or your servant) is not affected
- **Life Drain applies:** You heal HP equal to half the total necrotic damage dealt to all targets (or full, if you spend an additional Essence for Amplified Drain)

*Soul Burst centered on your servant is the signature Necromancer play: send the servant into a cluster of enemies, then detonate. The servant survives; the enemies take 3d6. You heal. The dead ones give you more Essences.*

---

**Corpse Detonation** (1 Soul Essence, 1 Action)

Target a corpse within **30 feet** that you can see. The corpse detonates in a burst of necrotic energy.

- **Area:** 10-foot radius centered on the corpse
- **Damage:** 2d6 necrotic damage
- **Save:** Reflex save (DC = 8 + INT + proficiency) for half
- The corpse is consumed (cannot be raised or detonated again)
- **Life Drain applies**

**Servant-Assisted Detonation:** If your servant is adjacent to a corpse beyond your 30-foot range, you can detonate that corpse through your servant. This costs 1 regular action (Corpse Detonation) + 1 action to command your servant, using your INT, proficiency, and DCs. The servant does not attack that turn --- it serves as a relay point to extend your effective range.

*Corpse Detonation turns the battlefield's dead into a resource. Every corpse is a potential 2d6 bomb. Enemies who cluster near their fallen allies learn quickly. Enemies who spread out leave corpses for your servant to harvest. Either way, you benefit.*

---

**Soul Bind** (1 Soul Essence, 1 Action)

Target one creature within **30 feet**. The target must make a **Will save (DC = 8 + INT + proficiency)**. On a failed save, the target is **soul-linked** to your servant (or to you, if you have no active servant) for **1 minute** (concentration).

While soul-linked:
- When the linked creature takes damage from **any source**, the link's anchor (your servant or you) also takes **half that damage** as necrotic --- and vice versa, when the anchor takes damage from **an enemy**, the linked creature takes half as necrotic. Damage deliberately inflicted on the anchor by allies does not transfer through the link (the link channels hostility, not friendly fire).
- If either the linked creature or the anchor is reduced to 0 HP while linked, you gain **2 Soul Essences** instead of the normal 1
- The linked creature can repeat the Will save at the end of each of its turns to end the effect

*Soul Bind creates a decision: link the boss to your servant, and every hit on the boss also damages your servant (which you've invested Essences into). But every enemy hit on the servant also hurts the boss. And if either dies, you get a double Essence payout. The question is whether the link helps you more than it costs.*

---

**Weaken** (1 Action, Concentration)

As 1 action, target one creature within 30 feet. The target must make a **Will save (DC = 8 + INT + proficiency)** or become weakened for up to **1 minute** (concentration).

While weakened:
- The target has **disadvantage** on all attack rolls
- The target has **disadvantage** on all Might (MIG) checks

The target can repeat the save at the end of each of their turns to end the effect.

*Note: Weaken and Soul Bind both require concentration. You cannot maintain both simultaneously. Choose based on the situation: Weaken for defense (neutering a dangerous attacker), Soul Bind for offense (creating a damage feedback loop and Essence generation).*

---

#### Level 10: Death's Embrace (Updated Integration)

Death's Embrace functions as written, with the following Soul Essence integration:

**Resurrection:**
- Touch a creature that has been dead for no more than 1 hour
- The creature returns to life with **half their maximum hit points**
- You take **1 level of exhaustion**
- You gain **2 Soul Essences** --- the echo of a soul wrenched back from the boundary

**Death Touch:**
- Touch a living creature
- The target must make a **Will save (DC 8 + INT + proficiency)**
- Failed save: **10d6 necrotic damage**
- Successful save: **Half damage** (5d6)
- **Life Drain applies** (heal half; spend 1 Essence for Amplified Drain to heal full)
- If the target dies from Death Touch, you gain **4 Soul Essences** (maximum capacity, regardless of current count)

*Design Note: Death's Embrace is the ultimate expression of the Soul Essence economy. Resurrection costs you exhaustion but pays out in Essences --- the returning soul leaves a trail. Death Touch is the inverse: a massive single-target execution that, if it kills, completely refills your reserves. A Necromancer entering the final phase of a boss fight with a full Death Touch kill can immediately spend all 4 Essences on a devastating follow-up turn.*

---

#### Example Turn: The Decision Space

**Situation:** Level 8 Necromancer, round 3 of combat. You have 2 Soul Essences, an active servant at 12 HP, and two enemies: a raider captain (wounded, 15 HP) and a raider (full HP, 20 HP). There's one raider corpse on the ground between them.

**Option A --- Invest in Servant:**
1. Command servant to attack raider captain + Feed Essence: Empower (1 Essence, 1 action) -> servant attacks with 1d8+2 + 1d6 necrotic. If it kills, you gain 1 Essence back.
2. Cast a necrotic cantrip at the raider (1 action) -> Life Drain heals you
3. Move or cast a second cantrip (1 action)

*Result: You spent 1 Essence but might earn 1 back. Your servant is your weapon. Three legal actions: 1 command + 2 regular.*

**Option B --- Corpse Detonation:**
1. Corpse Detonation on the corpse between them (1 Essence, 1 action) -> 2d6 necrotic to both enemies, Reflex half. Life Drain heals you.
2. Command servant to attack the wounded captain (1 action)
3. Cast necrotic cantrip at whichever enemy is lower (1 action)

*Result: You spent 1 Essence for AoE damage and healing. Efficient but no servant upgrade.*

**Option C --- Soul Burst:**
1. Command servant to move adjacent to both enemies (1 action)
2. Soul Burst centered on servant (2 Essences, 1 action) -> 3d6 necrotic to both, servant immune. Life Drain heals you from all damage dealt.
3. If either enemy dies, gain 1 Essence back (1 action remaining for cantrip or movement)

*Result: You spent both Essences for major AoE + healing. High burst, but now you're empty.*

**Option D --- Soul Bind:**
1. Soul Bind the raider captain to your servant (1 Essence, 1 action, concentration)
2. Command servant to attack the regular raider (1 action) -> servant deals damage to the raider, and the raider captain takes half that damage as necrotic via Soul Bind
3. Cast necrotic cantrip at captain (1 action) -> captain takes full cantrip damage, and your servant takes half that damage as necrotic via Soul Bind

*Result: You spent 1 Essence to create a damage web. Complex, but if the captain dies from accumulated link damage, you get 2 Essences back.*

Each option is viable. None is obviously best. **That's the design goal.**

---

### Necromancy (Soul Economy — Specialization Tree)

Available only to Necromancers (L6+ specialization). The Necromancy tree adds new investment paths to the Soul Essence engine: deeper servant scaling, new ways to generate and spend Essences, and high-cost payoffs that reward the Necromancer who plays the long game. Every ability here fits into the existing spend-or-lose tension — the goal is more options, not a simpler decision.

**Tier 1 Abilities (5 CP each):**

- **Lingering Harvest (5 CP):** You draw Essences from the conditions you inflict, not just deaths you witness. When a creature you have applied a condition to (via Weaken, Soul Bind, Cognitive Assault, or any other effect you control) dies from any cause within 30 feet, you gain **1 additional Soul Essence** — even if you would normally gain 1 from that death (total: 2). If the creature dies beyond 30 feet but you are the cause of the condition, you gain 1 Essence (normally you would gain nothing at that range, unless your servant made the kill). This bonus Essence ignores the normal 4-Essence cap: it can briefly overflow by 1, but must be spent before the end of your turn or it fades. *You invested in weakening them. You profit when they fall.*

- **Servant's Acuity (5 CP):** Your raised servant's attacks and damage are driven by your intellect rather than raw necrotic momentum. The **half-proficiency component** of your servant's attack bonus is replaced by your **INT modifier** — the servant attacks at **+4 + INT modifier** (instead of +4 + half proficiency bonus, round down). Your INT modifier also replaces the level-based damage bonus: the servant deals **1d8 + INT modifier** damage instead of 1d8 + (Necromancer level ÷ 2). The servant also gains **+10 feet of movement speed**.

  *When this is worthwhile:* At INT 14 (+2), Servant's Acuity matches the passive formula from L9 onward. At INT 16 (+3), it's ahead through L12. At INT 18 (+4), it's competitive through L17+. Servant's Acuity is for Necromancers who invest heavily in INT — the scaling formula is for those who want passive improvement with no tree cost.

**Tier 2 Abilities (10 CP each, requires one Tier 1):**

- **Wraith Form (10 CP):** Once per turn, as part of your command action (1 action, as normal), you may spend **2 Soul Essences** to render your servant **incorporeal** until the start of your next turn. While incorporeal, the servant can pass through solid obstacles (walls, floors, cover — but not magical force barriers), gains **immunity to damage from non-magical weapons**, and its attacks count as magical for the duration. The servant reverts at the start of your next turn. The 2-Essence cost competes directly with Feed Essence options — spending on Wraith Form means not Bolstering, Empowering, or Quickening. *High investment, high payoff: a servant that can phase through cover to reach a protected target, then materialize adjacent to them. The enemies protecting a fragile caster now face a threat they can't interpose against.*

- **Armored Vessel (10 CP):** Your servant's body is reinforced with necrotic crystallization, shaped by your magical aptitude. The servant's **DV increases to equal your spell save DC** (8 + INT modifier + proficiency bonus) instead of 12. This improvement persists as long as the servant exists — it applies at the moment of raising and updates whenever your spell save DC changes. *Investing in INT and proficiency directly improves your servant's ability to survive incoming fire. An Elementalist might out-damage you; no one out-tanks a Necromancer who has made their servant a genuine obstacle.*

- **Siphon (10 CP):** Once per turn, as a **free action** (no action cost), while **Soul Bind is active** on a target, you drain vitality through the link. The linked creature takes **1d4 necrotic damage**. Life Drain applies — you heal half the damage (or full, if you spend 1 Essence for Amplified Drain, decided after seeing the roll). Siphon cannot be used on turns when Soul Bind is not active or has been broken. This is an additional income stream layered on top of your existing actions — it does not count as Death's Command. *Soul Bind's passive damage reflection was already good. Siphon makes it an active economic engine: drain the link every turn for free damage and free healing.*

**Tier 3 Abilities (15 CP each, requires one Tier 2):**

- **Death Knell (15 CP):** Your Death Touch (L10 capstone) evolves. First, its range extends to **15 feet** (no longer requires touch). Second, when a creature successfully saves against Death Touch and takes only half damage, if you or your servant reduces that same creature to 0 HP **during the same turn**, you gain **4 Soul Essences** as if Death Touch had killed them directly. Life Drain applies to the half-damage from a successful save (you heal half; Amplified Drain option remains). *Death Touch was a gamble: miss the save, nothing. Now even a successful save from a target who then falls to follow-up damage pays out the full Essence reward. The execution is complete — the soul is spent regardless of which blow landed.*

- **Undying Legion (15 CP):** When your servant is destroyed (reduced to 0 HP), you may spend **3 Soul Essences** as a **reaction** to immediately reform it from ambient necrotic energy. The reformed servant appears within 10 feet of the original's destruction point at full HP. No corpse is required — the servant coalesces from death residue in the area. You must have at least 3 Soul Essences when the servant is destroyed to activate this reaction — the cost is paid immediately upon activation. If you have fewer than 3 Essences, Undying Legion cannot be used. Undying Legion recharges once per long rest — after using it, the servant cannot be reformed via Undying Legion again until after your next long rest (though Raise Servant's standard ritual and Quick Raise methods still function normally). *The ultimate investment protection. A Necromancer who has built their servant up with Servant's Acuity and Feed Essence investments cannot afford to lose it. Undying Legion ensures they won't — as long as they've been banking Essences.*

- **Undying Resolve (15 CP):** Your servant's will to serve borders on the metaphysical. Once per long rest, when your servant would be reduced to 0 HP, it is instead reduced to **1 HP** — the killing blow glances off the necrotic thread binding you both. Additionally, once per turn as a **reaction to your servant taking damage**, you may spend **2 Soul Essences** to reduce that damage by your **Wisdom (WIS) modifier × 2** (minimum 1). This reaction can reduce damage to 0. *Undying Resolve is the ultimate expression of servant investment — the creature cannot die on your watch unless you let it. The Essence cost ensures you're making an active choice every time you shield it, competing with your other spending options.*

  > *Undying Legion vs. Undying Resolve: These serve different roles. Undying Legion requires 3 Essences as a reaction to reform the servant from scratch (full HP, no corpse needed). Undying Resolve prevents the death (1 HP) and allows incremental damage reduction (2 Essences per hit). Undying Resolve is for sustained protection; Undying Legion is the emergency failsafe. Both can be purchased — they are additive.*

---

## Level 11–15: Specialization Escalation

*At Level 6, you chose a path. At Level 10, you proved it. Now your specialization stops being a toolset and starts being a second nature. These features don't introduce new mechanics — they're what happens when your existing mechanics have had five levels to mature into something inevitable.*

Mystics receive specialization-specific features at levels 11, 13, and 15. Each feature deepens the resource engine introduced at L6–10 rather than adding new systems.

> **On Doctrines:** These features are granted automatically at their respective levels. They sit alongside your Doctrine choices from **Progression** — the two systems coexist. Doctrines remain available and valuable.

---

### Elementalist: Mastery Tier (L11–15)

#### Level 11: Resonance Attunement

Your elemental resonance has developed a feedback cycle: landing a combo seeds the next setup automatically.

When you trigger a **Resonance Combo** against a single target, the target immediately gains new resonance matching your **triggering (second) spell's element** — the combo fires and the new resonance mark seeds simultaneously as part of the same resolution. No additional action is required. Your forward momentum is preserved.

Additionally, if the triggered combo imposes a condition (Slowed, Dazed, Brittle, or Galvanic Corrosion), the combo deals **+1d6** bonus damage of the triggering element's type.

*The setup-payoff loop closes on itself. Landing a combo doesn't reset the board — it advances it.*

> *Example: You cast an electric spell at a fire-resonant target. Fire + Electric triggers Plasma Burst (2d6 fire + Dazed save, +1d6 bonus electric). The target immediately gains electric resonance from the triggering spell — your next cast can chain directly from this without reapplying.*

#### Level 13: Primed Field

Your resonance marks become persistent pressure rather than fleeting moments.

Elemental Resonance you apply now persists for **2 rounds** (until the end of your second next turn) on all targets — single targets and areas alike. Enemies can no longer simply survive one extra turn to outlast your setup.

Additionally, resonance you apply to a **Slowed or Immobilized** target persists for **4 rounds** instead. A creature that can't escape your range has no escape from your buildup.

> *Stacking note: At L13, Primed Field grants all resonance 2-round duration as a feature. Extended Resonance (Destruction tree, T1, 5 CP) continues to provide distinct value: area resonance extends to 3 rounds (1 round beyond Primed Field), and any resonance that expires naturally without triggering a combo releases a Resonance Echo pulse (1d4 of that element). Purchasing Extended Resonance before L13 provides the full duration benefit during L6–12; after L13, the value shifts to AoE coverage and the Echo.*

#### Level 15: Elemental Cascade Mastery

**Cataclysm** reaches its intended scale.

When Cataclysm triggers Resonance Combos, every combo it fires is heightened simultaneously:

- **Damage-dealing combos** deal **+1 die** of their damage type (e.g., Thermal Shock: 3d6 force; Caustic Blaze: 2d6 acid on the delayed tick; Plasma Burst: 3d6 fire)
- **Condition-inflicting combos** increase their **save DC by +2**
- **Duration-based combos** last **1 additional round**

All three enhancements apply simultaneously to all combos triggered by the Cataclysm cast. Elemental Surge stacks with Cascade Mastery — if you have **Cataclysm Unleashed** (Destruction Tier 3), you still choose one combo to empower with Surge on top of this baseline heightening.

*Cataclysm was always the fight-defining moment. Cascade Mastery ensures the definition is written in fire, ice, lightning, and acid simultaneously.*

---

### Seer: Mastery Tier (L11–15)

#### Level 11: Prophet's Clarity

Your foreknowledge sharpens into a third thread of probability.

After each long rest, you now roll **3d20** for **Portent** (instead of 2d20), recording all three results and using them as normal. If you have also purchased **Deep Portent** (Prescience tree, T1, 5 CP), the two effects stack — you roll **4d20** total.

Additionally, when you spend **3 Sight tokens** on **Forewarning**, the warning radiates outward. All allies within 60 feet who can hear you gain advantage on their next saving throw this round — not just one.

#### Level 13: Thread of Fate

Once per short rest, you can do what no Portent die allows: rewind your own moment of failure.

When you make an attack roll, saving throw, or ability check and dislike the result, you may spend **2 Sight tokens** as a free action to **reroll** and take the new result. You must accept the second roll.

*Portent rewrites others' probability. Thread of Fate rewrites your own — at cost. A Seer who manages Sight carefully can save this for the roll that truly matters.*

> *Unlike Portent, Thread of Fate generates no Sight tokens — it only spends them. It is a correction tool, not a generation tool.*

#### Level 15: Unwritten Outcome

Your foreknowledge during **Foresight Echo** becomes dense enough to act on immediately.

When you activate Foresight Echo, you may **prime up to 2 Sight tokens** as part of the activation (no additional action). Primed tokens can each be spent during the Foresight Echo window as a **free action** (not requiring your reaction) on any Sight-spending effect — Freeform Read, Veil of Inevitability, or Forewarning — ignoring the normal reaction and round-restriction requirements for those effects.

Additionally, while Foresight Echo is active, your **Sight token maximum increases to 5** (up from 3; returns to 3 when Foresight Echo ends).

---

### Necromancer: Mastery Tier (L11–15)

#### Level 11: Death's Harvest

Your capacity for Soul Essence expands as the scale of death you preside over grows.

Your **maximum Soul Essence cap increases to 6** (up from 4). Two additional wisps can orbit you — enough to hold through a full exchange before spending.

Additionally, the overflow window for **Lingering Harvest** (Necromancy tree Tier 1) extends: the bonus Essence that exceeds the normal cap persists **until the end of your next turn** (instead of requiring immediate spending before the end of your current turn).

*Six Essences is the difference between always-spending-reactively and actually planning a burst.*

#### Level 13: Strengthened Binding

The necrotic thread linking you to your servant becomes a structural bond rather than a casual tether.

Your servant's attack rolls now benefit from your **full proficiency bonus** (replacing the half-proficiency scaling from passive progression). At level 13, your proficiency is +5 — the servant attacks at a level that can reliably threaten CR-equivalent enemies.

Additionally, the servant gains your **Wisdom (WIS) modifier** as a bonus to all saving throws, replacing its fixed save values.

Finally, the servant's weapon attacks are treated as **magical** for the purposes of overcoming damage resistance and immunity.

> *If you have also purchased Servant's Acuity (Necromancy tree, Tier 1): Strengthened Binding adds your full proficiency bonus on top of your INT modifier. The servant attacks at +4 + full proficiency bonus + INT modifier. This stays within the +14 bounded accuracy ceiling at all levels.*

*You have maintained this creature through years of investment and death. It is no longer a corpse with crude purpose. It is an extension of your will, and your will can no longer be simply resisted.*

#### Level 15: Choir of the Dead

You may maintain **2 active servants** simultaneously.

The second servant is raised using the same methods as the first — either the ritual (once per long rest, 1 minute over a Medium or smaller corpse) or Quick Raise (1 action + 1 Soul Essence, fresh corpse within 10 feet). You may **dismiss** one servant as a free action at any time.

**Commanding Two Servants:** Each servant requires **1 action to command** individually. You may issue a **shared command** that both servants follow as **1 action** (e.g., "attack the nearest enemy"), but individual targeting, different movement orders, or applying different Feed Essence enhancements to each servant requires 2 actions total (1 per servant).

**Essence Economy:** Feed Essence — Bolster, Empower, and Quicken — all function per-servant, applied to the servant receiving the command. **Soul Burst** can originate from either servant (your choice), but not both simultaneously in the same action.

*Two servants at L15 is the Necromancer's defining statement: the commander of death, not just its collector.*

---

## Level 16: Arcane Mastery

Your command of magic deepens to legendary proportions. You gain 2 additional spell slots of each level from 1st to 5th. Your cantrips deal maximum damage when cast against creatures with fewer Hit Dice than your character level. When you craft a spell, you may add one additional component without increasing the crafting time.

## Level 17: Specialization Final Evolution

### Elementalist — Elemental Convergence

Choose a second element (fire, cold, electric, or acid) — you now have mastery over two elements. You can cast two spells with elemental damage in the same turn (still limited by action economy). Your elemental damage ignores resistance (but not immunity).

### Seer — Omniscient Eye

Your divination abilities have no range limit on the same plane. When you activate **Foresight Echo**, you roll **4d20** for your Destiny Dice instead of 3d20 (this is in addition to any Prophet's Clarity or Deep Portent increases to your Portent pool — the two pools remain separate). Additionally, you can use **Portent** to replace any visible creature's roll within **120 feet** (up from 60 feet). Once per long rest, you can see through any illusion or magical deception within range automatically, without a check.

### Necromancer — Lord of the Dead

You can control up to 20 undead simultaneously (instead of the usual limit). Your raised undead gain +2 to all rolls and +20 HP (scaled up from the base +10 to remain meaningful relative to the servant's new HP formula). You can cast one necromancy spell as a ritual without increasing casting time. Once per short rest, you can drain life from a corpse within 30 ft to heal yourself for 4d8 HP.

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
