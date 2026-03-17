---
game_data: true
doctrines:
  Warrior:
    level_1:
      - {name: "Brute Force", effect: "+1 melee damage. -1 DV."}
      - {name: "Shield Bearer", effect: "+1 DV when wielding a shield."}
      - {name: "Berserker's Fury", effect: "When bloodied, +2 to melee attack rolls."}
      - {name: "Precision Strikes", effect: "Melee weapons crit on 19-20."}
    level_6:
      - {name: "Juggernaut", effect: "Resistance to one damage type (chosen at dawn)."}
      - {name: "Sentinel", effect: "Your opportunity attacks reduce target speed to 0."}
      - {name: "Gladiator", effect: "Advantage on melee attacks against targets you've already hit this turn."}
  Gunslinger:
    level_1:
      - {name: "Deadeye", effect: "+1 ranged damage at 30+ ft."}
      - {name: "Duelist", effect: "+1 to attack when wielding one-handed ranged weapon and nothing in other hand."}
      - {name: "Quickdraw", effect: "+2 to Initiative. Draw weapons as free action."}
      - {name: "Suppressing Fire", effect: "When you hit a creature with a ranged attack, it has -1 to its next attack roll."}
    level_6:
      - {name: "Sniper", effect: "Ignore partial and heavy cover with ranged attacks."}
      - {name: "Gun Runner", effect: "No disadvantage on ranged attacks within 5 ft."}
      - {name: "Demolisher", effect: "+2 damage against objects and constructs."}
  Mystic:
    level_1:
      - {name: "Evoker", effect: "+1 damage per die on evocation (damage) spells."}
      - {name: "Abjurer", effect: "+1 to DV while Arcane Ward has temp HP."}
      - {name: "Diviner", effect: "Once per short rest, replace one d20 roll with a 15."}
      - {name: "Transmuter", effect: "When you cast a spell that affects an area, you can exclude one creature from the effect."}
    level_6:
      - {name: "War Mage", effect: "+2 to spell attack rolls against targets within 5 ft (no melee disadvantage)."}
      - {name: "Spell Sculptor", effect: "Area spells can be reshaped to avoid 2 allies."}
      - {name: "Arcane Battery", effect: "Recover 1 spell slot (max 2nd level) when you roll Initiative."}
  Technician:
    level_1:
      - {name: "Drone Pilot", effect: "Drone gains +1 to attack rolls."}
      - {name: "Tinkerer", effect: "Gadgets have +1 to save DCs."}
      - {name: "Cyberpath", effect: "+2 to all hacking checks."}
      - {name: "Field Engineer", effect: "Build gadgets in half the normal time."}
    level_6:
      - {name: "Swarm Commander", effect: "You can control 2 small drones instead of 1 medium drone (split HP)."}
      - {name: "Hardened Systems", effect: "Drone gains resistance to one damage type (chosen when deployed)."}
      - {name: "Neural Sync", effect: "When your drone hits, your next attack against the same target has advantage."}
  Medic:
    level_1:
      - {name: "Combat Surgeon", effect: "Healing abilities can be used from 10 ft (instead of touch)."}
      - {name: "Preventive Specialist", effect: "Temp HP you grant lasts until next short rest (instead of 1 hour)."}
      - {name: "Pharmacist", effect: "Consumables you craft have +1 to their save DCs."}
      - {name: "Forensic Analyst", effect: "Advantage on Medicine and Investigation checks on creatures and corpses."}
    level_6:
      - {name: "Trauma Specialist", effect: "When you heal a creature below half HP, heal an additional 1d6."}
      - {name: "Plague Doctor", effect: "Your poisons ignore poison resistance."}
      - {name: "Emergency Response", effect: "When an ally drops to 0 HP within 30 ft, you can move up to your speed toward them as a free action (once per round)."}
  Operative:
    level_1:
      - {name: "Assassin's Mark", effect: "+1 Sneak Attack damage die against targets that haven't acted this combat."}
      - {name: "Shadow Walker", effect: "Advantage on Stealth in dim light or darkness."}
      - {name: "Face", effect: "Advantage on Deception. You can use Deception in place of Persuasion."}
      - {name: "Saboteur", effect: "+2 damage against objects, traps, and constructs."}
    level_6:
      - {name: "Ghost Protocol", effect: "You leave no traces (footprints, fingerprints, scent) unless you choose to."}
      - {name: "Close Quarters", effect: "Sneak Attack works with melee weapons even without advantage (if no other enemy is within 5 ft of you)."}
      - {name: "Spotter", effect: "Allies have advantage on attack rolls against targets you have identified as marked (free action, 1/round)."}
  Diplomat:
    level_1:
      - {name: "Inspiring Leader", effect: "Commanding Presence also grants +1 to damage rolls."}
      - {name: "Peacekeeper", effect: "Advantage on Persuasion to de-escalate hostile situations."}
      - {name: "Demagogue", effect: "Advantage on Intimidation. You can use Intimidation in place of Persuasion."}
      - {name: "Tactician", effect: "+1 to Initiative for you and allies within 30 ft who can hear you."}
    level_6:
      - {name: "Warlord", effect: "When you use Inspire, allies also gain +5 ft speed until next rest."}
      - {name: "Silver Tongue Master", effect: "Silver Tongue now also grants advantage on Insight for the first interaction."}
      - {name: "Courtier", effect: "You can read social hierarchies instantly. Advantage on checks to identify who holds power in a group."}
  Channeler:
    level_1:
      - {name: "Holy Warrior", effect: "+1 melee damage when you have temp HP from Channel Energy or other class features."}
      - {name: "Healer's Light", effect: "Channel Energy heals +1 per die."}
      - {name: "Spirit Touched", effect: "Advantage on Perception and Insight checks to detect undead, spirits, and extraplanar entities."}
      - {name: "Resilient Faith", effect: "+1 to concentration saves."}
    level_6:
      - {name: "Crusader", effect: "When you hit with a melee attack, the target has -1 to its next save against your spells."}
      - {name: "Protector", effect: "When you heal an ally, they gain +1 DV until the start of your next turn."}
      - {name: "Zealot", effect: "When you reduce a creature to 0 HP, regain 1 use of Channel Energy."}
