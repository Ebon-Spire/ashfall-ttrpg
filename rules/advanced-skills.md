# Advanced Skills
![A demolitions expert places charges on a vault door while a forensics investigator examines a crime scene behind them](/images/illustrations/advanced-skills-action.png)

---

Advanced skills are **specializations** — focused expertise that opens new gameplay options unavailable through base skills alone. They represent dedicated training in a narrow domain, building on top of broader foundational knowledge.

**Key Principles:**
- Advanced skills unlock **new capabilities**, not just harder versions of base skill checks
- Build features are **always superior** to advanced skill equivalents — the skill opens the door, the build kicks it down
- Advanced skills provide **access**, not mastery

---

## Acquiring Advanced Skills

### Requirements

To learn an advanced skill, you must meet all of the following:

1. **Character Level 3+** — You need enough experience to specialize
2. **Prerequisite Skill at Proficient** — You must be proficient (not just trained) in the required base skill
3. **Spend 3 CP** (2 CP for Specialist chassis) — Reflects focused study beyond general training

### Limits

- **Maximum 2 advanced skills** per character (3 for Specialist chassis)
- Advanced skills **cannot be upgraded to Expertise** — there is no Expert tier for advanced skills
- You cannot acquire an advanced skill through downtime training alone — it requires CP investment

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
| **Statecraft** | PRE | Persuasion or Deception (Proficient) | Political maneuvering, faction influence, organizational intelligence |
| **Tracking** | WIS | Survival (Proficient) | Trail following, urban surveillance, counter-tracking, sign reading |
| **Interrogation** | PRE or WIS | Insight or Intimidation (Proficient) | Structured questioning, deception detection, psychological profiling |

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
- **Fast combat hacking** — You can hack in combat, but it's slow (4-6 actions across 1.5-2 turns; see [Hacking in Combat](hacking.md#hacking-in-combat)). Technician Neural Interface allows 1-action hacking at lower DCs (10/15/20), making the Technician build the combat hacking specialist.
- **Control autonomous AI** — You can interact with AI systems but cannot override or commandeer them. Technician Hacker spec (Total System Override) claims this domain.
- **Erase your digital traces automatically** — You leave evidence. Technician Digital Ghost erases traces passively.

**Build Comparison — Technician (Hacker):**
The Technician's Neural Interface operates as a 1-action ability at DCs 10/15/20 — faster and easier than Hacking's 10-minute checks at DCs 12–24 (scaling by network tier). The Cyberwarfare tree adds Digital Ghost (erase traces) and Neural Assault (stun augmented targets). The Hacker spec adds System Breach (control electronics at 60 ft), Neural Spike (3d8 damage + stun), and Total System Override (control ALL electronics in 100 ft for 10 minutes). A character with the Hacking advanced skill can crack a corporate terminal given time and quiet. A Technician Hacker can seize a military installation's entire digital infrastructure in combat.

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

**Build Comparison — Gunslinger (Demolitionist):**
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

**Build Comparison — Operative (Recon/Spy):**
The Operative's Recon tree provides Scout's Eye (advantage on Perception), Overwatch (reaction attacks), and Perfect Ambush (party-wide surprise + bonus damage). The Spy spec adds Codebreaker (advantage on Investigation for hidden info, decipher any code in 1 hour) and Phantom Protocol (undetectable for 1 hour). These are real-time, field-applicable abilities. Forensics is the slow, thorough complement — the difference between a scout who reads a battlefield and a detective who reads a crime scene.

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

**Build Comparison — Channeler (Shaman):**
The Shaman spec provides Spirit Companion (permanent incorporeal scout that translates dead languages), Totem Bond (permanent passive bonuses from animal spirits), Spirit Walk (become ethereal), and Summon Greater Spirit (conjure a combatant). These are active supernatural abilities. Xenology is academic knowledge that helps you understand and interact with alien phenomena — the difference between a xenobiologist and a shaman.

---

