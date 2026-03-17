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
starting_ap: 15
role: Hybrid Warrior/Mage
magic_type: "Half-caster (all schools)"
level_1_features: [Channel Energy, Cantrips]
skill_trees:
  - name: Battle Channeling
    focus: Offense
    abilities:
      - {name: Divine Strike, ap_cost: 5, tier: 1, effect: "+1d8 radiant or necrotic on melee hit"}
      - {name: Warpriest, ap_cost: 10, tier: 2, effect: "Bonus attack after casting"}
      - {name: Avatar of War, ap_cost: 15, tier: 3, effect: "+2d8 radiant or necrotic, resistance to all damage"}
  - name: Spirit Bond
    focus: Utility
    abilities:
      - {name: Speak with Spirits, ap_cost: 5, tier: 1, effect: "Commune with dead"}
      - {name: Spirit Guide, ap_cost: 10, tier: 2, effect: "Spectral ally assists checks"}
      - {name: Spirit Walk, ap_cost: 15, tier: 3, effect: "Ethereal form for 1 min 1/LR"}
  - name: Resilience
    focus: Defense
    abilities:
      - {name: Unyielding, ap_cost: 5, tier: 1, effect: "Drop to 1 HP instead of 0 HP 1/LR"}
      - {name: Iron Will, ap_cost: 10, tier: 2, effect: "Adv vs frightened/charmed, immune to magical sleep"}
      - {name: Unstoppable, ap_cost: 15, tier: 3, effect: "Ignore 1 failed save 1/LR"}
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
    description: "Start with 2 cantrips (divine/nature/elemental themed). Add WIS mod to cantrip damage. Can power with spell slot for +1 die per slot level. Additional cantrips cost 10 AP each."
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
    role: Melee/Magic Hybrid
    features:
      - {name: War Magic, level: 6, action: Passive, description: "When casting a cantrip, make one weapon attack as part of same action."}
      - {name: Arcane Armor, level: 6, action: Passive, description: "Can wear heavy armor without losing spellcasting. Held weapon counts as spellcasting focus."}
      - {name: Improved Smite, level: 8, action: "On Melee Hit", description: "Expend spell slot to deal +2d6 radiant or necrotic per slot level (1st=2d6, 2nd=4d6, 3rd=5d6 cap). Replaces Battle Channeling Smite."}
      - {name: Channeled Strikes, level: 8, action: Passive, description: "Weapon attacks count as magical. Melee attacks deal extra 1d4 force damage."}
      - {name: Eldritch Tempest, level: 10, action: "1 Action", description: "1/Long Rest. 1 minute. Melee hits: target and enemies within 10 ft take 2d6 force. Spell casts: free melee attack. +2 DV."}
  - name: Shaman
    role: Spirit/Nature
    features:
      - {name: Spirit Companion, level: 6, action: Passive, description: "Incorporeal spirit scouts 120 ft, translates dead languages, +2 Perception. Spend 1 action to sense through spirit."}
      - {name: "Nature's Wrath", level: 6, action: Passive, description: "Spells dealing acid, cold, lightning, poison, or thunder deal +1 per damage die."}
      - name: Totem Bond
        level: 8
        action: Passive
        description: "Choose one animal totem for permanent benefits."
        choices:
          - {name: Wolf, effect: "Allies within 30 ft gain advantage on opportunity attacks"}
          - {name: Bear, effect: "+2 HP per character level (retroactive)"}
          - {name: Eagle, effect: "+10 ft speed, advantage on Perception"}
          - {name: Serpent, effect: "Poison save DCs increase by 2"}
      - {name: Spirit Walk, level: 8, action: "1 Action", description: "1/Short Rest. 1 round. Become ethereal: move through objects, immune to damage. Cannot attack or interact."}
      - {name: Summon Greater Spirit, level: 10, action: "1 Action", description: "1/Long Rest. 1 minute. Summon spirit (HP 50, DV 15, 2 attacks +7 hit, 2d8+4 damage matching totem). Obeys mental commands."}
  - name: Psion
    role: Psychic/Telekinetic
    features:
      - {name: Telekinesis, level: 6, action: "1 Action", description: "At-will. Move object/creature up to 100 lbs up to 30 ft. Hostile: your WIS vs their MIG. Can make ranged attacks with objects: 2d6+WIS force."}
      - {name: Telepathy, level: 6, action: "At-Will", description: "60 ft. Communicate mentally with any creature sharing a language. Can broadcast to multiple creatures."}
      - {name: Psychic Blast, level: 8, action: "1 Action", description: "1/Short Rest. 30 ft cone. Will save DC 8+WIS+prof. Fail: 4d6 psychic + dazed 1 round. Success: half damage."}
      - {name: Mind Shield, level: 8, action: Passive, description: "Resistance to psychic damage. Advantage on saves vs charm, fright, thought reading. Extends to allies within 10 ft."}
      - {name: Psychic Dominion, level: 10, action: "1 Action", description: "1/Long Rest. 1 minute. Move up to 500 lbs with TK. Read surface thoughts within 60 ft. 1/round: Will DC 18 or dominated until end of their turn."}
