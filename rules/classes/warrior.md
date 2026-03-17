---
game_data: true
name: Warrior
primary_stats: [MIG, END]
hit_die: d12
hp_base: 14
hp_per_level: 7
starting_humanity: 10
armor_proficiency: [Light, Medium, Heavy, Shields]
weapon_proficiency: [Simple, Martial, Heavy, Ranged]
save_proficiencies: [Fortitude, Reflex]
skill_bonuses:
  - {skill: Athletics, bonus: 2}
  - {skill: Intimidation, bonus: 2}
starting_ap: 15
role: Tank/Striker
magic_type: "None (15 AP/cantrip)"
level_1_features: [Combat Stance, Second Wind, Bodyguard, Retaliation Strike, Grit]
skill_trees:
  - name: Combat Mastery
    focus: Offense
    abilities:
      - {name: Power Strike, ap_cost: 5, tier: 1, effect: "+1d6 damage/turn"}
      - {name: Cleave, ap_cost: 10, tier: 2, effect: "Free attack on kill"}
      - {name: Devastating Critical, ap_cost: 15, tier: 3, effect: "Triple crit damage"}
  - name: Fortification
    focus: Defense
    abilities:
      - {name: Armor Mastery, ap_cost: 5, tier: 1, effect: "-2 physical damage"}
      - {name: Shield Wall, ap_cost: 10, tier: 2, effect: "+2 DV to adjacent ally"}
      - {name: Immovable Object, ap_cost: 15, tier: 3, effect: "Cannot be moved"}
  - name: Tactical Operations
    focus: Team
    abilities:
      - {name: Rally Cry, ap_cost: 5, tier: 1, effect: "Temp HP to allies in 30ft"}
      - {name: Tactical Positioning, ap_cost: 10, tier: 2, effect: "Allies gain adv on opportunity attacks"}
      - {name: "Commander's Presence", ap_cost: 15, tier: 3, effect: "Allies add prof to initiative"}
features:
  - name: Combat Stance
    level: 1
    action: "1 Action to switch"
    frequency: At-Will
    description: "Choose one stance. Only one stance active at a time."
    choices:
      - {name: Aggressive, effect: "+2 damage to all rolls, -1 to DV"}
      - {name: Defensive, effect: "+2 to DV, -2 to all damage rolls"}
      - {name: Balanced, effect: "Gain +1 reaction per round (max 2 total)"}
  - name: Second Wind
    level: 1
    action: "1 Action"
    frequency: "1/Short Rest"
    description: "Heal 2d10 + Warrior level HP. Gain temporary HP equal to Warrior level. Scales with Warrior levels only for multiclassed characters."
  - name: Bodyguard
    level: 1
    action: Reaction
    frequency: At-Will
    description: "When enemy attacks an ally within 30 ft, move up to 15 ft toward ally (no OA). If within 5 ft of ally after move, become the target instead. Must see attacker. Does not work vs AOE, hidden/invisible creatures, or self-inflicted damage."
  - name: Retaliation Strike
    level: 1
    action: Reaction
    frequency: "END mod times/Short Rest (min 1)"
    description: "When hit by melee attack from enemy within 5 ft, make a melee attack against any enemy within 5 ft (including attacker). 1/round."
  - name: Grit
    level: 1
    action: Passive
    frequency: Always
    description: "When at or below half max HP, reduce all incoming damage by END modifier (minimum 1)."
  - name: Weapon Specialization
    level: 2
    action: Passive
    frequency: Always
    description: "Choose one weapon group. +1 damage with chosen group. Scales to +2 at L10, +3 at L15."
    choices:
      - {name: Heavy Melee, effect: "+1 damage with heavy melee weapons"}
      - {name: Light Melee, effect: "+1 damage with light melee weapons"}
      - {name: Ranged Projectile, effect: "+1 damage with ranged projectile weapons"}
      - {name: Ranged Energy, effect: "+1 damage with ranged energy weapons"}
      - {name: Thrown, effect: "+1 damage with thrown weapons"}
      - {name: Unarmed, effect: "+1 damage with unarmed attacks"}
  - name: Extra Attack
    level: 3
    action: Passive
    frequency: "1/Turn"
    description: "When using 1 action to Strike, make two attacks. Second attack has no multiple attack penalty."
  - name: Attribute Improvement
    level: 4
    action: Passive
    frequency: Permanent
    description: "Increase one attribute by +2, or two attributes by +1 each. Maximum 20."
  - name: Unbreakable
    level: 5
    action: Passive
    frequency: "1/Long Rest"
    description: "When reduced to 0 HP, drop to 1 HP instead. Gain temp HP equal to 2x level. While temp HP active: advantage on all attacks and Grit activates regardless of HP."
