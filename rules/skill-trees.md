---
game_data: true
shared_skill_trees:
  - name: Martial Combat
    focus: Melee mastery, stances, weapon techniques, battlefield dominance
    abilities:
      - {name: "Combat Stance", cp_cost: 5, tier: 1, effect: "Switch between Aggressive/Defensive/Balanced stances"}
      - {name: "Power Strike", cp_cost: 5, tier: 1, effect: "+1d6 melee damage, 1/turn"}
      - {name: "Armor Mastery", cp_cost: 5, tier: 1, effect: "Reduce physical damage by 2"}
      - {name: "Weapon Specialization", cp_cost: 5, tier: 1, effect: "Choose one weapon group: +1 damage (scales at L10/L15)"}
      - {name: "Second Wind", cp_cost: 5, tier: 1, effect: "1 Action, 1/SR: Heal 2d10+level HP; gain temp HP equal to level"}
      - {name: "Bodyguard", cp_cost: 5, tier: 1, effect: "Reaction: When ally within 30 ft is attacked, move 15 ft toward them (no OA). If within 5 ft, become the attack target instead. 1/round"}
      - {name: "Retaliation Strike", cp_cost: 5, tier: 1, effect: "Reaction: When hit by melee attack from enemy within 5 ft, make melee attack vs enemy within 5 ft. 1/round; END mod uses/SR (min 1)"}
      - {name: "Extra Attack", cp_cost: 10, tier: 2, effect: "When using 1 action to Strike, make two attacks"}
      - {name: "Cleave", cp_cost: 10, tier: 2, effect: "Free attack on adjacent enemy when you kill a creature"}
      - {name: "Shield Wall", cp_cost: 10, tier: 2, effect: "Grant adjacent ally your shield DV bonus"}
      - {name: "Rage", cp_cost: 10, tier: 2, effect: "+2 melee damage, advantage on MIG checks, resistance to physical"}
      - {name: "Devastating Critical", cp_cost: 15, tier: 3, effect: "Triple crit damage on melee attacks"}
      - {name: "Fortress Stance", cp_cost: 15, tier: 3, effect: "2 Actions: you and allies within 10 ft gain +2 DV and resistance"}
      - {name: "Commander's Presence", cp_cost: 15, tier: 3, effect: "Allies within 30 ft add proficiency to initiative"}
      - {name: "Unbreakable", cp_cost: 25, tier: 4, effect: "When reduced to 0 HP: drop to 1 HP, gain temp HP = 2x level. 1/LR"}
      - {name: "Titan's Stand", cp_cost: 30, tier: 5, effect: "1 min: immunity to forced movement, 30 temp HP/turn, +3d6 melee. 1/LR"}
    milestones:
      initiate: {cp: 15, bonus: "+1 to Athletics or Intimidation"}
      journeyman: {cp: 30, bonus: "Grit — reduce all incoming damage by END mod (min 1) when at/below half HP"}
      master: {cp: 50, bonus: "+1 to melee attack rolls"}
  - name: Ranged Combat
    focus: Firearms mastery, precision shooting, demolitions, mobile gunfighting
    abilities:
      - {name: "Steady Aim", cp_cost: 5, tier: 1, effect: "1 Action: next ranged attack has advantage (moved <=10 ft)"}
      - {name: "Lethal Precision", cp_cost: 5, tier: 1, effect: "Add AGI mod to ranged weapon damage rolls"}
      - {name: "Long Shot", cp_cost: 5, tier: 1, effect: "Double weapon range"}
      - {name: "Evasive Maneuvers", cp_cost: 5, tier: 1, effect: "Ignore difficult terrain, no opportunity attacks when moving"}
      - {name: "Extra Attack (Ranged)", cp_cost: 10, tier: 2, effect: "When using 1 action to Strike with ranged weapon, make two attacks"}
      - {name: "Called Shot", cp_cost: 10, tier: 2, effect: "2 Actions, -5 to hit: Head/Legs/Arms rider effects"}
      - {name: "Sniper's Focus", cp_cost: 10, tier: 2, effect: "+2 ranged if stationary"}
      - {name: "Explosives Expert", cp_cost: 10, tier: 2, effect: "Craft grenades, 15 ft radius, 3d6 fire/force"}
      - {name: "One Shot One Kill", cp_cost: 15, tier: 3, effect: "Maximize ranged damage, 1/SR"}
      - {name: "Kill Shot", cp_cost: 15, tier: 3, effect: "3 Actions: +3d6 damage, ignores cover"}
      - {name: "Hit and Run", cp_cost: 15, tier: 3, effect: "15 ft free move after ranged attack"}
      - {name: "Dead Eye", cp_cost: 25, tier: 4, effect: "Declare before attack: auto-crit on hit. 2/SR"}
      - {name: "Perfect Storm", cp_cost: 30, tier: 5, effect: "1 min: attack every enemy in range each turn, +1d6 per hit. 1/LR"}
    milestones:
      initiate: {cp: 15, bonus: "+1 to Perception or Survival"}
      journeyman: {cp: 30, bonus: "Quick Draw — draw/stow weapons as free action, +2 initiative"}
      master: {cp: 50, bonus: "+1 to ranged attack rolls"}
  - name: Stealth & Subterfuge
    focus: Infiltration, assassination, intelligence gathering, evasion, deception
    abilities:
      - {name: "Sneak Attack", cp_cost: 5, tier: 1, effect: "+1d6 per 10 CP invested in this tree on hit with advantage or flanking. Level cap: maximum dice = level/2 + 2 (L5→4d6, L10→7d6, L15→9d6, L20→12d6). PT-059 2026-03-20: cap added to prevent DPR divergence vs other specialists at L10+."}
      - {name: "Expertise", cp_cost: 5, tier: 1, effect: "Choose 2 proficient skills: double proficiency bonus"}
      - {name: "Cunning Action", cp_cost: 5, tier: 1, effect: "1 Action: Dash, Disengage, or Hide"}
      - {name: "Assess Target", cp_cost: 5, tier: 1, effect: "1 Action: learn one fact about target, +2 attacks vs target 1 hr"}
      - {name: "Uncanny Dodge", cp_cost: 10, tier: 2, effect: "Reaction: halve damage from seen attacker, 1/round"}
      - {name: "Assassinate", cp_cost: 10, tier: 2, effect: "Auto-crit from stealth on surprise round"}
      - {name: "Exploit Weakness", cp_cost: 10, tier: 2, effect: "On hit vs Assessed target: 1 Intel Die for +1d6 + rider effect"}
      - {name: "Security Bypass", cp_cost: 10, tier: 2, effect: "Hack electronic locks, disable alarms"}
      - {name: "Ghost Strike", cp_cost: 15, tier: 3, effect: "Hidden attack auto-crits, FORT DC 15 or stunned. 1/SR"}
      - {name: "Evasion", cp_cost: 15, tier: 3, effect: "Reflex save for half means no damage on success, half on fail"}
      - {name: "Death Strike", cp_cost: 15, tier: 3, effect: "Double Sneak Attack damage, 1/SR"}
      - {name: "Mastermind", cp_cost: 15, tier: 3, effect: "Intel Briefing, Double Agent, or Extraction Protocol. 1/SR"}
      - {name: "Execution", cp_cost: 25, tier: 4, effect: "Study 1 round then attack: FORT DC 18 or die if target < 5x level HP. 1/LR"}
      - {name: "Shadow Sovereign", cp_cost: 30, tier: 5, effect: "1 min: disadvantage on attacks vs you, Sneak Attack on every hit. 1/LR"}
      - {name: "Ghost Protocol", cp_cost: 30, tier: 5, effect: "Intel refresh; auto-Assess all enemies; 2 Spymaster's Gambit options free; allies +1d4 vs Assessed 1 hr; party no surprise, +2 initiative 1 hr. 1/LR. Req: Spymaster's Gambit"}
    milestones:
      initiate: {cp: 15, bonus: "+1 to Stealth or Deception"}
      journeyman: {cp: 30, bonus: "Prepared for Anything — cannot be surprised, +2 initiative"}
      master: {cp: 50, bonus: "+1 to attack rolls against targets that haven't acted this combat"}
  - name: Arcane Arts
    focus: Spell crafting, metamagic, cantrips, burnout management, arcane defense
    abilities:
      - {name: "Cantrips", cp_cost: 5, tier: 1, effect: "Learn 3 cantrips. At-will, add INT mod to damage"}
      - {name: "Spell Crafting (Basic)", cp_cost: 5, tier: 1, effect: "Access Sigil System for spell crafting. Grants 1st-level slots (2)"}
      - {name: "Mage Armor", cp_cost: 5, tier: 1, effect: "DV = 13 + AGI mod for 8 hrs"}
      - {name: "Elemental Focus", cp_cost: 5, tier: 1, effect: "+1 damage per die on chosen element"}
      - {name: "Spell Slots (Expanded)", cp_cost: 10, tier: 2, effect: "Gain 2nd-level spell slots. Total: 3 first / 2 second"}
      - {name: "Ritual Casting", cp_cost: 10, tier: 2, effect: "Cast known spells as ritual without slot (10 min + 10 min/level; requires skill check WIS/INT vs DC 10+(spell level×2); materials consumed)"}
      - {name: "Arcane Recovery", cp_cost: 10, tier: 2, effect: "Recover spell slots totaling half level, 1/SR"}
      - {name: "Counterspell", cp_cost: 10, tier: 2, effect: "Reaction: INT check DC 10+spell level to negate spell. 1/SR"}
      - {name: "Spell Slots (Advanced)", cp_cost: 15, tier: 3, effect: "Gain 3rd-4th level spell slots"}
      - {name: "Signature Spell", cp_cost: 15, tier: 3, effect: "Choose one 1st or 2nd-level spell: cast at-will without slot"}
      - {name: "Elemental Affinity", cp_cost: 15, tier: 3, effect: "Add INT mod to element damage, change damage type, gain Resonance"}
      - {name: "5th-Level Spell Access", cp_cost: 25, tier: 4, effect: "Gain 5th-level spell slots (L10+)"}
      - {name: "Arcane Singularity", cp_cost: 30, tier: 5, effect: "1 min: cast any 5th-level spell without slot, two spells/turn, spell DC +3, ignore material components, Counterspell-proof. 2 Burnout on end. 1/LR"}
    milestones:
      initiate: {cp: 15, bonus: "+1 to Arcana or Investigation"}
      journeyman: {cp: 30, bonus: "Arcane Ward — casting grants temp HP = 2x spell level. Auto-unlock 2nd-level slots"}
      master: {cp: 50, bonus: "+1 to spell save DCs. Auto-unlock 3rd-level spell slots"}
  - name: Psionic Disciplines
    focus: Focus system — telekinesis, telepathy, psychokinesis (biological only)
    abilities:
      - {name: "Psionic Awakening", cp_cost: 5, tier: 1, effect: "Choose 2 disciplines. Grants Focus system (0 to 10+MIG)"}
      - {name: "Psi Strike", cp_cost: 5, tier: 1, effect: "1d8+WIS force, 60 ft, at-will. +1 Focus. Scales at higher tiers"}
      - {name: "Centering", cp_cost: 5, tier: 1, effect: "1 Action: reduce Focus 1d4, gain temp HP = reduction"}
      - {name: "Thought Shield", cp_cost: 5, tier: 1, effect: "+1 Will saves, reduce psychic damage by WIS mod"}
      - {name: "Discipline Surge", cp_cost: 10, tier: 2, effect: "Kinetic Wave, Psychic Lance, or Force Eruption. +2 Focus each"}
      - {name: "Psionic Resilience", cp_cost: 10, tier: 2, effect: "Resistance to psychic damage, advantage vs charmed/frightened"}
      - {name: "Twin Strike", cp_cost: 10, tier: 2, effect: "Target 2 creatures within 5 ft, +1 Focus total"}
      - {name: "Telekinetic Grip", cp_cost: 10, tier: 2, effect: "Restrain target within 60 ft, 1d8 dmg/turn. +1 Focus"}
      - {name: "Psionic Overcharge", cp_cost: 15, tier: 3, effect: "Set Focus to 7 for 3 rounds: +1d6 psychic, DCs +2. 1/SR"}
      - {name: "Psionic Cataclysm", cp_cost: 15, tier: 3, effect: "30 ft radius, 4d8+WIS force, Reflex half. +4 Focus. 1/LR"}
      - {name: "Mental Bastion", cp_cost: 15, tier: 3, effect: "Reaction: allies in 15 ft resist all damage until next turn. 1/SR"}
      - {name: "Telekinetic Maelstrom", cp_cost: 25, tier: 4, effect: "20 ft vortex, 3d8+WIS/turn, pull 10 ft. Concentration 1 min. 1/LR"}
      - {name: "Psychic Apotheosis", cp_cost: 30, tier: 5, effect: "60 ft psychic shockwave, stun on fail, psionic DCs +3 for 1 min. 1/LR"}
    milestones:
      initiate: {cp: 15, bonus: "+1 to Perception or Insight"}
      journeyman: {cp: 30, bonus: "Psionic Resilience — resistance to psychic damage, advantage vs charmed/frightened"}
      master: {cp: 50, bonus: "+1 to psionic save DCs"}
  - name: Technology
    focus: Drones, hacking, gadgets, augmentation, electronic warfare
    abilities:
      - {name: "Neural Interface", cp_cost: 5, tier: 1, effect: "INT (Technology) check to access/override devices within 30 ft"}
      - {name: "Jury-Rig", cp_cost: 5, tier: 1, effect: "DC 12 Tech check to temporarily repair broken device (1 hr)"}
      - {name: "Drone Companion (Basic)", cp_cost: 5, tier: 1, effect: "Gain drone: Scout/Carry/Distract/Shock. Scales with level"}
      - {name: "Modular Upgrades", cp_cost: 5, tier: 1, effect: "Drone upgrade: armor plating, weapon mount, or stealth module"}
      - {name: "Overclock", cp_cost: 10, tier: 2, effect: "Boost weapon (+1d6), armor (+2 DV), or drone (+1 action) for 1 min. 1/SR"}
      - {name: "Rapid Assembly", cp_cost: 10, tier: 2, effect: "Rebuild drone in 1 hr; two drones simultaneously"}
      - {name: "Digital Ghost", cp_cost: 10, tier: 2, effect: "Erase intrusion traces after hacking"}
      - {name: "Advanced Drone", cp_cost: 10, tier: 2, effect: "Drone +10 HP, +2 DV, ranged attack 1d6+INT"}
      - {name: "Masterwork", cp_cost: 15, tier: 3, effect: "Craft gadget replicating 1st-2nd level spell (max 3 carried). 1/LR"}
      - {name: "Siege Engine", cp_cost: 15, tier: 3, effect: "Build combat turret (50 HP, DV 15, 2d8 dmg)"}
      - {name: "Neural Assault", cp_cost: 15, tier: 3, effect: "30 ft, Will save: 3d8 psychic + stunned. 1/SR"}
      - {name: "Masterwork Construct", cp_cost: 25, tier: 4, effect: "Construct: HP 40, DV 16, 2x1d8+INT attacks. 8 hrs. 1/LR"}
      - {name: "Masterwork Protocol", cp_cost: 30, tier: 5, effect: "1 min: control devices 120 ft, auto-hack, drone becomes Huge. 1/LR"}
    milestones:
      initiate: {cp: 15, bonus: "+1 to Technology or Science"}
      journeyman: {cp: 30, bonus: "Improved Jury-Rig — natural 20 = permanent fix, natural 15+ = full day duration"}
      master: {cp: 50, bonus: "+1 to Technology skill checks and drone attack rolls"}
  - name: Leadership & Social
    focus: Inspiration, tactical commands, negotiation, social manipulation, fear
    abilities:
      - {name: "Commanding Presence", cp_cost: 5, tier: 1, effect: "Free Action, 1/round: one ally gains +1d4 to next attack or save"}
      - {name: "Silver Tongue", cp_cost: 5, tier: 1, effect: "Advantage on Persuasion/Deception for first interaction"}
      - {name: "Inspire", cp_cost: 5, tier: 1, effect: "1 Action: allies within 30 ft gain temp HP = PRE mod + level"}
      - {name: "Sow Doubt", cp_cost: 5, tier: 1, effect: "Will save or -2 to next attack/check. 1/SR"}
      - {name: "Read the Room", cp_cost: 10, tier: 2, effect: "Contested WIS vs PRE: learn emotional state, detect deception"}
      - {name: "Battle Orders", cp_cost: 10, tier: 2, effect: "1 Action: up to 3 allies choose Fortify/Reposition/Empower"}
      - {name: "Tactical Command", cp_cost: 10, tier: 2, effect: "1 Action: ally within 30 ft uses reaction for move or attack"}
      - {name: "Silver-Tongued Devil", cp_cost: 10, tier: 2, effect: "Persuasion vs Will to compel non-hostile creature. 1/SR"}
      - {name: "Rally Cry", cp_cost: 15, tier: 3, effect: "60 ft: heal 2d8+PRE, end one condition, advantage on next action. 1/LR"}
      - {name: "Hold the Line", cp_cost: 15, tier: 3, effect: "Reaction: ally at 0 HP drops to 1 instead. PRE mod/LR"}
      - {name: "War Cry", cp_cost: 15, tier: 3, effect: "30 ft: enemies Will save or frightened, allies +2 attacks"}
      - {name: "Supreme Commander", cp_cost: 25, tier: 4, effect: "1 min: at the start of each of your turns, choose one ally within 30 ft — that ally may immediately make one free Strike or use one at-will ability without spending an action. 1/LR"}
      - {name: "Mandate of the People", cp_cost: 30, tier: 5, effect: "120 ft: Will DC 20 or regard you as authority figure 1 hr. 1/LR"}
    milestones:
      initiate: {cp: 15, bonus: "+1 to Persuasion or Intimidation"}
      journeyman: {cp: 30, bonus: "Battle Plan — allies who can hear you gain +2 initiative at combat start"}
      master: {cp: 50, bonus: "Commanding Presence die increases to 1d8"}
  - name: Survival & Scavenging
    focus: Wasteland resourcefulness — salvage, improvised combat, traps, environmental mastery
    abilities:
      - {name: "Scrounger's Instinct", cp_cost: 5, tier: 1, effect: "Advantage on Perception/Investigation; find 1d4 Salvage after combat"}
      - {name: "Improvised Arsenal", cp_cost: 5, tier: 1, effect: "Proficient with all improvised weapons (1d8 damage, range 20/60)"}
      - {name: "Salvage Dice", cp_cost: 5, tier: 1, effect: "Gain Salvage Dice pool (prof + END mod, min 3 d6). Replenish on SR"}
      - {name: "Wasteland Gut", cp_cost: 5, tier: 1, effect: "Advantage vs poison/disease/radiation; survive on half rations"}
      - {name: "Makeshift Solution", cp_cost: 10, tier: 2, effect: "1 Action, 1 Salvage Die: Improvised Cover, Caltrops, or Quick Patch"}
      - {name: "Scrapyard Strike", cp_cost: 10, tier: 2, effect: "On hit with improvised weapon: 1 Salvage Die for +1d6 + status rider"}
      - {name: "Field Strip", cp_cost: 10, tier: 2, effect: "Destroy item to gain Salvage Dice equal to item tier"}
      - {name: "Relentless Scrapper", cp_cost: 10, tier: 2, effect: "Free thrown attack on kill"}
      - {name: "Wasteland Ingenuity", cp_cost: 15, tier: 3, effect: "1 Action, 1/SR: Scrap Bomb, Jury-Rigged Armor, or Field Innovation"}
      - {name: "Treasure Hunter", cp_cost: 15, tier: 3, effect: "Salvage Dice become d8s; find Tier 3 item 1/LR"}
      - {name: "Hard to Kill", cp_cost: 15, tier: 3, effect: "Reaction, 2 Salvage Dice: reduce damage by 2d6+END; advantage death saves"}
      - {name: "Scrap Storm", cp_cost: 25, tier: 4, effect: "1 min: 1d12 improvised weapons, free Scrapyard Strike, +2 DV. 1/LR"}
      - {name: "Wasteland's Chosen", cp_cost: 30, tier: 5, effect: "1 min: improvised weapons 1d12, environmental damage, Salvage refills. 1/LR"}
    milestones:
      initiate: {cp: 15, bonus: "+1 to Survival or Investigation"}
      journeyman: {cp: 30, bonus: "Adaptive Response — first time taking specific damage type each encounter, gain resistance until end of next turn"}
      master: {cp: 50, bonus: "+1 to improvised weapon attack rolls and Salvage Die results"}
  - name: Medicine
    focus: Healing, stims, surgery, pharmacology, poison
    abilities:
      - {name: "Field Medic", cp_cost: 5, tier: 1, effect: "1 Action: touch, restore 1d6+WIS HP. WIS mod uses/SR. Scales"}
      - {name: "Triage", cp_cost: 5, tier: 1, effect: "Free Action: learn exact HP of allies (60 ft), identify conditions"}
      - {name: "Preventive Care", cp_cost: 5, tier: 1, effect: "1 Bonus Action: grant DR 2 vs next damage (10 min). WIS mod/SR"}
      - {name: "Stimpack Crafter", cp_cost: 5, tier: 1, effect: "SR: craft 1d4 stims (heal 1d8+2)"}
      - {name: "Emergency Stabilization", cp_cost: 10, tier: 2, effect: "Stabilize dying creature, restore 1 HP. At-will"}
      - {name: "Combat Medic", cp_cost: 10, tier: 2, effect: "Healing provokes no opportunity attacks; advantage on Medicine in combat"}
      - {name: "Spell Slots (Medical)", cp_cost: 10, tier: 2, effect: "Gain 1st-level medical spell slots for medical/buff spells. Upgrades to 2nd-level at Journeyman milestone (30 CP)."}
      - {name: "Mass Triage", cp_cost: 10, tier: 2, effect: "Field Medic targets 3 allies within 10 ft"}
      - {name: "Miracle Worker", cp_cost: 15, tier: 3, effect: "Resurrection (dead < 1 min) OR Cure All conditions. 1/LR"}
      - {name: "Battlefield Surgeon", cp_cost: 15, tier: 3, effect: "Field Medic as free action, 1/turn"}
      - {name: "Performance Enhancers", cp_cost: 15, tier: 3, effect: "Grant ally +2 attacks for 1 min"}
      - {name: "Lazarus Protocol", cp_cost: 25, tier: 4, effect: "Revive dead (<=10 min) at 1 HP OR fully heal living target. 1/LR"}
      - {name: "Phoenix Protocol", cp_cost: 30, tier: 5, effect: "Touch: full HP, remove all conditions. Dead <=1 hr: revive at full. 4 exhaustion. 1/LR"}
    milestones:
      initiate: {cp: 15, bonus: "+1 to Medicine or Survival"}
      journeyman: {cp: 30, bonus: "Adrenaline Surge — reaction: reduce incoming damage by WIS mod. Auto-unlock medical spell slots: 2nd-level if Spell Slots (Medical) already purchased; 1st-level otherwise."}
      master: {cp: 50, bonus: "+1 to healing rolls and poison save DCs. Auto-unlock 3rd-level medical slots"}
  - name: Mutation
    focus: Physical mutations, adaptive biology, feral combat, monstrous transformation
    abilities:
      - {name: "Mutations", cp_cost: 5, tier: 1, effect: "Choose 3 mutations. 2 active at once (passive + surge rider)"}
      - {name: "Strain Dice", cp_cost: 5, tier: 1, effect: "Gain Strain Dice pool (prof + END mod, min 3 d6). Replenish on SR"}
      - {name: "Adapt", cp_cost: 5, tier: 1, effect: "1 Action: swap active mutation for dormant one"}
      - {name: "Damage Reduction", cp_cost: 5, tier: 1, effect: "Reduce physical damage by 1 (DR 2 at L9)"}
      - {name: "Mutation Surge", cp_cost: 10, tier: 2, effect: "On hit with natural weapon: 1 Strain Die for +1d6 + surge rider"}
      - {name: "Adaptive Response", cp_cost: 10, tier: 2, effect: "First time taking specific damage type: resistance until end of next turn"}
      - {name: "Extra Limbs", cp_cost: 10, tier: 2, effect: "Additional mutated limbs grant utility: manipulate objects, hold items, interact with environment without occupying hands. Advantage on Athletics (Grapple) checks. No combat attacks"}
      - {name: "Third Slot", cp_cost: 10, tier: 2, effect: "3 mutations active simultaneously"}
      - {name: "Feral Evolution", cp_cost: 15, tier: 3, effect: "1 min: +1 die size, +2 DV, temp HP, free Mutation Surge. 1/SR"}
      - {name: "Alpha Mutation", cp_cost: 15, tier: 3, effect: "1/round: Mutation Surge rider costs 0 Strain Dice"}
      - {name: "Regenerative Tank", cp_cost: 15, tier: 3, effect: "After taking damage: heal proficiency HP at turn start"}
      - {name: "Multi-Limb Combat", cp_cost: 15, tier: 3, effect: "Prereq: Extra Limbs. Train one mutated limb for coordinated combat. Once per turn when you take the Strike action, make one additional natural weapon attack (1d6, no ability modifier to damage). Does not benefit from Mutation Surge"}
      - {name: "Apex Predator Form", cp_cost: 25, tier: 4, effect: "1 min: +2 die sizes, Extra Attack (does not stack — if you already have Extra Attack, gain +1d6 natural weapon damage instead), +2 saves, +10 ft speed. 1/LR"}
      - {name: "Evolutionary Zenith", cp_cost: 30, tier: 5, effect: "1 min: all mutations active, natural weapons +2 die sizes, free Surge riders. 1/LR"}
    milestones:
      initiate: {cp: 15, bonus: "+1 to Athletics or Survival"}
      journeyman: {cp: 30, bonus: "Mutagen Physiology — natural weapons 1d8+MIG (+1d4 bonus per hit), usable while grappling"}
      master: {cp: 50, bonus: "+1 to natural weapon attack rolls and Strain Die results"}
  - name: Divine Channeling
    focus: Channel energy, divine smites, spirits, devotion
    abilities:
      - {name: "Channel Energy", cp_cost: 5, tier: 1, effect: "1 Action: Harm (1d8 radiant/necrotic) OR Heal (1d8 HP). WIS mod/SR"}
      - {name: "Cantrips (Divine)", cp_cost: 5, tier: 1, effect: "Learn 2 cantrips. Add WIS mod to damage"}
      - {name: "Spiritual Sense", cp_cost: 5, tier: 1, effect: "Sense magic, undead, unnatural phenomena within 60 ft"}
      - {name: "Smite", cp_cost: 5, tier: 1, effect: "Expend spell slot: +1d8/level bonus damage (+1d8 vs undead/fiends)"}
      - {name: "Divine Strike", cp_cost: 5, tier: 1, effect: "+1d8 radiant/necrotic on melee hit. Horizontal prereq: T1 in Divine Channeling"}
      - {name: "Spell Slots (Divine)", cp_cost: 10, tier: 2, effect: "Gain 1st-2nd level divine spell slots"}
      - {name: "Overflow", cp_cost: 10, tier: 2, effect: "Expend extra Channel Energy to affect second target; combine actions"}
      - {name: "Warpriest", cp_cost: 10, tier: 2, effect: "After casting spell, weapon attack as bonus action"}
      - {name: "Iron Will", cp_cost: 10, tier: 2, effect: "Advantage vs frightened/charmed; immune to magical sleep"}
      - {name: "Spell Slots (Advanced Divine)", cp_cost: 15, tier: 3, effect: "Gain 3rd-4th level divine spell slots"}
      - {name: "Avatar of War", cp_cost: 15, tier: 3, effect: "1/LR, 1 min: +2d8 radiant/necrotic, resistance to all damage"}
      - {name: "Martyr's Blessing", cp_cost: 15, tier: 3, effect: "1/LR: teleport to hit ally, take hit instead (resistance)"}
      - {name: "5th-Level Divine Spells", cp_cost: 25, tier: 4, effect: "Gain 5th-level divine spell slots (L10+)"}
      - {name: "Transcendent Convergence", cp_cost: 30, tier: 5, effect: "1 min: 30 ft aura heals allies 2d6/turn, damages enemies 2d6. 1/LR"}
    milestones:
      initiate: {cp: 15, bonus: "+1 to Arcana or Insight"}
      journeyman: {cp: 30, bonus: "Channel Energy scaling — damage/healing increases one die size. Auto-unlock 1st-level divine slots"}
      master: {cp: 50, bonus: "+1 to divine spell save DCs. Auto-unlock 3rd-level divine slots"}
