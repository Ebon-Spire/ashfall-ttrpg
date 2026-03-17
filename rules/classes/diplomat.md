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
starting_ap: 15
role: Buffer/Social
magic_type: "None (12 AP/cantrip)"
level_1_features: [Silver Tongue, Commanding Presence, Duck and Cover]
skill_trees:
  - name: Leadership
    focus: Command
    abilities:
      - {name: Tactical Insight, ap_cost: 5, tier: 1, effect: "Grant ally +2 to next attack"}
      - {name: Master Tactician, ap_cost: 10, tier: 2, effect: "Allies +1 DV near you"}
      - {name: Battlefield Commander, ap_cost: 15, tier: 3, effect: "Grant ally extra action 1/SR"}
  - name: Negotiation
    focus: Social
    abilities:
      - {name: Silver-Tongued Devil, ap_cost: 5, tier: 1, effect: "Advantage on Persuasion 1/SR"}
      - {name: Master Negotiator, ap_cost: 10, tier: 2, effect: "Reroll failed social check 1/SR"}
      - {name: Political Mastermind, ap_cost: 15, tier: 3, effect: "Faction reputation boost"}
  - name: Manipulation
    focus: Control
    abilities:
      - {name: Menacing Presence, ap_cost: 5, tier: 1, effect: "Frighten enemies in 10ft"}
      - {name: Terrifying Visage, ap_cost: 10, tier: 2, effect: "Paralyze with fear 1/SR"}
      - {name: Dominating Presence, ap_cost: 15, tier: 3, effect: "Command action from enemy"}
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
      - {name: Supreme Commander, level: 10, action: "1 Action", description: "1/Long Rest. 1 minute. Start of each turn, allies within 60 ft choose: extra action, +3 DV, or advantage on all attacks until next turn."}
  - name: Negotiator
    role: Social/Diplomatic
    features:
      - {name: Broker, level: 6, action: Downtime, description: "Generate 50% more income. Party gains +1 Tier Token per downtime period."}
      - {name: Silver-Tongued Devil, level: 6, action: "1 Action", description: "1/Short Rest. Persuasion vs Will save to make non-hostile creature do a favor, share info, or become friendlier for 1 hour."}
      - {name: Ceasefire, level: 8, action: "1 Action", description: "1/Short Rest. 60 ft. Will save DC 8+PRE+prof or unable to attack for 1 round. Can still move and defend. Ends if ally attacks."}
      - {name: Network, level: 8, action: Downtime, description: "PRE check DC 12 to find a contact who owes a favor in any major settlement or faction."}
      - {name: Treaty, level: 10, action: "10 min negotiation", description: "1/Long Rest. Compel 2 willing parties to honor agreement for 30 days. Violation: 5d10 psychic + disadvantage on PRE checks 30 days."}
  - name: Demagogue
    role: Fear/Manipulation
    features:
      - {name: Incite, level: 6, action: "1 Action", description: "60 ft, up to 10 NPCs. PRE check DC 15. Shift group emotion (anger, fear, adoration) for 10 minutes."}
      - {name: Dread Presence, level: 6, action: Passive, description: "30 ft aura. Enemies within take -1 to all attack rolls and saves vs fear."}
      - {name: Cult of Personality, level: 8, action: "Long Rest Downtime", description: "Convert up to PRE mod NPCs as followers. Follow reasonable orders, fight at 50% effectiveness, provide intel/shelter/resources."}
      - {name: Terrify, level: 8, action: "1 Action", description: "1/Short Rest. 30 ft. Will save DC 8+PRE+prof. Fail: frightened 1 minute. Fail by 5+: paralyzed 1 round first."}
      - {name: Mass Hysteria, level: 10, action: "1 Action", description: "1/Long Rest. 60 ft. Will DC 18. Fail: confused 1 minute (concentration). Each turn d4: 1=attack nearest, 2=do nothing, 3=flee, 4=act normally."}
specializations: [Commander, Negotiator, Demagogue]
starting_equipment:
  - Sidearm
  - Light armor
  - "Diplomat's kit and notebook"
  - 50 bonus credits
---
# Diplomat

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
| **Starting AP** | 15 |

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