specialization_details:
  - name: Vanguard
    role: Tank/Protector
    features:
      - {name: Shield Wall, level: 6, action: Reaction, description: "When ally within 5 ft is attacked: without shield impose disadvantage on attack; with shield add shield bonus to ally DV."}
      - {name: Iron Skin, level: 6, action: Passive, description: "DR 1 vs physical damage (half proficiency rounded down). DR 2 at Level 9."}
      - {name: Fortress Stance, level: 8, action: "2 Actions", description: "You and allies within 10 ft gain +2 DV and resistance to one chosen damage type until your next turn. You cannot move."}
      - {name: Immovable Object, level: 10, action: "Bonus Action", description: "1/Long Rest. 1 minute duration. Cannot be moved against will. Advantage on FORT saves. Free melee attack when enemy misses you in melee."}
  - name: Berserker
    role: Damage/Rage
    features:
      - {name: Rage, level: 6, action: "1 Action", description: "END mod times/Short Rest. 1 minute. +2 melee damage, advantage on MIG checks/saves, resistance to physical damage. Cannot cast spells."}
      - {name: Reckless Strike, level: 8, action: Passive, description: "Choose to attack recklessly: advantage on all melee attacks this turn, but attacks against you have advantage until next turn."}
      - {name: Savage Critical, level: 8, action: Passive, description: "Melee crits deal triple damage instead of double."}
      - {name: Deathless Fury, level: 10, action: Passive, description: "1/Long Rest. While raging at 0 HP: DC 12 END save to drop to 1 HP instead. DC increases by +2 per success."}
  - name: Warlord
    role: Tactical/Leadership
    features:
      - {name: Tactical Command, level: 6, action: "1 Action", description: "One ally within 30 ft uses reaction to move half speed (no OA) or make one weapon attack."}
      - {name: Battle Plan, level: 6, action: Passive, description: "All allies who can hear you gain +2 to initiative at combat start."}
      - {name: Coordinated Strike, level: 8, action: Passive, description: "When you hit an enemy in melee, next ally to attack that target gains advantage."}
      - {name: Inspiring Leader, level: 8, action: "1 minute (Short Rest)", description: "Up to 6 creatures gain temp HP equal to your level + PRE modifier."}
      - {name: Supreme Tactician, level: 10, action: "Start of Turn", description: "1/Long Rest. Up to 2 allies within 30 ft immediately take one weapon attack or move up to their speed as a free action."}
specializations: [Vanguard, Berserker, Warlord]
starting_equipment:
  - Heavy melee weapon or martial weapon
  - Medium or heavy armor and shield
  - Survival kit
---
# Warrior

*In the Wasteland, strength is the first language and violence is the only currency universally accepted. Warriors are the backbone of every settlement, the enforcers of every gang, the bulwark against every threat. They don't rely on tricks, technology, or arcane power — just steel, grit, and the unshakable conviction that they will not fall.*

*You are the Warrior. When the dust settles and the bodies are counted, you're still standing. You've taken hits that would kill lesser souls and walked away with scars to prove it. You don't need to be the smartest or the fastest — you just need to be the last one standing. And you always are.*

![A warrior wielding a massive hammer and shield stands ready for battle in the wasteland](/images/illustrations/warrior-hammer-shield.png)

---

## Base Archetype (Levels 1-5)

### Core Stats

| Attribute | Value |
|-----------|-------|
| **Primary Attributes** | Might (MIG), Endurance (END) |
| **Hit Die** | d12 |
| **HP at Level 1** | 14 + END modifier |
| **HP per Level** | 1d12 (or 7) + END modifier |
| **Starting Humanity** | 10 |
| **Armor Proficiency** | All armor, shields |
| **Weapon Proficiency** | All weapons |
| **Save Proficiencies** | Fortitude, Reflex |
| **Skill Bonuses** | Athletics +2, Intimidation +2 |
| **Starting AP** | 15 |

### Starting Equipment

- Heavy melee weapon or martial weapon of choice
- Medium or heavy armor and shield
- Survival kit (bedroll, flint, canteen, 3 days rations)

### Level Progression (1-5)

#### Level 1: Combat Stance & Second Wind

- **Combat Stance (At-Will, 1 Action):** Choose one stance. You can switch stances as a 1-action activity. Only one stance can be active at a time. When you roll initiative, you may enter a stance of your choice as a free action (this does not cost an action on your first turn).
  - *Aggressive Stance:* +2 to all damage rolls, -1 to Defense Value (DV).
  - *Defensive Stance:* +2 to Defense Value (DV), -2 to all damage rolls.
  - *Balanced Stance:* Gain +1 reaction per round (maximum 2 reactions).

