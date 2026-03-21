---
game_data: true
skills:
  - {name: Athletics, attribute: MIG, category: Physical}
  - {name: Acrobatics, attribute: AGI, category: Physical}
  - {name: Stealth, attribute: AGI, category: Physical}
  - {name: Sleight of Hand, attribute: AGI, category: Physical}
  - {name: Endurance, attribute: END, category: Physical}
  - {name: Science, attribute: INT, category: Mental}
  - {name: Technology, attribute: INT, category: Mental}
  - {name: Arcana, attribute: "INT/WIS", category: Mental}
  - {name: Investigation, attribute: INT, category: Mental}
  - {name: Medicine, attribute: "WIS/INT", category: Mental}
  - {name: Perception, attribute: WIS, category: Mental}
  - {name: Insight, attribute: WIS, category: Mental}
  - {name: Survival, attribute: WIS, category: Mental}
  - {name: Persuasion, attribute: PRE, category: Social}
  - {name: Deception, attribute: PRE, category: Social}
  - {name: Intimidation, attribute: "PRE/MIG", category: Social}
  - {name: Streetwise, attribute: PRE, category: Social}
  - {name: Piloting, attribute: "AGI/INT", category: Specialized}
  - {name: Navigation, attribute: "WIS/INT", category: Specialized}
  - {name: "Weapon Systems", attribute: "INT/WIS", category: Specialized}
  - {name: Engineering, attribute: INT, category: Specialized}
advanced_skills:
  - {name: Hacking, attribute: INT, prerequisite: "Technology (Proficient)", category: Advanced}
  - {name: Demolitions, attribute: INT, prerequisite: "Science (Proficient)", category: Advanced}
  - {name: Forensics, attribute: INT, prerequisite: "Investigation (Proficient)", category: Advanced}
  - {name: Xenology, attribute: "INT/WIS", prerequisite: "Arcana or Science (Proficient)", category: Advanced}
  - {name: Pharmacology, attribute: "WIS/INT", prerequisite: "Medicine (Proficient)", category: Advanced}
  - {name: Robotics, attribute: INT, prerequisite: "Technology (Proficient)", category: Advanced}
  - {name: Tactics, attribute: "INT/WIS", prerequisite: "Perception or Survival (Proficient)", category: Advanced}
  - {name: Scavenging, attribute: WIS, prerequisite: "Survival (Proficient)", category: Advanced}
  - {name: Statecraft, attribute: PRE, prerequisite: "Persuasion or Deception (Proficient)", category: Advanced}
  - {name: Tracking, attribute: WIS, prerequisite: "Survival (Proficient)", category: Advanced}
  - {name: Interrogation, attribute: "PRE/WIS", prerequisite: "Insight or Intimidation (Proficient)", category: Advanced}
---
# Skills
![Wasteland survivors demonstrating diverse skills — tracking, engineering, diplomacy, and field medicine](/images/illustrations/skills-in-action.png)

---

Skills represent training and expertise beyond raw attributes. Each skill has specific mechanical uses that make it valuable — proficient characters can do things untrained characters simply cannot.

**Total Skills:** 21 base skills covering post-apocalyptic needs, plus 11 advanced skills (see *Advanced Skills*)

**Skill Check:** `d20 + Attribute Modifier + Proficiency Bonus (if proficient)`

---

## Physical Skills (MIG/AGI/END)

### Athletics (MIG)

Raw physical power applied with training — climbing, jumping, swimming, breaking, and wrestling.

**Skill Uses:**

- **Climb** — Scale surfaces without climbing gear. DC 10 (rough wall, rubble), DC 15 (slick or sheer surface), DC 20 (overhang, crumbling facade). Failure by 5+ means you fall from the midpoint.
- **Jump** — Clear gaps or reach high ledges. DC 10 (5-foot gap), DC 15 (10-foot gap), DC 20 (15-foot gap or 8-foot vertical). Add 10 feet with a running start.
- **Swim** — Move through water. DC 10 (calm), DC 15 (rough current), DC 20 (rapids, undertow). Failure means no progress; failure by 5+ means you begin drowning.
- **Force Open** — Break down doors, bend bars, snap restraints. DC 12 (stuck door), DC 18 (reinforced door), DC 22 (vault door, prison bars). Takes 1 action in combat.
- **Grapple** (1 action) — Contested Athletics vs target's Athletics or Acrobatics. On success, target gains the Grappled condition. You must have a free hand.
- **Shove** (1 action) — Contested Athletics vs target's Athletics. Push target 5 feet in any direction, or knock them Prone.

**Proficiency Unlock:** You can attempt to grapple or shove creatures one size larger than you (normally limited to your size or smaller).

**Expertise Unlock:** When you succeed on a grapple, you can choose to also knock the target Prone. Your climbing speed equals half your walking speed.

### Acrobatics (AGI)

Balance, flexibility, tumbling, and fluid movement under pressure.

**Skill Uses:**

- **Balance** — Move across narrow or unstable surfaces. DC 10 (wide beam), DC 15 (narrow ledge, icy surface), DC 20 (tightrope, swaying wreckage). Failure means you stop moving; failure by 5+ means you fall.
- **Tumble Through** (1 action) — Move through a hostile creature's space. Contested Acrobatics vs target's Athletics or Acrobatics. Success lets you pass without provoking opportunity attacks.
- **Escape Grapple** (1 action) — Contested Acrobatics vs grappler's Athletics. On success, you break free of the Grappled condition.
- **Reduce Fall Damage** — When you fall, make an Acrobatics check. DC 15 reduces fall damage by 1d6; DC 20 reduces by 2d6. You land on your feet either way.
- **Contortion** — Squeeze through spaces one size smaller than you. DC 15 (tight gap), DC 20 (extremely tight). Failure means you're stuck and must spend an action to free yourself.

**Proficiency Unlock:** You can stand from Prone using only 5 feet of movement instead of half your speed.

**Expertise Unlock:** Tumbling through enemy spaces no longer requires an action — you can do it as part of normal movement. You automatically reduce fall damage by 1d6 (no check required).

### Stealth (AGI)

Moving unseen, hiding in cover, and tracking targets without being detected.

**Skill Uses:**

- **Hide** (1 action) — You must have cover or concealment. Roll Stealth vs observers' Passive Perception. On success, you are Hidden — attacks against you have disadvantage, and you have advantage on your next attack from hiding.
- **Sneak** — Move silently while Hidden. Roll Stealth at the start of movement. If you end your turn without cover, you are automatically revealed. Moving at half speed grants +5 to the check.
- **Ambush Setup** — When your group initiates combat from hiding, roll Stealth vs targets' Passive Perception. Targets who fail to detect you are Surprised on the first round (they lose their turn).
- **Shadow** — Follow a creature without being noticed. Contested Stealth vs target's Perception. Must stay at least 30 feet behind in open terrain or 15 feet in cover-rich areas. Each hour of shadowing requires a new check.
- **Create Distraction** — Throw a rock, make a noise, or otherwise draw attention. DC 12 to redirect one creature's focus for 1 round. Not a substitute for Deception — this is purely environmental misdirection.

**Proficiency Unlock:** You can attempt to Hide even with only light concealment (dim light, light fog, sparse cover). Untrained characters need substantial cover.

**Expertise Unlock:** While Hidden, your first attack that hits deals an additional 1d6 damage (this stacks with Sneak Attack if you have it). You can attempt to Hide again immediately after attacking if you have cover.

### Sleight of Hand (AGI)

Deft fingers for picking pockets, planting evidence, lockpicking, and disarming traps.

**Skill Uses:**