mastery_paths:
  - {name: "Wasteland Knight", stats: "MIG 15, END 14", narrative: "Swore a binding oath to protect a person, settlement, or ideal", features_11: ["Oath Bond", "Armored Caster"], features_13: ["Aegis", "Consecrated Weapon"], capstone_15: "Bastion"}
  - {name: "Ghost", stats: "AGI 16", narrative: "Completed an infiltration mission deemed impossible", features_11: ["Phase Shift", "Silent Kill"], features_13: ["Impossible to Track", "Ghostly Strikes"], capstone_15: "Perfect Invisibility"}
  - {name: "Arcanist", stats: "INT 16, WIS 14", narrative: "Created a new magical formula or technique", features_11: ["Metamagic", "Spell Resistance"], features_13: ["Arcane Wellspring"], capstone_15: "Magnum Opus"}
  - {name: "Cyberlord", stats: "INT 15, Humanity 6-", narrative: "Survived a near-fatal augmentation procedure", features_11: ["Machine Symbiosis", "Integrated Systems"], features_13: ["Overclock Protocol", "Neural Network"], capstone_15: "Technological Singularity"}
  - {name: "Warden", stats: "WIS 15, END 14", narrative: "Survived alone in the deep wasteland for 30+ days", features_11: ["Wasteland's Chosen", "Beast Bond"], features_13: ["Terrain Mastery", "Nature's Fury"], capstone_15: "Apex Predator"}
  - {name: "Sovereign", stats: "PRE 16", narrative: "Command the loyalty of a settlement with 50+ inhabitants", features_11: ["Seat of Power", "Royal Guard"], features_13: ["Edict", "Diplomatic Immunity"], capstone_15: "Manifest Authority"}
  - {name: "Deathdealer", stats: "AGI 15 or MIG 15", narrative: "Single-handedly killed a CR 10+ creature", features_11: ["Killing Machine", "Threat Assessment"], features_13: ["Flurry of Death", "Dread Reputation"], capstone_15: "Death's Harvest"}
  - {name: "Lifebringer", stats: "WIS 16", narrative: "Saved someone from certain death through healing", features_11: ["Healing Mastery", "Purity"], features_13: ["Restoration", "Life Link"], capstone_15: "Resurrection"}
  - {name: "Iron Sigil", stats: "INT 14, WIS 14", narrative: "Successfully merged magic and technology", features_11: ["Technomancy", "Magitech Interface"], features_13: ["Sigil Crafting", "Spell Engine"], capstone_15: "Convergence"}
  - {name: "Voidwalker", stats: "WIS 15, PRE 14", narrative: "Touched or survived contact with extraplanar phenomena", features_11: ["Rift Step", "Void Sight"], features_13: ["Dimensional Anchor", "Rift Shield"], capstone_15: "Banishment"}
  - {name: "Beastlord", stats: "END 15, WIS 14", narrative: "Saved the life of a powerful creature or earned pack respect", features_11: ["Alpha Bond", "Pack Tactics"], features_13: ["Beastform", "Empathic Link"], capstone_15: "Chimera Form"}
  - {name: "Arsenal", stats: "AGI 14, INT 14", narrative: "Won a significant combat tournament or formal duel", features_11: ["Weapon Chameleon", "Combat Analysis"], features_13: ["Adaptive Fighting Style", "Disarm Mastery"], capstone_15: "One-Man Army"}
