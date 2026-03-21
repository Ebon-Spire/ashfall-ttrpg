---
game_data: true
name: Diplomat
primary_stats: [PRE, WIS]
hit_die: d8
hp_base: 10
hp_per_level: 5
starting_humanity: 10
armor_proficiency: [Light]
weapon_proficiency: [Simple, Sidearms]
save_proficiencies: [Will, Reflex]
skill_bonuses:
  - {skill: Persuasion, bonus: 2}
  - {skill: Insight, bonus: 2}
starting_cp: 15
role: Buffer/Social
magic_type: "None (12 CP/cantrip)"
level_1_features: [Silver Tongue, Commanding Presence, Duck and Cover]
skill_trees:
  - name: Leadership
    focus: Command
    abilities:
      - {name: Tactical Insight, cp_cost: 5, tier: 1, effect: "Grant ally +2 to next attack"}
      - {name: Master Tactician, cp_cost: 10, tier: 2, effect: "Use Commanding Presence on 2 allies simultaneously"}
      - {name: Battlefield Commander, cp_cost: 15, tier: 3, effect: "Grant ally extra action 1/SR"}
  - name: Negotiation
    focus: Social
    abilities:
      - {name: First Words, cp_cost: 5, tier: 1, effect: "Advantage on Persuasion/Deception for deals and contracts; reduce prices 10-20%"}
      - {name: Master Negotiator, cp_cost: 10, tier: 2, effect: "Reroll failed social check 1/SR"}
      - {name: Political Mastermind, cp_cost: 15, tier: 3, effect: "Faction reputation boost"}
  - name: Manipulation
    focus: Control
    abilities:
      - {name: Menacing Presence, cp_cost: 5, tier: 1, effect: "Frighten enemies in 10ft"}
      - {name: Terrifying Visage, cp_cost: 10, tier: 2, effect: "Paralyze with fear 1/SR"}
      - {name: Dominating Presence, cp_cost: 15, tier: 3, effect: "Command action from enemy"}
  - name: Warfare
    specialization: Commander
    focus: Military Command
    abilities:
      - {name: Flanking Directive, cp_cost: 5, tier: 1, effect: "Commanding Presence hit on flanked target also pushes 5 ft"}
      - {name: Cover Fire, cp_cost: 5, tier: 1, effect: "Designate suppressed target: -2 to their attacks 1 round"}
      - {name: Eyes on the Field, cp_cost: 5, tier: 1, effect: "Never surprised if ally can see ambush; 1/combat GM tactical intel question"}
      - {name: Rally Formation, cp_cost: 10, tier: 2, effect: "Reaction: reposition 3 allies 15 ft each when enemy ends turn near you, 1/SR"}
      - {name: Combined Arms, cp_cost: 10, tier: 2, effect: "Battle Orders Empower: all allies hit same target; 3+ hits = distracted, 1/SR"}
      - {name: Command the Field, cp_cost: 15, tier: 3, effect: "Grant ally extra full turn (forfeit own next turn incl. free action); 1/SR"}
      - {name: Decimate the Morale, cp_cost: 15, tier: 3, effect: "War Cry: frightened enemy causes nearby enemies to save vs shaken, 1/LR"}
  - name: Diplomacy
    specialization: Negotiator
    focus: Information and Leverage
    abilities:
      - {name: Open Channels, cp_cost: 5, tier: 1, effect: "Short rest: contact ally for one tactical intel piece before next combat, 1/SR"}
      - {name: Leverage, cp_cost: 5, tier: 1, effect: "Bank a successful social check as leverage; spend for 1 free cooperation, 1/scene"}
      - {name: Trade Network, cp_cost: 5, tier: 1, effect: "Passive income PRE×50 credits/downtime; goods 20% cheaper in known settlements"}
      - {name: Demand Compliance, cp_cost: 10, tier: 2, effect: "1 Action. Up to 2 enemies Will save or cannot attack allies 1 round (still acts otherwise), 1/SR"}
      - {name: Silver Coercion, cp_cost: 10, tier: 2, effect: "Demand Attention affects INT 2+ and berserkers; reuse once/encounter after 10 min"}
      - {name: Defection, cp_cost: 15, tier: 3, effect: "1 round negotiation (free action each turn): Persuasion vs Will; success = enemy neutral rest of encounter, 1/LR"}
      - {name: The Big Deal, cp_cost: 15, tier: 3, effect: "Once/arc: move faction reputation 2 steps instead of 1; permanent narrative consequences"}
  - name: Influence
    specialization: Demagogue
    focus: Mass Psychology
    abilities:
      - {name: Dread Sermon, cp_cost: 5, tier: 1, effect: "1 Action: shaken/frightened enemies save at disadvantage or escalate 1 step, 1/SR"}
      - {name: The Whisper Network, cp_cost: 5, tier: 1, effect: "Passive: 1/session, NPC in your sphere delivers unsolicited intelligence"}
      - {name: Manufactured Loyalty, cp_cost: 5, tier: 1, effect: "Passive: followers resist subversion; opposed PRE check required; you are notified"}
      - {name: Break Them, cp_cost: 10, tier: 2, effect: "Reaction: enemy failing Dread Presence save must use reaction to flee at full speed, 1/SR"}
      - {name: Manufactured Consensus, cp_cost: 10, tier: 2, effect: "Incite Redirect/Break Formation: affect up to 3 targets simultaneously, 1/SR"}
      - {name: The Sermon Spreads, cp_cost: 15, tier: 3, effect: "Mass Hysteria: fail by 5+ = long-term deranged PRE mod days; DC 16 Medic cure, 1/LR"}
      - {name: Icon of Fear, cp_cost: 15, tier: 3, effect: "Passive: enemies frightened by you in past encounters have disadvantage on all initial saves"}