- **Second Wind (1 Action, 1/Short Rest):** Heal yourself for **2d10 + your Warrior level** in HP and gain **temporary HP equal to your Warrior level**. Usable even in combat. For multiclassed characters, this scales with Warrior levels only, not total character level.

- **Bodyguard (Reaction):** When an enemy attacks an ally within 30 feet of you, you can use your reaction to move up to 15 feet toward that ally (this movement does not provoke opportunity attacks). If you end this movement within 5 feet of the ally, you become the target of the attack instead. All damage and effects apply to you; the original target takes none. You must be able to see the attacker. If you are already within 5 feet of the ally, no movement is needed. This movement follows normal terrain rules (difficult terrain costs double). Does not work against area-of-effect abilities, attacks from hidden/invisible creatures, or self-inflicted damage.

- **Retaliation Strike (Reaction, END modifier/Short Rest, minimum 1):** When you are hit by a melee attack from an enemy within 5 feet, you can use your reaction to make a melee weapon attack against any enemy within 5 feet of you, including the attacker. This attack uses your normal attack bonus and deals normal damage. You can use Retaliation Strike only once per round. **Note:** Both Bodyguard and Retaliation Strike cost your reaction. You cannot use both in the same round — choose to protect an ally or counter-attack, not both.

- **Grit (Passive):** When your current HP (not counting temporary HP) is at or below half your maximum HP, reduce all incoming damage by your END modifier (minimum 1). Temporary HP does not count toward your current HP for this check. The Wasteland doesn't kill you — it just makes you angrier.

#### Level 2: Weapon Specialization

Choose one weapon group (Heavy Melee, Light Melee, Ranged Projectile, Ranged Energy, Thrown, or Unarmed). You gain **+1 to all damage rolls** with weapons in that group. This bonus increases to +2 at Level 10 and +3 at Level 15.

#### Level 3: Extra Attack

**Extra Attack:** When you use 1 action to Strike, you make two attacks instead of one. The second attack does not incur the multiple attack penalty. If you use additional actions to Strike, those follow the normal multiple attack penalty (-3 for the second Strike action, -6 for the third, etc.). Extra Attack can only trigger once per turn.

#### Level 4: Attribute Improvement

Increase one attribute by +2, or two attributes by +1 each (maximum 20 before modifiers).

#### Level 5 Capstone: Unbreakable

**Unbreakable (1/Long Rest, Passive Trigger):** When you would be reduced to 0 HP, you instead drop to **1 HP** and gain **temporary HP equal to twice your level** (10 temp HP at Level 5, 20 at Level 10, etc.). While you have this temp HP, you have advantage on all attack rolls and your Grit passive activates regardless of current HP. This ability recharges only after a long rest.

### Skill Trees

Warriors have access to three skill trees, each costing AP to unlock features:

#### Combat Mastery (Offense-Focused)

- **Power Strike (5 AP):** Once per turn, deal an extra 1d6 damage on a hit.
- **Cleave (10 AP, Requires Power Strike):** When you drop an enemy to 0 HP with a melee attack, make a free melee attack against another enemy within reach.
- **Devastating Critical (15 AP, Requires Power Strike):** When you score a critical hit, roll all damage dice three times instead of twice.

#### Fortification (Defense-Focused)

- **Armor Mastery (5 AP):** Reduce all incoming physical damage by 2 (minimum 1).
- **Shield Wall (10 AP, Requires Shield):** As a reaction, grant +2 DV to an adjacent ally until the start of your next turn.
- **Immovable Object (15 AP, Requires Armor Mastery):** You cannot be forcibly moved (knocked back, pulled, etc.) against your will unless you choose to allow it.

#### Tactical Operations (Team-Focused)

- **Rally Cry (5 AP, 1 Action, 1/Short Rest):** All allies within 30 feet gain temporary HP equal to your MIG modifier + your proficiency bonus.
- **Tactical Positioning (10 AP):** Allies gain advantage on opportunity attacks against enemies you threaten.
- **Commander's Presence (15 AP, Requires Rally Cry):** Allies within 10 feet of you add your proficiency bonus to their initiative rolls.

### Magic Relationship

Warriors have **no innate magical ability**. However, they can learn cantrips by spending **15 AP per cantrip**. Cantrips use the Warrior's Might modifier for attack rolls and save DCs. Warriors cannot learn leveled spells unless they multiclass or take a specific Mastery Path.