multiclass_requirements:
  - {archetype: "Warrior", stat: "Might 13 or Endurance 13"}
  - {archetype: "Gunslinger", stat: "Agility 13"}
  - {archetype: "Mystic", stat: "Intellect 13"}
  - {archetype: "Technician", stat: "Intellect 13"}
  - {archetype: "Medic", stat: "Wisdom 13"}
  - {archetype: "Operative", stat: "Agility 13"}
  - {archetype: "Diplomat", stat: "Presence 13"}
  - {archetype: "Channeler", stat: "Wisdom 13"}
cross_training:
  ap_multiplier: 1.5
  tier_costs: [{tier: 1, normal: 5, cross: 8}, {tier: 2, normal: 10, cross: 15}, {tier: 3, normal: 15, cross: 23}]
  max_other_archetypes: 2
  lock_in_threshold: 2
---
# Character Progression
![A wasteland survivor transforms — one half shows battered scrap gear, the other gleaming advanced armor and power](/images/illustrations/character-progression.png)

This chapter defines what characters gain at each level, ensuring every level-up feels meaningful. No dead levels.

---

## Core Progression Table

Every character gains **10 AP** per level (15 AP at Level 1, 20 for Humans). In addition, each level grants specific features as shown below.

| Level | AP | Class/Phase Feature | Talent | ASI | Other | Total New Things |
|-------|-----|-------------------|--------|-----|-------|-----------------|
| 1 | 15 | Core class features (4-5) | — | — | Doctrine #1 | 5-6 |
| 2 | 10 | Class feature | **Talent** | — | — | 2 |
| 3 | 10 | Class feature | — | — | Free skill proficiency | 2 |
| 4 | 10 | Class feature | **Talent** | **ASI** | — | 3 |
| 5 | 10 | Capstone feature | — | — | — | 1 |
| 6 | 10 | Specialization (choose 1 of 3) | — | — | Doctrine #2 | 3-4 |
| 7 | 10 | — | **Talent** | — | **Skill Mastery** | 2 |
| 8 | 10 | Specialization feature | — | — | Free skill proficiency | 2 |
| 9 | 10 | — | **Talent** | **ASI** | — | 2 |
| 10 | 10 | Specialization capstone | — | — | — | 1 |
| 11 | 10 | Mastery Path (choose 1 of 12) | — | — | — | 2-3 |
| 12 | 10 | — | **Talent** | **ASI** | — | 2 |
| 13 | 10 | Mastery feature | — | — | — | 1 |
| 14 | 10 | — | **Talent** | — | — | 1 |
| 15 | 10 | Mastery capstone (1/LR) | — | — | Free skill proficiency | 2 |
| 16 | 10 | Archetype ultimate | — | — | — | 1 |
| 17 | 10 | Specialization final evolution | — | — | — | 1 |
| 18 | 10 | — | **Legendary Talent** | **ASI** | — | 2 |
| 19 | 10 | — | **Legendary Talent** | — | — | 1 |
| 20 | 10 | Apex ability (1/LR) | — | — | — | 1 |