## Pharmacology (WIS or INT)

**Prerequisite:** Medicine (Proficient)

Crafting drugs, stimulants, poisons, and chemical agents for specific effects. Where Medicine treats injuries and diseases, and Science's Synthesize Compound creates generic chemicals, Pharmacology produces tailored biological agents designed for specific physiological effects.

**Skill Uses:**

- **Craft Stimulant** — Produce a stimulant that provides a temporary boost. DC 16 (basic stim: +1 to one attribute for 1 hour, 1 Exhaustion after), DC 20 (combat stim: +1 to attack rolls for 10 minutes, 1 Exhaustion after), DC 24 (performance enhancer: +2 to one attribute for 1 hour, 2 Exhaustion after). Time: 1 hour. Requires pharmaceutical supplies. A creature can benefit from only one stimulant at a time.

- **Brew Poison** — Create an ingested, contact, or injury poison. DC 16 (mild: 1d6 poison damage + poisoned for 1 hour, DC 12 Fortitude save), DC 20 (moderate: 2d6 poison damage + poisoned for 4 hours, DC 14 Fortitude save), DC 24 (potent: 3d6 poison damage + poisoned for 8 hours + 1 Exhaustion, DC 16 Fortitude save). Time: 2 hours. Requires poisonous materials.

- **Synthesize Antidote** — Create an antidote for a specific toxin or drug. DC 14 (common poisons), DC 18 (military-grade toxins), DC 22 (exotic or alien poisons). Requires a sample of the toxin or a successful Diagnose check (Medicine). Time: 30 minutes. The antidote cures the poisoned condition and halts ongoing poison damage.

- **Identify Substance** — Determine the composition, dosage, and effects of an unknown pharmaceutical, drug, or toxin. DC 12 (common drugs), DC 16 (military or pre-war pharmaceuticals), DC 20 (alien biochemicals or engineered agents). Time: 10 minutes with proper tools, 30 minutes without. More precise than Science's Analyze Substance — identifies exact dosage, shelf life, side effects, and potential interactions.

**What Pharmacology Cannot Do:**
- **Craft advanced pharmaceuticals with bonus effects** — The Medic Pharmacist's Combat Stimulants grant 1d8+WIS temp HP and +2 DV as 1 action. Pharmacology stimulants are weaker (+1 to an attribute) and always cause Exhaustion.
- **Produce side-effect-free enhancers** — The Medic Pharmacist's Clearwater formula grants advantage on mental checks for 1 hour with no side effects. Pharmacology stimulants always carry Exhaustion costs.
- **Create masterwork serums** — The Medic's Masterwork Serum is a capstone-tier compound with three formula options: Combat Accelerant (grants an additional action per turn for 1 minute, then 3 exhaustion), Anti-Necrotix (end all conditions and exhaustion, or grant immunity to death save failures), or Cascade Formula (all your healing cascades to up to 1d4 nearby allies for 1 minute). None of these effects are achievable through Pharmacology.
- **Scale combat drug delivery** — Medic Pharmacist's Combat Stimulants use 1 action and scale with WIS modifier (minimum 1 use per short rest, potentially many more). Pharmacology drugs require a standard action to administer and grant no scaling uses.

**Build Comparison — Medic (Pharmacist):**
The Medic's Pharmacology tree starts with Stimpack Crafter (DC 12, craft 1d4 stims during short rest), Poison Crafter (DC 14, 2d6 damage poisons), and Performance Enhancers (+4 to one physical attribute for 10 minutes, 2 Exhaustion after). The Pharmacist spec adds Combat Stimulants (1 action, 1d8+WIS temp HP + 2 DV), side-effect-free Clearwater, Berserker Juice (+1d4 damage + resistance), and Masterwork Serum (choose one of three capstone formulas: Combat Accelerant, Anti-Necrotix, or Cascade Formula). A character with Pharmacology can brew a basic combat stim. A Medic Pharmacist is a walking pharmaceutical lab producing effects that rewrite the rules of biology.

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
- **Build companion drones** — The Technician's Drone Companion is a build feature that provides a leveled, customizable autonomous ally. Robotics can repair existing drones but cannot create a bonded companion.
- **Overclock machines** — The Technician's Overclock feature temporarily supercharges devices beyond their design specs. Robotics repairs to spec, not beyond it.
- **Deploy combat turrets** — The Technician Engineer spec's Deployable Turret (HP 20, DV 14, 2d6+INT damage at 60 ft) is a build feature. Robotics can reprogram an existing turret you find, but not conjure one.
- **Perform neural augmentation** — The Technician Augmenter spec handles cybernetic enhancement. Robotics covers external autonomous systems, not internal augmentation.

