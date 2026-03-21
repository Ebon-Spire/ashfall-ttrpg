---
game_data: true
name: Gunslinger
primary_stats: [AGI, WIS]
hit_die: d8
hp_base: 10
hp_per_level: 5
starting_humanity: 10
armor_proficiency: [Light]
weapon_proficiency: [All ranged, Simple melee]
save_proficiencies: [Reflex, Will]
skill_bonuses:
  - {skill: Perception, bonus: 2}
  - {skill: Stealth, bonus: 2}
starting_cp: 15
role: Ranged DPS
magic_type: "None (15 CP/cantrip)"
level_1_features: [Steady Aim, Quick Draw, Lethal Precision]
skill_trees:
  - name: Marksmanship
    focus: Precision
    abilities:
      - {name: Long Shot, cp_cost: 5, tier: 1, effect: "Double weapon range"}
      - {name: "Sniper's Focus", cp_cost: 10, tier: 2, effect: "+2 ranged if stationary"}
      - {name: "One Shot One Kill", cp_cost: 15, tier: 3, effect: "Max damage 1/SR"}
  - name: Gunsmith
    focus: Customization
    abilities:
      - {name: Field Maintenance, cp_cost: 5, tier: 1, effect: "Repair firearms in 10 min"}
      - {name: Custom Modifications, cp_cost: 10, tier: 2, effect: "+1 damage, +1 mod"}
      - {name: Masterwork Weapon, cp_cost: 15, tier: 3, effect: "+1d6 damage, no jams"}
  - name: Skirmisher
    focus: Mobility
    abilities:
      - {name: Evasive Maneuvers, cp_cost: 5, tier: 1, effect: "Ignore difficult terrain, no OA"}
      - {name: Combat Roll, cp_cost: 10, tier: 2, effect: "Move + attack 1/SR"}
      - {name: Hit and Run, cp_cost: 15, tier: 3, effect: "15ft free move after attack"}
features:
  - name: Steady Aim
    level: 1
    action: "1 Action"
    frequency: At-Will
    description: "Next ranged attack this turn has advantage. Cannot use if moved more than 10 ft this turn."
  - name: Quick Draw
    level: 1
    action: Passive
    frequency: Always
    description: "Drawing/stowing ranged weapons is a free action. +2 to initiative rolls."
  - name: Lethal Precision
    level: 1
    action: Passive
    frequency: Always
    description: "Add AGI modifier to ranged weapon damage rolls. Overrides normal ranged damage rules."
  - name: Called Shot
    level: 2
    action: "2 Actions"
    frequency: At-Will
    description: "Make a ranged attack at -5 to hit. Choose a body location for bonus effect."
    choices:
      - {name: Head, effect: "Deal additional +2d6 damage"}
      - {name: Legs, effect: "Target movement halved until end of their next turn"}
      - {name: Arms, effect: "DC 15 FORT save or target drops one held item"}
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
  - name: Dead Eye
    level: 5
    action: "Declare before attack"
    frequency: "1/Short Rest"
    description: "If attack hits, it automatically crits. If it misses, the use is wasted. At L10 usable twice per short rest."
