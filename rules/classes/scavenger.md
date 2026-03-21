---
game_data: true
name: Scavenger
primary_stats: [AGI, END]
hit_die: d8
hp_base: 10
hp_per_level: 5
starting_humanity: 10
armor_proficiency: [Light, Medium]
weapon_proficiency: [Simple, Sidearms]
save_proficiencies: [Fortitude, Reflex]
skill_bonuses:
  - {skill: Survival, bonus: 2}
  - {skill: Investigation, bonus: 2}
starting_cp: 15
role: Resourceful Generalist
magic_type: "None (15 CP/cantrip)"
level_1_features: [Scrounger's Instinct, Improvised Arsenal, Salvage Dice]
skill_trees:
  - name: Scrapper
    focus: Combat
    abilities:
      - {name: Shrapnel Throw, cp_cost: 5, tier: 1, effect: "Thrown improvised weapons deal 1d4 splash to adjacent creatures"}
      - {name: Relentless Scrapper, cp_cost: 10, tier: 2, effect: "Free thrown attack on kill with improvised weapon"}
      - {name: Scrapyard Champion, cp_cost: 15, tier: 3, effect: "Improvised weapons deal 1d10; Scrapyard Strike damage becomes 1d8"}
  - name: Salvager
    focus: Resources
    abilities:
      - {name: Efficient Salvage, cp_cost: 5, tier: 1, effect: "Salvage Dice pool +2; roll of 6 not expended"}
      - {name: Field Strip, cp_cost: 10, tier: 2, effect: "Destroy item to gain Salvage Dice equal to tier"}
      - {name: Treasure Hunter, cp_cost: 15, tier: 3, effect: "Salvage Dice become d8s; find Tier 3 item 1/LR"}
  - name: Survivor
    focus: Durability
    abilities:
      - {name: Wasteland Gut, cp_cost: 5, tier: 1, effect: "Advantage vs poison/disease/radiation"}
      - {name: Reinforced Scraps, cp_cost: 10, tier: 2, effect: "+1 DV when wearing scavenged armor"}
      - {name: Hard to Kill, cp_cost: 15, tier: 3, effect: "Spend 2 Salvage Dice as reaction to reduce damage by 2d6+END"}
features:
  - name: Scrounger's Instinct
    level: 1
    action: Passive
    frequency: Always
    description: "Advantage on Perception and Investigation checks to find useful items, materials, or hidden loot. After any combat or 10 minutes searching a new area, automatically find 1d4 Salvage worth of materials."
  - name: Improvised Arsenal
    level: 1
    action: Passive
    frequency: Always
    description: "Proficient with all improvised weapons. Improvised weapons deal 1d8 damage (choose bludgeoning, piercing, or slashing per attack), can be thrown (range 20/60). Draw or pick up improvised weapons as a free action."
  - name: Salvage Dice
    level: 1
    action: Passive
    frequency: "Short Rest"
    description: "Pool of d6 Salvage Dice equal to proficiency bonus + END modifier (minimum 3). Replenishes on short rest. Spent to fuel features."
  - name: Makeshift Solution
    level: 2
    action: "1 Action"
    frequency: "Costs 1 Salvage Die"
    description: "Improvise a tactical solution. Choose: Improvised Cover (half cover in adjacent square, HP 10, 1 min), Caltrops & Hazards (10ft square, Reflex save [8 + prof + AGI] or 1d6 piercing + half speed), or Quick Patch (heal 1d6+END mod to self or adjacent ally)."
    choices:
      - {name: Improvised Cover, effect: "Half cover (+2 DV) in adjacent square, HP 10, lasts 1 minute"}
      - {name: Caltrops & Hazards, effect: "10ft square, Reflex save (8 + prof + AGI) or 1d6 piercing + half speed until end of next turn (not Slowed)"}
      - {name: Quick Patch, effect: "Heal 1d6 + END modifier to self or adjacent ally"}
  - name: Scrapyard Strike
    level: 3
    action: "On Hit"
    frequency: "Costs 1 Salvage Die per use"
    description: "When you hit with an improvised or thrown weapon, spend 1 Salvage Die to add 1d6 damage and choose an effect. Target saves (DC 8 + proficiency + AGI mod) or suffers the effect."
    choices:
      - {name: Blinding Throw, effect: "Reflex save or blinded until end of target's next turn"}
      - {name: Staggering Blow, effect: "Fortitude save or pushed 10 ft and knocked prone"}
      - {name: Entangling Debris, effect: "Reflex save or restrained until they spend 1 action to free themselves"}
  - name: Attribute Improvement
    level: 4
    action: Passive
    frequency: Permanent
    description: "Increase one attribute by +2, or two attributes by +1 each. Maximum 20."
  - name: Wasteland Ingenuity
    level: 5
    action: "1 Action"
    frequency: "1/Short Rest"
    description: "Spend 3 Salvage Dice and choose one powerful improvisation: Scrap Bomb (30ft range, 15ft radius, 3d8 fire, Reflex half), Jury-Rigged Armor (you or ally gains +3 DV and physical damage resistance for 1 minute), or Field Innovation (create a functional solution — negotiate with GM)."
    choices:
      - {name: Scrap Bomb, effect: "30ft thrown, 15ft radius, 3d8 fire damage, Reflex save for half"}
      - {name: Jury-Rigged Armor, effect: "Self or ally: +3 DV and resistance to physical damage for 1 minute"}
      - {name: Field Innovation, effect: "Creative improvisation — smoke screen, barricade, zipline, etc. (GM adjudication)"}
specializations: [Junker, Packrat, Tinkerer]
specialization_details:
  - name: Junker
    role: Melee Brawler/Arena Fighter
    features:
      - {name: Junkyard Fury, level: 6, action: Passive, description: "When you hit with an improvised weapon, you can move 5 ft without provoking opportunity attacks. Scrapyard Strike bonus damage increases to 2d6."}
      - {name: Arena Instincts, level: 6, action: Passive, description: "No multiple attack penalty on your second improvised weapon attack each turn."}
      - {name: Wrecking Ball, level: 8, action: "2 Actions", description: "Attack all creatures within 5 ft with an improvised weapon. One attack roll vs each target. Each hit can trigger Scrapyard Strike (costs 1 Salvage Die per target)."}
      - {name: Scrap Storm, level: 10, action: "1 Action", description: "1/Long Rest. 1 minute. Improvised weapons deal 1d12 damage. Scrapyard Strike costs 0 Salvage Dice. +2 DV from whirling debris. Gain 1 exhaustion when it ends."}
  - name: Packrat
    role: Quartermaster/Support
    features:
      - {name: Deep Pockets, level: 6, action: Passive, description: "Salvage Dice pool +3. After any combat, find +1d4 extra Salvage materials (stacks with Scrounger's Instinct)."}
      - {name: Supply Line, level: 6, action: "1 Action", description: "Costs 1 Salvage Die. Use any Makeshift Solution effect targeting an ally or location within 30 ft instead of adjacent."}
      - {name: Emergency Stash, level: 8, action: Reaction, description: "END mod times/SR. When ally within 30 ft takes damage, spend 1 Salvage Die to reduce damage by 1d6 + END modifier."}
      - {name: Field Requisition, level: 8, action: "Short Rest", description: "Spend Salvage Dice (1 per tier) to create temporary consumable items (up to Tier 3). Items last until next short rest."}
      - {name: Quartermaster's Cache, level: 10, action: "1 Action", description: "1/Long Rest. Spend 4 Salvage Dice. All allies within 30 ft gain 2d6+END temp HP, +1 to attack rolls for 1 minute, and one Makeshift Solution effect of your choice applied to each."}
  - name: Tinkerer
    role: Gadgeteer/Field Engineer
    features:
      - {name: Jury-Rig Device, level: 6, action: "1 Action", description: "Costs 1 Salvage Die. Create a one-shot gadget. Flash Bang: 15 ft radius, Reflex save or blinded 1 round. Shock Trap: triggered, 2d6 lightning + stunned 1 round, Reflex save. Smoke Canister: 20 ft heavily obscured, 3 rounds. Device lasts 1 minute if not triggered. Max 2 devices active."}
      - {name: Quick Modification, level: 6, action: "1 Action", description: "Costs 1 Salvage Die. Enhance ally's weapon or armor for 1 minute: +1 damage, +1 DV, or add 20 ft range to a melee weapon (thrown)."}
      - {name: Overcharged Creations, level: 8, action: Passive, description: "Jury-Rig devices deal +1d6 damage and save DCs increase by +2. Quick Modification bonuses increase to +2 damage, +2 DV, or add a special property (bypasses resistance OR ignores cover)."}
      - {name: Masterwork Improvisation, level: 10, action: "2 Actions", description: "1/Long Rest. Spend 3 Salvage Dice. Choose one: Scrap Mech Suit (self or ally, +4 DV, +2 melee damage, resistance to physical, 1 minute), EMP Bomb (60 ft range, 30 ft radius, 4d8 lightning to constructs, disables electronics/augmentations 1 minute), or Mobile Barricade (30 HP, full cover, moves 20 ft/turn using 1 action, 1 minute)."}
starting_equipment:
  - Improvised melee weapon or simple weapon
  - Sidearm
  - Light armor (scavenged)
  - "Scavenger's pack: crowbar, 50 ft rope, grappling hook, canvas sack, salvage scanner, flint and steel"
  - 3d6 x 10 credits in miscellaneous salvage
---
# Scavenger

> **Recommended Build Guide — Classless System**
> This file describes the **Scavenger recommended build**: a curated path through Ashfall's shared skill trees designed for this build's core fantasy. Under the current rules, you are **not locked to this build**. Choose a **chassis** for your starting stats and proficiencies, then spend **Character Points (CP)** in any skill trees that match your character concept.
>
> - **Chassis selection and starting stats:** see [Chassis](../chassis.md)
> - **CP economy, spending rules, and milestones:** see [Character Points](../character-points.md)
> - **Full skill tree catalog:** see [Skill Trees](../skill-trees.md)
>
> The ability descriptions, skill tree layouts, and feature details in this file remain the authoritative rules reference for those abilities. The CP values listed in the skill trees are the costs for purchasing abilities.

*The Wasteland doesn't give handouts. Everything worth having is buried under rubble, locked behind rusted doors, or clutched in the hands of someone who'll kill you to keep it. But you? You see things others don't. That corroded pipe isn't junk — it's a weapon. That gutted car isn't a wreck — it's cover, spare parts, and a half-tank of fuel if you know where to look. The broken drone everyone else walked past? You had it throwing sparks at raiders inside of ten minutes.*

*You are the Scavenger. You've survived not because you're the strongest, the fastest, or the smartest — though you're no slouch in any department. You've survived because you're the most adaptable. You can fight with a lead pipe or a chair leg and make it look like you trained with it your whole life. You can patch a wound with duct tape and antiseptic, build a barricade from scrap metal, and rig a bomb from cleaning supplies. While others plan their loadouts, you plan around what you'll find. And you always find something.*

---

## Base Build (Levels 1-5)

### Core Stats

| Attribute | Value |
|-----------|-------|
| **Primary Attributes** | Agility (AGI), Endurance (END) |
| **Hit Die** | d8 |
| **HP at Level 1** | 10 + END modifier |
| **HP per Level** | 1d8 (or 5) + END modifier |
| **Starting Humanity** | 10 |
| **Armor Proficiency** | Light armor, medium armor |
| **Weapon Proficiency** | Simple weapons, sidearms |
| **Save Proficiencies** | Fortitude, Reflex |
| **Skill Bonuses** | Survival +2, Investigation +2 |
| **Starting CP** | 15 |

### Starting Equipment

- Improvised melee weapon or simple weapon of choice
- Sidearm (pistol or revolver)
- Light armor (scavenged — leather scraps, padded jacket, sports gear, whatever you found)
- Scavenger's pack: crowbar, 50 ft rope, grappling hook, canvas sack, salvage scanner, flint and steel
- 3d6 × 10 credits in miscellaneous salvage and trade goods

### Level Progression (1-5)

#### Level 1: Scrounger's Instinct, Improvised Arsenal & Salvage Dice

- **Scrounger's Instinct (Passive):** You have an uncanny eye for useful materials. You gain **advantage on Perception and Investigation checks** to find items, loot, resources, or hidden caches. After any combat encounter or after spending 10 minutes searching a new area (a ruin, a vehicle, a building), you automatically find **1d4 Salvage worth of useful materials** — scrap metal, wire, chemicals, rations, ammunition components, or other useful debris. The GM may increase or decrease this yield based on the richness of the environment (a pre-war military base yields more than an empty stretch of highway).

  This doesn't replace thorough searching — it represents your trained eye picking up what others overlook. While your companions loot bodies, you're already stripping copper wire from the walls.

- **Improvised Arsenal (At-Will):** You are proficient with **all improvised weapons**. In your hands, objects that would normally deal 1d4 damage as improvised weapons instead deal **1d8 damage**. When you attack with an improvised weapon, choose the damage type: bludgeoning, piercing, or slashing (a broken bottle slashes, a cinder block bludgeons, a rebar spike pierces).

  All improvised weapons you wield gain the **thrown property (range 20/60)** if they don't already have it. You can **draw or pick up improvised weapons as a free action** (no action cost), representing your ability to snatch useful objects mid-fight without breaking stride.

  *Examples of improvised weapons: lead pipe, car door, hubcap, brick, glass bottle, fire extinguisher, bar stool, length of chain, rock, skull (yes, really).*

  > **What counts as an improvised weapon?** Any object not designed as a weapon that can reasonably be swung, thrown, or jabbed at someone. The GM has final say, but the Scavenger's whole identity is making anything into a weapon. If you can hold it, you can fight with it. The rule of thumb: if it's within reach and you can lift it, it's a weapon in your hands.

- **Salvage Dice (Resource Pool):** You maintain a pool of **Salvage Dice (d6)** — a combination of carried scraps, pocketed materials, and your instinct for grabbing the right piece of junk at the right moment. Your pool size equals your **proficiency bonus + your END modifier** (minimum 3 dice).

  Your Salvage Dice pool **replenishes fully on a short rest** (8 hours). During a short rest, you sort through what you've collected, repair your kit, and prepare your materials for the next challenge.

  You spend Salvage Dice to power your features: **Makeshift Solution** (Level 2), **Scrapyard Strike** (Level 3), and **Wasteland Ingenuity** (Level 5). Managing your Salvage Dice is the core of playing a Scavenger — spend too freely and you'll have nothing left when it counts; hoard too carefully and you're leaving power on the table.

  > **Building Your Scavenger — Quick Reference:**
  >
  > At Level 1 with END 14 (+2) and proficiency +2:
  > - **Salvage Dice Pool:** 4 dice (d6)
  > - **Improvised Weapon Damage:** 1d8 + AGI modifier
  > - **Improvised Weapon Throw Range:** 20/60 ft
  > - **Salvage Found (per search):** 1d4 Salvage worth of materials
  >
  > At Level 5 with END 16 (+3) and proficiency +3:
  > - **Salvage Dice Pool:** 6 dice (d6)
  > - **Scrapyard Strike DC:** 8 + 3 (prof) + AGI mod
  > - **Capstone cost:** 3 Salvage Dice (half your pool)

#### Level 2: Makeshift Solution

**Makeshift Solution (1 Action, costs 1 Salvage Die):** You cobble together a quick tactical solution from available materials. Spend 1 Salvage Die and choose one of the following:

- **Improvised Cover:** You throw together a barricade — overturned tables, scrap metal, piled debris — in an **adjacent unoccupied square**. The barricade provides **half cover (+2 DV)** to creatures behind it. It has **10 HP** and lasts for **1 minute** or until destroyed. You can maintain a maximum of 2 barricades at once.

- **Caltrops & Hazards:** You scatter sharp debris, broken glass, or chemical irritants across a **10-foot square** within 10 feet. The first creature to enter the area (or a creature that starts its turn there) must make a **Reflex save (DC = 8 + your proficiency bonus + your AGI modifier)** or take **1d6 piercing damage** and have its speed halved until the end of the creature's next turn (this does not apply the Slowed condition). The hazard persists for 1 minute or until cleared (1 action to clear a 5-foot square).

- **Quick Patch:** You apply a hasty field repair — bandages from cloth scraps, antiseptic from scavenged chemicals, a splint from a broken signpost. Heal yourself or an adjacent ally for **1d6 + your END modifier** hit points. This is not magical healing; it's practical medicine and improvisation.

*Makeshift Solution represents the Scavenger's moment-to-moment adaptability. In the span of a few seconds, you can change the battlefield, create an obstacle, or patch a wound — whichever the situation demands.*

#### Level 3: Scrapyard Strike

**Scrapyard Strike (On Hit, costs 1 Salvage Die):** When you hit a creature with an improvised weapon or thrown weapon attack, you can spend **1 Salvage Die** to add **1d6 damage** to the attack and apply one of the following effects. The target must make a saving throw (**DC = 8 + your proficiency bonus + your AGI modifier**) or suffer the effect:

- **Blinding Throw** (Reflex save): You hurl dust, glass shards, or caustic chemicals into the target's eyes. On a failed save, the target is **blinded until the end of its next turn**.

- **Staggering Blow** (Fortitude save): You slam the target with something heavy and unwieldy — a chunk of concrete, a car battery, a fire extinguisher to the face. On a failed save, the target is **pushed 10 feet away from you and knocked prone**.

- **Entangling Debris** (Reflex save): You wrap, snag, or tangle the target with wire, chain, netting, or torn fabric. On a failed save, the target is **restrained** until it uses **1 action** to free itself.

You can use Scrapyard Strike **once per hit** — you cannot stack multiple Salvage Dice on a single attack. However, if you make multiple attacks in a turn (through Extra Attack or other means), you can use Scrapyard Strike on each hit, spending a Salvage Die each time.

*Example: At Level 3 with AGI 15 (+2) and proficiency +2, your Scrapyard Strike DC is 12. You hit a raider with a thrown hubcap for 1d8+2 damage, spend a Salvage Die to add 1d6 damage and choose Staggering Blow. The raider makes a DC 12 Fortitude save. Failure: 1d8+1d6+2 damage, pushed 10 feet, and prone. The raider's buddies have to navigate around their fallen comrade to reach you — or eat the caltrops you scattered last turn.*

#### Level 4: Attribute Improvement

Increase one attribute by +2, or two attributes by +1 each (maximum 20 before modifiers).

#### Level 5 Capstone: Wasteland Ingenuity

**Wasteland Ingenuity (1 Action, 1/Short Rest):** When you need something big, you build it. Spend **3 Salvage Dice** and choose one of the following:

- **Scrap Bomb:** You quickly assemble an explosive device from volatile chemicals, a container, and a fuse. **Throw it up to 30 feet** at a point you can see. Every creature within a **15-foot radius** must make a **Reflex save** (DC = 8 + proficiency + AGI modifier) or take **3d8 fire damage**. On a successful save, creatures take half damage. This destroys light cover in the blast radius and ignites flammable objects.

- **Jury-Rigged Armor:** You rapidly reinforce your own or an ally's armor (or body, if unarmored) with scrap plating, padding, and improvised bracers. Touch yourself or one willing creature within 5 feet. For **1 minute**, the target gains **+3 to Defense Value** and **resistance to one physical damage type** (bludgeoning, piercing, or slashing — chosen when you create the armor). When the duration ends, the jury-rigged additions fall apart.

- **Field Innovation:** The signature of a true Scavenger — you improvise a solution nobody saw coming. Work with your GM to create a **single-use functional device or contraption** from available materials. Examples include: a smoke screen (20-foot radius, heavily obscured, 1 minute), a makeshift zipline or bridge (up to 60 feet), a crude signal jammer (disrupts electronics within 30 feet for 1 minute), or a distraction device (creates noise and movement at a chosen point for 1 minute, drawing enemy attention). The creation should be roughly equivalent in power to a 1st-level spell effect, and it functions once before breaking apart.

  > **GM Guidance for Field Innovation:** The Scavenger isn't casting spells — they're building things from garbage. The player should describe what they're making and what materials they're using. If it's creative, plausible within the fiction, and roughly balanced with the other Wasteland Ingenuity options, say yes. If it's too powerful, scale it down. The spirit of this ability is rewarding player creativity, not creating an unlimited toolbox.

*Wasteland Ingenuity recharges on a short rest (8 hours), but costs 3 Salvage Dice — roughly half your pool at Level 5. Using it means committing significant resources to one big play. Choose wisely.*

### Skill Trees

Scavengers have access to three skill trees, each costing CP to unlock features:

#### Scrapper (Combat-Focused)

The art of fighting with whatever's at hand — turning junk into lethal weapons and the battlefield into your personal armory.

- **Shrapnel Throw (5 CP):** When you hit a creature with a **thrown improvised weapon**, all creatures within **5 feet of the target** take **1d4 piercing damage** (no save). The improvised weapon shatters, scatters, or explodes on impact, sending debris in all directions.

- **Relentless Scrapper (10 CP, Requires Shrapnel Throw):** When you reduce a creature to 0 HP with an improvised or thrown weapon attack, you can immediately **pick up a nearby object as a free action** and make a **free thrown weapon attack** against another target within range. This free attack does not count toward your multiple attack penalty.

- **Scrapyard Champion (15 CP, Requires Relentless Scrapper):** Your improvised weapons deal **1d10 damage** instead of 1d8. When you spend a Salvage Die on **Scrapyard Strike**, the bonus damage is **1d8** instead of 1d6. You've elevated junk-fighting to an art form.

#### Salvager (Resource & Utility)

Maximizing what you find, stretching what you have, and always — *always* — having something useful in your back pocket.

- **Efficient Salvage (5 CP):** Your Salvage Dice pool increases by **2**. Additionally, when you spend a Salvage Die and roll the **maximum value** (6 on a d6), the die is **not expended** — you keep it in your pool. Luck favors the resourceful.

- **Field Strip (10 CP, Requires Efficient Salvage):** As **1 Action**, you can destroy a non-magical item or piece of equipment to recover materials. You gain **Salvage Dice equal to the item's tier** (minimum 1, maximum 3). The item is destroyed. You cannot Field Strip items that are too simple (rocks, sticks) or too large to disassemble quickly (vehicles, structures). This represents cannibalizing gear for parts.

- **Treasure Hunter (15 CP, Requires Field Strip):** Your Salvage Dice become **d8s** instead of d6s (affecting all features that use Salvage Dice). Additionally, once per long rest, when you spend at least 30 minutes searching a **significant location** (ruin, bunker, settlement, crash site), you find one item of your choice worth up to **Tier 3** value. The GM has final say on what's plausible for the location.

#### Survivor (Durability & Self-Reliance)

You've eaten worse, breathed worse, and survived worse. The Wasteland has been trying to kill you since the day you were born, and it hasn't managed yet.

- **Wasteland Gut (5 CP):** You have **advantage on saving throws** against poison, disease, and radiation. You can survive on **half rations** without penalty. Your body has adapted to the toxins and filth of the post-Fall world — you've built up immunities that would horrify a pre-war doctor.

- **Reinforced Scraps (10 CP, Requires Wasteland Gut):** When wearing light or medium armor, you can spend **10 minutes** during a short rest reinforcing it with scavenged materials (scrap metal, padding, salvaged plating). Your armor gains **+1 DV** until your next short or long rest. This bonus does not stack with itself.

- **Hard to Kill (15 CP, Requires Reinforced Scraps):** When you take damage that would reduce you below half your maximum HP, you can use your **reaction** and spend **2 Salvage Dice** to reduce that damage by **2d6 + your END modifier**. Additionally, you have **advantage on death saving throws**. Scavengers are notoriously difficult to put down permanently.

### Magic Relationship

Scavengers have **no innate magical ability**. Their power comes from resourcefulness, not mysticism. However, they can learn cantrips by spending **15 CP per cantrip**. Cantrips learned this way are flavored as **improvised gadgets or techniques** rather than spells — *Firebolt* becomes a thrown incendiary, *Mage Hand* becomes a hooked line on a reel, *Light* becomes a jury-rigged flashlight.

Scavengers cannot learn leveled spells unless they multiclass into a casting class or take a Mastery Path that grants spellcasting.

### What Makes a Scavenger Different?

The Scavenger occupies a unique niche in the party: the **adaptable generalist who turns the environment into a resource**.

- **Not a Technician:** The Technician understands technology — they build drones, hack systems, and interface with machines. The Scavenger doesn't care how a device *works*; they care whether it can be thrown, burned, eaten, or turned into a weapon. Technicians engineer solutions. Scavengers improvise them.

- **Not an Operative:** The Operative is a precision specialist — stealth, burst damage, and skill mastery. The Scavenger is adaptable but not subtle. They don't pick locks quietly; they pry doors open with a crowbar. They don't assassinate targets; they throw a car battery at their head.

- **Not a Warrior:** The Warrior is a trained combatant with formal technique and discipline. The Scavenger fights dirty — no stances, no weapon specialization, just whatever's within arm's reach. The Warrior holds the line; the Scavenger changes the battlefield.

The Scavenger's closest real-world archetype is the **combat engineer meets guerrilla fighter** — someone who uses terrain, debris, and sheer improvisation to control the fight. If the Warrior is a professional soldier and the Operative is a special forces agent, the Scavenger is the resistance fighter who builds IEDs from fertilizer and fights with a shovel.

## Advanced Specializations (Levels 6-10)

Scavengers who reach Level 6 have proven something: they can survive anything the Wasteland throws at them with nothing but junk and guts. Now they choose how to excel: dominating close combat as a brutal Junker, keeping their team supplied and alive as a Packrat, or building impossible devices from garbage as a Tinkerer.

**System Notes:**
- All characters gain 10 CP per level from levels 6-10
- Short rest: 8 hours
- Long rest: 1 week
- Bounded accuracy: maximum core bonus of +14 (+18 mythic tier)
- 3-action economy per turn

### Junker (Melee Brawler / Arena Fighter)

*In the fighting pits of Rustmarket and the gladiatorial rings of Scrapwall, one kind of fighter always draws the biggest crowd: the one who walks in empty-handed and walks out covered in someone else's blood. Junkers have turned improvised weapon combat from a survival tactic into a devastating martial art. They read a room like a Warrior reads a battlefield — except instead of seeing terrain and cover, they see weapons. That chair. That pipe. That guy's helmet. Everything is a weapon, and a Junker knows how to use it all.*

**Prerequisites:** Level 6, Scavenger build

**New Skill Tree Unlocked:** Pit Fighter (improvised weapon combos, environmental attacks, crowd control, finishing moves)

#### Level 6 Features

**Junkyard Fury** (Passive)
When you hit a creature with an improvised weapon attack, you can immediately move **5 feet** in any direction without provoking opportunity attacks. This represents your flowing, chaotic fighting style — you strike and reposition in a single motion, bouncing from target to target like a whirlwind of scrap metal.

Additionally, your **Scrapyard Strike bonus damage increases to 2d6** (instead of 1d6). Your improvised strikes have become devastatingly precise — you know exactly how to angle a pipe, where to plant a thrown bottle, how to maximize the damage from anything you grab.

**Arena Instincts** (Passive)
Your second improvised weapon attack each turn does **not suffer the multiple attack penalty** (-3). You've trained (or been forced) to fight with both hands, with objects in each fist, with anything available. Your muscle memory doesn't falter on the follow-up — if anything, the second swing is more dangerous than the first because the target is still reacting to the first one.

*Note: This applies only to the second improvised weapon attack specifically, not the third. Your third attack action in a turn still suffers the normal -6 penalty.*

#### Level 8 Feature

**Wrecking Ball** (2 Actions)
You spin, swing, and unleash a devastating area attack with your improvised weapon. Make **one attack roll against every creature within 5 feet** of you. You deal normal improvised weapon damage to each creature you hit.

Each hit can trigger **Scrapyard Strike** separately (costing 1 Salvage Die per target hit). You can apply different Scrapyard Strike riders to different targets — blind one, knock another prone, entangle a third.

*This is your crowd control ability. When surrounded by raiders, gangers, or mutant beasts, you stop fighting individuals and start fighting the room. A Junker in a crowd with a length of chain and Salvage Dice to spend is one of the most terrifying things in the Wasteland.*

*Example: At Level 8, surrounded by 4 raiders, you use Wrecking Ball (2 actions). You roll a 17 to hit. Three raiders are hit. You spend 3 Salvage Dice: Blinding Throw on raider 1, Staggering Blow on raider 2, Entangling Debris on raider 3. Each takes 1d8 (or 1d10 with Scrapyard Champion) + 2d6 + AGI mod damage, plus their respective riders. With your remaining 1 action, you move. Devastating.*

#### Level 10 Capstone Ability

**Scrap Storm** (1/Long Rest, 1 Action)
You enter a state of perfect destructive improvisation. For **1 minute** (10 rounds), debris whirls around you, weapons materialize in your hands from the environment, and everything within arm's reach becomes lethal:

- Your improvised weapons deal **1d12 damage** (instead of 1d8, or instead of 1d10 with Scrapyard Champion)
- **Scrapyard Strike costs 0 Salvage Dice** — every hit carries its full devastating rider for free
- You gain **+2 to Defense Value** from whirling debris that deflects incoming attacks
- You can **draw or throw improvised weapons as part of any attack** (no action cost, no limit)

When Scrap Storm ends, you immediately gain **1 level of exhaustion**. The frenzy of destruction takes everything out of you.

*Scrap Storm is the Junker's ultimate expression: a one-person demolition crew who turns the entire environment into ammunition. Save it for the fights where you're outnumbered, outgunned, and surrounded — the fights where a Junker thrives.*

---

### Packrat (Quartermaster / Support)

*Ask any caravan leader who they'd rather have: a Warrior with a greatsword or a Packrat with a full bag. The smart ones pick the Packrat every time. Because the Warrior can kill the raiders who attack the caravan — but the Packrat is the reason the caravan survives the three days between the last water source and the next settlement. Packrats are hoarders, scavengers, and field logistics experts who have elevated "always having the right thing at the right time" into an art form. They are the reason their group never runs out of bandages, ammunition, food, or hope.*

**Prerequisites:** Level 6, Scavenger build

**New Skill Tree Unlocked:** Logistics (resource sharing, supply management, emergency provisions, morale support)

#### Level 6 Features

**Deep Pockets** (Passive)
Your Salvage Dice pool increases by **3**. Your relentless hoarding, meticulous sorting, and obsessive material collection mean you always have more to work with than anyone expects. At Level 6 with END +3 and proficiency +3, your base pool is 6 — with Deep Pockets, it's 9.

Additionally, after any combat encounter, you automatically find **+1d4 extra Salvage worth of materials** (this stacks with Scrounger's Instinct). While everyone else catches their breath, you're already picking through the debris, stripping useful components, and stuffing them in your pack. Your bag is legendary. People have pulled couches out of it.

**Supply Line** (1 Action, costs 1 Salvage Die)
You can use any **Makeshift Solution** effect at a range of **30 feet** instead of the normal adjacent range. Toss a med-pack to a wounded ally across the room. Throw together a barricade at a chokepoint you can see. Scatter caltrops in a doorway 25 feet away. Your supply chain extends across the battlefield.

*Supply Line is what turns a Scavenger from a solo survivor into a team asset. You're no longer just patching yourself — you're keeping everyone alive, controlling the battlefield from range, and making sure your frontliners have cover when they need it.*

#### Level 8 Features

**Emergency Stash** (Reaction, END modifier times/Short Rest, minimum 1)
When an ally within **30 feet** takes damage, you can use your reaction to spend **1 Salvage Die** and reduce that damage by **1d6 + your END modifier**. You throw them a scavenged shield, yank them behind a piece of debris, or toss a piece of reactive armor that absorbs the hit.

This works against any damage type — you've got something in your bag for everything. Fire? Thermal blanket. Acid? Neutralizing agent. Bullet? Scrap plating. You prepared for this.

**Field Requisition** (Short Rest Activity)
During a short rest, you can spend Salvage Dice to create **temporary consumable items** for your party. Each item costs Salvage Dice equal to its tier (Tier 1 = 1 die, Tier 2 = 2 dice, Tier 3 = 3 dice). Items created this way last until your **next short rest**, after which they fall apart, expire, or lose potency.

Examples of field-requisitioned items:
- **Tier 1 (1 die):** Improvised bandages (heal 1d6 HP, 1 use), caltrops (10 ft square), torch, 50 ft rope, smoke pot
- **Tier 2 (2 dice):** Stim pack (heal 2d6+END HP, 1 use), flash grenade (15 ft blind 1 round), antitoxin (advantage vs poison 1 hour), improvised lockpicks
- **Tier 3 (3 dice):** Scrap grenade (3d6 fire, 15 ft radius, 1 use), jury-rigged armor reinforcement (+2 DV for 1 encounter), gas mask (immune to inhaled effects 1 hour)

*Field Requisition doesn't create permanent gear — it creates the Wasteland equivalent of MREs and field kits. Crude, temporary, effective. The Packrat's party never goes without.*

#### Level 10 Capstone Ability

**Quartermaster's Cache** (1/Long Rest, 1 Action)
You open your bag, your pack, your jacket — and impossibly, you have exactly what everyone needs. Spend **4 Salvage Dice**. All allies within **30 feet** immediately receive:

- **2d6 + your END modifier temporary HP** (field armor, emergency bandages, stim injections)
- **+1 to all attack rolls for 1 minute** (better ammunition, weapon modifications, tactical supplies)
- **One Makeshift Solution effect of your choice** applied to each ally individually (Improvised Cover at their location, Caltrops in their adjacent squares, or Quick Patch healing)

This represents the Packrat's ultimate logistical achievement: a single moment where the entire party is supplied, equipped, and ready. You've been saving this stuff for exactly this situation.

*"You need ammo? I've got ammo. Bandages? Got those too. Armor patch for that hole in your chest plate? Give me four seconds. Everyone load up — this is the good stuff. I've been saving it."*

---

### Tinkerer (Gadgeteer / Field Engineer)

*The Technician builds a drone, programs it, and sends it into combat. The Tinkerer grabs a car battery, two forks, and a rubber band, and builds something that does the same thing — once. Tinkerers are the Wasteland's improvisational engineers: they can't build anything permanent, but they can build anything temporary. Give them ten minutes and a pile of scrap, and they'll hand you a device that works exactly once, probably won't explode in your hand, and will absolutely ruin someone's day.*

**Prerequisites:** Level 6, Scavenger build

**New Skill Tree Unlocked:** Gadgetry (device construction, field modifications, trap engineering, explosive improvisation)

*Note: The Tinkerer and Technician both build things, but they are fundamentally different. The Technician is an engineer — they understand the technology, they build precision instruments, and their creations are reliable and repeatable. The Tinkerer is a hack — they don't know why their devices work, they just know that if you connect this wire to that battery and throw it, something impressive happens. Technicians build tools. Tinkerers build one-shot miracles.*

#### Level 6 Features

**Jury-Rig Device** (1 Action, costs 1 Salvage Die)
You cobble together a one-shot gadget from available materials. Choose one:

- **Flash Bang:** Throw up to 30 feet. All creatures in a **15-foot radius** must make a **Reflex save** (DC = 8 + proficiency + AGI modifier) or be **blinded until the end of their next turn**. Creatures that succeed are not blinded but have disadvantage on their next attack roll (disoriented by the flash).

- **Shock Trap:** Place in an adjacent square. When a creature enters the square or starts its turn there, the trap triggers: **2d6 lightning damage** and the creature must make a **Reflex save** or be **stunned until the end of its next turn**. The trap is visible (DC 12 Perception to spot) and can be disarmed (DC 14 to disarm). Single-use.

- **Smoke Canister:** Throw up to 30 feet. Creates a **20-foot radius** of heavy smoke that **heavily obscures** the area for **3 rounds**. Creatures inside have total concealment. Wind disperses the smoke in 1 round.

Created devices last **1 minute** if not used/triggered, then fall apart. You can have a maximum of **2 devices active** at once. Creating a third causes the oldest to break.

**Quick Modification** (1 Action, costs 1 Salvage Die)
You make a rapid battlefield modification to an ally's gear (or your own). Touch one willing creature's weapon or armor. For **1 minute**, choose one enhancement:

- **Weapon:** +1 to all damage rolls with that weapon
- **Armor:** +1 to Defense Value
- **Range:** A melee weapon gains the thrown property (range 20/60 ft)

You can maintain one Quick Modification at a time. Applying a new one ends the previous one.

#### Level 8 Feature

**Overcharged Creations** (Passive)
Your gadgets and modifications are getting dangerously effective. Your **Jury-Rig Devices** gain the following improvements:

- All device damage increases by **+1d6**
- Device save DCs increase by **+2**
- You can have up to **3 active devices** simultaneously

Your **Quick Modification** bonuses increase:
- **Weapon:** +2 to all damage rolls
- **Armor:** +2 to Defense Value
- **Special Property (new option):** The weapon ignores damage resistance OR the weapon ignores cover bonuses to DV (choose when applied)

*Example: At Level 8, your Flash Bang blinds on a failed DC 15 Reflex save (base 13 + 2 from Overcharged). Your Shock Trap deals 3d6 lightning damage (2d6 base + 1d6 overcharged). Your Quick Mod gives an ally's rifle +2 damage and the ability to ignore cover. These aren't elegant — they spark, smoke, and look like they might explode in your hands. But they work.*

#### Level 10 Capstone Ability

**Masterwork Improvisation** (1/Long Rest, 2 Actions, costs 3 Salvage Dice)
You build something that shouldn't be possible from the materials at hand. Spend 2 actions and 3 Salvage Dice to create one of the following masterwork devices, which lasts for **1 minute** or until destroyed:

- **Scrap Mech Suit:** You or one willing ally within 5 feet dons an exoskeleton of salvaged metal, cable, and hydraulics. The wearer gains **+4 to Defense Value**, **+2 to melee damage rolls**, and **resistance to all physical damage** (bludgeoning, piercing, slashing). The suit has 30 HP — damage is applied to the suit first, and when it reaches 0 HP, it falls apart. The wearer's speed is reduced by 10 feet while wearing it.

- **EMP Bomb:** You assemble a devastating electromagnetic pulse device. Throw it up to **60 feet**. All creatures and objects in a **30-foot radius** are affected: **constructs and mechanical creatures** take **4d8 lightning damage** (Reflex save for half). All **electronics, augmentations, and technological devices** in the radius are **disabled for 1 minute** (augmented creatures lose augmentation benefits; hacked systems reset). Non-construct creatures take 2d8 lightning damage (Reflex save for half).

- **Mobile Barricade:** You construct a wheeled barricade of scrap metal and debris. It has **30 HP**, provides **full cover** (+5 DV) to creatures behind it, and can be **moved up to 20 feet per round** using 1 action (bonus action — once per turn). It occupies a 10-foot wide space. The barricade is immune to poison and psychic damage but vulnerable to fire. When destroyed, it collapses into difficult terrain.

> **GM Guidance:** Masterwork Improvisation is the Tinkerer's capstone — it should feel impressive and impactful. The Scrap Mech Suit is your answer to overwhelming force. The EMP Bomb is your answer to technology-heavy enemies. The Mobile Barricade is your answer to open ground with no cover. Each solves a different tactical problem in a way only a Tinkerer can.

*"Is it going to work?" "Probably." "Probably?!" "Look, I built it from a shopping cart and a generator I found in a dumpster. You want guarantees, talk to a Technician. You want results? Stand back."*
