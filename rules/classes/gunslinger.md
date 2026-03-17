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
starting_ap: 15
role: Ranged DPS
magic_type: "None (15 AP/cantrip)"
level_1_features: [Steady Aim, Quick Draw, Lethal Precision]
skill_trees:
  - name: Marksmanship
    focus: Precision
    abilities:
      - {name: Long Shot, ap_cost: 5, tier: 1, effect: "Double weapon range"}
      - {name: "Sniper's Focus", ap_cost: 10, tier: 2, effect: "+2 ranged if stationary"}
      - {name: "One Shot One Kill", ap_cost: 15, tier: 3, effect: "Max damage 1/SR"}
  - name: Gunsmith
    focus: Customization
    abilities:
      - {name: Field Maintenance, ap_cost: 5, tier: 1, effect: "Repair firearms in 10 min"}
      - {name: Custom Modifications, ap_cost: 10, tier: 2, effect: "+1 damage, +1 mod"}
      - {name: Masterwork Weapon, ap_cost: 15, tier: 3, effect: "+1d6 damage, no jams"}
  - name: Skirmisher
    focus: Mobility
    abilities:
      - {name: Evasive Maneuvers, ap_cost: 5, tier: 1, effect: "Ignore difficult terrain, no OA"}
      - {name: Combat Roll, ap_cost: 10, tier: 2, effect: "Move + attack 1/SR"}
      - {name: Hit and Run, ap_cost: 15, tier: 3, effect: "15ft free move after attack"}
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
      - {name: Precision Shot, level: 6, action: Passive, description: "When attacking a target that hasn't moved since their last turn, deal +1d6 damage."}
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
      - {name: Dual Wield, level: 8, action: Passive, description: "When attacking with one-handed ranged weapon, make additional attack with second one-handed weapon at -2 to hit."}
      - {name: Fan the Hammer, level: 8, action: "2 Actions", description: "Make 3 ranged attacks with a pistol, each at -2 to hit. Can target same or different creatures."}
      - {name: Bullet Time, level: 10, action: "Start of Turn", description: "1/Short Rest. Gain 2 additional actions (ranged attacks or movement only). All attacks against you have disadvantage."}
specializations: [Sharpshooter, Demolitionist, Trick Shot]
starting_equipment:
  - Rifle or two sidearms
  - Light armor
  - 30 rounds ammunition
  - Cleaning kit and binoculars
---
# Gunslinger

*The Wasteland is a shooting gallery, and you're the best shot in it. While others fumble with rusty rifles or spray-and-pray with automatics, you make every bullet count. You've learned to read wind, distance, and target behavior in the split-second before you pull the trigger. In a world where ammunition is precious and mistakes are fatal, you are precision incarnate.*

*You are the Gunslinger. Whether you're perched on a rooftop picking off raiders or dancing through cover in a close-quarters firefight, your weapon is an extension of your will. You don't miss. You don't hesitate. You don't need a second shot — but you'll take it anyway, just to be sure.*

![A gunslinger perched on a rooftop, rifle aimed across the wasteland ruins](/images/illustrations/gunslinger-rooftop.png)

---

## Base Archetype (Levels 1-5)

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
| **Starting AP** | 15 |

### Starting Equipment

- Rifle or two sidearms
- Light armor
- 30 rounds ammunition
- Cleaning kit and binoculars

### Level Progression (1-5)

#### Level 1: Steady Aim & Quick Draw

- **Steady Aim (1 Action, At-Will):** You take careful aim at a target. Your next ranged attack this turn has **advantage**. You cannot use this ability if you've moved more than 10 feet this turn.

- **Quick Draw (Passive & Initiative Bonus):** Drawing or stowing a ranged weapon is a **free action** for you. Additionally, you gain **+2 to initiative rolls**.

- **Lethal Precision (Passive):** Unlike other classes, Gunslingers add their **AGI modifier to ranged weapon damage rolls**. This represents your ability to place shots exactly where they do the most harm. (Normal ranged damage rules say no attribute modifier; this class feature overrides that.)

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

