---
game_data: true
cantrips:
  - {name: Pyros, type: Base, effect: "1d6 fire damage; ignite flammable objects", range: "Touch/30 ft", scaling: "Damage scales with spell slot investment (see Cantrip Damage Scaling)"}
  - {name: Cryo, type: Base, effect: "1d6 cold damage; freeze water and chill objects", range: "Touch/30 ft", scaling: "Damage scales with spell slot investment (see Cantrip Damage Scaling)"}
  - {name: Volta, type: Base, effect: "1d6 electric damage; power small devices", range: Touch, scaling: "Damage scales with spell slot investment (see Cantrip Damage Scaling)"}
  - {name: Vitae, type: Base, effect: "Stabilize dying creatures; detect life; radiant vs undead", range: Touch}
  - {name: Mortis, type: Base, effect: "1d6 necrotic damage; decay and spoil food", range: "Touch/30 ft", scaling: "Damage scales with spell slot investment (see Cantrip Damage Scaling)"}
  - {name: Kinesis, type: Base, effect: "Move objects up to 5 lbs; push/pull telekinesis", range: "30 ft"}
  - {name: Mentis, type: Base, effect: "Send simple emotions or one-word concepts", range: "60 ft"}
  - {name: Materia, type: Base, effect: "Alter small object appearance or texture", range: Touch}
  - {name: Spark, type: Attack, effect: "1d10 energy damage; ranged spell attack", range: "60 ft", scaling: "Damage scales with spell slot investment (see Cantrip Damage Scaling)"}
  - {name: Mend, type: Utility, effect: "Repair small object damage; 1d4 HP to constructs", range: Touch}
  - {name: Sense Magic, type: Detection, effect: "Sense magic within 30 ft for 1 minute", range: Self}
  - {name: Prestidigitation, type: Versatile, effect: "Minor sensory effects; light; clean; illusions", range: "10 ft"}
  - {name: Ward, type: Defensive, effect: "Reaction: +3 DV against one attack", range: Self}
  - {name: Sonus, type: Base, effect: "1d6 sonic damage; shatter glass and fragile objects", range: "30 ft", scaling: "Damage scales with spell slot investment (see Cantrip Damage Scaling)"}
---
# Magic

![An arcane cataclysm erupts as magical forces tear through the fabric of reality](/images/illustrations/arcane-cataclysm.png)

## The Emergence of Magic

Magic is **new to the galaxy**. Before the apocalypse, it didn't exist — or if it did, technology suppressed or replaced it. The cascading catastrophes that destroyed civilization **cracked reality itself**, allowing strange energies to seep into the material plane.

**Timeline of Magic:**
- **Year 0 (Apocalypse):** Reality fractures during final catastrophic events
- **Years 1-20:** First inexplicable phenomena — objects moving without cause, impossible healing, spontaneous fires
- **Years 21-40:** First "magic users" emerge — mostly accidental, often deadly
- **Years 41-60:** Trial and error produces first consistent techniques (cantrips)
- **Years 61-Present:** Magic is still being systematized — no formal schools exist, each caster learns differently

**Cultural Impact:**
- Most settlements **fear magic** — it's unpredictable and dangerous
- Some worship it as divine power returned
- Tech-focused factions see it as a threat to rebuilding
- Magic users are valuable but often ostracized

There are no ancient grimoires. Spellcasters are pioneers, discovering effects through trial and error.

---

## Spell Slots and Rarity

**Spell Slots are RARE.**

In Ashfall, magic is scarce and costly:
- **Cantrips:** Repeatable minor effects, require Magical Talent trait
- **Leveled Spells:** Limited by spell slots, which regenerate slowly
- **Ritual Casting:** Bypass slots by investing significant time

### Spell Save DC and Attack Modifier

**Spell Save DC:** 8 + proficiency bonus + spellcasting attribute modifier (INT for Mystics, WIS for Channelers and Medics)

**Spell Attack Modifier:** Proficiency bonus + spellcasting attribute modifier

**Self-Targeting:** Touch-range spells and abilities can target yourself unless the text specifically states "another creature" or "an ally other than yourself."

### Save Names

Ashfall uses two naming conventions for saving throws interchangeably:

| Full Name | Attribute | Abbreviation |
|---|---|---|
| Fortitude | Endurance (END) | FORT |
| Reflex | Agility (AGI) | REF |
| Will | Wisdom (WIS) | WILL |

When a spell says 'Fortitude save,' it means an END-based save. When it says 'Reflex save,' it means an AGI-based save.

### Full Caster Spell Slots (Mystic)

**Maximum spell level: 7th** (not 9th). 8th-9th level spells are reserved for mythic tier.

| Level | Cantrips | 1st | 2nd | 3rd | 4th | 5th | 6th | 7th |
|-------|----------|-----|-----|-----|-----|-----|-----|-----|
| 1     | 3        | 2   | -   | -   | -   | -   | -   | -   |
| 2     | 3        | 3   | -   | -   | -   | -   | -   | -   |
| 3     | 3        | 3   | 2   | -   | -   | -   | -   | -   |
| 4     | 4        | 4   | 3   | -   | -   | -   | -   | -   |
| 5     | 4        | 4   | 3   | 2   | -   | -   | -   | -   |
| 6     | 4        | 4   | 3   | 3   | -   | -   | -   | -   |
| 7     | 4        | 4   | 3   | 3   | 1   | -   | -   | -   |
| 8     | 4        | 4   | 3   | 3   | 2   | -   | -   | -   |
| 9     | 5        | 4   | 3   | 3   | 2   | 1   | -   | -   |
| 10    | 5        | 4   | 3   | 3   | 3   | 2   | -   | -   |
| 11    | 5        | 4   | 3   | 3   | 3   | 2   | 1   | -   |
| 12    | 5        | 4   | 3   | 3   | 3   | 2   | 1   | -   |
| 13    | 5        | 4   | 3   | 3   | 3   | 2   | 1   | 1   |
| 14    | 5        | 4   | 3   | 3   | 3   | 2   | 1   | 1   |
| 15    | 5        | 4   | 3   | 3   | 3   | 2   | 1   | 1   |

**Notes:**
- Spell slots are very limited (gritty = scarce magic)
- Ritual casting is essential for utility spells
- Full casters start with 3 cantrips at level 1

### Half Caster Spell Slots (Channeler, Medic)

| Level | Cantrips | 1st | 2nd | 3rd | 4th | 5th |
|-------|----------|-----|-----|-----|-----|-----|
| 1     | 2        | 1   | -   | -   | -   | -   |
| 2     | 2        | 2   | -   | -   | -   | -   |
| 3     | 2        | 2   | 1   | -   | -   | -   |
| 4     | 2        | 3   | 2   | -   | -   | -   |
| 5     | 3        | 3   | 2   | 1   | -   | -   |
| 6     | 3        | 3   | 3   | 1   | -   | -   |
| 7     | 3        | 3   | 3   | 2   | -   | -   |
| 8     | 3        | 3   | 3   | 2   | 1   | -   |
| 9     | 3        | 3   | 3   | 2   | 1   | -   |
| 10    | 3        | 3   | 3   | 2   | 2   | 1   |

