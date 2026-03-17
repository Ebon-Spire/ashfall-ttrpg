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
starting_ap: 15
role: Skill/Burst Damage
magic_type: "None (15 AP/cantrip)"
level_1_features: [Sneak Attack, Expertise]
skill_proficiency_count: 5
bonus_proficiency_levels: [5, 10]
free_expertise_levels: [1, 6, 12]
expertise_swappable: true
skill_ap_discount: 0.5
skill_trees:
  - name: Wetwork
    focus: Assassination
    abilities:
      - {name: Silent Takedown, ap_cost: 5, tier: 1, effect: "Kill unaware target below HP threshold"}
      - {name: Assassinate, ap_cost: 10, tier: 2, effect: "Auto-crit from stealth"}
      - {name: Death Strike, ap_cost: 15, tier: 3, effect: "Double sneak attack damage 1/SR"}
  - name: Infiltration
    focus: Access
    abilities:
      - {name: Locksmith, ap_cost: 5, tier: 1, effect: "+5 to lockpicking checks"}
      - {name: Security Bypass, ap_cost: 10, tier: 2, effect: "Disable electronic security"}
      - {name: Ghost Walk, ap_cost: 15, tier: 3, effect: "Invisible for 1 round 1/SR"}
  - name: Recon
    focus: Information
    abilities:
      - {name: "Scout's Eye", ap_cost: 5, tier: 1, effect: "See through walls 10ft 1/SR"}
      - {name: Overwatch, ap_cost: 10, tier: 2, effect: "Reaction attack on enemy movement"}
      - {name: Perfect Ambush, ap_cost: 15, tier: 3, effect: "Party gains surprise round"}
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
      - {name: Shadow Step, level: 6, action: "1 Action", description: "1/Short Rest free. Teleport up to 30 ft to dim light/darkness. Additional uses cost bonus action."}
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
      - {name: Ghost Protocol, level: 10, action: "1 Action", description: "1/Long Rest. 1 hour. Undetectable by cameras/surveillance. Cannot be tracked. Creatures Will DC 18 or forget seeing you. Magical detection at disadvantage."}
specializations: [Assassin, Shadow, Spy]
starting_equipment:
  - Two finesse weapons
  - Sidearm
  - Light armor
  - "Operative's kit and camouflage cloak"
---
# Operative

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
| **Starting AP** | 15 |

## Proficiencies

**Weapons:** Simple weapons, sidearms, melee finesse weapons
**Armor:** Light armor
**Saving Throws:** Reflex, Will
**Skills:** Stealth, Deception, plus **3** of your choice (most of any archetype). Gains bonus proficiency picks at L5 and L10, and pays half AP cost for skill proficiencies and expertise upgrades.

## Starting Equipment

- Light armor (dark tactical gear, DV 11 + AGI mod)
- Two melee finesse weapons (combat knives, garrote, etc.)
- Sidearm (pistol or suppressed firearm)
- Operative's kit: lockpicks, climbing gear, grappling hook, smoke bomb (1 use)
- Camouflage cloak or dark clothing (advantage on Stealth in low light)

## Level Progression Features (Levels 1-5)

### Level 1: Sneak Attack

**Sneak Attack:** Once per turn, when you hit with a weapon attack (melee or ranged) and have advantage on the attack roll, OR when an ally is within 5 feet of the target and the ally isn't incapacitated, you deal extra Sneak Attack damage. Sneak Attack damage starts at 1d6 and scales with level (see table below).

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

### Level 1: Expertise

**Effect:** Choose **2 skills** in which you have proficiency. Your proficiency bonus is **doubled** for those skills (Expert tier).

**Example:** At Level 1 with +2 proficiency, Expertise makes it +4. At Level 5 with +3 proficiency, Expertise makes it +6.

**Common Choices:** Stealth (for infiltration), Deception (for disguise), Lockpicking, Sleight of Hand, or Perception.

**Special:** You can change one Expertise skill during a long rest (you shift focus in training). This flexibility is unique to the Operative — all other characters' Expertise choices are permanent.

**Scaling Expertise:** You gain additional free Expertise at **Level 6** (+1 skill) and **Level 12** (+1 skill), for a total of 4 free Expertise skills by Level 12 without spending any AP.