specialization_details:
  - name: Sharpshooter
    role: Range/Precision
    features:
      - {name: Extended Range, level: 6, action: Passive, description: "Double all ranged weapon ranges. No disadvantage at long range."}
      - {name: Precision Shot, level: 6, action: "Free Action (Mark)", description: "Mark one creature as priority target (free action, any range, line of sight required). Your ranged attacks against the marked creature deal +1d6 damage. Only one mark active at a time. Lasts until marked creature dies or you mark another."}
      - {name: Kill Shot, level: 8, action: "3 Actions", description: "+3d6 damage. Ignores cover except total cover."}
      - {name: Spotter, level: 8, action: Cooperative, description: "Ally uses action to spot. Your next ranged attack gains +2 hit and +1d6 damage. Ally must be within 30 ft."}
      - {name: One in a Million, level: 10, action: "1 Action", description: "1/Long Rest. Auto-hit, auto-crit. Target DC 18 FORT save. Fail with 50 or fewer HP: reduced to 0 HP. Success: take crit damage normally."}
  - name: Demolitionist
    role: Explosives/Area
    features:
      - {name: Explosives Expert, level: 6, action: "Short Rest craft", description: "Craft explosives (carry INT mod). Throw 30 ft, 15 ft radius, 3d6 fire or force. Reflex save DC 8+INT+prof for half."}
      - {name: Blast Resistance, level: 6, action: Passive, description: "Resistance to fire and force damage from explosions (including your own)."}
      - {name: Shaped Charge, level: 8, action: Passive, description: "Shape explosives as 30 ft cone or 5x60 ft line instead of 15 ft radius."}
      - {name: Trap Setter, level: 8, action: "1 minute setup", description: "Set explosive as trap in 5 ft square. Same damage. Failed save also knocks prone. Max INT mod active traps."}
      - {name: Grand Detonation, level: 10, action: "1 minute prep", description: "1/Long Rest. 30 ft radius, 8d6 fire+force. DC 18 Reflex half. Failed: prone + deafened 1 min. Double damage to structures."}
  - name: Trick Shot
    role: Versatility/Mobility
    features:
      - {name: "Gunslinger's Flourish", level: 6, action: Passive, description: "When hitting with ranged attack, move up to 10 ft without provoking OA."}
      - {name: Ricochet, level: 6, action: "1/Turn", description: "When missing a ranged attack, ricochet to different target within 15 ft. New attack at -2 to hit."}
      - {name: Gun-Fu, level: 8, action: Passive, description: "Ranged attacks within 15 ft don't provoke OA. +1d6 damage per hit within 15 ft."}
      - {name: Run and Gun, level: 8, action: Passive, description: "Move 10 ft after any ranged attack (no OA from that target). +2 to hit when switching targets."}
      - {name: Bullet Time, level: 10, action: "Start of Turn", description: "1/Long Rest. Gain 2 additional actions (ranged attacks or movement only — each grants exactly 1 ranged attack, not triggering Extra Attack). All attacks against you have disadvantage until start of next turn."}
specializations: [Sharpshooter, Demolitionist, Trick Shot]
starting_equipment:
  - Rifle or two sidearms
  - Light armor
  - 30 rounds ammunition
  - Cleaning kit and binoculars
---
# Gunslinger

> **Recommended Build Guide — Classless System**
> This file describes the **Gunslinger recommended build**: a curated path through Ashfall's shared skill trees designed for this build's core fantasy. Under the current rules, you are **not locked to this build**. Choose a **chassis** for your starting stats and proficiencies, then spend **Character Points (CP)** in any skill trees that match your character concept.
>
> - **Chassis selection and starting stats:** see [Chassis](../chassis.md)
> - **CP economy, spending rules, and milestones:** see [Character Points](../character-points.md)
> - **Full skill tree catalog:** see [Skill Trees](../skill-trees.md)
>
> The ability descriptions, skill tree layouts, and feature details in this file remain the authoritative rules reference for those abilities. The CP values listed in the skill trees are the costs for purchasing abilities.

*The Wasteland is a shooting gallery, and you're the best shot in it. While others fumble with rusty rifles or spray-and-pray with automatics, you make every bullet count. You've learned to read wind, distance, and target behavior in the split-second before you pull the trigger. In a world where ammunition is precious and mistakes are fatal, you are precision incarnate.*

*You are the Gunslinger. Whether you're perched on a rooftop picking off raiders or dancing through cover in a close-quarters firefight, your weapon is an extension of your will. You don't miss. You don't hesitate. You don't need a second shot — but you'll take it anyway, just to be sure.*

![A gunslinger perched on a rooftop, rifle aimed across the wasteland ruins](/images/illustrations/gunslinger-rooftop.png)

---

## Base Build (Levels 1-5)

### Core Stats

| Attribute | Value |
|-----------|-------|
| **Primary Attributes** | Agility (AGI), Wisdom (WIS) |
| **Hit Die** | d8 |
| **HP at Level 1** | 10 + END modifier |
| **HP per Level** | 1d8 (or 5) + END modifier |
| **Starting Humanity** | 10 |
| **Armor Proficiency** | Light armor |
| **Weapon Proficiency** | All ranged weapons, simple melee weapons |
| **Save Proficiencies** | Reflex, Will |
| **Skill Bonuses** | Perception +2, Stealth +2 |
| **Starting CP** | 15 |