**Note:** Medics use the half-caster table but are restricted to healing and support spells only.

### Progression for Other Archetypes

- **Warrior:** No spell slots (unless multiclassing)
- **Technician:** No spell slots (tech abilities instead)
- **Gunslinger, Operative, Diplomat:** No spell slots (unless multiclassing)

### Regaining Spell Slots

- **Short Rest (8 hours):** Recover 1 spell slot of 3rd level or lower
- **Long Rest (1 week):** Recover all spell slots
- **Emergency Recovery:** Spend 1 hour meditating + make WIS check DC 15 to regain 1d3 levels of slots (once per day)

---

## Spell Slots and Humanity

Augmentations interfere with magical capacity. Each point of Humanity spent on augmentations removes your **highest available spell slot level**, working down from the top.

### How It Works

1. Start with your normal spell slot table for your class and level.
2. For each point of Humanity you've spent on augmentations, remove all slots of your highest remaining spell level.
3. If all leveled spell slots are removed and you still have Humanity spent, you lose cantrips too.

| Humanity Spent | Effect |
|----------------|--------|
| 0 | Full spell capacity |
| 1 | Lose highest spell level |
| 2 | Lose top 2 spell levels |
| 3 | Lose top 3 spell levels |
| 4 | Lose top 4 spell levels |
| 5 | Lose top 5 spell levels |
| 6+ | Lose top 6+ levels (most casters have only cantrips or nothing left) |
| All (Humanity 0) | No spellcasting at all — cantrips included |

**Example:** Level 10 Mystic with Humanity 7 (3 augments installed, 3 Humanity spent):
- Normal slots: 4 / 3 / 3 / 2 / 1 (1st through 5th level)
- After 3 Humanity spent: lose 5th, 4th, and 3rd level slots
- Remaining: 4 / 3 / 0 / 0 / 0 (1st and 2nd level only) + cantrips

**Example:** Level 5 Channeler with Humanity 8 (2 Humanity spent on Tier 1 augments):
- Normal slots: 3 / 2 (1st and 2nd level)
- After 2 Humanity spent: lose 2nd and 1st level slots
- Remaining: cantrips only

**Design Intent:** This system creates a clean trade-off between technology and magic. Each augmentation doesn't weaken all your spells — it removes your most powerful ones entirely. A caster with a couple of augments can still sling low-level spells reliably; they just can't reach the high-end anymore. This is simpler to track than percentage reductions and creates more dramatic decision points.

---

## Spell Crafting System (Modular Magic)

Spells are built from three components:
1. **Base Cantrip** (the fundamental energy/concept)
2. **Delivery Shape** (how it manifests)
3. **Effect Modifiers** (what it does)

**Formula:**
```
Base Cantrip + Delivery Shape + Effect Modifiers = Final Spell Level
```

**Spell level determines:**
- Spell slot required to cast
- Crafting time (1 hour per spell level)
- Crafting cost (100 credits x spell level squared)
- Burnout risk if overcasting

### Creating New Spells

**Requirements:**
- **Minimum Level:** Must be able to cast spells of desired level
- **Time:** 1 week of research per spell level
- **Cost:** 1,000 credits x (spell level squared)
- **Skill Check:** Arcana check DC = 15 + spell level

**Process:**
1. **Design:** Work with DM to define spell effect, referencing similar existing spells
2. **Research:** Spend time and gold experimenting
3. **Check:** Roll Arcana check
   - **Success:** Spell is learned, added to your repertoire
   - **Failure by less than 5:** Spell not learned, but 50% of time/cost can be reclaimed for retry
   - **Failure by 5+:** Spell creation fails, Twilight Event occurs (see Burnout)

**Design Guidelines (for DMs):**
Compare new spell to existing spells of same level:
- **Damage:** Should match or be slightly lower than existing damage spells
- **Duration:** Longer duration = reduce potency
- **Range:** Increased range = reduce damage/effect
- **Area:** Larger area = reduce damage per target
- **Utility:** Compare to similar utility effects

---

## Base Cantrips

These are the fundamental forces magic users learn to manipulate. All are unlimited use, 0-level.

### Pyros (Fire)
- **Effect:** Ignite flammable objects, light torches
- **Damage Type:** Fire
- **Range:** Touch or 30 feet (minor flame)
- **Utility:** Start fires, light sources

### Cryo (Cold)
- **Effect:** Freeze small amounts of water, chill objects
- **Damage Type:** Cold
- **Range:** Touch or 30 feet
- **Utility:** Preserve food, cool drinks, create ice

### Volta (Electric)
- **Effect:** Minor shock, power small devices temporarily
- **Damage Type:** Electric
- **Range:** Touch
- **Utility:** Jump-start electronics, minor shock

### Vitae (Life)
- **Effect:** Stabilize dying creatures (auto-success on DC 10 Medicine)
- **Damage Type:** Radiant (vs undead)
- **Range:** Touch
- **Utility:** Emergency stabilization, detect life

### Mortis (Death)
- **Effect:** Cause minor necrotic decay, spoil food
- **Damage Type:** Necrotic
- **Range:** Touch or 30 feet
- **Utility:** Intimidation, corpse preservation

### Kinesis (Force)
- **Effect:** Move objects up to 5 lbs, push/pull
- **Damage Type:** Force
- **Range:** 30 feet
- **Utility:** Retrieve items, open doors, minor telekinesis

### Mentis (Mind)
- **Effect:** Send simple emotions or one-word concepts
- **Damage Type:** Psychic
- **Range:** 60 feet
- **Utility:** Silent communication, sense emotions

### Materia (Matter)
- **Effect:** Temporarily alter small object's appearance or texture
- **Damage Type:** None
- **Range:** Touch
- **Utility:** Disguise objects, minor transmutation

### Cantrip Damage Scaling

Cantrip damage scales with **spell slot investment**. When you cast a damage-dealing cantrip, you can choose to power it with a spell slot to increase its damage dice.

| Casting Method | Damage Dice | Example (Pyros) |
|---|---|---|
| At-will (no slot) | 1d6 + INT mod | 1d6+3 (avg 6.5) |
| 1st-level slot | 2d6 + INT mod | 2d6+3 (avg 10) |
| 2nd-level slot | 3d6 + INT mod | 3d6+3 (avg 13.5) |
| 3rd-level slot | 4d6 + INT mod | 4d6+3 (avg 17) |
| 4th-level slot | 5d6 + INT mod | 5d6+3 (avg 20.5) |
| 5th-level slot | 6d6 + INT mod | 6d6+3 (avg 24) |