---

# Skill Trees — Feature-to-Tree Migration Map

This document defines the **11 shared skill trees** that replace class-locked progression in Ashfall's point-buy system. Every ability in the game lives in one of these trees. Any character can enter any tree by spending Character Points (see **Character Points**), subject to prerequisites.

---

## Tree Architecture

Each tree follows this structure:

| Tier | CP Cost | Level Gate | Role |
|------|---------|------------|------|
| **Entry** (Tier 1) | 5 CP | None | Core mechanic access, at-will abilities, resource system unlock |
| **Mid** (Tier 2) | 10 CP | T1 in same tree | Specialization features, enhanced combat loops, resource expansion |
| **Advanced** (Tier 3) | 15 CP | L5+, T2 in same tree | Signature abilities, specialization capstones, powerful passives |
| **Capstone** | 25 CP | L10+, 2x T3 in same tree | Pinnacle ability, tree-defining power |
| **Signature** | 30 CP | L15+, Capstone in tree | Ultimate expression, legacy-defining |

**Prerequisite chains** are vertical (must buy within same tree) and horizontal (some abilities require abilities from a different tree). Horizontal prereqs are noted explicitly.

**Horizontal prerequisite definition:** A horizontal prereq means you must have purchased at least one ability at the specified tier in the other tree before you can purchase this ability. The cross-tree purchase counts as depth investment in that other tree (for depth discounts and milestones) but does NOT count as depth in the tree containing the ability with the horizontal prereq. For example, "Horizontal prereq: T1 in Arcane Arts" means you need to have bought at least one Tier 1 ability from the Arcane Arts tree.