**Tier 1 Abilities (5 AP each):**
- **Tactical Insight:** Once per short rest, use 1 action to analyze the battlefield. You and allies within 30 ft gain +2 to initiative for the rest of the encounter (you've identified enemy patterns).
- **Coordinate Strike:** 1/round, when you use Commanding Presence to boost an ally's attack and they hit, one other ally within 10 ft of the target can immediately make an opportunity attack against that target (you coordinate focused fire).
- **Defensive Formation:** 1 action, all allies within 30 ft gain +1 DV until the start of your next turn (you're directing defensive positioning).

**Tier 2 Abilities (10 AP each, requires one Tier 1):**
- **Master Tactician:** You can use Commanding Presence on up to 2 allies simultaneously (both get +1d4 to their next roll).
- **Press the Advantage:** When an ally within 30 ft scores a critical hit or drops an enemy to 0 HP, you can use your reaction to grant all allies within 30 ft +1d6 damage on their next attack (morale surges).
- **Retreat Order:** 1 action, 1/short rest—all allies within 60 ft can immediately move up to their speed as a reaction without provoking opportunity attacks (tactical withdrawal).

**Tier 3 Abilities (15 AP each, requires Level 5+ and one Tier 2):**
- **Battlefield Commander:** Your Commanding Presence range increases to 60 ft, and you can use it twice per round (two allies get +1d4 each turn).
- **Heroic Sacrifice Prevention:** 1/long rest, when an ally within 30 ft would drop to 0 HP, you can shout a warning as a reaction—they drop to 1 HP instead and can immediately move 10 ft without provoking opportunity attacks (you saved their life with a warning).

### Negotiation (Diplomacy & Trade)

Master the art of deals, faction reputation, and information gathering.

**Tier 1 Abilities (5 AP each):**
- **Silver-Tongued Devil:** You have advantage on Persuasion and Deception checks when negotiating prices, deals, or contracts. You can typically reduce prices by 10-20% or improve deal terms.
- **Faction Contact:** Choose one major faction. You have an established contact within that faction who owes you a favor or provides information. You can call on this contact once per session (GM determines limits).
- **Information Broker:** During downtime in a settlement, you can gather rumors and intelligence. Make a DC 12 PRE check—on success, learn one useful piece of information about local politics, threats, or opportunities.

**Tier 2 Abilities (10 AP each, requires one Tier 1):**
- **Master Negotiator:** You can negotiate deals that benefit both parties (or appear to). Once per session, broker a major deal (GM approval): arrange a trade, form an alliance, or convince a neutral party to aid you.
- **Reputation Builder:** You gain +2 to all Persuasion and Intimidation checks when dealing with members of factions where you have positive reputation. Your reputation spreads—people have heard of you.
- **Debt Collector:** You can call in favors or debts. Once per long rest, declare that an NPC owes you a favor (GM must approve the NPC and nature of the favor). They must help you in a reasonable way or provide information/resources.

**Tier 3 Abilities (15 AP each, requires Level 5+ and one Tier 2):**
- **Political Mastermind:** You can manipulate faction politics. Once per story arc (GM's discretion), engineer a major political event: shift faction alliances, arrange an assassination, spark a coup, or broker peace. This requires weeks of downtime and successful skill checks, but you can reshape the political landscape.
- **Legendary Envoy:** Your reputation precedes you. You gain advantage on all Persuasion checks with NPCs who have heard of your exploits. You can request audience with faction leaders or important NPCs without normal gatekeeping.

### Manipulation (Intimidation & Control)

Use fear, deception, and psychological warfare to control others.

**Tier 1 Abilities (5 AP each):**
- **Menacing Presence:** You have advantage on Intimidation checks. When you successfully intimidate a creature, they're frightened of you for 1 minute (DC 12 Will save to resist).
- **Subtle Manipulation:** You can plant suggestions in conversations. After talking with someone for at least 5 minutes, make a DC 14 Deception check—on success, they believe a small lie or are inclined to follow a minor suggestion (GM determines limits—can't make them harm themselves).
- **Crowd Agitator:** You can incite or calm crowds. Spend 1 action to make a DC 13 PRE check—on success, shift the mood of a crowd (calm them, anger them, direct their attention, etc.). Works on groups of 10+ NPCs.

**Tier 2 Abilities (10 AP each, requires one Tier 1):**
- **Terrifying Visage:** 1/short rest, you can frighten one creature within 30 ft that can see and hear you. They make a DC 15 Will save or are frightened for 1 minute. While frightened, they have disadvantage on attacks and can't willingly move closer to you.
- **Master Manipulator:** You can convince people of unlikely lies with a DC 16 Deception check. You can impersonate authority figures (guard captain, faction official, etc.) with a convincing story and forged credentials.
- **Psychological Warfare:** Before combat (if you have time to talk), you can demoralize enemies. Make a DC 14 Intimidation check—on success, all enemies within 30 ft who can hear you have disadvantage on their first attack roll.

**Tier 3 Abilities (15 AP each, requires Level 5+ and one Tier 2):**
- **Dominating Presence:** 1/long rest, you can attempt to dominate one humanoid's will. Spend 1 minute talking with them, then make a **contested check: your 1d20 + PRE modifier vs. their 1d20 + WIS modifier** (see Contested Checks in Combat rules). On success, they view you favorably and will follow reasonable requests for the next 24 hours (can't make them harm themselves or loved ones). This is powerful but subtle—they think it's their own decision.
- **Panic the Masses:** 1/long rest, use 1 action to create panic in a crowd of enemies. All enemies within 60 ft who can see and hear you make a DC 17 Will save or are frightened for 1 minute and must use their turn to move away from you. Useful for scattering mobs or breaking sieges.

## Magic: None (Purchase via AP)

Diplomats have **no innate magic**, but they can purchase cantrips using AP:
- **12 AP per cantrip** (cheaper than most non-casters—represents force of personality manifesting as minor magical effects)
- Common choices: *Friends* (temporary boost to Persuasion), *Message* (silent communication), *Prestidigitation* (minor illusions for showmanship), *Minor Illusion* (create distractions)

**No spell slots.** If they want leveled spells, they must multiclass or acquire magical items.

## Sample AP Expenditures

Here's how a typical Diplomat might spend AP from Level 1-5:

**Level 1 (15 AP total):**
- Tactical Insight (Leadership Tier 1): 5 AP
- *Remaining: 10 AP*

**Level 2 (25 AP total):**
- Silver-Tongued Devil (Negotiation Tier 1): 5 AP
- Menacing Presence (Manipulation Tier 1): 5 AP
- *Remaining: 10 AP*

**Level 3 (35 AP total):**
- Master Tactician (Leadership Tier 2): 10 AP
- Faction Contact (Negotiation Tier 1): 5 AP
- *Remaining: 5 AP*

**Level 4 (45 AP total):**
- Master Negotiator (Negotiation Tier 2): 10 AP
- *Remaining: 5 AP*

**Level 5 (55 AP total):**
- Battlefield Commander (Leadership Tier 3): 15 AP
- *Remaining: 0 AP*

---

## Advanced Specializations (Levels 6-10)

At level 6, the Diplomat selects one of three Advanced Specializations. These specializations unlock new skill tree branches, powerful abilities, and define the Diplomat's role in the wasteland's ongoing struggle.

### Commander (Military Leadership)

**Flavor:** They don't just talk — they command. Armies follow them into hell and back. Squads fight harder under their orders, and even defeat becomes victory through their tactical genius.

**Prerequisites:** Diplomat archetype, level 6

**Level 6 Features:**
- **Battle Orders:** As 1 action, you can give an order to up to 3 allies within 60 ft who can hear you. Choose one effect: all targets gain +2 DV until the start of your next turn, all targets can move 15 ft as a reaction immediately, or all targets gain +1d4 to damage on their next attack.
- **Tactical Assessment:** As 1 action, you can assess an enemy group or battlefield situation to learn one tactical detail: their approximate numbers, general power level, planned strategy, or escape routes. The DM provides accurate, useful tactical intelligence.

**Level 8 Features:**
- **Hold the Line:** As a reaction when an ally within 30 ft would be reduced to 0 HP, that ally instead drops to 1 HP. You can use this ability a number of times per long rest equal to your PRE modifier (minimum 1).
- **War Cry:** As 1 action, you issue a fearsome command. All enemies within 30 ft who can hear you must make a Will save (DC = 8 + PRE + proficiency) or become frightened of you for 1 round. All allies within range gain +2 to attack rolls for 1 round.

**Level 10 Capstone:**
- **Supreme Commander:** Once per long rest, for 1 minute, you enter a state of perfect battlefield control. At the start of each of your turns, all allies within 60 ft gain one of the following benefits of your choice: an extra action on their turn, +3 DV until your next turn, or advantage on all attack rolls until your next turn. You can choose a different benefit each round.

**New Skill Tree:** Warfare (advanced military tactics, army-scale combat, siege warfare, logistics, formations and maneuvers)

---

### Negotiator (Peace/Trade/Resources)

**Flavor:** Bullets are expensive. Words are free. Negotiators build empires from handshakes and contracts. They turn enemies into allies, conflicts into opportunities, and scarcity into abundance through the power of the deal.

**Prerequisites:** Diplomat archetype, level 6

**Level 6 Features:**
- **Broker:** During downtime periods, your trade and negotiation activities generate 50% more income than normal. Additionally, your party gains +1 Tier Token per downtime period due to your trading network and connections.
- **Silver-Tongued Devil:** Once per short rest, as 1 action, you can attempt to convince a non-hostile creature to do a reasonable favor, share valuable information, or change their attitude one step friendlier. Make a Persuasion check contested by their Will save. The effect lasts 1 hour or until you betray their trust.

**Level 8 Features:**
- **Ceasefire:** As 1 action, you call for a halt to hostilities. All combatants within 60 ft who can hear you must make a Will save (DC = 8 + PRE + proficiency) or become unable to make attacks for 1 round. They can still move, dodge, and defend. The effect immediately ends if any ally attacks. Usable once per short rest.
- **Network:** You have cultivated contacts in every major settlement and faction. When you arrive somewhere new, you can make a PRE check (DC 12) to determine if you have a contact there who owes you a favor. The DM determines the contact's position and capabilities.

**Level 10 Capstone:**
- **Treaty:** Once per long rest, you can spend 10 minutes negotiating a binding agreement between two parties. Both parties become magically compelled to honor the terms of the agreement for 30 days. If either party knowingly violates the treaty, they immediately suffer 5d10 psychic damage and are cursed with disadvantage on all PRE checks for 30 days. Both parties must willingly agree to the treaty for it to take effect.

**New Skill Tree:** Diplomacy (advanced trade, faction relations, treaty-making, information networks, resource acquisition, economic warfare)

---

### Demagogue (Manipulation/Fear/Crowds)

**Flavor:** Fear. Devotion. Hysteria. Demagogues don't lead through respect — they control through manipulation. Cults form in their wake, mobs bend to their will, and rational minds crumble under their influence.

**Prerequisites:** Diplomat archetype, level 6

**Level 6 Features:**
- **Incite:** As 1 action, you can target a crowd or group of up to 10 NPCs within 60 ft. Make a PRE check (DC 15). On success, you incite them to a specific emotional state toward a target you designate: anger (they become hostile), fear (they flee or cower), or adoration (they become friendly and protective). The effect lasts 10 minutes unless something dramatically contradicts the emotion.
- **Dread Presence:** Enemies within 30 ft of you that can see you suffer -1 to all attack rolls and saving throws against fear effects. Your very presence is unsettling and oppressive.

**Level 8 Features:**
- **Cult of Personality:** Over the course of a long rest spent in a settlement, you can convert up to your PRE modifier NPCs into devoted followers. They will follow reasonable orders, fight for you at 50% of their normal effectiveness, and provide intelligence, shelter, and minor resources. Maintaining more than 5 active followers requires you to have a settlement base.
- **Terrify:** As 1 action, target one creature within 30 ft. They must make a Will save (DC = 8 + PRE + proficiency) or become frightened of you for 1 minute. If they fail the save by 5 or more, they are also paralyzed for 1 round before the frightened condition takes effect. Usable once per short rest.

**Level 10 Capstone:**
- **Mass Hysteria:** Once per long rest, as 1 action, you unleash a wave of psychological manipulation. All enemies within 60 ft who can hear you must make a Will save (DC 18). On a failure, they become confused for 1 minute (concentration required). At the start of each confused creature's turn, roll 1d4: 1 = attack nearest creature (ally or enemy), 2 = do nothing and babble incoherently, 3 = flee using full movement, 4 = act normally for that turn only.

**New Skill Tree:** Influence (crowd manipulation, fear tactics, fanaticism, propaganda, psychological warfare, memetic control)

---

## Level 16: Absolute Authority (Archetype Ultimate)

Your presence commands absolute respect and fear. Your Commanding Presence die increases to 1d8 and can affect up to 3 allies simultaneously (instead of 1). When you use your Inspire ability, affected allies gain temporary HP equal to your level + (PRE modifier x 2). Enemies you have successfully frightened suffer -3 to saving throws against all your abilities.

## Level 17: Specialization Final Evolution

### Commander — Master Tactician

You can affect up to 6 allies with Commanding Presence (instead of 3). Allies affected by your abilities gain +3 to initiative. Once per short rest, you can issue a Command Word: all allies within 60 ft immediately gain one free action to move or attack. Your presence inspires such loyalty that charmed or dominated allies have advantage on saves to break free.

### Negotiator — Silver Tongue

You have advantage on all Persuasion and Deception checks. Creatures you successfully negotiate with remain friendly for 24 hours (instead of 1 hour). You can attempt to negotiate with hostile creatures mid-combat as 1 action (bonus). You can sense when someone is lying to you (automatic Insight check, using your passive score).

### Demagogue — Iron Grip

Your Inspire ability now grants temporary HP equal to twice your PRE modifier + your level (instead of PRE modifier + level). Your Commanding Presence die increases to +1d8 (instead of +1d4). Allies under your influence cannot be frightened or charmed by other sources — your psychological hold overrides all others. Your aura of domination extends to 30 ft — all allies within this radius have advantage on saves against fear and mind-affecting effects. Once per long rest, you can deliver a Galvanizing Address: all allies within 60 ft gain 20 temporary HP and advantage on all rolls for 1 minute.

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

**Drawback:** After using Mandate, you cannot use any Diplomat class features for 1 hour—your voice is hoarse and your presence exhausted.