### Operative Skill Mastery

The Operative is the undisputed skill specialist. In addition to starting with the most proficiencies of any archetype (5 class + 1 background + 2 player choice = 8), the Operative benefits from:

- **Bonus Proficiency Picks:** Gain 1 free proficiency at Level 5 and Level 10 (in addition to the standard picks at L3, L8, L15 available to all characters)
- **Half-Price AP Skills:** Gaining a new proficiency costs **1 AP** (instead of 2). Upgrading to Expert costs **2 AP** (instead of 4).
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

**Tier 1 Abilities (5 AP each):**
- **Silent Takedown:** When you make a Sneak Attack against a surprised creature, add your proficiency bonus to the damage (represents throat-slitting precision)
- **Poison Application:** You can apply poisons to weapons as a free action (instead of 1 action). Poisons you apply last for 3 hits instead of 1.
- **Vital Strike:** Once per short rest, when you hit with Sneak Attack, you can force the target to make a DC 13 Fortitude save. On failure, they're bleeding (take 1d6 damage at the start of their turn until they use 1 action to staunch it or receive healing).

**Tier 2 Abilities (10 AP each, requires one Tier 1):**
- **Assassinate:** If you attack a surprised creature in the first round of combat, your attack automatically crits (like Ghost Strike, but for any surprise round)
- **Lethal Precision:** Your Sneak Attack damage increases by +1d6 (stacks with level scaling)
- **Coup de Grace:** When you attack an unconscious, helpless, or stunned enemy, you can declare an instant kill (DM may rule certain creatures immune—can't instant-kill a dragon, but a human guard? Dead.)

**Tier 3 Abilities (15 AP each, requires Level 5+ and one Tier 2):**
- **Death Strike:** 1/long rest, when you hit with Sneak Attack, the target must make a DC 17 Fortitude save or drop to 0 HP immediately (heart-shot execution)
- **Master Poisoner:** You can craft deadly poisons (1 hour, DC 15 Medicine check): Lethal Toxin deals 4d6 poison damage, DC 16 Fortitude save for half, and target is poisoned for 1 minute. You can identify and extract venom from creatures.

### Infiltration (Stealth & Security)

Bypassing locks, traps, alarms, and physical barriers.

**Tier 1 Abilities (5 AP each):**
- **Locksmith:** You have advantage on checks to pick locks. You can pick locks in half the normal time (1 action instead of 2 actions, or 30 seconds instead of 1 minute).
- **Trap Sense:** You have advantage on Perception checks to detect traps. When you trigger a trap, you can use your reaction to make a Reflex save with advantage to avoid or halve its effects.
- **Disguise Expert:** You can create convincing disguises with 10 minutes and basic materials. Creatures have disadvantage on Insight checks to see through your disguise.

**Tier 2 Abilities (10 AP each, requires one Tier 1):**
- **Security Bypass:** You can hack or hotwire basic electronic locks and terminals (DC 14 Tech check, 1 minute). You can disable alarms and security systems with a DC 16 Tech check.
- **Trapbreaker:** You can disarm traps without triggering them (DC varies by trap complexity). Once per short rest, you can automatically succeed on a trap disarm check.
- **Master of Disguise:** Your disguises are nearly flawless. You can impersonate specific individuals if you've studied them for at least 1 hour. Creatures have disadvantage on Insight checks to see through your impersonation.

**Tier 3 Abilities (15 AP each, requires Level 5+ and one Tier 2):**
- **Ghost Walk:** 1/short rest, turn invisible for 1 minute (as long as you don't attack or cast a spell). You make no sound while moving. Perfect infiltration.
- **Grand Heist:** Given 1 hour of preparation and observation, you can plan a heist. During the heist, you and allies within 30 ft gain +2 to Stealth, Lockpicking, and Deception checks. Once during the heist, you can declare a "contingency"—you had a backup plan, and something goes right (negotiate details with GM).

### Recon (Scouting & Intelligence)

Gathering information, detecting danger, and staying ahead of threats.

**Tier 1 Abilities (5 AP each):**
- **Scout's Eye:** You have advantage on Perception checks to spot enemies or hazards. You can see clearly up to 1 mile away (as if using binoculars).
- **Danger Sense:** You can't be surprised while conscious. You have advantage on initiative rolls.
- **Tracker:** You can follow tracks and trails with a DC 12 Survival check. You can identify how many creatures passed, their size, and how long ago (within 1 hour accuracy).

**Tier 2 Abilities (10 AP each, requires one Tier 1):**
- **Informant Network:** During downtime in a settlement, you can gather information (rumors, guard schedules, faction politics) with a DC 13 PRE check. You learn one useful piece of intel per day.
- **Overwatch:** When you take the Dodge action (use 1 action to gain +2 DV and advantage on Reflex saves), allies within 30 ft also gain +1 DV (you're calling out threats).
- **Reconnaissance Expert:** You can scout an area in half the time. When you scout, you learn: enemy numbers, patrol routes, entry points, and major hazards. You can create a mental map of any location you've explored.

**Tier 3 Abilities (15 AP each, requires Level 5+ and one Tier 2):**
- **Perfect Ambush:** 1/long rest, if you have 10 minutes to prepare an ambush, you and all allies gain surprise against the first enemy group that enters the kill zone. Additionally, all allies gain +1d6 damage on their first attack.
- **Intel Broker:** You have contacts in every major settlement. Once per session, you can call in a favor: gain access to restricted info, acquire illegal goods at half price, or arrange a meeting with a faction leader. Your network owes you.

## Magic: None (Purchase via AP)

Operatives have **no innate magic**. They're pure skill, speed, and precision.

However, they can purchase cantrips using AP at a premium:
- **15 AP per cantrip** (more expensive than casters)
- Common choices: *Minor Illusion* (create distractions), *Message* (silent communication), *Mage Hand* (manipulate objects remotely)

**No spell slots.** If they want leveled spells, they must multiclass or acquire magical items.

## Sample AP Expenditures

Here's how a typical Operative might spend AP from Level 1-5:

**Level 1 (15 AP total):**
- Silent Takedown (Wetwork Tier 1): 5 AP
- *Remaining: 10 AP*

**Level 2 (25 AP total):**
- Locksmith (Infiltration Tier 1): 5 AP
- Danger Sense (Recon Tier 1): 5 AP
- *Remaining: 10 AP*

**Level 3 (35 AP total):**
- Assassinate (Wetwork Tier 2): 10 AP
- Trap Sense (Infiltration Tier 1): 5 AP
- *Remaining: 5 AP*

**Level 4 (45 AP total):**
- Security Bypass (Infiltration Tier 2): 10 AP
- Scout's Eye (Recon Tier 1): 5 AP
- *Remaining: 0 AP*

**Level 5 (55 AP total):**
- Informant Network (Recon Tier 2): 10 AP
- *Remaining: 0 AP*

---

## Advanced Specializations (Levels 6-10)

At level 6, the Operative selects one of three Advanced Specializations. These specializations unlock new skill tree branches, powerful abilities, and define the Operative's role in the wasteland's ongoing struggle.

### Assassin (Burst Damage)

**Flavor:** One chance. One kill. Assassins are patient, methodical killers who wait for the perfect moment to strike. When that moment comes, they are utterly devastating.

**Prerequisites:** Operative archetype, level 6

*Note: Some Assassin abilities share names with Wetwork skill tree abilities. The specialization version replaces the skill tree version if you have both — use the more powerful specialization version. If you purchased Assassinate or Death Strike from the Wetwork tree before taking this specialization, the AP is not refunded but the upgrade is automatic.*

**Level 6 Features:**
- **Death Strike:** When you hit a surprised creature or a creature that hasn't yet acted in the first round of combat, your attack deals maximum Sneak Attack damage instead of rolling the dice. All other damage dice are rolled normally. *(Replaces Wetwork Tier 3 Death Strike if you have it.)*
- **Poison Master:** You can apply poison to a weapon as a free action instead of an action. Additionally, the save DC for any poison you use or craft increases by 2.

**Level 8 Features:**
- **Assassinate:** When you attack a creature that hasn't detected your presence, your attack automatically scores a critical hit if it hits. This stacks with Sneak Attack damage, creating devastating opening strikes. *(Replaces Wetwork Tier 2 Assassinate if you have it.)*
- **Vanishing Act:** After you make an attack, you can spend 1 action to attempt to Hide, even if you have no cover or concealment. The Stealth check DC equals 10 + the number of hostile creatures that saw your attack.

**Level 10 Capstone:**
- **Execution:** Once per long rest, you can declare an Execution attempt before making an attack against a target you've studied for at least 1 round. If the attack hits and the target has fewer current HP than 5 x your character level, they must make a Fortitude save (DC 18) or die instantly. On a successful save, they take normal damage plus an additional 5d6 damage of the weapon's type.

**New Skill Tree:** Lethality (kill thresholds, critical strike enhancement, advanced poison techniques, ambush mastery)

---

### Shadow (Stealth/Escape)

**Flavor:** You can't kill what you can't find. Shadows are phantoms, moving through the world unseen, unheard, and untouchable. They strike from darkness and disappear before their victims fall.

**Prerequisites:** Operative archetype, level 6

**Level 6 Features:**
- **Shadow Step:** As 1 action, you can teleport up to 30 ft to an unoccupied space you can see that is in dim light or darkness. You can use this ability once per short rest for free; additional uses cost 1 action + 1 action (bonus).
- **Evasion:** When you are subjected to an effect that allows a Reflex save for half damage, you instead take no damage on a successful save and half damage on a failed save.

**Level 8 Features:**
- **Cloak of Shadows:** As 1 action, you become invisible for 1 minute or until you attack or cast a spell. However, if you are in dim light or darkness, the invisibility doesn't break when you attack — it only breaks if you are hit by an attack or enter bright light. Usable once per short rest.
- **Slippery Mind:** You gain advantage on Will saves against being charmed, frightened, or mentally controlled. Your mind is as elusive as your body.

**Level 10 Capstone:**
- **Living Shadow:** Once per long rest, for 10 minutes, you become semi-incorporeal shadow. You can move through solid objects and creatures as if they were difficult terrain. You have resistance to all damage except force and radiant. You are invisible while in dim light or darkness. If you end your turn inside a solid object, you take 3d10 force damage and are immediately shunted to the nearest unoccupied space.

**New Skill Tree:** Shadowcraft (advanced stealth techniques, escape artistry, misdirection, shadow manipulation)

---

### Spy (Infiltration/Disguise/Social)

**Flavor:** A different face for every occasion. Spies are masters of deception, assuming whatever identity is needed to complete the mission. They slip through security, extract secrets, and disappear without a trace.

**Prerequisites:** Operative archetype, level 6

**Level 6 Features:**
- **Perfect Disguise:** You can spend 10 minutes creating a disguise using available materials. While disguised, you gain advantage on Deception checks to maintain your false identity, and your disguise is undetectable by nonmagical means. If you study a specific person for 1 hour, you can impersonate them specifically, mimicking mannerisms and voice.
- **Codebreaker:** You can decipher codes, encrypted messages, and foreign languages given 1 hour of focused study. You gain advantage on Investigation checks made to find hidden information, secret compartments, or concealed messages.

**Level 8 Features:**
- **Planted Evidence:** You can spend 1 minute in an area to plant convincing false evidence (documents, objects, traces). The Investigation DC to detect the forgery equals 8 + your INT + proficiency + your Deception bonus (minimum DC 15).
- **Double Agent:** When a creature attempts to read your mind or detect your lies through magical means, they must succeed on a **contested check: their 1d20 + INT modifier vs. your 1d20 + PRE modifier + proficiency** (see Contested Checks in Combat rules) or receive false information that you mentally provide. You are aware of the intrusion attempt.

**Level 10 Capstone:**
- **Ghost Protocol:** Once per long rest, for 1 hour, you become completely undetectable through mundane means. You don't appear on cameras or surveillance systems, can't be tracked by scent or footprints, and anyone who sees you must make a Will save (DC 18) or immediately forget they saw you when you leave their line of sight. Magical detection still functions but with disadvantage.

**New Skill Tree:** Tradecraft (disguise mastery, forgery, social infiltration, intelligence gathering, handler networks, dead drops)

![An operative examines identification documents, blending deception with deadly precision](/images/illustrations/operative-with-id.png)

---

## Level 16: Perfect Predator (Archetype Ultimate)

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