specializations: [Battlemage, Shaman, Psion]
starting_equipment:
  - Martial melee weapon
  - Medium armor
  - "Shield (+2 DV, optional)"
  - "Channeler's focus and ritual kit"
---
# Channeler

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
| **Starting AP** | 15 |

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

**Additional Cantrips:** You can learn more cantrips by spending **10 AP per cantrip** (same as Medics—cheaper than non-casters).

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

**Tier 1 Abilities (5 AP each):**
- **Divine Strike:** Once per turn, when you hit with a weapon attack, add +1d8 radiant or necrotic damage (your choice). This stacks with Channel Energy if used on the same turn.
- **Blessed Weapon:** As a free action, bless your weapon for 1 minute. It counts as magical for overcoming resistance and sheds dim light in a 10-foot radius.
- **Smite:** When you hit with a melee weapon attack, you can expend a spell slot to deal bonus damage = 1d8 per spell level (1st-level = 1d8, 2nd = 2d8, 3rd = 3d8). Undead and fiends take an extra +1d8.

**Tier 2 Abilities (10 AP each, requires one Tier 1):**
- **Improved Divine Strike:** Your Divine Strike increases to +2d8 (replaces the Tier 1 version).
- **Warpriest:** When you cast a spell, you can make one weapon attack as 1 action (bonus) (part of the same turn in 3-action economy—essentially reduces the attack cost).
- **Channeled Smite:** When you use Smite, you can also trigger Channel Energy (harm) on the same target—combine them into one devastating strike (uses both a spell slot and a Channel Energy use).

**Tier 3 Abilities (15 AP each, requires Level 5+ and one Tier 2):**
- **Avatar of War:** 1/long rest, for 1 minute, your weapon attacks deal an extra +2d8 radiant or necrotic damage (your choice at activation), and you have resistance to all damage. You become a conduit of pure destructive power.
- **Overwhelming Smite:** When you use Smite and the attack hits, the target must make a DC 15 Fortitude save or be knocked prone and stunned until the end of their next turn (the force of your blessed strike overwhelms them).

### Spirit Bond (Divination & Nature Magic)

Commune with spirits, draw on nature magic, and divine the future.

**Tier 1 Abilities (5 AP each):**
- **Speak with Spirits:** You can cast *Speak with Dead* once per long rest without expending a spell slot (10-minute ritual, ask 3 questions of a corpse).
- **Natural Healing:** When you use Channel Energy to heal, the target also gains +5 feet of movement and advantage on their next Athletics or Acrobatics check (you channel vitality into them).
- **Omen Reading:** Once per long rest, meditate for 10 minutes to receive a vague omen about the future (GM provides a cryptic hint about upcoming danger or opportunity).

**Tier 2 Abilities (10 AP each, requires one Tier 1):**
- **Spirit Guide:** You have a spiritual companion (invisible to others but you can sense it). Once per short rest, ask your spirit guide one yes/no question about your immediate surroundings—the GM answers truthfully. Useful for detecting ambushes or traps.
- **Nature's Blessing:** You can cast *Speak with Animals* at will (no spell slot required). Animals are generally friendly toward you unless provoked.
- **Commune:** Once per long rest, perform a 1-hour ritual to commune with higher powers (spirits, the Waste itself, ancestors, etc.). Ask up to 3 questions that can be answered with yes, no, or unclear. The GM answers based on available cosmic knowledge.

**Tier 3 Abilities (15 AP each, requires Level 5+ and one Tier 2):**
- **Spirit Walk:** 1/long rest, enter a trance for 1 minute. Your spirit leaves your body and can travel up to 1 mile. You're invisible and can pass through solid objects. If your body is harmed, you're immediately yanked back. Excellent for scouting or espionage.
- **Voice of the Wasteland:** You can speak with the land itself. Once per session, touch the ground and ask what has happened here in the past week. The GM describes major events (battles, deaths, rituals, etc.) that occurred in this location.

### Resilience (Endurance & Protection)

Bolster your own defenses, resist damage, and become an immovable bastion.

**Tier 1 Abilities (5 AP each):**
- **Unyielding:** When you're reduced to 0 HP, you can choose to drop to 1 HP instead (1/long rest). Your willpower refuses to let you fall.
- **Stone Skin:** 1/short rest, gain resistance to bludgeoning, piercing, and slashing damage from non-magical sources for 10 minutes (your skin hardens).
- **Enduring Channel:** When you use Channel Energy on yourself (healing), you also gain temporary HP = your WIS modifier (the energy lingers as a protective barrier).