**At-will cantrips** always add your **spellcasting ability modifier** to damage (Intelligence for Mystics, Wisdom for Channelers and Medics). This represents your growing mastery of the fundamental forces.

**Slot-powered cantrips** add one additional d6 per slot level invested. The slot is consumed when the cantrip is cast. This creates meaningful round-by-round decisions: spend a slot to hit harder now, or save it for a more powerful spell later.

**AOE cantrips** (such as Pyros in cone or burst shape) deal the scaled damage to **each target** in the area, making high-slot AOE cantrips devastating against groups — but burning through your limited spell slots quickly.

### Legacy Cantrip Scaling

In addition to slot-based scaling, damage cantrips gain additional base damage dice at higher levels: +1d6 at levels 5, 11, and 17. This stacks with slot investment. For example, a level 5 Mystic casting Pyros at-will deals 2d6 + INT mod; the same Mystic powering Pyros with a 2nd-level slot deals 4d6 + INT mod.

Utility cantrips: Range/effect increases at DM discretion

**Healing cantrips** (such as Minor Heal) do **not** benefit from slot-scaling. Healing output is governed by dedicated healing spells (Healing Touch, Bind Wounds, etc.) and class features (Field Medic, Channel Energy). Cantrip scaling applies only to damage-dealing cantrips.

### Cantrip Acquisition

- **Full Caster (Mystic):** Start with 3, gain additional cantrips per the full caster spell slot table (see above)
- **Half Caster (Channeler, Medic):** Start with 2, gain additional cantrips per the half-caster spell slot table (see above)
- **Other Archetypes:** Can spend AP to learn cantrips (15 AP for non-casters, 12 AP for Diplomats, 10 AP for half-casters; see character creation for details)
- **Synthetics:** Cannot learn or use magic in any form. Synthetics have Humanity 0 and lack the organic quality that channels arcane energy. No cantrips, no spells, no ritual casting, no magical item attunement. See [Character Creation](character-creation.md) for details.

---

## Additional Cantrips

The following cantrips represent common learned techniques beyond the eight base forces.

**Spark** (Attack Cantrip)
- *Casting Time:* 1 action
- *Range:* 60 feet
- *Effect:* Hurl bolt of raw energy. Make ranged spell attack vs target's DV. On hit: 1d10 + spellcasting modifier energy damage. Energy damage is untyped — it bypasses fire, cold, electric, and other elemental resistances.
- *Scaling:* +1d10 at levels 5, 11, 17. Can be powered with a spell slot for +1d10 per slot level.

**Mend** (Utility Cantrip)
- *Casting Time:* 1 action
- *Range:* Touch
- *Effect:* Repair small tears, breaks, or damage to object (up to 1 square foot). Can restore 1d4 HP to constructs/synthetics.

**Sense Magic** (Detection Cantrip)
- *Casting Time:* 1 action
- *Range:* Self
- *Effect:* For 1 minute, sense presence of magic within 30 feet (but not specific location or type). Can concentrate to narrow focus.

**Prestidigitation** (Versatile Cantrip)
- *Casting Time:* 1 action
- *Range:* 10 feet
- *Effect:* Create minor sensory effects: light a candle, chill/warm small object, clean item, create harmless illusions (hand-sized), etc. DM discretion on applications.

**Ward** (Defensive Cantrip)
- *Casting Time:* Reaction (when hit)
- *Range:* Self
- *Effect:* Add +3 to your DV against one attack. Can declare use after seeing attack roll. This cantrip is distinct from the 1st-level spell Arcane Shield (+5 DV).

**Sonus** (Base Cantrip)
- *Casting Time:* 1 action
- *Range:* 30 feet
- *Effect:* Release a pulse of concentrated sound. Target makes a Fortitude save vs your spell DC. On failure: 1d6 + spellcasting modifier sonic damage and is deafened until end of their next turn. On success: half damage, no deafening.
- *Scaling:* +1d6 at levels 5, 11, 17. Can be slot-powered per Cantrip Damage Scaling.
- *Utility:* Can shatter glass, crystal, and fragile objects within range.

---

## The Sigil System — Modular Spell Crafting

> *Magic in Ashfall is not memorized from dusty tomes. It is built — piece by piece, sigil by sigil — from the raw forces that bleed through the Veil.*

Every spell is assembled from **four categories of components.** Understanding the difference between them is fundamental to how magic works in Ashfall.

### The Four Component Types

**Cantrip (The Force)**
The raw magical energy you channel. Pyros is fire. Cryo is ice. Mentis is thought. A cantrip is not a spell — it is the *fuel*. By itself, a cantrip is just potential. You can hold fire in your hand, feel lightning crackle between your fingers, sense a mind nearby — but without a Form, it goes nowhere. Every caster learns cantrips first. They are Level 0 and cost nothing.

**Form (The Shape)**
How the force is delivered to the world. A Form takes raw cantrip energy and gives it direction: a Touch channels it through your palm, a Ray projects it as a beam, a Burst detonates it at a distance. The Form determines range, area, and who gets hit. A cantrip + a Form is a castable spell. Touch, Self, and Ray forms cost +0, making them at-will when paired with just a cantrip.

**Metamagic (The Tuning)**
Modifications that alter how the spell behaves. Metamagic makes it bigger (Widen), longer-lasting (Sustain), more selective (Selective), or just rawer (Amplify). Each metamagic modifier adds to the total spell level. You can stack multiple modifiers, but the total cannot exceed 7th level. Metamagic is optional — a cantrip + Form works without it.

**Spell Fragment (The Blueprint)**
A spell fragment is an **incomplete spell** — a recorded combination of Form + Metamagic components without a cantrip base. Fragments are knowledge, not stored energy. They cannot be cast. They are blueprints — instructions for how to shape a force that the reader must supply themselves.

Fragments exist in two contexts:

- **Discovered fragments.** Found carved into ruins, scrawled in dead casters' journals, or encoded in pre-Fall data cores. A fragment discovered in a ruin might be "Burst + Amplify + Selective" — the template behind Fireball. Any caster who studies it can complete it by adding their cantrip of choice. Pyros makes it a Fireball. Cryo makes it a Freezing Burst. Mentis makes it a Psychic Bomb. The same fragment produces entirely different spells depending on who completes it.

- **Traded fragments.** Fragments can be written down, taught to other casters, or sold. A fragment is worth roughly **50 credits per total spell level** it contributes (e.g., a Burst + Amplify fragment is worth ~150 credits as a 3-level blueprint). The Ashen Veil actively trades in fragments. The Convergence of the Lit Path considers them heretical schematics.

