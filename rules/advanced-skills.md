# Advanced Skills
![A demolitions expert places charges on a vault door while a forensics investigator examines a crime scene behind them](/images/illustrations/advanced-skills-action.png)

---

Advanced skills are **specializations** — focused expertise that opens new gameplay options unavailable through base skills alone. They represent dedicated training in a narrow domain, building on top of broader foundational knowledge.

**Key Principles:**
- Advanced skills unlock **new capabilities**, not just harder versions of base skill checks
- Class features are **always superior** to advanced skill equivalents — the skill opens the door, the class kicks it down
- Advanced skills provide **access**, not mastery

---

## Acquiring Advanced Skills

### Requirements

To learn an advanced skill, you must meet all of the following:

1. **Character Level 3+** — You need enough experience to specialize
2. **Prerequisite Skill at Proficient** — You must be proficient (not just trained) in the required base skill
3. **Spend 3 AP** (2 AP for Operatives) — Reflects focused study beyond general training

### Limits

- **Maximum 2 advanced skills** per character (3 for Operatives)
- Advanced skills **cannot be upgraded to Expertise** — there is no Expert tier for advanced skills
- You cannot acquire an advanced skill through downtime training alone — it requires AP investment

### Skill Checks

Advanced skill checks use the same formula as base skills:

`d20 + Attribute Modifier + Proficiency Bonus`

You add your proficiency bonus if you have the advanced skill. If you don't have the advanced skill, you **cannot attempt** these specialized checks — they require specific training that raw attribute scores cannot substitute for.

Your proficiency bonus scales with character level as normal (L1-4: +2, L5-8: +3, etc.). The **+18 maximum skill bonus cap** applies to advanced skills.

---

## Advanced Skill List

| Advanced Skill | Attribute | Prerequisite | Domain |
|---|---|---|---|
| **Hacking** | INT | Technology (Proficient) | Network intrusion, data extraction, system manipulation |
| **Demolitions** | INT | Science (Proficient) | Explosives crafting, bomb disposal, structural demolition |
| **Forensics** | INT | Investigation (Proficient) | Crime scene analysis, ballistic evidence, cause of death |
| **Xenology** | INT or WIS | Arcana or Science (Proficient) | Alien biology, alien technology, extraplanar phenomena |
| **Pharmacology** | WIS or INT | Medicine (Proficient) | Drug crafting, poison brewing, stimulant design |
| **Robotics** | INT | Technology (Proficient) | Drone repair, autonomous systems, AI interaction |
| **Tactics** | INT or WIS | Perception or Survival (Proficient) | Battle planning, ambush setup, terrain exploitation |
| **Scavenging** | WIS | Survival (Proficient) | Salvage appraisal, efficient stripping, rare components |

---

## Hacking (INT)

**Prerequisite:** Technology (Proficient)

Network intrusion, data extraction, and system manipulation beyond basic terminal access. Where the Technology skill lets you access unlocked systems and hack simple terminals, Hacking lets you breach secured networks, extract encrypted data, and manipulate complex digital infrastructure.

**Skill Uses:**

- **Breach Network** — Gain unauthorized access to a networked system. DCs follow the Network Tier table in [Hacking](hacking.md): DC 12 (scrap net), DC 14 (local settlement), DC 17 (secured/faction), DC 20 (corporate/hardened), DC 24 (military or AI-defended). Time: 10 minutes. Success grants access to connected systems — surveillance feeds, door controls, communications, stored data. Failure by 5+ triggers active countermeasures (lockout, alarm, or trace).

- **Extract Encrypted Data** — Recover protected information from a secured terminal or data storage device. DC 16 (standard encryption), DC 20 (military encryption), DC 24 (pre-war corporate or alien encryption). Time: 30 minutes. Success retrieves the data intact. Failure retrieves partial or corrupted data. Failure by 5+ corrupts the source — the data is lost.

- **Spoof Credentials** — Create false digital identity credentials to bypass security checkpoints, access restricted areas, or impersonate authorized personnel on a network. DC 16 (low-security checkpoint), DC 20 (military credentials), DC 24 (administrator access). Credentials hold until actively challenged — an opposing Technology or Hacking check can detect the forgery.

