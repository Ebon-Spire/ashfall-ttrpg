---
game_data: true
talent_levels: [2, 4, 7, 9, 12, 14]
legendary_talent_levels: [18, 19]
universal_talents:
  combat:
    - {name: "Tough", effect: "Gain +2 HP per character level (retroactive)."}
    - {name: "Alert", effect: "+3 to Initiative. You cannot be surprised while conscious."}
    - {name: "Sentinel", effect: "When you hit with an opportunity attack, target's speed becomes 0. Creatures provoke opportunity attacks even if they Disengage."}
    - {name: "Mobile", effect: "+10 ft speed. Melee attacks don't provoke opportunity attacks from that creature for the rest of the turn."}
    - {name: "Durable", effect: "Minimum HP restored from healing equals twice your Endurance modifier (minimum 2). Advantage on Endurance saves vs exhaustion."}
    - {name: "Riposte", effect: "When a creature misses you with a melee attack, use reaction to make a melee attack. Add proficiency bonus to damage on hit."}
    - {name: "Quick Reflexes", effect: "Reaction: reroll failed Reflex save (1/SR). On successful Reflex save vs. area effect, take no damage instead of half."}
    - {name: "Covering Fire", effect: "Reaction + 1 ammo: choose creature in weapon range — it has disadvantage on ALL attacks until start of your next turn. If it moves, make one free ranged attack.", requires: "Ranged weapon proficiency"}
    - {name: "Reactive Guard", effect: "Reaction: adjacent ally hit by melee attack gains +2 DV. If still hit, you take half the damage."}
    - {name: "Iron Grip", effect: "Grapple damage uses unarmed/natural weapon die. Constriction as free action 1/turn. Grappled foe has disadvantage on attacks vs others.", requires: "MIG 13 or higher"}
    - {name: "Twin Striker", effect: "Off-hand gets full attribute mod to damage. Both hits on same target deal +1d6 bonus damage. Draw/stow two light weapons as free action."}
    - {name: "Colossus", effect: "Two-handed melee hits push target 5 ft. Ignore first 5 DR. Crit: enemies within 5 ft of target Reflex save (DC = 8 + proficiency + MIG mod) or prone.", requires: "Proficiency with a melee weapon with the Heavy property"}
    - {name: "Outrider", effect: "Mount shares your initiative (higher). Mount +2 DV while ridden. Ride-by attack: melee attack during mount movement. Mount doesn't provoke OA.", requires: "Proficiency with Animal Handling"}
    - {name: "Spotter", effect: "Help on ranged attack grants advantage + 1d4 damage on hit. Free action 1/round: designate enemy within 60 ft — next ally attack gains +2. Does not stack with Assess Target."}
    # Support Talent Expansion
    - {name: "Frontline Medic", effect: "Administer healing items/stabilize while moving. Healed ally gains +10 ft speed until end of their next turn."}
    - {name: "Shield Bearer", effect: "Reaction: adjacent ally +2 DV vs one attack. 1/SR: halve area damage to one adjacent creature (you take the other half, unreducible).", requires: "Shield proficiency"}
    - {name: "Polearm Sentinel", effect: "Entering-reach OA (1/creature/round, costs reaction). Once/turn on reach weapon hit: push target 5 ft directly away (Large or smaller).", requires: "Proficiency with a weapon that has the Reach property"}
  support:
    - {name: "Inspiring Presence", effect: "Ally saves vs condition → one other ally with same condition re-saves with advantage. 1/SR reaction: ally at 0 HP gains advantage on first death save."}
  crafting_tech:
    - {name: "Drone Handler", effect: "Simple commands to controlled devices cost no action (free interaction). Controlled devices +2 saves vs hacking/EMP. Aware of hacking attempts on your devices.", requires: "Technology proficiency"}
  exploration:
    - {name: "Wasteland Forager", effect: "Find equipment one tier higher when searching (max T3 above expected). Auto-recover 1 ammo/enemy + 1d4×proficiency credits after combat. Advantage on Survival for food/water/shelter. Reduce repair DCs by 2. 1/LR: search for specific item (Survival DC 15)."}
    - {name: "Linguist", effect: "Learn 3 languages/codes. Read pre-Fall technical docs without Tech check (grants advantage on related check). Immersion learning (8 hrs basic, 1 week fluent). 1/SR: INT DC 14 to identify faction/origin/deception from speech. Advantage on Persuasion/Deception in target's native language."}
    - {name: "Endurance Runner", effect: "March 16 hours before exhaustion. Half food/water. +50% carrying capacity. Advantage on Fortitude vs environmental hazards. Ignore natural difficult terrain during travel. Full short rest benefit in hostile conditions."}
    - {name: "Field Medic", effect: "Stabilize dying creature as free action. Medical kit heals +1d6 HP. Stacks with Medic features."}
  skill:
    - {name: "Expertise", effect: "Double proficiency bonus for one proficient skill. Can take multiple times.", repeatable: true}
    - {name: "Jack of All Trades", effect: "Half proficiency on non-proficient checks. 1/SR: reroll failed non-proficient check with full proficiency. Succeed by 5+ = temporary proficiency until next SR."}
    - {name: "Reliable", effect: "For one proficient skill, treat d20 rolls of 9 or lower as 10. Can take multiple times.", repeatable: true}
    - {name: "Quick Study", effect: "Short rest: swap one skill proficiency until long rest. 1/LR reaction: on failed skill check, swap a proficiency for that skill. First check with swapped skill has advantage."}
  stealth:
    - {name: "Fade to Black", effect: "Hide + move half speed in one action; reaction 5-ft reposition when enemy approaches hiding spot", requires: "Stealth proficiency"}
    - {name: "Quiet Approach", effect: "Scout Ahead (AGI) at Fast pace (normally prohibited); advantage on Scout Ahead at slower paces; advantage on Stealth during rest; +2 to own surprise Stealth check", requires: "Stealth proficiency"}
    - {name: "Ambush Predator", effect: "First attack vs creature that hasn't acted: +1d6 damage; if hidden, target has disadvantage on first attack", requires: "Stealth proficiency, Level 7+"}
  # Knowledge & Investigation Talents
  knowledge_investigation:
    - {name: "Field Analyst", effect: "On successful Investigation/Science/Arcana/Technology check, GM provides 1 additional mechanical detail. 1/SR Tactical Briefing: 1 min, allies within 30 ft gain +1 to next roll involving the subject (1 hr).", requires: "Proficiency in Investigation, Science, Arcana, or Technology"}
    - {name: "Pattern Recognition", effect: "1/LR: when you succeed on an INT-based skill check by 5+, ask the GM one yes/no deductive question about the subject (truthful answer; 'insufficient data' doesn't consume use).", requires: "Proficiency in at least two INT-based skills"}
    - {name: "Rapid Assessment", effect: "1 action, 60 ft: INT skill check vs DC 10+CR (min 12). Learn target's highest/lowest attributes, one resistance/vulnerability, current conditions. First ally to act on info gains advantage. INT mod uses/SR.", requires: "Proficiency in Perception, Insight, Science, or Arcana"}
class_talents:
  Warrior:
    - {name: "Aggressive Momentum", enhances: "Combat Stance", effect: "In Aggressive Stance, reducing a creature to 0 HP lets you move 15 ft and make one additional melee attack as a free action."}
    - {name: "Iron Fortress", enhances: "Combat Stance", effect: "In Defensive Stance, use Bodyguard without spending reaction. Still once per round."}
    - {name: "Relentless Second Wind", enhances: "Second Wind", effect: "Second Wind costs a bonus action instead of an action. Roll 3d10 instead of 2d10 when bloodied."}
    - {name: "Retaliatory Fury", enhances: "Retaliation Strike", effect: "Retaliation Strike can target the attacker. Dropping a creature to 0 HP regains one use."}
    - {name: "Unyielding Grit", enhances: "Grit", effect: "While Grit is active (at/below half HP): advantage on Fortitude saves. 1/LR: drop to 1 HP instead of 0 (Grit activates immediately if not already active)."}
    - {name: "Weapon Bond", enhances: "Weapon Specialization", effect: "Specialized weapon group gains +1 to attack rolls. Reroll natural 1s (must use new result)."}
  Gunslinger:
    - {name: "Dead Eye", enhances: "Trick Shot", effect: "Trick Shots have no disadvantage at long range. Critical hit with Trick Shot regains one use."}
    - {name: "Quick Draw", effect: "Draw/holster/reload firearms as free action. Advantage on first attack roll on first combat turn."}
    - {name: "Moving Target", enhances: "Evasive Maneuvers", effect: "After moving 20+ ft, attack rolls against you have disadvantage until next turn.", requires: "Evasive Maneuvers"}
    - {name: "Custom Rounds", enhances: "Gunsmith tree", effect: "Craft 6 specialty rounds during short rest (incendiary +1d4 fire, hollow-point +2 vs unarmored, or tracer negating cover).", requires: "Field Maintenance"}
    - {name: "Overwatch Specialist", enhances: "Called Shot", effect: "Readied attacks deal +1d10 damage. Target must Fortitude save or be stunned until end of next turn."}
    - {name: "Gun Kata", enhances: "Skirmisher tree", effect: "No disadvantage on ranged attacks within 5 ft. Push target 10 ft on hit within 5 ft."}
  Mystic:
    - {name: "Spell Battery", enhances: "Arcane Recovery", effect: "Recover spell slots equal to full Mystic level on Arcane Recovery. Use Arcane Recovery twice per short rest."}
    - {name: "Metamagic: Extend", enhances: "Spell Crafting", effect: "Spend a higher spell slot to double duration of spells lasting 1 minute or longer."}
    - {name: "Metamagic: Quicken", enhances: "Spell Crafting", effect: "Once per short rest, cast a 3rd-level-or-lower spell as a bonus action."}
    - {name: "Arcane Resilience", enhances: "Arcane Ward", effect: "Arcane Ward max increases to 3x Mystic level. Ward absorbing all damage deals INT mod force damage to attacker."}
    - {name: "Focused Destruction", enhances: "Cantrips", effect: "Cantrips gain next tier's damage one level early. Choose one cantrip: it ignores resistance."}
    - {name: "Ritual Master", enhances: "Ritual Casting", effect: "Ritual casting takes 10 min/spell level (instead of 1 hour). Cast one unknown spell per long rest via INT check."}
  Technician:
    - {name: "Drone Commander", enhances: "Drone Companion", effect: "Drone gains +2 HP/level (retroactive). Can take reactions (1/round). Rebuild during short rest instead of long rest."}
    - {name: "Overclock Protocol", enhances: "Neural Interface", effect: "Overclock grants drone +1d6 damage on all attacks. Overclock duration extends to 2 minutes."}
    - {name: "Gadget Savant", enhances: "Technology tree", effect: "Maintain 3 active gadgets (instead of 2). Gadget save DCs +2."}
    - {name: "Remote Hacker", enhances: "Technology tree", effect: "Double hacking range. Set delayed triggers on hacked systems (activate within 1 hour).", requires: "System Breach"}
    - {name: "Augment Specialist", enhances: "Technology tree", effect: "Installed augmentations reduce Humanity by 1 less (min 1). One additional augmentation beyond normal limit."}
    - {name: "Jury Rig", enhances: "Rapid Assembly", effect: "Once per short rest, create temporary Tier 1 gadget or tool for 10 minutes.", requires: "Rapid Assembly"}
  Medic:
    - {name: "Combat Medic", enhances: "Rapid Suture", effect: "Rapid Suture as bonus action. Target gains temp HP equal to WIS modifier.", requires: "Rapid Suture"}
    - {name: "Preventive Care", enhances: "Protective Injection", effect: "Protective Injection grants temp HP equal to WIS mod + proficiency bonus. Lasts until next long rest.", requires: "Protective Injection"}
    - {name: "Adrenaline Surge", enhances: "Combat Stimulants", effect: "Combat Stimulants also grant +10 ft speed and advantage on Reflex saves for 1 minute."}
    - {name: "Triage Expert", enhances: "Mass Triage", effect: "Mass Triage affects 3 allies (instead of 2). Each heals +1d8.", requires: "Mass Triage"}
    - {name: "Pharmacological Genius", enhances: "Medicine tree", effect: "Crafted stims and poisons have +2 save DCs. Double crafting quantity during short rest."}
    - {name: "Vital Signs Monitor", enhances: "Medicine tree", effect: "Know exact HP of allies within 60 ft. Reaction to move and stabilize ally who drops to 0 HP."}
  Operative:
    - {name: "Shadow Step", enhances: "Cunning Action", effect: "When you Hide via Cunning Action and succeed, teleport up to 15 ft to dim light or darkness."}
    - {name: "Exploit Weakness", enhances: "Sneak Attack", effect: "On Sneak Attack, choose: target has disadvantage on next attack, or -15 ft speed until your next turn."}
    - {name: "Vanishing Act", enhances: "Ghost Strike", effect: "After Ghost Strike, Hide as free action. If successful, hidden before target can react."}
    - {name: "Trap Sense", enhances: "Stealth & Subterfuge tree", effect: "Advantage on saves vs traps. Auto-detect traps within 10 ft. Disarm traps as bonus action."}
    - {name: "Uncanny Awareness", enhances: "Uncanny Dodge", effect: "Uncanny Dodge works against unseen attacks. Move 5 ft without provoking when using it."}
    - {name: "Perfect Timing", enhances: "Expertise", effect: "For one Expertise skill, checks totaling 20+ reveal one additional piece of information."}
  Diplomat:
    - {name: "Rallying Inspiration", enhances: "Inspire", effect: "Inspire also grants +1d4 to next damage roll. Temp HP increases by proficiency bonus."}
    - {name: "Commanding Voice", enhances: "Commanding Presence", effect: "Commanding Presence die becomes d6. Rolling 6 doesn't expend the die. Range 60 ft."}
    - {name: "Diplomatic Immunity", enhances: "Silver Tongue", effect: "Silver Tongue works on every conversation. Beating Persuasion/Deception by 5+ makes target friendly for 1 hour."}
    - {name: "Shield of Words", enhances: "Duck and Cover", effect: "One ally within 10 ft also halves damage. Regain one use when you roll initiative."}
    - {name: "Crisis Leader", enhances: "Rally Cry", effect: "Rally Cry usable once per short rest. Can forgo healing to grant all affected allies an additional action."}
    - {name: "Read the Battlefield", enhances: "Read the Room", effect: "Works in combat without observation. Learn HP range, highest save, and lowest save."}
  Channeler:
    - {name: "Divine Conduit", enhances: "Channel Energy", effect: "Channel Energy heals +1d8. Damage type can be radiant or necrotic (your choice)."}
    - {name: "Battle Hymn", enhances: "Divine Channeling tree", effect: "Divine Strike melee hits restore HP equal to half radiant/necrotic damage dealt.", requires: "Divine Strike"}
    - {name: "Spirit Shield", enhances: "Divine Channeling tree", effect: "Reaction: spectral shield grants +3 DV to you or ally within 30 ft until your next turn. WIS mod uses per short rest."}
    - {name: "Resolute Faith", enhances: "Divine Channeling tree", effect: "Successful saves grant temp HP equal to WIS mod. Critical success (beat DC by 10+) triggers free Channel Energy."}
    - {name: "Empowered Smite", enhances: "Divine Strike", effect: "Spell slot melee damage increases by 1d8/slot level. Target must Fortitude save or be knocked prone."}
    - {name: "Shared Resilience", enhances: "Iron Will", effect: "Iron Will protection (adv vs frightened/charmed, immune to magical sleep) extends to allies within 15 ft.", requires: "Iron Will"}
  Scavenger:
    - {name: "Resourceful Combatant", enhances: "Scrounger's Instinct", effect: "On initiative, identify a useful environmental object within 30 ft. Auto-salvage after combat becomes 2d4."}
    - {name: "Junkyard Weaponmaster", enhances: "Improvised Arsenal", effect: "Improvised weapons gain one property (finesse, reach, or versatile 1d10) when drawn. Count as magical for resistance."}
    - {name: "Bottomless Pockets", enhances: "Salvage Dice", effect: "Pool +proficiency bonus (min 5). Stockpile 2 excess dice when full after short rest."}
    - {name: "Makeshift Specialist", enhances: "Makeshift Solution", effect: "All options upgraded. 1/SR use as free action instead of 1 action."}
    - {name: "Scrapyard Fury", enhances: "Scrapyard Strike", effect: "Crit applies two riders. Successful rider grants advantage on next attack vs target."}
    - {name: "Adaptive Ingenuity", enhances: "Wasteland Ingenuity", effect: "Choose two options (still 3 dice). Field Innovation lasts 10 minutes."}
  Infiltrator:
    - {name: "Master Analyst", enhances: "Assess Target", effect: "Learn 2 facts. +3 to attacks (instead of +2) after 1 min of Assess."}
    - {name: "Deep Reserve", enhances: "Intel Dice", effect: "Pool +proficiency bonus (min 5). Reroll 1s on Intel Dice once."}
    - {name: "Prepared for Everything", enhances: "Contingency", effect: "New option: planted trap (2d6 + prone). First free use becomes free action."}
    - {name: "Surgical Strike", enhances: "Exploit Weakness", effect: "2d6 damage (not 1d6) after 3+ rounds Assessed. New rider: Crippling Strike (half speed)."}
    - {name: "Mastermind's Gambit", enhances: "Mastermind", effect: "1/LR free Mastermind (no Intel cost). Intel Briefing +1 DV for allies."}
    - {name: "Living Legend", enhances: "Cover Identity System", effect: "1 permanent unblowable cover. Covers include faction affiliation. 4hr creation."}
  Psion:
    - {name: "Neural Overload", enhances: "Psi Strike", effect: "+1d8 force at Strained. Kill reduces Focus by 1."}
    - {name: "Backlash Mastery", enhances: "Focus", effect: "Backlash Threshold +2. On Backlash: choose no stun but +2d6 self-damage."}
    - {name: "Psionic Equilibrium", enhances: "Centering", effect: "Centering die +1d4 bonus. End one additional condition (poisoned/blinded/deafened)."}
    - {name: "Discipline Mastery", enhances: "Discipline Surge", effect: "Surge DC +2. Apply one Psi Strike modifier to Surge. Surge generates +1 Focus (not +2)."}
    - {name: "Psychic Armor", enhances: "Psionic Resilience", effect: "Immunity to external psychic damage (not self-inflicted). Failed mental attacks deal WIS+prof psychic to attacker."}
    - {name: "Controlled Burn", enhances: "Psionic Overcharge", effect: "Choose starting Focus. 4 rounds. Psychic resistance. Exhaustion clears on SR; reset to Focus 3."}
  Mutant:
    - {name: "Predator Anatomy", enhances: "Mutagen Physiology", effect: "Natural weapons crit on 19-20. Choose 2 damage types per attack."}
    - {name: "Adaptive Genome", enhances: "Mutations", effect: "+1 known mutation. Swap a known mutation on short rest."}
    - {name: "Enduring Strain", enhances: "Strain Dice", effect: "Pool +END modifier. Reroll 1s and 2s on Strain Dice once."}
    - {name: "Reactive Adaptation", enhances: "Adapt / Adaptive Response", effect: "Adaptive Response 2/type/encounter. Free Adapt when Response triggers."}
    - {name: "Stable Genome", enhances: "Adaptive Response / Feral Evolution", effect: "Resist self-damage. END DC 15 save to avoid Feral exhaustion."}
    - {name: "Mutation Mastery", enhances: "Mutation Surge / Feral Evolution", effect: "Free surge rider on all Feral hits. 2 min duration. No exhaustion if ended early."}