**Tier 2 Abilities (10 AP each, requires one Tier 1):**
- **Iron Will:** You have advantage on saves against being frightened or charmed. You can't be magically put to sleep.
- **Damage Reduction:** You have permanent damage reduction = your proficiency bonus against all damage types (at Level 5, reduce all damage by 3). This stacks with resistance.
- **Shield of Faith:** You can cast *Shield of Faith* on yourself at will (no spell slot required, 10-minute duration, +2 DV).

**Tier 3 Abilities (15 AP each, requires Level 5+ and one Tier 2):**
- **Unstoppable:** You're immune to being knocked prone, grappled, or restrained by creatures of your size or smaller. You have advantage on saves against effects that would move you against your will.
- **Martyr's Blessing:** 1/long rest, when an ally within 30 ft is hit by an attack, you can use your reaction to teleport adjacent to them and take the hit instead (you intercept the blow). You have resistance to the damage from that attack.

## Sample AP Expenditures

Here's how a typical Channeler might spend AP from Level 1-5:

**Level 1 (15 AP total):**
- Divine Strike (Battle Channeling Tier 1): 5 AP
- *Remaining: 10 AP*

**Level 2 (25 AP total):**
- Blessed Weapon (Battle Channeling Tier 1): 5 AP
- Unyielding (Resilience Tier 1): 5 AP
- *Remaining: 10 AP*

**Level 3 (35 AP total):**
- Smite (Battle Channeling Tier 1): 5 AP
- Stone Skin (Resilience Tier 1): 5 AP
- Speak with Spirits (Spirit Bond Tier 1): 5 AP
- *Remaining: 5 AP*

**Level 4 (45 AP total):**
- Warpriest (Battle Channeling Tier 2): 10 AP
- *Remaining: 5 AP*

**Level 5 (55 AP total):**
- Avatar of War (Battle Channeling Tier 3): 15 AP
- *Remaining: 0 AP*

---

## Advanced Specializations (Levels 6-10)

At level 6, the Channeler selects one of three Advanced Specializations. These specializations unlock new skill tree branches, powerful abilities, and define the Channeler's role in the wasteland's ongoing struggle.

### Battlemage (Combat Casting)

**Flavor:** Spell and steel in perfect harmony. Battlemages don't stand in the back — they charge into melee range where arcane energy and blade become one devastating force.

**Prerequisites:** Channeler archetype, level 6

