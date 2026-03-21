---
game_data: true
doctrines:
  Warrior:
    level_1:
      - {name: "Brute Force", effect: "+2 melee damage with two-handed weapons."}
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
      - {name: "Steady Hands", effect: "+1 to ranged damage rolls when you haven't voluntarily moved this turn."}
      - {name: "Suppressing Fire", effect: "When you hit a creature with a ranged attack, it has -1 to its next attack roll."}
    level_6:
      - {name: "Sniper", effect: "Ignore partial and heavy cover with ranged attacks."}
      - {name: "Gun Runner", effect: "No disadvantage on ranged attacks within 5 ft."}
      - {name: "Demolisher", effect: "+2 damage against objects, constructs, and vehicles. When you deal damage to an object or vehicle, deal 1 additional structural damage (ignores hardness)."}
  Mystic:
    level_1:
      - {name: "Evoker", effect: "+1 damage per die on evocation (damage) spells."}
      - {name: "Abjurer", effect: "+1 DV while you have temp HP from any source."}
      - {name: "Diviner", effect: "Once per short rest, replace one d20 roll with a 15."}
      - {name: "Transmuter", effect: "When you cast a spell that affects an area, you can exclude one creature from the effect."}
    level_6:
      - {name: "War Mage", effect: "+2 to spell attack rolls against targets within 5 ft (no melee disadvantage)."}
      - {name: "Spell Sculptor", effect: "Area spells can be reshaped to avoid 2 allies."}
      - {name: "Arcane Battery", effect: "First spell cast in combat generates 1 fewer Burnout Point (min 0 BP). If the spell has no Burnout cost, the next 1 BP you would gain this combat is negated."}
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
      - {name: "Wrecker", effect: "+2 damage against objects, traps, and constructs."}
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
      - {name: "Warlord", effect: "When you use Inspire, allies also gain +5 ft speed and +1 to their next damage roll until end of their next turn."}
      - {name: "Silver Tongue Master", effect: "Silver Tongue now also grants advantage on Insight for the first interaction."}
      - {name: "Courtier", effect: "You can read social hierarchies instantly. Advantage on checks to identify who holds power in a group."}
  Channeler:
    level_1:
      - {name: "Holy Warrior", effect: "+1 melee damage when you have temp HP from Channel Energy or other features."}
      - {name: "Healer's Light", effect: "Channel Energy heals +1 per die."}
      - {name: "Spirit Touched", effect: "Advantage on Perception and Insight checks to detect undead, spirits, and extraplanar entities."}
      - {name: "Resilient Faith", effect: "+1 to concentration saves."}
    level_6:
      - {name: "Crusader", effect: "When you hit with a melee attack, the target has -1 to its next save against your spells."}
      - {name: "Protector", effect: "When you heal an ally, they gain +1 DV until the start of your next turn."}
      - {name: "Zealot", effect: "When you reduce a creature to 0 HP, regain 1 use of Channel Energy."}
  Scavenger:
    level_1:
      - {name: "Hoarder", effect: "When you loot a container or corpse, find 1 additional Salvage unit (1/encounter)."}
      - {name: "Jury-Rigger", effect: "+1 to crafting checks. Jury-rigged items last twice as long before breaking."}
      - {name: "Scrapper", effect: "+1 melee damage with improvised weapons. Scrapyard Strike knocks target 5 ft on a hit."}
      - {name: "Packrat", effect: "+50% carrying capacity. You can retrieve a stowed item as a free action (1/round)."}
    level_6:
      - {name: "Resourceful", effect: "When you spend a Salvage Die and roll max, regain 1 Salvage Die (1/short rest)."}
      - {name: "Trap Maker", effect: "Scrap Traps you create have +2 to their save DCs and deal +1d6 damage."}
      - {name: "Field Medic", effect: "You can use Makeshift Solution to create a field splint: remove the Wounded condition from an adjacent ally (1/short rest)."}
  Infiltrator:
    level_1:
      - {name: "Handler", effect: "Contingency contacts provide +1 additional piece of intel or 1 additional minor item."}
      - {name: "Ghost", effect: "Advantage on Stealth checks during the first round of any encounter."}
      - {name: "Profiler", effect: "+2 to Insight checks against creatures you have Assessed. You learn their highest and lowest ability scores."}
      - {name: "Saboteur", effect: "+2 damage against objects, traps, and vehicles. Advantage on checks to disable devices."}
    level_6:
      - {name: "Spymaster", effect: "You can maintain Assess Target on 2 additional creatures (up to INT mod + 2 total)."}
      - {name: "Phantom", effect: "While hidden, your first attack each combat does not reveal your position (you remain hidden until end of turn)."}
      - {name: "Interrogator", effect: "When you succeed on an Insight or Intimidation check against an Assessed target, learn one additional fact (weakness, allegiance, or intention)."}
  Psion:
    level_1:
      - {name: "Empath", effect: "Advantage on Insight checks. You can sense strong emotions within 30 ft (no action required)."}
      - {name: "Kinetic", effect: "+1 damage per die on Telekinesis discipline abilities."}
      - {name: "Cerebral", effect: "+1 to save DCs of Telepathy discipline abilities."}
      - {name: "Disciplined", effect: "Centering reduces Focus by an additional 1. Once per short rest, avoid gaining 1 Focus from a psionic ability."}
    level_6:
      - {name: "Resonant", effect: "When you use Centering, gain temp HP equal to your WIS modifier (in addition to normal Centering temp HP)."}
      - {name: "Focused Fury", effect: "While in Heightened state (Focus 4-6), your psionic attacks ignore resistance to psychic damage."}
      - {name: "Psi Shield", effect: "+1 DV while your Focus is 3 or lower (Calm). Advantage on saves against psychic damage while Calm."}
  Mutant:
    level_1:
      - {name: "Feral", effect: "+1 to attack rolls with natural weapons. Your natural weapon attacks count as magical for overcoming resistance."}
      - {name: "Adaptive", effect: "When Adaptive Response triggers, the resistance lasts until the end of the encounter instead of until the end of your next turn."}
      - {name: "Aberrant", effect: "You know 1 additional mutation (4 total, still 2 active at a time)."}
      - {name: "Chimera", effect: "When you use Adapt to swap mutations, gain +1 DV until the start of your next turn."}
    level_6:
      - {name: "Predator", effect: "When you reduce a creature to 0 HP with a natural weapon, gain temp HP equal to your END modifier + half your level."}
      - {name: "Unstable Genome", effect: "Once per short rest, you can activate a third mutation for 1 minute. Gain 1 Exhaustion when it ends (removed by short rest)."}
      - {name: "Hardened Carapace", effect: "While Carapace mutation is active, you gain resistance to one additional damage type of your choice (chosen when you activate Carapace)."}
mastery_paths:
  - {name: "Wasteland Knight", stats: "MIG 15, END 14", narrative: "Swore a binding oath to protect a person, settlement, or ideal", features_11: ["Oath Bond", "Armored Grace"], features_13: ["Aegis", "Consecrated Weapon"], capstone_15: "Bastion"}
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
  - {name: "Ascendant", stats: "WIS 16, MIG 14", narrative: "Survived a Psionic Backlash that should have been fatal", features_11: ["Controlled Fury", "Psionic Resonance"], features_13: ["Backlash Channeling", "Expanded Consciousness"], capstone_15: "Transcendence"}
  - {name: "Aberrant", stats: "END 15, MIG 13", narrative: "Voluntarily exposed to a major mutation event or survived extreme mutation crisis", features_11: ["Adaptive Regeneration", "Volatile Adaptation"], features_13: ["Mutation Cascade", "Aberrant Immunity"], capstone_15: "Final Aberration"}
  - {name: "Puppetmaster", stats: "PRE 16, INT 14", narrative: "Recruited 3+ named NPCs as long-term contacts or manipulated a faction against its interests", features_11: ["Shadow Network", "Leverage"], features_13: ["Infiltrate Organization", "Psychological Precision"], capstone_15: "Grand Manipulation"}
