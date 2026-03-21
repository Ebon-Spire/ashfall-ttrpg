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
starting_cp: 15
role: Healer/Support
magic_type: "Half-caster (healing/support)"
level_1_features: [Field Medic, Triage, Preventive Care, Adrenaline Surge]
skill_trees:
  - name: Trauma Surgery
    focus: Healing
    abilities:
      - {name: Rapid Suture, cp_cost: 5, tier: 1, effect: "Field Medic healing +1d6"}
      - {name: Mass Triage, cp_cost: 10, tier: 2, effect: "Heal 2 allies simultaneously"}
      - {name: Battlefield Surgeon, cp_cost: 15, tier: 3, effect: "Field Medic as free action, 1/turn"}
  - name: Pharmacology
    focus: Consumables
    abilities:
      - {name: Stimpack Crafter, cp_cost: 5, tier: 1, effect: "Craft stims during short rest"}
      - {name: Poison Crafter, cp_cost: 10, tier: 2, effect: "Create poisons and antidotes"}
      - {name: Performance Enhancers, cp_cost: 15, tier: 3, effect: "Grant ally +2 to attacks for 1 min"}
  - name: Field Support
    focus: Buffs
    abilities:
      - {name: Protective Injection, cp_cost: 5, tier: 1, effect: "Grant ally temp HP"}
      - {name: Greater Restoration, cp_cost: 10, tier: 2, effect: "Remove 1 condition"}
      - {name: Prevent Death, cp_cost: 15, tier: 3, effect: "Ally auto-stabilizes at 0 HP"}
  - name: Surgery
    focus: "Advanced Emergency Medicine (Field Surgeon only)"
    abilities:
      - {name: Trauma Triage, cp_cost: 5, tier: 1, effect: "Emergency Stabilization restores 1d6+WIS HP instead of 1 HP"}
      - {name: Surgical Precision, cp_cost: 5, tier: 1, effect: "Field Medic on creature attacked since start of your last turn: add +WIS mod bonus healing"}
      - {name: Field Sutures, cp_cost: 5, tier: 1, effect: "After Emergency Surgery, target gains +2 DV until start of your next turn"}
      - {name: Advanced Trauma Protocol, cp_cost: 10, tier: 2, requires: "one Surgery Tier 1", effect: "Emergency Surgery 1/SR can be used in 2 actions instead of 3"}
      - {name: Extended Care Window, cp_cost: 10, tier: 2, requires: "one Surgery Tier 1", effect: "Emergency Surgery removes injuries up to 72 hours old; DC 18 Medicine check for up to 7 days"}
      - {name: Stabilizing Surge, cp_cost: 10, tier: 2, requires: "one Surgery Tier 1", effect: "Field Medic at 0 HP: target regains consciousness, gains advantage on first action"}
      - {name: Miracle Hands, cp_cost: 15, tier: 3, requires: "Level 5+, one Surgery Tier 2", effect: "Emergency Surgery +3d8 healing; permanently usable as 2-action procedure"}
      - {name: Last Rites Prevention, cp_cost: 15, tier: 3, requires: "Level 5+, one Surgery Tier 2", effect: "1/LR Reaction: when ally within 30 ft drops to 0 HP, use Field Medic before death saves begin"}
  - name: Chemistry
    focus: "Advanced Formulas & Drug Crafting (Pharmacist only)"
    abilities:
      - {name: Extended Potency, cp_cost: 5, tier: 1, effect: "All drug durations doubled (Combat Stimulants 2 min, Berserker Juice 2 min, Clearwater 2 hours)"}
      - {name: Field Synthesis, cp_cost: 5, tier: 1, effect: "During short rest: DC 14 Medicine check to craft 1 dose of Berserker Juice or Clearwater"}
      - {name: Pharmacokinetic Precision, cp_cost: 5, tier: 1, effect: "Formulas with exhaustion consequences: 1-min warning, target may end effect early (0 exhaustion) or ride out (full exhaustion)"}
      - {name: "Formula: Ironhide", cp_cost: 10, tier: 2, requires: "one Chemistry Tier 1", effect: "New formula: +4 DV + resistance to 1 chosen damage type for 1 min, then 1 exhaustion. Costs 1 medical supply."}
      - {name: Chemical Precision, cp_cost: 10, tier: 2, requires: "one Chemistry Tier 1", effect: "All Formulas cost 1 fewer exhaustion level (Berserker Juice: 1 exhaustion instead of 2)"}
      - {name: Dual Formula Preparation, cp_cost: 10, tier: 2, requires: "one Chemistry Tier 1", effect: "1/LR: craft TWO different formulas during one rest instead of one"}
      - {name: Pharmacological Mastery, cp_cost: 15, tier: 3, requires: "Level 5+, one Chemistry Tier 2", effect: "All formulas usable 1 extra time per rest; save DC of your poisons/drugs +2"}
      - {name: Forbidden Compound, cp_cost: 15, tier: 3, requires: "Level 5+, one Chemistry Tier 2", effect: "1/LR: 1 action, inject target: +4 MIG/AGI/END for 1 min (to a maximum of 20 in each); then 3 exhaustion + 1 minor lingering injury"}
  - name: Contagion
    focus: "Disease Vectors & Biological Control (Plague Doctor only)"
    abilities:
      - {name: Virulence Boost, cp_cost: 5, tier: 1, effect: "Toxic Strike DC +2; poisoned creatures have disadvantage on repeat saves"}
      - {name: Contagion Vector, cp_cost: 5, tier: 1, effect: "Your poisoned targets are carriers: adjacent creatures make Fortitude DC 10 or take 1d4 poison/turn"}
      - {name: Miasma Mastery, cp_cost: 5, tier: 1, effect: "Miasma deals 3d6 poison; reposition cloud to new point within 30 ft as free action each turn"}
      - {name: Plague Touch, cp_cost: 10, tier: 2, requires: "one Contagion Tier 1", effect: "WIS mod times/SR: touch attack, Fortitude DC 8+WIS+prof or stunned/blinded/speed 0 (your choice) until end of next turn"}
      - {name: Resurgent Pathogen, cp_cost: 10, tier: 2, requires: "one Contagion Tier 1", effect: "Creatures that save to end your poison/disease must immediately re-save (once per creature per encounter)"}
      - {name: Weaponized Immunity, cp_cost: 10, tier: 2, requires: "one Contagion Tier 1", effect: "1/SR: exhale 15 ft radius pathogen cloud (centered on self), Fortitude DC 8+WIS+prof or 2d6 poison + poisoned; you immune"}
      - {name: Pandemic Strain, cp_cost: 15, tier: 3, requires: "Level 5+, one Contagion Tier 2", effect: "Outbreak DC raised to 20; carriers suffer -2 all saves; you can designate WIS mod+1 immune allies"}
      - {name: Biological Battlefield, cp_cost: 15, tier: 3, requires: "Level 5+, one Contagion Tier 2", effect: "1/SR: 1 action, transmit your active disease/poison to a creature adjacent to an infected creature — no save required"}
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
      - {name: Trauma Response, level: 6, action: Reaction, description: "When ally within 30 ft drops to half HP, move to them (no OA) and Field Medic as reaction. 1/round."}
      - {name: Triage Assessment, level: 6, action: "Free Action", description: "Assess 1 ally within 30 ft: learn HP/conditions. Healing a triaged ally also removes 1 condition (Bleeding/Poisoned/Frightened/Dazed/Blinded/Deafened)."}
      - {name: Emergency Surgery, level: 8, action: "3 Actions", description: "1/Short Rest. Touch, costs 1 medical supply. Heal 4d8+WIS and remove one lingering injury (present less than 24 hours)."}
      - {name: Adrenaline Injection, level: 8, action: "1 Action", description: "1/Short Rest. Inject ally. Advantage on all saves and +10 ft movement for 1 minute."}
      - {name: Lazarus Protocol, level: 10, action: "1 min procedure", description: "1/Long Rest. Revive creature dead up to 10 minutes at 1 HP + 3 exhaustion. OR touch living creature: restore all HP, remove all conditions, cure one lingering injury."}
  - name: Pharmacist
    role: Buffs/Chemistry
    features:
      - {name: Combat Stimulants, level: 6, action: "1 Action", description: "WIS mod times/Short Rest. Ally within 30 ft gains 1d8+WIS temp HP and +2 DV for 1 minute."}
      - {name: Antidote, level: 6, action: "1 Action", description: "Touch creature, end one poison or disease. 1/Short Rest free; additional uses cost 1 medical supply."}
      - {name: "Formula: Berserker Juice", level: 8, action: "1 Action", description: "Inject target. +1d4 damage, resistance to physical, cannot be frightened. 1 minute, then 2 exhaustion. Costs 1 medical supply."}
      - {name: "Formula: Clearwater", level: 8, action: "1 Action", description: "Inject target. Advantage on INT/WIS/PRE checks and saves for 1 hour. No side effects. Craft 1/Long Rest."}
      - {name: Masterwork Serum, level: 10, action: "During Rest", description: "1/Long Rest. Craft serum during any rest. Choose one: (A) Combat Accelerant — target gains an extra action each turn for 1 minute, then suffers 3 exhaustion; (B) Anti-Necrotix — instantly end all conditions, diseases, poisons, and lingering injuries on one creature OR grant one creature immunity to death saves failure for 1 minute and 1 level of exhaustion; (C) Cascade Formula — for 1 minute, whenever you heal a creature with any ability, up to 1d4 nearby allies of your choice within 15 ft also receive that healing."}
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

