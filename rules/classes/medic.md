---
game_data: true
name: Medic
primary_stats: [WIS, INT]
hit_die: d8
hp_base: 8
hp_per_level: 4
starting_humanity: 10
armor_proficiency: [Light, Medium]
weapon_proficiency: [Simple, Sidearms]
save_proficiencies: [Will, Fortitude]
skill_bonuses:
  - {skill: Medicine, bonus: 2}
  - {skill: Science, bonus: 2}
starting_ap: 15
role: Healer/Support
magic_type: "Half-caster (healing/support)"
level_1_features: [Field Medic, Triage, Preventive Care, Adrenaline Surge]
skill_trees:
  - name: Trauma Surgery
    focus: Healing
    abilities:
      - {name: Rapid Suture, ap_cost: 5, tier: 1, effect: "Field Medic healing +1d6"}
      - {name: Mass Triage, ap_cost: 10, tier: 2, effect: "Heal 2 allies simultaneously"}
      - {name: Battlefield Surgeon, ap_cost: 15, tier: 3, effect: "Restore downed ally to half HP"}
  - name: Pharmacology
    focus: Consumables
    abilities:
      - {name: Stimpack Crafter, ap_cost: 5, tier: 1, effect: "Craft stims during short rest"}
      - {name: Poison Crafter, ap_cost: 10, tier: 2, effect: "Create poisons and antidotes"}
      - {name: Performance Enhancers, ap_cost: 15, tier: 3, effect: "Grant ally +2 to attacks for 1 min"}
  - name: Field Support
    focus: Buffs
    abilities:
      - {name: Protective Injection, ap_cost: 5, tier: 1, effect: "Grant ally temp HP"}
      - {name: Greater Restoration, ap_cost: 10, tier: 2, effect: "Remove 1 condition"}
      - {name: Prevent Death, ap_cost: 15, tier: 3, effect: "Ally auto-stabilizes at 0 HP"}
features:
  - name: Field Medic
    level: 1
    action: "1 Action"
    frequency: "WIS mod times/Short Rest (min 2)"
    description: "Touch creature, restore 1d6+WIS mod HP. Does not provoke OA. Scales to 2d6+WIS at L5, 3d6+WIS at L10."
  - name: Triage
    level: 1
    action: Free Action
    frequency: "Always Active"
    description: "Learn exact HP of all visible allies within 60 ft. Identify poisoned, diseased, or ongoing conditions."
  - name: Preventive Care
    level: 1
    action: "1 Bonus Action"
    frequency: "WIS mod times/Short Rest (min 1)"
    description: "Touch creature, grant DR 2 against next damage source within 10 minutes. Scales to DR 3 at L5, DR 4 at L10. Max active = WIS mod (each on different creature)."
  - name: Adrenaline Surge
    level: 1
    action: Reaction
    frequency: "WIS mod times/Short Rest"
    description: "When you take damage, reduce the damage by your WIS modifier (minimum 1). You can use this reaction a number of times equal to your WIS modifier per short rest."
  - name: Emergency Stabilization
    level: 2
    action: "1 Action"
    frequency: At-Will
    description: "Touch dying creature at 0 HP. Stabilize and restore to 1 HP (conscious, prone). Target gains 1 exhaustion. Does not use Field Medic charges."
  - name: Combat Medic
    level: 3
    action: Passive
    frequency: Always
    description: "Healing does not provoke OA. Can move half speed while using Field Medic. Advantage on Medicine in combat. Healed allies can use reaction to move 5 ft (no OA)."
  - name: Attribute Improvement
    level: 4
    action: Passive
    frequency: Permanent
    description: "Increase one attribute by +2, or two attributes by +1 each. Maximum 20."
  - name: Miracle Worker
    level: 5
    action: "1 Action"
    frequency: "1/Long Rest"
    description: "Touch target. Choose one effect."
    choices:
      - {name: Resurrection, effect: "Creature dead within 1 minute returns to life at 1 HP with 1 exhaustion. Soul must be willing."}
      - {name: Cure All, effect: "End ALL conditions on one living creature: disease, poison, blind, deaf, paralyzed, stunned. Remove 1 curse, 1 exhaustion, or 1 chronic condition."}