- **Long Shot (5 AP):** Double the normal and long range of your ranged weapons.
- **Sniper's Focus (10 AP, Requires Long Shot):** If you don't move on your turn, gain +2 to ranged attack rolls until the start of your next turn.
- **One Shot, One Kill (15 AP, Requires Sniper's Focus):** Once per short rest, deal maximum damage on a ranged attack (no roll required).

#### Gunsmith (Weapon Customization)

- **Field Maintenance (5 AP):** You can repair a damaged firearm in 10 minutes using scrap materials.
- **Custom Modifications (10 AP, Requires Field Maintenance):** Choose one ranged weapon. It gains +1 to damage rolls and one of the following: +10 ft range, +1 to crit range (19-20), or reloading costs 0 actions.
- **Masterwork Weapon (15 AP, Requires Custom Modifications):** Your customized weapon becomes a signature piece, dealing +1d6 damage and never jamming.

#### Skirmisher (Mobility & Tactics)

- **Evasive Maneuvers (5 AP):** Moving through difficult terrain doesn't cost extra movement, and you don't provoke opportunity attacks when moving out of an enemy's reach.
- **Combat Roll (10 AP, 1 Action, 1/Short Rest):** Move up to your speed without provoking opportunity attacks. You can make one ranged attack at any point during this movement.
- **Hit and Run (15 AP, Requires Combat Roll):** After making a ranged attack, you can immediately move up to 15 feet as a free action.

### Magic Relationship

Gunslingers have **no innate magical ability**. However, they can learn cantrips by spending **15 AP per cantrip**. Cantrips use the Gunslinger's Wisdom modifier for attack rolls and save DCs. Gunslingers cannot learn leveled spells unless they multiclass or take a specific Mastery Path.

---

## Advanced Specializations (Levels 6-10)

Gunslingers who reach level 6 have proven their skill with firearms. Now they specialize: becoming patient snipers as Sharpshooters, explosive Demolitionists, or flashy Trick Shot artists who never stop moving.

**System Notes:**
- All characters gain 10 AP per level from levels 6-10
- Short rest: 8 hours
- Long rest: 1 week
- Bounded accuracy: maximum total bonus of +18
- 3-action economy per turn

### Sharpshooter (Range/Precision)

*Patient, calculated, and deadly at extreme range. The Sharpshooter is a master of precision — every shot is measured, every breath controlled. One shot, one kill.*

**Prerequisites:** Level 6, Gunslinger archetype

**New Skill Tree Unlocked:** Precision (range extension, critical hits at distance, called shots, armor penetration)

#### Level 6 Features

**Extended Range** (Passive)
You double the effective range of all ranged weapons you use. Additionally, you no longer have disadvantage when attacking at long range.

*Example: A rifle with 150 ft normal range / 600 ft long range becomes 300 ft normal / 1200 ft long — and you shoot at 1200 ft without disadvantage.*

**Precision Shot** (Passive Damage Boost)
When you make a ranged attack against a target that hasn't moved since the end of their last turn, you deal an additional **+1d6 damage** with that attack.

This represents your ability to line up perfect shots against stationary or slow-moving targets.

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

---

### Demolitionist (Explosives/Area Damage)

*If it's not on fire, you're not trying hard enough. The Demolitionist is a master of explosives, area denial, and creative destruction. Where others see a locked door, they see an opportunity to practice their craft.*

**Prerequisites:** Level 6, Gunslinger archetype

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

---

### Trick Shot (Versatility/Mobility)

*Flashy, unpredictable, and always moving. The Trick Shot specialist embodies the gunslinger aesthetic — dual-wielding pistols, ricocheting bullets off surfaces, shooting while diving through windows. Style is just as important as substance.*

**Prerequisites:** Level 6, Gunslinger archetype

**New Skill Tree Unlocked:** Gun Fu (mobility, dual wielding, close-range firearms, acrobatic shooting)

#### Level 6 Features

**Gunslinger's Flourish** (Passive)
When you hit a creature with a ranged attack, you can immediately move up to 10 feet without provoking opportunity attacks.

This represents the constant motion and repositioning that defines your combat style.

**Ricochet** (1/Turn)
Once per turn, when you miss with a ranged attack, you can attempt to ricochet the shot to another target. Choose a different creature within 15 feet of the original target and make a new attack roll at **-2 to hit**.

On a hit, the ricochet deals normal damage.

#### Level 8 Features

**Dual Wield** (Passive)
When you make a ranged attack with a one-handed ranged weapon, you can immediately make an additional attack with a second one-handed ranged weapon you're holding as part of the same action. The second attack is made at **-2 to hit**.

*Example: You fire your revolver (normal attack roll), then immediately fire your second revolver (at -2 to hit).*

**Fan the Hammer** (2 Actions)
You can spend 2 actions to rapidly fire a pistol-type weapon. Make **3 ranged attacks** with that weapon, each at **-2 to hit**. These can target the same creature or different creatures within range.

This represents the iconic "fanning" technique of rapidly firing a revolver.

#### Level 10 Capstone Ability

**Bullet Time** (1/Long Rest)
Once per long rest, you can activate Bullet Time at the start of your turn. For 1 round (until the start of your next turn):
- You gain **2 additional actions** that can only be used for ranged attacks or movement
- All attack rolls against you have **disadvantage**

This represents entering a state of hyper-focus where time seems to slow down — you're moving, shooting, and dodging faster than enemies can track.

*Example: With your normal 3 actions + 2 from Bullet Time, you could shoot 5 times in a single turn, or shoot twice and dash three times.*

![An insectoid gunslinger takes aim with alien precision](/images/illustrations/insectoid-gunslinger.png)

---

## Level 16: Hawkeye

Your marksmanship transcends normal limits. You can see and accurately target creatures up to 1 mile away with ranged weapons (assuming line of sight). You never suffer disadvantage due to range. Your ranged attacks ignore partial cover and heavy cover (but not total cover). Wind, rain, and environmental conditions do not impose disadvantage on your shots.

## Level 17: Specialization Final Evolution

### Sharpshooter — Death at Distance

Your called shots no longer impose the -5 penalty to your attack roll. When you score a critical hit with a ranged weapon, the target must succeed on a Fortitude save (DC = 8 + prof + AGI mod) or be instantly reduced to 0 HP (creatures with legendary resistances are immune). Your effective range doubles.

### Trick Shot — Lightning Hands

You can draw and holster weapons without using your free object interaction. When you roll initiative, you may immediately make one ranged attack before initiative order begins. You gain +2 to initiative. Reloading a weapon now costs 0 actions (you reload seamlessly during your turn).

### Demolitionist — Apocalypse Arsenal

Your explosive damage dice increase by one size (d6 becomes d8, d8 becomes d10, d10 becomes d12). You can set timed explosives that detonate up to 1 hour later. When you throw an explosive, you may split its damage across multiple 5 ft squares within its blast radius (dividing dice as you choose). You are immune to your own explosive damage.

---

## Level 20 Apex Ability: Perfect Storm

**Once per long rest (1 week)**

You enter a state of perfect focus where your perception of time slows and your hands become a blur. Every enemy is a target, and every shot finds its mark.

**Effects:**
- At the start of each of your turns for 1 minute, you make one ranged attack against every enemy you can see within your weapon's range (maximum number of attacks = AGI modifier + proficiency bonus)
- Each successful hit deals your normal weapon damage + 1d6
- You do not consume ammunition during Perfect Storm — your shots seem to materialize from nowhere
- You ignore all cover penalties
- You have advantage on all ranged attack rolls

**Drawback:** When Perfect Storm ends, your hands shake and your vision blurs — you have disadvantage on ranged attacks for 1 hour.