> **Recommended Build Guide — Classless System**
> This file describes the **Medic recommended build**: a curated path through Ashfall's shared skill trees designed for this build's core fantasy. Under the current rules, you are **not locked to this build**. Choose a **chassis** for your starting stats and proficiencies, then spend **Character Points (CP)** in any skill trees that match your character concept.
>
> - **Chassis selection and starting stats:** see [Chassis](../chassis.md)
> - **CP economy, spending rules, and milestones:** see [Character Points](../character-points.md)
> - **Full skill tree catalog:** see [Skill Trees](../skill-trees.md)
>
> The ability descriptions, skill tree layouts, and feature details in this file remain the authoritative rules reference for those abilities. The CP values listed in the skill trees are the costs for purchasing abilities.

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
| **Starting CP** | 15 |

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

**Special:** This stacks with Preventive Care's damage reduction if both are active. Adrenaline Surge applies after all other damage reductions and resistances. Combined with medium armor proficiency, this makes the Medic significantly more durable in the field — essential for a build that must stay alive to keep others alive.

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

**Tier 1 Abilities (5 CP each):**
- **Rapid Suture:** Field Medic healing +1d6
- **Pressure Points:** Spend 1 action to grant one ally temporary HP = your WIS modifier + your level (lasts until next short rest)
- **Painkiller Injection:** When you heal an ally with Field Medic, they gain +2 to their next attack roll or saving throw

