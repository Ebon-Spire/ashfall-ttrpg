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
starting_cp: 15
role: Pet/Support
magic_type: "None (tech replicates magic)"
level_1_features: [Neural Interface, Jury-Rig]
skill_trees:
  - name: Engineering
    focus: Construction
    abilities:
      - {name: Modular Upgrades, cp_cost: 5, tier: 1, effect: "Upgrade drone with module"}
      - {name: Rapid Assembly, cp_cost: 10, tier: 2, effect: "Rebuild drone in 1 hr; two drones simultaneously"}
      - {name: Fortified Position, cp_cost: 15, tier: 3, effect: "Hardpoint: heavy cover (+5 DV) for 2 adjacent allies, fires auto 1d8+INT at initiative 20; HP 50, DV 15, permanent until destroyed"}
  - name: Cyberwarfare
    focus: Hacking
    abilities:
      - {name: System Breach, cp_cost: 5, tier: 1, effect: "Hack electronic systems"}
      - {name: Digital Ghost, cp_cost: 10, tier: 2, effect: "Invisible to electronic detection"}
      - {name: Neural Assault, cp_cost: 15, tier: 3, effect: "Attack augmented targets via hack"}
  - name: Augmentation Tech
    focus: Enhancement
    abilities:
      - {name: Subdermal Plating, cp_cost: 5, tier: 1, effect: "+1 DV from tech"}
      - {name: Reflex Boosters, cp_cost: 10, tier: 2, effect: "+2 Initiative from tech"}
      - {name: Neural Overclock, cp_cost: 15, tier: 3, effect: "+2 INT checks, 60ft interface range, dual-device 1/SR"}
  - name: Construction
    focus: Engineer Specialization
    abilities:
      - {name: Autonomous Patrol, cp_cost: 5, tier: 1, effect: "Drone takes 1 free independent action/round (Scout/Distract/Shock) without costing your action"}
      - {name: Shield Battery, cp_cost: 5, tier: 1, effect: "Drone grants +1 DV to adjacent ally; 1/SR reaction to intercept damage to adjacent ally"}
      - {name: Targeting Uplink, cp_cost: 10, tier: 2, effect: "Drone Distract lasts until start of your next turn; all ally attacks vs distracted target gain +1d4 damage"}
      - {name: Field Repair, cp_cost: 10, tier: 2, effect: "Drone spends 2 of its commanded actions to heal adjacent ally 2d8+INT HP (1/SR)"}
      - {name: Overdrive Protocol, cp_cost: 15, tier: 3, effect: "1/LR: drone acts independently 1 min (own initiative, 3 actions, +2d6 Shock, +4 DV); disabled after"}
      - {name: Linked Existence, cp_cost: 15, tier: 3, effect: "Share drone senses permanently; split incoming damage with drone; drone enters emergency mode at 0 HP (stays at 1 HP for encounter)"}
  - name: Cyberwarfare Specialization
    focus: Hacker Specialization
    abilities:
      - {name: Signal Cascade, cp_cost: 5, tier: 1, effect: "Signal Bleed chains to second augmented target within 30 ft as part of same action"}
      - {name: Persistent Breach, cp_cost: 5, tier: 1, effect: "System Breach lasts 2 min; beat DC by 5+ to control two functions simultaneously"}
      - {name: Ghost Frequency, cp_cost: 10, tier: 2, effect: "Signal Bleed undetectable; 1/SR use Signal Bleed as reaction to interrupt incoming attack/save"}
      - {name: System Leash, cp_cost: 10, tier: 2, effect: "Hacked system broadcasts suppression aura: augmented creatures within 15 ft save or lose one augmentation benefit each turn"}
      - {name: Puppet Protocol, cp_cost: 15, tier: 3, effect: "1/SR: hijack augmented creature (concentration); spend 1 action/turn to force move + one melee attack"}
      - {name: Total Frequency Override, cp_cost: 15, tier: 3, effect: "1/LR: all augmented creatures in 60 ft save or augmentations disabled 1 min (fail) / disadvantage on aug-enhanced rolls 1 min (success)"}
  - name: Transhumanism
    focus: Augmenter Specialization
    abilities:
      - {name: Integrated Pathways, cp_cost: 5, tier: 1, effect: "+2 max HP per augmentation installed (retroactive; updates as new augs installed)"}
      - {name: Cascade Activation, cp_cost: 5, tier: 1, effect: "Overclock Body chains to second aug at half strength; no additional exhaustion"}
      - {name: Chrome Synergy, cp_cost: 10, tier: 2, effect: "When two augmentation active effects used in same combat encounter: gain temp HP equal to 5+INT modifier"}
      - {name: Overclock Sharing, cp_cost: 10, tier: 2, effect: "1/LR: extend Overclock Body to one ally in touch range (you take exhaustion; ally does not)"}
      - {name: Augmented Overdrive, cp_cost: 15, tier: 3, effect: "1/LR, 1 min: all passive augs doubled, Overclock Body recharges instantly, immune to Stunned/Paralyzed; ends with 3 exhaustion"}
      - {name: Chrome Apotheosis, cp_cost: 15, tier: 3, effect: "1/LR, 10 min: share all passive aug benefits with one ally within 30 ft; active augs refresh each round (Overclock Body exhaustion waived during duration); ends with 2 exhaustion"}
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
      - {name: Signal Bleed, level: 6, action: "1 Action", description: "At-will, 60 ft. Target must have a cybernetic augmentation or be using electronic equipment. Will save DC 8+INT+prof. Fail: next attack roll OR saving throw (choose immediately at save failure) made with disadvantage. No damage. Resolves No Dead Turns gap in non-infrastructure combat."}
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
          - {name: Reactive Dermal Mesh, effect: "+1 DV (stacks with armor)"}
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

