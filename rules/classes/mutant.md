---
game_data: true
name: Mutant
primary_stats: [MIG, END]
hit_die: d10
hp_base: 12
hp_per_level: 6
starting_humanity: 8
armor_proficiency: [Light, Medium]
weapon_proficiency: [Simple]
save_proficiencies: [Fortitude, Reflex]
skill_bonuses:
  - {skill: Athletics, bonus: 2}
  - {skill: Survival, bonus: 2}
starting_cp: 15
role: Adaptive Striker/Bruiser
magic_type: "None (15 CP/cantrip)"
level_1_features: [Mutagen Physiology, Mutations, Strain Dice]
mutations_known: 3
mutations_active: 2
strain_pool: "Proficiency bonus + END modifier (minimum 3)"
mutations_list:
  - name: Predator Claws
    passive: "Natural weapon damage die increases to 1d8"
    surge_rider: "Rend — target takes 1d4 bleed at start of its turn for 2 rounds"
  - name: Carapace
    passive: "Natural armor: DV equals 13 + END modifier (replaces armor DV if higher)"
    surge_rider: "Harden — resistance to all physical damage until start of your next turn"
  - name: Regeneration
    passive: "At start of your turn, if below half HP and above 0, heal END modifier HP"
    surge_rider: "Rapid Heal — heal 2d6 HP immediately"
  - name: Venomous
    passive: "Natural weapon attacks deal +1d4 poison damage"
    surge_rider: "Neurotoxin — target makes Fortitude save or is Poisoned for 1 minute"
  - name: Prehensile Limbs
    passive: "Natural weapon reach increases to 10 ft; advantage on grapple checks"
    surge_rider: "Constrict — target is automatically grappled; takes 1d6 bludgeoning at start of each of its turns while grappled"
  - name: Heightened Senses
    passive: "Darkvision 60 ft; advantage on Perception checks"
    surge_rider: "Predator Sense — gain blindsight 30 ft until start of your next turn"
skill_trees:
  - name: Apex Predator
    focus: Offense
    abilities:
      - {name: Savage Strikes, cp_cost: 5, tier: 1, effect: "Natural weapon crits deal triple damage"}
      - {name: Multi-Limb Attack, cp_cost: 10, tier: 2, effect: "On natural weapon hit, free secondary attack (1d6, no MIG mod)"}
      - {name: Alpha Mutation, cp_cost: 15, tier: 3, effect: "One active mutation's surge rider has no Strain cost 1/round"}
  - name: Thick Hide
    focus: Defense
    abilities:
      - {name: Damage Reduction, cp_cost: 5, tier: 1, effect: "Reduce physical damage by 1 (DR 2 at L9)"}
      - {name: Mutation Resilience, cp_cost: 10, tier: 2, effect: "Advantage vs poison/disease/radiation; immune to own mutation side effects"}
      - {name: Regenerative Tank, cp_cost: 15, tier: 3, effect: "When damaged, heal prof bonus HP at start of next turn (no stack)"}
  - name: Rapid Adaptation
    focus: Utility
    abilities:
      - {name: Quick Adapt, cp_cost: 5, tier: 1, effect: "Swap mutations as free action 1/turn instead of 1 action"}
      - {name: Third Slot, cp_cost: 10, tier: 2, effect: "Can have 3 mutations active simultaneously"}
      - {name: Evolved Biology, cp_cost: 15, tier: 3, effect: "Strain Dice become d8s; learn 2 additional mutations"}
features:
  - name: Mutagen Physiology
    level: 1
    action: Passive
    frequency: Always
    description: "Proficient with natural weapons (claws, fangs, bone spurs, tail). Natural weapons deal 1d6+MIG damage (choose bludgeoning, piercing, or slashing per attack). Count as simple melee weapons. Can use natural weapons while grappling."
  - name: Mutations
    level: 1
    action: Passive
    frequency: Always
    description: "Choose 3 mutations from list of 6. 2 mutations can be active at once. Each active mutation provides a passive benefit. Inactive mutations are dormant but can be activated via Adapt."
  - name: Strain Dice
    level: 1
    action: Passive
    frequency: "Short Rest"
    description: "Pool of d6 Strain Dice equal to proficiency bonus + END modifier (minimum 3). Replenishes on short rest. Spent to fuel Mutation Surge and other features."
  - name: Adapt
    level: 2
    action: "1 Action"
    frequency: At-Will
    description: "Swap one active mutation for an inactive known mutation. Your body physically reshapes itself — bones shift, skin hardens or softens, limbs extend or retract."
  - name: Adaptive Response
    level: 2
    action: Passive
    frequency: "1/damage type/encounter"
    description: "The first time you take damage from a specific damage type in an encounter, gain resistance to that damage type until end of your next turn."
  - name: Mutation Surge
    level: 3
    action: "On Hit"
    frequency: "Costs 1 Strain Die per use"
    description: "When you hit with a natural weapon, spend 1 Strain Die to add 1d6 damage and apply your active mutation's surge rider. Save DC = 8 + proficiency + MIG modifier."
  - name: Attribute Improvement
    level: 4
    action: Passive
    frequency: Permanent
    description: "Increase one attribute by +2, or two attributes by +1 each. Maximum 20."
  - name: Feral Evolution
    level: 5
    action: "1 Action"
    frequency: "1/Short Rest"
    description: "Enter Feral State for 1 minute. Natural weapons increase by one die size (1d6→1d8, 1d8→1d10). +2 DV from enhanced mutations. Gain temp HP = level + END mod. Mutation Surge costs 0 Strain Dice. Disadvantage on INT/PRE checks except Intimidation. Cannot cast spells or concentrate. When Feral Evolution ends, gain 1 level of exhaustion."
specializations: [Apex, Aberration, Chimera]
starting_equipment:
  - Simple weapon (backup)
  - Medium armor (scavenged, fitted around mutations)
  - "Mutant's kit: binding wraps, pain suppressants (3 doses), mirror, hooded cloak"
  - Rations (5 days)
  - 1d6 x 10 credits in salvaged goods and barter items
---
# Mutant

> **Recommended Build Guide — Classless System**
> This file describes the **Mutant recommended build**: a curated path through Ashfall's shared skill trees designed for this build's core fantasy. Under the current rules, you are **not locked to this build**. Choose a **chassis** for your starting stats and proficiencies, then spend **Character Points (CP)** in any skill trees that match your character concept.
>
> - **Chassis selection and starting stats:** see [Chassis](../chassis.md)
> - **CP economy, spending rules, and milestones:** see [Character Points](../character-points.md)
> - **Full skill tree catalog:** see [Skill Trees](../skill-trees.md)
>
> The ability descriptions, skill tree layouts, and feature details in this file remain the authoritative rules reference for those abilities. The CP values listed in the skill trees are the costs for purchasing abilities.