spell_slots:
  - {level: 1, slots: [1, 0, 0, 0, 0]}
  - {level: 2, slots: [2, 0, 0, 0, 0]}
  - {level: 3, slots: [2, 1, 0, 0, 0]}
  - {level: 4, slots: [3, 2, 0, 0, 0]}
  - {level: 5, slots: [3, 2, 1, 0, 0]}
  - {level: 6, slots: [3, 3, 1, 0, 0]}
  - {level: 7, slots: [3, 3, 2, 0, 0]}
  - {level: 8, slots: [3, 3, 2, 1, 0]}
  - {level: 9, slots: [3, 3, 2, 1, 0]}
  - {level: 10, slots: [3, 3, 2, 2, 1]}
starting_cantrips: 2
cantrips_by_level:
  - {level: 1, count: 2}
  - {level: 5, count: 3}
specialization_details:
  - name: Field Surgeon
    role: Healing Focus
    features:
      - {name: Surgical Precision, level: 6, action: Passive, description: "Field Medic healing becomes 1d8+WIS. On heal, remove one minor condition: poisoned, bleeding, or blinded."}
      - {name: Triage Protocol, level: 6, action: Free Action, description: "Start of combat, designate one ally within 60 ft. They gain temp HP equal to WIS mod + proficiency bonus."}
      - {name: Emergency Surgery, level: 8, action: "3 Actions", description: "1/Short Rest. Touch, costs 1 medical supply. Heal 4d8+WIS and remove one lingering injury (present less than 24 hours)."}
      - {name: Adrenaline Injection, level: 8, action: "1 Action", description: "1/Short Rest. Inject ally. Advantage on all saves and +10 ft movement for 1 minute."}
      - {name: Lazarus Protocol, level: 10, action: "1 min procedure", description: "1/Long Rest. Revive creature dead up to 10 minutes at 1 HP + 3 exhaustion. OR touch living creature: restore all HP, remove all conditions, cure one lingering injury."}
  - name: Pharmacist
    role: Buffs/Chemistry
    features:
      - {name: Combat Stimulants, level: 6, action: "Bonus Action", description: "WIS mod times/Short Rest. Ally within 30 ft gains 1d8+WIS temp HP and +2 DV for 1 minute."}
      - {name: Antidote, level: 6, action: "1 Action", description: "Touch creature, end one poison or disease. 1/Short Rest free; additional uses cost 1 medical supply."}
      - {name: "Formula: Berserker Juice", level: 8, action: "1 Action", description: "Inject target. +1d4 damage, resistance to physical, cannot be frightened. 1 minute, then 2 exhaustion. Costs 1 medical supply."}
      - {name: "Formula: Clearwater", level: 8, action: "1 Action", description: "Inject target. Advantage on INT/WIS/PRE checks and saves for 1 hour. No side effects. Craft 1/Long Rest."}
      - {name: Masterwork Serum, level: 10, action: "During Rest", description: "1/Long Rest. Craft serum: +2 to any attribute for 24 hours, OR immunity to 1 damage type for 1 hour, OR regeneration 1d4 HP/round for 10 minutes."}
  - name: Plague Doctor
    role: Poison/Debuff
    features:
      - {name: Toxic Strike, level: 6, action: "On Hit", description: "1/turn on weapon hit, +1d6 poison. FORT save DC 8+WIS+prof or poisoned 1 minute (repeat save each turn)."}
      - {name: Plague Mask, level: 6, action: Passive, description: "Immune to disease. Advantage on poison saves. 1 action to diagnose any disease/poison."}
      - {name: Miasma, level: 8, action: "1 Action", description: "1/Short Rest. 15 ft radius cloud within 30 ft. 2d6 poison, FORT save DC 8+WIS+prof or poisoned. Concentration, 1 minute. Provides partial cover."}
      - {name: Weaken Endurance, level: 8, action: "1 Action", description: "Target within 30 ft. FORT save DC 8+WIS+prof or -2 to all saves for 1 minute. Repeat save each turn."}
      - {name: Outbreak, level: 10, action: Touch, description: "1/Long Rest. Target becomes Patient Zero. End of each turn, creatures within 10 ft FORT DC 18 or take 3d6 necrotic and become carriers for 1 minute. You and WIS mod allies are immune."}
