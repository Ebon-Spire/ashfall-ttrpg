---
game_data: true
name: Infiltrator
primary_stats: [INT, PRE]
hit_die: d8
hp_base: 10
hp_per_level: 5
starting_humanity: 10
armor_proficiency: [Light]
weapon_proficiency: [Simple, Sidearms, Finesse melee]
save_proficiencies: [Will, Reflex]
skill_bonuses:
  - {skill: Deception, bonus: 2}
  - {skill: Insight, bonus: 2}
starting_cp: 15
role: Intelligence/Tactical Support
magic_type: "None (15 CP/cantrip)"
level_1_features: [Assess Target, Prepared for Anything, Intel Dice]
skill_trees:
  - name: Tradecraft
    focus: Espionage
    abilities:
      - {name: Deep Cover, cp_cost: 5, tier: 1, effect: "Maintain 2 cover identities; covers resist magical detection"}
      - {name: Counter-Intelligence, cp_cost: 10, tier: 2, effect: "Detect surveillance; advantage vs scrying/divination"}
      - {name: Master of Faces, cp_cost: 15, tier: 3, effect: "Unlimited covers; perfect impersonation after 10 min study"}
  - name: Subversion
    focus: Psychological Warfare
    abilities:
      - {name: Sow Doubt, cp_cost: 5, tier: 1, effect: "Target Will save or -2 to next attack/check"}
      - {name: Turn Asset, cp_cost: 10, tier: 2, effect: "Convince NPC to act as informant (PRE check)"}
      - {name: Psychological Warfare, cp_cost: 15, tier: 3, effect: "Assessed target Will save or frightened 1 min; allies +2 attacks vs frightened"}
  - name: Field Operations
    focus: Tactical
    abilities:
      - {name: Tactical Assessment, cp_cost: 5, tier: 1, effect: "Learn enemy numbers and general strength in 1 action"}
      - {name: Coordinated Exploit, cp_cost: 10, tier: 2, effect: "Allies gain +1 to attacks vs your Assessed targets"}
      - {name: Kill Order, cp_cost: 15, tier: 3, effect: "Assessed target: all allies crit on 19-20 against them for 1 min, 1/SR"}
features:
  - name: Assess Target
    level: 1
    action: "1 Action"
    frequency: At-Will
    description: "Study a creature within 60 ft. Learn one fact (highest save, lowest save, damage vulnerabilities, general intentions, combat strategy). Target becomes Assessed: +2 to your attack rolls and Deception/Insight checks against them for 1 hour. Maintain up to INT modifier Assessed targets simultaneously."
  - name: Prepared for Anything
    level: 1
    action: Passive
    frequency: Always
    description: "You cannot be surprised. You gain +2 to initiative rolls. Your training as an intelligence operative means you are always scanning for threats and exits."
  - name: Intel Dice
    level: 1
    action: Passive
    frequency: "Short Rest"
    description: "Pool of d6 Intel Dice equal to INT modifier + proficiency bonus (minimum 3). Replenishes on short rest. Spent to fuel features."
  - name: Contingency
    level: 2
    action: "Reaction or Free Action"
    frequency: "1/Short Rest free, additional uses cost 1 Intel Die"
    description: "When a situation arises, reveal a prepared contingency. Choose one effect from the Contingency list."
    choices:
      - {name: "I Anticipated This", effect: "Advantage on your next roll related to the current situation"}
      - {name: "I Have What We Need", effect: "Produce a relevant mundane item worth up to 50 credits"}
      - {name: "I Scouted Ahead", effect: "Learn one important detail about the current location (GM provides)"}
      - {name: "I Have a Contact Here", effect: "Know someone in the current settlement who owes a minor favor"}
  - name: Exploit Weakness
    level: 3
    action: "On Hit"
    frequency: "Costs 1 Intel Die per use"
    description: "When you hit an Assessed target with a weapon attack, spend 1 Intel Die. Add 1d6 damage and choose one effect. No save — your analysis identifies the precise point of exploitation."
    choices:
      - {name: Expose Opening, effect: "Next ally to attack this target gains advantage"}
      - {name: Disorienting Strike, effect: "Target has disadvantage on its next attack roll"}
      - {name: Undermine Defense, effect: "Target's DV is reduced by 2 until end of your next turn"}
  - name: Attribute Improvement
    level: 4
    action: Passive
    frequency: Permanent
    description: "Increase one attribute by +2, or two attributes by +1 each. Maximum 20."
  - name: Mastermind
    level: 5
    action: "1 Action"
    frequency: "1/Short Rest"
    description: "Spend 3 Intel Dice. You reveal that you've been several steps ahead. Choose one Mastermind gambit."
    choices:
      - {name: Intel Briefing, effect: "1 minute. All allies gain +2 to attacks and saves against all your Assessed targets"}
      - {name: Double Agent, effect: "Contested INT vs WIS against Assessed target in 60ft. Success: target takes one action you dictate next turn (non-suicidal). Fail: target is unaware of attempt"}
      - {name: Extraction Protocol, effect: "You and up to 4 allies within 30ft move full speed without opportunity attacks and gain +5 Stealth for 1 round"}
specializations: [Handler, Saboteur, Profiler]
starting_equipment:
  - Concealed sidearm or finesse weapon
  - Light armor (tailored clothing with hidden plating)
  - "Infiltrator's kit: forged documents, lockpicks, signal mirror, encrypted journal, disguise materials"
  - One cover identity (pre-built with documentation)
  - 50 credits in various currencies
---
# Infiltrator