> *A spell is a sentence. The cantrip is the verb. The form is the noun. The metamagic is the adjective. A fragment is a sentence with a blank where the verb should be — anyone can fill it in, and the meaning changes completely.*

### Storing Spells

A completed spell — cantrip + form + metamagic, fully assembled — can be stored for later use in two ways. Both methods require the caster to cast the full spell into the storage medium, expending a spell slot as normal.

**Scrolls (Arcane Storage)**
The oldest method. A caster inscribes a completed spell onto parchment, hide, or any suitable surface using arcane ink and sigil-work. Creating a scroll requires **Arcana proficiency**, materials worth **25 credits per spell level**, and **1 hour per spell level** of uninterrupted work. The spell slot is consumed during inscription.

Anyone with Arcana proficiency can activate a scroll by reading it aloud (1 action). The scroll is consumed on use. A character without Arcana proficiency can attempt to read a scroll with a DC 10 + (spell level x 2) Arcana check — on failure, the scroll is consumed with no effect. On critical failure (miss by 10+), the spell activates with a random target.

Scrolls are fragile — they can be destroyed by fire, water, or rough handling. But they require no technology, no power source, and no special equipment. Many wasteland casters prefer them for their simplicity.

**Arcane Capacitors (Tech Storage)**
The post-Fall innovation. A caster burns a spell slot to charge a technological device — a crystal-lattice circuit, a rune-etched battery, a resonance chamber — that stores the arcane energy in stable form. **Anyone** can activate a capacitor, including non-casters and Synthetics. The technology does the casting, not the user.

Capacitors require both **Technology** and **Arcana** proficiency to craft (one skill to build the hardware, one to charge the magic). For full capacitor crafting rules, types, and costs, see the [Crafting](crafting.md) chapter under **Arcane Capacitors**.

| Method | Who Can Create | Who Can Use | Cost | Durability | Reusable? |
|--------|---------------|-------------|------|------------|-----------|
| **Scroll** | Any caster with Arcana | Anyone with Arcana (DC check without) | 25 cr/level + spell slot | Fragile (paper) | No (consumed) |
| **Capacitor** | Requires Technology + Arcana | Anyone (including Synthetics) | See Crafting chapter | Durable (tech device) | Some types (Spell Battery, Power Cell) |

### Building a Spell

```
Base Cantrip (Level 0) + Form (+0 to +3) + Metamagic Modifiers (+1 to +4 each) = Total Spell Level
```

**Sum all the costs. The total is the spell slot level you must expend to cast it.** If the total is 0, it's an at-will cantrip.

### Base Cantrips (Level 0)

These define the damage type and die. They cost nothing — they are the raw force you are shaping.

| Cantrip | Force | Damage Type | Die | Notes |
|---------|-------|-------------|-----|-------|
| **Pyros** | Fire | Fire | d6 | Ignites flammables; bright light |
| **Cryo** | Ice | Cold | d6 | Freezes liquids; extinguishes flame |
| **Volta** | Lightning | Electric | d6 | Conducts through metal and water |
| **Mortis** | Death | Necrotic | d6 | Withers living matter; disturbs undead |
| **Sonus** | Sound | Sonic | d6 | Shatters brittle objects; deafening |
| **Kinesis** | Force | Force | d8 | Invisible pressure; bypasses elemental resistance |
| **Mentis** | Mind | Psychic | d8 | Targets cognition; no physical trace |
| **Materia** | Matter | — | — | Shapes, transmutes, moves material (see Non-Damage Effects) |
| **Vitae** | Life | Radiant / Healing | d6 | Heals allies or sears undead |

### Dual Cantrip Fusion (+1 Level)

You can combine **two base cantrips** into a single spell. This costs **+1 spell level** (making the minimum a 1st-level spell). The spell deals both damage types simultaneously. Both cantrip effects apply — Pyros ignites AND Cryo freezes.

**Rules:**
- Use the **lower die** of the two cantrips (d6 if either cantrip uses d6)
- Split the damage dice evenly between the two types (round the extra die to whichever type the caster chooses)
- You choose **one form** that delivers both effects
- You must know both cantrips
- **Vitae + any damage cantrip** is special: the spell heals allies and damages enemies in the same area (requires Selective metamagic or targeted form)

**Examples:**

| Combination | Level | Effect |
|---|---|---|
| Pyros + Cryo + Touch | 1st | 2d6 (1d6 fire + 1d6 cold) + mod. Thermal shock — ignites and freezes. |
| Volta + Kinesis + Ray | 1st | 2d6 (1d6 electric + 1d6 force) + mod. Electrified force bolt — conducts and pushes. |
| Mentis + Mortis + Cone | 2nd | 4d6 (2d6 psychic + 2d6 necrotic) + mod. Mind rot in a cone. |
| Pyros + Volta + Burst + Amplify | 4th | 8d6 (4d6 fire + 4d6 electric) + mod. Plasma detonation. |
| Vitae + Mortis + Small Burst + Selective | 3rd | 6d6. Heals allies for 3d6+mod, damages enemies for 3d6+mod in the same area. |

**Triple fusion** (three cantrips) costs +2 levels. Four or more cantrips cannot be combined — the forces destabilize.

### Forms (Delivery Shapes)

| Form | Level Cost | Range | Area / Targets | Save Type |
|------|:----------:|-------|-----------------|-----------|
| **Touch** | +0 | Touch (5 ft) | 1 creature/object | Spell attack (melee) |
| **Self** | +0 | Self | Caster only | None |
| **Ray** | +0 | 60 ft | 1 creature/object | Spell attack (ranged) |
| **Cone** | +1 | Self (15-ft cone) | All in area | Reflex/Fortitude |
| **Line** | +1 | Self (30-ft line, 5 ft wide) | All in area | Reflex/Fortitude |
| **Small Burst** | +1 | 60 ft | 10-ft radius sphere | Reflex/Fortitude |
| **Burst** | +2 | 120 ft | 20-ft radius sphere | Reflex/Fortitude |
| **Aura** | +2 | Self (15-ft emanation) | All in area, sustained | Reflex/Fortitude |
| **Wall** | +3 | 120 ft | 60 x 10 x 1 ft plane | Reflex/Fortitude |

**At-will cantrips** are any combination totaling Level 0: a base cantrip + Touch, Self, or Ray, with no modifiers.

### Damage Scaling

The **total spell level** determines how many damage dice you roll. You do not buy dice separately — the investment IS the damage.