**Decision Points by Level:** L1 (6), L2 (2), L3 (2), L4 (3), L5 (1), L6 (4), L7 (2), L8 (2), L9 (2), L10 (1), L11 (3), L12 (2), L13 (1), L14 (1), L15 (2), L16 (1), L17 (1), L18 (2), L19 (1), L20 (1).

**Previously dead levels that now have content:** L7 (Talent + Skill Mastery), L9 (Talent + ASI), L12 (Talent + ASI), L14 (Talent), L18 (Legendary Talent + ASI), L19 (Legendary Talent).

---

## Doctrines

Doctrines are named combat orientations chosen at Level 1 and Level 6. They provide a small passive bonus and — more importantly — a build identity label that communicates your combat style to other players.

### Doctrine Rules

- Choose one Doctrine at **Level 1** from your archetype's list.
- Choose a second Doctrine at **Level 6** from your archetype's advanced list.
- Doctrines are **passive and always active** (no action required).
- Bonuses from Doctrines are **circumstantial** — they apply in specific situations, not universally.
- During a long rest, you can swap one Doctrine for another from the same list.

### Warrior Doctrines

**Level 1 (choose one):**

| Doctrine | Effect |
|----------|--------|
| **Brute Force** | +1 melee damage. -1 DV. |
| **Shield Bearer** | +1 DV when wielding a shield. |
| **Berserker's Fury** | When bloodied, +2 to melee attack rolls. |
| **Precision Strikes** | Melee weapons crit on 19-20. |

**Level 6 (choose one):**

| Doctrine | Effect |
|----------|--------|
| **Juggernaut** | Resistance to one damage type (chosen at dawn). |
| **Sentinel** | Your opportunity attacks reduce target speed to 0. |
| **Gladiator** | Advantage on melee attacks against targets you've already hit this turn. |

### Gunslinger Doctrines

**Level 1 (choose one):**

| Doctrine | Effect |
|----------|--------|
| **Deadeye** | +1 ranged damage at 30+ ft. |
| **Duelist** | +1 to attack when wielding one-handed ranged weapon and nothing in other hand. |
| **Quickdraw** | +2 to Initiative. Draw weapons as free action. |
| **Suppressing Fire** | When you hit a creature with a ranged attack, it has -1 to its next attack roll. |

**Level 6 (choose one):**

| Doctrine | Effect |
|----------|--------|
| **Sniper** | Ignore partial and heavy cover with ranged attacks. |
| **Gun Runner** | No disadvantage on ranged attacks within 5 ft. |
| **Demolisher** | +2 damage against objects and constructs. |

### Mystic Doctrines

**Level 1 (choose one):**

| Doctrine | Effect |
|----------|--------|
| **Evoker** | +1 damage per die on evocation (damage) spells. |
| **Abjurer** | +1 to DV while Arcane Ward has temp HP. |
| **Diviner** | Once per short rest, replace one d20 roll with a 15. |
| **Transmuter** | When you cast a spell that affects an area, you can exclude one creature from the effect. |

**Level 6 (choose one):**