**Tier 2 Abilities (10 CP each, requires one Tier 1):**
- **Mass Triage:** Field Medic can now target up to 3 allies within 10 feet (roll healing once, each receives that amount)
- **Precision Surgery:** 1/short rest, perform a 10-minute surgery on a willing creature. Restore 2d8 + WIS modifier HP and remove one lingering wound or chronic condition
- **Adrenaline Spike:** When you use Field Medic on an ally at 0 HP, they gain +10 feet movement and advantage on their next attack (you flooded them with combat drugs)

**Tier 3 Abilities (15 CP each, requires Level 5+ and one Tier 2):**
- **Battlefield Surgeon:** Once per turn, you can use Field Medic as a **free action** (0 action cost). All other aspects of Field Medic (range, targets, healing roll) remain the same. When healing under fire, your technique is precise enough that it leaves all three of your actions free for combat, movement, or additional abilities.
- **Life Support:** You can use Emergency Stabilization on allies at 1-5 HP to immediately restore them to half their max HP (1/long rest, emergency procedures)

### Pharmacology (Crafting & Chemistry)

Master the creation of drugs, poisons, and chemical enhancements.

**Tier 1 Abilities (5 CP each):**
- **Stimpack Crafter:** During short rest, spend 1 hour and scavenged materials (DC 12 Medicine check) to create 1d4 stims (heal 1d8+2 HP when consumed as 1 action)
- **Toxin Resistance:** You have advantage on saves vs poison and disease. You can identify poisons/drugs by smell or taste (no check needed)
- **Combat Stim:** Craft combat enhancers. 1/short rest, inject an ally (1 action) to grant them +2 to attack rolls and +10 ft speed for 1 minute (afterward, they suffer 1 level of exhaustion)