# NOTE: "archetype" keys below are retained for site data pipeline compatibility.
# These map to "build" in the current classless system terminology.
multiclass_requirements:
  - {archetype: "Warrior", stat: "Might 13 or Endurance 13"}
  - {archetype: "Gunslinger", stat: "Agility 13"}
  - {archetype: "Mystic", stat: "Intellect 13"}
  - {archetype: "Technician", stat: "Intellect 13"}
  - {archetype: "Medic", stat: "Wisdom 13"}
  - {archetype: "Operative", stat: "Agility 13"}
  - {archetype: "Diplomat", stat: "Presence 13"}
  - {archetype: "Channeler", stat: "Wisdom 13"}
  - {archetype: "Scavenger", stat: "Endurance 13 or Wisdom 13"}
  - {archetype: "Infiltrator", stat: "Intellect 13"}
  - {archetype: "Psion", stat: "Wisdom 13 + biological species only"}
  - {archetype: "Mutant", stat: "Endurance 13 or Might 13"}
# NOTE: "archetype" keys in this block are likewise retained for pipeline compatibility.
cross_training:
  # v0.5 CLASSLESS SYSTEM: Cross-training is replaced by the escalating tree surcharge system.
  # The 1.5x multiplier and 2-archetype cap are removed. Characters can invest in any shared
  # skill tree from Level 1. Breadth is penalized by surcharges; depth is rewarded by discounts.
  # See character-points.md (lines 95-125) for full rules.
  # NOTE: "archetype" keys retained for pipeline compatibility (per original comment).
  surcharge_system:
    description: "Surcharge per purchase applies when invested in 3+ trees"
    thresholds:
      - {trees_invested: "1-2", surcharge_per_purchase: 0}
      - {trees_invested: 3, surcharge_per_purchase: 1}
      - {trees_invested: 4, surcharge_per_purchase: 2}
      - {trees_invested: "5+", surcharge_per_purchase: 3}
    surcharge_applies_to: "Tier 1, 2, 3, Capstone abilities (tree purchases only)"
    surcharge_exempt: "Other Purchases (attributes, armor/weapon proficiency, save proficiency, doctrines, cantrips, skill proficiency)"
  depth_discounts:
    description: "Discount on future purchases in a tree once threshold is reached"
    thresholds:
      - {cp_in_tree: "20+", discount: -1}
      - {cp_in_tree: "40+", discount: -2}
      - {cp_in_tree: "60+", discount: -3}
    minimum_cost: "No ability costs less than half its base (round up). T1 min: 3 CP. T2 min: 5 CP."
  tier_caps:
    - {tier: "Tier 2", max_trees: 4}
    - {tier: "Tier 3", max_trees: 2}
    - {tier: "Capstone", max_trees: 1}
  special_restrictions:
    # Per-archetype cross-training restrictions from v0.4 are removed in the classless system.
    # All shared skill tree abilities are available to all characters subject to tree prerequisites
    # and surcharge rules. One exception remains:
    - archetype: Psion
      note: "Psionic Disciplines tree requires Psionic Awakening (biological species only, INT 13 or WIS 13). Non-biological species (Synthetic) cannot access this tree regardless of CP investment."
---
# Character Progression
![A wasteland survivor transforms — one half shows battered scrap gear, the other gleaming advanced armor and power](/images/illustrations/character-progression.png)

> **v0.5 Classless System:** Ashfall uses **Character Points (CP)** in place of Advancement Points (AP). Characters choose a **chassis** at creation (see **Chassis**) and spend CP in shared skill trees (see **Skill Trees** and **Character Points**). References to "AP" below are equivalent to CP (1 AP = 1 CP). The old "class features" term maps to chassis baseline + tree purchases in this system. Multiclassing and cross-training are replaced by the escalating tree surcharge system — see **Character Points** for details.

This chapter defines what characters gain at each level, ensuring every level-up feels meaningful. No dead levels.

---

## Core Progression Table

Every character gains **10 CP** per level (15 CP at Level 1, 20 for Humans). In addition, each level grants specific features as shown below.

| Level | CP | Build Feature | Talent | ASI | Other | Total New Things |
|-------|-----|--------------|--------|-----|-------|-----------------|
| 1 | 15 | Core build features (4-5) | — | — | Doctrine #1 | 5-6 |
| 2 | 10 | Build feature | **Talent** | — | — | 2 |
| 3 | 10 | Build feature | — | — | Free skill proficiency | 2 |
| 4 | 10 | Build feature | **Talent** | **ASI** | — | 3 |
| 5 | 10 | Capstone feature | — | — | **Skill Focus** | 1 |
| 6 | 10 | Specialization (choose 1 of 3) | — | — | Doctrine #2 | 3-4 |
| 7 | 10 | — | **Talent** | — | **Skill Mastery** | 2 |
| 8 | 10 | Specialization feature | — | — | Free skill proficiency | 2 |
| 9 | 10 | — | **Talent** | **ASI** | — | 2 |
| 10 | 10 | Specialization capstone | — | — | **Skill Focus** | 1 |
| 11 | 10 | Mastery Path (choose 1 of 15) | — | — | — | 2-3 |
| 12 | 10 | — | **Talent** | **ASI** | — | 2 |
| 13 | 10 | Mastery feature | — | — | — | 1 |
| 14 | 10 | — | **Talent** | — | — | 1 |
| 15 | 10 | Mastery capstone (1/LR) | — | — | Free skill proficiency, **Skill Focus** | 2 |
| 16 | 10 | Build capstone | — | — | — | 1 |
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

- Choose one Doctrine at **Level 1** from any doctrine list.
- Choose a second Doctrine at **Level 6** from any doctrine list (including advanced doctrines).
- Doctrines are **passive and always active** (no action required).
- Bonuses from Doctrines are **circumstantial** — they apply in specific situations, not universally.
- During a long rest, you can swap one Doctrine for another.

*The following doctrine tables are organized by thematic grouping. Any character may choose doctrines from any table.*

### Warrior Doctrines

**Level 1 (choose one):**

| Doctrine | Effect |
|----------|--------|
| **Brute Force** | +2 melee damage with two-handed weapons. |
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
| **Steady Hands** | +1 to ranged damage rolls when you haven't voluntarily moved this turn. |
| **Suppressing Fire** | When you hit a creature with a ranged attack, it has -1 to its next attack roll. |

**Level 6 (choose one):**

| Doctrine | Effect |
|----------|--------|
| **Sniper** | Ignore partial and heavy cover with ranged attacks. |
| **Gun Runner** | No disadvantage on ranged attacks within 5 ft. |
| **Demolisher** | +2 damage against objects, constructs, and vehicles. When you deal damage to an object or vehicle, deal 1 additional structural damage (ignores hardness). |

### Mystic Doctrines

**Level 1 (choose one):**

| Doctrine | Effect |
|----------|--------|
| **Evoker** | +1 damage per die on evocation (damage) spells. |
| **Abjurer** | +1 DV while you have temp HP from any source. |
| **Diviner** | Once per short rest, replace one d20 roll with a 15. |
| **Transmuter** | When you cast a spell that affects an area, you can exclude one creature from the effect. |

**Level 6 (choose one):**

| Doctrine | Effect |
|----------|--------|
| **War Mage** | +2 to spell attack rolls against targets within 5 ft (no melee disadvantage). |
| **Spell Sculptor** | Area spells can be reshaped to avoid 2 allies. |
| **Arcane Battery** | First spell cast in combat generates 1 fewer Burnout Point (min 0 BP). If the spell has no Burnout cost, the next 1 BP you would gain this combat is negated. |

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
| **Wrecker** | +2 damage against objects, traps, and constructs. |

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
| **Warlord** | When you use Inspire, allies also gain +5 ft speed and +1 to their next damage roll until end of their next turn. |
| **Silver Tongue Master** | Silver Tongue now also grants advantage on Insight for the first interaction. |
| **Courtier** | You can read social hierarchies instantly. Advantage on checks to identify who holds power in a group. |