| Doctrine | Effect |
|----------|--------|
| **War Mage** | +2 to spell attack rolls against targets within 5 ft (no melee disadvantage). |
| **Spell Sculptor** | Area spells can be reshaped to avoid 2 allies. |
| **Arcane Battery** | Recover 1 spell slot (max 2nd level) when you roll Initiative. |

### Technician Doctrines

**Level 1 (choose one):**

| Doctrine | Effect |
|----------|--------|
| **Drone Pilot** | Drone gains +1 to attack rolls. |
| **Tinkerer** | Gadgets have +1 to save DCs. |
| **Cyberpath** | +2 to all hacking checks. |
| **Field Engineer** | Build gadgets in half the normal time. |

**Level 6 (choose one):**

| Doctrine | Effect |
|----------|--------|
| **Swarm Commander** | You can control 2 small drones instead of 1 medium drone (split HP). |
| **Hardened Systems** | Drone gains resistance to one damage type (chosen when deployed). |
| **Neural Sync** | When your drone hits, your next attack against the same target has advantage. |

### Medic Doctrines

**Level 1 (choose one):**

| Doctrine | Effect |
|----------|--------|
| **Combat Surgeon** | Healing abilities can be used from 10 ft (instead of touch). |
| **Preventive Specialist** | Temp HP you grant lasts until next short rest (instead of 1 hour). |
| **Pharmacist** | Consumables you craft have +1 to their save DCs. |
| **Forensic Analyst** | Advantage on Medicine and Investigation checks on creatures and corpses. |

**Level 6 (choose one):**

| Doctrine | Effect |
|----------|--------|
| **Trauma Specialist** | When you heal a creature below half HP, heal an additional 1d6. |
| **Plague Doctor** | Your poisons ignore poison resistance. |
| **Emergency Response** | When an ally drops to 0 HP within 30 ft, you can move up to your speed toward them as a free action (once per round). |

### Operative Doctrines

**Level 1 (choose one):**

| Doctrine | Effect |
|----------|--------|
| **Assassin's Mark** | +1 Sneak Attack damage die against targets that haven't acted this combat. |
| **Shadow Walker** | Advantage on Stealth in dim light or darkness. |
| **Face** | Advantage on Deception. You can use Deception in place of Persuasion. |
| **Saboteur** | +2 damage against objects, traps, and constructs. |

**Level 6 (choose one):**

| Doctrine | Effect |
|----------|--------|
| **Ghost Protocol** | You leave no traces (footprints, fingerprints, scent) unless you choose to. |
| **Close Quarters** | Sneak Attack works with melee weapons even without advantage (if no other enemy is within 5 ft of you). |
| **Spotter** | Allies have advantage on attack rolls against targets you have identified as "marked" (free action, 1/round). |

### Diplomat Doctrines

**Level 1 (choose one):**

| Doctrine | Effect |
|----------|--------|
| **Inspiring Leader** | Commanding Presence also grants +1 to damage rolls. |
| **Peacekeeper** | Advantage on Persuasion to de-escalate hostile situations. |
| **Demagogue** | Advantage on Intimidation. You can use Intimidation in place of Persuasion. |
| **Tactician** | +1 to Initiative for you and allies within 30 ft who can hear you. |

**Level 6 (choose one):**

| Doctrine | Effect |
|----------|--------|
| **Warlord** | When you use Inspire, allies also gain +5 ft speed until next rest. |
| **Silver Tongue Master** | Silver Tongue now also grants advantage on Insight for the first interaction. |
| **Courtier** | You can read social hierarchies instantly. Advantage on checks to identify who holds power in a group. |

### Channeler Doctrines

**Level 1 (choose one):**

| Doctrine | Effect |
|----------|--------|
| **Holy Warrior** | +1 melee damage when you have temp HP from Channel Energy or other class features. |
| **Healer's Light** | Channel Energy heals +1 per die. |
| **Spirit Touched** | Advantage on Perception and Insight checks to detect undead, spirits, and extraplanar entities. |
| **Resilient Faith** | +1 to concentration saves. |

**Level 6 (choose one):**