### Starting Equipment

- Rifle or two sidearms
- Light armor
- 30 rounds ammunition
- Cleaning kit and binoculars

### Level Progression (1-5)

#### Level 1: Steady Aim & Quick Draw

- **Steady Aim (1 Action, At-Will):** You take careful aim at a target. Your next ranged attack this turn has **advantage**. You cannot use this ability if you've moved more than 10 feet this turn.

- **Quick Draw (Passive & Initiative Bonus):** Drawing or stowing a ranged weapon is a **free action** for you. Additionally, you gain **+2 to initiative rolls**.

- **Lethal Precision (Passive):** You add your **AGI modifier to ranged weapon damage rolls**. This represents your ability to place shots exactly where they do the most harm. (Normal ranged damage rules say no attribute modifier; Lethal Precision overrides that.)

#### Level 2: Called Shot

**Called Shot (2 Actions, At-Will):** Make a ranged attack with **-5 to the attack roll**. If you hit, choose one of the following effects:

- **Head:** Deal an additional **+2d6 damage**.
- **Legs:** Target's movement speed is halved until the end of their next turn.
- **Arms:** Target must make a **DC 15 Fortitude save** or drop one held item of your choice.

#### Level 3: Extra Attack

**Extra Attack:** When you use 1 action to Strike, you make two attacks instead of one. The second attack does not incur the multiple attack penalty. If you use additional actions to Strike, those follow the normal multiple attack penalty (-3 for the second Strike action, -6 for the third, etc.). Extra Attack can only trigger once per turn.

#### Level 4: Attribute Improvement

Increase one attribute by +2, or two attributes by +1 each (maximum 20 before modifiers).

#### Level 5 Capstone: Dead Eye

**Dead Eye (1/Short Rest, Declare Before Attack Roll):** Before making a ranged attack roll, you can declare **Dead Eye**. If the attack hits, it is automatically a **critical hit**. If the attack misses, this use is wasted.

At Level 10, Dead Eye recharges on a short rest and can be used twice per short rest.

### Skill Trees

Gunslingers have access to three skill trees:

#### Marksmanship (Precision & Range)