**Build Comparison — Technician:**
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

**Build Comparison — Diplomat (Commander) / Warrior:**
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
- **Craft items from salvaged materials** — Crafting requires Technology checks or build features (Technician Workshop, Medic Stimpack Crafter, etc.). Scavenging feeds the supply chain.
- **Identify the function of unknown technology** — That's Technology's Identify Tech use. Scavenging knows what's valuable; Technology knows what it does.

**Build Comparison:**
The Scavenger build is the superior build for scavenging — their Scrounger's Instinct and Salvage Dice system provide faster, cheaper, and more versatile salvaging than this skill alone. However, the Technician's Workshop (Engineer spec) crafts at half cost — meaning a Technician with Scavenging finds cheap parts AND builds cheap gear, creating a powerful economic loop. The GM should be aware of these synergies.

---

## Statecraft (PRE)

**Prerequisite:** Persuasion or Deception (Proficient)

Political maneuvering, institutional manipulation, and intelligence gathering at organizational scale. Where Persuasion convinces an individual and Deception fools them, Statecraft lets you navigate the machinery of power — reading factions, brokering deals between organizations, running influence campaigns, and extracting political intelligence from networks of contacts. This is the difference between winning a conversation and winning a war of ideas.

**Skill Uses:**

- **Read Power Structure** — Identify who holds real power in an organization, settlement, or faction. DC 14 (small group or outpost), DC 17 (settlement or faction chapter), DC 20 (major faction or city government), DC 24 (hidden power structure, shadow government, or faction inner circle). Time: 1 hour of observation or 1d4 hours of conversation with insiders. Success reveals: the actual decision-maker (not just the figurehead), key advisors, internal power struggles, and one leverage point (a weakness, dependency, or ambition you could exploit). Higher results reveal additional layers — beating the DC by 5+ reveals hidden allegiances, blackmail-worthy secrets, or imminent power shifts.

- **Influence Campaign** — Shift a faction's, settlement's, or organization's attitude toward a cause, person, or policy by **one step** on the disposition track: Hostile → Unfriendly → Neutral → Friendly → Loyal. DC 16 (small settlement or minor faction chapter), DC 20 (major settlement or faction regional leadership), DC 24 (faction-wide attitude or city-state policy). Time: **1 week of downtime** (concurrent with long rest). You must describe the specific actions you take: spreading rumors, building alliances, calling in favors, planting evidence, making public speeches, funding community projects, or undermining rivals. The GM may require resources (credits, political capital, or favors) based on the scope. Failure by 5+ causes **backlash** — the attitude shifts one step in the wrong direction as your machinations are exposed or misinterpreted.

- **Broker Alliance** — Negotiate a formal agreement between two parties (factions, settlements, merchant houses, or powerful individuals). Both parties must be at least **Neutral** toward the broker. DC 16 (minor agreement between compatible parties), DC 20 (significant agreement or parties with competing interests), DC 24 (major treaty or parties with active hostility toward each other). Time: **1d4 days of negotiation**. Success produces an agreement with specific terms, enforcement mechanism, and duration (you define these with the GM). The agreement holds as long as both parties benefit — violation of terms or changed circumstances may dissolve it. Failure wastes the time but doesn't worsen relations. Failure by 5+ offends one or both parties — their disposition toward you shifts one step toward Unfriendly.

