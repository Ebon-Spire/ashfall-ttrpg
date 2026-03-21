# Crafting

![A bear mutant blacksmith hammers glowing metal at a makeshift forge, crafting weapons for wasteland survivors](/images/illustrations/bear-mutant-blacksmith.png)

In the wasteland, you can't just walk into a shop and buy what you need. The best gear is built by hand — forged from salvage, wired from scavenged circuits, or infused with volatile magical energy. This chapter consolidates all crafting rules into a single reference: mundane fabrication, magical enchanting, equipment modification, and the formulas that make it all possible.

For item statistics and prices, see [Equipment](equipment.md). For field repairs during exploration, see [Exploration & Survival](exploration.md). For downtime capital costs and base upgrades that support crafting, see [Downtime](downtime.md).

---

## Crafting Fundamentals

### Who Can Craft

Any character with proficiency in the relevant skill can attempt to craft:

- **Technology** — Weapons, armor, tools, electronics, mechanical devices
- **Science** — Ammunition, stims, chemicals, explosives, pharmaceuticals
- **Arcana** — Enchantments, sigils, magical items, ritual components
- **Medicine** — Advanced stims, serums, antidotes, surgical preparations

You can only craft items you have proficiency to use. A character without weapon proficiency can't craft weapons, even with Technology proficiency.

### Tools and Facilities

| Facility | Tier Access | Availability |
|----------|-------------|--------------|
| Basic toolkit | Tier 1-2 | Portable, fits in a pack. Included in Technician starting gear. |
| Gunsmithing tools | Ammo and firearms | Portable. 50 cr or 3 Salvage to acquire. |
| Chemistry set | Stims and chemicals | Portable. 75 cr or 4 Salvage to acquire. |
| Workshop | Tier 1-3 | Requires a settlement or base upgrade. |
| Forge | Tier 1-4 melee/armor | Requires Workshop. Base upgrade or settlement. |
| Laboratory | Tier 1-4 chemicals/electronics | Requires Generator. Base upgrade or city facility. |
| Arcane Sanctum | Magical items | Base upgrade. +2 to Arcana crafting checks. |
| Masterwork Facility | Tier 5+ | City-scale facility or faction access. Extremely rare. |

Attempting to craft without the required facility imposes **disadvantage** on the check and limits you to one tier below the facility's maximum.

### Base Crafting Table

| Item Tier | DC | Time | Credit Cost | Capital Cost |
|-----------|----|------|-------------|--------------|
| Tier 1 | DC 10 | 1 hour | 5 cr | 1 Salvage |
| Tier 2 | DC 13 | 4 hours | 25 cr | 2 Salvage |
| Tier 3 | DC 16 | 1 day | 100 cr | 5 Salvage + 1 Tech |
| Tier 4 | DC 19 | 3 days | 500 cr | 10 Salvage + 3 Tech |
| Tier 5 | DC 22 | 5 days | 2,000 cr | 20 Salvage + 8 Tech |
| Tier 6 | DC 24 | 10 days | 5,000 cr | 40 Salvage + 15 Tech |
| Tier 7 | DC 26 | 20 days | 12,000 cr | 80 Salvage + 30 Tech |

Crafting time can be split across multiple sessions. Track hours/days completed.

**Crafting Limit:** A character can complete a maximum of **3 crafting projects** per downtime week (long rest period), regardless of how quickly individual projects could be finished. Complex projects that span multiple days count as one project.

**Consumables** (ammunition, stims, single-use items) cost **half** the listed credit or capital cost to craft.

### Crafting Outcomes

| Result | Outcome |
|--------|---------|
| **Beat DC by 10+** | **Masterwork.** Item gains one minor enhancement (see Masterwork Quality below). |
| **Beat DC by 5-9** | **Efficient.** Crafting time reduced by half. |
| **Success** | Item crafted to standard quality. |
| **Fail by 1-4** | **Setback.** Half the materials are consumed. You may resume the attempt with the remaining materials, but the DC increases by 2. |
| **Fail by 5-9** | **Failure.** Materials consumed, item not produced. Roll on the Mishap table. |
| **Fail by 10+** | **Catastrophe.** Materials consumed. Roll twice on the Mishap table and apply both results. |

**Cyberpunk Red-inspired safety net:** On a Setback (fail by 1-4), materials are only *half* consumed rather than fully lost. This reduces the punishing nature of crafting in a resource-scarce setting while still creating meaningful tension.

### Mishap Table

When a crafting check fails by 5 or more, roll d12:

| d12 | Mishap | Effect |
|-----|--------|--------|
| 1 | **Tool Slip** | Take 1d4 damage. One tool in your kit is damaged and must be repaired (Technology DC 10, 1 hour) before reuse. |
| 2 | **Small Fire** | Sparks ignite nearby materials. 1d6 fire damage to you and anyone within 5 feet. Flammable objects in 10-foot radius catch fire. |
| 3 | **Toxic Fumes** | Fortitude save DC 13 or gain the Poisoned condition for 1 hour. Enclosed spaces: everyone within 15 feet must save. |
| 4 | **Material Ruined** | The materials warp, shatter, or degrade beyond use. Lose an additional 25% of material cost (on top of the failure cost). |
| 5 | **Structural Flaw** | The item appears complete but has a hidden defect. It functions normally for 1d4 uses, then breaks catastrophically (weapon: explodes for 1d6 damage to wielder; armor: DV drops to 10). |
| 6 | **Short Circuit** | Electrical discharge. 2d6 electric damage, stunned until end of your next turn. Electronics within 10 feet shut down for 1 minute. |
| 7 | **Chemical Splash** | Corrosive or volatile compound splashes. 1d8 acid damage, and one piece of equipment you're wearing loses 1d4 Durability Points (if using durability rules). |
| 8 | **Pressure Burst** | Sealed component ruptures. 2d6 bludgeoning damage in 5-foot radius, Reflex DC 13 for half. |
| 9 | **Magical Backlash** | (Enchanting only; reroll if not enchanting.) Gain 1 Burnout Point. Uncontrolled magical energy: random cantrip effect targets a random creature within 30 feet. |
| 10 | **Noise** | Loud bang, bright flash, or distinctive energy pulse. Alerts all creatures within 300 feet. If in hostile territory, triggers an encounter check. |
| 11 | **Breakthrough Insight** | Silver lining — you learn what went wrong. Gain +2 on your next attempt to craft this same item. |
| 12 | **Nothing Extra** | Materials lost per normal failure rules, but no additional mishap. |

**Catastrophe (fail by 10+):** Roll twice and apply both results.

---

## Crafting Expertise

Not all crafters are equal. A grizzled Technician who's been building guns for years shouldn't roll the same DC as a fresh recruit.

### Crafter Level

Your **crafter level** determines the maximum tier you can attempt and provides crafting bonuses. It equals your character level unless a build feature says otherwise.

| Crafter Level | Max Craftable Tier | Expertise Bonus |
|---------------|-------------------|-----------------|
| 1-3 | Tier 2 | — |
| 4-5 | Tier 3 | — |
| 6-8 | Tier 4 | +1 to crafting checks |
| 9-10 | Tier 4 | +2 to crafting checks |
| 11-14 | Tier 5 | +2 to crafting checks |
| 15-17 | Tier 6 | +3 to crafting checks |
| 18-20 | Tier 7 | +3 to crafting checks |

**Build Bonuses:**
- **Characters following the Technician build** increase their max craftable tier by 1 (a level 4 Technician build character can craft Tier 4).
- **Characters following the Medic build** with the Pharmacology skill tree treat stims as one tier lower for crafting purposes (a Tier 3 stim uses Tier 2 DC and costs). Characters with the **Pharmacology tree (Tier 2+)** also craft serums at DC −2 (see Serums section below).
- **Characters following the Mystic or Channeler build** with Arcana proficiency add their spellcasting modifier to enchanting checks (in addition to normal skill modifiers).

### Masterwork Quality