- **Long Shot (5 CP):** Double the normal and long range of your ranged weapons.
- **Sniper's Focus (10 CP, Requires Long Shot):** If you don't move on your turn, gain +2 to ranged attack rolls until the start of your next turn.
- **One Shot, One Kill (15 CP, Requires Sniper's Focus):** Once per short rest, deal maximum damage on a ranged attack (no roll required).

#### Gunsmith (Weapon Customization)

- **Field Maintenance (5 CP):** You can repair a damaged firearm in 10 minutes using scrap materials.
- **Custom Modifications (10 CP, Requires Field Maintenance):** Choose one ranged weapon. It gains +1 to damage rolls and one of the following: +10 ft range, +1 to crit range (19-20), or reloading costs 0 actions.
- **Masterwork Weapon (15 CP, Requires Custom Modifications):** Your customized weapon becomes a signature piece, dealing +1d6 damage and never jamming.

> **Gunsmith and Weapon Modifications:** Gunsmiths have a unique professional relationship with the modification system (see **Equipment — Weapon Modifications**). Gunsmiths install or remove modifications in half the normal time, automatically identify found modifications without a check, and can fabricate any Tier 1 modification from scrap in 1 hour without a workshop. See **Equipment — Gunsmith Synergy** for the complete rules.

#### Skirmisher (Mobility & Tactics)

- **Evasive Maneuvers (5 CP):** Moving through difficult terrain doesn't cost extra movement, and you don't provoke opportunity attacks when moving out of an enemy's reach.
- **Combat Roll (10 CP, 1 Action, 1/Short Rest):** Move up to your speed without provoking opportunity attacks. You can make one ranged attack at any point during this movement.
- **Hit and Run (15 CP, Requires Combat Roll):** After making a ranged attack, you can immediately move up to 15 feet as a free action.

### Magic Relationship

Gunslingers have **no innate magical ability**. However, they can learn cantrips by spending **15 CP per cantrip**. Cantrips use the Gunslinger's Wisdom modifier for attack rolls and save DCs. Gunslingers cannot learn leveled spells unless they multiclass or take a specific Mastery Path.

---

## Advanced Specializations (Levels 6-10)

Gunslingers who reach level 6 have proven their skill with firearms. Now they specialize: becoming patient snipers as Sharpshooters, explosive Demolitionists, or flashy Trick Shot artists who never stop moving.

**System Notes:**
- All characters gain 10 CP per level from levels 6-10
- Short rest: 8 hours
- Long rest: 1 week
- Bounded accuracy: maximum total bonus of +18
- 3-action economy per turn

### Sharpshooter (Range/Precision)

*Patient, calculated, and deadly at extreme range. The Sharpshooter is a master of precision — every shot is measured, every breath controlled. One shot, one kill.*

**Prerequisites:** Level 6, Gunslinger build

**New Skill Tree Unlocked:** Precision (range extension, critical hits at distance, called shots, armor penetration)

#### Level 6 Features

**Extended Range** (Passive)
You double the effective range of all ranged weapons you use. Additionally, you no longer have disadvantage when attacking at long range.

*Example: A rifle with 150 ft normal range / 600 ft long range becomes 300 ft normal / 1200 ft long — and you shoot at 1200 ft without disadvantage.*

**Precision Shot** (Free Action — Mark Target)
As a free action at any point on your turn, you can **mark one creature** as your priority target. You must have line of sight to the target when you mark them; range is unlimited.

While a creature is marked, all of your ranged attacks against that creature deal an additional **+1d6 damage**.

**Mark rules:**
- You can only have **one marked target** at a time. Marking a new target immediately removes the mark from the previous one.
- The mark lasts until the marked creature dies or you mark a new target.
- You can change your mark once per turn as a free action.
- The +1d6 applies to all ranged attacks against the marked target, including Called Shots, Ricochet, and attacks augmented by Dead Eye.

*This is the Sharpshooter's defining tactical decision each combat: which target is worth sustained focus? Mark the highest-priority threat and hunt them down, or shift marks as the battlefield evolves. Unlike the old Precision Shot (which depended on enemies standing still), the mark triggers reliably and creates genuine moment-to-moment choice.*

*Example: You're fighting three enemies — a sniper in cover, a charging brawler, and a medic healing in the rear. Your mark sits on the medic. Every attack against them gets +1d6, burning them down before their heals become a problem. When the brawler reaches your ally, you shift the mark — free action — and redirect your focus.*

#### Level 8 Features

**Kill Shot** (3 Actions)
You can spend all 3 of your actions on a single, devastating ranged attack. This special attack gains:
- **+3d6 damage** (in addition to normal damage and any other bonuses)
- **Ignores cover** (short of total cover)

This represents taking careful aim and delivering a shot designed to kill.

**Spotter** (Cooperative Feature)
If an ally uses their action to spot for you (calling out range, wind, target movement), your next ranged attack before the end of your next turn gains:
- **+2 to hit**
- **+1d6 damage**

This requires the ally to be within 30 feet of you and be able to see the target.

#### Level 10 Capstone Ability

**One in a Million** (1/Long Rest)
Once per long rest, you can make an impossible shot. Make a single ranged weapon attack that:
- **Automatically hits** regardless of the target's Defense Value
- **Automatically crits** (multiply damage dice)
- Forces the target to make a **DC 18 Fortitude save**

On a failed save, if the target has **50 or fewer current hit points**, they are reduced to **0 HP**. On a success, they take the critical damage normally.

This represents a shot through the eye slit, the weak point in armor, or the critical system in a machine — the kind of shot that ends battles.

### Precision Skill Tree

The Precision tree rewards the Sharpshooter's core fantasy: deliberate, devastating single shots at range. Each tier unlocks a new decision layer rather than simply adding damage.

**Tier 1 Abilities (5 CP each)**

- **Armor Piercing Rounds (5 CP):** Your ranged attacks ignore up to **3 points of damage reduction** from armor. You load purpose-crafted ammunition — tungsten-tipped, hardened, designed for precision penetration rather than raw force.

- **Windage Correction (5 CP):** You calculate for wind direction, rainfall, humidity, and obscuring smoke automatically. Environmental conditions (strong wind, heavy rain, smoke, fog) never impose disadvantage on your ranged attack rolls.

**Tier 2 Abilities (10 CP each, requires one Tier 1 ability)**

- **Vital Strike (10 CP, Requires Armor Piercing Rounds):** Your Called Shot attack penalty is reduced from **-5 to -2**. Additionally, Head Called Shots deal **+3d6 damage** (increased from +2d6). You know where to aim.

- **Pinning Shot (10 CP, Requires Windage Correction):** When you miss a ranged attack intentionally (you must declare this before rolling), the target must make a **Reflex save (DC = 8 + your AGI modifier + your proficiency bonus)**. On a failure, they cannot willingly move closer to you until the start of their next turn. On a success, they are unaffected. Use this to control enemy positioning without wasting a hit.

**Tier 3 Abilities (15 CP each, requires one Tier 2 ability)**

- **Execution Distance (15 CP, Requires Vital Strike):** When you score a critical hit at **your weapon's normal range or beyond**, all bonus damage dice increase by one die size (d6 → d8, d8 → d10, d10 → d12). Additionally, your critical hit range expands to **19-20** (instead of 20 only). This critical range improvement is cumulative with other crit range expansions — each additional source of crit range expansion decreases your threshold by 1 (two 19-20 expansions → 18-20).

- **Zero Movement (15 CP, Requires Pinning Shot):** Once per short rest, as a free action at the start of your turn, declare **Zero Movement**. Until the start of your next turn: if you do not move for any reason, all your ranged attacks ignore **all damage reduction** from armor, deal **+2d6 bonus damage**, and ignore partial cover and heavy cover. Zero Movement ends immediately if you move — including free movement from Gunslinger's Flourish or similar effects.

---

### Demolitionist (Explosives/Area Damage)

*If it's not on fire, you're not trying hard enough. The Demolitionist is a master of explosives, area denial, and creative destruction. Where others see a locked door, they see an opportunity to practice their craft.*

**Prerequisites:** Level 6, Gunslinger build

**New Skill Tree Unlocked:** Demolitions (explosives crafting, area control, structural demolition, incendiary devices)

#### Level 6 Features

**Explosives Expert** (Crafting)
During a short rest, you can craft grenades and other explosives from scavenged materials. Each explosive you create has the following properties:
- **Range:** Can be thrown 30 feet (requires Athletics check for longer distances)
- **Area:** 15-foot radius
- **Damage:** 3d6 fire or force damage (your choice when crafting)
- **Save:** Reflex save DC = 8 + your INT modifier + your proficiency bonus
- **Effect:** Half damage on a successful save

You can carry a number of explosives equal to your Intellect (INT) modifier (minimum 1). Unused explosives become inert after your next short rest.

**Blast Resistance** (Passive)
You have **resistance to fire and force damage** from explosions, including your own. Years of working with explosives have taught you how to shield yourself at the last moment.

#### Level 8 Features

**Shaped Charge** (Passive Enhancement)
Your explosives crafting has improved. When you create or throw an explosive, you can shape it to affect a different area:
- **Cone:** 30-foot cone (instead of 15-foot radius)
- **Line:** 5 feet wide, 60 feet long (instead of 15-foot radius)

This uses the same damage and save DC as your normal explosives.

**Trap Setter** (Setup Action)
You can spend 1 minute setting an explosive trap. The trap:
- Triggers when any creature enters a designated 5-foot square
- Deals damage as per your Explosives Expert feature
- Knocks targets **prone** on a failed save (in addition to damage)
- Remains set until triggered or until you disarm it (1 action)

You can have a number of active traps equal to your INT modifier.

#### Level 10 Capstone Ability

**Grand Detonation** (1/Long Rest)
Once per long rest, you can spend 1 minute preparing a massive explosive device. When detonated:
- **Area:** 30-foot radius
- **Damage:** 8d6 fire and force damage
- **Save:** DC 18 Reflex save for half damage
- **Effects:**
  - Structures and objects take **double damage**
  - Failed save: target is knocked **prone** and **deafened** for 1 minute
  - Creates **difficult terrain** in the area for 10 minutes

This represents a truly devastating explosion — the kind that brings down buildings and ends sieges.

### Demolitions Skill Tree

The Demolitions tree rewards terrain control, creative force application, and engineering cunning. The goal is never just damage — it's making the battlefield itself work for you.

**Tier 1 Abilities (5 CP each)**

- **Improved Fuse (5 CP):** You can set a **countdown timer** on any explosive you craft (1 round to 1 minute delay). You can also trigger your timered devices remotely as a **free action** at any point within 60 feet. Explosives that weren't thrown can be set with a timer without throwing — useful for rigged rooms, escape routes, and ambush preparation.

- **Concussive Charge (5 CP):** You can craft a crowd-control explosive variant during a short rest (uses one of your Explosives Expert capacity slots). Concussive Charges deal **no damage**, but all targets in the area must make a **Fortitude save (DC = 8 + INT modifier + proficiency)**. On a failure, targets are knocked **prone** and **Deafened** for 1 minute. On a success, they are unaffected. Excellent for suppressing groups without spending lethal resources.

**Tier 2 Abilities (10 CP each, requires one Tier 1 ability)**

- **Wall Breach (10 CP, Requires Improved Fuse):** Your explosives deal **double damage** to structures, barriers, and vehicles. When your explosive destroys or opens a section of wall or barrier, it creates a **5-foot breach** — a gap that removes all cover from that section. Sealed rooms and fortified positions are an invitation.

- **Minefield (10 CP, Requires Concussive Charge):** You can spend 1 minute to plant up to **3 pressure-plate mines** in separate 5-foot squares. Each mine triggers when any creature enters its square; you can designate creatures to exclude when setting each mine. Mine damage equals your Explosives Expert feature. Active mines count against the same limit as Trap Setter mines — the total number of active traps (from all sources) cannot exceed your INT modifier.

**Tier 3 Abilities (15 CP each, requires one Tier 2 ability)**

- **Napalm Charge (15 CP, Requires Wall Breach):** You can craft **incendiary explosives** (fire damage only, uses an Explosives Expert capacity slot). The detonation area becomes a **burning zone for 3 rounds**: any creature that starts its turn in or enters the zone takes **2d6 fire damage** (Reflex save for half, same DC as your Explosives Expert). The burning zone can ignite flammable objects and structures. You are immune to your own napalm fires.

- **Remote Detonator (15 CP, Requires Minefield):** You craft your explosives with integrated wireless detonators. Any of your mines, traps, or timered explosives within **300 feet** can be triggered as a **free action** rather than waiting for a timer or pressure trigger. You choose exactly which device fires. Additionally, as a free action, you can perform a **false trigger** (press the detonator without firing): creatures who see you do this must succeed on a **Will save (DC = 8 + INT modifier + proficiency bonus)** or must use their reaction to take cover (they may not continue any movement they were taking this round). On a success, they are unaffected.

---

### Trick Shot (Versatility/Mobility)

*Flashy, unpredictable, and always moving. The Trick Shot specialist embodies the gunslinger aesthetic — dual-wielding pistols, ricocheting bullets off surfaces, shooting while diving through windows. Style is just as important as substance.*

**Prerequisites:** Level 6, Gunslinger build

**New Skill Tree Unlocked:** Gun Fu (mobility, dual wielding, close-range firearms, acrobatic shooting)

#### Level 6 Features

**Gunslinger's Flourish** (Passive)
When you hit a creature with a ranged attack, you can immediately move up to 10 feet without provoking opportunity attacks.

This represents the constant motion and repositioning that defines your combat style.

**Ricochet** (1/Turn)
Once per turn, when you miss with a ranged attack, you can attempt to ricochet the shot to another target. Choose a different creature within 15 feet of the original target and make a new attack roll at **-2 to hit**.

On a hit, the ricochet deals normal damage.

#### Level 8 Features

**Gun-Fu** (Passive)

Your shooting style is built for close quarters — you weave between enemies, firing at point-blank range where others would draw a blade. You've trained to shoot in the spaces between heartbeats, turning proximity into an advantage rather than a liability.

- Your ranged attacks against targets **within 15 feet** do not provoke opportunity attacks
- When you hit a creature within **15 feet** with a ranged attack, deal an additional **+1d6 damage** of the weapon's damage type
- This bonus damage applies once per attack roll (not once per turn — it rewards multiple close-range attacks across your 3-action turn)

> *"Most gunslingers learn to keep their distance. Trick Shots learn to close it. When you're inside arm's reach, your bullets arrive before the sound does."*

**Run and Gun** (Passive)

You never stop moving. Each shot is a pivot, each reload a sidestep. Enemies who try to track you find you've already moved on to their flank — or their friend.

- After you make a ranged attack against a creature, you can immediately move up to **10 feet** without provoking opportunity attacks from **that creature**. This movement is separate from Gunslinger's Flourish (which triggers on hits; Run and Gun triggers on any attack, hit or miss).
- If you attack a **different target** than your previous ranged attack this turn, you gain **+2 to the attack roll** against the new target. This bonus resets at the start of each turn.

> *"One target, one bullet, one step. Then the next. And the next. By the time they figure out who you're aiming at, you're already aiming at someone else."*

**Stacking with Gunslinger's Flourish:** Run and Gun and Gunslinger's Flourish both grant free movement after ranged attacks, but they trigger differently and **stack**:
- **Gunslinger's Flourish** (L6) — triggers on a **hit**: 10 ft movement, no OA
- **Run and Gun** (L8) — triggers on **any ranged attack** (hit or miss): 10 ft movement, no OA from that target

On a turn where you hit a creature, **both trigger**: Gunslinger's Flourish gives 10 ft from the hit, Run and Gun gives 10 ft from the attack itself. Total: **20 ft of free movement** after a single hit. The movement from each can be taken separately or combined.

*Example: You hit an enemy within 15 ft. Gunslinger's Flourish triggers (10 ft, no OA). Run and Gun also triggers (10 ft, no OA from that target). You can use both: step 10 ft left, shoot again, step another 10 ft right. Or take all 20 ft at once after the attack. Gun-Fu's close-range bonus still applies if your next shot lands within 15 ft.*

#### Level 10 Capstone Ability

**Bullet Time** (1/Long Rest)
Once per long rest, you can activate Bullet Time at the start of your turn. For 1 round (until the start of your next turn):
- You gain **2 additional actions** that can only be used for ranged attacks or movement
- All attack rolls against you have **disadvantage**

**Extra Attack and Bullet Time:** The 2 additional actions granted by Bullet Time each produce **exactly 1 ranged attack** — they do not trigger Extra Attack. These are single precise shots in your hyper-focused state, not full Strike actions. Your normal 3 actions still trigger Extra Attack as usual.

This represents entering a state of hyper-focus where time seems to slow down — you're moving, shooting, and dodging faster than enemies can track.

*Corrected Example: With Level 3+ Extra Attack, your normal 3 Strike actions give you up to 6 ranged attacks (2 per action). Bullet Time adds 2 more actions, each producing 1 ranged attack (no Extra Attack). Total: **8 ranged attacks** in one turn — or fewer if you use some actions for movement. All 8 attacks benefit from the disadvantage-on-attackers defense while Bullet Time is active.*

*You could also use both bonus actions for movement, giving you 3 Strike actions (6 attacks) plus additional repositioning to line up better shots.*

### Gun Fu Skill Tree

The Gun Fu tree rewards constant motion and spreading damage across multiple targets. Every ability either expands your movement options, adds another attack vector, or creates defensive counterplay. You are never where the enemy expects you to be.

**Tier 1 Abilities (5 CP each)**

- **Dual Draw (5 CP):** You can wield **two pistols simultaneously**. Once per turn when you hit with a ranged attack, you can make one additional **offhand pistol attack** against the same or a different target within range as a **free action**. **This free action cost overrides the standard Two-Weapon Fighting action cost (which would otherwise be 1 action) — Dual Draw is the exception that grants the bonus attack for free.** The offhand attack deals the pistol's base damage die only — no AGI modifier, no other bonuses. This can trigger Ricochet (on a miss) and Gunslinger's Flourish (on a hit) normally.

- **Slide (5 CP):** Once per round, when you make a ranged attack (hit or miss), you can simultaneously move up to **5 feet** as a **free action** without provoking opportunity attacks. This is separate from Gunslinger's Flourish movement and Run and Gun movement — all three can apply to the same turn.

**Tier 2 Abilities (10 CP each, requires one Tier 1 ability)**

- **Fan the Hammer (10 CP, Requires Dual Draw):** Once per short rest, spend **1 action** to fan your weapon rapidly, making **one ranged attack against each of up to 3 different targets** within 15 feet. Each attack is made at **-2 to hit**. Gunslinger's Flourish (10 ft on hit) and Run and Gun (+2 to hit vs new targets) both apply normally to this action's attacks — note that Run and Gun's +2 bonus to switching targets can offset the -2 penalty starting with your second target.

- **Deflect and Return (10 CP, Requires Slide):** When a creature targets you with a **melee attack**, you can use your **reaction** to impose **disadvantage** on that attack roll as you sidestep and level your weapon. If the attack misses, you may immediately make one ranged attack at **-2 to hit** against that creature as part of the same reaction. This represents catching them mid-swing and capitalizing on their overextension.

**Tier 3 Abilities (15 CP each, requires one Tier 2 ability)**

- **Combat Instinct (15 CP, Requires Fan the Hammer):** When you are hit by an attack that you can see, you can use your **reaction** to **halve the damage** from that attack. The damage reduction applies after all modifiers and resistances are calculated. You cannot use this reaction if you already used your reaction this round.

- **Cyclone (15 CP, Requires Deflect and Return):** Once per short rest, as **1 action**, declare Cyclone. Make one ranged attack against every creature within 15 feet (maximum number of attacks equals your AGI modifier, minimum 2). Each attack is made at **-2 to hit**. Run and Gun (10 ft free movement after each attack) triggers for each attack that hits, letting you distribute up to 10 ft of free movement per hit throughout the action.

  > *Example: Cyclone with AGI +4 targets up to 4 creatures within 15 ft. You hit 3 of them: Run and Gun gives 30 ft of free movement across the action (10 ft per hit). You can spread that movement between attacks, rotating around the group. All movement from Cyclone is free-action movement that does not provoke opportunity attacks from targets you've already attacked this turn.*

![An insectoid gunslinger takes aim with alien precision](/images/illustrations/insectoid-gunslinger.png)

---

## Level 16: Dead Eye's Focus

Your ranged attacks ignore all cover — partial, heavy, and total. You can shoot through gaps others can't see. Your critical hit range with ranged weapons expands by 1 (stacks with other sources). When you roll Initiative, your first ranged attack on your first turn automatically hits (you still roll to determine if it's a critical).

