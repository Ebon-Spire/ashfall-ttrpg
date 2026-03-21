---
game_data: true
name: Operative
primary_stats: [AGI, PRE]
hit_die: d6
hp_base: 8
hp_per_level: 4
starting_humanity: 10
armor_proficiency: [Light]
weapon_proficiency: [Simple, Sidearms, Finesse melee]
save_proficiencies: [Reflex, Will]
skill_bonuses:
  - {skill: Stealth, bonus: 2}
  - {skill: Deception, bonus: 2}
starting_cp: 15
role: Skill/Burst Damage
magic_type: "None (15 CP/cantrip)"
level_1_features: [Sneak Attack, Expertise]
skill_proficiency_count: 5
bonus_proficiency_levels: [5, 10]
free_expertise_levels: [1, 6, 12]
expertise_swappable: true
skill_cp_discount: 0.5
skill_trees:
  - name: Wetwork
    focus: Assassination
    abilities:
      - {name: Silent Takedown, cp_cost: 5, tier: 1, effect: "Kill unaware target below HP threshold"}
      - {name: Assassinate, cp_cost: 10, tier: 2, effect: "Auto-crit from stealth"}
      - {name: Death Strike, cp_cost: 15, tier: 3, effect: "Double sneak attack damage 1/SR"}
  - name: Infiltration
    focus: Access
    abilities:
      - {name: Locksmith, cp_cost: 5, tier: 1, effect: "+5 to lockpicking checks"}
      - {name: Security Bypass, cp_cost: 10, tier: 2, effect: "Disable electronic security"}
      - {name: Silent Veil, cp_cost: 15, tier: 3, effect: "Invisible for 1 minute (ends if you attack or cast) 1/SR. No sound while moving."}
  - name: Recon
    focus: Information
    abilities:
      - {name: "Scout's Eye", cp_cost: 5, tier: 1, effect: "See through walls 10ft 1/SR"}
      - {name: Overwatch, cp_cost: 10, tier: 2, effect: "Reaction attack on enemy movement"}
      - {name: Perfect Ambush, cp_cost: 15, tier: 3, effect: "Party gains surprise round"}
  - name: Lethality
    focus: "Kill Threshold / Critical Strike Enhancement"
    specialization: Assassin
    abilities:
      - {name: Marked for Death, cp_cost: 5, tier: 1, effect: "Free action: mark 1 target — +1d6 Sneak Attack vs mark; mark counts as surprised for Death Strike if they haven't acted this round"}
      - {name: Predator's Venom, cp_cost: 5, tier: 1, effect: "Craft up to 3 tactical poison doses (Numbing/Nerve/Paralytic); Fort DCs 14–16+INT; apply via Poison Master free action"}
      - {name: Kill Window, cp_cost: 10, tier: 2, effect: "Death Strike triggers on any conditioned target (not just surprised); Death Strike hits deny target their reaction until their next turn"}
      - {name: Stalker's Focus, cp_cost: 10, tier: 2, effect: "1/SR: advantage on attacks vs studied target; Execution threshold 6×level vs focus; may reroll 1 missed attack vs focus per round"}
      - {name: Executioner's Patience, cp_cost: 15, tier: 3, effect: "Failed Execution → target stunned 1 rd; skip Execution's 1-round study if you've already hit target this combat"}
      - {name: Vanishing Shot, cp_cost: 15, tier: 3, effect: "1/SR: missed stealth attack doesn't reveal position; creatures make Perception DC 10+Stealth to locate you; make 1 additional Sneak Attack from hiding before end of turn"}
  - name: Shadowcraft
    focus: "Darkness Manipulation / Positional Control"
    specialization: Shadow
    abilities:
      - {name: Veil of Shadow, cp_cost: 5, tier: 1, effect: "1 action: 10-ft radius darkness (30 ft range) until start of your next turn; you see through it as dim light; no rest cost — renewable each round"}
      - {name: Umbral Senses, cp_cost: 5, tier: 1, effect: "Passive in dim light/darkness: imprecise sense of invisible creatures within 30 ft, +10 ft speed, advantage on Stealth checks"}
      - {name: Shadow Snare, cp_cost: 10, tier: 2, effect: "1/SR: Shadow Step departure point becomes a shadow anchor — creatures entering or starting turn there: Reflex DC 12+AGI or restrained 1 rd"}
      - {name: Cloak Extension, cp_cost: 10, tier: 2, effect: "Cloak of Shadows: extend lightly-obscured to 1 adjacent ally; no longer breaks on hit in dim light/darkness — only breaks if you enter bright light"}
      - {name: Shade Form, cp_cost: 15, tier: 3, effect: "1/LR, 1 min: 2D shadow — pass through cracks and under doors; attacks made approaching along surfaces have advantage; immune to grappled and restrained"}
      - {name: Phantom Twin, cp_cost: 15, tier: 3, effect: "1/SR, 1 action: shadow decoy in adjacent space; creatures Perception DC 10+Stealth or 50% chance to target decoy; decoy destroyed on any damage, blinds attacker until end of their next turn; valid for flanking"}
  - name: Tradecraft
    focus: "Intelligence Weaponization / Social Manipulation"
    specialization: Spy
    abilities:
      - {name: Combat Profiling, cp_cost: 5, tier: 1, effect: "Read the Fight: ask 2 questions (up from 1); ally save bonus +2 (up from +1); bonus applies to all allies who can hear you, not just 1"}
      - {name: Cover Identity, cp_cost: 5, tier: 1, effect: "Reaction while disguised: Deception DC 12 → attacker disadvantage; DC 16 → redirect targeted ranged attack to different creature within 30 ft"}
      - {name: Anticipated Move, cp_cost: 10, tier: 2, effect: "When Read the Fight reveals attack intent: use reaction to move half speed (no OA) OR grant 1 ally +2d6 bonus damage on their next hit vs that creature"}
      - {name: Leveraged Intel, cp_cost: 10, tier: 2, effect: "Leverage extends to target's allies within 10 ft; once/combat: successful Read the Fight → impose -1 to target's all saves for combat (stacks with Leverage penalty)"}
      - {name: Turned Asset, cp_cost: 15, tier: 3, effect: "1/LR, 1 action: target non-boss creature (GM determines boss status) you've Feinted successfully OR Read the Fight 3× this combat; contested PRE+prof vs WIS+prof; success → creature won't attack party for 1 min, may attack former ally once at your direction"}
      - {name: Always Prepared, cp_cost: 15, tier: 3, effect: "1/LR at start of combat: name 1 known enemy type/individual — advantage on attacks vs them, Execution threshold 6×level vs them, Read the Fight auto-succeeds vs them, allies +1 attack vs them; requires 1 hr downtime prep in prior 24 hrs"}
features:
  - name: Sneak Attack
    level: 1
    action: "On Hit"
    frequency: "1/Turn"
    description: "When hitting with advantage or flanking: +1d6 damage. Scales: +2d6 at L3, +3d6 at L5, +4d6 at L9, +5d6 at L13, +6d6 at L17. NOT doubled on crits."
  - name: Expertise
    level: 1
    action: Passive
    frequency: Always
    description: "Choose 2 skills with proficiency. Double proficiency bonus on those skills. Can change one skill during long rest."
    num_choices: 2
    choice_label: "Choose 2 Expertise Skills"
  - name: Cunning Action
    level: 2
    action: "1 Action"
    frequency: At-Will
    description: "Use 1 action for: Dash (move full speed again), Disengage (no opportunity attacks this turn), or Hide (Stealth check)."
    choices:
      - {name: Dash, effect: "Move full speed again this turn"}
      - {name: Disengage, effect: "No opportunity attacks against you this turn"}
      - {name: Hide, effect: "Make a Stealth check to become hidden"}
  - name: Uncanny Dodge
    level: 3
    action: Reaction
    frequency: "1/Round"
    description: "When hit by an attacker you can see, halve the attack damage. Works on any visible attack type."
  - name: Attribute Improvement
    level: 4
    action: Passive
    frequency: Permanent
    description: "Increase one attribute by +2, or two attributes by +1 each. Maximum 20."
  - name: Ghost Strike
    level: 5
    action: "Part of Attack"
    frequency: "1/Short Rest"
    description: "While hidden from target: next attack auto-crits (weapon dice only, not Sneak Attack). Target DC 15 FORT save or stunned 1 round."
specialization_details:
  - name: Assassin
    role: Lethal Strikes
    features:
      - {name: Death Strike, level: 6, action: Passive, description: "Hit surprised or first-round unacted creature: max Sneak Attack damage (no roll needed)."}
      - {name: Poison Master, level: 6, action: Passive, description: "Apply poison as free action instead of action. Poison save DCs increase by +2."}
      - {name: Assassinate, level: 8, action: Passive, description: "Hit undetected creature: automatic critical. Stacks with Sneak Attack."}
      - {name: Vanishing Act, level: 8, action: "1 Action", description: "Hide after attack. Stealth DC = 10 + number of hostile creatures that saw the attack."}
      - {name: Execution, level: 10, action: "Before Attack", description: "1/Long Rest. Study target 1 round. If hit and target has fewer than 5x your level HP: FORT DC 18 or die. Success: normal damage + 5d6 bonus."}
  - name: Shadow
    role: Stealth/Evasion
    features:
      - {name: Shadow Step, level: 6, action: "1 Action", description: "1/Short Rest free. Teleport up to 30 ft to dim light/darkness. Additional uses beyond the first each cost 1 action."}
      - {name: Evasion, level: 6, action: Passive, description: "Reflex save for half damage: take no damage on success, half on fail."}
      - {name: Cloak of Shadows, level: 8, action: "1 Action", description: "1/Short Rest. Invisibility 1 minute. In dim light/darkness: persists through attacks. Breaks on hit or bright light."}
      - {name: Slippery Mind, level: 8, action: Passive, description: "Advantage on Will saves vs charmed, frightened, or mentally controlled."}
      - {name: Living Shadow, level: 10, action: "1 Action", description: "1/Long Rest. 10 min. Move through objects. Resistance to all damage except force/radiant. Invisible in dim light. End turn in solid: 3d10 force."}
  - name: Spy
    role: Infiltration/Intelligence
    features:
      - {name: Perfect Disguise, level: 6, action: "10 minutes", description: "Create disguise with advantage on Deception. Undetectable by nonmagical means. Study 1 hour for perfect impersonation."}
      - {name: Codebreaker, level: 6, action: Passive, description: "1 hour to decipher codes/languages. Advantage on Investigation for hidden info."}
      - {name: Planted Evidence, level: 8, action: "1 Minute", description: "Plant false evidence. Investigation DC = 8+INT+prof+Deception bonus (min DC 15)."}
      - {name: Double Agent, level: 8, action: Passive, description: "Mind-reading attempts: contested INT vs your PRE+prof. Their failure = false info. You know of the attempt."}
      - {name: Feint, level: 8, action: "1 Action", description: "1/round. Choose creature within 30 ft. Deception vs Insight (contested). Win: target disadvantage on next attack + ally advantage on next attack against target before your next turn. Lose: target gains advantage on next attack against you."}
      - {name: Read the Fight, level: 8, action: "Free Action", description: "Start of your turn. Choose 1 creature within 60 ft. Insight DC 15 (DC 20 named/boss enemies). Success: learn (a) whether creature will attack, (b) likely target, or (c) whether creature plans to move 15+ ft. Share as free communication: 1 ally gains +1 to saves vs that creature's next ability."}
      - {name: Phantom Protocol, level: 10, action: "1 Action", description: "1/Long Rest. 1 hour. Undetectable by cameras/surveillance. Cannot be tracked. Creatures Will DC 18 or forget seeing you. Magical detection at disadvantage."}
specializations: [Assassin, Shadow, Spy]
starting_equipment:
  - Two finesse weapons
  - Sidearm
  - Light armor
  - "Operative's kit and camouflage cloak"
---
# Operative

> **Recommended Build Guide — Classless System**
> This file describes the **Operative recommended build**: a curated path through Ashfall's shared skill trees designed for this build's core fantasy. Under the current rules, you are **not locked to this build**. Choose a **chassis** for your starting stats and proficiencies, then spend **Character Points (CP)** in any skill trees that match your character concept.
>
> - **Chassis selection and starting stats:** see [Chassis](../chassis.md)
> - **CP economy, spending rules, and milestones:** see [Character Points](../character-points.md)
> - **Full skill tree catalog:** see [Skill Trees](../skill-trees.md)
>
> The ability descriptions, skill tree layouts, and feature details in this file remain the authoritative rules reference for those abilities. The CP values listed in the skill trees are the costs for purchasing abilities.

*Shadows have value in the Wasteland. While raiders crash through the front gate and soldiers hold the line, Operatives slip through ventilation shafts, scale rusted walls, and put bullets through skulls from 300 yards out. They're scouts, assassins, spies, and thieves—the people hired when violence needs to be quiet and efficiency needs to be absolute. Some were military spec-ops before the Fall; others learned their trade in the cutthroat politics of settlement intrigue or the brutal schooling of raider gangs.*

*An Operative's world is one of calculated risks and perfect timing. They memorize guard patrols, identify structural weaknesses, and know exactly where to place a knife for a silent kill. Their gear is minimalist—lightweight armor that doesn't rustle, weapons modified for stealth, lockpicks that can open pre-war security doors, and enough tricks and tools to ghost through places others would die trying to enter. In combat, they don't fight fair—they fight smart, striking from advantage and vanishing before retaliation.*

*But the Operative's life is lonely. Trust is a liability when you've betrayed others for contracts. Relationships are tactical assets. Many struggle with Humanity loss—not from the killing (though there's plenty of that), but from the constant deception, the wearing of masks, the loss of a true self beneath layers of cover identities. Some maintain a code: only kill those who deserve it, never harm innocents, loyalty to crew above all. Others become monsters, sociopaths who see people as targets and obstacles. The Wasteland needs its shadows—but shadows can consume those who live in them.*

![An operative perches in the shadows, watching the wasteland below with calculating eyes](/images/illustrations/operative-perched.png)

## Core Statistics

| Attribute | Value |
|-----------|-------|
| **Primary Stats** | AGI/PRE |
| **Secondary Stat** | WIS |
| **Hit Die** | d6 |
| **Starting HP** | 8 + END modifier |
| **Starting Humanity** | 10 |
| **Starting CP** | 15 |

## Proficiencies

**Weapons:** Simple weapons, sidearms, melee finesse weapons
**Armor:** Light armor
**Saving Throws:** Reflex, Will
**Skills:** Stealth, Deception, plus **3** of your choice (most of any build). Gains bonus proficiency picks at L5 and L10, and pays half CP cost for skill proficiencies and expertise upgrades.

## Starting Equipment

- Light armor (dark tactical gear, DV 11 + AGI mod)
- Two melee finesse weapons (combat knives, garrote, etc.)
- Sidearm (pistol or suppressed firearm)
- Operative's kit: lockpicks, climbing gear, grappling hook, smoke bomb (1 use)
- Camouflage cloak or dark clothing (advantage on Stealth in low light)

## Level Progression Features (Levels 1-5)

### Level 1: Sneak Attack

**Sneak Attack:** Once per turn, when you hit with a weapon attack (melee or ranged) and have **advantage on the attack roll**, OR when an **ally is within 5 feet of the target** and the ally isn't incapacitated, you deal extra Sneak Attack damage. You must be **able to see the target** to deal Sneak Attack damage — a target in Heavily Obscured conditions (magical or environmental darkness, heavy fog, etc.) does not meet this requirement. Exception: if you can perceive the target through non-visual means (hearing, tremorsense, Umbral Senses, etc.), the GM may rule you can still qualify for Sneak Attack (see **Combat — Concealment**).

Sneak Attack damage starts at 1d6 and scales with level (see table below).

**Scaling:**
- **Level 1-2:** +1d6
- **Level 3-4:** +2d6
- **Level 5-8:** +3d6
- **Level 9-12:** +4d6
- **Level 13-16:** +5d6
- **Level 17-20:** +6d6

Notes:
- Flanking with an ally satisfies the advantage condition for melee attacks.
- You can Sneak Attack with ranged weapons if you have advantage (e.g., from being hidden).
- Sneak Attack can trigger on reaction attacks (such as Attack of Opportunity), as it is once per *turn*, not once per *round*.
- **Sneak Attack damage is NOT multiplied on critical hits.** (Roll Sneak Attack dice once; do not double them.)
- **Visibility requirement:** You must see the target. A target fully inside Heavily Obscured terrain does not meet the eligibility requirement unless you have a non-visual sense that lets you perceive their precise location (GM's discretion). See **Combat — Concealment — Heavily Obscured** for the full ruling.

### Level 1: Expertise

**Effect:** Choose **2 skills** in which you have proficiency. Your proficiency bonus is **doubled** for those skills (Expert tier).

**Example:** At Level 1 with +2 proficiency, Expertise makes it +4. At Level 5 with +3 proficiency, Expertise makes it +6.

**Common Choices:** Stealth (for infiltration), Deception (for disguise), Lockpicking, Sleight of Hand, or Perception.

**Special:** You can change one Expertise skill during a long rest (you shift focus in training). This flexibility is unique to the Operative — all other characters' Expertise choices are permanent.

**Scaling Expertise:** You gain additional free Expertise at **Level 6** (+1 skill) and **Level 12** (+1 skill), for a total of 4 free Expertise skills by Level 12 without spending any CP.

### Operative Skill Mastery

The Operative is the undisputed skill specialist. In addition to starting with the most proficiencies of any build (5 class + 1 background + 2 player choice = 8), the Operative benefits from:

- **Bonus Proficiency Picks:** Gain 1 free proficiency at Level 5 and Level 10 (in addition to the standard picks at L3, L8, L15 available to all characters)
- **Half-Price CP Skills:** Gaining a new proficiency costs **1 CP** (instead of 2). Upgrading to Expert costs **2 CP** (instead of 4).
- **Swappable Expertise:** Change one Expertise skill per long rest (unique to Operative)
- **Free Expertise Scaling:** 2 free at L1, +1 at L6, +1 at L12 = 4 free Expertise skills

By Level 15, a fully invested Operative can have **13+ proficiencies** and **4+ Expertise skills** — making them competent at almost everything and elite at their specialties.

### Level 2: Cunning Action

**Action Cost:** 1 action (in 3-action economy)
**Effect:** You are exceptionally agile in combat. You can use **1 action** to perform one of the following:

- **Dash:** Move up to your full speed again (essentially double movement for 1 action)
- **Disengage:** Your movement doesn't provoke opportunity attacks for the rest of the turn
- **Hide:** Make a Stealth check to attempt to hide (if you have cover or concealment)

**Special:** Most characters would need to use these as full 1-action maneuvers, but Operatives are so practiced they can weave these into their turn seamlessly. This lets you move 3x your speed (1 action move + 1 Cunning Dash + 1 action move = 3x movement in one turn).

### Level 3: Uncanny Dodge

**Trigger:** When an attacker you can see hits you with an attack
**Action Cost:** Reaction
**Effect:** You halve the attack's damage against you. This represents rolling with the blow, twisting at the last second, or deflecting it off armor angles.

**Special:** You can use this against any attack you can see coming—melee, ranged, even spells (if you see the caster). You can't use it if you're surprised or incapacitated.

### Level 4: Attribute Improvement

Increase one attribute by +2 or two attributes by +1 each (maximum 20).

### Level 5: Ghost Strike (Capstone)

**Action Cost:** Special (part of an attack action)
**Frequency:** 1/short rest
**Conditions:** You must be hidden from your target (they don't know your exact location)
**Effect:** Your next attack automatically **critically hits** (roll weapon damage dice twice). Additionally, the target must make a **DC 15 Fortitude save** or be **stunned** for 1 round (they're reeling from the shock of the ambush).

**Important:** Ghost Strike's automatic critical hit doubles your **weapon damage dice only**. Sneak Attack dice are NOT doubled — roll Sneak Attack dice once normally and add them to the doubled weapon damage.

**Damage Example:** If you hit with a knife (1d4) and have +3d6 Sneak Attack at Level 5, Ghost Strike deals: 2d4 (crit knife) + 3d6 (Sneak Attack, not doubled) + your AGI modifier.

**Special:** This represents the perfect ambush—the strike from nowhere that drops targets before they know they're in danger. The stunned condition means the target can't move, act, or react (they're clutching the wound in disbelief).

## Skill Trees

### Wetwork (Assassination & Lethality)

The art of silent killing, poison application, and instant takedowns.

**Tier 1 Abilities (5 CP each):**
- **Silent Takedown:** When you make a Sneak Attack against a surprised creature, add your proficiency bonus to the damage (represents throat-slitting precision)
- **Poison Application:** You can apply poisons to weapons as a free action (instead of 1 action). Poisons you apply last for 3 hits instead of 1.
- **Vital Strike:** Once per short rest, when you hit with Sneak Attack, you can force the target to make a DC 13 Fortitude save. On failure, they're bleeding (take 1d6 damage at the start of their turn until they use 1 action to staunch it or receive healing).

**Tier 2 Abilities (10 CP each, requires one Tier 1):**
- **Assassinate:** If you attack a surprised creature in the first round of combat, your attack automatically crits (like Ghost Strike, but for any surprise round). *(If you take the Assassin specialization, the Assassin's Assassinate replaces this ability.)*
- **Lethal Precision:** Your Sneak Attack damage increases by +1d6 (stacks with level scaling)
- **Coup de Grace:** When you attack an unconscious, helpless, or stunned enemy, you can declare an instant kill (**GM** may rule certain creatures immune—can't instant-kill a dragon, but a human guard? Dead.)

**Tier 3 Abilities (15 CP each, requires Level 5+ and one Tier 2):**
- **Death Strike:** 1/short rest, when you hit with Sneak Attack, double your Sneak Attack damage dice. All other aspects of the attack (weapon damage, modifiers) remain the same — only the Sneak Attack dice are doubled. *(If you take the Assassin specialization, the Assassin's Death Strike — which maximizes Sneak Attack dice against surprised targets — replaces this tree version.)*
- **Master Poisoner:** You can craft deadly poisons (1 hour, DC 15 Medicine check): Lethal Toxin deals 4d6 poison damage, DC 16 Fortitude save for half, and target is poisoned for 1 minute. You can identify and extract venom from creatures.

### Infiltration (Stealth & Security)

Bypassing locks, traps, alarms, and physical barriers.

**Tier 1 Abilities (5 CP each):**
- **Locksmith:** You have advantage on checks to pick locks. You can pick locks in half the normal time (1 action instead of 2 actions, or 30 seconds instead of 1 minute).
- **Trap Sense:** You have advantage on Perception checks to detect traps. When you trigger a trap, you can use your reaction to make a Reflex save with advantage to avoid or halve its effects.
- **Disguise Expert:** You can create convincing disguises with 10 minutes and basic materials. Creatures have disadvantage on Insight checks to see through your disguise.

**Tier 2 Abilities (10 CP each, requires one Tier 1):**
- **Security Bypass:** You can hack or hotwire basic electronic locks and terminals (DC 14 Tech check, 1 minute). You can disable alarms and security systems with a DC 16 Tech check.
- **Trapbreaker:** You can disarm traps without triggering them (DC varies by trap complexity). Once per short rest, you can automatically succeed on a trap disarm check.
- **Master of Disguise:** Your disguises are nearly flawless. You can impersonate specific individuals if you've studied them for at least 1 hour. Creatures have disadvantage on Insight checks to see through your impersonation.

**Tier 3 Abilities (15 CP each, requires Level 5+ and one Tier 2):**
- **Silent Veil:** 1/short rest, turn invisible for 1 minute (as long as you don't attack or cast a spell). You make no sound while moving. Perfect infiltration.
- **Grand Heist:** Given 1 hour of preparation and observation, you can plan a heist. During the heist, you and allies within 30 ft gain +2 to Stealth, Lockpicking, and Deception checks. Once during the heist, you can declare a "contingency"—you had a backup plan, and something goes right (negotiate details with GM).

### Recon (Scouting & Intelligence)

Gathering information, detecting danger, and staying ahead of threats.

**Tier 1 Abilities (5 CP each):**
- **Scout's Eye:** You have advantage on Perception checks to spot enemies or hazards. You can see clearly up to 1 mile away (as if using binoculars).
- **Danger Sense:** You can't be surprised while conscious. You have advantage on initiative rolls.
- **Tracker:** You can follow tracks and trails with a DC 12 Survival check. You can identify how many creatures passed, their size, and how long ago (within 1 hour accuracy).

**Tier 2 Abilities (10 CP each, requires one Tier 1):**
- **Informant Network:** During downtime in a settlement, you can gather information (rumors, guard schedules, faction politics) with a DC 13 PRE check. You learn one useful piece of intel per day.
- **Overwatch:** When you take the Dodge action (use 1 action to gain +2 DV and advantage on Reflex saves), allies within 30 ft also gain +1 DV (you're calling out threats).
- **Reconnaissance Expert:** You can scout an area in half the time. When you scout, you learn: enemy numbers, patrol routes, entry points, and major hazards. You can create a mental map of any location you've explored.

**Tier 3 Abilities (15 CP each, requires Level 5+ and one Tier 2):**
- **Perfect Ambush:** 1/long rest, if you have 10 minutes to prepare an ambush, you and all allies gain surprise against the first enemy group that enters the kill zone. Additionally, all allies gain +1d6 damage on their first attack.
- **Intel Broker:** You have contacts in every major settlement. Once per session, you can call in a favor: gain access to restricted info, acquire illegal goods at half price, or arrange a meeting with a faction leader. Your network owes you.

## Magic: None (Purchase via CP)

Operatives have **no innate magic**. They're pure skill, speed, and precision.

However, they can purchase cantrips using CP at a premium:
- **15 CP per cantrip** (more expensive than casters)
- Common choices: *Minor Illusion* (create distractions), *Message* (silent communication), *Mage Hand* (manipulate objects remotely)

**No spell slots.** If they want leveled spells, they must multiclass or acquire magical items.

## Sample CP Expenditures

Here's how a typical Operative might spend CP from Level 1-5:

**Level 1 (15 CP total):**
- Silent Takedown (Wetwork Tier 1): 5 CP
- *Remaining: 10 CP*

**Level 2 (25 CP total):**
- Locksmith (Infiltration Tier 1): 5 CP
- Danger Sense (Recon Tier 1): 5 CP
- *Remaining: 10 CP*

**Level 3 (35 CP total):**
- Assassinate (Wetwork Tier 2): 10 CP
- Trap Sense (Infiltration Tier 1): 5 CP
- *Remaining: 5 CP*

**Level 4 (45 CP total):**
- Security Bypass (Infiltration Tier 2): 10 CP
- Scout's Eye (Recon Tier 1): 5 CP
- *Remaining: 0 CP*

**Level 5 (55 CP total):**
- Informant Network (Recon Tier 2): 10 CP
- *Remaining: 0 CP*

---

## Advanced Specializations (Levels 6-10)

At level 6, the Operative selects one of three Advanced Specializations. These specializations unlock new skill tree branches, powerful abilities, and define the Operative's role in the wasteland's ongoing struggle.

### Assassin (Burst Damage)

**Flavor:** One chance. One kill. Assassins are patient, methodical killers who wait for the perfect moment to strike. When that moment comes, they are utterly devastating.

**Prerequisites:** Operative build, level 6

*Note: Some Assassin abilities share names with Wetwork skill tree abilities. The specialization version replaces the skill tree version if you have both — use the more powerful specialization version. If you purchased Assassinate or Death Strike from the Wetwork tree before taking this specialization, the CP is not refunded but the upgrade is automatic.*

**Level 6 Features:**
- **Death Strike:** When you hit a surprised creature or a creature that hasn't yet acted in the first round of combat, your attack deals maximum Sneak Attack damage instead of rolling the dice. All other damage dice are rolled normally. *(Replaces Wetwork Tier 3 Death Strike if you have it.)*
- **Poison Master:** You can apply poison to a weapon as a free action instead of an action. Additionally, the save DC for any poison you use or craft increases by 2.

**Level 8 Features:**
- **Assassinate:** When you attack a creature that hasn't detected your presence, your attack automatically scores a critical hit if it hits. This stacks with Sneak Attack damage, creating devastating opening strikes. *(Replaces Wetwork Tier 2 Assassinate if you have it.)*
- **Vanishing Act:** After you make an attack, you can spend 1 action to attempt to Hide, even if you have no cover or concealment. The Stealth check DC equals 10 + the number of hostile creatures that saw your attack.

**Level 10 Capstone:**
- **Execution:** Once per long rest, you can declare an Execution attempt before making an attack against a target you've studied for at least 1 round. If the attack hits and the target has fewer current HP than 5 x your character level, they must make a Fortitude save (DC 18) or die instantly. On a successful save, they take normal damage plus an additional 5d6 damage of the weapon's type.

---

#### Lethality Skill Tree (Assassin only)

*The gap between a good assassin and a legendary one is patience — knowing exactly when to strike and making sure the moment arrives. The Lethality tree expands the Assassin's kill window, strengthens the poisons that create it, and hones Execution into a weapon that never wastes an opportunity.*

**Tier 1 Abilities (5 CP each):**

- **Marked for Death:** At the start of each of your turns, you may designate one creature within 60 feet you can see as your Mark (this costs no action). Until you change the mark or the creature dies: you deal **+1d6 Sneak Attack damage** against your Mark (on top of your normal Sneak Attack dice), and a marked creature that has not yet acted in the current round **counts as surprised** for the purpose of triggering your **Death Strike** ability — you have already committed to the kill before they've had a chance to react.

  The mark transfers immediately if you change it. You can only have one mark at a time.

  *Example: The Assassin marks a raider lieutenant before initiative is rolled. On round 1, before the lieutenant acts, Death Strike applies automatically — the Assassin gets maximum Sneak Attack damage without needing to set up a surprise condition from stealth.*

- **Predator's Venom:** During downtime or with 30 minutes of preparation at a workbench, you can craft specialized tactical poisons. You can have up to 3 doses prepared total at any time (across all types). Choose any combination:

  - **Numbing Toxin** — Fortitude save (DC = 14 + your INT modifier). On failure: target is **slowed** (speed halved) for 1 minute.
  - **Nerve Toxin** — Fortitude save (DC = 14 + your INT modifier). On failure: target **loses its reaction** until the end of its next turn.
  - **Paralytic** — Fortitude save (DC = 16 + your INT modifier). On failure: target is **incapacitated** (cannot act) for 1 round.

  These poisons are applied the same way as other poisons — as a free action if you have **Poison Master**. The conditions they apply create ideal setups for **Kill Window** (see Tier 2).

**Tier 2 Abilities (10 CP each, requires one Tier 1):**

- **Kill Window:** Your **Death Strike** ability no longer requires the target to be surprised or to have not yet acted in the first round. It now also triggers whenever the target is **suffering a condition** (stunned, dazed, incapacitated, paralyzed, poisoned, frightened, restrained, or bleeding). If an enemy is slowed by your Numbing Toxin, they count for Kill Window. If they're stunned from a Medic's ability, they count. The kill window is any moment of disadvantage — you recognize it and exploit it.

  Additionally, when you trigger Death Strike (on a maximum-Sneak-Attack hit), the target **cannot use its reaction** until the start of its next turn — the shock of maximized damage takes that much out of them.

- **Stalker's Focus:** Once per short rest, you can declare one creature you can observe as your Stalker's Focus. Until it dies or you change your focus: you have **advantage on all attack rolls** against it, your **Execution** ability's instant-kill HP threshold against this target increases to **6 × your character level** (up from 5 ×), and once per round you may **reroll one missed attack roll** against it (keeping the reroll result). This represents deep study of a high-value target — you have memorized their stance, their tells, their weakness.

  *The Stalker's Focus is the setup; Execution is the payoff. Combined with Executioner's Patience (below), this turns a boss-level target into a hunt you will win.*

**Tier 3 Abilities (15 CP each, requires Assassin specialization and one Tier 2):**

- **Executioner's Patience:** Your **Execution** ability gains two improvements:

  1. **No study required (if you've already drawn blood):** The Execution normally requires you to "study the target for at least 1 round" before declaring. If you have already dealt damage to the target at any point this combat, you can skip the study round — you've already learned what you need from the wounds you've inflicted.

  2. **Execution that saves still costs them something:** If the target succeeds on their Fortitude save against Execution, they are **stunned for 1 round** (they survived, barely, but not without cost). They still take the normal damage + 5d6 bonus damage from the successful save result. The "automatic death" is gone — the stunned state is not. An Assassin who fires the Execution is never wasting a turn, even against creatures with strong Fortitude.

- **Vanishing Shot:** Once per short rest. When you make an attack **from a hidden position** and the attack **misses**, you may invoke Vanishing Shot. The miss **does not reveal your position** — instead, you appear to have fired from a false angle of your choosing (within 90 degrees of your actual position). All creatures that could have located you by the attack's origin must make a **Perception check (DC = 10 + your Stealth modifier)** or believe the attack came from the false angle, not your actual location.

  Additionally, you may immediately make **one additional attack** from your actual hidden position against any target within range before the end of your turn. Your Sneak Attack applies to this additional attack if you are still hidden. You must still meet all other conditions for the attack (range, weapon, etc.).

  *The setup is this: you took your best shot, missed, and vanished back into shadow. The enemy is looking the wrong direction. Now strike.*

---

### Shadow (Stealth/Escape)

**Flavor:** You can't kill what you can't find. Shadows are phantoms, moving through the world unseen, unheard, and untouchable. They strike from darkness and disappear before their victims fall.

**Prerequisites:** Operative build, level 6

**Level 6 Features:**
- **Shadow Step:** As **1 action**, you can teleport up to 30 ft to an unoccupied space you can see that is in dim light or darkness. You can use this ability once per short rest for free; each additional use beyond the first costs **1 action** (the same cost as the primary use — shadow travel is no easier the second time).
- **Evasion:** When you are subjected to an effect that allows a Reflex save for half damage, you instead take no damage on a successful save and half damage on a failed save.

**Level 8 Features:**
- **Cloak of Shadows:** As 1 action, you become invisible for 1 minute or until you attack or cast a spell. However, if you are in dim light or darkness, the invisibility doesn't break when you attack — it only breaks if you are hit by an attack or enter bright light. Usable once per short rest.
- **Slippery Mind:** You gain advantage on Will saves against being charmed, frightened, or mentally controlled. Your mind is as elusive as your body.

**Level 10 Capstone:**
- **Living Shadow:** Once per long rest, for 10 minutes, you become semi-incorporeal shadow. You can move through solid objects and creatures as if they were difficult terrain. You have resistance to all damage except force and radiant. You are invisible while in dim light or darkness. If you end your turn inside a solid object, you take 3d10 force damage and are immediately shunted to the nearest unoccupied space.

---

#### Shadowcraft Skill Tree (Shadow only)

*The Shadow doesn't just use darkness — they are darkness. The Shadowcraft tree turns every dim corner into a weapon, makes every shadow an extension of the Shadow's will, and ensures that anything that hunts a Shadow ends up hunting a reflection.*

**Tier 1 Abilities (5 CP each):**

- **Veil of Shadow:** As **1 action**, you conjure a sphere of unnatural darkness at a point within **30 feet** of you. The darkness fills a **10-foot radius** and lasts until the start of your next turn. Normal vision — including darkvision — cannot see through this darkness. However, **you** can see within the darkness as if it were dim light (you are the shadow's source, and it parts for you).

  Unlike most darkness effects, Veil of Shadow has no rest cost — you can maintain it indefinitely by spending 1 action per round to refresh it (it lapses at the start of your turn and you renew it). You can reposition it each time you refresh it, moving it to a new point within 30 feet.

  *Combines offensively with Shadow Step — step into a darkness you created. Combines defensively with Cloak of Shadows, which no longer breaks on hit in dim light or darkness.*

- **Umbral Senses:** While you are in **dim light or darkness**, you gain the following passive benefits automatically (no action required):

  - **Shadow Perception:** You have an imprecise awareness of invisible, hidden, or concealed creatures within **30 feet** of you. You do not see them — but you feel the disturbance their presence creates in the shadow around you. You know they are there and approximately where, but cannot pinpoint their exact square. (You can narrow down to a 5-foot area with a successful Perception check DC 15.)
  - **Shadow Speed:** Your movement speed increases by **+10 feet**.
  - **Stealthy Footfall:** You have **advantage on Stealth checks**.

  These benefits deactivate as soon as you enter bright light and reactivate as soon as you return to dim light or darkness.

**Tier 2 Abilities (10 CP each, requires one Tier 1):**

- **Shadow Snare:** Once per short rest. When you use **Shadow Step** to teleport away from a location, you may leave a **shadow anchor** at your departure point. The anchor is invisible — creatures cannot detect it without a Perception check (DC = 10 + your Stealth modifier).

  Any creature (other than you and allies you designate) that **enters the anchored square** or **starts their turn there** must make a **Reflex save (DC = 12 + your AGI modifier)** or be **restrained** until the start of their next turn (the shadows tangle around them). A restrained creature can spend 1 action to attempt to break free (Strength check, same DC).

  A shadow anchor can be placed on any Shadow Step use (including paid additional uses). However, the Reflex save trigger — the restraint effect — can activate **once per short rest**, regardless of how many Shadow Step uses created anchors this rest.

  The anchor lasts until you use Shadow Step again or for 1 minute, whichever comes first.

  *Shadow Step was a pure repositioning tool. Shadow Snare makes your teleportation leave a mark — the space you vacated becomes dangerous.*

- **Cloak Extension:** Your **Cloak of Shadows** ability improves in two ways:

  1. **Ally shroud:** When you activate Cloak of Shadows, you may extend **partial concealment** to one willing ally within 5 feet of you. That ally becomes **lightly obscured** — attacks against them have disadvantage until the end of their next turn.

  2. **Hardened persistence in darkness:** While in **dim light or darkness**, your Cloak of Shadows no longer breaks when you are **hit by an attack**. It now only breaks when you **enter bright light**. (Outside of dim light/darkness, the original "breaks on hit" condition still applies.)

  *The standard Cloak breaks when hit. In darkness, a Shadow should be untouchable through terrain alone — this reflects that.*

**Tier 3 Abilities (15 CP each, requires Shadow specialization and one Tier 2):**

- **Shade Form:** Once per long rest, for **1 minute**, you become a two-dimensional shadow traveling along surfaces. While in Shade Form:

  - You can pass **under doors, through cracks, and along walls, floors, and ceilings** as if moving on flat ground. Your movement speed applies to all surface travel.
  - You occupy your normal space for targeting purposes, but are treated as **prone** to attackers from above or below (relevant if traveling along ceilings).
  - When you make **a melee or ranged attack against a creature while approaching it along a surface it is not watching** (you traveled along the floor to flank, or dropped from the ceiling), you have **advantage on the attack**.
  - You are **immune to the grappled and restrained conditions** while in Shade Form — you have no form to grab.
  - Shade Form ends when you choose to end it, take damage equal to or greater than your proficiency bonus in a single hit, or the 1-minute duration expires.

  *Shade Form is not Living Shadow — Living Shadow grants damage resistance and incorporeal movement through walls. Shade Form grants precise surface travel and attack advantage via approach angles. They are different tools: one for surviving a brutal fight, one for winning before it starts.*

- **Phantom Twin:** Once per short rest, as **1 action**, you create a **shadow duplicate** of yourself in an adjacent unoccupied space. The Phantom Twin is a semi-autonomous construct of shadow with the following properties:

  - **Appearance:** Identical to you. Enemies cannot visually distinguish you from the Twin without a **Perception check (DC = 10 + your Stealth modifier)**. On failure, when targeting you or the Twin, they must determine which is real (50/50 — roll randomly).
  - **Flanking:** The Twin counts as an ally for **flanking** purposes, enabling Sneak Attack.
  - **Fragile:** The Twin has **1 HP** and **your Defense Value**. Any damage destroys it instantly — but when the Twin is **destroyed by an attack**, the shadow detonates: the attacking creature is **blinded** until the end of their next turn.
  - **Static:** The Twin cannot move on its own. You can spend **1 action** to move it up to your speed. It cannot attack.
  - **Duration:** The Twin lasts for 1 minute or until destroyed.

  *The Phantom Twin is an information weapon — it makes the enemy choose wrong. Even if they never attack it, the Perception check creates doubt that disrupts targeting priority. If they do attack it, they're blinded. Either way, the Shadow benefits.*

---

### Spy (Infiltration/Disguise/Social)

**Flavor:** A different face for every occasion. Spies are masters of deception, assuming whatever identity is needed to complete the mission. They slip through security, extract secrets, and disappear without a trace.

**Prerequisites:** Operative build, level 6

**Level 6 Features:**
- **Perfect Disguise:** You can spend 10 minutes creating a disguise using available materials. While disguised, you gain advantage on Deception checks to maintain your false identity, and your disguise is undetectable by nonmagical means. If you study a specific person for 1 hour, you can impersonate them specifically, mimicking mannerisms and voice.
- **Codebreaker:** You can decipher codes, encrypted messages, and foreign languages given 1 hour of focused study. You gain advantage on Investigation checks made to find hidden information, secret compartments, or concealed messages.

**Level 8 Features:**
- **Planted Evidence:** You can spend 1 minute in an area to plant convincing false evidence (documents, objects, traces). The Investigation DC to detect the forgery equals 8 + your INT + proficiency + your Deception bonus (minimum DC 15).
- **Double Agent:** When a creature attempts to read your mind or detect your lies through magical means, they must succeed on a **contested check: their 1d20 + INT modifier vs. your 1d20 + PRE modifier + proficiency** (see Contested Checks in Combat rules) or receive false information that you mentally provide. You are aware of the intrusion attempt.
- **Feint:** Once per round, as **1 action**, you can deceive one creature within **30 feet** that can see and hear you. Make a **Deception check** contested by the target's **Insight**. On a **success:** the target has **disadvantage** on its next attack roll (against any target) before the end of your next turn, AND the next attack roll made against that creature by **you or any ally** before the end of your next turn has **advantage**. You created an opening. On a **failure:** the target sees through your misdirection and gains **advantage on its next attack against you** (it knows you telegraphed). The risk is part of the play.
- **Read the Fight:** At the **start of each of your turns**, as a **free action**, you can choose one creature within **60 feet** that you can see. Make an **Insight check (DC 15; DC 20 for named enemies, lieutenants, and boss-tier creatures)**. On a success, the GM reveals **one** of the following about that creature's intentions this turn (player's choice of which question to ask): **(a)** Whether the creature intends to make an attack or use a damaging ability, **(b)** Which target the creature is most likely to attack this turn, or **(c)** Whether the creature plans to move more than 15 feet before acting. Additionally, once per turn you can share this intelligence as a **free communication** — one ally who can hear you gains **+1 to any saving throw** against that creature's next ability before the start of your next turn.

*Design Note: Feint and Read the Fight establish the Spy's in-combat identity. The Assassin kills efficiently; the Shadow disappears; the Spy controls information. A Spy using Feint is betting their action on a skill contest to grant party-wide advantage. A Spy using Read the Fight is the party's early warning system. These abilities use Deception and Insight as weapons — not damage dice or stealth evasion.*

**Level 10 Capstone:**
- **Phantom Protocol:** Once per long rest, for 1 hour, you become completely undetectable through mundane means. You don't appear on cameras or surveillance systems, can't be tracked by scent or footprints, and anyone who sees you must make a Will save (DC 18) or immediately forget they saw you when you leave their line of sight. Magical detection still functions but with disadvantage.

---

#### Tradecraft Skill Tree (Spy only)

*Information is a weapon. The Tradecraft tree takes every piece of intelligence the Spy has gathered — from Read the Fight, from Leverage, from Feint — and converts it into direct mechanical advantage. The Spy who invests in Tradecraft doesn't react to the battlefield. They set it.*

**Tier 1 Abilities (5 CP each):**

- **Combat Profiling:** Your **Read the Fight** ability improves in two ways:

  1. **Two questions, not one:** On a successful Read the Fight Insight check, you may ask **two** of the three available questions (instead of one).

  2. **Broader intelligence sharing:** When you share Read the Fight intelligence as a free communication, **all allies who can hear you** gain the **+2 saving throw bonus** against that creature's next ability (up from +1, and extended from one ally to all).

  *Read the Fight is already a free action every turn. Combat Profiling makes every use more valuable — more information extracted, more allies protected.*

- **Cover Identity:** Your **Perfect Disguise** ability gains a reactive combat use. While you are wearing a disguise, whenever a creature targets you with a **ranged attack, targeted spell, or ranged ability**, you may use your **reaction** to invoke Cover Identity:

  Make a **Deception check**:
  - **DC 12 success:** The attacker hesitates and has **disadvantage on the triggering attack**.
  - **DC 16 success:** Redirect the attack to any other creature within **30 feet** that the attacker can see.
  - **Failure:** No effect. The attack proceeds normally.

  Invoking Cover Identity does not break your disguise unless the attack hits and you react visibly.

  *This is the mechanical hook for Perfect Disguise in combat that the class design was missing. A Spy mid-combat who appears to be a guard changes everything.*

**Tier 2 Abilities (10 CP each, requires one Tier 1):**

- **Anticipated Move:** When your **Read the Fight** Insight check reveals that a creature **intends to make an attack or use a damaging ability**, you may use your **reaction** to choose one of the following:

  - **(A) Preemptive Step:** You immediately move up to **half your speed** without provoking opportunity attacks.
  - **(B) Counterstrike Setup:** The next ally who attacks that creature before the end of your next turn deals an additional **+2d6 bonus damage** on a hit.

  You must choose (A) or (B) when you use your reaction.

  *Anticipated Move is Read the Fight's direct conversion into proactive combat advantage. Before this ability, Read the Fight was informational. After, it triggers a reaction that can reposition you before an attack lands or set up a deadly counterstrike.*

- **Leveraged Intel:** Your **Leverage** ability gains two extensions:

  1. **Collateral pressure:** The -2 to saves from Leverage extends to **any allies of the target within 10 feet**.

  2. **Combat leverage via Read the Fight:** Once per combat, when you have successfully used **Read the Fight** on a creature this combat (even without prior Leverage), you may invoke this ability as a free action on your turn. The creature suffers **-1 to all saving throws** for the remainder of this combat. This -1 stacks with the full **-2 from Leverage** if both are active (-3 total).

  *The Spy who gathered intelligence before the fight and during the fight gets compounding returns.*

**Tier 3 Abilities (15 CP each, requires Spy specialization and one Tier 2):**

- **Turned Asset:** Once per long rest. As **1 action** during combat, you can attempt to flip a creature's loyalty mid-fight. The target must not be a **boss-tier creature** (GM determines boss status — a faction lieutenant or named unique enemy typically qualifies; a rank-and-file soldier does not). To use this ability, the target must also meet **one** of the following conditions:
  - You successfully used **Feint** against this creature at least once this combat.
  - You successfully used **Read the Fight** on this creature at least **three times** this combat.
  - You successfully used a **Tradecraft tree ability** against this creature this combat.

  Make a **contested check: your 1d20 + PRE modifier + proficiency vs. their 1d20 + WIS modifier + proficiency**.

  **On success:** For **1 minute**, it will not willingly attack you or your allies. At your direction (spending 1 action, or free communication if Combat Profiling is active), it may make **one attack against a former ally** of its choosing. This ends if the creature takes damage from you or your allies.

  **On failure:** The creature recognizes the manipulation. It has **advantage on its next action** against you.

  *Turned Asset is the in-combat version of Double Agent — not "feed them false information," but "make them stop fighting for the other side." The requirement of established contact means you can't cold-open with it. The Spy earns this.*

- **Always Prepared:** Once per long rest. At the **start of combat** — or during the surprise round if you had advance warning — you may declare that you prepared for exactly this.

  Name **one enemy type, faction, or specific individual** that you knew about before the encounter began (requires at least **1 hour of downtime preparation** within the previous 24 hours).

  For the duration of this combat, against all creatures of the named type or the named individual:

  - **Attack advantage:** You have **advantage on all attack rolls** against them.
  - **Elevated Execution:** Your **Execution** instant-kill HP threshold against them increases to **6 × your character level**.
  - **Automatic Read:** Your **Read the Fight** automatically succeeds against them without a roll.
  - **Ally prep bonus:** All allies gain **+1 to attack rolls** against them.

  **Always Prepared does not function if you have not had 1 hour of downtime in the last 24 hours** — if the party has been in continuous danger, you haven't had time to prepare.

  *Always Prepared is the Spy's reward for playing the intelligence game consistently. It scales with the target information the player has gathered in downtime and roleplay, not just in combat.*

![An operative examines identification documents, blending deception with deadly precision](/images/illustrations/operative-with-id.png)

---

## Level 16: Perfect Predator (Build Capstone)

You are death incarnate. Your Sneak Attack damage increases to +6d6 (gaining the Level 17 scaling one level early). You can apply Sneak Attack damage twice per turn (once per attack, not limited to once per turn). You can take the Hide action as a free action once per turn in combat, even without cover (as long as you are not in bright light or being directly observed).

## Level 17: Specialization Final Evolution

### Assassin — Silent Death

If you deal damage with a surprise attack, the target must succeed on a Fortitude save (DC = 8 + prof + AGI mod) or be reduced to 0 HP instantly. You can assassinate targets up to two size categories larger than you. You have advantage on attacks against creatures that haven't acted yet in combat.

### Shadow — Shadow Walker

You can move through enemy-occupied spaces without provoking opportunity attacks. You ignore difficult terrain. You have advantage on saves against traps and detection magic. You can cast *invisibility* on yourself once per short rest without using a spell slot or components.

### Spy — Eyes Everywhere

Your passive Perception increases by +5. You can see perfectly in darkness up to 120 ft. You cannot be surprised. You can spot hidden or invisible creatures within 60 ft with a successful Perception check (no action required). Your movement speed increases by 15 ft.

## Level 20: Shadow Sovereign (Apex Ability)

**Once per long rest (1 week)**

You become a creature of pure shadow and stealth—existing between visibility and invisibility, a phantom that cannot be tracked or pinned down.

**Effects:**
- For 1 minute, you exist in a liminal state between realms
- All attacks against you have disadvantage
- All your attacks have advantage
- Your Sneak Attack damage applies to every attack you make (even if you don't meet the usual conditions)
- At the start of each of your turns, you can teleport up to 30 ft to any space you can see (this is a free action)
- You leave no tracks, scent, or magical trace of your passage
- You can move through enemy-occupied spaces without provoking opportunity attacks
- You are immune to being grappled or restrained

**Drawback:** When Shadow Sovereign ends, you are disoriented and fatigued—you have disadvantage on Stealth checks for 1 hour as your presence becomes unusually loud in contrast.