- **Intercept Transmission** — Tap into wireless communications within range (typically 500 feet for local, unlimited for hardwired access). DC 16 (unencrypted), DC 20 (encrypted), DC 24 (frequency-hopping military comms). Time: 10 minutes to establish tap, then ongoing monitoring. Detection requires a contested Hacking or Technology check.

**What Hacking Cannot Do:**
- **Weaponize networks** — You cannot deal damage through hacking or inflict conditions on augmented targets. This is Technician Cyberwarfare territory (System Breach, Neural Spike, Neural Assault).
- **Fast combat hacking** — You can hack in combat, but it's slow (4-6 actions across 1.5-2 turns; see [Hacking in Combat](hacking.md#hacking-in-combat)). Technician Neural Interface allows 1-action hacking at lower DCs (10/15/20), making the Technician class the combat hacking specialist.
- **Control autonomous AI** — You can interact with AI systems but cannot override or commandeer them. Technician Hacker spec (Total System Override) claims this domain.
- **Erase your digital traces automatically** — You leave evidence. Technician Digital Ghost erases traces passively.

**Class Comparison — Technician (Hacker):**
The Technician's Neural Interface operates as a 1-action ability at DCs 10/15/20 — faster and easier than Hacking's 10-minute checks at DCs 16/20/24. The Cyberwarfare tree adds Digital Ghost (erase traces) and Neural Assault (stun augmented targets). The Hacker spec adds System Breach (control electronics at 60 ft), Neural Spike (3d8 damage + stun), and Total System Override (control ALL electronics in 100 ft for 10 minutes). A character with the Hacking advanced skill can crack a corporate terminal given time and quiet. A Technician Hacker can seize a military installation's entire digital infrastructure in combat.

---

## Demolitions (INT)

**Prerequisite:** Science (Proficient)

Crafting, placing, and defusing explosives. Where the Science skill's Synthesize Compound use lets you create basic explosive materials (DC 20), Demolitions lets you build functional devices, place them strategically, and safely dispose of others' work.

**Skill Uses:**

- **Craft Explosive Device** — Build a functional bomb, mine, or breaching charge from available materials. DC 16 (pipe bomb: 2d6 fire, 10-ft radius), DC 20 (fragmentation device: 3d6 piercing, 15-ft radius), DC 24 (shaped breaching charge: 4d6 force, directional). Time: 1 hour. Requires explosive materials (synthesized or scavenged). You can maintain a maximum of 2 active devices at a time.