specializations: [Field Surgeon, Pharmacist, Plague Doctor]
starting_equipment:
  - Simple weapon
  - Medium armor
  - Medical kit (20 uses)
  - 3 stims and surgical tools
---
# Medic

*In the Wasteland, death comes quick and mercy comes quicker. The medics are those rare souls who learned to stitch flesh, set bone, and brew remedies from the scraps of Old World medicine and post-Fall herbalism. They walk the razor's edge between healer and butcher, performing surgeries in blood-soaked tents with rusted instruments and homemade antiseptics. Most started as field medics for warbands, caravan surgeons, or plague-town doctors—people who saw so much suffering they either broke or became something harder.*

*A Medic's pack is a treasure trove: stims scavenged from military caches, bandages torn from pre-war linens, syringes filled with cocktails that blur the line between medicine and poison. They know which mushrooms stop bleeding, which Old World pills still work, and how to keep someone breathing when all hope is lost. In the gritty rest economy where a full recovery takes a week, a good Medic is worth their weight in clean water.*

*But healing in the Wasteland has a cost. Every saved life is a moral calculation—who gets the last stimpack? Who's worth the risk of infection? Medics carry the weight of every patient they couldn't save, every amputation they performed without anesthetic, every mercy killing. Some maintain their Humanity through rigid ethical codes. Others become cold, efficient triage machines. All of them know: in this world, keeping people alive is the hardest job there is.*

![A medic tends to the wounded in a makeshift field hospital, saving lives against impossible odds](/images/illustrations/medic-treating-wounded.png)

## Core Statistics

| Attribute | Value |
|-----------|-------|
| **Primary Stats** | WIS/INT |
| **Secondary Stat** | END |
| **Hit Die** | d8 |
| **Starting HP** | 8 + END modifier |
| **Starting Humanity** | 10 |
| **Starting AP** | 15 |

## Proficiencies

**Weapons:** Simple weapons, sidearms
**Armor:** Light armor, medium armor
**Saving Throws:** Will, Fortitude
**Skills:** Medicine +2, Science +2, plus 2 of your choice

## Starting Equipment

- Medical kit (20 uses, DC 10 Medicine check to stabilize)
- Medium armor (reinforced surgical gear + scavenged plates, DV 13 + AGI mod, max +2)
- Simple weapon of choice (scalpel, baton, or sidearm)
- Field bag containing: 3 stims (Tier 1, heal 1d8+2 HP each), 10 bandages, 1 vial of antiseptic
- Surgical tools (improvised, grants advantage on Medicine checks for surgery)

## Level Progression Features (Levels 1-5)

### Level 1: Field Medic

**Field Medic (Class Feature, not a spell):** As 1 action, touch a creature and restore 1d6 + WIS modifier HP. Uses per short rest: WIS modifier (minimum 2). This does not require a spell slot.

