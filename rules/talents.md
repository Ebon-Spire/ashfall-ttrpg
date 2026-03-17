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
  exploration:
    - {name: "Scavenger", effect: "During a short rest, find 1d6 credits of materials per level. Advantage on Survival checks for food, water, shelter."}
    - {name: "Linguist", effect: "Learn 3 languages or codes. Create ciphers. Advantage on Investigation to decode messages."}
    - {name: "Endurance Runner", effect: "March 16 hours before exhaustion saves. Half food/water needed. Double carrying capacity."}
    - {name: "Field Medic", effect: "Stabilize dying creature as free action. Medical kit heals +1d6 HP. Stacks with Medic features."}
  skill:
    - {name: "Expertise", effect: "Double proficiency bonus for one proficient skill. Can take multiple times.", repeatable: true}
    - {name: "Jack of All Trades", effect: "Add half proficiency bonus (rounded down) to ability checks without proficiency."}
    - {name: "Reliable", effect: "For one proficient skill, treat d20 rolls of 9 or lower as 10. Can take multiple times.", repeatable: true}
    - {name: "Quick Study", effect: "During short rest, swap one skill proficiency for another until next long rest."}
class_talents:
  Warrior:
    - {name: "Aggressive Momentum", enhances: "Combat Stance (Aggressive)", effect: "In Aggressive Stance, reducing a creature to 0 HP lets you move 15 ft and make one additional melee attack as a free action."}
    - {name: "Iron Fortress", enhances: "Combat Stance (Defensive)", effect: "In Defensive Stance, use Bodyguard without spending reaction. Still once per round."}
    - {name: "Relentless Second Wind", enhances: "Second Wind", effect: "Second Wind costs a bonus action instead of an action. Roll 3d10 instead of 2d10 when bloodied."}
    - {name: "Retaliatory Fury", enhances: "Retaliation Strike", effect: "Retaliation Strike can target the attacker. Dropping a creature to 0 HP regains one use."}
    - {name: "Unyielding Grit", enhances: "Grit", effect: "Advantage on Fortitude saves while bloodied. First time reduced to 0 HP each long rest, drop to 1 HP instead."}
    - {name: "Weapon Bond", enhances: "Weapon Specialization", effect: "Specialized weapon group gains +1 to attack rolls. Reroll natural 1s (must use new result)."}
  Gunslinger:
    - {name: "Dead Eye", enhances: "Trick Shot", effect: "Trick Shots have no disadvantage at long range. Critical hit with Trick Shot regains one use."}
    - {name: "Quick Draw", enhances: "Quick Draw (class feature)", effect: "Draw/holster/reload firearms as free action. Advantage on first attack roll on first combat turn."}
    - {name: "Bullet Time", enhances: "Evasive Maneuvers", effect: "After moving 20+ ft, attack rolls against you have disadvantage until next turn.", requires: "Evasive Maneuvers"}
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
    - {name: "Gadget Savant", enhances: "Engineering tree", effect: "Maintain 3 active gadgets (instead of 2). Gadget save DCs +2."}
    - {name: "Remote Hacker", enhances: "Cyberwarfare tree", effect: "Double hacking range. Set delayed triggers on hacked systems (activate within 1 hour).", requires: "System Breach"}
    - {name: "Augment Specialist", enhances: "Augmentation Tech tree", effect: "Installed augmentations reduce Humanity by 1 less (min 1). One additional augmentation beyond normal limit."}
    - {name: "Jury Rig", enhances: "Rapid Assembly", effect: "Once per short rest, create temporary Tier 1 gadget or tool for 10 minutes.", requires: "Rapid Assembly"}
  Medic:
    - {name: "Combat Medic", enhances: "Rapid Suture", effect: "Rapid Suture as bonus action. Target gains temp HP equal to WIS modifier.", requires: "Rapid Suture"}
    - {name: "Preventive Care", enhances: "Protective Injection", effect: "Protective Injection grants temp HP equal to WIS mod + proficiency bonus. Lasts until next long rest.", requires: "Protective Injection"}
    - {name: "Adrenaline Surge", enhances: "Combat Stimulants", effect: "Combat Stimulants also grant +10 ft speed and advantage on Reflex saves for 1 minute."}
    - {name: "Triage Expert", enhances: "Mass Triage", effect: "Mass Triage affects 3 allies (instead of 2). Each heals +1d8.", requires: "Mass Triage"}
    - {name: "Pharmacological Genius", enhances: "Pharmacology tree", effect: "Crafted stims and poisons have +2 save DCs. Double crafting quantity during short rest."}
    - {name: "Vital Signs Monitor", enhances: "Field Support tree", effect: "Know exact HP of allies within 60 ft. Reaction to move and stabilize ally who drops to 0 HP."}
  Operative:
    - {name: "Shadow Step", enhances: "Cunning Action", effect: "When you Hide via Cunning Action and succeed, teleport up to 15 ft to dim light or darkness."}
    - {name: "Exploit Weakness", enhances: "Sneak Attack", effect: "On Sneak Attack, choose: target has disadvantage on next attack, or -15 ft speed until your next turn."}
    - {name: "Vanishing Act", enhances: "Ghost Strike", effect: "After Ghost Strike, Hide as free action. If successful, hidden before target can react."}
    - {name: "Trap Sense", enhances: "Infiltration tree", effect: "Advantage on saves vs traps. Auto-detect traps within 10 ft. Disarm traps as bonus action."}
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
    - {name: "Battle Hymn", enhances: "Battle Channeling tree", effect: "Divine Strike melee hits restore HP equal to half radiant/necrotic damage dealt.", requires: "Divine Strike"}
    - {name: "Spirit Shield", enhances: "Spirit Bond tree", effect: "Reaction: spectral shield grants +3 DV to you or ally within 30 ft until your next turn. WIS mod uses per short rest."}
    - {name: "Resolute Faith", enhances: "Resilience tree", effect: "Successful saves grant temp HP equal to WIS mod. Critical success (beat DC by 10+) triggers free Channel Energy."}
    - {name: "Empowered Smite", enhances: "Divine Strike (Battle Channeling tree)", effect: "Spell slot melee damage increases by 1d8/slot level. Target must Fortitude save or be knocked prone."}
    - {name: "Shared Resilience", enhances: "Iron Will", effect: "Iron Will protection (adv vs frightened/charmed, immune to magical sleep) extends to allies within 15 ft.", requires: "Iron Will"}