legendary_talents:
  - {name: "Indomitable Will", effect: "Once per long rest, choose to succeed a failed save. Immune to frightened and charmed."}
  - {name: "Legendary Resilience", effect: "+30 HP max. Regain HP equal to proficiency bonus at start of each turn (if above 0 HP)."}
  - {name: "Master of Arms", effect: "Proficiency with all weapons and armor. Crit on 19-20 (or expand existing crit range by 1)."}
  - {name: "Arcane Supremacy", effect: "Regain all 3rd-level-or-lower spell slots on short rest. One cantrip can be cast as bonus action.", requires: "Spellcasting"}
  - {name: "Legendary Stealth", effect: "Hide when lightly obscured. First attack from hidden doesn't reveal position. No tracks or scent.", requires: "Stealth proficiency"}
  - {name: "Battlefield Presence", effect: "Inspire and Commanding Presence affect allies within 120 ft. Assisting allies grants one additional action.", requires: "Commanding Presence or Rally Cry"}
  - {name: "Mechanical Genius", effect: "Drone gains second action. Maintain 5 gadgets. Constructs have double HP.", requires: "Drone Companion or Technology tree"}
  - {name: "Perfect Killer", effect: "Sneak Attack +2d6. On kill, free Hide action and move half speed.", requires: "Sneak Attack"}
faction_talents:
  Hearthstone Compact:
    - {name: "Community Bulwark", effect: "Aid action grants +1 DV to both you and ally. Dodge while adjacent to ally grants ally +1 DV.", standing: 2}
    - {name: "Compact Fieldcraft", effect: "Emergency Field Medicine on 3 creatures during SR. Fortify camp: allies +2 Perception vs ambush, not surprised 1 hr.", standing: 2}
    - {name: "Unbreakable Line", effect: "1/LR reaction: ally at 0 HP gains temp HP = your level, stays conscious. Allies within 30 ft advantage on death saves 1 min.", standing: 3}
  Iron Wolves:
    - {name: "Warchief's Drill", effect: "Initiative: you + 3 allies within 30 ft gain +2 initiative. First round battle cry: allies +5 ft movement or +1 first attack.", standing: 2}
    - {name: "Scavenge the Fallen", effect: "1 action after enemy KO: gain 1 Salvage capital (max 3/encounter). Identify enemy equipment quality at a glance.", standing: 2}
    - {name: "Ironclad Advance", effect: "1/LR: 3 rounds, you + 3 allies resist bludgeoning/piercing/slashing while advancing. Retreating ends effect.", standing: 3}
  Convergence of the Lit Path:
    - {name: "Overclock Augmentation", effect: "1/SR: one augmentation numeric effects +50% for 1 min, then disabled until SR.", standing: 2}
    - {name: "Data Synthesis", effect: "Success on Technology/Investigation grants +2 to next such check within 1 hr. Identify pre-Fall tech details at DC 12.", standing: 2}
    - {name: "Neural Optimization Protocol", effect: "+1 INT (max 20/22). 1 action Technology check can make a second Technology check (different target).", standing: 3}
  Ashen Veil:
    - {name: "Resonance Attunement", effect: "Sense magic auras 60 ft passively (school + power level). Advantage on Arcana to identify spells/items.", standing: 2}
    - {name: "Burnout Channel", effect: "1/SR: when gaining Burnout, each point also deals 1d6 force to enemies within 10 ft (Reflex half).", standing: 2}
    - {name: "Veil Mastery", effect: "1/LR: 1 min, spell save DC +1, ignore first 2 Burnout gained. Gain 1 Exhaustion when effect ends.", standing: 3}
  Dynaxis Solutions:
    - {name: "Corporate Leverage", effect: "Add INT mod to Persuasion/Deception for trade/negotiation. 1/LR: determine exact market value of any item (no check).", standing: 2}
    - {name: "Hostile Acquisition", effect: "1/LR reaction: enemy activates tech item → Technology check to malfunction it 1 round. Failure reveals your interference.", standing: 2}
    - {name: "Executive Override", effect: "1/LR: combine two non-attack actions into one action, up to twice this turn. Valid: Use Item, Tech check, Help, Command, Interact.", standing: 3}
  Kethara Collective:
    - {name: "Symbiotic Bond", effect: "Choose ally at LR: both +1 all saves within 30 ft. Bond breaks if either hits 0 HP. Telepathy 60 ft while bonded.", standing: 2}
    - {name: "Xenotech Proficiency", effect: "Proficiency with Kethara biotech (no -2 penalty). 1/SR: heal 1d8 HP by communing with biotech item (1 min).", standing: 2}
    - {name: "Collective Resonance", effect: "1/LR: 1 min, you + 4 allies telepathic link. Cannot be surprised, silent communication, reaction redirect attacks, advantage vs Frightened/Charmed. Fatigue when ends.", standing: 3}
---
# Talents

Talents are discrete, named capabilities that characters gain at specific levels. Unlike CP spending (which is gradual and customizable), a Talent is a single powerful feature that defines a moment of growth.

**Design Philosophy:** Every Talent should change how you play, not just add numbers. If a Talent doesn't make you reconsider your turn in combat or your approach to a challenge, it's not a Talent — it's a bonus.

---

## When You Gain Talents

Characters gain one Talent at each of the following levels:

| Level | Talent Type |
|-------|------------|
| 2 | Universal or Build |
| 4 | Universal or Build |
| 7 | Universal or Build |
| 9 | Universal or Build |
| 12 | Universal or Build |
| 14 | Universal or Build |
| 18 | Legendary (special list) |
| 19 | Legendary (special list) |

**Total: 8 Talents by Level 20** (6 standard + 2 legendary).

You cannot take the same Talent twice unless it specifically says otherwise.

---

## Universal Talents

Any character can select these regardless of build. Each addresses a different pillar of play.

### Combat Talents

**Tough**
Gain +2 HP per character level (retroactive). Your hit point maximum increases by 2 for each level you have, and by 2 again each time you gain a level thereafter.

**Alert**
+3 to Initiative. You cannot be surprised while conscious.

**Sentinel**
When you hit a creature with an opportunity attack, its speed becomes 0 for the rest of the turn. Creatures within your reach provoke opportunity attacks even if they take the Disengage action.

**Mobile**
Your speed increases by 10 ft. When you make a melee attack against a creature, you don't provoke opportunity attacks from that creature for the rest of the turn, whether you hit or not.

**Durable**
When you use Second Wind or receive healing, the minimum HP restored equals twice your Endurance modifier (minimum 2). Additionally, you have advantage on Endurance saves against exhaustion.

**Riposte**
When a creature misses you with a melee attack, you can use your reaction to make a melee attack against that creature. If you hit, add your proficiency bonus to the damage.

**Quick Reflexes**
When you **fail a Reflex saving throw**, you can use your reaction to **reroll the save**. You must use the new result, even if it is lower. You can use this talent **once per short rest**.

Additionally, when you **succeed** on a Reflex save against an area effect that deals half damage on a success (explosions, breath weapons, area spells), you take **no damage** instead of half.

*Quick Reflexes creates a "dodger" build that competes with Tough's tanky approach. The reroll gives you a second chance against area threats, while the evasion effect rewards high-Reflex characters who invest in this talent. Note: the Operative's Evasion (Level 6) applies to ALL Reflex saves passively and without a resource cost — Quick Reflexes is the budget version, limited to 1 reroll per short rest and evasion only on area effects. An Operative with Quick Reflexes stacks them: the passive evasion handles routine saves, and the reroll rescues the critical failures.*

**Covering Fire**
When a creature you can see is within your ranged weapon's **normal range**, you can use your reaction and expend **1 ammunition** to lay down suppressive fire. That creature has **disadvantage on all attacks** (melee and ranged) **until the start of your next turn**. If the suppressed creature **moves** during its turn, you can make **one ranged attack** against it as part of the same reaction (no additional ammunition cost).