- **Pickpocket** — Contested Sleight of Hand vs target's Perception. On success, you lift one small item (palm-sized or smaller). Failure means the target notices the attempt. Cannot be attempted in combat unless the target is **Stunned**, **Grappled**, or otherwise unable to notice you (GM discretion).
- **Plant Item** — Reverse pickpocket — slip something into a target's belongings. Same contested check. Useful for planting evidence, tracking devices, or poison.
- **Pick Lock** — Open a mechanical lock. DC 10 (simple padlock), DC 15 (standard lock), DC 18 (quality lock), DC 22 (masterwork lock). Requires thieves' tools. Failure by 5+ jams the lock (DC increases by 2 for future attempts).
- **Disable Trap** — Disarm a mechanical trap. DC varies (typically 15-22). Requires thieves' tools. Failure by 5+ triggers the trap. You must first identify the trap (Perception or Investigation).
- **Conceal Object** — Hide a small item on your person. Contested Sleight of Hand vs observer's Perception. Success means the item isn't found during a pat-down or casual search. Detailed searches use Investigation instead.

**Proficiency Unlock:** You can attempt to pick locks and disable traps. Untrained characters cannot — they simply lack the technique.

**Expertise Unlock:** You can pick locks and disable traps as a bonus action instead of a full action. Your Disable Trap checks gain +2.

### Endurance (END)

Stamina, pain tolerance, and the body's ability to push through punishment.

**Skill Uses:**

- **Forced March** — Travel beyond the normal daily limit without rest. DC 10 for 1 extra hour, DC increases by 2 for each additional hour. Failure inflicts 1 level of Exhaustion.
- **Hold Breath** — Stay conscious without air. DC 12 for 2 minutes, DC 15 for 3 minutes, DC 18 for 4 minutes. After failing, you begin suffocating (see Conditions).
- **Resist Toxin** — When exposed to non-magical poison, disease, or radiation beyond what a Fortitude save covers, make an Endurance check to reduce severity. DC varies by source. Success reduces the effect by one step (e.g., 2 levels of radiation poisoning instead of 3).
- **Stay Conscious** — When reduced to 0 HP, you can attempt to act for one more turn. DC 18. On success, you remain conscious with 1 HP until the end of your next turn, then fall unconscious. Usable once per long rest.
- **Withstand Environment** — Endure extreme heat, cold, or altitude. DC 12 per hour in harsh conditions, DC 16 in extreme. Failure inflicts Exhaustion. Proper gear grants advantage.
- **Resist Pain** — When subjected to torture, interrogation through pain, or effects that cause ongoing agony, make an Endurance check to avoid revealing information or breaking concentration. DC set by the GM (typically 15-20).

**Proficiency Unlock:** You can attempt the Stay Conscious use. Untrained characters simply fall unconscious at 0 HP.

**Expertise Unlock:** You gain advantage on Endurance checks against Exhaustion. Your forced march DC starts at 8 instead of 10.

---

## Mental Skills (INT/WIS)

### Science (INT)

Theoretical and applied science — chemistry, biology, physics, analysis, and synthesis. Understanding how the natural world works and using that knowledge to create, identify, and manipulate substances.

**Skill Uses:**

- **Analyze Substance** — Identify an unknown chemical, biological, or radioactive sample. DC 10 (common compound), DC 15 (rare chemical), DC 20 (engineered pathogen, exotic material). Requires a science kit or lab access. Determines composition, toxicity, and potential uses.
- **Synthesize Compound** — Create medicines, poisons, explosives, or chemical agents from raw ingredients. DC 12 (simple medicine or smoke bomb), DC 16 (antitoxin, flashbang), DC 20 (advanced pharmaceutical, plastic explosive), DC 24 (nerve agent, anti-radiation serum). Time: 1 hour. Requires lab equipment.
- **Craft Ammunition** — Produce ammo from raw materials. DC 10 (standard), DC 15 (armor-piercing), DC 18 (specialty). Time: 30 minutes per magazine. Requires crafting materials.
- **Identify Material** — Determine the properties of an unknown material (alloy, organic compound, radioactive isotope). DC 10 (common materials), DC 15 (rare or processed), DC 20 (exotic, alien, or engineered). No tools required for basic identification; lab access needed for detailed analysis.
- **Assess Radiation** — Determine the type and severity of radiation in an area. DC 10 (obvious contamination), DC 15 (moderate levels), DC 20 (trace or unusual radiation types). Reveals safe exposure time, protective measures needed, and contamination source direction.

**Proficiency Unlock:** You can attempt to Synthesize Compounds and Craft Ammunition. Untrained characters can only attempt Analyze Substance on common compounds (DC 10-12).

**Expertise Unlock:** Compounds you synthesize are more potent — healing items restore an additional 1d4 HP, poisons deal an additional 1d4 damage. Craft Ammunition yields double the standard quantity.

**Advanced Skill Gateway:** Science (Proficient) is the prerequisite for the **Demolitions** advanced skill and one of the prerequisites for **Xenology**. See *Advanced Skills*.

### Technology (INT)

Operating, repairing, modifying, and hacking machines, electronics, and pre-war systems. The hands-on engineering skill for a world built on salvaged infrastructure.

**Skill Uses:**

- **Repair** — Fix broken equipment. DC depends on item tier: DC 10 (Tier 1, Scavenged), DC 14 (Tier 2, Functional), DC 18 (Tier 3, Military), DC 22+ (Tier 4, Pre-War Advanced). Time: 1 hour per tier. Requires appropriate tools and materials.
- **Jury-Rig** — Emergency field repair that gets broken gear working temporarily. DC = item's Tier DC + 2. Time: 10 minutes. Equipment functions at reduced capacity (GM determines limitation). Lasts 24 hours or until the item takes damage, whichever comes first.
- **Hack Terminal** — Access a locked computer system. DC 12 (civilian terminal), DC 16 (corporate/military), DC 20 (encrypted), DC 24 (AI-protected). Success grants access to stored data, door controls, or security systems. Failure by 5+ triggers a lockout or alarm.
- **Disable Device** — Shut down or sabotage a technological device. DC varies by complexity (typically 14-20). Takes 1 minute. Failure by 5+ triggers the device or alerts its owner.
- **Identify Tech** — Determine the function and condition of an unknown device. DC 10 (common post-war tech), DC 15 (rare pre-war tech), DC 20 (alien or experimental). No tools required.
- **Operate Complex System** — Use unfamiliar but human-built complex equipment (industrial machinery, pre-war medical scanners, water purification systems). DC 12 (simple operation), DC 16 (non-standard use), DC 20 (damaged or partially functional system). Time varies by system.

**Proficiency Unlock:** You can attempt to Hack Terminals and use the full crafting system (see Equipment chapter). Untrained characters can only attempt basic Repairs (Tier 1) and Identify Tech on common items.

**Expertise Unlock:** Jury-Rigged items last 72 hours instead of 24. When you Hack a Terminal, failure doesn't trigger lockouts — you simply fail and can retry.

**Advanced Skill Gateway:** Technology (Proficient) is the prerequisite for the **Hacking** and **Robotics** advanced skills. See *Advanced Skills*.

### Arcana (INT or WIS)

Understanding magical theory, identifying spells and enchantments, and conducting arcane research. Use INT for academic knowledge or WIS for intuitive understanding.

**Skill Uses:**