> **Abbreviation note:** CP = Character Points (this document). BP = Burnout Points (see **Magic** — Burnout). These are separate systems with distinct abbreviations.

---

## Tree Summary

| # | Tree | Fantasy | Primary Sources | Resource System |
|---|------|---------|-----------------|-----------------|
| 1 | **Martial Combat** | Melee mastery, stances, weapon techniques | Warrior, Channeler (Battlemage), Mutant (Apex) | — |
| 2 | **Ranged Combat** | Firearms, precision, explosives, called shots | Gunslinger, Scavenger (ranged) | — |
| 3 | **Stealth & Subterfuge** | Infiltration, assassination, evasion | Operative, Infiltrator | Intel Dice (if Infiltrator branch) |
| 4 | **Arcane Arts** | Spell crafting, metamagic, burnout, cantrips | Mystic | Spell Slots, Burnout |
| 5 | **Psionic Disciplines** | Focus, telekinesis, telepathy, psychokinesis | Psion | Focus (0-10+MIG) |
| 6 | **Technology** | Drones, hacking, gadgets, augmentation | Technician, Infiltrator (tech ops) | — |
| 7 | **Leadership & Social** | Commands, inspiration, negotiation, manipulation | Diplomat, Warrior (Warlord), Infiltrator (Handler) | — |
| 8 | **Survival & Scavenging** | Salvage, improvised combat, traps, wasteland adaptation | Scavenger | Salvage Dice |
| 9 | **Medicine** | Healing, stims, surgery, pharmacology, poison | Medic | Spell Slots (partial) |
| 10 | **Mutation** | Physical mutations, adaptation, feral combat | Mutant | Strain Dice |
| 11 | **Divine Channeling** | Channel energy, smites, spirits, devotion | Channeler | Spell Slots, Channel Energy |

---

## Tree 1: Martial Combat

**Fantasy:** Close-quarters combat mastery — stances, weapon techniques, battlefield dominance.

### Tier 1 (Entry) — 5 CP each

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Combat Stance** | Warrior L1 | Switch between Aggressive/Defensive/Balanced stances. Core combat loop entry. |
| **Power Strike** | Warrior skill tree (Combat Mastery T1) | +1d6 melee damage, 1/turn. |
| **Armor Mastery** | Warrior skill tree (Fortification T1) | Reduce physical damage by 2. |
| **Mutagen Physiology** | Mutant L1 | Proficiency with natural weapons (1d6+MIG). *Horizontal prereq for Mutation tree.* |
| **Weapon Specialization** | Warrior L2 | Choose one weapon group: +1 damage (scales +2 at L10, +3 at L15). |
| **Divine Strike** | Channeler skill tree (Battle Channeling T1) | +1d8 radiant/necrotic on melee hit. *Horizontal prereq: T1 in Divine Channeling.* |

### Tier 2 (Mid) — 10 CP each

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Extra Attack** | Warrior L3, Channeler L3 | When using 1 action to Strike, make two attacks. *If you have Extra Attack from multiple trees, you benefit from only one instance per action (your choice each turn). Does not stack with Ranged Combat Extra Attack.* |
| **Cleave** | Warrior skill tree (Combat Mastery T2) | Free attack on adjacent enemy when you kill a creature. |
| **Shield Wall** | Warrior skill tree (Fortification T2) | Grant adjacent ally your shield's DV bonus. |
| **War Magic** | Channeler (Battlemage) L6 | When casting cantrip, make one weapon attack as part of same action. Gain 1 Conduit Charge. *Horizontal prereq: T1 in Arcane Arts or Divine Channeling.* |
| **Rage** | Warrior (Berserker) L6 | +2 melee damage, advantage on MIG checks, resistance to physical. Cannot cast spells. END mod uses/SR. |
| **Reckless Strike** | Warrior (Berserker) L8 | Attack recklessly: advantage on melee attacks, attacks against you have advantage. |
| **Coordinated Strike** | Warrior (Warlord) L8 | When you hit in melee, next ally attacking same target has advantage. |

### Tier 3 (Advanced) — 15 CP each, Level 5+

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Devastating Critical** | Warrior skill tree (Combat Mastery T3) | Triple crit damage on melee attacks. |
| **Unyielding** | Warrior skill tree (Fortification T3) | Cannot be moved against your will. |
| **Commander's Presence** | Warrior skill tree (Tactical Operations T3) | Allies within 30 ft add proficiency to initiative. |
| **Fortress Stance** | Warrior (Vanguard) L8 | 2 Actions: you and allies within 10 ft gain +2 DV and resistance to chosen damage type. |
| **Conduit Strike** | Channeler (Battlemage) L8 | Spend Conduit Charges on melee hit for bonus damage + rider effects. *Horizontal prereq: War Magic.* |
| **Savage Critical** | Warrior (Berserker) L8 | Melee crits deal triple damage. |

### Capstone — 25 CP, Level 10+

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Unbreakable** | Warrior L5 (upgraded to capstone power level) | When reduced to 0 HP: drop to 1 HP, gain temp HP = 2x level, advantage on attacks while temp HP active, Grit always active. 1/LR. |

### Signature — 30 CP, Level 15+

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Titan's Stand** | Warrior L20 | 1 min: immunity to forced movement/prone/stunned/paralyzed/restrained, 30 temp HP/turn start, +3d6 melee damage, melee attacks hit all enemies within 5 ft. 1 exhaustion on end. 1/LR. |