*Requires: Proficiency with a ranged weapon, weapon must be loaded.*

*Covering Fire creates a suppression playstyle distinct from Reactive Guard's bodyguard role. Instead of protecting one ally from one attack, you lock down one enemy for a full round. The movement-triggered shot creates "overwatch" — the suppressed creature must choose between attacking at disadvantage or moving and eating a free shot. A Gunslinger behind cover with Covering Fire becomes a zone controller, punishing enemies who try to reposition. The ammunition cost (1 round, not 1 magazine) is minimal but prevents unlimited use in long fights.*

**Reactive Guard**
When an **ally adjacent to you** (within 5 feet) is hit by a melee attack, you can use your reaction to grant them **+2 to their Defense Value** against that attack. If the attack still hits after this bonus, the damage is split evenly: **you take half** and **the original target takes the other half** (round down for you, round up for the target).

*Reactive Guard is the melee protector talent — you partially shield your allies by literally putting yourself in the way. It's weaker than the Warrior's Iron Fortress (which lets you Bodyguard without spending a reaction), maintaining appropriate build hierarchy: anyone can be a decent protector, but the Warrior is the best at it. The shared damage creates interesting HP management decisions — you're not just soaking hits, you're distributing them across the party.*

**Iron Grip**
When you successfully **grapple** a creature, you deal damage equal to your **unarmed strike or natural weapon damage die** instead of the standard grapple damage (if higher). While you are grappling a creature, you can use **Constriction as a free action** once per turn (instead of costing 1 action). Additionally, creatures grappled by you have **disadvantage on attack rolls** against targets other than you — your grip forces them to deal with you first.

*Requires: MIG 13 or higher.*

> **Note:** The Mutant's **Prehensile Limbs** surge rider deals automatic constriction damage (1d6 bludgeoning at the start of the target's turn) that supersedes the generic Constriction rules. Iron Grip's free Constriction does **not** stack with Prehensile Limbs' automatic damage — use whichever damage value is higher. Iron Grip still grants the grapple damage upgrade (unarmed/natural weapon die) and the disadvantage-on-attacks-vs-others to Mutant grapplers.

*Iron Grip is the grappler's defining talent. Without it, grappling is a control tool that costs precious actions to maintain. With it, grappling becomes a complete combat style — you lock down an enemy, crush them every turn for free, and force them to focus on you. The Constriction-as-free-action upgrade is the core of the build: it lets a grappler still attack, shove, or use features while maintaining pressure. For non-Mutant characters, Iron Grip is essential — it makes Constriction free and upgrades the damage. For Mutants with Prehensile Limbs, Iron Grip's main value is the disadvantage-on-attacks-vs-others aggro mechanic, since their Constriction is already automatic. A Warrior with Iron Grip and Sentinel locks down an enemy completely: grapple prevents movement, Sentinel punishes escape attempts, and Constriction punishes staying.*

**Twin Striker**
When you use **Two-Weapon Fighting**, you add your full attribute modifier to **off-hand damage** (removing the standard restriction). When both your main-hand and off-hand attacks hit the **same target** in the same turn, deal an additional **1d6 damage** of the weapon's damage type. Drawing or stowing **two light weapons** costs no action (free action).

*Twin Striker solves the fundamental problem with dual-wielding in Ashfall: the off-hand damage penalty makes it strictly worse than two-handed weapons for single-target damage. With Twin Striker, dual-wielding trades the raw hit damage of a two-handed weapon for the accuracy advantage of two separate attack rolls — you're more likely to hit at least once, and when both connect, the 1d6 bonus bridges the damage gap. The free draw/stow means dual-wielders don't waste actions switching weapons, which matters in Ashfall's 3-action economy. Twin Striker and Colossus are designed as opposite poles: Twin Striker rewards accuracy across two hits, Colossus rewards committing to one massive swing.*

**Colossus**
When you hit a creature with a **two-handed melee weapon**, you can push the target **5 feet** in any direction (no save required, no additional action). Your two-handed melee weapon attacks **ignore the first 5 points of Damage Reduction** (you hit harder than armor can absorb). When you score a **critical hit** with a two-handed melee weapon, all enemies within **5 feet of the target** must succeed on a **Reflex save (DC = 8 + your proficiency bonus + MIG modifier)** or be **knocked prone** — the force of the blow sends shockwaves through the ground.

*Requires: Proficiency with a melee weapon with the Heavy property.*

*Colossus is the big-weapon talent. The 5-foot push turns every attack into battlefield manipulation — you shove enemies off ledges, away from allies, or into hazardous terrain without spending an action on Shove. The DR bypass rewards the two-handed commitment: heavily-armored enemies that laugh off light weapon hits feel the impact of a two-handed swing. The critical hit prone effect is a dramatic moment that rewards aggressive positioning — your crit doesn't just hit hard, it disrupts the entire enemy formation. At DC 8 + proficiency + MIG, the prone effect scales with level — reliable against minions at any tier but not guaranteed against bosses, maintaining bounded lethality.*

**Outrider**
While mounted on a **trained mount**, you and your mount share initiative (using whichever roll is **higher**). Your mount gains **+2 DV** while you are riding it (your combat awareness protects it from attacks). During your mount's movement, you can make **one melee attack** at any point without stopping — this is a ride-by attack that does not end your mount's movement. Your mount does not provoke **opportunity attacks** when it moves out of an enemy's reach.

*Requires: Proficiency with Animal Handling.*

*Outrider transforms Mounted Combat from a movement option into a full combat identity. The ride-by attack is the centerpiece: charge in, strike, ride out — all in one movement. Without Outrider, mounted attacks require stopping (ending movement), which means you're stuck next to the enemy. With Outrider, you hit and keep moving, creating a mobile skirmisher that's almost impossible to pin down. The mount's +2 DV and OA immunity protect against the biggest risk of mounted combat — having your mount killed under you. A Channeler on a blessed mount, a Warrior on an armored warhorse, or a Diplomat on a swift courser all play differently from their on-foot counterparts. Outrider pairs naturally with Mobile (the on-foot version) for characters who fight from the saddle.*

**Spotter**
When you use the **Help action** to assist an ally's **ranged attack**, the bonus increases: the ally gains **advantage** (as normal) and deals an additional **1d4 damage** on a hit. Additionally, **once per round as a free action**, you can designate one enemy you can see within **60 feet**. The next ally who attacks that designated enemy before the start of your next turn gains **+2 to their attack roll**. This designation does **not** stack with the Infiltrator's **Assess Target** — use whichever bonus is higher.

*Spotter creates a ranged support role that doesn't require dealing damage yourself. In a party with multiple ranged characters, the Spotter coordinates fire — marking targets for focused attacks, calling out weak points, and directing volleys. The +2 designation is a free action, so the Spotter can still attack normally while supporting allies. This competes with Diplomat's Inspire (which buffs stats broadly) and Infiltrator's Assess Target (which is more powerful but build-exclusive) by offering a middle ground: a universal talent that any character can take to become a battlefield coordinator. The non-stacking clause with Assess Target ensures the Infiltrator remains the superior target-marker.*

**Frontline Medic**
When you use an action to **stabilize a dying creature** or **administer a healing item** (stim, chem, medkit), you can do so while moving — the administration does not require you to stop or end your movement. You can administer to a creature you pass adjacent to (within 5 feet) during your movement.

Additionally, when you administer a healing item to an ally, that ally gains **+10 feet to their speed** until the end of their next turn (the adrenaline from sudden healing pushes them to move). This speed bonus does not stack with itself.

*Frontline Medic is the universal healing-mobility talent. It does not replicate the Medic's L3 Combat Medic feature, which allows the Medic to use their build healing ability (Field Medic) while moving and grants allies a free 5-foot step. This universal talent is narrower: it works only with healing items and stabilization, not build features. A Medic with both the Combat Medic feature and the Frontline Medic talent can move while using Field Medic AND administer stims on the fly — but no feature is duplicated. For non-Medic characters, Frontline Medic transforms stim delivery from "stop, stand still, spend an action next to the dying ally" into "sprint through the firefight, slap a stim on them, keep going."*

> **Interaction with Medic L3 (Combat Medic feature):** The Medic's Combat Medic feature grants no-OA healing, movement during Field Medic, advantage on Medicine in combat, and ally reaction movement — all tied to the Medic's build healing abilities. This talent (**Frontline Medic**) applies to healing items and stabilization and grants movement + speed bonus. They are complementary, not redundant. (Note: the Medic also has a Build Talent called "Combat Medic" that enhances Rapid Suture — that is a separate ability from the L3 feature.)

**Shield Bearer**
*Requires: Shield proficiency.*

While wielding a shield, you can use your **reaction** to grant an **adjacent ally** (within 5 feet) **+2 to their Defense Value** against one attack. You interpose your shield between the attacker and your ally.

**1/short rest:** When you or an **adjacent ally** would take damage from an **area effect** (spell, grenade, environmental hazard, explosion), you can **halve the damage** dealt to one creature by shielding them with your body. You take the other half of the damage (this damage cannot be reduced or redirected — it ignores your resistances, damage reduction, temporary HP, and any other mitigation. You are physically shielding your ally — your defenses don't protect you from damage you're deliberately absorbing). You must be wielding a shield to use this ability.

*Shield Bearer is the bodyguard talent. The reaction +2 DV is intentionally weaker than the Warrior Vanguard's Shield Wall (which adds the shield's full bonus and works at 10-foot range). Shield Bearer is universal — anyone with a shield can protect an ally — but the Warrior does it better. That's appropriate build hierarchy. The area-damage-sharing mechanic is the unique selling point: throw yourself on the grenade, shield your ally from the fireball.*

> **Interaction with Warrior Vanguard Shield Wall (L6):** Shield Wall grants the shield's bonus to ally DV at 10-foot range. Shield Bearer grants a flat +2 DV at 5-foot range. Both cost a reaction, so only one can be used per round. Shield Wall is stronger for single targeted attacks; Shield Bearer's area-damage-sharing has no Warrior equivalent.

**Polearm Sentinel**

*Requires: Proficiency with a weapon that has the Reach property.*

You fight from behind a wall of steel — or rebar, or sharpened pipe. Your weapon's length is your advantage: enemies have to cross a killing zone to reach you, and you make them pay for every step.

- **Entering Reach:** When a creature **enters your reach** (moves from outside your reach to inside it), you can make an **opportunity attack** against them using your reaction, as normal for opportunity attacks. This is in addition to the standard opportunity attack triggered when a creature **leaves** your reach. Each creature can trigger this entering-reach attack no more than once per round.
- **Repelling Strike:** Once per turn, when you hit a creature with a reach weapon attack (including opportunity attacks), you can push the target **5 feet directly away from you**. The target must be **Large or smaller**. No save required. Huge or larger creatures are immune.

*Polearm Sentinel is the zone-control talent. The entering-reach opportunity attack turns your 10-foot reach into a killing zone — enemies take damage just for approaching. The tactical decision is real: you have one reaction per round, and entering-reach OAs compete with leaving-reach OAs, Reactive Guard, and other reaction abilities. Do you punish the enemy for approaching or for retreating? Repelling Strike adds battlefield control without adding damage — you push enemies away, maintaining your distance advantage. Combined with Sentinel (which reduces speed to 0 on OA hit), this creates the classic polearm lockdown: enter reach → OA → hit → speed 0 → stuck at 10 feet. This two-talent investment is strong but counterplayed by ranged attacks, forced movement, teleportation, and Huge+ creatures.*

> **Interaction with Sentinel:** Sentinel + Polearm Sentinel creates polearm lockdown (enter reach → OA → hit → speed 0 → stuck at 10 ft). Two-talent investment. Counterplayed by ranged attacks, forced movement, teleportation, Huge+ creatures. If Repelling Strike pushes a creature outside your reach and they re-enter on the same turn, the once-per-creature-per-round limit still applies — no second entering-reach attack against that creature this round.

> **Interaction with Colossus:** Both push on hit, but only one push per attack. Colossus pushes any direction; Repelling Strike pushes directly away only. DR bypass from Colossus applies normally to reach weapons with the Heavy property.

### Support Talents

**Inspiring Presence**
When an **ally within 30 feet** of you succeeds on a saving throw to end a condition on themselves (Frightened, Charmed, Stunned, Paralyzed, or Dazed), choose one **other ally within 30 feet** of you who is currently suffering from the **same condition**. That ally can immediately repeat their saving throw against the condition with **advantage**.

**1/short rest:** When an ally within 30 feet of you drops to **0 HP**, you can use your **reaction** to grant them **advantage on their first death saving throw**.

*Inspiring Presence creates a "rally" effect that doesn't require spending actions — it triggers reactively off ally successes. This is fundamentally different from the Diplomat's Commanding Presence (proactive +1d4 buff), Inspire (temp HP), and Rally Cry (direct healing + condition removal). The Diplomat removes conditions; Inspiring Presence helps allies save against conditions themselves. The Diplomat acts; Inspiring Presence reacts.*