> **Recommended Build Guide — Classless System**
> This file describes the **Technician recommended build**: a curated path through Ashfall's shared skill trees designed for this build's core fantasy. Under the current rules, you are **not locked to this build**. Choose a **chassis** for your starting stats and proficiencies, then spend **Character Points (CP)** in any skill trees that match your character concept.
>
> - **Chassis selection and starting stats:** see [Chassis](../chassis.md)
> - **CP economy, spending rules, and milestones:** see [Character Points](../character-points.md)
> - **Full skill tree catalog:** see [Skill Trees](../skill-trees.md)
>
> The ability descriptions, skill tree layouts, and feature details in this file remain the authoritative rules reference for those abilities. The CP values listed in the skill trees are the costs for purchasing abilities.

*The Wasteland is littered with the corpse of the old world, and you're the scavenger picking its bones. But you're not just looting — you're understanding. Every circuit board, every corroded actuator, every half-functional AI is a puzzle waiting to be solved. Where others see junk, you see potential. A broken drone becomes a loyal companion. A defunct security system becomes your backdoor. A pile of scrap becomes a weapon that shouldn't exist.*

*You are the Technician. Your mind is augmented by a neural interface, a risky modification that cost you a sliver of your humanity but granted you the ability to commune with machines. You don't just use technology — you negotiate with it. You bribe malfunctioning AIs, coax life from dying power cells, and build miracles from garbage. You're fragile in a straight fight, but you don't fight fair. By the time the enemy realizes they're outmatched, their weapons have jammed, their comms are down, and your drone is painting them with a targeting laser. Game over.*

