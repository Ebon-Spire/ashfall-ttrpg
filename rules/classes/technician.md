---
game_data: true
name: Technician
primary_stats: [INT, AGI]
hit_die: d6
hp_base: 8
hp_per_level: 4
starting_humanity: 9
armor_proficiency: [Light]
weapon_proficiency: [Simple, Sidearms]
save_proficiencies: [Reflex, Will]
skill_bonuses:
  - {skill: Technology, bonus: 3}
  - {skill: Science, bonus: 2}
  - {skill: Investigation, bonus: 2}
starting_ap: 15
role: Pet/Support
magic_type: "None (tech replicates magic)"
level_1_features: [Neural Interface, Jury-Rig]
skill_trees:
  - name: Engineering
    focus: Construction
    abilities:
      - {name: Modular Upgrades, ap_cost: 5, tier: 1, effect: "Upgrade drone with module"}
      - {name: Rapid Assembly, ap_cost: 10, tier: 2, effect: "Build gadgets in 1 action"}
      - {name: Siege Engine, ap_cost: 15, tier: 3, effect: "Drone gains heavy weapon mount"}
  - name: Cyberwarfare
    focus: Hacking
    abilities:
      - {name: System Breach, ap_cost: 5, tier: 1, effect: "Hack electronic systems"}
      - {name: Digital Ghost, ap_cost: 10, tier: 2, effect: "Invisible to electronic detection"}
      - {name: Neural Assault, ap_cost: 15, tier: 3, effect: "Attack augmented targets via hack"}
  - name: Augmentation Tech
    focus: Enhancement
    abilities:
      - {name: Subdermal Plating, ap_cost: 5, tier: 1, effect: "+1 DV from tech"}
      - {name: Reflex Boosters, ap_cost: 10, tier: 2, effect: "+2 Initiative from tech"}
      - {name: Neural Overclock, ap_cost: 15, tier: 3, effect: "+2 INT checks, 60ft interface range, dual-device 1/SR"}
features:
  - name: Neural Interface
    level: 1
    action: "1 Action"
    frequency: At-Will
    description: "INT (Technology) check vs device DC (10 civilian, 15 military, 20 secured). Access data, override functions, issue commands. Range 30 ft."
  - name: Jury-Rig
    level: 1
    action: "1 Action"
    frequency: At-Will
    description: "DC 12 Technology check to temporarily repair broken device (functions 1 hour). Requires basic tools. Natural 20 = permanent repair."
  - name: Drone Companion
    level: 2
    action: "1 Action to command (free action at L5)"
    frequency: Always
    description: "Drone with HP 10+INT mod (+5/level), DV 12+prof, 30 ft fly. Uses 1 action to command (free action at L5 Masterwork). Can Scout (120 ft), Carry (10 lbs), Distract (ally advantage), or Shock (1d4+INT lightning). Short rest repair DC 12. Destroyed: rebuild during long rest (50 credits)."
    choices:
      - {name: Scout, effect: "Fly 120 ft, relay sight and sound"}
      - {name: Carry, effect: "Transport up to 10 lbs"}
      - {name: Distract, effect: "Grant ally advantage on one attack"}
      - {name: Shock, effect: "Melee: 1d4+INT lightning damage"}
  - name: Overclock
    level: 3
    action: "1 Action"
    frequency: "1/Short Rest"
    description: "Overclock a device for 1 minute. Choose: Weapon (+1d6 damage), Armor (+2 DV to wearer), or Drone (gains additional action)."
    choices:
      - {name: Weapon, effect: "Overclocked weapon deals +1d6 damage"}
      - {name: Armor, effect: "Wearer gains +2 DV"}
      - {name: Drone, effect: "Drone gains additional action each turn"}
  - name: Attribute Improvement
    level: 4
    action: Passive
    frequency: Permanent
    description: "Increase one attribute by +2, or two attributes by +1 each. Maximum 20."
  - name: Masterwork
    level: 5
    action: "10 minutes crafting"
    frequency: "1/Long Rest"
    description: "Craft gadget replicating any 1st-2nd level spell (single use). Costs 100 scrap. Max 3 gadgets carried. Unused gadgets break after long rest."