### Channeler Doctrines

**Level 1 (choose one):**

| Doctrine | Effect |
|----------|--------|
| **Holy Warrior** | +1 melee damage when you have temp HP from Channel Energy or other features. |
| **Healer's Light** | Channel Energy heals +1 per die. |
| **Spirit Touched** | Advantage on Perception and Insight checks to detect undead, spirits, and extraplanar entities. |
| **Resilient Faith** | +1 to concentration saves. |

**Level 6 (choose one):**

| Doctrine | Effect |
|----------|--------|
| **Crusader** | When you hit with a melee attack, the target has -1 to its next save against your spells. |
| **Protector** | When you heal an ally, they gain +1 DV until the start of your next turn. |
| **Zealot** | When you reduce a creature to 0 HP, regain 1 use of Channel Energy. |

### Scavenger Doctrines

**Level 1 (choose one):**

| Doctrine | Effect |
|----------|--------|
| **Hoarder** | When you loot a container or corpse, find 1 additional Salvage unit (1/encounter). |
| **Jury-Rigger** | +1 to crafting checks. Jury-rigged items last twice as long before breaking. |
| **Scrapper** | +1 melee damage with improvised weapons. Scrapyard Strike knocks target 5 ft on a hit. |
| **Packrat** | +50% carrying capacity. You can retrieve a stowed item as a free action (1/round). |

**Level 6 (choose one):**

| Doctrine | Effect |
|----------|--------|
| **Resourceful** | When you spend a Salvage Die and roll max, regain 1 Salvage Die (1/short rest). |
| **Trap Maker** | Scrap Traps you create have +2 to their save DCs and deal +1d6 damage. |
| **Field Medic** | You can use Makeshift Solution to create a field splint: remove the Wounded condition from an adjacent ally (1/short rest). |

### Infiltrator Doctrines

**Level 1 (choose one):**

| Doctrine | Effect |
|----------|--------|
| **Handler** | Contingency contacts provide +1 additional piece of intel or 1 additional minor item. |
| **Ghost** | Advantage on Stealth checks during the first round of any encounter. |
| **Profiler** | +2 to Insight checks against creatures you have Assessed. You learn their highest and lowest ability scores. |
| **Saboteur** | +2 damage against objects, traps, and vehicles. Advantage on checks to disable devices. |

**Level 6 (choose one):**

| Doctrine | Effect |
|----------|--------|
| **Spymaster** | You can maintain Assess Target on 2 additional creatures (up to INT mod + 2 total). |
| **Phantom** | While hidden, your first attack each combat does not reveal your position (you remain hidden until end of turn). |
| **Interrogator** | When you succeed on an Insight or Intimidation check against an Assessed target, learn one additional fact (weakness, allegiance, or intention). |

### Psion Doctrines

**Level 1 (choose one):**

| Doctrine | Effect |
|----------|--------|
| **Empath** | Advantage on Insight checks. You can sense strong emotions within 30 ft (no action required). |
| **Kinetic** | +1 damage per die on Telekinesis discipline abilities. |
| **Cerebral** | +1 to save DCs of Telepathy discipline abilities. |
| **Disciplined** | Centering reduces Focus by an additional 1. Once per short rest, avoid gaining 1 Focus from a psionic ability. |

**Level 6 (choose one):**

| Doctrine | Effect |
|----------|--------|
| **Resonant** | When you use Centering, gain temp HP equal to your WIS modifier (in addition to normal Centering temp HP). |
| **Focused Fury** | While in Heightened state (Focus 4-6), your psionic attacks ignore resistance to psychic damage. |
| **Psi Shield** | +1 DV while your Focus is 3 or lower (Calm). Advantage on saves against psychic damage while Calm. |

### Mutant Doctrines

**Level 1 (choose one):**

| Doctrine | Effect |
|----------|--------|
| **Feral** | +1 to attack rolls with natural weapons. Your natural weapon attacks count as magical for overcoming resistance. |
| **Adaptive** | When Adaptive Response triggers, the resistance lasts until the end of the encounter instead of until the end of your next turn. |
| **Aberrant** | You know 1 additional mutation (4 total, still 2 active at a time). |
| **Chimera** | When you use Adapt to swap mutations, gain +1 DV until the start of your next turn. |

**Level 6 (choose one):**

| Doctrine | Effect |
|----------|--------|
| **Predator** | When you reduce a creature to 0 HP with a natural weapon, gain temp HP equal to your END modifier + half your level. |
| **Unstable Genome** | Once per short rest, you can activate a third mutation for 1 minute. Gain 1 Exhaustion when it ends (removed by short rest). |
| **Hardened Carapace** | While Carapace mutation is active, you gain resistance to one additional damage type of your choice (chosen when you activate Carapace). |

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
| 4 | Feature (all builds) |
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

## Character Points (CP)

### Earning CP

| Level | CP Gained | Cumulative CP |
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

### Spending CP

Abilities are organized into **shared skill trees** (see **Skill Trees**). Each tree has three tiers of abilities plus capstone abilities at the top.

| Purchase | Base Cost | Prerequisites |
|----------|-----------|---------------|
| Tier 1 ability | 5 CP | None (any character can enter any tree) |
| Tier 2 ability | 10 CP | At least 1 Tier 1 ability in the same tree |
| Tier 3 ability | 15 CP | Level 5+, at least 1 Tier 2 ability in the same tree |
| Capstone ability | 25 CP | Level 10+, at least 2 Tier 3 abilities in the same tree |
| Signature capstone | 30 CP | Level 15+, capstone in same tree |

#### Other Purchases

| Purchase | Cost | Prerequisites |
|----------|------|---------------|
| Attribute +1 | 10 CP | Maximum 20 |
| Weapon group proficiency | 5 CP | — |
| Martial weapon group proficiency | 8 CP | — |
| Medium armor proficiency | 10 CP | — |
| Heavy armor proficiency | 15 CP | Medium armor proficiency |
| Shield proficiency | 5 CP | — |
| Third save proficiency | 20 CP | Level 7+ |
| Skill proficiency | 2 CP (1 CP for Specialist chassis) | — |
| Skill expertise | 4 CP (2 CP for Specialist chassis) | Proficiency in the chosen skill |
| Advanced skill access | 3 CP (2 CP for Specialist chassis) | Level 3+, relevant skill proficiency |
| Cantrip | 15 CP / 12 CP (Leadership & Social tree Initiate+) / 10 CP (Divine Channeling or Medicine tree Initiate+) | — |
| Doctrine (passive bonus) | 0 CP | Free pick: 1 at Level 1, 1 at Level 6. Max 2 active. Replaceable on long rest. |

Unspent CP carries over between levels.

---

## Example Progression: Warrior (Brute Force / Vanguard / Wasteland Knight)