![A technician's workshop filled with salvaged components, half-built devices, and jury-rigged tools](/images/illustrations/technician-workshop.png)

---

## Base Build (Levels 1-5)

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
| **Starting CP** | 15 |

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
- **Actions:** Commanding the drone costs **1 of your actions** per turn. When commanded, the drone takes **2 actions** of its own from the following options:
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
- **Drone:** When you command your drone this turn, it takes **3 actions** instead of the normal 2. (The command still costs 1 of your actions, as normal.)

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

- **Modular Upgrades (5 CP):** Your drone can be equipped with one of the following upgrades (choose one, can be swapped during a long rest):
  - **Armor Plating:** Drone gains +5 HP and +2 DV.
  - **Weapon Mount:** Drone's Shock attack deals 1d6+INT damage and has 15 ft range.
  - **Stealth Module:** Drone has advantage on Stealth checks and can become invisible for 1 minute (1/short rest).

- **Rapid Assembly (10 CP, Requires Modular Upgrades):** You can rebuild your drone in 1 hour instead of requiring a long rest. Additionally, you can have two drones active simultaneously.

- **Fortified Position (15 CP, Requires Rapid Assembly):** You can spend 8 hours and 500 scrap to construct a **defensive hardpoint** at a fixed location. The hardpoint is a fortified emplacement — reinforced plating, sensor array, and an automated defense weapon mounted in a protected housing. It has the following properties:
  - **Cover:** Up to 2 allies positioned adjacent to the hardpoint (on the side facing away from the enemy) gain **+5 Defense Value** against attacks from the opposite side (heavy cover, per the combat rules). This bonus applies while the ally remains in the covered position. Moving out of the adjacent square or around the hardpoint forfeits the cover bonus until they return.
  - **Automated Fire:** At initiative count 20 (after all initiative is determined), the hardpoint automatically makes one ranged attack against the nearest hostile creature within 60 feet. This attack costs you no action — it fires on its own sensor feed. Attack bonus: **INT modifier + proficiency bonus**. Damage: **1d8 + INT modifier** (energy or ballistic — choose when constructing). You can target a different creature as a **free action** on your turn.
  - **Stats:** HP 50, DV 15. The hardpoint cannot move once placed.
  - **Duration:** Indefinitely, until destroyed. Rebuilding a destroyed hardpoint costs 500 scrap and 8 hours of work.
  - **Limit:** Only one Fortified Position can exist at a time. If you build a second, the first becomes inert.

  *The Fortified Position is a **preparation** tool — built during downtime, a long rest at a known encounter location, or when the party has time to fortify. It's not a combat-deployed weapon (that's the Deployable Turret). It's the gun emplacement you build at the camp perimeter, the turret you set up in the corridor before the boss fight, the automated defense that covers the evacuation route. When the party knows a fight is coming and has time to prepare, the Engineer's Fortified Position changes the geometry of the encounter.*

#### Cyberwarfare (Hacking & Disruption)

- **System Breach (5 CP):** You have advantage on all Technology checks to hack or disable electronic systems.
- **Digital Ghost (10 CP, Requires System Breach):** When hacking a system, you can erase all traces of your intrusion. Security systems cannot detect your presence.
- **Neural Assault (15 CP, 1 Action, 1/Short Rest):** Target one creature with cybernetic implants within 30 feet. The target must make an **Will save (DC 8 + your proficiency + your INT modifier)** or take **3d8 psychic damage** and be **stunned until the end of your next turn**.

#### Augmentation Tech (Self-Enhancement)

- **Subdermal Plating (5 CP, Permanent, -1 Humanity):** You install armor plating beneath your skin. Gain +1 DV (stacks with armor).
- **Reflex Boosters (10 CP, Permanent, -1 Humanity, Requires Subdermal Plating):** Your nervous system is enhanced. Gain +2 to initiative and advantage on Reflex saves.
- **Neural Overclock (15 CP, 1/Short Rest, Requires Reflex Boosters):** As **1 action**, enter a hyper-focused state for 1 minute. During this time, you gain +2 to all INT-based checks, your Neural Interface range increases to 60 feet, and you can interface with two devices simultaneously.

### Magic Relationship

Technicians **cannot cast spells** in the traditional sense. They have no spell slots, cantrips, or magical abilities. However:

- Their **tech-based abilities** replicate magical effects (Drone = familiar, Masterwork = spell replication, Neural Interface = divination/scrying).
- They can "learn" cantrips by spending **15 CP per cantrip**, but these are **flavored as technological gadgets or implants** rather than spells. For example, *Firebolt* becomes a wrist-mounted plasma caster, *Mage Hand* becomes a gravity manipulator glove.
- Technicians cannot learn leveled spells unless they multiclass into a casting build or take a hybrid Mastery Path.

Technicians represent the intersection of science and survival, proving that in the Wasteland, technology *is* magic — if you know how to use it.

---

## Advanced Specializations (Levels 6-10)

Technicians who reach level 6 have mastered the basics of pre-war technology. Now they specialize: building and improving as Engineers, infiltrating systems as Hackers, or enhancing their own bodies as Augmenters.

**System Notes:**
- All characters gain 10 CP per level from levels 6-10
- Short rest: 8 hours
- Long rest: 1 week
- Bounded accuracy: maximum total bonus of +18
- 3-action economy per turn

### Engineer (Crafting/Drones/Vehicles)

*If it's broken, they fix it. If it doesn't exist, they build it. The Engineer is the wasteland's most valuable problem-solver — equally at home repairing a water purifier, souping up a vehicle, or building a combat drone from scrap.*

**Prerequisites:** Level 6, Technician build