*You remember the moment it started. Maybe it was the radiation storm that pinned your caravan in the Crucible for three days — long enough for your teeth to ache and your skin to blister. Maybe it was the sealed bunker your scav crew cracked open, the one with the bioweapon canisters that hissed when the seals broke. Maybe it was nothing you can point to — just a morning when you woke up and your fingernails had turned to black chitin and you could hear your neighbor's heartbeat through the wall.*

*You are the Mutant. Your body is a battlefield between what you were and what you're becoming. Bone spurs push through your knuckles. Your skin hardens into plates when danger is near. Your wounds close before the blood dries. These changes saved your life — more than once, more than you can count. But every adaptation costs something. Every time your body reshapes itself, the thing that looks back at you in the mirror is a little less recognizable. A little less human.*

*The Wasteland can't decide what to do with you. Some settlements see a weapon and put you on the wall. Others see contamination and reach for the torch. The Ashen Veil wants to study you. Raiders want to recruit you. Children stare. Everyone keeps their distance. But when the mutated horrors come howling out of the Thornwall Basin, when the rad-storms roll in carrying things that shouldn't exist, people remember real fast that you're the one who can meet those nightmares on equal terms — because you're becoming one of them.*

---

## Base Build (Levels 1-5)

### Core Stats

| Attribute | Value |
|-----------|-------|
| **Primary Attributes** | Might (MIG), Endurance (END) |
| **Hit Die** | d10 |
| **HP at Level 1** | 12 + END modifier |
| **HP per Level** | 1d10 (or 6) + END modifier |
| **Starting Humanity** | 8 |
| **Armor Proficiency** | Light armor, medium armor |
| **Weapon Proficiency** | Simple weapons, natural weapons |
| **Save Proficiencies** | Fortitude, Reflex |
| **Skill Bonuses** | Athletics +2, Survival +2 |
| **Starting CP** | 15 |

**Starting Humanity Note:** Mutants begin with **8 Humanity** instead of the standard 10. Their bodies have already been altered by post-Fall forces — radiation, bioweapons, dimensional bleed, or alien contaminants. This lower starting Humanity reflects the physical transformation they've already undergone. It does not affect their capacity for empathy or morality — it reflects the degree to which their biology has diverged from baseline human.

### Starting Equipment