---

## Advanced Specializations (Levels 6-10)

Warriors who reach level 6 have mastered the fundamentals of combat. Now they choose how to excel: protecting allies as an unyielding Vanguard, unleashing primal fury as a Berserker, or commanding the battlefield as a Warlord.

**System Notes:**
- All characters gain 10 AP per level from levels 6-10
- Short rest: 8 hours
- Long rest: 1 week
- Bounded accuracy: maximum total bonus of +18
- 3-action economy per turn

### Vanguard (Tank/Protector)

*The Vanguard is a living shield, standing between allies and death. They draw aggro, absorb punishment that would fell lesser warriors, and turn their body into an impenetrable fortress. When a Vanguard plants their feet, entire armies break against them.*

**Prerequisites:** Level 6, Warrior archetype

**New Skill Tree Unlocked:** Bulwark (shield techniques, damage reduction, area denial, taunt mechanics)

*Note: Some Vanguard abilities share names with Fortification skill tree abilities. The specialization version replaces the skill tree version if you have both — use the more powerful specialization version.*

#### Level 6 Features

**Shield Wall** (Reaction)
When an ally within 10 feet is attacked, you can use your reaction to impose disadvantage on the attack roll. If you are wielding a shield, you instead add your shield's bonus to their Defense Value against that attack. You must be able to see both the attacker and the ally.

**Iron Skin** (Passive)
Your body has hardened from countless battles. You gain damage reduction equal to half your proficiency bonus (rounded down) against all physical damage (bludgeoning, piercing, slashing). At level 6, this grants DR 1; at level 9, DR 2.

#### Level 8 Features

**Fortress Stance** (2 Actions)
You plant yourself and become an immovable defensive position. Spend 2 actions to enter Fortress Stance, which lasts until the start of your next turn. While in this stance:
- You and all allies within 10 feet gain +2 to Defense Value
- Choose one damage type (fire, cold, lightning, acid, poison, necrotic, radiant, psychic, or force) — you and allies within 10 feet gain resistance to that damage type
- You cannot move or be moved

This stance ends immediately if you move voluntarily or are knocked unconscious.

#### Level 10 Capstone Ability

**Immovable Object** (1/Long Rest)
Once per long rest as 1 action (bonus), you can activate Immovable Object for 1 minute. While active:
- You cannot be moved, pushed, pulled, knocked prone, or teleported against your will
- You have advantage on all Fortitude saving throws
- When an enemy misses you with a melee attack, you can immediately make a free melee weapon attack against them (no action required)

This represents the pinnacle of defensive martial mastery — you become an absolute anchor point on the battlefield.

---

### Berserker (Damage/Rage)

*The Berserker channels raw, primal fury into devastating attacks. They trade defense for overwhelming offense, becoming a whirlwind of destruction in close combat. When a Berserker enters their rage, enemies learn the meaning of fear — those who stand before them rarely stand for long.*

**Prerequisites:** Level 6, Warrior archetype

**New Skill Tree Unlocked:** Primal Fury (rage enhancements, intimidation in combat, brutal finishers, cleave attacks)

#### Level 6 Features

**Rage** (1 Action)
You can enter a primal rage as 1 action. While raging, you gain the following benefits:
- **+2 damage** to all melee weapon attacks
- **Advantage** on all Might (MIG) checks and Might saving throws
- **Resistance** to physical damage (bludgeoning, piercing, slashing)
- You **cannot cast spells** or concentrate on spells while raging

Your rage lasts for 1 minute (10 rounds) or until you choose to end it as a free action. It ends early if you fall unconscious or if you don't attack a hostile creature or take damage since your last turn.

**Uses:** You can rage a number of times equal to your Endurance (END) modifier per short rest (minimum 1).

#### Level 8 Features

**Reckless Strike** (Passive Option)
When you make a melee attack, you can choose to attack recklessly. If you do:
- You gain **advantage** on all melee weapon attack rolls you make during this turn
- Attack rolls against you have **advantage** until the start of your next turn

This represents throwing caution to the wind in pursuit of overwhelming offense.

**Savage Critical** (Passive)
Your melee critical hits are extraordinarily brutal. When you score a critical hit with a melee weapon, you deal **triple damage** instead of the normal double damage.

*Example: A normal hit deals 2d6+4 = 13 damage. A normal crit deals 26 damage. Your Savage Critical deals 39 damage.*

#### Level 10 Capstone Ability

**Deathless Fury** (1/Long Rest, Conditional)
Once per long rest, while raging, if you would be reduced to 0 hit points, you can make a DC 12 Endurance (END) saving throw. On a success, you drop to 1 hit point instead.