**Specialization Milestones:**
- Initiate (15 CP): +1 to Athletics or Intimidation
- Journeyman (30 CP): Grit — when at/below half HP, reduce all incoming damage by END mod (min 1)
- Master (50 CP): +1 to melee attack rolls

---

## Tree 2: Ranged Combat

**Fantasy:** Firearms mastery, precision shooting, demolitions, mobile gunfighting.

### Tier 1 — 5 CP each

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Steady Aim** | Gunslinger L1 | 1 Action: next ranged attack this turn has advantage. Cannot have moved more than 10 ft. |
| **Lethal Precision** | Gunslinger L1 | Add AGI mod to ranged weapon damage rolls. |
| **Long Shot** | Gunslinger skill tree (Marksmanship T1) | Double weapon range. |
| **Field Maintenance** | Gunslinger skill tree (Gunsmith T1) | Repair firearms in 10 min. |
| **Evasive Maneuvers** | Gunslinger skill tree (Skirmisher T1) | Ignore difficult terrain, no OA when moving. |
| **Shrapnel Throw** | Scavenger skill tree (Scrapper T1) | Thrown weapons splash 1d4 to adjacent creatures. |

### Tier 2 — 10 CP each

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Extra Attack (Ranged)** | Gunslinger L3 | When using 1 action to Strike with ranged weapon, make two attacks. *Does not stack with Martial Combat Extra Attack.* |
| **Called Shot** | Gunslinger L2 | 2 Actions, -5 to hit: choose Head (+2d6), Legs (halve movement), Arms (Fortitude save or disarm). |
| **Sniper's Focus** | Gunslinger skill tree (Marksmanship T2) | +2 ranged if stationary. |
| **Custom Modifications** | Gunslinger skill tree (Gunsmith T2) | +1 damage, +1 modifier option on weapon. |
| **Combat Roll** | Gunslinger skill tree (Skirmisher T2) | Move + attack during movement, 1/SR. |
| **Explosives Expert** | Gunslinger (Demolitionist) L6 | Craft grenades, 15 ft radius, 3d6 fire/force. |

### Tier 3 — 15 CP each, Level 5+

| Ability | Source | Mechanic |
|---------|--------|----------|
| **One Shot, One Kill** | Gunslinger skill tree (Marksmanship T3) | Maximize ranged damage, 1/SR. |
| **Masterwork Weapon** | Gunslinger skill tree (Gunsmith T3) | +1d6 damage, no jams. |
| **Hit and Run** | Gunslinger skill tree (Skirmisher T3) | 15 ft free move after ranged attack. |
| **Kill Shot** | Gunslinger (Sharpshooter) L8 | 3 Actions: +3d6 damage, ignores cover. |
| **Gun-Fu** | Gunslinger (Trick Shot) L8 | No OA for ranged attacks within 15 ft, +1d6 damage within 15 ft. |
| **Shaped Charge** | Gunslinger (Demolitionist) L8 | Shape explosives as cone or line. |

### Capstone — 25 CP, Level 10+

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Dead Eye** | Gunslinger L5 (upgraded) | Declare before attack: auto-crit on hit, wasted on miss. 2/SR at capstone tier. |

### Signature — 30 CP, Level 15+

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Perfect Storm** | Gunslinger L20 | 1 min: attack every enemy in range each turn (max AGI+prof targets), +1d6 per hit, no ammo consumption, ignore cover, advantage on ranged attacks. Disadvantage on ranged for 1 hr after. 1/LR. |

**Specialization Milestones:**
- Initiate (15 CP): +1 to Perception or Survival
- Journeyman (30 CP): Quick Draw — draw/stow weapons as free action, +2 initiative
- Master (50 CP): +1 to ranged attack rolls

---

## Tree 3: Stealth & Subterfuge

**Fantasy:** Infiltration, assassination, intelligence gathering, evasion, deception.

### Tier 1 — 5 CP each

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Sneak Attack** | Stealth & Subterfuge T1 | +1d6 per 10 CP invested in this tree on hit with advantage or flanking. **Level cap: max dice = level÷2 + 2** (L5 max 4d6, L10 max 7d6, L15 max 9d6, L20 max 12d6). Crit doubles sneak dice. *PT-059 2026-03-20: level cap added. Pre-fix uncapped formula (1d6/10 base-CP) produced 148-291% DPR ratio vs nearest specialist at L10-L20 due to depth-discount inflation of tree_cp_paid above effective budget. Cap restores parity (L10 ratio: 106% vs Ranged specialist, within 70-110% same-role target).* |
| **Expertise** | Operative L1 | Choose 2 proficient skills: double proficiency bonus. |
| **Cunning Action** | Operative L2 | 1 Action: Dash, Disengage, or Hide. |
| **Assess Target** | Infiltrator L1 | 1 Action: learn one fact about target, +2 attacks/Deception/Insight vs target for 1 hr. |
| **Intel Dice** | Infiltrator L1 | Gain Intel Dice pool (INT mod + proficiency, min 3 d6). Replenish on SR. *Resource system entry.* |
| **Silent Takedown** | Operative skill tree (Wetwork T1) | Kill unaware target below HP threshold. |
| **Locksmith** | Operative skill tree (Infiltration T1) | +5 lockpicking, half time. |
| **Deep Cover** | Infiltrator skill tree (Tradecraft T1) | 2 cover identities, resist divination. |

### Tier 2 — 10 CP each

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Uncanny Dodge** | Operative L3 | Reaction: halve damage from seen attacker, 1/round. |
| **Exploit Weakness** | Infiltrator L3 | On hit vs Assessed target: 1 Intel Die → +1d6 + rider effect. |
| **Contingency** | Infiltrator L2 | Reaction: prepared responses (anticipated this, I have what we need, etc.). |
| **Assassinate** | Operative skill tree (Wetwork T2) | Auto-crit from stealth on surprise round. |
| **Security Bypass** | Operative skill tree (Infiltration T2) | Hack electronic locks, disable alarms. |
| **Counter-Intelligence** | Infiltrator skill tree (Tradecraft T2) | Advantage vs surveillance/scrying. |
| **Turn Asset** | Infiltrator skill tree (Subversion T2) | PRE check to recruit NPC informant. |
| **Coordinated Exploit** | Infiltrator skill tree (Field Ops T2) | Allies +1 to attacks vs Assessed targets. |

### Tier 3 — 15 CP each, Level 5+

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Ghost Strike** | Operative L5 | Hidden attack auto-crits, FORT DC 15 or stunned. 1/SR. |
| **Evasion** | Operative (Shadow) L6 | Reflex save for half → no damage on success, half on fail. |
| **Death Strike** | Operative skill tree (Wetwork T3) | Double Sneak Attack damage, 1/SR. |
| **Ghost Walk** | Operative skill tree (Infiltration T3) | Invisible 1 min, no sound, 1/SR. |
| **Master of Faces** | Infiltrator skill tree (Tradecraft T3) | Unlimited cover identities, perfect impersonation. |
| **Kill Order** | Infiltrator skill tree (Field Ops T3) | Allies crit on 19-20 vs Assessed target, 1/SR. |
| **Mastermind** | Infiltrator L5 | Intel Briefing, Double Agent, or Extraction Protocol. 1/SR, 3 Intel Dice. |

### Capstone — 25 CP, Level 10+

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Execution** | Operative (Assassin) L10 | Study 1 round, then attack: if target < 5x your level HP, FORT DC 18 or die. 1/LR. |

### Signature — 30 CP, Level 15+

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Shadow Sovereign** | Operative L20 | 1 min: disadvantage on attacks vs you, advantage on your attacks, Sneak Attack on every hit, 30 ft teleport/turn, immune to grapple/restrain. Disadvantage on Stealth 1 hr after. 1/LR. |
| **Ghost Protocol** | Infiltrator (Handler) L20 | Intel Dice pool fully refreshes; all enemies in current encounter automatically treated as Assessed (no action required); immediately activate two Spymaster's Gambit options simultaneously (no Intel Dice cost); your allies gain +1d4 to attack rolls against Assessed targets for 1 hr; you and all allies cannot be surprised and gain +2 to initiative for 1 hr. 1/LR. *Prerequisite: Spymaster's Gambit (Tree 7 Capstone).* |

**Specialization Milestones:**
- Initiate (15 CP): +1 to Stealth or Deception
- Journeyman (30 CP): Prepared for Anything — cannot be surprised, +2 initiative
- Master (50 CP): +1 to attack rolls against targets that haven't acted this combat

---

## Tree 4: Arcane Arts

**Fantasy:** Spell crafting, metamagic, cantrips, burnout management, arcane defense.

### Tier 1 — 5 CP each

> **Arcane Arts entry structure:** Two of this tree's Tier 1 abilities — **Cantrips** and **Spell Crafting** — are independent entry points into the spellcasting system. A character who wants only at-will damage can invest 5 CP in Cantrips alone. A character who wants both cantrips and spell slots invests 10 CP total (5 CP for each). This dual-entry structure is deliberate: it lets non-casters dip for cantrip damage without being required to purchase spell slots.

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Cantrips** | Mystic L1 | Learn 3 cantrips (matching current Mystic L1). At-will, add INT mod to damage. Scale +1 die at L5/L11/L17. *Entry ability — grants cantrip access.* |
| **Spell Crafting (Basic)** | Mystic L1 | Access to the Sigil System for modular spell crafting. Grants 1st-level spell slots (2 slots). *Resource system entry.* |
| **Mage Armor** | Mystic skill tree (Arcane Defense T1) | DV = 13 + AGI mod for 8 hrs. |
| **Spell Lore** | Mystic skill tree (Esoteric Knowledge T1) | Identify any spell within 60 ft. |
| **Elemental Focus** | Mystic skill tree (Elemental Mastery T1) | +1 damage per die on chosen element. |

### Tier 2 — 10 CP each

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Spell Slots (Expanded)** | Mystic progression | Gain 2nd-level spell slots. Total: 3 first / 2 second. |
| **Ritual Casting** | Mystic L2 | Cast known spells as ritual without consuming slot (10 min + 10 min/level; WIS or INT + proficiency vs DC 10 + spell level × 2; material components consumed). See **Magic** chapter for full ritual rules. |
| **Arcane Recovery** | Mystic L3 | Recover spell slots totaling half level, 1/SR. |
| **Counterspell** | Mystic L4 | Reaction: INT check DC 10+spell level to negate spell within 60 ft. 1/SR. |
| **Arcane Shield** | Mystic skill tree (Arcane Defense T2) | Reaction: +5 DV until start of next turn. |
| **Elemental Penetration** | Mystic skill tree (Elemental Mastery T2) | Disadvantage on saves vs chosen element spells. |
| **Arcane Sight** | Mystic skill tree (Esoteric Knowledge T2) | See magical auras, invisible creatures, illusions within 30 ft. |

### Tier 3 — 15 CP each, Level 5+

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Spell Slots (Advanced)** | Mystic progression | Gain 3rd-4th level spell slots. |
| **Signature Spell** | Mystic L5 | Choose one 1st or 2nd-level spell: cast at-will without slot. |
| **Elemental Affinity** | Mystic (Elementalist) L6 | Choose element: add INT mod to damage, change any spell's damage type. Gain Resonance system. |
| **Portent** | Mystic (Seer) L6 | Roll 2d20 after long rest; replace any visible creature's roll with portent die. |
| **Soul Harvest** | Mystic (Necromancer) L6 | Gain Soul Essence when creatures die within 30 ft. Raise Servant, Life Drain. |
| **Spell Reflection** | Mystic skill tree (Arcane Defense T3) | Redirect attack after Arcane Shield causes miss. |
| **Elemental Apotheosis** | Mystic skill tree (Elemental Mastery T3) | Maximize damage dice 1/SR. |
| **Forbidden Grimoire** | Mystic skill tree (Esoteric Knowledge T3) | Learn one spell from any tree's spell list. |

### Capstone — 25 CP, Level 10+