- **Identify Spell** — Recognize a spell being cast or an ongoing magical effect. DC 10 + spell level. Using a reaction to identify a spell as it's cast allows you to call out what it is, potentially letting allies prepare countermeasures.
- **Detect Magic** — Sense whether an object, location, or creature is magical. DC 12 (strong aura), DC 16 (moderate), DC 20 (faint or deliberately concealed). Requires 1 minute of focused concentration. Not as precise as the Sense Magic cantrip, but available to non-casters.
- **Spell Research** — Create new spells or modify existing ones. DC = 15 + spell level. Time: 1 week per spell level. Requires access to arcane texts or a mentor. See the Magic chapter for the full spell creation system.
- **Ritual Casting Check** — When casting a ritual spell, you must succeed on a skill check at the end of the casting. DC = 10 + (spell level x 2). Failure wastes the casting time and material components but does not trigger burnout.
- **Read Magical Text** — Decipher arcane writing, magical scrolls, or enchanted inscriptions. DC 12 (standard arcane text), DC 16 (ancient or coded), DC 20 (deliberately obfuscated or trapped). Failure on a trapped text triggers the trap.
- **Identify Magical Creature** — Recall information about a magical beast, aberration, or extraplanar entity. DC 10 (common), DC 15 (rare), DC 20 (legendary or unique). Success reveals resistances, vulnerabilities, and signature abilities.

**Proficiency Unlock:** You can attempt to Detect Magic without a spell. You can attempt Spell Research (requires both proficiency and a caster class for practical spell creation).

**Expertise Unlock:** You can identify spells as a free action instead of a reaction. When you succeed on Read Magical Text for a scroll, you can preserve it — the scroll is not consumed (works once per scroll).

**Advanced Skill Gateway:** Arcana (Proficient) is one of the prerequisites for the **Xenology** advanced skill. See *Advanced Skills*.

### Investigation (INT)

Active searching, logical reasoning, and connecting disparate clues. Where Perception notices things passively, Investigation finds them on purpose.

**Skill Uses:**

