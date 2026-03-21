---
game_data: true
name: Psion
primary_stats: [MIG, WIS]
hit_die: d6
hp_base: 8
hp_per_level: 4
starting_humanity: 10
armor_proficiency: [Light]
weapon_proficiency: [Simple]
save_proficiencies: [Will, Fortitude]
skill_bonuses:
  - {skill: Perception, bonus: 2}
  - {skill: Insight, bonus: 2}
starting_cp: 15
role: Controller/Damage
magic_type: "Psionic (Focus system)"
level_1_features: [Psionic Awakening, Psi Strike, Focus]
psionic_casting_stat: WIS
species_restriction: "Biological only (no Synthetics)"
focus_thresholds:
  - {range: "0-3", name: Calm, effect: "Normal psionic power"}
  - {range: "4-6", name: Heightened, effect: "+1 damage per psionic damage die"}
  - {range: "7+", name: Strained, effect: "+2 damage per psionic damage die, +1 to psionic save DCs, 1d4 psychic self-damage when gaining Focus"}
backlash_threshold: "10 + MIG modifier"
backlash_effect: "Focus resets to 0. Take 3d6 psychic damage. All creatures within 15 ft take 2d6 psychic (Reflex half). Stunned until end of next turn."
disciplines:
  - name: Telekinesis
    psi_strike_mod: "Push target 5 ft in any direction on hit"
    passive: "Manipulate objects up to 30 lbs within 30 ft as 1 action"
    surge: "Kinetic Wave: 15 ft cone, 2d8+WIS force, Fortitude save or pushed 15 ft and prone. +2 Focus."
  - name: Telepathy
    psi_strike_mod: "Learn one surface thought from target on hit"
    passive: "Communicate telepathically with willing creatures within 60 ft"
    surge: "Psychic Lance: 60 ft, 3d6+WIS psychic, Will save or stunned 1 round. +2 Focus."
  - name: Psychokinesis
    psi_strike_mod: "Target has -1 to its next attack roll"
    passive: "Create small force effects (force hand, force platform, etc.)"
    surge: "Force Eruption: 10 ft radius within 60 ft, 2d6+WIS force, Reflex save or pushed 10 ft. +2 Focus."
skill_trees:
  - name: Kinetic Mastery
    focus: Offense
    abilities:
      - {name: Enhanced Psi Strike, cp_cost: 5, tier: 1, effect: "+1d8 Psi Strike damage at Heightened+"}
      - {name: Twin Strike, cp_cost: 10, tier: 2, effect: "Psi Strike targets 2 creatures within 5 ft of each other"}
      - {name: Psionic Cataclysm, cp_cost: 15, tier: 3, effect: "30 ft radius, 4d8+WIS force, Reflex half, 1/LR"}
  - name: Mental Fortress
    focus: Defense
    abilities:
      - {name: Thought Shield, cp_cost: 5, tier: 1, effect: "+1 Will saves, reduce psychic damage by WIS mod"}
      - {name: Psionic Feedback, cp_cost: 10, tier: 2, effect: "Melee attackers take WIS mod psychic damage"}
      - {name: Mental Bastion, cp_cost: 15, tier: 3, effect: "Reaction: allies in 15 ft resist all damage 1 round, 1/SR"}
  - name: Focus Control
    focus: Utility
    abilities:
      - {name: Efficient Focus, cp_cost: 5, tier: 1, effect: "Centering reduces 1d6 instead of 1d4"}
      - {name: Sustained Power, cp_cost: 10, tier: 2, effect: "Focus thresholds activate 1 level lower"}
      - {name: Perfect Balance, cp_cost: 15, tier: 3, effect: "WIS DC 15 save to avoid Backlash 1/SR"}
features:
  - name: Psionic Awakening
    level: 1
    action: Passive
    frequency: Permanent
    description: "Choose 2 of 3 Psionic Disciplines (Telekinesis, Telepathy, Psychokinesis). Each modifies your Psi Strike and grants a passive utility. Gain 3rd at L3."
  - name: Psi Strike
    level: 1
    action: "1 Action"
    frequency: At-Will
    description: "Ranged psionic attack, 60 ft. 1d8+WIS force damage. +1 Focus. Apply one chosen discipline modifier. Scales: 2d8 at L5, 3d8 at L11, 4d8 at L17."
  - name: Focus
    level: 1
    action: Passive
    frequency: "Per Encounter"
    description: "Track Focus from 0. Psionic abilities add Focus. Thresholds: 0-3 Calm, 4-6 Heightened (+1/die), 7+ Strained (+2/die, +1 DC, 1d4 self). Backlash at 10+MIG mod."
  - name: Centering
    level: 2
    action: "1 Action"
    frequency: At-Will
    description: "Reduce Focus by 1d4. Gain temp HP equal to amount reduced. Can also end one charmed, frightened, or dazed condition on yourself."
  - name: Discipline Surge
    level: 2
    action: "1 Action"
    frequency: At-Will
    description: "Use your disciplines' powered abilities. Each adds +2 Focus. Surge abilities are separate from Psi Strike."
  - name: Psionic Resilience
    level: 3
    action: Passive
    frequency: Always
    description: "Resistance to psychic damage. Advantage on saves vs charmed and frightened."
  - name: Attribute Improvement
    level: 4
    action: Passive
    frequency: Permanent
    description: "Increase one attribute by +2, or two attributes by +1 each. Maximum 20."
  - name: Psionic Overcharge
    level: 5
    action: "1 Action"
    frequency: "1/Short Rest"
    description: "Set Focus to 7 (Strained). For 3 rounds: psionic abilities deal +1d6 psychic bonus damage, save DCs +2. After 3 rounds: Focus resets to 0, gain 1 exhaustion."
specializations: [Kineticist, Telepath, Warden]
starting_equipment:
  - Simple weapon
  - Light armor
  - "Psion's kit: meditation focus (crystal, carved bone, or relic), journal of psionic exercises, headband or circlet"
  - Rations (5 days)
---
# Psion

> **Recommended Build Guide — Classless System**
> This file describes the **Psion recommended build**: a curated path through Ashfall's shared skill trees designed for this build's core fantasy. Under the current rules, you are **not locked to this build**. Choose a **chassis** for your starting stats and proficiencies, then spend **Character Points (CP)** in any skill trees that match your character concept.
>
> - **Chassis selection and starting stats:** see [Chassis](../chassis.md)
> - **CP economy, spending rules, and milestones:** see [Character Points](../character-points.md)
> - **Full skill tree catalog:** see [Skill Trees](../skill-trees.md)
>
> The ability descriptions, skill tree layouts, and feature details in this file remain the authoritative rules reference for those abilities. The CP values listed in the skill trees are the costs for purchasing abilities.

*Something cracked open inside you. Maybe it was the radiation. Maybe it was whatever came through the rifts when reality broke. Maybe it was always there, dormant, waiting for the world to shatter before it could wake up. All you know is that one day you reached for something across the room and it flew into your hand. One day you heard thoughts that weren't yours. One day the air around you rippled with invisible force and the people nearby fell to their knees.*

*You are the Psion. Your mind is a weapon — not the gentle tool of a scholar or the trained instrument of a spy, but a raw, barely controlled force that tears at the edges of what flesh was meant to contain. You feel things others can't: the electric hum of thoughts, the weight of physical matter begging to be moved, the pressure of your own power building behind your eyes like a migraine that could level a building. Using your abilities feels like holding a live wire — exhilarating, dangerous, and impossible to let go.*