| Level | What Happens |
|-------|-------------|
| **1** | Gain Combat Stance, Second Wind, Bodyguard, Retaliation Strike, Grit. Choose **Brute Force** doctrine (+2 melee dmg with two-handed weapons). Spend 15 CP: Power Strike (5) + Armor Mastery (5) + save 5. |
| **2** | Gain Weapon Specialization (Heavy Melee). Choose **Talent: Tough** (+2 HP/level). Spend 10 CP: Rally Cry (5) + save 5. |
| **3** | Gain Extra Attack. Spend 10 CP: Shield Wall (10). |
| **4** | Gain Attribute Improvement (+2 MIG → 17). Choose **Talent: Weapon Bond** (Warrior, +1 attack with Heavy Melee). Spend 10 CP: save for Tier 3. |
| **5** | Gain Unbreakable (capstone). Spend 10 CP + saved: Devastating Critical (15). |
| **6** | Choose specialization: **Vanguard**. Gain Shield Wall (reaction), Iron Skin. Choose **Sentinel** doctrine (opportunity attacks (OA) stop movement). Spend 10 CP: Tactical Positioning (10). |
| **7** | Choose **Talent: Durable** (min healing = 2x END mod). Gain **Skill Mastery: Intimidation** (double proficiency). Spend 10 CP: save. |
| **8** | Gain Vanguard feature: Fortress Stance. Spend 10 CP: save. |
| **9** | Gain **ASI** (+2 END → 16). Choose **Talent: Sentinel** (universal, enhanced OA). Spend 10 CP: Commanding Presence (15, using saved CP). |
| **10** | Gain Vanguard capstone: Immovable Object. Spend 10 CP: save for cross-training. |
| **11** | Choose **Wasteland Knight** mastery path. Gain Oath Bond, Armored Grace. Spend 10 CP: cross-train Mage Armor (Mystic, 8 CP, needs INT 13). |
| **12** | Gain **ASI** (+1 MIG → 18, +1 WIS → 12). Choose **Talent: Unyielding Grit** (Warrior, advantage on Fortitude saves bloodied + death save). Spend 10 CP: cross-train Spell Lore (Mystic, 8 CP). *Mystic lock-in satisfied.* |
| **13** | Gain Wasteland Knight: Aegis, Consecrated Weapon. Spend 10 CP: save. |
| **14** | Choose **Talent: Riposte** (universal, counter on miss). Spend 10 CP: save for Tier 3. |
| **15** | Gain Wasteland Knight capstone: Bastion (30 ft protection zone, 1/LR). Spend 10 CP + saved: Unyielding tree enhancement. |
| **16** | Gain Unstoppable Force (build capstone). Spend 10 CP: flexibility. |
| **17** | Gain Vanguard Final Evolution. Spend 10 CP: flexibility. |
| **18** | Gain **ASI** (+2 MIG → 20). Choose **Legendary Talent: Legendary Resilience** (+30 HP max, regen). Spend 10 CP: final tree completion. |
| **19** | Choose **Legendary Talent: Avatar of War** (extra attack 1/combat when bloodied). Spend 10 CP: final purchases. |
| **20** | Gain Titan's Stand (apex, 1/LR). Spend 10 CP: finishing touches. |

**Result:** A MIG-20 Vanguard Warrior with Wasteland Knight mastery, Brute Force + Sentinel doctrines, 8 Talents (Tough, Weapon Bond, Durable, Sentinel, Unyielding Grit, Riposte, Legendary Resilience, Avatar of War), Skill Mastery in Intimidation, and cross-trained Mage Armor + Spell Lore from Mystic. Every single level delivered something named and meaningful — zero dead levels.

---

## Retraining

During a long rest (1 week of downtime), a character can make the following swaps:

| Can Retrain | Cannot Retrain |
|------------|----------------|
| One Doctrine (same tier) | Build choice |
| One non-Legendary Talent | Specialization choice |
| One Tier 1 CP ability (same build) | Mastery Path choice |
| One skill proficiency | Tier 2+ CP abilities |
| Skill Mastery skill choice | Legendary Talents |
| | ASI allocations |

**Narrative Requirement:** Brief justification for the change ("I've been training with a new weapon style" or "My time studying the ruins taught me different techniques").

**Cost:** 1 week of downtime (one long rest). No CP cost — you're swapping, not gaining.

---

## L16-20 Feature Definitions

### Overview

The progression table defines three endgame milestones with no existing content:

| Level | Feature | Scope | Power Budget |
|-------|---------|-------|--------------|
| **16** | Build Capstone | Build-universal (same for all specs of a build) | Major passive or 1/SR ability |
| **17** | Specialization Final Evolution | Spec-specific (different per specialization) | Dramatic enhancement of spec identity |
| **20** | Apex Ability (1/LR) | Character-defining | Campaign-defining moment, 1/week in gritty rest |

### Design Principles

#### L16: Build Capstone

The Build Capstone is what a character earns for staying true to their build fantasy through 16 levels. It should:

1. **Be build-universal** — every Warrior gets the same L16, regardless of Vanguard/Berserker/Warlord. This reinforces "being a Warrior" at the deepest level.
2. **Enhance the core mechanic** — not a new ability, but a dramatic improvement to something the build has been using since Level 1.
3. **Be passive or high-frequency** — this shapes daily play, not just one dramatic moment (L20 covers that).
4. **Power level:** Stronger than any single Mastery Path feature, but not encounter-ending.

#### L17: Specialization Final Evolution

The Final Evolution is the payoff for the specialization choice made at Level 6. It should:

1. **Be spec-specific** — this is where Vanguard and Berserker feel maximally different.
2. **Complete the spec's fantasy** — if the spec promised "unstoppable tank" at L6, L17 delivers the final piece.
3. **Interact with L6-10 features** — enhance or transform an existing spec ability.
4. **Power level:** The strongest spec-specific feature. Should make players who chose that spec feel vindicated.

#### L20: Apex Ability

The Apex is the legend. It should:

1. **Be the single most memorable ability the character has** — "remember when the Warrior used Titan's Stand against the dragon?"
2. **Be simple to explain** — complex mechanics undermine the dramatic moment. One sentence should convey the core effect.
3. **Have a meaningful cost** — 1/LR (1/week) is the gate, but the ability itself should also cost something (exhaustion, HP, risk).
4. **Not guarantee success** — even Apex abilities should involve risk, judgment, or consequences.
5. **Power level:** Can change the outcome of a battle. Cannot auto-win a campaign.

---

### Exemplar 1: Warrior

#### L16 — Unbreakable Will (Build Capstone)

*Every Warrior knows the moment: surrounded, bleeding, outmatched, and the only thing keeping them standing is the absolute refusal to fall. At Level 16, that refusal becomes literal.*

**Unbreakable Will** (Passive): When you would be reduced to 0 HP, you can instead drop to 1 HP (1/Short Rest). This replaces the existing Unbreakable feature (L5), which now becomes at-will (once per round — you can survive one hit per round, not infinite hits).

Additionally, while at or below half HP:
- Your Grit damage reduction doubles (2 × END modifier instead of END modifier)
- You have advantage on all Fortitude saves
- Your weapon attacks deal +1d6 damage (the fury of a cornered predator)