**Tier 2 Abilities (10 CP each, requires one Tier 1):**
- **Poison Crafter:** Craft poisons during downtime (1 hour, DC 14 Medicine check). Basic poison: 2d6 damage, DC 13 Fortitude save for half. Can coat one weapon or 3 ammo.
- **Biochemical Analysis:** Spend 10 minutes examining a substance. Learn its exact properties, effects, and any antidotes. You can reverse-engineer drugs you encounter.
- **Enhanced Stimpacks:** Your crafted stims now heal 2d8+4 HP, and you can craft them during short rest without a check (automatic success)

**Tier 3 Abilities (15 CP each, requires Level 5+ and one Tier 2):**
- **Antidote Specialist:** 1 action, touch an ally—immediately end one poisoned or diseased condition. Additionally, you can craft universal antidotes (1 hour, 50cr materials, works on any toxin)
- **Performance Enhancers:** Craft military-grade combat drugs. During rest, create doses that grant: +4 MIG/AGI/END for 10 minutes (pick one per dose). After effect ends, 2 levels of exhaustion. Dangerous but effective.

### Field Support (Buffs & Condition Removal)

Keep your team fighting through protection and condition removal.

**Tier 1 Abilities (5 CP each):**
- **Protective Injection:** 1 action, touch ally—grant resistance to poison damage and advantage on Fortitude saves for 1 hour
- **Cleansing Touch:** When you use Field Medic, you can also remove one minor condition (prone, grappled, or 1 level of exhaustion)
- **Shield of Vitality:** 1 action, 2/short rest—target ally within 30 ft gains temporary HP = 2 x your WIS modifier (lasts 10 minutes)