*The Wasteland doesn't know what to make of you. You're not a Mystic channeling external magical energy through sigils and formulas. You're not a Channeler communing with spirits. What you do comes from inside — from the meat and electricity of your own brain, pushing past limits evolution never intended. Some call it a gift. Others call it a disease. You call it survival.*

---

## Base Build (Levels 1-5)

### Core Stats

| Attribute | Value |
|-----------|-------|
| **Primary Attributes** | Might (MIG), Wisdom (WIS) |
| **Hit Die** | d6 |
| **HP at Level 1** | 8 + END modifier |
| **HP per Level** | 1d6 (or 4) + END modifier |
| **Starting Humanity** | 10 |
| **Armor Proficiency** | Light armor |
| **Weapon Proficiency** | Simple weapons |
| **Save Proficiencies** | Will, Fortitude |
| **Skill Bonuses** | Perception +2, Insight +2 |
| **Starting CP** | 15 |
| **Psionic Casting Stat** | Wisdom (WIS) |

### Starting Equipment

- Simple weapon (staff, knife, or sling)
- Light armor (reinforced clothing or leather scraps)
- Psion's kit: meditation focus (crystal shard, carved bone, or pre-war relic), journal of psionic exercises, headband or circlet
- Rations (5 days)

### The Focus System

**Psionics is not magic.** It does not use spell slots, the Sigil System, or burnout. Psionic power comes from within — from the Psion's own neural architecture, amplified by whatever post-Fall phenomenon awakened their latent potential. The Focus system reflects this internal origin.

**How Focus Works:**

Your **Focus** starts at **0** at the beginning of each encounter. Every time you use a psionic ability, your Focus increases. As Focus climbs, your powers grow stronger — but so does the strain on your mind and body. Push too far, and you lose control entirely.

**Focus Thresholds:**

| Focus Level | State | Effect |
|-------------|-------|--------|
| **0-3** | **Calm** | Normal psionic power. No bonuses or penalties. |
| **4-6** | **Heightened** | **+1 damage per die** on all psionic damage rolls. Your eyes glow faintly. Objects near you vibrate. |
| **7+** | **Strained** | **+2 damage per die** on all psionic damage rolls. **+1 to psionic save DCs.** However, each time you gain Focus while Strained, you take **1d4 psychic damage** (unavoidable, not reduced by resistance). Nosebleeds. Visible telekinetic distortion. Painful pressure behind the eyes. |

**Backlash Threshold:** Your maximum safe Focus is **10 + your MIG modifier**. If your Focus ever meets or exceeds this threshold, you suffer **Psionic Backlash**:

- Your Focus **resets to 0**
- You take **3d6 psychic damage** (not reduced by resistance)
- All creatures within **15 feet** take **2d6 psychic damage** (Reflex save, DC = 8 + proficiency + WIS modifier, for half)
- You are **stunned until the end of your next turn**

Backlash represents a catastrophic loss of control — your power discharges violently, burning out your neural pathways and blasting everyone nearby with psychic shrapnel. It is punishing by design. Managing your Focus to avoid Backlash while staying in the Heightened or Strained state is the core skill of playing a Psion.

**Why MIG Matters:** Your Backlash Threshold is **10 + MIG modifier**. A Psion with MIG 10 (+0) triggers Backlash at Focus 10. A Psion with MIG 16 (+3) triggers at Focus 13 — three additional points of headroom in the Strained state. MIG represents your body's physical capacity to contain psionic energy. A stronger body is a better conduit. This is why Psions, uniquely among "caster" archetypes, invest in physical power.

> **Quick Reference — Focus Math:**
>
> At Level 1 with MIG 14 (+2):
> - Backlash Threshold: 12
> - Calm: Focus 0-3 (4 psionic actions)
> - Heightened: Focus 4-6 (3 more actions, +1 damage/die)
> - Strained: Focus 7-11 (5 more actions, +2 damage/die, but 1d4 self-damage each)
> - Backlash: Focus 12+
> - Centering (L2): Reduces Focus by 1d4 per use, extending your operational window

**Focus resets to 0** at the end of each encounter (when combat ends and you have a moment to collect yourself). Outside of combat, Focus does not accumulate — psionic utility abilities used outside of stressful situations don't generate meaningful strain.

### Level Progression (1-5)

#### Level 1: Psionic Awakening, Psi Strike & Focus

- **Psionic Awakening (Permanent):** Your psionic potential has manifested. Choose **2 of 3 Psionic Disciplines**: Telekinesis, Telepathy, or Psychokinesis. Each discipline modifies your Psi Strike and grants a passive out-of-combat utility. You gain your third discipline at Level 3 via the Psionic Resilience feature.

  **Telekinesis** — The discipline of physical force exerted through thought.
  - *Psi Strike Modifier:* On hit, **push the target 5 feet** in any direction of your choice.
  - *Passive Utility:* You can telekinetically **manipulate objects up to 30 lbs** within 30 feet as 1 action — open doors, pull levers, retrieve objects, rearrange furniture. This requires concentration (you can only manipulate one object at a time) and cannot exert enough force to deal damage or restrain creatures.

  **Telepathy** — The discipline of mental contact, communication, and psychic assault.
  - *Psi Strike Modifier:* On hit, you **learn one surface thought** from the target — a single word, concept, or emotional state. This is involuntary on the target's part and provides momentary tactical insight (the GM provides the thought).
  - *Passive Utility:* You can **communicate telepathically** with any willing creature within 60 feet that shares a language with you. This is silent and undetectable. You can broadcast to multiple willing creatures simultaneously.

  **Psychokinesis** — The discipline of raw energy manipulation and force projection.
  - *Psi Strike Modifier:* On hit, the target has **-1 to its next attack roll** as the force impact rattles their concentration and coordination.
  - *Passive Utility:* You can create **small force effects** within 10 feet — a force hand that can lift up to 5 lbs, a force platform that can support your weight for 1 round, or a force barrier across a doorway (too weak to stop creatures, but blocks drafts, water, or small objects). These effects last as long as you concentrate (up to 1 minute).

- **Psi Strike (1 Action, At-Will, Range 60 ft):** You project a bolt of psionic force at a target. Make a ranged psionic attack (**WIS modifier + proficiency bonus** to hit). On hit, deal **1d8 + WIS modifier force damage**. You gain **+1 Focus**.

  When you use Psi Strike, you may apply the modifier from **one discipline you know** (Telekinesis, Telepathy, or Psychokinesis). You choose which modifier to apply each time you use Psi Strike.

  Psi Strike damage scales with level: **2d8** at Level 5, **3d8** at Level 11, **4d8** at Level 17. Focus threshold bonuses apply to each damage die (at Heightened, a Level 5 Psi Strike deals 2d8+2+WIS).

  *Psi Strike is not a spell.* It does not use spell slots, does not trigger Counterspell, and is not affected by antimagic fields. It is a psionic phenomenon — internal, not arcane.

- **Focus (Per Encounter):** Your Focus starts at 0. Track it throughout combat. See **The Focus System** above for full rules.

#### Level 2: Centering & Discipline Surge