features:
  - name: Silver Tongue
    level: 1
    action: Passive
    frequency: "First Interaction"
    description: "Advantage on Persuasion and Deception for the first conversation with any individual or group. Does not work on non-speakers or inherently hostile creatures."
  - name: Commanding Presence
    level: 1
    action: Free Action
    frequency: "1/Round"
    description: "One ally within 30 ft who can hear you gains +1d4 to their next attack roll or saving throw."
  - name: Duck and Cover
    level: 1
    action: Reaction
    frequency: "PRE mod times/Short Rest (min 1)"
    description: "When taking damage, halve the damage from the triggering attack."
  - name: Inspire
    level: 2
    action: "1 Action"
    frequency: "PRE mod times/Short Rest (min 1)"
    description: "30 ft range. Allies who can hear gain temp HP equal to PRE mod + level. You gain temp HP equal to 2x number of allies affected. Lasts until next short rest."
  - name: Read the Room
    level: 3
    action: Free Action
    frequency: "After 1 round observation"
    description: "Contested WIS vs target PRE. Success: learn emotional state, general intentions, detect deception. Failure: vague sense only."
  - name: Attribute Improvement
    level: 4
    action: Passive
    frequency: Permanent
    description: "Increase one attribute by +2, or two attributes by +1 each. Maximum 20."
  - name: Rally Cry
    level: 5
    action: "1 Action"
    frequency: "1/Long Rest"
    description: "60 ft range. All three effects: Heal 2d8+PRE mod HP, end one condition (frightened/poisoned/stunned), and advantage on next attack or save."
specialization_details:
  - name: Commander
    role: Tactical Leader
    features:
      - name: Battle Orders
        level: 6
        action: "1 Action"
        description: "Up to 3 allies within 60 ft, choose one effect."
        choices:
          - {name: Fortify, effect: "+2 DV until start of next turn"}
          - {name: Reposition, effect: "Move 15 ft as reaction immediately"}
          - {name: Empower, effect: "+1d4 damage on next attack"}
      - {name: Tactical Assessment, level: 6, action: "1 Action", description: "Learn one detail about encounter: enemy numbers, power level, strategy, or escape routes."}
      - {name: Hold the Line, level: 8, action: Reaction, description: "PRE mod times/Long Rest. When ally drops to 0 HP, they drop to 1 HP instead."}
      - {name: War Cry, level: 8, action: "1 Action", description: "30 ft range. Enemies Will save DC 8+PRE+prof or frightened 1 round. Allies gain +2 attack rolls 1 round."}
      - {name: Supreme Commander, level: 10, action: "1 Action", description: "1/Long Rest. 1 minute. At the start of each of your turns, you choose one effect — all allies within 60 ft gain: an extra action on their turn, +3 DV until your next turn, or advantage on all attack rolls until your next turn. You can choose a different effect each round."}
  - name: Negotiator
    role: Social/Diplomatic
    features:
      - {name: Broker, level: 6, action: Downtime, description: "Generate 50% more income. Party gains +1 Tier Token per downtime period."}
      - {name: Silver-Tongued Devil, level: 6, action: "1 Action", description: "1/Short Rest. Persuasion vs Will save to make non-hostile creature do a favor, share info, or become friendlier for 1 hour."}
      - {name: Demand Attention, level: 6, action: "1 Action", description: "1/Short Rest. 30 ft. Intelligent enemy (INT 4+, can hear/understand) Will save DC 8+PRE+prof or spends next action listening — cannot attack, cast, or move 5+ ft that turn. Immune on success for 1 min. No effect on mindless enemies or berserkers."}
      - {name: Ceasefire, level: 8, action: "1 Action", description: "1/Short Rest. 60 ft. Will save DC 8+PRE+prof or unable to attack for 1 round. Can still move and defend. Ends if ally attacks."}
      - {name: Network, level: 8, action: Downtime, description: "PRE check DC 12 to find a contact who owes a favor in any major settlement or faction."}
      - {name: Extract Leverage, level: 8, action: "Passive", description: "1/Short Rest. When Ceasefire is resisted, when an enemy restrains you instead of killing you, or when an enemy shows hesitation this encounter, bank the interaction as leverage. Next Persuasion check against any party this encounter: advantage + DC reduced by 4. Alt: declare one of a hesitant enemy's allies 'persuadable' — they fight at disadvantage for 1 round (Fracture Resolve)."}
      - {name: Treaty, level: 10, action: "10 min negotiation", description: "1/Long Rest. Compel 2 willing parties to honor agreement for 30 days. Violation: 5d10 psychic + disadvantage on PRE checks 30 days."}
  - name: Demagogue
    role: Fear/Manipulation
    features:
      - {name: Dread Presence, level: 6, action: Passive, description: "30 ft aura. Escalating effects as enemies drop: -1 fear saves → -1 attack → Will save or Shaken → Will save or Frightened."}
      - {name: Incite, level: 6, action: "1 Action", description: "PRE mod/SR. 30 ft. Will save. Redirect Aggression, Break Formation, or Sow Doubt. Out of combat: shift crowd emotion (10 NPCs, 10 min)."}
      - {name: Cult of Personality, level: 8, action: "Long Rest Downtime", description: "Convert up to PRE mod NPCs as followers. Follow reasonable orders, fight at 50% effectiveness, provide intel/shelter/resources."}
      - {name: Psychic Fracture, level: 8, action: "1 Action", description: "1/SR. 30 ft. Will save or Frightened 1 min. Allies drop triggers paralysis check. -1 Will saves to nearby enemies. Fail by 5+: paralyzed 1 round."}
      - {name: Mass Hysteria, level: 10, action: "1 Action", description: "1/Long Rest. 60 ft. Will DC 18. Fail: confused 1 minute (concentration). Each turn d4: 1=attack nearest, 2=do nothing, 3=flee, 4=act normally."}
specializations: [Commander, Negotiator, Demagogue]
starting_equipment:
  - Sidearm
  - Light armor
  - "Diplomat's kit and notebook"
  - 50 bonus credits
---
# Diplomat

> **Recommended Build Guide — Classless System**
> This file describes the **Diplomat recommended build**: a curated path through Ashfall's shared skill trees designed for this build's core fantasy. Under the current rules, you are **not locked to this build**. Choose a **chassis** for your starting stats and proficiencies, then spend **Character Points (CP)** in any skill trees that match your character concept.
>
> - **Chassis selection and starting stats:** see [Chassis](../chassis.md)
> - **CP economy, spending rules, and milestones:** see [Character Points](../character-points.md)
> - **Full skill tree catalog:** see [Skill Trees](../skill-trees.md)
>
> The ability descriptions, skill tree layouts, and feature details in this file remain the authoritative rules reference for those abilities. The CP values listed in the skill trees are the costs for purchasing abilities.