| Doctrine | Effect |
|----------|--------|
| **Crusader** | When you hit with a melee attack, the target has -1 to its next save against your spells. |
| **Protector** | When you heal an ally, they gain +1 DV until the start of your next turn. |
| **Zealot** | When you reduce a creature to 0 HP, regain 1 use of Channel Energy. |

---

## Skill Mastery (Level 7)

At Level 7, choose one skill you are proficient in. Your proficiency bonus is doubled for that skill (expertise). This represents years of focused practice culminating in true mastery.

**Rules:**
- Must be a skill you already have proficiency in.
- Operatives already have Expertise (2 skills). At Level 7, they gain a **third** Expertise skill.
- Skill Mastery does not stack with the Expertise Talent (choose different skills for each).
- During a long rest, you can change your Skill Mastery to a different proficient skill.

---

## Ability Score Improvements

Characters gain Ability Score Improvements at the following levels:

| Level | Source |
|-------|--------|
| 4 | Class feature (all classes) |
| 9 | Progression milestone |
| 12 | Progression milestone |
| 18 | Progression milestone |

**At each ASI:** Increase one attribute by +2, or two attributes by +1 each. Maximum 20.

**Interaction with Bounded Accuracy:** ASIs are capped at 20 per attribute. With 4 ASIs across 20 levels, a character can increase attributes by a total of +8 (or +4/+4 if split). This is intentionally conservative — the attribute cap at 20 preserves the +18 bonus ceiling.

---

## Proficiency Bonus

Proficiency bonus scales with total character level:

| Level | Proficiency Bonus |
|-------|------------------|
| 1-4 | +2 |
| 5-8 | +3 |
| 9-12 | +4 |
| 13-16 | +5 |
| 17-20 | +6 |

This does not change based on multiclassing — it always uses total character level.

---

## Advancement Points (AP)

### Earning AP

| Level | AP Gained | Cumulative AP |
|-------|-----------|--------------|
| 1 | 15 (20 for Humans) | 15 |
| 2 | 10 | 25 |
| 3 | 10 | 35 |
| 4 | 10 | 45 |
| 5 | 10 | 55 |
| 6 | 10 | 65 |
| 7 | 10 | 75 |
| 8 | 10 | 85 |
| 9 | 10 | 95 |
| 10 | 10 | 105 |
| 11 | 10 | 115 |
| 12 | 10 | 125 |
| 13 | 10 | 135 |
| 14 | 10 | 145 |
| 15 | 10 | 155 |
| 16 | 10 | 165 |
| 17 | 10 | 175 |
| 18 | 10 | 185 |
| 19 | 10 | 195 |
| 20 | 10 | 205 |

### Spending AP

| Option | Cost | Tier Requirement |
|--------|------|------------------|
| Own class Tier 1 ability | 5 AP | Any level |
| Own class Tier 2 ability | 10 AP | Tier 1 in same tree |
| Own class Tier 3 ability | 15 AP | Level 5+, Tier 2 in same tree |
| Cross-Training Tier 1 | 8 AP | 13+ in target class stat |
| Cross-Training Tier 2 | 15 AP | Level 5+, T1 in same tree |
| Cross-Training Tier 3 | 23 AP | Level 10+, T2 in same tree |
| Cantrip (non-caster) | 15 AP | — |
| Cantrip (Diplomat) | 12 AP | — |
| Cantrip (half-caster) | 10 AP | — |
| Attribute +1 | 10 AP | Max 20 |
| Multiclass first level | 20 AP | Even level, 13+ in both stats |

Unspent AP carries over between levels.

---

## Example Progression: Warrior (Brute Force / Vanguard / Wasteland Knight)