| Total Spell Level | d6 Cantrips | d8 Cantrips | Avg (d6, +3 mod) | Avg (d8, +3 mod) |
|:------------------:|:-----------:|:-----------:|:-----------------:|:-----------------:|
| 0 (at-will) | 1d6 + mod | 1d8 + mod | 7 | 8 |
| 1st | 2d6 + mod | 2d8 + mod | 10 | 12 |
| 2nd | 4d6 + mod | 3d8 + mod | 17 | 17 |
| 3rd | 6d6 + mod | 4d8 + mod | 24 | 21 |
| 4th | 8d6 + mod | 6d8 + mod | 31 | 31 |
| 5th | 10d6 + mod | 7d8 + mod | 38 | 35 |
| 6th | 12d6 + mod | 8d8 + mod | 45 | 40 |
| 7th | 14d6 + mod | 10d8 + mod | 52 | 49 |

**Upcasting:** If you spend a higher-level slot than the spell requires, use the **slot level** on the table. A 1st-level Ray spell cast with a 3rd-level slot deals 6d6+mod.

**Healing:** Vitae spells that heal use the same table, rolling dice as healing instead of damage.

### Metamagic Modifiers

Optional enhancements that increase the total spell level.

**Range & Targeting:**

| Modifier | Level Cost | Effect |
|----------|:----------:|--------|
| **Extend Range** | +1 | Double the form's range |
| **Widen** | +1 | Double the form's area dimensions |
| **Selective** | +1 | Choose which creatures in the area are affected |
| **Chain** | +1 | Single-target spell jumps to 1 additional target within 15 ft |

**Duration & Timing:**

| Modifier | Level Cost | Effect |
|----------|:----------:|--------|
| **Sustain** | +1 | Concentration, up to 1 minute. Damage/healing recurs each turn for Aura and Wall forms. |
| **Persist** | +2 | Lasts 10 minutes, no concentration. Area effects linger as hazardous terrain. |
| **Quicken** | +2 | Casting time reduced by 1 action |

**Condition Riders** (target suffers condition on failed save, lasts until end of their next turn):

| Modifier | Level Cost | Condition |
|----------|:----------:|-----------|
| **Stagger** | +1 | Prone |
| **Daze** | +1 | Deafened or Slowed (choose when building) |
| **Obscure** | +2 | Blinded |
| **Shock** | +3 | Stunned |
| **Bind** | +4 | Paralyzed |

**Special:**

| Modifier | Level Cost | Effect |
|----------|:----------:|--------|
| **Silent** | +1 | No verbal component |
| **Still** | +1 | No somatic component |
| **Amplify** | +1 | Pure power boost — raises the spell level by 1 for more damage dice, no other effect |

### Non-Damage Effects (Materia & Utility)

**Materia** does not deal damage. Its spell level determines the magnitude of the effect:

| Total Spell Level | Materia Effect Scale |
|:------------------:|----------------------|
| 0 (at-will) | Minor utility — move 1 lb, mend a crack, change a surface texture |
| 1st | Shape or move up to 50 lbs; minor transmutation (color, texture) |
| 2nd | Shape up to 500 lbs; resistance to one physical damage type (self buff) |
| 3rd | Transmute materials (wood to stone); move up to 2,000 lbs; create complex objects |
| 4th | Major transmutation; reshape terrain in a 20-ft area |
| 5th | Animate objects; reshape terrain in a 40-ft area; create temporary structures |
| 6th | Transmute creatures (polymorph effects); reshape terrain in a 100-ft area |
| 7th | Permanent transmutation; reshape terrain in a 500-ft area; create lasting structures |

### Worked Examples

**Flame Touch (At-Will):** Pyros (+0) + Touch (+0) = **Level 0.** Melee spell attack. 1d6 + mod fire damage. At-will.

**Frost Ray (At-Will):** Cryo (+0) + Ray (+0) = **Level 0.** Ranged spell attack, 60 ft. 1d6 + mod cold damage. At-will.

**Mind Spike (1st):** Mentis (+0) + Ray (+0) + Amplify (+1) = **1st level.** Ranged spell attack, 60 ft. 2d8 + mod psychic damage.

**Burning Hands (1st):** Pyros (+0) + Cone (+1) = **1st level.** 15-ft cone. Reflex save. 2d6 + mod fire damage.

**Healing Wave (2nd):** Vitae (+0) + Small Burst (+1) + Selective (+1) = **2nd level.** 60 ft range, 10-ft radius. Each chosen ally heals 4d6 + mod HP.

**Lightning Bolt (3rd):** Volta (+0) + Line (+1) + Widen (+1) + Amplify (+1) = **3rd level.** 60-ft line, 10 ft wide. Reflex save. 6d6 + mod electric damage.

**Fireball (3rd):** Pyros (+0) + Burst (+2) + Amplify (+1) = **3rd level.** 120 ft range, 20-ft radius. Reflex save. 6d6 + mod fire damage.

**Psychic Scream (5th):** Mentis (+0) + Burst (+2) + Shock (+3) = **5th level.** 120 ft, 20-ft radius. Will save. 7d8 + mod psychic damage + Stunned on fail.

**Force Cage (7th):** Kinesis (+0) + Wall (+3) + Persist (+2) + Selective (+1) + Amplify (+1) = **7th level.** 120 ft, force wall enclosure. 10 minutes, no concentration. 10d8 + mod force damage to creatures passing through. Allies pass freely.

### Quick-Reference: Spell Level Budget

| Spell Level | Typical Build | Output |
|:-----------:|---------------|--------|
| **0** | Cantrip + Touch/Self/Ray | 1 die + mod, at-will |
| **1st** | Cantrip + Cone or Line | 2 dice + mod, small AoE |
| **2nd** | Cantrip + Burst | 4 dice + mod, large AoE |
| **3rd** | Cantrip + Burst + Amplify | 6 dice + mod, Fireball tier |
| **4th** | Cantrip + Burst + Amplify x2 | 8 dice + mod |
| **5th** | Cantrip + Burst + condition rider | 10 dice + mod + condition |
| **6th-7th** | Cantrip + Wall/Burst + Persist + riders | 12-14 dice + mod + lasting effects |

### Legacy Spells vs. Crafted Spells

The Common Spells listed below are **legacy formulas** — famous spell configurations discovered by historic casters and recorded exactly as they were perfected. Some legacy spells are slightly more powerful than what the Sigil System produces at the same level (Fireball deals 8d6 as a legacy formula vs 6d6+mod as a crafted spell). This is intentional — legacy formulas are battle-tested optimizations. The Sigil System trades raw power for **customization**: you choose the exact effect, delivery, and element you need. When a legacy spell fits, use it. When you need something no legacy spell provides, craft your own.

---

## Common Spells

These are common pre-built spells available to all spellcasters. Players using the spell crafting system may design custom spells with GM approval, following the crafting rules in this chapter.

The spells below are **legacy formulas** — battle-tested techniques refined over decades by the wasteland's first magic users. They are deliberately more powerful than spells created through the modular crafting system. A crafted spell trades raw power for **customization**: you choose the exact effect, delivery, and element you need. A legacy spell gives you proven, optimized results. Both have their place. When a legacy spell fits your situation, use it. When you need something no legacy spell provides, craft your own.