- **Political Intelligence** — Gather targeted, actionable political information about a faction, settlement, or individual of power. Not general gossip (that's Gather Information via Persuasion/Streetwise) — this is structured intelligence gathering. DC 14 (public policy positions, known alliances), DC 17 (troop movements, trade agreements, upcoming decisions), DC 20 (succession plans, secret alliances, resource vulnerabilities), DC 24 (covert operations, mole identities, classified intelligence). Time: **1d4 hours** of working your network (conversations, dead drops, reading intercepted communications, visiting contacts). Success provides one piece of targeted intelligence per check. The GM determines what's available based on your network and position. Failure means your inquiries come up empty. Failure by 5+ alerts the target that someone is asking questions.

**What Statecraft Cannot Do:**
- **Issue commands to NPCs** — You can influence attitudes and broker agreements, but you cannot order people to act. That's leadership (Diplomat build) or coercion (Intimidation).
- **Override faction loyalty** — No check can make a loyal Iron Wolf betray Warchief Kova. Statecraft shifts organizational attitudes, not personal devotion.
- **Replace direct social checks** — Persuading a guard, deceiving a merchant, or intimidating a prisoner are base skill territory (Persuasion, Deception, Intimidation). Statecraft operates at organizational scale, not conversational scale.
- **Grant combat advantages** — Statecraft is preparation and politics, not battlefield tactics. Use the Tactics advanced skill for combat planning.
- **Force NPCs to act against core interests** — You can shift attitudes, not rewrite motivations. A faction that needs water will not agree to destroy its own wells, no matter how high you roll.

**Build Comparison — Diplomat:**
The Diplomat build operates at a level Statecraft cannot match. Diplomat features like **Commanding Presence** (d4 bonus to ally rolls), **Faction Representative** (faction-wide influence as a build feature), and the **Negotiator specialization** (party-wide social bonuses, Superior Negotiation) provide capabilities that are faster, more reliable, and more powerful than Statecraft checks. A Diplomat with Statecraft is a political force multiplier — Statecraft extends their reach, while their build features ensure their effectiveness. A non-Diplomat with Statecraft is a competent political operator — useful, but not the party face. The Diplomat owns the social domain the way the Technician owns hacking.

---

## Tracking (WIS)

**Prerequisite:** Survival (Proficient)

Following trails, reading sign, and hunting quarry across any terrain — from irradiated wasteland to ruined megacity. Where the Survival skill lets you navigate, forage, and avoid hazards, Tracking lets you follow specific creatures or people across time and distance, reading the story written in footprints, broken branches, scent trails, and disturbed dust. This is the difference between surviving the wasteland and hunting through it.

**Skill Uses:**

- **Follow Trail** — Track a creature or person by their physical signs (footprints, disturbed terrain, blood trails, broken vegetation). The DC depends on terrain, trail age, and quarry precautions:

  | Condition | DC Modifier |
  |-----------|-------------|
  | Soft ground (mud, sand, ash) | DC 12 (base) |
  | Hard ground (stone, concrete, metal) | DC 16 (base) |
  | Trail is fresh (< 1 hour) | +0 |
  | Trail is 1-8 hours old | +2 |
  | Trail is 1-3 days old | +4 |
  | Trail is 4-7 days old | +6 |
  | Trail is 1+ weeks old | +8 |
  | Rain, wind, or radiation storm since trail was made | +4 |
  | Quarry deliberately hid trail (counter-tracking) | +4 (or contested check — see Counter-Track) |
  | Large group (5+ creatures) | -2 (easier) |
  | Single creature, Small size or smaller | +2 (harder) |

  Time: 10 minutes per check (covers roughly 1 mile of trail). Success lets you follow the trail for the distance covered. Failure means you lose the trail — you can try again from the last known point at +2 DC (your uncertainty compounds). Failure by 5+ sends you in the wrong direction for 1 hour before you realize the error.

  *Example: Tracking a raider war party (5+ creatures, -2) across ash plains (soft ground, DC 12) one day after they passed (+4). Total DC: 14. The party's Operative rolls 18 — success. She follows the trail for another mile before rolling again.*

- **Read Sign** — Examine a trail, campsite, or location to extract specific information about the quarry. DC 14 (basic information), DC 18 (detailed information), DC 22 (hidden or subtle details). Time: 10 minutes of careful examination. The level of detail depends on the result:

  | Result | Information Gained |
  |--------|-------------------|
  | DC 14 | Number of creatures (approximate), size category, general direction of travel, time since passage |
  | DC 18 | Species or creature type, movement speed (walking/running/injured), whether they were carrying heavy loads, number of unique individuals |
  | DC 22 | Specific individual identification (if you've tracked them before), emotional state (panicked flight vs. orderly march), whether they stopped and for how long, hidden details (a creature that split from the group, a concealed cache) |

  *Example: The party finds a campsite in the ruins. The tracker makes a Read Sign check (DC 18): "Four people, all human-sized, one injured — dragging a leg. They camped here 2 days ago, heading northeast toward Reclaimer territory. They were carrying heavy packs."*

- **Urban Tracking (Surveillance)** — Follow a target through settled areas, crowds, or urban ruins using a combination of visual tracking, witness questioning, and pattern recognition. This is distinct from wilderness tracking — you're reading the social landscape, not the physical one. DC 14 (small settlement, few witnesses), DC 18 (major settlement, crowds), DC 22 (target is actively evading, using disguises, or has counter-surveillance). Time: 1 hour per check (covers one district or neighborhood).

  Success lets you follow the target's movements and determine their current general location (within 1 district). Higher results (beat DC by 5+) reveal specifics: which building they entered, who they met, or where they're headed next.

  Failure means you lose the target's trail. Failure by 5+ alerts the target that they're being followed (if they're aware enough to notice — contested Tracking vs. Perception).

  *This is surveillance, not stealth — you're reading the environment to follow someone, not hiding from them. Combining Urban Tracking with Stealth checks keeps you undetected while following.*

- **Counter-Track** — Hide your own trail to prevent being tracked, or detect and avoid tracking attempts against your group. When you know or suspect you're being tracked:

  **Active counter-tracking:** Spend 1 hour per mile traveled. Make a Tracking check — the result becomes the DC that any tracker must beat to follow your trail. This replaces normal trail DCs for the distance covered.

  **Detect pursuit:** When you suspect you're being followed, make a Tracking check contested by the pursuer's Stealth (urban) or Survival (wilderness). Success means you know you're being followed — direction, approximate distance (close/medium/far), and number of pursuers.

  *Example: The party is fleeing through the Crucible and suspects Iron Wolf trackers are following. The party's tracker spends an hour counter-tracking, rolling a 21. Any Iron Wolf tracker must beat DC 21 to follow the party's trail through that section.*

**What Tracking Cannot Do:**
- **Detect invisible or ethereal creatures** — Tracking follows physical signs. Creatures that leave no physical trace (incorporeal, flying, teleporting) cannot be tracked by this skill. Use Perception or magical senses.
- **Track through dimensional travel** — If a target uses Phase Step, teleportation, or similar magic, the trail ends at the departure point. You can find where they left, not where they went.
- **Replace Perception for detecting ambushes** — Tracking tells you someone WAS here. Perception tells you someone IS here. Tracking a trail into an ambush site does not grant advantage on the Perception check to avoid the ambush.
- **Guarantee finding a specific creature** — Tracking follows existing trails. If the quarry hasn't passed through an area, no check will find a trail that doesn't exist.
- **Navigate** — Tracking follows trails. Navigation (Survival) finds routes. You can track someone who knew the way, but you can't use Tracking to find a destination you've never been to.

**Build Comparison — Infiltrator / Operative:**
The Infiltrator's **Assess Target** (L1) provides tactical intelligence about a specific creature — weaknesses, resistances, HP range, combat strategy — in 1 action, no tracking required. The **Profiler's Deep Read** (L6) reveals psychological profile, combat patterns, and vulnerabilities through observation within 60 ft. The Operative's Assess Target provides similar instant reads. A character with Tracking can follow a fleeing enemy across the wasteland over hours or days. An Infiltrator knows everything about the enemy standing in front of them in 6 seconds. Tracking fills the gap between "the fight is over" and "we need to find them" — pursuit, investigation, and overland hunting that no build feature covers comprehensively.

---

## Interrogation (PRE or WIS)

**Prerequisite:** Insight or Intimidation (Proficient)

Extracting information from unwilling, resistant, or deceptive subjects through structured questioning. Where Insight reads surface emotions and Intimidation forces compliance through fear, Interrogation is a systematic process — building pressure, exploiting psychological vulnerabilities, reading micro-expressions, and methodically dismantling resistance. This is the difference between asking questions and getting answers.

**Skill Uses:**

- **Break Resistance** — Conduct a structured interrogation to extract specific information from a captive or reluctant subject. This is a **contested check**: your Interrogation vs. the subject's Will save (representing their mental resistance, training, and motivation to withhold information).

  | Subject Type | Typical Will Save |
  |-------------|------------------|
  | Untrained civilian | +1 to +3 |
  | Trained soldier / faction operative | +4 to +7 |
  | Hardened veteran / zealot | +8 to +11 |
  | Spy / trained resister | +12 to +15 |

  Time: **1 hour per attempt** (this is a process, not a single question). Success means the subject reveals one piece of targeted information — a name, location, plan, passphrase, or other specific fact you ask about. The subject may lie by omission (withholding context) but cannot outright fabricate on a successful check.

  Failure means the subject resists — they stonewalls, deflects, or feeds you useless information. You can try again after a short rest (8 hours), but the DC increases by +2 for each subsequent attempt on the same subject (they adapt to your techniques).

  Failure by 5+ means the subject feeds you **false information** that sounds credible. You don't know it's false unless you independently verify it.

  **Approach Modifiers:** HOW you interrogate matters:

  | Approach | Effect |
  |----------|--------|
  | Rapport-building (sympathetic, patient) | +2 to check; takes 2 hours instead of 1 |
  | Direct questioning (professional, neutral) | No modifier; standard 1 hour |
  | Intimidation (threats, pressure) | +2 to check vs. civilians; -2 vs. trained resisters (they expect it) |
  | Physical coercion | +4 to check; subject may say anything to stop pain (GM rolls secretly — on the subject's Will save success, the information is false regardless of your check result). Faction standing consequences if discovered. |

  *Physical coercion is available as a mechanical option because the wasteland is brutal, but it is explicitly an unreliable method — subjects under duress say what they think will stop the pain, not what is true. GMs should make false information from coercion feel credible to reinforce this lesson.*

  *Example: The party captures a Dynaxis courier. The Diplomat (PRE +4, Interrogation proficient, proficiency +3) uses rapport-building (+2): total modifier +9. The courier is a trained operative (Will +6). The Diplomat rolls 14 + 9 = 23 vs. the courier's 11 + 6 = 17. Success — the courier reveals the shipment destination.*

- **Detect Deception (Advanced)** — Read a subject during conversation to determine whether they're lying, withholding information, or emotionally compromised. This goes beyond base Insight's general "something feels off" — Interrogation provides specific, actionable reads. DC 14 (nervous amateur), DC 18 (practiced liar), DC 22 (trained operative or psychopath), DC 26 (supernatural deception or alien psychology). Time: Passive during conversation (no separate action required — you're always reading while you talk).

  Success tells you one specific thing:
  - **Lying:** The subject's last statement was false (not which part — just that deception occurred)
  - **Withholding:** The subject knows more than they're saying about the current topic
  - **Emotional State:** The subject's actual emotional state (fear, anger, guilt, confidence) regardless of their displayed demeanor
  - **Vulnerability:** One psychological pressure point (a topic that makes them uncomfortable, a loyalty that's wavering, a fear you could exploit)

  Beat the DC by 5+: You learn two of the above instead of one.

  *This is NOT mind reading. You're reading body language, vocal patterns, and micro-expressions. Subjects who are genuinely unaware of information they "should" know cannot be read as withholding — they simply don't know.*

- **Psychological Profile** — Spend time studying a subject (in person, through records, or via witness accounts) to build a behavioral profile. DC 16 (basic profile from direct observation), DC 20 (detailed profile from records and witness accounts), DC 24 (comprehensive profile of a guarded or secretive individual). Time: 1 hour (direct observation) or 1d4 hours (records/witnesses).

  Success produces a profile with the following information:
  - **Motivation:** What the subject values most (survival, loyalty, ideology, wealth, family)
  - **Vulnerability:** One exploitable weakness (a fear, a guilt, a secret, a dependency)
  - **Approach Recommendation:** The interrogation approach most likely to succeed with this subject (+2 bonus to your next Break Resistance check against them)

  Beat the DC by 5+: The profile also reveals the subject's **breaking point** — the specific piece of leverage that would cause them to cooperate fully. Delivering this leverage (finding the hostage, proving their faction betrayed them, etc.) grants advantage on your next Break Resistance check.

  *Example: Before interrogating the captured Iron Wolf scout, the party's Infiltrator spends an hour building a profile (DC 20). She rolls 22 — success. The scout's primary motivation is loyalty to his squad (not ideology). His vulnerability: guilt over an incident where his squad was ambushed because of his bad intel. Recommended approach: rapport-building, with reference to wanting to protect his squad in the future. +2 to the next Break Resistance check.*

- **Structured Interview** — Conduct a non-adversarial interview with a willing (or at least cooperative) subject to extract maximum useful information. Unlike Break Resistance (which overcomes resistance), this organizes cooperative testimony into actionable intelligence. DC 12 (cooperative witness with clear memories), DC 16 (cooperative but confused/traumatized witness), DC 20 (cooperative but deliberately vague subject — they'll talk but won't volunteer details). Time: 30 minutes.

  Success extracts **organized, verified** testimony. The GM provides a structured summary: who was involved, what happened, when and where, and one detail the subject didn't realize was significant (their subconscious noticed something their conscious mind dismissed). This last detail is the key advantage over just asking questions — the Interrogation skill represents expertise in eliciting information people don't know they have.

  *Example: A settlement survivor witnessed a Convergence raid. Without Interrogation, they'd say: "They came at night, took the supplies, someone got hurt." With a successful Structured Interview: "Six raiders, Convergence markings, arrived from the east road at approximately 0300. They targeted the medical supplies specifically — ignored the armory. One raider was limping, possibly from a prior injury. They loaded supplies into a Light vehicle — ground, wheeled, no visible weapons. They headed northeast toward the old water treatment plant."*

**What Interrogation Cannot Do:**
- **Read thoughts or detect magic** — Interrogation reads behavior, not minds. Telepathy and magical lie detection are separate capabilities (Channeler Oracle spec — Telepathy, Mind Shield).
- **Force compliance** — Breaking someone's resistance extracts information. It does not make them obey commands, change loyalties, or take actions. That's Intimidation (for threats) or Persuasion (for motivation).
- **Work on creatures without psychology** — Constructs, mindless undead, and some alien species cannot be interrogated. They have no psychological state to read.
- **Overcome magical silence or compulsion** — A subject under magical compulsion to silence cannot be broken by mundane interrogation. Remove the magic first.
- **Replace Insight in social encounters** — Detect Deception (Advanced) works during focused conversation, not casual social interaction. In a crowded room, use base Insight. In a one-on-one conversation where you're paying close attention, Interrogation's Detect Deception activates.
- **Guarantee truth** — Even a broken subject may have incomplete or inaccurate information. Interrogation extracts what the subject believes to be true — it cannot verify objective truth.

**Build Comparison — Diplomat / Operative:**
The Diplomat's **Read the Room** (L3) provides NPC disposition reading and social vulnerability assessment as a free action after 1 round of observation — near-instant, contested WIS vs. PRE, works in any social situation. The Diplomat's **Negotiator** specialization grants Silver-Tongued Devil (auto-convince 1/SR) and party-wide social bonuses. The Operative's **Assess Target** provides tactical intelligence in 1 action. A character with Interrogation can methodically extract secrets from a captured spy over an hour. A Diplomat reads the room in 6 seconds and adjusts the entire party's social approach. An Operative knows everything tactically relevant about a target at a glance. Interrogation excels in the space between — when you have time, a captive audience (literally), and need information that casual conversation can't provide.

---

## Advanced Skills and Build Features: The Hierarchy

Advanced skills exist in a clear hierarchy below build features. This table summarizes the relationship:

| Advanced Skill | Overlapping Build | Why the Build Is Superior |
|---|---|---|
| **Hacking** | Technician (Hacker) | 1-action hacking at lower DCs, advantage on checks, combat hacking, neural attacks, total system override |
| **Demolitions** | Gunslinger (Demolitionist) | Short-rest crafting, more devices (INT mod vs. 2), shaped charges, proximity traps, Grand Detonation (8d6) |
| **Forensics** | Operative (Recon/Spy) | Real-time field intelligence, automatic bonus info, advantage on Investigation, 1-hour code breaking |
| **Xenology** | Channeler (Shaman) | Active spiritual abilities, spirit companions, ethereal travel, spirit summoning |
| **Pharmacology** | Medic (Pharmacist) | Bonus-action delivery, no-side-effect formulas, stronger effects, Masterwork Serum capstone |
| **Robotics** | Technician (all specs) | Bonded drone companion, turret deployment, overclock, augmentation |
| **Tactics** | Diplomat (Commander) | Free-action commands, mechanical buffs to allies, extra actions, morale effects |
| **Scavenging** | No single build | Most universal — synergizes with multiple builds rather than competing |
| **Statecraft** | Diplomat (Negotiator) | Faster faction influence, mechanical social buffs, party-wide bonuses, Superior Negotiation capstone |
| **Tracking** | Infiltrator (Profiler) | Instant Assess Target (1 action, at-will), Deep Read expanded profile (60 ft), Behavioral Prediction (counter actions), Cold Read (instant profiling) |
| **Interrogation** | Diplomat (Negotiator) | Read the Room (L3, free-action disposition read), Silver-Tongued Devil (auto-convince 1/SR), party-wide social bonuses, Treaty capstone |

### Design Intent

The advanced skill system serves three purposes:

1. **Genre fulfillment** — Post-apocalyptic sci-fi demands that characters interact with hacking, explosives, alien tech, and salvage. Without advanced skills, only specific builds can engage with these genre staples.

2. **Horizontal character growth** — Advanced skills give non-specialist characters meaningful access to specialized domains without stepping on class identity. A Warrior with Demolitions can defuse a bomb. A Gunslinger Demolitionist can level a building.

3. **Party composition flexibility** — Not every party has a Technician. Advanced skills let other characters cover gaps — imperfectly, but adequately — ensuring the game doesn't require specific build compositions.

---

## Quick Reference

**Cost:** 3 CP (2 CP for Specialist chassis)
**Level Gate:** 3+
**Prerequisite:** Proficient in required base skill
**Max Per Character:** 2 (3 for Specialist chassis)
**Expertise Available:** No
**Check Formula:** d20 + Attribute Modifier + Proficiency Bonus
**Max Bonus Cap:** +18 (bounded accuracy)