*Design note: Unbreakable Will upgrades the L5 Unbreakable to be at-will (but still 1/round — you can't survive infinite hits). The below-half bonuses turn the Warrior into a comeback engine. This is the L16 that makes sense for ALL Warriors — whether Vanguard, Berserker, or Warlord, they all become harder to kill as they take damage.*

#### L17 — Specialization Final Evolution

**Vanguard — Absolute Fortress:**
While in Defensive Stance, your Shield Wall (or equivalent defensive feature) extends to a **20-foot radius**. All allies within the radius gain your Grit damage reduction as well as their own. You become the center of an impenetrable formation.

**Berserker — Primal Fury:**
While Raging, you can make one additional attack per turn as a free action (no MAP). When you reduce a creature to 0 HP while raging, you immediately regain HP equal to your MIG modifier + level. You are a storm of violence that heals itself through killing.

**Warlord — Supreme Command:**
Your Tactical Command can target **2 allies simultaneously**. When you use Coordinated Strike, both you AND the next ally to attack that target have advantage. Your party fights as a single, perfectly coordinated unit.

#### L20 — Titan's Stand (Apex Ability, 1/Long Rest)

*They'll tell stories about this. Not today — today, everyone is too busy surviving. But tomorrow, when the dust settles and someone asks how you walked through the dragon's fire and kept swinging, they'll tell this story.*

**Titan's Stand** (1 Action, 1 Minute): For 1 minute, you **cannot be reduced below 1 HP** by any means. Damage that would kill you is accumulated as **deferred damage** instead. All your melee attacks deal **maximum weapon damage** (do not roll — take the maximum). You are immune to frightened and stunned.

When Titan's Stand ends, all deferred damage is applied at once. If this would reduce you below 0 HP, you die — no saves, no Unbreakable, no intervention. You also gain 2 levels of exhaustion.

*The gamble: a Warrior who enters Titan's Stand against overwhelming odds might accumulate 200+ points of deferred damage. If their allies can finish the fight before the minute ends, a healer can restore enough HP to survive the reckoning. If not, the Warrior dies standing — the most Warrior death possible.*

> **Titan's Stand Math (Level 20, MIG 20, Greatsword):**
> - Duration: 10 rounds
> - Maximum damage: 12 (greatsword) + 5 (MIG) + stance bonuses = ~19-22 per hit
> - With Extra Attack: ~40-44 per round guaranteed
> - Total output over 10 rounds: ~400-440 guaranteed damage
> - Risk: Must survive deferred damage at the end
> - A smart Warrior uses Titan's Stand when the party needs 1-2 more rounds to win, not 10

---

### Exemplar 2: Psion

#### L16 — Psionic Mastery (Build Capstone)

*Your Focus system has matured. The tremors that once accompanied your power have stilled. The nosebleeds come less frequently. You haven't stopped being dangerous — you've stopped being in danger from yourself.*

**Psionic Mastery** (Passive): Your **Backlash Threshold increases by +3** (to 13 + MIG modifier). When you enter the **Heightened** state, you gain **temporary HP equal to your WIS modifier** (your body has adapted to channel power efficiently). Your Centering ability can now be used as a **free action once per round** (additional uses still cost 1 action).

*Design note: Free Centering once/round transforms the Psion's combat loop. They can now attack AND manage Focus every round, eliminating the "action tax" that limited earlier play. The Backlash Threshold increase provides significant headroom for sustained high-Focus combat.*

#### L17 — Specialization Final Evolution

**Kineticist — Gravitational Supremacy:**
Your telekinetic abilities ignore weight limits — you can lift and manipulate objects of any size (up to Huge creatures). Telekinetic Grip can restrain up to **2 creatures simultaneously**. When you use Kinetic Barrage, you can target up to **5 creatures** instead of 3.

**Telepath — Collective Consciousness:**
Your Psychic Network can link up to **10 creatures** and has no range limit on the same plane. While the network is active, you can use Mind Probe on any creature within the network's collective perception range (any linked member can see the target). You can maintain Psychic Domination and Mind Probe simultaneously (separate concentration tracks).

**Warden — Unbreakable Aegis:**
Your Psionic Aegis no longer costs you HP — you absorb damage for allies without psychic backlash. Psionic Ward's radius increases to **30 feet** and grants **+2 to all saves** (instead of +1). While Psionic Fortress is active, you can move it with you (it is no longer immobile).

#### L20 — Apotheosis (Apex Ability, 1/Long Rest)

*The air tears. The ground cracks. Every mind within a hundred feet hears the same thing: a sound like a star igniting. This is what happens when a Psion stops holding back.*

**Apotheosis** (1 Action, 1 Minute): Your Focus is set to maximum (Strained) and your **Backlash Threshold is removed** for the duration. All Focus threshold bonuses are doubled (+2/die at Heightened becomes +4, +4/die at Strained becomes +8). Psionic save DCs increase by +3. Self-damage from gaining Focus while Strained is reduced to **1 flat** (not 1d4).

When Apotheosis ends, your Focus resets to 0. All creatures within **30 feet** (including allies) take **3d6 psychic damage** from the energy discharge (Will save for half, DC = your standard psionic DC). You gain **2 levels of exhaustion**.

*Apotheosis is what happens when the nuclear reactor goes supercritical — on purpose. The doubled threshold bonuses are staggering: a Level 20 Psion's Psi Strike at 4d8+32+WIS is comparable to high-level spell damage, at will, for 10 rounds. The discharge at the end and 2 exhaustion ensure this is a once-a-week-maximum event.*

> **Design Note:** The Psion L20 Apotheosis as presented here is a framework exemplar. When the Ascendant mastery path (which also removes the Backlash Threshold at L15 via Transcendence) is combined with Apotheosis, the L20 should be qualitatively different — not just "bigger Transcendence." Recommended redesign direction for Ascendant Psions: Apotheosis should enable something unique (e.g., projecting consciousness to control multiple simultaneous psionic effects, sharing Focus threshold bonuses with allies, or briefly becoming incorporeal on the psionic plane). For non-Ascendant Psions, Apotheosis functions as written.

---

### Exemplar 3: Infiltrator

#### L16 — Perfect Information (Build Capstone)

*At Level 16, you don't just know things about people. You know everything about everyone in the room.*

**Perfect Information** (Passive): You can Assess up to **INT modifier + proficiency bonus** targets simultaneously (dramatically increased limit). Assessing a target now takes no action — it occurs automatically when you first perceive a creature (as part of looking at them). The +2 bonus from Assessed targets increases to **+3**.

Additionally, you are immune to the **surprised** condition and **always act in the surprise round** even if ambushed from complete concealment.

*Design note: Automatic Assess makes the Infiltrator a passive intelligence engine. Every enemy they see is immediately cataloged. Combined with Profiler's Deep Read or Handler's network, the party effectively enters every encounter with full tactical awareness.*

#### L17 — Specialization Final Evolution

**Handler — Shadow Government:**
Your network grows to PRE modifier + proficiency bonus contacts (dramatically expanded). Embedded agents provide intelligence **twice per session** instead of once, and can perform **active sabotage** (disabling security, stealing documents, planting false orders) on your command with a PRE check. Spymaster's Gambit recharges on a short rest.

**Saboteur — Entropy Engine:**
Planted Charges can be placed remotely (within 30 ft, no touch required). Disable works at range (30 ft, INT check) and can target **2 items simultaneously**. Catastrophic Failure's 1-minute work time is reduced to **3 rounds** (18 seconds). You dismantle systems at a speed that feels like magic.

**Profiler — Omniscience:**
Deep Read provides **all three categories** of information simultaneously (combat, psychological, and tactical). Behavioral Prediction's DC decreases by 3 (base DC 9/12/15 instead of 12/15/18). Cold Read automatically succeeds against creatures with INT or WIS lower than yours — their minds are open books.

#### L20 — Grand Design (Apex Ability, 1/Long Rest)

*Everyone else sees the chessboard. You see all possible games simultaneously.*

**Grand Design** (1 Action, 1 Minute): For 1 minute, you achieve perfect analytical clarity. Your mind processes information at a level that borders on precognition:

- All **INT-based skill checks** you make automatically succeed (treat the result as a natural 20)
- You have **advantage on all attack rolls** against any creature you can see (your analysis identifies the optimal attack vector for every target simultaneously)
- All allies who can hear you gain **+3 to attack rolls and saves** (you are delivering a constant stream of perfect tactical intelligence)
- You **cannot be deceived** — all Deception checks against you automatically fail, and all illusions are transparent to you

When Grand Design ends, you gain **2 levels of exhaustion** and are **stunned for 1 round** as your mind crashes from the sustained cognitive overdrive.

*Grand Design is the Infiltrator's statement: "I was always in control." For one minute, the party fights with perfect intelligence, every action informed by the Infiltrator's all-encompassing analysis. The exhaustion and stun at the end represent the cognitive cost — your brain can't sustain that level of processing without burning out.*

---

### Gunslinger

#### L16 — Dead Eye's Focus (Build Capstone)

Your ranged attacks ignore all cover (partial, heavy, and total — you can shoot through gaps others can't see). Your critical hit range with ranged weapons expands by 1 (stacks with other sources). When you roll Initiative, your first ranged attack on your first turn automatically hits (you still roll to determine if it's a critical).

#### L17 — Final Evolution

**Sharpshooter — Bullet Time:** Once per round, when you make a ranged attack, you can declare it a **Perfect Shot**. The attack ignores damage resistance, treats the target's DV as 10 (regardless of actual DV), and deals maximum weapon damage (no roll). You can use Perfect Shot a number of times per short rest equal to your AGI modifier (minimum 1).

**Demolitionist — Scorched Earth:** Your explosive attacks affect an area 50% larger (round up). When you deal damage to an area, each creature in the area that fails its save also gains the **Burning** condition (1d6 fire damage per round, END save DC = your attack DC to end). Explosive traps you set detonate with advantage on the attack roll.

**Trick Shot — Impossible Angles:** Your ranged attacks can ricochet off surfaces to hit targets around corners, behind full cover, or in adjacent rooms (as long as there is a reflective or hard surface within 60 ft of the target). Targets hit by ricochets are **Flat-Footed** against the attack. Once per round, you can split a single ranged attack into two attacks at different targets (each deals half damage, rounded up).

#### L20 — Last Round Standing (Apex Ability)

**1/Long Rest — Deadman's Volley (1 minute):** Time slows around you. Each ranged attack you make targets **every enemy within a 30-ft cone** originating from you (or within 10 ft of your primary target, your choice). Each enemy in the area takes the full attack damage individually (roll once, apply to all). All ranged attacks during this time have **advantage**. You cannot be targeted by opportunity attacks. At the end, gain 2 exhaustion and your weapons jam (require 1 action each to clear).

You still have **3 actions** per turn. The difference is that each shot hits every enemy in range — you're not getting more turns, you're making each bullet count for the whole battlefield.

**Permanent Passive — Never Miss Twice:** When you miss a ranged attack against a target, your next ranged attack against that same target gains **+3 to hit**. This bonus resets after you hit or change targets.

---

### Mystic

#### L16 — Arcane Supremacy (Build Capstone)

Your spells ignore magic resistance (but not immunity). When you cast a spell of 3rd level or higher, you recover 1 spell slot of a level at least 2 lower than the spell cast (e.g., casting a 5th-level spell recovers a 1st, 2nd, or 3rd-level slot). Burnout Points you accumulate decrease by 1 at the start of each of your turns (minimum 0).

#### L17 — Final Evolution

**Elementalist — Elemental Convergence:** You can combine two different damage types into a single spell (e.g., fire + electric). The target must fail saves against both types separately; if it has resistance to one, it still takes full damage from the other. Once per short rest, you can cast a spell that deals **all four elemental damage types simultaneously** — the target uses its worst resistance.
**Seer — Temporal Sight:** At the start of each combat, you see **2 rounds into the future**. You know the intended actions of all enemies for their next 2 turns (GM reveals planned actions). You can share this information with allies as a free action. Once per long rest, you can **rewrite fate** — after an attack, save, or ability check is resolved, declare that you foresaw this outcome; force the creature to reroll and use the new result (ally keeps higher, enemy keeps lower).

**Necromancer — Lord of the Threshold:** Undead you control gain **+2 to all attacks, saves, and DV**. You can control a number of undead equal to your INT modifier + proficiency bonus simultaneously. When a creature within 60 ft dies, you can use your **reaction** to immediately raise it as an undead under your control (no spell slot required, lasts 1 hour). Undead you control can now use abilities they had in life (reduced to half effectiveness).

#### L20 — Arcane Ascension (Apex Ability)

**1/Long Rest — Spellweave (1 minute):** You become a conduit of pure magical energy. All spells you cast deal **maximum damage** (no damage rolls). Spell save DCs increase by +2. You can cast two spells per turn, each costing 1 action (2 actions total). The second spell costs 1 additional spell slot beyond its normal cost. Burnout is suspended — you cannot gain BP during this time. At the end, gain 2 exhaustion and immediately gain BP equal to the total spell levels cast during Spellweave.

**Permanent Passive — Arcane Reservoir:** You have 1 additional spell slot at your highest available level. When you complete a short rest, recover 1 additional spell slot (of 3rd level or lower) beyond the normal short rest recovery.

---

### Technician

#### L16 — Master Engineer (Build Capstone)

You can control 2 drones simultaneously (or 1 drone + 2 gadgets active). Your drone's HP increases by 50% and it gains +2 to all attack rolls and save DCs. Gadgets you deploy no longer require concentration — they persist for their full duration independently. You can repair your drone as 1 action (restore 2d10 + INT modifier HP) instead of the normal 10-minute repair time.

#### L17 — Final Evolution

**Engineer — Masterwork Constructor:** Gadgets and constructs you build have **+2 to all DCs and attack rolls**. You can deploy gadgets at range (30 ft throw/launch instead of adjacent placement). Once per short rest, you can build a **temporary construct** (medium size, 30 HP, your attack bonus, 1d8+INT damage) from available scrap in 1 action. It lasts 1 minute and follows your mental commands.

**Hacker — Digital Ghost:** Your hacking checks gain **advantage against all ICE types**. When you successfully hack a system, you can maintain access indefinitely (no recurring checks). You can hack up to 3 systems simultaneously. Once per long rest, you can **take full control** of any non-sapient AI system within 120 ft for 1 hour (Technology check vs. AI's level, no retry on failure).

**Augmenter — Overclock Protocol:** Augmentations you install in yourself or allies provide **+1 to their primary bonus** (stacked within the +3 equipment cap). You can temporarily activate an augmentation beyond its normal limits — once per short rest, grant one augmentation **double its normal benefit** for 1 minute (e.g., +2 DV augmentation becomes +4 DV). This doubling can temporarily exceed the normal +3 equipment bonus cap. At the end, the augmentation is **disabled for 1 hour** while it cools down.

#### L20 — Singularity (Apex Ability)

**1/Long Rest — Full Automation (1 minute):** All technology in a 60-ft radius comes under your control. Enemy drones, turrets, and automated systems switch allegiance to you. Locked doors unlock. Security systems shut down. Your drone gains **1 additional action per turn** (maximum 4 actions total) and its attacks deal double damage. All Technology checks you make automatically succeed. At the end, gain 2 exhaustion and all controlled enemy technology reverts (your drone returns to normal).

**Permanent Passive — Integrated Systems:** Your drone acts on your Initiative (not separately) and gains your proficiency bonus to all saves. When your drone is destroyed, it self-repairs over 1 hour (instead of requiring a full repair). You have advantage on all Technology checks.

---

### Medic

#### L16 — Peerless Physician (Build Capstone)

When you heal a creature, the healing is increased by your WIS modifier (in addition to any other bonuses). Once per round, you can heal a creature as a **free action** (using any healing ability that normally costs 1 action). Stims and serums you administer have their effects increased by 50% (round up). You are immune to the Poisoned condition.

#### L17 — Final Evolution

**Field Surgeon — Resurrection Protocol:** Once per long rest, when a creature within 5 ft has died within the last minute, you can attempt emergency resurrection — a Medicine check (DC 25, reduced by 1 per Medic level above 15). On success, the creature returns to life at 1 HP with 3 levels of exhaustion and a lingering injury (rolled on the Lingering Injury table). This is medical science, not magic — you're restarting a heart, not calling back a soul.

**Pharmacist — Master Chemist:** Consumables you craft have their effects doubled (healing, duration, and bonus values). Master Chemist's doubling applies to the base effect before any other modifiers (such as Peerless Physician's 50% increase). You can craft **2 consumables simultaneously** during downtime. Serums you administer no longer impose exhaustion or disadvantage side effects. Once per short rest, you can create an **improvised stim** from ambient materials (no cost, heals 2d8 + WIS modifier).

**Plague Doctor — Pandemic:** Your poisons ignore **all poison resistance and immunity** (magical immunity still blocks). Poison save DCs from your abilities increase by +2. Once per long rest, you can create a **virulent toxin** (10-ft radius, 6d6 poison damage, Fortitude save for half, creatures that fail are Poisoned for 1 minute). The toxin lingers for 1 minute as a zone.

#### L20 — Miracle Worker (Apex Ability)

**1/Long Rest — Triage Mastery (1 minute):** You enter a state of supernatural medical focus. All healing you perform is **maximized** (no roll). You can heal any creature within 30 ft without touching them (line of sight only). Once during this duration, you can **remove all conditions, diseases, and poisons** from a single creature and restore them to full HP. At the end, gain 2 exhaustion.

**Permanent Passive — Will to Live:** Allies within 30 ft of you have **advantage on death saving throws**. When you stabilize a creature at 0 HP, it regains HP equal to your WIS modifier instead of remaining at 0. You automatically succeed on Medicine checks DC 20 or lower.

---

### Operative

#### L16 — Shadow Mastery (Build Capstone)

Your Sneak Attack damage increases by +2d6. You can Hide as a **free action** once per turn (no action cost). When you are hidden, your first attack each round automatically qualifies for Sneak Attack regardless of other conditions. You have advantage on all saves against effects that would reveal your location.

#### L17 — Final Evolution

**Assassin — Death Mark:** When you hit a creature with a Sneak Attack, you can declare it a **Death Mark** (1/short rest). The target takes the Sneak Attack damage at the start of each of its turns for 3 rounds (no additional attacks required — the wound bleeds). If the target drops below half HP from Death Mark damage, it must make a Fortitude save (DC = your attack DC) or be **Stunned** for 1 round as the pain overwhelms it.

**Shadow — Umbral Cloak:** While in dim light or darkness, you are **invisible** (not just hidden — magical detection is required to sense you). You can pass through occupied spaces of creatures that cannot see you. Once per short rest, you can activate **Shadow Step** — teleport up to 60 ft between two areas of dim light or darkness as a free action.

**Spy — Impossible Cover:** You can perfectly impersonate any humanoid you have observed for at least 10 minutes (voice, mannerisms, gait). Detection requires beating your Deception with a DC 25 Insight check. You can maintain 3 separate cover identities simultaneously. Once per long rest, you can **turn an NPC into an unwitting asset** — after a 10-minute conversation, they believe you are a trusted ally and act accordingly for 24 hours (Will save at your Deception DC to resist, advantage if you're asking them to do something dangerous).

#### L20 — Specter (Apex Ability)

**1/Long Rest — Phantom Strike (1 minute):** You become partially incorporeal. You can move through solid objects (but cannot end your turn inside one). All your attacks are Sneak Attacks (no conditions required). You cannot be targeted by opportunity attacks. Your movement does not trigger traps or pressure plates. You gain **resistance to all non-magical damage**. At the end, gain 2 exhaustion and you are Flat-Footed for 1 round as you rematerialize.

**Permanent Passive — Always Watching:** You cannot be surprised. You have **tremorsense 30 ft** (detect creatures by vibration, even invisible ones). When a creature you can see makes an attack against an ally within 30 ft, you can use your **reaction** to force disadvantage on that attack (you shout a warning, throw debris, or otherwise interfere).

---

### Diplomat

#### L16 — Commanding Authority (Build Capstone)

Your Commanding Presence affects **all allies within 60 ft** (up from 30 ft). The bonuses from Commanding Presence increase by +1. When you use Inspire or a social ability in combat, you can also grant one ally within range an **additional reaction** until the start of your next turn. Your social ability save DCs increase by +1.

#### L17 — Final Evolution

**Commander — Supreme Tactician:** At the start of combat, you can designate a **battle plan**. Choose 3 allies — they each gain one of the following for the entire combat (your choice, different ally can get different benefit): +2 to attack rolls, +2 to DV, or +10 ft movement speed. Once per short rest, you can call an **Audible** — as a reaction, you can order one ally to immediately take 1 action out of turn (they spend their reaction to do so).

**Negotiator — Peerless Diplomat:** In social encounters, your progress threshold is reduced by 2 (minimum 1). You can make **2 social skill checks per round** instead of 1. Once per long rest, you can force a **ceasefire** — all combatants within 60 ft must make a Will save against your social DC or be unable to take hostile actions for 1 round (they can move, defend, and talk but cannot attack, cast offensive spells, or set traps). This fails if any creature in the area has already been reduced to 0 HP this combat.

**Demagogue — Voice of the Masses:** Your Intimidation abilities affect **all enemies within 30 ft** simultaneously (not just one target). Creatures Frightened by you have **disadvantage on all saves** (not just the normal Frightened effects). Once per long rest, you can deliver a **Rallying Cry** — all allies who can hear you within 120 ft gain **temporary HP equal to your level + PRE modifier** and are immune to the Frightened condition for 1 minute.

#### L20 — Sovereign Will (Apex Ability)

**1/Long Rest — Absolute Command (1 minute):** Your presence dominates the battlefield. All allies within 60 ft gain **advantage on all attack rolls and saving throws**. Enemies that start their turn within 30 ft of you must make a Will save against your social DC or be **Frightened** of you (save ends). You can issue **2 Commands per turn** (instead of 1) as free actions, each granting a different ally 1 action (taken immediately using their reaction). At the end, gain 2 exhaustion and you are unable to use social abilities for 1 hour (your voice gives out).

**Permanent Passive — Born Leader:** Allies within 30 ft of you gain +1 to all saves (your steady presence calms them). When you roll Initiative, choose one ally — they use your Initiative result if it's higher than theirs. You have advantage on all Persuasion and Intimidation checks.

---

### Channeler

#### L16 — Divine Conduit (Build Capstone)

Channel Energy heals an additional die (e.g., 4d8 becomes 5d8). When you cast a healing spell, you can also remove one condition of your choice from the target (Blinded, Deafened, Frightened, Poisoned, or 1 level of Exhaustion). Your concentration cannot be broken by damage — you automatically succeed on concentration saves caused by taking damage (other sources of concentration loss still apply).

#### L17 — Final Evolution

**Battlemage — Smite Supreme:** When you hit with a melee attack, you can expend a spell slot to deal additional radiant/necrotic damage: **3d8 per slot level** (up from 2d8). Once per short rest, you can make a melee attack that automatically hits and deals maximum smite damage. Your weapon is treated as magical and ignores damage resistance.

**Shaman — Spirit Army:** You can maintain **3 spirit companions** simultaneously (up from 1). Each spirit can act independently on your turn (separate 1-action activity). Once per long rest, you can summon a **Greater Spirit** — a powerful entity (50 HP, +8 attack, 3d8+4 damage, DV 16, your choice of abilities) that fights alongside you for 1 minute. It acts on its own Initiative.

**Oracle (Channeler Spec) — Faith and Mind:** You can cast Channeler spells using either WIS or INT (your choice per spell). Channel Energy can now also restore Focus to a Psion ally (as if they gained 2 Focus for free). Once per short rest, you can **combine a spell and a psionic effect** into a single action — cast one Channeler spell and one psionic ability simultaneously, each resolving at full effect.

#### L20 — Divine Avatar (Apex Ability)

**1/Long Rest — Ascended Form (1 minute):** You become an avatar of your faith's power. You gain **flight 60 ft**, **resistance to all damage**, and a **30-ft aura of healing** (allies that start their turn in the aura regain HP equal to your WIS modifier). All healing you perform is **doubled**. You can cast one spell of **3rd level or lower** per turn as a free action (in addition to normal actions). At the end, gain 2 exhaustion and all your spell slots of 4th level and above are expended.

**Permanent Passive — Blessed Presence:** Allies within 30 ft of you gain +1 to all saving throws against magical effects. When you complete a long rest, choose one ally — they gain the benefit of a Lesser Restoration (remove one disease or condition). You automatically stabilize at 0 HP without making death saves.

---

### Scavenger

#### L16 — Waste Not (Build Capstone)

Scrapyard Strike can now target **2 creatures** per use (adjacent to each other or to you). When you loot a creature or container, you find **double the normal salvage value**. Jury-Rigged items no longer have a failure chance (they function as standard items of their tier). You can carry **double your normal carrying capacity** and items you carry weigh half as much.

#### L17 — Final Evolution

**Junker — Trash to Treasure:** Once per short rest, you can spend 1 action to build a **Tier 3 item** from available scrap (no crafting check, no capital cost — you just make it). The item lasts until your next short rest, then falls apart. You can maintain up to INT modifier items this way. Additionally, when you critically hit with a Scrapyard Strike, the target's armor is **degraded by 1 tier** for the rest of the encounter.

**Packrat — Walking Arsenal:** Your Stash can hold **unlimited items** (no capacity limit). You can draw any item from your Stash as a **free action** (no action cost). Once per short rest, you are considered to always have **any mundane item of Tier 2 or lower** in your Stash — you packed it "just in case." Additionally, you grant **+2 to all survival checks** for your party — your hoard includes food, water, and medical supplies for every contingency.

**Tinkerer — Perpetual Machine:** Gadgets and traps you build have **double duration** and **+2 to their DCs**. You can have **4 gadgets or traps active simultaneously** (up from the normal limit). Once per long rest, you can build a **Masterwork Device** — a Tier 4 gadget with custom effects (work with your GM to define). The Masterwork Device lasts 24 hours and can be anything that doesn't duplicate a spell of 5th level or higher.

#### L20 — King of Scrap (Apex Ability)

**1/Long Rest — Scrapyard Golem (1 minute):** You assemble a massive construct from surrounding debris in a 30-ft radius. The Golem has **100 HP, DV 18, +10 attack, 4d10+6 bludgeoning damage**, and occupies a 10x10 ft space. It acts on your Initiative and follows your commands. While the Golem exists, you ride inside it (total cover, your actions control the Golem). It can throw debris at 60 ft range (3d8+6 damage). If the Golem is destroyed before the duration ends, you are ejected into an adjacent space and are **Prone**. At the end of the duration, the Golem collapses. Gain 2 exhaustion.

**Permanent Passive — Finder's Instinct:** You automatically detect Salvage-worthy items within 60 ft (like Detect Magic, but for tech and scrap). When you complete a short rest in any location that has debris, ruins, or civilization remnants, you automatically recover **1d4 Salvage** at no time cost. You have advantage on all Investigation checks in ruins and structures.

---

### Mutant

#### L16 — Adaptive Supremacy (Build Capstone)

You can have **1 additional active mutation** beyond your normal limit. Shifting between mutation configurations takes a **free action** (instead of 1 action). When you take damage of a type you are not resistant to, you can use your **reaction** to gain resistance to that damage type until the start of your next turn (1/round). Your mutations no longer have visible tells — you can suppress their appearance at will.

#### L17 — Final Evolution

**Apex — Perfect Predator:** Your natural weapons deal **+1d6 damage** and their critical hit range expands by 1. While you have 2 or more physical mutations active, you gain **+10 ft movement speed** and **advantage on Athletics and Acrobatics checks**. Once per short rest, you can enter **Apex State** for 1 minute: your size increases by 1 category, your MIG and END scores increase by +2 (to the stat cap), and your natural weapons gain the Reach property.

**Aberration — Unknowable Form:** You can activate **3 mutations simultaneously** that would normally be incompatible. Your body becomes genuinely alien — you gain **advantage on Intimidation** checks and enemies that see you for the first time must make a **Will save (DC = your mutation DC)** or be Frightened for 1 round. Once per long rest, you can **regenerate a lost limb or organ** over 10 minutes. You are immune to the Deformed condition.

**Chimera — Hybrid Evolution:** You gain **2 additional mutation slots** (beyond the L16 bonus). Once per short rest, you can **copy one physical ability** from a creature you can see (flight, swim speed, tremorsense, damage resistance, natural armor) for 1 hour. Your mutations can combine in unique ways — when you activate 3+ mutations simultaneously, you gain **+2 to all saves** from the biological synergy.

#### L20 — Apex Genome (Apex Ability)

**1/Long Rest — Evolutionary Singularity (1 minute):** All your mutations activate simultaneously (ignoring the normal limit). Your body becomes a perfect biological machine. You gain **+4 to MIG, AGI, and END** (can exceed normal caps, not the mythic +18 cap). You regenerate **10 HP at the start of each turn**. You gain resistance to **all damage types**. Your natural weapon attacks deal an additional **2d6 damage** of a type matching your most recently used mutation. At the end, gain 2 exhaustion and all mutations deactivate (must be reactivated normally).

**Permanent Passive — Biological Immortality:** You are immune to disease, poison, and aging. When you complete a long rest, remove **1 additional level of exhaustion** beyond the normal amount. Once per long rest, when you are reduced to 0 HP, you can instead drop to 1 HP (your body mutates to survive the killing blow).

---

> **Design Principle — Apex Stat Caps:** Apex abilities (L20, 1/LR, 2 exhaustion) may temporarily push attribute modifiers beyond +5, but the total roll bonus to any single roll remains subject to the +18 total roll bonus ceiling at core tier (see **Introduction — Bounded Accuracy Framework**). This is acceptable because: (1) 1/LR in gritty rest economy means 1/week, (2) 2 exhaustion is a severe cost, (3) the window lasts only 1 minute. The attribute cap remains 20 (or 22 with Apex). This principle applies to Mutant's Evolutionary Singularity and any future Apex abilities that modify attributes.

### Power Level Cross-Reference

| Build | L16 Theme | L20 1/LR Name | L20 Duration | L20 Cost |
|-------|-----------|---------------|-------------|----------|
| Warrior | Survival + bloodied power | Titan's Stand | 1 min | 2 exhaustion |
| Psion | Focus management | Apotheosis | 1 min | 2 exhaustion |
| Infiltrator | Passive assessment | Grand Design | 1 min | 2 exhaustion + stunned 1 rd |
| Gunslinger | Auto-hit + crit expansion | Deadman's Volley | 1 min | 2 exhaustion + weapon jam |
| Mystic | Slot recovery + resistance bypass | Spellweave | 1 min | 2 exhaustion + BP dump |
| Technician | Multi-drone + instant repair | Full Automation | 1 min | 2 exhaustion |
| Medic | Free action healing + enhanced output | Triage Mastery | 1 min | 2 exhaustion |
| Operative | +2d6 Sneak + free Hide | Specter: Phantom Strike | 1 min | 2 exhaustion + Flat-Footed |
| Diplomat | AoE buffs + reaction granting | Absolute Command | 1 min | 2 exhaustion + 1hr social lockout |
| Channeler | Enhanced Channel + unbreakable conc. | Ascended Form | 1 min | 2 exhaustion + slots expended |
| Scavenger | Double loot + reliable jury-rig | Scrapyard Golem | 1 min | 2 exhaustion |
| Mutant | Extra mutation + adaptive resistance | Evolutionary Singularity | 1 min | 2 exhaustion + mutations deactivate |

#### Power Escalation Check

- L15 Mastery Capstone: Powerful encounter tool (e.g., Bastion's 30 ft protection zone, 1/LR)
- L16 Build Capstone: Passive enhancement that shapes every combat (e.g., Unbreakable Will, Psionic Mastery)
- L17 Final Evolution: Spec's strongest single feature (e.g., Absolute Fortress, Omniscience)
- L20 Apex: Campaign-defining moment (e.g., Titan's Stand, Apotheosis)

Each step is clearly more impactful than the last. L20 is the most powerful individual ability any character can possess, appropriately gated at 1/week.