- **Defuse Explosive** — Safely disarm a bomb, mine, or trapped explosive. DC 16 (crude device), DC 20 (military ordnance), DC 24 (dead man's switch or tamper-proofed). Time: 1 minute (careful) or 1 action (emergency, DC increases by 4). Failure by 5+ detonates the device. Success recovers the explosive materials for reuse.

- **Identify Weak Point** — Analyze a structure to determine optimal placement for demolition charges. DC 14 (wooden building), DC 18 (concrete structure), DC 22 (reinforced bunker). Time: 10 minutes of observation. Success identifies the minimum charges needed and optimal placement for controlled demolition.

- **Assess Blast** — Examine an explosion site or unexploded ordnance to determine the type, yield, and origin of explosives used. DC 14 (common explosives), DC 18 (military ordnance), DC 22 (exotic or alien). Useful for forensic investigation and threat assessment.

**What Demolitions Cannot Do:**
- **Craft shaped charges with bonus damage dice** — Gunslinger Demolitionist's Explosives Expert creates grenades (3d6 with Reflex save) that the character can carry up to INT mod. The advanced skill's devices are weaker and limited to 2 active at a time.
- **Reshape blast patterns** — Gunslinger Demolitionist's Shaped Charge converts radius to cone or line. Advanced skill devices always use standard radius.
- **Set proximity traps with class action economy** — Gunslinger Demolitionist's Trap Setter uses 1 minute and allows INT mod active traps. Advanced skill doesn't grant trap-setting beyond the device itself.
- **Create Grand Detonation-scale explosions** — The Demolitionist's capstone (8d6, 30-ft radius, prone + deafened) is impossible through skill checks alone.

**Class Comparison — Gunslinger (Demolitionist):**
The Demolitionist crafts grenades during short rests (no time pressure), carries INT mod explosives (vs. 2), shapes blast patterns, and sets intelligent proximity traps. At Level 10, Grand Detonation delivers 8d6 in a 30-ft radius. A character with Demolitions can build a pipe bomb given an hour and materials. A Demolitionist arms the party with an arsenal every rest and reshapes the battlefield with controlled detonations.

---

## Forensics (INT)

**Prerequisite:** Investigation (Proficient)

Scientific crime scene analysis that goes beyond Investigation's logical deduction. Where Investigation reconstructs events from observable evidence, Forensics applies scientific methodology — ballistics, trace analysis, toxicology, and biological evidence.

**Skill Uses:**

- **Determine Cause of Death** — Examine a corpse to determine how and approximately when they died. DC 12 (obvious trauma), DC 16 (poisoning, disease, or concealed cause), DC 20 (staged scene or exotic method). Time: 10 minutes. Success reveals the cause, approximate time of death, and whether the death was natural, accidental, or deliberate.

- **Analyze Ballistic Evidence** — Match projectiles, burn patterns, or energy weapon signatures to weapon types. DC 14 (common firearms), DC 18 (military or modified weapons), DC 22 (pre-war experimental or alien weapons). Time: 15 minutes with evidence in hand. Success identifies the weapon type, approximate range, and potentially narrows down the specific weapon if you have a suspect's gear for comparison.

- **Trace Evidence Analysis** — Examine a scene for chemical residues, biological samples, radiation signatures, or material traces invisible to casual observation. DC 14 (heavy contamination), DC 18 (trace amounts), DC 22 (deliberately cleaned or days old). Time: 30 minutes. Success reveals what substances were present, who or what was in the area, and environmental conditions at the time of the event.

- **Reconstruct Forensic Timeline** — Combine multiple evidence types to build a detailed sequence of events. DC 16 (recent, multiple evidence types available), DC 20 (older scene or limited evidence), DC 24 (deliberately staged or evidence-destroyed scene). Time: 1 hour. This goes beyond Investigation's Reconstruct Events by incorporating scientific analysis — not just "what happened" but "what substances were used, what weapons were fired, and what biological evidence was left."

**What Forensics Cannot Do:**
- **Instantly profile suspects** — The Operative Recon tree's Intel Gathering provides automatic bonus information about targets. Forensics requires time, evidence, and specific checks.
- **Identify individuals on sight** — The Operative's Expertise in Investigation or Perception outclasses Forensics for real-time identification. Forensics is laboratory-speed, not field-speed.
- **Grant combat advantages** — Forensics is purely investigative. It doesn't provide tactical bonuses like the Operative's Perfect Ambush or the Diplomat's battlefield awareness.

**Class Comparison — Operative (Recon/Spy):**
The Operative's Recon tree provides Scout's Eye (advantage on Perception), Overwatch (reaction attacks), and Perfect Ambush (party-wide surprise + bonus damage). The Spy spec adds Codebreaker (advantage on Investigation for hidden info, decipher any code in 1 hour) and Ghost Protocol (undetectable for 1 hour). These are real-time, field-applicable abilities. Forensics is the slow, thorough complement — the difference between a scout who reads a battlefield and a detective who reads a crime scene.

---

## Xenology (INT or WIS)

**Prerequisite:** Arcana or Science (Proficient)

The study of alien biology, technology, and extraplanar phenomena. Where Arcana covers magical creatures and Survival covers wasteland fauna, Xenology specifically addresses the alien and the truly foreign — species, artifacts, and environments that don't follow terrestrial rules.

**Skill Uses:**

- **Identify Alien Species** — Recognize an alien species, its biology, behavioral patterns, and threat level. DC 12 (common species encountered since the Fall), DC 16 (rare species or unusual variant), DC 20 (unique or previously unrecorded species). Success reveals physiology, known weaknesses, social structure, and communication methods.

- **Interface with Alien Technology** — Operate, analyze, or activate alien devices that don't follow human engineering principles. DC 16 (partially documented tech), DC 20 (unknown but recognizable function), DC 24 (completely foreign design paradigm). Time: 10 minutes to analyze, additional time to operate. This is distinct from Technology (which covers human-built systems) — alien tech often requires understanding of non-human logic.

- **Communicate with Non-Humanoids** — Establish basic communication with alien species that don't share human language structures. DC 16 (species with known communication patterns), DC 20 (novel species with recognizable signaling), DC 24 (truly alien cognition — hive minds, crystalline entities, energy beings). Conveys simple concepts only — not fluent conversation.

- **Recognize Extraplanar Contamination** — Detect signs of dimensional instability, alien biological contamination, or reality distortion in an environment. DC 14 (obvious signs — warped physics, mutated flora), DC 18 (subtle contamination — faint energy signatures, behavioral changes in local wildlife), DC 22 (dormant or concealed — contamination designed to avoid detection). Time: 10 minutes of observation.

**What Xenology Cannot Do:**
- **Channel alien or spiritual energies** — This is Channeler territory. Xenology understands alien forces intellectually; it cannot wield them.
- **Bond with spirits or extraplanar entities** — The Channeler's Spirit Bond tree and Shaman spec provide actual spiritual companions and communion. Xenology studies these phenomena from the outside.
- **Cast spells or produce magical effects** — Understanding alien magic intellectually doesn't grant the ability to use it. That requires the Mystic's Spell Crafting or the Channeler's Channel Energy.

**Class Comparison — Channeler (Shaman):**
The Shaman spec provides Spirit Companion (permanent incorporeal scout that translates dead languages), Totem Bond (permanent passive bonuses from animal spirits), Spirit Walk (become ethereal), and Summon Greater Spirit (conjure a combatant). These are active supernatural abilities. Xenology is academic knowledge that helps you understand and interact with alien phenomena — the difference between a xenobiologist and a shaman.

---

## Pharmacology (WIS or INT)

**Prerequisite:** Medicine (Proficient)

Crafting drugs, stimulants, poisons, and chemical agents for specific effects. Where Medicine treats injuries and diseases, and Science's Synthesize Compound creates generic chemicals, Pharmacology produces tailored biological agents designed for specific physiological effects.

**Skill Uses:**

- **Craft Stimulant** — Produce a stimulant that provides a temporary boost. DC 16 (basic stim: +1 to one attribute for 1 hour, 1 Exhaustion after), DC 20 (combat stim: +1 to attack rolls for 10 minutes, 1 Exhaustion after), DC 24 (performance enhancer: +2 to one attribute for 1 hour, 2 Exhaustion after). Time: 1 hour. Requires pharmaceutical supplies. A creature can benefit from only one stimulant at a time.

- **Brew Poison** — Create an ingested, contact, or injury poison. DC 16 (mild: 1d6 poison damage + poisoned for 1 hour, DC 12 Fort save), DC 20 (moderate: 2d6 poison damage + poisoned for 4 hours, DC 14 Fort save), DC 24 (potent: 3d6 poison damage + poisoned for 8 hours + 1 Exhaustion, DC 16 Fort save). Time: 2 hours. Requires poisonous materials.

- **Synthesize Antidote** — Create an antidote for a specific toxin or drug. DC 14 (common poisons), DC 18 (military-grade toxins), DC 22 (exotic or alien poisons). Requires a sample of the toxin or a successful Diagnose check (Medicine). Time: 30 minutes. The antidote cures the poisoned condition and halts ongoing poison damage.

- **Identify Substance** — Determine the composition, dosage, and effects of an unknown pharmaceutical, drug, or toxin. DC 12 (common drugs), DC 16 (military or pre-war pharmaceuticals), DC 20 (alien biochemicals or engineered agents). Time: 10 minutes with proper tools, 30 minutes without. More precise than Science's Analyze Substance — identifies exact dosage, shelf life, side effects, and potential interactions.

**What Pharmacology Cannot Do:**
- **Craft advanced pharmaceuticals with bonus effects** — The Medic Pharmacist's Combat Stimulants grant 1d8+WIS temp HP and +2 DV as a bonus action. Pharmacology stimulants are weaker (+1 to an attribute) and always cause Exhaustion.
- **Produce side-effect-free enhancers** — The Medic Pharmacist's Clearwater formula grants advantage on mental checks for 1 hour with no side effects. Pharmacology stimulants always carry Exhaustion costs.
- **Create masterwork serums** — The Medic's Masterwork Serum (+2 to an attribute for 24 hours, damage immunity, or regeneration) is beyond what Pharmacology can produce.
- **Administer drugs as a bonus action** — Medic Pharmacist's Combat Stimulants use a bonus action. Pharmacology drugs require a standard action to administer.

**Class Comparison — Medic (Pharmacist):**
The Medic's Pharmacology tree starts with Stimpack Crafter (DC 12, craft 1d4 stims during short rest), Poison Crafter (DC 14, 2d6 damage poisons), and Performance Enhancers (+2 to attacks, +4 to attributes). The Pharmacist spec adds Combat Stimulants (bonus action, 1d8+WIS temp HP + 2 DV), side-effect-free Clearwater, Berserker Juice (+1d4 damage + resistance), and Masterwork Serum (capstone-level effects). A character with Pharmacology can brew a basic combat stim. A Medic Pharmacist is a walking pharmaceutical lab producing effects that rewrite the rules of biology.

---

## Robotics (INT)

**Prerequisite:** Technology (Proficient)

Working with autonomous machines — drones, robots, turrets, mech suits, and AI systems. Where Technology covers repairing and operating standard equipment, Robotics covers systems with autonomous behavior, decision-making capabilities, or complex multi-system integration.

**Skill Uses:**

- **Field Repair Autonomous System** — Repair a damaged drone, robot, or turret to operational status. DC 14 (minor damage: restore 25% HP), DC 18 (major damage: restore 50% HP), DC 22 (critical damage: restore to operational with limitations). Time: 30 minutes. Requires a tech toolkit. This applies to autonomous systems specifically — standard equipment repair uses the Technology skill.

- **Reprogram Simple AI** — Alter the behavior parameters of a basic automated system (automated turret, patrol robot, security drone). DC 16 (change target parameters), DC 20 (reverse friend/foe designation), DC 24 (install new behavioral routines). Time: 10 minutes with direct access. The AI must be non-sapient — sapient AI cannot be reprogrammed through skill checks.

- **Operate Salvaged Mech** — Pilot a recovered mech suit, power loader, or heavy autonomous platform not designed for your use. DC 16 (standard operation), DC 20 (combat maneuvers), DC 24 (operations outside design parameters). Without this skill, operating unfamiliar autonomous platforms is impossible.

- **Diagnose AI Malfunction** — Identify what's wrong with a malfunctioning autonomous system — corrupted code, damaged sensors, conflicting directives, or external interference. DC 14 (hardware failure), DC 18 (software corruption), DC 22 (deliberately sabotaged or virus-infected). Time: 15 minutes. Success identifies the problem and the repair method.

**What Robotics Cannot Do:**
- **Build companion drones** — The Technician's Drone Companion is a class feature that provides a leveled, customizable autonomous ally. Robotics can repair existing drones but cannot create a bonded companion.
- **Overclock machines** — The Technician's Overclock feature temporarily supercharges devices beyond their design specs. Robotics repairs to spec, not beyond it.
- **Deploy combat turrets** — The Technician Engineer spec's Deployable Turret (HP 20, DV 14, 2d6+INT damage at 60 ft) is a class feature. Robotics can reprogram an existing turret you find, but not conjure one.
- **Perform neural augmentation** — The Technician Augmenter spec handles cybernetic enhancement. Robotics covers external autonomous systems, not internal augmentation.

**Class Comparison — Technician:**
The Technician's entire identity revolves around machines. Drone Companion provides a leveled autonomous ally with its own action economy. Overclock supercharges devices. The Engineer spec deploys turrets and crafts equipment at half cost. The Augmenter spec modifies the human body itself. A character with Robotics can field-repair a broken patrol bot and tell it to guard a door. A Technician commands a personal drone army, deploys turrets, and merges flesh with machine.

---

## Tactics (INT or WIS)

**Prerequisite:** Perception or Survival (Proficient)

Military analysis, battle planning, and strategic thinking. Where Perception notices threats and Survival navigates terrain, Tactics synthesizes both into actionable combat intelligence — force assessment, positioning, and operational planning.

**Skill Uses:**

- **Assess Enemy Force** — Evaluate an enemy group's composition, capabilities, equipment quality, and morale. DC 14 (visible, unorganized group), DC 18 (disciplined force with concealed elements), DC 22 (fortified position with unknown reserves). Time: 1 minute of observation (or 10 minutes from a distance with binoculars/scope). Success reveals approximate numbers, armament level, training quality, and likely tactics.

- **Identify Ambush Position** — Find the optimal location for an ambush given the terrain and expected enemy movement. DC 14 (open terrain with some cover), DC 18 (urban or mixed terrain), DC 22 (hostile or unfamiliar territory). Time: 10 minutes of terrain study. Success grants the party +2 to Stealth checks for the ambush setup. This stacks with the Operative's Perfect Ambush if both are used.

- **Plan Tactical Withdrawal** — Identify and communicate retreat routes, rally points, and fallback positions before or during combat. DC 14 (known terrain), DC 18 (partially explored), DC 22 (unknown territory). Success means the party can disengage without provoking opportunity attacks if they follow the planned route (requires 1 round of coordinated movement).

- **Read Battlefield Terrain** — Analyze the current battlefield for cover quality, elevation advantages, chokepoints, and hazards. DC 12 (simple terrain), DC 16 (complex urban or ruin), DC 20 (multi-level or dynamic environment). Time: 1 action in combat or 5 minutes out of combat. Success reveals the 3 best tactical positions on the field — the GM identifies specific squares or areas that provide superior cover (+2 DV instead of standard cover bonuses) or elevation advantage.

**What Tactics Cannot Do:**
- **Issue commands as free actions** — The Diplomat's Commanding Presence is a free action that provides buffs every round. Tactics requires actions and advance preparation.
- **Grant allies bonus actions or extra attacks** — The Diplomat Commander's Battle Orders (1 action, 3 allies choose +2 DV, move 15 ft, or +1d4 damage) and Supreme Commander (extra action, +3 DV, or advantage) provide direct mechanical buffs. Tactics provides information and positioning advantages.
- **Provide Inspiring Word-style morale boosts** — The Diplomat's Inspire feature grants temporary HP and bonus dice. Tactics doesn't affect morale — it affects positioning and preparation.
- **Generate surprise rounds** — The Operative's Perfect Ambush grants automatic surprise + bonus damage. Tactics' Identify Ambush Position grants a Stealth bonus, but surprise still depends on Stealth vs. Perception.

**Class Comparison — Diplomat (Commander) / Warrior:**
The Diplomat Commander issues Battle Orders as a 1-action ability affecting 3 allies with concrete mechanical bonuses (+2 DV, movement, +1d4 damage). War Cry frightens enemies and grants +2 to ally attack rolls. Supreme Commander grants an extra action to all allies. The Warrior's Combat Stance provides persistent defensive bonuses. These are real-time, in-combat force multiplication. Tactics is the planning that happens before the fight — the difference between a general who draws up the battle plan and a commander who leads from the front.

---

## Scavenging (WIS)

**Prerequisite:** Survival (Proficient)

The art of finding value in wreckage. Where Survival keeps you alive in the wilderness through foraging and shelter, Scavenging is specifically about extracting useful materials, components, and technology from ruins, junkyards, and battlefields.

**Skill Uses:**

- **Appraise Ruin** — Assess a ruin, wreck, or salvage site before committing time to explore it. DC 12 (visible wreckage), DC 16 (partially buried or obscured site), DC 20 (site with no obvious salvage value). Time: 10 minutes of external observation. Success reveals approximate salvage value (low/medium/high/exceptional), likely hazards, and whether the site has already been picked over.

- **Efficient Strip** — Extract maximum value from a salvage source. When looting wreckage, vehicles, or structures for parts and materials, a successful check yields 25% more materials than standard searching. DC 14 (common materials), DC 18 (complex machinery with reusable components), DC 22 (pre-war tech with delicate internals). Time: adds 15 minutes to standard looting time.

- **Locate Rare Components** — Find specific hard-to-find parts in a junkyard, ruin, or marketplace. DC 16 (uncommon components), DC 20 (rare pre-war parts), DC 24 (unique or alien-origin components). Time: 1d4 hours of dedicated searching. Success locates the component; failure means it's not present at this location (or too damaged to use). This is distinct from shopping — it's finding a specific needle in a scrap heap.

- **Assess Salvage Value** — Determine whether a piece of equipment or technology is worth more intact (for use or sale) or stripped for parts. DC 12 (common gear), DC 16 (pre-war equipment), DC 20 (alien or prototype tech). Time: 5 minutes. Success reveals repair cost vs. part value, identifies the most valuable components, and flags any hidden functionality.

**What Scavenging Cannot Do:**
- **Repair or jury-rig broken equipment** — That's the Technology skill (and the Technician's Jury-Rig feature). Scavenging finds the parts; Technology makes them work.
- **Craft items from salvaged materials** — Crafting requires Technology checks or class features (Technician Workshop, Medic Stimpack Crafter, etc.). Scavenging feeds the supply chain.
- **Identify the function of unknown technology** — That's Technology's Identify Tech use. Scavenging knows what's valuable; Technology knows what it does.