### Cantrips (At-Will)

**Fire Bolt**
- *Casting Time:* 1 action
- *Range:* 60 ft
- *Effect:* Ranged spell attack. On hit: 1d10 + spellcasting modifier fire damage.
- *Scaling:* +1d10 at levels 5, 11, 17. Can be powered with a spell slot for +1d10 per slot level (see Cantrip Damage Scaling).

**Ray of Frost**
- *Casting Time:* 1 action
- *Range:* 60 ft
- *Effect:* Ranged spell attack. On hit: 1d8 + spellcasting modifier cold damage, target's speed reduced by 10 ft until start of your next turn.
- *Scaling:* +1d8 at levels 5, 11, 17. Can be powered with a spell slot for +1d8 per slot level (see Cantrip Damage Scaling).

**Shock**
- *Casting Time:* 1 action
- *Range:* Touch
- *Effect:* Melee spell attack. On hit: 1d8 + spellcasting modifier electric damage, target can't take reactions until start of their next turn.
- *Scaling:* +1d8 at levels 5, 11, 17. Can be powered with a spell slot for +1d8 per slot level (see Cantrip Damage Scaling).

**Mend**
- *Casting Time:* 1 minute
- *Range:* Touch
- *Effect:* Repair a single break or tear in an object (not magical damage).

**Guidance**
- *Casting Time:* 1 action
- *Range:* Touch
- *Duration:* Concentration, up to 1 minute
- *Effect:* Target gains +1d4 to next ability check within 1 minute.

**Light**
- *Casting Time:* 1 action
- *Range:* Touch
- *Duration:* 1 hour
- *Effect:* Touch an object; it sheds bright light 20 ft and dim light 20 ft beyond that.

**Minor Heal** *(Healing casters only)*
- *Casting Time:* 1 action
- *Range:* Touch
- *Effect:* Restore 1d4 HP.
- *Scaling:* +1d4 at levels 5, 11, 17.

**Telekinetic Shove**
- *Casting Time:* 1 action
- *Range:* 30 ft
- *Effect:* Force target to make Reflex save or be pushed 5 ft. No damage.

### 1st-Level Spells

**Healing Touch** *(Healing casters only)*
- *Casting Time:* 1 action
- *Range:* Touch
- *Effect:* Restore 1d8 + WIS modifier HP.

**Arcane Shield**
- *Casting Time:* 1 action (reaction trigger: being attacked)
- *Range:* Self
- *Effect:* +5 DV against the triggering attack. Lasts until start of your next turn.

**Burning Hands**
- *Casting Time:* 2 actions
- *Range:* 15-ft cone
- *Effect:* Each creature in area makes Reflex save. 3d6 fire damage (half on save).

**Thunderwave**
- *Casting Time:* 2 actions
- *Range:* 15-ft cube from self
- *Effect:* Each creature in area makes Fortitude save. 2d8 sonic damage and pushed 10 ft (half damage and not pushed on save).

**Fog Cloud**
- *Casting Time:* 1 action
- *Range:* 120 ft
- *Duration:* Concentration, up to 10 minutes
- *Effect:* 20-ft radius sphere; area is heavily obscured.

**Mage Armor**
- *Casting Time:* 1 action
- *Range:* Touch
- *Duration:* 8 hours (no concentration)
- *Effect:* Target's base DV becomes 13 + AGI modifier (no armor).

**Detect Magic**
- *Casting Time:* 1 action
- *Range:* Self
- *Duration:* Concentration, up to 10 minutes
- *Effect:* Sense magic within 30 ft.

### 2nd-Level Spells

**Bind Wounds** *(Healing casters only)*
- *Casting Time:* 1 action
- *Range:* Touch
- *Effect:* Restore 2d8 + WIS modifier HP.

**Scorching Ray**
- *Casting Time:* 2 actions
- *Range:* 120 ft
- *Effect:* Create 3 rays of fire. Each makes a ranged spell attack for 2d6 fire damage per ray. Can target same or different creatures.

**Shatter**
- *Casting Time:* 2 actions
- *Range:* 60 ft
- *Effect:* 10-ft radius sphere. 3d8 sonic damage, Fortitude save for half. Damages objects.

**Hold Person**
- *Casting Time:* 1 action
- *Range:* 60 ft
- *Duration:* Concentration, up to 1 minute
- *Effect:* Target humanoid must make Will save or be paralyzed. Target repeats save at end of each turn.

**Invisibility**
- *Casting Time:* 1 action
- *Range:* Touch
- *Duration:* Concentration, up to 1 hour
- *Effect:* Target becomes invisible. Ends if target attacks or casts a spell.

### 3rd-Level Spells

**Mass Healing Word** *(Healing casters only)*
- *Casting Time:* 1 action
- *Range:* 60 ft
- *Effect:* Up to 3 creatures regain 1d8 + WIS modifier HP.

**Fireball**
- *Casting Time:* 2 actions
- *Range:* 150 ft
- *Effect:* 20-ft radius sphere. 8d6 fire damage, Reflex save for half.

**Lightning Bolt**
- *Casting Time:* 2 actions
- *Range:* 100-ft line, 5 ft wide
- *Effect:* 8d6 electric damage, Reflex save for half.

**Counterspell**
- *Casting Time:* Reaction (trigger: creature within 60 ft casts a spell)
- *Range:* 60 ft
- *Effect:* Make a spellcasting check (DC 10 + spell level). Success: spell fails. Automatic for spells of 3rd level or lower.

**Dispel Magic**
- *Casting Time:* 1 action
- *Range:* 120 ft
- *Effect:* End one spell effect. Automatic for 3rd level or lower; spellcasting check (DC 10 + level) for higher.

### 4th-Level Spells

**Revitalize** *(Healing casters only)*
- *Casting Time:* 1 action
- *Range:* 60 ft
- *Effect:* One creature regains 4d8 + WIS modifier HP and is cured of one condition.

**Wall of Fire**
- *Casting Time:* 2 actions
- *Range:* 120 ft
- *Duration:* Concentration, up to 1 minute
- *Effect:* Create a wall of fire up to 60 ft long/20 ft high. Creatures within 10 ft of one side take 5d8 fire damage (Reflex half).

**Banishment**
- *Casting Time:* 1 action
- *Range:* 60 ft
- *Duration:* Concentration, up to 1 minute
- *Effect:* Will save or target is banished to a harmless demiplane.

**Fear**
- *Casting Time:* 1 action
- *Range:* 30-ft cone
- *Duration:* Concentration, up to 1 minute
- *Effect:* Each creature in the area makes a Will save or becomes Frightened of you. While Frightened, a creature must Dash away from you on its turn. A creature can repeat the save at the end of each of its turns, ending the effect on a success.