**New Skill Tree Unlocked:** Construction (advanced crafting, structures, vehicles, construct companions)

#### Level 6 Features

**Advanced Drone** (Passive Enhancement)
Your standard Technician drone gains the following improvements:
- **+10 HP** (added to base HP)
- **+2 DV** (added to base Defense Value)
- **Attack:** Can make one ranged attack per round when commanded (**costs 1 of your actions** to command)
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

The Deployable Turret is a **tactical tool** — deployed in the heat of combat when you need immediate additional firepower. Unlike the **Fortified Position** (a permanent base-tree installation built during preparation), the Deployable Turret pops up fast and hits hard for 1 minute, then folds down for the next short rest. When you have time to prepare, use the Fortified Position. When the fight starts early and you need a turret *now*, this is your answer.

*Example: The party is ambushed in an open courtyard with no cover. The Engineer deploys a Deployable Turret as their first action — it fires at initiative 20 for 2d6+INT while the Engineer commands their drone to Distract the nearest target. Two automated weapons on the field from one person. That's the Engineer's specialty.*

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

### Construction Skill Tree

The Construction tree transforms the Engineer from a combat engineer into a true partnership — you and your drone as one integrated tactical unit. Where the base Engineering tree (L1-5) improves your drone's stats, Construction changes *how* you operate together: independent drone initiative, shared senses, defensive deployment, and field medicine. The further you invest, the less the drone feels like a tool you control and the more it feels like a partner who has your back.

**Tier 1 Abilities (5 CP each)**

- **Autonomous Patrol (5 CP):** You program your drone with independent patrol protocols — threat assessment, target prioritization, and reaction routines that run without your active command. At the start of each of your turns, if you have not yet used your action to command your drone this turn, your drone automatically takes **1 independent action** from the following options: Scout, Distract, or Shock (choosing the most tactically appropriate action per your standing orders, or as you direct through your neural link). This autonomous action does not cost you an action.

  If you also command your drone this turn (spending 1 of your actions), the autonomous action does not fire — commanding the drone supersedes the autonomous protocol. *Clarification: At Level 5, commanding your drone is already a free action. Autonomous Patrol's trigger checks whether you issued any command to your drone this turn — including free action commands. If you commanded the drone (even as a free action), the autonomous protocol does not fire.*

- **Shield Battery (5 CP):** You install defensive subroutines into your drone, allowing it to function as a mobile protection unit. While your drone is adjacent to an ally, that ally gains **+1 to Defense Value** (passive, always active when the drone is adjacent to them). Additionally, once per short rest, when a creature adjacent to your drone would take damage from an attack, you can use your **reaction** to have your drone interpose itself — the drone takes the full damage instead of the ally (including all damage from the triggering hit). The drone's HP total and DV apply; if this reduces the drone to 0 HP, it is destroyed as normal.

**Tier 2 Abilities (10 CP each, requires one Tier 1 ability)**

- **Targeting Uplink (10 CP, Requires Autonomous Patrol):** When your drone uses its **Distract** action, the effect is upgraded: instead of granting advantage to one ally's next attack roll, the drone maintains a **targeting uplink** on the distracted creature until the start of your next turn. While the uplink is active, **any ally** who hits the distracted creature deals **+1d4 bonus damage** on that hit. The drone can maintain this uplink while continuing other actions (it sustains the lock passively through your neural interface).

- **Field Repair (10 CP, Requires Shield Battery):** You outfit your drone with a basic medical toolkit — adhesive bandages, stimpacks, emergency wound sealant. Once per short rest, when you command your drone, you can have it spend **2 of its commanded actions** to administer emergency treatment to an adjacent ally (it cannot move on the same turn it uses this ability — treatment requires staying still). The ally recovers **2d8 + your INT modifier** hit points. The drone must be adjacent to the ally to use this ability.

**Tier 3 Abilities (15 CP each, requires one Tier 2 ability)**

