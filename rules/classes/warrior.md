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
starting_cp: 15
role: Tank/Striker
magic_type: "None (15 CP/cantrip)"
level_1_features: [Combat Stance, Second Wind, Bodyguard, Retaliation Strike, Grit]
skill_trees:
  - name: Combat Mastery
    focus: Offense
    abilities:
      - {name: Power Strike, cp_cost: 5, tier: 1, effect: "+1d6 damage/turn"}
      - {name: Cleave, cp_cost: 10, tier: 2, effect: "Free attack on kill"}
      - {name: Devastating Critical, cp_cost: 15, tier: 3, effect: "Triple crit damage"}
  - name: Fortification
    focus: Defense
    abilities:
      - {name: Armor Mastery, cp_cost: 5, tier: 1, effect: "-2 physical damage"}
      - {name: Shield Wall, cp_cost: 10, tier: 2, effect: "Grant adjacent ally your shield's DV bonus"}
      - {name: Unyielding, cp_cost: 15, tier: 3, effect: "Cannot be forcibly moved against your will"}
  - name: Tactical Operations
    focus: Team
    abilities:
      - {name: Battle Cry, cp_cost: 5, tier: 1, effect: "Temp HP to allies in 30ft"}
      - {name: Tactical Positioning, cp_cost: 10, tier: 2, effect: "Allies gain adv on opportunity attacks"}
      - {name: "Commander's Presence", cp_cost: 15, tier: 3, effect: "Allies within 30 ft add prof to initiative"}
  - name: Bulwark
    focus: Vanguard Specialization
    abilities:
      - {name: Unbreakable Ground, cp_cost: 5, tier: 1, effect: "+1 DV and minor push-resist while stationary"}
      - {name: Pain Response, cp_cost: 5, tier: 1, effect: "Advantage on next melee attack after taking 5+ damage"}
      - {name: Guardian's Aura, cp_cost: 5, tier: 1, effect: "+1 DV to allies within 5 ft; +2 in Fortress Stance"}
      - {name: Hold the Line, cp_cost: 10, tier: 2, effect: "Reaction OA at advantage; hit stops enemy movement"}
      - {name: Reactive Shield, cp_cost: 10, tier: 2, effect: "1/SR: reaction triggers Fortress Stance Taunt effect on taking damage"}
      - {name: Last Bastion, cp_cost: 15, tier: 3, effect: "1/SR: reaction prevents ally 0 HP; excess damage transfers to you"}
      - {name: Iron Champion, cp_cost: 15, tier: 3, effect: "1/SR: free action; 1 min — double Iron Skin, free Shield Wall reaction 1/round, area Taunt aura"}
  - name: Savage Techniques
    focus: Berserker Specialization
    abilities:
      - {name: Savage Charge, cp_cost: 5, tier: 1, effect: "While raging: move 15+ ft before attack for +1d6 dmg + knockdown"}
      - {name: Terrifying Fury, cp_cost: 5, tier: 1, effect: "While raging: 1/round, kills cause 30 ft fear save"}
      - {name: Brutal Toughness, cp_cost: 5, tier: 1, effect: "While raging + below half HP: +1 to all damage rolls"}
      - {name: Feral Leap, cp_cost: 10, tier: 2, effect: "While raging: 1 action, leap 20 ft + free melee attack on land"}
      - {name: Warcry, cp_cost: 10, tier: 2, effect: "While raging: 1/SR, 1 action — 30 ft Frightened for 1 min (repeat saves)"}
      - {name: Unstoppable, cp_cost: 15, tier: 3, effect: "While raging: free 10 ft move/turn toward foe; immune to Frightened, adv vs Stun/Paralyze"}
      - {name: Annihilate, cp_cost: 15, tier: 3, effect: "While raging: 1/rage — hit deals +3d6, ignores DR; kill frightens all enemies in 30 ft (no repeat save — intentional exception)"}
  - name: Command
    focus: Warlord Specialization
    abilities:
      - {name: Mark Target, cp_cost: 5, tier: 1, effect: "Free action on hit: mark one enemy; allies get +1 to attack marked target"}
      - {name: Press the Advantage, cp_cost: 5, tier: 1, effect: "Ally hits creature you also hit this turn: +1d4 damage"}
      - {name: Shoulder to Shoulder, cp_cost: 5, tier: 1, effect: "+1 DV to you and adjacent allies; +2 to you with 2+ adjacent allies"}
      - {name: Expose Weakness, cp_cost: 10, tier: 2, effect: "Hitting marked target triggers one ally reaction attack (passive)"}
      - {name: Formation Strike, cp_cost: 10, tier: 2, effect: "+1d6 when you and ally flank same foe; ally can reaction-reposition 5 ft"}
      - {name: Coordinated Assault, cp_cost: 15, tier: 3, effect: "1/SR: on melee hit, up to 3 allies within 30 ft use reaction to attack that creature"}
      - {name: Ironclad Formation, cp_cost: 15, tier: 3, effect: "Allies in 30 ft: adv vs Frightened/Charmed saves; Tactical Command targets 2 allies"}
features:
  - name: Combat Stance
    level: 1
    action: "1 Action to switch"
    frequency: At-Will
    description: "Choose one stance. Only one stance active at a time. Each stance has a Payoff — a free effect that triggers once per round when a specific combat event occurs while you are in that stance."
    choices:
      - name: Aggressive
        effect: "+2 damage to all rolls, -1 to DV"
        payoff: "Momentum: When you reduce an enemy to 0 HP, move up to 10 ft (no opportunity attacks) as a free action. Once per round."
      - name: Defensive
        effect: "+2 to DV, -2 to all damage rolls"
        payoff: "Ironclad: When an attack against you misses, gain +1 DV until the start of your next turn (maximum once per round). While Grit is active, this payoff also triggers when you take damage from an attack."
      - name: Balanced
        effect: "Gain +1 reaction per round (max 2 total)"
        payoff: "Combat Focus: When you use a reaction, your next attack roll before the end of your turn has advantage. Once per round."
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
      - {name: Fortress Stance, level: 8, action: "2 Actions", description: "You and allies within 10 ft gain +2 DV and resistance to one damage type for 2 rounds. Enemies within 10 ft who target allies must pass a Will save (DC 8+prof+END) or must attack you instead. You cannot move."}
      - {name: Immovable Object, level: 10, action: "1 Action", description: "1/Long Rest. 1 minute duration. Cannot be moved against will. Advantage on FORT saves. Free melee attack when enemy misses you in melee."}
  - name: Berserker
    role: Damage/Rage
    features:
      - {name: Rage, level: 6, action: "1 Action", description: "END mod times/Short Rest. 1 minute. +2 melee damage, advantage on MIG checks/saves, resistance to physical damage. Cannot cast spells."}
      - {name: Reckless Strike, level: 8, action: Passive, description: "Choose to attack recklessly: advantage on all melee attacks this turn, but attacks against you have advantage until next turn."}
      - {name: Bloodlust, level: 8, action: Passive, description: "When you reduce a creature to 0 HP while raging, your Rage duration resets to its full 1 minute and you gain temporary HP equal to your Warrior level (lost when Rage ends)."}
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

> **Recommended Build Guide — Classless System**
> This file describes the **Warrior recommended build**: a curated path through Ashfall's shared skill trees designed for this build's core fantasy. Under the current rules, you are **not locked to this build**. Choose a **chassis** for your starting stats and proficiencies, then spend **Character Points (CP)** in any skill trees that match your character concept.
>
> - **Chassis selection and starting stats:** see [Chassis](../chassis.md)
> - **CP economy, spending rules, and milestones:** see [Character Points](../character-points.md)
> - **Full skill tree catalog:** see [Skill Trees](../skill-trees.md)
>
> The ability descriptions, skill tree layouts, and feature details in this file remain the authoritative rules reference for those abilities. The CP values listed in the skill trees are the costs for purchasing abilities.

*In the Wasteland, strength is the first language and violence is the only currency universally accepted. Warriors are the backbone of every settlement, the enforcers of every gang, the bulwark against every threat. They don't rely on tricks, technology, or arcane power — just steel, grit, and the unshakable conviction that they will not fall.*

*You are the Warrior. When the dust settles and the bodies are counted, you're still standing. You've taken hits that would kill lesser souls and walked away with scars to prove it. You don't need to be the smartest or the fastest — you just need to be the last one standing. And you always are.*

![A warrior wielding a massive hammer and shield stands ready for battle in the wasteland](/images/illustrations/warrior-hammer-shield.png)

---

## Base Build (Levels 1-5)

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
| **Starting CP** | 15 |

### Starting Equipment

- Heavy melee weapon or martial weapon of choice
- Medium or heavy armor and shield
- Survival kit (bedroll, flint, canteen, 3 days rations)

### Level Progression (1-5)

#### Level 1: Combat Stance & Second Wind

- **Combat Stance (At-Will, 1 Action):** Choose one stance. You can switch stances as a 1-action activity. Only one stance can be active at a time. When you roll initiative, you may enter a stance of your choice as a free action (this does not cost an action on your first turn).

  Each stance also has a **Payoff** — a free effect (no action required) that triggers once per round when the right combat event occurs while you are in that stance.

  - *Aggressive Stance:* +2 to all damage rolls, -1 to Defense Value (DV).
    **Momentum:** When you reduce an enemy to 0 HP while in Aggressive Stance, you can immediately move up to 10 feet as a free action. This movement does not provoke opportunity attacks. Once per round.

  - *Defensive Stance:* +2 to Defense Value (DV), -2 to all damage rolls.
    **Ironclad:** When an attack against you misses while in Defensive Stance, you gain +1 DV until the start of your next turn. This can trigger only once per round regardless of how many attacks miss. While your **Grit** passive is active (at or below half HP), Ironclad also triggers when you take damage from an attack — a body battered to the brink becomes harder, not easier, to bring down.

  - *Balanced Stance:* Gain +1 reaction per round (maximum 2 reactions).
    **Combat Focus:** When you use a reaction while in Balanced Stance, your next attack roll before the end of your turn has advantage. Once per round.

  > **Design Note — Stance Switching:** These payoffs reward *committing* to the right stance at the right moment — not at the start of combat, but in response to what is happening. Switching stances costs 1 of your 3 actions, which is real tension. A Warrior who started the round in Aggressive Stance can switch to Balanced (1 action) before using **Retaliation Strike** (reaction), then gains advantage on their follow-up attack. A Vanguard staying in Defensive Stance against a multiattacking enemy accumulates +1 DV from every miss, becoming harder to crack as the round progresses.

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

Warriors have access to three skill trees, each costing CP to unlock features:

#### Combat Mastery (Offense-Focused)

- **Power Strike (5 CP):** Once per turn, deal an extra 1d6 damage on a hit.
- **Cleave (10 CP, Requires Power Strike):** When you drop an enemy to 0 HP with a melee attack, make a free melee attack against another enemy within reach.
- **Devastating Critical (15 CP, Requires Power Strike):** When you score a critical hit, roll all damage dice three times instead of twice.

#### Fortification (Defense-Focused)

- **Armor Mastery (5 CP):** Reduce all incoming physical damage by 2 (minimum 1).
- **Shield Wall (10 CP, Requires Shield):** As a reaction, grant an adjacent ally your shield's DV bonus to Defense Value until the start of your next turn.
- **Unyielding (15 CP, Requires Armor Mastery):** You cannot be forcibly moved (knocked back, pulled, etc.) against your will unless you choose to allow it.

#### Tactical Operations (Team-Focused)

- **Battle Cry (5 CP, 1 Action, 1/Short Rest):** All allies within 30 feet gain temporary HP equal to your MIG modifier + your proficiency bonus.
- **Tactical Positioning (10 CP):** Allies gain advantage on opportunity attacks against enemies you threaten.
- **Commander's Presence (15 CP, Requires Battle Cry):** Allies within **30 feet** of you add your proficiency bonus to their initiative rolls.

### Magic Relationship

Warriors have **no innate magical ability**. However, they can learn cantrips by spending **15 CP per cantrip**. Cantrips use the Warrior's Might modifier for attack rolls and save DCs. Warriors cannot learn leveled spells unless they multiclass or take a specific Mastery Path.

---

## Advanced Specializations (Levels 6-10)

Warriors who reach level 6 have mastered the fundamentals of combat. Now they choose how to excel: protecting allies as an unyielding Vanguard, unleashing primal fury as a Berserker, or commanding the battlefield as a Warlord.

**System Notes:**
- All characters gain 10 CP per level from levels 6-10
- Short rest: 8 hours
- Long rest: 1 week
- Bounded accuracy: maximum total bonus of +18
- 3-action economy per turn

### Vanguard (Tank/Protector)

*The Vanguard is a living shield, standing between allies and death. They draw aggro, absorb punishment that would fell lesser warriors, and turn their body into an impenetrable fortress. When a Vanguard plants their feet, entire armies break against them.*

**Prerequisites:** Level 6, Warrior build

**New Skill Tree Unlocked:** Bulwark (Vanguard only)

*The Bulwark tree deepens the Vanguard's role as an immovable shield. Where the base Fortification tree makes you harder to hurt, Bulwark makes you impossible to bypass — a living fortress that enemies must reckon with or suffer the consequences.*

**Tier 1 Abilities (5 CP each)**

- **Unbreakable Ground (5 CP):** While you have not moved since the start of your last turn, you gain **+1 to Defense Value** and you cannot be repositioned by effects that would move you 5 feet or less (shoves, minor force effects, etc.). Enemies who move out of your melee reach without taking the Disengage action cannot easily escape: each attempt requires a **Reflex save (DC 8 + your proficiency bonus + your END modifier)** or their movement ends. They may attempt again with subsequent actions but each attempt triggers a new save.
- **Pain Response (5 CP):** When you take **5 or more damage from a single attack**, you gain advantage on your **next melee attack roll** before the end of your next turn. The pain sharpens your focus — every hit that lands just makes you angrier.
- **Guardian's Aura (5 CP, Passive):** Allies within 5 feet of you gain **+1 to Defense Value**. While you are also in Fortress Stance, this bonus increases to **+2**. You don't just stand in harm's way — your presence forces enemies to recalculate every approach.

**Tier 2 Abilities (10 CP each, requires one Tier 1 ability)**

- **Hold the Line (10 CP, Requires Unbreakable Ground):** When a creature moves out of your melee reach without taking the Disengage action (provoking an opportunity attack), you can use your **reaction** to make that opportunity attack with **advantage**. If your attack hits, the creature's movement **stops** — it cannot complete the triggering movement. It can still take other actions and attempt to leave your reach again on subsequent actions.
- **Reactive Shield (10 CP, Requires Pain Response):** Once per short rest, when you take any damage from an attack, you can use your **reaction** to trigger the Taunt portion of Fortress Stance: all enemies within 10 feet must succeed on a **Will save (DC 8 + your proficiency bonus + your END modifier)** or make their next attack this round against you instead of any ally. You do not need to be in Fortress Stance. On a successful save, the enemy is unaffected.

**Tier 3 Abilities (15 CP each, requires one Tier 2 ability)**

- **Last Bastion (15 CP, Requires Hold the Line):** Once per short rest, when an ally within 10 feet would be reduced to **0 HP** by an attack or effect, you can use your **reaction** to interpose yourself. That ally instead drops to **1 HP** and all excess damage from the triggering attack is dealt to you instead. If this damage would reduce you to 0 HP, your Unbreakable feature (if not expended) triggers as normal — you are the last line. *Example: The Medic is at 3 HP. An enemy deals 18 damage — the Medic would drop to 0. The Vanguard uses Last Bastion: the Medic drops to 1 HP instead, and the Vanguard takes 15 damage. If the Vanguard's Unbreakable hasn't been used, they cannot be dropped below 1 HP by this damage transfer.*
- **Iron Champion (15 CP, Requires Reactive Shield):** Once per short rest, as a **free action** at the start of your turn, you enter Iron Champion State for **1 minute**. While active: your Iron Skin damage reduction is **doubled** (DR 1 → DR 2 at L6; DR 2 → DR 4 at L9); you can use **Shield Wall as a free reaction** once per round (this does not replace your normal reaction); all enemies within 15 feet must succeed on a **Will save (DC 8 + your proficiency bonus + your END modifier)** at the start of each of their turns or attack you instead of any other creature (this aura replaces Fortress Stance's Taunt while Iron Champion State is active). *Note: The free Shield Wall reaction here previews the L17 Vanguard evolution — at L17, this free use becomes permanent, not limited to Iron Champion State.*

*Note: Some Vanguard abilities share names with Fortification skill tree abilities. The specialization version replaces the skill tree version if you have both — use the more powerful specialization version.*

#### Level 6 Features

**Shield Wall** (Reaction)
When an ally within 10 feet is attacked, you can use your reaction to impose disadvantage on the attack roll. If you are wielding a shield, you instead add your shield's bonus to their Defense Value against that attack. You must be able to see both the attacker and the ally.

**Iron Skin** (Passive)
Your body has hardened from countless battles. You gain damage reduction equal to half your proficiency bonus (rounded down) against all physical damage (bludgeoning, piercing, slashing). At level 6, this grants DR 1; at level 9, DR 2.

#### Level 8 Features

**Fortress Stance** (2 Actions)
You plant yourself as an immovable anchor point. Spend 2 actions to enter Fortress Stance, which lasts for **2 full rounds** (ending at the start of your turn, 2 rounds after activation). While in Fortress Stance:
- You and all allies within 10 feet gain **+2 to Defense Value**
- Choose one damage type (fire, cold, lightning, acid, poison, necrotic, radiant, psychic, or force) — you and allies within 10 feet gain **resistance** to that damage type
- **Taunt:** Enemies within 10 feet who want to make an attack against your allies must succeed on a **Will saving throw (DC 8 + your proficiency bonus + your END modifier)** or must direct that attack against you instead. On a successful save, the enemy can attack normally. An enemy can only be forced to redirect one attack per round — subsequent attacks from the same enemy that round are unaffected.
- You **cannot move or be moved** while in this stance

This stance ends immediately if you move voluntarily or are knocked unconscious.

*Design note: The Vanguard is the only combatant in Ashfall who can literally redirect enemy aggression. This represents the pinnacle of defensive presence — enemies recognize the Vanguard as the existential threat and are compelled to confront them.*

*Example: Mira (Vanguard, L8, END +3, proficiency +4) enters Fortress Stance. Three raiders attack. Raider A (Will +0) rolls a 9 — below DC 15 — and must target Mira instead of the Medic they were advancing on. Raider B (Will +2) rolls a 14 — just below DC 15 — also must target Mira. Raider C rolls a 17 — success, attacks normally. The Medic stabilizes an ally while Mira absorbs two redirected attacks, which deal reduced damage thanks to the resistance aura.*

#### Level 10 Capstone Ability

**Immovable Object** (1/Long Rest)
Once per long rest, you can spend 1 action to activate Immovable Object for 1 minute. While active:
- You cannot be moved, pushed, pulled, knocked prone, or teleported against your will
- You have advantage on all Fortitude saving throws
- When an enemy misses you with a melee attack, you can immediately make a free melee weapon attack against them (no action required)

This represents the pinnacle of defensive martial mastery — you become an absolute anchor point on the battlefield.

---

### Berserker (Damage/Rage)

*The Berserker channels raw, primal fury into devastating attacks. They trade defense for overwhelming offense, becoming a whirlwind of destruction in close combat. When a Berserker enters their rage, enemies learn the meaning of fear — those who stand before them rarely stand for long.*

**Prerequisites:** Level 6, Warrior build

**New Skill Tree Unlocked:** Savage Techniques (Berserker only)

*(Previously known as "Primal Fury" in early drafts — renamed to avoid collision with the L17 Berserker evolution "Berserker — Primal Fury." The L17 evolution retains the "Primal Fury" name.)*

*The Savage Techniques tree makes Rage more than a damage toggle — it becomes a state of escalating lethality. Every ability in this tree is conditional on Rage being active. Without Rage, these are inert. In Rage, the Berserker becomes something the Wasteland fears.*

**All Savage Techniques abilities require Rage to be active. If Rage ends, any active effects from Savage Techniques abilities end immediately.**

**Tier 1 Abilities (5 CP each)**

- **Savage Charge (5 CP):** While raging, when you move **at least 15 feet in a straight line** and then make a melee attack against a creature at the end of that movement, the attack deals **+1d6 bonus damage** and the target must succeed on a **Fortitude save (DC 8 + your proficiency bonus + your END modifier)** or be knocked **prone**. The movement must be uninterrupted — you cannot change direction or stop mid-movement. Counts as part of your normal movement.
- **Terrifying Fury (5 CP):** While raging, once per round, when you reduce a creature to **0 HP** with a melee attack, every enemy within 30 feet that can see you must succeed on a **Will save (DC 8 + your proficiency bonus + your END modifier)** or become **Frightened of you** until the end of their next turn. Creatures immune to fear are unaffected.
- **Brutal Toughness (5 CP, Passive):** While raging and at or below half your maximum HP, you gain **+1 to all melee damage rolls**. This stacks with Rage's +2 bonus (total +3 while injured and raging). Works with Reckless Strike — deliberately positioning yourself to absorb hits and stay below half HP is a real build choice with this ability.

**Tier 2 Abilities (10 CP each, requires one Tier 1 ability)**

- **Feral Leap (10 CP, Requires Savage Charge):** While raging, once per round, spend **1 action** to launch yourself up to **20 feet**, ignoring difficult terrain and moving over spaces occupied by Medium or smaller creatures. This movement does not provoke opportunity attacks. If you land adjacent to a hostile creature, make **one melee attack** against them as part of this action (does not trigger Extra Attack).
- **Warcry (10 CP, Requires Terrifying Fury):** While raging, once per short rest, spend **1 action** to unleash a terrifying warcry. All enemies within **30 feet that can hear you** must succeed on a **Will save (DC 8 + your proficiency bonus + your END modifier)** or become **Frightened of you for 1 minute**. Frightened creatures may repeat this saving throw at the end of each of their turns, ending the effect on a success.

**Tier 3 Abilities (15 CP each, requires one Tier 2 ability)**

- **Unstoppable (15 CP, Requires Feral Leap):** While raging, at the start of each of your turns, you may move up to **10 feet toward a hostile creature you can see** as a **free action** (additional to your normal movement, no OA). Additionally, while raging, you are **immune to the Frightened condition** and have **advantage on saving throws against being Stunned or Paralyzed**.
- **Annihilate (15 CP, Requires Warcry):** While raging, once per rage, when you hit with a melee attack, declare **Annihilate** as a free action (declare before rolling damage). The attack deals **+3d6 bonus damage** and ignores all damage reduction from armor. If this attack reduces the target to 0 HP, every enemy within 30 feet that can see you must make a **Will save (DC 8 + your proficiency bonus + your END modifier)** or become **Frightened of you for 1 minute with no repeat save** — this is an intentional exception to the general rule that fear effects allow repeat saves. On a success, they are unaffected. This ability resets at the start of each Rage.

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

This choice must be made before you roll. The risk is real — a reckless Berserker is harder to hit WITH but easier to hit BACK. Timing your Reckless rounds around Rage's damage resistance is the core skill expression of this ability.

**Bloodlust** (Passive)
The kill feeds the fury. When you reduce a creature to 0 HP **while raging**, your Rage duration resets to its full 1 minute, and you gain **temporary HP equal to your Warrior level** (these temporary HP last until the Rage ends or you gain them again).

*Bloodlust creates targeting decisions: do you chase the kill on a weakened enemy to reset your Rage and gain momentum, or do you press the attack on the larger threat? A Berserker who chains kills stays in Rage indefinitely in large-scale combat — the Wasteland's apex predator.*

*Example: Dax (Berserker, L8) is raging. He's been in combat for 4 rounds — 6 rounds remain on Rage. He drops a raider to 0 HP with a Reckless Strike hit. Bloodlust triggers: Rage resets to 10 rounds, Dax gains 8 temporary HP. He pivots toward the raider captain with a full Rage running, temporary HP absorbing the first incoming blow.*

#### Level 10 Capstone Ability

**Deathless Fury** (1/Long Rest, Conditional)
Once per long rest, while raging, if you would be reduced to 0 hit points, you can make a DC 12 Endurance (END) saving throw. On a success, you drop to 1 hit point instead.

Each time you successfully use this feature during the same rage, the DC increases by 2 (DC 14, then DC 16, etc.). The DC resets when you begin a new rage.

This ability represents the berserker's refusal to fall while fury still burns in their veins.

![A mutant wolf warrior surveys the battlefield, embodying the primal fury of the Berserker path](/images/illustrations/wolf-mutant-warrior.png)

---

### Warlord (Tactical/Leadership)

*The Warlord is a battlefield commander who turns the tide through strategy, not just strength. They coordinate allies, exploit openings, and orchestrate devastating combined attacks. A skilled Warlord multiplies their party's effectiveness, transforming a group of individuals into a precision war machine.*

**Prerequisites:** Level 6, Warrior build

**New Skill Tree Unlocked:** Command (Warlord only)

*The Command tree turns the Warlord from a "support character who also hits things" into a force multiplier embedded in the thick of combat. Unlike the Diplomat's coordination role (which operates primarily through social mechanics and pre-combat planning), the Warlord commands through melee presence — your hits create openings, your position creates formation bonuses, and your victories cascade into allied attacks. Everything here builds on Coordinated Strike.*

**Tier 1 Abilities (5 CP each)**

- **Mark Target (5 CP):** When you hit an enemy with a melee attack, you can **mark them as a free action** (no additional action cost — declaring the mark is part of making the attack). Allies within 30 feet who can see you gain **+1 to all attack rolls** against the Marked target. Only one target can be Marked at a time. The mark ends when the target is reduced to 0 HP, when you Mark a new target, or when combat ends.
- **Press the Advantage (5 CP, Passive):** When an ally hits a creature that you have **also hit this turn** with a melee attack, that ally's attack deals **+1d4 bonus damage**. This applies to each ally's first hit against that creature per turn.
- **Shoulder to Shoulder (5 CP, Passive):** While an ally is **adjacent to you** (within 5 feet), both you and that ally gain **+1 to Defense Value**. If **two or more** allies are adjacent to you simultaneously, all adjacent allies gain the +1 bonus, and you personally gain +2 to Defense Value.

**Tier 2 Abilities (10 CP each, requires one Tier 1 ability)**

- **Expose Weakness (10 CP, Requires Mark Target):** When you hit your **Marked target**, choose one ally within 30 feet who can see you. That ally can immediately use their **reaction** to make **one weapon attack** against the Marked target. The ally may move up to 10 feet toward the Marked target before making this reaction attack; this movement does not provoke opportunity attacks from the Marked target.
- **Formation Strike (10 CP, Requires Shoulder to Shoulder):** When you and at least one ally are **both adjacent to the same enemy**, your melee attacks against that enemy deal **+1d6 bonus damage**. Additionally, when you hit an enemy that an ally is also adjacent to, that ally can use their **reaction** to **reposition up to 5 feet** to any other space adjacent to that same enemy (no opportunity attacks from the targeted creature for this movement).

**Tier 3 Abilities (15 CP each, requires one Tier 2 ability)**

- **Coordinated Assault (15 CP, Requires Expose Weakness):** Once per short rest, when you hit a creature with a melee attack, activate **Coordinated Assault** as a **free action** (declare immediately after the hit). Up to **3 allies within 30 feet** who can see or hear you may use their **reaction** to make one weapon attack against that creature. Each ally acts independently in the order you designate. *Note: This is distinct from Supreme Tactician (L10, 1/Long Rest): Supreme Tactician allows movement or attack as a proactive start-of-turn command without costing ally reactions; Coordinated Assault is reactive, triggered by your melee hit, and requires ally reactions. Example: Warlord Kai hits the raider captain — the Medic, the Operative, and the Gunslinger all use their reactions to attack the captain. Four attacks in a single turn for one Warlord action.*
- **Ironclad Formation (15 CP, Requires Formation Strike):** Allies within 30 feet who can see and hear you gain **advantage on saving throws against the Frightened and Charmed conditions**. Additionally, when you use Tactical Command (your L6 feature), you may choose **two allies** instead of one — each ally acts independently (both may move or attack as their reaction). Your presence makes allies fight harder, think sharper, and hold the line longer.

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

Your damage reduction from class abilities doubles. At Level 17 (proficiency +6), this produces the following explicit values:

- **Iron Skin** (your L6 Vanguard feature): base DR = half your proficiency bonus rounded down = **DR 3** at L17. After doubling: **DR 6** against physical damage.
- **Armor Mastery** (Fortification skill tree, if purchased): base DR = **DR 2**. After doubling: **DR 4** against physical damage.
- **Total physical damage reduction** (if both Iron Skin and Armor Mastery are active): **DR 10**.
- **Without Armor Mastery** (Iron Skin only): **DR 6**.

These values are cumulative — each source of DR applies independently. At Level 17, enemies deal appropriate damage (typically 20-40 per hit against a high-level defender); DR 10 reduces this to 10-30, keeping the Vanguard durable but not invulnerable.

**Ally benefit:** Allies within 10 feet of you gain a bonus to Defense Value equal to **half your total current DR value** (rounded down). At maximum (DR 10), this grants allies **+5 DV**. At Iron Skin only (DR 6), allies gain **+3 DV**.

You can use your **Shield Wall** ability once per round as a **free reaction** — permanently, always available, not limited to Iron Champion State (Bulwark T3). This free use is in addition to your normal reaction — you retain your regular reaction for other purposes such as opportunity attacks or Retaliation Strike.

### Berserker — Primal Fury

When you enter Rage, you immediately gain 3 actions instead of waiting until your next turn. Your Rage damage bonus increases by +3. While raging, you can make a single melee attack as a free action whenever an enemy misses you with a melee attack.

### Warlord — Undeniable Command

Your tactical genius has evolved beyond command — it is compulsion. When you spend 1 action to use **Tactical Command**, the effect expands: instead of directing one ally, **all allies within 30 feet who can see or hear you** may immediately use their **reaction** to either move up to half their speed (no opportunity attacks) or make one weapon attack. Each ally acts independently and chooses their own response. The 1-action cost for Tactical Command does not change — you spend 1 action, and all allies within 30 feet respond via reaction.

**Distinction from Supreme Tactician (L10):** Supreme Tactician (1/Long Rest, used at the start of your turn) proactively commands 2 allies with no reaction cost. Undeniable Command upgrades Tactical Command itself — any time you spend that 1 action, every ally in range can respond. Supreme Tactician remains a separate, distinct ability with its own 1/Long Rest charge.

Additionally, at the start of each combat, you may designate a battle plan. All allies who follow the plan gain **advantage on their first attack roll** and **+2 to Defense Value** for the first round of combat.

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
