---
game_data: true
name: Channeler
primary_stats: [WIS, END]
hit_die: d8
hp_base: 10
hp_per_level: 5
starting_humanity: 10
armor_proficiency: [Medium, Shields]
weapon_proficiency: [Simple, Martial melee]
save_proficiencies: [Fortitude, Will]
skill_bonuses:
  - {skill: Arcana, bonus: 2}
  - {skill: Survival, bonus: 2}
starting_cp: 15
role: Hybrid Warrior/Mage
magic_type: "Half-caster (all schools)"
level_1_features: [Channel Energy, Cantrips]
skill_trees:
  - name: Battle Channeling
    focus: Offense
    abilities:
      - {name: Divine Strike, cp_cost: 5, tier: 1, effect: "+1d8 radiant or necrotic on melee hit"}
      - {name: Warpriest, cp_cost: 10, tier: 2, effect: "Bonus attack after casting"}
      - {name: Avatar of War, cp_cost: 15, tier: 3, effect: "+2d8 radiant or necrotic, resistance to all damage"}
  - name: Spirit Bond
    focus: Utility
    abilities:
      - {name: Speak with Spirits, cp_cost: 5, tier: 1, effect: "Commune with dead"}
      - {name: Spirit Guide, cp_cost: 10, tier: 2, effect: "Spectral ally assists checks"}
      - {name: Spirit Walk, cp_cost: 15, tier: 3, effect: "Ethereal form for 1 min 1/LR"}
  - name: Resilience
    focus: Defense
    abilities:
      - {name: Unyielding, cp_cost: 5, tier: 1, effect: "Drop to 1 HP instead of 0 HP 1/LR"}
      - {name: Iron Will, cp_cost: 10, tier: 2, effect: "Adv vs frightened/charmed, immune to magical sleep"}
      - {name: Immovable, cp_cost: 15, tier: 3, effect: "Immune to prone/grapple/restrain from same-size-or-smaller creatures; advantage on saves against forced movement"}
  - name: Spellsword
    specialization: Battlemage
    focus: Conduit Mastery
    abilities:
      - {name: Eldritch Recall, cp_cost: 5, tier: 1, effect: "Kill with weapon attack → regain 1 Conduit Charge (1/turn; shares limit with Eldritch Tempest charge-on-kill if same kill)"}
      - {name: Charged Cantrip, cp_cost: 5, tier: 1, effect: "Spend 1 charge to apply Searing Mark through a cantrip hit, even if weapon attack misses"}
      - {name: Arc Ward, cp_cost: 5, tier: 1, effect: "Passive: +1 DV while holding 3+ Conduit Charges"}
      - {name: Arcing Discharge, cp_cost: 10, tier: 2, effect: "Conduit Strike 2+ charges: arc WIS×2 force damage to enemy within 10 ft (Reflex half)"}
      - {name: Spellblade Technique, cp_cost: 10, tier: 2, effect: "1/SR: War Magic hit → optionally apply up to 2-charge Conduit Strike as part of same action"}
      - {name: Combat Caster's Parry, cp_cost: 10, tier: 2, effect: "Reaction: creature within 5 ft casts spell targeting you → make 1 weapon attack; hit + 1 charge = disadvantage on next save"}
      - {name: Conduit Mastery, cp_cost: 15, tier: 3, effect: "Max charges permanently 4 (outside Eldritch Tempest); grants consistent access to 4-charge Conduit Strike table entry; L17 Divine Judgment raises cap to 5"}
      - {name: Arcane Avalanche, cp_cost: 15, tier: 3, effect: "1/LR: Eldritch Tempest lasts 2 min and War Magic grants 2 charges per use instead of 1"}
  - name: Spirit Magic
    specialization: Shaman
    focus: Spirit and Nature
    abilities:
      - {name: Spirited Strike, cp_cost: 5, tier: 1, effect: "Haunt + weapon attack same round: +1d6 damage on that attack"}
      - {name: Expanded Totem Bond, cp_cost: 5, tier: 1, effect: "Wolf: allies within 15 ft gain OA advantage vs enemies NOT threatened by you (while you threaten 1+); Bear/Eagle/Serpent: totem benefits extend to allies within 15 ft"}
      - {name: Spirit Conduit, cp_cost: 5, tier: 1, effect: "Channel Energy (Heal) + Haunt in same action (different targets; costs 1 CE use + 1 Haunt use)"}
      - {name: Totem Surge, cp_cost: 10, tier: 2, effect: "1/SR: channel totem power — Wolf: prone on hit; Bear: max CE heal; Eagle: fly speed 30 ft 1 min; Serpent: +3 to next condition DC"}
      - {name: Haunting Echo, cp_cost: 10, tier: 2, effect: "Spirit Companion Haunt imposes disadvantage on next 2 qualifying rolls instead of 1"}
      - {name: Primal Surge, cp_cost: 10, tier: 2, effect: "Cast nature-type spell + expend 1 CE use in same action: spell deals +1d8 of same damage type"}
      - {name: Spirit Army, cp_cost: 15, tier: 3, effect: "Summon Greater Spirit also summons a lesser spirit (25 HP, 13 DV, 1 atk +5/2d6+2); both from same 1/LR use"}
      - {name: Totem Manifestation, cp_cost: 15, tier: 3, effect: "1/LR, 1 min: totem fully manifests — Wolf: doubled move, max die hits; Bear: temp HP = max HP; Eagle: fly speed ×3 + auto Perception; Serpent: +3 spell DCs, failed saves lose reaction"}
  - name: Oracular Powers
    specialization: Oracle
    focus: Psychic Expansion
    abilities:
      - {name: Telekinetic Fling, cp_cost: 5, tier: 1, effect: "When using Extra Attack, may replace one or more weapon attacks with TK attacks (each TK attack follows normal TK rules); objects <25 lbs auto-hit (Reflex for half 1d8+WIS)"}
      - {name: Mind's Reach, cp_cost: 5, tier: 1, effect: "Telepathy range 120 ft; share senses with willing creature as free action 1 round"}
      - {name: Kinetic Shield, cp_cost: 5, tier: 1, effect: "Passive: +1 DV from constant TK field (while not holding anything)"}
      - {name: Psychic Spear, cp_cost: 10, tier: 2, effect: "1/SR: 1 action, 60 ft, Will DC — fail: 3d8 psychic + frightened 1 round; save: half, not frightened"}
      - {name: Telepathic Intercept, cp_cost: 10, tier: 2, effect: "Reaction: learn content of enemy communication within 60 ft. 1/SR: jam a command, imposing disadvantage on recipient's next action"}
      - {name: Extended Grip, cp_cost: 10, tier: 2, effect: "TK range 60 ft, capacity 200 lbs; winning contested TK check restrains target until start of your next turn"}
      - {name: Psychic Overreach, cp_cost: 15, tier: 3, effect: "1/LR, 1 min: unlimited-range TK on 5 targets simultaneously; TK attacks gain advantage and +1d6 force per object in flight"}
      - {name: Open Mind, cp_cost: 15, tier: 3, effect: "Telepathy extends to INT 1+ creatures; complex communication never requires a check; 1/SR broadcast to all willing allies in range as free action"}
features:
  - name: Channel Energy
    level: 1
    action: "1 Action"
    frequency: "WIS mod times/Short Rest (min 1)"
    description: "Touch target. Choose Harm (1d8 radiant or necrotic to enemy, +1d8 vs undead) or Heal (1d8 HP to ally/self). Scales: 2d8 at L5, 3d8 at L11, 4d8 at L17."
    choices:
      - {name: Harm, effect: "Deal 1d8 radiant or necrotic damage (choose at touch). +1d8 vs undead."}
      - {name: Heal, effect: "Restore 1d8 HP. Can target self."}
  - name: Cantrips
    level: 1
    action: "1 Action"
    frequency: At-Will
    description: "Start with 2 cantrips (divine/nature/elemental themed). Add WIS mod to cantrip damage. Can power with spell slot for +1 die per slot level. Additional cantrips cost 10 CP each."
    num_choices: 2
    choice_label: "Choose 2 Cantrips"
  - name: Spiritual Sense
    level: 2
    action: Free Action
    frequency: "Always Active"
    description: "Sense magic, undead, and unnatural phenomena within 60 ft (even through walls). Direction and approximate distance. Spend 1 action to pinpoint specific sources."
  - name: Extra Attack
    level: 3
    action: Passive
    frequency: "1/Turn"
    description: "When using 1 action to Strike, make two attacks. Second attack has no multiple attack penalty."
  - name: Attribute Improvement
    level: 4
    action: Passive
    frequency: Permanent
    description: "Increase one attribute by +2, or two attributes by +1 each. Maximum 20."
  - name: Overflow
    level: 5
    action: Passive
    frequency: Always
    description: "Expend extra Channel Energy use to affect second target within 15 ft. When casting a spell, can also use Channel Energy as part of the same action."
spell_slots:
  - {level: 1, slots: [1, 0, 0, 0, 0]}
  - {level: 2, slots: [2, 0, 0, 0, 0]}
  - {level: 3, slots: [2, 1, 0, 0, 0]}
  - {level: 4, slots: [3, 2, 0, 0, 0]}
  - {level: 5, slots: [3, 2, 1, 0, 0]}
  - {level: 6, slots: [3, 3, 1, 0, 0]}
  - {level: 7, slots: [3, 3, 2, 0, 0]}
  - {level: 8, slots: [3, 3, 2, 1, 0]}
  - {level: 9, slots: [3, 3, 2, 1, 0]}
  - {level: 10, slots: [3, 3, 2, 2, 1]}
starting_cantrips: 2
cantrips_by_level:
  - {level: 1, count: 2}
  - {level: 5, count: 3}
specialization_details:
  - name: Battlemage
    role: Spell-Steel Conduit
    features:
      - {name: War Magic, level: 6, action: Passive, description: "When casting a cantrip, make one weapon attack as part of same action. Gain 1 Conduit Charge when making a weapon attack via War Magic."}
      - {name: Arcane Armor, level: 6, action: Passive, description: "Can wear heavy armor without losing spellcasting. Held weapon counts as spellcasting focus."}
      - {name: Conduit Strike, level: 8, action: "On Melee Hit", description: "Expend 1-5 Conduit Charges on melee hit. Each charge deals +1d8 radiant or necrotic (your choice, per use). 1 charge: Searing Mark (+1 to hit vs target, 1 round). 2 charges: Arcane Shunt (you or ally within 15 ft heals half damage). 3 charges: Banishing Strike (Will save or banished 1 round). 4 charges: Arcane Prison (Reflex or restrained 1 round; requires 4-charge cap). 5 charges: Arcane Obliteration (Will fail: stunned 1 round, save: dazed 1 round; requires Divine Judgment)."}
      - {name: Arcane Momentum, level: 8, action: Passive, description: "Weapon attacks count as magical. When you alternate casting and striking in the same turn, weapon attacks deal extra 1d4 force damage."}
      - {name: Eldritch Tempest, level: 10, action: "1 Action", description: "1/Long Rest. 1 minute. Max Conduit Charges to 4. Conduit Strikes splash 1d6 force/charge to enemies within 10 ft (Reflex half). +2 DV. Kill with Conduit Strike: regain 1 charge (1/round)."}
  - name: Shaman
    role: Spirit/Nature
    features:
      - {name: Spirit Companion, level: 6, action: "Passive + 1 Action (Haunt)", description: "Spirit scouts 120 ft, translates languages, +2 Perception. Haunt: 1 action, target has disadvantage on next roll (1/round). 1 Action: sense through spirit (concentration, ends on damage)."}
      - {name: "Nature's Wrath", level: 6, action: Passive, description: "Spells dealing acid, cold, lightning, poison, or thunder deal +1 per damage die."}
      - name: Totem Bond
        level: 8
        action: Passive
        description: "Choose one animal totem for permanent benefits."
        choices:
          - {name: Wolf, effect: "Allies within 30 ft gain advantage on opportunity attacks against enemies you threaten"}
          - {name: Bear, effect: "Channel Energy (Heal) also grants target temporary HP = WIS modifier (lasts until start of your next turn)"}
          - {name: Eagle, effect: "+10 ft speed, advantage on Perception, never surprised by visible foes outdoors"}
          - {name: Serpent, effect: "Condition DCs +1; nature-type spells deal +1 extra damage per die (stacks with Nature's Wrath for +2/die total)"}
      - {name: Ghost Walk, level: 8, action: "1 Action", description: "1/Short Rest. 1 minute. Partially ethereal: move through objects, immune to non-magical physical damage. Can still attack, cast, and use Channel Energy normally. Ends if unconscious."}
      - {name: Summon Greater Spirit, level: 10, action: "1 Action", description: "1/Long Rest. 1 minute. Summon spirit (HP 50, DV 15, 2 attacks +7 hit, 2d8+4 damage matching totem). Obeys mental commands."}
  - name: Oracle
    role: Psychic/Prescient
    features:
      - {name: Telekinesis, level: 6, action: "1 Action", description: "At-will. Move object/creature up to 100 lbs up to 30 ft. Hostile: your WIS vs their MIG. Can make ranged attacks with objects: 2d6+WIS force."}
      - {name: Telepathy, level: 6, action: "At-Will", description: "60 ft. Communicate mentally with creatures INT 4+. Language not required for basic communication (images, emotions, sensory). Complex concepts: Arcana WIS DC 12. Can broadcast to multiple creatures."}
      - {name: Psychic Blast, level: 8, action: "1 Action", description: "1/Short Rest. 30 ft cone. Will save DC 8+WIS+prof. Fail: 4d6 psychic + dazed 1 round. Success: half damage."}
      - {name: Mind Shield, level: 8, action: Passive, description: "Resistance to psychic damage. Advantage on saves vs charm, fright, thought reading. Extends to allies within 10 ft."}
      - {name: Kinetic Anticipation, level: 8, action: Reaction, description: "When a creature within 30 ft moves toward you, make a Telekinesis contested check (WIS vs MIG) to halt their movement. Win: movement stops at contest point until their next turn; they can still act but cannot move further toward you. On a loss, they move normally. When you win any TK contested check vs a hostile creature, you may immediately reposition that creature up to 10 ft in any direction (cannot move into hazardous space without a separate save at GM discretion)."}
      - {name: Psychic Dominion, level: 10, action: "1 Action", description: "1/Long Rest. 1 minute. Move up to 500 lbs with TK. Read surface thoughts within 60 ft. 1/round: Will DC 18 or dominated until end of their turn."}
specializations: [Battlemage, Shaman, Oracle]
starting_equipment:
  - Martial melee weapon
  - Medium armor
  - "Shield (+2 DV, optional)"
  - "Channeler's focus and ritual kit"
---
# Channeler

> **Recommended Build Guide — Classless System**
> This file describes the **Channeler recommended build**: a curated path through Ashfall's shared skill trees designed for this build's core fantasy. Under the current rules, you are **not locked to this build**. Choose a **chassis** for your starting stats and proficiencies, then spend **Character Points (CP)** in any skill trees that match your character concept.
>
> - **Chassis selection and starting stats:** see [Chassis](../chassis.md)
> - **CP economy, spending rules, and milestones:** see [Character Points](../character-points.md)
> - **Full skill tree catalog:** see [Skill Trees](../skill-trees.md)
>
> The ability descriptions, skill tree layouts, and feature details in this file remain the authoritative rules reference for those abilities. The CP values listed in the skill trees are the costs for purchasing abilities.

*Magic flows through all things in the Wasteland—ley lines beneath irradiated soil, Old World technology humming with power, the dying breath of the world itself. Channelers are those who touch that power intuitively, without books or study. They're spiritual warriors, ritualists, survivalist shamans, and battlefield clerics—people who feel magic in their bones and channel it through faith, instinct, or sheer willpower. Some were religious leaders before the Fall; others discovered their gift after trauma—near-death, mutation exposure, or communion with the Waste's strange spirits.*

*A Channeler walks the line between warrior and mage. They wade into combat with weapons blessed by their own power, channeling raw energy through touch to heal allies or burn enemies. Their magic is less precise than a Mystic's calculated spells—it's wild, intuitive, driven by emotion and conviction. They commune with spirits of the dead, sense unnatural phenomena, and serve as spiritual anchors for their groups. Their gear is eclectic: weapons etched with personal sigils, talismans made from scavenged materials, and ritual implements that blur the line between magic and faith.*

*But channeling power has consequences. Every Channeler walks the edge of burnout—pushing too hard, drawing too much, until the magic consumes them or they hollow out into empty vessels. Some maintain Humanity through strict spiritual discipline: meditation, codes of conduct, service to higher causes. Others succumb to the power, becoming zealots, tyrants, or mad prophets who see themselves as chosen instruments of divine will. The Wasteland needs its spiritual warriors—but power always demands a price.*

![A channeler grips a glowing staff, divine energy crackling between reality and the spirit world](/images/illustrations/channeler-with-staff.png)

## Core Statistics

| Attribute | Value |
|-----------|-------|
| **Primary Stats** | WIS/END |
| **Secondary Stat** | MIG or AGI (player choice at creation) |
| **Hit Die** | d8 |
| **Starting HP** | 10 + END modifier |
| **Starting Humanity** | 10 |
| **Starting CP** | 15 |

## Proficiencies

**Weapons:** Simple weapons, martial melee weapons
**Armor:** Medium armor, shields
**Saving Throws:** Fortitude, Will
**Skills:** Arcana, Survival, plus **2** of your choice

## Starting Equipment

- Medium armor (reinforced leather and scavenged plates, DV 13 + AGI mod, max +2)
- Martial melee weapon of choice (longsword, battleaxe, spear, etc.)
- Shield (+2 DV, optional)
- Channeler's focus (personal talisman, holy symbol, or inscribed weapon)
- Ritual kit (candles, chalk, incense—used for spellcasting and communion)

## Level Progression Features (Levels 1-5)

### Level 1: Channel Energy

**Action Cost:** 1 action
**Range:** Touch
**Effect:** You channel raw magical energy through your touch. Choose one:

**Option 1 - Harm:** Touch an enemy. They take **1d8 radiant OR necrotic damage** (your choice when you touch). Undead take an additional +1d8 damage (they're especially vulnerable).

**Option 2 - Heal:** Touch an ally. They regain **1d8 hit points**.

**Frequency:** WIS modifier times per short rest (minimum 1)

**Scaling:**
- **Level 1-4:** 1d8 per use
- **Level 5-10:** 2d8 per use *(scales with Overflow at Level 5)*
- **Level 11-16:** 3d8 per use
- **Level 17-20:** 4d8 per use

> **Quick Reference:** At Level 3, you have WIS mod uses per short rest of 1d8 healing or damage. At Level 5, it doubles to 2d8 AND you gain Overflow (combine spellcasting + Channel Energy in one action).

**Self-Target:** You can target yourself with Channel Energy (healing version).

**Special:** This is your signature ability—raw, unfiltered magical power channeled through touch. Unlike spells, this doesn't require verbal or somatic components—you simply touch and will the energy to flow. You can use this in silence, while grappled, or in any condition where you can still touch something.

### Level 1: Cantrips

**Effect:** You know **2 cantrips** from the spell-crafting system. These represent your intuitive magical abilities. Damage-dealing cantrips always add your **Wisdom modifier** to damage. You can also power cantrips with a spell slot for additional damage dice (see [Cantrip Damage Scaling](../magic.md#cantrip-damage-scaling)).

**Cantrip Selection:** Unlike Mystics (who study systematically), Channelers tend toward elemental, nature, or divine-flavored cantrips: *Sacred Flame*, *Produce Flame*, *Thorn Whip*, *Guidance*, *Resistance*, *Light*, *Mending*.

**Additional Cantrips:** You can learn more cantrips by spending **10 CP per cantrip** (same as Medics—cheaper than non-casters).

**Cantrip Damage Example:** A Channeler with WIS +3 casting Pyros at-will deals 1d6+3 fire damage. Powering Pyros with a 2nd-level slot increases this to 3d6+3 fire damage.

### Level 2: Spiritual Sense

**Action Cost:** Free action (always active)
**Range:** 60 feet
**Effect:** You can sense the presence of the following within range (even through walls or obstacles):

- **Magic:** Active spells, enchanted items, ley line nodes
- **Undead:** Zombies, ghosts, revenants, etc.
- **Unnatural Phenomena:** Dimensional rifts, cursed ground, areas of high radiation/corruption

**Special:** You don't learn exact locations—you sense direction and approximate distance (like a compass pointing toward magic). You can spend 1 action to focus and pinpoint specific sources.

**GM Note:** This makes Channelers excellent at detecting hidden threats, cursed artifacts, or supernatural ambushes. It's less precise than *Detect Magic* but always active.

### Level 3: Extra Attack

**Extra Attack:** When you use 1 action to Strike, you make two attacks instead of one. The second attack does not incur the multiple attack penalty. If you use additional actions to Strike, those follow the normal multiple attack penalty (-3 for the second Strike action, -6 for the third, etc.). Extra Attack can only trigger once per turn.

**Special:** This makes you a competent martial combatant. Combined with Channel Energy, you can attack twice AND channel energy in one turn (3-action economy: 2 attacks = 1 action via Extra Attack, Channel Energy = 1 action, leaving 1 action for movement or other activities).

### Level 4: Attribute Improvement

Increase one attribute by +2 or two attributes by +1 each (maximum 20).

### Level 5: Overflow (Capstone)

**Overflow (Level 5):** When you use Channel Energy, you may expend one additional use to affect a second target within 15 feet of the original. This costs 1 additional Channel Energy use.

Additionally, when you cast a spell (using a spell slot), you can **also use Channel Energy as part of the same action**. This essentially combines spellcasting and channeling into one turn.

**Example:** You cast *Bless* (1st-level spell, 1 action) on three allies, then use Channel Energy to heal one of them (normally 1 action)—with Overflow, both happen in 1 action.

**Combat Scenario:** Cast *Shield of Faith* on yourself (+2 DV) and Channel Energy to harm an enemy—both in the same action, leaving you with 2 actions to attack.

**Special:** This represents your mastery of channeling—you can weave spells and raw energy simultaneously. This is incredibly action-efficient and lets you support AND attack in the same turn.

## Half-Caster Spell Progression

Channelers are **half-casters** with fewer spell slots than full casters but martial combat ability to compensate.

> **Channeler Quick Reference (Level 3):**
> - **Channel Energy:** 1d8 heal/damage, WIS mod uses per short rest
> - **Spell Slots:** 2 x 1st level, 1 x 2nd level
> - **Extra Attack:** 2 attacks per Attack action
> - **Overflow:** NOT YET — unlocks at Level 5
> - **Action Economy:** Attack (2 actions) + Channel Energy (1 action) = full turn

### Spell Slot Progression

| Level | 1st | 2nd | 3rd | 4th | 5th |
|-------|-----|-----|-----|-----|-----|
| 1 | 1 | — | — | — | — |
| 2 | 2 | — | — | — | — |
| 3 | 2 | 1 | — | — | — |
| 4 | 3 | 2 | — | — | — |
| 5 | 3 | 2 | 1 | — | — |
| 6 | 3 | 3 | 1 | — | — |
| 7 | 3 | 3 | 2 | — | — |
| 8 | 3 | 3 | 2 | 1 | — |
| 9 | 3 | 3 | 2 | 1 | — |
| 10 | 3 | 3 | 2 | 2 | 1 |

**Spell Slot Recovery:** Regain all expended spell slots on a long rest (1 week). During a short rest (8 hours), you can regain spell slots totaling up to half your Channeler level (rounded down, minimum 1).

**Example at Level 5:** You have 3 first-level slots, 2 second-level, and 1 third-level. During short rest, you can regain slots totaling up to 2 levels—so you could regain 2 first-level slots, or 1 second-level slot, etc.

### Spell Crafting

Channelers use the modular spell-crafting system but with an intuitive, personal twist:
- **Base Cantrip** (elemental, divine, or nature-themed)
- **Delivery Shape** (touch, area, ranged, etc.)
- **Effect Modifier** (damage boost, extra duration, condition infliction, etc.)

**Flavor Note:** Channeler magic is raw and personal. Your *Sacred Flame* might manifest as golden light, spectral fire, or crackling energy depending on your character's background. Work with your GM to flavor your spells as intuitive manifestations rather than studied formulas.

## Skill Trees

### Battle Channeling (Combat Magic)

Infuse weapons with magic, smite enemies, and fight as a war-mage.

**Tier 1 Abilities (5 CP each):**
- **Divine Strike:** Once per turn, when you hit with a weapon attack, add +1d8 radiant or necrotic damage (your choice). This stacks with Channel Energy if used on the same turn.
- **Blessed Weapon:** As a free action, bless your weapon for 1 minute. It counts as magical for overcoming resistance and sheds dim light in a 10-foot radius.
- **Smite:** When you hit with a melee weapon attack, you can expend a spell slot to deal bonus damage = 1d8 per spell level (1st-level = 1d8, 2nd = 2d8, 3rd = 3d8). Undead and fiends take an extra +1d8.

**Tier 2 Abilities (10 CP each, requires one Tier 1):**
- **Improved Divine Strike:** Your Divine Strike increases to +2d8 (replaces the Tier 1 version).
- **Warpriest:** When you cast a spell, you can make one weapon attack as 1 action (bonus) (part of the same turn in 3-action economy—essentially reduces the attack cost).
- **Channeled Smite:** When you use Smite, you can also trigger Channel Energy (harm) on the same target—combine them into one devastating strike (uses both a spell slot and a Channel Energy use).

**Tier 3 Abilities (15 CP each, requires Level 5+ and one Tier 2):**
- **Avatar of War:** 1/long rest, for 1 minute, your weapon attacks deal an extra +2d8 radiant or necrotic damage (your choice at activation), and you have resistance to all damage. You become a conduit of pure destructive power.
- **Overwhelming Smite:** When you use Smite and the attack hits, the target must make a DC 15 Fortitude save or be knocked prone and stunned until the end of their next turn (the force of your blessed strike overwhelms them).

### Spirit Bond (Divination & Nature Magic)

Commune with spirits, draw on nature magic, and divine the future.

**Tier 1 Abilities (5 CP each):**
- **Speak with Spirits:** You can cast *Speak with Dead* once per long rest without expending a spell slot (10-minute ritual, ask 3 questions of a corpse).
- **Natural Healing:** When you use Channel Energy to heal, the target also gains +5 feet of movement and advantage on their next Athletics or Acrobatics check (you channel vitality into them).
- **Omen Reading:** Once per long rest, meditate for 10 minutes to receive a vague omen about the future (GM provides a cryptic hint about upcoming danger or opportunity).

**Tier 2 Abilities (10 CP each, requires one Tier 1):**
- **Spirit Guide:** You have a spiritual companion (invisible to others but you can sense it). Once per short rest, ask your spirit guide one yes/no question about your immediate surroundings—the GM answers truthfully. Useful for detecting ambushes or traps.
- **Nature's Blessing:** You can cast *Speak with Animals* at will (no spell slot required). Animals are generally friendly toward you unless provoked.
- **Commune:** Once per long rest, perform a 1-hour ritual to commune with higher powers (spirits, the Waste itself, ancestors, etc.). Ask up to 3 questions that can be answered with yes, no, or unclear. The GM answers based on available cosmic knowledge.

**Tier 3 Abilities (15 CP each, requires Level 5+ and one Tier 2):**
- **Spirit Walk:** 1/long rest, enter a trance for 1 minute. Your spirit leaves your body and can travel up to 1 mile. You're invisible and can pass through solid objects. If your body is harmed, you're immediately yanked back. Excellent for scouting or espionage.
- **Voice of the Wasteland:** You can speak with the land itself. Once per session, touch the ground and ask what has happened here in the past week. The GM describes major events (battles, deaths, rituals, etc.) that occurred in this location.

### Resilience (Endurance & Protection)

Bolster your own defenses, resist damage, and become an immovable bastion.

**Tier 1 Abilities (5 CP each):**
- **Unyielding:** When you're reduced to 0 HP, you can choose to drop to 1 HP instead (1/long rest). Your willpower refuses to let you fall.
- **Stone Skin:** 1/short rest, gain resistance to bludgeoning, piercing, and slashing damage from non-magical sources for 10 minutes (your skin hardens).
- **Enduring Channel:** When you use Channel Energy on yourself (healing), you also gain temporary HP = your WIS modifier (the energy lingers as a protective barrier).

**Tier 2 Abilities (10 CP each, requires one Tier 1):**
- **Iron Will:** You have advantage on saves against being frightened or charmed. You can't be magically put to sleep.
- **Damage Reduction:** You have permanent damage reduction = your proficiency bonus against all damage types (at Level 5, reduce all damage by 3). This stacks with resistance.
- **Shield of Faith:** You can cast *Shield of Faith* on yourself at will (no spell slot required, 10-minute duration, +2 DV).

**Tier 3 Abilities (15 CP each, requires Level 5+ and one Tier 2):**
- **Immovable:** You're immune to being knocked prone, grappled, or restrained by creatures of your size or smaller. You have advantage on saves against effects that would move you against your will.
- **Martyr's Blessing:** 1/long rest, when an ally within 30 ft is hit by an attack, you can use your reaction to teleport adjacent to them and take the hit instead (you intercept the blow). You have resistance to the damage from that attack.

## Sample CP Expenditures

Here's how a typical Channeler might spend CP from Level 1-5:

**Level 1 (15 CP total):**
- Divine Strike (Battle Channeling Tier 1): 5 CP
- *Remaining: 10 CP*

**Level 2 (25 CP total):**
- Blessed Weapon (Battle Channeling Tier 1): 5 CP
- Unyielding (Resilience Tier 1): 5 CP
- *Remaining: 10 CP*

**Level 3 (35 CP total):**
- Smite (Battle Channeling Tier 1): 5 CP
- Stone Skin (Resilience Tier 1): 5 CP
- Speak with Spirits (Spirit Bond Tier 1): 5 CP
- *Remaining: 5 CP*

**Level 4 (45 CP total):**
- Warpriest (Battle Channeling Tier 2): 10 CP
- *Remaining: 5 CP*

**Level 5 (55 CP total):**
- Avatar of War (Battle Channeling Tier 3): 15 CP
- *Remaining: 0 CP*

---

## Advanced Specializations (Levels 6-10)

At level 6, the Channeler selects one of three Advanced Specializations. These specializations unlock new skill tree branches, powerful abilities, and define the Channeler's role in the wasteland's ongoing struggle. Each specialization is associated with a named skill tree: the **Battlemage** unlocks the **Spellsword** tree, the **Shaman** unlocks the **Spirit Magic** tree, and the **Oracle** unlocks the **Oracular Powers** tree. The specialization name describes your role and identity; the skill tree name describes the techniques you master.

### Battlemage (Spell-Steel Conduit)

*Spell and steel are not separate disciplines — they are one art. The Battlemage channels magical energy through their weapon, storing power with each spell and releasing it with devastating precision. Where other casters stand behind the front line, the Battlemage IS the front line — a walking conduit of arcane force who grows more dangerous with every swing and every incantation.*

**Prerequisites:** Channeler build, level 6

---

### Spellsword (Arcane Martial Mastery — Specialization Tree)

Available only to Battlemages (L6+ specialization). The Spellsword tree deepens the Conduit Charge economy: generating charges faster, unlocking new ways to spend them, and rewarding the alternating cast-and-strike rhythm that defines this specialization. Every ability here enhances what War Magic and Conduit Strike already do — none introduces a separate resource system.

**Tier 1 Abilities (5 CP each):**

- **Eldritch Recall (5 CP):** When you reduce a creature to 0 HP with a weapon attack, you immediately regain **1 Conduit Charge** (maximum once per turn). Combat mastery bleeds back into the conduit — every kill feeds your next strike. *Steel generates as much power as spellwork does.* **[Note:** If the killing blow also qualifies as a Conduit Strike, this once-per-turn limit is shared with Eldritch Tempest's built-in charge-on-kill — the same kill does not grant 2 charges from both triggers.**]**

- **Charged Cantrip (5 CP):** When you cast a cantrip via War Magic, you can expend **1 Conduit Charge** (if you have one) to apply the **Searing Mark** effect through the cantrip's damage — the mark is applied even if your weapon attack misses. The 1 charge is spent; you also gain 1 charge from the War Magic action as normal (net charge change: 0). *You don't always need a clean melee hit to paint a target. The spell carries the mark.*

- **Arc Ward (5 CP):** Passive. While you are holding **3 or more Conduit Charges**, you gain **+1 DV** (the stored arcane energy forms a crackling field around you). This bonus disappears instantly the moment you drop below 3 charges — you must choose between spending your charges for damage or holding them for protection.

**Tier 2 Abilities (10 CP each, requires one Tier 1):**

- **Arcing Discharge (10 CP):** When you use Conduit Strike spending **2 or more charges**, the released energy arcs to **one additional creature within 10 feet** of the primary target. The arc deals force damage equal to **twice your WIS modifier** — the target makes a Reflex save (DC = 8 + WIS + proficiency) for half. The arc delivers no secondary effect (no Arcane Shunt, no Banishing Strike — it's raw spillover). *The battlefield isn't big enough to contain what you release.*

- **Spellblade Technique (10 CP):** Once per short rest, when you use War Magic and your weapon attack **hits**, you can immediately apply a **Conduit Strike** as part of the same action — spending up to **2 Conduit Charges** on the strike at no additional action cost. The charge cost is normal; only the action compression is free. This lets your War Magic hit carry charge-enhanced damage without requiring a separate strike action. *(Note: you still gain the 1 charge from the War Magic cantrip as normal — you can generate and spend in the same action.)*

- **Combat Caster's Parry (10 CP):** When a creature **within 5 feet** casts a spell targeting you, you can use your **reaction** to make **one weapon attack** against that creature. On a hit, if you have at least 1 Conduit Charge, you may expend 1 charge: the target has **disadvantage on the next saving throw they make** before the end of their next turn (the disruption fractures their concentration). Whether or not you have a charge, the hit deals normal weapon damage. *They commit to casting, and you commit to steel — simultaneously.*

**Tier 3 Abilities (15 CP each, requires one Tier 2):**

- **Conduit Mastery (15 CP):** Your maximum Conduit Charges increases permanently to **4**. This applies at all times — you can hold 4 charges before and after Eldritch Tempest, not just during it. The 4-charge and 5-charge **Conduit Strike effects** are defined in the Channeler's base class Conduit Strike table (see the main Channeler section). At Level 17, the **Divine Judgment** feature raises your permanent base cap to **5** — consult the base Conduit Strike table for both effects.

  *More charges held means more to release. The ceiling just moved.*

- **Arcane Avalanche (15 CP):** Once per long rest, when you activate **Eldritch Tempest**, its duration extends to **2 minutes (20 rounds)** instead of 1 minute. Additionally, for the entire duration of Eldritch Tempest, War Magic grants **2 Conduit Charges** per use instead of 1. At peak Avalanche, you are generating charges twice as fast and releasing them in area-splashing Conduit Strikes for twice as long. *The tempest doesn't subside — it builds.*

#### Core Mechanic: Conduit Charges

When the Battlemage casts a spell of 1st level or higher, their weapon absorbs residual energy and gains a **Conduit Charge**. Conduit Charges represent spell energy stored in the weapon, waiting to be released through a melee strike.

**Gaining Charges:**
- Cast a spell of 1st level or higher → gain **1 Conduit Charge**
- Cast a cantrip via War Magic (paired with a weapon attack) → gain **1 Conduit Charge**
- Maximum charges held at once: **3** (increases to 4 at L10 with Eldritch Tempest)

**Spending Charges:**
- Charges are spent via **Conduit Strike** (see Level 8 features)
- Unspent charges fade at the end of combat or after 1 minute out of combat

**Visual Flavor:** Charges manifest as visible energy along the weapon — crackling lightning, ghostly radiance, or smoldering heat depending on the spell cast. Allies and enemies can see the weapon glowing with stored power.

#### Level 6 Features

**War Magic** (Passive)
When you use an action to cast a cantrip, you can make one weapon attack as part of the same action. This allows you to weave spellcasting and swordplay together seamlessly.

Additionally, when you make a weapon attack as part of War Magic, you gain **1 Conduit Charge** (see Core Mechanic above). Since cantrips add your WIS modifier to damage and can be powered with spell slots (see [Cantrip Damage Scaling](../magic.md#cantrip-damage-scaling)), War Magic turns each action into a potent combination of spell and steel while building toward your Conduit Strike.

*Example: You cast Sacred Flame (1d6+WIS radiant) and swing your longsword (1d8+MIG slashing) in the same action. You gain 1 Conduit Charge. Next action, you Strike (2 attacks via Extra Attack). Third action: cast Bless on your allies (gains another Conduit Charge from being a leveled spell). You end the turn with 2 charges stored.*

**Arcane Armor** (Passive)
You can wear heavy armor without losing access to your Channeler spellcasting. Additionally, you can use any weapon you're holding as a spellcasting focus for your Channeler spells.

*Design Note: This overlaps with Wasteland Knight's L11 Armored Grace. This is intentional — a Battlemage who later takes Wasteland Knight gains the mastery path's other features (Oath Bond, Aegis, Consecrated Weapon, Bastion) without redundancy in armor casting, since they already have it. A non-Battlemage Channeler who takes Wasteland Knight gains armor casting at L11 instead of L6. The 5-level gap is the cost of choosing Shaman or Oracle.*

#### Level 8 Features

**Conduit Strike** (On Melee Hit)
When you hit a creature with a melee weapon attack, you can expend one or more **Conduit Charges** to deliver stored arcane energy. Each charge spent deals **1d8 radiant or necrotic damage** (your choice, made each time you use this feature) and applies a secondary effect based on the number of charges spent:

| Charges Spent | Damage | Secondary Effect |
|---------------|--------|------------------|
| 1 | +1d8 | **Searing Mark:** The target sheds dim light in a 5-ft radius until the end of your next turn. Attacks against the marked target have +1 to hit. |
| 2 | +2d8 | **Arcane Shunt:** You or one ally within 15 ft regains HP equal to half the radiant/necrotic damage dealt. |
| 3 | +3d8 | **Banishing Strike:** The target must make a Will save (DC = 8 + WIS + proficiency) or be banished to a harmless demiplane until the end of their next turn. They reappear in the same space (or nearest unoccupied space). |
| 4 | +4d8 | **Arcane Prison:** The target must make a Reflex save (DC = 8 + WIS + proficiency) or be **restrained** until the end of their next turn. Spectral arcane bindings lock them in place. The target may spend 1 action to attempt an Athletics check (DC = your spell save DC) to break free early. Full damage is dealt regardless of the save result. |
| 5 | +5d8 | **Arcane Obliteration:** The target must make a Will save (DC = 8 + WIS + proficiency). On a failure, they are **stunned** until the end of their next turn (incapacitated, cannot move, attacks against them have advantage, auto-fail MIG and AGI saves). On a success, they are **dazed** instead (they may take actions OR movement but not both, cannot take reactions, and have disadvantage on attack rolls until the end of their next turn). Full damage is dealt regardless of the save result. |

> **Charge maximums:** A Battlemage can hold a maximum of 3 Conduit Charges normally. **Eldritch Tempest** (L10 capstone) temporarily raises the cap to 4 for 1 minute. **Conduit Mastery** (Spellsword tree, 15 CP) raises the permanent maximum to 4. **Divine Judgment** (L17 feature) raises the permanent maximum to 5. The 4-charge row is accessible whenever you hold 4 charges; the 5-charge row is accessible only under Divine Judgment.

*Conduit Strike replaces the old Improved Smite. The key difference: Improved Smite spent spell slots directly for damage. Conduit Strike spends charges earned by casting spells — which means the Battlemage must alternate between casting and striking to build up to powerful releases. This is the combat rhythm that defines the specialization.*

> *Example: Turn 1 — You cast Bless (1st-level, gain 1 charge) and War Magic cantrip+attack (gain 1 charge). You have 2 charges. Turn 2 — You Strike (Extra Attack, 2 hits). On the first hit, you spend 2 charges for Arcane Shunt: +2d8 damage and your wounded ally heals for half. The second hit is a normal attack. You now have 0 charges and need to cast again to build up.*

**Arcane Momentum** (Passive)
Your weapon attacks count as magical for the purpose of overcoming resistance and immunity to nonmagical damage.

Additionally, when you alternate between casting a spell and making a weapon attack in the same turn (in either order), your weapon attacks for that turn deal an extra **1d4 force damage**. This bonus applies to all weapon attacks made on the turn, including those made as part of War Magic.

*"Alternating" means you used at least one action for a spell or cantrip and at least one action for a Strike (or War Magic, which counts as both). This rewards the Battlemage's intended combat rhythm — cast, swing, cast — rather than pure spellcasting or pure attacking.*

#### Level 10 Capstone Ability

**Eldritch Tempest** (1/Long Rest)
Once per long rest, you can activate Eldritch Tempest as 1 action. For **1 minute (10 rounds):**

- Your maximum Conduit Charges increases to **4**
- When you spend Conduit Charges on a Conduit Strike, the target and all enemies within **10 ft** of the target take **1d6 force damage** per charge spent (Reflex save for half, DC = 8 + WIS + proficiency)
- You gain **+2 DV** from crackling arcane energy surrounding you
- When you reduce a creature to 0 HP with a Conduit Strike, you immediately regain **1 Conduit Charge** (once per round)

*Eldritch Tempest is the Battlemage at peak power — a whirlwind of spell and steel where every kill fuels the next strike and every Conduit Strike sends shockwaves through nearby enemies. The ideal Tempest turn: cast a spell (gain charge), War Magic cantrip+attack (gain charge + Arcane Momentum bonus), Strike with Extra Attack and spend charges for a massive Conduit Strike that damages the primary target AND blasts enemies around them.*

> *Example: Eldritch Tempest is active. You cast Shield of Faith (+2 DV, gain 1 charge). You then War Magic: Sacred Flame + longsword attack (gain 1 charge, Arcane Momentum triggers — all weapon attacks get +1d4 force). You now have 2 charges. Your third action is Strike (Extra Attack: 2 attacks). On the first hit, you spend both charges: Conduit Strike deals +2d8 radiant (Arcane Shunt heals an ally), and Eldritch Tempest adds 2d6 force to all enemies within 10 ft. If that kill drops the target, you regain 1 charge for your next turn. Your second attack deals normal damage +1d4 force (Arcane Momentum). Total actions used: 3. No extra actions granted.*

---

### Shaman (Spirits/Nature)

**Flavor:** The wasteland is alive — scarred, angry, but alive. Shamans listen to its spirits and channel its primal will. They commune with forces older than civilization, drawing power from the wounded earth itself.

**Prerequisites:** Channeler build, level 6

**Level 6 Features:**

**Spirit Companion** (Passive + Active)
You gain a spirit companion — an incorporeal entity visible only to you and creatures with magical sight. It scouts autonomously up to **120 feet** away, translates dead languages, and gives you **+2 to Perception checks** as it watches your surroundings.

**Active — Haunt (1 Action):** Command your spirit companion to interfere with one creature within 120 feet. The creature has **disadvantage on their next attack roll OR saving throw** (your choice when you issue the command). The disadvantage applies to the next qualifying roll the creature makes. The spirit companion can Haunt **once per round**. The effect resets between combats.

**Sense (1 Action, Concentration up to 1 minute):** Shift your perception into the spirit companion. While concentrating, you see and hear through your companion's senses instead of your own. Your own body is incapacitated (aware but blind and deaf to your immediate surroundings). Ends immediately if you take damage.

**Nature's Wrath** (Passive)
You can cast spells that deal nature-affiliated damage types: acid, cold, lightning, poison, and thunder. When you deal damage with these damage types, you deal **+1 damage per damage die** rolled.

*Example: A Shaman casting a 2nd-level lightning bolt deals 8d6+8 lightning damage (8 dice, +1 per die = +8). A standard caster deals 8d6.*

**Level 8 Features:**

**Totem Bond** (Passive — Choose One)
At Level 8, choose an animal totem that represents your spiritual path. The choice is permanent.

- **Wolf:** All allies within 30 feet of you have **advantage on opportunity attacks** against enemies you threaten (the spirit pack coordinates strikes through you).
- **Bear:** When you use Channel Energy (Heal) on a creature, the target also gains **temporary HP equal to your Wisdom modifier** (minimum 1). These temporary HP last until the start of your next turn. You can target yourself.
- **Eagle:** You gain +10 feet to your Speed and **advantage on Perception checks**. While outdoors, you are never surprised by creatures you can see at the start of combat.
- **Serpent:** The save DC of any **condition** you inflict (Dazed, Frightened, Poisoned, Stunned, etc.) increases by **+1**. Your nature-typed spells (acid, cold, lightning, poison, thunder) deal +1 extra damage per die (this stacks with Nature's Wrath for a total of +2 per die on nature spells).

**Ghost Walk** (1/Short Rest)
Once per short rest, as 1 action, you can enter a **Ghost Walk** lasting up to **1 minute** (10 rounds). While in this form:

- You become partially ethereal — you can **move through objects and creatures** (they are not difficult terrain for you). You cannot end your movement inside a solid object.
- You are **immune to physical damage** (bludgeoning, piercing, slashing) from **non-magical** sources. You are still affected by magical weapons, magical damage, psychic damage, and force damage.
- You **can still attack, cast spells, and use Channel Energy** normally — the ethereal state does not restrict your offensive or support actions.

Ghost Walk ends early if you choose to end it as a free action, you are knocked unconscious, or 1 minute elapses.

*Design note: Ghost Walk represents the Shaman's core identity — fighting as a ghost. The immunity to non-magical physical damage is strong but appropriate at L8, where most challenging enemies have magical attacks. Flag for playtesting: if non-magical immunity is too strong at L8, reduce to DR 4 vs. non-magical physical instead.*

**Level 10 Capstone:**
- **Summon Greater Spirit:** Once per long rest, you can spend 1 action to summon a greater nature spirit in an unoccupied space within 30 ft. The spirit has 50 HP, 15 DV, and makes 2 attacks per round with +7 to hit for 2d8+4 damage (damage type matches your totem: slashing for Wolf, bludgeoning for Bear, slashing for Eagle, piercing and poison for Serpent). It obeys your mental commands and lasts 1 minute or until destroyed. It is incorporeal and immune to nonmagical physical damage.

---

### Spirit Magic (Primal Channeling — Specialization Tree)

Available only to Shamans (L6+ specialization). The Spirit Magic tree deepens the Shaman's three core systems: Spirit Companion utility, Totem Bond resonance, and the Channel Energy/spellcasting hybrid. Abilities here create new interactions between Haunt and weapon attacks, extend your totem's power to allies, and open primal channels between your spellwork and raw spiritual energy. The Totem Surge options differ meaningfully by totem choice — the build expression designed into Totem Bond pays off here.

**Tier 1 Abilities (5 CP each):**

- **Spirited Strike (5 CP):** When your Spirit Companion uses **Haunt** on a target this turn AND you make a weapon attack against that same target this turn, the strike deals **+1d6 bonus damage** (the spirit's disruption peels open a momentary gap in the target's defenses). The Haunt and the attack can happen in either order; both just need to occur within the same round. *Your ghost and your blade work in concert.*

- **Expanded Totem Bond (5 CP):** Your Totem Bond benefit now extends to or deepens for **allies within 15 feet** of you:
  - **Wolf:** While you are threatening at least one creature, allies within 15 ft gain advantage on opportunity attacks against enemies **not** currently threatened by you. This creates a wider pack formation — your direct threat zone draws focused strikes from the pack, and your allies' reach covers the flanks your weapon doesn't touch.
  - **Bear:** When your Channel Energy (Heal) targets any creature, all allies within 15 ft also gain temporary HP equal to your WIS modifier (lasts until your next turn).
  - **Eagle:** Allies within 15 ft also gain +5 Perception and cannot be surprised by visible foes outdoors.
  - **Serpent:** Allies within 15 ft also gain +1 to the DC of any conditions they inflict.

  *The totem's spirit radiates through you to those around you.*

- **Spirit Conduit (5 CP):** When you use **Channel Energy (Heal)**, you can simultaneously command your Spirit Companion to **Haunt** a different creature — both effects happen as part of the same 1-action use. The heal targets one creature; the Haunt targets another. This costs 1 Channel Energy use and 1 Haunt use (the 1/round Haunt limit still applies). *One action: heal an ally, curse an enemy.*

**Tier 2 Abilities (10 CP each, requires one Tier 1):**

- **Totem Surge (10 CP):** Once per short rest, you channel your Totem Bond's primal force through a single action. The effect depends on your chosen totem:
  - **Wolf:** Your next weapon attack this turn, if it hits, automatically knocks the target **prone** (the spirit pack sweeps their legs — no check required)
  - **Bear:** Your next use of Channel Energy (Heal) this turn deals **maximum possible healing** — no dice rolled, treat all dice as their maximum value
  - **Eagle:** You gain a **fly speed of 30 feet** for **1 minute** (you briefly channel the Eagle's ascent — you cannot hover; you fall if you end your turn in the air without moving)
  - **Serpent:** Your next spell or Channel Energy that imposes a condition has its **save DC increased by +3**

  *The spirit doesn't just guide you — it briefly inhabits your actions.*

- **Haunting Echo (10 CP):** Your Spirit Companion's Haunt is more persistent. When Haunt is applied to a creature, it now imposes **disadvantage on the next two qualifying rolls** (in sequence — the first disadvantage applies to their next qualifying roll, and the second disadvantage applies to the one after that). If the creature already made their first roll before you gained this ability, the second instance still applies to their subsequent qualifying roll.

- **Primal Surge (10 CP):** When you cast a spell dealing **acid, cold, lightning, poison, or thunder** damage, you can expend **1 Channel Energy use** as part of the same action. If you do, the spell deals **+1d8 additional damage of the same type** as the triggering spell. This bonus stacks with Nature's Wrath (+1/die) and Serpent Totem Bond (+1/die) — a Serpent Shaman using Primal Surge on a lightning spell deals Nature's Wrath +1/die, Serpent +1/die, AND Primal Surge +1d8. *The spirit in you and the spirit in the land speak the same language.*

**Tier 3 Abilities (15 CP each, requires one Tier 2):**

- **Spirit Army (15 CP):** When you use **Summon Greater Spirit** (L10 capstone), you simultaneously summon a **lesser spirit** in an unoccupied space within 30 ft (no additional action). The lesser spirit has **25 HP, 13 DV**, and makes **1 attack per round** at **+5 to hit for 2d6+2 damage** (damage type matches your totem, same as the Greater Spirit). It obeys the same mental commands. Both spirits come from the same **1/Long Rest** use — you are not spending two uses. *One rite opens both doors.*

- **Totem Manifestation (15 CP):** Once per long rest, as 1 action, you fully manifest your Totem Bond for **1 minute**. The spirit of your totem overlays your form, granting an overwhelming benefit based on your choice:
  - **Wolf:** You and all allies within 30 ft move at **double speed**. Each time an ally hits an enemy you threaten, that ally rolls maximum damage on all damage dice for that attack (no luck, just precision — the pack moves as one)
  - **Bear:** You gain **temporary HP equal to your maximum HP** (effectively doubling your available HP for the minute). You cannot be frightened or charmed while these temporary HP remain
  - **Eagle:** You gain a **fly speed equal to triple your walking speed**. Your Perception checks automatically succeed for the duration — no roll needed. You cannot be surprised
  - **Serpent:** All your spell save DCs increase by **+3**. Any creature that fails a saving throw against one of your spells or Channel Energy also **loses their reaction** until the start of their next turn (the venom of doubt strips their reflexes)

---

### Oracle (Psychic/Prescient)

**Flavor:** Where the Shaman communes with nature spirits and the Battlemage channels energy through steel, the Oracle perceives the threads of fate and will beneath all physical reality. Telekinesis is not magic — it is the Oracle sensing the invisible forces that hold the world together and choosing where to apply pressure. Telepathy is not power — it is listening to the thoughts others don't know they're broadcasting. For an Oracle, the boundary between mind and matter is a suggestion, not a wall.

*An Oracle Channeler's psychic abilities arise from **spiritual sensitivity**, not biological mutation or psionic training. They perceive the spirit world as fields of mental energy and learn to manipulate those fields through faith and will. This is distinct from the **Psion** archetype (see **Psion**), whose powers derive from biological or mutational psionic aptitude and operate through a dedicated Focus resource system. The play experience differs significantly — an Oracle Channeler has Channel Energy, half-caster spell slots, and melee combat capability as their foundation; a full Psion has the Focus mechanic and psionic-exclusive features. Both have telekinetic and telepathic abilities, but they use fundamentally different engines.*

**Prerequisites:** Channeler build, level 6

**Level 6 Features:**
- **Telekinesis:** As 1 action, you can move an object or creature weighing up to 100 lbs up to 30 ft in any direction. If targeting a hostile creature, make a **contested check: your 1d20 + WIS modifier vs. their 1d20 + MIG modifier** (see Contested Checks in Combat rules). You can use this ability to make improvised ranged attacks with objects within range, dealing 2d6 + WIS modifier force damage on hit. This ability is usable at will.
- **Telepathy:** You can communicate mentally with any creature within 60 feet that has an **Intelligence of 4 or higher** (basic sentience — excludes mindless undead, vermin, and constructs without sapience). Language is not required for basic communication — you can project images, emotions, and sensory impressions as well as words. Conveying complex concepts to a creature with no shared language requires a **Wisdom (Arcana) check (DC 12)**; simple concepts (stop, help, danger, direction) transfer automatically. You can broadcast your thoughts to multiple creatures simultaneously, and they can respond mentally if they wish.

**Level 8 Features:**
- **Psychic Blast:** As 1 action, you unleash a 30 ft cone of mental force. All creatures in the area must make a Will save (DC = 8 + WIS + proficiency) or take 4d6 psychic damage and become Dazed for 1 round (see Conditions). On a successful save, they take half damage and are not dazed. Usable once per short rest.
- **Mind Shield:** You gain resistance to psychic damage and advantage on saves against being charmed, frightened, or having your thoughts read. This protection extends to all allies within 10 ft of you.
- **Kinetic Anticipation** (Reaction): Your constant telekinetic field anticipates physical threats. When a creature within **30 feet** moves toward you, you may use your **reaction** to make a Telekinesis contested check (your WIS vs their MIG) to attempt to **stop their movement** — the creature's movement halts at the point where the contest was initiated if you win. The creature can still complete their action but cannot move further toward you until their next turn. On a loss, they move normally. This reaction does not require you to have both hands free. Additionally, when you win a Telekinesis contested check against a hostile creature, you may immediately reposition that creature up to **10 feet in any direction** (may not be used to move the target into a hazardous space without their failure of a separate save at GM discretion). *Your mind reaches out before your body has a chance to respond.*

**Level 10 Capstone:**
- **Psychic Dominion:** Once per long rest, for 1 minute, you achieve perfect mental clarity and overwhelming psychic power. Your Telekinesis can move objects or creatures weighing up to 500 lbs. You can read the surface thoughts of all creatures within 60 ft (no save) as a passive effect. Once per round as a free action, you can force one creature within 60 ft to make a Will save (DC 18) or be dominated (you control their actions) until the end of their next turn.

---

### Oracular Powers (Psychic Expansion — Specialization Tree)

Available only to Oracles (L6+ specialization). The Oracular Powers tree extends the Oracle's reach — further Telekinesis range, sharper Telepathy tools, and new ways to contribute from the back line every round. The design priority is the **at-will features**: Telekinesis and Telepathy should feel more capable and more tactically rich by the end of this tree. Psychic Blast (1/SR AOE) already handles area control; these abilities build the Oracle's per-round presence and information advantage instead.

**Tier 1 Abilities (5 CP each):**

- **Telekinetic Fling (5 CP):** When you use the **Strike action** with **Extra Attack**, you may replace one (or more) weapon attack strikes with a **Telekinesis attack** — using TK's normal rules (contested check for hostile targets, 2d6+WIS force on hit). This does not change TK's other properties; it remains a ranged ability subject to normal cover, range, and opportunity attack rules. The total action cost is unchanged — you are substituting within your existing Strike. Additionally, objects weighing **25 lbs or less** can be flung with enough speed to automatically hit — the target makes a **Reflex save (DC = 8 + WIS + proficiency)** for half damage on the 1d8+WIS force hit instead of a contested check. *Lighter objects flung faster. Heavier objects thrown with precision.*

- **Mind's Reach (5 CP):** Your **Telepathy range** extends to **120 feet** (from 60 ft). Additionally, when you communicate telepathically with a willing creature, you can **share your current senses** with them as a free action — for 1 round, they perceive everything you perceive (sight, sound, and your Spiritual Sense output). This shared perception can be used to coordinate attacks around corners, reveal hidden enemies you sense, or communicate danger without words. *What you see, they see.*

- **Kinetic Shield (5 CP):** Passive. Your at-will Telekinesis creates a constant field of subtle kinetic force around you — deflecting incoming attacks by fractions that add up. While you are not holding anything in either hand (or holding only your spellcasting focus), you gain **+1 DV** permanently from this effect. The moment you pick up a weapon or carry an object actively, the field collapses. *Every object in the room is a potential shield.*

**Tier 2 Abilities (10 CP each, requires one Tier 1):**

- **Psychic Spear (10 CP):** Once per short rest, as 1 action, you drive a focused spike of mental force into one creature within **60 feet** — not the broad cone of Psychic Blast, but a single precise strike. The target makes a **Will save (DC = 8 + WIS + proficiency)**. On a failure: **3d8 psychic damage** and the target becomes **frightened of you until the end of their next turn**. On a success: half damage, not frightened. Unlike Psychic Blast, this targets a single creature and applies **fear** rather than dazed — different control profile for single high-priority targets. *Psychic Blast clears a room. Psychic Spear breaks a will.*

- **Telepathic Intercept (10 CP):** Passive — your Telepathy picks up unguarded communication around you. When any enemy within **60 feet** issues a verbal command, shouts tactical information to allies, or uses any form of spoken coordination, you automatically learn the tactical content of that communication (GM provides the gist) — language is not a barrier. Additionally, once per short rest, you can use your **reaction** to mentally **jam** one such communication as you intercept it: the recipient has **disadvantage on their next action** taken in direct response to that command (they received the order scrambled and hesitate). *You don't just listen to what they say. You decide what they hear.*

- **Extended Grip (10 CP):** Passive. Your Telekinesis range extends to **60 feet** (from 30 ft). Your maximum TK lift capacity increases to **200 lbs**. When you win the contested check to move a hostile creature with Telekinesis, the creature is **restrained** (not just moved) until the start of your next turn — held in your psychic grip. While restrained this way, they can spend their action on a contested check (their MIG vs your WIS) to break free; failure means they remain restrained until your next turn. *The grip gets stronger when you stop thinking of yourself as moving things and start thinking of yourself as holding them.*

**Tier 3 Abilities (15 CP each, requires one Tier 2):**

- **Psychic Overreach (15 CP):** Once per long rest, as 1 action, you extend your psychic grip across the entire battlefield. For **1 minute**:
  - Your Telekinesis has **unlimited range** within your line of sight
  - You can maintain TK on up to **5 separate objects or creatures simultaneously** — each targeted separately (each still subject to the weight limit individually)
  - You can act on all 5 TK targets as **a single action** on your turn
  - Your Telekinesis attacks gain **advantage** and deal **+1d6 force damage per object currently in flight** (up to +5d6 if all 5 TK slots are active)

  *You stop reaching for objects. The objects reach back.*

- **Open Mind (15 CP):** Your Telepathy transcends the boundaries of language and sapience:
  - Telepathy now extends to creatures with **Intelligence 1 or higher** (animals, simple constructs, primitive beings) — communication is purely emotional and instinctive (fear, hunger, loyalty, direction), but functional
  - When communicating complex concepts telepathically to creatures you share a language with, you no longer need to roll the DC 12 Arcana check — your mastery makes complex telepathic expression effortless
  - Once per short rest, you can **broadcast** to all willing creatures within your Telepathy range simultaneously — sharing a complex battle plan, warning, or shared vision as a **free action**. All recipients receive the full message instantaneously

  *Minds are not separate. You've always known this. Now you can prove it.*

![An insectoid channeler communes with otherworldly forces, chitin glowing with spiritual energy](/images/illustrations/insectoid-channeler.png)

---

## Level 16: Spiritual Apotheosis (Build Capstone)

You become a living nexus of spiritual power. Your Channel Energy ability heals or damages 4d8 (instead of 3d8, gaining the Level 17 scaling one level early). You can use Channel Energy and cast a spell in the same turn without triggering Overflow. Your spell slots recover partially on a short rest (half your total slots per level, rounded down—minimum 1 per level).

## Level 17: Specialization Final Evolution

### Battlemage — Divine Judgment

Your radiant damage **ignores resistance** and treats **immunity as resistance**. Your maximum Conduit Charges increases to **5** (from 4 during Eldritch Tempest, or from 3 normally). Whenever you deal radiant damage to a creature (from a spell, cantrip, Channel Energy, or Conduit Strike), you immediately gain **1 Conduit Charge** as a free action (this triggers once per turn maximum — multiple radiant damage sources in one turn grant only 1 charge).

When you spend 3 or more Conduit Charges on a single **Conduit Strike**, the target must make a **Fortitude save (DC = 8 + WIS modifier + proficiency bonus)** or be **Blinded** until the end of their next turn.

You are **immune to necrotic and radiant damage**. Your Channel Energy (Harm) automatically dispels magical darkness in a 10-foot radius when used.

*The Conduit Charge auto-gain on radiant damage means the Battlemage at L17 generates charges faster — every radiant action feeds back into the next Conduit Strike. The 3+ charge Blind effect rewards saving charges for big moments. At full power with 5 charges, a single Conduit Strike can Blind, restrain, or stun a target while dealing +5d8 — the peak expression of a life spent mastering the union of spell and steel.*

### Shaman — Primal Rebirth

Your spiritual power fully dissolves the barrier between the material and spirit worlds.

**Ghost Walk Evolution:** Ghost Walk now lasts up to **10 minutes** (100 rounds) instead of 1 minute. While Ghost Walk is active, your Spirit Companion becomes semi-material — it can make **1 attack per round** (automatically, no action required) using the same stats as your Greater Spirit (if summoned) or at +5 to hit for 1d8+WIS radiant damage if Greater Spirit is not present. During Ghost Walk, your Spirit Companion cannot be dismissed or destroyed.

**Totem Ascendance:** While Ghost Walk is active, your Totem Bond benefit extends to all allies within 30 feet (as if you had Expanded Totem Bond from the Spirit Magic tree, regardless of whether you purchased that ability). If you also have Expanded Totem Bond, the benefit range instead doubles to 30 ft for allies.

**Spirit Resilience:** You gain immunity to poison and disease. You cannot be Frightened while Ghost Walk is active.

### Oracle — Psychic Singularity

Your psychic damage ignores resistance and treats immunity as resistance. When you deal psychic damage, you heal for half the damage dealt. You gain immunity to psychic damage and cannot be stunned, confused, or dazed. Once per short rest, you can unleash a Psionic Shockwave: all creatures within 30 ft make a Will save (DC 8 + prof + WIS) or take 6d8 psychic damage and are stunned for 1 round (half damage and not stunned on success).

## Level 20: Transcendent Convergence (Apex Ability)

**Once per long rest (1 week)**

Your body becomes a living conduit for raw magical and spiritual energy. You radiate power in a devastating aura of life and death.

**Effects:**
- For 1 minute, you emanate an aura in a 30 ft radius
- **Aura effect (automatic at start of each creature's turn):**
  - Allies heal 2d6 HP
  - Enemies take 2d6 radiant damage (no save)
- You can cast spells and make weapon attacks freely—you are not limited by the normal spell + cantrip restriction (still limited by action economy: 3 actions per turn)
- Your Channel Energy ability deals 6d8 damage/healing and can target all enemies within 30 ft simultaneously (no action required—can be done once during the duration)
- Your spell save DC increases by +2
- You levitate 5 ft off the ground and emit bright light in a 20 ft radius

**Drawback:** When Transcendent Convergence ends, you immediately gain 3 levels of exhaustion. Channeling such power through a mortal form exacts a terrible price.