- **Overdrive Protocol (15 CP, Requires Targeting Uplink):** Once per long rest, you can activate your drone's Overdrive Protocol as a **free action** at the start of your turn. For **1 minute**, your drone operates at full autonomous capacity:
  - Your drone acts on its **own initiative count** (roll at the start of Overdrive; it retains this initiative for the duration)
  - The drone takes **3 actions per turn** automatically — it does not require your command action
  - Your drone's Shock attack deals **+2d6 bonus damage**
  - Your drone gains **+4 to Defense Value**
  - You cannot command the drone during Overdrive — it operates on its own tactical assessment

  When Overdrive ends, the drone is **disabled** until you complete a short rest (it requires cooldown and diagnostics). If the drone would be destroyed during Overdrive, Overdrive ends immediately.

  *If you have the **Targeting Uplink** ability, the drone may use Distract multiple times during Overdrive against different targets — each Distract maintains its own uplink. This is intentional: Overdrive Protocol is a 1/Long Rest ability and this multi-uplink scenario is its ceiling case.*

- **Linked Existence (15 CP, Requires Field Repair):** Your connection to your drone transcends wireless control — you share its senses and it shares your survival instinct. Gain the following permanent benefits:

  - **Shared Senses:** You passively perceive everything your drone perceives (sight and sound) out to its Scout range (120 feet), even without commanding it to Scout. You can switch between your own senses and your drone's as a free action.
  - **Damage Distribution:** When you take damage from any source, you can use your **reaction** to split that damage between yourself and the drone in any ratio (e.g., take 10 damage → you absorb 4, drone absorbs 6). This reaction fires before applying either creature's DV. The drone's HP total applies to its share.
  - **Emergency Mode:** When your drone would be reduced to **0 HP**, it enters Emergency Mode instead of being destroyed. In Emergency Mode, the drone has **1 HP** and can take only 1 action per turn (if commanded), but it remains functional for the rest of the current encounter. After the encounter, the drone is destroyed as normal (requires short rest to rebuild). *Damage Distribution does not apply to a drone in Emergency Mode — you cannot use the Damage Distribution reaction while your drone is in Emergency Mode, and damage cannot be routed to an Emergency Mode drone via this reaction. The drone's Emergency Mode HP of 1 is the floor: if anything would reduce it below 1 HP, it is instead destroyed immediately (Emergency Mode does not renew).*

---

### Hacker (Electronic Warfare)

*Every system has a backdoor. Every lock has a key. In a world where pre-war technology still dominates security, infrastructure, and warfare, the Hacker wields knowledge as the ultimate weapon. Where others see impenetrable defenses, they see code waiting to be rewritten.*

**Prerequisites:** Level 6, Technician build

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

**Signal Bleed** (At-Will, 1 Action, Range 60 ft)
You broadcast focused electromagnetic interference at one creature within 60 feet. The target must have **at least one cybernetic augmentation** or be **actively using electronic equipment** (powered armor, a scoped weapon, a vehicle, a communication device, or similar technology) — Signal Bleed has no effect on purely organic creatures with no electronic components.

The target makes a **Will save (DC = 8 + your INT modifier + your proficiency bonus)**:

- **On a failed save:** The creature's next **attack roll** or next **saving throw** (you choose which, declared immediately at the moment the save fails — not when the qualifying roll is about to be made) is made with **disadvantage**. This disadvantage applies to the first qualifying roll they make before the start of your next turn.
- **On a successful save:** The target is aware of the attempted intrusion and takes no effect.

Signal Bleed deals no damage. You are flooding their targeting systems with corrupted telemetry, their neural interface with scrambled signals, or their sensory feed with false data — whichever explanation fits the fiction. The disruption is precise and short-lived, but in the moment that matters, a missed attack or a failed save can change everything.

*Combat loop with Signal Bleed:*
- *In a tech-heavy environment:* System Breach a turret (1 action, concentration) while Signal Bleed keeps the augmented melee threat disrupted.
- *In a pure combat zone:* Signal Bleed the most dangerous augmented target each round — forcing their attacks into disadvantage or denying their escape saves.
- *Round with Neural Spike available:* Signal Bleed on round 1, Neural Spike on round 2 when the SR recharges — the combination lands disadvantage then a stun.

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

*GM Note: Total System Override (disabling augmentations via DC 18 Will save) can be functionally fight-ending in campaigns with heavily augmented enemies. This ability is intended for high-stakes infiltration scenarios and encounters with elite augmented opponents. For standard augmented enemies (raiders with cyber-limbs, corporate soldiers with basic mods), consider setting Will saves between 12-15. Named enemies, commanders, and boss characters with hardened neural security should have Will saves of 18+ specifically because their systems include anti-intrusion countermeasures. A Total System Override that fails against a hardened target is itself narratively interesting — it tells the players this enemy prepared for exactly this kind of assault.*