Each time you successfully use this feature during the same rage, the DC increases by 2 (DC 14, then DC 16, etc.). The DC resets when you begin a new rage.

This ability represents the berserker's refusal to fall while fury still burns in their veins.

![A mutant wolf warrior surveys the battlefield, embodying the primal fury of the Berserker path](/images/illustrations/wolf-mutant-warrior.png)

---

### Warlord (Tactical/Leadership)

*The Warlord is a battlefield commander who turns the tide through strategy, not just strength. They coordinate allies, exploit openings, and orchestrate devastating combined attacks. A skilled Warlord multiplies their party's effectiveness, transforming a group of individuals into a precision war machine.*

**Prerequisites:** Level 6, Warrior archetype

**New Skill Tree Unlocked:** Command (ally movement, coordinated attacks, formation bonuses, morale control)

#### Level 6 Features

**Tactical Command** (1 Action)
As 1 action, choose one ally within 30 feet who can see or hear you. That ally can immediately use their reaction to either:
- Move up to half their speed without provoking opportunity attacks, OR
- Make one weapon attack

This represents your ability to direct allies into advantageous positions or create openings for additional strikes.

**Battle Plan** (Initiative Bonus)
At the start of combat, before initiative is rolled, you can quickly bark orders to your allies. All allies who can hear you gain **+2 to their initiative** rolls for that combat.

Your tactical foresight allows your team to react faster than enemies expect.

#### Level 8 Features

**Coordinated Strike** (Passive)
When you hit an enemy with a melee weapon attack, the next ally to attack that same target before your next turn gains **advantage** on their attack roll.

This represents your ability to create openings for allies to exploit.

**Inspiring Leader** (Short Rest Feature)
During a short rest, you can give a rousing speech of 1 minute or longer. Choose up to 6 friendly creatures (including yourself) who can hear and understand you. Each creature gains temporary hit points equal to **your level + your Presence (PRE) modifier**.

These temporary hit points last until the next short or long rest.

*Example: At level 8 with PRE +3, you grant 11 temporary HP to each recipient.*

#### Level 10 Capstone Ability

**Supreme Tactician** (1/Long Rest)
Once per long rest, at the start of your turn, you can execute a perfect tactical maneuver. Choose up to **2 allies** within 30 feet who can hear you. Each chosen ally can immediately take **one weapon attack or move up to their speed** as a free action (this doesn't use their reaction).

This represents perfect battlefield orchestration — precise strikes and repositioning happen simultaneously at your command.

*Game Master Note: This grants 2 allies a single attack or move each. Use this to turn the tide of the most critical battles.*

---

## Level 16: Unstoppable Force

Your momentum cannot be halted. Your melee attacks cannot be dodged with reactions (including opportunity attacks, parries, or defensive abilities). When you move through a space occupied by a hostile creature, you may force your way through — the creature takes 2d6 bludgeoning damage and you continue moving. You gain +1 to all attack rolls.

## Level 17: Specialization Final Evolution

### Vanguard — Unbreakable Shield

Your damage reduction from armor and abilities doubles. You can use your Shield Wall ability for free once per round without spending an action. Allies within 10 ft of you gain half your damage reduction value as a bonus to their DV.

### Berserker — Primal Fury

When you enter Rage, you immediately gain 3 actions instead of waiting until your next turn. Your Rage damage bonus increases by +3. While raging, you can make a single melee attack as a free action whenever an enemy misses you with a melee attack.

### Warlord — Supreme Tactician

Your tactical genius reaches its pinnacle. When you use Tactical Command or issue a tactical order, all allies within 30 feet may immediately use their reaction to move up to half their speed or make a single attack. Additionally, at the start of each combat, you may designate a battle plan: all allies who follow the plan gain advantage on their first attack roll and +2 to DV for the first round.

---

## Level 20 Apex Ability: Titan's Stand

**Once per long rest (1 week)**

For 1 minute, you embody the unstoppable force of the warrior's spirit. You become an immovable bastion of destruction.

**Effects:**
- You are immune to being moved against your will, knocked prone, stunned, paralyzed, or restrained
- At the start of each of your turns, you gain 30 temporary HP
- Your melee attacks deal an additional 3d6 damage
- Every melee attack you make automatically hits all enemy creatures within 5 ft of your primary target (no additional attack roll needed)
- You have advantage on Might checks and saving throws
- Difficult terrain costs you no extra movement

**Drawback:** When Titan's Stand ends, you immediately gain 1 level of exhaustion. The weight of such power takes its toll.