**Stoneskin**
- *Casting Time:* 2 actions
- *Range:* Touch
- *Duration:* Concentration, up to 1 hour
- *Effect:* Target gains resistance to bludgeoning, piercing, and slashing damage from non-magical weapons.

**Dimension Door**
- *Casting Time:* 1 action
- *Range:* 500 ft
- *Effect:* Teleport yourself to a spot you can see, describe, or state by direction and distance. You can bring one willing creature of your size or smaller within 5 feet.

**Blight**
- *Casting Time:* 1 action
- *Range:* 30 ft
- *Effect:* Necrotic energy drains moisture and vitality. Target makes a Fortitude save. On failure: 8d8 necrotic damage. On success: half damage. Plants and water elementals have disadvantage on the save.

### 5th-Level Spells

**Mass Healing** *(Healing casters only)*
- *Casting Time:* 1 action
- *Range:* 30 ft radius
- *Effect:* All allies regain 5d8 + WIS modifier HP.

**Cone of Cold**
- *Casting Time:* 2 actions
- *Range:* 60-ft cone
- *Effect:* 8d8 cold damage, Reflex save for half.

**Hold Monster**
- *Casting Time:* 1 action
- *Range:* 90 ft
- *Duration:* Concentration, up to 1 minute
- *Effect:* Target makes a Will save or is Paralyzed. The target repeats the save at the end of each turn, ending the effect on success. Unlike Hold Person, this works on any creature type.

**Telekinesis**
- *Casting Time:* 2 actions
- *Range:* 60 ft
- *Duration:* Concentration, up to 10 minutes
- *Effect:* Move a creature or object weighing up to 1,000 lbs. Creatures make a MIG save to resist. On failure, move them up to 30 ft in any direction (including vertically) and restrain them until the start of your next turn. Each round, you can use 1 action to continue moving the target.

**Greater Restoration**
- *Casting Time:* 1 action
- *Range:* Touch
- *Effect:* End one of the following on the target: 1 exhaustion level, Charmed, Petrified, a curse, an ability score reduction, a max HP reduction, or an augmentation-related complication. This spell can reverse Magical Burn HP loss.

**Wall of Force**
- *Casting Time:* 2 actions
- *Range:* 120 ft
- *Duration:* Concentration, up to 10 minutes
- *Effect:* Create an invisible wall of pure force, up to 30 ft long and 10 ft high. Nothing can physically pass through it — no attacks, objects, or creatures. The wall is immune to damage and cannot be dispelled except by Dispel Magic cast at 5th level or higher.

### 6th-Level Spells

**Chain Lightning**
- *Casting Time:* 2 actions
- *Range:* 150 ft
- *Effect:* A bolt of lightning arcs to a target, then jumps to up to 3 additional targets within 30 ft of the first. Each target makes a Reflex save. On failure: 10d8 electric damage. On success: half damage.

**Disintegrate**
- *Casting Time:* 2 actions
- *Range:* 60 ft
- *Effect:* Ranged spell attack. On hit: 10d6 + 40 force damage. If this reduces the target to 0 HP, the target is completely disintegrated — nothing remains. On miss: no damage (this is an all-or-nothing spell).

**Mass Suggestion**
- *Casting Time:* 1 action
- *Range:* 60 ft
- *Duration:* 24 hours
- *Effect:* Suggest a course of action to up to 12 creatures you can see. Targets make a Will save. On failure, they pursue the suggestion for the duration. The suggestion must sound reasonable. Clearly harmful suggestions end the effect.

**Heal**
- *Casting Time:* 1 action
- *Range:* 60 ft
- *Effect:* Target regains 70 HP and is cured of blindness, deafness, and all diseases. When cast at 7th level, healing increases to 90 HP.

### 7th-Level Spells

**Reverse Gravity**
- *Casting Time:* 2 actions
- *Range:* 100 ft
- *Duration:* Concentration, up to 1 minute
- *Effect:* Gravity reverses in a 50-ft radius, 100-ft high cylinder. Creatures that fail a Reflex save fall upward 100 ft, taking 10d6 falling damage when they hit the ceiling (or rise into open air). When the spell ends, affected creatures fall back down normally.

**Plane Shift**
- *Casting Time:* 1 action
- *Range:* Touch
- *Effect:* Transport yourself and up to 8 willing creatures to another plane of existence. Alternatively, make a melee spell attack against an unwilling creature — on a hit, the target makes a Will save or is banished to a random location on another plane.

**Power Word Stun**
- *Casting Time:* 1 action
- *Range:* 60 ft
- *Effect:* Choose a creature you can see. If it has 150 HP or fewer, it is Stunned. At the end of each of its turns, it can make a Will save to end the effect. No save on the initial cast — if you're under the HP threshold, you're stunned.

**Resurrection**
- *Casting Time:* 1 hour (ritual only)
- *Range:* Touch
- *Materials:* 5,000 credits worth of rare components + 10 Essence
- *Effect:* Return a creature that died within the last 10 days to life with 1 HP. The target returns with all conditions removed but gains 3 levels of Exhaustion that cannot be removed except by time (1 level per long rest). The soul must be willing and free. This spell cannot restore a creature that died of old age or was disintegrated.

---

## Concentration

You can concentrate on only one spell at a time. Casting another concentration spell ends the first.

**Concentration Check:** When you take damage while concentrating, make a Will save. DC = 10 or half the damage taken, whichever is higher. On failure, the spell ends.

**Sustain vs Concentration:** Some spells require you to Sustain them (costs 1 action per turn to maintain). Sustained spells are NOT the same as concentration — you can sustain a spell while concentrating on another, but sustaining costs an action each turn.

You lose concentration if you are incapacitated, killed, or voluntarily end it (free action).

---

## Ritual Casting

![A channeler stands in a ruined cathedral, arms raised as arcane sigils and spiraling energy erupt from glyphs carved into the broken stone floor](/images/illustrations/magic-channeling.png)

Cast any spell you know without expending a spell slot by investing time and materials. Ritual casting time: 10 minutes + 10 minutes per spell level.

### Ritual Requirements

- **Time:** 10 minutes + 10 minutes per spell level
- **Materials:** Components consumed (see Material Component Costs table below)
- **Skill Check:** WIS or INT + Proficiency vs DC 10 + (spell level x 2)
- **Location:** Relatively safe area (no active combat)

A ritual requires the caster's full attention and cannot be done while traveling or in combat. Material components are still consumed.

### Ritual Casting Process

1. Declare spell being cast as ritual
2. Spend required time and materials
3. Roll skill check at end of ritual
4. **Success:** Spell cast normally
5. **Failure (miss DC by less than 5):** Spell fails, materials wasted, no Burnout
6. **Critical Failure (miss DC by 5+):** Spell fails, materials wasted, gain 1 Burnout point