*Words are weapons in the Wasteland. The Diplomat understands this better than anyone. They're negotiators, faction envoys, con artists, and battlefield commanders—people who know that a well-placed promise can topple governments and the right speech can turn a mob into an army. They thrive in the political chaos of settlements, broker deals between warbands, and talk their way out of situations that would leave others bleeding in the dirt. Some were politicians or corporate negotiators before the Fall; others learned rhetoric in the brutal school of survival.*

*A Diplomat's power is subtle but absolute. They read microexpressions to detect lies, analyze power structures to exploit weaknesses, and speak with a charisma that makes people believe in impossible causes. In combat, they're commanders—shouting orders, inspiring courage, and turning ragged survivors into coordinated units. Their gear is social: fine pre-war clothing salvaged from ruins, forged credentials, bottles of whiskey for bribes, and an arsenal of blackmail material on anyone important.*

*But leadership has a cost. Diplomats carry the weight of every alliance betrayed, every promise broken for tactical advantage, every follower who died following their orders. Some maintain Humanity through genuine belief in causes—rebuilding civilization, protecting the innocent, forging lasting peace. Others become master manipulators, sociopaths who see people as pawns and truth as a flexible concept. The Wasteland needs its talkers and leaders—but power corrupts, and silver tongues can speak monstrous lies.*

![A diplomat negotiates between rival factions, words as powerful as any weapon](/images/illustrations/diplomat-negotiation.png)

## Core Statistics

| Attribute | Value |
|-----------|-------|
| **Primary Stats** | PRE/WIS |
| **Secondary Stat** | INT |
| **Hit Die** | d8 |
| **Starting HP** | 10 + END modifier |
| **Starting Humanity** | 10 |
| **Starting CP** | 15 |

## Proficiencies

**Weapons:** Simple weapons, sidearms
**Armor:** Light armor
**Saving Throws:** Will, Reflex
**Skills:** Persuasion, Insight, plus **3** of your choice

## Starting Equipment

- Light armor (formal pre-war suit or elegant scavenged clothing, DV 11 + AGI mod)
- Sidearm (pistol, cane-sword, or holdout weapon)
- Diplomat's kit: forged documents, bottle of whiskey, 50cr in various currencies
- Symbol of authority (badge, faction insignia, or military medals—real or fake)
- Small notebook for recording debts, secrets, and favors

## Level Progression Features (Levels 1-5)

### Level 1: Silver Tongue

**Effect:** You have **advantage on Persuasion and Deception checks** when speaking to someone for the first time (first impressions are your specialty).

**Special:** This applies to the first conversation with a specific individual or group. Once you've established a relationship (good or bad), this advantage no longer applies to that person. However, it applies to every *new* person you meet—perfect for fast-talking your way through settlements.

**Limitations:** Doesn't work on creatures that can't understand you or are inherently hostile (mid-combat enemies, mindless undead, etc.).

### Level 1: Commanding Presence

**Action Cost:** Free action (once per round)
**Range:** 30 feet
**Target:** One ally who can hear you
**Effect:** You shout tactical advice, encouragement, or precise instructions. The target gains **+1d4** to their next attack roll OR saving throw (their choice when they roll).

**Frequency:** Once per round (you can do this every round, targeting a different ally each time or the same one)

**Special:** This ensures the Diplomat is *always contributing in combat*. Even if you don't attack, you're boosting allies. The +1d4 averages to +2.5, which can turn near-misses into hits or failed saves into successes.

**Example Shouts:**
- "Aim for the head!"
- "Roll left, NOW!"
- "You've got this—focus!"

### Level 1: Duck and Cover *(v0.4 NEW)*

**Action Cost:** Reaction
**Trigger:** When you take damage from an attack
**Frequency:** PRE modifier times per short rest (minimum 1)
**Effect:** You instinctively dodge, deflect, or roll with the blow — **halve the damage you take from the triggering attack.** Years of navigating hostile negotiations, back-alley ambushes, and political assassination attempts have given you an uncanny survival instinct.

**Special:** This represents the Diplomat's learned ability to read danger and react. Unlike Warriors who absorb damage through brute toughness, Diplomats avoid it through awareness and reflexes. This is what keeps the silver tongue alive long enough to turn the tide.

**Design Note:** *Diplomats are support classes — they need to survive long enough to deliver their buffs and inspiration. Duck and Cover ensures they aren't one-shot in early rounds, giving them time to use Inspire, Commanding Presence, and their social abilities.*

### Level 2: Inspire

**Action Cost:** 1 action
**Range:** 30 feet (all allies who can hear you)
**Effect:** You deliver a rousing speech or battle cry. All allies within range gain **temporary HP = your PRE modifier + your level**. **You also gain temporary HP equal to twice the number of allies affected** (rallying others steels your own resolve). These temporary HP last until the next short rest (8 hours).

**Frequency:** PRE modifier times per short rest (minimum 1)

**Example at Level 2:** With PRE 16 (+3), you grant 3 + 2 = **5 temporary HP** to all nearby allies, and you gain temp HP = 2 x allies affected (4 temp HP with 2 allies). At Level 5 with PRE 18 (+4), that's 4 + 5 = **9 temporary HP** to everyone, and 6 temp HP for yourself (3 allies).

**Special:** Temporary HP doesn't stack—if an ally already has temporary HP, they keep the higher value. This ability represents pre-battle rallying or mid-combat morale boosts.

**Example Speeches:**
- "We've survived worse—they won't break us!"
- "For everyone we've lost—FIGHT!"
- "Hold the line—no one dies today!"

### Level 3: Read the Room

**Action Cost:** Free (after observing for 1 round)
**Range:** Line of sight
**Target:** One creature
**Effect:** After watching a creature for at least 1 round (6 seconds), you can read their emotional state and intentions. Make a **contested check: your 1d20 + WIS modifier vs. their 1d20 + PRE modifier** (see Contested Checks in Combat rules). On a tie, you fail.

**On success, you learn:**
- Their current emotional state (angry, fearful, greedy, desperate, etc.)
- Their general intentions toward you and your group (hostile, neutral, friendly, opportunistic)
- Whether they're lying or concealing information (you detect deception)