- **Centering (1 Action, At-Will):** You take a moment to calm your mind and regain control. Reduce your Focus by **1d4**. You gain **temporary HP equal to the amount of Focus reduced** (as your psionic energy stabilizes, it reinforces your body). Additionally, you can **end one condition** affecting you: charmed, frightened, or dazed.

  Centering is the Psion's safety valve. Without it, every psionic action pushes you closer to Backlash. With it, you can ride the Heightened and Strained states for extended periods — dipping into power, pulling back, then pushing forward again. The cost is significant: Centering takes an entire action, meaning you're not dealing damage or using abilities that round.

  *The moment of Centering is visceral — you close your eyes, press your palms to your temples, and the visible distortions around you contract and settle. The nosebleed stops. The pressure eases. For a moment, you're in control again. Then you open your eyes and reach for the next target.*

- **Discipline Surge (1 Action, At-Will):** Each Psionic Discipline you know grants a **Surge ability** — a powerful psionic effect that adds **+2 Focus** when used. Surge abilities are separate from Psi Strike (they are their own actions, not modifications to Psi Strike). You can use a Surge ability once per round.

  **Telekinesis Surge: Kinetic Wave** (1 Action)
  15-foot cone originating from you. All creatures in the area take **2d8 + WIS modifier force damage** and must make a **Fortitude save** (DC 8 + proficiency + WIS modifier). On a failed save, creatures are **pushed 15 feet** away from you and **knocked prone**. On a successful save, creatures take half damage and are not pushed or knocked prone. Adds **+2 Focus**.

  **Telepathy Surge: Psychic Lance** (1 Action, Range 60 ft)
  Target one creature within 60 feet. The target takes **3d6 + WIS modifier psychic damage** and must make a **Will save** (DC 8 + proficiency + WIS modifier). On a failed save, the target is **stunned until the end of its next turn**. On a successful save, the target takes half damage and is not stunned. Adds **+2 Focus**.

  **Psychokinesis Surge: Force Eruption** (1 Action, Range 60 ft)
  Choose a point within 60 feet. All creatures within a **10-foot radius** of that point take **2d6 + WIS modifier force damage** and must make a **Reflex save** (DC 8 + proficiency + WIS modifier). On a failed save, creatures are **pushed 10 feet** away from the center. On a successful save, creatures take half damage and are not pushed. Adds **+2 Focus**.

  > **Combat Loop Example (Level 2 Psion):**
  >
  > **Round 1:** Psi Strike with Telekinesis mod (1d8+WIS, push 5ft). Focus: 1.
  > **Round 2:** Psi Strike again. Focus: 2. Move to better position.
  > **Round 3:** Psi Strike again. Focus: 3. Still Calm.
  > **Round 4:** Kinetic Wave (2d8+WIS, push 15ft, prone). Focus: 5. Now Heightened! (+1/die)
  > **Round 5:** Psi Strike at Heightened (1d8+1+WIS). Focus: 6. Decision point approaching.
  > **Round 6 Option A:** Centering. Reduce Focus by 1d4 (roll 3, drop to Focus 3, gain 3 temp HP). Safe, back in Calm.
  > **Round 6 Option B:** Psi Strike. Focus: 7. Now Strained! (+2/die, +1 DC) But 1d4 self-damage every time Focus goes up from here...

#### Level 3: Psionic Resilience

**Psionic Resilience (Passive):** Your mind has hardened through constant psionic use. You gain the following:

- **Resistance to psychic damage.** Your neural pathways have adapted to psionic strain.
- **Advantage on saving throws** against being **charmed** or **frightened**. Your mental discipline makes you difficult to manipulate.
- If you know only 2 Psionic Disciplines, you may now choose your **third discipline**, gaining its Psi Strike modifier, passive utility, and Surge ability.

#### Level 4: Attribute Improvement

Increase one attribute by +2, or two attributes by +1 each (maximum 20 before modifiers).

#### Level 5 Capstone: Psionic Overcharge

**Psionic Overcharge (1 Action, 1/Short Rest):** You deliberately flood your nervous system with psionic energy, forcing yourself into the Strained state. Your Focus is **immediately set to 7** (entering Strained regardless of current Focus). For the **next 3 rounds**:

- All psionic abilities deal an additional **+1d6 psychic damage** (on top of normal damage and Focus threshold bonuses)
- Your psionic **save DCs increase by +2** (on top of the Strained +1, for a total of +3)
- You gain Focus normally from psionic actions during Overcharge

When Overcharge ends (after 3 rounds or if you trigger Backlash, whichever comes first), your Focus **resets to 0** and you gain **1 level of exhaustion**. In the gritty rest economy, this exhaustion is a serious cost — use Overcharge when the fight demands everything you have, not as a default strategy.

*Overcharge is what happens when a Psion stops trying to control their power and starts trying to survive it. Your eyes blaze with light, your nose streams blood, the air around you screams with distortion, and for three glorious, agonizing rounds, you are the most dangerous thing on the battlefield. Then it stops, and the price comes due.*

> **Overcharge Math (Level 5, MIG 14, WIS 16):**
> - Focus immediately set to 7 (Strained: +2/die, +1 DC)
> - Psi Strike damage: 2d8+4+3 (WIS) +1d6 (Overcharge) = avg ~20 damage per hit, at-will
> - Save DC: 8+3+3+1+2 = 17 (very hard to resist)
> - Each Psi Strike adds +1 Focus (7→8→9→10→11)
> - Backlash at 12 (MIG +2)
> - In 3 rounds, you can make 3 Psi Strikes (Focus hits 10), then must Center or face Backlash at 11
> - Or use 2 Psi Strikes + 1 Centering to stay safe while still dealing massive damage

### Skill Trees

Psions have access to three skill trees, each costing CP to unlock features:

#### Kinetic Mastery (Offensive)

Refining psionic energy into devastating attacks — more damage, more targets, more destruction.

- **Enhanced Psi Strike (5 CP):** When you are at **Heightened Focus or higher** (Focus 4+), your Psi Strike deals an **additional 1d8 force damage**. This bonus die also benefits from Focus threshold bonuses.

- **Twin Strike (10 CP, Requires Enhanced Psi Strike):** When you use Psi Strike, you can target **two creatures within 5 feet of each other**. Make a separate attack roll for each. Each hit deals normal Psi Strike damage (split between targets). The second attack does not incur the multiple attack penalty. You gain +1 Focus total (not +1 per target).

- **Psionic Cataclysm (15 CP, Requires Twin Strike, 1/Long Rest):** As 1 Action, unleash a devastating psionic detonation. All creatures in a **30-foot radius** centered on a point within 60 feet take **4d8 + WIS modifier force damage** (Reflex save for half). Creatures that fail the save are pushed 10 feet from the center and knocked prone. Adds **+4 Focus**. This ability costs no resources beyond Focus — it is pure psionic will made manifest.

#### Mental Fortress (Defensive)

Building psychic walls and weaponizing your own resilience — turning defense into offense.

- **Thought Shield (5 CP):** You gain **+1 to Will saving throws**. Additionally, whenever you take **psychic damage**, reduce it by your **WIS modifier** (minimum 0 reduction). Your thoughts are shielded — creatures cannot read your mind without a contested check (their INT vs. your WIS + proficiency).

- **Psionic Feedback (10 CP, Requires Thought Shield):** When a creature **hits you with a melee attack**, that creature takes **psychic damage equal to your WIS modifier** (no save). Your psionic field is a passive hazard — striking you is like touching a live wire.

- **Mental Bastion (15 CP, Requires Psionic Feedback, 1/Short Rest):** As a **reaction** when you or an ally within 15 feet is targeted by an attack or damaging effect, you project a psionic shield. You and all allies within 15 feet gain **resistance to all damage types** until the start of your next turn. This is incredibly taxing — adds **+3 Focus** when used.