**Level 6 Features:**
- **War Magic:** When you use an action to cast a cantrip, you can make one weapon attack as part of the same action. This allows you to weave spellcasting and swordplay together seamlessly. Since cantrips add your WIS modifier to damage and can be powered with spell slots (see [Cantrip Damage Scaling](../magic.md#cantrip-damage-scaling)), War Magic turns each action into a potent combination of spell and steel.
- **Arcane Armor:** You can wear heavy armor without losing access to your Channeler spellcasting. Additionally, you can use any weapon you're holding as a spellcasting focus for your Channeler spells.

**Level 8 Features:**
- **Improved Smite:** When you hit a creature with a melee weapon attack, you can expend a prepared spell slot to deal additional radiant or necrotic damage (your choice): 1st-level slot = 2d6, 2nd-level = 4d6, 3rd-level = 5d6 (capped). *(Replaces Battle Channeling Tier 1 Smite if you have it.)*
- **Channeled Strikes:** Your weapon attacks count as magical for the purpose of overcoming resistance and immunity to nonmagical damage. Additionally, your melee weapon attacks deal an extra 1d4 force damage.

**Level 10 Capstone:**
- **Eldritch Tempest:** Once per long rest, for 1 minute, you become a storm of magic and steel. Whenever you hit with a melee attack, the target and all enemies within 10 ft of them take 2d6 force damage. Whenever you cast a spell during this state, you can make one melee weapon attack as a free action. You gain +2 DV from crackling arcane energy.

**New Skill Tree:** Spellsword (weapon enchantment, spell-attack combos, arcane martial techniques, advanced smite effects)

---

### Shaman (Spirits/Nature)

**Flavor:** The wasteland is alive — scarred, angry, but alive. Shamans listen to its spirits and channel its primal will. They commune with forces older than civilization, drawing power from the wounded earth itself.

**Prerequisites:** Channeler archetype, level 6

**Level 6 Features:**
- **Spirit Companion:** You gain a spirit companion — an incorporeal entity visible only to you and creatures with magical sight. It can scout up to 120 ft away, translate dead languages, and warns you of danger (granting +2 to your Perception checks). As an action, you can see and hear through your spirit companion's senses.
- **Nature's Wrath:** You can cast spells that deal nature-affiliated damage types: acid, cold, lightning, poison, and thunder. When you deal damage with these types, you deal +1 damage per damage die rolled.

**Level 8 Features:**
- **Totem Bond:** Choose a totem animal that represents your spiritual path. **Wolf:** Allies within 30 ft of you gain advantage on opportunity attacks. **Bear:** You gain +2 HP per character level (applied retroactively). **Eagle:** You gain +10 ft movement speed and advantage on Perception checks. **Serpent:** The save DC of your poison effects increases by 2.
- **Spirit Walk:** Once per short rest, as 1 action, you become ethereal for 1 round. You can move through solid objects and creatures (they are not difficult terrain for this movement), you are immune to all damage, but you cannot attack, cast spells, or interact with physical objects. Excellent for scouting dangerous areas or escaping.

**Level 10 Capstone:**
- **Summon Greater Spirit:** Once per long rest, you can spend 1 action to summon a greater nature spirit in an unoccupied space within 30 ft. The spirit has 50 HP, 15 DV, and makes 2 attacks per round with +7 to hit for 2d8+4 damage (damage type matches your totem: slashing for Wolf, bludgeoning for Bear, slashing for Eagle, piercing and poison for Serpent). It obeys your mental commands and lasts 1 minute or until destroyed. It is incorporeal and immune to nonmagical physical damage.

**New Skill Tree:** Spirit Magic (spirit communication, nature manipulation, totem abilities, planar insight, primal channeling)

---

### Psion (Mental Powers/Telekinesis)

**Flavor:** Magic of the mind, not the elements. Psions wield telekinesis, telepathy, and psychic force without incantations or gestures. Thought becomes reality. Will becomes weapon.

**Prerequisites:** Channeler archetype, level 6

**Level 6 Features:**
- **Telekinesis:** As 1 action, you can move an object or creature weighing up to 100 lbs up to 30 ft in any direction. If targeting a hostile creature, make a **contested check: your 1d20 + WIS modifier vs. their 1d20 + MIG modifier** (see Contested Checks in Combat rules). You can use this ability to make improvised ranged attacks with objects within range, dealing 2d6 + WIS modifier force damage on hit. This ability is usable at will.
- **Telepathy:** You can communicate mentally with any creature within 60 ft that shares at least one language with you. You can broadcast your thoughts to multiple creatures simultaneously, and they can respond mentally if they wish.

**Level 8 Features:**
- **Psychic Blast:** As 1 action, you unleash a 30 ft cone of mental force. All creatures in the area must make a Will save (DC = 8 + WIS + proficiency) or take 4d6 psychic damage and become Dazed for 1 round (see Conditions). On a successful save, they take half damage and are not dazed. Usable once per short rest.
- **Mind Shield:** You gain resistance to psychic damage and advantage on saves against being charmed, frightened, or having your thoughts read. This protection extends to all allies within 10 ft of you.

**Level 10 Capstone:**
- **Psychic Dominion:** Once per long rest, for 1 minute, you achieve perfect mental clarity and overwhelming psychic power. Your Telekinesis can move objects or creatures weighing up to 500 lbs. You can read the surface thoughts of all creatures within 60 ft (no save) as a passive effect. Once per round as a free action, you can force one creature within 60 ft to make a Will save (DC 18) or be dominated (you control their actions) until the end of their next turn.

**New Skill Tree:** Psionics (advanced telekinesis, telepathic networks, psychic combat, mental domination, astral projection)

![An insectoid channeler communes with otherworldly forces, chitin glowing with spiritual energy](/images/illustrations/insectoid-channeler.png)

---

## Level 16: Spiritual Apotheosis (Archetype Ultimate)

You become a living nexus of spiritual power. Your Channel Energy ability heals or damages 4d8 (instead of 3d8, gaining the Level 17 scaling one level early). You can use Channel Energy and cast a spell in the same turn without triggering Overflow. Your spell slots recover partially on a short rest (half your total slots per level, rounded down—minimum 1 per level).

## Level 17: Specialization Final Evolution

### Battlemage — Divine Judgment

Your radiant damage ignores resistance and treats immunity as resistance. When you deal radiant damage, you can choose to also blind the target (Fortitude save negates). You gain immunity to necrotic damage and radiant damage. Your Channel Energy automatically dispels darkness effects within its radius.

### Shaman — Primal Rebirth

You gain immunity to poison and disease. You can speak with plants and animals at will. Once per short rest, you can summon a primal beast (use direwolf, brown bear, or giant eagle stats) that obeys your commands for 10 minutes. Your Channel Energy can restore plant life, purify water, and cleanse corruption from natural environments.

### Psion — Psychic Singularity

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