---

### Cyberwarfare Skill Tree

The Cyberwarfare tree extends the Hacker's reach beyond infrastructure — into the wireless space between every augmented creature on the battlefield. Where System Breach and Total System Override require *something to hack* (a camera, a door, a turret), the Cyberwarfare tree makes every augmented enemy a target in their own right. Signal Bleed (your L6 feature) is the foundation; this tree builds the weapons, the tactics, and the finishing moves on top of it.

**All Cyberwarfare abilities that reference Signal Bleed require you to have the Signal Bleed L6 feature (Hacker specialization).**

**Tier 1 Abilities (5 CP each)**

- **Signal Cascade (5 CP):** When you use Signal Bleed and your target fails their Will save, you may immediately extend the broadcast to a **second target within 30 feet of the first**. The second target must also have cybernetic augmentations or be actively using electronic equipment. That target makes the same **Will save (same DC)** as part of your original Signal Bleed action — no additional action cost. On a failed save, they suffer the same disadvantage effect you chose for the first target (or a different qualifying roll, if you choose — both targets can be assigned independently).

- **Persistent Breach (5 CP):** Your System Breach concentration lasts **2 minutes** (instead of 1 minute). Additionally, when you succeed on a System Breach check by **5 or more** (exceeding the device DC by 5+), you can simultaneously maintain **two separate control functions** of the same hacked system — for example, holding a door open while redirecting a turret, or looping camera footage while accessing restricted data. Functions that contradict each other (opening and closing the same door) cannot be maintained simultaneously.

**Tier 2 Abilities (10 CP each, requires one Tier 1 ability)**

- **Ghost Frequency (10 CP, Requires Signal Cascade):** You have mastered covert signal injection — your interference looks like hardware failure, not an intrusion. When you use Signal Bleed:
  - On a **failed save**, the target is unaware they were hacked — they experience the malfunction as a natural system glitch. They do not know you are responsible.
  - On a **successful save**, the target senses interference but cannot identify the source — they know something is wrong, but not where it's coming from.

  Additionally, once per short rest, you can use Signal Bleed as a **reaction** when a creature with augmentations or electronic equipment that you can see within 60 feet makes an **attack roll or saving throw**. This reaction fires after the triggering action is declared but before the roll resolves. If the creature fails their Will save against your Signal Bleed, your chosen effect (disadvantage on their next attack or their next save) applies immediately to the roll that triggered the reaction.

- **System Leash (10 CP, Requires Persistent Breach):** While you are maintaining System Breach on any electronic system, that hacked system broadcasts **suppression signals** through your control into the local wireless environment. At the start of each turn, every creature with cybernetic augmentations within **15 feet of the hacked system** must make a **Will save (DC = 8 + your INT modifier + your proficiency bonus)**. On a failure, one of their augmentations (their choice) is **temporarily suppressed** until the start of their next turn — passive augmentations stop providing their bonus, and active augmentations cannot be used. On a success, they are unaffected.

  Creatures can identify the suppression source with a successful **Technology check (DC = your System Breach check result)**. Destroying or disconnecting the hacked system ends the suppression immediately.

**Tier 3 Abilities (15 CP each, requires one Tier 2 ability)**

- **Puppet Protocol (15 CP, Requires Ghost Frequency):** Once per short rest, you can attempt to **directly hijack** the augmented nervous system of one creature with cybernetic augmentations within 60 feet. The target makes a **Will save (DC = 8 + your INT modifier + your proficiency bonus)**:

  - **On a failed save:** You seize control of their augmented motor functions. For up to **1 minute** (concentration), once per turn as **1 action**, you can force the target to: move up to their speed in any direction you choose (they cannot willingly stop if they fail a save at the end of each turn — Endurance save, same DC — to resist the movement), OR make **one melee attack** against a creature of your choice within their melee reach (you use your proficiency bonus + your INT modifier as the attack bonus). At the end of each of their turns, the hijacked creature may repeat the Will save; on a success, Puppet Protocol ends. Creatures immune to psionic and electronic effects are also immune to Puppet Protocol.
  - **On a successful save:** The creature is aware of the intrusion attempt and is immune to Puppet Protocol from you for 24 hours.

  Puppet Protocol is a concentration effect. You cannot maintain System Breach and Puppet Protocol simultaneously — beginning either concentration effect ends the other. Puppet Protocol also ends if you become incapacitated or if the target leaves 60-foot range.