#### Focus Control (Management)

Mastering the Focus system itself — extending your operational window, reducing risk, and achieving psionic equilibrium.

- **Efficient Focus (5 CP):** Your **Centering** ability now reduces Focus by **1d6** instead of 1d4. You gain temporary HP equal to the amount reduced (as before, but potentially more).

- **Sustained Power (10 CP, Requires Efficient Focus):** Your Focus threshold bonuses activate **one level lower**. Heightened bonuses (+1/die) begin at Focus **2** instead of 4. Strained bonuses (+2/die, +1 DC) begin at Focus **5** instead of 7. The Strained self-damage penalty also begins at Focus 5. This makes you more powerful faster but narrows your safe operating range — use Centering wisely.

- **Perfect Balance (15 CP, Requires Sustained Power, 1/Short Rest):** When your Focus would meet or exceed your Backlash Threshold, you can make a **WIS saving throw (DC 15)**. On success, your Focus remains at **Threshold - 1** instead of triggering Backlash. You teeter on the edge of control, holding the power in place through sheer will. On failure, Backlash triggers normally.

### Magic Relationship

Psions are **not spellcasters**. They do not use the Sigil System, do not have spell slots, and do not learn cantrips in the traditional sense. Their abilities are **psionic** — internal phenomena powered by neural architecture, not external magical energy.