> **Recommended Build Guide — Classless System**
> This file describes the **Infiltrator recommended build**: a curated path through Ashfall's shared skill trees designed for this build's core fantasy. Under the current rules, you are **not locked to this build**. Choose a **chassis** for your starting stats and proficiencies, then spend **Character Points (CP)** in any skill trees that match your character concept.
>
> - **Chassis selection and starting stats:** see [Chassis](../chassis.md)
> - **CP economy, spending rules, and milestones:** see [Character Points](../character-points.md)
> - **Full skill tree catalog:** see [Skill Trees](../skill-trees.md)
>
> The ability descriptions, skill tree layouts, and feature details in this file remain the authoritative rules reference for those abilities. The CP values listed in the skill trees are the costs for purchasing abilities.

*Everyone has secrets. You collect them. In a world where information is currency and trust is the rarest commodity, you trade in both — buying, selling, and fabricating as the situation demands. You're not a thief who sneaks through windows, and you're not a politician who wins crowds. You're something quieter and more dangerous: you're the person who walks through the front door wearing someone else's face, sits down at the table with people who would kill you if they knew your real name, and walks out with everything they thought was safe.*

*You are the Infiltrator. Your weapons are preparation and patience. Before you enter a room, you know who's in it, what they want, and how to give it to them — or how to take it away. You study your targets the way a surgeon studies anatomy: methodically, dispassionately, looking for the precise point where pressure produces the desired result. You maintain cover identities the way other people maintain friendships — carefully, deliberately, always with an exit strategy. When violence becomes necessary, you don't fight fair. You fight informed. Every strike targets a weakness you identified hours ago.*

---

## Base Build (Levels 1-5)

### Core Stats

| Attribute | Value |
|-----------|-------|
| **Primary Attributes** | Intellect (INT), Presence (PRE) |
| **Hit Die** | d8 |
| **HP at Level 1** | 10 + END modifier |
| **HP per Level** | 1d8 (or 5) + END modifier |
| **Starting Humanity** | 10 |
| **Armor Proficiency** | Light armor |
| **Weapon Proficiency** | Simple weapons, sidearms, finesse melee weapons |
| **Save Proficiencies** | Will, Reflex |
| **Skill Bonuses** | Deception +2, Insight +2 |
| **Starting CP** | 15 |

### Starting Equipment

- Concealed sidearm or finesse melee weapon (holdout pistol, stiletto, garrote)
- Light armor (tailored clothing with hidden plating — looks civilian, functions as armor)
- Infiltrator's kit: forged documents, lockpicks, signal mirror, encrypted journal, disguise materials (wigs, makeup, prosthetics)
- One pre-built cover identity with appropriate documentation and wardrobe
- 50 credits in various currencies and denominations

### Level Progression (1-5)

#### Level 1: Assess Target, Prepared for Anything & Intel Dice

- **Assess Target (1 Action, At-Will):** You study a creature within **60 feet** that you can see. You learn **one fact** about the target from the following list (GM provides the answer):
  - Highest saving throw
  - Lowest saving throw
  - Damage vulnerabilities or resistances
  - General intentions (hostile, neutral, afraid, lying)
  - Combat strategy (aggressive, defensive, flanking, fleeing)
  - Social leverage (what they want, what they fear, who they report to)

  The target becomes **Assessed** for **1 hour**. While a target is Assessed, you gain **+2 to attack rolls** and **+2 to Deception and Insight checks** against them. You know their position, habits, and tendencies — every interaction is on your terms.

  You can maintain a number of Assessed targets simultaneously equal to your **INT modifier** (minimum 1). If you Assess a new target beyond your limit, the oldest Assessed target loses its status.

  Assessing a target is subtle — you're observing body language, gear, movement patterns, and micro-expressions. The target does not know it is being Assessed unless it has a specific ability to detect observation (such as a Spy's Double Agent feature or magical detection).

  > **Quick Reference — Assess Target:**
  > - Cost: 1 Action
  > - Range: 60 ft, requires sight
  > - Duration: 1 hour
  > - Benefit: +2 to attacks, +2 to Deception/Insight vs target
  > - Limit: INT modifier targets simultaneously
  > - Detection: Not obvious; requires specific counter-abilities

- **Prepared for Anything (Passive):** You **cannot be surprised**. Even when ambushed, you act normally in the first round of combat. Additionally, you gain **+2 to initiative rolls**. Your training as an intelligence operative means you're always cataloging exits, evaluating threats, and maintaining situational awareness. You sleep lightly, you sit with your back to the wall, and you never fully relax.

- **Intel Dice (Resource Pool):** You maintain a pool of **Intel Dice (d6)** — representing preparation, contingency planning, gathered intelligence, and your instinct for having the right answer at the right moment. Your pool size equals your **INT modifier + proficiency bonus** (minimum 3 dice).

  Your Intel Dice pool **replenishes fully on a short rest** (8 hours). During rest, you process what you've observed, update your mental files, and prepare for the next operation.

  You spend Intel Dice to power your features: **Contingency** (Level 2), **Exploit Weakness** (Level 3), and **Mastermind** (Level 5).

  > **Building Your Infiltrator — Quick Reference:**
  >
  > At Level 1 with INT 15 (+2) and proficiency +2:
  > - **Intel Dice Pool:** 4 dice (d6)
  > - **Assessed Targets:** 2 simultaneous
  > - **Initiative Bonus:** +2 (from Prepared for Anything) + AGI modifier
  >
  > At Level 5 with INT 17 (+3) and proficiency +3:
  > - **Intel Dice Pool:** 6 dice (d6)
  > - **Assessed Targets:** 3 simultaneous
  > - **Exploit Weakness DC:** 8 + 3 (prof) + 3 (INT) = 14
  > - **Mastermind cost:** 3 Intel Dice (half your pool)