| Ability | Source | Mechanic |
|---------|--------|----------|
| **5th-Level Spell Access** | Mystic progression | Gain 5th-level spell slots (L10+). Includes Cataclysm (Elementalist L10), Foresight Echo (Seer L10), Death's Embrace (Necromancer L10) as signature options. |
| **6th-Level Spell Access** | Mystic progression | Gain 6th-level spell slots (L11+). Milestone unlock within Capstone tier — no additional CP cost beyond the Capstone purchase. |
| **7th-Level Spell Access** | Mystic progression | Gain 7th-level spell slots (L13+). Milestone unlock within Capstone tier — no additional CP cost beyond the Capstone purchase. Unlocks at L13+ per magic.md full caster table. |

### Signature — 30 CP, Level 15+

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Arcane Singularity** | Mystic L20 | 1 min: cast any 5th-level spell without slot, two spells/turn, spell DC +3, ignore material components, Counterspell-proof. 2 Burnout on end. 1/LR. |

**Specialization Milestones:**
- Initiate (15 CP): +1 to Arcana or Investigation
- Journeyman (30 CP): **Arcane Ward** — casting 1st+ level spell grants temp HP = 2x spell level (stacks with self, max 2x level). **Auto-unlock: 2nd-level spell slots** — if you do not already have 2nd-level spell slots from purchasing *Spell Slots (Expanded)*, you gain them automatically at this milestone. This does not grant additional slots beyond the standard progression; it ensures characters who invest deeply in Arcane Arts reach 2nd-level spell access without being forced to buy every intermediate ability in sequence.
- Master (50 CP): +1 to spell save DCs. **Auto-unlock: 3rd-level spell slots** — if you do not already have 3rd-level spell slots from purchasing *Spell Slots (Advanced)*, you gain 3rd-level slots automatically at this milestone. Characters who purchased *Spell Slots (Advanced)* explicitly are unaffected — this milestone only triggers for those who reached 50 CP depth via other ability purchases in the tree.
- Expert (60 CP): **Auto-unlock: 4th-level spell slots** — if you do not already have 4th-level spell slots, you gain them automatically at this threshold. This is the final auto-unlock tier; 5th-level and higher slots remain gated behind the Capstone.

---

## Tree 5: Psionic Disciplines

**Fantasy:** Psionic power via the Focus system — telekinesis, telepathy, psychokinesis.

**Species Restriction:** Biological only (no Synthetics).

### Tier 1 — 5 CP each

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Psionic Awakening** | Psion L1 | Choose 2 of 3 disciplines (Telekinesis, Telepathy, Psychokinesis). *Entry ability — grants Focus system (track 0-10+MIG).* |
| **Psi Strike** | Psion L1 | 1d8+WIS force, 60 ft, at-will. +1 Focus. Scales 2d8/3d8/4d8. |
| **Centering** | Psion L2 | 1 Action: reduce Focus by 1d4, gain temp HP = reduction. End charmed/frightened/dazed. |
| **Thought Shield** | Psion skill tree (Mental Fortress T1) | +1 Will saves, reduce psychic damage by WIS mod. |
| **Efficient Focus** | Psion skill tree (Focus Control T1) | Centering reduces 1d6 instead of 1d4. |
| **Enhanced Psi Strike** | Psion skill tree (Kinetic Mastery T1) | At Heightened+: +1d8 force damage. |

### Tier 2 — 10 CP each

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Discipline Surge** | Psion L2 | Kinetic Wave, Psychic Lance, or Force Eruption. +2 Focus each. |
| **Psionic Resilience** | Psion L3 | Resistance to psychic damage, advantage vs charmed/frightened. Gain 3rd discipline. |
| **Twin Strike** | Psion skill tree (Kinetic Mastery T2) | Target 2 creatures within 5 ft, +1 Focus total. |
| **Psionic Feedback** | Psion skill tree (Mental Fortress T2) | Melee attackers take WIS mod psychic damage. |
| **Sustained Power** | Psion skill tree (Focus Control T2) | Thresholds activate 1 level lower. |
| **Telekinetic Grip** | Psion (Kineticist) L6 | Restrain target within 60 ft, 1d8 dmg/turn. +1 Focus. |
| **Mind Probe** | Psion (Telepath) L6 | Read surface thoughts, 60 ft, concentration. +1 Focus. |
| **Psionic Aegis** | Psion (Warden) L6 | Reaction: reduce ally damage by 1d8+WIS, you take half. +1 Focus. |

### Tier 3 — 15 CP each, Level 5+

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Psionic Overcharge** | Psion L5 | Set Focus to 7 for 3 rounds: +1d6 psychic, DCs +2. Focus → 0, gain 1 exhaustion after. 1/SR. |
| **Psionic Cataclysm** | Psion skill tree (Kinetic T3) | 30 ft radius, 4d8+WIS force, Reflex half. +4 Focus. 1/LR. |
| **Mental Bastion** | Psion skill tree (Mental Fortress T3) | Reaction: allies in 15 ft resist all damage until next turn. +3 Focus. 1/SR. |
| **Perfect Balance** | Psion skill tree (Focus Control T3) | WIS save DC 15 to avoid Backlash at threshold. 1/SR. |
| **Kinetic Barrage** | Psion (Kineticist) L8 | 3d8+WIS to 3 creatures, Reflex half, push on fail. +2 Focus. |
| **Dominate** | Psion (Telepath) L8 | Will save: command one action. +2 Focus. |
| **Psionic Ward** | Psion (Warden) L8 | 15 ft radius: allies +1 saves, hostile magic must beat Will save. +2 Focus. |

### Capstone — 25 CP, Level 10+

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Telekinetic Maelstrom** | Psion (Kineticist) L10 | 20 ft vortex, 3d8+WIS/turn, difficult terrain, pull 10 ft. Concentration, 1 min. +3 Focus. 1/LR. |
| **Psychic Domination** | Psion (Telepath) L10 | Full mind control, 1 min, concentration. +4 Focus. 1/LR. |
| **Psionic Fortress** | Psion (Warden) L10 | 20 ft dome: allies resist all damage (you take it), 2d8 force entry. 1 min. +3 Focus. 1/LR. |

*(Choose one capstone — these represent branching mastery within the tree.)*

### Signature — 30 CP, Level 15+

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Psychic Apotheosis** | Psion L20 | 1 Action: unleash a 60 ft radius psychic shockwave. Every creature in range makes a Will save (DC = 10 + proficiency + WIS). Failure: 6d8+WIS psychic damage and stunned until end of their next turn. Success: half damage, not stunned. You gain +5 Focus at activation (likely triggering Backlash — this is intentional). Then, for 1 minute: your mind operates at a level beyond mortal comprehension. All psionic save DCs increase by +3, Psi Strike may be used as a free action once per turn (your action is still available for other actions), and creatures that fail saves against your abilities are dazed (−2 all checks) for an additional round after any other effects end. At the end of 1 minute: your Focus drops to 0 and you gain 2 exhaustion. 1/LR. |

**Specialization Milestones:**
- Initiate (15 CP): +1 to Perception or Insight
- Journeyman (30 CP): Psionic Resilience — resistance to psychic damage, advantage vs charmed/frightened
- Master (50 CP): +1 to psionic save DCs (abilities requiring Will saves)

---

## Tree 6: Technology

**Fantasy:** Drones, hacking, gadgets, augmentation, electronic warfare.

### Tier 1 — 5 CP each

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Neural Interface** | Technician L1 | INT (Technology) check to access/override devices within 30 ft. |
| **Jury-Rig** | Technician L1 | DC 12 Tech check to temporarily repair broken device (1 hr). |
| **Drone Companion (Basic)** | Technician L2 | Gain drone: HP 10+INT+(5×level), DV 12+prof, 30 ft fly, Scout/Carry/Distract/Shock. *Resource system entry — grants drone.* |
| **Modular Upgrades** | Technician skill tree (Engineering T1) | Drone upgrade: armor plating, weapon mount, or stealth module. |
| **System Breach** | Technician skill tree (Cyberwarfare T1) | Advantage on Tech checks to hack/disable. |
| **Subdermal Plating** | Technician skill tree (Augmentation T1) | +1 DV (stacks with armor), -1 Humanity. |

### Tier 2 — 10 CP each

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Overclock** | Technician L3 | Boost weapon (+1d6), armor (+2 DV), or drone (+1 action) for 1 min. 1/SR. |
| **Rapid Assembly** | Technician skill tree (Engineering T2) | Rebuild drone in 1 hr; two drones simultaneously. |
| **Digital Ghost** | Technician skill tree (Cyberwarfare T2) | Erase intrusion traces. |
| **Reflex Boosters** | Technician skill tree (Augmentation T2) | +2 initiative, advantage on Reflex saves, -1 Humanity. |
| **Advanced Drone** | Technician (Engineer) L6 | Drone +10 HP, +2 DV, ranged attack 1d6+INT. |
| **System Breach (Combat)** | Technician (Hacker) L6 | Control systems for 1 min, 60 ft, concentration. |
| **Efficient Integration** | Technician (Augmenter) L6 | Reduce augmentation Humanity cost by 1 (min 1). |

### Tier 3 — 15 CP each, Level 5+

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Masterwork** | Technician L5 | Craft gadget replicating 1st-2nd level spell (100 scrap, single use, max 3 carried). 1/LR. |
| **Siege Engine** | Technician skill tree (Engineering T3) | Build combat turret (50 HP, DV 15, 2d8 dmg). |
| **Neural Assault** | Technician skill tree (Cyberwarfare T3) | 30 ft, Will save: 3d8 psychic + stunned. 1/SR. |
| **Neural Overclock** | Technician skill tree (Augmentation T3) | +2 INT checks, 60 ft interface, dual-device control. 1 min, 1/SR. |
| **Deployable Turret** | Technician (Engineer) L8 | HP 20, DV 14, 2d6+INT at 60 ft. 1/SR. |
| **Neural Spike** | Technician (Hacker) L8 | 60 ft, Will save: 3d8 lightning + stunned. 1/SR. |
| **Combat Augments** | Technician (Augmenter) L8 | Choose 2: Retractable Blade, Integrated Firearm, Reactive Dermal Mesh, Enhanced Optics. |

### Capstone — 25 CP, Level 10+

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Masterwork Construct** | Technician (Engineer) L10 | HP 40, DV 16, 2×1d8+INT attacks. 8 hrs. 1/LR. |
| **Total System Override** | Technician (Hacker) L10 | Control all electronic systems within 100 ft for 10 min. 1/LR. |
| **Apotheosis Protocol** | Technician (Augmenter) L10 | 1 min: +2 all attributes, +2 DV, +10 ft speed, +2d6 weapon damage. 2 exhaustion after. 1/LR. |

### Signature — 30 CP, Level 15+

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Masterwork Protocol** | Technician L20 | 1 min: control devices within 120 ft, auto-hack, +5 DV shield, drone → Huge (80 HP, DV 18, 4d8 dmg). 1/LR. |

**Specialization Milestones:**
- Initiate (15 CP): +1 to Technology or Science
- Journeyman (30 CP): Jury-Rig improvements — natural 20 = permanent fix, natural 15+ = full day duration
- Master (50 CP): +1 to Technology skill checks and drone attack rolls

---

## Tree 7: Leadership & Social

**Fantasy:** Inspiration, tactical commands, negotiation, social manipulation, fear.

*Incorporates features from Diplomat (all), Warrior (Warlord), and Infiltrator (Handler). The tactical command sub-branch is integrated here rather than as a separate tree.*

### Tier 1 — 5 CP each

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Commanding Presence** | Diplomat L1 | Free Action, 1/round: one ally within 30 ft gains +1d4 to next attack or save. |
| **Silver Tongue** | Diplomat L1 | Advantage on Persuasion/Deception for first interaction with any individual/group. |
| **Inspire** | Diplomat L2 | 1 Action: allies within 30 ft gain temp HP = PRE mod + level. PRE mod uses/SR. |
| **Tactical Insight** | Diplomat skill tree (Leadership T1) | Grant ally +2 to next attack. |
| **Sow Doubt** | Infiltrator skill tree (Subversion T1) | Will save or -2 to next attack/check. 1/SR. |
| **Menacing Presence** | Diplomat skill tree (Manipulation T1) | Frighten enemies within 10 ft. |