- **Total Frequency Override (15 CP, Requires System Leash):** Once per long rest, as **1 action**, you broadcast a cascade of corrupted override signals across the entire local wireless spectrum within **60 feet**. Every creature with cybernetic augmentations within range must simultaneously make a **Will save (DC = 8 + your INT modifier + your proficiency bonus)**:

  - **On a failed save:** The creature's augmentations are **completely disabled for 1 minute** (no repeat save). They lose all passive augmentation benefits, cannot use any augmentation-based active abilities, and augmentations that provide physical capability (Cybernetic Limb, enhanced movement) function at base biological performance.
  - **On a successful save:** The creature's augmentations **flicker and destabilize**. For 1 minute, they have **disadvantage on all rolls that directly rely on augmented capabilities** (attacks with augmented weapons, saves against augmentation suppression, checks that use augmentation-enhanced attributes). They may repeat the Will save at the end of each of their turns to end the flickering.

  Total Frequency Override affects allies with augmentations as well. Plan accordingly — inform augmented allies before you detonate.

![An insectoid technician carefully assembles intricate machinery with multi-jointed limbs](/images/illustrations/insectoid-technician.png)

---

### Augmenter (Cyborg/Self-Enhancement)

*The flesh is weak. Replace it. Enhance it. Transcend it. The Augmenter walks the line between human and machine, gradually replacing their body with superior technology. Every augmentation comes at a cost — but to the Augmenter, that cost is worth paying to become something more.*

**Prerequisites:** Level 6, Technician build

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
3. **Reactive Dermal Mesh:** Subdermal armor, **+1 DV** (stacks with worn armor up to system maximum)
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

### Transhumanism Skill Tree

The Transhumanism tree makes the Augmenter's chrome into an integrated system rather than a collection of independent modifications. Each tier unlocks a deeper level of integration: T1 makes your augmentations work better together structurally, T2 creates active synergies that reward investing in multiple augmentation systems, and T3 pushes you beyond the baseline biology/chrome divide — briefly achieving states that normal augmented people can only read about in pre-war cybernetics journals.

**Tier 1 Abilities (5 CP each)**

- **Integrated Pathways (5 CP):** Your neural interface and cybernetic implants have been optimized to reinforce each other structurally — each augmentation you install acts as a load-bearing node in a distributed support network. For each augmentation you currently have installed (including your Neural Interface from Level 1), gain **+2 to your maximum HP**. This bonus updates immediately whenever you install a new augmentation — there is no need to recalculate at leveling; simply add +2 max HP each time chrome goes in.

  *At a typical Augmenter build with 7 augmentations installed by L9, Integrated Pathways provides +14 maximum HP — effectively compensating for 3-4 levels of the d6 hit die penalty versus heavier archetypes.*

- **Cascade Activation (5 CP):** When you use **Overclock Body** (your L6 feature) to double one augmentation's benefit, the power surge carries through your integrated network. Choose a **second augmentation** when you activate Overclock Body. That second augmentation's benefit is enhanced by **half** for the duration (rounded down — a +2 DV aug becomes +3 DV; a +2 INT aug becomes +3 INT). The second augmentation's enhancement is a cascade effect from your optimized pathways, not a separate overclock — it does not cause additional exhaustion when Overclock Body ends.

  *Example: You Overclock your Reactive Dermal Mesh (+1 DV → +2 DV). Cascade Activation also enhances your Reflex Booster (+2 Initiative → +3 Initiative). You gain the exhaustion for Overclock Body at the end; the cascade enhancement ends with it.*

**Tier 2 Abilities (10 CP each, requires one Tier 1 ability)**