**Class Comparison:**
No single class claims scavenging as a domain, which makes this the most "universal" advanced skill. However, the Technician's Workshop (Engineer spec) crafts at half cost — meaning a Technician with Scavenging finds cheap parts AND builds cheap gear, creating a powerful economic loop. The GM should be aware of this synergy.

---

## Advanced Skills and Class Features: The Hierarchy

Advanced skills exist in a clear hierarchy below class features. This table summarizes the relationship:

| Advanced Skill | Overlapping Class | Why the Class Is Superior |
|---|---|---|
| **Hacking** | Technician (Hacker) | 1-action hacking at lower DCs, advantage on checks, combat hacking, neural attacks, total system override |
| **Demolitions** | Gunslinger (Demolitionist) | Short-rest crafting, more devices (INT mod vs. 2), shaped charges, proximity traps, Grand Detonation (8d6) |
| **Forensics** | Operative (Recon/Spy) | Real-time field intelligence, automatic bonus info, advantage on Investigation, 1-hour code breaking |
| **Xenology** | Channeler (Shaman) | Active spiritual abilities, spirit companions, ethereal travel, spirit summoning |
| **Pharmacology** | Medic (Pharmacist) | Bonus-action delivery, no-side-effect formulas, stronger effects, Masterwork Serum capstone |
| **Robotics** | Technician (all specs) | Bonded drone companion, turret deployment, overclock, augmentation |
| **Tactics** | Diplomat (Commander) | Free-action commands, mechanical buffs to allies, extra actions, morale effects |
| **Scavenging** | No single class | Most universal — synergizes with multiple classes rather than competing |

### Design Intent

The advanced skill system serves three purposes:

1. **Genre fulfillment** — Post-apocalyptic sci-fi demands that characters interact with hacking, explosives, alien tech, and salvage. Without advanced skills, only specific classes can engage with these genre staples.

2. **Horizontal character growth** — Advanced skills give non-specialist characters meaningful access to specialized domains without stepping on class identity. A Warrior with Demolitions can defuse a bomb. A Gunslinger Demolitionist can level a building.

3. **Party composition flexibility** — Not every party has a Technician. Advanced skills let other characters cover gaps — imperfectly, but adequately — ensuring the game doesn't require specific class compositions.

---

## Quick Reference

**Cost:** 3 AP (2 AP for Operatives)
**Level Gate:** 3+
**Prerequisite:** Proficient in required base skill
**Max Per Character:** 2 (3 for Operatives)
**Expertise Available:** No
**Check Formula:** d20 + Attribute Modifier + Proficiency Bonus
**Max Bonus Cap:** +18 (bounded accuracy)