> **Note:** The condition re-save triggers only when an ally succeeds on a *saving throw* to end the condition. It does not trigger when a condition ends due to duration expiring, being removed by a spell or ability (such as Diplomat's Rally Cry), or being cured by a healing item.

### Stealth Talents

**Fade to Black**
When you take the **Hide action** in combat and succeed on the Stealth check, you can **move up to half your speed** as part of the same action without breaking stealth. This movement follows all normal stealth rules — you must end your movement in a position where you have cover or concealment, and creatures can still detect you with Perception checks against your Stealth result.

Additionally, when you are **hidden** and an enemy moves within **5 feet** of your hiding spot, you can use your **reaction** to move **5 feet** to an adjacent space that still provides cover or concealment, without revealing yourself. This reactive repositioning can only occur **once per round**.

*Requires: Stealth proficiency.*

> **Interaction with Operative Shadow Step:** Shadow Step replaces the movement granted by Fade to Black — if you have both, use Shadow Step (it's better). Fade to Black's reactive 5-ft repositioning still functions independently and is useful for any character.

---

**Quiet Approach**
While traveling overland at **Fast pace** (see **Exploration & Survival**), you can perform the **Scout Ahead (AGI)** activity, which is normally prohibited at Fast pace. You still make the Stealth check at the terrain's normal DC. At **Cautious** or **Normal** pace, you gain **advantage** on Scout Ahead (AGI) checks instead.

Additionally, you have **advantage on Stealth checks** to avoid detection by creatures while the party is **resting**. You're the one who hears the snapping twig at 3 AM and wakes everyone before the ambush lands.

When your party attempts to **surprise** a group of creatures, you gain **+2 to your own Stealth check** for the surprise attempt. Your experience moving quietly means you know which floorboards creak, which branches snap, and which route keeps the wind at your back.

*Requires: Stealth proficiency.*

---

**Ambush Predator**
When you make an attack against a creature that **has not yet acted** in the current combat (first round only — either the creature was surprised, or you beat its initiative and it hasn't taken a turn yet), you deal an additional **1d6 damage** on a hit. This bonus applies to the **first attack you make** against such a creature each combat, not every attack.

If you were **hidden** (the target was unaware of you) when you made the attack, the target also has **disadvantage on its first attack roll** on its next turn. The sudden violence disorients them — they're reacting, not fighting.

*Requires: Stealth proficiency, Level 7+.*

> **Interaction with Operative Sneak Attack:** Ambush Predator's 1d6 damage stacks with Sneak Attack (different sources, different triggers). However, Ambush Predator applies only on the first attack against a creature that hasn't acted, while Sneak Attack triggers on every qualifying hit. The practical overlap is one attack per combat.

### Exploration Talents

**Wasteland Forager**
You have a knack for finding useful things where others see only wreckage. When you search an area (10 minutes or during a short rest), you find **usable equipment one tier higher** than the location's standard loot table would normally provide (maximum Tier 3 above your level's expected equipment tier). Additionally:

- After any combat encounter, you automatically recover **1 piece of ammunition** per enemy defeated (matching any ranged weapon in the party) and **1d4 credits × your proficiency bonus** in salvageable materials.
- You have **advantage on Survival checks** to find food, water, and shelter.
- When you find a broken or damaged item (Tier 1-3), you can spend **10 minutes** to assess whether it's repairable. If it is, the repair DC is reduced by **2** for you or any ally attempting the repair.
- **1/long rest:** When searching a ruin, wreckage, or abandoned structure, you can declare you're looking for something specific (a weapon type, medical supplies, a specific component). Make a **Survival check (DC 15)**. On a success, you find it or the closest available equivalent. On a failure, the GM describes what you find instead.

> **Why take this over Salvage Expert?** Salvage Expert improves the *quantity* of salvage. Wasteland Forager improves the *quality* --- finding Tier 2 loot in a Tier 1 zone, recovering ammo passively, and targeting specific items. Both are valid; Wasteland Forager shines in ruin delving and extended expeditions.

**Linguist**
You are a communication specialist --- fluent in the fractured tongues of the Wasteland and the dead languages of the old world. You learn **3 languages or cipher systems** (including pre-Fall programming languages and alien script families). Additionally:

- You can **read and translate pre-Fall technical documents** (equipment manuals, research notes, data core readouts) without a Technology check. This grants you or an ally **advantage on one Technology or Science check** related to the translated material within the next hour.
- When you successfully decode a message, you learn one additional piece of **contextual information**: who wrote it, when, the author's emotional state, or whether it has been altered.
- **Immersion learning:** When you spend at least **8 hours** interacting with speakers of an unknown language (during a short rest or downtime), you gain **basic proficiency** in that language --- enough for simple communication. Full fluency requires 1 week of immersion (instead of the normal 1-month downtime training).
- **1/short rest:** When you hear a creature speak for at least **1 minute**, make an **INT check (DC 14)** to identify their **faction affiliation**, **regional origin**, and **social class** from speech patterns, idioms, and vocabulary. On a success by 5+, you also learn whether they are being **deceptive about their identity**. On a success by 10+, you learn one specific **intention or agenda** they're pursuing.
- You have **advantage on Persuasion and Deception checks** when communicating with creatures in their native language (not Common/Trade).

> **Why take this over Silver-Tongued Devil?** Silver-Tongued Devil is a raw social bonus. Linguist provides utility across exploration (translating data cores for tech bonuses), social encounters (native-language advantage, deception detection), and intelligence gathering (faction identification). In a world of competing factions and pre-Fall ruins full of encrypted data, the communication specialist is never useless.

**Endurance Runner**
Your body has adapted to the punishing demands of Wasteland travel. You are the tireless wastelander --- the one who keeps moving when everyone else stops.

- You can march for **16 hours** before making exhaustion saves (instead of 8). You require **half the normal food and water**.
- Your **carrying capacity increases by 50%** (not doubled --- adjusted to prevent trivializing equipment weight choices).
- You have **advantage on Fortitude saves** against environmental hazards: Thermal Extremes, Toxic Atmosphere, Radiation Exposure, and altitude sickness.
- You **ignore difficult terrain** caused by natural environments (rubble, mud, sand, undergrowth, shallow water) during overland travel. You still suffer difficult terrain penalties in combat.
- When you take a short rest in **hostile or unstable conditions** (contaminated area, extreme weather, contested territory --- but NOT during active combat), you gain the **full benefit of the short rest** even if conditions would normally prevent or penalize resting.

> **Why take this over Tough or Durable?** Tough and Durable increase your combat survivability. Endurance Runner increases your *campaign* survivability --- extended march hours mean more ground covered, environmental hazard advantage means you can delve deeper into dangerous ruins, and the carrying capacity means you bring more supplies (or bring back more loot).

**Field Medic**
You can stabilize a dying creature as a free action instead of an action. When you use a medical kit, the target regains 1d6 additional HP. This stacks with Medic features.

### Skill Talents

**Expertise**
Choose one skill you are proficient in. Your proficiency bonus is doubled for that skill. You can take this Talent multiple times, choosing a different skill each time.

**Jack of All Trades**
Add half your proficiency bonus (rounded down) to any ability check that doesn't already include your proficiency bonus.

**1/short rest:** When you **fail** an ability check you are **not proficient in**, you can reroll that check using your **full proficiency bonus** instead of half. This represents a flash of desperate competence — you recall a half-remembered technique, improvise a solution, or simply get lucky under pressure.

When you succeed on an ability check you are not proficient in **by 5 or more**, you gain **temporary proficiency** in that skill until your next short rest. You add your full proficiency bonus (not half) to subsequent checks with that skill.

*Jack of All Trades is the generalist's answer to Expertise. An Expert doubles down on what they're best at; a Jack covers every gap. The reroll gives it real teeth — comparable to Reliable's minimum-10, but for skills you aren't proficient in. The temporary proficiency reward creates a "learn by doing" fantasy where success breeds competence. In Ashfall's skill-heavy exploration pillar, where parties regularly face checks across 21 skills, the character who can do anything passably is as valuable as the character who does one thing perfectly.*

**Reliable**
Choose one skill you are proficient in. Whenever you make a check with that skill, treat any d20 roll of 9 or lower as a 10. You can take this Talent multiple times, choosing a different skill each time.

**Quick Study**
During a **short rest**, you can swap one skill proficiency for another. The new proficiency lasts until your next long rest, when it reverts.

**1/long rest:** As a **reaction** when you fail a skill check, you can immediately swap one of your existing skill proficiencies for the skill you just failed. The failed check is **not** rerolled — you don't retroactively succeed — but you now have proficiency in that skill for future checks. The first check you make with a swapped skill gains **advantage** (representing intense focus on the new discipline).

*Quick Study is the reactive counterpart to Jack of All Trades' proactive coverage. Where Jack passively covers every gap with half proficiency, Quick Study lets you fully commit to a new skill when the situation demands it — at the cost of an existing one. The reaction trigger means you don't need to predict what you'll need during a rest; you adapt when you discover the gap. The advantage on your first check with the swapped skill rewards the adaptation. The long rest limit (1/week in Ashfall's gritty rest economy) ensures this is a meaningful decision, not a free respec.*

### Social Talents

**Silver-Tongued Devil**
When you fail a Persuasion or Deception check by **4 or less**, you can choose to treat it as a success instead. You recover gracefully — reframing a clumsy lie, redirecting a conversation that was going south, or finding the right words just in time. This ability can be used **once per short rest**.

**Intimidating Presence**
As **1 action**, choose one creature within **30 feet** that can see or hear you. The target must make a **Will save** (DC = 8 + your proficiency bonus + your PRE modifier) or become **frightened** of you for **1 minute**. A frightened creature can repeat the save at the end of each of its turns, ending the effect on a success. Creatures that succeed on the save or end the effect are immune to your Intimidating Presence for 24 hours. This ability has no effect on creatures immune to the frightened condition.

**Negotiator**
During a **short rest** (8 hours), you can spend time negotiating with a **captured, willing, or neutral NPC**. Make a **Persuasion check** (DC set by the GM based on the NPC's disposition and stakes). On success, choose one:
- Learn **one piece of useful information** the NPC knows (guard rotations, supply caches, faction plans, a name)
- Shift the NPC's disposition **one step toward friendly** (hostile → unfriendly → neutral → friendly)

On a critical success (beat the DC by 10 or more), you gain **both** benefits. The NPC must be able to communicate with you (shared language or other means). You can negotiate with the same NPC only **once per short rest** — repeated pressure yields diminishing returns.

**Faction Insider**
Choose one of the six major factions: **Hearthstone Compact**, **Iron Wolves**, **Convergence of the Lit Path**, **Ashen Veil**, **Dynaxis Solutions**, or **Kethara Collective**. You gain the following benefits when dealing with members of that faction:
- **Advantage** on Persuasion, Deception, and Insight checks targeting faction members
- You learn their faction's **codes, signals, and recognition signs** and can identify faction members on sight (Perception DC 12)
- You know the faction's **general organizational structure**, current leadership, and major ongoing operations (GM provides details appropriate to your character's knowledge level)

You can take this talent multiple times, choosing a different faction each time. Each additional faction costs a separate talent slot.

### Knowledge & Investigation

**Field Analyst**

*Requires: Proficiency in at least one of Investigation, Science, Arcana, or Technology.*

You don't just find things — you understand them. Where others see a locked door, you see a manufacturer's mark, an installation date, and a maintenance schedule that tells you exactly when the lock was last rekeyed.

When you succeed on an **Investigation**, **Science**, **Arcana**, or **Technology** check to examine a creature, object, or location, the GM provides **one additional piece of mechanical information** beyond what the check normally reveals. Examples:

- **Creature:** One damage resistance or vulnerability, or whether it has legendary resistances
- **Object:** Its equipment tier, approximate credit value, or whether it's trapped/enchanted
- **Location:** Hidden exits, structural weak points, or which faction built/modified it

**1/short rest — Tactical Briefing:** After learning information through Field Analyst, you can spend **1 minute** briefing allies within 30 feet about the analyzed subject. Each briefed ally gains **+1 to their next attack roll, skill check, or saving throw** involving the analyzed subject. This bonus lasts for 1 hour or until used.

*Field Analyst is the "I studied the enemy" talent. It converts INT investment into team-wide benefit — the analyst who spends 10 minutes examining a ruin entrance and then tells the party "the hinges are corroded, the lock is Tier 2, there's a pressure plate 3 feet inside, and the walls are load-bearing at the north corner" is worth their weight in ammunition. Tactical Briefing is modest (+1 to one roll) but applies to the whole party, creating meaningful returns on time invested.*

---

**Pattern Recognition**

*Requires: Proficiency in at least two INT-based skills (Investigation, Science, Arcana, Technology, Engineering).*

You see connections where others see coincidence. The same alloy in two different weapons. The same construction technique in two different buildings. The same chemical signature in two different poisons. Your mind builds maps of relationships that others don't even know exist.

**1/long rest:** When you succeed on any **INT-based skill check** by **5 or more**, you may ask the GM **one yes/no question** about the subject that you haven't directly observed. The question must be something that could reasonably be deduced from the evidence — not a guess, but an inference.

Examples:
- *"Was this weapon modified by the same person who built the device we found at the relay station?"*
- *"Is this toxin also present in the settlement's water supply?"*
- *"Was this door opened from the inside?"*
- *"Is this technology from the same faction that attacked the convoy?"*

The GM answers truthfully. If the answer cannot be determined from the available evidence, the GM says "insufficient data" — the question is not consumed.

*Pattern Recognition is the detective's talent. It generates story from mechanical investment — the player who examines a body and asks "was this the same killer as the one in Sector 7?" is driving narrative through their build choices. The 1/long rest limit (1/week in Ashfall) makes each question feel weighty, and the "succeed by 5+" gate ensures it only triggers on genuinely good rolls.*

---

**Rapid Assessment**

*Requires: Proficiency in at least one of Perception, Insight, Science, or Arcana.*

In combat, information is ammunition. While others swing first and ask questions later, you take one look at an enemy and know exactly where to tell your allies to hit.

As **1 action**, choose one creature within **60 feet** that you can see. Make an **INT-based skill check** (Investigation, Science, Arcana, or Xenology if available — whichever is most relevant, GM's choice) against **DC 10 + the creature's CR** (minimum DC 12). On success, you learn:

- The target's **highest and lowest attributes** (by name, not value)
- **One damage vulnerability or resistance** (if any; the GM chooses which to reveal)
- Whether the target is currently affected by **any conditions**

**Ally benefit:** The first ally (not you) who **acts on your assessment** within 1 round gains **advantage** on that action — attacking the revealed vulnerability, targeting the weak save, or exploiting the condition. This benefit can be used once per assessment.

**Usable:** Equal to your **INT modifier** times per short rest (minimum 1).

**Interaction with Assess Target and Spotter:** Rapid Assessment provides a different benefit type (advantage to an ally's action) than Assess Target (+2 to your own attacks) or Spotter (target designation). These abilities do not overlap — a target can be Assessed by an Infiltrator, designated by a Spotter, and analyzed via Rapid Assessment simultaneously, with each providing its distinct benefit.

*Rapid Assessment is deliberately different from the Infiltrator's Assess Target. Assess Target is a self-benefit (+2 to YOUR attacks, unlimited uses, reveals one fact). Rapid Assessment is a team-benefit (advantage to ONE ALLY's action, limited uses, reveals a stat snapshot). An Infiltrator with Assess Target and a Technician with Rapid Assessment complement each other — the Infiltrator marks the target for personal exploitation, the Technician calls out the weakness for the whole party.*

---

### Crafting & Tech Talents

**Improvised Engineer**
You can craft items of **Tier 1-2** without access to a workshop — any location will do, provided you have the raw materials. Your crafting time for Tier 1-2 items is **halved**. Additionally, once per short rest, you can create a **single-use improvised tool or simple weapon** (Tier 1, lasts 1 hour) from available scrap with **no check required**. This improvised creation falls apart after one use or when the duration ends.

**Salvage Expert**
When you spend at least 10 minutes searching a **ruin, wreck, or battlefield**, you find **2d6 × 5 credits** worth of salvage (in addition to any other search results). You can **identify the function of pre-war technology** with a Technology check (DC 12, no proficiency required) — you recognize manufacturer marks, model numbers, and general function even without technical training. Additionally, when you defeat enemies, you can spend 5 minutes to **strip their equipment for parts** worth **25% of its base value** (normally unsalvageable destroyed equipment yields nothing).

**Tech Recycler**
When an item you own is **destroyed, broken, or becomes obsolete**, you recover **50% of its credit value** in reusable components (normally 0%). These components can be applied as a discount on your next crafting project or sold at full recovered value. Additionally, during a short rest, you can spend 1 hour to **upgrade one piece of Tier 1 equipment to Tier 2**, paying only **50% of the Tier 2 price** in materials (instead of the full cost). You must have the materials on hand.

**Drone Handler**
*Requires: Proficiency in Technology.*

When you issue a **simple command** to a controlled device you own or have hacked (drone, turret, server process), you can do so as a **free interaction** on your turn (no action required). Simple commands are: move to a location, attack a designated target, hold position, follow you, or return to you. **Complex commands** — activate a special ability, change behavior mode, execute a multi-step sequence, or disengage from combat — still require **1 action**.

Your controlled devices gain **+2 to saving throws** against hacking attempts, EMP effects, and psionic interference. You are immediately aware if a device you control is targeted by a hacking attempt (you feel the intrusion through your data link).

*Drone Handler solves the "pet tax" problem for characters with controlled devices. In a 3-action economy, spending 1 action per turn on "tell drone to attack" means 33% of your turn is spent on bookkeeping. Drone Handler makes the routine commands free. The Technician gets free drone commands at L5 — but only for their Drone Companion. Drone Handler works with any controlled device: a hacked security turret, a crafted surveillance drone, a server process running overwatch.*

> **Interaction with Technician L5 (free drone commands):** The Technician's L5 feature applies to their Drone Companion specifically and is more powerful (grants the drone 3 actions). Drone Handler applies to any controlled device and only makes simple commands free. A Technician with both features has their Technician's drone at full power AND can command other devices freely. The +2 saves and intrusion awareness apply to all controlled devices including the Technician's drone.

---

## Build Talents

Each build has 6 Talents that enhance or modify existing build features. These follow the 13th Age principle: **Talents upgrade what you already do rather than adding unrelated abilities.**

### Warrior Talents

**Aggressive Momentum**
*Enhances: Combat Stance*
While in Aggressive Stance, when you reduce a creature to 0 HP, you can move up to 15 ft and make one additional melee attack as a free action.

**Iron Fortress**
*Enhances: Combat Stance*
While in Defensive Stance, you can use Bodyguard without spending your reaction. You still can only use Bodyguard once per round.

**Relentless Second Wind**
*Enhances: Second Wind*
Second Wind no longer costs an action — it costs a bonus action instead. Additionally, if you are bloodied when you use Second Wind, roll 3d10 instead of 2d10.

**Retaliatory Fury**
*Enhances: Retaliation Strike*
Retaliation Strike can now target the attacker (not just a different enemy). Additionally, if your Retaliation Strike drops a creature to 0 HP, you regain one use of Retaliation Strike.

**Unyielding Grit**
*Enhances: Grit*
While Grit is active — that is, whenever you are at or below half HP — you also gain advantage on Fortitude saves against any effect. This stacks with Grit's damage reduction to make you exceptionally hard to put down in your most desperate moments: the hits land lighter, and your will holds against anything that tries to break it.

Additionally, once per long rest, when you would be reduced to 0 HP, you drop to 1 HP instead. If Grit was not already active, it activates immediately (your HP is now at or below half). This effect does not trigger again until after a long rest.

**Weapon Bond**
*Enhances: Weapon Specialization*
Your chosen weapon group gains +1 to attack rolls (in addition to the existing damage bonus). When you roll a natural 1 on an attack with your specialized weapon, you can reroll it (must use new result).

### Gunslinger Talents

**Dead Eye**
*Enhances: Trick Shot*
Trick Shots no longer have disadvantage at long range. Additionally, when you score a critical hit with a Trick Shot, you regain one use of Trick Shot.

**Quick Draw**
*Enhances: Gunslinger Quick Draw proficiency milestone*
You can draw, holster, or reload a firearm as a free action (no action cost). On your first turn of combat, you gain advantage on your first attack roll.

**Moving Target**
*Enhances: Evasive Maneuvers*
When you use your movement, until the start of your next turn, attack rolls against you have disadvantage if you moved at least 20 ft. Requires: Evasive Maneuvers.

**Custom Rounds**
*Enhances: Gunsmith tree*
During a short rest, you can craft 6 specialty rounds (choose: incendiary +1d4 fire, hollow-point +2 damage vs unarmored, or tracer which negates cover). Requires: Field Maintenance.

**Overwatch Specialist**
*Enhances: Called Shot*
When you use your action to Ready an attack, the readied attack deals an additional 1d10 damage and the target must make a Fortitude save (DC 8 + your proficiency + AGI mod) or be stunned until end of their next turn.

**Gun Kata**
*Enhances: Skirmisher tree*
You can make ranged attacks within 5 ft without disadvantage. When you hit a creature within 5 ft with a ranged weapon, you can push them 10 ft away from you.

### Mystic Talents

**Spell Battery**
*Enhances: Arcane Recovery*
Your Arcane Recovery now recovers spell slot levels equal to your full Mystic level (instead of half, rounded up). Usable once per short rest as normal.

**Metamagic: Extend**
*Enhances: Spell Crafting*
When you cast a spell with a duration of 1 minute or longer, you can spend a spell slot one level higher than the spell requires to double its duration.

**Metamagic: Quicken**
*Enhances: Spell Crafting*
Once per short rest, you can cast a spell that normally takes 1 action as a bonus action instead. The spell must be 3rd level or lower.

**Arcane Resilience**
*Enhances: Arcane Ward*
Your Arcane Ward maximum increases to 3x your Mystic level (instead of 2x). When your Ward absorbs all damage from an attack, the attacker takes force damage equal to your INT modifier.

**Focused Destruction**
*Enhances: Cantrips*
Your cantrips deal an additional damage die at levels where they would normally scale (effectively gaining the next tier's damage one level early). Additionally, choose one cantrip: it ignores resistance.

**Ritual Master**
*Enhances: Ritual Casting*
Ritual casting takes 10 minutes per spell level (instead of 1 hour). You can ritual cast one spell you don't know per long rest by making an INT check DC 10 + spell level.

### Technician Talents

**Drone Commander**
*Enhances: Drone Companion*
Your drone gains +2 HP per your character level (retroactive). It can now take reactions (one per round). When your drone is destroyed, you can rebuild it during a short rest (instead of requiring a long rest).

**Overclock Protocol**
*Enhances: Neural Interface*
When you use Overclock, your drone gains an additional +1d6 damage on all attacks (instead of just acting twice). Overclock's duration extends to 2 minutes (instead of 1 minute).

**Gadget Savant**
*Enhances: Technology tree*
You can maintain 3 active gadgets simultaneously (instead of 2). Gadgets you build have +2 to their save DCs.

**Remote Hacker**
*Enhances: Technology tree*
Your hacking range doubles. When you successfully hack a system, you can choose to set a delayed trigger (activates at a time you specify within 1 hour). Requires: System Breach.

**Augment Specialist**
*Enhances: Technology tree*
Augmentations you install reduce Humanity by 1 less (minimum 1 per augment). You can have one additional augmentation beyond the normal limit.

**Jury Rig**
*Enhances: Rapid Assembly*
Once per short rest, you can jury-rig a temporary device that mimics any Tier 1 gadget or tool for 10 minutes. It falls apart after use. Requires: Rapid Assembly.

### Medic Talents

**Combat Medic**
*Enhances: Rapid Suture*
Rapid Suture can now be used as a bonus action (instead of 1 action). The target gains temp HP equal to your WIS modifier in addition to the healing. Requires: Rapid Suture.

**Preventive Care**
*Enhances: Protective Injection*
Protective Injection now grants temp HP equal to your WIS mod + proficiency bonus (instead of just WIS mod). Temp HP from your injections lasts until the next long rest. Requires: Protective Injection.

**Adrenaline Surge**
*Enhances: Combat Stimulants*
When you administer Combat Stimulants, the target also gains +10 ft speed and advantage on Reflex saves for 1 minute.

**Triage Expert**
*Enhances: Mass Triage*
Mass Triage can now affect 3 allies simultaneously (instead of 2). Each target heals an additional 1d8. Requires: Mass Triage.

**Pharmacological Genius**
*Enhances: Medicine tree*
Stims and poisons you craft have +2 to their save DCs. You can craft double the normal quantity during a short rest.

**Vital Signs Monitor**
*Enhances: Medicine tree*
You always know the current HP (exact number) of allies within 60 ft. When an ally within 60 ft drops to 0 HP, you can use your reaction to move up to your speed toward them and stabilize them (if you reach them).

### Operative Talents

**Shadow Step**
*Enhances: Cunning Action*
When you use Cunning Action to Hide and succeed, you can teleport up to 15 ft to an unoccupied space in dim light or darkness that you can see.

**Exploit Weakness**
*Enhances: Sneak Attack*
When you deal Sneak Attack damage, choose one: the target has disadvantage on its next attack roll, OR the target's speed is reduced by 15 ft until the start of your next turn.

**Vanishing Act**
*Enhances: Ghost Strike*
After using Ghost Strike, you can immediately use Cunning Action to Hide as a free action (no action cost). If you succeed, you are hidden again before the target can react.

**Trap Sense**
*Enhances: Stealth & Subterfuge tree*
You have advantage on saves against traps and hazards. You can detect traps within 10 ft automatically (no check required). You can disarm traps as a bonus action instead of an action.

**Uncanny Awareness**
*Enhances: Uncanny Dodge*
Uncanny Dodge can now be used against attacks you cannot see (removing the visibility requirement). Additionally, when you use Uncanny Dodge, you can move 5 ft without provoking opportunity attacks.

**Perfect Timing**
*Enhances: Expertise*
Choose one of your Expertise skills. When you make a check with that skill and the total is 20 or higher, the GM reveals one additional piece of information beyond what the check would normally provide.

### Diplomat Talents

**Rallying Inspiration**
*Enhances: Inspire*
When you use Inspire, affected allies also gain +1d4 to their next damage roll. Additionally, Inspire's temp HP increases by your proficiency bonus.

**Commanding Voice**
*Enhances: Commanding Presence*
Commanding Presence die increases from d4 to d6. When the ally uses the die and rolls a 6, the die is not expended (they keep it). Range increases to 60 ft.

**Diplomatic Immunity**
*Enhances: Silver Tongue*
Silver Tongue now works on every conversation (not just the first). Additionally, when you succeed on a Persuasion or Deception check by 5 or more, the target treats you as friendly for 1 hour.

**Shield of Words**
*Enhances: Duck and Cover*
When you use Duck and Cover, one ally within 10 ft also halves the damage from the same source (if applicable). Additionally, Duck and Cover regains one use when you roll initiative.

**Crisis Leader**
*Enhances: Rally Cry*
Rally Cry can now be used once per short rest (instead of once per long rest). Additionally, when you use Rally Cry, you can choose to forgo the healing to instead grant **one ally** within range an additional action on their next turn.

**Read the Battlefield**
*Enhances: Read the Room*
Read the Room now works in combat without requiring 1 round of observation. On success, you learn the target's current HP range (full/bloodied/near-death), its highest save, and its lowest save.

### Channeler Talents

**Divine Conduit**
*Enhances: Channel Energy*
Channel Energy heals an additional 1d8. When you use Channel Energy to deal damage, the damage type can be radiant or necrotic (your choice each time).

**Battle Hymn**
*Enhances: Divine Channeling tree*
When you hit with a melee attack enhanced by Divine Strike, you regain HP equal to half the radiant/necrotic damage dealt. Requires: Divine Strike.

**Spirit Shield**
*Enhances: Divine Channeling tree*
As a reaction, you can summon a spectral shield that grants +3 DV to you or an ally within 30 ft until the start of your next turn. Uses: WIS mod per short rest.

**Resolute Faith**
*Enhances: Divine Channeling tree*
When you succeed on a saving throw, you gain temp HP equal to your WIS modifier. When you critically succeed (beat DC by 10+), you can immediately use Channel Energy as a free action.

**Empowered Smite**
*Enhances: Divine Strike*
When you expend a spell slot to deal additional damage on a melee hit, the damage increases by 1d8 per slot level (instead of the base scaling). The target must make a Fortitude save (DC 8 + your proficiency bonus + your Wisdom modifier) or be knocked prone.

**Shared Resilience**
*Enhances: Iron Will*
Your Iron Will protection extends to all allies within 15 ft of you — they gain advantage on saves against being frightened or charmed, and cannot be magically put to sleep while within range. Requires: Iron Will.

---

### Scavenger Talents

**Resourceful Combatant**
*Enhances: Scrounger's Instinct*
Your eye for useful materials extends to the heat of battle. When you roll initiative, you can immediately identify one **environmental object** within 30 feet that could be used as an improvised weapon or tactical advantage — the GM describes it. Additionally, your automatic salvage yield after combat increases to **2d4 Salvage** (instead of 1d4). Your instincts work faster under pressure.

**Junkyard Weaponmaster**
*Enhances: Improvised Arsenal*
Improvised weapons you wield gain one **weapon property** of your choice each time you pick one up: **finesse**, **reach**, or **versatile (1d10)**. Choose the property when you draw or pick up the weapon — it reflects how you're using it (a length of chain has reach; a broken blade has finesse; a two-handed girder is versatile). Additionally, your improvised weapons count as **magical** for the purpose of overcoming resistance and immunity to nonmagical damage. You've transcended junk — in your hands, garbage is as deadly as a master-forged blade.

**Bottomless Pockets**
*Enhances: Salvage Dice*
Your Salvage Dice pool increases by an amount equal to your **proficiency bonus** (minimum pool size 5). Additionally, when you finish a short rest, if your pool is already full, you can stockpile **2 excess Salvage Dice** that persist until spent. You always have something tucked away.

**Makeshift Specialist**
*Enhances: Makeshift Solution*
Your Makeshift Solutions are built tougher and work better. Each option improves:
- **Improvised Cover:** Provides **three-quarters cover (+5 DV)** instead of half cover. HP increases to 20.
- **Caltrops & Hazards:** Area increases to a **15-foot square** and damage increases to **2d6 piercing**.
- **Quick Patch:** Healing increases to **2d6 + END modifier** and removes one of the following conditions: blinded, deafened, or poisoned.

Additionally, once per short rest, you can use Makeshift Solution as a **free action** instead of spending 1 action.

**Scrapyard Fury**
*Enhances: Scrapyard Strike*
When you score a **critical hit** with an improvised or thrown weapon that includes Scrapyard Strike, you apply **two rider effects** instead of one (the target must save against each separately). Additionally, when your Scrapyard Strike rider effect **succeeds** (target fails its save), your next attack against that target before the end of your next turn has **advantage**. You capitalize on the chaos you create.

**Adaptive Ingenuity**
*Enhances: Wasteland Ingenuity*
When you use Wasteland Ingenuity, you can choose **two different options** from the list instead of one (spending 3 Salvage Dice total — not 6). Each option resolves separately. Additionally, your Field Innovation creations last for **10 minutes** instead of functioning once. Your capstone improvisations are so effective they surprise even you.

---

### Infiltrator Talents

**Master Analyst**
*Enhances: Assess Target*
When you Assess a target, you learn **two facts** instead of one. Additionally, your Assessed condition's bonus increases to **+3 to attack rolls** (instead of +2) against targets you have Assessed for at least 1 minute. Prolonged observation yields superior intelligence.

**Deep Reserve**
*Enhances: Intel Dice*
Your Intel Dice pool increases by your **proficiency bonus** (minimum pool size 5). Additionally, when you roll an Intel Die and the result is a 1, you can reroll it once (keeping the second result). Your preparations are more thorough than anyone expects.

**Prepared for Everything**
*Enhances: Contingency*
Contingency gains a fifth option: **"I set a trap here."** When combat begins in a location you've visited before (GM confirmation), you can declare that you previously planted a trap — one creature of your choice within 30 ft must make a Reflex save (DC 8 + prof + INT) or take 2d6 damage and be knocked prone. Additionally, your first free Contingency use each short rest does not require a reaction — it can be used as a free action on any turn.

**Surgical Strike**
*Enhances: Exploit Weakness*
When you use Exploit Weakness against a target that has been Assessed for **3 or more rounds**, the bonus damage increases to **2d6** (instead of 1d6). Additionally, you gain a fourth rider option: **Crippling Strike** — the target's speed is reduced by half until the end of its next turn. Extended study yields devastating precision.

**Mastermind's Gambit**
*Enhances: Mastermind*
Once per long rest, you can use a Mastermind gambit **without spending Intel Dice** — you've been planning this since before the encounter began. Additionally, when you use Intel Briefing, the duration extends to **10 rounds** (1 minute) and affected allies also gain **+1 to DV** against your Assessed targets.

**Living Legend**
*Enhances: Cover Identity System*
You can maintain one **permanent cover identity** that cannot be blown by failed Deception checks — only by direct evidence (someone who knows the real person, documentary proof). Additionally, your cover identities can include **a specific faction affiliation** with appropriate rank, granting you access to faction resources and restricted areas as long as the cover holds. Creating a new cover identity takes **4 hours** instead of 1 day.

---

### Psion Talents

**Neural Overload**
*Enhances: Psi Strike*
When you are at **Strained Focus** (Focus 7+), your Psi Strike deals an additional **1d8 force damage**. Additionally, when your Psi Strike reduces a creature to 0 HP, your Focus decreases by 1 — the psychic feedback from the kill stabilizes your neural pathways momentarily.

**Backlash Mastery**
*Enhances: Focus*
Your Backlash Threshold increases by **+2** (to 12 + MIG modifier). Additionally, when you suffer Psionic Backlash, you can choose to remain conscious and not be stunned — but you take an additional **2d6 psychic damage** from the effort of maintaining control. You ride the edge of destruction with practiced discipline.

**Psionic Equilibrium**
*Enhances: Centering*
Your Centering die gains a **+1d4 bonus** (added to whatever your current Centering die is: 1d4+1d4 base, or 1d6+1d4 with Efficient Focus). Additionally, when you use Centering, you can choose to end **one additional condition** affecting you: poisoned, blinded, or deafened. Your mental control purges physical impairments through neural overrides.

**Discipline Mastery**
*Enhances: Discipline Surge*
Your Discipline Surge abilities gain +2 to their save DCs. Additionally, when you use a Surge ability, you can apply **one Psi Strike discipline modifier** to the Surge effect (e.g., Kinetic Wave also pushes targets 5 ft per Telekinesis, or Psychic Lance also reads a surface thought per Telepathy). Surge abilities generate only **+1 Focus** instead of +2.

**Psychic Armor**
*Enhances: Psionic Resilience*
You gain **immunity to external psychic damage** — psychic attacks from other creatures cannot harm you. Self-inflicted psionic damage (Backlash, Strained Focus self-damage, Warden's Psionic Aegis feedback) is unaffected by this immunity and functions normally. Additionally, when a creature within 30 ft attempts to read your thoughts, charm you, or frighten you and fails, the creature takes **psychic damage equal to your WIS modifier + proficiency bonus** from the mental backlash of striking your fortified mind.

**Controlled Burn**
*Enhances: Psionic Overcharge*
When you activate Psionic Overcharge, you can choose your starting Focus level: **any value from 5 to your Backlash Threshold - 1** (instead of being fixed at 7). Additionally, the duration extends to **4 rounds** (instead of 3), and you gain **resistance to psychic damage** for the duration. Overcharge's exhaustion can be removed with a **short rest** (instead of requiring a long rest). Focus resets to **3** (Calm) instead of 0 when Overcharge ends.

---

### Mutant Talents

**Predator Anatomy**
*Enhances: Mutagen Physiology*
Your natural weapons score critical hits on a roll of **19-20** (instead of only 20). Additionally, you can choose **two damage types** for each natural weapon attack instead of one (e.g., piercing + poison, slashing + acid). Your mutations have refined your killing anatomy to superhuman precision.

**Adaptive Genome**
*Enhances: Mutations*
You learn **one additional mutation** from the mutation list (total 4 known, or 6 with Evolved Biology). Additionally, when you take a short rest, you can **swap one known mutation** for a different mutation from the list — your biology is never static, constantly experimenting with new adaptations.

**Enduring Strain**
*Enhances: Strain Dice*
Your Strain Dice pool increases by your **END modifier** (effectively doubling END's contribution). Additionally, when you roll a Strain Die for Mutation Surge and the result is a 1 or 2, you can reroll it once (keeping the second result). Your body's reserves run deeper than anyone expects.

**Reactive Adaptation**
*Enhances: Adapt / Adaptive Response*
Your Adaptive Response now triggers **twice per damage type per encounter** instead of once. Additionally, when Adaptive Response triggers, you can immediately use **Adapt as a special reaction that does not consume your normal reaction for the round** (swapping one mutation) in response to the new threat — your biology reflexively reconfigures to counter what just hurt you.

**Stable Genome**
*Enhances: Adaptive Response / Feral Evolution*
You gain **resistance to self-inflicted damage** from your own build features (Unstable Mutation, Meltdown, etc.). Additionally, when Feral Evolution ends, you can make an **END save (DC 15)** — on success, you do not gain exhaustion. Your mutations have stabilized enough that transformation no longer tears you apart.

**Mutation Mastery**
*Enhances: Mutation Surge / Feral Evolution*
When you enter **Feral State** (via Feral Evolution), your natural weapon attacks apply **one surge rider of your choice for free** (no Strain Die cost) even on attacks that don't trigger Mutation Surge. Every hit carries biological devastation. Additionally, your Feral State duration extends to **2 minutes** (instead of 1 minute), and the exhaustion cost is reduced to **1 level only if the full duration expires** — if you end Feral State early (before 1 minute), you gain no exhaustion.

---

## Legendary Talents (Levels 18 and 19)

Legendary Talents represent the pinnacle of mortal capability. These are transformative abilities that redefine what a character can do.

**Prerequisite:** Character level 18. You gain one Legendary Talent at Level 18 and a second at Level 19.

**Indomitable Will**
Once per long rest, when you fail a saving throw, you can choose to succeed instead. Additionally, you are immune to the frightened and charmed conditions.

**Legendary Resilience**
Your HP maximum increases by 30. At the start of each of your turns, you regain HP equal to your proficiency bonus if you have at least 1 HP.

**Master of Arms**
You gain proficiency with all weapons and armor. Your weapon attacks score a critical hit on a roll of 19-20. If you already have expanded crit range, it expands by an additional 1.

**Arcane Supremacy**
*Requires: Spellcasting*
You regain all expended spell slots of 3rd level or lower when you finish a short rest. One cantrip of your choice can now be cast as a bonus action.

**Legendary Stealth**
*Requires: Stealth proficiency*
You can attempt to Hide even when only lightly obscured. When hidden, the first attack you make does not reveal your position (you remain hidden). You leave no tracks or scent.

**Battlefield Presence**
*Requires: Commanding Presence or Rally Cry*
Your Inspire and Commanding Presence features affect all allies within 120 ft. When you use an action to assist allies (Inspire, Rally Cry, Commanding Presence), you can take one additional action on the same turn.

**Mechanical Genius**
*Requires: Drone Companion or Technology tree*
Your drone (or primary construct) gains a second action on each of its turns. You can maintain 5 active gadgets simultaneously. Constructs you create have double their normal HP.

**Perfect Killer**
*Requires: Sneak Attack*
Your Sneak Attack damage increases by 2d6. When you reduce a creature to 0 HP, you can immediately take a Hide action as a free action and move up to half your speed.

---

**Nothing Is Wasted**
*Requires: Scavenger build, Level 18+, Wasteland Ingenuity feature*

Your understanding of materials has transcended conventional engineering. You see potential in everything — a handful of bolts, a shard of glass, a dead radio. At this level, your improvisation borders on the impossible.

- Your Salvage Dice upgrade from **d6 to d10**.
- When you roll the **maximum value** on a Salvage Die (10 on a d10), the die is not expended. It returns to your pool immediately.
- Once per long rest, you can spend **10 minutes and 2 Salvage Dice** to create any single piece of **non-augmentation equipment of Tier 3 or lower** from available junk and scrap (weapons, armor, gear, consumables, toolkits — not augmentations, which require surgical installation and Humanity cost). No crafting check is required — you simply build it. The item functions identically to the standard version but looks improvised (bolted plates, mismatched components, exposed wiring). The item lasts until your next long rest, after which it falls apart. You can maintain only one Nothing Is Wasted item at a time.
- Your Makeshift Solution options (Improvised Cover, Caltrops, Quick Patch) no longer cost Salvage Dice. They are free actions fueled by your instinctive understanding of materials.

*The Wasteland provides. You just have to listen.*

---

**The Long Game**
*Requires: Infiltrator build, Level 18+, Mastermind feature*

You don't react to situations — you've already prepared for them. Your tradecraft operates on a level that makes other operatives question whether you can see the future. You can't. You're just always, always thinking ahead.

- Your Intel Dice upgrade from **d6 to d8**.
- Once per long rest, you can declare a **retroactive preparation**. When confronted with a problem (a locked door, a hostile guard, an ambush, a missing key item), you declare that you prepared for this specific situation during a previous opportunity. Work with the GM to establish what you did: bribed a guard, planted a weapon, forged a document, mapped an escape route, poisoned a water supply. The preparation must be plausible given your character's recent movements and capabilities. The GM has final say on feasibility, but should err toward "yes" — you are a legendary infiltrator.
- Your **Contingency** feature (L2) gains a fifth option: **"This Was the Plan All Along."** When an ally within 60 feet fails a check, save, or attack roll, you can spend 1 Intel Die as a reaction to add the die result to their roll. You whisper instructions, signal a course correction, or reveal that the apparent failure was part of the strategy.
- All Investigation checks to see through your **Cover Identities** are made at **disadvantage**. Your covers are backed by planted evidence, rehearsed mannerisms, and networks of corroborating contacts built over months or years.

*"I had a plan for this. I have a plan for everything. The trick is making everyone else think they're improvising."*

---

**Event Horizon**
*Requires: Psion build, Level 18+, Psionic Overcharge feature*

Most Psions spend their careers managing Focus like a ticking bomb — always watching the number, always pulling back before Backlash. You've moved past that fear. Your mind has developed a gravitational pull of its own, bending psionic energy into stable orbits rather than letting it spiral into detonation. You don't manage Focus. Focus manages itself around you.

- Your **Backlash Threshold** permanently increases by **3** (from 10 + MIG mod to 13 + MIG mod). This gives you 3 additional Focus before Backlash triggers — roughly 2-3 more psionic actions in the Strained state.
- Once per long rest, when you would trigger **Psionic Backlash**, you can choose to **absorb the overload** instead. Your Focus resets to 0, but no Backlash event occurs — no AoE damage, no self-damage, no stun. The energy dissipates harmlessly as a visible shockwave of force that ruffles hair and rattles loose objects but deals no damage. You still lose all threshold bonuses.
- While in the **Strained** state (Focus 7+), you can **concentrate on two psionic effects simultaneously** instead of one. If you take damage, you make a single concentration save — failure ends both effects. This dual concentration ends immediately when you leave the Strained state.
- Your **Centering** action (L2) now restores **1d6 Focus** (instead of 1d4) and grants **advantage on your next psionic attack roll** within 1 round.

*There is a point — past the fear, past the pain, past the edge of what a mind is supposed to hold — where everything becomes still. The Backlash doesn't come. The power doesn't break. It just... orbits. That is the event horizon. You don't cross it. You become it.*

---

**Apex Genome**
*Requires: Mutant build, Level 18+, Feral Evolution feature*

Your body has finished arguing with itself. The mutations that once fought for dominance have reached equilibrium — a unified biological system that adapts faster than any individual mutation could. You are no longer a person with mutations. You are the mutation. The final form. The thing that evolution was always building toward.

- **All known mutations are always active.** You no longer need to choose which mutations are active — every mutation you know is active simultaneously. This supersedes the Third Slot skill tree ability. If you know 6 mutations (the maximum from the full list plus any gained through specializations), all 6 provide their passive benefits at all times. Your Adapt action (L2) is no longer needed for swapping and can instead be used to temporarily suppress a mutation for 1 round (useful if a mutation's passive would be detrimental in a specific situation).
- Your **Feral Evolution** (L5) no longer causes exhaustion when it ends. Your body has adapted to the transformation cycle — shifting into and out of feral state is as natural as breathing. The other penalties of Feral Evolution (disadvantage on INT/PRE checks) still apply during the transformation.
- Once per long rest, when you use **Mutation Surge**, you can manifest **any mutation from the full list** for 1 minute — including mutations you don't know. The temporary mutation provides its passive benefit and surge rider as if you knew it. After 1 minute, it fades. This lets you access mutations you chose not to learn, covering situational gaps.
- Your **Strain Dice increase by one die size** (d6→d8 without Evolved Biology, d8→d10 with Evolved Biology). This stacks with the Evolved Biology skill tree upgrade — a Mutant who invested in the full mutation chain (Quick Adapt → Third Slot → Evolved Biology) benefits from d10 Strain Dice, rewarding their investment rather than duplicating it.

*The first generation of mutants feared what they were becoming. The second generation endured it. You are what comes after endurance — when the body stops fighting the change and starts directing it. Every cell in your body knows what to do. You just have to let them.*

---

**Undying Vanguard**
*Requires: Warrior build, Level 18+, Unbreakable feature*

You have been beaten, broken, burned, and buried. You have bled out in the dust and dragged yourself upright on shattered legs. Death knows your name — and it has learned to wait.

- **1/long rest.** When you are reduced to **0 HP**, you can activate Undying Vanguard instead of falling unconscious. You immediately return to **1 HP** and gain **temporary HP equal to twice your level**.
- For **1 round** (until the end of your next turn), you are **immune to all conditions** — you cannot be stunned, frightened, paralyzed, grappled, knocked prone, or affected by any other condition. Existing conditions are suppressed (not removed) for the duration.
- During this round, your melee attacks deal an additional **1d8 force damage**.
- When the round ends, you lose all remaining temporary HP from this ability and gain **1 level of exhaustion**.
- **Interaction with Unbreakable:** Undying Vanguard triggers at 0 HP. Unbreakable (L5) prevents you from reaching 0 HP once per long rest. If you have already used Unbreakable this rest, Undying Vanguard catches you on the second drop. If Unbreakable is unused, you choose which to activate — they cannot both trigger on the same instance of damage.

> *"Still standing." — every Warrior's epitaph, and sometimes their last words before getting back up*

---

**Dead Man's Hand**
*Requires: Gunslinger build, Level 18+, Dead Eye feature*

There is a moment — between heartbeats, between breaths, between the thought and the trigger pull — where everything slows down. The target is perfectly still. The wind doesn't matter. The distance doesn't matter. Nothing matters except the shot.

- **1/long rest.** Declare before you make a ranged attack. This attack **automatically hits** (no attack roll — it simply hits). The attack is an **automatic critical hit** and **ignores partial and heavy cover** (but not total cover — the projectile must have a physical path). You add your weapon's maximum damage (do not roll — use the highest possible value) plus all applicable modifiers.
- If the target is reduced to **0 HP** by this attack, you may immediately take **1 additional action** this turn. This action follows normal rules (you can attack, move, use an item, etc.).
- Dead Man's Hand replaces one attack within a Strike action. If you have multiple attacks (e.g., Extra Attack), your remaining attacks proceed normally.
- **Ammunition:** The attack expends ammunition as normal.
- **Interaction with Dead Eye:** Dead Eye (L5) and Dead Man's Hand are separate resources. Dead Eye requires a hit roll and auto-crits on hit. Dead Man's Hand skips the roll entirely. You cannot apply both to the same attack.

> *"I don't need to aim. I already know where the bullet goes."*

---

**Final Intervention**
*Requires: Medic build, Level 18+, Miracle Worker feature*

Magic can bring back the dead. So can you. Not with spells — with hands, instruments, and a refusal to accept the outcome. You have studied the boundary between life and death with a scientist's precision and a zealot's stubbornness. Where others see a corpse, you see a patient.

- **1/long rest.** You spend **10 minutes** performing emergency field surgery on a creature that **died within the last 1 hour**. At the end of the 10 minutes, make a **Medicine check (DC 20)**. This is explicitly non-magical — it is a medical procedure, not a spell. Anti-magic fields and silence do not affect it.
- **Success:** The creature returns to life with **1 HP** and gains **2 levels of exhaustion**. The creature is **Wounded** (see Conditions). Any mortal wound that killed them is closed but scarred — the creature cannot regain HP above **half its maximum** until it completes a long rest, as the body needs time to fully recover.
- **Failure:** The creature is not revived. However, the procedure **preserves the body** — the 1-hour window for magical resurrection (such as Channel Energy or ritual casting) is extended by **24 hours**. The body will not decompose during this time.
- **Limitations:** Final Intervention cannot restore a creature that was **disintegrated**, **consumed by acid**, or otherwise **physically destroyed** beyond recognition. The Medic needs a body to work with. It also cannot restore undead or constructs — only living creatures that were alive within the last hour.
- **Interaction with Miracle Worker:** Miracle Worker (L5) resurrects creatures dead within 1 minute. Final Intervention extends this window to 1 hour but requires 10 minutes of uninterrupted work and a skill check. They serve different time windows and risk profiles.

> *"The heart stopped eleven minutes ago. I don't care. Get me the clamps."*

---

**Armistice**
*Requires: Diplomat build, Level 18+, Rally Cry feature*

You have ended bar fights, border disputes, and blood feuds with nothing but your voice. Now you can end battles. When you speak, the violence simply... pauses. Not because you're louder than the gunfire — because everyone, on every side, recognizes that you are the most important person in the room. And you are telling them to stop.

- **1/long rest.** As **1 action**, you speak a command that forces all creatures within **60 feet** who can **hear and understand you** to make a **Will save** (DC = 8 + PRE modifier + proficiency bonus). Creatures that are **deafened** or do not share a language with you are unaffected.
- **Failed Save:** The creature ceases all hostile actions for **1 minute**. It does not become friendly — it is compelled to pause, lower its weapons, and listen. It can move, speak, and defend itself but **cannot attack, cast offensive spells, or take any action that would directly harm another creature**. It can still use the Dodge action, disengage, or flee.
- **Breaking the Effect:** If a compelled creature takes **any damage** or is the target of a hostile action (including being grappled, shoved, or targeted by a harmful spell), the effect ends for **that creature only**. The remaining compelled creatures are unaffected.
- **Successful Save:** The creature is unaffected and can act normally. It is aware that you attempted to compel it.
- **Allied Use:** Armistice targets hostile creatures only — your allies are never compelled. You can additionally exclude specific enemies from the effect if you choose.
- **After the Pause:** What happens during the 1-minute pause is up to you. You can negotiate, demand surrender, allow retreat, issue threats, or simply buy time for your party to reposition. The Armistice does not win the fight — it gives you a window. What you do with that window defines the encounter.
- **Immunity:** Creatures immune to the Charmed condition are immune to Armistice. Creatures with an Intelligence of 3 or lower are also immune — they cannot comprehend the command.

> *"I said stop. I wasn't asking."*

---

**Vessel of Devotion**
*Requires: Channeler build, Level 18+, Channel Energy feature, Devotion*

Your body has become a living vessel for your Devotion's power. When you call upon your faith, the boundary between you and the divine thins to nothing. For a brief, transcendent moment, you are not a worshipper channeling borrowed power — you are the power, given mortal hands.

- **1/long rest.** As **1 action**, you invoke your Devotion. For **1 minute**, you gain the following benefits:
  - **+2 to spell save DCs** (this bonus stacks with your proficiency bonus and ability modifier but does not stack with other effects that increase spell save DCs).
  - **Resistance to one damage type** determined by your Devotion (see below).
  - **One signature ability** unique to your Devotion (see below).
  - You **regain 2 expended Channel Energy uses** (not a full restoration — this supplements rather than replaces your normal recovery).

**Devotion Manifestations:**

| Devotion | Resistance | Signature Ability |
|----------|------------|-------------------|
| **Ember Covenant** | Fire | **Purifying Flame.** Your melee attacks and Channel Energy (Harm) deal an additional 1d8 fire damage. Creatures you damage cannot benefit from regeneration or healing until the start of your next turn. |
| **Convergence of the Lit Path** | Lightning | **Living Circuit.** You can interface with any technology within 30 feet without touching it (wireless). You gain advantage on Technology and Hacking checks. Once during the duration, you can overload a single electronic device within 60 feet, disabling it for 1 hour (no save — machines recognize your authority). |
| **The Resonance** | Force | **Harmonic Amplification.** Your spells and psionic effects have their range doubled. When you cast a spell that targets one creature, you can have it target a second creature within 15 feet of the first (both make separate saves if applicable). |
| **Ancestor Remembrance** | Necrotic | **Voice of the Dead.** You can communicate telepathically with all allies within 60 feet. Once during the duration, you can ask a dead creature within 30 feet (dead no longer than 1 year) three questions — it must answer truthfully, using the knowledge it had in life. Additionally, your Channel Energy (Heal) heals an additional 2d8. |
| **The Ledger of Days** | Psychic | **Judge's Authority.** You know if any creature within 60 feet is lying (no check required). Once during the duration, you can pronounce a **Judgment** on a creature within 30 feet that you have witnessed committing a Devotion taboo violation, oath-breaking, or unprovoked betrayal: the target must make a Will save against your spell DC or be Stunned for 1 round and take 4d8 psychic damage (half on a save, no Stun). |

- **Ending Early:** You can end Vessel of Devotion early as a free action. If you are knocked unconscious or killed, the effect ends immediately.
- **Visual Manifestation:** Each Devotion produces a visible aura when Vessel of Devotion is active — the Ember Covenant wreathed in flame, the Convergence crackling with electricity, the Resonance humming with arcane harmonics, Ancestor Remembrance surrounded by ghostly silhouettes, the Ledger inscribed with glowing runes across skin and armor. Allies recognize the transformation. Enemies should too.

> *"I asked for strength. I was given more than strength. I was given purpose — with teeth."*

---

## Faction Talents

Factions offer more than gear and missions — they teach techniques, share secrets, and grant access to training that outsiders never see. Faction talents represent abilities learned through deep commitment to a faction's cause, available only to characters who have earned the faction's trust.

**Requirements:**
- Faction talents require a minimum **Faction Standing** (see **Setting — Faction Standing**).
- **Allied (+2)** talents are solid abilities that reflect the faction's training methods.
- **Trusted (+3)** talents are powerful, build-defining abilities available only to a faction's inner circle.
- You must maintain the required standing to use the talent. If your standing drops below the requirement, the talent becomes **inactive** until your standing recovers. You do not lose the talent — you lose access until trust is restored.
- You can have faction talents from **multiple factions**, but the cross-faction consequence matrix makes maintaining high standing with rival factions extremely difficult (see **Setting — Cross-Faction Consequences**).

---

### Hearthstone Compact

*Democratic survivalists. Community defense. Cooperative governance. "Nobody stands alone."*

**Community Bulwark** *(Standing +2)*
When you use the **Aid** action to assist an ally within 30 feet, both you and the aided ally gain **+1 DV** until the start of your next turn. The Compact teaches mutual protection — when you help someone, you're both safer for it.

Additionally, when you take the **Dodge** action while adjacent to an ally, that ally also gains **+1 DV** until the start of your next turn. You instinctively position yourself to cover each other's blind spots.

**Compact Fieldcraft** *(Standing +2)*
During a short rest, you can administer **Emergency Field Medicine** to **3 creatures** instead of the standard single target. Compact field medics train to triage fast because there are always more wounded than healers.

Additionally, you can spend 10 minutes during a short rest to **fortify a camp position**: allies who complete the rest in the fortified area gain **+2 to Perception checks** to detect ambushes and are not surprised for the first round of any combat that begins within 1 hour. The Compact never sleeps without a watch plan.

**Unbreakable Line** *(Standing +3)*
**1/long rest.** When you or an ally within 30 feet is reduced to **0 HP**, you can use your **reaction** to grant them **temporary HP equal to your character level**. They remain conscious at the temporary HP value instead of falling. If the temporary HP is depleted before the end of their next turn, they fall unconscious and begin making death saves as normal.

Additionally, for 1 minute after you activate this ability, all allies within 30 feet who can see you gain **advantage on death saving throws**. The Compact doesn't leave people behind — your refusal to accept defeat is contagious.

---

### Iron Wolves

*Military raiders. Strength through discipline. Territorial control. "Always forward."*

**Warchief's Drill** *(Standing +2)*
When you roll **initiative**, you and up to **3 allies within 30 feet** who can see you gain **+2 to their initiative rolls**. Iron Wolf units train together — they react as one. This bonus does not stack with other initiative bonuses from faction talents.

Additionally, during the **first round of combat**, you can issue a **battle cry** as a free action. Choose one: allies who can hear you gain either **+5 feet of movement** or **+1 to their first attack roll** this round. The bonus ends at the start of your next turn.

**Scavenge the Fallen** *(Standing +2)*
After you or an ally **reduces an enemy to 0 HP**, you can spend **1 action** on your turn to strip the fallen enemy for useful materials. You gain **1 Salvage capital** per enemy scavenged this way (maximum **3 Salvage per encounter**). The Wolves waste nothing.

Additionally, you can identify the **quality and type** of a defeated enemy's equipment at a glance (no check required). The GM tells you whether their gear is worth looting in detail during a short rest. Iron Wolf quartermasters can spot a good weapon in a pile of scrap.

**Ironclad Advance** *(Standing +3)*
**1/long rest.** As an action, you let out a war cry. For **3 rounds**, you and up to **3 allies within 30 feet** who can see you gain **resistance to bludgeoning, piercing, and slashing damage** while you move toward an enemy or make melee attacks on your turn. If a character under this effect takes the Dodge action, moves away from all enemies, or ends their turn further from the nearest enemy than they started, the effect ends for that character immediately. The Wolf doctrine: always forward.

---

### Convergence of the Lit Path

*Tech-hoarding rationalists. Sacred engineering. Augmentation culture. "Knowledge is divine."*

**Overclock Augmentation** *(Standing +2)*
**1/short rest.** Choose one of your installed **augmentations**. For **1 minute**, its primary numeric effect is increased by **50%** (round down): bonus values increase by half, damage dice gain +1 die of the same type, durations extend by half. At the end of the minute, the augmentation is **disabled** until your next short rest. The Convergence pushes technology past safe limits — and accepts the cost.

**Example:** A Targeting Computer (+2 ranged attacks) becomes +3 for 1 minute, then shuts down. A Nano-Repair Swarm (heal 1d6/round) becomes heal 1d6+1d3/round for 1 minute, then goes offline.

**Data Synthesis** *(Standing +2)*
When you succeed on a **Technology** or **Investigation** check, you gain a **+2 bonus** to your next Technology or Investigation check made within **1 hour**. The Convergence trains its analysts to build conclusions from cascading data — each discovery feeds the next. This bonus does not stack with itself.

Additionally, when you spend at least 10 minutes examining a piece of pre-Fall technology, you can make a **Technology check (DC 12)** to determine its **original manufacturer, intended purpose, and current operational status** — information that would normally require a DC 18+ check or specialized knowledge. The Convergence's archives are unmatched.

**Neural Optimization Protocol** *(Standing +3)*
You gain **+1 to INT** (this cannot exceed the **ability score cap** of 20, or 22 with Apex abilities from **Progression**). Note: ability score caps (20/22) and roll bonus caps (+14 core / +18 mythic) are separate mechanics — this INT increase affects your attribute directly, not your total roll bonus. The Convergence's neural training rewires cognitive pathways through a combination of meditation, augmented-reality exercises, and micro-dose nootropics.

Additionally, when you spend **1 action** on a Technology check, you can make **a second Technology check** as part of the same action (different target or purpose). You process information in parallel — one thought for analysis, another for application. This second check cannot trigger Data Synthesis.

---

### Ashen Veil

*Magical researchers. Arcane preservation. Voidscar scholars. "Understand it before it consumes you."*

**Resonance Attunement** *(Standing +2)*
You can **sense magical auras** within 60 feet without spending an action. You automatically detect the **presence, school, and approximate power level** (cantrip / low / medium / high / mythic) of any active magical effect you can see. This detection is passive and constant — you perceive magic the way others perceive light.

Additionally, you have **advantage on Arcana checks** to identify spells being cast, magical items, and arcane phenomena. The Veil's foundational training is observation: you learned to read magic before you learned to wield it.

**Burnout Channel** *(Standing +2)*
**1/short rest.** When you would gain **1 or more points of Burnout** from casting a spell, you can redirect the excess energy outward. Each point of Burnout you would have gained instead deals **1d6 force damage** to all enemies within **10 feet** of you (Reflex save, DC = your spell save DC, for half damage). You still gain the Burnout — this talent doesn't prevent it, it makes it useful.

The Veil teaches controlled release: when the magic overflows, don't fight it — *aim* it.

**Veil Mastery** *(Standing +3)*
**1/long rest.** For **1 minute** (10 rounds), your **spell save DC increases by +1** and you can **ignore the first 2 points of Burnout** you would gain during the duration. The Veil's innermost circle teaches focus techniques that predate the Fall — methods of channeling that modern casters have forgotten.

When the effect ends, you gain **1 level of Exhaustion**. The techniques work, but they extract a price.

---

### Dynaxis Solutions

*Corporate pragmatists. Manufacturing monopoly. Economic manipulation. "Everything has a price."*

**Corporate Leverage** *(Standing +2)*
When you make a **Persuasion or Deception check** involving trade, negotiation, contract terms, or business dealings, you can add your **INT modifier** in addition to your normal ability modifier (PRE). Dynaxis trains its agents to weaponize information asymmetry — you negotiate with data, not charm.

Additionally, once per long rest, you can determine the **exact market value** of any item, service, or asset you can examine. No check required — Dynaxis price databases are burned into your memory. You also know who in the current settlement is most likely to buy or sell the item and at what markup.

**Hostile Acquisition** *(Standing +2)*
**1/long rest.** When an enemy within 30 feet uses a **technological item, augmentation, or device** (not a weapon attack — a special function or activation), you can use your **reaction** to make a **Technology check (DC = 10 + item tier × 3)**. On success, the item **malfunctions for 1 round**: the ability fails, the device sparks and shuts down. The item functions normally after 1 round. Dynaxis knows every product's backdoor because they built most of them.

On a failure, the enemy is aware that someone attempted to interfere with their equipment and gains **advantage on Perception checks** to locate you until the end of their next turn.

**Executive Override** *(Standing +3)*
**1/long rest.** On your turn, you may **combine two non-attack actions into a single action**. You may use this benefit for up to **two** of your three actions this turn. Valid non-attack actions: Use Item, Technology check, Interact, Help, Command a device, or administer a healing item. You cannot use these combined actions to make attacks, cast spells, or use abilities that deal damage. Dynaxis executives don't fight — they *manage*.

This turn represents peak coordination: you bark orders, distribute equipment, hack a terminal, and direct a drone — all in 6 seconds, all within the discipline of three focused actions.

---

### Kethara Collective

*Alien refugee alliance. Biological technology. Cooperative evolution. "We are stronger together."*

**Symbiotic Bond** *(Standing +2)*
Choose one **willing ally** at the start of each long rest. While you and that ally are within **30 feet** of each other, you both gain **+1 to all saving throws**. If either of you is reduced to **0 HP**, the bond breaks and cannot be re-established until the next long rest. Kethara biology emphasizes paired survival — the bond reflects this philosophy applied to non-Kethara allies.

Additionally, while the bond is active, you and your bonded ally can **communicate telepathically** at a range of 60 feet. This communication is one-way at a time (like a radio) and requires no action. It does not grant the ability to read thoughts.

**Xenotech Proficiency** *(Standing +2)*
You gain proficiency with **Kethara biological equipment** (bioweapons, bioarmor, living tools). You can use Kethara biotech items without the **-2 penalty** that non-Collective users suffer. The Collective teaches biological interface techniques — how to sync your nervous system with living technology.

Additionally, once per short rest, you can **heal 1d8 HP** by spending 1 minute communing with a piece of Kethara biotech you carry. The living technology provides restorative nutrients and minor cellular repair through skin contact. This counts as magical healing for the purpose of interactions with the Synthetic restriction (Synthetics cannot benefit from magical healing; see *Character Creation*, **Species**).

**Collective Resonance** *(Standing +3)*
**1/long rest.** For **1 minute** (10 rounds), you and up to **4 allies within 30 feet** share a **telepathic combat link**. All linked characters gain the following benefits:

- **Cannot be surprised** while the link is active
- Can **communicate silently** (no action required)
- When a linked character within 5 feet of another linked character is **targeted by an attack**, the other linked character can use their **reaction** to become the target instead (the attack roll is compared against the new target's DV)
- Linked characters have **advantage on saving throws against the Frightened and Charmed conditions** — the collective consciousness reinforces individual willpower

When the effect ends, all linked characters gain **1 level of Fatigue** (not Exhaustion — the mental strain is draining but not debilitating). The Collective fights as one organism — but individual minds were not designed for such unity.

---

### Cross-Faction Cost Analysis

Choosing faction talents comes with political consequences. The cross-faction consequence matrix (see **Setting**) means every standing gain costs standing with rival factions.

| Faction Allied (+2 or +3) | Hostile Factions (lose -1 per point gained) | Unfriendly Factions (tension) |
|---|---|---|
| **Hearthstone Compact** | Iron Wolves | Convergence, Dynaxis |
| **Iron Wolves** | Hearthstone, Convergence, Dynaxis | Kethara |
| **Convergence** | Iron Wolves, Ashen Veil, Kethara | Hearthstone |
| **Ashen Veil** | Convergence | Dynaxis |
| **Dynaxis Solutions** | Iron Wolves | Hearthstone, Ashen Veil, Kethara |
| **Kethara Collective** | Convergence | Iron Wolves, Dynaxis |

**Easiest faction combination:** Ashen Veil + Kethara Collective (the only Friendly pair). Characters can maintain high standing with both — they share enemies (Convergence) and have no mutual hostility.

**Hardest faction to maintain:** Iron Wolves — hostile with 3 other factions. Reaching +3 Iron Wolves means -3 or worse with Hearthstone, Convergence, and Dynaxis. Wolf loyalists are deeply committed.

---

## Talent Interaction Rules

### Stacking
- Talents do not stack with each other unless explicitly stated.
- A Talent that modifies a build feature works with that feature's existing improvements (e.g., Focused Destruction enhances cantrip scaling that already exists).
- Universal and Build Talents can be taken in any combination — you are not required to take any Build Talents.

### Prerequisites
- Build Talents require the feature they enhance. You cannot take Retaliatory Fury without having Retaliation Strike.
- Some Talents require a specific CP purchase (noted with "Requires:"). You must have purchased the prerequisite ability before selecting the Talent.
- Legendary Talents have their own prerequisites as listed.

### Retraining
- During a long rest (1 week), you can swap one non-Legendary Talent for another Talent you qualify for.
- You cannot swap a Talent if another Talent or feature depends on it.
- Legendary Talents cannot be retrained.

### Bounded Accuracy
All Talents respect the bounded accuracy framework. The three core bonus categories (Attribute, Proficiency, Equipment) are individually hard-capped (see **Introduction — Bounded Accuracy Framework**). Talent bonuses are *feature bonuses* that stack on top of core categories, but no combination of all sources can cause a character's total bonus to any single roll to exceed:

- **Core-tier characters (Levels 1–20): +18 maximum** total roll bonus (all sources combined).
- **Mythic-tier characters (Levels 21–30): +22 maximum** total roll bonus (all sources combined).

If a Talent (or any other bonus) would cause the total roll bonus to exceed the cap for your tier, the excess is lost. See **Introduction** for the full bounded accuracy framework and **Progression** for the distinction between core and mythic tiers.