- **Chrome Synergy (10 CP, Requires Integrated Pathways):** When you use **two different active augmentation effects** in the same combat encounter (abilities with 1/Short Rest or 1/Combat frequencies, such as Wired Reflexes, Adrenaline Regulator, Overclock Body, or your Combat Augments' activation modes), your integrated systems generate a regenerative feedback loop. At the end of the turn on which you trigger your second active augmentation effect, you gain **temporary hit points equal to 5 + your INT modifier**. These temporary HP persist until you complete a short rest.

  Temporary HP from multiple Chrome Synergy triggers in the same encounter do not stack — you retain whichever value is higher.

  *Example: In round 1, you use Wired Reflexes (1/combat extra action). In round 2, your Adrenaline Regulator triggers (you drop below half HP). At the end of round 2, Chrome Synergy fires: you gain 5+INT temporary HP.*

- **Overclock Sharing (10 CP, Requires Cascade Activation):** Once per long rest, when you use **Overclock Body**, you may extend its effect to **one willing ally within touch range**. Both you and the ally gain the doubled benefit of the chosen augmentation for the full duration of Overclock Body. If Cascade Activation is also active, the cascade enhancement applies only to you (not to the ally).

  When Overclock Body ends, you gain the 1 level of exhaustion as normal. The ally gains none — your integrated system compensates for the external stress of sharing your overclock, absorbing the feedback through your own neural pathways.

  *This is the gift of chrome. Sharing augmentation performance with someone who doesn't have the hardware. It costs you nothing extra, but it costs your body the whole load.*

**Tier 3 Abilities (15 CP each, requires one Tier 2 ability)**

- **Augmented Overdrive (15 CP, Requires Chrome Synergy):** Once per long rest, as **1 action**, you push every augmentation in your body beyond its safe operational limits simultaneously. For **1 minute**:
  - All of your **passive augmentations provide double their normal benefit** (Reactive Dermal Mesh's +1 DV becomes +2 DV; attack roll bonuses do not double, nor do temporary damage bonuses from other 1/Long Rest abilities such as Apotheosis Protocol's +2d6 weapon damage bonus — only permanent passive augmentation damage bonuses double)
  - **Overclock Body** immediately recharges and can be used once during this minute (if you use it, the doubled passive aug benefits AND Overclock Body's additional doubling apply to the overclocked augmentation — it operates at triple normal benefit for the Overclock's duration)
  - You are **immune to the Stunned and Paralyzed conditions** — your augmented nervous system overrides the biochemical pathways these conditions normally exploit

  When Augmented Overdrive ends, you immediately gain **3 levels of exhaustion**. This is the highest exhaustion cost of any ability in the system — plan your exit accordingly.

- **Chrome Apotheosis (15 CP, Requires Overclock Sharing):** Once per long rest, as **1 action**, you achieve full systemic integration — your augmentations are no longer foreign additions to your biology, but the primary substrate of your function. For **10 minutes**:
  - You share the **passive benefits of all your augmentations** with **one willing ally within 30 feet** who can see or hear you. They gain every passive augmentation bonus you have (DV bonuses, attribute bonuses, initiative bonuses, sense upgrades, etc.) while within 30 feet. Active augmentation abilities (Wired Reflexes, Adrenaline Regulator, etc.) are not shared — only passive bonuses. The sharing ends if the ally leaves 30-foot range or if Chrome Apotheosis ends.
  - Your own active augmentation effects (1/combat or 1/SR) **refresh at the start of each of your turns** — effectively becoming at-will for the duration. Overclock Body's 1 level of exhaustion is waived for any activation during Chrome Apotheosis. You still gain only the benefit of one active overclock at a time (the last one activated, if you chain multiple). The 2 levels of exhaustion when Chrome Apotheosis ends represent the accumulated cost of all overclock activations during the duration.

  When Chrome Apotheosis ends, you gain **2 levels of exhaustion**.

  *Example: A Warrior ally within 30 ft temporarily gains your Reactive Dermal Mesh (+1 DV), Reflex Booster (+2 Initiative), and Neural Processor (+2 INT for technical checks). They don't gain your Wired Reflexes (active ability) — but you can use Wired Reflexes every turn for 10 minutes while the Apotheosis is active.*

---

## Level 16: Network Consciousness

Your mind expands across the technological landscape. You can control up to 5 drones, turrets, or other technological devices simultaneously (instead of the usual limit). Your primary drone gains your proficiency bonus to both attack rolls and damage rolls. Your Neural Interface range extends to 120 ft, and you can hack two targets simultaneously.

## Level 17: Specialization Final Evolution

### Engineer — Mastercraft

Your turrets and constructs gain double HP. You can deploy a turret or gadget as a free action once per turn. Your crafted items have their duration or charges doubled. Once per short rest, you can instantly repair a destroyed drone or turret to full HP as a reaction.

### Hacker — Specter Protocol

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