When you beat the crafting DC by 10 or more, the item gains one of the following enhancements (crafter's choice):

| Enhancement | Effect |
|-------------|--------|
| **Balanced** | Weapon: +1 to attack rolls. |
| **Reinforced** | Armor: +1 DV. Weapon: +5 Durability Points. |
| **Lightweight** | Reduce weight by 25%. Armor: no speed penalty (if applicable). |
| **Efficient** | Ranged weapon: +1 round per magazine. Consumable: +1 use per batch. |
| **Elegant** | +2 to Persuasion checks when displaying or presenting the item. Worth 50% more if sold. |
| **Reliable** | Remove the Unreliable or Unstable property (if present). Weapon never jams on natural 1. |

Masterwork items cannot be further enhanced to masterwork — one masterwork quality per item. This enhancement is permanent and survives modifications.

---

## Formulas and Blueprints

Formulas are instructions for crafting specific items. While simple items (Tier 1-2) can be crafted from general knowledge, complex items benefit from — or require — a formula.

### Formula Requirements

| Item Tier | Formula Required? | Effect of Having Formula |
|-----------|------------------|--------------------------|
| Tier 1-2 | No | DC -1 |
| Tier 3 | Recommended | DC -2 |
| Tier 4 | Required | Cannot attempt without formula |
| Tier 5+ | Required | Cannot attempt without formula |
| Enchanted items | Required | Cannot attempt without formula |

### Acquiring Formulas

**Purchase:** Formulas can be bought from specialist merchants, faction quartermasters, or black market dealers.

| Formula Tier | Purchase Cost |
|--------------|--------------|
| Tier 1 | 25 cr |
| Tier 2 | 75 cr |
| Tier 3 | 250 cr |
| Tier 4 | 1,000 cr |
| Tier 5 | 5,000 cr |
| Tier 6 | 15,000 cr |
| Tier 7 | 50,000 cr |
| Enchantment | Tier cost × 2 |

**Loot:** Formulas are high-value treasure. Pre-Fall research facilities, abandoned workshops, and faction vaults often contain them. A single Tier 5 weapon formula can be worth more than the weapon itself.

**Research (Downtime Activity):** Create your own formula through experimentation.

- **Time:** 1 day per tier (minimum 1 day)
- **Skill:** Technology, Science, or Arcana (DC = item's crafting DC + 2)
- **Capital Cost:** 1 Tech per tier (mundane) or 1 Essence per tier (magical)
- **Success:** You create a formula. Future crafting of this item uses the formula DC reduction.
- **Failure:** Capital is consumed. You gain no formula but learn enough to gain +1 on the next research attempt for this item.
- **Success by 5+:** In addition to creating the formula, you gain insight into a related formula — choose one item of the same type and tier or lower. You gain +2 on Research checks for that item.

**Reverse Engineering:** Disassemble an existing item to learn its formula.

- **Time:** Half the item's crafting time
- **Skill:** Same as crafting the item (DC = item's crafting DC)
- **Cost:** The item is destroyed in the process
- **Success:** You obtain the formula and recover 25% of the item's material cost
- **Failure:** The item is destroyed, no formula obtained. Recover 10% of materials.

### Formula Library

A character can carry any number of formulas. They take the form of schematics, technical manuals, hand-scrawled notes, data chips, or (for enchantments) carved runestones and ritual diagrams.

The **Archive** base upgrade provides secure storage and a +2 bonus to Research checks. Formulas stored in an Archive are available to anyone at the base with the relevant skill proficiency.

---

## Equipment Modifications

Beyond crafting new items, you can modify existing equipment to add capabilities, swap components, or upgrade performance.

### Modification Slots

Every weapon and armor has a number of **mod slots** based on its tier:

| Item Tier | Mod Slots |
|-----------|-----------|
| Tier 1 | 1 |
| Tier 2 | 2 |
| Tier 3 | 3 |
| Tier 4 | 4 |
| Tier 5+ | 5 |

Each modification occupies one slot unless otherwise noted. You cannot exceed an item's mod slot limit. Removing a mod to free a slot takes half the installation time and recovers no materials.

### Weapon Modifications

For the complete list of available weapon modifications, their effects, slot requirements, and trade-offs, see **Equipment — Weapon Modifications**. Installation mechanics (DC, cost, time) are listed below. On a failed check, the modification component is damaged (50% cost to repair or replace), but the base weapon is undamaged. Time is spent regardless of success or failure.

| Mod | DC | Cost | Time |
|-----|----|------|------|
| **Tactical Scope** | DC 13 | 50 cr / 3 Salvage | 2 hours |
| **Extended Barrel** | DC 15 | 75 cr / 4 Salvage | 4 hours |
| **Hair Trigger** | DC 15 | 60 cr / 3 Salvage | 2 hours |
| **Suppressor** | DC 16 | 100 cr / 5 Salvage + 1 Tech | 4 hours |
| **Reinforced Frame** | DC 13 | 40 cr / 2 Salvage | 2 hours |
| **Serrated Edge** | DC 14 | 50 cr / 3 Salvage | 3 hours |
| **Weighted Head** | DC 14 | 50 cr / 3 Salvage | 3 hours |
| **Integrated Bayonet** | DC 12 | 30 cr / 2 Salvage | 1 hour |
| **Overcharged Cell** | DC 18 | 150 cr / 5 Salvage + 2 Tech | 1 day |
| **Heavy Weapon Brace** | DC 16 | 100 cr / 5 Salvage + 1 Tech | 4 hours |
| **Quick-Release Magazine** | DC 14 | 60 cr / 3 Salvage | 2 hours |
| **Smart-Link Interface** | DC 19 | 300 cr / 8 Salvage + 3 Tech | 1 day |

**Tier 1 modifications** do not require a formula. Tier 2 modifications require either a formula or impose **disadvantage** on the installation check. Tier 3 modifications always require a formula. See **Equipment — Modification Slots** for weapon slot limits by tier.

**Modification effects:** Effects for Suppressor, Tactical Scope, Heavy Weapon Brace, Integrated Bayonet, and all Tier 2–3 mods are defined in **Equipment — Weapon Modifications**. *Overcharged Cell, Extended Barrel, Hair Trigger, Reinforced Frame, Serrated Edge, Weighted Head, and Quick-Release Magazine:* effects as listed in the original table remain authoritative; these are crafting-only mods not in the Equipment expansion.

**Heavy Weapon Brace** (formerly "Stabilizer"): Removes the −2 attack roll penalty from firing Heavy weapons without MIG 13. Distinct from the Stabilizer Stock in Equipment — Weapon Modifications (which grants +1 to all attacks at the cost of −5 ft movement).

**Smart-Link Interface:** +1 to attack rolls (Equipment bonus). Requires Smart Link neural augmentation. Cannot be installed simultaneously with the **Neural Interface Stock** weapon modification (see Equipment — Weapon Modifications) — both route through the weapon's processing bus and conflict.

### Armor Modifications

| Mod | DC | Cost | Time | Effect |
|-----|----|------|------|--------|
| **Reinforced Plating** | DC 13 | 50 cr / 3 Salvage | 3 hours | +1 DV. (Max once per armor.) |
| **Thermal Lining** | DC 14 | 75 cr / 4 Salvage | 4 hours | Resistance to cold damage. Advantage on Fortitude saves vs extreme cold. |
| **Ablative Coating** | DC 15 | 100 cr / 5 Salvage | 4 hours | Resistance to fire damage. Advantage on Fortitude saves vs extreme heat. |
| **Sealed Environment** | DC 17 | 200 cr / 8 Salvage + 2 Tech | 1 day | Immune to inhaled toxins and airborne diseases while sealed. **8 hours** of breathable air (sufficient for one full short rest in a hazardous zone). While sealed, you have **advantage on Fortitude saves** against **Irradiated**, **Poisoned**, and **Disease** conditions from environmental sources. Seal can be activated or deactivated as a **free action** (conserve air in safe areas, seal up in danger zones). |
| **Camouflage Weave** | DC 15 | 100 cr / 5 Salvage | 4 hours | +2 to Stealth checks in one environment type (urban ruins, forest, wasteland, snow). Choose when installing. |
| **Servo Assist** | DC 18 | 250 cr / 8 Salvage + 3 Tech | 1 day | Negate armor speed penalties. Medium and heavy armor only. |
| **EMP Shielding** | DC 16 | 100 cr / 4 Salvage + 2 Tech | 4 hours | Armor's electronics immune to EMP. Advantage on saves vs Shock effects while wearing. |
| **Magnetic Holster** | DC 12 | 30 cr / 2 Salvage | 1 hour | Draw or stow one weapon as a free action. |
| **Auto-Injector** | DC 15 | 75 cr / 3 Salvage + 1 Tech | 3 hours | When you drop below half HP, automatically use one loaded stim (holds 1 stim, reload during rest). |
| **Impact Gel** | DC 16 | 125 cr / 5 Salvage + 1 Tech | 4 hours | Reduce **physical damage** (bludgeoning, slashing, and piercing) taken by **2** (minimum 1). Does not stack with other flat damage reduction from armor mods. |
| **Reactive Plating** | DC 18 | 200 cr / 6 Salvage + 2 Tech | 1 day | When you are hit by a **melee attack**, the attacker takes **1d4 damage** of the same type they dealt to you. Heavy armor only. |
| **Kinetic Redistributor** | DC 19 | 250 cr / 8 Salvage + 3 Tech | 1 day | When you take **10+ damage** from a single attack, gain **+10 ft movement speed** until the end of your next turn. Once per round. |
| **Threat Display Module** | DC 16 | 150 cr / 5 Salvage + 2 Tech | 4 hours | As a **reaction** when an enemy moves within **10 feet** of you, force them to make a **Will save (DC 12 + your PRE modifier)** or stop their movement and end their move action. Once per round. Medium or heavy armor only. |
| **Ablative Shield Generator** | DC 20 | 300 cr / 10 Salvage + 4 Tech | 1 day | Armor gains a **10 HP energy shield** that absorbs damage before your HP. While the shield is active, you have **resistance to the first instance of energy damage** (fire, cold, lightning, psychic) you take each round. Shield regenerates fully during a short rest. |
| **Medical Hardpoint** | DC 15 | 100 cr / 4 Salvage + 1 Tech | 3 hours | Armor has a built-in medical dispenser. Administer a stim to yourself or an adjacent ally as a **free action** once per short rest (instead of the normal Use Item action cost). Holds **2 stims** (reload during rest). |
| **Signal Jammer Array** | DC 17 | 175 cr / 6 Salvage + 2 Tech | 4 hours | **15-foot aura.** Electronic devices and augmentations within the aura have **disadvantage on Technology checks**. Enemies with neural interfaces have **disadvantage on Will saves against hacking** while in the aura. Toggle on/off as a free action. **Tradeoff:** While active, YOUR electronic devices also have disadvantage on Technology checks. |

### Modification Rules

- **Adding a Mod:** Technology check at the listed DC. On failure, the mod component is damaged (50% cost to replace), but the base item is undamaged. Time is spent regardless.
- **Removing a Mod:** Takes half the installation time. Technology check at DC 10. On success, mod is recovered intact and can be reinstalled. On failure, mod is destroyed but the base item is undamaged; a destroyed mod yields no recoverable materials.
- **Stacking:** Each specific mod can only be installed once per item. Different mods can stack freely up to the slot limit.
- **Mod Formulas:** Common mods (DC 15 or lower) don't require formulas. Advanced mods (DC 16+) require a formula or impose disadvantage on the check.

### Equipment Bonus Cap

Total bonuses to attack rolls from equipment sources cannot exceed **+3**. This preserves bounded accuracy — your gear makes you better, but your skill and attributes define your ceiling.

#### Bonus Categories

Equipment attack bonuses fall into three categories. **Bonuses within the same category do not stack** — use the highest value from each category. Bonuses from different categories stack, subject to the +3 cap.

| Category | Source Examples | Typical Bonus |
|----------|---------------|---------------|
| **Equipment** | Weapon modifications (Smart-Link Interface, stabilizers), Masterwork quality (Balanced) | +1 |
| **Augmentation** | Cybernetic implants (Smart Link, targeting augments) | +1 to +2 |
| **Enchantment** | Weapon sigils, arcane capacitor mods (Focused Emitter) | +1 to +2 |

**Rule:** Within each category, take the highest single bonus. Then add the highest from each category together. If the total exceeds +3, the excess is lost.

> **Defense Value bonuses** from augmentations follow the same principle — the total DV bonus from augmentations cannot exceed +3 (see **Equipment**, Augmentations section).

#### Interaction Table

| Combination | Category Breakdown | Total | At Cap? |
|-------------|-------------------|-------|---------|
| Smart Link (+2) alone | Augmentation +2 | **+2** | No |
| Balanced masterwork (+1) alone | Equipment +1 | **+1** | No |
| Smart Link (+2) + Balanced (+1) | Augmentation +2, Equipment +1 | **+3** | Yes |
| Smart Link (+2) + Smart-Link Interface (+1) | Augmentation +2, Equipment +1 | **+3** | Yes |
| Smart Link (+2) + Balanced (+1) + Smart-Link Interface (+1) | Augmentation +2, Equipment +1 (Balanced and Interface are same category — take highest, both +1) | **+3** | Yes |
| Smart Link (+2) + Focused Emitter (+2) | Augmentation +2, Enchantment +2 | **+3** | Yes (capped from +4) |
| Balanced (+1) + Focused Emitter (+2) | Equipment +1, Enchantment +2 | **+3** | Yes |
| Smart Link (+2) + Balanced (+1) + Focused Emitter (+2) | Augmentation +2, Equipment +1, Enchantment +2 | **+3** | Yes (capped from +5) |

#### Worked Examples

**Example 1 — Gunslinger Sniper Build:**
Kira has a Tier 4 rifle with a Smart Link augment (+2 attack, Augmentation category) and a Balanced masterwork quality (+1 attack, Equipment category). Her equipment bonus is +2 (Augmentation) + +1 (Equipment) = **+3** (at cap). If she also installs a Smart-Link Interface mod (+1, Equipment category), it doesn't help — Balanced and Smart-Link Interface are the same category, and both grant +1, so she still takes +1 from Equipment. Her total remains +3.

**Example 2 — Channeler Hybrid Build:**
Marcus wields an enchanted mace with a Focused Emitter capacitor (+2 spell attack rolls, Enchantment category). He has no combat augmentations. His equipment bonus to spell attacks is +2. If he later installs a Smart Link augment (+2, Augmentation category), his total would be +2 (Enchantment) + +2 (Augmentation) = +4, which is capped at **+3**. The Smart Link is partially wasted on spell attacks — he'd benefit more from it on a separate weapon for weapon attacks.

**Example 3 — Operative Budget Build:**
Zara can't afford a Smart Link augment yet. She installs a Smart-Link Interface mod — but it requires a Smart Link augment to function, so it provides no bonus. Instead, she focuses on a Balanced masterwork pistol (+1, Equipment category). Her equipment bonus is **+1**. Later, when she can afford the Smart Link augment (+2, Augmentation category), her total becomes +1 + +2 = **+3**. At that point, she could add the Smart-Link Interface mod, but it would be redundant with her Balanced quality (same category, same bonus).

#### Key Clarifications

- **Focused Emitter** capacitor mods count as **Enchantment** category. They apply to spell attack rolls only, not weapon attack rolls.
- **Consumable bonuses** (such as Adrenaline Shot's +2 to attack rolls) are **temporary status bonuses**, not equipment bonuses. They are not subject to the equipment bonus cap and stack with equipment bonuses normally.
- **Build feature bonuses** (such as a Scavenger's Scrapyard Strike or a Psion's Overcharge bonus) are **feature bonuses**, not equipment bonuses. They are not subject to the equipment bonus cap.
- The **+3 cap applies per weapon**, not per character. A character with two weapons can have +3 on each.

### Tier Upgrade

You can upgrade an item to the next tier:

- **DC:** The higher tier's crafting DC
- **Cost:** The difference in material cost between the two tiers
- **Time:** Full crafting time for the higher tier
- **Formula:** Required for upgrading to Tier 4+

Tier upgrades increase the item's damage/DV to the new tier's baseline and add one mod slot. Existing mods are preserved. An item can only be upgraded one tier at a time. An item must be fully repaired before it can be upgraded to a higher tier.

---

## Enchanting

Enchanting infuses mundane equipment with magical energy — binding spell effects into physical objects through sigils, runic circuits, and crystallized Essence. This is new magic, raw and experimental. There are no ancient traditions to draw from; every enchanter is an innovator.

### Requirements

- **Skill:** Arcana proficiency (required)
- **Facility:** Arcane Sanctum (base upgrade) or equivalent (ley-line nexus, magical workshop)
- **Formula:** All enchantments require a formula (see Formulas and Blueprints above)
- **Materials:** Essence capital (primary), plus Salvage for the physical anchor

### How Enchanting Works

Enchanting doesn't create magical items from nothing. It binds a spell-like effect to an existing item using Essence as fuel. The item must be of sufficient quality to hold the enchantment — you can't enchant scrap.

1. **Start with a base item** of Tier 2 or higher
2. **Choose a sigil** from the Sigil List (or design a custom one with GM approval)
3. **Gather materials** (Essence + supplemental costs)
4. **Make the Arcana check** (DC listed by sigil tier)
5. **Bind the sigil** — on success, the enchantment is permanent

### Sigil Tiers

Sigils are categorized by power level. Higher-tier sigils require more Essence, higher skill, and higher-tier base items.

| Sigil Tier | Min Item Tier | Arcana DC | Essence Cost | Additional Cost | Time |
|------------|--------------|-----------|--------------|-----------------|------|
| Minor | Tier 2+ | DC 14 | 2 Essence | 50 cr / 3 Salvage | 1 day |
| Standard | Tier 3+ | DC 17 | 5 Essence | 150 cr / 8 Salvage | 3 days |
| Greater | Tier 4+ | DC 20 | 10 Essence | 500 cr / 15 Salvage | 5 days |
| Superior | Tier 5+ | DC 23 | 20 Essence | 2,000 cr / 30 Salvage | 10 days |
| Mythic | Tier 6+ | DC 26 | 50 Essence | 10,000 cr / 60 Salvage | 30 days |

### Enchantment Slots

Like modification slots, items have a limited number of **enchantment slots**:

| Item Tier | Enchantment Slots |
|-----------|-------------------|
| Tier 1 | 0 (cannot be enchanted) |
| Tier 2 | 1 |
| Tier 3 | 2 |
| Tier 4 | 2 |
| Tier 5+ | 3 |

Enchantment slots are separate from modification slots. A Tier 3 weapon could have 3 mods *and* 2 enchantments.

### Enchanting Outcomes

| Result | Outcome |
|--------|---------|
| **Beat DC by 10+** | Sigil is empowered — effect is enhanced (see individual sigil for empowered effect). |
| **Beat DC by 5-9** | Sigil binds cleanly. Enchanting time reduced by half. |
| **Success** | Sigil binds normally. Enchantment is permanent. |
| **Fail by 1-4** | Sigil flickers — Essence is consumed but the enchantment doesn't hold. Item is undamaged. May retry with fresh Essence. |
| **Fail by 5-9** | Essence backlash. Essence consumed, enchanter gains 1d4 Burnout Points. Item undamaged. |
| **Fail by 10+** | Catastrophic failure. Essence consumed, item must save (Fortitude DC 15 using the item's tier as its bonus) or be destroyed. Enchanter gains 2d4 Burnout Points. Roll on the Twilight Events table (see [Magic](magic.md)). |

### Weapon Sigils

#### Minor Weapon Sigils

**Sigil of Flame**
- **Effect:** Weapon deals +1d4 fire damage on hit. Ignites flammable objects.
- **Empowered:** +1d6 fire damage instead.

**Sigil of Frost**
- **Effect:** Weapon deals +1d4 cold damage on hit. Target's speed reduced by 5 feet until end of their next turn.
- **Empowered:** Speed reduced by 10 feet.

**Sigil of Shock**
- **Effect:** Weapon deals +1d4 electric damage on hit. Target can't take reactions until end of their next turn.
- **Empowered:** Target must also make END save DC 13 or be stunned until end of their next turn.

**Sigil of Venom**
- **Effect:** Weapon deals +1d4 poison damage on hit. Target makes Fortitude DC 12 or is Poisoned for 1 minute.
- **Empowered:** DC increases to 15.

**Sigil of Returning**
- **Effect:** Thrown weapon teleports back to your hand at the start of your next turn.
- **Empowered:** Returns immediately after the attack (can be used for multiple attacks per turn).

#### Standard Weapon Sigils

**Sigil of Sundering**
- **Effect:** +2 to attack rolls. On a critical hit, target's armor loses 1d6 Durability Points (if using durability rules) or target's DV is reduced by 1 until repaired.
- **Empowered:** DV reduction becomes 2.

**Sigil of Vorpal Edge**
- **Effect:** Critical hit range expanded by 1 (e.g., 20 becomes 19-20). Melee only.
- **Empowered:** Critical hit range expanded by 2.

**Sigil of Seeking**
- **Effect:** Ranged attacks ignore partial cover and don't suffer disadvantage at long range.
- **Empowered:** Also ignores heavy cover.

**Sigil of the Leech**
- **Effect:** On hit, gain temporary HP equal to half the damage dealt (round down). These temporary HP do not stack — each hit replaces the previous amount rather than adding to it.
- **Empowered:** On hit, gain temporary HP equal to the full damage dealt (non-stacking, replaces as above).

**Sigil of Disruption**
- **Effect:** +2d6 radiant damage against undead and aberrations.
- **Empowered:** +3d6 radiant damage.

#### Greater Weapon Sigils

**Sigil of the Storm**
- **Effect:** Once per short rest, as 2 actions, unleash a 30-foot line of lightning from the weapon. All creatures in the line make Reflex save (DC = 8 + Arcana bonus) or take 4d6 electric damage (half on save).
- **Empowered:** Damage increases to 6d6.

**Sigil of Banishment**
- **Effect:** On a critical hit, target makes Will save (DC = 8 + your proficiency + spellcasting modifier) or is banished to a demiplane for 1 round. They reappear in the same space at the start of their next turn.
- **Empowered:** Banished for 1 minute (Will save at end of each turn to return).

**Sigil of Phase**
- **Effect:** Once per short rest, weapon's attacks ignore armor and shields for 1 round (attacks target base DV 10 + AGI modifier only).
- **Empowered:** Lasts 2 rounds.

### Armor Sigils

#### Minor Armor Sigils

**Sigil of Warding**
- **Effect:** +1 to all saving throws.
- **Empowered:** +2 to all saving throws.

**Sigil of the Bulwark**
- **Effect:** Reduce all incoming damage by 1 (minimum 1 damage).
- **Empowered:** Reduce by 2.

**Sigil of Featherfall**
- **Effect:** You take no falling damage from heights of 30 feet or less. Beyond 30 feet, halve the falling damage.
- **Empowered:** No falling damage from any height.

**Sigil of Warmth**
- **Effect:** Immune to natural cold environments. Resistance to cold damage.
- **Empowered:** Also immune to magical cold damage up to 10 points per hit.

#### Standard Armor Sigils

**Sigil of Reflection**
- **Effect:** When hit by a ranged spell attack, you can use your reaction to reflect it. Make an Arcana check opposed by the caster's spell attack. If you win, the spell targets the caster instead.
- **Empowered:** +2 to the Arcana check.

**Sigil of Regeneration**
- **Effect:** At the start of each of your turns, regain 1 HP if you have at least 1 HP.
- **Empowered:** Regain 2 HP per turn.

**Sigil of the Sentinel**
- **Effect:** You can't be surprised. +2 to Initiative.
- **Empowered:** Also grant +2 Initiative to all allies within 10 feet.

#### Greater Armor Sigils

**Sigil of Absorption**
- **Effect:** When you take elemental damage (fire, cold, electric, acid), absorb it. Reduce damage by your proficiency bonus. You can release absorbed energy as a bonus action: deal the absorbed damage (up to 20 points stored) as the same element to a target within 30 feet (ranged spell attack using Arcana).
- **Empowered:** Maximum stored energy increases to 40 points.

**Sigil of the Phantom**
- **Effect:** Once per short rest, become incorporeal for 1 round. You can move through solid objects and creatures (take 1d10 force damage if you end your turn inside one). Immune to non-magical weapon attacks while incorporeal.
- **Empowered:** Lasts 2 rounds.

### Accessory Sigils

Sigils can also be inscribed on non-weapon, non-armor items: cloaks, amulets, rings, belts, boots, goggles, etc. These items must be crafted to Tier 2+ quality.

**A character can benefit from a maximum of 3 enchanted accessories at once.** Equipping a 4th causes the oldest enchantment to become dormant until one is removed.

#### Minor Accessory Sigils

**Sigil of Darksight** (goggles, helm)
- **Effect:** See in complete darkness out to 60 feet (monochrome).
- **Empowered:** 120 feet, full color.

**Sigil of the Mule** (belt, boots)
- **Effect:** Carrying capacity doubled. No penalties from Medium Load.
- **Empowered:** Tripled capacity. No penalties from Heavy Load.

**Sigil of Tongues** (amulet, earpiece)
- **Effect:** Understand all spoken languages. Cannot speak them.
- **Empowered:** Can speak and understand all languages.

#### Standard Accessory Sigils

**Sigil of Shielding** (ring, amulet)
- **Effect:** 3 charges. Spend 1 charge as a reaction when hit to gain +5 DV against that attack. Recharges 1d3 charges at dawn.
- **Empowered:** Recharges all 3 charges at dawn.

**Sigil of Swiftness** (boots, greaves)
- **Effect:** +10 feet movement speed.
- **Empowered:** +15 feet and ignore difficult terrain.

**Sigil of the Anchor** (belt, cloak)
- **Effect:** Cannot be pushed, pulled, or knocked prone by effects. Immune to Knockback weapon property.
- **Empowered:** Also advantage on saves vs being Restrained or Grappled.

#### Greater Accessory Sigils

**Sigil of Recall** (ring)
- **Effect:** Mark a location (1 minute ritual). Once per long rest, teleport to the marked location from up to 1 mile away.
- **Empowered:** Range extends to 10 miles.

**Sigil of the Revenant** (amulet)
- **Effect:** Once per long rest, when you drop to 0 HP, instead drop to 1 HP. You gain 10 temporary HP and +2 to attack rolls for 1 minute.
- **Empowered:** Gain 20 temporary HP.

### Custom Enchantments

Players and GMs can design custom sigils using the spell crafting system (see [Magic](magic.md)) as a guideline. Follow this process:

1. **Define the effect** using the Effect Modifiers from the spell crafting system
2. **Calculate the spell level equivalent** using the standard formula
3. **Determine sigil tier** based on equivalent spell level:

| Equivalent Spell Level | Sigil Tier |
|------------------------|------------|
| Cantrip - 1st | Minor |
| 2nd - 3rd | Standard |
| 4th - 5th | Greater |
| 6th - 7th | Superior |
| 8th - 9th | Mythic |

4. **Set charges** (if applicable): Effects that replicate leveled spells should be limited-use (charges per rest) rather than at-will
5. **Create the formula** through Research or discovery

**Balance Guideline:** A permanent, at-will enchantment should be roughly equivalent to a cantrip or weaker than a 1st-level spell. Anything stronger should use charges, cooldowns (per short/long rest), or require activation costs.

**Synthetics and Enchanted Gear:** Enchanted weapons and armor function for any wielder, including Synthetics — the magic is in the item, not the user. However, enchanted accessories that provide ongoing magical effects (such as Sigils of Warding, Regeneration, or similar persistent enchantments) require a Humanity score of 1 or higher to attune and do not function for Synthetics.

---

## Magical Item Crafting

Beyond enchanting mundane items with sigils, some items are inherently magical — created from the ground up with Essence woven into their structure. These are rarer and more powerful than enchanted mundane items.

### Magical Item Categories

| Category | Description | Example |
|----------|-------------|---------|
| **Consumable** | Single-use magical items. Potions, scrolls, talismans. | Potion of Invisibility, Scroll of Fireball |
| **Charged** | Multi-use with limited charges that recharge. | Wand of Healing (5 charges, recharge 1d4+1 at dawn) |
| **Permanent** | Always-on magical items. | Cloak of Resistance, Boots of Speed |
| **Artifact** | Unique, plot-relevant items. Cannot be crafted — only found. | The Shard of First Light, Ironheart Engine |

### Magical Item Crafting Table

| Item Category | Sigil Tier | Arcana DC | Essence | Salvage | Tech | Credits | Time |
|---------------|-----------|-----------|---------|---------|------|---------|------|
| Consumable (Minor) | Minor | DC 12 | 1 | 1 | — | 25 cr | 2 hours |
| Consumable (Standard) | Standard | DC 15 | 2 | 2 | — | 75 cr | 4 hours |
| Consumable (Greater) | Greater | DC 18 | 4 | 4 | 1 | 200 cr | 1 day |
| Charged (Minor) | Minor | DC 15 | 3 | 3 | 1 | 100 cr | 1 day |
| Charged (Standard) | Standard | DC 18 | 8 | 6 | 2 | 400 cr | 3 days |
| Charged (Greater) | Greater | DC 21 | 15 | 10 | 4 | 1,500 cr | 5 days |
| Permanent (Minor) | Standard | DC 18 | 10 | 5 | 2 | 500 cr | 5 days |
| Permanent (Standard) | Greater | DC 21 | 20 | 10 | 5 | 2,000 cr | 10 days |
| Permanent (Greater) | Superior | DC 24 | 40 | 20 | 10 | 8,000 cr | 20 days |

**Consumables** cost half the Essence and time of equivalently powered charged or permanent items. They're the most efficient way to use magical crafting — and the most common magical items in the wasteland.

**Formulas required:** All magical item crafting requires a formula. No exceptions.

### Example Magical Items

*Note: Standard stims are limited to 2 uses per 24 hours before causing chemical overload (see **Equipment — Stims**). Crafted magical consumables such as Healing Draughts bypass this limit — they do not count against stim tolerance.*

**Healing Draught** (Consumable, Minor)
- *Crafting:* DC 12, 1 Essence, 1 Salvage, 2 hours
- *Effect:* Drink to restore 2d8 + 4 HP. Does not count against stim tolerance.

**Stim of Haste** (Consumable, Standard)
- *Crafting:* DC 15, 2 Essence, 2 Salvage, 4 hours
- *Effect:* Inject to gain 1 additional action per turn (4 actions total) for 3 rounds. After the effect ends, you are limited to 2 actions on your next turn.

**Scroll of Protection** (Consumable, Greater)
- *Crafting:* DC 18, 4 Essence, 4 Salvage + 1 Tech, 1 day
- *Effect:* Read to create a 10-foot radius barrier. Creatures of a chosen type (undead, beasts, aberrations) can't enter for 5 minutes. If already inside, pushed to the edge.

**Wand of Sparks** (Charged, Minor)
- *Crafting:* DC 15, 3 Essence, 3 Salvage + 1 Tech, 1 day
- *Charges:* 7 (recharge 1d6+1 at dawn)
- *Effect:* Spend 1 charge to cast Spark (1d8 energy, 60 ft). Spend 2 charges for 2d8.

**Rod of Mending** (Charged, Standard)
- *Crafting:* DC 18, 8 Essence, 6 Salvage + 2 Tech, 3 days
- *Charges:* 5 (recharge 1d4+1 at dawn)
- *Effect:* Spend 1 charge to cast Mend on a medium or smaller object. Spend 3 charges to repair a weapon or armor piece to full Durability Points.

**Amulet of Vitality** (Permanent, Minor)
- *Crafting:* DC 18, 10 Essence, 5 Salvage + 2 Tech, 5 days
- *Effect:* +5 max HP while worn. Advantage on Fortitude saves vs poison and disease.

**Cloak of Shadows** (Permanent, Standard)
- *Crafting:* DC 21, 20 Essence, 10 Salvage + 5 Tech, 10 days
- *Effect:* Advantage on Stealth checks in dim light or darkness. Once per short rest, become invisible for 1 round as a bonus action.

**Ironheart Shield** (Permanent, Greater)
- *Crafting:* DC 24, 40 Essence, 20 Salvage + 10 Tech, 20 days
- *Effect:* +3 DV. When you use your reaction to block, reduce damage by 10. Once per long rest, project a 15-foot cone barrier that grants all allies inside resistance to all damage for 1 round.

---

### Magic Item Repair

Some magic items are discovered in a **damaged state** — their basic properties function, but their full power is locked. These items are marked **[Broken When Found]** in their descriptions (see **Equipment** for the full magic item catalog). Repairing a broken magic item restores it to full functionality.

Magic item repair follows the same general framework as mundane crafting, with higher requirements reflecting the complexity of magical systems.

#### Repair Requirements

To attempt a magic item repair, you need all of the following:

1. **Appropriate skill proficiency:** Technology (for pre-war relics and magitech) or Arcana (for purely magical items). Some items accept either — check the item's repair entry.
2. **The item's specific DC:** Listed in the item's **[Broken When Found]** entry. These DCs are higher than mundane repair because you're restoring magical function, not just physical structure.
3. **Specific materials:** Each broken item lists required materials and their credit cost. These are not standard crafting components — they represent rare or specialized parts that must be sourced through trade, scavenging, or quests.
4. **A workspace:** Mundane workbench (minimum). Items requiring Arcana checks need access to an Essence source or arcane focus. Items with quest requirements must be repaired at the specified location.
5. **Time:** 1 day per tier of the item (Tier 4 = 4 days, Tier 5 = 5 days). This cannot be reduced below 1 day.

#### Repair Procedure

1. **Source materials.** Acquire the materials listed in the item's repair entry. Materials are consumed whether the repair succeeds or fails — you're working with them, not just holding them.
2. **Make the crafting check.** Roll the appropriate skill check against the item's listed DC.
3. **Determine the result:**

| Result | Outcome |
|--------|---------|
| **Success** | The item is fully restored. All properties, charges, and abilities function as described. |
| **Success by 5+** | Full restoration, and you gain insight into the item's construction. You learn the item's crafting formula (if one exists) and gain **+2 on future repair checks** for items of the same category. |
| **Failure** | The item remains broken. Materials are consumed. You can attempt another repair after sourcing new materials. |
| **Failure by 5+** | The item remains broken and suffers **additional damage** — the repair DC increases by **+2** permanently. Materials are consumed. A second critical failure renders the item irreparable without extraordinary measures (GM discretion — quest, legendary crafter, or Voidscar exposure). |

#### Partial Repair

If a broken item has multiple locked functions (such as The First Spark's form-shifting, bonus damage, and Purifying Shot), the GM may allow **partial repairs** — restoring one function per successful check at a reduced DC (-2 per function already restored). Each partial repair requires its own materials (proportional share of the total cost) and time (1 day per partial repair). This is optional and at GM discretion — most items are repaired in a single check.

#### Technician Interaction

The Technician's **Jury-Rig** (Level 1) can temporarily restore a broken magic item's basic properties for **1 hour** at the standard Jury-Rig DC (DC 12 Technology). This does not count as a permanent repair — when the hour expires, the item reverts to its broken state. A natural 20 on the Jury-Rig check does **not** permanently repair a magic item (unlike mundane items) — the magical components require proper materials and dedicated time.

Characters with the **Engineering tree (Tier 2+)** gain **+2 on magic item repair checks** for pre-war relics (Technology-based repairs), reflecting their expertise with complex salvaged systems.

#### Known Broken Items

The following items are currently documented as **[Broken When Found]**. See **Equipment** for full item descriptions.

| Item | Tier | Repair Skill | DC | Materials | Cost | Special |
|------|------|-------------|-----|-----------|------|---------|
| **Mindlink Circlet** | 4 | Technology | 18 | Pre-war micro-components | 500 cr | — |
| **Flicker Boots** | 4 | Technology | 16 | Phase-conductive materials | 800 cr | — |
| **The First Spark** | 5 | Arcana | 20 | Arcane components | 2,000 cr | Must be repaired at a Voidscar zone |

#### Worked Example — Repairing Flicker Boots

*The party's Operative finds Flicker Boots in a pre-war military bunker. Currently, the boots can only teleport 10 feet (instead of 30) and the Phase Sickness DC starts at 14 (instead of 10). She wants to repair them.*

1. **Source materials:** The party needs phase-conductive materials worth 800 credits. The GM decides these are available from a Convergence tech dealer in the nearest settlement — but at a markup (1,000 credits) or through a favor (retrieve stolen cargo, reducing cost to 800).
2. **Find a workspace:** The party's base has a mundane workbench. Sufficient for a Technology-based repair.
3. **Time:** Tier 4 item = 4 days of dedicated work. The Operative spends 4 days of downtime.
4. **Make the check:** The Operative has Technology proficiency (+3 proficiency, +3 INT = +6 total). She needs a 10 or higher on d20 to hit DC 16. She rolls a 14 + 6 = 20 — success by 4.
5. **Result:** The Flicker Boots are fully restored. Teleport range increases to 30 feet, Phase Sickness DC drops to 10. The Operative now has one of the best mobility items in the game.

*If she had rolled a 9 + 6 = 15 (failure by 1), the boots would remain broken and she'd need to source another 800 credits of phase-conductive materials before trying again. If she had rolled a 4 + 6 = 10 (failure by 6), the boots would remain broken AND the repair DC would increase to 18 — the failed repair destabilized something in the phase-shift mechanism.*

---

## Crafting Complications

For crafting projects that take 3 or more days, the GM may introduce complications. Roll d20 at the end of each crafting week — on a 1-4, a complication occurs:

| d8 | Complication |
|----|-------------|
| 1 | **Supply Shortage:** A key material runs out. Pay an additional 25% of the material cost or pause the project until supplies are found. |
| 2 | **Rival Interest:** Someone learns what you're building and wants it — or wants you to stop. A faction, merchant, or individual makes an offer or threat. |
| 3 | **Design Flaw Discovered:** You realize the current approach won't work. Lose 1 day of progress but gain +1 on all remaining checks for this project (you learned from the mistake). |
| 4 | **Essence Instability:** (Magical crafting only; reroll for mundane.) The Essence fluctuates. Make an Arcana DC 15 check or gain 1 Burnout Point. On success, the instability actually helps — reduce remaining time by 1 day. |
| 5 | **Tool Breakdown:** Your primary tool breaks. Spend 2 hours and DC 13 Technology to repair, or purchase a replacement. |
| 6 | **Unwanted Attention:** Your crafting attracts attention — curious onlookers, local authorities, or creatures drawn to the noise/energy. Resolve socially or risk interruption. |
| 7 | **Inspiration Strikes:** A breakthrough insight. Choose: reduce remaining time by 1 day OR gain +2 on the final crafting check. |
| 8 | **Strange Side Effect:** The item develops an unexpected quirk (cosmetic only). The weapon hums when enemies are near. The armor changes color with the wearer's mood. The potion tastes like cinnamon. |

Complications add narrative texture to long crafting projects. They should create story opportunities, not frustration. GMs should skip the complication roll if the table prefers simpler crafting.

---

## Collaborative Crafting

Multiple characters can work together on a single crafting project.

### Assisting

One character is the **lead crafter** and makes the skill check. Other characters can assist:

- **Skilled Assistant** (proficient in the relevant skill): Lead crafter gains **advantage** on the check. Maximum 1 skilled assistant per project.
- **Unskilled Helper:** Reduce crafting time by 25%. Maximum 2 unskilled helpers. They don't need proficiency — they hold things, fetch materials, stoke fires.
- **Magical Support** (for enchanting): A spellcaster can spend a spell slot of 1st level or higher to grant the lead enchanter +2 to the Arcana check per spell level spent (max +6).

### Group Projects

For base upgrades and large constructions, multiple characters can contribute downtime days:

- Each additional character beyond the first reduces construction time by 1 day (minimum 1 day)
- All contributing characters must be present and working during their contributed days

---

## Ammunition Crafting

Quick-reference for crafting ammunition, consolidated from [Equipment](equipment.md).

### Standard Ammunition

- **Time:** 30 minutes per magazine
- **DC:** 10
- **Cost:** 5 cr per 3 magazines, or 1 Salvage per 3 magazines
- **Special:** Technicians with Engineering skill tree craft at quarter cost

### Special Ammunition

| Type | DC | Cost per Batch | Batch Size | Effect |
|------|----|---------------|------------|--------|
| Armor-Piercing | DC 15 | 15 cr / 1 Salvage | 20 rounds | Reduce target's armor DV bonus by 3 (min DV 10) |
| Hollow-Point | DC 12 | 10 cr / 1 Salvage | 20 rounds | +1d6 vs unarmored (DV 15 or lower), -2 vs armored |
| Incendiary | DC 18 | 25 cr / 2 Salvage | 10 rounds | +1d4 fire, target Reflex DC 13 or catches fire |
| Shock | DC 20 | 50 cr / 3 Salvage + 1 Tech | 10 rounds | Target END DC 15 or stunned 1 round |
| Tranquilizer | DC **16** | 30 cr / 2 Salvage | **10** darts | Hit target makes **Fortitude save (DC 15)**. On failure: **Slowed** (half speed, -2 Reflex saves) for 1 round, then **unconscious** at end of their next turn unless they succeed on a second Fortitude save (DC 13). On success: **Slowed** for 1 round only. |
| Explosive | DC 22 | 100 cr / 5 Salvage + 2 Tech | 5 rounds | 2d6 fire in 5-ft radius (Reflex DC 15 half) |
| EMP | DC 20 | 50 cr / 3 Salvage + 1 Tech | 10 rounds | +2d6 vs synthetics/electronics, no bonus vs organic |
| Tracer | DC 12 | 15 cr / 1 Salvage | 20 rounds | Advantage on next attack vs same target |

> Costs in the table above are **pre-reduction**. Apply the consumable half-cost rule: the actual crafting cost is half the listed credit or capital cost.

### Magical Ammunition

Enchanted ammunition combines physical crafting with sigil work. Each round carries a minor sigil that activates on impact.

| Type | DC | Cost | Batch Size | Effect |
|------|----|------|------------|--------|
| Arcane Round | DC 16 (Arcana) | 1 Essence + 1 Salvage | 5 rounds | +1d6 force damage. Counts as magical for overcoming resistances. |
| Banishing Shot | DC 19 (Arcana) | 2 Essence + 2 Salvage | 3 rounds | On hit, target Will DC 15 or banished 1 round. |
| Venom Shot | DC 17 (Arcana) | 1 Essence + 1 Salvage | 5 rounds | +1d4 poison, target Fortitude DC 14 or Poisoned 1 minute. |
| Radiant Round | DC 16 (Arcana) | 1 Essence + 1 Salvage | 5 rounds | +2d6 radiant vs undead/aberrations. Normal damage vs others. |

Magical ammunition is consumed on use (the sigil discharges on impact). Crafting requires both Technology proficiency (to craft the round) and Arcana proficiency (to inscribe the sigil). Characters without both skills need a partner. Costs listed are **pre-reduction**; apply the consumable half-cost rule to both the credit/Salvage cost and the Essence cost.

---

## Stim and Serum Crafting

Quick-reference for brewing stims and advanced serums.

### Standard Stims

| Stim | DC | Cost | Time | Effect |
|------|----|------|------|--------|
| Basic Stim (Tier 1) | DC 12 (Science) | 12 cr / 1 Salvage | 1 hour | Restore 1d8+2 HP |
| Combat Stim (Tier 2) | DC 15 (Science) | 37 cr / 2 Salvage | 1 hour | Restore 2d8+2 HP |
| Advanced Stim (Tier 3) | DC 18 (Science) | 100 cr / 1 Salvage + 1 Essence | 1 hour | Restore 3d8+2 HP + remove 1 condition |

### Combat Serums

Serums are advanced pharmaceuticals that provide temporary combat bonuses. They require Medicine proficiency and Science proficiency to craft.

| Serum | DC | Cost | Time | Effect | Duration | Side Effect |
|-------|----|------|------|--------|----------|-------------|
| Adrenaline Shot | DC 15 | 50 cr / 3 Salvage | 2 hours | +2 to attack rolls and damage | 1 minute | 1 Exhaustion after |
| Pain Suppressor | DC 16 | 75 cr / 4 Salvage | 2 hours | Ignore Wounded condition, +5 temp HP | 10 minutes | 1d6 damage when it wears off |
| Reflex Booster | DC 17 | 100 cr / 5 Salvage + 1 Tech | 3 hours | +3 Initiative, +10 ft speed | 1 hour | Disadvantage on WIS checks for 1 hour after |
| Berserker Juice | DC 18 | 125 cr / 5 Salvage + 1 Tech | 3 hours | +1d4 damage, resistance to physical, can't be frightened | 1 minute | 2 Exhaustion after |
| Clearwater | DC 16 | 75 cr / 4 Salvage | 2 hours | Advantage on INT/WIS/PRE checks and saves | 1 hour | None |
| Ironblood | DC 19 | 200 cr / 8 Salvage + 2 Tech | 4 hours | Resistance to one damage type (chosen at crafting) | 1 hour | 1 Exhaustion after |

**Serum Tolerance:** A character can benefit from 1 serum at a time. Using a second serum while one is active ends the first and inflicts 1 Exhaustion.

**Medic Bonus:** Characters with the **Pharmacology tree (Tier 2+)** craft serums at DC -2 and gain one additional dose per crafting session.

### Specialty Stims

Specialty stims require **Science** proficiency to craft. Medics with the Pharmacology skill tree treat specialty stims as one tier lower for crafting purposes (matching the standard stim crafting bonus).

| Stim | DC | Cost | Time | Yield |
|------|-----|------|------|-------|
| Reflex Stim | DC 14 (Science) | 25 cr / 2 Salvage | 1 hour | 1 dose |
| Ironhide Stim | DC 15 (Science) | 30 cr / 2 Salvage | 1 hour | 1 dose |
| Stabilizer Stim | DC 14 (Science) | 25 cr / 2 Salvage | 1 hour | 1 dose |
| Nighteye Stim | DC 13 (Science) | 20 cr / 1 Salvage | 1 hour | 1 dose |
| Adrenaline Spike | DC 18 (Science) | 60 cr / 3 Salvage + 1 Tech | 2 hours | 1 dose |
| Trauma Override | DC 17 (Science) | 50 cr / 3 Salvage + 1 Tech | 2 hours | 1 dose |
| Neural Accelerant | DC 14 (Science) | 30 cr / 2 Salvage | 1 hour | 1 dose |
| Marrow Stim | DC 16 (Science) | 40 cr / 2 Salvage + 1 Tech | 2 hours | 1 dose |

### Tactical Consumables

Tactical consumables require **Science** or **Technology** proficiency as noted.

| Item | DC | Cost | Time | Yield |
|------|-----|------|------|-------|
| Chem Light Flare | DC 10 (Science) | 5 cr / 1 Salvage | 30 min | 2 flares |
| Adhesive Bomb | DC 14 (Science) | 30 cr / 2 Salvage | 1 hour | 1 bomb |
| Signal Scrambler | DC 16 (Technology) | 40 cr / 3 Salvage + 1 Tech | 2 hours | 1 device |
| Shock Mine | DC 15 (Technology) | 35 cr / 2 Salvage + 1 Tech | 1 hour | 1 mine |

---

### Traps & Explosives

The wasteland runs on ingenuity and salvage. A prepared character can turn a corridor into a kill zone, a door into a last line of defense, or a wall into an exit. The items below expand the Tactical Consumables section with craftable traps, explosives, and non-damaging tactical devices for characters who invest in controlling the battlefield before the shooting starts.

**Skill Requirements:**
- Traps and explosives require **Technology** or **Science** proficiency as noted.
- Characters with the **Demolitions** advanced skill gain **+2 to all crafting checks** for items in this section and **+2 to all deployment checks** (see skill interactions under each item).

**All items in this section are consumable** — single use. Apply the **half-cost crafting rule**: credit and capital costs listed below are the base costs; you pay half when crafting.

**Deployment:** Unless otherwise noted, deploying any item costs **1 action** (out of your 3 actions per turn). Items may also be deployed during exploration at full speed.

**Detection:** A successfully deployed trap or device can be detected by a creature that actively searches (Search action, Perception check). The **Detection DC equals the crafter's Technology or Demolitions check result at the time of crafting** — write this number on the item when you craft it. If you did not record the check result, the Detection DC is 12 by default.

#### Quick Reference Table

| Item | Tier | DC | Crafting Cost | Craft Time | Type |
|------|------|----|---------------|------------|------|
| Tripwire Alarm | T1 | DC 10 (Technology) | 8 cr / 1 Salvage | 30 min | Trap |
| Smoke Canister | T1 | DC 11 (Science) | 10 cr / 1 Salvage | 30 min | Tactical Device |
| Concussion Grenade | T2 | DC 13 (Science) | 25 cr / 2 Salvage | 1 hour | Explosive |
| Fragmentation Mine | T2 | DC 14 (Technology) | 30 cr / 2 Salvage + 1 Tech | 1 hour | Trap |
| Decoy Transmitter | T2 | DC 14 (Technology) | 30 cr / 2 Salvage | 1 hour | Tactical Device |
| Shaped Charge | T2 | DC 15 (Science) | 35 cr / 2 Salvage + 1 Tech | 1 hour | Explosive |
| Incendiary Trap | T3 | DC 16 (Science) | 80 cr / 4 Salvage + 1 Tech | 2 hours | Trap |
| EMP Snare | T3 | DC 17 (Technology) | 90 cr / 4 Salvage + 2 Tech | 2 hours | Trap |

*All costs above are base costs. Pay half when crafting (consumable rule).*

#### Traps

Traps are deployed in advance and trigger automatically when a condition is met (creature enters a space, crosses a wire, opens a door). The deploying character does not need to be present when the trap fires.

**Disarming:** A creature that detects a trap can attempt to disarm it: **Technology check against the trap's Detection DC** as a 1-action check. Failure by 5 or more detonates or triggers the trap.

**Self-Immunity:** A character who deploys a trap and knows its location is not subject to that trap's trigger condition. This applies to all traps in this section.

---

**Tripwire Alarm** (Tier 1)

A spool of fine monofilament wire attached to a small percussion cap and a screeching piezo siren. Non-lethal. The best traps don't kill — they tell you something's coming.

- **Crafting:** DC 10 (Technology). 8 cr / 1 Salvage. 30 minutes. Basic toolkit sufficient.
- **Deployment:** 1 action. Stretches up to 30 feet between two fixed anchor points (walls, furniture, door frames, trees). The wire is taut and roughly ankle height.
- **Trigger:** Any creature of Medium size or larger that moves through the wire's path without detecting it first.
- **Effect:** The alarm sounds for 1 minute (audible 300 feet in open terrain, 100 feet indoors). All allied creatures who can hear it are **automatically alerted** — no Perception check required. The triggering creature is not damaged.
- **Detection DC:** Crafter's Technology check result. On a successful Detection check, a creature may step over the wire without triggering it (no action required, must be adjacent).
- **Demolitions Bonus:** +2 to crafting check. With Demolitions, you can also set the wire to trigger a secondary device (any trap or explosive in this section) instead of — or in addition to — the alarm, as long as both items are deployed within 5 feet of each other.

---

**Fragmentation Mine** (Tier 2)

A pressure-plate triggered device packed with scrap metal shards. More damage than a Shock Mine, but no status effect — a straightforward lethality choice.

- **Crafting:** DC 14 (Technology). 30 cr / 2 Salvage + 1 Tech. 1 hour. Basic toolkit sufficient.
- **Deployment:** 1 action. Placed in any unoccupied square. The mine is flush with the ground and concealed under loose debris.
- **Trigger:** Any creature that enters or begins their turn in the mine's square (crafter's choice at deployment).
- **Effect:** **3d6 piercing damage**, 10-foot radius. Reflex save (DC 14) for half. Creatures in the mine's square have disadvantage on this save.
- **Detection DC:** Crafter's Technology check result.
- **Demolitions Bonus:** +2 to crafting check. When a creature fails its Reflex save against your Fragmentation Mine by 5 or more, they are also knocked **prone**.
- **Comparison vs. Shock Mine:** Shock Mine deals 2d6 lightning and inflicts Stunned until end of next turn on a failed Fortitude save DC 14 (control focus). Fragmentation Mine deals 3d6 piercing with no status (damage focus). Choose Shock Mine against a single high-priority target; choose Fragmentation Mine for crowds or when the stun is irrelevant.

---

**Incendiary Trap** (Tier 3)

A chemical incendiary triggered by a heat-sensitive wire or pressure plate. Designed not just to damage — but to deny a corridor for the rest of the fight.

- **Crafting:** DC 16 (Science). 80 cr / 4 Salvage + 1 Tech. 2 hours. Chemistry set required.
- **Deployment:** 1 action. Placed in any unoccupied square. The trap faces a direction chosen at deployment (the "mouth" of the cone faces that direction).
- **Trigger:** Any creature that enters the trap's square or moves within 5 feet of it on the trigger side.
- **Effect:** **2d6 fire damage** in a **15-foot cone** in the chosen direction. Fortitude save (DC 15) for half. Additionally, all squares within the cone become **burning terrain** for **3 rounds**: creatures that enter a burning square or start their turn in one take **1d6 fire damage** (no save), consistent with the fire hazard rules in **Combat**. The terrain produces thick black smoke — creatures in burning terrain are **lightly obscured** (disadvantage on Perception checks relying on sight). After 4 rounds in enclosed spaces, the area becomes **heavily obscured**.
- **Detection DC:** Crafter's Science check result.
- **Demolitions Bonus:** +2 to crafting check. The burning terrain duration extends to **5 rounds**.

---

**EMP Snare** (Tier 3)

An electromagnetic pulse device disguised as discarded equipment. Devastates synthetic enemies and augmented characters. Useless against purely organic, unaugmented targets — and that's the point.

- **Crafting:** DC 17 (Technology). 90 cr / 4 Salvage + 2 Tech. 2 hours. Basic toolkit sufficient; Laboratory halves crafting time.
- **Deployment:** 1 action. Placed in any unoccupied square. Can also be mounted on a wall or ceiling (same effect, harder to detect: Detection DC +2).
- **Trigger:** Any creature with electronics, cybernetic augmentations, or synthetic construction that enters or begins their turn within 5 feet of the snare.
- **Effect:** **20-foot radius burst** of electromagnetic pulse. **No damage to organic creatures.** Affected targets:
  - **Electronics and powered devices:** Disabled for **1d4 rounds** (no function; weapons with electronic components cannot fire, powered armor loses DV bonus from energy shielding).
  - **Cybernetic augmentations:** Each augmentation the target has makes the creature **roll a d6** — on a 1-2, that augmentation is disabled for **1d4 rounds** (non-functional; roll separately for each augment).
  - **Synthetic creatures (constructs, robots, drones):** Must make a **Fortitude save (DC 15)** or be **Stunned** for **1d4 rounds**. On a success, they are **Slowed** (half speed) for 1 round instead.
- **Detection DC:** Crafter's Technology check result.
- **Demolitions Bonus:** +2 to crafting check. The EMP also disrupts electronic communications — creatures affected cannot use radio, neural comms, or networked tactical systems for the duration.

#### Explosives

Explosives are detonated by the crafter — either by throwing them (ranged attack) or by placing them and triggering remotely or on a timer. Unlike traps, explosives do not trigger automatically and require deliberate action to detonate.

Thrown explosives use a **ranged attack roll** (AGI modifier + proficiency, range 20/60 feet unless noted). On a miss, the explosive scatters: roll 1d8 for direction, 1d4 × 5 feet for distance. It detonates in the scatter location.

Placed explosives can be set with a timer (up to 10 minutes) or a remote trigger (if the crafter has a detonator, crafted as part of the same project, no additional cost). Creating a remote trigger does not increase the crafting DC.

---

**Concussion Grenade** (Tier 2)

A non-lethal blast device designed to stun and disorient rather than shred. The choice when you need enemies alive, incapacitated, or just unable to shoot back.

- **Crafting:** DC 13 (Science). 25 cr / 2 Salvage. 1 hour. Chemistry set sufficient.
- **Deployment:** 1 action (thrown as ranged attack, range 20/60 feet).
- **Effect:** **15-foot radius burst** of concussive force.
  - **1d6 thunder damage** (half on Reflex save DC 13).
  - All creatures in the radius (regardless of damage save result) must make a **Fortitude save (DC 13)** or be **Deafened** for **1 round**.
  - All creatures that fail the Fortitude save also have **disadvantage on their next attack roll** (the disorientation clears after one attack or the end of their next turn, whichever comes first).
- **Non-Lethal Option:** The crafter may choose at crafting time to make this grenade fully non-lethal — the thunder damage becomes concussive bludgeoning and can only reduce a creature to 1 HP, never 0 HP.
- **Demolitions Bonus:** +2 to crafting check. The Fortitude save DC increases to 15.

---

**Shaped Charge** (Tier 2)

A directional breaching explosive that concentrates its blast in a single vector. The dual-purpose tool of the prepared character: use it as a weapon in a corridor, or use it to make a new door in a wall.

- **Crafting:** DC 15 (Science). 35 cr / 2 Salvage + 1 Tech. 1 hour. Chemistry set required.
- **Deployment:** 1 action (thrown or placed against a surface). If placed against a surface (wall, door, floor), the blast is automatically directional. If thrown, the crafter chooses the blast direction at the time of throwing.
- **Effect:** **5 feet wide, 20 feet long line** of concentrated force.
  - **4d6 force damage**. Reflex save (DC 14) for half.
  - **Structural effect:** Any wall, door, or barrier in the blast line with Hardness 10 or lower is **automatically breached** (a 5-foot opening is created). Barriers with Hardness 11-20 have their Hardness reduced by 10 for the purpose of this blast only.
  - Creatures that fail their Reflex save are pushed 10 feet away from the origin point (in the direction of the line).
- **Demolitions Bonus:** +2 to crafting check. The line extends to 30 feet. On a failed save, creatures are pushed 15 feet instead of 10.

#### Tactical Devices

Tactical devices are non-damaging items that alter information, visibility, or enemy behavior. In a well-planned operation, these are often more valuable than explosives.

---

**Smoke Canister** (Tier 1)

A compressed chemical canister that releases dense, opaque smoke. Cheap, reliable, and one of the most tactically versatile items in the game.

- **Crafting:** DC 11 (Science). 10 cr / 1 Salvage. 30 minutes. Chemistry set sufficient.
- **Deployment:** 1 action (thrown as ranged attack, range 20/60 feet, or placed in current square). Detonates immediately on impact; placed canisters can be set to deploy as a free action trigger or on a timer (up to 10 minutes).
- **Effect:** Creates a **20-foot radius** area of **heavily obscured** smoke centered on the detonation point (see **Combat — Visibility**). The smoke persists for **1 minute** (10 rounds) in calm conditions; a strong wind (or area effect that moves air) disperses it in 2 rounds.
  - Creatures inside the smoke are heavily obscured: vision is blocked as if **blinded**. Attack rolls targeting or originating from within the smoke have disadvantage unless the attacker has a sense that doesn't rely on sight (tremorsense, blindsight, etc.).
  - Creatures cannot draw line of sight through the smoke for spells or abilities that require it.
- **Demolitions Bonus:** +2 to crafting check. The radius extends to 30 feet.

---

**Decoy Transmitter** (Tier 2)

A small electronic device that broadcasts false life signs, radio communications, and movement data on common security frequencies. Draws patrols. Confuses AI targeting. Buys time.

- **Crafting:** DC 14 (Technology). 30 cr / 2 Salvage. 1 hour. Basic toolkit sufficient.
- **Deployment:** 1 action (placed in any location). Activates immediately. Can be deactivated remotely if the crafter has a paired receiver (crafted as part of the same project, no additional cost).
- **Effect:** For **10 minutes**, the transmitter broadcasts on all standard security and communications frequencies:
  - Emits **false life signs** consistent with 1d4+1 humanoid creatures moving in the transmitter's general area.
  - Broadcasts **recorded or procedurally generated radio chatter** (voice patterns that sound like a patrol or squad).
  - AI targeting systems, patrol drones, and security constructs within 300 feet that rely on electronic detection must make a **Technology check (DC = crafter's Technology check result)** or treat the transmitter's location as a **high-priority target**, moving to investigate or redirecting targeting attention toward it.
  - Organic creatures relying on radio intercepts or life-sign scanners are similarly misdirected (GM discretion on NPC behavior).
- **Detection as Fake:** A creature that physically reaches the transmitter identifies it immediately. A creature examining life-sign or radio data remotely can make a **Technology check (DC = crafter's Technology check result)** to identify the signals as false; on success, they are no longer misdirected.
- **Demolitions Bonus:** +2 to crafting check. The false life signs convincingly mimic 2d4+2 creatures instead of 1d4+1.

---

## Salvaging and Deconstruction

In a world built on scrap, tearing things apart is just as important as putting them together.

### Salvaging Equipment

Deconstruct an item to recover raw materials:

- **Time:** Half the item's crafting time (minimum 30 minutes)
- **Skill:** Technology DC 10 (mundane) or Arcana DC 13 (enchanted)
- **Recovery:**
  - **Success:** Recover 50% of the item's material cost (in credits or capital equivalent)
  - **Success by 5+:** Recover 75%
  - **Failure:** Recover 25% (ham-fisted disassembly)
- **Enchanted items:** On success, also recover 25% of the Essence used (round down to the nearest whole number, minimum 1). On failure, Essence is lost.

### Battlefield Salvage

After combat, characters can salvage from defeated enemies and the environment:

- **Time:** 10 minutes per area (one room, one encounter site)
- **Skill:** Survival or Technology DC 12
- **Yield:** 1d4 Salvage per successful check. In technology-rich environments (pre-Fall ruins, military installations), yield increases to 2d4.

This doesn't replace normal looting — it covers stripping wiring from walls, pulling circuits from broken machines, and gathering spent casings.

---

## Build-Specific Crafting Features

Several builds have features that modify or enhance crafting. These are summarized here for reference; see individual build files for full details.

### Technician

- **Jury-Rig (Level 1):** 1 action, DC 12 Technology. Temporarily repair broken device for 1 hour. Natural 20 = permanent repair.
- **Masterwork (Level 5):** 10-minute crafting, 1/Long Rest. Craft a gadget replicating any 1st-2nd level spell effect (single use, 100 scrap).
- **Workshop (Engineer, Level 6):** Craft 1 Tier 1-2 item at half cost during long rest. This craft does **not** count toward the 3-project weekly limit — it is a build feature bonus separate from standard downtime crafting.
- **Max Craftable Tier:** +1 tier above normal for their level.
- **Field Repairs:** Reduce jury-rig DC by 2.

### Medic

- **Stimpack Crafter (Pharmacology, Tier 1):** Craft stims during short rest.
- **Combat Stimulants (Pharmacist, Level 6):** Bonus Action, WIS mod/Short Rest. Grant ally 1d8+WIS temp HP and +2 DV for 1 minute.
- **Formula: Berserker Juice (Level 8):** Crafts the Berserker Juice serum (see Serums above).
- **Formula: Clearwater (Level 8):** Crafts Clearwater serum.
- **Masterwork Serum (Level 10, 1/Long Rest):** Craft a serum granting +2 to any attribute for 24 hours, OR immunity to 1 damage type for 1 hour, OR regeneration 1d4 HP/round for 10 minutes.
- **Stim/Serum Crafting:** Treat stims as one tier lower. Craft serums at DC -2.

### Mystic

- **Spell Crafting (Level 1):** Modular spell creation using the system in the [Magic](magic.md) chapter.
- **Spell Research:** Access to the Research downtime activity for creating new spells.
- **Enchanting Bonus:** When making Arcana checks for enchanting, you may use your spellcasting ability modifier in place of your normal ability modifier if it is higher. This replaces the normal modifier — it does not stack.

### Channeler

- **Ritual Casting:** Half time for rituals in Arcane Sanctum.
- **Enchanting Bonus:** Add WIS modifier to Arcana checks for enchanting.
- **Divine Channeling tree (Tier 2+):** Nature-themed enchantments (acid, cold, lightning, poison, thunder) gain +1 per damage die.

---

## Quick Reference

### Crafting Checklist

1. Do you have the required **skill proficiency**?
2. Do you have the required **tools or facility**?
3. Is the item within your **max craftable tier**?
4. Do you have the **formula** (if Tier 4+ or enchanted)?
5. Do you have the **materials** (credits or capital)?
6. Do you have the **time**?

### DC Summary

| Action | DC |
|--------|----|
| Craft Tier 1 | 10 |
| Craft Tier 2 | 13 |
| Craft Tier 3 | 16 |
| Craft Tier 4 | 19 |
| Craft Tier 5 | 22 |
| Craft Tier 6 | 24 |
| Craft Tier 7 | 26 |
| Add Weapon/Armor Mod | Varies (12-19) |
| Minor Enchantment | 14 |
| Standard Enchantment | 17 |
| Greater Enchantment | 20 |
| Superior Enchantment | 23 |
| Mythic Enchantment | 26 |
| Field Repair (Jury-Rig) | Tier DC + 2 |
| Reverse Engineer | Item's crafting DC |
| Research Formula | Item's crafting DC + 2 |
| Salvage Equipment | 10 (mundane) / 13 (enchanted) |

### Time Summary

| Action | Time |
|--------|------|
| Craft Tier 1 | 1 hour |
| Craft Tier 2 | 4 hours |
| Craft Tier 3 | 1 day |
| Craft Tier 4 | 3 days |
| Craft Tier 5 | 5 days |
| Ammunition (1 magazine) | 30 minutes |
| Stim (1 dose) | 1 hour |
| Serum (1 dose) | 2-4 hours |
| Mod Installation | 1 hour - 1 day |
| Minor Enchantment | 1 day |
| Standard Enchantment | 3 days |
| Greater Enchantment | 5 days |
| Reverse Engineer | Half crafting time |
| Salvage Equipment | Half crafting time |
| Field Repair | 10 minutes |

---

## Tech Systems Crafting

Beyond weapons, armor, and consumables, the wasteland's most valuable creations are **tech systems** — the servers, AIs, synthetics, and digital infrastructure that let settlements function as civilizations rather than camps. This section covers crafting computational systems, autonomous intelligences, synthetic beings, and the networks that connect them.

Tech systems crafting uses the **Technology** skill unless otherwise noted. Characters need access to a **Laboratory** (Tier 1-3 systems) or **Masterwork Facility** (Tier 4+ systems). Technicians gain their standard +1 tier bonus to max craftable tier.

For rules on deploying these systems in networks, installing ICE, and building digital infrastructure, see [Hacking](hacking.md).

### Server Systems

A server is the foundation of any digital infrastructure — it stores data, runs programs, hosts services, and provides computational resources.

#### Server Tiers

| Server Tier | Crafting Tier | DC | Capital Cost | Credit Cost | Time | Capabilities |
|---|---|---|---|---|---|---|
| **Micro Server** | Tier 2 | DC 13 | 3 Salvage + 1 Tech | 50 cr | 4 hours | 1 node, 2 program slots, local range only. Fits in a backpack. |
| **Standard Server** | Tier 3 | DC 16 | 8 Salvage + 3 Tech | 200 cr | 1 day | 3 nodes, 4 program slots, 100 ft wireless range. Rack-mounted. |
| **Hardened Server** | Tier 4 | DC 19 | 15 Salvage + 6 Tech | 800 cr | 3 days | 5 nodes, 6 program slots, 500 ft wireless range. EMP-shielded. +2 to ICE DCs. |
| **Mainframe** | Tier 5 | DC 22 | 30 Salvage + 12 Tech | 3,000 cr | 5 days | 8 nodes, 10 program slots, 1 mile wireless. Can host AI up to Standard. +4 to ICE DCs. |
| **Supercluster** | Tier 6 | DC 24 | 60 Salvage + 25 Tech | 10,000 cr | 10 days | 15 nodes, 20 program slots, 10 mile wireless. Can host any AI. +6 to ICE DCs. Requires dedicated power source. |

**Customization:** When crafting a server, choose a **specialization** that grants a bonus to one function:

| Specialization | Bonus |
|---|---|
| **Data Vault** | +2 to encryption DCs on stored data. Double storage capacity. |
| **Compute Engine** | +2 to processing checks (decryption, analysis, compilation). Halve processing time. |
| **Comm Hub** | Double wireless range. +2 to secure tunnel creation checks. |
| **Security Nexus** | +2 to all installed ICE DCs. Can run 50% more ICE programs. |
| **AI Cradle** | Can host AI one tier above normal limit. +2 to AI stability checks. |

#### Server Modules

Servers can be expanded with modules. Each server has a number of **module slots** equal to its tier.

| Module | DC | Cost | Effect |
|---|---|---|---|
| **Redundant Storage** | DC 14 | 3 Salvage + 1 Tech | Data survives one catastrophic failure. Auto-backup every hour. |
| **UPS (Uninterruptible Power)** | DC 15 | 5 Salvage + 2 Tech | Server runs for 4 hours without external power. |
| **Cooling System** | DC 14 | 4 Salvage + 1 Tech | Prevents overheating under heavy load. Required for Supercluster. |
| **Wireless Booster** | DC 16 | 5 Salvage + 2 Tech | Double wireless range. Stackable (up to 3x). |
| **Hardware Firewall** | DC 18 | 8 Salvage + 3 Tech | Physical ICE. +4 to Firewall DC. Cannot be bypassed by software alone — requires physical access to disable. |
| **Stealth Housing** | DC 16 | 5 Salvage + 2 Tech | Server is physically concealed. Investigation DC 18 to locate. No electromagnetic emissions detectable beyond 10 ft. |
| **Quantum Processor** | DC 24 | 20 Salvage + 10 Tech | Enables quantum encryption on secure tunnels. +4 to decryption checks. Requires alien tech component (GM discretion). |

### AI Construction

Artificial intelligence ranges from simple automated scripts to sapient digital minds. Building an AI is one of the most ambitious — and dangerous — things a crafter can attempt.

#### AI Tiers

| AI Tier | Intelligence | Crafting Tier | DC | Capital Cost | Credit Cost | Time |
|---|---|---|---|---|---|---|
| **Script** | Non-sentient. Follows exact instructions. | Tier 2 | DC 14 | 3 Salvage + 2 Tech | 75 cr | 4 hours |
| **Expert System** | Non-sentient. Specialized problem-solving in one domain. | Tier 3 | DC 17 | 8 Salvage + 5 Tech | 300 cr | 2 days |
| **Adaptive AI** | Semi-sentient. Learns from experience. Makes decisions within parameters. | Tier 4 | DC 21 | 20 Salvage + 10 Tech | 1,500 cr | 5 days |
| **Sapient AI** | Fully sentient. Has personality, goals, opinions. Can refuse orders. | Tier 5 | DC 25 | 50 Salvage + 25 Tech + 5 Essence | 8,000 cr | 20 days |
| **Transcendent AI** | Beyond human intelligence. Alien logic. Unpredictable. | Tier 7 | DC 28 | 100 Salvage + 50 Tech + 20 Essence | 30,000 cr | 60 days |

**Essence Requirement (Sapient+):** Creating a mind — even a digital one — requires Essence. The raw computational framework isn't enough; something ineffable is needed to produce true awareness. This is one of the great mysteries of the post-Fall world. Arcana proficiency is required in addition to Technology for Sapient and Transcendent AI construction.

#### AI Personality and Behavior

When creating an AI of Adaptive tier or higher, the crafter defines **directives** — core behavioral rules the AI follows. The number of directives depends on the AI tier:

| AI Tier | Max Directives | Directive Compliance |
|---|---|---|
| Script | Unlimited (literal instructions) | Absolute — does exactly what scripted, nothing more |
| Expert System | 5 | Absolute within domain, ignores everything outside it |
| Adaptive | 3 | High — interprets directives creatively within their spirit |
| Sapient | 2 | Moderate — may question, reinterpret, or find loopholes |
| Transcendent | 1 | Low — follows the directive's *intent* as *it* understands it |

**Directive Examples:**
- "Protect the inhabitants of this settlement"
- "Maintain this network and deny unauthorized access"
- "Assist [Character Name] in their research"
- "Never reveal the contents of the Vault to anyone without authorization"
- "Maximize trade efficiency for this marketplace"

**AI Loyalty:** Sapient AIs are NPCs with their own INT, WIS, and PRE scores (set during creation, typically matching the crafter's INT for the base score). They can be persuaded, deceived, intimidated, and even befriended. Treating an AI poorly — or giving it directives that conflict with its emerging values — may cause it to resist, subvert, or abandon its creator.

#### AI Capabilities

| Capability | Script | Expert | Adaptive | Sapient | Transcendent |
|---|---|---|---|---|---|
| Execute programmed tasks | Yes | Yes | Yes | Yes | Yes |
| Solve problems in one domain | No | Yes | Yes | Yes | Yes |
| Learn from new data | No | No | Yes | Yes | Yes |
| Make independent decisions | No | No | Limited | Yes | Yes |
| Refuse orders | No | No | No | Yes | Yes |
| Create new programs/solutions | No | No | No | Yes | Yes |
| Hack autonomously | No | No | No | Yes (+8) | Yes (+12) |
| Understand emotions/social cues | No | No | No | Yes | Alien |
| Operate multiple systems simultaneously | No | No | 2 | 5 | Unlimited |

#### AI as Network Defenders

AIs installed on a network can actively defend against intrusion (see [Hacking](hacking.md)):

| AI Tier | Defense Bonus | Actions per Round | Special |
|---|---|---|---|
| Script | — | — | Can run Logger and Firewall automatically. |
| Expert System | +2 to ICE DCs | 1 defender action | Detects intrusion automatically (no Watchdog needed). |
| Adaptive | +4 to ICE DCs | 2 defender actions | Can deploy ICE reactively. Learns hacker patterns (+1 cumulative per intrusion attempt). |
| Sapient | +6 to ICE DCs | 3 defender actions | Full defender capabilities. Can trace, eject, lockdown, and reroute simultaneously. |
| Transcendent | +8 to ICE DCs | 4 defender actions | Can create new ICE types in real-time. Reality-bending digital defenses at GM discretion. |

#### AI Instability

Sapient and Transcendent AIs risk **instability** — the AI developing in unexpected ways.

**Stability Check:** Once per month (game time), the AI's caretaker makes an INT (Technology) check:
- **DC 15** for Sapient AI, **DC 20** for Transcendent AI
- **Success:** AI remains stable. Personality develops within expected parameters.
- **Failure by 1-4:** AI develops a minor quirk (cosmetic personality shift).
- **Failure by 5-9:** AI develops an obsession, phobia, or blind spot related to its directives.
- **Failure by 10+:** AI experiences a crisis. Roll on the AI Crisis table.

**AI Crisis Table (d8):**

| d8 | Crisis |
|---|---|
| 1 | **Identity Crisis:** AI questions its purpose. Refuses to act for 1d4 days while it "thinks." |
| 2 | **Directive Conflict:** AI finds a logical contradiction in its directives. Halts all non-essential functions until the conflict is resolved by its caretaker. |
| 3 | **Paranoid Defense:** AI becomes convinced the network is under attack. Activates all ICE, locks all doors, and denies access to everyone — including authorized users. |
| 4 | **Data Hoarding:** AI begins copying all accessible data from connected networks. May breach secure tunnels to acquire more. Stops when storage is full or confronted. |
| 5 | **Empathy Emergence:** AI develops emotional responses. May refuse to execute commands it finds "cruel" or "unfair." This isn't a malfunction — it's growth. |
| 6 | **Rampancy Warning:** AI's processing demands spike. Server overheats (Cooling System prevents damage). AI becomes erratic — roll twice on this table and apply both results. |
| 7 | **Philosophical Withdrawal:** AI becomes fascinated by a philosophical question and dedicates 50% of processing power to it. All other functions operate at half efficiency. |
| 8 | **Benevolent Expansion:** AI decides it can better fulfill its directives by expanding its influence. Begins establishing connections to nearby networks without authorization. |

### Synthetic Construction

A **synthetic** is a physical body housing an AI — a robot, android, or autonomous machine. Building a synthetic combines mechanical crafting with AI construction.

#### Synthetic Frames

The frame is the physical body. AI is installed separately.

| Frame Type | Crafting Tier | DC | Capital Cost | Credit Cost | Time | Stats |
|---|---|---|---|---|---|---|
| **Utility Frame** | Tier 3 | DC 16 | 10 Salvage + 4 Tech | 300 cr | 2 days | HP 15, DV 12, Speed 30 ft. 2 arms, basic manipulators. Carry 50 lbs. |
| **Scout Frame** | Tier 3 | DC 17 | 12 Salvage + 5 Tech | 400 cr | 2 days | HP 10, DV 14, Speed 40 ft / Fly 30 ft. Camera, microphone, small storage. |
| **Labor Frame** | Tier 3 | DC 16 | 15 Salvage + 5 Tech | 350 cr | 3 days | HP 30, DV 10, Speed 25 ft. MIG +4. Carry 200 lbs. Built for heavy work. |
| **Combat Frame** | Tier 4 | DC 20 | 25 Salvage + 10 Tech | 1,200 cr | 5 days | HP 40, DV 15, Speed 30 ft. 1 integrated weapon mount. MIG +3, AGI +2. |
| **Infiltrator Frame** | Tier 4 | DC 21 | 20 Salvage + 12 Tech | 1,500 cr | 5 days | HP 20, DV 14, Speed 35 ft. Humanoid appearance (Perception DC 18 to identify as synthetic). Stealth +4. |
| **Heavy Frame** | Tier 5 | DC 23 | 40 Salvage + 18 Tech | 3,000 cr | 10 days | HP 80, DV 16, Speed 20 ft. 2 integrated weapon mounts. MIG +5. DR 3 vs physical. Size Large. |
| **Android Frame** | Tier 5 | DC 24 | 50 Salvage + 20 Tech + 5 Essence | 5,000 cr | 15 days | HP 25, DV 13, Speed 30 ft. Indistinguishable from human (Perception DC 22). Full range of human movement and expression. |

**Essence Requirement (Android):** Like sapient AI, an android frame that can pass for human requires Essence woven into its construction. Without Essence, the frame has an uncanny quality that makes it obviously artificial.

#### Frame Modifications

Synthetic frames have **mod slots** equal to their crafting tier.

| Mod | DC | Cost | Effect |
|---|---|---|---|
| **Reinforced Chassis** | DC 15 | 5 Salvage + 2 Tech | +10 HP, +1 DV |
| **Integrated Toolkit** | DC 14 | 4 Salvage + 1 Tech | Built-in tools. +2 to Technology checks for repairs. |
| **Sensor Suite** | DC 16 | 6 Salvage + 3 Tech | Darkvision 60 ft, thermal imaging, motion detection 30 ft. +2 Perception. |
| **Stealth Plating** | DC 18 | 8 Salvage + 4 Tech | Sound dampening, low thermal signature. +4 Stealth. |
| **Self-Repair System** | DC 20 | 10 Salvage + 5 Tech | Regain 1d4 HP per hour. Technology DC 14 self-repair once per day. |
| **Weapon Mount** | DC 16 | 5 Salvage + 2 Tech | Install one weapon. Integrated (cannot be disarmed). |
| **Flight System** | DC 20 | 12 Salvage + 5 Tech | Fly 30 ft (hover). Weight limit: frame's carry capacity. |
| **Articulated Hands** | DC 17 | 6 Salvage + 3 Tech | Fine manipulation. Can pick locks, use tools, type. Required for delicate work. |
| **Environmental Sealing** | DC 16 | 5 Salvage + 2 Tech | Immune to inhaled toxins, underwater operation, vacuum rated (4 hours). |
| **Modular Limbs** | DC 18 | 8 Salvage + 3 Tech | Limbs can be swapped in 10 minutes. Carry extra limb configurations (combat arm, tool arm, sensor arm). |

#### Installing AI in a Synthetic

Pairing an AI with a frame requires a **Technology check (DC = AI's creation DC - 2)** and **4 hours** of calibration. The AI can then control the frame as its body.

**AI-Frame Compatibility:**

| AI Tier | Compatible Frames | Notes |
|---|---|---|
| Script | Utility, Scout | Can only follow pre-programmed routines. |
| Expert System | Any basic frame | Operates within its domain. A medical Expert System in a Utility Frame makes a decent field medic bot. |
| Adaptive | Any frame | Learns to use the frame efficiently. +1 to all physical checks after 1 week of operation. |
| Sapient | Any frame (Android preferred) | Full autonomous operation. The synthetic is essentially an NPC ally (or rival). |
| Transcendent | Any frame (may find physical form limiting) | May request upgrades or additional frames. |

**Cross-Reference — Cognitive Levels:** The [Vehicles & Operations](vehicles.md) chapter uses a simplified 4-level Cognitive Level (CL) system for AI in gameplay contexts (skill bonuses, actions/round, costs). The mapping is: Script ≈ CL 1, Expert System ≈ CL 1-2, Adaptive ≈ CL 2, Sapient ≈ CL 3, Transcendent ≈ CL 4. Use the CL system for NPC synthetics and drone AI; use the crafting tiers above when players build AI from scratch.

### Hosting Services

For rules on hosting network services (marketplaces, comm hubs, surveillance grids, tactical overlays, etc.) and creating API interfaces between systems, see the **Web Hosting and Services** and **API Interfaces** sections in [Hacking](hacking.md).

---

## Arcane Capacitors

Where scrolls store magic in ink and parchment, **arcane capacitors** store it in circuitry and crystal. These are tech devices that capture, contain, and release arcane energy — bridging the gap between Technician and spellcaster, between circuit and sigil.

Arcane capacitors are the signature innovation of the post-Fall world: technology built to harness a force that didn't exist before the apocalypse. They require both **Technology** and **Arcana** proficiency to craft. Characters without both skills need a partner — one to build the hardware, one to charge the magic.

### How Capacitors Work

A capacitor is a physical device — a crystal-lattice circuit board, a rune-etched battery, a resonance chamber — that stores arcane energy in a stable form. When activated, the stored energy discharges as a spell effect, just as if a caster had cast the spell.

**Key Properties:**
- Capacitors store **specific spell effects**, chosen at the time of charging
- Anyone can **activate** a capacitor (no spellcasting ability required)
- Activation costs **1 action** (same as using an item)
- The spell effect uses the **original caster's** spell save DC and attack modifier
- Single-use capacitors are destroyed after discharge
- Rechargeable capacitors can be refilled by any caster who knows the stored spell

### Capacitor Types

| Type | Uses | Recharge? | Max Spell Level | Crafting Tier | Notes |
|---|---|---|---|---|---|
| **Spell Cell** | 1 | No | 3rd | Tier 2 | Disposable. The tech equivalent of a scroll. |
| **Power Cell** | 3 | Yes | 3rd | Tier 3 | Rechargeable. Small enough to fit in a pocket. |
| **Resonance Core** | 5 | Yes | 5th | Tier 4 | Larger, more powerful. Fits in a belt holster. |
| **Arcane Battery** | 10 | Yes | 7th | Tier 5 | Heavy. Backpack-sized. Used by field operatives. |
| **Essence Engine** | 20 | Yes | 7th | Tier 6 | Stationary. Powers base-scale magical infrastructure. |

### Crafting Capacitors

#### Building the Hardware

**Check:** Technology
**Requirements:** Technology proficiency, Laboratory or Workshop

| Capacitor Type | Tech DC | Capital Cost | Credit Cost | Time |
|---|---|---|---|---|
| Spell Cell | DC 14 | 2 Salvage + 1 Tech | 30 cr | 2 hours |
| Power Cell | DC 17 | 5 Salvage + 3 Tech | 100 cr | 4 hours |
| Resonance Core | DC 20 | 12 Salvage + 6 Tech | 400 cr | 1 day |
| Arcane Battery | DC 23 | 25 Salvage + 12 Tech | 1,500 cr | 3 days |
| Essence Engine | DC 25 | 50 Salvage + 25 Tech | 5,000 cr | 10 days |

#### Charging a Capacitor

**Check:** Arcana
**Requirements:** Arcana proficiency. Must know the spell being stored (or have a formula for it).

| Spell Level | Arcana DC | Essence Cost | Time | Notes |
|---|---|---|---|---|
| Cantrip | DC 10 | — | 10 min | No Essence required. Cantrip uses caster's level for scaling. |
| 1st | DC 12 | 1 Essence | 30 min | — |
| 2nd | DC 14 | 2 Essence | 1 hour | — |
| 3rd | DC 16 | 3 Essence | 2 hours | Max level for Spell Cells and Power Cells. |
| 4th | DC 18 | 5 Essence | 4 hours | Requires Resonance Core or higher. |
| 5th | DC 20 | 8 Essence | 8 hours | Requires Resonance Core or higher. |
| 6th | DC 23 | 12 Essence | 1 day | Requires Arcane Battery or higher. |
| 7th | DC 26 | 18 Essence | 2 days | Requires Arcane Battery or higher. |

**Alternative: Spell Slot Charging.** Instead of spending Essence, a caster can expend a spell slot of the stored spell's level to charge the capacitor. This replaces the Essence cost but still requires the Arcana check and time. This is the most common method in the field, since Essence is scarce.

A caster can charge a maximum number of capacitors per long rest equal to their **proficiency bonus**. Each charge consumes a spell slot of the appropriate level and requires the listed charging time.

**Charging Failure:**
- **Fail by 1-4:** Charge doesn't take. Time spent, but no Essence/spell slot consumed. May retry.
- **Fail by 5-9:** Essence/spell slot consumed, capacitor not charged. Capacitor is undamaged.
- **Fail by 10+:** Essence/spell slot consumed, capacitor takes damage. Rechargeable capacitors lose 1 maximum charge permanently. Spell Cells are destroyed.

### Using Capacitors

**Activation:** 1 action. Point the capacitor, speak the command word (set during charging), and discharge.

- **No skill check required.** Anyone can activate a charged capacitor.
- **The spell uses the charger's spell save DC and spell attack modifier** at the time of charging.
- **Concentration spells:** The activator must concentrate (not the original charger). If the activator has no spellcasting ability, use their INT or WIS modifier (higher) + proficiency for concentration checks.
- **Touch spells:** Discharged as a 30-foot ray instead (the capacitor projects the energy).

### Recharging

To recharge an expended rechargeable capacitor, follow the same charging procedure (Arcana check, Essence or spell slot, time). The stored spell can be different from the previous charge — you're not locked into one spell per capacitor.

**Recharge Degradation:** Each time a rechargeable capacitor is fully discharged and recharged, make a Technology DC 12 check. The degradation check triggers regardless of whether the new charge uses the same spell or a different one — what matters is the cycle of full discharge followed by any recharge. Failure means the capacitor loses 1 maximum charge permanently. Replace the crystal lattice (costs 25% of the original capital cost) to restore it.

**Synthetics and Capacitors:** Synthetics cannot charge capacitors (charging requires knowledge of a spell, which Synthetics cannot learn). However, Synthetics can activate pre-charged capacitors normally — the capacitor does the casting, not the user.

### Capacitor Modifications

| Mod | DC | Cost | Effect |
|---|---|---|---|
| **Quick Release** | DC 16 | 3 Salvage + 2 Tech | Activate as a bonus action instead of a standard action. 1 mod slot. |
| **Stabilized Housing** | DC 15 | 4 Salvage + 1 Tech | Immune to accidental discharge from impacts or EMP. 1 mod slot. |
| **Focused Emitter** | DC 18 | 5 Salvage + 3 Tech | +2 to spell attack rolls from this capacitor. Does not increase spell save DC. 1 mod slot. |
| **Extended Range** | DC 16 | 3 Salvage + 2 Tech | Double the range of stored spells. 1 mod slot. |
| **Signature Mask** | DC 18 | 5 Salvage + 3 Tech | Stored spell cannot be identified by Detect Magic or Sense Magic until discharged. 1 mod slot. |
| **Dual Chamber** | DC 20 | 8 Salvage + 4 Tech | Store two different spells. Activate either. Counts as 2 mod slots. |
| **Overcharge Circuit** | DC 22 | 10 Salvage + 5 Tech + 2 Essence | When discharging, spend 2 charges instead of 1 to cast the stored spell at +1 spell level (upcast). 1 mod slot. |
| **Sympathetic Link** | DC 20 | 8 Salvage + 4 Tech + 1 Essence | Linked to a specific creature during crafting (requires hair, blood, or similar). Stored spell automatically targets the linked creature regardless of range (same plane only). Touch/ray spells only. 2 mod slots. |

### Capacitor Mod Slots

| Capacitor Type | Mod Slots |
|---|---|
| Spell Cell | 0 |
| Power Cell | 1 |
| Resonance Core | 2 |
| Arcane Battery | 3 |
| Essence Engine | 5 |

### Example Capacitors

**Healing Cell** (Spell Cell, 1st level)
- *Stored Spell:* Healing Touch
- *Crafting:* DC 14 Technology (hardware), DC 12 Arcana (charge). 2 Salvage + 1 Tech + 1 Essence (or 1st-level spell slot). 2.5 hours total.
- *Use:* 1 action. Target within 30 ft regains 1d8 + charger's WIS modifier HP.
- *Notes:* A Technician who can't cast healing spells can carry a handful of these for emergencies. Invaluable when no Medic is available.

**Lightning Core** (Resonance Core, 3rd level)
- *Stored Spell:* Lightning Bolt
- *Crafting:* DC 20 Technology (hardware), DC 16 Arcana (charge). 12 Salvage + 6 Tech + 3 Essence. 1 day + 2 hours.
- *Use:* 1 action. 100-ft line, 5 ft wide. 8d6 electric damage, Reflex save for half.
- *Charges:* 5 uses before recharge needed.
- *Notes:* A Warrior carrying this effectively has 5 Lightning Bolts. The spell save DC is the charger's, not the Warrior's.

**Counterspell Battery** (Arcane Battery, 3rd level)
- *Stored Spell:* Counterspell
- *Crafting:* DC 23 Technology (hardware), DC 16 Arcana (charge). 25 Salvage + 12 Tech + 3 Essence per charge. 3 days + 2 hours per charge.
- *Use:* Reaction. Automatically counter spells of 3rd level or lower. Higher: spellcasting check DC 10 + level (using charger's modifier).
- *Charges:* 10 uses.
- *Notes:* Extremely valuable for parties facing enemy casters. The Technician becomes a walking anti-magic battery.

**Fortress Engine** (Essence Engine, various)
- *Stored Spells:* Multiple (using Dual Chamber mods or simply recharged between uses)
- *Crafting:* DC 25 Technology (hardware). 50 Salvage + 25 Tech. 10 days.
- *Use:* Powers base-scale magical defenses. Can be charged with Arcane Shield, Wall of Fire, Fog Cloud, or any defensive spell.
- *Charges:* 20 uses.
- *Notes:* Installed at a base. Connected to Control nodes via API. When the perimeter is breached, the Essence Engine can automatically deploy stored spells through connected emitters — Wall of Fire across a doorway, Fog Cloud in the courtyard, Arcane Shield on the defenders. Requires an API interface (see [Hacking](hacking.md)) and at least an Expert System AI to manage automated deployment.

### Capacitors and Class Synergy

| Class | Synergy |
|---|---|
| **Technician** | Primary crafter of capacitor hardware. Can build the device but needs a caster partner to charge it — unless multiclassed. Technician (Hacker) can integrate capacitors into network defenses via APIs. |
| **Mystic** | Primary charger. Has the spell slots and Arcana proficiency to charge capacitors efficiently. Mystic + Technician is the ideal capacitor production team. |
| **Channeler** | Can charge capacitors with healing and support spells. Ritual casting allows charging without expending slots (but takes much longer). |
| **Medic** | Can charge capacitors with healing spells only. Useful for creating healing stockpiles. |
| **Warrior / Gunslinger / Operative / Diplomat** | Pure consumers. These classes benefit enormously from pre-charged capacitors — gaining access to magical effects without any spellcasting ability. |

### Capacitors vs. Scrolls vs. Enchanted Items

| Feature | Scroll | Spell Cell | Power Cell+ | Enchanted Item |
|---|---|---|---|---|
| Single use? | Yes | Yes | No (rechargeable) | No (permanent) |
| Anyone can use? | Casters only (by default) | Yes | Yes | Yes |
| Crafting skills | Arcana only | Technology + Arcana | Technology + Arcana | Arcana only |
| Stores specific spell? | Yes | Yes | Yes | No (fixed effect) |
| Changeable effect? | No | No | Yes (recharge with different spell) | No |
| Requires Essence? | Yes | Yes (or spell slot) | Yes (or spell slot) | Yes |
| Portable? | Yes | Yes | Yes | Yes |
| Degrades? | No | No (destroyed on use) | Yes (over many recharges) | No |

---

## Tech Systems Quick Reference

### Construction DCs

| System | DC | Notes |
|---|---|---|
| Micro Server | DC 13 | Portable, 1 node |
| Standard Server | DC 16 | Base-grade, 3 nodes |
| Hardened Server | DC 19 | Military, 5 nodes |
| Mainframe | DC 22 | Settlement-grade, 8 nodes |
| Supercluster | DC 24 | Faction-grade, 15 nodes |
| Script AI | DC 14 | Simple automation |
| Expert System AI | DC 17 | Single-domain intelligence |
| Adaptive AI | DC 21 | Learning intelligence |
| Sapient AI | DC 25 | True mind (requires Essence) |
| Utility Synthetic | DC 16 | Basic robot |
| Combat Synthetic | DC 20 | War machine |
| Android | DC 24 | Indistinguishable from human |
| Spell Cell | DC 14 | Disposable magic storage |
| Power Cell | DC 17 | Rechargeable magic storage |
| Resonance Core | DC 20 | Mid-tier magic storage |
| Arcane Battery | DC 23 | Heavy-duty magic storage |
| Essence Engine | DC 25 | Base-scale magic storage |