- **Search Area** — Thoroughly examine a room, vehicle, or scene. DC 10 (poorly hidden items), DC 15 (hidden compartment, concealed clue), DC 20 (expertly hidden or magically concealed). Takes 10 minutes for a room-sized area. Unlike Perception (which notices things), Investigation finds things through logical process.
- **Deduce** — Draw conclusions from available evidence. Present the GM with your reasoning and roll Investigation. DC varies by complexity. On success, the GM confirms or refines your deduction. On failure, the GM provides no additional insight (but doesn't mislead you).
- **Detect Forgery** — Examine a document, ID, or artifact for signs of tampering. Contested Investigation vs the forger's Sleight of Hand or Deception roll. You must specifically choose to examine the item — this doesn't happen passively.
- **Case a Location** — Study a building, camp, or route for security weaknesses. DC 12 (basic settlement), DC 16 (guarded compound), DC 20 (military installation). Time: 1 hour of observation minimum. Success reveals guard patterns, entry points, and alarm systems.
- **Reconstruct Events** — Examine a scene to determine what happened. DC 12 (recent, messy), DC 16 (cleaned up or days old), DC 20 (weeks old or deliberately staged). Provides a rough timeline and sequence of events.
- **Expose Deception** — When you suspect someone is lying or a scene is staged, use Investigation (not Insight) to examine physical evidence of the deception. Contested Investigation vs the deceiver's Deception.

**Proficiency Unlock:** You can Case a Location, gaining tactical advantage. Untrained characters can search rooms but cannot deduce patterns or case targets.

**Expertise Unlock:** Your Search Area time is reduced to 5 minutes. When you Reconstruct Events, you can identify specific individuals involved (tracks, fingerprints, DNA — appropriate to the setting's tech level).

**Advanced Skill Gateway:** Investigation (Proficient) is the prerequisite for the **Forensics** advanced skill. See *Advanced Skills*.

### Medicine (WIS or INT)

Healing wounds, treating disease, performing surgery, and understanding biology as it applies to keeping people alive.

**Skill Uses:**

- **Stabilize** (1 action) — Stop a dying creature from making death saves. DC 10. Requires a Medicine kit or improvised supplies. The creature is stable at 0 HP but unconscious.
- **Emergency Field Medicine** (2 actions) — Patch up a wounded creature in combat. DC 15 (safe conditions), DC 20 (under fire). Requires a Medicine kit. Success restores 2d6 + WIS modifier HP. Usable once per creature per short rest.
- **Field Surgery** (10 minutes) — Perform out-of-combat healing. DC 15. Requires a Medicine kit and stable environment. Success restores 4d8 + WIS modifier HP. Usable once per creature per 24 hours.
- **Stop Bleeding** (1 action) — Remove the Bleeding condition from a creature. DC 12. Requires a Medicine kit or bandages.
- **Treat Disease/Poison** — Administer treatment for illness or toxins. DC varies by severity (typically 12-18). Success grants the patient advantage on their next save against the affliction. Requires appropriate medical supplies.
- **Treat Lingering Injury** — Heal lasting wounds during downtime. DC 15-25 depending on injury severity. Time: 1-8 weeks of ongoing treatment. See the Exploration chapter for the injury table.
- **Diagnose** — Identify what ails a creature. DC 10 (obvious wound or common illness), DC 15 (disease, internal injury), DC 20 (poison, magical affliction, radiation sickness). No tools required. Determines the appropriate treatment.
- **Accelerate Recovery** — Assist with exhaustion recovery. DC 20. On success, the patient removes 1 additional level of Exhaustion at their next long rest. Usable once per patient per day.

**Proficiency Unlock:** You can perform Emergency Field Medicine and Field Surgery. Untrained characters can only attempt Stabilize (at disadvantage).

**Expertise Unlock:** Your Emergency Field Medicine restores an additional 1d6 HP. Your Field Surgery restores an additional 2d8 HP. You can perform Field Surgery twice per creature per 24 hours instead of once.

**Advanced Skill Gateway:** Medicine (Proficient) is the prerequisite for the **Pharmacology** advanced skill. See *Advanced Skills*.

### Perception (WIS)

Noticing things — hearing footsteps, spotting movement, smelling smoke, feeling vibrations. Perception is reactive and instinctive.

**Skill Uses:**

- **Spot** — Notice something out of place. DC varies by concealment. Used actively (1 action in combat) or passively (GM rolls against your Passive Perception).
- **Listen** — Hear sounds through barriers or at distance. DC 10 (conversation through a door), DC 15 (whisper through a wall), DC 20 (footsteps two rooms away). Environmental noise increases DC by 2-5.
- **Detect Ambush** — Your Passive Perception (10 + WIS modifier + proficiency if proficient) is compared against ambushers' Stealth checks. If your Passive Perception beats their Stealth, you are not Surprised.
- **Sense Motive** (quick) — A gut feeling that something is off. Less precise than Insight but faster — the GM may call for a Perception check when something feels wrong, before you've had time to analyze it. Reveals that something is wrong, but not what.
- **Track by Senses** — Follow a creature using non-visual cues (sound, smell, disturbed air). DC 15 (noisy creature), DC 20 (quiet creature in cluttered environment). Limited to 60-foot range. For visual tracking over distance, use Survival.
- **Survey Area** — Quickly scan a large area (up to 300 feet). DC 10 (count people), DC 15 (spot weapons or unusual items), DC 18 (identify specific individuals). Takes 1 round. Used for scouting, not detailed searching (that's Investigation).

**Passive Perception:** 10 + WIS modifier + proficiency bonus (if proficient). Used when not actively searching — the GM secretly compares this against Stealth checks, hidden trap DCs, and ambush attempts.

**Proficiency Unlock:** Your Passive Perception is meaningfully higher, making you much harder to ambush or sneak past.

**Expertise Unlock:** You gain advantage on Perception checks to detect creatures using Stealth. Your Passive Perception applies to detecting hidden traps as well as hidden creatures.

**Advanced Skill Gateway:** Perception (Proficient) is one of the prerequisites for the **Tactics** advanced skill. See *Advanced Skills*.

### Insight (WIS)

Reading people — their emotions, intentions, trustworthiness, and hidden agendas. Where Perception spots physical things, Insight reads social ones.

**Skill Uses:**

- **Detect Lie** — Contested Insight vs target's Deception. On success, you know the target is being dishonest (but not necessarily what the truth is). On failure, you get no read either way.
- **Read Emotions** — Determine a creature's current emotional state. DC 10 (obvious distress), DC 15 (concealed anxiety or anger), DC 20 (poker-faced or alien mindset). Useful for negotiations — knowing someone is desperate changes your approach.
- **Sense Motive** — Determine what a creature wants from an interaction. DC 12 (transparent motives), DC 16 (hidden agenda), DC 20 (deliberate misdirection). More analytical than Perception's gut-feeling version.
- **Assess Trustworthiness** — After spending at least 10 minutes conversing with someone, determine how reliable they are. DC 12 (generally honest person), DC 16 (practiced deceiver), DC 20 (pathological liar or trained spy). On success, you gain a general sense of their character — not specific lies, but whether they're dealing in good faith.
- **Predict Behavior** — After observing a creature for at least 1 minute, anticipate their next action. DC 15 in social situations, DC 18 in combat. In combat, success grants advantage on your next attack or save against that creature (once per encounter per target).
- **Identify Enchantment** — Determine if a creature's behavior is being magically influenced (charm, domination, etc.). DC = 10 + spell level. On success, you realize the creature is not acting of their own free will.

**Proficiency Unlock:** You can attempt Predict Behavior in combat. You can Assess Trustworthiness meaningfully — untrained characters only get vague impressions.

**Expertise Unlock:** When you successfully Detect a Lie, you also gain a clue about the truth the target is concealing (GM provides a hint). You can Predict Behavior as a bonus action instead of an action in combat.

### Survival (WIS)

Living off the land, tracking, weather reading, and all the skills that keep you alive between settlements. For route-finding and vehicle navigation, see the Navigation skill under Specialized Skills.

**Skill Uses:**

- **Track** — Follow a creature's trail. DC 10 (soft ground, rain), DC 15 (hard ground, moderate weather), DC 20 (stone, old trail, deliberate concealment). Each hour of tracking requires a new check. Rain, wind, or passage of time increase DC by 2-5. Reveals direction, speed, number of creatures, and approximate time since passage.
- **Forage** — Find food, water, and useful plants. DC 12 (temperate), DC 16 (wasteland), DC 20 (desolate/urban ruin). Success provides 1d4 days of rations for one person, or identifies medicinal herbs. Takes 4 hours of searching.
- **Build Shelter** — Construct temporary protection from the elements. DC 10 (basic lean-to), DC 15 (weather-resistant shelter for 4), DC 18 (concealed shelter). A proper shelter eliminates Exhaustion from exposure and provides a defensible rest location.
- **Predict Weather** — Anticipate weather patterns 24 hours in advance. DC 10 (obvious signs), DC 15 (subtle changes), DC 18 (unusual weather or storms). Success gives the party time to prepare, seek shelter, or adjust travel plans.
- **Set Snare** — Create a trap to catch small game or alert you to intruders. DC 12 (game snare), DC 15 (alarm tripwire), DC 18 (pit trap or deadfall). Takes 30 minutes. Snares remain effective for 24 hours.
- **Identify Creature** — Recognize a creature from tracks, scat, territorial markings, or remains. DC 10 (common wasteland creatures), DC 15 (rare or mutated), DC 20 (unique or extraplanar). Reveals the creature's type, habits, and approximate danger level.

**Proficiency Unlock:** You can Set Snares and Build Shelters effectively. You can track deliberately concealed trails. Untrained characters can only forage in familiar terrain.

**Expertise Unlock:** Foraging yields 2d4 days of rations instead of 1d4. Your shelters provide advantage on rest-related saving throws. When tracking, you also determine the target's condition (wounded, exhausted, carrying heavy load).

**Advanced Skill Gateway:** Survival (Proficient) is the prerequisite for the **Scavenging** advanced skill and one of the prerequisites for **Tactics**. See *Advanced Skills*.

---

## Social Skills (PRE/WIS)

### Persuasion (PRE)

Honest influence — diplomacy, negotiation, motivation, and appeal to reason or emotion. Unlike Deception, Persuasion relies on genuine arguments.

**Skill Uses:**

- **Negotiate** — Reach a mutually beneficial agreement. DC 10 (willing participant), DC 15 (reluctant), DC 18 (hostile but rational), DC 22 (entrenched opposition). Negotiation requires something to offer — you can't persuade with nothing. The GM adjusts DC based on the quality of your offer.
- **Request Aid** — Ask an NPC for help, information, or resources. DC varies by the NPC's disposition and the size of the request. Friendly: DC 10 (small favor), DC 15 (significant help). Indifferent: DC 15 (small), DC 20 (significant). Unfriendly: DC 20 (small), DC 25+ (significant). Persuasion cannot make enemies into friends — it just gets what you need in the moment.
- **Calm Hostility** — De-escalate a tense situation before combat starts. DC 15 (angry civilian), DC 18 (armed standoff), DC 22 (bloodthirsty raider). Only works if the other side has something to lose. Success delays combat for at least 1 minute of dialogue.
- **Rally** — Inspire a group to action. DC 12 (friendly crowd), DC 16 (uncertain crowd), DC 20 (demoralized or fearful group). Success shifts group attitude one step in your favor. In combat, the Leadership & Social tree has specific rally abilities — this is the general-use version for narrative moments.
- **Gather Information** — Spend time in a settlement asking questions. DC varies by how sensitive the information is. DC 10 (public knowledge), DC 15 (rumors), DC 20 (guarded secrets). Time: 1d4 hours. Requires a settlement or gathering.
- **Interrogate** (cooperative) — Extract information from a willing or neutral prisoner through rapport-building. Contested Persuasion vs target's Insight. Less reliable than Intimidation but doesn't create enemies.

**Proficiency Unlock:** You can attempt to Calm Hostility and Rally groups. Untrained characters can negotiate and request aid but lack the rhetorical skill for crowd work or crisis de-escalation.

**Expertise Unlock:** When you Gather Information, you learn an additional piece of related information beyond what you asked about. Your Rally attempts affect creatures within 60 feet instead of 30.

### Deception (PRE)

Lying, disguise, misdirection, and all forms of dishonest communication. Deception creates false realities.

**Skill Uses:**

- **Lie** — Tell a convincing falsehood. Contested Deception vs listener's Insight. Simple lies ("I've never been here before") are easier than complex ones ("I'm an authorized inspector from the Northern Coalition"). The GM may apply advantage or disadvantage based on plausibility and evidence.
- **Disguise** — Alter your appearance to look like someone else or a generic type. DC 12 (different civilian), DC 16 (specific individual you've studied), DC 20 (different species, gender, or dramatically different build). Requires disguise supplies or scavenged materials. The disguise holds until someone actively scrutinizes you (contested Deception vs their Perception or Investigation).
- **Feint** (1 action in combat) — Mislead an opponent about your next attack. Contested Deception vs target's Insight. On success, your next attack against that target this turn has advantage.
- **Create Diversion** — Fabricate a distraction through social means (fake emergency, bogus authority, manufactured crisis). DC varies by situation. Success redirects attention for 1-3 rounds or enough time to act unnoticed.
- **Forge Document** — Produce a convincing fake document. DC 12 (simple note), DC 16 (official document), DC 20 (faction seal, identity papers). The forgery is later detected by Investigation checks against your original Deception roll.
- **Plant False Information** — Seed a lie within a community or faction. DC 15 (plausible rumor), DC 20 (outlandish claim). Time: 1d4 days of sustained effort. The lie spreads naturally — the GM determines how far and fast.

**Proficiency Unlock:** You can maintain a Disguise for extended periods (hours instead of minutes). You can Feint in combat. Untrained characters can lie but cannot maintain complex deceptions under scrutiny.

**Expertise Unlock:** Your Disguises are so convincing that casual Perception checks cannot penetrate them — only active Investigation can. When you Feint, success grants advantage on your next two attacks against that target instead of one.

### Intimidation (PRE or MIG)

Coercing others through threats, physical presence, or sheer force of personality. Use PRE for verbal threats or MIG for physical ones.

**Skill Uses:**

- **Threaten** — Force compliance through fear. Contested Intimidation vs target's Insight. On success, the target does what you demand as long as the threat feels credible. On failure, the target either calls your bluff or becomes hostile. Threatening someone who has nothing to lose always fails.
- **Demoralize** (1 action in combat) — Shake an enemy's nerve. The target makes a Will save (DC = 8 + your PRE or MIG modifier + proficiency bonus). On failure, the target is Frightened of you until the end of your next turn. A creature that succeeds on this save is immune to your Demoralize for 24 hours.
- **Interrogate** (coercive) — Extract information through pain or fear. Contested Intimidation vs target's Endurance or Insight. Faster than Persuasion but the information may be unreliable (the target may say anything to make it stop). The GM secretly determines accuracy.
- **Command Obedience** — Force a group of weaker creatures to follow orders. DC 12 (clearly outmatched), DC 16 (roughly equal), DC 20 (outnumbering you). Success only works while you maintain the threat — the moment you show weakness or leave, compliance ends.
- **Display Dominance** — Make a show of strength to establish hierarchy. Destroying an object, defeating a champion, or performing a feat of power. DC set by the GM. Success shifts a group's attitude toward fearful respect.

**Proficiency Unlock:** You can Demoralize in combat. Untrained characters can make threats but cannot reliably shake trained combatants.

**Expertise Unlock:** When you successfully Demoralize a target, the Frightened condition lasts until the end of your next turn and they take a -2 penalty to attack rolls against you during that time. Your Threaten attempts work on creatures one size larger than you without disadvantage.

### Streetwise (PRE)

Reading the social landscape of settlements, navigating black markets, identifying power structures, and knowing how the wasteland's underworld works. The survival skill for civilization.

**Skill Uses:**

- **Read the Room** — Quickly assess a settlement, bar, or gathering for its power dynamics. DC 10 (obvious hierarchy — who's in charge, who's armed), DC 15 (hidden tensions, alliances, who to avoid), DC 18 (secret power behind the throne, undercover operatives). Takes 10 minutes of observation or casual conversation.
- **Find Black Market** — Locate illegal goods, restricted tech, or off-the-books services. DC 12 (common black market in a large settlement), DC 16 (specific item or service), DC 20 (heavily restricted goods — military hardware, pre-war tech, alien artifacts). Time: 1d4 hours. Failure by 5+ means you attracted the wrong kind of attention.
- **Gather Information** — Work the crowd in a settlement for rumors, leads, and local knowledge. DC 10 (public knowledge), DC 15 (rumors and gossip), DC 18 (guarded secrets), DC 22 (information someone is actively suppressing). Time: 1d4 hours. Unlike Persuasion's direct questioning, Streetwise works through casual conversation, overheard talk, and reading between the lines.
- **Identify Criminal** — Recognize a con artist, pickpocket, fence, or enforcer by their behavior. Contested Streetwise vs target's Deception or Stealth. Success reveals what they're up to — casing a mark, running a scam, carrying concealed contraband.
- **Navigate Underworld** — Deal with criminal elements without getting burned. DC 12 (purchase from a fence), DC 16 (hire a smuggler or forger), DC 20 (arrange a meeting with a crime boss). Failure means the deal goes sideways — bad goods, inflated prices, setup, or betrayal. Failure by 5+ is actively dangerous.
- **Street Price** — Accurately value goods, services, or information in the current market. DC 10 (common goods), DC 15 (rare items), DC 18 (unique or illicit items). Success prevents you from being cheated. The GM reveals the fair price — you decide whether to haggle or walk.

**Proficiency Unlock:** You can Find Black Markets and Navigate the Underworld. Untrained characters can Gather Information and Read the Room in obvious situations, but lack the connections and instincts for criminal dealings.

**Expertise Unlock:** When you Find a Black Market, you also identify the most reliable dealer (advantage on the first transaction). Your Gather Information checks take half the normal time. When you Navigate the Underworld, failure doesn't turn dangerous — you simply don't get what you wanted.

---

## Specialized Skills (AGI/INT/WIS)

The four specialized skills cover vehicle operations, mounted combat, and technical systems. In vehicle combat, each skill maps to a **crew role** — see *Vehicles & Operations* for full vehicle combat rules.

### Piloting (AGI or INT)

Controlling vehicles, mounts, and conveyances — from wasteland motorcycles to pre-war gunships. Use AGI for reactive maneuvers or INT for calculated control. In vehicle combat, this is the **Pilot role**.

**Skill Uses:**

- **Drive/Ride** — Operate a vehicle or ride a mount in normal conditions. No check needed for routine travel. DC 12 (poor road, nervous mount), DC 15 (off-road, damaged vehicle), DC 18 (high-speed chase, hostile terrain). DC 22 (extreme conditions — sandstorm, ice, zero visibility).
- **Combat Maneuver** (1 action) — Perform aggressive driving or riding in vehicle combat. DC 15 (ram another vehicle), DC 18 (bootleg turn, controlled spin), DC 20 (thread through tight gap at speed), DC 24 (thread between two vehicles at full speed). Failure results in losing control — the vehicle moves 1d4 x 10 feet in a random direction and all crew make DC 14 Reflex saves or take 1d6 damage.
- **Evasive Action** (1 action) — Take defensive maneuvers while piloting. DC 15. On success, your vehicle gains +2 to DV against all attacks until the start of your next turn. The vehicle must have moved this round.
- **Emergency Stop/Start** (reaction) — React to sudden obstacles, pursuit, or imminent collision. DC 12 (controlled stop), DC 16 (emergency stop without damage), DC 20 (instant start from dead engine). Failure may result in collision damage (2d6 per size class of obstacle).
- **Mount Combat** — Fight effectively from a mount. DC 12 to maintain control while attacking. Failure means you must choose: attack or control the mount (not both). Trained war mounts reduce this DC by 5.
- **Docking/Landing** — Bring a vehicle to a precise stop at a dock, landing pad, or narrow space. DC 10 (standard dock), DC 15 (tight berth or damaged landing zone), DC 20 (emergency landing on unstable terrain). Failure by 5+ causes collision damage to the vehicle.

**Proficiency Unlock:** You can operate military vehicles and perform Combat Maneuvers. Untrained characters can drive/ride in normal conditions but cannot perform any maneuver requiring a DC 15+ check.

**Expertise Unlock:** Your Evasive Action grants +3 to DV instead of +2. You can perform Combat Maneuvers and attack in the same turn without penalty. You gain advantage on Emergency Stop/Start checks.

### Navigation (WIS or INT)

Route planning, terrain reading, hazard detection, and guidance — whether on foot through the wasteland, plotting a vehicle course through contested territory, or charting coordinates for long-range travel. Use WIS for instinctive wayfinding or INT for calculated route optimization. In vehicle combat, this is the **Navigator role**.

**Skill Uses:**

- **Plot Route** — Plan a path through unfamiliar or dangerous terrain. DC 12 (known region, minor obstacles), DC 16 (uncharted territory or multiple hazards), DC 20 (hostile territory with active patrols or environmental dangers), DC 24 (shifting terrain — sandstorms, radiation fronts, anomaly fields). Success keeps the party on course and identifies the safest/fastest path. Failure adds 1d4 hours to travel time; failure by 5+ leads into a hazard.
- **Detect Hazard** (1 action in vehicle combat) — Scan ahead for terrain dangers, obstacles, or environmental threats. DC 12 (obvious hazard — cliff, debris field), DC 16 (concealed hazard — buried mines, thin ice, radiation pocket), DC 20 (camouflaged or actively hidden hazard). In vehicle combat, success gives the Pilot advantage on their next maneuver to avoid the hazard.
- **Optimal Approach** — Identify the best angle of approach to a location, considering cover, terrain advantage, and detection risk. DC 14 (open terrain), DC 18 (urban or complex terrain), DC 22 (fortified position). Time: 10 minutes of observation or map study. Success grants the party +2 to Stealth checks on approach or reveals the target's blind spots.
- **Track by Landmarks** — Navigate without instruments using terrain features, stars, or environmental cues. DC 10 (clear day, distinctive landmarks), DC 15 (overcast, featureless terrain), DC 20 (night, underground, or alien environment). This is the non-wilderness complement to Survival's Track — Navigation finds the way, Survival reads the trail.
- **Coordinate Movement** (1 action in vehicle combat) — Direct the Pilot through complex maneuvers by calling out optimal timing and positioning. DC 14. On success, the Pilot gains +2 to their next Piloting check this round. This requires verbal communication between Navigator and Pilot.
- **Signal Interception** — Monitor communication channels and radio frequencies to detect nearby vehicles, patrols, or distress signals. DC 12 (open broadcasts), DC 16 (encrypted or low-power signals), DC 20 (frequency-hopping military comms). Time: 10 minutes to sweep. Range varies by equipment (typically 5-50 miles).

**Proficiency Unlock:** You can Plot Routes through hazardous terrain and Detect Hazards in vehicle combat. Untrained characters can navigate in familiar terrain but cannot plan routes through unknown or dangerous areas.

**Expertise Unlock:** Your Plot Route calculations reduce travel time by 25% on success. Your Detect Hazard checks in vehicle combat can also reveal enemy vehicle positions (approximate distance and direction). You can Coordinate Movement as a bonus action instead of an action.

### Weapon Systems (INT or WIS)

Operating vehicle-mounted weapons, turrets, targeting computers, and fire control systems. Use INT for calculated targeting or WIS for instinctive tracking. In vehicle combat, this is the **Gunner role**. This skill does NOT replace personal weapon proficiency — it covers weapons too large, complex, or integrated to fire with normal combat skills.

**Skill Uses:**

- **Fire Mounted Weapon** (1 action) — Attack with a vehicle-mounted weapon system. d20 + attribute modifier + proficiency bonus (if proficient in Weapon Systems). Range and damage depend on the weapon module installed. Vehicle weapons use the Weapon Systems skill, not personal weapon proficiency.
- **Aimed Shot** (2 actions) — Take careful aim with a mounted weapon. Make the attack with advantage. Only available if the vehicle did not Maneuver this round (the platform must be stable).
- **Suppressive Fire** (1 action) — Lay down area denial fire. Choose a 15-ft area within range. Creatures entering or starting their turn there must make a Reflex save (DC = 8 + your attribute modifier + proficiency bonus) or take half weapon damage. Lasts until your next turn. Uses 3x normal ammunition.
- **Target Lock** (1 action) — Designate a target using targeting systems. Your next Fire Mounted Weapon against that target gains +2 to hit. The lock persists until the target breaks line of sight or you lock a different target.
- **Point Defense** (reaction) — Attempt to shoot down an incoming projectile, missile, or thrown explosive. DC 16 (slow projectile or missile), DC 20 (fast projectile or multiple missiles), DC 24 (energy weapon or extremely fast object). Requires a point defense weapon system. Success negates the attack. Failure means the attack proceeds normally.
- **Turret Override** — Take manual control of an automated or AI-controlled turret. DC 12 (friendly turret), DC 16 (neutral automated turret), DC 20 (hostile turret with security). Requires physical access or Hacking to gain remote access first.

**Proficiency Unlock:** You can Fire Mounted Weapons with your proficiency bonus and attempt Point Defense. Untrained characters can Fire Mounted Weapons (without proficiency bonus) but cannot perform Aimed Shots, Suppressive Fire, or Point Defense.

**Expertise Unlock:** Your Target Lock grants +3 to hit instead of +2 and persists even if the target briefly breaks line of sight (1 round grace period). Your Suppressive Fire area increases to 20 feet.

### Engineering (INT)

Maintaining, repairing, and modifying vehicles, drones, and complex mechanical systems under pressure. Where Technology covers general repair and device operation, Engineering covers real-time system management, power routing, and field modification of vehicles and large-scale machinery. In vehicle combat, this is the **Engineer role**.

**Skill Uses:**

- **Damage Control** (1 action) — Attempt to repair a damaged vehicle system mid-combat. DC 14 (restore a Stressed system to Operational), DC 18 (restore a Damaged system), DC 22 (restore a Disabled system). Uses repair supplies (1 unit per attempt). Success restores one system to operational status.
- **Reroute Power** (bonus action) — Shift power between vehicle systems to boost one at the cost of another. Choose one: +10 ft speed (from weapons power), +1 weapon damage die (from engine power), or +1 DV (from engine power). Only one reroute active at a time. Lasts until you change it or combat ends.
- **Emergency Repair** (3 actions) — Major field repair during a lull in combat or immediately after. DC 16. Restore 2d10 + INT modifier HP to the vehicle. Uses 2 repair supply units. Usable once per short rest per vehicle.
- **Overclock Engine** (1 action, 1/short rest) — Push a vehicle's engine beyond safe limits. Double the vehicle's speed for 1 round. After the round ends, make a DC 14 Engineering check — failure means the engine takes 1 level of system damage (Stressed).
- **Field Modification** — Install, remove, or swap a vehicle module outside of a workshop. DC 14 (utility module), DC 18 (weapon or armor module), DC 22 (engine or power plant). Time: 1 hour (half for characters with Engineering expertise). Failure wastes the time but doesn't damage the module.
- **Assess Vehicle** — Determine the condition, capabilities, and weaknesses of a vehicle (allied or enemy). DC 10 (common vehicle, no concealment), DC 15 (military vehicle or deliberately obscured), DC 20 (alien or experimental design). Reveals HP estimate, armor type, weapon systems, and any system damage.

**Proficiency Unlock:** You can perform Damage Control and Emergency Repair. You can attempt Field Modifications. Untrained characters can Assess Vehicles and Reroute Power but cannot perform repairs or modifications.

**Expertise Unlock:** Your Damage Control restores one additional system level (Damaged to Operational in one check instead of needing two). Your Emergency Repair restores an additional 1d10 HP. You can Overclock Engine twice per short rest.

---

## Skill Proficiency

Skills have two tiers of investment: **Proficient** and **Expert**. Proficiency bonus scales with character level (L1-4: +2, L5-8: +3, L9-12: +4, L13-16: +5, L17-20: +6), so characters naturally improve at their chosen skills as they gain experience.

### Proficiency Tiers

| Tier | Bonus | Description |
|------|-------|-------------|
| **Untrained** | +0 (attribute modifier only) | No formal training in this skill |
| **Proficient** | + Proficiency Bonus | Trained and competent |
| **Expert** | + 2× Proficiency Bonus | Elite-level mastery |

**Maximum Skill Bonus:** A character's total bonus to any single skill check (attribute modifier + proficiency/expertise + all other sources) cannot exceed **+18**, in keeping with Ashfall's bounded accuracy.

### Gaining Proficiency at Character Creation

At Level 1, a character gains proficiency in skills from three sources:

1. **Build Proficiencies** — Your chosen build grants 2 fixed skill proficiencies (e.g., Warriors gain Athletics and Intimidation). The Operative is the exception, gaining 2 fixed + 3 chosen (5 total).
2. **Background Proficiency** — Your background grants 1 fixed skill proficiency.
3. **Player Choice** — You choose **2 additional proficiencies** from any skill. These represent your character's personal history, hobbies, or self-taught abilities beyond their formal training.

**Species Bonus:** Humans gain 1 additional free proficiency at character creation (Versatile trait).

This gives most characters **5 proficiencies at Level 1** (2 class + 1 background + 2 choice), or 6 for Humans. Operatives start with **8** (5 class + 1 background + 2 choice), or 9 for Human Operatives.

### Gaining Proficiency Through Advancement

As characters grow, they naturally broaden their skillset:

**Free Proficiency Picks (no CP cost):**
- **Level 3:** +1 proficiency in any untrained skill
- **Level 8:** +1 proficiency in any untrained skill
- **Level 15:** +1 proficiency in any untrained skill

The Operative gains **bonus proficiency picks** at Level 5 and Level 10 (in addition to the standard picks above), reflecting their unmatched versatility.

**CP Spending (available at any level):**
- **2 CP:** Gain proficiency in any untrained skill
- **4 CP:** Upgrade a Proficient skill to Expert (requires proficiency first)

Specialist chassis characters pay **half price** for skill CP spending (1 CP for proficiency, 2 CP for expertise), representing their natural aptitude for picking up new skills.

**Downtime Training:**
- 8 weeks training + 200 credits instructor fee to gain proficiency in one untrained skill (no CP cost, but requires narrative downtime)

### Expertise

Expertise doubles your proficiency bonus for a specific skill. At Level 1 with +2 proficiency, expertise gives +4. At Level 17 with +6 proficiency, expertise gives +12.

**Gaining Expertise:**
- Spend 4 CP (2 CP for Specialist chassis) to upgrade any Proficient skill to Expert
- Some build features grant free expertise (notably the Operative's Expertise feature)

**Operative Expertise Advantage:** The Operative is the only class that receives free Expertise at Level 1 (2 skills) and gains additional free Expertise at L6 and L12. Furthermore, the Operative can **swap one Expertise skill during a long rest**, while all other characters' Expertise choices are permanent once made.

### Skill Focuses

A character who is proficient in a skill can further narrow their expertise into a **skill focus** — a specific application of that skill honed through focused practice. Two characters proficient in Medicine might have very different capabilities: one focuses on Trauma Surgery while the other focuses on Pharmacological Knowledge.

#### Mechanical Benefit

When you make a skill check that falls within your skill focus's domain, you gain **+2 to the roll**. This bonus stacks with proficiency and expertise but is situational — it only applies when the specific focus is relevant.

A few skill focuses (marked with ★) also grant a minor ability unlock in addition to the +2 bonus.

#### Acquiring Skill Focuses

| Source | When | Details |
|--------|------|---------|
| **Background** | Level 1 | Your background grants 1 starting skill focus in a skill you are proficient in (see backgrounds) |
| **Advancement** | Level 5 | Choose 1 skill focus in any proficient skill |
| **Advancement** | Level 10 | Choose 1 skill focus in any proficient skill |
| **Advancement** | Level 15 | Choose 1 skill focus in any proficient skill |

A character can have **multiple skill focuses in different skills** but cannot take two focuses in the same skill. You must be proficient in a skill to take a focus in it.

#### Retraining

During a long rest (1 week), you can replace one skill focus with a different one, provided you meet the prerequisites. This represents focused practice and shifting expertise — a common necessity in a world where survival demands adapt.

---

#### Physical Skill Focuses

| Skill | Focus | Domain |
|-------|---------------|--------|
| **Athletics** | Brawler | Grapple, Shove, and unarmed combat checks |
| | Climber | Climbing checks and reducing fall distance |
| | Swimmer | Swimming and underwater action checks |
| **Acrobatics** | Tumbler | Tumble Through and Escape Grapple checks |
| | Freerunner | Balance and movement across unstable/narrow surfaces |
| | Contortionist | Squeezing through tight spaces and escaping restraints |
| **Stealth** | Urban Camouflage | Hiding and sneaking in settlements, ruins, and structures |
| | Wilderness Stalking | Hiding and sneaking in natural terrain — forests, wastes, mountains |
| | Ambush Specialist | Ambush Setup checks and maintaining Stealth after attacking from hiding |
| **Sleight of Hand** | Locksmith | Pick Lock and Disable Trap checks |
| | Pickpocket | Pickpocket, Plant Item, and Conceal Object checks |
| | Trap Technician | Disable Trap checks; ★ you can identify a trap's trigger mechanism without a separate Perception check |
| **Endurance** | Wasteland Hardened | Withstand Environment and Resist Toxin checks in irradiated or chemically contaminated areas |
| | Pain Tolerance | Stay Conscious and Resist Pain checks |
| | Marathon Runner | Forced March checks and long-distance travel endurance |

> **Locksmith vs Trap Technician:** Both Sleight of Hand focuses cover Disable Trap checks. This is an intentional breadth-vs-depth choice. Locksmith gives +2 to *both* Pick Lock and Disable Trap (broader coverage). Trap Technician gives +2 only to Disable Trap but also grants free trap identification (★ ability). Choose Locksmith if you need general infiltration versatility; choose Trap Technician if traps are your primary concern.

#### Mental Skill Focuses

| Skill | Focus | Domain |
|-------|---------------|--------|
| **Science** | Chemist | Synthesize Compound and Analyze Substance checks for chemicals and pharmaceuticals |
| | Radiation Specialist | Assess Radiation checks and identifying radioactive materials or contamination |
| | Ballistics Expert | Craft Ammunition checks and identifying weapon-related evidence |
| **Technology** | Field Mechanic | Repair and Jury-Rig checks on mechanical and vehicular systems |
| | Systems Hacker | Hack Terminal and Disable Device checks on electronic systems |
| | Salvage Analyst | Identify Tech checks; ★ when you succeed, you also learn the item's approximate salvage value |
| **Arcana** | Sigil Scholar | Spell Research and Learning Spell Fragment checks |
| | Warden's Eye | Detect Magic and Identify Spell checks |
| | Occult Historian | Identify Magical Creature and Read Magical Text checks |
| **Investigation** | Crime Scene Analyst | Reconstruct Events and Search Area checks at scenes of violence or sabotage |
| | Counterintelligence | Detect Forgery and Expose Deception checks |
| | Casing Specialist | Case a Location checks for infiltration planning |
| **Medicine** | Trauma Surgeon | Emergency Field Medicine and Field Surgery checks |
| | Disease Specialist | Treat Disease/Poison and Diagnose checks for illness, toxin, and radiation sickness |
| | Combat Medic | Medicine checks made during combat (under fire, while threatened) |
| **Perception** | Spotter | Spot and Survey Area checks at distances greater than 60 feet |
| | Sentry | Detect Ambush (Passive Perception) and Listen checks while on watch |
| | Tracker | Track by Senses checks within 60-foot range |
| **Insight** | Interrogator | Detect Lie and Sense Motive checks during deliberate questioning |
| | Behavioral Analyst | Predict Behavior and Assess Trustworthiness checks |
| | Empathic Reader | Read Emotions checks; includes detecting magical mental influence |
| **Survival** | Wilderness Tracker | Track checks over natural terrain |
| | Forager | Forage and Predict Weather checks |
| | Trapper | Set Snare and Build Shelter checks |

#### Social Skill Focuses

| Skill | Focus | Domain |
|-------|---------------|--------|
| **Persuasion** | Negotiator | Negotiate and Request Aid checks in transactional contexts |
| | Orator | Rally and Calm Hostility checks addressing groups |
| | Information Broker | Gather Information checks through direct questioning |
| **Deception** | Con Artist | Lie and Create Diversion checks in social manipulation |
| | Forger | Forge Document and Plant False Information checks |
| | Master of Disguise | Disguise checks; ★ your disguise preparation time is halved |
| **Intimidation** | Physical Menace | Intimidation checks using MIG — Threaten, Display Dominance via physicality |
| | Psychological Terror | Intimidation checks using PRE — Demoralize, Interrogate through fear |
| | Command Presence | Command Obedience checks and maintaining authority over groups |
| **Streetwise** | Black Marketeer | Find Black Market and Navigate Underworld checks |
| | Street Reader | Read the Room and Identify Criminal checks |
| | Appraiser | Street Price checks; ★ you cannot be cheated on transactions within settlements you've spent 24+ hours in |

#### Specialized Skill Focuses

| Skill | Focus | Domain |
|-------|---------------|--------|
| **Piloting** | Ground Vehicles | Piloting checks for wheeled, tracked, and walker vehicles |
| | Aircraft | Piloting checks for rotorcraft, fixed-wing, and VTOL vehicles |
| | Mounts | Piloting checks for riding living creatures (mutant beasts, bio-engineered mounts) |
| **Navigation** | Overland Pathfinder | Route-finding and travel time estimation across wilderness |
| | Signal Specialist | Signal interception, communication equipment, and electronic navigation |
| | Urban Navigator | Navigation checks within dense settlements, ruin complexes, and underground networks |
| **Weapon Systems** | Gunnery | Vehicle-mounted weapon attack and targeting checks |
| | Point Defense | Defensive fire, intercepting projectiles, and anti-personnel weapon checks |
| | Artillery | Long-range indirect fire and bombardment targeting checks |
| **Engineering** | Structural Engineer | Fortification, building, and demolishing structure checks |
| | Electrical Systems | Power grid, wiring, and electrical system checks |
| | Mechanical Systems | Engines, hydraulics, and moving-parts system checks |

---

#### Skill Focus and Other Bonuses

Skill focuses stack with proficiency and expertise. They do **not** stack with other conditional +2 bonuses to the same check (e.g., an item bonus and a skill focus bonus — use the higher). This follows Ashfall's bounded accuracy: the maximum skill bonus cap of +18 still applies.

**Example:** A Level 10 Operative with Medicine (Expert) and the Trauma Surgeon focus makes an Emergency Field Medicine check. Their bonus is: WIS modifier (+3) + Expertise (+8) + Skill Focus (+2) = **+13**. At the +18 cap, this leaves room for growth through attribute increases but is already elite-tier.

---

#### Example: Two Medics, Two Playstyles

*Dr. Reva* has Medicine → **Trauma Surgeon** focus. She excels in the heat of battle — her Emergency Field Medicine and Field Surgery checks get +2, making her the person you want when someone is bleeding out in a firefight.

*Kael* has Medicine → **Disease Specialist** focus. He's the one you call when a settlement is suffering from plague, when someone has been poisoned, or when radiation sickness is spreading. His Diagnose and Treat Disease checks get +2, giving him an edge in the slower, more investigative side of medicine.

Both are proficient in Medicine. Both are valuable. But they solve different problems — and the party benefits from having both.

---

### Skill Proficiency Summary by Level

| Level | Standard Character | Operative |
|-------|-------------------|-----------|
| 1 | 5 proficiencies (2 class + 1 bg + 2 choice) | 8 proficiencies (5 class + 1 bg + 2 choice) + 2 Expertise |
| 3 | +1 free proficiency | +1 free proficiency |
| 5 | — | +1 bonus proficiency |
| 6 | — | +1 free Expertise |
| 8 | +1 free proficiency | +1 free proficiency |
| 10 | — | +1 bonus proficiency |
| 12 | — | +1 free Expertise |
| 15 | +1 free proficiency | +1 free proficiency |
| **Total** | **8 proficiencies** (+ any from CP) | **13 proficiencies + 4 Expertise** (+ any from CP) |

---

## Group Checks and Aid

### Group Check
Everyone rolls the same skill.
- **Success Threshold:** If half or more succeed, group succeeds
- **Used for:** Group stealth, mass knowledge checks, collective tasks

### Aid Action
Help another character with their skill check.
- **Requirement:** Must be proficient in the skill or GM allows situational help
- **Benefit:** Target gains advantage on their check
- **Multiple Helpers:** Only one helper grants advantage (doesn't stack)

---

## Skill Challenges

Skill challenges model extended non-combat obstacles that require multiple checks across multiple skills. The party accumulates successes before hitting a failure limit, with each failure introducing compounding complications.

**Quick Reference:**
1. GM sets complexity: Simple (3 successes / 2 failures), Standard (5/3), or Complex (7/4)
2. Each round, the GM announces 3-5 applicable skills; each PC makes one check
3. **Skill lockout:** Each skill can only be used by one PC per round
4. Meet DC = 1 success; exceed DC by 5+ = 2 successes (critical); fail = 1 failure + complication
5. Outcome depends on final tally — full success, partial success, partial failure, or total failure

**Example: Escaping a Collapsing Ruin**
- Required: 4 successes before 3 failures
- Players might use: Athletics (dodge debris), Perception (find exit), Technology (override blast door), Acrobatics (leap gap)
- Failure: Trapped or injured; Success: Escape with minor wounds

> **Full Framework:** For complexity tiers, challenge templates (Infiltration, Research Montage, Survival Trek, Chase), feature integration, and a complete worked example, see **Game Mastering — Skill Challenge Framework**.

---

## Advanced Skills

Beyond the 21 base skills, characters can acquire **advanced skills** — specialized expertise that opens entirely new gameplay options. Advanced skills build on base skill foundations and represent focused training in narrow domains critical to post-apocalyptic survival.

**Quick Reference:**

| Advanced Skill | Attribute | Prerequisite | Domain |
|---|---|---|---|
| Hacking | INT | Technology (Proficient) | Network intrusion, data extraction |
| Demolitions | INT | Science (Proficient) | Explosives, bomb disposal |
| Forensics | INT | Investigation (Proficient) | Crime scene analysis, evidence |
| Xenology | INT/WIS | Arcana or Science (Proficient) | Alien biology and technology |
| Pharmacology | WIS/INT | Medicine (Proficient) | Drug crafting, poisons, stimulants |
| Robotics | INT | Technology (Proficient) | Autonomous systems, AI, mechs |
| Tactics | INT/WIS | Perception or Survival (Proficient) | Battle planning, force assessment |
| Interrogation | PRE/WIS | Insight or Intimidation (Proficient) | Structured questioning, deception detection |
| Statecraft | PRE | Persuasion or Deception (Proficient) | Political maneuvering, faction influence |
| Tracking | WIS | Survival (Proficient) | Trail following, urban surveillance, counter-tracking |
| Scavenging | WIS | Survival (Proficient) | Salvage, rare components |

**Acquisition:** 3 CP (2 CP for Specialist chassis), Level 3+, requires prerequisite at Proficient. Maximum 2 per character (3 for Specialist chassis). No Expertise tier.

For full rules on each advanced skill, see *Advanced Skills*.