legendary_talents:
  - {name: "Indomitable Will", effect: "Once per long rest, choose to succeed a failed save. Immune to frightened and charmed."}
  - {name: "Legendary Resilience", effect: "+30 HP max. Regain HP equal to proficiency bonus at start of each turn (if above 0 HP)."}
  - {name: "Master of Arms", effect: "Proficiency with all weapons and armor. Crit on 19-20 (or expand existing crit range by 1)."}
  - {name: "Arcane Supremacy", effect: "Regain all 3rd-level-or-lower spell slots on short rest. One cantrip can be cast as bonus action.", requires: "Spellcasting"}
  - {name: "Legendary Stealth", effect: "Hide when lightly obscured. First attack from hidden doesn't reveal position. No tracks or scent.", requires: "Stealth proficiency"}
  - {name: "Battlefield Presence", effect: "Inspire and Commanding Presence affect allies within 120 ft. Assisting allies grants one additional action.", requires: "Commanding Presence or Rally Cry"}
  - {name: "Mechanical Genius", effect: "Drone gains second action. Maintain 5 gadgets. Constructs have double HP.", requires: "Drone Companion or Engineering tree"}
  - {name: "Perfect Killer", effect: "Sneak Attack +2d6. On kill, free Hide action and move half speed.", requires: "Sneak Attack"}
---
# Talents

Talents are discrete, named capabilities that characters gain at specific levels. Unlike AP spending (which is gradual and customizable), a Talent is a single powerful feature that defines a moment of growth.

**Design Philosophy:** Every Talent should change how you play, not just add numbers. If a Talent doesn't make you reconsider your turn in combat or your approach to a challenge, it's not a Talent — it's a bonus.

---

## When You Gain Talents

Characters gain one Talent at each of the following levels:

| Level | Talent Type |
|-------|------------|
| 2 | Universal or Class |
| 4 | Universal or Class |
| 7 | Universal or Class |
| 9 | Universal or Class |
| 12 | Universal or Class |
| 14 | Universal or Class |
| 18 | Legendary (special list) |
| 19 | Legendary (special list) |

**Total: 8 Talents by Level 20** (6 standard + 2 legendary).

You cannot take the same Talent twice unless it specifically says otherwise.

---

## Universal Talents

Any character can select these regardless of class. Each addresses a different pillar of play.

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

### Exploration Talents

**Scavenger**
During a short rest, you can search the area to find 1d6 credits worth of useful materials per character level. You have advantage on Survival checks to find food, water, and shelter.

**Linguist**
Learn 3 languages or codes. You can create ciphers. You have advantage on Investigation checks to decode messages or interpret unknown writing.

**Endurance Runner**
You can march for 16 hours before making exhaustion saves (instead of 8). You require half the normal food and water. Your carrying capacity doubles.

**Field Medic**
You can stabilize a dying creature as a free action instead of an action. When you use a medical kit, the target regains 1d6 additional HP. This stacks with Medic class features.

### Skill Talents

**Expertise**
Choose one skill you are proficient in. Your proficiency bonus is doubled for that skill. You can take this Talent multiple times, choosing a different skill each time.

**Jack of All Trades**
Add half your proficiency bonus (rounded down) to any ability check that doesn't already include your proficiency bonus.

**Reliable**
Choose one skill you are proficient in. Whenever you make a check with that skill, treat any d20 roll of 9 or lower as a 10. You can take this Talent multiple times, choosing a different skill each time.

**Quick Study**
During a short rest, you can swap one skill proficiency for another. The new proficiency lasts until your next long rest, when it reverts.

---

## Class Talents

Each class has 6 Talents that enhance or modify existing class features. These follow the 13th Age principle: **Talents upgrade what you already do rather than adding unrelated abilities.**

### Warrior Talents

**Aggressive Momentum**
*Enhances: Combat Stance (Aggressive)*
While in Aggressive Stance, when you reduce a creature to 0 HP, you can move up to 15 ft and make one additional melee attack as a free action.

**Iron Fortress**
*Enhances: Combat Stance (Defensive)*
While in Defensive Stance, you can use Bodyguard without spending your reaction. You still can only use Bodyguard once per round.

**Relentless Second Wind**
*Enhances: Second Wind*
Second Wind no longer costs an action — it costs a bonus action instead. Additionally, if you are bloodied when you use Second Wind, roll 3d10 instead of 2d10.

**Retaliatory Fury**
*Enhances: Retaliation Strike*
Retaliation Strike can now target the attacker (not just a different enemy). Additionally, if your Retaliation Strike drops a creature to 0 HP, you regain one use of Retaliation Strike.

**Unyielding Grit**
*Enhances: Grit*
Grit now also grants advantage on Fortitude saves while bloodied. Additionally, the first time you are reduced to 0 HP each long rest, you drop to 1 HP instead.

**Weapon Bond**
*Enhances: Weapon Specialization*
Your chosen weapon group gains +1 to attack rolls (in addition to the existing damage bonus). When you roll a natural 1 on an attack with your specialized weapon, you can reroll it (must use new result).

### Gunslinger Talents

**Dead Eye**
*Enhances: Trick Shot*
Trick Shots no longer have disadvantage at long range. Additionally, when you score a critical hit with a Trick Shot, you regain one use of Trick Shot.

**Quick Draw**
*Enhances: Quick Draw (class feature)*
You can draw, holster, or reload a firearm as a free action (no action cost). On your first turn of combat, you gain advantage on your first attack roll.

**Bullet Time**
*Enhances: Evasive Maneuvers (Skirmisher tree)*
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
*Enhances: Engineering tree*
You can maintain 3 active gadgets simultaneously (instead of 2). Gadgets you build have +2 to their save DCs.

**Remote Hacker**
*Enhances: Cyberwarfare tree*
Your hacking range doubles. When you successfully hack a system, you can choose to set a delayed trigger (activates at a time you specify within 1 hour). Requires: System Breach.

