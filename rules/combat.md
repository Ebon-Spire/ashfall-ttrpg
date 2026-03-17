# Combat

![A reptilian heavy gunner unleashes devastating firepower across a war-torn battlefield](/images/illustrations/reptilian-heavy-gunner.png)

## Action Economy

On your turn in combat, you have:
- **3 Actions** to spend as you choose
- **1 Reaction** (spent during other creatures' turns)
- **Free Actions** (limited, DM discretion)

**Bonus Actions:** Some class features and abilities are described as "bonus actions." In Ashfall's 3-action economy, a bonus action costs 1 of your 3 actions but can only be used once per turn. You cannot use two different bonus actions on the same turn. Bonus actions are distinct from regular actions only in that they are limited to one per turn.

## Actions

Each costs **1 action** unless noted otherwise.

### Movement Actions

- **Stride:** Move up to your speed (30 ft standard)
- **Step:** Move 5 feet without provoking reactions
- **Crawl:** Move half speed while prone
- **Stand:** Stand up from prone
- **Mount/Dismount:** Get on or off a vehicle/mount

### Combat Actions

- **Strike:** Make one attack with weapon or unarmed

**Multiple Attack Penalty:** When you make more than one Strike on your turn, each attack after the first takes a cumulative -3 penalty. Your second attack is at -3, your third at -6, and so on. Abilities that grant Extra Attack (such as from class features) do NOT apply the penalty to the bonus attack granted by Extra Attack — only to additional Strike actions beyond that. The All-Out Attack activity (3 actions) follows these same penalties.

- 1 Strike = no penalty
- Extra Attack feature: 2 attacks from 1 Strike action = 0/0
- 2 separate Strike actions = 0/-3 (or with Extra Attack: 0/0/-3/-3)
- All-Out Attack (3 actions) = 0/-3/-6

- **Reload:** Reload a weapon (some weapons require 2 actions)
- **Draw/Stow Weapon:** Ready or put away one item
- **Aim (1 action):** Gain +2 to your next ranged attack this turn. You lose this bonus if you take any movement actions (Stride, Step, or Crawl) after aiming. You may move before aiming without penalty.
- **Grapple:** Attempt to grab an enemy (contested MIG vs MIG or AGI)
- **Shove:** Push enemy 5 feet (contested MIG vs MIG or AGI)
- **Disarm:** Knock weapon from enemy's grasp (contested)

### Magic Actions

- **Cast Spell:** Most spells cost 1-3 actions (see spell description)
- **Sustain Spell:** Maintain a sustained spell (1 action per turn; distinct from concentration)

**Spellcasting and Multiple Attack Penalty:** Casting a spell that requires a spell attack roll (ranged or melee) counts as an attack for MAP purposes. If you cast a damage cantrip and then use a Strike action on the same turn, the Strike takes the -3 MAP. Conversely, if you Strike first and then cast an attack cantrip, the cantrip's attack roll takes the -3 penalty. Spells that require saving throws (no attack roll) do NOT trigger or suffer from MAP.

### Skill Actions

- **Use Skill:** Make a skill check to achieve an effect
- **Search:** Make a Perception check for hidden things
- **Identify:** Recall knowledge about creature/object (INT/WIS check)

### Item Actions

- **Use Item:** Activate a device, drink a potion, apply a stim
- **Quick Draw:** Draw weapon and attack in same action (requires feat)

## Multi-Action Activities

Some activities require spending 2 or 3 actions.

### 2-Action Activities

- **Full Auto Burst:** Attack 3 targets within 10 feet at -2 penalty
- **Power Strike:** Attack with +4 damage, -2 to hit
- **Emergency Field Medicine:** Use Medicine kit to restore 2d6 + WIS modifier HP (Medicine check DC 15, or DC 20 in combat)

### 3-Action Activities

- **All-Out Attack:** Make 3 attacks at cumulative -3 penalty each (0/-3/-6)
- **Sprint:** Move triple your speed in a straight line
- **Major Ritual:** Quick-cast some ritual effects

## Reactions

Spent during other creatures' turns, triggered by specific conditions. You regain your reaction at the start of each of your turns. You can use your reaction on your own turn if a trigger occurs. Ready Action (which costs 2 actions) uses your reaction when triggered — this is intentionally expensive as a balancing factor.

### Defensive Reactions

- **Deflect:** When hit by ranged attack, reduce damage by 1d10 + AGI (requires free hand)
- **Dive for Cover:** When targeted by area effect, move 10 feet to partial cover
- **Brace:** When charged, ready weapon to attack first
- **Counterspell:** Attempt to disrupt enemy spell (magic users only)

### Offensive Reactions

- **Attack of Opportunity:** Strike enemy leaving your reach
- **Intercept:** Move to block an attack targeting ally
- **Return Fire:** Shoot back at enemy who shot you (requires loaded weapon)

## Free Actions

Can be done without spending actions (within reason):
- Speak a short phrase (1-2 sentences)
- Drop an item
- Fall prone (voluntarily)
- Release a grapple
- Activate certain instant abilities

## Initiative and Turn Order

**Initiative Formula:** `1d20 + AGI modifier + Proficiency bonus + equipment bonuses`

**Turn Order:** Highest to lowest.
- **Ties:** Higher AGI goes first; if still tied, simultaneous or coin flip.

### Surprise

If one side ambushes the other:
- Ambushing side rolls Stealth vs targets' Passive Perception
- Surprised creatures cannot act or react in the first round
- After the first round, combat proceeds normally

### Delay

On your turn, choose to delay:
- Pick a later initiative count (must be lower than current)
- Your new position is permanent for this combat
- Can't delay past the last creature in order

### Ready Action

Prepare an action with a specific trigger:
- Costs 2 actions on your turn
- Declare action and trigger ("I shoot anyone who opens the door")
- When trigger occurs, use your reaction to perform readied action
- If trigger doesn't occur before your next turn, readied action is lost

## Movement and Positioning

**Base Speed:** 30 feet per Stride action (6 squares on grid)

### Terrain Types

- **Normal:** No penalty
- **Difficult:** Costs double movement (each square = 10 feet)
- **Greater Difficult:** Costs triple movement (climbing, swimming)
- **Impassable:** Cannot move through

### Positioning Tactics

- **Flanking:** When you and an ally are on opposite sides of an enemy (forming a line through the enemy's space), melee attacks against that enemy gain a +2 bonus to hit
- **High Ground:** +2 to ranged attacks
- **Prone:** 1 action to stand, disadvantage on attacks, enemies have disadvantage on ranged attacks against you but advantage on melee
- **Cover:** Partial (+2 DV), Heavy (+5 DV), Total (can't be targeted)

## Attack Rolls and Defense Values

### Making an Attack

**Melee Attack Roll:**
```
1d20 + MIG modifier + Proficiency + weapon bonus + misc modifiers
vs. Target's Defense Value (DV)
```

**Ranged Attack Roll:**
```
1d20 + AGI modifier + Proficiency + weapon bonus + misc modifiers
vs. Target's Defense Value (DV)
```

**Spell Attack Roll:**
```
1d20 + spellcasting modifier (INT/WIS) + Proficiency
vs. Target's Defense Value (DV)
```

**Success:** Roll meets or exceeds target's DV — roll damage.
**Failure:** Roll lower than DV — attack misses.

### Attack Modifiers

- **Flanking:** +2 to melee attacks when you and an ally are on opposite sides of target
- **High Ground:** +2 to ranged attacks
- **Cover:** +2 DV (partial) or +5 DV (heavy) against ranged attacks
- **Prone Target:** Melee attacks gain advantage; ranged attacks have disadvantage
- **Unseen Attacker:** Advantage on attack
- **Blinded Attacker:** Disadvantage on attack
- **Ranged Attack in Melee:** When you make a ranged attack (weapon or spell) against a target and a hostile creature is within 5 feet of you, you have disadvantage on the attack roll. Class features or abilities may override this penalty.

### Critical Hits (Natural 20)

- Automatically hits regardless of DV
- Roll all weapon damage dice twice, add modifiers once
- Example: Salvaged Sword (1d10+3) crits = 2d10+3 damage

### Critical Misses (Natural 1)

- Automatically misses regardless of bonus
- Optional rule: Roll on fumble table for complications

### Contested Checks

When two creatures directly oppose each other — such as grappling, shoving, resisting a social ability, or countering a spell — both sides roll a d20 and add the relevant modifier.

- **Both roll:** 1d20 + attribute modifier + proficiency (if proficient)
- **Higher total wins.** On a tie, the situation remains unchanged (the initiator fails to change the status quo).
- **Ability descriptions specify which attributes are used.** For example, "contested MIG check" means both sides roll 1d20 + MIG modifier.

Common contested checks: Athletics vs Athletics (grapple/shove), Stealth vs Perception (hiding), Persuasion/Deception vs Will save DC (social abilities).

### Defense Value (DV)

**DV Formula:**
```
10 + AGI modifier + armor bonus + shield + misc
```

**Maximum AGI Bonus by Armor:**
- Light Armor: +5 AGI
- Medium Armor: +3 AGI
- Heavy Armor: +1 AGI
- No Armor: Unlimited AGI

**Example DVs:**
- Unarmored (AGI +2): DV 12
- Light armor +2 (AGI +2): DV 14
- Medium armor +4 (AGI +2): DV 16
- Heavy armor +7 (AGI +1, armor limits AGI): DV 18
- With shield +2: DV 20

### Flat-Footed Condition

When surprised or unaware of attacker:
- Lose AGI bonus to DV
- Cannot use reactions

*See Conditions for the full Flat-Footed definition.*

### Cover Bonuses to DV

- Partial Cover: +2 DV
- Heavy Cover: +5 DV
- Total Cover: Cannot be targeted

## Damage and Hit Points

### Dealing Damage

**Damage Formula:** Weapon dice + attribute modifier + bonus damage

- **Melee Damage:** Weapon dice + MIG modifier
- **Ranged Damage:** Weapon dice (no attribute modifier unless special ability)
- **Spell Damage:** Spell dice (no modifier unless spell specifies)

### Damage Types

- **Physical:** Bludgeoning, Piercing, Slashing
- **Energy:** Fire, Cold, Electric, Acid, Sonic
- **Exotic:** Force, Psychic, Necrotic, Radiant, Poison

### Resistance, Vulnerability, and Immunity

- **Resistance:** Take half damage (round down)
- **Vulnerability:** Take double damage
- **Immunity:** Take no damage

### Damage Reduction (DR)

Some armor, class features, and abilities provide DR: reduce incoming damage by X points (minimum 0 damage after reduction).
- Example: Heavy armor might have "DR 5 vs physical"
- Apply DR before resistance/vulnerability
- **Stacking:** DR from different sources stacks unless stated otherwise. For example, Grit (DR 2 from class) + Preventive Care (DR 2 from ally) = DR 4 total. However, DR from the same source does not stack with itself.

### Temporary Hit Points

- Acts as buffer, lost before real HP
- Doesn't stack — use higher amount only
- Can't be healed — only refreshed by the ability that grants it
- **Exception:** The Mystic's Arcane Ward grants temp HP that stacks with previous Arcane Ward grants (up to the feature's stated maximum). This is the only source of temp HP that stacks with itself. See the Mystic class for details.

### Massive Damage

If a single source of damage reduces you to negative max HP, you die instantly.
- Example: 30 max HP character takes 60 damage in one hit = instant death (no death saves)

## Healing

Healing in Ashfall is **deliberately slow and resource-intensive**.

### In-Combat Healing

**Healing Spells:**
- 1st-level Healing Touch: 1d8 + WIS HP (1 action, touch range)
- 2nd-level Bind Wounds: 2d8 + WIS HP (1 action, touch range)
- 5th-level Mass Healing: 5d8 + WIS HP to all allies in 30 ft (1 action)

*These healing spells are available to classes with spellcasting that includes healing magic: Medic (half-caster, healing/support), Channeler (half-caster, all schools), and Mystic (full caster, if they choose healing spells). See each class's entry and the Magic chapter for details.*

**Stims/Injectors** (1 action to use):
- Tier 1 Basic Stim: 1d8+2 HP (25 credits)
- Tier 2 Combat Stim: 2d8+2 HP (75 credits)
- Tier 3 Advanced Stim: 3d8+2 HP (200 credits)
- Can use on self or adjacent ally
- A character can benefit from a maximum of 2 stims per 24-hour period. Additional stims have no effect as the body builds tolerance.

**Emergency Field Medicine** (2 actions, requires Medicine kit):
- Make a Medicine check (DC 15 in safe conditions, DC 20 in combat)
- Success: Restore 2d6 + WIS modifier HP
- Failure: No effect; target cannot benefit from this ability again for 8 hours
- This is a generic action available to anyone with a Medicine kit — the Medic's Field Medic class feature is a separate, superior ability.

**Second Wind** (some archetypes):
- 1 action (archetype dependent)
- Once per short rest
- Regain 2d10 + character level HP, plus temporary HP equal to character level (see archetype entry for exact formula)

### Out-of-Combat Healing

**Field Surgery** (10 minutes, requires Medicine kit and stable environment — cannot be performed in combat):
- Medicine check DC 15
- Success: Restore 4d8 + WIS modifier HP
- Failure: No HP restored, 1 use of kit expended
- A character can benefit from Field Surgery once per 24 hours

**Ritual Healing** (30 minutes, magical):
- Cast healing spell as ritual (no slot cost)
- Takes 30 minutes + 10 minutes per spell level
- Requires material components
- Restores full spell effect

**Medical Bay Treatment** (1 hour, settlement facility):
- Requires access to proper medical facility
- Attended by trained medic
- Restore 25% of max HP per hour
- Cost: 50 credits per hour

**Medical Treatment (Downtime):**
- 1 hour of care, Medicine check DC 15
- Success: Target regains additional 2d8 HP
- Can only benefit once per rest period
- Requires medical supplies

**Natural Healing (No Rest):**
- Regain END modifier HP per day of light activity (minimum 1)
- Requires adequate food and water

### Rest Recovery

**Short Rest (8 hours, full night of sleep):**
- Recover Hit Dice equal to half your level (minimum 1)
- Spend Hit Dice to recover HP (roll HD + END modifier per die)
- Regain limited-use "per short rest" abilities
- Regain 1 spell slot (3rd level or lower)
- Maximum 1 short rest per 24-hour period

**Long Rest (7 days of downtime in a safe settlement):**
- Recover all HP
- Recover all Hit Dice
- Recover all spell slots
- Remove all Exhaustion levels (levels 5-6 require an additional week of complete rest to remove)
- Heal lingering injuries (if medical treatment available)

## Death and Dying

### Dropping to 0 Hit Points

When reduced to 0 HP:
1. **Fall Unconscious:** Drop prone, incapacitated
2. **Begin Death Saves:** At start of each turn, roll death saving throw
3. **Stabilize or Die:** 3 successes = stabilized; 3 failures = death

### Death Saving Throws

**Roll d20 (no modifiers):**
- **10-19:** Success (mark 1 success)
- **2-9:** Failure (mark 1 failure)
- **20 (Natural):** Regain 1 HP, become conscious
- **1 (Natural):** Count as 2 failures

**3 Successes:** Stabilized (unconscious but not dying)
**3 Failures:** Character dies

Successes and failures reset when you regain any HP or are stabilized.

### Taking Damage While Dying

- **Any Damage:** 1 automatic death save failure
- **Critical Hit:** 2 automatic death save failures
- **Damage >= Max HP:** Instant death (overkill)

### Stabilizing Others

**Medicine Check (DC 10) as 1 action:**
- Success: Target is stabilized (unconscious, 0 HP, no more death saves)
- Target remains unconscious until they regain HP

**Healing Spell/Item:**
- Any healing immediately stabilizes and restores HP
- Target becomes conscious if HP > 0

### Stabilized Condition

- Unconscious at 0 HP
- No death saves needed
- After 1d4 hours, regain 1 HP and become conscious
- Can be awakened early with healing

### Resurrection

Returning the dead requires powerful magic.

**Revive (6th-level spell):**
- Target dead 10 days or fewer
- 1 hour casting time (ritual)
- Expensive components (5,000 credits worth)
- Returns to life with 1 HP
- **Penalty:** Lose 1 point from random attribute permanently

**True Resurrection (9th-level spell, Mythic Tier only):**
- Target dead 200 years or fewer
- Can restore even disintegrated bodies
- 1 hour casting time
- Extremely expensive (25,000 credits)
- Returns at full HP
- **Penalty:** Exhaustion level 3, temporary -4 to all rolls for 1 week

**Restrictions:**
- Soul must be willing to return
- Some deaths are final (soul destroyed, cursed, etc.)
- DM may impose additional narrative consequences

## Cover, Concealment, and Terrain

### Cover (Physical Protection)

- **Partial Cover (50%):** +2 DV, +2 to Reflex saves vs area effects
- **Heavy Cover (75%):** +5 DV, +5 to Reflex saves, attackers need line of sight
- **Total Cover (100%):** Cannot be targeted directly (must ready action for when target emerges; area effects might still reach)

**Shooting Around Cover:**
- Lean out to attack (1 action to position)
- Lose cover benefit until start of your next turn

### Concealment (Visual Obstruction)

- **Lightly Obscured:** Dim light, fog, foliage. Disadvantage on Perception checks relying on sight.
- **Heavily Obscured:** Darkness, thick smoke, dense vegetation. Vision blocked as if blinded.

### Terrain Types

- **Difficult Terrain:** Costs 2 ft of movement per 1 ft traveled (rubble, shallow water, dense brush, ice)
- **Greater Difficult Terrain:** Costs 3 ft per 1 ft (deep mud, climbing, steep slope)
- **Hazardous Terrain:** Damage or condition applied (lava, electrified floor, toxic sludge)

## Conditions and Status Effects

### Blinded
- Auto-fail sight-based checks
- Attacks have disadvantage
- Attacks against you have advantage
- -10 to Passive Perception

### Charmed
- Cannot attack or target charmer with harmful effects
- Charmer has advantage on social checks against you
- Ends if charmer or charmer's allies harm you

### Deafened
- Auto-fail hearing-based checks
- -10 to Passive Perception

### Frightened (by specific source)
- Disadvantage on checks and attacks while source is visible
- Cannot willingly move closer to source
- -2 to DV while source is visible

### Grappled
- Speed becomes 0
- Cannot benefit from speed bonuses
- Ends if grappler is incapacitated or moved out of reach
- Escape: Use 1 action, contested check (Athletics or Acrobatics) vs grappler's Athletics

### Incapacitated
- Cannot take actions or reactions
- Lose concentration on spells

### Invisible
- Impossible to see without special senses
- Attacks have advantage
- Attacks against you have disadvantage
- Leave visual tracks (footprints, disturbed objects)

### Paralyzed
- Incapacitated, can't move or speak
- Auto-fail MIG and AGI saves
- Attacks against you have advantage
- Melee hits within 5 feet are automatic crits

### Petrified
- Transformed to stone
- Incapacitated, can't move or speak
- Unaware of surroundings
- Resistance to all damage
- Immune to poison/disease
- Weight increases by factor of 10

### Poisoned
- Disadvantage on attack rolls
- Disadvantage on ability checks
- May have additional effects depending on poison type

### Prone
- Standing costs half your movement speed (spent as part of a Stride action). Can only crawl while prone (half-speed movement).
- Disadvantage on attack rolls
- Melee attacks against you have advantage
- Ranged attacks against you have disadvantage

### Restrained
- Speed becomes 0
- Attacks have disadvantage
- AGI saves have disadvantage
- Attacks against you have advantage

### Stunned
- Incapacitated, can't move
- Can speak falteringly (DM discretion)
- Auto-fail MIG and AGI saves
- Attacks against you have advantage

### Unconscious
- Incapacitated, can't move or speak
- Unaware of surroundings
- Drop everything held, fall prone
- Auto-fail MIG and AGI saves
- Attacks have advantage
- Melee hits from within 5 feet are automatic crits

## Special Combat Actions

### Grapple (1 action)
- Target within reach, one free hand
- Contested: Your MIG vs their MIG or AGI
- Success: Target is Grappled (speed 0)
- Can drag grappled target at half your speed

### Shove (1 action)
- Target within reach
- Contested: Your MIG vs their MIG or AGI
- Success: Push 5 feet away OR knock prone

### Disarm (1 action)
- Target within reach, wielding item
- Contested: Your attack roll vs their MIG or AGI
- Success: Item flies 10 feet in random direction

### Aid Ally (1 action)
- Ally within 5 feet about to make attack
- Make DC 10 skill check (appropriate to situation)
- Success: Ally gains advantage on next attack roll

### Dodge (1 action)
Until start of next turn:
- Attacks against you have disadvantage
- You have advantage on AGI saves
- You don't provoke opportunity attacks

### Help (1 action)
- Aid ally's skill check OR next attack
- Ally gains advantage

### Hide (1 action)
- Must have cover or concealment
- Make Stealth check (vs enemies' passive Perception)
- Success: You are hidden (enemies don't know location)

### Search (1 action)
- Make Perception or Investigation check to find hidden things

### Use Object (1 action, sometimes free)
- Activate device, pull lever, open door, drink potion
- Simple interactions are free; complex interactions cost 1 action

### Called Shots (Optional Rule)

Declare a called shot before rolling. Take a penalty to your attack roll in exchange for a special effect on hit. The target can negate effects with a Fortitude save (DC = damage dealt) unless otherwise noted.

- **Head:** -5 to hit. On hit, deal +2d6 damage and the target must make a Fortitude save or be Dazed until the end of their next turn
- **Arm/Weapon:** -3 to hit. On hit, target must make a MIG save or drop one held item of your choice
- **Leg:** -3 to hit. On hit, target's speed is reduced by 10 feet until the end of their next turn (no save)
- **Weak Point:** -5 to hit. On hit, ignore the target's armor bonus to DV and any damage reduction from armor sources
- **Vitals:** -4 to hit. On hit, the attack becomes a critical hit (double damage dice) regardless of the die roll

*DM Guidance: Use sparingly. Called shots reward precision but can slow combat if every attack becomes a called shot. Consider limiting to 1 called shot per character per round.*

## Two-Weapon Fighting

**Requirements:**
- You must be wielding a weapon in each hand
- Main-hand weapon attacks as normal (1 action)
- Off-hand weapon attacks as 1 additional action (in 3-action system)

**Off-Hand Penalties:**
- **Light weapon in off-hand:** No penalty to attack rolls. Don't add attribute modifier to off-hand damage (unless negative).
- **Non-Light weapon in off-hand:** **-2 penalty to attack rolls** with the off-hand weapon. Don't add attribute modifier to off-hand damage (unless negative).
- **Exception:** If you have the Two-Weapon Fighting ability, add your attribute modifier to off-hand damage regardless of weapon type.

**Dual-Wielding the Same Weapon:** You may wield two copies of the same weapon. Both follow the standard off-hand rules above. For example, dual-wielding two Combat Knives gives full attacks with the main hand and -0/-2 (Light/non-Light) with the off-hand.

**3-Action System Adaptation:**
- First attack: 1 action, full damage
- Second attack (off-hand): 1 action, no attribute bonus to damage, -2 to hit if non-Light
- Third attack (if somehow able): 1 action, additional -3 penalty to hit (stacks with off-hand penalty)

## Improvised Weapons

When using objects not designed as weapons:
- Deal 1d4 + MIG damage
- Attack at disadvantage (unless proficient in improvised weapons)
- May break after use (DM discretion)

**Environmental Weapons:**
- Throw barrel: 1d6 bludgeoning
- Swing chandelier into enemy: 1d8 bludgeoning
- Drop heavy object from height: 1d10 per 10 feet fallen

## Underwater Combat

- Creatures without swim speed have disadvantage on melee attacks (unless using piercing weapons)
- Ranged weapon attacks automatically miss beyond normal range
- Fire damage dealt underwater is reduced by half
- Cold/electric damage in water affects all creatures within 5 feet of target

## Mounted Combat

### Mounting and Dismounting
- 1 action (5 ft movement)

### Controlling a Mount
- **Trained Mount:** Acts on your initiative, you direct it (movement and actions)
- **Independent Mount:** Has own initiative, acts independently

### While Mounted
- Use mount's movement instead of yours
- Advantage on melee attacks vs unmounted creatures smaller than mount
- +1 to melee attacks vs unmounted targets
- If mount is knocked prone, you fall off (take 1d6 damage, land prone)

### Attacking Mounts
- Attacker can choose to target rider or mount
- If mount is reduced to 0 HP, rider must make AGI save DC 15 or fall prone

## Vehicle Combat

Vehicle combat is a core subsystem in Ashfall, featuring crew roles, system damage tracking, and modular vehicle design. For the full rules, see *Vehicles & Operations*.

**Quick Summary:**
- Each crew member fills a role: **Pilot** (Piloting), **Gunner** (Weapon Systems), **Engineer** (Engineering), or **Commander** (Tactics/Persuasion)
- Crew members act on individual initiative using the standard **3-action economy**
- Vehicles degrade through the **System Damage Track** as they take HP damage (Operational → Stressed → Damaged → Critical → Disabled)
- Passengers fire with disadvantage from moving vehicles unless the vehicle has a Stabilization System