### Tier 2 — 10 CP each

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Read the Room** | Diplomat L3 | Contested WIS vs PRE: learn emotional state, detect deception. |
| **Duck and Cover** | Diplomat L1 | Reaction: halve incoming damage. PRE mod uses/SR. |
| **Battle Orders** | Diplomat (Commander) L6 | 1 Action: up to 3 allies, choose Fortify/Reposition/Empower. |
| **Tactical Command** | Warrior (Warlord) L6 | 1 Action: ally within 30 ft uses reaction for move or attack. |
| **Silver-Tongued Devil** | Diplomat (Negotiator) L6 | Persuasion vs Will to compel non-hostile creature. 1/SR. |
| **Dread Presence** | Diplomat (Demagogue) L6 | 30 ft aura: escalating fear as enemies drop. |
| **Incite** | Diplomat (Demagogue) L6 | Will save: redirect aggression, break formation, sow doubt. PRE mod/SR. |
| **Build Network** | Infiltrator (Handler) L6 | Recruit contacts (max PRE mod) for small favors. |

### Tier 3 — 15 CP each, Level 5+

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Rally Cry** | Diplomat L5 | 60 ft: heal 2d8+PRE, end one condition, advantage on next attack/save. 1/LR. |
| **Hold the Line** | Diplomat (Commander) L8 | Reaction: ally at 0 HP drops to 1 instead. PRE mod/LR. |
| **War Cry** | Diplomat (Commander) L8 | 30 ft: enemies Will save or frightened, allies +2 attacks. |
| **Ceasefire** | Diplomat (Negotiator) L8 | 60 ft: enemies Will save or cannot attack 1 round. 1/SR. |
| **Psychic Fracture** | Diplomat (Demagogue) L8 | 30 ft: Will save or Frightened 1 min; cascading fear effects. 1/SR. |
| **Battlefield Commander** | Diplomat skill tree (Leadership T3) | Grant ally extra action, 1/SR. |

### Capstone — 25 CP, Level 10+

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Supreme Commander** | Diplomat (Commander) L10 | 1 min: at the start of each of your turns, choose one ally within 30 ft. That ally may immediately make one free Strike or use one at-will ability without spending an action. 1/LR. |
| **Mass Hysteria** | Diplomat (Demagogue) L10 | 60 ft: Will DC 18 or confused 1 min. 1/LR. |
| **Spymaster's Gambit** | Infiltrator (Handler) L10 | Entire contact network activates: Mass Distraction, Extraction, or Intelligence Coup. 4 Intel Dice. 1/LR. |

### Signature — 30 CP, Level 15+

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Mandate of the People** | Diplomat L20 | 120 ft: Will DC 20 or regard you as authority figure for 1 hr. 1/LR. |

**Specialization Milestones:**
- Initiate (15 CP): +1 to Persuasion or Intimidation
- Journeyman (30 CP): Battle Plan — allies who can hear you gain +2 initiative at combat start
- Master (50 CP): Commanding Presence die increases to 1d8

---

## Tree 8: Survival & Scavenging

**Fantasy:** Wasteland resourcefulness — salvage, improvised combat, traps, environmental mastery.

(Note: Scavenger's d8 HP upgrades to Survivor chassis d10 — an intentional chassis-era improvement reflecting the Survivor's physical resilience baseline.)

### Tier 1 — 5 CP each

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Scrounger's Instinct** | Scavenger L1 | Advantage on Perception/Investigation; find 1d4 Salvage after combat/10 min search. |
| **Improvised Arsenal** | Scavenger L1 | Proficient with all improvised weapons (1d8 damage, range 20/60). |
| **Salvage Dice** | Scavenger L1 | Gain Salvage Dice pool (proficiency + END mod, min 3 d6). Replenish on SR. *Resource system entry.* |
| **Efficient Salvage** | Scavenger skill tree (Salvager T1) | +2 to pool; rolling 6 doesn't expend die. |
| **Wasteland Gut** | Scavenger skill tree (Survivor T1) | Advantage vs poison/disease/radiation; half rations. |

### Tier 2 — 10 CP each

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Makeshift Solution** | Scavenger L2 | 1 Action, 1 Salvage Die: Improvised Cover, Caltrops, or Quick Patch. |
| **Scrapyard Strike** | Scavenger L3 | On hit with improvised weapon: 1 Salvage Die → +1d6 + status rider. |
| **Field Strip** | Scavenger skill tree (Salvager T2) | Destroy item → Salvage Dice equal to tier. |
| **Reinforced Scraps** | Scavenger skill tree (Survivor T2) | +1 DV on scavenged armor (10 min SR). |
| **Relentless Scrapper** | Scavenger skill tree (Scrapper T2) | Free thrown attack on kill. |
| **Supply Line** | Scavenger (Packrat) L6 | Makeshift Solution at 30 ft range. |
| **Jury-Rig Device** | Scavenger (Tinkerer) L6 | Flash Bang, Shock Trap, or Smoke Canister (max 2 active). |

### Tier 3 — 15 CP each, Level 5+

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Wasteland Ingenuity** | Scavenger L5 | 1 Action, 1/SR, 3 Salvage Dice: Scrap Bomb, Jury-Rigged Armor, or Field Innovation. |
| **Treasure Hunter** | Scavenger skill tree (Salvager T3) | Dice become d8s; find Tier 3 item 1/LR. |
| **Scrapyard Champion** | Scavenger skill tree (Scrapper T3) | Improvised weapons 1d10, Scrapyard Strike bonus 1d8. |
| **Hard to Kill** | Scavenger skill tree (Survivor T3) | Reaction, 2 Salvage Dice: reduce damage by 2d6+END; advantage death saves. |
| **Wrecking Ball** | Scavenger (Junker) L8 | 2 Actions: attack all creatures within 5 ft, each can trigger Scrapyard Strike. |
| **Overcharged Creations** | Scavenger (Tinkerer) L8 | Devices +1d6 dmg, DCs +2, max 3 active. |

### Capstone — 25 CP, Level 10+

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Scrap Storm** | Scavenger (Junker) L10 | 1 min: 1d12 improvised weapons, free Scrapyard Strike, +2 DV. 1 exhaustion on end. 1/LR. |
| **Quartermaster's Cache** | Scavenger (Packrat) L10 | All allies 30 ft: 2d6+END temp HP, +1 attacks, Makeshift Solution each. 4 Salvage Dice. 1/LR. |
| **Masterwork Improvisation** | Scavenger (Tinkerer) L10 | Scrap Mech Suit, EMP Bomb, or Mobile Barricade. 3 Salvage Dice. 1/LR. |

### Signature — 30 CP, Level 15+

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Wasteland's Chosen** | Scavenger L20 | 1 Action: for 1 minute, the Wasteland itself recognizes you as its master. You gain the following benefits simultaneously: **Adaptive Immunity** — resistance to fire, cold, lightning, acid, and poison damage; **Environmental Fury** — once per turn when you deal damage, you may spend 1 Salvage Die to add 2d8 environmental damage of any type available in the current terrain (GM determines eligible types: fire in burning rubble, cold in frozen wastes, acid in chemical dumps, etc.); **Improvised Mastery** — improvised weapons deal 1d12 damage and your Scrapyard Strike bonus increases to 2d8, triggering on every hit without expending Salvage Dice; **Wasteland Camouflage** — you cannot be tracked by non-magical means, you have advantage on Stealth checks, and creatures have disadvantage on Perception checks made to locate you. At the end of 1 minute: your Salvage Dice pool fully replenishes. 1/LR. |

**Specialization Milestones:**
- Initiate (15 CP): +1 to Survival or Investigation
- Journeyman (30 CP): Adaptive Response — first time taking specific damage type each encounter, gain resistance until end of next turn
- Master (50 CP): +1 to improvised weapon attack rolls and Salvage Die results

---

## Tree 9: Medicine

**Fantasy:** Healing, stims, surgery, pharmacology, poison — keeping allies alive and enemies debilitated.

### Tier 1 — 5 CP each

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Field Medic** | Medic L1 | 1 Action: touch, restore 1d6+WIS HP. Scales 2d6/3d6. WIS mod uses/SR. *Entry ability.* |
| **Triage** | Medic L1 | Free Action: learn exact HP of visible allies (60 ft), identify conditions. |
| **Preventive Care** | Medic L1 | 1 Bonus Action: grant DR 2 vs next damage (10 min). WIS mod/SR. |
| **Rapid Suture** | Medic skill tree (Trauma Surgery T1) | Field Medic +1d6 healing. |
| **Stimpack Crafter** | Medic skill tree (Pharmacology T1) | SR: craft 1d4 stims (heal 1d8+2). |
| **Protective Injection** | Medic skill tree (Field Support T1) | Grant ally temp HP. |

### Tier 2 — 10 CP each

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Emergency Stabilization** | Medic L2 | Stabilize dying creature, restore 1 HP. At-will. |
| **Combat Medic** | Medic L3 | Healing provokes no OA; move half speed while healing; advantage on Medicine in combat. |
| **Spell Slots (Medical)** | Medic L1 (half-caster) | Gain 1st-2nd level spell slots for medical/buff spells. *Half-caster resource — matches current Medic progression.* |
| **Mass Triage** | Medic skill tree (Trauma Surgery T2) | Field Medic targets 3 allies within 10 ft. |
| **Poison Crafter** | Medic skill tree (Pharmacology T2) | Craft poisons (2d6 dmg, DC 13 save). |
| **Greater Restoration** | Medic skill tree (Field Support T2) | Remove 1 condition. |
| **Trauma Response** | Medic (Field Surgeon) L6 | Reaction: move to ally at half HP, Field Medic as reaction. |
| **Combat Stimulants** | Medic (Pharmacist) L6 | 1d8+WIS temp HP + +2 DV, 1 min. WIS mod/SR. |
| **Toxic Strike** | Medic (Plague Doctor) L6 | +1d6 poison on hit, FORT save or poisoned. |

### Tier 3 — 15 CP each, Level 5+

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Expanded Medical Casting** | Medic progression | Access 3rd-4th level medical spell slots. |
| **Miracle Worker** | Medic L5 | Resurrection (dead < 1 min) OR Cure All. 1/LR. |
| **Battlefield Surgeon** | Medic skill tree (Trauma Surgery T3) | Field Medic as free action, 1/turn. |
| **Performance Enhancers** | Medic skill tree (Pharmacology T3) | Grant ally +2 attacks for 1 min. |
| **Prevent Death** | Medic skill tree (Field Support T3) | Ally auto-stabilizes at 0 HP. 1/LR. |
| **Emergency Surgery** | Medic (Field Surgeon) L8 | 3 Actions: heal 4d8+WIS, remove lingering injury. 1/SR. |
| **Miasma** | Medic (Plague Doctor) L8 | 15 ft poison cloud, 2d6, FORT save or poisoned. Concentration, 1 min. 1/SR. |
| **Masterwork Serum** | Medic (Pharmacist) L10 | Craft serum: +2 attribute 24 hrs, immunity 1 hr, or regen 1d4/round 10 min. 1/LR. |

### Capstone — 25 CP, Level 10+

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Master Healer's Repertoire** | Medic progression | Access 5th-level medical spell slots. Partial caster cap. |
| **Lazarus Protocol** | Medic (Field Surgeon) L10 | Revive dead ≤ 10 min at 1 HP + 3 exhaustion; OR fully heal + remove all conditions on living. 1/LR. |
| **Outbreak** | Medic (Plague Doctor) L10 | Touch: target becomes disease carrier, 3d6 necrotic spread within 10 ft. 1/LR. |