**Augment Specialist**
*Enhances: Augmentation Tech tree*
Augmentations you install reduce Humanity by 1 less (minimum 1 per augment). You can have one additional augmentation beyond the normal limit.

**Jury Rig**
*Enhances: Rapid Assembly (Engineering tree)*
Once per short rest, you can jury-rig a temporary device that mimics any Tier 1 gadget or tool for 10 minutes. It falls apart after use. Requires: Rapid Assembly.

### Medic Talents

**Combat Medic**
*Enhances: Rapid Suture (Trauma Surgery tree)*
Rapid Suture can now be used as a bonus action (instead of 1 action). The target gains temp HP equal to your WIS modifier in addition to the healing. Requires: Rapid Suture.

**Preventive Care**
*Enhances: Protective Injection (Field Support tree)*
Protective Injection now grants temp HP equal to your WIS mod + proficiency bonus (instead of just WIS mod). Temp HP from your injections lasts until the next long rest. Requires: Protective Injection.

**Adrenaline Surge**
*Enhances: Combat Stimulants*
When you administer Combat Stimulants, the target also gains +10 ft speed and advantage on Reflex saves for 1 minute.

**Triage Expert**
*Enhances: Mass Triage (Trauma Surgery tree)*
Mass Triage can now affect 3 allies simultaneously (instead of 2). Each target heals an additional 1d8. Requires: Mass Triage.

**Pharmacological Genius**
*Enhances: Pharmacology tree*
Stims and poisons you craft have +2 to their save DCs. You can craft double the normal quantity during a short rest.

**Vital Signs Monitor**
*Enhances: Field Support tree*
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
*Enhances: Infiltration tree*
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
*Enhances: Battle Channeling tree*
When you hit with a melee attack enhanced by Divine Strike, you regain HP equal to half the radiant/necrotic damage dealt. Requires: Divine Strike.

**Spirit Shield**
*Enhances: Spirit Bond tree*
As a reaction, you can summon a spectral shield that grants +3 DV to you or an ally within 30 ft until the start of your next turn. Uses: WIS mod per short rest.

**Resolute Faith**
*Enhances: Resilience tree*
When you succeed on a saving throw, you gain temp HP equal to your WIS modifier. When you critically succeed (beat DC by 10+), you can immediately use Channel Energy as a free action.

**Empowered Smite**
*Enhances: Divine Strike (Battle Channeling tree)*
When you expend a spell slot to deal additional damage on a melee hit, the damage increases by 1d8 per slot level (instead of the base scaling). The target must make a Fortitude save or be knocked prone.

**Shared Resilience**
*Enhances: Iron Will (Resilience tree)*
Your Iron Will protection extends to all allies within 15 ft of you — they gain advantage on saves against being frightened or charmed, and cannot be magically put to sleep while within range. Requires: Iron Will.

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
*Requires: Drone Companion or Engineering tree*
Your drone (or primary construct) gains a second action on each of its turns. You can maintain 5 active gadgets simultaneously. Constructs you create have double their normal HP.

**Perfect Killer**
*Requires: Sneak Attack*
Your Sneak Attack damage increases by 2d6. When you reduce a creature to 0 HP, you can immediately take a Hide action as a free action and move up to half your speed.

---

## Talent Interaction Rules

### Stacking
- Talents do not stack with each other unless explicitly stated.
- A Talent that modifies a class feature works with that feature's existing improvements (e.g., Focused Destruction enhances cantrip scaling that already exists).
- Universal and Class Talents can be taken in any combination — you are not required to take any Class Talents.

### Prerequisites
- Class Talents require the class feature they enhance. You cannot take Retaliatory Fury without having Retaliation Strike.
- Some Talents require a specific AP purchase (noted with "Requires:"). You must have purchased the prerequisite ability before selecting the Talent.
- Legendary Talents have their own prerequisites as listed.

### Retraining
- During a long rest (1 week), you can swap one non-Legendary Talent for another Talent you qualify for.
- You cannot swap a Talent if another Talent or feature depends on it.
- Legendary Talents cannot be retrained.

### Bounded Accuracy
All Talents respect the +18 bonus cap. No combination of Talents can cause a character's total bonus to any single roll to exceed +18. If a Talent would cause a bonus to exceed the cap, the excess is lost.