### Ritual Benefits

- No spell slot expended
- Can cast spells above available slots (risky!)
- Allows non-casters to attempt magic with instruction (DC +10, requires teacher)

### Ritual Limitations

- Cannot cast in combat
- Requires focus (any damage interrupts, must restart)
- Expensive and time-consuming
- Risk of Burnout on failure

### Material Component Costs

| Spell Level | Component Cost |
|-------------|-------------------------------|
| Cantrip     | None |
| 1st         | 5 credits worth of materials |
| 2nd         | 10 credits |
| 3rd         | 25 credits |
| 4th         | 50 credits |
| 5th         | 75 credits |
| 6th         | 100 credits |
| 7th         | 200 credits |

### Multi-Caster Rituals

Multiple magic users can collaborate on a ritual:
- **Lead Caster:** Determines spell effect, makes casting check if needed
- **Assistants:** Up to (spell level) assistants can help
- **Benefit:** Each assistant reduces casting time by 10 minutes (minimum 10 minutes total) OR adds +1 to casting check

### Example Ritual Spells

**Detect Thoughts** (2nd-level Ritual)
- *Time:* 30 minutes
- *Components:* Incense, quiet focus
- *Effect:* For next 10 minutes, sense surface thoughts of creatures within 30 feet. Can focus on one creature to probe deeper (Will save to resist).

**Identify Magic** (1st-level Ritual)
- *Time:* 20 minutes
- *Components:* Pearl dust (100 credits worth)
- *Effect:* Learn properties and activation of one magical item

**Sending** (3rd-level Ritual)
- *Time:* 40 minutes
- *Components:* Copper wire, personal item from recipient
- *Effect:* Send 25-word message to creature you know. They can reply with 25 words. Works across any distance on same plane.

---

## Burnout Mechanics

Pushing beyond your limits is dangerous. **Burnout Points (BP)** track magical exhaustion from overuse.

### What to Expect from Burnout

> **For Players:** Burnout is a safety valve, not a punishment. In normal play, you should rarely accumulate more than 1-2 BP. Overcasting is an emergency measure — think of it as pushing your body past its limits in a desperate moment. If you find yourself overcasting regularly, consider managing spell slots more carefully or relying on ritual casting for non-urgent spells.
>
> **For GMs:** A caster who reaches 3-5 BP is playing aggressively and should feel the consequences. A caster at 6+ BP has made several risky choices and is entering dangerous territory. Burnout 12+ should be a dramatic, campaign-defining moment — not something that happens every session. If players are hitting high Burnout frequently, they may need more opportunities for rest or access to more spell slots.

### Gaining Burnout

- **Overcasting:** Cast spell without available slot (gain BP = spell level)
- **Critical Ritual Failure:** Miss ritual DC by 5+ (gain 1 BP)
- **Twilight Event Consequence:** Some reality-warping failures cause BP

### Burnout Effects

| BP Total | Effects |
|----------|---------|
| 1-2      | Minor magical fatigue. Disadvantage on next spell attack or spell save DC reduced by 2 (choose when gained). |
| 3-5      | Moderate burnout. Disadvantage on all spell attacks and spell save DC reduced by 2. |
| 6-8      | Severe burnout. Above effects + cannot cast spells of 4th level or higher. |
| 9-11     | Critical burnout. Can only cast cantrips. Gain 1 level of Exhaustion. |
| 12+      | Magical collapse. Unconscious for 1d4 hours. Gain 2 levels of Exhaustion. All BP reset to 0 after waking. |

### Removing Burnout

- **Short Rest (8 hours):** Remove 1 Burnout point
- **Long Rest (7 days):** Remove all Burnout points
- **Greater Restoration (5th-level spell):** Remove 1d4 Burnout points
- **Wish/Miracle (9th-level):** Remove all Burnout points (if such spells exist at level 25+)

Burnout is tracked separately from Exhaustion; they can stack but are removed independently. A Medic cannot heal Burnout with class features; it requires rest.

### Permanent Burnout

If you ever reach **Burnout 20+**, make a Will save DC 20:
- **Success:** Reduce to Burnout 15, gain permanent -1 to spellcasting
- **Failure:** **Permanently lose the ability to cast magic**

### Overcasting Procedure

1. **Declare Overcast:** State you're casting without a spell slot
2. **Gain Burnout Points:** Gain Burnout equal to spell level
3. **Casting Check:** Roll d20 + your **spellcasting ability modifier** (Intelligence for Mystics, Wisdom for Channelers and Medics) vs DC (10 + spell level + current Burnout)
4. **Results:**
   - **Success:** Spell is cast normally
   - **Failure (by less than 5):** Spell is cast, but you gain 1 Exhaustion level
   - **Failure (by 5-9):** Spell fizzles, gain 2 Exhaustion levels
   - **Failure (by 10+):** Twilight Event occurs

### Twilight Events (Critical Overcasting Failures)

When you critically fail an overcasting check, roll 1d10:

| d10 | Event |
|-----|-------|
| 1-2 | **Wild Surge** — Random spell effect within 60 feet (DM choice) |
| 3-4 | **Backlash** — Take 2d10 psychic damage, knocked prone |
| 5-6 | **Reality Tear** — 10-foot radius rift opens, strange energy spills out (1d6 force damage to all nearby, lasts 1 minute) |
| 7-8 | **Magical Burn** — Gain 2d4 Burnout immediately, permanent -1 HP. This HP loss can be reversed by Greater Restoration or equivalent 5th-level healing magic. |
| 9   | **Essence Drain** — Permanently lose 1 Humanity |
| 10  | **Twilight Transformation** — Roll on Mutation table (permanent change) |

### Example Twilight Mutations

- Eyes glow with unnatural light
- Hair becomes ethereal, moves without wind
- One hand constantly emits faint sparks
- Casting spells causes brief bleeding from eyes
- Shadow doesn't match your movements

### Example Custom Spell

**Electromagnetic Pulse** (3rd-level Evocation)
- *Created by comparing to:* Fireball (damage), Dispel Magic (anti-tech effect)
- *Casting Time:* 1 action
- *Range:* 60 feet
- *Effect:* 20-foot radius burst. All electronic devices in area must save (DC = 8 + caster INT + proficiency) or shut down for 1 minute. Deals 6d6 damage to Synthetics and tech-heavy creatures (half on save).
- *Research Cost:* 9,000 credits, 3 weeks

---

## Multiclass Spellcasting

**Multiclass Spellcasting:** When multiclassing between two spellcasting classes, spell slots do not stack. Use the higher of your two spell slot tables. You can use spell slots from either class to cast spells from either class's spell list. Cantrips known from each class are tracked separately.