- Simple weapon (backup — you're your own best weapon)
- Medium armor (scavenged and refitted around your mutations — straps loosened for bone spurs, plating cut away where your carapace has grown in)
- Mutant's kit: binding wraps (for concealing visible mutations), pain suppressants (3 doses — for when the changes come fast), mirror (you check every morning), hooded cloak
- Rations (5 days)
- 1d6 × 10 credits in salvaged goods and barter items

### Level Progression (1-5)

#### Level 1: Mutagen Physiology, Mutations & Strain Dice

- **Mutagen Physiology (Passive):** Your body has been fundamentally altered by post-Fall mutagenic forces. You can attack with **natural weapons** — claws, fangs, bone spurs, a barbed tail, a spiked fist, whatever your mutations have given you. Natural weapons deal **1d6 + MIG modifier damage**. When you attack, choose the damage type: bludgeoning, piercing, or slashing (a bone club bludgeons, a claw slashes, a spine pierces).

  Natural weapons count as **simple melee weapons** for all purposes (they benefit from features that affect weapon attacks, can trigger opportunity attacks, etc.). You are always proficient with them. You can use natural weapons **while grappling** — your mutations don't require a free hand.

  > **What counts as a natural weapon?** Anything your mutated body can produce: retractable claws, hardened knuckle ridges, a prehensile tail with a bone spike, elongated fangs, a headbutt from a reinforced skull. Work with your GM to describe what your mutations look like. Your natural weapons are part of you — they cannot be disarmed, sundered, or taken away.

- **Mutations (Passive):** Your body has developed **three distinct mutations** — biological adaptations that give you capabilities no baseline human possesses. At character creation, choose **3 mutations** from the list below. You can have **2 mutations active** at any time. Your remaining mutation is dormant — present in your biology but suppressed, waiting to be called on.

  Each active mutation provides a **passive benefit** that is always in effect. Additionally, each mutation has a **surge rider** that triggers when you use **Mutation Surge** (Level 3).

  **Mutation List:**

  1. **Predator Claws:** Your hands sprout vicious claws, or your forearms extend into bone blades. Your natural weapon damage die increases to **1d8** (instead of 1d6).
     - *Surge Rider — Rend:* Your claws tear deep. The target takes **1d4 bleed damage** at the start of each of its turns for 2 rounds. Bleed does not stack — reapplying refreshes the duration.

  2. **Carapace:** Thick chitinous plates, overlapping scales, or hardened skin covers your body. You gain **natural armor**: your DV equals **13 + your END modifier** (no maximum). This replaces your armor's DV calculation if it would be higher. You can still benefit from a shield. Natural armor has no movement penalty and does not count as wearing armor for features that require being unarmored.
     - *Surge Rider — Harden:* Your carapace thickens dramatically. You gain **resistance to all physical damage** (bludgeoning, piercing, slashing) until the start of your next turn.

  3. **Regeneration:** Your wounds close unnaturally fast — cuts seal, bruises fade, broken bones knit. At the **start of each of your turns**, if your current HP is **below half your maximum** and you are above 0 HP, you heal HP equal to your **END modifier** (minimum 1).
     - *Surge Rider — Rapid Heal:* Your regeneration surges. You immediately heal **2d6 HP**. This healing occurs as part of the attack, not on a separate turn.

  4. **Venomous:** Your body produces toxins — venomous saliva, contact poison secreted through your skin, or toxic barbs. Your natural weapon attacks deal an additional **1d4 poison damage** on hit.
     - *Surge Rider — Neurotoxin:* You inject a concentrated dose. The target must make a **Fortitude save** or be **Poisoned** for 1 minute (see **Conditions**). A Poisoned creature has disadvantage on attack rolls and ability checks. The target can repeat the save at the end of each of its turns, ending the effect on a success.

  5. **Prehensile Limbs:** Extra arms, an elongated tail, or stretching limbs give you unnatural reach and grip. Your **natural weapon reach increases to 10 feet**. You have **advantage on grapple checks** — your extra limbs make it nearly impossible to escape your grip.
     - *Surge Rider — Constrict:* Your limbs wrap around the target. The target is **automatically grappled** (no check required). While grappled this way, the target takes **1d6 bludgeoning damage** at the start of each of its turns. The target can escape normally (1 action, contested check).

  6. **Heightened Senses:** Your eyes have mutated to see in darkness, your ears can track heartbeats, or you've developed echolocation. You gain **darkvision 60 feet** and **advantage on Perception checks**.
     - *Surge Rider — Predator Sense:* Your senses sharpen to supernatural levels. You gain **blindsight 30 feet** until the start of your next turn. You can detect invisible creatures, see through magical darkness, and pinpoint hidden enemies within range.

  > **Choosing Your Mutations:** Your three mutations define your Mutant's physical identity and combat role. Some sample loadouts:
  >
  > - **Assault Mutant:** Predator Claws + Venomous (active), Prehensile Limbs (dormant) — maximum damage output, swap to Prehensile for reach when needed
  > - **Tank Mutant:** Carapace + Regeneration (active), Heightened Senses (dormant) — nearly unkillable frontliner, swap to senses for scouting
  > - **Grappler Mutant:** Prehensile Limbs + Venomous (active), Carapace (dormant) — grab, crush, and poison, swap to Carapace when overwhelmed

- **Strain Dice (Resource Pool):** Your mutations are powerful but taxing. Every time you push your biology beyond its resting state, you feel it — muscles tear and re-knit, bones crack and reform, organs shift inside you. This strain is measured in **Strain Dice (d6)**.

  Your Strain Dice pool equals your **proficiency bonus + your END modifier** (minimum 3 dice). Your pool **replenishes fully on a short rest** (8 hours) — your body repairs and stabilizes while you sleep.

  You spend Strain Dice to fuel **Mutation Surge** (Level 3), **Feral Evolution** (Level 5), and certain skill tree abilities. Managing your Strain is the core of playing a Mutant — push too hard and you'll be running on fumes when the next fight hits; hold back too much and you're not using your greatest advantage.

  > **Building Your Mutant — Quick Reference:**
  >
  > At Level 1 with END 15 (+2) and proficiency +2:
  > - **Strain Dice Pool:** 4 dice (d6)
  > - **Natural Weapon Damage:** 1d6 + MIG modifier (1d8 with Predator Claws)
  > - **Active Mutations:** 2 of 3 chosen
  > - **Starting Humanity:** 8
  >
  > At Level 5 with END 16 (+3) and proficiency +3:
  > - **Strain Dice Pool:** 6 dice (d6)
  > - **Mutation Surge DC:** 8 + 3 (prof) + MIG mod
  > - **Feral Evolution available:** 1/Short Rest (costs 1 exhaustion)

#### Level 2: Adapt & Adaptive Response

- **Adapt (1 Action, At-Will):** You can swap one active mutation for a dormant mutation you know. Your body physically reshapes itself in the span of a few seconds — bones shift and crack, skin ripples, limbs extend or retract. The new mutation's passive effect activates immediately; the swapped mutation goes dormant.

  You can Adapt once per action spent. With the 3-action economy, you could theoretically swap a mutation, attack, and move in a single turn — though doing so costs valuable actions.

  *The Adapt action is what separates a Mutant from a Warrior with a weird body. You don't just have mutations — you control them. You read the battlefield and reshape yourself to meet it. Facing a sniper? Activate Carapace. Closing to melee? Switch to Predator Claws. Need to find the invisible assassin? Heightened Senses. Your body is your loadout, and you can change it mid-fight.*

- **Adaptive Response (Passive, 1/damage type/encounter):** Your biology reacts to threats faster than conscious thought. The **first time you take damage from a specific damage type** in an encounter, you gain **resistance to that damage type** until the end of your next turn.

  This triggers automatically — no action or reaction required. It represents your body instinctively adapting: skin hardening against bludgeoning, blood coagulating against slashing, cells restructuring against fire.

  Each damage type can only trigger Adaptive Response **once per encounter**. If you take fire damage, you gain fire resistance briefly. If you take fire damage again later in the same encounter, Adaptive Response does not trigger again for fire — but it would trigger for a new damage type (cold, acid, etc.).

  > *Example: A raider hits you with a pipe wrench for 8 bludgeoning damage. Adaptive Response triggers — you gain resistance to bludgeoning until the end of your next turn. Next round, another raider shoots you for 10 piercing damage. Adaptive Response triggers again for piercing. But if the first raider hits you with another bludgeoning attack, you don't gain resistance again — you already adapted to that threat this fight.*

#### Level 3: Mutation Surge

**Mutation Surge (On Hit, costs 1 Strain Die):** When you hit a creature with a **natural weapon attack**, you can spend **1 Strain Die** to add **1d6 damage** to the attack and trigger the **surge rider** of one of your active mutations. If the surge rider requires a save, the DC is **8 + your proficiency bonus + your MIG modifier**.

You choose which active mutation's surge rider to apply. You can use Mutation Surge **once per hit** — you cannot stack multiple Strain Dice on a single attack. However, if you make multiple attacks in a turn, you can use Mutation Surge on each hit, spending a Strain Die each time.

**Surge Rider Summary:**

| Mutation | Surge Rider | Save |
|----------|-------------|------|
| Predator Claws | **Rend:** 1d4 bleed/round, 2 rounds | None |
| Carapace | **Harden:** Resist physical damage, 1 turn | None (self) |
| Regeneration | **Rapid Heal:** Heal 2d6 HP | None (self) |
| Venomous | **Neurotoxin:** Poisoned 1 minute | Fortitude |
| Prehensile Limbs | **Constrict:** Auto-grapple + 1d6 crush/round | None (escape as normal) |
| Heightened Senses | **Predator Sense:** Blindsight 30 ft, 1 turn | None (self) |

*Example: At Level 3 with MIG 16 (+3) and proficiency +2, your Mutation Surge DC is 13. You have Predator Claws and Venomous active. You hit a mutant beast with a claw attack for 1d8+3 damage, then spend a Strain Die to trigger Neurotoxin. You deal an additional 1d6 damage, and the beast must make a DC 13 Fortitude save or become Poisoned. Your claw's passive poison damage (1d4) also applies. Total first-hit damage: 1d8 + 1d4 + 1d6 + 3.*

#### Level 4: Attribute Improvement

Increase one attribute by +2, or two attributes by +1 each (maximum 20 before modifiers).

#### Level 5 Capstone: Feral Evolution

**Feral Evolution (1 Action, 1/Short Rest):** You stop fighting the change and let it take over. Your mutations erupt to their fullest expression — bones crack and extend, muscles swell, skin splits and reforms into something that barely resembles what you were. For **1 minute**, you enter **Feral State**:

- Your natural weapon damage die increases by one size (**1d6 → 1d8**, or **1d8 → 1d10** with Predator Claws)
- You gain **+2 to Defense Value** from enhanced mutations (thicker skin, faster reflexes, denser musculature)
- You gain **temporary HP equal to your level + your END modifier** (8-10 temp HP at Level 5)
- **Mutation Surge costs 0 Strain Dice** — your mutations are so supercharged that every hit carries their full power
- You have **disadvantage on Intelligence and Presence checks** (except Intimidation — you're terrifying)
- You **cannot cast spells, use complex equipment, or concentrate** on any effect

When Feral Evolution ends — whether the duration expires, you fall unconscious, or you choose to end it early as a free action — you immediately gain **1 level of exhaustion**. Your body needs time to recover from the strain of full transformation.

*Feral Evolution is your nuclear option. Free Mutation Surge every hit for a full minute is devastating — but the exhaustion cost is real. In a gritty rest economy (1 week long rest to clear all exhaustion), using this ability has consequences that last well beyond the encounter. Save it for the fights where holding back means dying.*

> **GM Guidance for Feral State:** The Mutant's Feral State should be dramatic and visible. Describe the transformation — armor cracking as the body swells, claws extending past the fingertips, eyes changing color, a guttural growl replacing speech. NPCs who witness Feral Evolution for the first time should react with fear, awe, or horror. This is not a subtle buff — it's a monstrous transformation that reinforces the Mutant's central tension: power at the cost of humanity.

### Skill Trees

Mutants have access to three skill trees, each costing CP to unlock features:

#### Apex Predator (Offense-Focused)

The art of killing with your own body — becoming the deadliest thing in the room through sheer biological superiority.

- **Savage Strikes (5 CP):** When you score a **critical hit** with a natural weapon, you deal **triple damage** instead of double. Your mutations have optimized your killing anatomy — every critical hit finds the vital points.

- **Multi-Limb Attack (10 CP, Requires Savage Strikes):** When you hit a creature with a natural weapon attack, you can immediately make a **secondary natural weapon attack** against the same target as part of the same action. The secondary attack deals **1d6 damage** (no MIG modifier) and does not trigger Mutation Surge. This represents a tail lash, headbutt, elbow spike, or other secondary mutation striking in concert with your primary attack.

- **Alpha Mutation (15 CP, Requires Multi-Limb Attack):** Once per round, when you use Mutation Surge, you can apply the surge rider **without spending a Strain Die**. Your most dominant mutation has become so integrated into your fighting style that it activates instinctively. You still deal the +1d6 Mutation Surge damage.

#### Thick Hide (Defense-Focused)

Your body is a fortress of mutated flesh, bone, and chitin. What doesn't kill you makes you harder to kill next time.

- **Damage Reduction (5 CP):** Your mutated body absorbs punishment that would cripple baseline humans. Reduce all incoming **physical damage** (bludgeoning, piercing, slashing) by **1** (minimum 1 damage). This increases to **DR 2** at Level 9.

- **Mutation Resilience (10 CP, Requires Damage Reduction):** You have **advantage on saving throws** against poison, disease, and radiation. Your body has been exposed to so many mutagenic substances that it's developed broad-spectrum biological resistance. Additionally, you are **immune to negative side effects** from your own mutation abilities (if a mutation would deal self-damage or impose a condition, you ignore it).

- **Regenerative Tank (15 CP, Requires Mutation Resilience):** When you take damage from any source, you heal HP equal to your **proficiency bonus** at the start of your next turn. This healing does not stack — multiple instances of damage between your turns still only trigger one Regenerative Tank heal. This represents your body continuously repairing itself under fire.

#### Rapid Adaptation (Utility & Flexibility)

Speed of adaptation is survival. The faster you change, the harder you are to predict — and the harder you are to kill.

- **Quick Adapt (5 CP):** You can use **Adapt as a free action** instead of spending 1 action (once per turn). Your body has learned to reshape itself reflexively, without the conscious effort or time cost. This makes mutation-swapping viable mid-combat without sacrificing your action economy.

- **Third Slot (10 CP, Requires Quick Adapt):** You can have **3 mutations active simultaneously** instead of 2. Your body has stabilized enough to maintain three distinct biological adaptations at once. You still know the same number of mutations — you just express more of them concurrently.

- **Evolved Biology (15 CP, Requires Third Slot):** Your Strain Dice become **d8s** instead of d6s (this affects all features that use Strain Dice, including Mutation Surge damage). Additionally, you **learn 2 additional mutations** from the mutation list, expanding your options to 5 known mutations.

### Magic Relationship

Mutants have **no innate magical ability**. Their power is biological, not arcane — mutations reshape flesh, not reality. However, Mutants can learn cantrips by spending **15 CP per cantrip**. Cantrips learned this way are flavored as **biological abilities** rather than spells — *Acid Splash* becomes spraying acidic saliva, *Ray of Frost* becomes an endothermic touch that drains heat, *Shocking Grasp* becomes a bioelectric discharge from specialized organs.

Mutants cannot learn leveled spells unless they multiclass into a casting class or take a Mastery Path that grants spellcasting.

**Humanity & Mutations:** The Mutant's lower starting Humanity (8) reflects their physical divergence from baseline humanity. Augmentations (cybernetics) reduce Humanity further — a Mutant who also chromes up may find their Humanity dropping dangerously low, cutting them off from magical options entirely. This creates a design tension: embrace biological power, technological augmentation, or try to preserve what's left of your humanity. All three paths have costs.

### What Makes a Mutant Different?

The Mutant occupies a unique niche in the party: the **adaptive melee combatant whose body is both weapon and armor**.

- **Not a Warrior:** The Warrior is a trained fighter who relies on discipline, technique, and equipment. The Warrior wears heavy armor, wields martial weapons, and uses combat stances refined through practice. The Mutant has no formal training — their fighting ability comes from biological instinct. They don't need armor because their skin IS armor. They don't need weapons because their hands ARE weapons. The Warrior holds the line through grit and skill; the Mutant holds it by becoming something the enemy can't hurt.

- **Not a Channeler:** The Channeler is a divine hybrid who channels external spiritual energy. Their power comes from faith, communion with spirits, or connection to ley lines. The Mutant's power is entirely internal — no spirits, no spells, no external source. Where the Channeler heals allies through channeled energy, the Mutant heals themselves through regeneration. Where the Channeler casts spells, the Mutant grows new limbs.

- **Not a Berserker:** The Warrior's Berserker specialization enters Rage for flat bonuses. Feral Evolution is superficially similar but fundamentally different — it enhances specific mutations, interacts with the mutation system, and imposes unique restrictions. A Berserker rages; a Mutant *transforms*. The Berserker is still human when the rage ends. The Mutant is less certain.

The Mutant's closest real-world archetype is the **biological weapon meets forced evolution** — someone who didn't choose their power but has learned to wield it. If the Warrior is a soldier and the Channeler is a priest, the Mutant is the thing that crawled out of the contamination zone and learned to control what it became. They're feared, pitied, and — when the real monsters come — indispensable.

---

## Advanced Specializations (Levels 6-10)

By Level 6, the Mutant's biology has stabilized enough to specialize. The raw, reactive mutations of early levels have settled into patterns — and those patterns reveal who the Mutant is becoming. Some become more efficient, honing their mutations into perfect killing instruments. Others become more dangerous, their biology spiraling into instability that threatens everything nearby. And some become more versatile, their mutations branching and interweaving into something that can become anything the situation demands.

**System Notes:**
- All characters gain 10 CP per level from levels 6-10
- Short rest: 8 hours
- Long rest: 1 week
- Bounded accuracy: maximum core bonus of +14 (+18 mythic tier)
- 3-action economy per turn

### Apex (Perfected Predator / Lethal Striker)

*In the Thornwall Basin, there's a concept the mutant beast-hunters use: the Apex. Not just the biggest predator or the strongest — the one that has stopped evolving because it doesn't need to. It has reached biological perfection for its niche. Every mutation serves the kill. No wasted tissue, no unnecessary adaptation, no biological noise. Just a body built to hunt, catch, and destroy.*

*The Apex Mutant has achieved that. Where other Mutants are still wrestling with uncontrolled changes and instability, the Apex has gone quiet. Their mutations don't fight them anymore. Their claws extend without pain. Their senses sharpen without headaches. Their body moves with a predator's economy — no wasted motion, no wasted energy. They are not becoming something. They have become it. And what they've become is the deadliest thing in the room.*

**Prerequisites:** Level 6, Mutant build

**New Skill Tree Unlocked:** Apex Hunter (prey-marking techniques, lethal combat instincts, sensory perfection, killing efficiency)

*Note: The Apex and the Warrior Berserker both deal devastating melee damage, but from fundamentally different sources. The Berserker fights through emotion — Rage fuels their attacks, and they become a barely controlled whirlwind of violence. The Apex fights through biology — their mutations are optimized, their instincts are inhuman, and they kill with the cold efficiency of a predator that has evolved beyond anger. The Berserker is angry. The Apex is hungry.*

#### Level 6 Features

**Predator's Focus** (1 Action)
You designate one creature within **60 feet** as your **prey**. Your mutations lock onto the target — scent, heat signature, movement patterns, heartbeat. For as long as the mark persists, you gain:

- **+2 to attack rolls** against your marked prey
- **+1d6 damage** on all hits against your marked prey (this stacks with Mutation Surge)
- **Advantage on Perception and Survival checks** to track, locate, or detect your prey

The mark lasts until:
- The prey dies
- You mark a new creature as prey (replaces the previous mark)
- 1 hour passes

You can only have **one prey** at a time. Your biology is hyperfocused — everything about you is calibrated to destroy this one target. Marking a new prey requires 1 action.

*Predator's Focus represents your mutations aligning toward a single purpose: the kill. Your pupils dilate to track the target's movement. Your muscles tense in patterns optimized for that specific prey's size and speed. Your sweat glands shift to suppress your scent. Your body knows what it was built for.*

**Evolved Natural Weapons** (Passive)
Your natural weapons have evolved beyond crude biological implements into refined killing instruments:

- Natural weapon **base damage increases to 1d8** (or **1d10** with Predator Claws mutation active)
- Your natural weapons count as **magical** for the purpose of overcoming damage resistance and immunity
- Choose one **elemental affinity** permanently: your natural weapons deal an additional damage type of your choice — **fire** (superheated bone), **acid** (caustic secretions), **cold** (endothermic touch), or **poison** (toxic barbs). This additional type applies to all natural weapon damage and can be chosen by the target for Adaptive Response if applicable.

*Your claws aren't just sharp anymore. They glow with heat, drip with acid, frost over on contact, or secrete venom. Your body has incorporated environmental adaptations into its killing anatomy. A Warrior can swing a magical sword. You ARE the magical sword.*

#### Level 8 Features

**Killing Blow** (On Critical Hit vs Marked Prey)
When you score a **critical hit** with a natural weapon against your **marked prey**, the devastating precision of your evolved mutations turns the hit into a potential kill shot. The target must make a **Fortitude save** (DC 8 + proficiency + MIG modifier).

**On Failure:** The target takes an additional **3d6 damage** (same type as your natural weapon) and is **stunned until the end of its next turn**. Your strike hits something vital — a nerve cluster, an organ, a structural weakness that your predator instincts identified and your claws exploited.

**On Success:** The target takes an additional **1d6 damage** only. Even a glancing critical is lethal when your mutations guide the blow.

*Killing Blow is the Apex's execution mechanic. Combined with Predator's Focus (+2 to hit), Savage Strikes (triple crit damage from skill tree), and the base Mutant's natural weapon damage, a critical hit against marked prey is among the highest single-hit damage spikes in the game. The stun is the real prize — it sets up a second devastating hit next turn.*

**Relentless Hunter** (Passive)
Your prey cannot escape you:

- When your **marked prey moves** (voluntarily or involuntarily), you can use your **reaction** to move up to your **speed toward the prey**. This movement does not provoke opportunity attacks. You don't need to end this movement adjacent to the prey, but you must move closer to them.
- When your marked prey **drops to 0 HP**, you can immediately mark a **new creature within 60 feet** as your prey as a **free action** — no action cost. Your hunting instincts shift to the next target without conscious thought.

*Relentless Hunter ensures that the Apex never loses its prey. A target that tries to disengage, flee, or use forced movement to create distance finds the Apex keeping pace. Combined with natural weapon reach (10 ft with Prehensile Limbs), the Apex's threat range is enormous. Running from an Apex doesn't work. Nothing outruns a perfect predator.*

#### Level 10 Capstone Ability

**Apex Predator Form** (1/Long Rest, 1 Action)

You have reached the pinnacle of biological evolution. Your mutations achieve their absolute zenith — every strand of altered DNA, every adapted organ, every enhanced sense operating at maximum capacity simultaneously. For **1 minute**:

- Your natural weapon damage die **increases by two sizes**: base 1d6 → 1d10, or Predator Claws 1d8 → 1d12. If already enhanced by Feral Evolution, the increase stacks (Feral Evolution increases by one size, then Apex Predator Form increases by two more, to a maximum of 1d12).
- You gain **Extra Attack** with natural weapons: when you use 1 action to Strike with a natural weapon, you make **two attacks** (the second does not suffer the multiple attack penalty)
- You gain **+2 to all saving throws** — your biology is operating at superhuman efficiency
- Your **speed increases by 10 feet** — longer strides, enhanced musculature, optimized locomotion

When Apex Predator Form ends, you gain **1 level of exhaustion**. If you also used Feral Evolution during the same encounter, this stacks — **2 levels of exhaustion** total. In the gritty rest economy, this means the Mutant is compromised for days after going all-out.

> **Apex Damage Math (Level 10, MIG 18, Predator Claws + Venomous):**
> - Apex Predator Form: natural weapons = 1d12
> - Extra Attack: 2 attacks per Strike action
> - Per hit: 1d12 (weapon) + 1d4 (Venomous passive) + 4 (MIG mod) + 1d6 (Predator's Focus)
> - With Feral Evolution active: free Mutation Surge each hit adds 1d6 + surge rider
> - 2 attacks per action × 3 actions = 6 attacks per turn (minus movement/utility)
> - Realistic turn: 2 Strikes (4 attacks) + move = 4 hits averaging ~20 damage each = ~80 damage/turn
> - Peak turn (all 3 actions as Strikes): 6 hits × ~20 = ~120 damage. Exhaustion × 2 follows.

*"There's a moment — you've heard hunters talk about it — where the animal stops being afraid and starts being the thing that everything else is afraid of. That's what Apex Predator Form is. It's not a transformation. It's an arrival. Everything your body has been building toward since the first mutation manifested — this is what it was for."*

> **GM Guidance:** Apex Predator Form should look terrifying. The Mutant's already-altered body pushes past what seems biologically possible — claws lengthening, muscles swelling visibly, eyes going flat and predatory. The Extra Attack means 4-6 hits per turn at endgame. Describe each hit as biologically precise — targeting joints, arteries, nerve clusters. The 2 exhaustion levels at end (with Feral Evolution) mean the Mutant is compromised for days in the gritty rest economy. This is the "final form" moment.

---

### Aberration (Unstable Bioweapon / Area Threat)

*Most Mutants learn to control their biology. Aberrations learn to weaponize losing control. Their mutations aren't stable — they're volatile, corrosive, and explosively dangerous. Their blood eats through metal. Their skin secretes toxins that kill on contact. Their cells divide and rupture in chain reactions that can level a room. An Aberration isn't a fighter who happens to be mutated. They're a biological weapon that happens to be a person.*

*The cost is real. Aberrations hurt themselves almost as often as they hurt their enemies. Their mutations aren't cooperating — they're in open revolt, and the Aberration has learned to point that revolt in a useful direction. Every ability comes with a price: acid reflux that burns their own throat, bone spurs that tear through their own skin, cellular detonations that leave them bleeding and burned. An Aberration's relationship with their body is a war, and they've learned that the best strategy is controlled demolition.*

**Prerequisites:** Level 6, Mutant build

**New Skill Tree Unlocked:** Biological Warfare (toxic abilities, volatile biology, self-destructive techniques, area denial)

*Note: No other class in Ashfall has abilities that deliberately harm the user as their primary mechanic. The Psion's Focus self-damage is incidental — a tax on power use. The Aberration's self-damage is the point. Their biology is a bomb, and they've decided to stand next to it. This creates a unique and intense play experience for players who want high risk and high reward.*

#### Level 6 Features

**Toxic Presence** (Passive)
Your body constantly secretes toxic substances — caustic sweat, poisonous pheromones, spore clouds, or mutagenic radiation. Creatures that **start their turn within 5 feet of you** take **poison damage equal to your END modifier** (minimum 1).

You are **immune** to your own Toxic Presence. However, **allies within range are also affected** unless you spend **1 Strain Die at the start of your turn** to suppress the emission for 1 round. This creates a real cost to fighting alongside an Aberration — your friends need to keep their distance, or you need to spend resources keeping them safe.

At Level 9, the range extends to **10 feet** and the damage equals **END modifier + proficiency bonus**.

*Toxic Presence is always on. You don't activate it — your body does it involuntarily. The people around you are always slightly uncomfortable: burning eyes, sour taste in the air, a prickling sensation on exposed skin. You've learned to warn your allies. "Don't stand too close." Most of them listen after the first time.*

**Reactive Biology** (Reaction)
When a creature **hits you with a melee attack**, the attacker takes **1d6 acid damage**. Your blood, interstitial fluid, and subcutaneous tissues are corrosive — cutting you is like puncturing a battery. The acid eats at weapons, armor, and exposed flesh.

At **Level 9**, Reactive Biology damage increases to **2d6 acid**.

Reactive Biology uses your reaction (once per round). If you have already used your reaction this round, Reactive Biology does not trigger. It does not work against ranged attacks (the attacker isn't in contact with your fluids) or against creatures using reach weapons beyond 5 feet.

*"Every scar on a Warrior tells a story. Every scar on an Aberration tells a warning. Hit them, and whatever you hit them with comes back smoking."*

#### Level 8 Features

**Unstable Mutation** (1 Action, costs 2 Strain Dice)
You force one of your mutations to **violently overexpress** — pushing it past biological safety limits into something destructive and uncontrollable. Choose one effect:

- **Toxic Eruption:** You vomit or exhale a **15-foot cone** of caustic biological material. All creatures in the area take **3d6 poison + 2d6 acid damage** (Fortitude save, DC 8 + proficiency + MIG modifier, for half). The affected area becomes **toxic difficult terrain** for **1 minute** — creatures that enter or start their turn in the terrain take **1d6 poison damage**.

- **Bone Shrapnel:** Your body violently sheds bone spurs, chitinous plates, and hardened tissue in a **15-foot radius** burst centered on you. All creatures in the area (including allies) take **3d8 piercing damage** (Reflex save for half). You take **1d6 piercing damage** from the ejection — your own body tearing itself apart to generate ammunition. Bone Shrapnel ignores the first 2 points of any target's DR.

- **Cellular Explosion:** You detonate a mass of unstable cells through direct contact. One creature you are **grappling** takes **4d6 force damage** (no save — you're pressing your mutating tissue directly into them). You take **2d6 force damage** from the biological backlash. This ends the grapple.

*Unstable Mutation is the Aberration's "I don't care if it hurts me" toolkit. Each option costs self-damage, but the payoffs are significant — Toxic Eruption creates area denial, Bone Shrapnel is a melee-range AoE, and Cellular Explosion is a massive damage spike against grappled targets. The self-damage feeds into Feed on Pain (below).*

**Feed on Pain** (Passive)
When you take damage from **your own abilities** — Reactive Biology, Unstable Mutation, or any other self-inflicted damage from your features — you heal HP equal to your **END modifier** at the start of your next turn. Your biology cannibalizes the damaged tissue and converts it to regenerative energy.

This healing does not stack — multiple instances of self-damage between your turns still only trigger one Feed on Pain heal. This represents your body's triage mechanism: it repairs as fast as it destroys, but only at one speed.

Feed on Pain does **not** trigger from external damage, fall damage, or damage from sources other than your own class abilities.

*Feed on Pain is what makes the Aberration viable as a sustained combatant. Without it, the constant self-damage from Toxic Presence suppression, Reactive Biology, and Unstable Mutation would drain the Aberration dry in two encounters. With it, the Aberration is in a constant state of breaking down and building back up — a biological perpetual motion machine of destruction and regeneration.*

#### Level 10 Capstone Ability

**Meltdown** (1/Long Rest, 2 Actions)

Everything the Aberration is — every unstable cell, every volatile mutation, every toxic secretion — detonates at once. This is the nuclear option: a catastrophic biological chain reaction that annihilates everything within reach, including the Aberration themselves.

All creatures within **20 feet** take **6d10 acid + poison damage** (Fortitude save, DC 8 + proficiency + MIG modifier, for half). The area becomes **toxic difficult terrain** for **1 minute** — caustic residue, biological debris, and mutagenic contamination saturate the ground.

**Self-damage:** You take **4d10 damage** that cannot be reduced, resisted, or prevented by any means. This is your body tearing itself apart at the cellular level. You also gain **2 levels of exhaustion**.

**After Meltdown:**
- If your **Regeneration mutation** is active, it triggers immediately for **4d6 healing** instead of the usual 2d6 — your body kicks into overdrive to rebuild
- If the self-damage reduces you to **0 HP**, you are **dying but stable** (you don't need to make death saves until you take additional damage). Your biology is desperately trying to rebuild from the inside out.
- Feed on Pain triggers at the start of your next turn for END modifier healing (on top of Regeneration if active)

> **Meltdown Math (Level 10, MIG 18, END 16):**
> - Damage to enemies: 6d10 (avg 33) acid+poison, Fort DC 8+4+4 = 16 for half
> - Self-damage: 4d10 (avg 22), unreducible
> - At Level 10 with END 16: ~72 max HP. Self-damage = ~30% of total HP.
> - With Regeneration active: 4d6 (avg 14) immediate heal + END mod (3) next round = ~17 HP back
> - Net self-damage after recovery: ~5 HP. Manageable, but the 2 exhaustion levels are the real cost.
> - Enemies in a 20 ft radius taking avg 33 (or 16 on save) with DC 16 is devastating area damage.

*"There's a reason they call it Meltdown and not 'controlled detonation.' You can't control it. You can aim it — you choose when to let go, and you try to be standing in the right place when everything inside you goes critical. But the actual process? That's your cells declaring independence from your nervous system and going to war. You're the battlefield. When it's over, you're lying in a crater of your own making, held together by sheer biological stubbornness, hoping your body remembers how to be a person before the next thing tries to kill you."*

> **GM Guidance:** Meltdown should be visually horrifying and mechanically devastating. Describe the Mutant's body rupturing — skin splitting, caustic fluid spraying, bone shards flying, the air filling with a toxic green-yellow haze. The Mutant should collapse at the center of it, smoking, barely alive. This is the Aberration's statement to the world: "I am the worst thing that ever happened to this room." The 2 exhaustion levels mean this has consequences lasting days in the gritty rest economy. Save it for the fight where it's Meltdown or die.

---

### Chimera (Adaptive Shapeshifter / Versatile Controller)

*The Apex refines. The Aberration detonates. The Chimera adapts. Where other Mutants specialize — optimizing for offense or weaponizing their instability — the Chimera takes a different path: they stop choosing. Their biology doesn't commit to a single expression. It expresses everything, simultaneously, in combinations that shouldn't be possible. Claws and carapace and regeneration and venom, all active, all shifting, all at once.*

*A Chimera in combat is unsettling to watch. Their body doesn't stay the same from moment to moment — arms extend, retract, grow plates of chitin, sprout barbs, then go smooth again. Their fighting style changes mid-swing. They're a grappler one second, a ranged attacker the next, a walking tank the second after that. There's no pattern to predict, no vulnerability to exploit, because the Chimera's vulnerability changes faster than anyone can target it.*

*Other Mutants fight their instability or surrender to it. Chimeras have made peace with it. Their biology isn't chaotic — it's harmonious. Everything changes, and everything works.*

**Prerequisites:** Level 6, Mutant build

**New Skill Tree Unlocked:** Chimeric Biology (mutation stacking, rapid adaptation, hybrid forms, biological versatility)

*Note: The Chimera and the Scavenger differ in their approach to versatility. The Scavenger adapts through external resources — grabbing junk, improvising tools, hoarding supplies. The Chimera adapts through internal biology — growing new limbs, shifting their physiology, expressing dormant mutations. Both are "Swiss Army knives," but one rummages through a bag and the other rummages through their own DNA.*

#### Level 6 Features

**Hybrid Mutations** (Passive)
When you use **Adapt** to activate a dormant mutation and deactivate an active one, the deactivated mutation retains its **passive benefit for 1 round** before going fully dormant. During this transition round, you effectively have **3 active mutations** — the two you intend to keep plus the one that's fading.

With the **Third Slot** skill tree ability (which allows 3 simultaneous active mutations), Hybrid Mutations briefly gives you **4 active mutations** during the transition round.

This creates a unique tactical rhythm: swap mutations frequently to maintain maximum breadth of benefits, rather than settling into a static loadout.

*Hybrid Mutations represents your biology's refusal to let go. When you tell your Carapace to stand down and your Predator Claws to activate, your skin stays hardened for a few more seconds while the claws emerge — your body running both programs simultaneously before the old one fades. It's uncomfortable. It's also incredibly useful.*

**Mutation Synthesis** (1 Action, costs 1 Strain Die)
You force two of your active mutations to **work together** — combining their surge riders into a single devastating effect. When you activate Mutation Synthesis, your next **Mutation Surge** (which must occur before the end of your next turn) triggers **both surge riders simultaneously** from any two of your active mutations.

Each rider's effects apply independently. If both riders require saving throws, each uses its own save (both at DC 8 + proficiency + MIG modifier, but the saves may target different defenses — Fortitude for Neurotoxin, Reflex for others, etc.).

**Sample Combinations:**
- **Predator Claws + Venomous (Rend + Neurotoxin):** 1d4 bleed for 2 rounds AND Poisoned condition (Fortitude save). The target is bleeding and poisoned simultaneously.
- **Carapace + Regeneration (Harden + Rapid Heal):** Physical damage resistance for 1 round AND heal 2d6 HP. Defensive synergy — absorb a hit and heal in the same action.
- **Prehensile Limbs + Heightened Senses (Constrict + Predator Sense):** Auto-grapple with 1d6 crush/round AND blindsight 30 ft. Grab a target and gain perfect awareness of any nearby threats.

*Mutation Synthesis is the Chimera's signature move — combinations no other Mutant can achieve. While the Apex focuses all power through one mutation and the Aberration detonates everything at once, the Chimera weaves mutations together with surgical precision. The Strain Die cost keeps it from being spammed, but the tactical flexibility is enormous.*

#### Level 8 Features

**Rapid Metamorphosis** (Passive)
You can use **Adapt twice per turn** instead of once. Each swap still costs 1 action (or is free with the **Quick Adapt** skill tree ability — in which case you get two free swaps per turn).

This means a Chimera with Quick Adapt can swap two mutations as free actions and still have all 3 actions available for attacks, movement, and abilities. Your body reshapes itself with unsettling speed — limbs retract and extend, skin ripples between armor and scales, sensory organs blink open and shut, all in the space of a heartbeat.

Combined with Hybrid Mutations (deactivated mutations retain passive for 1 round), Rapid Metamorphosis creates a cycling loadout where the Chimera has access to nearly all their mutations' passive benefits in a given round:
- Round start: Mutations A + B active (Hybrid C fading from last round's swap)
- Free swap 1: Swap A for C (now B + C active, A retains passive for 1 round)
- Free swap 2: Swap C for A (now A + B active, C retains passive for 1 round)
- Result: All 3 mutations' passives active for at least part of the round

*Rapid Metamorphosis makes the Chimera the most tactically flexible melee combatant in the game. No other class can change their capabilities twice per turn — not even the Scavenger with Quick Adapt can swap that fast. The Chimera's body has become a living toolbox, shifting configurations faster than enemies can adapt.*

**Chimeric Strike** (On Hit, Passive)
When you hit with a natural weapon attack and have **3 or more mutations active simultaneously** (through Third Slot, Hybrid Mutations, or other effects), your mutations create synergistic effects:

- Your natural weapon **damage die increases by one size** for that attack (1d6→1d8, 1d8→1d10, 1d10→1d12)
- If **all your known mutations are active simultaneously** (all 3, or all 5 with Evolved Biology), the attack also **ignores damage resistance**. Your mutations combine to produce damage that defies conventional categorization.

This is a passive benefit — no action or resource cost. It rewards the Chimera for maintaining maximum mutation breadth, which is the opposite of the Apex's focused approach.

#### Level 10 Capstone Ability

**Perfect Adaptation** (1/Long Rest, 1 Action)

Your mutations achieve total harmony. For **1 minute**, every wall between your biology's capabilities comes down — **all known mutations become active simultaneously**. Nothing is dormant. Every passive benefit, every surge rider, every adaptation your body has developed operates at full capacity.

During Perfect Adaptation:
- **All known mutations active:** With 3 base mutations, this gives you full passive benefits from all 3. With Evolved Biology (5 known mutations), all 5 are active — an unprecedented level of biological enhancement.
- **Free Mutation Synthesis:** You can apply **any two surge riders** to each Mutation Surge without spending the normal 1 Strain Die cost for Mutation Synthesis. Every hit combines two mutations.
- **Chimeric Strike enhanced:** With all mutations active, every natural weapon attack gains the increased damage die AND ignores damage resistance.
- **+2 to Defense Value** from unpredictable physiology — your body shifts and flows between forms, making you nearly impossible to target the same way twice.

When Perfect Adaptation ends, you gain **1 level of exhaustion** and **all mutations go dormant for 1 round** as your body stabilizes. During this dormancy round, you have no active mutations, no passive benefits, and cannot use Mutation Surge. Your biology needs a moment to reset.

> **Chimera vs. Apex vs. Aberration — L10 Capstone Comparison:**
> - **Apex Predator Form:** Maximum single-target damage (Extra Attack, +2 die sizes, +2 saves). Best against bosses.
> - **Meltdown:** Maximum burst AoE (6d10 in 20 ft). Best against swarms. Most self-destructive.
> - **Perfect Adaptation:** Maximum versatility (all mutations, free synthesis, resistance bypass). Best against varied threats. Least raw damage but most tactical flexibility.
> - All three cost 1/LR and exhaustion. The choice reflects the Mutant's philosophy: focus, chaos, or adaptation.

*Perfect Adaptation is what the Chimera has been building toward — the moment when their biology stops fighting itself and starts cooperating completely. For one glorious minute, they are everything at once: armored and clawed, venomous and regenerating, perceptive and reaching. They shift between forms like water, combining mutations in ways that shouldn't be possible. It's beautiful, in a horrifying sort of way. And then it's over, and their body needs to remember how to be just one thing again.*

*"You want to know what I am? I'm everything. Claws when I need claws. Armor when I need armor. Venom when I need venom. You don't get to prepare for me, because I haven't decided what I'm going to be yet. Ask me again in three seconds — the answer will be different."*

> **GM Guidance:** Perfect Adaptation is visually unsettling — the Chimera's body constantly shifts between all their mutations simultaneously. Armor plates ripple across skin that's also growing claws, while a prehensile tail extends and retracts. The 1-round dormancy at the end is important: for one round, the Chimera has NO active mutations and is vulnerable. Protect them or make this dramatic.