### Signature — 30 CP, Level 15+

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Phoenix Protocol** | Medic L20 | Touch: full HP, remove all conditions/diseases/injuries/exhaustion. Dead ≤ 1 hr: revive at full. You gain 4 exhaustion. 1/LR. |

**Specialization Milestones:**
- Initiate (15 CP): +1 to Medicine or Survival
- Journeyman (30 CP): **Adrenaline Surge** — reaction: reduce incoming damage by WIS mod. WIS mod/SR. **Auto-unlock: medical spell slots** — if you purchased *Spell Slots (Medical)* earlier, your slots upgrade to 2nd-level at this milestone. If you have not purchased *Spell Slots (Medical)*, you gain 1st-level medical spell slots automatically. Either way, reaching 30 CP depth is when Medicine becomes a functional half-caster. Medicine's slot ceiling is 5th level (unlocked by the *Master Healer's Repertoire* capstone) — this milestone is only the entry point.
- Master (50 CP): +1 to healing rolls and poison save DCs. **Auto-unlock: 3rd-level medical spell slots** — if you do not already have *Expanded Medical Casting*, you gain 3rd-level medical slots automatically at this milestone. Medicine's slot ceiling remains 5th level (Capstone: *Master Healer's Repertoire*) — this milestone only advances within that cap.

---

## Tree 10: Mutation

**Fantasy:** Physical mutations, adaptive biology, feral combat, monstrous transformation.

### Tier 1 — 5 CP each

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Mutations** | Mutant L1 | Choose 3 mutations from list. 2 active at once. Each provides passive + surge rider. *Entry ability — grants mutation system.* |
| **Strain Dice** | Mutant L1 | Gain Strain Dice pool (proficiency + END mod, min 3 d6). Replenish on SR. *Resource system entry.* |
| **Adapt** | Mutant L2 | 1 Action: swap active mutation for dormant one. |
| **Savage Strikes** | Mutant skill tree (Apex Predator T1) | Crits deal triple damage. |
| **Damage Reduction** | Mutant skill tree (Thick Hide T1) | Reduce physical damage by 1 (DR 2 at L9). |
| **Quick Adapt** | Mutant skill tree (Rapid Adaptation T1) | Adapt as free action 1/turn. |

### Tier 2 — 10 CP each

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Mutation Surge** | Mutant L3 | On hit with natural weapon: 1 Strain Die → +1d6 + surge rider (DC 8+prof+MIG). |
| **Adaptive Response** | Mutant L2 | First time taking specific damage type each encounter: gain resistance until end of next turn. |
| **Extra Limbs** | Mutant skill tree (Apex T2) | Additional mutated limbs grant utility: manipulate objects, hold items, interact with environment without occupying hands. Advantage on Athletics (Grapple) checks. Does not grant combat attacks — see Multi-Limb Combat (T3) for trained limb fighting. |
| **Mutation Resilience** | Mutant skill tree (Thick Hide T2) | Advantage vs poison/disease/radiation; immune to own mutation side effects. |
| **Third Slot** | Mutant skill tree (Rapid Adaptation T2) | 3 mutations active simultaneously. |
| **Predator's Focus** | Mutant (Apex) L6 | Mark creature: +2 attacks, +1d6 dmg, advantage tracking. |
| **Toxic Presence** | Mutant (Aberration) L6 | Creatures within 5 ft take END mod poison dmg/turn. |
| **Hybrid Mutations** | Mutant (Chimera) L6 | Swapped mutation retains passive for 1 round. |

### Tier 3 — 15 CP each, Level 5+

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Feral Evolution** | Mutant L5 | 1 min: +1 die size, +2 DV, temp HP, free Mutation Surge, disadvantage INT/PRE. 1 exhaustion on end. 1/SR. |
| **Alpha Mutation** | Mutant skill tree (Apex T3) | 1/round: Mutation Surge rider costs 0 Strain. |
| **Regenerative Tank** | Mutant skill tree (Thick Hide T3) | After taking damage: heal proficiency HP at turn start. |
| **Evolved Biology** | Mutant skill tree (Rapid Adaptation T3) | Strain Dice become d8s; learn 2 additional mutations (5 total). |
| **Killing Blow** | Mutant (Apex) L8 | Critical vs marked prey: Fortitude save or +3d6 + stun. |
| **Unstable Mutation** | Mutant (Aberration) L8 | 2 Strain Dice: Toxic Eruption, Bone Shrapnel, or Cellular Explosion. |
| **Mutation Synthesis** | Mutant (Chimera) L8 | 1 Strain Die: next Mutation Surge triggers 2 surge riders. |
| **Multi-Limb Combat** | Mutant skill tree (Apex T3) | Prerequisite: Extra Limbs. You've trained a mutated limb for coordinated combat. Once per turn when you take the Strike action, you may make one additional natural weapon attack (1d6, no ability modifier to damage). This attack does not benefit from Mutation Surge. |

### Capstone — 25 CP, Level 10+

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Apex Predator Form** | Mutant (Apex) L10 | 1 min: +2 die sizes, Extra Attack (does not stack with Extra Attack from other sources — if you already have Extra Attack, you instead gain +1d6 to natural weapon damage rolls), +2 saves, +10 ft speed. 2 exhaustion if also used Feral. 1/LR. |
| **Meltdown** | Mutant (Aberration) L10 | 20 ft radius: 6d10 acid+poison, Fort half. You take 4d10 unreducible, 2 exhaustion. 1/LR. |
| **Perfect Adaptation** | Mutant (Chimera) L10 | 1 min: all mutations active, free Synthesis on hit, +2 DV. 1 exhaustion on end. 1/LR. |

### Signature — 30 CP, Level 15+

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Evolutionary Zenith** | Mutant L20 | 1 Action: for 1 minute, your mutations reach a state no scientist has ever documented and no weapon was built to fight. All of your mutations activate simultaneously (no limit on active mutations). Your natural weapons deal +2 die sizes (e.g., 1d6 → 1d10), gain the **Brutal** property (crits deal triple damage for characters who do not already have Savage Strikes; for those who do, Brutal instead expands the crit range to 19-20), and ignore damage resistance. You gain +4 DV, 20 temporary HP at the start of each of your turns, and your movement speed increases by 20 ft. Every time you hit a creature with a natural weapon, you may trigger a Mutation Surge rider without spending a Strain Die. At the end of 1 minute: all mutations return to their normal active limit (2 or 3 with Third Slot), your natural weapons revert to normal, and you gain 3 levels of exhaustion (this exhaustion cannot be reduced until after your next long rest). 1/LR. |

**Specialization Milestones:**
- Initiate (15 CP): +1 to Athletics or Survival
- Journeyman (30 CP): Mutagen Physiology — natural weapons deal 1d8+MIG damage (+1d4 bonus on every natural weapon hit), usable while grappling
- Master (50 CP): +1 to natural weapon attack rolls and Strain Die results

---

## Tree 11: Divine Channeling

**Fantasy:** Channel energy, divine smites, spirits, devotion — holy/unholy power expressed through martial and magical means.

### Tier 1 — 5 CP each

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Channel Energy** | Channeler L1 | 1 Action: Harm (1d8 radiant/necrotic) OR Heal (1d8 HP). Scales 2d8/3d8/4d8. WIS mod/SR. *Entry ability — grants channel energy resource.* |
| **Cantrips (Divine)** | Channeler L1 | Learn 2 cantrips. Add WIS mod to damage. *Grants divine cantrip access.* |
| **Spiritual Sense** | Channeler L2 | Sense magic, undead, unnatural phenomena within 60 ft. |
| **Smite** | Channeler skill tree (Battle Channeling T1) | Expend spell slot: +1d8/level bonus damage (+1d8 vs undead/fiends). |
| **Speak with Spirits** | Channeler skill tree (Spirit Bond T1) | Speak with Dead 1/LR without slot. |
| **Unyielding** | Channeler skill tree (Resilience T1) | At 0 HP, drop to 1 instead. 1/LR. |

### Tier 2 — 10 CP each

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Spell Slots (Divine)** | Channeler progression | Gain 1st-2nd level spell slots for divine magic. *Resource system.* (Note: Divine Channeling T2 grants 1st-2nd level slots at 10 CP because Channeler is a half-caster who also invests in martial abilities — the higher cost reflects the hybrid nature of the tree. Arcane Arts T1 at 5 CP serves a pure-caster chassis.) |
| **Overflow** | Channeler L5 | Expend extra Channel Energy to affect second target; cast spell + Channel Energy in one action. |
| **Warpriest** | Channeler skill tree (Battle Channeling T2) | After casting spell, weapon attack as bonus action. |
| **Spirit Guide** | Channeler skill tree (Spirit Bond T2) | Companion answers yes/no questions 1/SR. |
| **Iron Will** | Channeler skill tree (Resilience T2) | Advantage vs frightened/charmed; immune to magical sleep. |
| **Spirit Companion** | Channeler (Shaman) L6 | Incorporeal spirit: scouts 120 ft, translates, +2 Perception. |
| **Arcane Armor** | Channeler (Battlemage) L6 | Wear heavy armor without losing spellcasting; weapons = spellcasting focus. |
| **Telekinesis** | Channeler (Oracle) L6 | Move 100 lbs, 30 ft; ranged attacks 2d6+WIS force. *Horizontal prereq for Psionic tree entry.* |

### Tier 3 — 15 CP each, Level 5+

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Spell Slots (Advanced Divine)** | Channeler progression | Gain 3rd-4th level divine spell slots. |
| **Avatar of War** | Channeler skill tree (Battle Channeling T3) | 1/LR, 1 min: +2d8 radiant/necrotic, resistance to all damage. |
| **Spirit Walk** | Channeler skill tree (Spirit Bond T3) | Spirit travels 1 mile, invisible, through objects. |
| **Martyr's Blessing** | Channeler skill tree (Resilience T3) | 1/LR: teleport adjacent to hit ally, take hit instead (resistance). |
| **Totem Bond** | Channeler (Shaman) L8 | Choose Wolf/Bear/Eagle/Serpent for passive bonus. |
| **Conduit Strike** | Channeler (Battlemage) L8 | Spend Conduit Charges: +1-3d8 + rider. |
| **Psychic Blast** | Channeler (Oracle) L8 | 30 ft cone: Will save, 4d6 psychic + dazed. 1/SR. |

### Capstone — 25 CP, Level 10+

| Ability | Source | Mechanic |
|---------|--------|----------|
| **5th-Level Divine Spells** | Channeler progression | Gain 5th-level slots. Includes Eldritch Tempest (Battlemage L10), Summon Greater Spirit (Shaman L10), Psychic Dominion (Oracle L10). |

### Signature — 30 CP, Level 15+

| Ability | Source | Mechanic |
|---------|--------|----------|
| **Transcendent Convergence** | Channeler L20 | 1 min: 30 ft aura heals allies 2d6/turn, damages enemies 2d6, Channel Energy 6d8 to all enemies (no action), spell DC +2. 3 exhaustion after. 1/LR. |

**Specialization Milestones:**
- Initiate (15 CP): +1 to Arcana or Insight
- Journeyman (30 CP): Channel Energy scaling — damage/healing increases one die size (e.g., 2d8 → 2d10 equivalent). **Auto-unlock: 1st–2nd level divine spell slots** — if you do not already have divine spell slots from purchasing *Spell Slots (Divine)*, you gain access to 1st-level divine spell slots automatically at this milestone. (Note: Divine Channeling is a hybrid tree; reaching 30 CP depth here represents substantial martial-divine investment and earns this access without requiring the T2 ability purchase directly.)
- Master (50 CP): +1 to divine spell save DCs. **Auto-unlock: 3rd–4th level divine spell slots** — if you do not already have *Spell Slots (Advanced Divine)*, you gain access to 3rd-level divine slots automatically at this milestone. 4th-level slots unlock at 60 CP total depth. The half-caster slot ceiling (5th level, requiring the Capstone) is unchanged.

---

## Universal Abilities (Tree-Agnostic)