specialization_details:
  - name: Engineer
    role: Builder/Construct
    features:
      - {name: Advanced Drone, level: 6, action: Passive, description: "Drone gains +10 HP, +2 DV, and ranged attack: 1d6+INT damage, 60 ft range, 1/round."}
      - {name: Workshop, level: 6, action: "Long Rest", description: "Craft 1 Tier 1-2 equipment at half normal cost."}
      - {name: Deployable Turret, level: 8, action: "1 Action", description: "1/Short Rest. HP 20, DV 14, attacks for 2d6+INT at 60 ft on initiative 20. Lasts 1 minute."}
      - {name: Vehicle Expert, level: 8, action: Passive, description: "Advantage on drive/pilot/repair checks. Vehicles you operate gain +2 DV."}
      - {name: Masterwork Construct, level: 10, action: "1 hour build", description: "1/Long Rest. HP 40, DV 16, 30 ft speed, 2 attacks for 1d8+INT each. Lasts 8 hours. Command with 1 action."}
  - name: Hacker
    role: Cyberwarfare
    features:
      - {name: System Breach, level: 6, action: "1 Action", description: "Range 60 ft, concentration. DC 12 doors, DC 15 cameras, DC 18 turrets, DC 20+ hardened. Control for 1 minute."}
      - {name: Encrypt, level: 6, action: "1 Action", description: "30 ft range, 1 hour. Prevent hacking of augmentations/devices. Breach attempts have disadvantage."}
      - {name: Neural Spike, level: 8, action: "1 Action", description: "1/Short Rest. 60 ft. Will save DC 8+INT+prof. Fail: 3d8 lightning + stunned 1 round. Success: half, not stunned."}
      - {name: Data Ghost, level: 8, action: Passive, description: "Advantage on Stealth in surveilled areas. 10 minutes to falsify digital records."}
      - {name: Total System Override, level: 10, action: "1 min setup", description: "1/Long Rest. 100 ft range, 10 minutes. Control ALL electronic systems. Disable augmentations: DC 18 Will or disabled."}
  - name: Augmenter
    role: Cybernetic Enhancement
    features:
      - {name: Efficient Integration, level: 6, action: Passive, description: "Reduce Humanity cost of augmentations by 1 (minimum 1)."}
      - {name: Overclock Body, level: 6, action: "1 Action", description: "1/Short Rest. 1 minute. Double one augmentation bonus. Aftermath: 1 exhaustion."}
      - name: Combat Augments
        level: 8
        action: Passive
        description: "Choose 2 combat augmentations (-1 Humanity each)."
        choices:
          - {name: Retractable Blade, effect: "1d8+MIG slashing, cannot be disarmed"}
          - {name: Integrated Firearm, effect: "1d10 piercing, 60 ft range"}
          - {name: Dermal Plating, effect: "+2 DV (stacks with armor)"}
          - {name: Enhanced Optics, effect: "Darkvision 120 ft, advantage on sight Perception"}
      - {name: Rapid Repair, level: 8, action: "1 Action", description: "INT mod times/Short Rest. Heal self 2d6+INT HP."}
      - {name: Apotheosis Protocol, level: 10, action: "1 Action", description: "1/Long Rest. 1 minute. +2 all attributes, +2 DV, +10 ft speed, darkvision 120 ft, +2d6 weapon damage. Aftermath: 2 exhaustion."}
specializations: [Engineer, Hacker, Augmenter]
starting_equipment:
  - Sidearm
  - Light armor
  - Tech toolkit (advanced)
  - Salvage scanner
  - 100 scrap materials
---
# Technician

*The Wasteland is littered with the corpse of the old world, and you're the scavenger picking its bones. But you're not just looting — you're understanding. Every circuit board, every corroded actuator, every half-functional AI is a puzzle waiting to be solved. Where others see junk, you see potential. A broken drone becomes a loyal companion. A defunct security system becomes your backdoor. A pile of scrap becomes a weapon that shouldn't exist.*