## Level 17: Specialization Final Evolution

### Sharpshooter — Bullet Time

Once per round, when you make a ranged attack, you can declare it a **Perfect Shot**. The attack ignores damage resistance, treats the target's DV as 10 (regardless of actual DV), and deals maximum weapon damage (no roll). You can use Perfect Shot a number of times per short rest equal to your AGI modifier (minimum 1).

### Trick Shot — Impossible Angles

Your ranged attacks can ricochet off surfaces to hit targets around corners, behind full cover, or in adjacent rooms (as long as there is a reflective or hard surface within 60 ft of the target). Targets hit by ricochets are **Flat-Footed** against the attack. Once per round, you can split a single ranged attack into two attacks at different targets (each deals half damage, rounded up).

### Demolitionist — Scorched Earth

Your explosive attacks affect an area 50% larger (round up). When you deal damage to an area, each creature in the area that fails its save also gains the **Burning** condition (1d6 fire damage per round, END save DC = your attack DC to end). Explosive traps you set detonate with advantage on the attack roll.

---

## Level 20 Apex Ability: Last Round Standing

**1/Long Rest — Deadman's Volley (1 minute):** Time slows around you. Each ranged attack you make targets **every enemy within a 30-ft cone** originating from you (or within 10 ft of your primary target, your choice). Each enemy in the area takes the full attack damage individually (roll once, apply to all). All ranged attacks during this time have **advantage**. You cannot be targeted by opportunity attacks. At the end, gain 2 exhaustion and your weapons jam (require 1 action each to clear).

You still have **3 actions** per turn. The difference is that each shot hits every enemy in range — you're not getting more turns, you're making each bullet count for the whole battlefield.

**Permanent Passive — Never Miss Twice:** When you miss a ranged attack against a target, your next ranged attack against that same target gains **+3 to hit**. This bonus resets after you hit or change targets.