Some abilities exist outside any tree and are purchasable by any character:

| Ability | Cost | Source | Mechanic |
|---------|------|--------|----------|
| Attribute +1 | 10 CP | Core | Max 20 |
| Weapon Proficiency (group) | 5 CP | Core | One weapon group |
| Martial Weapon Proficiency | 8 CP | Core | One martial weapon group |
| Medium Armor Proficiency | 10 CP | Core | — |
| Heavy Armor Proficiency | 15 CP | Core | Prereq: Medium Armor |
| Shield Proficiency | 5 CP | Core | — |
| Third Save Proficiency | 20 CP | Core | Level 7+ |
| Cantrip (from any tree) | 15 / 12 / 10 CP | Core | Learn 1 cantrip. Cost: 15 CP default; 12 CP (Leadership & Social tree Initiate+); 10 CP (Divine Channeling or Medicine tree Initiate+). See *Character Points* for full tiered pricing. |
| Doctrine | 0 CP | Core | Free pick: 1 at Level 1, 1 at Level 6. Max 2 active. Replaceable on long rest. |

---

## Recommended Build Templates

These recommended builds show how to replicate each v0.4 archetype as a chassis + tree combination. Each template lists the first 55 CP (L1-5) of purchases.

### Warrior Template (Heavy + Martial Combat)

| Purchase | Tree | Cost | Running Total |
|----------|------|------|---------------|
| Combat Stance | Martial | 5 | 5 |
| Power Strike | Martial | 5 | 10 |
| Armor Mastery | Martial | 5 | 15 — *end L1* |
| Weapon Specialization | Martial | 5 | 20 |
| Attribute +1 MIG | Universal | 10 | 30 — *L2-3* |
| Extra Attack | Martial | 10 | 40 |
| Shield Wall | Martial | 10 | 50 — *L4-5, Initiate milestone* |
| Devastating Critical | Martial | 13 | 64 — *L5-6, with -2 depth discount at 40+ CP (base 15 - 2 = 13)* |

### Mystic Template (Adept + Arcane Arts)

| Purchase | Tree | Cost | Running Total |
|----------|------|------|---------------|
| Cantrips | Arcane | 5 | 5 |
| Spell Crafting | Arcane | 5 | 10 |
| Mage Armor | Arcane | 5 | 15 — *end L1* |
| Ritual Casting | Arcane | 10 | 25 |
| Spell Slots (Expanded) | Arcane | 10 | 35 |
| Arcane Recovery | Arcane | 10 | 45 — *L3-4, Initiate milestone* |
| Counterspell | Arcane | 10 | 55 |

### Operative Template (Specialist + Stealth & Subterfuge)

| Purchase | Tree | Cost | Running Total |
|----------|------|------|---------------|
| Sneak Attack | Stealth | 5 | 5 |
| Expertise | Stealth | 5 | 10 |
| Cunning Action | Stealth | 5 | 15 — *end L1* |
| Silent Takedown | Stealth | 5 | 20 |
| Uncanny Dodge | Stealth | 10 | 30 |
| Locksmith | Stealth | 5 | 35 — *Initiate milestone* |
| Assassinate | Stealth | 10 | 45 |
| Attribute +1 AGI | Universal | 10 | 55 |

---

## Novel Builds (Impossible in Current System)

### Build 1: Armored Sniper (Heavy + Ranged Combat + Stealth)

A character in heavy armor who uses ranged attacks from concealed positions. Impossible now because Warriors can't access Sneak Attack and Gunslingers can't wear heavy armor.

- **Chassis:** Heavy (d12 HP, heavy armor, Fort+Will saves)
- **Primary tree:** Ranged Combat (Steady Aim, Lethal Precision, Extra Attack Ranged)
- **Secondary tree:** Stealth & Subterfuge (Sneak Attack for +2d6 from concealment)
- **Result:** A tank who fights at range, uses Steady Aim + Sneak Attack from heavy cover. Less mobile than a Gunslinger, less sneaky than an Operative, but much harder to kill than either.

### Build 2: Psionic Healer (Adept + Psionic Disciplines + Medicine)

A character who combines psionic powers with medical expertise. Impossible now because Psions can't access Medic features and vice versa.

- **Chassis:** Adept (d6 HP, Will+Fortitude saves)
- **Primary tree:** Psionic Disciplines (Focus system, Psi Strike, Psionic Aegis for damage reduction)
- **Secondary tree:** Medicine (Field Medic, Combat Medic, Trauma Response)
- **Result:** A support character who reduces damage via Psionic Aegis AND heals via Field Medic. Mental Bastion protects the whole party. Fragile (d6) but extremely useful. The 3rd tree surcharge keeps them from also picking up Arcane Arts.

### Build 3: Mutant Technician (Survivor + Mutation + Technology)

A mutant who understands their own biology through technological expertise. Impossible now because Mutants and Technicians are separate classes with no overlap.

- **Chassis:** Survivor (d10 HP, Light/Medium armor, Fort+Ref saves)
- **Primary tree:** Mutation (Mutations, Strain Dice, Feral Evolution)
- **Secondary tree:** Technology (Drone Companion, Overclock, Neural Interface)
- **Result:** A mutant who uses technology to monitor and enhance their mutations. The drone provides scouting/combat support while the character fights in melee with natural weapons. Overclock can boost the character's armor while Feral Evolution is active. The character understands their own biology in ways other mutants don't.

---

## Resource System Migration Summary

| Resource | Source Tree | Entry Cost | How It Works |
|----------|-----------|------------|--------------|
| **Spell Slots (Arcane)** | Arcane Arts | T1: 5 CP (basic, 1st-level) | Expand via T2 (2nd), T3 (3rd-4th), Capstone (5th) |
| **Spell Slots (Divine)** | Divine Channeling | T2: 10 CP (1st-level) | Same scaling structure |
| **Spell Slots (Medical)** | Medicine | T2: 10 CP (1st-level) | Partial caster: caps at 5th-level slots |
| **Focus** | Psionic Disciplines | T1: 5 CP (Psionic Awakening) | Full Focus system (0-10+MIG) |
| **Salvage Dice** | Survival & Scavenging | T1: 5 CP (Salvage Dice ability) | Pool = proficiency + END mod, d6 |
| **Intel Dice** | Stealth & Subterfuge | T1: 5 CP (Intel Dice ability) | Pool = INT mod + proficiency, d6 |
| **Strain Dice** | Mutation | T1: 5 CP (Strain Dice ability) | Pool = proficiency + END mod, d6 |
| **Channel Energy** | Divine Channeling | T1: 5 CP (Channel Energy ability) | Uses = WIS mod/SR |
| **Conduit Charges** | Martial + Divine (horizontal) | T2: 10 CP (War Magic) | Gain from spells/cantrips, max 3 |
| **Soul Essence** | Arcane Arts | T3: 15 CP (Soul Harvest) | Gain from kills within 30 ft, max 4 |

---

## Design Notes for Pipeline

**Why 11 trees, not 12:**
Tactical Command was merged into Leadership & Social. The feature pool (Warlord specialization + Commander specialization) shares too much DNA with Diplomat — both are "I tell allies what to do." A standalone Tactical Command tree would have ~8 abilities, most of which overlap with Leadership. The merger creates a robust tree with clear sub-branches (battlefield commands vs. social manipulation vs. fear/control).

**Why Sneak Attack scales with tree investment, not level:**
In the current system, Sneak Attack scales with Operative level (1d6 per odd level). In a point-buy system where anyone can buy Sneak Attack, level-based scaling would let a Warrior get 6d6 Sneak Attack "for free" at L17 just by buying the 5 CP entry. Tying scaling to total CP in the Stealth tree (10/20/30/45/60 CP thresholds, revised down from original 15/25/40/55/70) means reaching 6d6 requires ~60 CP investment — about 30% of the total budget. This preserves Sneak Attack as a defining feature of Stealth-heavy builds while reducing the opportunity cost to a level that doesn't feel punitive compared to the current "free" scaling.

**Why spell slots are tree-gated, not universal:**
If spell slots were a universal purchase (like attribute +1), any character could buy 5th-level slots for 25 CP. That trivializes magic. By gating slots inside Arcane Arts, Divine Channeling, and Medicine trees, characters must invest in the tree's prerequisite chain (cantrips → crafting → recovery → counterspell → expanded slots) before reaching higher-level magic. A Heavy chassis character CAN get 5th-level spells, but they'll spend 50+ CP in Arcane Arts to get there — nearly their entire L1-5 budget.

**Orphaned abilities — none:**
Every feature from all 12 archetypes has a home. The audit found zero orphans. The Channeler's three L6 specializations (Battlemage, Shaman, Oracle) were the trickiest — Battlemage straddles Martial + Divine, Shaman is pure Divine, and the Channeler's Oracle specialization has overlap with the Psionic Disciplines tree. Resolution: Battlemage abilities split between Martial Combat (War Magic, Conduit Strike) and Divine Channeling (Arcane Armor, Eldritch Tempest) with horizontal prereqs. Channeler's Oracle abilities placed in Divine Channeling with horizontal prereqs for Psionic tree entry.

**REVISION NOTES (addressing editor review issues):**

**Spell slot gating recalibration (RESOLVED):** Depth milestone auto-unlocks are now a formal rule — see the Specialization Milestones entry for each caster tree. Full casters (Arcane Arts, Divine Channeling) who reach 30 CP depth automatically gain 2nd-level slot access; at 50 CP depth they gain 3rd-level slot access, and at 60 CP they gain 4th-level slot access. Half-casters (Medicine) receive proportionally adjusted milestones: 30 CP depth unlocks 2nd-level slots; 50 CP depth unlocks 3rd-level slots (their milestone cap; full 5th-level access remains gated behind the Medicine Capstone). This compresses the prerequisite chain so deep casters reach competitive spell progression with ~50 CP instead of 75-100 CP, leaving room for secondary tree investment. Playtesting is recommended to confirm calibration.

**Arcane Arts dual-entry cost (CRITICAL):** Arcane Arts requires TWO T1 purchases (Cantrips 5 CP + Spell Crafting 5 CP = 10 CP) vs other trees' single 5 CP entry. This is INTENTIONAL — a non-caster can dip for just cantrips (5 CP) without getting spell slots, creating a meaningful choice. However, this 5 CP tax vs other resource systems should be documented explicitly: "Arcane Arts has a deliberate dual-entry structure. Characters who want both cantrips AND spell slots invest 10 CP; characters who want only at-will damage invest 5 CP for Cantrips alone."

**Save proficiency mismatches (CRITICAL):** Warrior (currently Fort+Ref) maps to Heavy chassis (Fort+Will) — a save swap. Mystic (currently Will+Ref) maps to Adept chassis (Will+Fort) — also a save swap. These are accepted as intentional chassis-era design changes. Each recommended build template should note the delta and the CP cost to restore the original save if desired (20 CP for a third save proficiency).

**Medic spell slots (RESOLVED):** The Medicine tree has two paths to spell slots that work together, not in conflict:
- **Early purchase:** *Spell Slots (Medical)* (T2, 10 CP) grants 1st-level medical spell slots immediately. This is available from depth 20 CP onward and represents a character who specializes in healing early.
- **Journeyman milestone** (30 CP): Automatically upgrades purchased slots to 2nd-level. If the T2 ability was never purchased, the milestone grants 1st-level slots as a floor — a deeply-invested Medicine character who skipped the explicit purchase still gets baseline casting access.
- **Master milestone** (50 CP): Upgrades to 3rd-level medical slots automatically.

The T2 purchase is valuable because it grants earlier access (at ~20 CP depth vs. 30 CP). The milestone is valuable because it provides an upgrade (to 2nd-level) for those who purchased early, and a safety net (1st-level) for those who didn't. There is no refund or double-grant scenario — the two paths combine cleanly.

**Abbreviation:** CP = Character Points (this document). BP = Burnout Points (see **Magic** — Burnout). These are separate systems with distinct abbreviations.