Key differences from magic:
- Psionic abilities are **not spells** and cannot be Counterspelled
- Psionics function normally in **antimagic fields**
- Psionic abilities are **not affected by Humanity loss** from augmentations (augmentations suppress magic, not psionics)
- Psionics cannot be learned by non-Psions through CP expenditure (you either have the awakening or you don't)

**Species Restriction:** Psionics requires biological neural architecture. Synthetics — whose cognition is digital rather than organic — cannot manifest psionic abilities and cannot choose the Psion build. Altered Humans, Alien Hybrids, and baseline Humans can all be Psions.
- Psions **cannot learn traditional cantrips or spells** unless they multiclass into a casting class. Their psionic abilities occupy the same design space but use entirely different mechanics.

**Interaction with Other Casters:** Psions and Mystics can operate simultaneously without interference. A Psion's Psi Strike and a Mystic's Spark are fundamentally different phenomena — one is internal force projection, the other is external energy manipulation. However, some effects interact: psionic damage can be resisted by magical protections that specifically ward against force or psychic damage, and magical detection can sense active psionic effects (they register as "anomalous" rather than "arcane").

### What Makes a Psion Different?

The Psion fills a unique role: the **escalating controller** who grows more dangerous as combat continues.

- **Not a Mystic:** The Mystic is a Swiss Army knife of arcane magic — versatile, precise, and resource-limited. They start strong (spell slots) and grow weaker as resources deplete. The Psion starts weak (Focus 0) and grows stronger as Focus accumulates. The Mystic crafts spells through the Sigil System; the Psion channels raw internal force through Disciplines. The Mystic worries about running out of slots; the Psion worries about losing control.

- **Not a Channeler:** The Channeler is a divine hybrid — melee combat supplemented by healing and spiritual abilities. The Psion is purely mental — no melee prowess, no divine connection, no healing. The Channeler's Oracle specialization (L6-10) grants some psionic abilities on top of a half-caster chassis; the base Psion build is fully psionic from Level 1 with a completely different resource system.

- **Not a Technician:** Both are "smart" classes, but the Technician manipulates technology while the Psion manipulates reality directly through thought. The Technician is external (devices, drones, hacks); the Psion is internal (Focus, discipline, mental force).

If the Mystic is a precision instrument and the Channeler is a warhammer blessed by the spirits, the Psion is a nuclear reactor — terrifyingly powerful, constantly building toward critical mass, and devastating when it goes off.

---

## Advanced Specializations (Levels 6-10)

By Level 6, a Psion's neural pathways have deepened and specialized. The raw, barely controlled power of the early awakening has been shaped by experience — and by the discipline the Psion practiced most heavily. Now the power demands a direction: the destructive precision of the Kineticist, the invasive reach of the Telepath, or the protective discipline of the Warden.

Every Psion specialization interacts with the Focus system. The choice isn't just about what you can do — it's about how you manage the escalating power that comes with every psionic action.

**System Notes:**
- All characters gain 10 CP per level from levels 6-10
- Short rest: 8 hours
- Long rest: 1 week
- Bounded accuracy: maximum core bonus of +14 (+18 mythic tier)
- 3-action economy per turn
- All specialization abilities generate Focus and interact with Focus thresholds

### Kineticist (Telekinetic Blaster / Battlefield Controller)

*Every Psion can push things with their mind. A Kineticist can rip the bolts out of a tank. While other Psions learn subtlety — reading minds, building shields — the Kineticist doubles down on the most direct application of psionic power: moving matter through sheer force of will. They don't finesse it. They don't whisper it. They grab the world by the throat and rearrange it.*

*A Kineticist in combat is a natural disaster wearing a person's face. Debris orbits them like satellites. Enemies are flung across rooms, pinned to walls, crushed under collapsing structures. The air screams with displaced force. And at the center of it all, the Kineticist stands perfectly still — eyes blazing, nose bleeding, telekinetic distortions warping the air around them — holding it all together by sheer will while their Focus climbs toward something terrible.*

**Prerequisites:** Level 6, Psion build

**New Skill Tree Unlocked:** Kinetic Warfare (telekinetic combat techniques, environmental manipulation, sustained force projection)

*Note: The Kineticist and the Mystic Elementalist both deal area damage, but through completely different means. The Elementalist channels external arcane energy shaped by the Sigil System — fire, ice, lightning drawn from reality's fabric. The Kineticist exerts internal psionic force — no elements, no spells, just raw telekinetic power that costs nothing but Focus and sanity. The Elementalist worries about spell slots. The Kineticist worries about losing control.*

#### Level 6 Features

**Telekinetic Grip** (1 Action, +1 Focus)
You seize a creature with your mind. Target one creature within **60 feet** that you can see. The target must make a **Fortitude save** (DC 8 + proficiency + WIS modifier). On failure, the target is **restrained** until the end of your next turn — held in place by invisible telekinetic force. The target can feel the pressure but cannot see what's holding them.

While restrained by your grip, the target takes **1d8 force damage** at the start of each of its turns. The grip is painful — you're not just holding them still, you're compressing them.

The target can attempt to break free by using 1 action to make a **Fortitude save** (DC 8 + proficiency + WIS modifier). On success, the grip is broken. Creatures larger than you by two or more size categories have advantage on this save.

Telekinetic Grip requires **line of sight** — if you lose sight of the target (they go behind total cover, become invisible, etc.), the grip automatically ends.

*This is the Kineticist's signature move: point at a target and say "Stay." Restrained is a powerful condition — the target has disadvantage on Reflex saves and attack rolls against it have advantage. Combined with your party's damage dealers, Telekinetic Grip turns the Kineticist into a devastating force multiplier.*

**Force Shaping** (Passive)
Your Telekinesis discipline has grown far beyond moving small objects. Your telekinetic manipulation improves:

- Maximum weight: **200 lbs** (up from 30 lbs)
- Range: **60 feet** (up from 30 feet)
- You can create **force constructs** — solid psionic structures that last **1 minute** or until destroyed:
  - **Force Wall:** 10 feet wide, 10 feet tall, 1 inch thick. Blocks movement and line of effect. Has **15 HP** and **DV 10**. Transparent (can be seen through).
  - **Force Bridge:** Up to 20 feet long, 5 feet wide. Supports up to 500 lbs. Can span gaps, create ramps, or provide an elevated platform.
  - **Force Platform:** 5 feet square. Can be raised up to 15 feet. Supports one Medium creature. You can move the platform up to 10 feet per round as a free action.

Force constructs do not generate Focus — they are utility applications of your telekinetic power. You can maintain up to **2 constructs** at a time.

*Example: Your party faces a 20-foot chasm in a collapsed overpass. You create a Force Bridge across it. The party crosses while you hold the construct in place. On the other side, a sniper opens fire — you dismiss the bridge and create a Force Wall for cover. No spell slots spent. No resources consumed. Just your mind reshaping the battlefield.*

#### Level 8 Features

**Kinetic Barrage** (2 Actions, +2 Focus)
You tear debris, rubble, and loose objects from the environment and hurl them at your enemies in a devastating salvo. Target up to **3 creatures** within **60 feet**. Each target takes **3d8 + WIS modifier force damage** (**Reflex save** for half, DC = 8 + proficiency + WIS modifier). Targets that fail the save are **pushed 10 feet** away from you.

Kinetic Barrage uses whatever material is available — rocks, metal fragments, broken furniture, scattered equipment. In environments with abundant loose material (ruins, junkyards, battlefields), the description is dramatic. In environments with minimal material (clean corridors, open plains), the ability still works — you're ripping molecules from surfaces — but the visual is less spectacular.

At **Heightened Focus or above**, each damage die gains the appropriate threshold bonus (+1 or +2 per die), making Kinetic Barrage increasingly devastating as your Focus climbs.

**Sustained Telekinesis** (Passive)
Your Telekinetic Grip gains improved functionality:

- You can **maintain** a Telekinetic Grip on subsequent turns as a **free action** (instead of requiring a new action to re-establish it). Maintaining the grip still costs **+1 Focus per round**.
- While gripping a creature, you can **move the restrained creature** up to **20 feet in any direction** as **1 action**. This includes lifting them off the ground, slamming them into walls, or hurling them into other creatures.
  - **Slam:** Move the gripped creature into a solid surface (wall, floor, ceiling). The creature takes **2d6 bludgeoning damage** in addition to the ongoing grip damage. No additional Focus cost.
  - **Throw:** Hurl the gripped creature up to 30 feet. The creature takes **1d6 bludgeoning damage per 10 feet thrown** and lands prone. If thrown into another creature, both creatures take the damage (Reflex save for the second creature to dodge). This ends the grip.

*Sustained Telekinesis turns Telekinetic Grip from a one-round lockdown into a sustained control tool. A Kineticist gripping a target can hold them in place, slam them repeatedly, or use them as a projectile. The Focus cost (+1/round) adds up quickly, creating the classic Psion tension: how long can you maintain this before you lose control?*

#### Level 10 Capstone Ability

**Telekinetic Maelstrom** (1/Long Rest, 2 Actions, Concentration, +3 Focus)

You unleash your full telekinetic power, creating a churning vortex of debris, force, and destruction. Choose a point within **60 feet**. A **20-foot radius** area centered on that point becomes a Telekinetic Maelstrom for up to **1 minute** (concentration):

- **Entry/Starting Turn:** Any creature that enters the maelstrom or starts its turn inside takes **3d8 + WIS modifier force damage** (Reflex save for half, DC = 8 + proficiency + WIS modifier + Focus threshold bonus).
- **Difficult Terrain:** The entire area is difficult terrain as debris churns through the air.
- **Forced Movement:** Creatures that fail the Reflex save are pulled **10 feet** toward the center of the maelstrom.
- **Movement:** On your turn, you can move the maelstrom up to **20 feet** as **1 action**. The maelstrom moves with its debris cloud intact.

The maelstrom generates **+1 Focus per round** it is maintained (in addition to the +3 on activation). This means a Kineticist who activates Telekinetic Maelstrom is on a fast clock — the Focus accumulates relentlessly, pushing toward Backlash. Managing this requires Centering actions during the maelstrom's duration, which means rounds where you're not dealing other damage.

If you trigger **Psionic Backlash** while the maelstrom is active, the maelstrom collapses violently — all creatures within the area (including allies) take an additional **2d8 force damage** from the debris dropping and scattering. The maelstrom ends.

> **Kineticist Focus Math (Level 10, MIG 16, WIS 18):**
> - Backlash Threshold: 13 (10 + MIG +3)
> - Activate Maelstrom: +3 Focus (Focus now 3, Calm)
> - Round 2: Maintain (+1 Focus = 4, Heightened). Psi Strike (+1 = 5).
> - Round 3: Maintain (+1 = 6). Centering (reduce 1d6, avg 3.5 = Focus ~3). Safe.
> - Round 4: Maintain (+1 = 4, Heightened). Kinetic Barrage (+2 = 6).
> - Round 5: Maintain (+1 = 7, Strained!). Must Center or risk Backlash next round.
> - The Kineticist can sustain the maelstrom for ~5-6 rounds with careful Centering, dealing massive area damage while riding the edge of Backlash.

*Telekinetic Maelstrom is the Kineticist's answer to being outnumbered. You stop fighting individuals and start fighting the room. Debris orbits you like a cyclone, enemies are dragged toward the center and shredded, and the battlefield becomes your weapon. It's glorious, devastating, and terrifyingly unstable — exactly what a Kineticist should be.*

> **GM Guidance:** Telekinetic Maelstrom should feel like a localized natural disaster. Describe debris orbiting the Kineticist in a screaming vortex — chunks of concrete, bent rebar, shattered glass. Enemies pulled toward the center should feel the inexorable gravity of it. The Focus math means the Kineticist has ~5-6 rounds of sustainable use before Backlash becomes imminent. When Backlash hits during Maelstrom, the collapse should be dramatic — debris rains down, the vortex implodes, and the Kineticist staggers.

---

### Telepath (Mind Controller / Psychic Manipulator)

*The Kineticist moves objects. The Telepath moves people — from the inside. Where other Psions project force outward, the Telepath turns their power inward toward other minds: reading thoughts, implanting suggestions, and at the height of their power, seizing total control. A Telepath doesn't need to win a fight. They need the enemy to decide — without understanding why — that the fight isn't worth having.*

*What makes Telepaths feared isn't the mind reading. People can guard against interrogation. What makes them feared is that you never know when a Telepath is in your head. The bartender who suddenly became helpful. The guard who can't remember why he walked away from his post. The general who changed the plan for "no particular reason." A Telepath's best work is invisible — and that's what keeps people awake at night.*

**Prerequisites:** Level 6, Psion build

**New Skill Tree Unlocked:** Psychic Manipulation (mind reading, mental influence, thought projection, psychic combat)

*Note: The Telepath and the Mystic Seer both access information others can't, but through different lenses. The Seer sees the future — portents, probabilities, possible outcomes. The Telepath reads the present — actual thoughts happening right now in an actual mind. The Seer's power is predictive and impersonal. The Telepath's power is immediate and intimate. The Seer can tell you what someone will do. The Telepath can tell you why — and then change their mind.*

#### Level 6 Features

**Mind Probe** (1 Action, +1 Focus, Concentration)
You reach into a creature's mind and read its active thoughts. Target one creature within **60 feet**. The target must make a **Will save** (DC 8 + proficiency + WIS modifier).

**On Failure:** You read the target's **surface thoughts** for up to **1 minute** (concentration). You learn:
- The target's **current intentions** (what they plan to do next)
- Their **emotional state** (afraid, angry, calculating, desperate)
- **One specific piece of information** you ask about — a name, a location, a plan, a password. The GM provides the answer based on whether the target knows the information. If the target doesn't know, you learn that they don't know.

While probing, you can continue asking for information (one question per round, no additional action cost). The target is **unaware** that their thoughts are being read — they feel no intrusion.

**On Success:** The probe fails. The target is **aware** that someone attempted to read their mind (they feel a psychic pressure), but they don't automatically know who did it unless they can see you concentrating.

Mind Probe does not work on constructs, mindless creatures, or creatures immune to psychic effects.

*Mind Probe is the Telepath's foundation — the ability that turns every social encounter into an intelligence operation. In combat, you learn enemy tactics in real time. In negotiation, you know what they'll accept before they say it. The ethical implications are for the Telepath to wrestle with; the tactical advantages are undeniable.*

**Psychic Network** (Passive Enhancement)
Your Telepathy discipline improves significantly:

- Telepathic communication range extends to **120 feet** (up from 60 feet)
- You can link up to **WIS modifier** willing creatures into a **telepathic network**. All members can communicate silently with each other (not just with you). The network lasts **1 hour**.
- While the network is active, linked creatures **cannot be surprised** — you passively share threat awareness across the link. If one member perceives a danger, all members perceive it simultaneously.
- Network communication is **instantaneous and silent** — faster and more secure than radio, undetectable by electronic surveillance.

The network does not transmit pain, emotions, or involuntary thoughts — only deliberate communication. Breaking concentration or moving beyond range severs the link for that individual only.

*Example: Your party infiltrates a Convergence facility in three teams. The Telepath links everyone through the Psychic Network. Team Alpha reports guard positions. Team Bravo confirms the server room is clear. Team Charlie signals the extraction vehicle is ready. All of this happens in complete silence, with no radio signals to intercept. The Convergence security team never sees it coming.*

#### Level 8 Features

**Dominate** (1 Action, +2 Focus)
You seize control of a creature's actions for a single, critical moment. Target one creature within **60 feet**. The target must make a **Will save** (DC 8 + proficiency + WIS modifier + Focus threshold bonus — at Strained, this DC is extremely high).

**On Failure:** You issue a **single simple command** that the target must obey on its next turn. The command must be something the target is physically capable of:
- **Move:** The target moves up to its speed in a direction you choose
- **Attack:** The target makes one weapon attack against a target of your choice
- **Drop:** The target drops whatever it's holding
- **Flee:** The target uses its movement to move away from a target of your choice

The command **cannot be directly suicidal** — "jump off the cliff" against a creature that would die from the fall fails automatically. "Attack your ally" is valid — the target might survive. "Move into the fire" is a judgment call (GM discretion based on severity).

**On Success:** The target resists. It is **aware** that you attempted to control it and knows who you are.

After the dominated action resolves, the target is **aware** it was manipulated and knows you were responsible. Dominate is a blunt tool — effective but it burns your anonymity.

*Dominate is the Telepath's most morally questionable ability. You're not reading thoughts — you're overriding them. The target does what you want because you've temporarily hijacked their motor control. It's not mind control in the subtle sense. It's possession.*

**Psychic Shroud** (1 Action, +1 Focus, Concentration)
You wrap yourself and nearby allies in a psionic field that makes minds slide off you. You and up to **3 allies within 30 feet** become **psychically invisible** for up to **1 minute** (concentration).

Creatures attempting to perceive shrouded characters must make a **Will save** (DC 8 + proficiency + WIS modifier) to detect them. On failure, the perceiving creature is simply unaware of the shrouded characters — their mind edits them out of awareness.

Psychic Shroud has limitations:
- **Physical interaction breaks it:** Attacking, touching, making noise, or causing a visible disturbance ends the shroud for the character who did it.
- **Cameras and sensors are unaffected:** Psychic Shroud affects minds, not optics. Electronic surveillance sees you normally.
- **Constructs are immune:** Creatures without biological minds (synthetics, drones, turrets) are unaffected.
- **Mindless creatures are immune:** Animals and creatures that operate on instinct rather than perception can sense you normally.

*Psychic Shroud is the Telepath's answer to stealth — not sneaking past guards, but making guards incapable of registering your presence. It's terrifyingly effective against biological enemies and completely useless against cameras. Smart Telepaths learn to combine Shroud with conventional infiltration techniques.*

#### Level 10 Capstone Ability

**Psychic Domination** (1/Long Rest, 1 Action, Concentration, +4 Focus)

You don't issue a command. You take the wheel. Target one creature within **60 feet** that you can see. The target must make a **Will save** (DC 8 + proficiency + WIS modifier).

**On Failure:** You take **full control** of the target for up to **1 minute** (concentration). While dominating:
- You dictate all of the target's **actions, movement, and speech**
- You perceive through the target's **senses** (sight, hearing, etc.) in addition to your own
- The target retains awareness of what's happening but cannot act independently — they are a passenger in their own body
- You can access the target's **surface memories** related to current actions (passwords to doors they're opening, names of people they're greeting)

The target can repeat the **Will save at the end of each of its turns** to break free.

**Limitations:**
- Commands cannot be **directly suicidal** — ordering the target to shoot themselves in the head fails automatically
- **Concentration:** If your concentration is broken (damage, another concentration effect, incapacitation), the target is freed immediately and is **stunned for 1 round** from the psychic whiplash
- On your turns, you control both yourself and the dominated creature — but your own actions are limited to **1 action** while the dominated creature takes its full turn. Your mental bandwidth is split.
- After domination ends (by any means), the target remembers everything and knows exactly who controlled them

*Psychic Domination is the Telepath's most feared ability — and the one most likely to get them killed. A dominated faction leader ordering their troops to stand down ends battles. A dominated guard opening vault doors bypasses all security. But the target remembers everything. Every person you dominate becomes an enemy for life, with perfect knowledge of what you did to them. Use this power wisely — or don't use it at all.*

> **Telepath Focus Considerations:**
> Psychic Domination costs +4 Focus on activation. At Focus 0, this immediately puts you at Focus 4 (Heightened). Maintaining concentration while managing Focus from other psionic actions means the Telepath is under constant pressure during domination. A Centering action costs 1 of your limited actions while splitting attention with the dominated creature. This creates genuine tension: maintain the domination and risk Backlash, or release the target and stabilize?

> **GM Guidance:** Psychic Domination has significant narrative consequences. The target remembers everything — every order, every humiliation, every action taken against their will. A dominated faction leader who was forced to stand down their troops becomes a permanent, informed enemy. Use this ability's aftermath to create compelling story hooks. The 1-action limit on the Psion's own turns while controlling prevents this from being two full characters per round.

#### Psychic Manipulation Skill Tree

*The Telepath's specialization tree focuses on psychological precision — reading minds, implanting doubt, and exploiting the cracks that every mind carries. Abilities in this tree cannot be Counterspelled and function normally in antimagic fields.*

> **Tree Status:** Tier 1 and Tier 3 abilities are pending. Mind Break (Tier 2) is defined here as the tree's anchor ability. Until Tier 1 abilities are defined: Mind Break may be purchased as a direct **10 CP spend** by Telepath specialists without a Tier 1 prerequisite.

**Tier 1 Abilities (5 CP each):** *(Pending — see Tree Status above)*

**Tier 2 Abilities (10 CP each, requires one Tier 1 Psychic Manipulation ability):**

---

##### Mind Break

**Mind Break** *(1 Action, +1 Focus, INT modifier uses per Short Rest — minimum 1)*

You reach into another mind and find the cracks — the doubts suppressed under discipline, the fears held together by willpower, the memories that bleed when pressed. You choose one and press it.

Target one creature within **60 feet** that you can see. The target must make a **Will saving throw** (DC 8 + your proficiency bonus + your WIS modifier).

**On a success:** The probe slides off. The target feels a momentary intrusion but the effect is suppressed. The target is aware that something tried to enter their mind — they know psionics were used but not necessarily who used them (unless they can see you clearly).

**On a failure:** Choose one **Fracture Effect** to impose:

---

**Shattered Confidence.** Your probe finds the place where the target's belief in their own effectiveness lives — and you hollow it out, just briefly. Until the **end of the target's next turn**, the target has **disadvantage on all attack rolls**. Additionally, at the start of the target's next turn, before they spend any actions, the target makes a **Will saving throw** (DC 8 + your proficiency bonus + your WIS modifier) at no action cost:
- **On a failed save:** The target's first action this turn cannot be an attack roll. Their aggression falters as doubt overwhelms the impulse to strike — they may move, use an ability, interact with their environment, or take any other non-attack action instead. They retain their remaining two actions without restriction.
- **On a successful save:** The target acts normally, though attack disadvantage still applies for the duration.

> *Tactical note: Best deployed against damage dealers and heavily offensive enemies. Shattered Confidence reduces hit reliability for an entire round AND may cut off their first attack attempt entirely via the secondary save. Even on a successful secondary save, you've imposed attack disadvantage for the round. The target still has three functional actions — they can move and use abilities freely. This is doubt, not paralysis.*

---

**Paranoid Fugue.** You seed the target's perception with just enough dissonance that they can no longer trust what they see — allies become ambiguous, flanking angles feel like exposure, coordinated attacks seem like traps. Until the **end of the target's next turn**:
- The target **cannot benefit from flanking, allied positioning bonuses, or tactical command effects** (including Mark Target bonuses from Warlord abilities, ally-granted attack bonuses, Cover positioning benefits granted by allies, or similar coordinated effects that require trusting a nearby ally's intent).
- If the target is currently **flanking an ally or within 5 feet of at least one ally**, they immediately use a **free movement** (not an action cost; this forced reposition does not provoke opportunity attacks) to reposition — their fractured perception tells them the proximity is a liability. The target moves up to half their speed away from the nearest ally of their own.

> *Tactical note: Best deployed against enemies that rely on tactical formation — those currently flanking, those benefiting from command effects, or those positioned for coordinated strikes. The free reposition can break enemy formations without costing the target an action, but it's the Psion controlling where the target moves. A Paranoid Fugue target repositioned away from their flanking partner loses their flanking advantage immediately. Combine with Psychic Network (your party's tactical communication) to immediately capitalize on the disrupted position.*

---

**Phantom Pain.** You route a signal through the target's nervous system — precise, targeted neural interference that reads as overwhelming physical sensation. The target takes **2d6 psychic damage** (this damage cannot be reduced or prevented by resistances that apply to mundane physical damage — it bypasses conventional protection, though creatures specifically immune to psychic damage are unaffected). Additionally, until the **end of the target's next turn**, the target has **disadvantage on concentration checks** as involuntary pain responses destabilize their focus.

> *Tactical note: Best deployed against concentration-dependent enemies — Mystics maintaining spell effects, Technicians running active drone commands, enemy Psions in Focus-critical states. The psychic damage is direct and reliable. The concentration disadvantage is the secondary payoff: if the target is currently maintaining any sustained ability, your next opportunity attack or an ally's strike has a much higher chance of breaking their concentration at the critical moment. This is the "I need damage and a debuff" option — clean, direct, precise.*

---

**Recovery and Limitations:**

You can use Mind Break a number of times per **Short Rest** equal to your **INT modifier** (minimum 1). INT modifier reflects the cognitive precision required for psychological assault — distinct from the raw psionic power that WIS measures. A Telepath who invests in both is rare and dangerous.

**Focus:** Mind Break adds **+1 Focus** per use. It is a precision action — targeted, controlled, the mental equivalent of a scalpel rather than a hammer. It costs the same Focus as Mind Probe.

**Targeting Restriction:** Mind Break cannot be used against **party members** without explicit GM sanction. This restriction holds regardless of circumstances — Telepaths who use their psychological weapons against allies break the foundational trust of the group. NPCs, enemy creatures, and antagonists have no such protection.

**Stress Track Isolation:** Mind Break's Fracture Effects are **standalone temporary conditions** that end at the conclusion of the target's next turn. They have no connection to the Stress system (see **Exploration — Stress**). Mind Break does **not** advance a target's Stress Points, does not apply or interact with the Traumatized condition, and cannot trigger or escalate Named Trauma Conditions. The effects are combat psychology — brief, tactical, and resolved. The distinction matters: the Stress track measures psychological damage accumulated over a campaign; Mind Break is a weapon, not a wound.

> **Design Note — Extended Mind Break (Future T3 Design Space):** If a Tier 3 ability is added to this tree, one option is an escalation: a Telepath at Tier 3 who has already landed a Mind Break on a creature during this encounter may (as a GM-gated option, not default) apply a Named Trauma Condition to that creature — representing a deeper, more sustained psychological assault. This escalation would be explicitly **not** available against player characters and would be limited to significant NPC targets or powerful creatures where a lasting psychological effect is narratively appropriate.

---

*The moment Mind Break lands, something shifts in the target's expression — a flicker of something old and painful, arriving without context, departing before it can be named. They don't know what happened. They just know that, for a moment, they weren't sure of themselves anymore.*

*"I didn't hurt you," the Telepath said quietly. "I just reminded you of something you already knew."*

---

**Tier 3 Abilities (15 CP each, requires one Tier 2 Psychic Manipulation ability):**

---

### Warden (Psionic Defender / Protector)

*Most Psions learn to project their power outward — to strike, to crush, to dominate. Wardens learned to project it inward — into the people around them. A Warden's power is a wall between their allies and everything that wants to hurt them. Psychic shields that absorb gunfire. Force barriers that turn aside explosions. A telepathic web that shares pain so no one person bears it alone. The Warden is the Psion who decided that the greatest use of their power isn't destruction — it's protection.*

*This decision has a cost. A Warden's shields aren't free energy. They're the Warden's own neural architecture, projected outward and hardened into armor. Every bullet that hits a Warden's shield hits the Warden — not physically, but psionically. The migraines are blinding. The nosebleeds are constant. And the Focus that builds from sustained protection pushes them toward Backlash faster than any offensive Psion. Wardens don't die in glorious explosions of power. They die quietly, bleeding from the eyes, having absorbed one hit too many for the people they swore to protect.*

**Prerequisites:** Level 6, Psion build

**New Skill Tree Unlocked:** Psionic Protection (shield techniques, damage absorption, ward maintenance, sacrifice techniques)

*Note: The Warden and the Warrior Vanguard both protect their team, but through completely different means. The Vanguard physically interposes — heavy armor, shield walls, bodyguard movements. The Warden projects psionic barriers from a distance — no armor required, no physical contact needed. The Vanguard absorbs hits with their body. The Warden absorbs hits with their mind. The Vanguard can protect indefinitely as long as their HP holds. The Warden's protection is limited by Focus — push too hard, and Backlash doesn't just hurt them, it leaves everyone unprotected.*

#### Level 6 Features

**Psionic Aegis** (Reaction, +1 Focus, WIS modifier times per Short Rest)
When an ally within **30 feet** takes damage from any source, you can use your reaction to project a psionic shield. Reduce the damage the ally takes by **1d8 + your WIS modifier**.

You take **psychic damage equal to half the amount you absorbed** (rounded down). This damage cannot be reduced or prevented — it represents the neural cost of intercepting the attack with your mind.

At **Heightened Focus**, the absorption increases to **1d10 + WIS modifier**. At **Strained Focus**, it increases to **1d12 + WIS modifier** — but the self-damage also increases proportionally.

You can use Psionic Aegis a number of times per short rest equal to your **WIS modifier** (minimum 1).

*Psionic Aegis is the Warden's defining ability — and its defining cost. Every time you protect someone, you hurt yourself. Not much at first, but it accumulates. A Warden who uses Aegis three times in a fight has absorbed significant psychic damage AND gained +3 Focus. The math is brutal by design: the more you protect, the closer you get to losing control.*

**Force Armor** (1 Action, +1 Focus, Concentration)
You encase yourself or a willing creature within **30 feet** in a shimmering shell of psionic force. The target gains **+2 to Defense Value** and **resistance to force damage** for up to **1 minute** (concentration).

At **Heightened Focus or above**, Force Armor also grants **resistance to psychic damage**. This represents the Warden's shield hardening as their power escalates — more Focus means more dangerous, but also more protective.

Force Armor is visible — a faint shimmer in the air around the protected creature, like heat haze. It does not impede movement, speech, or the target's own attacks.

*Force Armor is your sustained protection ability — less reactive than Aegis, more efficient for long fights. The +2 DV stacks with regular armor, making a Vanguard Warrior with Force Armor nearly untouchable. Use it on your team's frontliner and let them draw fire while you manage your Focus from the back.*

#### Level 8 Features

**Psionic Ward** (1 Action, +2 Focus, Concentration)
You project a sustained psionic barrier in a **15-foot radius** centered on yourself. The ward lasts up to **1 minute** (concentration) and moves with you.

While inside the ward:
- All allies gain **+1 to all saving throws** — the ward reinforces their mental and physical resilience
- **Hostile psionic and magical effects** that would enter or target creatures inside the ward must overcome your **Will save DC** (8 + proficiency + WIS modifier) or be **blocked entirely**. This includes incoming spells, psionic attacks, and magical effects. The ward does not block physical attacks, projectiles, or non-magical effects.
- The ward is visible — a faint dome of shimmering force with occasional sparking at its boundary

Psionic Ward replaces your concentration on Force Armor if you had it active — you can't maintain both simultaneously. The ward does not block allies' own spells or abilities from leaving the ward.

*Psionic Ward is the Warden's group defense ability. The +1 to all saves is modest but universal, and the spell/psionic blocking can negate powerful enemy abilities entirely. Position yourself carefully — the 15-foot radius means you need to be near your allies, which puts a d6 hit die Psion closer to the front line than they might prefer.*

**Backlash Redirect** (Reaction, 1/Short Rest)
When you would suffer **Psionic Backlash**, you can channel the explosive discharge instead of letting it detonate uncontrolled. Instead of dealing 2d6 psychic damage to all creatures within 15 feet (which would hit your allies), you direct **all Backlash damage** — both the self-damage (3d6) and the AoE damage (2d6), combined into **5d6 psychic damage** — at a **single enemy within 30 feet**. You do not take the normal 3d6 Backlash self-damage — it is redirected along with the AoE damage.

The target makes a **Reflex save** (DC 8 + proficiency + WIS modifier) for half damage.

You are still **stunned until the end of your next turn** (Backlash is still Backlash — your neural pathways still overload), and your Focus still resets to 0. But instead of harming your allies in the blast, you weaponize the explosion.

*Backlash Redirect is the Warden's signature — they take the worst thing about being a Psion and turn it into a weapon. Other Psions fear Backlash. Wardens plan for it. A Warden who deliberately pushes into Backlash, redirects the damage at a priority target, and then Overcharges back into combat is terrifying and self-destructive in equal measure.*

If you have multiple abilities that modify Psionic Backlash (such as the Ascendant mastery path's Backlash Channeling), you choose which one to apply when Backlash triggers. You cannot apply more than one modifier to the same Backlash event.

#### Level 10 Capstone Ability

**Psionic Fortress** (1/Long Rest, 2 Actions, Concentration, +3 Focus)

You project everything you have into a single, devastating act of protection. A dome of solid psionic force springs into being around you — a **20-foot radius** fortress of shimmering, crackling energy centered on your position. The fortress lasts up to **1 minute** (concentration).

While the Psionic Fortress is active:
- All allies inside gain **resistance to all damage** — your psionic field absorbs and redistributes the energy of every incoming attack
- Hostile creatures that **enter the fortress** take **2d8 force damage** (no save — the boundary burns)
- The fortress is immobile — it is anchored to the point where you activated it. You can move within it but the boundary does not follow you if you leave. If you exit the fortress, it collapses.

**The Cost:**
- The fortress generates **+2 Focus per round** it is maintained (in addition to +3 on activation). This pushes toward Backlash with terrifying speed.
- Any damage dealt to allies inside the fortress is **also dealt to you as psychic damage**. If a party member takes 15 points of fire damage (reduced to 8 by resistance), you take 8 psychic damage. This is the fortress's secret: it doesn't create protection from nothing. It routes all damage through you.
- When the fortress ends (by any means — duration, concentration break, or choice), you take **2d6 psychic damage** and gain **1 level of exhaustion**.

> **Fortress Math (Level 10, MIG 16, WIS 18):**
> - Backlash Threshold: 13
> - Activation: +3 Focus (Focus 3, Calm)
> - Round 2: +2 Focus (5, Heightened). All allies have resistance. You absorb their damage.
> - Round 3: +2 Focus (7, Strained! Self-damage starts). Centering needed soon.
> - Round 4: Center (-1d6, avg 3.5 → Focus ~5). Safe for another round.
> - Round 5: +2 Focus (7, Strained again). Another Center or face Backlash.
> - Sustainable for ~5-6 rounds with careful Centering, but every round of Centering is a round you're not using other abilities.
> - If the Warden hits Backlash inside the fortress, the fortress collapses AND the Backlash fires. Allies lose protection and the Warden is stunned. Devastating failure state.

*Psionic Fortress is the Warden's ultimate expression — and their most likely cause of death. You become the team's shield, but that shield is you. Every hit that bounces off your allies resonates through your skull. The Focus climbs. The nosebleed becomes a torrent. Your vision narrows. And you hold it — for them — for as long as you can.*

*"Get behind me. All of you. Get behind me and don't move."*

> **GM Guidance:** Psionic Fortress should be a dramatic, possibly tragic moment. The Warden is visibly suffering — nose bleeding, eyes glowing painfully bright, hands trembling. Every hit that bounces off an ally makes the Warden flinch. The party can see their protector dying to keep them alive. This is the Warden's design intent: the Psion who uses the most terrifying power in the game — not to destroy, but to protect, at the cost of themselves.