**Special:** This ability can be used during combat without provoking opportunity attacks from enemies adjacent to you (you've learned to work under fire). At Level 5, healing increases to **2d6 + WIS modifier**. At Level 10, it increases to **3d6 + WIS modifier**.

### Level 1: Triage

**Action Cost:** Free action / Passive
**Range:** 60 feet
**Effect:** Your trained eye instantly assesses battlefield injuries. You learn the exact current HP of all visible allies within range. Additionally, you can identify which visible creatures are poisoned, diseased, or suffering from ongoing conditions.

**Stabilization Expertise:** When you stabilize a dying creature (0 HP), they regain 1 HP immediately instead of remaining unconscious. You have advantage on Medicine checks to stabilize. **Note:** This applies only when you (the Medic) perform the stabilization. If an ally stabilizes you while you are dying, your Triage does not trigger — another creature must use your expertise, not benefit from it passively. However, if you stabilize yourself (e.g., via death saves reaching 3 successes), Triage does trigger and you regain 1 HP upon stabilizing.

**Special:** HP assessment is always active — you don't need to declare it. Your GM simply tells you ally HP totals when you ask. Note: When an ability triggers "when you heal a creature at 0 HP" (such as Adrenaline Spike), it still triggers even if Triage would bring them to 1 HP — resolve the healing ability first, then apply Triage's +1 HP if the creature would still be at 0 HP after healing.

### Level 1: Preventive Care

**Action Cost:** 1 bonus action
**Range:** Touch (5 feet)
**Frequency:** WIS modifier times per short rest (minimum 1)
**Effect:** You administer preventive treatment to an ally — wrapping joints, applying salves, or injecting a mild stimulant. The target gains **damage reduction 2** against the next source of damage they take within the next 10 minutes. At Level 5, this increases to DR 3; at Level 10, DR 4. You can have Preventive Care active on a number of creatures equal to your WIS modifier at once (each on a different creature — you cannot stack multiple applications on the same target).

**Special:** This ability gives you something to do proactively before combat starts. It does not require a spell slot and is separate from Field Medic.

### Level 1: Adrenaline Surge

**Action Cost:** Reaction (when you take damage)
**Frequency:** WIS modifier times per short rest
**Effect:** When you take damage, you can use your reaction to reduce the damage by your **Wisdom (WIS) modifier** (minimum reduction of 1). This represents a burst of combat instinct and adrenaline-fueled toughness that lets you shrug off part of an incoming blow.

**Special:** This stacks with Preventive Care's damage reduction if both are active. Adrenaline Surge applies after all other damage reductions and resistances. Combined with medium armor proficiency, this makes the Medic significantly more durable in the field — essential for a class that must stay alive to keep others alive.

### Level 2: Emergency Stabilization

**Action Cost:** 1 action
**Range:** Touch (5 feet)
**Effect:** You can instantly stabilize a dying creature (0 HP and making death saves). The creature regains **1 hit point** and is conscious but prone.

**Special:** This doesn't count against your Field Medic uses. You can do this even if you've exhausted other healing abilities. The creature gains 1 level of exhaustion (you shocked their system back to function—there are consequences).

### Level 3: Combat Medic

**Passive Feature**
**Effect:** You've trained to heal under fire. You gain the following benefits:

- Healing an ally with Field Medic or any healing spell doesn't provoke opportunity attacks from any enemies
- You can move up to half your speed while administering Field Medic (you work as you move)
- You have advantage on Medicine checks made during combat
- Allies you heal can immediately use their reaction to move 5 feet without provoking opportunity attacks (you pull them to cover)

### Level 4: Attribute Improvement

Increase one attribute by +2 or two attributes by +1 each (maximum 20).

### Level 5: Miracle Worker (Capstone)

**Action Cost:** 1 action
**Range:** Touch
**Frequency:** 1/long rest
**Effect:** You perform one of the following medical miracles:

**Option 1 - Resurrection:** Touch a creature that died within the last 1 minute. That creature returns to life with **1 hit point** and **1 level of exhaustion**. You cannot revive creatures that died of old age or are missing vital organs. The creature's soul must be willing to return.

**Option 2 - Cure All:** Touch one living creature. You immediately end ALL of the following conditions affecting them: diseased, poisoned, blinded, deafened, paralyzed, stunned. You can also neutralize one curse, remove one level of exhaustion, or cure one chronic condition (GM's discretion on what qualifies).

**Special:** This represents the peak of field medicine—part skill, part desperation, part miracle. Even in a world of magic, bringing someone back from death or curing the incurable is legendary.

## Skill Trees

### Trauma Surgery (Healing Power)

This tree focuses on raw healing capability and surgical intervention.

**Tier 1 Abilities (5 AP each):**
- **Rapid Suture:** Field Medic healing +1d6
- **Pressure Points:** Spend 1 action to grant one ally temporary HP = your WIS modifier + your level (lasts until next short rest)
- **Painkiller Injection:** When you heal an ally with Field Medic, they gain +2 to their next attack roll or saving throw

**Tier 2 Abilities (10 AP each, requires one Tier 1):**
- **Mass Triage:** Field Medic can now target up to 3 allies within 10 feet (roll healing once, each receives that amount)
- **Precision Surgery:** 1/short rest, perform a 10-minute surgery on a willing creature. Restore 2d8 + WIS modifier HP and remove one lingering wound or chronic condition
- **Adrenaline Spike:** When you use Field Medic on an ally at 0 HP, they gain +10 feet movement and advantage on their next attack (you flooded them with combat drugs)

**Tier 3 Abilities (15 AP each, requires Level 5+ and one Tier 2):**
- **Battlefield Surgeon:** You can use Field Medic as a bonus action (costs 1 of your 3 actions, but frees up the other 2 for combat)
- **Life Support:** You can use Emergency Stabilization on allies at 1-5 HP to immediately restore them to half their max HP (1/long rest, emergency procedures)

### Pharmacology (Crafting & Chemistry)

Master the creation of drugs, poisons, and chemical enhancements.

**Tier 1 Abilities (5 AP each):**
- **Stimpack Crafter:** During short rest, spend 1 hour and scavenged materials (DC 12 Medicine check) to create 1d4 stims (heal 1d8+2 HP when consumed as 1 action)
- **Toxin Resistance:** You have advantage on saves vs poison and disease. You can identify poisons/drugs by smell or taste (no check needed)
- **Combat Stim:** Craft combat enhancers. 1/short rest, inject an ally (1 action) to grant them +2 to attack rolls and +10 ft speed for 1 minute (afterward, they suffer 1 level of exhaustion)

**Tier 2 Abilities (10 AP each, requires one Tier 1):**
- **Poison Crafter:** Craft poisons during downtime (1 hour, DC 14 Medicine check). Basic poison: 2d6 damage, DC 13 Fortitude save for half. Can coat one weapon or 3 ammo.
- **Biochemical Analysis:** Spend 10 minutes examining a substance. Learn its exact properties, effects, and any antidotes. You can reverse-engineer drugs you encounter.
- **Enhanced Stimpacks:** Your crafted stims now heal 2d8+4 HP, and you can craft them during short rest without a check (automatic success)

**Tier 3 Abilities (15 AP each, requires Level 5+ and one Tier 2):**
- **Antidote Specialist:** 1 action, touch an ally—immediately end one poisoned or diseased condition. Additionally, you can craft universal antidotes (1 hour, 50cr materials, works on any toxin)
- **Performance Enhancers:** Craft military-grade combat drugs. During rest, create doses that grant: +4 MIG/AGI/END for 10 minutes (pick one per dose). After effect ends, 2 levels of exhaustion. Dangerous but effective.

### Field Support (Buffs & Condition Removal)

Keep your team fighting through protection and condition removal.

**Tier 1 Abilities (5 AP each):**
- **Protective Injection:** 1 action, touch ally—grant resistance to poison damage and advantage on Fortitude saves for 1 hour
- **Cleansing Touch:** When you use Field Medic, you can also remove one minor condition (prone, grappled, or 1 level of exhaustion)
- **Shield of Vitality:** 1 action, 2/short rest—target ally within 30 ft gains temporary HP = 2 x your WIS modifier (lasts 10 minutes)

**Tier 2 Abilities (10 AP each, requires one Tier 1):**
- **Greater Restoration:** 1/short rest, spend 1 action to touch an ally and remove one major condition: blinded, deafened, paralyzed, poisoned, or diseased
- **Combat Awareness Protocol:** All allies within 30 ft of you gain +1 to DV (you're shouting warnings and tactical advice)
- **Second Wind Injection:** 1/short rest, touch an ally—they immediately regain HP = half their hit die + your WIS modifier, and can reroll their next failed saving throw

**Tier 3 Abilities (15 AP each, requires Level 5+ and one Tier 2):**
- **Prevent Death:** 1/long rest, when an ally within 30 ft would drop to 0 HP, you can use your reaction to have them drop to 1 HP instead (you inject a last-resort stimpack from range)
- **Mass Cure:** 1/long rest, 1 action—all allies within 30 ft regain 2d8 HP and end one condition of their choice affecting them

## Magic: Half-Caster Progression

Medics are **half-casters** with access to healing and support magic. They learn the modular spell-crafting system but are restricted to cantrips with healing, protective, or support themes.

### Spell Slot Progression

| Level | 1st | 2nd | 3rd | 4th | 5th |
|-------|-----|-----|-----|-----|-----|
| 1 | 1 | — | — | — | — |
| 2 | 2 | — | — | — | — |
| 3 | 2 | 1 | — | — | — |
| 4 | 3 | 2 | — | — | — |
| 5 | 3 | 2 | 1 | — | — |
| 6 | 3 | 3 | 1 | — | — |
| 7 | 3 | 3 | 2 | — | — |
| 8 | 3 | 3 | 2 | 1 | — |
| 9 | 3 | 3 | 2 | 1 | — |
| 10 | 3 | 3 | 2 | 2 | 1 |

**Spell Slot Recovery:** Regain all expended spell slots on a long rest (1 week). During a short rest (8 hours), you can regain spell slots totaling up to half your Medic level (rounded down, minimum 1).

### Cantrip Access

Medics start with **2 cantrips** known. They can learn additional cantrips by spending **10 AP per cantrip**.

**Allowed Cantrip Themes:**
- Healing (restore HP, stabilize, regeneration)
- Protection (shields, resistance, barriers)
- Support (buffs, condition removal, temporary HP)
- Diagnosis (detect disease, sense injuries, identify poisons)

**Restricted:** Medics cannot learn damage cantrips or offensive spells through their half-caster progression. If they want offensive magic, they must buy it separately with AP (same as non-casters: 15 AP per cantrip).

### Spell Crafting

Medics use the modular spell-crafting system:
- **Base Cantrip** (Minor Heal, Ward, Cure, etc.)
- **Delivery Shape** (Touch, Ranged, Area, etc.)
- **Effect Modifier** (Increased healing, extra duration, condition removal, etc.)

The combination determines the final spell level and slot cost.

**Example Crafted Spells:**
- Minor Heal (cantrip) + Touch + Amplify (×2 effect) = 1st-level spell: Cure Wounds (2d8 healing, touch)
- Ward (cantrip) + Target Ally + Extended Duration = 1st-level spell: Shield of Faith (+2 DV, 10 minutes)
- Cure (cantrip) + Area (15 ft radius) = 2nd-level spell: Mass Cure Minor Wounds (1d6 healing to all allies in area)

## Sample AP Expenditures

Here's how a typical Medic might spend AP from Level 1-5:

**Level 1 (15 AP total):**
- Rapid Suture (Trauma Surgery Tier 1): 5 AP
- *Remaining: 10 AP*

**Level 2 (25 AP total):**
- Stimpack Crafter (Pharmacology Tier 1): 5 AP
- Protective Injection (Field Support Tier 1): 5 AP
- *Remaining: 10 AP (saved)*

**Level 3 (35 AP total):**
- Mass Triage (Trauma Surgery Tier 2): 10 AP
- Cleansing Touch (Field Support Tier 1): 5 AP
- *Remaining: 5 AP*

**Level 4 (45 AP total):**
- Greater Restoration (Field Support Tier 2): 10 AP
- *Remaining: 5 AP*

**Level 5 (55 AP total):**
- Battlefield Surgeon (Trauma Surgery Tier 3): 15 AP
- *Remaining: 0 AP*

---

## Advanced Specializations (Levels 6-10)

At level 6, the Medic selects one of three Advanced Specializations. These specializations unlock new skill tree branches, powerful abilities, and define the Medic's role in the wasteland's ongoing struggle.

### Field Surgeon (Healing Focus)

**Flavor:** Steady hands in the chaos. Field Surgeons can pull a bullet and stitch a wound while under fire. They are the lifeline of any squad, performing miracles with scalpel and suture where others see only death.

**Prerequisites:** Medic archetype, level 6

**Level 6 Features:**
- **Surgical Precision:** Your Field Medic healing die increases to 1d8+WIS (from the base Medic die). When you heal a creature, you can also remove one minor condition affecting them: poisoned, bleeding, or blinded.
- **Triage Protocol:** At the start of combat, as a free action, designate one ally within 60 ft. They immediately gain temporary HP equal to your WIS modifier + proficiency bonus. This represents your rapid assessment and preventative care.

**Level 8 Features:**
- **Emergency Surgery:** You can spend 3 actions and one medical supply to perform emergency surgery on a creature you can touch. The target is healed for 4d8 + your WIS modifier and you remove one lingering injury that has been present for less than 24 hours. This ability can be used once per short rest.
- **Adrenaline Injection:** As 1 action, you can inject an ally with a powerful stimulant. The target gains advantage on all saving throws and +10 ft movement speed for 1 minute. Usable once per short rest.

**Level 10 Capstone:**
- **Lazarus Protocol:** Once per long rest, you can perform a 1-minute medical procedure to revive a creature that has been dead for no more than 10 minutes. The creature returns to life with 1 HP and 3 levels of exhaustion. Alternatively, you can touch a living creature and heal them completely, restoring all lost HP, removing all conditions, and curing one lingering injury.

**New Skill Tree:** Surgery (advanced healing techniques, lingering injury treatment, condition removal, revival procedures)

---

### Pharmacist (Buffs/Drugs/Chemistry)

**Flavor:** Better living through chemistry. Pharmacists brew stims, combat drugs, poisons, and powerful concoctions from wasteland flora and pre-war chemical stockpiles. They believe every problem has a chemical solution.

**Prerequisites:** Medic archetype, level 6

**Level 6 Features:**
- **Combat Stimulants (Class Feature):** As 1 action (bonus), grant an ally within 30 feet temporary HP equal to 1d8 + WIS modifier and +2 DV for 1 minute. Uses per short rest: WIS modifier (minimum 1). This is NOT the same as using a stim item. During a short rest, you can also craft a number of combat stimulant doses equal to your WIS modifier.
- **Antidote:** As 1 action, you can touch a creature and end one poison or disease affecting them. You can use this ability once per short rest for free; additional uses require expending one medical supply.

**Level 8 Features:**
- **Formula: Berserker Juice:** You've perfected a volatile combat enhancer. When injected (1 action), the target gains +1d4 damage to all attacks, resistance to physical damage (bludgeoning, piercing, slashing), and cannot be frightened. The effect lasts 1 minute, after which the target gains 2 levels of exhaustion. Requires one medical supply per dose.
- **Formula: Clearwater:** You can create a cognitive enhancement serum. When injected (1 action), the target gains advantage on all INT, WIS, and PRE checks and saves for 1 hour with no side effects. You can craft one dose per long rest.

**Level 10 Capstone:**
- **Masterwork Serum:** Once per long rest, during any rest period, you can craft one masterwork serum. Choose one effect: +2 to any one attribute score for 24 hours, immunity to one damage type of your choice for 1 hour, or regeneration of 1d4 HP per round for 10 minutes (concentration not required).

**New Skill Tree:** Chemistry (drug crafting, poison synthesis, performance enhancers, chemical weapons, refinement techniques)

---

### Plague Doctor (Poison/Disease/Debuff)

**Flavor:** They know death intimately — and they've learned to weaponize it. Plague Doctors wield diseases, toxins, and biological terror as their arsenal. Behind their masks, they are scholars of mortality itself.

**Prerequisites:** Medic archetype, level 6

**Level 6 Features:**
- **Toxic Strike:** Once per turn when you hit a creature with a weapon attack, you can add 1d6 poison damage. The target must make a Fortitude save (DC = 8 + WIS + proficiency) or become poisoned for 1 minute. They can repeat the save at the end of each of their turns.
- **Plague Mask:** You are immune to disease and have advantage on saving throws against poison. You can diagnose any disease or poison by examining a patient or substance for 1 action, learning its nature, effects, and potential cures.

**Level 8 Features:**
- **Miasma:** As 1 action, you create a 15 ft radius cloud of toxic gas centered on a point you can see within 30 ft. Creatures in the area when it appears take 2d6 poison damage and must make a Fortitude save (DC = 8 + WIS + proficiency) or become poisoned. The cloud persists for 1 minute (concentration required) and provides partial cover. Usable once per short rest.
- **Weaken Endurance:** As 1 action, target one creature within 30 ft. They must make a Fortitude save (DC = 8 + WIS + proficiency) or suffer -2 to all saving throws for 1 minute. They can repeat the save at the end of each turn.

**Level 10 Capstone:**
- **Outbreak:** Once per long rest, you can touch a creature and infect them with a virulent disease, making them Patient Zero. At the end of each of their turns, all creatures within 10 ft of Patient Zero must make a Fortitude save (DC 18) or take 3d6 necrotic damage and become carriers themselves for 1 minute. The disease spreads from carriers to other creatures in the same way. You and designated allies (up to your WIS modifier) are immune to this disease.

**New Skill Tree:** Contagion (disease vectors, advanced toxicology, area denial tactics, debilitating biological effects, biological warfare)

---

## Level 16: Miracle Medicine (Archetype Ultimate)

Your medical expertise borders on the supernatural. Your Field Medic ability now heals 3d8 + WIS modifier HP. You can stabilize dying creatures within 30 ft without touching them (requires line of sight and 1 action (bonus)). Whenever you heal an ally, you may also remove one condition (blinded, deafened, poisoned, frightened, or stunned) from them.

## Level 17: Specialization Final Evolution

### Field Surgeon — Trauma Specialist

Your healing abilities no longer provoke opportunity attacks. You can perform Surgery in 10 minutes (instead of 1 hour). Your Surgery ability can now restore lost limbs and cure diseases. Creatures you bring back from 0 HP gain temporary HP equal to your WIS modifier + proficiency bonus.

### Pharmacist — Pharmacological Mastery

You can create advanced stims and drugs in 1 hour (instead of 8). Your stims have double duration. You gain immunity to poison and disease. Once per long rest, you can create a miracle drug: one dose that removes all exhaustion, cures all diseases, and grants advantage on all rolls for 1 hour.

### Plague Doctor — Pandemic

Your poisons and diseases can no longer be resisted by creatures with poison resistance (immunity is treated as resistance). When you apply a poison or disease, it spreads to all hostile creatures within 10 ft of the initial target (same save DC). You gain immunity to all poisons and diseases. Once per long rest, you can unleash a Virulent Outbreak: all enemies within 30 ft must make a Fortitude save (DC 8 + WIS + prof) or gain 2 levels of a wasting disease (disadvantage on all physical checks and saves, 2d6 necrotic damage per round, curable only by Greater Restoration or long rest).

## Level 20: Phoenix Protocol (Apex Ability)

**Once per long rest (1 week)**

You channel the ultimate healing power—the ability to resurrect life from death and restore any injury. This is your magnum opus.

**Effects:**
- Touch one creature (requires 1 action)
- The creature is immediately restored to full HP
- All conditions, diseases, poisons, curses, and lingering injuries are removed
- All levels of exhaustion are removed
- The creature gains advantage on all attack rolls, ability checks, and saving throws for 1 minute
- **If the creature is dead** (deceased within the last 1 hour): they return to life at full HP with all the above benefits

**Drawback:** The life force required for Phoenix Protocol is immense. You immediately gain 4 levels of exhaustion after using this ability. You may collapse immediately after saving someone's life—consider this carefully.