| Level | What Happens |
|-------|-------------|
| **1** | Gain Combat Stance, Second Wind, Bodyguard, Retaliation Strike, Grit. Choose **Brute Force** doctrine (+1 melee dmg, -1 DV). Spend 15 AP: Power Strike (5) + Armor Mastery (5) + save 5. |
| **2** | Gain Weapon Specialization (Heavy Melee). Choose **Talent: Tough** (+2 HP/level). Spend 10 AP: Rally Cry (5) + save 5. |
| **3** | Gain Extra Attack. Spend 10 AP: Shield Wall (10). |
| **4** | Gain Attribute Improvement (+2 MIG → 17). Choose **Talent: Weapon Bond** (Warrior, +1 attack with Heavy Melee). Spend 10 AP: save for Tier 3. |
| **5** | Gain Unyielding Resolve (capstone). Spend 10 AP + saved: Devastating Critical (15). |
| **6** | Choose specialization: **Vanguard**. Gain Shield Wall (reaction), Iron Skin. Choose **Sentinel** doctrine (OA stops movement). Spend 10 AP: Tactical Positioning (10). |
| **7** | Choose **Talent: Durable** (min healing = 2x END mod). Gain **Skill Mastery: Intimidation** (double proficiency). Spend 10 AP: save. |
| **8** | Gain Vanguard feature: Fortress Stance. Spend 10 AP: save. |
| **9** | Gain **ASI** (+2 END → 16). Choose **Talent: Sentinel** (universal, enhanced OA). Spend 10 AP: Commanding Presence (15, using saved AP). |
| **10** | Gain Vanguard capstone: Immovable Object. Spend 10 AP: save for cross-training. |
| **11** | Choose **Wasteland Knight** mastery path. Gain Oath Bond, Armored Caster. Spend 10 AP: cross-train Mage Armor (Mystic, 8 AP, needs INT 13). |
| **12** | Gain **ASI** (+1 MIG → 18, +1 WIS → 12). Choose **Talent: Unyielding Grit** (Warrior, advantage on FORT saves bloodied + death save). Spend 10 AP: cross-train Spell Lore (Mystic, 8 AP). *Mystic lock-in satisfied.* |
| **13** | Gain Wasteland Knight: Aegis, Consecrated Weapon. Spend 10 AP: save. |
| **14** | Choose **Talent: Riposte** (universal, counter on miss). Spend 10 AP: save for Tier 3. |
| **15** | Gain Wasteland Knight capstone: Bastion (30 ft protection zone, 1/LR). Spend 10 AP + saved: Immovable Object tree enhancement. |
| **16** | Gain Unstoppable Force (archetype ultimate). Spend 10 AP: flexibility. |
| **17** | Gain Vanguard Final Evolution. Spend 10 AP: flexibility. |
| **18** | Gain **ASI** (+2 MIG → 20). Choose **Legendary Talent: Legendary Resilience** (+30 HP max, regen). Spend 10 AP: final tree completion. |
| **19** | Choose **Legendary Talent: Avatar of War** (extra attack 1/combat when bloodied). Spend 10 AP: final purchases. |
| **20** | Gain Titan's Stand (apex, 1/LR). Spend 10 AP: finishing touches. |

**Result:** A MIG-20 Vanguard Warrior with Wasteland Knight mastery, Brute Force + Sentinel doctrines, 8 Talents (Tough, Weapon Bond, Durable, Sentinel, Unyielding Grit, Riposte, Legendary Resilience, Avatar of War), Skill Mastery in Intimidation, and cross-trained Mage Armor + Spell Lore from Mystic. Every single level delivered something named and meaningful — zero dead levels.

---

## Retraining

During a long rest (1 week of downtime), a character can make the following swaps:

| Can Retrain | Cannot Retrain |
|------------|----------------|
| One Doctrine (same tier) | Archetype choice |
| One non-Legendary Talent | Specialization choice |
| One Tier 1 AP ability (same class) | Mastery Path choice |
| One skill proficiency | Tier 2+ AP abilities |
| Skill Mastery skill choice | Legendary Talents |
| | ASI allocations |

**Narrative Requirement:** Brief justification for the change ("I've been training with a new weapon style" or "My time studying the ruins taught me different techniques").

**Cost:** 1 week of downtime (one long rest). No AP cost — you're swapping, not gaining.