#### Level 2: Contingency

**Contingency (Reaction or Free Action):** When a situation arises — combat begins, a door is locked, someone asks for credentials, a plan goes sideways — you can reveal that you **prepared for this eventuality**. This is the Infiltrator's signature: the moment when everyone else is scrambling and you calmly produce exactly what's needed, because you planned ahead.

**First use each short rest is free.** Additional uses cost **1 Intel Die** each.

Choose one of the following when you activate a Contingency:

- **"I anticipated this."** You gain **advantage on your next roll** (attack, save, or skill check) related to the current situation. You foresaw this scenario and practiced your response.

- **"I have what we need."** You produce a relevant **mundane item worth up to 50 credits** that you "packed earlier." This could be lockpicks, a specific tool, a map, rope, a change of clothes, a bribe, forged papers, a key you palmed from a guard, or similar. The item must be something you could plausibly have acquired and concealed. Magical items, weapons, and armor are not valid.

- **"I scouted ahead."** You recall intelligence you gathered before the current situation. The GM provides **one important detail** about the current location, encounter, or situation — guard patrol timing, a hidden exit, the location of a trap, who's in charge, etc. This represents reconnaissance you performed off-screen.

- **"I have a contact here."** You know someone in the current settlement, organization, or faction who owes you a **minor favor**. The contact can provide information, temporary shelter, a small service, or access to a restricted area. They won't risk their life for you, but they'll help where it's safe to do so.

*Contingency represents the Infiltrator's greatest asset: they plan for everything. While other characters react to situations, the Infiltrator reveals that the situation was accounted for all along. GMs should reward creative use of this ability while keeping it grounded — the Infiltrator can't have planned for truly unforeseeable events (alien invasion, divine intervention), but most tactical and social situations are fair game.*

#### Level 3: Exploit Weakness

**Exploit Weakness (On Hit vs Assessed Target, costs 1 Intel Die):** When you hit an **Assessed target** with a weapon attack, you can spend **1 Intel Die** to add **1d6 damage** to the attack and apply one of the following effects. No save is required for the rider effect — you've studied this target long enough to know exactly where to strike and how to create an opening:

- **Expose Opening:** The next ally to attack this target before the start of your next turn gains **advantage** on their attack roll. You call out the weakness you identified — "Left side, below the armor plate!"

- **Disorienting Strike:** The target has **disadvantage on its next attack roll**. You strike at a nerve cluster, a joint, or a sensory point that throws off their coordination.

- **Undermine Defense:** The target's **Defense Value is reduced by 2** until the end of your next turn. You've identified a gap in their defense and shown your allies where it is.

You can use Exploit Weakness **once per hit**. If you make multiple attacks in a turn, you can use it on each hit, spending an Intel Die each time. Exploit Weakness only works against Assessed targets — you need intelligence before you can exploit it.

*Example: At Level 3, you've Assessed a raider captain (1 action last turn). This turn, you attack with your concealed pistol (+2 from Assessed, so effectively +4 to hit with INT 15 and prof +2). You hit and spend an Intel Die: 1d8 (pistol) + 1d6 (Exploit Weakness) + 2 (AGI mod) damage, and you choose Expose Opening. Your Warrior ally's next attack against the captain has advantage — they swing at the gap you identified and annihilate the target.*

#### Level 4: Attribute Improvement

Increase one attribute by +2, or two attributes by +1 each (maximum 20 before modifiers).

#### Level 5 Capstone: Mastermind

**Mastermind (1 Action, 1/Short Rest):** You reveal that you've been several steps ahead of everyone. Spend **3 Intel Dice** and choose one of the following gambits:

- **Intel Briefing:** For **1 minute** (10 rounds), all allies who can hear you gain **+2 to attack rolls and saving throws** against all of your currently Assessed targets. You rapidly share everything you've learned — weak points, attack patterns, psychological vulnerabilities, defensive gaps. This turns your personal intelligence advantage into a party-wide tactical edge.

  *"The big one favors his right side. The caster needs line of sight — break it. And the one in back? He's the real threat. Focus fire."*

- **Double Agent:** Target one **Assessed creature within 60 feet**. Make a **contested check: your INT + proficiency vs. the target's WIS + proficiency**. On success, the target takes **one action you dictate** on its next turn. The action must be something the target is physically capable of and **cannot be directly suicidal** (they won't jump off a cliff, but they might move to a disadvantageous position, attack an ally, drop their weapon, or open a door). The target is unaware of your manipulation — they believe the action was their own idea. On failure, the target is unaware that you attempted anything.

  *This represents the culmination of your psychological profiling — you've figured out exactly what button to push. A whispered word, a gesture, a planted suggestion during the fight. It's not mind control. It's manipulation so precise it might as well be.*

- **Extraction Protocol:** You and up to **4 allies within 30 feet** can immediately move up to their **full speed without provoking opportunity attacks**. All affected creatures gain **+5 to Stealth checks** and **+2 to Defense Value** for **1 round**. This represents a pre-planned escape route — you've been tracking exits since you entered, and now you execute the withdrawal with military precision.

  *"Go. NOW. Left corridor, third door, there's a service tunnel. I mapped it this morning."*

### Skill Trees

Infiltrators have access to three skill trees, each costing CP to unlock features:

#### Tradecraft (Espionage & Identity)

The art of becoming someone else, evading detection, and operating in hostile territory without being discovered.