*You are the Technician. Your mind is augmented by a neural interface, a risky modification that cost you a sliver of your humanity but granted you the ability to commune with machines. You don't just use technology — you negotiate with it. You bribe malfunctioning AIs, coax life from dying power cells, and build miracles from garbage. You're fragile in a straight fight, but you don't fight fair. By the time the enemy realizes they're outmatched, their weapons have jammed, their comms are down, and your drone is painting them with a targeting laser. Game over.*

![A technician's workshop filled with salvaged components, half-built devices, and jury-rigged tools](/images/illustrations/technician-workshop.png)

---

## Base Archetype (Levels 1-5)

### Core Stats

| Attribute | Value |
|-----------|-------|
| **Primary Attributes** | Intellect (INT), Agility (AGI) |
| **Hit Die** | d6 |
| **HP at Level 1** | 8 + END modifier |
| **HP per Level** | 1d6 (or 4) + END modifier |
| **Starting Humanity** | 9 (neural interface penalty) |
| **Armor Proficiency** | Light armor |
| **Weapon Proficiency** | Simple weapons, sidearms (pistols, SMGs) |
| **Save Proficiencies** | Reflex, Will |
| **Skill Bonuses** | Technology +3, Science +2, Investigation +2 |
| **Starting AP** | 15 |

### Starting Equipment

- Sidearm
- Light armor
- Tech toolkit (advanced)
- Salvage scanner
- 100 scrap materials

### Level Progression (1-5)

#### Level 1: Neural Interface & Jury-Rig

- **Neural Interface (At-Will, Range 30 ft):** You can mentally interface with any electronic device within 30 feet. Make an **INT (Technology) check** against the device's DC (typically 10 for civilian tech, 15 for military, 20 for secured systems). On success, you can:
  - Access data stored on the device
  - Override basic functions (open doors, disable alarms, etc.)
  - Issue commands to networked devices

  Interfacing takes 1 action for simple tasks, up to 1 minute for complex tasks (GM discretion). Secured or hostile systems may resist, require multiple checks, or trigger countermeasures.

- **Jury-Rig (1 Action, At-Will, DC 12 Technology):** You can temporarily repair a broken or damaged device. The device functions for **1 hour** before breaking again. You must have basic tools (scrap, wire, etc.) to use this ability. If you roll a natural 20, the repair is permanent.

#### Level 2: Drone Companion

**Drone Companion (Passive, Controllable):** You build or salvage a small **drone** that serves as your companion. The drone has the following stats:

- **HP:** 10 + your INT modifier + (5 × (Technician level - 1))
- **DV:** 12 + your proficiency bonus
- **Movement:** 30 ft fly (hover)
- **Actions:** The drone uses your **1 action (bonus)** to act. It can:
  - **Scout:** Fly to a location within 120 feet and relay what it sees/hears to you via your neural interface.
  - **Carry:** Transport objects up to 10 lbs.
  - **Distract:** Grant advantage to one ally's attack roll against a target the drone is adjacent to.
  - **Shock:** Make a melee attack (+proficiency + INT to hit, 1d4 + INT lightning damage).

**Commanding Your Drone:** On your turn, you can use 1 action to Command your drone. When commanded, the drone can take 2 actions (from: Stride, Strike, Hide, Search, or any drone-specific action). If you don't command your drone, it takes no actions but remains in place. At Level 5 (Masterwork), commanding your drone becomes a free action once per turn, and the drone can take 3 actions when commanded.

**Saving Throws:** Uses your proficiency bonus + its relevant attribute modifier. The drone uses INT for Will saves, AGI for Reflex saves, and END for Fortitude saves.

**Immunities:** Poison, psychic, charmed, frightened (construct traits).

**Repair:** During a short rest, you can repair your drone (Technology check DC 12, restores all HP). In combat, you can spend 2 actions to patch the drone (Technology check DC 15, restores 2d8 HP). If destroyed, rebuild during a long rest (50 credits of materials).

**Flanking:** Your drone counts as an ally for flanking purposes.

> **Building Your Drone — Quick Reference:**
>
> At Level 3 with INT 16 (+3):
> - **Drone HP:** 10 + 3 (INT mod) + 10 (5 × (L3 - 1)) = **23 HP**
> - **Drone DV:** 12 + 2 (proficiency) = **14 DV**
> - **Shock Attack:** +5 to hit (proficiency +2 + INT +3), 1d4+3 lightning damage
> - **Scout Range:** 120 ft, relays sight/sound via neural interface
>
> **Humanity Cost:** Your neural interface costs -1 Humanity at creation (Starting Humanity: 9). Further augmentations (Subdermal Plating, Reflex Boosters) cost additional Humanity. Track your total on your character sheet.
>
> **Humanity Thresholds (Summary):**
> - **10:** No penalties. Fully human.
> - **8-9:** No mechanical penalties. Minor visible augmentation.
> - **6-7:** -1 to Persuasion, Deception, and Insight checks against non-augmented creatures.
> - **4-5:** -2 to all PRE-based checks against non-augmented creatures.
> - **2-3:** -3 to all PRE-based checks. Advantage on Intimidation. Disadvantage on checks to appear trustworthy or harmless.
> - **1:** -4 to all PRE-based checks. Cannot benefit from the Diplomat's Inspire ability.
> - **0:** No spellcasting. -5 to all PRE-based checks. Cannot be healed by Vitae magic. Advantage on Intimidation and Fortitude saves vs. poison/disease.

#### Level 3: Overclock

**Overclock (1 Action, 1/Short Rest, Duration 1 Minute):** You supercharge a device, granting it enhanced performance. Choose one:

- **Weapon:** The weapon deals an additional **+1d6 damage** for 1 minute (10 rounds).
- **Armor:** The wearer gains **+2 DV** for 1 minute.
- **Drone:** Your drone gains an additional action per turn (can act using both your 1 action (bonus) and reaction).

After the effect ends, the device is temporarily **unstable** and cannot be overclocked again until you complete a short rest.

#### Level 4: Attribute Improvement

Increase one attribute by +2, or two attributes by +1 each (maximum 20 before modifiers).

#### Level 5 Capstone: Masterwork

**Masterwork (1/Long Rest, 10 Minutes, Duration Varies):** You can spend 10 minutes and 100 scrap value to construct a **gadget** that replicates the effect of any **1st or 2nd level spell**. The gadget functions once and then breaks. Examples:

- **Healing Injector:** Replicates *Cure Wounds* (heal 1d8 + INT HP)
- **EMP Grenade:** Replicates *Shatter* (3d8 thunder damage, 10 ft radius, Reflex save)
- **Cloaking Device:** Replicates *Invisibility* (target invisible for 1 hour or until attack/spell)

You can carry up to **three Masterwork gadgets** at a time. Unused gadgets break after a long rest (unstable components degrade).

### Skill Trees

Technicians have access to three skill trees:

#### Engineering (Construction & Modification)

- **Modular Upgrades (5 AP):** Your drone can be equipped with one of the following upgrades (choose one, can be swapped during a long rest):
  - **Armor Plating:** Drone gains +5 HP and +2 DV.
  - **Weapon Mount:** Drone's Shock attack deals 1d6+INT damage and has 15 ft range.
  - **Stealth Module:** Drone has advantage on Stealth checks and can become invisible for 1 minute (1/short rest).

- **Rapid Assembly (10 AP, Requires Modular Upgrades):** You can rebuild your drone in 1 hour instead of requiring a long rest. Additionally, you can have two drones active simultaneously.

- **Siege Engine (15 AP, Requires Rapid Assembly):** You can spend 8 hours and 500 scrap to build a **combat turret**. The turret is stationary, has 50 HP, DV 15, and can make ranged attacks (2d8 damage, 60 ft range, +proficiency+INT to hit) using your 1 action (bonus). Only one turret can exist at a time.

#### Cyberwarfare (Hacking & Disruption)

- **System Breach (5 AP):** You have advantage on all Technology checks to hack or disable electronic systems.
- **Digital Ghost (10 AP, Requires System Breach):** When hacking a system, you can erase all traces of your intrusion. Security systems cannot detect your presence.
- **Neural Assault (15 AP, 1 Action, 1/Short Rest):** Target one creature with cybernetic implants within 30 feet. The target must make an **Will save (DC 8 + your proficiency + your INT modifier)** or take **3d8 psychic damage** and be **stunned until the end of your next turn**.

#### Augmentation Tech (Self-Enhancement)

- **Subdermal Plating (5 AP, Permanent, -1 Humanity):** You install armor plating beneath your skin. Gain +1 DV (stacks with armor).
- **Reflex Boosters (10 AP, Permanent, -1 Humanity, Requires Subdermal Plating):** Your nervous system is enhanced. Gain +2 to initiative and advantage on Reflex saves.
- **Neural Overclock (15 AP, 1/Short Rest, Requires Reflex Boosters):** As 1 action (bonus), enter a hyper-focused state for 1 minute. During this time, you gain +2 to all INT-based checks, your Neural Interface range increases to 60 feet, and you can interface with two devices simultaneously.

### Magic Relationship

Technicians **cannot cast spells** in the traditional sense. They have no spell slots, cantrips, or magical abilities. However:

- Their **tech-based abilities** replicate magical effects (Drone = familiar, Masterwork = spell replication, Neural Interface = divination/scrying).
- They can "learn" cantrips by spending **15 AP per cantrip**, but these are **flavored as technological gadgets or implants** rather than spells. For example, *Firebolt* becomes a wrist-mounted plasma caster, *Mage Hand* becomes a gravity manipulator glove.
- Technicians cannot learn leveled spells unless they multiclass into a casting class or take a hybrid Mastery Path.

Technicians represent the intersection of science and survival, proving that in the Wasteland, technology *is* magic — if you know how to use it.

---

## Advanced Specializations (Levels 6-10)

Technicians who reach level 6 have mastered the basics of pre-war technology. Now they specialize: building and improving as Engineers, infiltrating systems as Hackers, or enhancing their own bodies as Augmenters.

**System Notes:**
- All characters gain 10 AP per level from levels 6-10
- Short rest: 8 hours
- Long rest: 1 week
- Bounded accuracy: maximum total bonus of +18
- 3-action economy per turn

### Engineer (Crafting/Drones/Vehicles)

*If it's broken, they fix it. If it doesn't exist, they build it. The Engineer is the wasteland's most valuable problem-solver — equally at home repairing a water purifier, souping up a vehicle, or building a combat drone from scrap.*

**Prerequisites:** Level 6, Technician archetype

**New Skill Tree Unlocked:** Construction (advanced crafting, structures, vehicles, construct companions)

#### Level 6 Features

**Advanced Drone** (Passive Enhancement)
Your standard Technician drone gains the following improvements:
- **+10 HP** (added to base HP)
- **+2 DV** (added to base Defense Value)
- **Attack:** Can make one ranged attack per round using your **1 action (bonus)**
  - Damage: **1d6 + INT modifier**
  - Range: 60 feet
  - Attack bonus: Your INT modifier + proficiency bonus

**Workshop** (Long Rest Crafting)
During a long rest, you can craft one piece of **Tier 1 or Tier 2 equipment** from scavenged components at **half the normal cost** (in both materials and time).

This represents your ability to create functional gear from wasteland scrap.

#### Level 8 Features

**Deployable Turret** (1/Short Rest, 1 Action)
Once per short rest, you can spend 1 action to deploy a stationary turret. The turret has:
- **HP:** 20
- **DV:** 14
- **Attack:** Makes one ranged attack per round (initiative count 20)
  - Attack bonus: INT modifier + proficiency
  - Damage: **2d6 + INT modifier**
  - Range: 60 feet
- **Duration:** 1 minute or until destroyed

The turret targets the nearest hostile creature you designate. Deploying the turret requires you to have engineering supplies (reusable kit).

**Vehicle Expert** (Passive)
- You have **advantage** on all checks to drive, pilot, or repair vehicles
- Vehicles you operate gain **+2 DV**

#### Level 10 Capstone Ability

**Masterwork Construct** (1/Long Rest, 1-Hour Build)
Once per long rest, you can spend 1 hour building a Medium construct companion from available materials. The construct has:
- **HP:** 40
- **DV:** 16
- **Speed:** 30 feet
- **Attacks:** Two attacks per round
  - Attack bonus: INT modifier + proficiency
  - Damage: **1d8 + INT modifier** each
- **Duration:** 8 hours or until destroyed

You can command the construct with 1 action (it then acts on your turn). It follows your commands to the best of its ability.

*Game Master Note: This construct is significantly more powerful than the basic drone and represents a true engineering masterpiece.*

---

### Hacker (Electronic Warfare)

*Every system has a backdoor. Every lock has a key. In a world where pre-war technology still dominates security, infrastructure, and warfare, the Hacker wields knowledge as the ultimate weapon. Where others see impenetrable defenses, they see code waiting to be rewritten.*

**Prerequisites:** Level 6, Technician archetype

**New Skill Tree Unlocked:** Cyberwarfare (hacking, electronic countermeasures, AI manipulation, surveillance)

#### Level 6 Features

**System Breach** (1 Action, Concentration)
As 1 action, you can attempt to hack one electronic device, automated turret, or security system within 60 feet. Make an **Intellect (INT) check** against the system's DC:
- Simple devices (doors, locks): DC 12
- Standard security (cameras, alarms): DC 15
- Military systems (turrets, automated defenses): DC 18
- Hardened systems: DC 20+

On a success, you take control of the system for **1 minute** (concentration). You can:
- Open/close doors
- Disable alarms or cameras
- Turn turrets against their owners
- Access restricted data

**Encrypt** (1 Action)
As 1 action, choose one ally within 30 feet or one device within touch range. For 1 hour:
- The target's augmentations cannot be hacked
- The device is protected from electronic interference
- Attempts to breach the target have disadvantage

#### Level 8 Features

**Neural Spike** (1/Short Rest, 1 Action)
Once per short rest, you can target one creature with cybernetic augmentations within 60 feet. The target must make a **Will save (DC = 8 + INT + proficiency)**.
- **Failed save:** **3d8 lightning damage** and **stunned** until the end of their next turn
- **Successful save:** Half damage, not stunned

This represents sending a surge of corrupted data directly into their augmentations, overloading their neural interface.

**Data Ghost** (Passive)
- You have **advantage on Stealth checks** in areas with electronic surveillance (cameras, motion sensors, etc.)
- You can spend 10 minutes to **falsify digital records** (security logs, databases, etc.) with an INT check

#### Level 10 Capstone Ability

**Total System Override** (1/Long Rest, 1-Minute Setup)
Once per long rest, you can spend 1 minute interfacing with electronic systems to achieve total control. For **10 minutes**, you take control of **ALL electronic systems within 100 feet**:
- **Doors, turrets, cameras, environmental controls** obey your commands
- **Augmentations in hostile creatures:** Each creature with augments in the area must make a **DC 18 Will save** or have their augments disabled for the duration

While Total System Override is active, you can:
- Open/close all doors simultaneously
- Commandeer all turrets and automated defenses
- Disable life support or environmental controls
- Lock down sections of a facility
- Turn cyborgs' own bodies against them

This represents the pinnacle of hacking ability — total domination of a technological environment.

![An insectoid technician carefully assembles intricate machinery with multi-jointed limbs](/images/illustrations/insectoid-technician.png)

---

### Augmenter (Cyborg/Self-Enhancement)

*The flesh is weak. Replace it. Enhance it. Transcend it. The Augmenter walks the line between human and machine, gradually replacing their body with superior technology. Every augmentation comes at a cost — but to the Augmenter, that cost is worth paying to become something more.*

**Prerequisites:** Level 6, Technician archetype

**New Skill Tree Unlocked:** Transhumanism (advanced augmentation, reduced humanity costs, self-repair, hybrid organic-synthetic abilities)

#### Level 6 Features

**Efficient Integration** (Passive)
You have mastered the art of integrating augmentations with minimal psychological impact. Reduce the **Humanity cost** of all augmentations by **1** (minimum 1).

This reduction stacks with other sources of reduced Humanity costs.

*Example: An augmentation that normally costs 2 Humanity now costs 1. One that costs 1 still costs 1.*

**Overclock Body** (1/Short Rest, 1 Action)
Once per short rest as 1 action, you can overclock one of your cybernetic augmentations for 1 minute. The chosen augmentation provides **double its normal bonus**.

*Example: +2 DV becomes +4 DV; +1d6 damage becomes +2d6 damage; 60 ft darkvision becomes 120 ft.*

When Overclock Body ends, you gain **1 level of exhaustion**.

#### Level 8 Features

**Combat Augments** (Choose 2, One-Time Selection)
Choose **2** of the following combat augmentations to install in your body. Each costs **1 Humanity** when selected:

1. **Retractable Arm Blade:** Melee weapon, **1d8 + MIG modifier** slashing damage, cannot be disarmed
2. **Integrated Firearm:** Ranged weapon built into your arm, **1d10 piercing damage**, 60-foot range, uses standard ammunition
3. **Dermal Plating:** Subdermal armor, **+2 DV** (stacks with worn armor up to system maximum)
4. **Enhanced Optics:** Darkvision 120 feet, **advantage on Perception** checks that rely on sight

These augmentations are permanent and cannot be removed without specialized surgery.

**Rapid Repair** (1 Action)
As 1 action, you can activate your augmentations' self-repair protocols. You heal **2d6 + INT modifier** hit points.

You can use this feature a number of times equal to your **Intellect modifier** per short rest (minimum 1).

#### Level 10 Capstone Ability

**Apotheosis Protocol** (1/Long Rest, 1 Action)
Once per long rest as 1 action, you can activate the Apotheosis Protocol for **1 minute**. All of your augmentations activate simultaneously at maximum power:
- **+2 to all attributes** (Might, Agility, Endurance, Intellect, Wisdom, Presence)
- **+2 DV**
- **+10 feet to movement speed**
- **Darkvision 120 feet** (or +60 feet if you already have darkvision)
- Your augmented weapon attacks deal an additional **+2d6 damage**

When Apotheosis Protocol ends, you gain **2 levels of exhaustion**.

This represents the pinnacle of transhumanism — temporarily pushing your cybernetic systems beyond their safe limits to achieve superhuman performance.

---

## Level 16: Network Consciousness

Your mind expands across the technological landscape. You can control up to 5 drones, turrets, or other technological devices simultaneously (instead of the usual limit). Your primary drone gains your proficiency bonus to both attack rolls and damage rolls. Your Neural Interface range extends to 120 ft, and you can hack two targets simultaneously.

## Level 17: Specialization Final Evolution

### Engineer — Mastercraft

Your turrets and constructs gain double HP. You can deploy a turret or gadget as a free action once per turn. Your crafted items have their duration or charges doubled. Once per short rest, you can instantly repair a destroyed drone or turret to full HP as a reaction.

### Hacker — Ghost Protocol

You can hack creatures or devices within 120 ft without line of sight (as long as they're on the same network or wireless grid). Your hacks cannot be traced back to you. You can maintain control of 3 hacked targets simultaneously. Hacked targets have disadvantage on saves to break free.

### Augmenter — Cyberborn

You can install one additional augmentation beyond normal limits. Your augmentations cannot be disabled by EMP or hacking. Once per short rest, you can overclock all your augments simultaneously for 1 minute — gaining +3 to all physical attributes and doubling augmentation bonuses. After overclocking ends, you suffer 1 exhaustion.

---

## Level 20 Apex Ability: Masterwork Protocol

**Once per long rest (1 week)**

You activate your masterwork programming — a final protocol that grants you absolute dominion over all technology within range. You become one with the machines.

**Effects:**
- For 1 minute, you can control any technological device within 120 ft as a free action
- You can override any electronic lock, hack any system, and disable any augmentation (no roll required — automatic success)
- You gain a holographic shield that grants +5 to DV
- Your primary drone transforms into a Huge size construct with 80 HP, DV 18, and its attacks deal 4d8 damage
- You can attempt to hack any creature with cybernetic augmentations within 120 ft: Will save DC 20 or the creature is stunned for 1 round (can repeat at the end of each of their turns)
- You can perceive through any camera, sensor, or electronic device within range

**Drawback:** When Masterwork Protocol ends, all your technology shuts down for 1 full round — your drone goes offline, your gadgets cease functioning, and your augmentations temporarily disable. You are vulnerable.