**On failure:** You get a vague sense but no specifics (GM's discretion).

**Special:** This doesn't reveal specific thoughts or plans—just broad emotional state and honesty. You can use this in social encounters to know if someone is trustworthy, in combat to identify who's about to flee, or in negotiations to spot lies.

### Level 4: Attribute Improvement

Increase one attribute by +2 or two attributes by +1 each (maximum 20).

### Level 5: Rally Cry (Capstone)

**Action Cost:** 1 action
**Range:** 60 feet (all allies who can hear you)
**Frequency:** 1/long rest
**Effect:** You deliver the speech of a lifetime—a desperate rallying cry that pulls allies back from the brink. All allies within range gain ALL of the following:

1. **Heal:** Regain **2d8 + your PRE modifier** hit points
2. **Cleanse:** End one condition of their choice currently affecting them (frightened, poisoned, stunned, etc.)
3. **Empower:** Gain advantage on their next attack roll or saving throw

**Special:** This is a "turn the tide" ability—when things look hopeless, you inspire allies to fight through pain, shake off fear, and push forward. The healing is substantial (average 9-13 HP at Level 5), and ending conditions can save lives (removing stunned can prevent death, removing frightened can restore combat effectiveness).

**Example Scenarios:**
- Party is fleeing overwhelming odds—Rally Cry heals wounds and removes frightened, letting you turn and fight
- Mid-boss fight, multiple allies are poisoned and bloodied—Rally Cry heals and cleanses poison, giving you a second wind
- Desperate last stand—Rally Cry heals, removes exhaustion levels, and empowers final attacks

## Skill Trees

### Leadership (Command & Tactics)

Coordinate allies, issue orders, and control the battlefield through superior tactics.

**Tier 1 Abilities (5 CP each):**
- **Tactical Insight:** Once per short rest, use 1 action to identify an opening in an enemy's defenses. Choose one ally within 30 ft — that ally gains **+2 to their next attack roll** before the end of their next turn (you've spotted the gap in the enemy's guard and signaled it clearly).
- **Coordinate Strike:** 1/round, when you use Commanding Presence to boost an ally's attack and they hit, one other ally within 10 ft of the target can immediately make an opportunity attack against that target (you coordinate focused fire).
- **Defensive Formation:** 1 action, all allies within 30 ft gain +1 DV until the start of your next turn (you're directing defensive positioning).

**Tier 2 Abilities (10 CP each, requires one Tier 1):**
- **Master Tactician:** You can use Commanding Presence on up to 2 allies simultaneously (both get +1d4 to their next roll).
- **Press the Advantage:** When an ally within 30 ft scores a critical hit or drops an enemy to 0 HP, you can use your reaction to grant all allies within 30 ft +1d6 damage on their next attack (morale surges).
- **Retreat Order:** 1 action, 1/short rest—all allies within 60 ft can immediately move up to their speed as a reaction without provoking opportunity attacks (tactical withdrawal).

**Tier 3 Abilities (15 CP each, requires Level 5+ and one Tier 2):**
- **Battlefield Commander:** 1/short rest, when you use Commanding Presence on an ally, you can elevate the command to a full tactical directive — instead of the normal +1d4 bonus, that ally gains an **extra action** on their turn (movement, attack, or ability, at their choice). This does not expend your Commanding Presence use for the round.
- **Heroic Sacrifice Prevention:** 1/long rest, when an ally within 30 ft would drop to 0 HP, you can shout a warning as a reaction—they drop to 1 HP instead and can immediately move 10 ft without provoking opportunity attacks (you saved their life with a warning).

### Negotiation (Diplomacy & Trade)

Master the art of deals, faction reputation, and information gathering.

**Tier 1 Abilities (5 CP each):**
- **First Words:** You have advantage on Persuasion and Deception checks when negotiating prices, deals, or contracts. You can typically reduce prices by 10-20% or improve deal terms.
- **Faction Contact:** Choose one major faction. You have an established contact within that faction who owes you a favor or provides information. You can call on this contact once per session (GM determines limits).
- **Information Broker:** During downtime in a settlement, you can gather rumors and intelligence. Make a DC 12 PRE check—on success, learn one useful piece of information about local politics, threats, or opportunities.

**Tier 2 Abilities (10 CP each, requires one Tier 1):**
- **Master Negotiator:** You can negotiate deals that benefit both parties (or appear to). Once per session, broker a major deal (GM approval): arrange a trade, form an alliance, or convince a neutral party to aid you.
- **Reputation Builder:** You gain +2 to all Persuasion and Intimidation checks when dealing with members of factions where you have positive reputation. Your reputation spreads—people have heard of you.
- **Debt Collector:** You can call in favors or debts. Once per long rest, declare that an NPC owes you a favor (GM must approve the NPC and nature of the favor). They must help you in a reasonable way or provide information/resources.

**Tier 3 Abilities (15 CP each, requires Level 5+ and one Tier 2):**
- **Political Mastermind:** You can manipulate faction politics. Once per story arc (GM's discretion), engineer a major political event: shift faction alliances, arrange an assassination, spark a coup, or broker peace. This requires weeks of downtime and successful skill checks, but you can reshape the political landscape.
- **Legendary Envoy:** Your reputation precedes you. You gain advantage on all Persuasion checks with NPCs who have heard of your exploits. You can request audience with faction leaders or important NPCs without normal gatekeeping.

### Manipulation (Intimidation & Control)

Use fear, deception, and psychological warfare to control others.

**Tier 1 Abilities (5 CP each):**
- **Menacing Presence:** You have advantage on Intimidation checks. When you successfully intimidate a creature, they're frightened of you for 1 minute (DC 12 Will save to resist).
- **Subtle Manipulation:** You can plant suggestions in conversations. After talking with someone for at least 5 minutes, make a DC 14 Deception check—on success, they believe a small lie or are inclined to follow a minor suggestion (GM determines limits—can't make them harm themselves).
- **Crowd Agitator:** You can incite or calm crowds. Spend 1 action to make a DC 13 PRE check—on success, shift the mood of a crowd (calm them, anger them, direct their attention, etc.). Works on groups of 10+ NPCs.

**Tier 2 Abilities (10 CP each, requires one Tier 1):**
- **Terrifying Visage:** 1/short rest, you can frighten one creature within 30 ft that can see and hear you. They make a DC 15 Will save or are frightened for 1 minute. While frightened, they have disadvantage on attacks and can't willingly move closer to you.
- **Master Manipulator:** You can convince people of unlikely lies with a DC 16 Deception check. You can impersonate authority figures (guard captain, faction official, etc.) with a convincing story and forged credentials.
- **Psychological Warfare:** Before combat (if you have time to talk), you can demoralize enemies. Make a DC 14 Intimidation check—on success, all enemies within 30 ft who can hear you have disadvantage on their first attack roll.

**Tier 3 Abilities (15 CP each, requires Level 5+ and one Tier 2):**
- **Dominating Presence:** 1/long rest, you can attempt to dominate one humanoid's will. Spend 1 minute talking with them, then make a **contested check: your 1d20 + PRE modifier vs. their 1d20 + WIS modifier** (see Contested Checks in Combat rules). On success, they view you favorably and will follow reasonable requests for the next 24 hours (can't make them harm themselves or loved ones). This is powerful but subtle—they think it's their own decision.
- **Panic the Masses:** 1/long rest, use 1 action to create panic in a crowd of enemies. All enemies within 60 ft who can see and hear you make a DC 17 Will save or are frightened for 1 minute and must use their turn to move away from you. Useful for scattering mobs or breaking sieges.

## Magic: None (Purchase via CP)

Diplomats have **no innate magic**, but they can purchase cantrips using CP:
- **12 CP per cantrip** (cheaper than most non-casters—represents force of personality manifesting as minor magical effects)
- Common choices: *Friends* (temporary boost to Persuasion), *Message* (silent communication), *Prestidigitation* (minor illusions for showmanship), *Minor Illusion* (create distractions)

**No spell slots.** If they want leveled spells, they must multiclass or acquire magical items.

## Sample CP Expenditures

Here's how a typical Diplomat might spend CP from Level 1-5:

**Level 1 (15 CP total):**
- Tactical Insight (Leadership Tier 1): 5 CP
- *Remaining: 10 CP*

**Level 2 (25 CP total):**
- First Words (Negotiation Tier 1): 5 CP
- Menacing Presence (Manipulation Tier 1): 5 CP
- *Remaining: 10 CP*

**Level 3 (35 CP total):**
- Master Tactician (Leadership Tier 2): 10 CP
- Faction Contact (Negotiation Tier 1): 5 CP
- *Remaining: 5 CP*

**Level 4 (45 CP total):**
- Master Negotiator (Negotiation Tier 2): 10 CP
- *Remaining: 5 CP*

**Level 5 (55 CP total):**
- Battlefield Commander (Leadership Tier 3): 15 CP
- *Remaining: 0 CP*

---

## Advanced Specializations (Levels 6-10)

At level 6, the Diplomat selects one of three Advanced Specializations. These specializations unlock new skill tree branches, powerful abilities, and define the Diplomat's role in the wasteland's ongoing struggle.

### Commander (Military Leadership)

**Flavor:** They don't just talk — they command. Armies follow them into hell and back. Squads fight harder under their orders, and even defeat becomes victory through their tactical genius.

**Prerequisites:** Diplomat build, level 6

**Level 6 Features:**
- **Battle Orders:** As 1 action, you can give an order to up to 3 allies within 60 ft who can hear you. Choose one effect: all targets gain +2 DV until the start of your next turn, all targets can move 15 ft as a reaction immediately, or all targets gain +1d4 to damage on their next attack.
- **Tactical Assessment:** As 1 action, you can assess an enemy group or battlefield situation to learn one tactical detail: their approximate numbers, general power level, planned strategy, or escape routes. The GM provides accurate, useful tactical intelligence.

**Level 8 Features:**
- **Hold the Line:** As a reaction when an ally within 30 ft would be reduced to 0 HP, that ally instead drops to 1 HP. You can use this ability a number of times per long rest equal to your PRE modifier (minimum 1).
- **War Cry:** As 1 action, you issue a fearsome command. All enemies within 30 ft who can hear you must make a Will save (DC = 8 + PRE + proficiency) or become frightened of you for 1 round. All allies within range gain +2 to attack rolls for 1 round.

**Level 10 Capstone:**
- **Supreme Commander:** Once per long rest, for 1 minute, you enter a state of perfect battlefield control. At the start of each of your turns, all allies within 60 ft gain one of the following benefits of your choice: an extra action on their turn, +3 DV until your next turn, or advantage on all attack rolls until your next turn. You can choose a different benefit each round.

**New Skill Tree:** Warfare (advanced military tactics, army-scale combat, siege warfare, logistics, formations and maneuvers)

### Warfare (Military Command & Force Multiplication)

Available only to Commanders (L6+ specialization). Focuses on battlefield coordination, force multiplication, and information advantage. The Commander who invests here becomes less of a solo combatant and more of a living tactical system.

**Tier 1 Abilities (5 CP each):**

- **Flanking Directive:** When you use Commanding Presence to boost an ally's attack roll and that attack hits a target who is flanked (two enemies on opposite sides of it, or per GM's terrain ruling), the ally can push the target **5 feet** in any direction as part of the hit — no check required. This free repositioning can trigger opportunity attacks from other allies in position.

- **Cover Fire:** As 1 action, you designate one visible enemy as the **suppressed target** until the start of your next turn. While suppressed, that enemy has **-2 to their attack rolls** against your allies (your coordinated calls and positioning make their attacks telegraphed). You can maintain Cover Fire on only one target at a time.

- **Eyes on the Field:** Passive. Your tactical awareness extends beyond direct observation. You cannot be surprised in combat if at least one ally can see the ambush source. Additionally, once per combat, you can ask the GM one yes/no question about enemy tactical disposition (reserve positions, who's in command, likely retreat route) — answered truthfully, as if you had assessed it through instinct and training.

**Tier 2 Abilities (10 CP each, requires one Tier 1):**

- **Rally Formation:** Once per short rest, as a **reaction** when an enemy ends their turn within 30 ft of you, you can reposition up to **3 allies** within 60 ft of you by up to **15 feet each** (they move as a reaction to your command, no action cost to them). This movement does not provoke opportunity attacks. Allies must be able to hear you.

- **Combined Arms:** Once per short rest, when you issue Battle Orders and choose the **Empower** effect (+1d4 damage), all affected allies must target the **same enemy** you designate. If three or more of them hit with their next attack this round, the target is **distracted** until the start of your next turn (disadvantage on its next attack roll and cannot take reactions).

**Tier 3 Abilities (15 CP each, requires Level 5+ and one Tier 2):**

- **Command the Field:** Once per short rest, as a free action at any point on your turn, you grant **one ally within 60 ft** an additional **full turn** (3 actions + 1 reaction), which they take immediately after yours ends. In exchange, you forfeit your own full turn next round — including your free action (Commanding Presence) — though you still take your reaction as normal. Allies must be able to hear you. *This is the defining Commander moment: the battle hinges on one ally moving now, and you give up your next turn to make it happen.*

- **Decimate the Morale:** Once per long rest, when your **War Cry** causes an enemy to become frightened, all other enemies within **30 feet who can see the frightened creature** must immediately make a Will save (DC = 8 + PRE + proficiency) or become **shaken** for 1 round (disadvantage on attack rolls and cannot use reactions while shaken). Creatures immune to fear are immune. *Fear is contagious. One breaking is all it takes.*

---

### Negotiator (Peace/Trade/Resources)

**Flavor:** Bullets are expensive. Words are free. Negotiators build empires from handshakes and contracts. They turn enemies into allies, conflicts into opportunities, and scarcity into abundance through the power of the deal.

**Prerequisites:** Diplomat build, level 6

> **Design Note — In-Combat Role:** *The Negotiator's combat identity is distinct from both the Commander and the Demagogue. The Commander amplifies allies through tactical orders. The Demagogue weaponizes fear to erode enemy morale and coherence. The Negotiator uses a third lever: reason and self-interest. They don't frighten enemies into hesitation — they make enemies choose to hesitate. Demand Attention creates a window; Ceasefire closes a firefight; Extract Leverage turns an enemy's rational self-preservation instinct against them. These are the social combatant's tools: subtle, conditional, and utterly devastating when applied to the right enemy at the right moment.*

**Level 6 Features:**
- **Broker:** During downtime periods, your trade and negotiation activities generate 50% more income than normal. Additionally, your party gains +1 Tier Token per downtime period due to your trading network and connections.
- **Silver-Tongued Devil:** Once per short rest, as 1 action, you can attempt to convince a non-hostile creature to do a reasonable favor, share valuable information, or change their attitude one step friendlier. Make a Persuasion check contested by their Will save. The effect lasts 1 hour or until you betray their trust.
- **Demand Attention** (1/Short Rest): As 1 action, you address one intelligent enemy within **30 feet** who can hear and understand you — you make them an offer: payment, mercy, information they want, or simply a promise worth hearing. The target must make a **Will save (DC = 8 + PRE + proficiency)**. On a failure, they spend their **next action listening** — they cannot attack, cast spells, or move more than 5 feet that turn (they are not charmed; they simply stopped to hear what you're saying). On a success, the target is immune to Demand Attention for 1 minute. Has no effect on mindless enemies (constructs, most undead) or creatures in a berserker rage.

  *The window this creates — one enemy paused for one turn — is the Negotiator's combat identity. It's not fear, and it's not compulsion. It's the rational wedge: even in the middle of a firefight, you've made someone stop and think.*

**Level 8 Features:**
- **Ceasefire:** As 1 action, you call for a halt to hostilities. All combatants within 60 ft who can hear you must make a Will save (DC = 8 + PRE + proficiency) or become unable to make attacks for 1 round. They can still move, dodge, and defend. The effect immediately ends if any ally attacks. Usable once per short rest.
- **Network:** You have cultivated contacts in every major settlement and faction. When you arrive somewhere new, you can make a PRE check (DC 12) to determine if you have a contact there who owes you a favor. The GM determines the contact's position and capabilities.
- **Extract Leverage** (Passive, 1/Short Rest): You are always reading the room, even in combat. Once per short rest, when **any** of the following occurs, you can bank the interaction as **leverage**:
  - An enemy successfully resists your Ceasefire or Demand Attention (they showed you how they make decisions under pressure)
  - An enemy restrains or captures you instead of killing you (they want something)
  - An enemy demonstrates hesitation this encounter — moves away from you without being forced, holds fire when they had a clean shot, or uses Ceasefire as a target

  **Banked leverage** has two uses (choose one when you spend it):
  - **Pressure Point:** Your next Persuasion check against any party in this encounter has advantage and the DC is reduced by 4.
  - **Fracture Resolve:** Declare one ally of the hesitant or Ceasefire-targeted enemy as **persuadable**. That NPC fights at disadvantage on attack rolls for 1 round while you exploit the visible crack in their resolve.

  You can only have one leverage banked at a time. Unused leverage clears at the end of the encounter.

**Level 10 Capstone:**
- **Treaty:** Once per long rest, you can spend 10 minutes negotiating a binding agreement between two parties. Both parties become magically compelled to honor the terms of the agreement for 30 days. If either party knowingly violates the treaty, they immediately suffer 5d10 psychic damage and are cursed with disadvantage on all PRE checks for 30 days. Both parties must willingly agree to the treaty for it to take effect.

**New Skill Tree:** Diplomacy (advanced trade, faction relations, treaty-making, information networks, resource acquisition, economic warfare)

### Diplomacy (Information, Leverage, and Economic Warfare)

Available only to Negotiators (L6+ specialization). Focuses on intelligence brokering, resource generation, faction leverage, and — crucially — extending your in-combat social options. A Negotiator who invests here becomes a nexus of information and favors, with words that carry real weight in initiative order.

**Tier 1 Abilities (5 CP each):**

- **Open Channels:** Once per short rest, during a short rest or between encounters, you contact a known faction ally or informant via radio, courier, or clandestine meeting. Ask for one piece of **specific tactical intelligence** about the next combat or scene: patrol schedules, NPC weakness, enemy count, or one enemy's special ability. The GM provides accurate, actionable information. *You fight better when you've done your homework.*

- **Leverage:** After any successful Persuasion or Deception check (in or out of combat), you can choose to **bank the success as leverage** rather than spend it on the immediate outcome. Once per scene, you can spend banked leverage to achieve one act of immediate cooperation from the target without a follow-up check — they comply because you've already demonstrated you hold the advantage. You can only bank one leverage at a time.

- **Trade Network:** Passive. Your contacts generate passive income and commercial goodwill. You gain credits per downtime period equal to your **PRE modifier × 50**. In any settlement where you have positive reputation, goods cost **20% less** and you can always find a buyer for scavenged items (no DC check needed to sell).

**Tier 2 Abilities (10 CP each, requires one Tier 1):**

- **Demand Compliance:** Once per short rest, as 1 action, you issue direct, coordinated demands to **up to two intelligent enemies** within **30 feet** who can hear and understand you. Each must make a **Will save (DC = 8 + PRE + proficiency)**. On a failure, they **cannot attack you or your allies for 1 round** — they don't lose their actions, but they must redirect all actions to movement, defense, or interacting with the environment. They are not charmed. On a success, that creature is immune to Demand Compliance for 1 minute. Has no effect on mindless creatures. *Demand Attention stops one enemy completely. Demand Compliance stops two from targeting your people — different tools, different fights.*

- **Silver Coercion:** Extends your Demand Attention ability (L6 fixed feature). Demand Attention can now affect enemies with Intelligence as low as 2 (down from 4), and you can use it against creatures in a berserker rage (they don't listen — but they hesitate). Additionally, you can use Demand Attention once per encounter against a creature that has already successfully resisted it (the second attempt does not ignore the immunity, but the cooldown resets after 10 minutes if the creature is re-encountered).

**Tier 3 Abilities (15 CP each, requires Level 5+ and one Tier 2):**

- **Defection:** Once per long rest, you can attempt to talk one enemy combatant out of the fight entirely. Over the course of **1 full round**, you negotiate while fighting — spending a free action on each of your turns that round to speak (you act normally with your 3 actions; the negotiation happens in parallel). At the end of the round, make a Persuasion check contested by their **Will save**. On success, they **switch to neutral** for the remainder of the encounter — they stop attacking, move to the edge of the encounter, and will not re-engage unless directly attacked. Mindless enemies and creatures immune to charm are unaffected. *Some people in a firefight were never there by choice.*

- **The Big Deal:** Once per story arc, you broker a deal so significant it reshapes the political landscape. You can move a faction's **reputation track by 2 steps** (instead of the usual 1) in either direction — a single negotiation that forges an alliance, sparks a war, or rewrites the terms of survival for a region. The GM determines the narrative consequences; they cannot be fully reversed. *Some deals you make. Some deals make you.*

---

### Demagogue (Manipulation/Fear/Crowds)

**Flavor:** Fear. Devotion. Hysteria. Demagogues don't lead through respect — they control through manipulation. Cults form in their wake, mobs bend to their will, and rational minds crumble under their influence.

**Prerequisites:** Diplomat build, level 6

**Level 6 Features:**
- **Dread Presence** (Passive): Your presence is a weapon — the kind that erodes. Dread Presence is a **persistent 30-foot aura** (always active while you're conscious). Enemies within it suffer cumulative effects based on how many of their allies have been **dropped to 0 HP or fled** since the start of the encounter:

  | Allies Dropped/Fled | Effect on Enemies in Aura |
  |---------------------|--------------------------|
  | **0** | -1 to saving throws against **fear effects** |
  | **1** | Above, plus -1 to **attack rolls** |
  | **2** | Above, plus Will save (DC = 8 + PRE + proficiency) or **Shaken** 1 round |
  | **3+** | Above, plus failed save = **Frightened** 1 round instead of Shaken |

  The threshold is tracked per encounter, not per round. "Dropped" means reduced to 0 HP (unconscious counts). "Fled" means voluntarily left the encounter (forced movement doesn't count). Creatures immune to fear are immune to all effects beyond the baseline. The Will save at thresholds 2+ occurs once per creature per round (at the start of their turn).

- **Incite** (1 Action): Target one enemy within **30 feet** that can hear and understand you. The target must make a **Will save (DC = 8 + PRE + proficiency)**. On failure, choose one effect: **Redirect Aggression** — on the target's next turn, if the target makes an attack, it must target a creature you designate (must be a creature the target can see and reach); if the target does not attack on its next turn, the effect ends with no additional consequence. **Break Formation** — the target must spend its first action on its next turn moving its full speed in a direction you choose; this movement provokes opportunity attacks. **Sow Doubt** — the target cannot take reactions until the start of its next turn and has disadvantage on its next attack roll. On success, the target is immune to your Incite for 1 minute. Uses per short rest equal to your PRE modifier (minimum 1). Does not work on creatures immune to Charmed or with Intelligence below 4. **Rabble Rouser (Out of Combat):** Outside initiative, target a crowd of up to **10 NPCs within 60 feet**. PRE check (DC 15). On success, shift the group's dominant emotion (anger, fear, adoration, suspicion) for **10 minutes**. No per-rest limit for social use.

**Level 8 Features:**
- **Cult of Personality:** Over the course of a long rest spent in a settlement, you can convert up to your PRE modifier NPCs into devoted followers. They will follow reasonable orders, fight for you at 50% of their normal effectiveness, and provide intelligence, shelter, and minor resources. Maintaining more than 5 active followers requires you to have a settlement base.
- **Psychic Fracture** (1 Action, 1/Short Rest): Target one creature within **30 feet** that you can see and that can hear you. Will save (DC = 8 + PRE + proficiency). On failure, the target becomes **Frightened** of you for **1 minute** (repeat save at end of each turn). While Frightened from this ability: whenever the Frightened creature **sees an ally drop to 0 HP**, it must immediately make another Will save or become **Paralyzed** until the end of its next turn. Other enemies within **15 feet** of the Frightened creature that can see it suffer **-1 to their Will saves** for the duration (fear is contagious). On failure by 5+, the target is also **Paralyzed** for 1 round before the Frightened condition takes effect.

**Level 10 Capstone:**
- **Mass Hysteria:** Once per long rest, as 1 action, you unleash a wave of psychological manipulation. All enemies within 60 ft who can hear you must make a Will save (DC 18). On a failure, they become confused for 1 minute (concentration required). At the start of each confused creature's turn, roll 1d4: 1 = attack nearest creature (ally or enemy), 2 = do nothing and babble incoherently, 3 = flee using full movement, 4 = act normally for that turn only.

**New Skill Tree:** Influence (crowd manipulation, fear tactics, fanaticism, propaganda, psychological warfare, memetic control)

### Influence (Mass Psychology, Fear Escalation, and Cult Command)

Available only to Demagogues (L6+ specialization). Deepens the Dread Presence and Incite mechanics, adds fear escalation tools, and unlocks crowd-scale and long-term psychological effects. A Demagogue who invests here becomes capable of reshaping the psychological landscape of an entire settlement — or shattering enemy cohesion in a single round.

**Tier 1 Abilities (5 CP each):**

- **Dread Sermon:** Once per short rest, as 1 action, you deliver a fear-amplifying command, testimony, or declaration. Every enemy within **30 feet who is already shaken or frightened** must make a **Will save at disadvantage** (DC = 8 + PRE + proficiency). On failure, their fear condition **escalates one step**: shaken → frightened, frightened → paralyzed for 1 round. Creatures immune to fear are unaffected. *You don't create fear. You give the fear they already carry permission to take over.*

- **The Whisper Network:** Passive. Your influence spreads even when you're not working it. Once per session, **an NPC already within your sphere of influence** (a cult follower, a cowed neutral, someone you've previously frightened or convinced) delivers a piece of relevant intelligence to you — unsolicited, as a consequence of your presence in their world. The GM determines what they know and how it reaches you.

- **Manufactured Loyalty:** Passive. Your Cult of Personality followers (L8 feature) are harder to turn against you. Enemies cannot use social abilities, Persuasion checks, or mind-affecting effects to redirect your followers' loyalty without first winning a contested PRE check against you (your PRE vs. their PRE, even if you're not present — your influence lingers). You are notified (via a follower who resists and reports) when someone attempts to subvert your cult.

**Tier 2 Abilities (10 CP each, requires one Tier 1):**

- **Break Them:** Once per short rest, when an enemy **fails their Will save against your Dread Presence** (the save at thresholds 2 and 3+) and becomes shaken or frightened, you can use your **reaction** to immediately force them to use their **reaction** to move away from you at full speed. The enemy spends their reaction on this movement — it provokes opportunity attacks from your allies as normal. *The moment their resolve breaks is the moment you press.*

- **Manufactured Consensus:** When you use **Incite → Redirect Aggression** or **Break Formation**, you can affect **up to 3 targets simultaneously** (each makes its own Will save). Each affected target's action is redirected independently. Usable once per short rest (this replaces, not adds to, a single Incite use). *One voice, many minds breaking in the same direction.*

**Tier 3 Abilities (15 CP each, requires Level 5+ and one Tier 2):**

- **The Sermon Spreads:** Once per long rest, when you use **Mass Hysteria** and a creature fails their Will save by **5 or more**, they don't just become confused for the encounter — they become **long-term deranged** for a number of days equal to your PRE modifier. During this time, they suffer the **confused condition** at the start of each combat they enter (roll 1d4 at the start of their first turn each fight: 1 = attack nearest, 2 = do nothing, 3 = flee, 4 = act normally). A Medic spending 1 hour with the deranged creature and succeeding on a DC 16 Medicine check can end the condition early. *Some sermons can't be unheard.*

- **Icon of Fear:** Passive. Enemies who have been **frightened by you in a previous encounter** (earlier in the same campaign) have **disadvantage on their initial Will save** against all your Demagogue abilities for the remainder of the campaign. This effect persists across sessions. Creatures that have been frightened by you, escaped, and returned are not immune — they remember, and memory makes them weaker. *You don't have to be in the room. The idea of you is enough.*

---

## Level 16: Absolute Authority (Build Capstone)

Your presence commands absolute respect and fear. Your Commanding Presence die increases to 1d8 and can affect up to 3 allies simultaneously (instead of 1). When you use your Inspire ability, affected allies gain temporary HP equal to your level + (PRE modifier x 2). Enemies you have successfully frightened suffer -3 to saving throws against all your abilities.

## Level 17: Specialization Final Evolution

### Commander — Master Tactician

You can affect up to 6 allies with Commanding Presence (instead of 3). Allies affected by your abilities gain +3 to initiative. Once per short rest, you can issue a Command Word: all allies within 60 ft immediately gain one free action to move or attack. Your presence inspires such loyalty that charmed or dominated allies have advantage on saves to break free.

### Negotiator — Silver Tongue

You have advantage on all Persuasion and Deception checks. Creatures you successfully negotiate with remain friendly for 24 hours (instead of 1 hour). You can attempt to negotiate with hostile creatures mid-combat as a **free action**. You can sense when someone is lying to you (automatic Insight check, using your passive score).

### Demagogue — Iron Grip

Allies you affect with your Inspire ability gain **advantage on Will saves against fear effects** for 10 minutes (your dominating presence makes them psychologically untouchable — an irony not lost on anyone who has spent time under a Demagogue's sway). Your Commanding Presence die increases to +1d10 (instead of +1d8). Allies under your influence cannot be frightened or charmed by other sources — your psychological hold overrides all others. Your aura of domination extends to 30 ft — all allies within this radius have advantage on saves against fear and mind-affecting effects. Once per long rest, you can deliver a Galvanizing Address: all allies within 60 ft gain 20 temporary HP and advantage on all rolls for 1 minute.

## Level 20: Mandate of the People (Apex Ability)

**Once per long rest (1 week)**

You speak with such authority and conviction that reality itself seems to bend to your will. This is the power of absolute social dominance—the weight of consensus made manifest.

**Effects:**
- You speak a command or declaration (no action required—can be done at any time)
- All creatures within 120 ft that can hear and understand you must make a Will save (DC 20)
- **On a failure:** The creature regards you as an absolute authority figure for 1 hour and will follow non-suicidal orders
- Affected creatures rationalize your authority based on their worldview (military see you as a general, criminals see you as a boss, civilians see you as a leader)
- If you order an affected creature to do something fundamentally against their nature or beliefs, they immediately get a new saving throw with advantage
- Creatures immune to charm effects have advantage on the initial save but are not immune

**Important Notes:**
- When the effect ends, creatures remember everything but rationalize their compliance ("I was convinced it was the right thing to do" / "It seemed reasonable at the time")
- This is not mind control—it's overwhelming social authority and persuasion taken to supernatural extremes
- Creatures with Intellect (INT) 3 or lower are immune

**Drawback:** After using Mandate, you cannot use any Diplomat features for 1 hour—your voice is hoarse and your presence exhausted.