- **Deep Cover (5 CP):** You can maintain **2 active cover identities** simultaneously (up from 1). While operating under a cover identity, your disguise **resists magical detection** — divination spells and abilities that would reveal your true identity must succeed on a contested check (caster's spellcasting modifier vs. your INT + proficiency) or detect only the cover identity. Creating a new cover identity takes **1 day** of downtime work.

- **Counter-Intelligence (10 CP, Requires Deep Cover):** You can detect when you're being surveilled, scryed upon, or followed. You have **advantage on Perception checks** to notice surveillance (physical or magical). When you detect surveillance, you can choose to feed false information rather than simply evading. Additionally, you have **advantage on saving throws** against divination spells and scrying effects.

- **Master of Faces (15 CP, Requires Counter-Intelligence):** You can maintain **unlimited cover identities**. After studying a specific individual for **10 minutes**, you can perfectly impersonate them — voice, mannerisms, handwriting, and behavioral patterns. Your impersonation is **undetectable by nonmagical means** and requires a **DC 20 Insight check** (magical or otherwise) to penetrate. You can switch between cover identities as a **1-action activity**.

#### Subversion (Psychological Warfare)

Breaking minds instead of bodies — undermining morale, turning assets, and making enemies doubt their own judgment.

- **Sow Doubt (5 CP, 1 Action, 1/Short Rest):** Target one creature within 30 feet that can hear and understand you. The target must make a **Will save (DC 8 + proficiency + INT modifier)** or suffer **-2 to its next attack roll or ability check** (your choice). You plant a seed of uncertainty — a casually dropped fact, a knowing glance, a comment about their technique.

- **Turn Asset (10 CP, Requires Sow Doubt):** During a social interaction with an NPC who is not actively hostile, you can attempt to recruit them as an informant. Make a **PRE check (DC 15, modified by the NPC's loyalty and stakes)**. On success, the NPC agrees to provide information, leave doors unlocked, look the other way, or perform minor acts of assistance. The arrangement lasts until the NPC feels endangered or betrayed. You can maintain a number of turned assets equal to your **PRE modifier** (minimum 1).

- **Psychological Warfare (15 CP, Requires Turn Asset, 1 Action, 1/Short Rest):** Target one **Assessed creature** within 60 feet. The target must make a **Will save (DC 8 + proficiency + INT modifier)** or become **frightened of you for 1 minute** (can repeat the save at the end of each of its turns). While the target is frightened, all allies who can see the target gain **+2 to attack rolls** against it. You've gotten inside the target's head — everything they feared about this encounter, you've confirmed.

#### Field Operations (Tactical Combat)

Translating intelligence into battlefield advantage — turning what you know into how your team fights.

- **Tactical Assessment (5 CP, 1 Action):** As 1 action, you can assess the tactical situation. You learn the **approximate number of enemies**, their **general power level** relative to your party (weaker, even, stronger, overwhelming), and one **tactical detail** (their formation, ambush positions, reinforcement routes, or morale state). This represents rapid battlefield analysis, not magical omniscience.

- **Coordinated Exploit (10 CP, Requires Tactical Assessment):** Your allies benefit from your intelligence work. All allies gain **+1 to attack rolls** against your **Assessed targets**. This is a passive benefit — your constant tactical commentary ("Watch his left!" "She's reloading!") gives the entire team a small but consistent edge.

- **Kill Order (15 CP, Requires Coordinated Exploit, 1/Short Rest):** As a **free action**, designate one **Assessed target** within 60 feet. For **1 minute**, all allies who can hear you score **critical hits on a roll of 19-20** against that target (instead of only on 20). You've identified the target's fatal vulnerability and communicated it to your team. This is the intelligence operative's version of a death sentence — you don't pull the trigger yourself, but you ensure the trigger gets pulled.

### Cover Identity System

Infiltrators begin play with **one cover identity** — a false persona complete with a name, backstory, appropriate documentation, and a matching wardrobe. Creating a cover identity requires **1 day of downtime work** and access to materials (forged documents, appropriate clothing, research on the persona's background).

While operating under a cover identity:
- You have **advantage on Deception checks** to maintain the identity
- If the cover identity grants authority or access (disguised as a guard, merchant, official, faction member), you have **advantage on related Persuasion checks** to exercise that authority
- Your cover identity has its own reputation — NPCs interact with the cover, not with you

A cover can be **blown** if you fail a Deception check to maintain it, if someone who knows the real person you're impersonating encounters you, or if contradictory evidence is discovered. Once blown, that specific cover identity is permanently compromised in that location/organization.

Building and maintaining cover identities is a narrative feature — it enriches exploration and social encounters without being required for combat viability. An Infiltrator who never uses covers is still effective in combat through Assess Target, Exploit Weakness, and Contingency.

### Magic Relationship

Infiltrators have **no innate magical ability**. Their power comes from preparation, analysis, and manipulation — not mysticism. However, they can learn cantrips by spending **15 CP per cantrip**. Cantrips learned this way are flavored as **subtle techniques or concealed gadgets** — *Message* becomes a concealed radio, *Minor Illusion* becomes a thrown distraction device, *Friends* becomes practiced manipulation techniques.

Infiltrators cannot learn leveled spells unless they multiclass into a casting class or take a Mastery Path that grants spellcasting.

### What Makes an Infiltrator Different?

The Infiltrator occupies a unique niche: the **intelligence operative who turns information into power**.

- **Not an Operative:** The Operative is a precision striker — they hide, they ambush, they deal massive burst damage from stealth. The Infiltrator doesn't need to hide. They walk through the front door wearing someone else's face. In combat, the Operative deals damage; the Infiltrator creates advantages for the entire team.

- **Not a Diplomat:** The Diplomat inspires and leads openly — rallying allies through charisma and moral authority. The Infiltrator manipulates from the shadows. The Diplomat says "Follow me!" The Infiltrator says "I've already handled it." The Diplomat builds alliances; the Infiltrator infiltrates them.

- **Not a Technician:** The Technician hacks machines. The Infiltrator hacks people. Both are INT-based, but the Technician's domain is technology and the Infiltrator's domain is social systems, organizations, and individual psychology.

If the Operative is the scalpel and the Diplomat is the banner, the Infiltrator is the poison in the wine — quiet, patient, and devastating when it takes effect.

---

## Advanced Specializations (Levels 6-10)

By Level 6, the Infiltrator has proven they can walk into any room and walk out with everything they need. Now they choose how to specialize: building a web of agents and informants as a Handler, becoming an expert at dismantling infrastructure as a Saboteur, or honing their ability to read and break minds as a Profiler.

**System Notes:**
- All characters gain 10 CP per level from levels 6-10
- Short rest: 8 hours
- Long rest: 1 week
- Bounded accuracy: maximum core bonus of +14 (+18 mythic tier)
- 3-action economy per turn

### Handler (Spymaster / Network Controller)

*The Operative Spy goes in alone. The Handler sends someone else. While assassins and shadow operatives risk their own necks behind enemy lines, Handlers sit in a quiet room with a cup of tea and a map, moving pieces that don't know they're being moved. They recruit contacts, cultivate informants, and build networks that span settlements and factions — invisible infrastructure made of favors owed and secrets held. A Handler doesn't need to sneak past the guards. They know a guard who'll leave the gate open.*

*What makes Handlers dangerous isn't what they can do. It's what they can make other people do. Their power is leverage — and leverage, unlike bullets, never runs out.*

**Prerequisites:** Level 6, Infiltrator build

**New Skill Tree Unlocked:** Network Operations (contact recruitment, asset management, covert communication, faction manipulation)

*Note: The Handler and the Diplomat both work through other people, but they operate in fundamentally different ways. The Diplomat leads openly — they inspire, rally, and build public alliances. The Handler operates in the dark — their contacts don't know each other, their influence is invisible, and their power evaporates the moment anyone asks "who's pulling the strings?" The Diplomat builds coalitions. The Handler builds deniable assets.*

#### Level 6 Features

**Build Network** (Downtime, 1 Day)
When you spend **1 day of downtime** in a settlement, you can recruit **contacts** — locals who owe you favors, share your interests, or have been convinced (through persuasion, bribery, or blackmail) to assist you. You can maintain a number of active contacts simultaneously equal to your **PRE modifier** (minimum 1).

Each contact is an NPC with a specific role and location — a bartender who overhears conversations, a dock worker who can smuggle packages, a clerk who has access to restricted records, a guard who looks the other way. Work with your GM to define each contact when recruited.

Contacts are not combat allies. They will not fight for you, and they will not risk their lives. They provide information, access, and small services. If a contact is endangered by your requests, they may refuse — or worse, burn your connection and warn their superiors.

If you already have your maximum number of contacts and recruit a new one, you must release one existing contact (they drift away, debts are settled, or you cut ties to manage your network).

Contacts recruited via Build Network are separate from turned assets gained through the Subversion skill tree. However, the total number of NPCs you can manage simultaneously across both systems cannot exceed twice your PRE modifier.

**Activate Asset** (1 Action, costs 1 Intel Die)
You activate one of your contacts in the current location to perform a **minor favor**. The contact must be in a position to fulfill the request — you can't activate a contact in a city you're not near. Choose one:

- **Deliver Message:** The contact delivers a message to any person or location in the settlement within 1 hour, discreetly.
- **Create Distraction:** The contact causes a scene, drawing attention away from a specific location or person for **1d4 minutes**. Guards, bystanders, or enemies are momentarily occupied.
- **Open Access:** The contact leaves a door unlocked, disables an alarm, or provides a key/code to a restricted area they have access to.
- **Local Intelligence:** The contact shares what they know — rumors, patrol schedules, recent arrivals, factional tensions, or the location of a specific person or item within the settlement.
- **Safe House:** The contact provides shelter for up to 24 hours — a back room, a cellar, an unused apartment. Basic amenities only.

*Example: Your party needs to break into a Dynaxis warehouse. You spend 1 Intel Die and Activate your dock worker contact. He "forgets" to lock the side entrance during his shift. Your party walks in unchallenged. The dock worker doesn't know why you wanted in, and you prefer it that way.*

#### Level 8 Features

**Coordinated Network** (1 Action, costs 2 Intel Dice)
You activate **two contacts simultaneously** for a coordinated operation that achieves more than either could alone. Choose one:

- **Pincer Distraction:** Two contacts create diversions at different locations, drawing attention in multiple directions. All allies gain **advantage on Stealth checks** for **1 round** as attention is split.
- **Combined Intelligence:** Two contacts pool their knowledge, cross-referencing what they've observed. You gain **advantage on one Investigation or Insight check** related to the current operation, and the GM provides **two pieces of related intelligence** instead of one.
- **Safe Passage:** Two contacts arrange passage through hostile territory — a bribed guard at one checkpoint, a distraction at another. The party can move through one controlled area (a faction district, a guarded compound, a patrolled route) without encountering opposition, provided they move within **10 minutes**.

**Embedded Agent** (Downtime, 1 Week)
You spend one week cultivating and planting a contact **deep inside a faction or organization**. This requires a PRE check (DC 15, modified by the faction's paranoia and the target's position). On success, the contact becomes an embedded agent.

An embedded agent provides **ongoing intelligence**. Once per session (or once per in-game week, whichever the GM prefers), you receive one piece of **insider information** about the faction: upcoming operations, internal politics, defensive changes, supply movements, or one critical secret. The GM determines what the agent can access based on their position.

You can maintain **1 embedded agent per faction**. Embedded agents are at risk — if the faction discovers them (through your actions, failed checks, or GM events), the agent is compromised. A compromised agent may be killed, turned, or forced to feed you false information.

*The difference between a contact and an embedded agent: a contact does you a favor when you call. An embedded agent is always working, always watching, always reporting back. Contacts are transactional. Embedded agents are strategic.*

#### Level 10 Capstone Ability

**Spymaster's Gambit** (1/Long Rest, 1 Action, costs 4 Intel Dice)

You activate your **entire network** for a single, decisive operation. Every contact, every favor, every thread you've woven comes together in one coordinated action. Choose one:

- **Mass Distraction:** Your network creates chaos across the area — fires, false alarms, staged fights, planted rumors. All enemies in the current encounter or location have **disadvantage on Perception checks and initiative rolls** for **1 round** (if in combat) or **10 minutes** (if in exploration). This is not subtle — the distraction is city-wide or facility-wide.

- **Extraction Network:** Your network activates pre-arranged escape routes. You and up to **5 allies** are guided to the nearest safe house within **1 mile** through routes that bypass all patrols, checkpoints, and surveillance. This effectively removes the party from the current dangerous situation — but the safe house is temporary (24 hours) and the escape routes are burned after use. You must rebuild your local contacts after this.

- **Intelligence Coup:** Your network delivers a comprehensive intelligence package on one faction or organization. You learn: **total numbers and approximate strength**, **defensive positions and vulnerabilities**, **current operational plans**, and **one critical secret** the faction is actively trying to hide (a mole, a supply shortage, a hidden weapon, a pending betrayal). This intelligence is accurate as of this moment — it will go stale as the faction adapts.

*"I don't have an army. I have something better. I have the bartender at the Rust & Rail, the night clerk at the Convergence depot, a guard who owes me for keeping his gambling debts quiet, and a dock worker who thinks he's helping a merchant guild. None of them know each other. None of them know me. And when I pull the thread, they all move at once. That's not espionage. That's architecture."*

> **GM Guidance:** Spymaster's Gambit is the Handler's capstone — it should feel like the reveal at the end of a spy thriller, the moment when everyone realizes the Handler was in control all along. The 4 Intel Dice cost means the Handler has been saving resources for this. The party's job is to give the Handler the opening. Extraction Network burns local contacts after use — this is a real cost in a campaign with persistent settlements.

---

### Saboteur (Demolition / Disruption Specialist)

*Some Infiltrators walk through the front door wearing someone else's face. Saboteurs prefer the back door — specifically, the one they're about to blow off its hinges. While Handlers build networks and Profilers read minds, Saboteurs take a more direct approach to the intelligence game: they break things. Not like a Warrior breaks things — crudely, with brute force. Saboteurs break things precisely, surgically, in ways that cascade through entire systems. A Saboteur doesn't fight an army. They disable the army's supply chain, sabotage the motor pool, and corrupt the communications network. By the time the army realizes what happened, the war is already lost.*

*In a world held together by duct tape and salvaged tech, a Saboteur is the most terrifying person alive. Because they know exactly which piece to remove.*

**Prerequisites:** Level 6, Infiltrator build

**New Skill Tree Unlocked:** Sabotage (explosive placement, structural analysis, electronic disruption, chain-reaction engineering)

*Note: The Saboteur and the Scavenger Tinkerer both interact with technology, but from opposite ends. The Tinkerer builds crude one-shot devices from junk. The Saboteur takes existing systems and makes them fail. The Tinkerer creates chaos through improvisation. The Saboteur creates chaos through analysis — they understand how things work specifically so they can make them stop working.*

#### Level 6 Features

**Planted Charge** (1 Action, costs 1 Intel Die)
You place an **explosive or sabotage device** on a structure, vehicle, piece of equipment, or other physical system within **5 feet**. The device is concealed (Perception DC = 8 + proficiency + INT modifier to spot).

You choose the detonation method when you plant the charge:
- **Remote:** Detonate as a **free action** when you're within 300 feet and have line of effect
- **Timed:** Detonation occurs after a delay you set (up to 1 hour, minimum 1 round)
- **Proximity:** Detonation triggers when a creature enters within 5 feet

On detonation:
- **Structures and vehicles:** **4d6 fire damage**, bypassing hardness. This targets structural integrity — a planted charge on a support beam, fuel line, or axle is far more effective than simply hitting the thing with a hammer.
- **Creatures within 10 feet:** **2d6 fire damage**, **Reflex save** (DC 8 + proficiency + INT modifier) for half.

You can have a maximum of **3 charges active** at any time. Charges that haven't detonated after 1 hour become inert and harmless.

*A planted charge isn't a grenade. It's a surgical tool. You study the target, identify the stress point, and place the device where it will do the most structural damage with the least expenditure. A Warrior swings a hammer at a wall. A Saboteur puts a charge on the keystone and brings down the entire building.*

**Disable** (1 Action, costs 1 Intel Die)
You sabotage a **device, weapon, piece of armor, or augmentation** that you can touch. Make an **INT check** (DC = 10 + item's tier, or DC 12 for improvised items with no tier). On success, the item is **disabled for 1 minute**:

- **Weapons:** Jam, misfire, or lose power. Cannot be used to attack until repaired (1 action, Technology check DC = 8 + proficiency + INT modifier).
- **Armor:** Straps loosen, plates shift, seals break. Target's **DV is reduced by 2** until repaired.
- **Augmentations:** Systems go offline. Target loses all benefits of that augmentation for the duration.
- **Other devices:** Cease functioning. Locked doors jam, communications cut out, generators stall.

If the item is **attended** (carried or worn by a creature), the creature can make a **Reflex save** (DC 8 + proficiency + INT modifier) to prevent the sabotage. On success, you waste the Intel Die but the item is unaffected.

*Example: In combat, a Convergence enforcer in powered armor is tearing through your party. You close to melee range (risky for an Infiltrator, but you planned for this), spend an Intel Die, and Disable the armor's power coupling. The enforcer's DV drops by 2 as the plates seize up. Your Warrior smiles.*

#### Level 8 Features

**Shaped Charges** (Passive)
Your expertise with explosives has grown considerably:

- Planted Charge damage increases to **6d6** against structures/vehicles and **3d6** against creatures
- You can **shape the blast**: choose a **90-degree arc** for the explosion. Creatures and structures outside the arc are completely unaffected. You can demolish a wall without hurting the people on your side of it.
- Maximum active charges increases to **5**
- Charge concealment DC increases by +2

**Cascade Failure** (1 Action, costs 2 Intel Dice)
When you successfully **Disable** an item or **detonate a charge** on a vehicle or network, you can trigger a cascade — the failure spreads through connected systems. Choose the appropriate effect:

- **Vehicle:** All crew checks aboard the vehicle suffer **-2** for **1 minute** as secondary systems flicker, power fluctuates, and backup systems engage (poorly).
- **Network:** All hacking checks against the network have their **DC increased by 2** for **1 minute** — the system is in a damaged, unpredictable state that's harder for everyone to navigate (including the network's own defenders).
- **Compound Demolition:** If you detonate multiple charges on the same structure simultaneously, each charge after the first deals an additional **+2d6 damage** as the structural failures compound.

*Cascade Failure is the Saboteur's philosophy made manifest: nothing exists in isolation. Every system is connected. Break one piece, and the cracks spread. The bigger the system, the more catastrophic the cascade.*

#### Level 10 Capstone Ability

**Catastrophic Failure** (1/Long Rest, 1 Minute, costs 4 Intel Dice)

This is the Saboteur's masterwork — the operation that changes the tactical landscape. You require **physical access** to a vehicle, structure, or network and **1 minute of uninterrupted work**. After that minute, you plant a devastating sabotage that cannot be detected or disarmed by anyone with a lower INT + Technology bonus than yours. Choose one:

- **Vehicle Kill:** The vehicle is **completely disabled**. Engines seize, axles crack, power systems short. The vehicle cannot move, fire weapons, or perform any function. Repairing a Vehicle Kill requires a **full workshop**, a **DC 20 Technology check**, and **1 week of work**. In the field, the vehicle is simply dead.

- **Structural Collapse:** You identify and sabotage a critical load-bearing element. In **1d4 rounds**, the structure undergoes catastrophic failure. All creatures within **30 feet** take **6d6 bludgeoning damage** (Reflex save, DC 8 + proficiency + INT modifier, for half). The area becomes **difficult terrain** filled with rubble and debris. Larger structures may have the collapse spread to adjacent sections (GM discretion). You can set the timer to up to 10 minutes instead of 1d4 rounds if you prefer a delayed collapse.

- **System Wipe:** You purge a network completely. All **data is erased**, all **programs are deleted**, all **AI constructs are terminated**, and all **ICE is deactivated for 1 hour**. The network is reduced to bare hardware — functional but empty. Recovering wiped data requires a DC 22 Technology check and 1 week of work, and even then only partial recovery is possible. AI constructs that were terminated must be rebuilt from scratch. Sentient AI companions may attempt a Will save (DC = 8 + your proficiency + INT modifier) to evacuate to backup storage, surviving the wipe.

> **GM Guidance:** Catastrophic Failure is the Saboteur's capstone — it should feel like an Ocean's Eleven heist payoff. The 1-minute requirement means this is a planning tool, not a combat panic button. The Saboteur needs to reach the target, work uninterrupted for a full minute, and then get out before the consequences catch up. The party's job is to buy them that minute.

*"Give me sixty seconds with the reactor coupling and this entire compound goes dark. Every camera, every turret, every door lock. You want the hard way — breach, clear, fight through three floors of Convergence security. Or you want the easy way — I go in through the ventilation, you keep them looking the other direction for one minute, and we walk out while they're tripping over each other in the dark."*

---

### Profiler (Behavioral Analyst / Psychological Predator)

*Every person is a system. Inputs, outputs, patterns, predictable responses. The Handler manipulates through networks. The Saboteur breaks physical systems. The Profiler breaks people — not through torture or intimidation, but through understanding so complete it borders on precognition. They watch a target for thirty seconds and know what that target had for breakfast, who they're afraid of, and exactly what they'll do when cornered. Then they use that knowledge like a scalpel.*

*Other Infiltrators collect secrets. Profilers collect people — cataloging them, modeling them, predicting them with an accuracy that makes even Psion Telepaths uncomfortable. Because a Telepath reads the thought you're having right now. A Profiler already knew what you'd think before you thought it.*

**Prerequisites:** Level 6, Infiltrator build

**New Skill Tree Unlocked:** Behavioral Analysis (profiling techniques, psychological exploitation, predictive modeling, interrogation)

*Note: The Profiler and the Psion Telepath both "read minds," but through completely different means. The Telepath uses supernatural psionic power — they literally hear thoughts. The Profiler uses observation, deduction, and pattern recognition — they reconstruct what you're thinking from your body language, your gear, your hesitation, and the sweat on your upper lip. The Telepath's ability is magical. The Profiler's ability is terrifyingly mundane.*

#### Level 6 Features

**Deep Read** (1 Action, costs 1 Intel Die)
You intensify your study of an **Assessed target** within **60 feet**. While Assess Target reveals one fact, Deep Read goes further — you learn **two additional facts** from the following expanded list:

- **Combat Capabilities:** The target's approximate HP range (above/below half, above/below quarter), their strongest attack (damage type and approximate damage), and any special abilities they've used or are likely to use.
- **Psychological Profile:** The target's primary fear, primary motivation, and strongest loyalty (to a person, faction, ideal, or self). This is your assessment based on behavioral cues — it's accurate but not supernatural.
- **Tactical Patterns:** The target's preferred combat tactics (aggressive, defensive, flanking, retreating), their likely retreat threshold (what would make them flee or surrender), and their probable next action in the current situation.

A Deep Read target remains Assessed with the additional profile information for the full duration of your Assess Target (1 hour). You can maintain Deep Read information on a number of targets equal to **half your INT modifier** (minimum 1, rounded down).

*Deep Read isn't mind reading. It's observation at a level most people can't achieve — the micro-expression that betrays fear, the way someone shifts their weight before they attack, the equipment choices that reveal training and background. You're not hearing their thoughts. You're seeing them so clearly that the distinction barely matters.*

**Exploit Psychology** (Passive)
When you hit an Assessed target that you have **Deep Read** on, your **Exploit Weakness** riders gain enhanced effects that reflect your deeper understanding of the target:

- **Expose Opening (Enhanced):** The next ally to attack gains **advantage AND +2 to the damage roll**. You've identified not just a gap in defense, but the exact angle that will cause maximum damage.
- **Disorienting Strike (Enhanced):** The target has disadvantage on its **next two attack rolls** instead of one. Your strike targets a psychological pressure point — the target second-guesses their next several actions.
- **Undermine Defense (Enhanced):** The target's **DV is reduced by 3** instead of 2 until the end of your next turn. You've mapped their defensive patterns so thoroughly that your allies can exploit multiple gaps simultaneously.

#### Level 8 Features

**Behavioral Prediction** (Free Action, costs 2 Intel Dice)
Once per round, when an **Assessed target with Deep Read** declares an action (the GM announces what the creature is about to do), you can attempt to predict and counter it. Make an **INT check**:

- **DC 12:** Standard combat actions (attacks, movement, casting known spells)
- **DC 15:** Unusual actions (using a new ability, changing tactics, targeting unexpectedly)
- **DC 18:** Truly unpredictable actions (actions the target has never taken before, desperate measures)

On success:
- You and all allies who can hear you gain **advantage on saving throws** and **+2 to DV** against that specific action
- You can use your **reaction** to move **10 feet** or drop prone before the action resolves

On failure, the Intel Dice are still spent and you gain no benefit.

*"She's going to throw a grenade — left hand, low arc, toward our cover. Move NOW."*

**Cold Read** (1 Action, costs 1 Intel Die)
You can perform an accelerated assessment of a creature you have **not yet Assessed**. Make a contested check: **your INT + Insight** versus the target's **PRE + Deception**.

On success, you immediately gain the **Assessed condition** against the target AND learn **one Deep Read fact** of your choice. You've deduced their strengths, weaknesses, and patterns from a single moment of observation — the way they hold their weapon, where their eyes go when they're nervous, the hesitation before they move.

On failure, you do not gain the Assessed condition and the Intel Die is spent. However, you learn whether the target is **stronger, equal, or weaker** than you in overall combat capability — even a failed Cold Read gives you something.

*Cold Read is the Profiler's version of intuition — except it's not intuition, it's pattern recognition operating at a speed that looks like instinct. You walk into a room and know within seconds who's dangerous, who's lying, and who's about to do something stupid.*

#### Level 10 Capstone Ability

**Psychological Autopsy** (1/Long Rest, 1 Action, costs 3 Intel Dice)

You deliver a **devastating psychological attack** against an Assessed target with Deep Read within **60 feet**. This isn't magic and it isn't violence — it's the precisely chosen word, the revealed secret, the question that strips away every defense the target has built around themselves. You've profiled them so completely that you know the one thing they can't hear without breaking.

The target must make a **Will save** (DC = 8 + proficiency + INT modifier).

**On Failure:**
- The target is **stunned for 1 round** (processing what you've said)
- The target is then **frightened of you for 1 minute** (they understand, viscerally, that you see through them completely)
- The target **reveals one critical secret** — involuntarily, through their reaction. The GM determines the secret based on what the target most wants to hide: a password, a hidden weakness, the location of something they're protecting, their true identity beneath a cover, or the one order they'll refuse to follow.
- The target can repeat the Will save at the end of each of its turns to end the frightened condition

**On Success:**
- The target is **frightened of you for 1 round** only
- The target reveals nothing

Creatures that are **immune to the frightened condition** are immune to Psychological Autopsy entirely — you need emotional levers to work with, and mindless creatures or beings beyond emotion offer none.

*"I know about Marker's Point. I know you were there. I know what you did to the family in the third house. And I know you haven't slept through the night since. So here's what's going to happen — you're going to tell me where the shipment is, or I'm going to say the name of the girl who got away, the one you've been looking for ever since, and everyone in this room is going to hear the story you've spent five years burying."*

> **GM Guidance:** Psychological Autopsy is roleplay-heavy by design. The Profiler player should describe what they say or do — the specific revelation, accusation, or question that breaks the target. The GM then determines what secret the target reveals based on their personality and situation. This ability should create dramatic moments, not just mechanical effects. The "critical secret" should always be something actionable — information the party can use.