**Tier 2 Abilities (10 CP each, requires one Tier 1):**
- **Greater Restoration:** 1/short rest, spend 1 action to touch an ally and remove one major condition: blinded, deafened, paralyzed, poisoned, or diseased
- **Combat Awareness Protocol:** All allies within 30 ft of you gain +1 to DV (you're shouting warnings and tactical advice)
- **Second Wind Injection:** 1/short rest, touch an ally—they immediately regain HP = half their hit die + your WIS modifier, and can reroll their next failed saving throw

**Tier 3 Abilities (15 CP each, requires Level 5+ and one Tier 2):**
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

Medics start with **2 cantrips** known. They can learn additional cantrips by spending **10 CP per cantrip**.

**Allowed Cantrip Themes:**
- Healing (restore HP, stabilize, regeneration)
- Protection (shields, resistance, barriers)
- Support (buffs, condition removal, temporary HP)
- Diagnosis (detect disease, sense injuries, identify poisons)

**Restricted:** Medics cannot learn damage cantrips or offensive spells through their half-caster progression. If they want offensive magic, they must buy it separately with CP (same as non-casters: 15 CP per cantrip).

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

## Sample CP Expenditures

Here's how a typical Medic might spend CP from Level 1-5:

**Level 1 (15 CP total):**
- Rapid Suture (Trauma Surgery Tier 1): 5 CP
- *Remaining: 10 CP*

**Level 2 (25 CP total):**
- Stimpack Crafter (Pharmacology Tier 1): 5 CP
- Protective Injection (Field Support Tier 1): 5 CP
- *Remaining: 10 CP (saved)*

**Level 3 (35 CP total):**
- Mass Triage (Trauma Surgery Tier 2): 10 CP
- Cleansing Touch (Field Support Tier 1): 5 CP
- *Remaining: 5 CP*

**Level 4 (45 CP total):**
- Greater Restoration (Field Support Tier 2): 10 CP
- *Remaining: 5 CP*

**Level 5 (55 CP total):**
- Battlefield Surgeon (Trauma Surgery Tier 3): 15 CP
- *Remaining: 0 CP*

---

## Advanced Specializations (Levels 6-10)

At level 6, the Medic selects one of three Advanced Specializations. These specializations unlock new skill tree branches, powerful abilities, and define the Medic's role in the wasteland's ongoing struggle.

### Field Surgeon (Healing Focus)

**Flavor:** Steady hands in the chaos. Field Surgeons can pull a bullet and stitch a wound while under fire. They are the lifeline of any squad, performing miracles with scalpel and suture where others see only death.

**Prerequisites:** Medic build, level 6

**Level 6 Features:**
- **Trauma Response** (Reaction): When an ally within **30 feet** takes damage that reduces them to **half HP or below**, you can use your **reaction** to immediately move up to your speed toward that ally. **This movement does not provoke opportunity attacks.** If you end this movement **adjacent to them** (within 5 feet), you can make one **Field Medic check** on them as part of this reaction. This healing follows all normal Field Medic rules (uses your healing die, expends a use of Field Medic, requires a medical kit or supplies if applicable). You must have a use of Field Medic available to use the healing portion; you can still use the movement portion even without a Field Medic use remaining. Trauma Response can trigger **once per round** (not once per turn — it's a reaction).
- **Triage Assessment** (Free Action): At the **start of your turn**, as a **free action**, you can assess one ally within **30 feet**. Until the start of your next turn, you know their **exact current HP and maximum HP**, every **condition** currently affecting them and its source, and whether they are affected by any **poison**, **disease**, or **bleeding** effect and its severity. When you use a healing ability (Field Medic, Emergency Surgery, or any Medic feature that restores HP) on a **triaged ally**, you can also **remove one condition** affecting them: **Bleeding**, **Poisoned**, **Frightened**, **Dazed**, **Blinded**, or **Deafened**. You cannot remove Exhaustion, Dying, Stunned, Paralyzed, or Petrified (these require more powerful intervention — see Emergency Surgery at L8). You can only have **one ally triaged** at a time; assessing a new ally replaces the previous triage.

**Level 8 Features:**
- **Emergency Surgery:** You can spend 3 actions and one medical supply to perform emergency surgery on a creature you can touch. The target is healed for 4d8 + your WIS modifier and you remove one lingering injury that has been present for less than 24 hours. This ability can be used once per short rest.
- **Adrenaline Injection:** As 1 action, you can inject an ally with a powerful stimulant. The target gains advantage on all saving throws and +10 ft movement speed for 1 minute. Usable once per short rest.

**Level 10 Capstone:**
- **Lazarus Protocol:** Once per long rest, you can perform a 1-minute medical procedure to revive a creature that has been dead for no more than 10 minutes. The creature returns to life with 1 HP and 3 levels of exhaustion. Alternatively, you can touch a living creature and heal them completely, restoring all lost HP, removing all conditions, and curing one lingering injury.

**New Skill Tree: Surgery** *(Field Surgeon only, requires level 6+)*

The Surgery tree transforms a Field Surgeon from a good healer into a battlefield trauma physician — someone who can pull allies back from death faster, treat injuries that would otherwise take weeks to heal, and keep a dying teammate alive long enough to matter.

**Tier 1 Abilities (5 CP each):**
- **Trauma Triage (5 CP):** Your Emergency Stabilization now restores **1d6 + WIS modifier HP** to the stabilized creature (instead of 1 HP). They still gain 1 level of exhaustion, but they're conscious and mobile — not just not-dead.
- **Surgical Precision (5 CP):** When you use Field Medic on a creature that was attacked since the start of your last turn, add your **WIS modifier as bonus healing** on top of the normal roll. You've identified the specific trauma and addressed it directly.
- **Field Sutures (5 CP):** When you use Emergency Surgery, the patient gains **+2 DV** until the start of your next turn. You've reinforced their wounds with pressure bandages and repositioned them for better cover.

**Tier 2 Abilities (10 CP each, requires one Surgery Tier 1):**
- **Advanced Trauma Protocol (10 CP):** Once per short rest, you can perform Emergency Surgery using only **2 actions** instead of 3. The medical supply cost and healing remain unchanged. Your other Emergency Surgery uses that short rest still require 3 actions.
- **Extended Care Window (10 CP):** Emergency Surgery can now remove lingering injuries that have been present for up to **72 hours** (instead of 24). Additionally, you can attempt to treat injuries up to **7 days old** with a successful Medicine DC 18 check. Old war wounds, chronic injuries — a master surgeon sees what others see as permanent.
- **Stabilizing Surge (10 CP):** When you use Field Medic on a creature at 0 HP (stabilizing them), the creature regains consciousness **immediately** upon being healed and gains **advantage on their first action** this turn. You haven't just saved them — you've thrown them back into the fight.

**Tier 3 Abilities (15 CP each, requires Level 5+ and one Surgery Tier 2):**
- **Miracle Hands (15 CP):** Your Emergency Surgery heals an additional **3d8 HP**. Additionally, you can now perform Emergency Surgery as a **2-action procedure permanently** — not limited to once per short rest. The 3-action version still exists if you prefer to maximize other actions.
- **Last Rites Prevention (15 CP):** Once per long rest, when an ally within 30 feet is reduced to 0 HP, you can use your **reaction** to immediately use Field Medic on them — applying the healing **before death saves begin**. If the healing brings them above 0 HP, they remain conscious. *Note: This is distinct from Field Support T3 "Prevent Death" — that prevents 0 HP from occurring; this responds after 0 HP is reached. A Field Surgeon with both abilities has two independent life-saving reactions per long rest.*

---

### Pharmacist (Buffs/Drugs/Chemistry)

**Flavor:** Better living through chemistry. Pharmacists brew stims, combat drugs, poisons, and powerful concoctions from wasteland flora and pre-war chemical stockpiles. They believe every problem has a chemical solution.

**Prerequisites:** Medic build, level 6

**Level 6 Features:**
- **Combat Stimulants (Class Feature):** As **1 action**, grant an ally within 30 feet temporary HP equal to 1d8 + WIS modifier and +2 DV for 1 minute. Uses per short rest: WIS modifier (minimum 1). This is NOT the same as using a stim item. During a short rest, you can also craft a number of combat stimulant doses equal to your WIS modifier.
- **Antidote:** As 1 action, you can touch a creature and end one poison or disease affecting them. You can use this ability once per short rest for free; additional uses require expending one medical supply.

**Level 8 Features:**
- **Formula: Berserker Juice:** You've perfected a volatile combat enhancer. When injected (1 action), the target gains +1d4 damage to all attacks, resistance to physical damage (bludgeoning, piercing, slashing), and cannot be frightened. The effect lasts 1 minute, after which the target gains 2 levels of exhaustion. Requires one medical supply per dose.
- **Formula: Clearwater:** You can create a cognitive enhancement serum. When injected (1 action), the target gains advantage on all INT, WIS, and PRE checks and saves for 1 hour with no side effects. You can craft one dose per long rest.

**Level 10 Capstone:**
- **Masterwork Serum:** Once per long rest, during any rest period, you can craft one **masterwork serum** — a compound beyond anything available commercially. Choose one of the following formulas:

  **Option A — Combat Accelerant:** When injected (1 action), the target gains an **additional action** each turn for **1 minute** (total: 4 actions per turn). This action can be used for any purpose: attacks, movement, abilities, or anything else. When the effect ends, the target immediately gains **3 levels of exhaustion** (the physical cost of operating beyond biological limits). Choose carefully — this is the ability that changes the outcome of a fight, and it has a real price.

  **Option B — Anti-Necrotix:** When administered (1 action, touch), choose one effect:
  - **Restoration:** Immediately end all conditions, diseases, poisons, and lingering injuries affecting the target. Remove 1 level of exhaustion.
  - **Preservation:** The target is immune to failing death saves for **1 minute** and gains 1 level of exhaustion. They can still be reduced to 0 HP and make death saves — but no roll can cause them to fail three times and die. A Pharmacist prevents death; a Field Surgeon reverses it.

  **Option C — Cascade Formula:** When administered (1 action, self-inject or touch ally), for **1 minute**, whenever you heal any creature with **any healing ability** (Field Medic, Combat Stimulants, spell slots, or any other healing source), **up to 1d4 nearby allies of your choice within 15 feet** of the healed creature also receive the same healing amount. Each use of a healing ability can trigger this cascade once. You become a walking triage network for the duration of the most critical minute of the fight.

  The serum must be crafted during a short or long rest (you prepare for what you expect to face) and is consumed on use. You can only have one masterwork serum prepared at a time.

**New Skill Tree: Chemistry** *(Pharmacist only, requires level 6+)*

The Chemistry tree is about two things: making your formulas last longer and hit harder, and expanding your formula repertoire so you have the right chemical for every situation. A Pharmacist who invests here doesn't just brew better stims — they become a walking pharmaceutical factory with an answer to every battlefield problem.

**Tier 1 Abilities (5 CP each):**
- **Extended Potency (5 CP):** All drug durations you create are doubled: Combat Stimulants last **2 minutes** instead of 1. Berserker Juice's effects last **2 minutes** (exhaustion still triggers at the 2-minute mark). Clearwater lasts **2 hours** instead of 1.
- **Field Synthesis (5 CP):** During a short rest, you can attempt to craft one dose of **Berserker Juice or Clearwater** from available materials (Medicine DC 14 check). On a success, you produce one dose. On a failure, the materials are used but no dose is created.
- **Pharmacokinetic Precision (5 CP):** When you inject a target with a formula that carries an exhaustion consequence (Berserker Juice, Formula: Ironhide, Forbidden Compound), the target has a **1-minute warning period** as they feel the drug beginning to fade. During this window, they can choose to **voluntarily end the effect early** (0 exhaustion) or ride it to full duration (full exhaustion applies normally). This puts the choice in the player's hands.

**Tier 2 Abilities (10 CP each, requires one Chemistry Tier 1):**
- **Formula: Ironhide (10 CP):** You've developed a defensive compound. As 1 action, inject a target to grant them **+4 DV** and **resistance to one damage type** you specify at injection (physical, fire, cold, poison, etc.) for 1 minute. After: 1 level of exhaustion. Requires 1 medical supply per dose. Craft 1/long rest. *(Pharmacokinetic Precision applies.)*
- **Chemical Precision (10 CP):** Your formula synthesis is more refined — reduce the exhaustion cost of all your Formulas by **1 level** (Berserker Juice: 1 exhaustion instead of 2; Ironhide: 0 exhaustion after effect).
- **Dual Formula Preparation (10 CP):** Once per long rest, during a rest period you can craft **two different formulas** instead of one. The second formula must be a different type than the first.

**Tier 3 Abilities (15 CP each, requires Level 5+ and one Chemistry Tier 2):**
- **Pharmacological Mastery (15 CP):** All Formulas can be used **one additional time per rest** (Berserker Juice: 2 uses per long rest; Ironhide: 2/LR; Combat Stimulants: WIS modifier + 1 uses per short rest). The save DC of any poison or drug you create increases by **2**.
- **Forbidden Compound (15 CP):** Once per long rest, as 1 action, inject a target with a compound that pushes human biology to its absolute limit. The target gains **+4 MIG, +4 AGI, and +4 END** (to a maximum of 20 in each) for 1 minute. When the effect ends: **3 levels of exhaustion** and **1 minor lingering injury** (roll randomly). No amount of chemical expertise prevents this cost — you are asking the body to do what bodies cannot do. *(Pharmacokinetic Precision applies.)*

---

### Plague Doctor (Poison/Disease/Debuff)

**Flavor:** They know death intimately — and they've learned to weaponize it. Plague Doctors wield diseases, toxins, and biological terror as their arsenal. Behind their masks, they are scholars of mortality itself.

**Prerequisites:** Medic build, level 6

**Level 6 Features:**
- **Toxic Strike:** Once per turn when you hit a creature with a weapon attack, you can add 1d6 poison damage. The target must make a Fortitude save (DC = 8 + WIS + proficiency) or become poisoned for 1 minute. They can repeat the save at the end of each of their turns.
- **Plague Mask:** You are immune to disease and have advantage on saving throws against poison. You can diagnose any disease or poison by examining a patient or substance for 1 action, learning its nature, effects, and potential cures.

**Level 8 Features:**
- **Miasma:** As 1 action, you create a 15 ft radius cloud of toxic gas centered on a point you can see within 30 ft. Creatures in the area when it appears take 2d6 poison damage and must make a Fortitude save (DC = 8 + WIS + proficiency) or become poisoned. The cloud persists for 1 minute (concentration required) and provides partial cover. Usable once per short rest.
- **Weaken Endurance:** As 1 action, target one creature within 30 ft. They must make a Fortitude save (DC = 8 + WIS + proficiency) or suffer -2 to all saving throws for 1 minute. They can repeat the save at the end of each turn.

**Level 10 Capstone:**
- **Outbreak:** Once per long rest, you can touch a creature and infect them with a virulent disease, making them Patient Zero. At the end of each of their turns, all creatures within 10 ft of Patient Zero must make a Fortitude save (DC 18) or take 3d6 necrotic damage and become carriers themselves for 1 minute. The disease spreads from carriers to other creatures in the same way. You and designated allies (up to your WIS modifier) are immune to this disease.

**New Skill Tree: Contagion** *(Plague Doctor only, requires level 6+)*

The Contagion tree is about two things: making your poisons and diseases harder to resist, and spreading them. A Plague Doctor who invests here turns every combat into a game of infection control that only they can win. Every poisoned creature becomes a vector. Every failed save spreads the damage.

**Tier 1 Abilities (5 CP each):**
- **Virulence Boost (5 CP):** Your Toxic Strike save DC increases by **2** (total DC: 10 + WIS + proficiency). Creatures that fail their initial Fortitude save against Toxic Strike have **disadvantage on their repeat saves** each turn. Harder to resist, harder to shake.
- **Contagion Vector (5 CP):** Creatures **poisoned by your Toxic Strike or Miasma** become infection vectors. Once per turn, when a carrier is adjacent to another creature, that creature must make a **Fortitude DC 10 save** or take **1d4 poison damage**. This spread lasts as long as the carrier remains poisoned.
- **Miasma Mastery (5 CP):** Your Miasma now deals **3d6 poison damage** (instead of 2d6). Additionally, as a **free action** at the start of each of your turns, you can reposition the Miasma cloud to a new point within **30 feet** (no concentration check required for movement). Miasma is no longer a static hazard; it follows the battlefield.

**Tier 2 Abilities (10 CP each, requires one Contagion Tier 1):**
- **Plague Touch (10 CP):** As 1 action, touch a creature (must be adjacent). The creature makes a **Fortitude save (DC 8 + WIS + proficiency)** or you apply one of the following biological debuffs (your choice at time of use): *Nerve Toxin* (stunned until end of your next turn), *Ocular Compound* (blinded until end of your next turn), or *Muscle Atrophy* (speed reduced to 0 until end of your next turn). Usable **WIS modifier times per short rest**.
- **Resurgent Pathogen (10 CP):** When a creature you have poisoned or diseased successfully saves to end the condition, they must **immediately make a second save** at the same DC. On failure, the condition returns as if freshly applied (duration resets). This second-chance save only triggers **once per creature per encounter**.
- **Weaponized Immunity (10 CP):** Once per short rest, as **1 action**, exhale a concentrated pathogen cloud centered on yourself (**15-foot radius**). All creatures in the area must make a **Fortitude save (DC 8 + WIS + proficiency)** or take **2d6 poison damage** and become **poisoned**. You are immune to this effect.

**Tier 3 Abilities (15 CP each, requires Level 5+ and one Contagion Tier 2):**
- **Pandemic Strain (15 CP):** Your Outbreak (L10 capstone) becomes harder to resist: the save DC increases from 18 to **20**. Creatures that become carriers through Outbreak suffer **−2 to all saving throws** for the duration. You can designate **WIS modifier + 1** allies as immune (instead of just WIS modifier).
- **Biological Battlefield (15 CP):** Once per short rest, as **1 action**, you can transmit **one active disease or poison condition** you control (including Toxic Strike poisoning or an active Outbreak infection) to **one creature within 30 ft that is adjacent to an already-infected creature**. This transmission requires **no saving throw** — the proximity transfer is guaranteed. A battlefield of infected creatures is a battlefield you control.

---

## Level 16: Miracle Medicine (Build Capstone)

Your medical expertise borders on the supernatural. Your Field Medic ability now heals 3d8 + WIS modifier HP. You can stabilize dying creatures within 30 ft without touching them (requires line of sight and **1 action**). Whenever you heal an ally, you may also remove one condition (blinded, deafened, poisoned, frightened, or stunned) from them.

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
