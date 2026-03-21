---
game_data: true
melee_weapons:
  - {name: Makeshift Club, tier: 1, damage: "1d6", stat: MIG, cost: 50}
  - {name: Scrap Knife, tier: 1, damage: "1d4", stat: MIG, properties: [finesse, concealable], cost: 75}
  - {name: Rebar Spear, tier: 1, damage: "1d8", stat: MIG, properties: [reach], cost: 100}
  - {name: Pipe Wrench, tier: 1, damage: "1d6", stat: MIG, cost: 50}
  - {name: Machete, tier: 2, damage: "1d8", stat: MIG, properties: [versatile], cost: 250}
  - {name: Combat Knife, tier: 2, damage: "1d6", stat: MIG, properties: [finesse, "+1 attack"], cost: 300}
  - {name: Shock Baton, tier: 2, damage: "1d6+1d4 electric", stat: MIG, properties: ["crit: Fortitude DC 13 or Dazed 1 round"], cost: 400}
  - {name: Salvaged Sword, tier: 2, damage: "1d10", stat: MIG, cost: 350}
  - {name: Vibro-Blade, tier: 3, damage: "1d8+1d6 energy", stat: MIG, properties: [finesse], cost: 1200}
  - {name: Monofilament Whip, tier: 3, damage: "1d10", stat: AGI, properties: [reach, disarm], cost: 1500}
  - {name: Power Maul, tier: 3, damage: "2d6", stat: MIG, properties: [knockback], cost: 1000}
  - {name: Hardlight Blade, tier: 4, damage: "2d6 energy", stat: MIG, properties: [finesse, "+1 attack"], cost: 3500}
  - {name: Thermal Lance, tier: 4, damage: "1d12+1d4 fire", stat: MIG, properties: [reach], cost: 3000}
  - {name: Powered Warhammer, tier: 4, damage: "2d8", stat: MIG, properties: [knockback, heavy], cost: 4000}
  - {name: Plasma Sword, tier: 5, damage: "2d8 energy", stat: MIG, cost: 10000}
  - {name: Nano-Edge Katana, tier: 5, damage: "1d10+2d6", stat: MIG, properties: [finesse, "crit 18-20"], cost: 12000}
  - {name: Graviton Hammer, tier: 5, damage: "3d6", stat: MIG, properties: [area slam], cost: 15000}
  - {name: Hatchet, tier: 1, damage: "1d6", stat: MIG, properties: [light], cost: 60}
  - {name: Reinforced Bat, tier: 1, damage: "1d6", stat: MIG, properties: [knockback], cost: 40}
  - {name: Brass Knuckles, tier: 1, damage: "1d4", stat: MIG, properties: [light, concealable], cost: 30}
  - {name: Chain Whip, tier: 1, damage: "1d6", stat: MIG, properties: [reach], cost: 75}
  - {name: Crowbar, tier: 1, damage: "1d6", stat: MIG, cost: 40}
  - {name: Sledgehammer, tier: 2, damage: "1d10", stat: MIG, properties: [heavy, knockback], cost: 200}
  - {name: Stun Gun, tier: 2, damage: "1d4 electric", stat: AGI, properties: [finesse, concealable, non-lethal, "hit: Fortitude DC 12 or Dazed 1 round"], cost: 250}
  - {name: Bayonet, tier: 2, damage: "1d6", stat: MIG, properties: [attaches to rifle], cost: 150}
  - {name: Staff, tier: 1, damage: "1d6", stat: MIG, properties: [versatile, reach], cost: 25}
  - {name: Chainsaw, tier: 2, damage: "2d6", stat: MIG, properties: [heavy, unreliable], cost: 350}
  - {name: Power Fist, tier: 3, damage: "1d8+1d6", stat: MIG, properties: [knockback], cost: 1400}
  - {name: Electrified Net, tier: 2, damage: "1d4 electric", stat: AGI, properties: [entangle], cost: 300}
ranged_weapons:
  - {name: Pipe Pistol, tier: 1, damage: "1d6", range: "30/60", properties: [unreliable, improvised, "craft: DC 10, 1hr, 15cr scrap"], cost: 75}
  - {name: Makeshift Bow, tier: 1, damage: "1d6", range: "80/320", cost: 50}
  - {name: Throwing Knives, tier: 1, damage: "1d4", range: "20/60", properties: [light], cost: 60}
  - {name: 9mm Pistol, tier: 2, damage: "1d8", range: "40/120", cost: 300}
  - {name: Hunting Rifle, tier: 2, damage: "1d10", range: "100/400", properties: ["2-action reload"], cost: 400}
  - {name: Shotgun, tier: 2, damage: "2d6", range: "30/90", properties: [spread], cost: 350}
  - {name: Assault Rifle, tier: 3, damage: "1d10", range: "80/240", properties: [auto-fire], cost: 1200}
  - {name: Sniper Rifle, tier: 3, damage: "2d8", range: "200/800", properties: ["2-action reload", "+2 aimed"], cost: 1800}
  - {name: Plasma Pistol, tier: 3, damage: "2d6 energy", range: "40/120", properties: [overheat], cost: 1500}
  - {name: Heavy Assault Rifle, tier: 4, damage: "2d8", range: "100/300", properties: [auto-fire, "+1 attack"], cost: 4000}
  - {name: Rail Pistol, tier: 4, damage: "2d8", range: "60/180", properties: [penetrate], cost: 3500}
  - {name: Marksman Carbine, tier: 4, damage: "2d10", range: "150/600", properties: ["2-action reload", "+2 aimed"], cost: 5000}
  - {name: Gauss Rifle, tier: 5, damage: "3d8", range: "150/600", cost: 12000}
  - {name: Particle Beam, tier: 5, damage: "2d10 energy", range: "100/300", properties: [penetrate], cost: 15000}
  - {name: Smart Gun, tier: 5, damage: "2d8", range: "60/180", properties: ["+2 hit"], cost: 10000}
  - {name: Sling, tier: 1, damage: "1d4", range: "60/120", cost: 10}
  - {name: Crossbow, tier: 1, damage: "1d8", range: "80/320", properties: [silent, "2-action reload"], cost: 100}
  - {name: Revolver, tier: 2, damage: "1d10", range: "40/120", properties: ["6-shot cylinder"], cost: 350}
  - {name: Sawed-Off Shotgun, tier: 2, damage: "2d8", range: "15/30", properties: [spread, concealable], cost: 300}
  - {name: Submachine Gun, tier: 2, damage: "1d8", range: "30/90", properties: [auto-fire, light], cost: 450}
  - {name: Laser Pistol, tier: 3, damage: "1d8 energy", range: "60/180", properties: [silent], cost: 1000}
  - {name: Laser Rifle, tier: 3, damage: "1d10 energy", range: "120/480", properties: [silent], cost: 1400}
  - {name: Flamethrower, tier: 3, damage: "2d6 fire", range: "15/30 cone", properties: [area, "overheat: +1d6 fire but 1d4 self-damage, vent 1 action"], cost: 1800}
  - {name: Light Machine Gun, tier: 3, damage: "1d10", range: "80/240", properties: [auto-fire, heavy, "requires setup"], cost: 2000}
  - {name: Grenade Launcher, tier: 3, damage: "varies by grenade", range: "60/120", properties: ["2-action reload"], cost: 1000}
  - {name: Rocket Launcher, tier: 4, damage: "4d6 fire", range: "100/300", properties: ["2-action reload", heavy, area], cost: 5000}
  - {name: Cryo Rifle, tier: 4, damage: "2d6 cold", range: "60/180", properties: [slow], cost: 4000}
  - {name: Sonic Disruptor, tier: 4, damage: "2d8 sonic", range: "40/120", properties: [penetrate], cost: 4500}
  - {name: Dart Rifle, tier: 2, damage: "1 piercing", range: "60/120", properties: [silent, "delivers payload"], cost: 350}
  - {name: Balanced Throwing Axes, tier: 2, damage: "1d6+MIG", range: "20/40", properties: [light, thrown, silent, "strap recovery on miss"], cost: 15}
  - {name: Weighted Javelin, tier: 2, damage: "1d8+MIG", range: "30/60", properties: [thrown, "piercing (1)"], cost: 20}
  - {name: Razor Disc, tier: 3, damage: "1d8+AGI", range: "30/60", properties: [thrown, finesse, silent, "50% recovery on soft targets"], cost: 100}
  - {name: Compound Bow, tier: 2, damage: "1d8+AGI", range: "80/240", properties: [finesse, silent, two-handed, "50% arrow recovery"], cost: 50}
  - {name: Repeating Crossbow, tier: 3, damage: "1d10+AGI", range: "60/120", properties: [finesse, silent, two-handed, "magazine (5)"], cost: 150}
  - {name: Composite War Bow, tier: 4, damage: "2d6+MIG", range: "100/200", properties: [silent, two-handed, heavy, "requires MIG 14"], cost: 300}
light_armor:
  - {name: Leather Scraps, tier: 1, dv_bonus: 1, cost: 75}
  - {name: Reinforced Leather, tier: 2, dv_bonus: 2, cost: 250}
  - {name: Fire-Lined Jacket, tier: 2, dv_bonus: 1, special: "Resist fire 5, adv. vs. Burning", cost: 300}
  - {name: Ballistic Vest, tier: 3, dv_bonus: 3, special: "Resist piercing 5", cost: 1000}
  - {name: Hazmat Bodysuit, tier: 3, dv_bonus: 2, special: "Immune environmental Poisoned, radiation -1 step, 4-hr sealed air", cost: 1200}
  - {name: Nano-weave Suit, tier: 4, dv_bonus: 4, special: "Resist energy 5", cost: 3500}
  - {name: Adaptive Nanoweave, tier: 5, dv_bonus: 5, special: "Resist one damage type (chosen each short rest)", cost: 10000}
medium_armor:
  - {name: Scrap Plating, tier: 1, dv_bonus: 3, special: "-5 ft speed", cost: 100}
  - {name: Kevlar Armor, tier: 2, dv_bonus: 4, cost: 400}
  - {name: Dampened Composite, tier: 2, dv_bonus: 3, special: "Adv. Stealth (urban/indoor)", cost: 450}
  - {name: Combat Armor, tier: 3, dv_bonus: 5, special: "Built-in comms", cost: 1500}
  - {name: "Chemist's Plating", tier: 3, dv_bonus: 4, special: "Resist fire 5, resist acid 5, adv. vs. Burning", cost: 1800}
  - {name: Reactive Armor, tier: 4, dv_bonus: 6, special: "Deflect on 16+", cost: 5000}
  - {name: Integrated Tactical Suit, tier: 5, dv_bonus: 7, special: "Sealed (8-hr air), comms, scanner", cost: 15000}
heavy_armor:
  - {name: Welded Scrap Suit, tier: 1, dv_bonus: 5, special: "-10 ft speed, disadv Stealth", cost: 150}
  - {name: Riot Armor, tier: 2, dv_bonus: 7, special: "-5 ft speed", cost: 500}
  - {name: Containment Rig, tier: 2, dv_bonus: 6, special: "-5 ft speed, disadv Stealth, sealed (4-hr air), radiation -1 step", cost: 650}
  - {name: Power Armor Frame, tier: 3, dv_bonus: 8, special: "+2 MIG, requires power cell", cost: 2000}
  - {name: Blast Plating, tier: 3, dv_bonus: 7, special: "DR 3 vs. explosive/AoE, +2 MIG, -10 ft speed, disadv Stealth", cost: 2500}
  - {name: Military Exoskeleton, tier: 4, dv_bonus: 10, special: "+4 MIG, integrated weapons", cost: 7500}
  - {name: Siege Exoskeleton, tier: 5, dv_bonus: 11, special: "+4 MIG, weapon mount, -10 ft speed, disadv Stealth, double carry, half cover allies", cost: 25000}
shields:
  - {name: Scrap Shield, tier: 1, dv_bonus: 1, cost: 50}
  - {name: Combat Shield, tier: 2, dv_bonus: 2, cost: 250}
  - {name: Hardened Shield, tier: 3, dv_bonus: 3, special: "Reaction: reduce incoming damage by 3", cost: 1000}
  - {name: Energy Barrier, tier: 4, dv_bonus: 3, cost: 4000}
  - {name: Phase Barrier, tier: 5, dv_bonus: 4, special: "Reaction: negate 1 attack 1/SR, allies behind gain half cover", cost: 12000}
augmentations:
  - {name: Reflex Booster, tier: 1, humanity_cost: 1, effect: "+2 Initiative", cost: 150}
  - {name: Targeting Computer, tier: 1, humanity_cost: 1, effect: "+1 ranged attacks", cost: 200}
  - {name: Reactive Dermal Mesh, tier: 1, humanity_cost: 1, effect: "+1 DV (stacks with all armor). Melee attacker takes 1d4 piercing.", cost: 200}
  - {name: Enhanced Muscles, tier: 1, humanity_cost: 1, effect: "+2 carrying, +1 MIG checks", cost: 175}
  - {name: Low-Light Optics, tier: 1, humanity_cost: 1, effect: "See in dim light", cost: 125}
  - {name: Communications Suite, tier: 1, humanity_cost: 1, effect: "Internal radio, 10mi", cost: 100}
  - {name: Wired Reflexes, tier: 2, humanity_cost: 2, effect: "+1 action 1/combat", cost: 750}
  - {name: Smart Link, tier: 2, humanity_cost: 2, effect: "+2 attack linked weapons", cost: 600}
  - {name: Subdermal Armor, tier: 2, humanity_cost: 2, effect: "+2 DV", cost: 700}
  - {name: Cybernetic Limb, tier: 2, humanity_cost: 2, effect: "+3 MIG for limb", cost: 800}
  - {name: Neural Processor, tier: 2, humanity_cost: 2, effect: "+2 INT tech skills", cost: 650}
  - {name: Toxin Filters, tier: 2, humanity_cost: 2, effect: "Adv vs poison/disease", cost: 500}
  - {name: Sandevistan Implant, tier: 3, humanity_cost: 3, effect: "Double actions 1 round 1/SR", cost: 3000}
  - {name: Mantis Blades, tier: 3, humanity_cost: 3, effect: "2d6 concealed blades", cost: 2500}
  - {name: Ballistic Coprocessor, tier: 3, humanity_cost: 3, effect: "Reroll miss 1/round", cost: 2800}
  - {name: Synthetic Heart, tier: 3, humanity_cost: 3, effect: "Immune crits, +10 HP", cost: 3500}
  - {name: Phase Shift Module, tier: 3, humanity_cost: 3, effect: "1/SR: invisible 1 round OR reaction incorporeal until next turn", cost: 2500}
  - {name: Trauma Response System, tier: 3, humanity_cost: 3, effect: "Auto-stabilize. 0 HP: take one reaction before unconscious. Allies +2 Medicine.", cost: 2000}
  # Ocular Expansion
  - {name: Cipher Lens, tier: 2, humanity_cost: 2, effect: "+2 Technology with visible devices. Identify networked devices within 30 ft (free action).", cost: 550}
  - {name: Biometric Scanner, tier: 3, humanity_cost: 3, effect: "Advantage on Insight to detect lies. Identify disguises (Investigation vs Deception).", cost: 1500}
  - {name: Predictive Targeting Overlay, tier: 3, humanity_cost: 3, effect: "Aim action +1 attack. 1/SR: mark target — next ranged attack ignores half cover.", cost: 2000}
  - {name: Spectral Filter, tier: 4, humanity_cost: 4, effect: "See through illusions within 60 ft. Detect invisible creatures within 30 ft. Cannot be surprised.", cost: 4500}
  # Dermal Expansion
  - {name: Thermal Shedding Integument, tier: 2, humanity_cost: 2, effect: "Advantage on Stealth vs thermal vision. Resistance to fire damage. Invisible to thermal sensors.", cost: 600}
  - {name: Ablative Plating Implant, tier: 2, humanity_cost: 2, effect: "Reduce physical attack damage by proficiency bonus. Every hit. Physical damage only.", cost: 700}
  - {name: Kinetic Damping Weave, tier: 3, humanity_cost: 3, effect: "Resistance to bludgeoning. Reduce fall by 20 ft. 1 action: discharge grapple (1d8 force, MIG save or release).", cost: 2500}
  - {name: Regenerative Membrane, tier: 4, humanity_cost: 4, effect: "Below half HP: regain 2 HP/turn. Death save success: stabilize at 1 HP. Disabled at Irradiated 3+.", cost: 5000}
  # Skeletal/External/Organ Expansion
  - {name: Shock Absorbers, tier: 1, humanity_cost: 1, effect: "Reduce fall damage by 10 ft. +2 Athletics for jumping/climbing.", cost: 200}
  - {name: Grapple Launcher, tier: 1, humanity_cost: 1, effect: "60 ft grapple line. Pull self to anchor (1 action) or pull object/creature (opposed Athletics).", cost: 150}
  - {name: Metabolic Stabilizer, tier: 1, humanity_cost: 1, effect: "+1 Fortitude vs poison/disease/radiation. First Exhaustion per day reduced by 1.", cost: 200}
  # Tier 1 Expansion
  - {name: Caloric Optimizer, tier: 1, humanity_cost: 1, effect: "Advantage vs environmental exhaustion. 96h without food / 36h without water before checks.", cost: 175}
  - {name: Surge Glands, tier: 1, humanity_cost: 1, effect: "1/SR: +1d4 initiative (declare before seeing roll).", cost: 150}
  - {name: Integrated Tool Kit, tier: 1, humanity_cost: 1, effect: "Cannot be disarmed of tools. Always have basic toolkit for Technology/Sleight of Hand/Crafting.", cost: 125}
  - {name: Social Processor, tier: 1, humanity_cost: 1, effect: "+1 Insight, +1 Persuasion. Record 1 hour audio.", cost: 200}
  - {name: Subcutaneous ID Spoofer, tier: 1, humanity_cost: 1, effect: "1/SR: change biometrics 8 hours. Advantage on Deception for false identity vs scanners.", cost: 150}
  - {name: Pneumatic Joints, tier: 2, humanity_cost: 2, effect: "+10 ft speed. Stand from prone as free action.", cost: 700}
  - {name: Reinforced Spine, tier: 2, humanity_cost: 2, effect: "Double carrying capacity. +2 saves vs prone/grapple/shove.", cost: 800}
  - {name: Deployable Shield, tier: 3, humanity_cost: 3, effect: "+2 DV for 1 min (1/SR). Cannot use two-handed weapons while active.", cost: 2000}
  - {name: Adaptive Alloy Frame, tier: 4, humanity_cost: 4, effect: "1/SR: resistance to bludgeoning, piercing, or slashing for 1 min.", cost: 4500}
  - {name: Countermeasure Pod, tier: 4, humanity_cost: 4, effect: "1/LR reaction: disadvantage on triggering ranged attack + all ranged attacks until next turn.", cost: 5000}
stims:
  - {name: Basic Stim, tier: 1, effect: "Restore 1d8+2 HP", cost: "25 credits"}
  - {name: Combat Stim, tier: 2, effect: "Restore 2d8+2 HP", cost: "75 credits"}
  - {name: Advanced Stim, tier: 3, effect: "Restore 3d8+2 HP + remove 1 condition", cost: "200 credits"}
specialty_armor:
  - {name: Ghillie Suit, tier: 2, dv_bonus: 1, special: "Advantage on Stealth in wilderness", cost: 200}
  - {name: Stealth Suit, tier: 3, dv_bonus: 2, special: "Advantage on Stealth, sound dampening", cost: 2000}
  - {name: Ablative Plating, tier: 2, dv_bonus: 0, special: "Absorbs first 10 damage then destroyed", cost: 150}
  - {name: Powered Scout Armor, tier: 4, dv_bonus: 6, special: "+10 ft speed, no stealth penalty", cost: 6000}
armor_accessories:
  - {name: Tactical Helmet, tier: 2, special: "+1 DV vs critical hits, built-in light", cost: 150}
  - {name: Sealed Helmet, tier: 3, special: "1 hour air supply, toxic atmosphere protection", cost: 400}
  - {name: Thermal Lining, tier: 2, special: "Resist cold, advantage on cold exposure saves", cost: 100}
  - {name: Armor Plating Insert, tier: 2, special: "+1 DV to existing armor", cost: 200}
  - {name: Auto-Injector Mount, tier: 3, special: "Auto-use stim when HP drops below 25%", cost: 500}
  - {name: Mag-Boots, tier: 3, special: "Magnetic grip, zero-G movement, climbing on metal", cost: 350}
  - {name: Rebreather, tier: 2, special: "30 minutes underwater or toxic atmosphere", cost: 100}
clothing:
  - {name: Wasteland Duster, cost: 20, special: "Protection from sun and light rain"}
  - {name: Insulated Clothing, cost: 40, special: "Advantage on cold exposure saves"}
  - {name: Desert Wraps, cost: 25, special: "Advantage on heat exposure saves"}
  - {name: Work Boots, cost: 15, special: "Advantage on rough terrain traversal"}
  - {name: Tactical Goggles, cost: 25, special: "Protection from flash effects and dust"}
  - {name: Utility Belt, cost: 15, special: "Quick-draw 2 items per round"}
  - {name: Concealed Holster, cost: 20, special: "Hide pistol-sized weapon, Perception DC 18 to detect"}
  - {name: Load-Bearing Vest, cost: 25, special: "+4 inventory slots"}
grenades:
  - {name: Molotov Cocktail, tier: 1, damage: "1d6 fire", area: "5 ft radius", cost: 25}
  - {name: Pipe Bomb, tier: 1, damage: "2d6", area: "10 ft radius", cost: 50}
  - {name: Frag Grenade, tier: 2, damage: "3d6", area: "15 ft radius", cost: 75}
  - {name: Flashbang, tier: 2, damage: "0", area: "15 ft radius", effect: "Blinded + deafened 1 round", cost: 50}
  - {name: Smoke Grenade, tier: 2, damage: "0", area: "20 ft radius", effect: "Heavy obscurement 1 minute", cost: 40}
  - {name: Incendiary Grenade, tier: 3, damage: "2d6 fire/round", area: "10 ft radius", effect: "Burns 3 rounds", cost: 150}
  - {name: EMP Grenade, tier: 3, damage: "3d6 vs electronics", area: "15 ft radius", effect: "Disables tech 1 minute", cost: 200}
  - {name: Gas Grenade, tier: 3, damage: "1d6 poison/round", area: "20 ft radius", effect: "Requires gas mask, lasts 3 rounds", cost: 175}
  - {name: Cryo Grenade, tier: 3, damage: "2d6 cold", area: "10 ft radius", effect: "Speed halved 1 round", cost: 150}
  - {name: Plasma Grenade, tier: 4, damage: "4d6 energy", area: "15 ft radius", cost: 400}
  - {name: C4 Charge, tier: 3, damage: "6d6", area: "20 ft radius", effect: "Breaching, requires detonator", cost: 250}
  - {name: Anti-Personnel Mine, tier: 2, damage: "3d6", area: "10 ft radius", effect: "Triggered by proximity", cost: 100}
chems:
  - {name: Adrenaline Shot, tier: 2, effect: "+2 attack and damage for 3 rounds, then 1 Exhaustion", cost: 100}
  - {name: Painkiller, tier: 1, effect: "Resist 3 damage per hit for 1 hour, -2 Perception", cost: 40}
  - {name: Rush, tier: 2, effect: "+1 action for 1 round, Fortitude DC 15 or addicted", cost: 150}
  - {name: Bulk, tier: 2, effect: "+2 MIG for 10 minutes, Fortitude DC 15 or addicted", cost: 100}
  - {name: Focus, tier: 2, effect: "+2 INT for 10 minutes, Fortitude DC 15 or addicted", cost: 100}
  - {name: RadPurge, tier: 2, effect: "Remove 1 level of Irradiated", cost: 100}
  - {name: RadBlock, tier: 2, effect: "Advantage on radiation saves for 8 hours", cost: 75}
  - {name: Sedative, tier: 1, effect: "Unconscious 10 min (Fortitude DC 15 negates). Inject (grappled/restrained/unconscious), ingest (Sleight of Hand vs Perception), or dart delivery.", cost: 30}
  - {name: Antidote, tier: 2, effect: "End one poison or toxin effect", cost: 50}
  - {name: Anti-Rad Serum, tier: 3, effect: "Remove up to 2 levels of Irradiated", cost: 350}
  - {name: Detox, tier: 3, effect: "Cure one addiction", cost: 500}
adventuring_gear:
  - {name: Backpack, cost: 15}
  - {name: "Rope (50 ft)", cost: 10}
  - {name: Grappling Hook, cost: 25}
  - {name: Bedroll, cost: 10}
  - {name: "Rations (1 week)", cost: 20}
  - {name: Water Canteen, cost: 5}
  - {name: Flashlight, cost: 10}
  - {name: Headlamp, cost: 15}
  - {name: Fire Starter Kit, cost: 5}
  - {name: First Aid Kit, cost: 20}
  - {name: Multi-Tool, cost: 15}
  - {name: Binoculars, cost: 30}
  - {name: Compass, cost: 10}
  - {name: Crowbar, cost: 15}
  - {name: Lockpick Set, cost: 30}
  - {name: Electronic Lockpick, cost: 150}
  - {name: Handcuffs, cost: 15}
  - {name: Zip Ties (10), cost: 5}
  - {name: Duct Tape, cost: 5}
  - {name: Wire Spool (50 ft), cost: 10}
  - {name: Tarp/Shelter Sheet, cost: 10}
  - {name: Cooking Kit, cost: 15}
  - {name: Signal Flare (3), cost: 10}
  - {name: Mirror, cost: 5}
  - {name: Chalk (10 pieces), cost: 2}
  - {name: Whistle, cost: 3}
  - {name: Sewing Kit, cost: 5}
  - {name: Shovel, cost: 10}
  - {name: Bolt Cutters, cost: 20}
  - {name: Climbing Gear, cost: 50}
  - {name: Tent (2-person), cost: 30}
  - {name: Fishing Gear, cost: 10}
  - {name: Trap Kit, cost: 25}
  - {name: Camouflage Net, cost: 20}
  - {name: Notebook and Pen, cost: 5}
  - {name: Playing Cards, cost: 3}
survival_gear:
  - {name: Geiger Counter, cost: 75}
  - {name: Gas Mask, cost: 50}
  - {name: Spare Filters (3), cost: 15}
  - {name: Water Purification Tablets (20), cost: 25}
  - {name: Portable Water Purifier, cost: 150}
  - {name: Hazmat Suit, cost: 200, special: "Resist radiation, -5 ft speed"}
  - {name: Salvage Tools, cost: 30}
  - {name: Radiation-Lined Clothing, cost: 100, special: "Advantage on mild radiation saves"}
  - {name: NBC Detection Kit, cost: 100}
  - {name: Decontamination Kit, cost: 75}
  - {name: Solar Charger, cost: 100}
  - {name: Portable Generator, cost: 250}
  - {name: Fuel Can (1 gallon), cost: 20}
tech_equipment:
  - {name: Personal Comm Radio, range: "5 miles", cost: 30}
  - {name: Long-Range Radio, range: "50 miles", cost: 150}
  - {name: Datapad, cost: 75}
  - {name: Hacking Toolkit, cost: 200}
  - {name: Handheld Scanner, cost: 150}
  - {name: Medscanner, cost: 200}
  - {name: Recon Drone, cost: 500}
  - {name: Utility Drone, cost: 350}
  - {name: Motion Sensor, cost: 75}
  - {name: Signal Jammer, cost: 150}
  - {name: Tracking Beacon, cost: 25}
  - {name: Holographic Projector, cost: 300}
  - {name: Voice Modulator, cost: 100}
  - {name: Recording Device, cost: 50}
  - {name: EMP Device (single use), cost: 200}
  - {name: Power Cell, cost: 50}
  - {name: Power Cell (Military Grade), cost: 150}
---
# Equipment

![A bear mutant blacksmith hammers glowing metal at a makeshift forge, crafting weapons for wasteland survivors](/images/illustrations/bear-mutant-blacksmith.png)

## The Gear Tier System

Instead of tracking individual currency units, Ashfall uses **Gear Tiers** (1-10) matched to character level brackets.

**Gear Tier = Power Level**
- Tier 1-2: Salvaged, basic (Levels 1-5)
- Tier 3-4: Military-grade, refined (Levels 6-10)
- Tier 5-7: Experimental, rare (Levels 11-20)
- Tier 8-10: Legendary, unique (Levels 21-30+, Mythic Tier, Optional)

## Credits and Wealth

**Credits** are the universal currency of the Wasteland — a combination of pre-war digital scrip, barter tokens, and faction-backed currency that has become the standard medium of exchange. All equipment, consumables, services, and crafting materials are priced in credits.

### Starting Wealth

All characters receive free starting equipment from their chassis (see *Character Creation* — Starting Equipment), plus **2d6 × 10 credits** for additional purchases. This represents what you've scrounged, earned, or stolen before the campaign begins.

### Wealth by Level

As characters advance, they accumulate wealth through missions, loot, trade, and faction rewards. The following table provides expected **cumulative wealth** (total credits earned) at each level. GMs can adjust based on campaign style.

| Level | Expected Cumulative Wealth | Gear Tier Access | Notes |
|-------|---------------------------|------------------|-------|
| 1 | 100-200 | Tier 1-2 | Starting gear + pocket money |
| 2 | 300-500 | Tier 1-2 | First missions pay modestly |
| 3 | 600-900 | Tier 1-2 | Upgrading starter weapons |
| 4 | 1,000-1,500 | Tier 1-2 | Full Tier 2 loadout affordable |
| 5 | 1,500-2,500 | Tier 1-2 | Saving for Tier 3 transition |
| 6 | 3,000-4,500 | Tier 3 | Faction connections unlock military-grade gear |
| 7 | 4,500-6,500 | Tier 3 | Established reputation |
| 8 | 6,500-9,000 | Tier 3 | Full Tier 3 loadout affordable |
| 9 | 9,000-12,000 | Tier 3 | Saving for Tier 4 transition |
| 10 | 12,000-16,000 | Tier 3-4 | Known across settlements |
| 11 | 16,000-22,000 | Tier 4 | Legendary contacts unlock advanced gear |
| 12 | 22,000-30,000 | Tier 4 | |
| 13 | 30,000-40,000 | Tier 4 | Full Tier 4 loadout affordable |
| 14 | 40,000-55,000 | Tier 4 | Saving for experimental tech |
| 15 | 55,000-75,000 | Tier 5 | Research labs and black markets accessible |
| 16-20 | 75,000-200,000+ | Tier 5+ | Apex-tier legendary equipment |

### Tier Access (Narrative Gating)

**Having credits doesn't guarantee access.** Higher-tier equipment requires connections, reputation, or specialized knowledge to acquire:

- **Tier 1-2:** Available in any settlement market or scavenged from ruins. No restrictions.
- **Tier 3:** Requires faction standing, military contacts, or access to pre-war caches. Most settlement markets don't stock Tier 3 gear openly. Available from Level 6+.
- **Tier 4:** Requires high-level faction trust, black market connections, or corporate/military contacts. Available from Level 11+.
- **Tier 5+:** Experimental, prototype, or unique items. Found in research facilities, crafted by master artisans, or awarded by factions. Available from Level 15+. These cannot typically be purchased — they must be earned, discovered, or commissioned.

**GM Note:** Tier gating preserves bounded lethality. A Level 3 character with 5,000 credits (from lucky loot) still can't buy a Plasma Sword — nobody in the local market sells one. The credits are useful for stockpiling consumables, upgrading within their tier, or saving for when higher-tier access opens up.

### Selling and Resale

Items can be sold to merchants at **50% of their listed purchase price**. In remote settlements with limited demand, expect **25%**. Crafted items sell for 50% of their purchase price, not their crafting cost — crafters earn a profit, which is their value to the party. Unique, legendary, or faction-specific items may have no standard resale value and must be negotiated individually.

## Weapons

### Melee Weapons

**Tier 1 (Salvaged/Basic):**
- Makeshift Club: 1d6 MIG damage — **50 cr**
- Scrap Knife: 1d4 MIG damage, finesse, concealable — **75 cr**
- Rebar Spear: 1d8 MIG damage, reach — **100 cr**
- Pipe Wrench: 1d6 MIG damage, doubles as tool — **50 cr**
- Hatchet: 1d6 MIG damage, light — **60 cr**
- Reinforced Bat: 1d6 MIG damage, knockback — **40 cr**
- Brass Knuckles: 1d4 MIG damage, light, concealable — **30 cr**
- Chain Whip: 1d6 MIG damage, reach — **75 cr**
- Crowbar: 1d6 MIG damage — **40 cr**
- Staff: 1d6 MIG damage, versatile, reach — **25 cr**

**Tier 2 (Refined):**
- Machete: 1d8 MIG damage, versatile — **250 cr**
- Combat Knife: 1d6 MIG damage, finesse, +1 to attack — **300 cr**
- Shock Baton: 1d6 MIG + 1d4 electric damage — **400 cr**. On a **critical hit**, the target must make a **Fortitude save (DC 13)** or be **Dazed** until the end of their next turn. The Shock Baton is a crowd-control melee weapon — it doesn't compete with the Combat Knife on damage, it competes on control.
- Salvaged Sword: 1d10 MIG damage — **350 cr**
- Sledgehammer: 1d10 MIG damage, heavy, knockback — **200 cr**
- Stun Gun: 1d4 electric AGI damage, finesse, concealable — **250 cr**. **Non-lethal.** Damage from this weapon cannot reduce a creature below 1 HP — instead, a creature reduced to 1 HP or below by this weapon falls **unconscious** for 1 minute (stable, not dying). On any hit, the target must make a **Fortitude save (DC 12)** or be **Dazed** until the end of their next turn. The Stun Gun is the takedown weapon — used when you need a target alive.
- Bayonet: 1d6 MIG damage, attaches to rifle — **150 cr**
- Chainsaw: 2d6 MIG damage, heavy, unreliable — **350 cr**
- Electrified Net: 1d4 electric AGI damage, entangle — **300 cr**
- Cryo Baton: 1d6 cold damage, slow, light — **350 cr**. On hit, the target must make a **Fortitude save (DC 13)** or have their movement speed **halved** until the end of their next turn. This applies the Slow weapon property effect (speed halving only), not the full Slowed condition from [Conditions](conditions.md). The Light property makes it dual-wieldable — a character with a Cryo Baton in the off hand can slow targets while dealing primary damage with a main-hand weapon.
- Injector Knife: 1d4 piercing + payload, delivers payload, finesse, concealable, light — **350 cr**. A short blade with a hollow reservoir and spring-loaded injector. Load a consumable (stim, poison, chemical compound) before combat (or as 1 action during combat). On a successful hit, the consumable is delivered to the target. Beneficial consumables apply their effects; harmful consumables force the appropriate save. Can also be used on a willing or unconscious creature without an attack roll (1 action, melee range) for emergency stim delivery.

**Tier 3 (Military):**
- Vibro-Blade: 1d8 MIG + 1d6 energy damage, finesse, ignores 5 points of armor — **1,200 cr**
- Monofilament Whip: 1d10 AGI damage, reach, can disarm — **1,500 cr**
- Power Maul: 2d6 MIG damage, knockback 10 feet — **1,000 cr**
- Power Fist: 1d8+1d6 MIG damage, knockback — **1,400 cr**

**Tier 4 (Advanced Military):**
- Hardlight Blade: 2d6 energy damage, finesse, +1 to attack rolls — **3,500 cr**
- Thermal Lance: 1d12 MIG + 1d4 fire damage, reach — **3,000 cr**
- Powered Warhammer: 2d8 MIG damage, knockback, heavy — **4,000 cr**

**Tier 5-7 (Experimental):**
- Plasma Sword: 2d8 energy damage, cauterizes wounds — **10,000 cr**
- Nano-Edge Katana: 1d10 MIG + 2d6 damage, finesse, critical on 18-20 — **12,000 cr**
- Graviton Hammer: 3d6 MIG damage, area slam option — **15,000 cr**

### Ranged Weapons

**Tier 1 (Basic):**
- Pipe Pistol: 1d6 damage, range 30/60, unreliable — **75 cr**. **Improvised.** Can be crafted from scrap without a workshop (DC 10 Technology check, 1 hour, 15 credits in scrap parts). Accepts any pistol ammunition regardless of caliber — the crude chamber is forgiving. The Pipe Pistol is the emergency weapon you build when you have nothing else.
- Makeshift Bow: 1d6 damage, range 80/320, ammunition retrievable — **50 cr**
- Throwing Knives: 1d4 damage, range 20/60, light — **60 cr**
- Sling: 1d4 damage, range 60/120 — **10 cr**
- Crossbow: 1d8 damage, range 80/320, silent, 2-action reload — **100 cr**
- Weighted Net: 1d4 bludgeoning damage, range 15/30, entangle, light — **60 cr**. **Single-use.** On hit, the target must make a **Reflex save (DC 13)** or be **Restrained** until an action is spent to escape (Athletics DC 13 or Acrobatics DC 13). The net can be cut (DV 10, HP 5, slashing damage only). A creature can only be affected by one net at a time. The net is destroyed when thrown unless the GM rules it can be recovered intact after the encounter.

**Tier 2 (Refined):**
- 9mm Pistol: 1d8 damage, range 40/120, reliable — **300 cr**
- Hunting Rifle: 1d10 damage, range 100/400, 2-action reload — **400 cr**
- Shotgun: 2d6 damage, range 30/90, spread (advantage at close range) — **350 cr**
- Revolver: 1d10 damage, range 40/120, 6-shot cylinder — **350 cr**
- Sawed-Off Shotgun: 2d8 damage, range 15/30, spread, concealable — **300 cr**
- Submachine Gun: 1d8 damage, range 30/90, auto-fire, light — **450 cr**
- Dart Rifle: 1 piercing damage, range 60/120, silent, delivers payload — **350 cr**. The Dart Rifle is a pneumatic delivery weapon designed for stealth operations. It fires darts pre-loaded with injectable consumables (sedatives, poisons, chems). Does not reveal your position when fired from hiding (Silent property). A character proficient in the Dart Rifle can load and fire in the same turn (load as 1 action, fire as 1 action, or load during a previous turn for a 1-action fire). The Dart Rifle is not a damage weapon — it's a delivery system.

**Tier 3 (Military):**
- Assault Rifle: 1d10 damage, range 80/240, auto-fire option — **1,200 cr**
- Sniper Rifle: 2d8 damage, range 200/800, 2-action reload, +2 to aimed shots — **1,800 cr**
- Plasma Pistol: 2d6 energy damage, range 40/120, overheat mechanic — **1,500 cr**
- Laser Pistol: 1d8 energy damage, range 60/180, silent — **1,000 cr**
- Laser Rifle: 1d10 energy damage, range 120/480, silent — **1,400 cr**
- Flamethrower: 2d6 fire damage, range 15/30 cone, area — **1,800 cr**. **Overheat (Flamethrower):** After firing 3 times in one combat, the Flamethrower enters Overheat. While overheated, you can continue firing — attacks deal an additional **+1d6 fire damage**, but you take **1d4 fire damage** each time you fire (the weapon is burning your hands and forearms). Venting the Flamethrower (1 action) ends the Overheat state and resets the shot counter. The Flamethrower rewards pushing through the danger — the self-damage creates a risk-reward mechanic rather than a dead turn.
- Light Machine Gun: 1d10 damage, range 80/240, auto-fire, heavy, requires setup — **2,000 cr**
- Grenade Launcher: varies by grenade, range 60/120, 2-action reload — **1,000 cr**
- Grapple Launcher: 1d8 piercing damage, range 40/80, entangle, loading — **900 cr**. On hit, the target must make a **Reflex save (DC 15)** or be **Restrained** by the cable. The target cannot move more than 40 feet from the wielder while restrained. The wielder can use an action to **reel** the target 10 feet closer (opposed Athletics check). The target can break free with an Athletics DC 15 check (1 action) or by cutting the cable (DV 12, HP 10, slashing damage only). Reloading the cable requires 2 actions (Loading property).
- Chemical Sprayer: 1d6 acid + payload, 15-foot cone, delivers payload — **1,200 cr**. Load a consumable into the tank (1 action). When fired, delivers the payload in a 15-foot cone. All creatures in the cone make a **Reflex save (DC 14)**. On failure: full acid damage and payload effect. On success: half acid damage (round down), payload avoided. Beneficial payloads: you can exclude allies from the save. Each creature affected consumes 1 charge from the tank. Healing stims deliver half their normal healing when area-sprayed. Tank holds 3 charges; reloading requires 1 minute per charge (field) or 1 action per charge (workshop).

**Tier 4 (Advanced Military):**
- Heavy Assault Rifle: 2d8 damage, range 100/300, auto-fire, +1 to attack — **4,000 cr**
- Rail Pistol: 2d8 damage, range 60/180, penetrates cover — **3,500 cr**
- Marksman Carbine: 2d10 damage, range 150/600, 2-action reload, +2 to aimed shots — **5,000 cr**
- Rocket Launcher: 4d6 fire damage, range 100/300, 2-action reload, heavy, area — **5,000 cr**
- Cryo Rifle: 2d6 cold damage, range 60/180, slow — **4,000 cr**
- Sonic Disruptor: 2d8 sonic damage, range 40/120, penetrate — **4,500 cr**

**Tier 5-7 (Experimental):**
- Gauss Rifle: 3d8 damage, range 150/600, magnetic acceleration — **12,000 cr**
- Particle Beam: 2d10 energy damage, range 100/300, penetrates cover — **15,000 cr**
- Smart Gun: 2d8 damage, range 60/180, auto-targeting (+2 to hit) — **10,000 cr**

---

### Thrown Weapons & Bows

> *The Wasteland has plenty of guns. It doesn't always have plenty of ammunition. Bows, crossbows, and thrown weapons fill the gap — quiet, reliable, and cheap to maintain. A Compound Bow won't outshoot an Assault Rifle, but it won't announce your position to everything within a kilometer either.*

| Weapon | Type | Tier | Damage | Range | Properties | Cost |
|--------|------|------|--------|-------|------------|------|
| Balanced Throwing Axes | Martial, Thrown | T2 | 1d6+MIG | 20/40 ft | Light, Thrown, Silent | 15 cr |
| Weighted Javelin | Martial, Thrown | T2 | 1d8+MIG | 30/60 ft | Thrown, Piercing (1) | 20 cr |
| Razor Disc | Martial, Thrown | T3 | 1d8+AGI | 30/60 ft | Thrown, Finesse, Silent | 100 cr |
| Compound Bow | Martial, Ranged | T2 | 1d8+AGI | 80/240 ft | Finesse, Silent, Two-Handed | 50 cr |
| Repeating Crossbow | Martial, Ranged | T3 | 1d10+AGI | 60/120 ft | Finesse, Silent, Two-Handed, Magazine (5) | 150 cr |
| Composite War Bow | Martial, Ranged | T4 | 2d6+MIG | 100/200 ft | Silent, Two-Handed, Heavy, Requires MIG 14 | 300 cr |

**Balanced Throwing Axes** (Martial, Tier 2)
*Matched pairs of hand axes with weighted heads and leather wrist-straps. Wasteland raiders use them as openers before closing to melee — quiet, fast, and hard to dodge in close quarters.*

- **1d6+MIG damage** | Range 20/40 ft | Light, Thrown, Silent
- **Strap Recovery:** If a throwing axe attack **misses**, the axe can be retrieved via wrist-strap as a **free action at the end of your turn**. This free action is inherent to the weapon's wrist-strap mechanism and does not count against other free action limits. Axes that hit remain in or near the target and must be retrieved normally (1 action per axe, or 1 minute after combat to recover all).
- The Light property allows dual-wielding — a character can throw both in a single turn (normal Multiple Attack Penalty applies to the second throw (-3)).
- **Cost:** 15 cr per pair.

**Weighted Javelin** (Martial, Tier 2)
*A reinforced throwing spear with a tungsten-tipped head designed to punch through light armor. Pre-Fall military manuals describe javelins as "obsolete." Wasteland fighters who've put one through a raider's ballistic vest at thirty meters disagree.*

- **1d8+MIG damage** | Range 30/60 ft | Thrown, Piercing (1)
- **Piercing (1):** The javelin ignores **1 point of the target's damage reduction** (applied before damage is calculated). This represents the tungsten tip's ability to punch through armor plating. If the target has no explicit DR value, the Piercing property has no effect.
- Javelins are not strap-recoverable. After combat, spend 1 minute to recover javelins that missed (50% recovery, round down). Javelins that hit are usually bent or broken.
- **Cost:** 20 cr each (sold in bundles of 3 for 50 cr).

**Razor Disc** (Martial, Tier 3)
*A pre-Fall sporting implement repurposed for killing — a flat disc with a mono-molecular edge. Now every assassin with a taste for silence carries a few.*

- **1d8+AGI damage** | Range 30/60 ft | Thrown, Finesse, Silent
- Combined with Silent, the Finesse property makes the Razor Disc eligible for **Sneak Attack** when thrown from a hidden position.
- Razor Discs embedded in soft targets or soft ground can be recovered after combat (50% chance per disc, GM discretion). Discs that strike hard surfaces shatter and cannot be recovered.
- **Cost:** 100 cr each. Wasteland smiths can produce inferior copies at 60 cr (remove Silent property — the copies whistle in flight).

**Compound Bow** (Martial, Tier 2)
*A pulley-driven bow that stores more energy than a simple bow — easier to hold at full draw and more forgiving of imperfect form. A well-maintained compound bow is as reliable as any firearm and far quieter.*

- **1d8+AGI damage** | Range 80/240 ft | Finesse, Silent, Two-Handed
- No reload action required — nocking an arrow is part of the attack action.
- **Reusable Arrows:** After combat, spend 1 minute to recover **50% of arrows fired** (round down).
- **Cost:** 50 cr. Arrows cost 1 cr each (sold in quivers of 20 for 15 cr).

**Repeating Crossbow** (Martial, Tier 3)
*A pre-Fall mechanical crossbow with a top-mounted magazine that feeds bolts automatically. Now every settlement with a competent engineer produces a local variant.*

- **1d10+AGI damage** | Range 60/120 ft | Finesse, Silent, Two-Handed, Magazine (5)
- **Magazine (5):** Holds 5 bolts; each attack fires one bolt with no reload action required. When empty, reloading a full magazine takes **1 action**.
- **Cost:** 150 cr. Bolts cost 2 cr each (sold in magazines of 5 for 8 cr).

**Composite War Bow** (Martial, Tier 4)
*A massive recurve bow laminated from layered horn, sinew, and carbon composite. Those who can handle it gain a weapon that hits like a rifle at ranges a rifle would envy, without a sound or a muzzle flash. Kethara scouts and Iron Wolf hunters favor war bows for long-range ambush work.*

- **2d6+MIG damage** | Range 100/200 ft | Silent, Two-Handed, Heavy, Requires MIG 14
- **Requires MIG 14.** Checked when you attempt to fire, not when you carry the bow. Uses **MIG for attack and damage rolls** — power comes from physical strength, not finesse.
- Heavy property: cannot be used by Small creatures; disadvantage on attacks when mounted on a moving vehicle.
- Note: The Compound Bow (T2, 80/240 ft) has longer absolute range than the War Bow (T4, 100/200 ft). The War Bow trades range for raw stopping power (2d6+MIG vs 1d8+AGI) — a deliberate tradeoff.
- **Cost:** 300 cr. War arrows cost 3 cr each (sold in quivers of 10 for 25 cr).

> **Recovering Ammunition**
>
> After combat, a character can spend **1 minute** to search the area and recover spent arrows and bolts.
>
> - **Recovery Rate:** 50% of arrows/bolts fired (round down).
> - **Missed Shots:** More likely to be intact and recoverable.
> - **Hits:** Arrows and bolts that hit a target are usually destroyed (splintered shafts, bent tips, embedded in bodies). Assume hits are not recoverable unless the GM rules otherwise.
> - **Special Ammunition:** Specialty bolts or arrows (incendiary, explosive, poison-coated) are **never recoverable**.
> - **Time Pressure:** If the party cannot spend 1 minute searching, no ammunition is recovered.

> **Why Use a Bow When Guns Exist?**
>
> Bows and crossbows are intentionally weaker than same-tier firearms in raw damage output. Their advantages are situational but significant:
>
> | Advantage | Bow/Crossbow | Firearm |
> |-----------|-------------|---------|
> | **Noise** | Silent (no position reveal) | Audible (alerts enemies within 100+ ft) |
> | **Ammo Economy** | 50% arrow recovery after combat | Bullets are expended permanently |
> | **Ammo Cost** | 1–3 cr per arrow/bolt | 5–20 cr per bullet/cell |
> | **Ammo Availability** | Craftable from raw materials (Survival DC 12) | Requires manufactured components |
> | **Sneak Attack** | Silent weapons enable **Sneak Attack** from stealth | Firing a gun breaks stealth |
> | **Damage** | Lower per-hit damage | Higher per-hit damage |
> | **Rate of Fire** | No auto-fire option | Auto-fire available (T3+) |
> | **Range** | Moderate (80–200 ft normal) | Superior (100–800 ft normal) |
>
> In short: guns win fights. Bows win ambushes. In the Wasteland, knowing which you need is the difference between survival and a loud death.

---

### Weapon Properties

- **Light:** Ideal for two-weapon fighting. When wielded in the off-hand, Light weapons suffer **no attack penalty**. Non-Light weapons take a **-2 penalty** to off-hand attack rolls. Off-hand attacks don't add your attribute modifier to damage regardless of weapon type (unless you have the Two-Weapon Fighting ability).
- **Heavy:** Requires 2 hands to wield. Creatures with MIG below 13 have -2 to attack rolls with this weapon.
- **Reach:** You can attack targets up to 10 feet away instead of the normal 5 feet. You can also make opportunity attacks when creatures move out of 10-foot range.
- **Finesse:** You can use either MIG or AGI for attack and damage rolls with this weapon.
- **Versatile:** Can be used one-handed (listed damage) or two-handed (+2 damage).
- **Concealable:** Can be hidden on your person. Requires a Perception check (DC 15) to detect during a search.
- **Loading:** This weapon must be reloaded after firing. Reload costs 1 action unless otherwise specified. Weapons marked "Loading (2)" require 2 actions to reload.
- **Spread:** At ranges up to half the weapon's normal range, you have advantage on the attack roll. Beyond normal range (in the long range bracket), you have disadvantage.
- **Auto-fire:** As 2 actions, spray a 10-foot cube within normal range. Each creature in the area makes a Reflex save (DC = 8 + your proficiency + AGI modifier). On a failure, a creature takes the weapon's damage. On a success, it takes half. Expends 10 rounds of ammunition (a full rifle magazine or half an SMG magazine).
- **Overheat:** After firing this weapon 3 times in a single combat, it overheats. While overheated, it cannot fire. It cools down after 1 round of not firing, or you can spend 1 action to vent it.
- **Penetrate:** Attacks with this weapon ignore partial cover and heavy cover bonuses to DV. Against targets behind total cover (such as a thin wall), the attack can still be made at disadvantage.
- **Knockback:** On a hit, the target must make a Fortitude save (DC = 8 + your proficiency + MIG modifier) or be pushed 10 feet directly away from you.
- **Unreliable:** On a natural 1, this weapon jams. Clearing a jam requires 1 action and a Technology check (DC 10). On a failed check, the weapon is broken and requires repair.
- **Unstable:** Risk of malfunction. On a critical failure, roll 1d6: 1-2 weapon jams, 3-4 weapon deals 1d6 damage to you, 5-6 weapon breaks.
- **Silent:** Does not alert nearby creatures. Ideal for stealth operations.
- **Entangle:** Target must make a Reflex save (DC 13) or be restrained until they spend an action to break free.
- **Area:** Affects all creatures in a 10-foot radius (Reflex save DC = 8 + proficiency + relevant modifier for half).
- **Slow:** On hit, target's speed is halved until end of their next turn. This is the Slow weapon property effect only — it does **not** apply the full **Slowed** condition from [Conditions](conditions.md) (which also includes disadvantage on AGI saves and loss of reactions). The Slow weapon property is a lighter, shorter-duration effect.
- **Delivers payload:** This weapon delivers one dose of any injectable consumable (chem, poison, sedative, or similar substance) on a hit. The target is affected by the payload immediately — no additional saving throw beyond the payload's own save, if any. Loading a dart with a payload requires **1 action**. If the attack misses, the dart (and payload) is lost. An unloaded dart deals only the weapon's base damage (typically 1 piercing). See the Chems & Drugs table for available payloads.
- **Requires setup:** Must spend 1 action to deploy bipod/tripod before firing. Cannot move and fire in the same turn.
- **Improvised:** This weapon can be crafted from scrap materials without a workshop. The crafting DC, time, and cost are listed in the weapon's description.
- **Non-lethal:** Damage from this weapon cannot reduce a creature below 1 HP. A creature reduced to 1 HP or below by non-lethal damage falls **unconscious** (stable, not dying) for 1 minute.
- **Piercing (X):** Attacks with this weapon ignore X points of the target's damage reduction (DR), applied before damage is calculated. This represents the weapon's ability to punch through armor plating. If the target has no explicit DR value, the Piercing property has no effect. *Distinct from the Penetrate property, which bypasses cover bonuses to DV.*
- **Thrown:** This weapon can be thrown as a ranged attack using the listed range. Thrown weapons use MIG for attack and damage rolls unless they also have the Finesse or Silent property specifying otherwise.
- **Magazine (X):** The weapon holds X rounds in a detachable or integrated magazine. Each attack expends one round with no reload action required. When the magazine is empty, reloading costs **1 action** (a full magazine, not individual rounds). Partially topping off is not possible — empty the magazine first. Follows the same ammunition tracking convention as existing firearms.

---

## Weapon Modifications

> *A rifle is a tool. A rifle you've spent three months rebuilding from salvage, with a compensator you machined from pipe and a scope you stripped from a dead nomad's patrol kit — that's a signature. The Wasteland differentiates its survivors by how they maintain what keeps them alive.*

Weapons can be improved and customized through **modifications** — physical components installed into designated attachment points. Two characters carrying the same rifle play differently once one has spent resources on precision optics and the other has gone wide with a suppressor and high-capacity magazine.

Modifications are a **gear investment track** separate from CP skill spending. A well-modified weapon and a high-tier augmentation compete for the same limited budget at early levels. Choose what fits your build.

### Modification Slots

Every weapon has a number of **modification slots** based on its tier:

| Weapon Quality | Mod Slots | Examples |
|----------------|-----------|---------|
| **Improvised / Scavenged** | 0 | Pipe Pistol, Makeshift Bow, Sling |
| **Tier 1** | 1 | Crossbow, Sling (manufactured), basic firearms |
| **Tier 2 (Standard)** | 2 | 9mm Pistol, Hunting Rifle, Shotgun, standard melee |
| **Tier 3 (Military)** | 3 | Assault Rifle, Sniper Rifle, Plasma Pistol |
| **Tier 4+** | 4+ | High-tier weapons, faction-grade gear |

Each modification occupies one slot. You cannot exceed a weapon's slot limit. Removing a modification takes 10 minutes and does not damage the base weapon; the removed mod can be reinstalled in another weapon. See **Crafting** for installation time, cost, and difficulty checks.

Modifications that grant attack roll bonuses are **Equipment bonuses**. Multiple Equipment bonuses do not stack — you use the highest. See **Crafting — Bonus Stacking** for the complete rule.

### Slot Types

Not all weapons accept all modifications. Each modification requires a specific **slot type**, and a weapon must have that attachment point to accept it:

| Slot Type | Description | Weapons |
|-----------|-------------|---------|
| **Barrel** | Muzzle attachments, compensators, extended barrels | Ranged firearms only |
| **Optics** | Scopes, sights, thermal systems | Ranged weapons only |
| **Underbarrel** | Foregrips, blade attachments, launchers | Most ranged weapons; some melee |
| **Stock** | Butt stocks, stabilizers, folding frames | Long arms (rifles, shotguns) |
| **Internal** | Trigger mechanisms, ammunition feeds | Ranged weapons only |
| **External** | Grips, wraps, holster mounts, frame modifications | All weapons |

A weapon can accept at most one modification per slot type (e.g., a rifle cannot have two different optics or two barrel mods — but it can have one optic, one barrel mod, and one stock mod for a total of 3 modifications).

---

### Tier 1 Modifications — Common

> *Scavengeable from military surplus, industrial salvage, or a competent workshop. A wasteland trader will know what these are. A well-stocked market will have most of them.*

**Suppressor** *(Barrel — Ranged Firearms Only)*
Eliminates muzzle flash and reduces the weapon's sound signature to a sharp crack audible only within 30 feet. Stealth checks made after firing a suppressed weapon have **advantage**. Enemies attempting to locate you by sound after a suppressed shot must succeed on a **Perception check (DC 14)** to pinpoint your position.
*Trade-off:* Effective range reduced by **5 feet** (normal and long range both). Suppressed weapons deal −1 damage on every hit (the gas venting reduces muzzle velocity).

**Extended Magazine** *(Internal — Ranged Weapons Only)*
Increases the weapon's ammunition capacity by **+25%** (round down, minimum +1). When you reload this weapon with at least half capacity remaining, the reload costs a **free action** once per combat encounter — you're topping off, not running dry.
*Trade-off:* The larger magazine adds mass. If you reload from empty, it takes **1 additional action** (2 actions total for weapons that normally reload in 1).

**Foregrip** *(Underbarrel — Ranged Weapons Only)*
A stabilizing grip that removes the **disadvantage** normally imposed on attack rolls when firing while moving (if any feature or condition imposes such a penalty). Steady platform, faster target acquisition.
*Trade-off:* The grip adds length. Attacks against targets within **5 feet** have disadvantage — you can't pivot the barrel fast enough for close-quarters.

**Iron Sights Upgrade** *(Optics — Ranged Weapons Only)*
Precision-machined fiber-optic sights replace the standard bead. **+1 to attack rolls** at 30–60 feet (Equipment bonus — does not stack with other Equipment bonuses). Fast to acquire, reliable in dust and fog that fouls magnified scopes.
*Trade-off:* No benefit beyond 60 feet. Does not stack with other optics — installing a scope over upgraded iron sights makes this mod inert (though it can be recovered intact).

**Weapon Wrap** *(External — All Weapons)*
Tactical webbing and heat-resistant fabric that breaks up the weapon's silhouette and reduces surface reflection. The weapon counts as **one size smaller** for concealment purposes — a wrapped rifle can be concealed where an unwrapped one could not.
*Trade-off:* The wrap dampens grip feedback. **−1 damage** on all attacks with this weapon (reduced tactile response translates to slightly worse shot placement).

**Integrated Bayonet** *(Underbarrel — Ranged Weapons Only)*
A bayonet or spike mounted below the barrel. The weapon can make **1d6 piercing melee attacks** (5-foot range). Uses AGI for attack rolls. Does not benefit from ranged proficiency bonuses or from features that specifically reference ranged attacks (**Lethal Precision**, Sneak Attack with ranged weapons, etc.) — it functions as a melee weapon.
*Trade-off:* Occupies the underbarrel slot, preventing use of a Foregrip.

---

### Tier 2 Modifications — Uncommon

> *Salvaged from military caches, purchased from specialist vendors, or traded from other professionals. Characters who've survived long enough start to look like they know what they're doing.*

**Tactical Scope** *(Optics — Ranged Weapons Only)*
Magnified optic with adjustable zoom. **+2 to attack rolls** at 60+ feet (Equipment bonus — does not stack with other Equipment bonuses). The scope's eye relief and magnification are unsuited to close work — attacks within 15 feet have **disadvantage** when scoped.
You can toggle scope mode as a **bonus action** (or as part of your movement): scoped mode applies the +2/disadvantage split above; unscoped mode applies no bonus and no penalty. Darkvision does not function through the scope unless the scope itself has low-light capability.
*Trade-off:* Requires a bonus action investment to toggle. In ambush situations, you're choosing your range bracket before the fight starts.

**Recoil Compensator** *(Barrel — Ranged Firearms Only)*
Internal mass and port design reduces felt recoil. When you make multiple attack rolls in a single turn with this weapon (Extra Attack or similar), the **second attack roll has no disadvantage from recoil** (relevant for heavy firearms that impose a recoil penalty on follow-up shots). Works with burst fire and auto-fire options.
*Trade-off:* The added weight of compensating ports reduces muzzle velocity. −5 feet to the weapon's normal range.

**Precision Trigger** *(Internal — Ranged Weapons Only)*
A match-grade trigger with adjustable reset and a redundant safety interlock. If this weapon has the **Misfire** property, reduce the misfire range by 1 (a weapon that misfires on a 1–2 now misfires only on a 1). If this weapon has no Misfire property, attack rolls that result in a **natural 2** do not cause a weapon jam or fumble effect from any feature or GM rulings about weapon reliability.
*Trade-off:* The trigger is delicate. Taking the Disarm action against this weapon has **advantage** (the precision components are easier to foul). In extreme weather (sandstorm, heavy rain), GMs may impose a Technology DC 12 check to avoid triggering the safety interlock at an inopportune moment.

**Stabilizer Stock** *(Stock — Long Arms Only)*
A precision-machined stock with recoil-absorbing padding and adjustable length of pull. **+1 to all attack rolls** with this weapon (Equipment bonus — does not stack with other Equipment attack bonuses). The setup time required for proper sight alignment means you sacrifice some mobility while firing.
*Trade-off:* On any turn where you fire this weapon, your **movement speed is reduced by 5 feet**. You're planting for a better shot.

**Weighted Grip** *(External — Melee Weapons Only)*
Additional mass distributed toward the weapon's striking surface changes the momentum profile. **+1 damage** on all hits. When you miss an attack with this weapon, the weapon's momentum can be redirected — your **next attack this turn gains +1 to the attack roll** (the carry-through forces the weapon forward).
*Trade-off:* The added weight makes the weapon slow to recover. You lose the **Finesse** property while this mod is installed (if the weapon had it) — the weight distribution no longer supports AGI-based attacks.

---

### Tier 3 Modifications — Rare

> *Found in faction armories, fabricated by specialist engineers, or purchased at enormous cost. Characters who carry these modifications have either earned them or stolen them.*

**Devastator Barrel** *(Barrel — Ranged Weapons Only)*
A ported and fluted heavy barrel with optimized chamber geometry. Steps the weapon's **damage die up one step** (d6 → d8, d8 → d10, d10 → d12, 2d6 → 2d8). The increased chamber pressure requires more propellant per shot.
*Trade-off:* Each attack **consumes 2 rounds of ammunition** instead of 1. You must have at least 2 rounds remaining to fire. At the end of a combat, reload costs are calculated normally but your effective ammo spent per shot doubles — a 30-round magazine fires 15 times with this mod installed.

**Neural Interface Stock** *(Stock — Ranged Weapons Only)*
A feedback-integrated stock that routes weapon telemetry directly to a neural interface. When active, the weapon uses your **INT modifier instead of AGI** for attack rolls (applied when INT is higher — the system calculates the better option and locks it in). The precision of computation-assisted targeting outperforms hand-eye coordination at this level.
*Prerequisite:* Requires a **Neural augmentation** (any tier).
*Trade-off:* Cannot be used simultaneously with the **Smart-Link Interface** augmentation mod (see Crafting — Equipment Modifications) — both route through the weapon's processing bus and conflict. Additionally, the stock's feedback loop makes it harder to suppress your targeting response — opponents with Electronic Warfare capability (Hacking, some EMP effects) can impose disadvantage on your attack rolls by targeting the interface rather than you directly.

**Thermal Sight** *(Optics — All Weapons)*
An integrated heat-sensor display that renders targets as heat signatures. The thermal sight **sees through smoke, fog, dust, and visual obscurement** — attacks against targets in Lightly Obscured or Heavily Obscured conditions (from smoke, darkness, or environmental effects) do not impose disadvantage on your attack rolls. Enemies using stealth or concealment in thermally-distinct terrain (heat vents, cold environments, reflective surfaces) may impose disadvantage at GM discretion.
*Prerequisite:* Requires a **power cell** (lasts 8 hours per charge; a standard power cell counts). The sight is inert without power.
*Trade-off:* The thermal display washes out some visual detail. Perception checks to identify targets (distinguishing ally from enemy, reading insignia, etc.) have disadvantage while the sight is active. You're seeing heat, not faces.

**Resonance Chamber** *(Internal — Melee Weapons Only)*
A crystalline matrix embedded in the weapon's core that stores and releases magical energy. **1/Short Rest, as a free action:** your next melee attack deals **bonus damage equal to your level** of a chosen energy type (fire, lightning, or cryo). The choice is made when you activate the chamber, and persists until the next attack resolves.
*Prerequisite:* Requires an **arcane capacitor** (see Crafting — Arcane Capacitors).
*Trade-off:* The capacitor must be recharged during a short rest. If the weapon takes significant damage (0 HP from an attack specifically targeting your gear), the capacitor vents its charge as a **5-foot burst** of the last-used energy type (1d6 damage to all adjacent creatures including you, Reflex DC 14 for half).

---

### Gunsmith Synergy

Characters with the **Ranged Combat tree (Tier 2+)** have a professional relationship with weapon modification:

- **Faster installation:** Install or remove modifications in **half the normal time** (see Crafting for baseline times).
- **Instant identification:** When a Gunsmith examines a found modification, they identify all its properties with a free **Perception check** (no DC — it's automatic, not a die roll). Other characters must make a Technology check or take time to study the component.
- **Field fabrication of Tier 1 mods:** Given **1 hour** and basic tools (no workshop required), a Gunsmith can craft any **Tier 1 modification** from scrap materials worth at least 15 credits. The quality is equivalent to a purchased component.

> *Gunsmith characters should describe their weapons. A Gunsmith's rifle after three months of active use should look like it was made specifically for them — not a stock item from a crate.*

---

### Visual Identity

Modifications change what the weapon looks like. A rifle with a Tactical Scope, Suppressor, and Stabilizer Stock is immediately distinguishable from a base rifle. GMs should prompt players to describe their modified weapons — especially in social encounters (a heavily modified assault rifle reads very differently than a bare one in a merchant's stall) and in search/investigation scenes (spotting a suppressor on a weapon in a crowd is meaningful information).

Players should name and describe their modified weapons if the modifications have been in place for more than a session. Your gear is your signature.

---

### Modification Quick Reference

| Mod | Tier | Slot | Weapon Type | Benefit | Trade-off |
|-----|------|------|-------------|---------|-----------|
| Suppressor | 1 | Barrel | Ranged firearm | Stealth advantage after firing | −5 ft range, −1 damage |
| Extended Magazine | 1 | Internal | Ranged | +25% capacity; free-action reload from half | Reload from empty costs +1 action |
| Foregrip | 1 | Underbarrel | Ranged | Remove move-fire disadvantage | Disadvantage within 5 ft |
| Iron Sights Upgrade | 1 | Optics | Ranged | +1 attack at 30–60 ft (Equipment) | No effect beyond 60 ft; inert under other optics |
| Weapon Wrap | 1 | External | All | Concealment (counts one size smaller) | −1 damage |
| Integrated Bayonet | 1 | Underbarrel | Ranged | 1d6 melee attacks | Blocks Foregrip slot |
| Tactical Scope | 2 | Optics | Ranged | +2 attack at 60+ ft (Equipment) | Disadvantage within 15 ft; bonus action to toggle |
| Recoil Compensator | 2 | Barrel | Ranged firearm | 2nd attack no recoil disadvantage | −5 ft range |
| Precision Trigger | 2 | Internal | Ranged | Misfire −1; no jam on natural 2 | Easy to disarm; weather-sensitive |
| Stabilizer Stock | 2 | Stock | Long arms | +1 to all attacks (Equipment) | −5 ft movement on firing turns |
| Weighted Grip | 2 | External | Melee | +1 damage; miss → next attack +1 | Loses Finesse property |
| Devastator Barrel | 3 | Barrel | Ranged | +1 damage die step | 2x ammo per shot |
| Neural Interface Stock | 3 | Stock | Ranged | Use INT instead of AGI for attacks (if higher) | Requires Neural aug; conflicts with Smart-Link Interface |
| Thermal Sight | 3 | Optics | All | No disadvantage in visual obscurement | Requires power cell; −Perception detail |
| Resonance Chamber | 3 | Internal | Melee | 1/SR: +level bonus energy damage | Requires arcane capacitor; vents on weapon destruction |

*Equipment bonuses to attack rolls (marked "Equipment" in the table above) do not stack — use the highest. See Crafting — Bonus Stacking.*

---

## Armor

### Armor Category Penalties

Heavier armor trades mobility and finesse for protection. These penalties apply to **all** armor in the category, in addition to any item-specific penalties listed in the table.

| Category | Speed Penalty | Skill Penalty | Other |
|----------|--------------|---------------|-------|
| **Light** | None | None | — |
| **Medium** | -5 ft speed | Disadvantage on Acrobatics, Stealth, and Sleight of Hand | — |
| **Heavy** | -10 ft speed | Disadvantage on Acrobatics, Stealth, and Sleight of Hand | Requires MIG 15 |

**Speed Penalty** reduces your base movement speed (typically 30 ft → 25 ft for medium, 20 ft for heavy). This stacks with item-specific speed penalties where noted.

**Skill Penalty** applies disadvantage to all AGI-based skill checks: Acrobatics, Stealth, and Sleight of Hand. Individual armor pieces may override this (e.g., Dampened Composite grants advantage on Stealth in specific environments, which cancels the category disadvantage for those checks).

> **Design Note:** These penalties represent the bulk, noise, and restricted range of motion inherent to heavier armor. A character in heavy plate can still attempt to sneak — they just do it badly. This is the price of walking around in a tank.

---

### Light Armor (Max AGI bonus: +5)

| Tier | Armor | DV Bonus | Special | Cost |
|------|-------|----------|---------|------|
| 1 | Leather Scraps | +1 DV | — | 75 cr |
| 2 | Reinforced Leather | +2 DV | — | 250 cr |
| 2 | **Fire-Lined Jacket** | +1 DV | Resist fire 5, adv. vs. Burning | 300 cr |
| 3 | Ballistic Vest | +3 DV | Resist piercing 5 | 1,000 cr |
| 3 | **Hazmat Bodysuit** | +2 DV | Immune to environmental Poisoned; radiation -1 step; 4-hr sealed air | 1,200 cr |
| 4 | Nano-weave Suit | +4 DV | Resist energy 5 | 3,500 cr |
| 5 | **Adaptive Nanoweave** | +5 DV | Resistance to one damage type (chosen each short rest) | 10,000 cr |

**Fire-Lined Jacket** (Tier 2 Light Armor)

*Salvaged leather jacket with a lining of treated fireite --- a post-Fall ceramic textile that doesn't burn. Slightly less protective than reinforced leather, but you can walk through a burning corridor without flinching.*

- **DV Bonus:** +1
- **Max AGI Bonus:** +5
- **Special:** Resistance to fire damage (reduce fire damage by 5). Advantage on saves against the Burning condition.
- **Cost:** 300 cr
- **Tradeoff vs. Reinforced Leather (T2):** -1 DV, but fire resistance 5. Choose the Jacket for environments with fire hazards, incendiary traps, or Elementalist enemies. Choose Reinforced Leather for general protection.

**Hazmat Bodysuit** (Tier 3 Light Armor)

*A pre-Fall chemical response suit retrofitted for field use. The seals mostly hold. The filters mostly work. It won't stop a bullet, but it'll stop the air from killing you first.*

- **DV Bonus:** +2
- **Max AGI Bonus:** +5
- **Special:** Immune to the **Poisoned** condition from environmental sources (toxic atmosphere, contaminated water, chemical spills --- not creature-inflicted poisons or envenomation). Radiation intensity reduced by 1 step while worn (Moderate becomes Mild, Mild becomes negligible). 4-hour air supply (sealed environment).
- **Cost:** 1,200 cr
- **Tradeoff vs. Ballistic Vest (T3):** -1 DV, loses piercing resistance 5, but gains environmental immunity. Choose the Bodysuit for ruin delves, radiation zones, and toxic environments. Choose the Ballistic Vest for combat-focused scenarios.

**Adaptive Nanoweave** (Tier 5 Light Armor)

*Pre-Fall military prototype. The fibers restructure in response to damage --- harden against kinetic impact, dissipate thermal energy, ground electrical charge. It can only adapt to one threat at a time, but it adapts fast.*

- **DV Bonus:** +5
- **Max AGI Bonus:** +5
- **Special:** Resistance to one damage type of your choice (fire, cold, electric, acid, piercing, bludgeoning, or slashing). You choose the damage type during each short rest. The choice persists until changed.
- **Cost:** 10,000 cr

---

### Medium Armor (Max AGI bonus: +3, -5 ft speed, disadv. AGI skills)

| Tier | Armor | DV Bonus | Special | Cost |
|------|-------|----------|---------|------|
| 1 | Scrap Plating | +3 DV | — | 100 cr |
| 2 | Kevlar Armor | +4 DV | — | 400 cr |
| 2 | **Dampened Composite** | +3 DV | Adv. Stealth (urban/indoor) overrides category disadv. | 450 cr |
| 3 | Combat Armor | +5 DV | Built-in comms | 1,500 cr |
| 3 | **Chemist's Plating** | +4 DV | Resist fire 5, resist acid 5, adv. vs. Burning | 1,800 cr |
| 4 | Reactive Armor | +6 DV | Deflect projectiles on hit 16+ | 5,000 cr |
| 5 | **Integrated Tactical Suit** | +7 DV | Sealed environment (8-hr air), built-in comms + scanner | 15,000 cr |

**Dampened Composite** (Tier 2 Medium Armor)

*Repurposed corporate security contractor gear --- noise-absorbing polymer layers sandwiched between rigid plates. Doesn't protect like full kevlar, but you can move through a building without announcing yourself.*

- **DV Bonus:** +3
- **Max AGI Bonus:** +3
- **Special:** Advantage on Stealth checks in urban/indoor environments (this overrides the medium armor category disadvantage for those specific checks, resulting in a straight roll). Sound dampening reduces movement noise to a whisper. *(-5 ft speed from medium armor category still applies.)*
- **Cost:** 450 cr
- **Tradeoff vs. Kevlar Armor (T2):** -1 DV, but stealth advantage indoors. Choose Dampened Composite for infiltration and scouting. Choose Kevlar for straight-up fights.

**Chemist's Plating** (Tier 3 Medium Armor)

*Industrial safety gear from a pre-Fall chemical processing plant, modified with ballistic inserts. The exterior coating resists both thermal and chemical attack --- the inside is lined with a layer of neutralizing compound that's still good after half a century in a sealed locker.*

- **DV Bonus:** +4
- **Max AGI Bonus:** +3
- **Special:** Resistance to fire damage (reduce by 5) and resistance to acid damage (reduce by 5). Advantage on saves against the Burning condition.
- **Cost:** 1,800 cr
- **Tradeoff vs. Combat Armor (T3):** -1 DV, loses built-in comms, but gains dual elemental resistance. Choose Chemist's Plating for elemental-heavy encounters and ruin delves. Choose Combat Armor for team coordination and general combat.

**Integrated Tactical Suit** (Tier 5 Medium Armor)

*Pre-Fall special forces infiltration/assault gear. Sealed against environmental hazards, wired with tactical systems, and tough enough to take fire from small arms. The best medium armor ever manufactured --- and nobody's manufacturing it anymore.*

- **DV Bonus:** +7
- **Max AGI Bonus:** +3
- **Special:** Sealed environment (8-hour air supply, immune to environmental Poisoned, radiation intensity reduced by 1 step). Built-in comms (encrypted, 5-mile range). Built-in biometric scanner (passive Perception +2 for detecting living creatures within 30 ft).
- **Cost:** 15,000 cr

---

### Heavy Armor (Max AGI bonus: +1, MIG 15 required, -10 ft speed, disadv. AGI skills)

| Tier | Armor | DV Bonus | Special | Cost |
|------|-------|----------|---------|------|
| 1 | Welded Scrap Suit | +5 DV | — | 150 cr |
| 2 | Riot Armor | +7 DV | — | 500 cr |
| 2 | **Containment Rig** | +6 DV | Sealed (4-hr air), radiation -1 step | 650 cr |
| 3 | Power Armor Frame | +8 DV | +2 MIG, requires power cell | 2,000 cr |
| 3 | **Blast Plating** | +7 DV | DR 3 vs. explosive/AoE, +2 MIG | 2,500 cr |
| 4 | Military Exoskeleton | +10 DV | +4 MIG, integrated weapons | 7,500 cr |
| 5 | **Siege Exoskeleton** | +11 DV | +4 MIG, weapon mount, additional -5 ft speed, double carry, half cover for allies | 25,000 cr |

**Containment Rig** (Tier 2 Heavy Armor)

*A nuclear plant containment suit retrofitted with salvaged armor plating. The original suit was designed to keep radiation in. You're wearing it to keep radiation out. Close enough.*

- **DV Bonus:** +6
- **Max AGI Bonus:** +1
- **MIG Requirement:** 15
- **Special:** Sealed environment (4-hour air supply, Rebreather equivalent --- immune to toxic atmosphere and Suffocating from gas). Radiation intensity reduced by 1 step while worn. *(Speed and skill penalties from heavy armor category apply.)*
- **Cost:** 650 cr
- **Tradeoff vs. Riot Armor (T2):** -1 DV, gains sealed environment and radiation protection. Choose the Containment Rig for ruin delves and irradiated zones. Choose Riot Armor for surface combat.

**Blast Plating** (Tier 3 Heavy Armor)

*Bomb disposal gear from a pre-Fall military base. Designed to absorb shrapnel and concussive force. Heavier and slower than standard power armor, but when a grenade goes off at your feet, you're the last one standing.*

- **DV Bonus:** +7
- **Max AGI Bonus:** +1
- **MIG Requirement:** 15
- **Special:** **Damage Reduction 3** against explosive and area-of-effect damage (grenades, mines, trap detonations, AoE spells --- reduce damage by 3 after saves). +2 MIG. Does not require a power cell. *(Speed and skill penalties from heavy armor category apply.)*
- **Cost:** 2,500 cr
- **Tradeoff vs. Power Armor Frame (T3):** -1 DV, worse speed penalty, but DR 3 vs. explosives and no power cell dependency. Choose Blast Plating for demolition-heavy environments and trap-heavy ruins. Choose Power Armor for general-purpose heavy combat.

**Siege Exoskeleton** (Tier 5 Heavy Armor)

*Pre-Fall military heavy assault platform. A walking fortress. The wearer counts as Large for carrying capacity and cover --- allies can shelter behind you. An integrated weapon mount allows firing a mounted weapon as a bonus action. The downside: doors are a problem.*

- **DV Bonus:** +11
- **Max AGI Bonus:** +1
- **MIG Requirement:** 15 (effective MIG 19 while worn)
- **Special:** +4 MIG. Integrated weapon mount (one weapon up to Heavy size can be mounted; fire as a 1 action (bonus), does not require a free hand). Additional -5 ft speed beyond heavy armor category penalty (total -15 ft). The exoskeleton's bulk grants **double base carrying capacity** and provides **half cover (+2 DV)** to allies standing directly behind you. Cannot fit through standard doorways (5 ft wide) without removing the suit (1 minute to don/doff). Requires power cell (8-hour charge). *(AGI skill penalties from heavy armor category apply.)*
- **Cost:** 25,000 cr

---

### Shields

| Tier | Shield | DV Bonus | Special | Cost |
|------|--------|----------|---------|------|
| 1 | Scrap Shield | +1 DV | Reaction: +2 DV vs. one attack | 50 cr |
| 2 | Combat Shield | +2 DV | Reaction: block one projectile | 250 cr |
| 3 | Hardened Shield | +3 DV | Reaction: reduce incoming damage by 3 | 1,000 cr |
| 4 | Energy Barrier | +3 DV | Regenerating shield points | 4,000 cr |
| 5 | **Phase Barrier** | +4 DV | Reaction: negate one attack 1/SR; allies behind gain half cover | 12,000 cr |

**Hardened Shield (Rebalanced)** (Tier 3 Shield)

*Pre-Fall ballistic shield made of layered composite. Still the standard against which all other shields are measured.*

- **DV Bonus:** +3 *(was +2 --- increased to properly scale above T2 Combat Shield)*
- **Reaction:** Reduce incoming damage from one attack by **3** *(was 2)*
- **Cost:** 1,000 cr (unchanged)

**Phase Barrier** (Tier 5 Shield)

*Pre-Fall energy technology. A compact field generator mounted on a forearm bracer that projects a translucent energy shield. Once per engagement, the barrier can phase-shift to completely negate a single incoming attack --- the projectile or blade passes through a momentary gap in local spacetime. Between uses, it functions as a conventional energy shield.*

- **DV Bonus:** +4
- **Reaction --- Phase Shift (1/Short Rest):** Negate one attack that hits you. The attack deals no damage and no effects apply. Declare after the GM announces a hit but before damage is rolled.
- **Passive --- Cover Projection:** Allies standing directly behind you (adjacent, in the opposite direction from the attacker) benefit from **half cover** (+2 DV) against ranged attacks that pass through your space.
- **Cost:** 12,000 cr
- **Requires:** Power cell (24-hour charge --- the shield is efficient)

### Specialty Armor

Specialized protective gear designed for specific tactical roles and environments.

| Tier | Armor | DV Bonus | Special | Cost |
|------|-------|----------|---------|------|
| 2 | Ghillie Suit | +1 DV | Advantage on Stealth in wilderness | 200 cr |
| 2 | Ablative Plating | +0 DV | Absorbs first 10 damage then destroyed | 150 cr |
| 3 | Stealth Suit | +2 DV | Advantage on Stealth, sound dampening | 2,000 cr |
| 4 | Powered Scout Armor | +6 DV | +10 ft speed, no stealth penalty | 6,000 cr |

### Armor Accessories

These items modify or supplement existing armor, adding utility without replacing your primary protection.

| Tier | Accessory | Special | Cost |
|------|-----------|---------|------|
| 2 | Tactical Helmet | +1 DV vs critical hits, built-in light | 150 cr |
| 2 | Thermal Lining | Resist cold, advantage on cold exposure saves | 100 cr |
| 2 | Armor Plating Insert | +1 DV to existing armor | 200 cr |
| 2 | Rebreather | 30 minutes underwater or toxic atmosphere | 100 cr |
| 3 | Sealed Helmet | 1 hour air supply, toxic atmosphere protection | 400 cr |
| 3 | Auto-Injector Mount | Auto-use stim when HP drops below 25% | 500 cr |
| 3 | Mag-Boots | Magnetic grip, zero-G movement, climbing on metal | 350 cr |

### Clothing & Wearables

Clothing and wearable items are not armor and do not provide DV bonuses, but they offer minor situational benefits. These do not stack with armor DV bonuses, though their special effects still apply when worn alongside armor.

| Item | Special | Cost |
|------|---------|------|
| Wasteland Duster | Protection from sun and light rain | 20 cr |
| Insulated Clothing | Advantage on cold exposure saves | 40 cr |
| Desert Wraps | Advantage on heat exposure saves | 25 cr |
| Work Boots | Advantage on rough terrain traversal | 15 cr |
| Tactical Goggles | Protection from flash effects and dust | 25 cr |
| Utility Belt | Quick-draw 2 items per round | 15 cr |
| Concealed Holster | Hide pistol-sized weapon, Perception DC 18 to detect | 20 cr |
| Load-Bearing Vest | +4 inventory slots | 25 cr |

## Augmentations

Each augmentation costs **Humanity** (reduces your total from 10). Humanity affects **all characters**, not just spellcasters — as chrome replaces flesh, you become harder for others to read, trust, and connect with.

### Humanity Threshold Effects

| Humanity | Effect |
|----------|--------|
| 10 (baseline) | No penalties. Fully human. |
| 8-9 | No mechanical penalties. Minor visible augmentation. |
| 6-7 | **-1 to Persuasion, Deception, and Insight checks** against non-augmented creatures. You read as "off" — too still, too precise, too smooth. |
| 4-5 | **-2 to all PRE-based checks** against non-augmented creatures. Most people find you unsettling. Animals shy away. |
| 2-3 | **-3 to all PRE-based checks.** Advantage on **Intimidation** checks (you are visibly dangerous). Disadvantage on checks to appear trustworthy or harmless. |
| 1 | **-4 to all PRE-based checks.** Cannot benefit from the Diplomat's Inspire ability. Most NPCs treat you with fear or hostility on sight. |
| 0 | **No spellcasting.** -5 to all PRE-based checks. Cannot be healed by Vitae magic (your body rejects arcane energy). Advantage on Intimidation and Fortitude saves vs. poison/disease. |

These penalties apply to interactions with **non-augmented creatures**. Heavily augmented NPCs, Synthetics, and characters with Humanity 5 or below do not impose these penalties on each other — chrome recognizes chrome.

**Synthetics** are exempt from the Humanity system entirely. Their Humanity is permanently 0, augmentations have no Humanity cost, and they do not suffer social penalties from this table. The trade-off: Synthetics can never learn or use magic. See [Character Creation](character-creation.md) for full Synthetic rules.

**Augmentation maintenance:** Each augmentation requires **10 credits per week** in maintenance during downtime (lubricant, power cells, calibration). Augments that go unmaintained for 2+ weeks malfunction — roll on the Unreliable weapon property table when using the augment until maintained. Synthetics are exempt from maintenance costs (their bodies integrate chrome natively).

### Body Location System

Every augmentation occupies a specific **body location**. Understanding locations is critical for two reasons: the **stacking rule** (installing multiple augments in the same location increases Humanity cost) and **build planning** (each location has limited options, so choices matter).

| Location | Description | Max Augments |
|----------|-------------|--------------|
| **Neural** | Brain, spine, nervous system | 3 |
| **Ocular** | Eyes, visual processing | 2 |
| **Dermal** | Skin, subdermal layers | 2 |
| **Skeletal** | Bones, joints, limbs | 3 |
| **Organ** | Heart, lungs, liver, kidneys | 3 |
| **External** | Mounted systems, comms, weapon hardpoints | 3 |

**Existing Augments by Location:**

| Location | Tier 1 | Tier 2 | Tier 3 | Tier 4 | Tier 5 |
|----------|--------|--------|--------|--------|--------|
| Neural | Reflex Booster, Targeting Computer, Social Processor | Wired Reflexes, Neural Processor | Sandevistan Implant, Ballistic Coprocessor, Neural Firewall | Predictive Combat Matrix | Full Cyberbrain, Quantum Reflex Engine |
| Ocular | Low-Light Optics | Thermal Optics, Cipher Lens | Threat Analysis Optics, Biometric Scanner, Predictive Targeting Overlay | Tactical HUD, Spectral Filter | Omnispectral Array |
| Dermal | Reactive Dermal Mesh, Subcutaneous ID Spoofer | Subdermal Armor, Thermal Shedding Integument, Ablative Plating Implant | Phase Shift Module, Kinetic Damping Weave | Adaptive Camouflage Skin, Regenerative Membrane | Mimetic Polyalloy Skin |
| Skeletal | Enhanced Muscles, Shock Absorbers | Cybernetic Limb, Pneumatic Joints, Reinforced Spine | Mantis Blades, Hydraulic Frame | Titanium Endoskeleton, Adaptive Alloy Frame | Exoskeletal Battleframe |
| Organ | Metabolic Stabilizer, Caloric Optimizer, Surge Glands | Toxin Filters, Adrenaline Regulator, Nano-Coagulants | Synthetic Heart, Trauma Response System, Nano-Repair Swarm | Nanite Regeneration System | Biological Repurposer |
| External | Communications Suite, Grapple Launcher, Integrated Tool Kit | Smart Link | Drone Tether, Deployable Shield | Integrated Field Kit, Countermeasure Pod | Integrated Weapons Platform |

*Faction augments omitted from this summary for clarity (see individual tier tables for faction entries).*

---

### Tier 1 Augments (Humanity Cost: 1 each)

| Augment | Location | Effect | Cost |
|---------|----------|--------|------|
| Reflex Booster | Neural | +2 Initiative | 150 cr |
| Targeting Computer | Neural | +1 to ranged attacks | 200 cr |
| Reactive Dermal Mesh | Dermal | +1 DV (stacks with all armor). When hit by a melee attack, attacker takes 1d4 piercing damage (micro-barbs). *(Formerly Dermal Plating)* | 200 cr |
| Enhanced Muscles | Skeletal | +2 carrying capacity, +1 to MIG checks | 175 cr |
| Low-Light Optics | Ocular | See in dim light as bright light | 125 cr |
| Communications Suite | External | Internal radio, 10-mile range | 100 cr |
| **Shock Absorbers** *(new)* | Skeletal | Reduce fall damage by 10 ft (minimum 0 ft effective fall). +2 to Athletics checks for jumping and climbing. Your joints are reinforced with micro-hydraulic dampeners — you land softly, leap further, and recover your footing faster. | 200 cr |
| **Grapple Launcher** *(new)* | External | Built-in grapple line with 60 ft range, mounted on the forearm or shoulder. As 1 action, fire the grapple to pull yourself to an anchor point (must support your weight) or pull an unattended object weighing 50 lbs or less to you. To pull a creature, make an opposed Athletics check — on success, pull the creature 10 ft toward you (Large or larger creatures are immune). Retracting the line is a free action. The grapple launcher does not count as a weapon and cannot deal damage. | 150 cr |
| **Metabolic Stabilizer** *(new)* | Organ | +1 to Fortitude saves vs. poison, disease, and radiation. The first time you would gain a level of Exhaustion each day (not each long rest), reduce it by 1 (to a minimum of 0 levels gained from that source). Your augmented organs regulate toxin absorption and metabolic stress. The +1 Fortitude bonus is an augmentation-category bonus and does not stack with other augmentation-source Fortitude bonuses (per **Equipment Bonus Stacking** rules). | 200 cr |

| **Caloric Optimizer** *(new)* | Organ | Advantage on Fortitude saves vs exhaustion from environmental sources (heat, cold, altitude, forced march). You can go 96 hours without food or 36 hours without water before exhaustion checks begin (instead of the normal 72 hours / 24 hours). | 175 cr |
| **Surge Glands** *(new)* | Organ | 1/short rest: when you roll initiative, add +1d4 to your initiative result. Declare before seeing the result. | 150 cr |
| **Integrated Tool Kit** *(new)* | External | Retractable tools built into your forearm (lockpicks, wire cutters, multitool, screwdriver set). You cannot be disarmed of these tools. You always count as having a basic toolkit for Technology, Sleight of Hand, and Crafting checks. | 125 cr |
| **Social Processor** *(new)* | Neural | +1 to Insight and Persuasion checks. You can silently record up to 1 hour of audio via an internal microphone, and replay recordings to yourself or through a connected speaker. | 200 cr |
| **Subcutaneous ID Spoofer** *(new)* | Dermal | 1/short rest: change your biometric signature (fingerprints, retinal pattern, thermal profile) for up to 8 hours or until you dismiss it. While spoofed, you have advantage on Deception checks to maintain a false identity when biometric scanning is involved. | 150 cr |

*Note: Targeting Computer relocated from Neural to Neural (confirmed — it's a brain-computer interface for aim correction).*

#### Caloric Optimizer (Organ, T1)
**Cost:** 175 cr | **Humanity Cost:** 1 | **Location:** Organ

A bioengineered gland grafted near the adrenal cortex that optimizes caloric efficiency and thermal regulation. Your body extracts more energy from less food and maintains core temperature across wider extremes.

- **Advantage** on Fortitude saves against exhaustion from environmental sources: extreme heat, extreme cold, high altitude, and forced march
- You can go **96 hours without food** (4 days, vs normal 3 days) or **36 hours without water** (vs normal 24 hours) before exhaustion checks begin
- Does not protect against exhaustion from other sources (magic, combat abilities, radiation, sleep deprivation)

> *The Caloric Optimizer is the scavenger's best friend — it buys you an extra day in the wastes when supplies run short. It doesn't make you tougher; it makes you more efficient.*

#### Surge Glands (Organ, T1)
**Cost:** 150 cr | **Humanity Cost:** 1 | **Location:** Organ

Synthetic adrenaline sacs wired to your sympathetic nervous system. When danger triggers your fight-or-flight response, the glands dump a burst of synthetic adrenaline, sharpening reaction speed for that critical first moment.

- **1/short rest:** When you roll initiative, you can add **+1d4** to your initiative result. You must declare this before seeing the result.
- The bonus applies only to the initiative roll, not to any other checks or attacks in the first round

> *"I heard the click before I heard the shot. Adrenaline's a hell of a drug — especially when it's manufactured to spec."* — Street doc's sales pitch

#### Integrated Tool Kit (External, T1)
**Cost:** 125 cr | **Humanity Cost:** 1 | **Location:** External

Retractable tools housed in a forearm compartment: lockpicks, wire cutters, a multitool, and a compact screwdriver set. They deploy with a flex of the wrist and retract when not in use. You can't lose them, drop them, or have them confiscated in a pat-down.

- You **cannot be disarmed** of these tools (they're part of your body)
- You always count as having a **basic toolkit** for Technology, Sleight of Hand, and Crafting checks
- Does not grant proficiency in these skills — only ensures you always have the tools available
- The tools are concealable (DC 15 Investigation check to detect them when retracted)

> *In the wastes, a lost toolkit means a lost day. The Integrated Tool Kit means you're never without the basics — even if everything else gets stripped.*

#### Social Processor (Neural, T1)
**Cost:** 200 cr | **Humanity Cost:** 1 | **Location:** Neural

A low-power neural implant that monitors micro-expressions, vocal stress patterns, and conversational flow, feeding subtle prompts into your peripheral awareness. Includes an integrated audio recorder with 1 hour of storage.

- **+1 to Insight checks** (reading people)
- **+1 to Persuasion checks** (optimized delivery)
- **Record audio:** Silently record up to 1 hour of audio. Replay to yourself (internal) or through a connected speaker/device. Overwrites oldest recording when full.
- The bonuses are **augmentation-category bonuses** (per Equipment Bonus Stacking rules)

> *The Social Processor doesn't make you charming. It makes you aware — of the pause before the lie, the shift in posture before the refusal, the exact moment to push.*

#### Subcutaneous ID Spoofer (Dermal, T1)
**Cost:** 150 cr | **Humanity Cost:** 1 | **Location:** Dermal

A thin-film bioelectric mesh implanted beneath the skin that can alter your biometric markers — fingerprints, retinal pattern, thermal profile, even voice resonance. Activation requires a moment of concentration; the new identity holds until dismissed or the duration expires.

- **1/short rest:** Change your biometric signature for up to **8 hours** (or dismiss early as a free action)
- While spoofed, you have **advantage on Deception checks** to maintain a false identity when biometric scanning is involved (faction checkpoints, corporate security, bounty verification)
- Does not change your physical appearance — you still look like yourself. It only defeats biometric scanners and identity verification systems.
- Can be detected by a **DC 18 Technology check** if someone specifically scans for augmented biometrics

> *Fingerprints say who you are. The Spoofer says who you want to be — at least until the scan's over.*

### Tier 2 Augments (Humanity Cost: 2 each)

| Augment | Location | Effect | Cost |
|---------|----------|--------|------|
| Wired Reflexes | Neural | +1 action per turn (once per combat) | 750 cr |
| Smart Link | External | +2 to attack with linked weapons | 600 cr |
| Subdermal Armor | Dermal | +2 DV, doesn't stack with heavy armor | 700 cr |
| Cybernetic Limb | Skeletal | Replace limb, +3 MIG for that limb, can install weapon mount | 800 cr |
| Neural Processor | Neural | +2 INT for technical skill checks | 650 cr |
| Toxin Filters | Organ | Advantage on saves vs poison and disease | 500 cr |
| **Thermal Optics** *(new)* | Ocular | See heat signatures through walls/cover within 30 ft. Advantage on Perception to detect hidden creatures. | 550 cr |
| **Adrenaline Regulator** *(new)* | Organ | 1/SR: when reduced below half HP, gain +2 to attack rolls and +10 ft speed for 2 rounds. | 600 cr |
| **Community Link** *(Hearthstone Compact faction)* | External | Share senses with one willing ally within 100 ft for 10 minutes (1/SR). Ally can use your Perception modifier. Requires Hearthstone faction standing. | 500 cr |
| **Corporate Override Chip** *(Dynaxis Solutions faction)* | Neural | Advantage on Persuasion and Deception in trade/negotiation. Access Dynaxis supply networks (10% discount on purchased gear). Requires Dynaxis faction standing. | 650 cr |
| **Nano-Coagulants** *(new)* | Organ | Advantage on death saving throws. When stabilized by any means, regain 1 HP instead of 0. Bleeding conditions applied to you end at the end of your next turn (you take Bleeding damage once at the start of that turn, then the condition clears). | 600 cr |
| **Cipher Lens** *(new)* | Ocular | Overlay hacking interface onto physical vision. +2 to Technology checks when interfacing with visible devices. As a free action, identify all networked devices within 30 ft (device type, network status, and whether ICE is present). Does not grant hacking access — you still need hacking tools and skills to intrude. | 550 cr |
| **Thermal Shedding Integument** *(new)* | Dermal | Your skin regulates thermal output to match ambient temperature. Advantage on Stealth checks against creatures relying on thermal vision (including Thermal Optics augments). Resistance to fire damage. You do not appear on thermal sensors or heat-based detection systems. | 600 cr |
| **Ablative Plating Implant** *(redesigned)* | Dermal | When you take physical damage (bludgeoning, piercing, or slashing) from an attack, reduce that damage by your **proficiency bonus** (minimum 1). This reduction applies to every hit, not per round — each physical attack that damages you is reduced. Does not reduce energy, fire, cold, electric, psychic, or other non-physical damage types. Does not reduce damage from ongoing conditions (Bleeding, Burning), environmental sources, or area effects — only discrete attack damage targeting you specifically. The plating is visible as a network of carbon-fiber patches beneath the skin. | 700 cr |
| **Pneumatic Joints** *(new)* | Skeletal | +10 ft movement speed. Stand from prone as a free action (instead of costing 1 action). Your skeletal joints are fitted with compressed-gas actuators that snap your limbs into position. The speed bonus is an augmentation-category bonus — it does not stack with other augmentation-source speed bonuses (e.g., Exoskeletal Battleframe's +10 ft replaces this, it does not add to it). | 700 cr |
| **Reinforced Spine** *(new)* | Skeletal | Carrying capacity doubles. +2 to saves against being knocked prone, grappled, or shoved. A titanium-composite rod reinforces your spinal column, distributing weight across your frame and anchoring you against displacement. The +2 save bonus applies only to the specific conditions listed — it does not apply to all Fortitude or Reflex saves. | 800 cr |

### Tier 3 Augments (Humanity Cost: 3 each)

| Augment | Location | Effect | Cost |
|---------|----------|--------|------|
| Sandevistan Implant | Neural | Once per short rest, gain double actions for 1 round | 3,000 cr |
| Mantis Blades | Skeletal | Retractable arm blades (2d6 damage, concealed) | 2,500 cr |
| Ballistic Coprocessor | Neural | Reroll missed ranged attacks once per round | 2,800 cr |
| Synthetic Heart | Organ | Immune to critical hits, +10 HP | 3,500 cr |
| Phase Shift Module | Dermal | 1/SR: become invisible for 1 round, OR as a reaction when targeted by an attack, become incorporeal until start of your next turn (attack passes through, no damage). While incorporeal, you are immune to physical attacks but can still be affected by area effects (explosions, psionic abilities, etc.). Move through solid objects up to 5 ft thick; cannot attack or interact with objects. 2d6 shunt damage if you end incorporeal inside a solid object. *(Formerly Ghost Protocol)* | 2,500 cr |
| Trauma Response System | Organ | Auto-stabilize when dying. When you drop to 0 HP, take one reaction before falling unconscious (if reaction available). Allies within 30 ft alerted to your exact HP via bio-signal (+2 to Medicine checks to treat you). *(Formerly Bio-Monitor)* | 2,000 cr |
| **Threat Analysis Optics** *(new)* | Ocular | As a free action (1/round), identify a creature's highest and lowest saving throw. +2 to Perception checks to detect traps, hidden mechanisms, and ICE threat levels during hacking encounters. | 1,500 cr |
| **Drone Tether** *(new)* | External | Maintain a persistent data link with one drone or construct within 500 ft. Tethered drone gains +1 to attack rolls and +10 ft speed. See through the drone's sensors as a free action (switching to drone view for the first time each encounter costs 1 action). The data link is hackable — an enemy hacker can attempt to sever it (Technology check vs. your Technology DC). | 2,000 cr |
| **Nano-Repair Swarm** *(new)* | Organ | During a short rest, regain 1 additional Hit Die worth of HP (free, no action required). 1/long rest: as a reaction when you take damage, reduce that damage by 2d6 as nanites absorb the impact. Visible effect: faint silver shimmer over wounds as they close. | 2,500 cr |
| **Hydraulic Frame** *(new)* | Skeletal | +2 to MIG score (max 22). Advantage on grapple checks. Can wield Heavy weapons one-handed. | 2,800 cr |
| **Neural Firewall** *(new)* | Neural | +2 to Will saves. Advantage on saves vs hacking, psionics, and mind-affecting effects. | 3,000 cr |
| **Berserker Override** *(Iron Wolves faction)* | Neural | When bloodied (below half HP), +2 to melee damage and advantage on Intimidation. Cannot retreat or take Disengage action while active. Deactivates when healed above half HP. Requires Iron Wolves faction standing. HC: 3. | 2,500 cr |
| **Sacred Interface** *(Convergence faction)* | Neural | Communicate with AI systems without hacking tools. +3 to Technology checks vs pre-war systems. Can attempt to negotiate with rogue AIs (PRE check DC 20 — success = AI becomes non-hostile for 10 minutes). Requires Convergence faction standing. HC: 3. | 3,000 cr |
| **Resonance Dampener** *(Ashen Veil faction)* | Organ | +2 to saves vs magic. Detect active magic within 30 ft (passive, always on). **Humanity Cost: 1** (not 3) — the Veil specifically designs augmentations that minimally disrupt the body's arcane resonance. Requires Ashen Veil faction standing. | 2,000 cr |
| **Biotech Symbiont** *(Kethara Collective faction)* | Organ | A living alien organism bonded to your internal systems. Advantage on Endurance saves. +1d6 HP per short rest recovery. Cannot be removed without DC 18 surgery (removal deals 3d6 damage). **Humanity Cost: 2** (not 3) — bioware harmonizes with biology. Requires Kethara faction standing. | 3,500 cr |
| **Biometric Scanner** *(new)* | Ocular | Read heart rate, perspiration, pupil dilation, and micro-expressions of creatures within 30 ft. Advantage on Insight checks to detect lies and hidden intentions. As 1 action, make an Investigation check contested by a creature's Deception — on success, you identify whether the creature is disguised, polymorphed, or using illusion magic. Cannot penetrate full face coverings or helmets. | 1,500 cr |
| **Predictive Targeting Overlay** *(new)* | Ocular | When you take the Aim action, gain an additional +1 to the resulting attack roll (stacks with Aim's existing +2 bonus — the +1 from PTO is an augmentation-category bonus, while Aim's +2 is an action bonus; these are different sources per the Equipment Bonus Stacking rules). 1/SR: as a free action, mark a creature you can see. Your next ranged attack against that creature before the end of your next turn ignores half cover and partial concealment. The overlay requires line of sight — it cannot predict through total cover. | 2,000 cr |
| **Kinetic Damping Weave** *(new)* | Dermal | Resistance to bludgeoning damage. When you fall, reduce effective falling distance by 20 feet (minimum 0). When you are grappled, you can spend 1 action to discharge stored kinetic energy: the grappler takes 1d8 force damage and must succeed on a MIG save (DC = 8 + your proficiency bonus + your END modifier) or release you. The discharge expends the weave's stored energy — it cannot be used again until the start of your next turn. | 2,500 cr |
| **Deployable Shield** *(new)* | External | As 1 action, deploy a personal energy barrier that grants +2 DV for 1 minute (1/SR). The shield is visible as a faint hexagonal pattern on one arm. While the shield is deployed, you cannot wield a two-handed weapon or use both hands for climbing. The +2 DV is an augmentation-category bonus and counts toward the **Augmentation DV Cap** (+3 max from augmentations). Cannot stack with a physical shield's DV bonus — use whichever is higher. Deactivate as a free action. | 2,000 cr |

### Tier 4 Augments (Humanity Cost: 4 each)

*Tier 4 augments represent cutting-edge or experimental technology. They are not available for purchase in standard markets — they must be acquired through faction connections, black market dealers (double cost), specialized research facilities, or salvaged from elite enemies. Installation requires a DC 18 Technology check.*

| Augment | Location | Effect | Cost |
|---------|----------|--------|------|
| **Predictive Combat Matrix** | Neural | Once per combat, before an enemy acts, declare their next action. If correct (GM confirms), gain advantage on all rolls against them for 1 round. If incorrect, no penalty — the prediction simply failed. Requires observation (must have seen the enemy act at least once). The GM should decide the enemy's planned action before the player declares their prediction. The prediction must be specific (e.g., 'it will attack the Warrior with a melee strike,' not 'it will attack someone'). | 4,000 cr |
| **Adaptive Camouflage Skin** | Dermal | Advantage on Stealth checks. As 1 action, become invisible for 1 round (1/SR). While invisible, first attack made breaks invisibility but gains advantage. Upgrade of Phase Shift Module. If both installed, choose which to activate when you use either — ACS's enhanced invisibility (advantage on Stealth + offensive invisibility) or Phase Shift Module's incorporeality (phase through attacks/objects). Both share the same 1/SR usage. | 5,000 cr |
| **Integrated Field Kit** *(new)* | External | Contains retractable tools that cannot be disarmed or confiscated: lockpicks (+2 to Technology checks for locks), medical scanner (+2 to Medicine for diagnosis), salvage analyzer (+2 to Survival for scavenging). 1/SR: deploy an integrated grappling hook (30 ft range, free action) or an integrated cutting torch (cuts through Hardness 5 materials in 1 round). | 4,000 cr |
| **Titanium Endoskeleton** | Skeletal | +2 DV. Immune to being knocked prone or pushed by non-magical effects. Resistance to bludgeoning damage. Speed reduced by 5 ft (heavier frame). | 4,500 cr |
| **Nanite Regeneration System** | Organ | At the start of each of your turns, regain **1d4 HP** while above 0 HP. Additionally, severed limbs regrow over 1d4 days. The nanites are visible as a faint silver sheen under the skin. | 5,000 cr |
| **Tactical HUD** | Ocular | See through smoke, fog, and non-magical obscurement. Identify creatures' current HP range (full/bloodied/near-death). +2 to Perception checks. As a free action, designate one creature — allies who can see your HUD feed gain +1 to attacks against that creature for 1 round (1/round). | 4,500 cr |
| **Spectral Filter** *(new)* | Ocular | See through illusions automatically within 60 ft (no Investigation check required). Detect invisible creatures as faint outlines within 30 ft — they do not benefit from the invisible condition against you, though they retain any other concealment. You cannot be surprised by creatures you can see. Does not grant Truesight — magical darkness and shapeshifting are not penetrated (see Omnispectral Array, Tier 5, for full Truesight). | 4,500 cr |
| **Regenerative Membrane** *(new)* | Dermal | At the start of each of your turns, if you are below half your maximum HP, regain 2 HP. When you succeed on a death saving throw, you stabilize and regain 1 HP instead of stabilizing at 0 HP. The membrane is visible as a faint greenish tint beneath the skin that pulses when regenerating. Does not function if you have the Irradiated 3+ condition (radiation disrupts the nanite substrate). | 5,000 cr |
| **Adaptive Alloy Frame** *(new)* | Skeletal | 1/SR, as a free action, choose one physical damage type (bludgeoning, piercing, or slashing). You gain resistance to that damage type for 1 minute. While a resistance is active, your skeletal structure shifts visibly — bone-density fluctuations are audible as a low grinding sound. The resistance can be changed by using another activation (spending the 1/SR again), but you can only have one physical damage resistance active from this augment at a time. | 4,500 cr |
| **Countermeasure Pod** *(new)* | External | 1/LR, as a reaction when targeted by a ranged attack, release a burst of chaff, flares, and smoke. The triggering attack has disadvantage. Additionally, all ranged attacks against you have disadvantage until the start of your next turn. Allies within 5 ft also benefit from the concealment. The pod takes 1 minute to reload after use (cannot be used again during the same encounter even if you somehow regain the use). Visible as a shoulder-mounted or backpack-mounted pod with 3 launch tubes. | 5,000 cr |
| **Community Triage Array** *(Hearthstone Compact faction)* | External | Passive: identify HP status (full/bloodied/near-death) of all allies within 60 ft. As 1 action: remotely stabilize a downed ally within 30 ft (no Medicine check required). 1/SR: when you provide healing to a creature (stim, ability, or spell), add +1d6 to the heal; one other ally within 5 ft of the primary target also receives half the healing (round down). *The Compact field medic runs a live triage network for their entire squad.* HC: 4. Requires Hearthstone Compact Trusted Standing. | 5,500 cr |
| **Warlord's Chassis** *(Iron Wolves faction)* | Skeletal | Retractable forearm blades (natural weapon: 1d8 piercing damage, cannot be disarmed). These forearm blade attacks count as magical for the purpose of overcoming resistance and immunity. While **Berserker Override** is active: blade attacks deal +1d6 damage; on a hit, target makes Fortitude save (DC 8 + proficiency + MIG modifier) or becomes Frightened of you until end of their next turn (1/combat for the Frightened effect). *The Iron Wolves believe the body is a weapon. Their T4 aug makes that literal.* HC: 4. Requires Iron Wolves Trusted Standing. | 5,000 cr |
| **Companion Intelligence Module** *(Convergence faction)* | Neural | +2 to Technology and Investigation checks. 1/SR: when you declare an action against a creature you can see, the CIM reveals that creature's current DV, saving throw bonuses, and damage resistances/immunities (GM provides this information). 1/combat: as a reaction when you would take damage, the CIM calculates an optimal defensive response — gain +3 DV against the triggering attack. *The CIM is the first step toward Singularity: a second mind that never sleeps, never panics, never misses.* HC: 4. Requires Convergence Trusted Standing. | 6,000 cr |
| **Productivity Core** *(Dynaxis Solutions faction)* | Organ | +2 to Technology and Crafting checks. You do not suffer concentration penalties from taking damage. You require only 4 hours of sleep per day (long rest duration unchanged — this is a narrative benefit for downtime and social play). 1/SR: after rolling a skill check you are proficient in, you may add +5 to the result (declare after rolling). After using this "push output" ability, your next attack roll has disadvantage (processing overhead). *Dynaxis does not augment people. It optimizes them. The paperwork is standard.* HC: 4. Requires Dynaxis Trusted Standing. | 5,000 cr |
| **Resonance Amplifier** *(Ashen Veil faction)* | Organ | **Humanity Cost: 2** (not 4) — the Amplifier harmonizes with magical energies rather than disrupting them. After casting a spell or using a magical ability, gain temporary HP equal to your proficiency bonus (once per action). +1 to spell attack rolls and spell save DC (spellcasters only). 1/SR: automatically succeed on one Burnout save (magic) — the Amplifier absorbs the excess resonance before it destabilizes. *The Convergence builds technology that fights the body. The Veil builds technology that listens to it.* HC: 2. Requires Ashen Veil Trusted Standing. | 4,000 cr |
| **Xylar Graft** *(Kethara Collective faction)* | Organ | **Adapting HC:** Starts at HC 3. After each 5 long rests since installation, HC retroactively decreases by 1 (minimum HC 1) — the organism integrates fully. Track long rests since installation. Immunity to disease and natural poisons. Exhaustion recovery is accelerated: you recover 1 additional level per rest success. 1/SR: redirect up to 1d8 HP from healing you receive to one ally within 30 ft (the Graft converts and re-broadcasts restorative compounds). **After 10 long rests:** upgrade activates — immunity extends to magical poisons; redirected healing increases to 2d8. *Xylar organisms learn. Given time, the Graft doesn't feel like chrome — it feels like you.* HC: 3 (adapts to 1 over 10 long rests). Requires Kethara Trusted Standing. | 5,000 cr |

### Tier 5 Augments (Humanity Cost: 5 each)

*Tier 5 augments are endgame chrome — the pinnacle of post-Fall technology. Each represents a fundamental transformation of the human body. Acquiring Tier 5 augments requires extraordinary circumstances: a major faction's top-tier research lab, a pre-Fall military installation's sealed vault, or a deal with entities that shouldn't be dealt with. Installation requires a DC 20 Technology check and a fully equipped surgical suite.*

| Augment | Location | Effect | Cost |
|---------|----------|--------|------|
| **Full Cyberbrain** | Neural | Your INT score becomes **20** (if lower). This replaces your current INT score; Attribute Improvements cannot increase INT beyond 20. You are immune to Mentis magic (mind-affecting spells and abilities). You cannot be surprised. Your thoughts cannot be read by any means. You process information at machine speed — advantage on all INT-based skill checks. *The cost is your biological brain is partially or fully replaced by a quantum processor. Humanity cost 5 is steep — a character with Full Cyberbrain has committed to chrome over flesh.* | 15,000 cr |
| **Mimetic Polyalloy Skin** | Dermal | Change your physical appearance at will as a free action (a physical transformation, not an illusion — you can pass touch inspection). Resist the first **5 damage** from any source each round (the polyalloy absorbs and redistributes kinetic and thermal energy). Your skin has a faint metallic sheen in bright light. | 12,000 cr |
| **Integrated Weapons Platform** | External | Mount up to **2 weapons internally** (arm compartments, shoulder mounts, forearm launchers). Mounted weapons deploy as a **free action** and cannot be disarmed, sundered, or taken. +1 to attack rolls with mounted weapons. You can fire a mounted weapon and wield a handheld weapon simultaneously. | 10,000 cr |
| **Quantum Reflex Engine** | Neural | Your reaction time operates at quantum speed. Gain **+1 reaction per round** (maximum 2 reactions per round from all sources, including features such as the Warrior's Balanced Stance). Once per round, when you are missed by an attack, you can make a melee or ranged attack against the attacker as a free action. | 14,000 cr |
| **Biological Repurposer** | Organ | Your augmented organs can convert any organic matter into energy. You no longer need to eat, drink, or breathe. You are immune to inhaled poisons, drowning, and starvation. Healing effects on you are **50% more effective** (round up). Your skin has a slight gray pallor and your body temperature runs cold. | 8,000 cr |
| **Omnispectral Array** *(new)* | Ocular | Truesight 60 ft — see through magical darkness, invisibility, illusions, and shapeshifting. Identify all active magical effects on a creature within 30 ft as a free action. Record and replay visual data (perfect photographic memory for anything seen while augment is active). The array emits a faint prismatic glow from the eyes when active, imposing disadvantage on Stealth checks in darkness. | 10,000 cr |
| **Exoskeletal Battleframe** *(new)* | Skeletal | +10 ft movement speed. Jump distance doubled (standing and running). As 1 action, perform a powered charge: move up to double your speed in a straight line and make one melee attack with advantage. On hit, the target is pushed 10 ft and must succeed on a Fortitude save (DC = 8 + your proficiency bonus + MIG modifier) or be knocked prone. Unarmed and natural weapon damage increases by one die size (d6→d8, d8→d10, etc.). Wield two-handed weapons in one hand (this subsumes Hydraulic Frame's one-handed Heavy weapon trait for characters who skip T3). Servo bulk imposes disadvantage on Stealth checks and reduces speed by 5 ft in tight spaces (corridors, crawlspaces). | 12,000 cr |
| **Lifeweb Node** *(Hearthstone Compact faction)* | Organ | **Humanity Cost: 3** (not 5) — serving connection costs less humanity than serving self. Touch ritual (1 hour): designate one willing creature as your **bond partner**. The bond lasts until deliberately severed (1-hour ritual) or until the bond partner dies. Only one bond at a time. While bonded (no range limit): (1) as a reaction when your bond partner drops to 0 HP, transfer up to 20 HP from yourself to them immediately; (2) 1/SR, when either bonded creature makes a saving throw, the other may use a reaction to grant advantage on that save; (3) 1/LR, when your bond partner would die (0 HP and failed all death saves), you may permanently sacrifice 5 maximum HP to have them stabilize at 1 HP instead. *The Compact's highest-tier technology is not a weapon. It is a promise.* HC: 3. Requires Hearthstone Compact Trusted Standing (+3) and a major faction quest or personal sponsorship by Compact leadership (GM determines). | 12,000 cr |
| **Iron Will Cortex** *(Iron Wolves faction)* | Neural | 1/LR: when you would fail a death saving throw, it automatically succeeds instead. 1/combat: when reduced to 0 HP for the first time, drop to 1 HP instead — and immediately make one free melee attack (not an action, does not cost actions) against the creature that downed you (if within melee range). While below half HP: +1 to all attack rolls and saving throws (stacks with Berserker Override's bonuses — different bonus sources). When you successfully Intimidate a creature, the effect lasts until end of combat rather than the usual 1 round. *"You don't fall until you choose to fall." — Iron Wolves field creed.* HC: 5. Requires Iron Wolves Trusted Standing (+3) and a major faction quest or personal sponsorship by Wolf leadership (GM determines). | 15,000 cr |
| **Nexus Ascension** *(Convergence faction)* | Neural | Immune to ability score damage, aging effects, and disease. Communicate telepathically (one-way send, two-way with willing recipients) with creatures that have neural augmentations within 60 ft. As a reaction when targeted by a Technology attack or hacking attempt, gain advantage on the save; on a success, learn all networked systems the attacker is currently connected to. 1/LR: project your consciousness digitally into any networked electronic system within 120 ft (1 action) — while projected, your body is unconscious and Incapacitated, but your digital self operates with double proficiency on Technology skill checks (this does not bypass ICE resistance, action-sequence requirements, or structural hacking rules). Return to your body as 1 action on your next turn. *The Archon calls this "the Threshold." Not death. Not life. The boundary the Fall was meant to create.* HC: 5. Requires Convergence Trusted Standing (+3) and a major faction quest or personal sponsorship by the Archon (GM determines). | 18,000 cr |
| **Apex Prototype** *(Dynaxis Solutions faction)* | External | +2 to all attack rolls. +2 DV (counts toward Augmentation DV Cap). +1d6 to all damage rolls. Immune to the Frightened condition. **Kill-Switch (narrative mechanic):** Dynaxis retains a remote override for all Apex Prototypes. If activated by a Dynaxis authorized agent (Director Raith or designated handlers), the wearer must make a Fortitude save (DC 18) or be Incapacitated for 1 minute. This override capability is disclosed in the installation contract — players who read the fine print know it exists. Attempting to excise the kill-switch requires DC 25 Technology check and 24 hours: on success, the attack bonus decreases from +2 to +1 (the excised module was part of the targeting system); on failure, Dynaxis is alerted. The kill-switch is a GM narrative tool, not a random punishment. *"The Apex Prototype is not a product. It is a partnership." — Dynaxis installation agreement, Clause 14.* HC: 5. Requires Dynaxis Trusted Standing (+3) and a major faction quest or personal sponsorship by Director Raith (GM determines). | 20,000 cr |
| **Veil-Walker Substrate** *(Ashen Veil faction)* | Dermal | **Humanity Cost: 3** (not 5) — the Substrate is alive with Voidscar dimensional energy, reinforcing rather than replacing the body's arcane connection. Passive: detect dimensional anomalies, Voidscar energies, and phase-shifted or ethereal creatures within 60 ft (no check required). As a reaction when you would take damage, partially phase-shift: reduce the triggering damage by your character level (minimum 1 damage reduced) (1/SR). 1/LR: step fully into the Veil for 1 round — you are invisible and incorporeal (physical attacks and spells that do not affect ethereal creatures cannot target you). You can observe but not interact with the material plane. Return as 1 action on your next turn. Does not count as Stealth. *Archseer Vasquez says the Substrate doesn't cross the threshold. It sits on it.* HC: 3. Requires Ashen Veil Trusted Standing (+3) and a major faction quest or personal sponsorship by Archseer Vasquez (GM determines). | 14,000 cr |
| **Kethara Convergence** *(Kethara Collective faction)* | Organ | **Humanity Cost: 4** (not 5) — biological integration costs less humanity than mechanical replacement. Passive: communicate emotionally and by intent with any Xylar creature or Kethara Collective member within 30 ft (wordless chemical-language signal — cannot be jammed or intercepted by Technology checks). Advantage on all saves against fear, mental intrusion, and psychological effects. When you would be reduced to 0 HP, make a Fortitude save (DC 15): on success, drop to 1 HP instead (1/combat, does not trigger vs. instant-death effects). 1/LR: access the Kethara hive-memory for 1 minute — gain expertise in one skill you are proficient in, advantage on all saving throws, and 2d8 temporary HP lasting 1 hour. Visual tell while active: eyes shift to a faceted compound appearance; skin shows shifting bioluminescent patterns. *"Those who carry home inside them." — The Kethara word for what this implant makes you.* HC: 4. Requires Kethara Trusted Standing (+3) and a major faction quest or personal sponsorship by Kethara leadership (GM determines). | 15,000 cr |

## Augmentation Synergies

Augmentation selection is more than best-in-slot. When specific pairs of augmentations are installed together, the two systems interface — sharing data feeds, power networks, or biological processes — producing a passive bonus that neither provides alone. These emergent effects are called **Synergies**.

**Rules for Synergies:**
- A synergy activates automatically when both listed augmentations are installed and functional (maintained)
- Each synergy is passive — it requires no action to activate unless otherwise noted
- A synergy does not reduce Humanity cost for either component augment
- If one component augment is disabled (damaged, suppressed, or removed), the synergy also deactivates
- Each synergy fires once regardless of how many copies of the component augments are installed

---

### Tier 1–2 Synergies

---

**Precision Anchor**
*Components: Targeting Computer (T1 Neural) + Smart Link (T2 External)*

The Targeting Computer's neural aim-correction and the Smart Link's weapon-feedback loop cross-reference your miss data in real time, learning from each shot.

**Synergy Effect:** Once per short rest, when you miss with a ranged attack, you may immediately reroll it with advantage. The recalibration is automatic — the two systems identified the error and corrected for it before the round ends.

> *"Two targeting systems arguing about who missed. Then they agree. The next shot doesn't miss."*

---

**Adrenaline Override**
*Components: Metabolic Stabilizer (T1 Organ) + Adrenaline Regulator (T2 Organ)*

The Metabolic Stabilizer prevents the crash that follows an adrenaline spike. When the Adrenaline Regulator triggers, the Stabilizer channels the surge cleanly through your system.

**Synergy Effect:** When the Adrenaline Regulator activates (on dropping below half HP), the surge also reduces your current Exhaustion level by 1 (minimum 0). Additionally, the attack bonus from Adrenaline Regulator (+2 to attacks) extends to saving throws for the same 2-round duration — your entire nervous system is operating at peak response.

> *"The crash never came. Just a smooth wave, then clarity."*

---

**Enhanced Optics**
*Components: Low-Light Optics (T1 Ocular) + Thermal Optics (T2 Ocular)*

Light-spectrum and thermal imaging running simultaneously create a composite visual feed that surpasses either system alone.

**Synergy Effect:** You can see through **total darkness** as if it were dim light (not just dim light as bright light, per Low-Light Optics alone). You never have disadvantage on attack rolls due to darkness. Additionally, the Thermal Optics' wall-penetration range doubles to **60 feet** (from 30 ft) — the combined systems compensate for each other's environmental weaknesses.

*Both components are Ocular (max 2 per location). Installing both uses both Ocular slots.*

> *"Light and heat. One is absence, one is presence. Together, the dark doesn't exist."*

---

**Lightning Rod**
*Components: Reflex Booster (T1 Neural) + Wired Reflexes (T2 Neural)*

Two layers of neural acceleration running simultaneously create a reaction profile that outpaces conscious thought.

**Synergy Effect:** You cannot be surprised while both augmentations are functional. Additionally, the extra action granted by Wired Reflexes (once per combat) can be used on any turn within the first **three rounds** of combat rather than only in a single declared turn — you choose when to apply it after you see how the fight develops.

*Both are Neural (max 3 per location). Installing both uses 2 Neural slots.*

> *"Surprised? The concept doesn't apply to someone who's already moving."*

---

### Tier 2–3 Synergies

---

**Overclock Loop**
*Components: Wired Reflexes (T2 Neural) + Sandevistan Implant (T3 Neural)*

Two nervous system accelerators running in parallel don't stack — they synchronize. When the Sandevistan pushes time into slow motion, the Wired Reflexes system isn't consumed in the process.

**Synergy Effect:** When you activate the Sandevistan (gaining double actions for 1 round), the **Wired Reflexes** extra-action charge is **not consumed**. Both systems operate independently — the Sandevistan round uses its own activation, and you retain Wired Reflexes for a different turn.

*Both are Neural. Installing both (plus any other Neural aug) uses all 3 Neural slots.*

> *"Two layers of nervous system acceleration compound exponentially — the brain processes faster than the fingers can move."*

---

**Chrome Fortress**
*Components: Subdermal Armor (T2 Dermal) + Hydraulic Frame (T3 Skeletal)*

Layered subdermal plating and reinforced skeletal structure create overlapping protection zones — the armor absorbs what the frame doesn't deflect.

**Synergy Effect:** You gain **Damage Reduction 1** against physical damage (bludgeoning, piercing, and slashing). This applies to every physical attack, reducing its damage after all other modifiers. Neither augment provides DR alone — the layered protection creates an emergent durability that their individual components don't achieve.

> *"Layered endoskeletal plating and subdermal mesh create overlapping protection zones — there's no clean angle."*

---

**Dead Nerves** *(Iron Wolves)*
*Components: Adrenaline Regulator (T2 Organ) + Berserker Override (T3 Neural, Iron Wolves faction)*

The Berserker Override cuts pain signals and forces aggression. The Adrenaline Regulator channels the resulting adrenal flood without burning out your nervous system.

**Synergy Effect:** While the **Berserker Override** is active (you are bloodied — below half HP), failed Fortitude saves against **pain, stun, and incapacitation** automatically succeed instead. Once per activation of Berserker Override, the body simply refuses to go down.

*Requires Iron Wolves faction standing to install Berserker Override. The synergy functions only during Berserker Override's bloodied activation.*

> *"The Override doesn't stop the pain. It stops you from caring about the pain."*

---

**Nerve Network**
*Components: Neural Processor (T2 Neural) + Ballistic Coprocessor (T3 Neural)*

The Neural Processor's enhanced INT feeds into the Ballistic Coprocessor's predictive targeting model. Combat calculation no longer distinguishes between close and distant targets.

**Synergy Effect:** The Ballistic Coprocessor's once-per-round **reroll** on missed attacks now applies to **both ranged and melee attacks** (not only ranged). The neural prediction model is agnostic to range — the same calculation that tracks a bullet's path can model a blade's arc.

*Both are Neural. Installing both (with any prior Neural aug) fills 3 Neural slots.*

> *"The coprocessor models the trajectory. The distance is just a parameter."*

---

**Neural Cage** *(Dynaxis Solutions)*
*Components: Neural Firewall (T3 Neural) + Corporate Override Chip (T2 Neural, Dynaxis Solutions faction)*

Two intrusion countermeasures running in parallel create a signal-bouncing feedback loop that is actively hostile to probe.

**Synergy Effect:** You have **advantage on all saving throws** against hacking, mental intrusion, and psionic attacks (replacing Neural Firewall's advantage on saves vs hacking/psionics — this synergy applies the advantage as a unified combined effect, not additional stacks). Once per short rest, as a **reaction** when a creature attempts to hack you or use a Technology check against your systems, you can **scramble their signal** — the attacker has disadvantage on their next Technology check this round.

*Requires Dynaxis faction standing for the Corporate Override Chip. Both are Neural.*

> *"Two intrusion countermeasures running in parallel create a feedback loop that's painful to probe."*

---

### Tier 3–4 Synergies

---

**Phase Ghost**
*Components: Phase Shift Module (T3 Dermal) + Adaptive Camouflage Skin (T4 Dermal)*

Phase-state matter scatters light in the same wavelength patterns as chameleon-weave. The two systems reinforce each other at the physics level.

**Synergy Effect:** When you activate either the **Phase Shift Module** or **Adaptive Camouflage Skin**, the **other system also activates simultaneously** as a free action (no additional action cost, no additional use of the second system's 1/SR charge). Both retain their individual 1/SR usage for separate activations — the synergy means one activation triggers both.

*Both are Dermal (max 2 per location). Installing both uses both Dermal slots.*

> *"Phase-state matter scatters light the same way chameleon-weave does — the two systems reinforce each other."*

---

**Predator's Eye**
*Components: Threat Analysis Optics (T3 Ocular) + Predictive Combat Matrix (T4 Neural)*

The Threat Analysis feed — save vulnerabilities, vital signs, threat indicators — flows directly into the Predictive Combat Matrix's enemy-behavior model. The prediction is no longer a guess.

**Synergy Effect:** When you correctly predict an enemy's next action via **Predictive Combat Matrix**, you also learn the **specific target** of that action. Additionally, the PCM's prediction **automatically succeeds** against the first creature you designated with Threat Analysis Optics this combat — the biometric read is sufficient for the PCM to model their intent without error.

> *"The prediction is no longer a guess — it's a read from 30 different biological indicators all screaming the same answer."*

---

**Hardened Shell**
*Components: Kinetic Damping Weave (T3 Dermal) + Titanium Endoskeleton (T4 Skeletal)*

The Kinetic Damping Weave's energy absorption working in tandem with the Endoskeleton's rigid frame creates a closed mechanical system — your body becomes its own shock mount.

**Synergy Effect:** Your combined impact-absorption technology provides **Damage Reduction 2** against all physical damage (bludgeoning, piercing, and slashing). This replaces the Chrome Fortress synergy's DR 1 if you have all four augments (use the higher, not additive — DR 2, not DR 3). Additionally, you are immune to being knocked prone by **both magical and non-magical** effects (Titanium Endoskeleton alone covers only non-magical).

> *"Two layers of anti-impact technology create a closed system — your body becomes its own shock mount."*

---

### Tier 4–5 Synergies

---

**All-Seeing**
*Components: Tactical HUD (T4 Ocular) + Omnispectral Array (T5 Ocular)*

The Tactical HUD's battlefield analysis and the Omnispectral Array's true-sight processing run as a unified visual intelligence system.

**Synergy Effect:** When you designate a creature using the Tactical HUD's **designation ability**, your allies also gain **+1 to saving throws against that creature's abilities** for the same duration. Additionally, your Truesight range from the Omnispectral Array extends to **120 feet** (from 60 ft).

*Both are Ocular (max 2 per location). Installing both fills both Ocular slots — this forecloses all other Ocular options.*

> *"The HUD tells you what's dying. The Array tells you what's hiding. Together, nothing in the room has any secrets."*

---

### Faction Synergies

**Symbiotic Enhancement** *(Kethara Collective)*
*Components: Biotech Symbiont (T3 Organ, Kethara Collective faction) + Biological Repurposer (T5 Organ)*

Kethara biology evolved to recycle everything. The Symbiont's alien regenerative compounds are processed by the Repurposer and returned to the body at doubled efficiency.

**Synergy Effect:** The Biotech Symbiont's **short-rest HP recovery** increases from +1d6 to **+2d6** (the Repurposer optimizes the alien tissue's restorative output). Additionally, once per long rest, when you would be **reduced to 0 HP**, the Symbiont's emergency repair cascade activates — you instead drop to **1 HP**. This does not trigger against instant-death effects.

*Requires Kethara Collective faction standing for the Biotech Symbiont. Both are Organ.*

> *"Kethara biology evolved to recycle everything — including the Repurposer's processed organic matter. The symbiont and the system speak the same language."*

---

### Synergy Quick Reference

| Synergy Name | Components | Tier | Effect Summary |
|--------------|-----------|------|----------------|
| Precision Anchor | Targeting Computer + Smart Link | T1+T2 | 1/SR reroll missed ranged attack with advantage |
| Adrenaline Override | Metabolic Stabilizer + Adrenaline Regulator | T1+T2 | Adrenaline surge also clears 1 Exhaustion; +2 extends to saves |
| Enhanced Optics | Low-Light Optics + Thermal Optics | T1+T2 | See through total darkness; thermal range doubles to 60 ft |
| Lightning Rod | Reflex Booster + Wired Reflexes | T1+T2 | Can't be surprised; WR extra action usable in any of first 3 rounds |
| Overclock Loop | Wired Reflexes + Sandevistan | T2+T3 | Sandevistan activation doesn't consume WR extra action |
| Chrome Fortress | Subdermal Armor + Hydraulic Frame | T2+T3 | DR 1 vs all physical damage |
| Dead Nerves | Adrenaline Regulator + Berserker Override | T2+T3 | While bloodied: 1 failed Fortitude save vs pain/stun/incapacitation auto-succeeds |
| Nerve Network | Neural Processor + Ballistic Coprocessor | T2+T3 | Coprocessor reroll extends to melee attacks |
| Neural Cage | Neural Firewall + Corporate Override Chip | T2+T3 | Advantage vs hacking saves; 1/SR scramble attacker Technology check |
| Phase Ghost | Phase Shift Module + Adaptive Camouflage Skin | T3+T4 | Activating either also activates the other (free action) |
| Predator's Eye | Threat Analysis Optics + Predictive Combat Matrix | T3+T4 | PCM auto-succeeds on first Threat Analysis target; learn attack target |
| Hardened Shell | Kinetic Damping Weave + Titanium Endoskeleton | T3+T4 | DR 2 vs all physical; immunity to prone (magical and non-magical) |
| All-Seeing | Tactical HUD + Omnispectral Array | T4+T5 | Designation also grants +1 saves; Truesight extends to 120 ft |
| Symbiotic Enhancement | Biotech Symbiont + Biological Repurposer | T3+T5 | SR healing +2d6; 1/LR drop to 1 HP instead of 0 |

---

### Augmentation Stacking Rule

Installing multiple augments in the same **body location** increases total Humanity cost:
- 1st augment in location: Base cost
- 2nd augment in location: Base cost + 1
- 3rd augment in location: Base cost + 2

Each body location has a maximum number of augments (see Body Location System table above). You cannot exceed the maximum for a location.

**Example:** Installing Reflex Booster (Neural, 1 HC), then Wired Reflexes (Neural, 2 HC), then Sandevistan (Neural, 3 HC):
- Total cost: 1 + (2+1) + (3+2) = **9 Humanity**
- This leaves only 1 Humanity remaining (from 10). The character is almost entirely chrome at this point.

**Faction augments with reduced Humanity cost:** Some faction augments have reduced Humanity costs (e.g., Resonance Dampener is HC 1 instead of HC 3, Biotech Symbiont is HC 2 instead of HC 3). These reduced costs still apply to stacking — a Resonance Dampener installed as the 2nd Organ augment costs 1+1 = 2 HC total. This makes faction augments attractive for characters trying to preserve Humanity.

### Nanotech Augmentations

**Nanotech** augmentations (Nano-Coagulants, Nano-Repair Swarm) use microscopic machines rather than mechanical implants. They occupy standard body locations and follow all normal augmentation rules (Humanity cost, stacking, installation DC). The distinction is narrative, not mechanical — nanotech integrates with biological processes rather than replacing them. Nanotech augmentations are visible as a faint silver shimmer under the skin, most noticeable when the nanites are active (healing wounds, absorbing damage).

### Augmentation DV Cap

The total Defense Value bonus from augmentations cannot exceed **+3**. If you have multiple augmentations that grant DV bonuses, they stack until the +3 cap is reached. Additional DV bonuses beyond +3 from augmentations are lost. This prevents passive augmentation stacking from exceeding the bounded accuracy framework.

### Augmentations and Mutations

Augmentations and mutations that both affect Defense Value use whichever is higher — they do not stack. For example, a Mutant with Carapace (DV 13 + END) and Subdermal Armor (+2 DV over base armor) uses the Carapace DV if higher. This prevents biological and technological armor from compounding beyond intended limits.

### Augment Removal

- Removing an augment does **NOT** restore Humanity — the body is permanently altered
- Can replace with a different augment at the same location for **half the credit cost** of the new augment
- Faction augments can only be maintained by their originating faction — if you lose faction standing, maintenance costs double and the augment cannot be replaced if removed

### Augmentation Installation

- Requires a medical facility or qualified technician
- Installation DC: **Technology DC 15** (Tier 1-3), **DC 18** (Tier 4), **DC 20** (Tier 5)
- Installation time: **1 hour** per tier of the augmentation
- Risk: On a failed installation check, the augmentation is damaged (50% cost to repair) and the patient takes **2d6 damage per tier** of the augment
- **Humanity Cost:** Tier 1 = 1 HC, Tier 2 = 2 HC, Tier 3 = 3 HC, Tier 4 = 4 HC, Tier 5 = 5 HC (unless faction-modified)
- **Augmentation Limit:** Maximum number of augmentations = **5 + END modifier** (minimum 3)
- **Removal:** Requires the same facility and check. Removed augmentations can be reinstalled. Humanity is NOT restored upon removal.

### Augment Build Paths

*These are suggested build paths, not requirements. They illustrate how augmentation choices create meaningful character identity.*

**The Chrome Soldier** (Combat Focus)
Reflex Booster → Targeting Computer → Wired Reflexes → Titanium Endoskeleton → Integrated Weapons Platform
- HC Total: 1 + 1 + 2 + 4 + 5 = 13 (exceeds 10; needs Synthetic species or Technician's Augment Specialist)
- Theme: Walking tank, immune to disarming, fast reflexes, heavy frame

**The Ghost** (Stealth Focus)
Low-Light Optics → Phase Shift Module → Adaptive Camouflage Skin → Neural Firewall
- HC Total: 1 + 3 + 4 + 3 = 11 (exceeds 10 by 1; one augment needs faction HC reduction or Augment Specialist)
- Theme: Invisible infiltrator, resistant to detection and mental manipulation

**The Sensor Specialist** (Intelligence Focus)
Ocular max 2 — choose your pair from the Ocular line. Recommended combinations:
- Threat Analysis Optics + Tactical HUD: HC 3 + (4+1) = **8 HC**
- Threat Analysis Optics + Omnispectral Array: HC 3 + (5+1) = **9 HC**
- Tactical HUD + Omnispectral Array: HC 4 + (5+1) = **10 HC**
- Theme: Battlefield awareness, target intelligence, magical detection

**The Field Operative** (Utility Focus)
External max 3 — choose 3 from the External line. Recommended combinations:
- Communications Suite + Smart Link + Drone Tether: HC 1 + (2+1) + (3+2) = **9 HC**
- Smart Link + Drone Tether + Integrated Field Kit: HC 2 + (3+1) + (4+2) = **12 HC** (needs Augment Specialist or Synthetic species)
- Communications Suite + Smart Link + Integrated Field Kit: HC 1 + (2+1) + (4+2) = **10 HC**
- Theme: Equipment integration, drone support, self-sufficiency

**The Nano-Enhanced Survivor** (Resilience Focus)
Nano-Coagulants → Nano-Repair Swarm → Nanite Regeneration System
- HC Total: 2 + (3+1) + (4+2) = 12 (exceeds 10 by 2; needs Synthetic species or Augment Specialist)
- Theme: Self-healing through nanotech, extremely hard to kill

**The Balanced Operative** (Moderate Chrome)
Reflex Booster → Subdermal Armor → Toxin Filters → Thermal Optics
- HC Total: 1 + 2 + 2 + 2 = 7 (Humanity 3 — still functional socially but noticeably augmented)
- Theme: Solid all-rounder who hasn't committed too deep

**The Faction Loyalist** (Faction Chrome)
Community Link → Resonance Dampener → Biotech Symbiont
- HC Total: 2 + 1 + 2 = 5 (Humanity 5 — minimal social penalties, multiple faction ties)
- Theme: Diplomatic character who uses faction connections for efficient augmentation

## Ammunition and Magazines

- Pistols: 6-round magazine
- Rifles: 10-round magazine
- Shotguns: 4-round magazine
- SMGs: 20-round magazine
- Heavy weapons: varies by weapon

Reload (1 action) replaces the entire magazine. **Spare ammunition is tracked as full magazines** — don't count individual loose rounds in your pack; buy and carry magazines. Starting ammunition: 3 full magazines for each firearm you own. In combat, individual shots matter: each attack expends 1 round from the current magazine (see the **Magazine (X)** weapon property for capacity). When your current magazine runs empty, reload using 1 action. Special combat actions that expend extra shots (such as **Suppressive Fire** and **Auto-fire**) specify their exact round cost — see **Combat — Maneuvers**.

**Ammunition Costs:**
- Standard Rounds (3 magazines): 10 credits
- Armor-Piercing (1 magazine): 15 credits (reduces target's armor bonus to DV by 3, min DV 10)
- Specialty Ammo (1 magazine): 25-50 credits (elemental damage, tracer, etc.)

## Stims (Medical Consumables)

**Use:** 1 action. Range: Self or adjacent ally.

| Stim | Effect | Cost |
|------|--------|------|
| Tier 1 Basic Stim | Restore 1d8+2 HP | 25 credits |
| Tier 2 Combat Stim | Restore 2d8+2 HP | 75 credits |
| Tier 3 Advanced Stim | Restore 3d8+2 HP + remove 1 condition | 200 credits |

**Stim Tolerance:** A character can benefit from a maximum of **2 stims per 24-hour period**. The body builds tolerance; a 3rd stim in the same period has no healing effect and the character must make a Fortitude save (DC 15) or gain 1 level of Exhaustion from chemical overload. Medics with the Pharmacology skill tree can increase this limit by 1 (to 3 stims per 24 hours) at Tier 2.

**Stim Use in Combat:** Using a stim requires 1 action. You can use a stim on yourself or on an adjacent willing creature. The target regains HP immediately. Stims do not provoke opportunity attacks.

### Specialty Stims

Specialty stims provide short-term tactical advantages with corresponding drawbacks. Unlike standard stims (which restore HP), specialty stims modify your capabilities — speed, resilience, senses, or reflexes.

**Use:** 1 action. Range: Self only (specialty stims require personal calibration — you cannot inject someone else with a Reflex Stim).

**Stacking Rules:**
- Only **1 specialty stim** can be active at a time. Using a second specialty stim ends the first immediately (no refund).
- Specialty stims count toward **Stim Tolerance** (2 per 24 hours). A healing stim and a specialty stim both consume daily uses.
- Specialty stim effects **do not stack** with serum effects of the same type. If a specialty stim and a serum would modify the same stat, use the higher bonus (they do not add together).

| Stim | Tier | Effect | Duration | Drawback | Cost |
|------|------|--------|----------|----------|------|
| **Reflex Stim** | 2 | +2 Initiative (if used before combat), +5 ft movement speed | 10 minutes | -1 to Fortitude saves (jittery nerves) | 60 cr |
| **Ironhide Stim** | 2 | +2 DV | 10 minutes | -5 ft movement speed (muscles stiffen) | 75 cr |
| **Stabilizer Stim** | 2 | Advantage on concentration checks | 1 hour | Disadvantage on Perception checks (tunnel vision) | 60 cr |
| **Nighteye Stim** | 2 | Darkvision 60 ft (or extend existing darkvision by 30 ft) | 1 hour | Disadvantage on saves vs. bright light and flash effects (Flashbang, Flare, etc.) | 50 cr |
| **Adrenaline Spike** | 3 | Gain 1 additional reaction this round | Immediate (1 round) | 1 level of Exhaustion after combat ends | 150 cr |
| **Trauma Override** | 3 | Ignore the Wounded condition | 1 hour | When effect ends, take 2d6 damage (deferred pain). This damage cannot be reduced or prevented. | 125 cr |
| **Neural Accelerant** | 2 | Your next skill check has advantage (declare before rolling) | Until used or 10 minutes (whichever comes first) | Your next skill check after the boosted one has disadvantage (cognitive crash) | 80 cr |
| **Marrow Stim** | 3 | Resistance to poison damage; advantage on saves vs. poison and disease | 1 hour | -2 to attack rolls (immune system prioritized over motor function) | 100 cr |

#### Specialty Stim Notes

- **Reflex Stim:** The Initiative bonus only applies if the stim is active when initiative is rolled. Using it mid-combat grants only the speed bonus.
- **Ironhide Stim:** The +2 DV is an equipment bonus. See **Equipment Bonus Stacking** for how this interacts with augmentation and modification DV bonuses. It stacks with armor DV normally.
- **Adrenaline Spike:** The extra reaction is gained immediately upon injection. You do not choose when — it is available this round only. The Exhaustion is unavoidable and occurs when combat ends, not when the round ends.
- **Trauma Override:** If you are reduced to 0 HP while Trauma Override is active, the effect ends immediately and you take the 2d6 deferred damage. This can cause death saves to fail. No other consumable in the chems table provides the same Wounded-ignoring effect — Trauma Override is the only stim-slot option for staying functional past 0 HP.

## Grenades & Explosives

Grenades are among the most feared tools in the wasteland, capable of clearing rooms and breaking fortified positions in seconds. From crude homemade firebombs to pre-war military ordnance, explosives are a universal equalizer.

**Throw Range:** 30/60 ft. **Save:** Creatures in the area make a Reflex save (DC = 8 + proficiency + AGI modifier) for half damage. Effects that do not deal damage still allow a save to negate.

| Name | Tier | Damage | Area | Effect | Cost |
|------|------|--------|------|--------|------|
| Molotov Cocktail | 1 | 1d6 fire | 5 ft radius | — | 25 cr |
| Pipe Bomb | 1 | 2d6 | 10 ft radius | — | 50 cr |
| Frag Grenade | 2 | 3d6 | 15 ft radius | — | 75 cr |
| Flashbang | 2 | 0 | 15 ft radius | Blinded + deafened 1 round | 50 cr |
| Smoke Grenade | 2 | 0 | 20 ft radius | Heavy obscurement 1 minute | 40 cr |
| Anti-Personnel Mine | 2 | 3d6 | 10 ft radius | Triggered by proximity | 100 cr |
| Incendiary Grenade | 3 | 2d6 fire/round | 10 ft radius | Burns 3 rounds | 150 cr |
| EMP Grenade | 3 | 3d6 vs electronics | 15 ft radius | Disables tech 1 minute | 200 cr |
| Gas Grenade | 3 | 1d6 poison/round | 20 ft radius | Requires gas mask, lasts 3 rounds | 175 cr |
| Cryo Grenade | 3 | 2d6 cold | 10 ft radius | Speed halved 1 round | 150 cr |
| C4 Charge | 3 | 6d6 | 20 ft radius | Breaching, requires detonator | 250 cr |
| Plasma Grenade | 4 | 4d6 energy | 15 ft radius | — | 400 cr |

**C4 and Mines:** C4 charges and anti-personnel mines function as placed explosives rather than thrown weapons. C4 requires a detonator (remote or timed) and is primarily used for breaching doors, walls, and structural demolition. Anti-personnel mines are set as traps and trigger when a creature enters their space; a Perception check (DC 15) detects a placed mine, and a Technology check (DC 15) disarms it.

## Chems & Drugs

The wasteland runs on chems. From battlefield stimulants to back-alley concoctions, these substances offer powerful short-term benefits at a potentially devastating long-term cost.

| Name | Tier | Effect | Cost |
|------|------|--------|------|
| Painkiller | 1 | Resist 3 damage per hit for 1 hour, -2 Perception | 40 cr |
| Sedative | 1 | Target falls unconscious for 10 minutes; Fortitude DC 15 negates. **Administration:** Injection (target must be grappled, restrained, or unconscious — 1 action to inject), ingestion (slipped into food/drink — Sleight of Hand vs target's Perception to administer unnoticed), or dart delivery (via Dart Rifle or other weapon with the Delivers Payload property). Taking any damage wakes the target. | 30 cr |
| Adrenaline Shot | 2 | +2 attack and damage for 3 rounds, then 1 Exhaustion | 100 cr |
| Bulk | 2 | +2 MIG for 10 minutes, Fortitude DC 15 or addicted | 100 cr |
| Focus | 2 | +2 INT for 10 minutes, Fortitude DC 15 or addicted | 100 cr |
| Antidote | 2 | End one poison or toxin effect | 50 cr |
| RadBlock | 2 | Advantage on radiation saves for 8 hours | 75 cr |
| Rush | 2 | +1 action for 1 round, Fortitude DC 15 or addicted | 150 cr |
| RadPurge | 2 | Remove 1 level of Irradiated | 100 cr |
| Anti-Rad Serum | 3 | Remove up to 2 levels of Irradiated | 350 cr |
| Detox | 3 | Cure one addiction | 500 cr |

### Addiction Rules

When a chem specifies "Fortitude DC X or addicted," the character must make a Fortitude save after the chem's effects end. On a failure, the character gains the **Addicted** condition for that substance (see [Conditions & Status Effects](conditions.md)).

### Tactical Consumables

Field-improvised tools for creative problem-solving. These are not weapons — they change the battlefield.

| Item | Tier | Use Action | Effect | Cost |
|------|------|------------|--------|------|
| **Chem Light Flare** | 1 | 1 action (throw 60 ft) | Bright light 30 ft, dim light 60 ft for 1 hour. Reveals **invisible** creatures in bright light area (they become visible while in the area). Can be attached to surfaces. | 10 cr |
| **Adhesive Bomb** | 2 | 1 action (throw 30 ft) | 10-ft radius becomes **difficult terrain** for 1 minute. Creatures in the area when deployed must succeed on a **Reflex save (DC 14)** or become **Restrained** until freed (MIG DC 14 as 1 action, or the adhesive can be dissolved with any acid damage). | 75 cr |
| **Signal Scrambler** | 2 | 1 action (place) | 30-ft radius. All electronic communications (radio, comms, neural link signals) within the area are jammed for 10 minutes. Creatures in the area cannot send or receive electronic messages, and Hacking checks targeting networks within the area suffer disadvantage. Does not affect psionic communication. | 100 cr |
| **Shock Mine** | 2 | 1 action (place) | Triggered by the first creature that enters its space. Deals **2d6 lightning damage** (Reflex DC 14 for half) and the target must succeed on a **Fortitude save (DC 14)** or be **Stunned** until the end of its next turn. Perception DC 14 to detect, Technology DC 14 to disarm. Single use. | 90 cr |

#### Tactical Consumable Notes

- **Chem Light Flare:** Unlike a torch, a flare can be thrown and doesn't require a hand to hold. Useful for scouting dark areas from a distance or marking locations. The invisibility-revealing effect only works while the creature remains in the bright light area — it becomes invisible again when it leaves.
- **Adhesive Bomb:** The adhesive is mundane, not magical. It can be cleaned during a short rest. Creatures with Escape Artist or similar abilities can substitute a DEX check for the MIG check to break free.
- **Signal Scrambler:** Does not block the Psion's Psychic Network, the Channeler's Speak with Spirits ritual, or the Oracle Channeler's Mind's Reach telepathy — only electronic signals. Placing a Signal Scrambler before a breach prevents defenders from calling reinforcements.
- **Shock Mine:** Functions like an Anti-Personnel Mine but deals lightning damage and inflicts Stunned instead of raw physical damage. Creatures immune to lightning damage are immune to the Stunned effect as well.

---

#### Tactical Utility Consumables (Expansion)

> *Bullets solve one kind of problem. The smart ones carry caltrops, smoke, and acid flasks — because the wasteland has a lot of problems, and most of them don't care how good your aim is.*

---

##### Tier 1 — Scavenged / Improvised (5–15 cr)

**Caltrops (Bag)**
- **Cost:** 5 cr | **Weight:** 1 lb | **Action:** 1 action (scatter)
- Covers one **5-foot square**. Any creature entering the square must make a **Reflex save DC 12** or take **1d4 piercing damage** and have its speed **halved** until it spends 1 action removing the caltrop from its foot. A creature that is aware of the caltrops can avoid them by spending **5 feet of extra movement** per 5-foot square (treating it as difficult terrain).
- Caltrops can be recovered after the encounter (Survival DC 10, 1 minute).

**Tripwire Kit**
- **Cost:** 10 cr | **Weight:** 0.5 lb | **Action:** 1 minute (setup)
- Stretches across an opening up to **10 feet wide**. The first creature to move through the tripwire must make a **Reflex save DC 13** or fall **Prone**. The tripwire is destroyed after triggering (single-use).
- **Detection:** Perception DC 14 to spot. Stealth DC 12 to set without being noticed.

**Oil Flask**
- **Cost:** 5 cr | **Weight:** 1 lb | **Action:** 1 action (throw, 20/60 ft)
- Covers one **5-foot square** for **1 minute**. The square becomes **difficult terrain** (slippery). A creature that enters the square or starts its turn there must make a **Reflex save DC 12** or fall **Prone**.
- **Ignitable:** If a fire source contacts the oiled square, it ignites and burns for **1d6 fire damage** per round for 2 rounds (see **Conditions: Burning** for interactions). Creatures in the square when it ignites or entering it while burning take the damage.

**Signal Flare (Tactical)**
- **Cost:** 8 cr | **Weight:** 0.5 lb | **Action:** 1 action (fire upward)
- Visible for **1 mile** in clear conditions (500 feet in rain, fog, or darkness with heavy cover). Illuminates a **30-foot radius** for **1 minute**. Unlike basic Signal Flares (personal illumination, see Adventuring Gear), tactical signal flares are designed for long-range communication and area illumination from above.
- Can be fired into a 5-foot square as a makeshift attack: +0 to hit, 1d4 fire damage, target must make Reflex DC 10 or gain the **Burning** condition (Fortitude DC 10 to end on subsequent turns; see **Conditions: Burning**).

**Makeshift Barricade**
- **Cost:** 10 cr (or free from scrap, Survival DC 12) | **Weight:** 10 lb | **Action:** 1 minute (setup)
- Provides **partial cover** (+2 DV, +2 to Reflex saves vs. area effects) in one direction. The barricade has **15 HP** and **DV 10** — it can be destroyed. Occupies one **5-foot square**.

---

##### Tier 2 — Pre-Fall Salvage (25–75 cr)

**Smoke Pellet**
- **Cost:** 25 cr | **Weight:** 0.1 lb | **Action:** 1 action (throw, 30/90 ft)
- Creates a **10-foot-radius** area of **Heavily Obscured** conditions for **1 round** (until the start of your next turn). Creatures inside are **Heavily Obscured** (attacks in, out, or through the smoke have disadvantage; Perception checks relying on sight automatically fail).
- Smaller, cheaper, and shorter-duration than Smoke Grenade (20 ft, 1 minute). Use for quick escapes and sight-line breaks, not sustained concealment.

**Acid Flask**
- **Cost:** 50 cr | **Weight:** 1 lb | **Action:** 1 action (throw, 20/60 ft)
- Ranged attack against one target. On hit: **2d6 acid damage** immediately, plus **1d6 acid damage** at the start of the target's next turn. On miss: half damage (1d6, no save), no continuing damage.
- **Object interaction:** Automatically deals 10 damage to non-magical locks, hinges, or thin metal barriers. A T2 lock is destroyed; T3 lock is weakened (reduce Sleight of Hand [Lockpicking] DC by 4).

**Tracking Beacon**
- **Cost:** 40 cr | **Weight:** 0.1 lb | **Action:** 1 action (place) or as part of a Sleight of Hand check
- Attaches to a creature, vehicle, or object. Detectable within **500 feet** for **24 hours** using any scanner, hacking terminal, or Technology check DC 10. Placing unnoticed requires a **Sleight of Hand check** contested by the target's **Perception**.
- **Detection/Removal:** Technology DC 14 to detect on your person. 1 action to remove once found.

**Sonic Emitter**
- **Cost:** 60 cr | **Weight:** 1 lb | **Action:** 1 action (activate)
- All creatures within **15 feet** must make a **Fortitude save DC 14** or become **Deafened** for 1 round. On failure by 5+, also **Dazed** for 1 round.
- Single-use. Non-lethal crowd control — no damage. Effective against creatures relying on auditory perception. Creatures that are already Deafened are immune.
- **Spellcaster interaction:** A Deafened creature cannot satisfy verbal spell components (if applicable to the spell being cast).

**Thermal Decoy**
- **Cost:** 50 cr | **Weight:** 0.5 lb | **Action:** 1 action (deploy)
- Heat-emitting device that mimics a humanoid thermal signature. Fools **thermal optics and heat-seeking targeting systems** for **1 minute**. Place in any 5-foot square within 5 feet of you.
- Creatures using thermal detection must make an **Investigation DC 14** to identify the decoy. Until identified, the decoy is treated as a valid target for heat-seeking attacks.

---

##### Tier 3 — Military / Rare (100–250 cr)

**Nanite Lockpick**
- **Cost:** 200 cr | **Weight:** — | **Action:** 1 action (apply to lock)
- Single-use canister of nanoscale manipulators. **Automatically succeeds** on one **Sleight of Hand (Lockpicking) check** against a lock of **DC 20 or lower**. Against DC 21+, grants **advantage** on the Sleight of Hand (Lockpicking) check instead. The nanites dissolve after one use.
- Does not work on biometric locks, magical seals, or AI-controlled access points — only mechanical and electronic locks.

**Portable Cover Generator**
- **Cost:** 250 cr | **Weight:** 3 lb | **Action:** 1 action (deploy)
- Creates a translucent **5-foot-wide energy barrier** at a point within **10 feet** of you. The barrier provides **heavy cover** (+5 DV, +5 to Reflex saves vs. area effects) to creatures behind it. The barrier lasts **1 minute** or until it absorbs **20 damage** (whichever comes first). Single-use — the power cell is expended.
- The barrier blocks line of sight for effects that require it but does not block movement (creatures can walk through it, losing cover).

**Neural Scrambler Dart**
- **Cost:** 150 cr | **Weight:** 0.1 lb | **Action:** 1 action (ranged attack, 30/90 ft)
- **Ranged attack** against one creature (1d20 + AGI modifier + proficiency bonus vs. target's DV). On hit, the target must make a **Will save DC 15** or become **Confused** for 1 round (see **Conditions: Confused**). On a save, the target is **Dazed** for 1 round instead. Single-use. Silent delivery — a dart-delivery device, not a blowpipe — can be fired from a concealed launcher.
- Creatures immune to the Confused condition take the Dazed effect on a failed save instead.

---

##### Tactical Utility Consumable Summary

| Item | Tier | Cost | Action | Primary Effect |
|------|------|------|--------|----------------|
| Caltrops | T1 | 5 cr | 1 action | Piercing damage + speed halved |
| Tripwire Kit | T1 | 10 cr | 1 min | Prone on failed save |
| Oil Flask | T1 | 5 cr | 1 action | Difficult terrain + ignitable |
| Signal Flare (Tactical) | T1 | 8 cr | 1 action | 1-mile visibility, 30-ft light |
| Makeshift Barricade | T1 | 10 cr | 1 min | Partial cover, 15 HP |
| Smoke Pellet | T2 | 25 cr | 1 action | 10-ft Heavily Obscured, 1 round |
| Acid Flask | T2 | 50 cr | 1 action | 2d6+1d6 acid, object destruction |
| Tracking Beacon | T2 | 40 cr | 1 action | 500-ft detection, 24 hours |
| Sonic Emitter | T2 | 60 cr | 1 action | 15-ft Deafened, non-lethal |
| Thermal Decoy | T2 | 50 cr | 1 action | Fools thermal sensors, 1 min |
| Nanite Lockpick | T3 | 200 cr | 1 action | Auto-succeed lock DC 20 or lower |
| Portable Cover Generator | T3 | 250 cr | 1 action | Heavy cover, 20 HP barrier |
| Neural Scrambler Dart | T3 | 150 cr | 1 action | Confused/Dazed 1 round, silent |

---

## Adventuring Gear

Every wastelander needs the basics. These common items can be found in most settlement markets and are essential for surviving between the ruins.

| Name | Cost |
|------|------|
| Backpack | 15 cr |
| Rope (50 ft) | 10 cr |
| Grappling Hook | 25 cr |
| Bedroll | 10 cr |
| Rations (1 week) | 20 cr |
| Water Canteen | 5 cr |
| Flashlight | 10 cr |
| Headlamp | 15 cr |
| Fire Starter Kit | 5 cr |
| First Aid Kit | 20 cr |
| Multi-Tool | 15 cr |
| Binoculars | 30 cr |
| Compass | 10 cr |
| Crowbar | 15 cr |
| Lockpick Set | 30 cr |
| Electronic Lockpick | 150 cr |
| Handcuffs | 15 cr |
| Zip Ties (10) | 5 cr |
| Duct Tape | 5 cr |
| Wire Spool (50 ft) | 10 cr |
| Tarp/Shelter Sheet | 10 cr |
| Cooking Kit | 15 cr |
| Signal Flare (3) | 10 cr |
| Mirror | 5 cr |
| Chalk (10 pieces) | 2 cr |
| Whistle | 3 cr |
| Sewing Kit | 5 cr |
| Shovel | 10 cr |
| Bolt Cutters | 20 cr |
| Climbing Gear | 50 cr |
| Tent (2-person) | 30 cr |
| Fishing Gear | 10 cr |
| Trap Kit | 25 cr |
| Camouflage Net | 20 cr |
| Notebook and Pen | 5 cr |
| Playing Cards | 3 cr |

## Survival & Environmental Gear

The wasteland is hostile in ways that go beyond raiders and mutants. Radiation storms, toxic atmospheres, and contaminated water kill more survivors than bullets do. This specialized equipment keeps you alive when the environment itself is trying to kill you.

| Name | Cost | Special |
|------|------|---------|
| Geiger Counter | 75 cr | — |
| Gas Mask | 50 cr | — |
| Spare Filters (3) | 15 cr | — |
| Water Purification Tablets (20) | 25 cr | — |
| Portable Water Purifier | 150 cr | — |
| Hazmat Suit | 200 cr | Resist radiation, -5 ft speed |
| Salvage Tools | 30 cr | — |
| Radiation-Lined Clothing | 100 cr | Advantage on mild radiation saves |
| NBC Detection Kit | 100 cr | — |
| Decontamination Kit | 75 cr | — |
| Solar Charger | 100 cr | — |
| Portable Generator | 250 cr | — |
| Fuel Can (1 gallon) | 20 cr | — |

## Tech Equipment

Most pre-war technology is broken, buried, or jealously hoarded. What remains has been scavenged, repaired, and jury-rigged into working order by wasteland technicians. High-end tech is rare and commands a premium.

| Name | Details | Cost |
|------|---------|------|
| Personal Comm Radio | Range: 5 miles | 30 cr |
| Long-Range Radio | Range: 50 miles | 150 cr |
| Datapad | General-purpose computer terminal | 75 cr |
| Hacking Toolkit | Required for Hacking skill checks | 200 cr |
| Handheld Scanner | Detect energy, life signs, materials | 150 cr |
| Medscanner | Diagnose injuries and conditions | 200 cr |
| Recon Drone | Aerial surveillance, remote-controlled | 500 cr |
| Utility Drone | Carries items, assists with tasks | 350 cr |
| Motion Sensor | Detects movement within 60 ft | 75 cr |
| Signal Jammer | Blocks radio and electronic signals | 150 cr |
| Tracking Beacon | GPS-like signal for locating items or people | 25 cr |
| Holographic Projector | Creates illusory images, distractions | 300 cr |
| Voice Modulator | Disguise or amplify voice | 100 cr |
| Recording Device | Audio and video capture | 50 cr |
| EMP Device (single use) | Disables electronics in 15 ft radius | 200 cr |
| Power Cell | Standard energy source for tech | 50 cr |
| Power Cell (Military Grade) | Extended capacity, required for power armor | 150 cr |

## Crafting

![A reptilian merchant displays salvaged wares, ready to barter for survival essentials](/images/illustrations/reptilian-merchant.png)

Characters with proficiency in the **Science** or **Technology** skill can craft and modify equipment during downtime. For the complete crafting system — including detailed modification lists, enchanting, formulas, magical item crafting, and crafting expertise — see the [Crafting](crafting.md) chapter.

### Quick Crafting Reference

| Item Tier | Technology DC | Time Required | Material Cost |
|-----------|--------------|---------------|---------------|
| Tier 1 | DC 10 | 1 hour | 5 credits |
| Tier 2 | DC 13 | 4 hours | 25 credits |
| Tier 3 | DC 16 | 8 hours (1 day) | 100 credits |
| Tier 4 | DC 19 | 3 days | 500 credits |
| Tier 5+ | DC 22+ | 1 week+ | 2,000+ credits |

- You must have appropriate tools (basic toolkit for Tier 1-2, workshop for Tier 3-4, laboratory for Tier 5+)
- Crafting time can be split across multiple sessions
- Consumables (ammunition, stims) cost half the listed purchase cost
- Tier 4+ items require a formula or blueprint (see [Crafting](crafting.md))

See the [Crafting](crafting.md) chapter for modification slots, weapon/armor mods, enchanting sigils, and masterwork quality. See [Exploration & Survival](exploration.md) for field repairs.

## Durability and Maintenance (Optional)

Weapons and armor wear down over time.

### Durability Points (DP)

Each weapon/armor has DP equal to its **Tier x 10**.
- Example: Tier 3 rifle has 30 DP

### Losing Durability

- **Critical Miss (nat 1) with weapon:** Lose 1d4 DP
- **Critical Hit against you:** Armor loses 1d4 DP
- **Environmental damage:** GM discretion (acid, extreme heat, etc.)

### Broken Equipment

At 0 DP, weapon/armor is broken (unusable). Requires repair.

### Repair

- **Field Repair:** 1 hour, Technology check DC 15, restore 1d6 DP (once per item per rest)
- **Workshop Repair:** 1 day, Technology check DC 10, restore full DP, costs 10% of item's market value in credits
- **Masterwork/Enchanted Items:** Harder to repair (DC +5)

### Simplified Durability (Abstract)

- Gear doesn't break unless narratively appropriate
- Critical failures = "weapon jammed" or "armor dented" (disadvantage next turn) rather than permanent damage

## Special Ammunition Crafting

Technicians and skilled craftspeople can create custom ammo.

### Crafting Requirements

- **Time:** 30 minutes per magazine (10 rounds)
- **Skill:** Technology DC 15 (DC 20 for advanced ammo)
- **Cost:** Varies by ammo type
- **Tools:** Gunsmithing tools or chemistry set

### Special Ammo Types

**Armor-Piercing (AP) Rounds**
- **Cost:** 15 credits per 20 rounds
- **Effect:** Reduce target's armor bonus to DV by 3 (minimum DV 10). Only reduces the armor component of DV, not AGI or other bonuses.
- **Crafting DC:** 15

**Hollow-Point Rounds**
- **Cost:** 10 credits per 20 rounds
- **Effect:** +1d6 damage vs unarmored targets (DV 15 or lower), -2 damage vs armored (DV 16+)
- **Crafting DC:** 12

**Incendiary Rounds**
- **Cost:** 25 credits per 10 rounds
- **Effect:** +1d4 fire damage, ignites flammable objects, target makes Reflex save DC 13 or catches fire (1d6 fire damage per round until extinguished)
- **Crafting DC:** 18

**Shock Rounds** (Energy weapons)
- **Cost:** 50 credits per 10 shots
- **Effect:** Target makes END save DC 15 or stunned until end of their next turn
- **Crafting DC:** 20

**Tranquilizer Darts**
- **Cost:** 30 credits per 5 darts
- **Effect:** Target makes Fortitude save DC 15 or falls unconscious for 1 minute (awakens if damaged). Larger creatures (size Large+) have advantage on the save.
- **Crafting DC:** 18
- **Note:** Only works on living creatures, ineffective vs undead/constructs

**Explosive Rounds**
- **Cost:** 100 credits per 5 rounds
- **Effect:** On hit, explodes in 5-foot radius. All creatures in area take 2d6 fire damage (Reflex save DC 15 half). Includes original target.
- **Crafting DC:** 22

## Named & Legendary Items

The Wasteland holds treasures that transcend their material components — weapons with histories, armor forged in legendary workshops, and artifacts that defy easy categorization. Named items are not mass-produced. Each is unique, tied to a faction, a person, or a moment in post-Fall history. They cannot be purchased on the open market. They are earned, discovered, stolen, or gifted.

### Attunement

Some named items require **attunement** — a process of bonding with the item that takes **1 hour of focused interaction** (meditation, practice, calibration, or simply wearing/carrying the item). A character can be attuned to a maximum of **3 items** simultaneously. Attuning to a 4th item immediately ends attunement with the item of your choice. Attunement ends if the item is more than 100 feet from you for 24 consecutive hours, if you die, or if you spend a short rest focusing on ending the bond. Some items have attunement prerequisites (class, species, or stat requirements).

### Named Weapons

**Rootsinger** (Melee, Tier 4, Kethara Collective)
*A living blade grown from Xylar bioengineered plant matter — it pulses faintly, its edge reforms after every strike, and it feeds on blood. Ambassador Thrix-Kaloss gifted the first Rootsinger to a human defender of Chiraxa as a sign of alliance. The Convergence has offered a king's ransom for one to study. The Kethara have refused every time.*

| Property | Value |
|----------|-------|
| Damage | 1d10 slashing + 1d6 acid |
| Properties | Finesse, requires attunement |
| Weight | 3 lbs |

- On a **critical hit**, the target must make a **Fortitude save (DC 15)** or gain the **Bleeding** condition (1d4/round, 3 rounds). The blade's edge contains digestive enzymes that prevent clotting.
- **Tradeoff — Living Weapon:** Rootsinger requires **daily feeding** — 1 ration of fresh organic matter or 1 HP of blood from the wielder. If unfed for 48 hours, the blade goes dormant (loses acid damage and crit effect until fed). A dormant Rootsinger can be revived by submerging it in organic matter for 1 hour.

**The Consensus** (Pistol, Tier 4, Convergence of the Lit Path)
*A sleek energy sidearm built around a pre-war targeting AI that networks with nearby augmented allies. The Convergence issues these to its elite Illuminators — agents authorized to operate beyond Convergence territory. Each weapon's AI has a name and a personality. They tend to be judgmental.*

| Property | Value |
|----------|-------|
| Damage | 2d6 energy |
| Range | 60/180 |
| Properties | Requires attunement, requires Neural Processor augment |

- On hit, the target is **tagged** for 1 round. All allies with **neural augments** (any type) gain **+1 to attack rolls** against the tagged target.
- **Tradeoff — Neural Dependency:** Requires a Neural Processor augment to fire (Humanity cost from the augment, not the weapon). Without the augment, the weapon's AI refuses to authorize discharge. The AI also provides unsolicited tactical commentary ("Suboptimal target selection. Adjusting.").

**Steelteeth's Verdict** (Heavy Melee, Tier 3, Iron Wolves)
*A massive serrated cleaver forged from the hull plating of a destroyed Convergence war machine. Warchief Kova Steelteeth personally cut the metal and shaped the blade, a ritual he performs for every new warband captain. Carrying a Verdict is both a badge of rank and a death sentence — Iron Wolf captains fight at the front.*

| Property | Value |
|----------|-------|
| Damage | 2d6 slashing |
| Properties | Heavy, two-handed, requires attunement |

- When you **reduce a creature to 0 HP** with this weapon, you gain **temporary HP equal to your proficiency bonus + MIG modifier**. The kill fuels your momentum.
- You have **advantage on Intimidation checks** while wielding this weapon openly. Iron Wolf enemies and tributaries recognize the Verdict on sight.
- **Tradeoff — Mark of the Wolves:** Carrying a Verdict identifies you as an Iron Wolf captain. Hearthstone Compact and Convergence NPCs begin at **Unfriendly** disposition toward you (instead of Neutral) when they recognize the weapon. Concealing it requires a Deception check (DC 15) — it's a large, distinctive weapon.

**Whisper** (Sniper Rifle, Tier 4, Dynaxis Solutions)
*Dynaxis's prototype stealth rifle — suppressed beyond detection, with a scope that feeds telemetry to the shooter's neural HUD. Fewer than twenty exist. Dynaxis issues them to corporate assassins and then denies their existence. Finding one in the wild means someone very expensive failed a very important job.*

| Property | Value |
|----------|-------|
| Damage | 2d10 piercing |
| Range | 200/800 |
| Properties | Heavy, two-handed, requires attunement |

- Attacks made from **Hidden** do not reveal your position (you remain Hidden after firing). This overrides the normal rule that attacking breaks stealth.
- **+2 to attack rolls** when firing at a target beyond 100 feet.
- **Tradeoff — Slow and Specialized:** Whisper requires **2 actions to reload** (the precision ammunition is delicate and custom-machined). It cannot be used for Return Fire reactions or opportunity attacks. It is a first-shot weapon, not a sustained-fire weapon.

**Hearthfire** (Sidearm, Tier 3, Hearthstone Compact)
*A revolver carried by Speaker Okonkwo's personal guards — unremarkable in appearance, devastating in function. Each round is hand-loaded with incendiary compound developed by Greenspire alchemists. The Compact gives these to people it trusts absolutely, which is a very short list.*

| Property | Value |
|----------|-------|
| Damage | 1d8 fire + 1d4 fire (lingering) |
| Range | 40/120 |
| Properties | Light |

- On hit, the target takes an additional **1d4 fire damage** at the start of its next turn (lingering flame). This fire ignites flammable objects on the target.
- Once per short rest, you can fire a **Flare Round** as 1 action: a 20-foot radius centered on a point within range becomes brightly illuminated for 1 minute. All creatures in the radius when the flare lands must make a **Reflex save (DC 13)** or be **Blinded** until the end of their next turn.
- **Tradeoff — Custom Ammunition:** Hearthfire uses custom incendiary rounds that cannot be purchased — they must be crafted (Technology DC 15, 1 hour, 10 credits of materials per 6 rounds) or resupplied by the Hearthstone Compact. Standard ammunition does not produce the incendiary or flare effects (the weapon functions as a normal revolver with standard rounds).

### Named Armor

**Ashwalker's Mantle** (Light Armor, Tier 4, Ashen Veil)
*Woven from thread infused with crystallized magical energy harvested at the edge of the Voidscars, the Ashwalker's Mantle is the signature garment of the Ashen Veil's field researchers — the ones who walk into reality fractures and (usually) walk back out. Archseer Vasquez wore the first one. She says it saved her life eleven times. She stopped counting after that.*

| Property | Value |
|----------|-------|
| DV | 13 + AGI modifier |
| Properties | Light armor, requires attunement |

- **Advantage on saving throws** against magical effects.
- Once per long rest, you can cast one spell of **3rd level or lower** without expending a spell slot (you must know the spell or have it prepared).
- **Tradeoff — Magical Signature:** The Mantle emits a faint magical aura detectable by anyone with magical sensitivity or detection abilities within 60 feet. You have **disadvantage on Stealth checks** in darkness or dim light (the mantle glows faintly). Convergence agents will attempt to confiscate or destroy it on sight.

**Wolfplate** (Heavy Armor, Tier 3, Iron Wolves)
*Salvaged military power armor stripped of its powered systems and reinforced with scrap steel. Iron Wolf heavy infantry wear these into battle like walking walls. The armor is crude, loud, and terrifying — exactly the way the Wolves like it.*

| Property | Value |
|----------|-------|
| DV | 18 (no AGI modifier) |
| Properties | Heavy armor, disadvantage on Stealth, requires MIG 15 |

- When a creature **hits you with a melee attack**, it takes **1d4 bludgeoning damage** from protruding spikes and jagged edges.
- You can use **1 action** to make a **Shield Bash** (1d6 + MIG bludgeoning, the target must Fortitude save DC 13 or be pushed 10 feet).
- **Tradeoff — Crude and Heavy:** Wolfplate cannot be repaired by normal means — only an Iron Wolf armorsmith or a character with the Improvised Engineer talent can repair it. Repair costs are doubled compared to standard heavy armor. Speed reduced by 10 feet (in addition to normal heavy armor penalties).

**Veilshroud** (Medium Armor, Tier 4, Ashen Veil)
*A layered coat of treated leather and arcane mesh that responds to magical threats by hardening on impact. Designed for Veil agents who operate in hostile territory where magic use draws persecution. It doesn't announce itself. That's the point.*

| Property | Value |
|----------|-------|
| DV | 15 + AGI modifier (max +2) |
| Properties | Medium armor, requires attunement |

- When you take **magical damage**, reduce it by your **proficiency bonus** (this applies before resistance).
- Once per short rest, when a spell targets you, you can use your **reaction** to gain **+5 to your saving throw** against that spell.
- **Tradeoff — Arcane Resonance:** After using the reaction bonus, the Veilshroud needs to recharge — for 1 minute afterward, you lose the passive magical damage reduction. Aggressive magic use near you may trigger a sympathetic magical discharge (GM discretion for narrative consequences in magic-sensitive areas).

**Dynaxis Executive Shield** (Shield, Tier 3, Dynaxis Solutions)
*A collapsible energy barrier deployed from a wrist-mounted projector. Standard issue for Dynaxis corporate security details. Looks impressive in boardrooms. Functions even better in firefights.*

| Property | Value |
|----------|-------|
| DV | +2 (shield bonus) |
| Properties | Light, one-handed |

- As a **free action**, you can expand or collapse the shield (it fits under a sleeve when collapsed).
- Once per short rest, activate **Full Barrier** as 1 action: the shield projects a **10-foot wide energy wall** for 1 round. The wall provides **total cover** to creatures behind it and blocks all projectiles and energy attacks. The wall does not block movement.
- **Tradeoff — Power Cell:** The shield requires a power cell that lasts for 24 hours of standby or 10 rounds of active combat use. Replacement cells cost 50 credits. If the cell is depleted, the shield is inert (no DV bonus, no Full Barrier).

---

**Crucible Scout's Mantle** (Medium Armor, Tier 3, Ember Covenant)

*Scald-Mother Yvenne's most devoted scouts carry armor like this — fire-hardened leather layered with ceramic plating salvaged from the Crucible's outer ring. The original Ashwalker was a woman named Dara Kessik, who spent fourteen months mapping the Crucible's inner radiation zones on foot, recording safe paths through the glass flats in a journal she wrote with burned fingers. She died of radiation sickness three days after completing the map. The Ember Covenant named the armor pattern after her. Every set since has been blessed at the Cinderpit before issue.*

| Property | Value |
|----------|-------|
| DV | 14 + AGI modifier (max +2) |
| Properties | Medium armor, requires attunement |
| Weight | 25 lbs |
| Cost | Unavailable (faction issue only) |

- **Fire Resistance 3:** Reduce all fire damage taken by 3 (applied before other resistances or DR).
- **Crucible-Hardened:** You have **advantage on Survival checks** in irradiated or volcanic terrain.
- **Tradeoff — Cold Vulnerability:** You take a **-1 penalty to DV** against attacks that deal cold damage. In temperatures below freezing, you have **disadvantage on Stealth checks** due to cracking and grinding sounds from the ceramic plates.

**Quest Hook:** The Ember Covenant's Crucible maps are incomplete. Scald-Mother Yvenne will commission a new Crucible Scout's Mantle for anyone who completes Dara Kessik's survey of the Crucible's deep interior — a region where the radiation is dense enough to kill in hours without protection. Kessik's original journal is believed to be somewhere in the inner ring, and recovering it would grant the Covenant strategic intelligence worth more than a dozen suits of armor.

---

**Dynaxis Executive Shield Mk. II** (Shield, Tier 4, Dynaxis Solutions)

*The second generation of Dynaxis's "Personal Defense Platform" — an evolution of the Model 5 Executive Shield already in corporate circulation. The Mk. II deploys from a wrist-mounted housing that looks like an oversized smartwatch — understated by design. Dynaxis learned early that their clients prefer protection that doesn't look like protection. The energy barrier it projects is paper-thin, translucent blue, and strong enough to stop a rail round. Where the original Model 5 suffered from power cell depletion, the Mk. II trades battery life for a persistent corporate tracking signature — Dynaxis always knows where their hardware is.*

| Property | Value |
|----------|-------|
| DV | +2 (shield bonus when deployed) |
| Properties | Light, one-handed, requires 1 action to deploy or collapse |
| Weight | 2 lbs (wrist housing) |
| Cost | 5,000 cr (black market; Dynaxis does not sell openly) |

- **Deployable:** Must be **deployed as 1 action** before it provides its DV bonus. Collapsing is also 1 action. While collapsed, it is concealable (Perception DC 16 to detect) and provides no defensive benefit.
- **Barrier Projection (1/SR):** As 1 action, project a **10-foot-wide wall of force** lasting 1 round (until the start of your next turn). The wall provides **total cover** against ranged attacks and spell effects passing through it. Creatures can move through the wall; projectiles and energy cannot. The shield remains on your arm during projection — you retain your +2 DV.
- **Tradeoff — Corporate Signature:** Emits a distinctive Dynaxis energy frequency when deployed. Any character with a scanner or Technology proficiency within 60 feet can identify it as Dynaxis hardware (Technology DC 10). In settlements hostile to corporate interests, deploying the shield marks you as corporate-affiliated. Dynaxis embeds tracking firmware in every unit; Technology DC 18 and 1 hour of work can remove it.

**Quest Hook:** Dynaxis has reported three Executive Shields stolen from a secure transport outside Thornwall Basin. Corporate recovery teams are authorized to pay 2,000 credits per unit returned — or to take them back by force. The thieves are rumored to be Iron Wolf raiders. Recovering them requires either negotiating with the Iron Wolves or a very well-planned heist.

---

**The Iron Carapace** (Heavy Armor, Tier 4, Iron Wolves)

*Warchief Kova Steelteeth's armorers built the first Iron Carapace from the wreckage of seventeen salvaged power armor frames — some pre-Fall military, some Dynaxis corporate security, some of unknown origin pulled from Crucible crash sites. No two sections match. The result is ugly, asymmetric, and nearly indestructible.*

| Property | Value |
|----------|-------|
| DV | 11 |
| Properties | Heavy armor, -10 ft speed, disadvantage on Stealth, requires MIG 16, requires attunement |
| Weight | 65 lbs |
| Cost | Unavailable (must be built or awarded by Iron Wolf armorers) |

- **Patchwork Resilience:** Provides **+1 DV beyond standard Military Exoskeleton** (DV 11 vs DV 10). This is part of the armor's base DV, not a cover bonus — it is not bypassed by the Penetrate property.
- **Dead Man Standing:** When reduced to **0 HP**, the armor's joints lock in place. You remain standing (you do not fall prone) and your body provides **partial cover** (+2 DV) to allies within 5 feet behind you. This effect lasts until you are moved, stabilized, or fail your final death save. You are still unconscious and dying — the armor simply holds your body upright.
- **Tradeoff — Unreliable Systems:** On a **critical hit against you**, roll a d6. On a **1**, a system fails — roll a second d6 to determine which: (1–2) speed reduced by an additional 5 ft until repaired, (3–4) one arm joint seizes — disadvantage on attacks with that arm until repaired, (5–6) visor cracks — disadvantage on Perception checks until repaired. Repairs require 1 hour and a Technology DC 14 check (or an Iron Wolf armorer). Multiple failures stack.

**Quest Hook:** An Iron Wolf warlord named Fenn Ironclaw has put out a call for salvagers: she needs the torso section of a specific pre-Fall power armor model — the Atlas-7 heavy combat frame — to complete a second Iron Carapace. The Atlas-7 wreckage is located in a Convergence-controlled ruin that the Lit Path has designated as a "heritage site." The party must choose between stealing from the Convergence, negotiating a trade, or finding an alternative source.

---

### Named Consumables

These consumables are rare, faction-specific, and in some cases irreplaceable. Unlike standard consumables, named consumables carry history, factional significance, and consequences beyond their immediate mechanical effect.

---

**Halcyon Dose** (Chem, Tier 3, Pre-Fall)

*Nobody knows who manufactured Halcyon. The labels are gone — dissolved by time, radiation, or deliberate removal. What's known is this: a single injection of the pale gold liquid strips every toxin, every infection, every ounce of fatigue from a human body in approximately four seconds. Subjects describe the sensation as "waking up for the first time." The effect lasts exactly 24 hours. Then the bill comes due.*

| Property | Value |
|----------|-------|
| Action | 1 action (inject) |
| Duration | Instantaneous (with delayed effect) |
| Weight | 0.1 lb |
| Cost | Priceless (cannot be purchased; found only in sealed pre-Fall medical caches) |

- **Total Reset:** Upon injection, **remove all conditions** currently affecting the target except Dying. This includes all levels of Exhaustion, Poisoned, Irradiated, Blinded, Deafened, Frightened, and any other active condition. The target's current HP are not restored — Halcyon purges conditions, not wounds.
- **Single Use, Irreplaceable:** Halcyon cannot be crafted, replicated, or synthesized with any known technology or magic. Each dose found is one fewer in existence. The Convergence of the Lit Path has offered standing bounties of 5,000 credits per dose to anyone who can deliver one for study.
- **Tradeoff — The Crash:** Exactly 24 hours after injection, the target gains **1 level of Exhaustion** as the body's suppressed systems reassert themselves. This exhaustion cannot be prevented or reduced by any means. If the target was at Exhaustion 4 or higher when Halcyon was administered, the crash imposes 2 levels of Exhaustion instead of 1.

> **GM Guidance:** Halcyon Doses are campaign-level treasures. Their condition-clearing power can trivialize condition-heavy encounters if the party hoards them. Limit availability to 1–2 per campaign arc. Each dose found should feel significant — a precious resource with real consequences for using or saving it.

**Quest Hook:** A dying settlement leader in Thornwall Basin is suffering from a rare plague that no Medic can cure. Her advisors believe a Halcyon Dose would buy her enough time for a Kethara biosculptor to develop a treatment — but the nearest known cache is in a sealed bunker deep in the Crucible, behind rad-storms and scavenger gangs who've been fighting over the site for months.

---

**Convergence Communion Wafer** (Consumable, Tier 2, Convergence of the Lit Path)

*The Convergence distributes these to the faithful before major technical operations. Each wafer is a thin square of compressed circuitry and nutrient gel, stamped with the Convergence's spiral-and-filament sigil. Eating one tastes like copper and ozone.*

| Property | Value |
|----------|-------|
| Action | 1 action (consume) |
| Duration | 10 minutes |
| Weight | Negligible |
| Cost | 50 cr (Convergence markets only; 150 cr black market) |

- **Communion Focus:** For the next 10 minutes, you have **advantage on your next Technology check**. This applies to the first Technology check you make during the duration — once used, the benefit is expended even if the duration has not elapsed.
- **Blessed Device:** If the Technology check succeeds by **5 or more**, the device you are working on gains a "blessed" status — it functions with +1 to its next relevant check or roll for 24 hours. Only one device can be blessed at a time; blessing a second device ends the first. A device can only be blessed once; consuming additional wafers refreshes the duration but does not stack the bonus.
- **Tradeoff — Non-Believer Rejection:** A character who does not follow the Convergence of the Lit Path must make a **Fortitude save DC 12** upon consuming the wafer or suffer **disadvantage on attack rolls and ability checks and cannot take reactions for 1 round** (a localized rejection response, not a formal system condition). On a success, the character gains normal benefits. Characters with the Convergence devotion automatically succeed.

**Quest Hook:** A Convergence techpriest has discovered that wafers manufactured at a specific shrine near Ashmark are three times more potent than standard issue. The shrine has been overrun by mutated creatures from Thornwall Basin. The techpriest will pay generously for an escort to reclaim the manufacturing equipment.

---

**Last Words Grenade** (Explosive, Tier 3, Ledger of Days / Kromath Artisans)

*Kromath demolitions artisans craft these for Ledger of Days adherents as instruments of judgment, not destruction. Each grenade is a fist-sized sphere of etched metal, its surface covered in tiny inscribed names — the names of oath-breakers, betrayers, and those who defaulted on sacred debts. The grenade contains no explosive charge. Instead, it holds a compressed psychic resonance harvested from the collective grief of the betrayed.*

| Property | Value |
|----------|-------|
| Action | Special (see Priming) |
| Area | 20-foot radius burst |
| Weight | 1 lb |
| Cost | 300 cr (commissioned from Kromath artisans; requires Ledger of Days introduction) |

- **Priming Ritual:** Before throwing, the user must spend **1 minute reading the names inscribed on the grenade's surface aloud**. This is not optional — an unprimed grenade does nothing. The priming can be done in advance (the grenade remains primed for 1 hour), but it is audible and may alert nearby creatures (Perception DC 10 to hear the reading from 60 feet).
- **Judgment Detonation:** Thrown as 1 action (range 20/60 ft). All creatures in a **20-foot radius** must make a **Will save DC 14** or become **Frightened for 1 round**. The grenade deals **no physical damage**. *Note: the thrower is within the blast radius at 20 ft normal range — throw at long range (disadvantage) to stay outside the blast, or accept the risk.*
- **Oath-Breaker's Burden:** Creatures who have **broken a promise, oath, or formal agreement** within the past 30 days have **disadvantage on the Will save**. The GM determines whether a creature qualifies — player characters are not immune.
- **Tradeoff — Preparation Cost:** The 1-minute priming makes this weapon unusable as a reactive weapon. Each grenade is single-use and must be individually commissioned — each requires the artisan to inscribe specific names, which takes a week of work.

**Quest Hook:** A Kromath master artisan named Vendek Ashborn has stopped accepting commissions. He claims the last three grenades he built caused Frightened effects that lasted hours instead of rounds, and one detonation left the user catatonic. Vendek needs someone to investigate the source — a Ledger of Days monastery in the northern wastes where something has gone wrong with the grief supply.

---

### Magic Items

Magic re-emerged on Kael Morra roughly 80 years ago, and humanity has understood it for barely half that time. True magic items — objects imbued with supernatural power rather than merely advanced technology — are rare, dangerous, and poorly understood. They are not mass-produced. Each one is an accident, an obsession, or a miracle.

Magic items fall into four origin categories:

- **Voidscar Artifacts:** Recovered from dimensional anomaly zones. Properties defy known physics. Often unpredictable.
- **Pre-War Relics:** Technology accidentally infused with magical energy during the Fall. Not intentionally magical.
- **Faction-Crafted:** Deliberately created by factions with arcane or biotech resources.
- **Ritual-Forged:** Created through the Sigil System by powerful casters. Rare due to extreme Burnout costs.

#### Attunement (Magic Items)

Some magic items require **attunement** — a 1-hour process during a short or long rest in which the character bonds with the item. A character can be attuned to a maximum of **3 magic items** at once. Ending attunement requires another short rest. Items that don't require attunement function for anyone who holds them.

#### Broken Items

Items marked **[Broken When Found]** are discovered in a damaged state. Their basic properties function, but their full power is locked until repaired. Repairing a broken magic item requires a crafting check (Technology or Arcana, DC listed per item) and specific materials. See **Crafting** for repair rules.

---

#### Tier 2-3 Items (Uncommon)

Available through faction connections, lucky scavenging, or minor Voidscar expeditions. Appropriate rewards for levels 4-10.

---

**Threshold Needle** (Voidscar Artifact, Tier 2, Wondrous Item, No Attunement)

*A brass compass that never points north. Its needle trembles constantly, swinging toward something no one has satisfactorily named. The first Threshold expedition team recovered it from a Voidscar rift in Year 12. Three of the five explorers never returned. The compass led the survivors out — but it's been pointing them back ever since.*

- The compass needle points toward the nearest **Voidscar anomaly** within 50 miles. If no anomaly exists within range, the needle spins slowly.
- Within 1 mile of a Voidscar, the wielder gains **advantage on saving throws** against reality distortion effects, dimensional displacement, and Voidscar-specific hazards.
- **Drawback — Rift Dreams:** While carrying the compass, your dreams are vivid and disturbing — visions of impossible geometries and places that don't exist yet. After each long rest, make a **DC 12 Will save**. On a failure, you gain no benefit from the rest (you still spent the time, but the rest doesn't count as completed). On a success, you rest normally and gain a fragmentary insight: advantage on your next Arcana or Survival check related to Voidscar phenomena.

---

**Ironbound Grimoire** (Ritual-Forged, Tier 3, Wondrous Item, Attunement — spellcaster)

*A heavy tome bound in iron-reinforced leather, its pages covered in sigil formulae that shift when you're not looking directly at them. Created by Magister Orell of the Ashen Veil, who believed spells could be "compressed" into written form without loss. He was mostly right. The Burnout residue in the ink is the part he got wrong.*

- Contains **3 spell formulae** (GM chooses spells of 3rd level or lower from any tradition). A spellcaster attuned to the grimoire can prepare one formula per long rest, in addition to their normal prepared spells.
- The prepared formula can be cast once using your own spell slot of the appropriate level or higher. It then becomes unprepared and must be prepared again during the next long rest.
- **Drawback — Ink Resonance:** Each time you cast a spell prepared from the grimoire, your **Burnout Threshold is reduced by 1** for the next 24 hours. The compressed sigil formulae create harmonic interference with your own casting. This reduction stacks if you cast from the grimoire multiple days in a row (minimum Threshold of 1).

---

**Convergence Power Cell** (Faction-Crafted — Convergence, Tier 3, Wondrous Item, No Attunement)

*A smooth, palm-sized cylinder of pre-war alloy that hums faintly when held. The Convergence's Parser-engineers discovered that certain power cells, when exposed to sustained arcane resonance, absorb and store magical energy alongside electrical charge. They've been producing these in limited quantities since Year 38. Each one is blessed in a Rite of Compilation before distribution.*

- Powers any technological device for **1 week** without fuel or external power.
- Can be **expended** (destroyed) to cast one spell of **3rd level or lower** without requiring spellcasting ability. The user chooses the spell at the moment of activation from a list of 3 spells inscribed on the cell during creation (GM determines the spells). The spell uses a fixed save DC of 14 and attack bonus of +6.
- **Faction-Gated:** Requires Convergence standing **+1** or higher to purchase. Non-Convergence members can use found cells normally.
- **Single Use (spell):** Once expended for a spell, the cell is destroyed. Using it as a power source does not destroy it.

---

**Cinderstone Amulet** (Ritual-Forged — Ember Covenant, Tier 2, Wondrous Item, Attunement)

*A rough stone pendant, always warm to the touch, carved with the spiral-flame symbol of the Ember Covenant. Scald-Mothers create these by holding river stones in a cinderpit fire for three days while chanting the Stoking. Most stones crack. The ones that survive are considered chosen.*

- The wearer gains **resistance to cold damage**.
- Once per long rest, as a **bonus action**, the wearer can cause the amulet to flare: all creatures within 5 feet must make a **DC 13 Reflex save** or take **2d6 fire damage** (half on success). The wearer takes 1d6 fire damage (no save) — the flame does not distinguish between worthy and unworthy, only between those who endure and those who don't.
- **Drawback — The Ember's Hunger:** While attuned, you cannot benefit from cold-based healing or beneficial cold effects (e.g., cold-based condition removal, environmental cold resistance effects). The stone rejects cold in all forms.

---

**Ancestor's Bone Dice** (Ritual-Forged — Ancestor Remembrance, Tier 2, Wondrous Item, No Attunement)

*A pair of carved bone dice, yellowed with age, each face etched with a name in tiny script. The names belong to people who died making difficult decisions. When rolled, the dice land on the name most relevant to your situation — or so practitioners claim. Skeptics note the dice are weighted. Believers note that the weighting changes.*

- Once per long rest, before making an **ability check or saving throw**, you can roll the bone dice. You gain **advantage** on the roll. After the roll resolves, you hear a faint whisper — a name — and must speak it aloud. If you do not speak the name, the dice crack slightly (after 3 refusals, they shatter and become nonmagical).
- **Discovery Context:** Found in name-shrines, inherited from elders, or gifted by Ancestor Remembrance practitioners who believe you need guidance.

---

**Leash of the Tamed Storm** (Voidscar Artifact, Tier 3, Weapon — Whip, Attunement)

*A 10-foot length of braided wire that crackles with trapped electrical energy. Recovered from a Voidscar zone where a lightning storm had been frozen in time — bolts hanging motionless in the air like glass pillars. An Ashen Veil researcher cut a section of frozen lightning free. It has not stopped crackling since.*

- Functions as a whip: 1d4+1 slashing damage, finesse, reach (10 ft). Deals an additional **1d6 electric damage** on hit.
- Once per short rest, as 2 actions, the wielder can crack the whip to release a **20-foot line** of lightning. Each creature in the line makes a **DC 14 Reflex save**, taking **3d6 electric damage** on a failure or half on a success.
- **Drawback — Static Charge:** While attuned, the wielder has **disadvantage on Stealth checks**. The whip crackles audibly and causes small sparks on contact with metal. It cannot be silenced or suppressed.

---

#### Tier 4 Items (Rare)

Found in sealed vaults, deep Voidscar ruins, or as rewards from factions at +2 standing or higher. Appropriate for levels 10-15.

---

**Void Shard** (Voidscar Artifact, Tier 4, Wondrous Item, Attunement)

*A fist-sized crystal of impossible color — it looks different depending on the angle, the light, and reportedly the observer's emotional state. Voidscar researchers theorize it's a fragment of crystallized dimensional energy, a piece of the boundary between realities that broke off and solidified. Holding it feels like holding a question mark.*

- Once per long rest, as **1 action**, create a **10-foot radius zone** of altered reality centered on a point within 60 feet. The zone lasts **1 minute**. Choose one effect when you create the zone:
  - **Inverted Gravity:** Creatures in the zone that fail a DC 16 Reflex save fall upward 20 feet, taking 2d6 bludgeoning damage. The zone's gravity remains inverted for the duration. Creatures can anchor themselves with a DC 14 Athletics check.
  - **Time Stutter:** Creatures in the zone that fail a DC 16 Will save are **Slowed** for the duration (save repeats at end of each turn). On a critical failure, they are **Stunned** for 1 round instead.
  - **Spatial Compression:** The zone's interior is compressed — distances within the zone are halved. A creature that enters the zone can move through it at double speed, but attacks made from within the zone have **disadvantage** (spatial distortion throws off aim). Creatures outside the zone attacking targets inside gain **advantage** (the targets are compressed into a smaller area).
- **Drawback — Reality Fracture:** Each time you use the Void Shard, roll a **d20**. On a **1**, the shard cracks and releases a random Voidscar anomaly in a 30-foot radius (GM determines the anomaly from the Voidscar hazard table). On a **2-3**, the shard's next use is delayed — it cannot be used again for 48 hours instead of until the next long rest.

---

**Warchief's Fangs** (Faction-Crafted — Iron Wolves, Tier 4, Weapon — Paired Combat Knives, Attunement)

*Two matched combat knives with blades of black iron, their grips wrapped in wolf-hide leather. Forged by the Iron Wolves' master smith, Karek One-Eye, who quenched the blades in the blood of a beast he'd hunted for seven years. The knives glow a dim, angry red when their wielder is wounded — Karek said the blades "remember the hunt."*

- Each knife deals **1d6+1 slashing damage**, light, finesse. When **both are wielded simultaneously**, each attack deals an additional **+1d4 slashing damage** (the blades resonate with each other).
- **Bloodied Fury:** When the wielder is at or below **half their maximum HP**, both knives glow red. Attacks with the Fangs have **advantage** and their critical hit range expands to **19-20**.
- **Drawback — The Hunt Demands:** While wielding both Fangs, you **cannot take the Retreat or Dodge action**. The blades demand aggression — if you attempt either action, the Fangs' resonance disrupts your movement and you waste the action. You can sheathe or drop one Fang to regain access to these actions, but doing so ends the paired bonus until both are wielded again.
- **Faction-Gated:** Iron Wolves standing +2 or higher to be gifted a pair. Non-faction members can use found Fangs normally.

---

**Mindlink Circlet** (Pre-War Relic, Tier 4, Wondrous Item, Attunement) **[Broken When Found]**

*A thin circlet of silvery metal with micro-etched circuitry visible along its interior surface. Pre-war neural interface technology — originally designed for synchronized military operations — that was exposed to arcane energy during the Fall. The circuitry now carries something more than electrical signals.*

- While attuned, you can establish a **telepathic link** with up to **3 willing creatures** within 120 feet as an action. Linked creatures can communicate silently and share sensory information (see through each other's eyes as an action). The link lasts 1 hour or until you dismiss it.
- Once per long rest, when a linked ally within 60 feet is targeted by an effect that requires a **Will save**, you can use your **reaction** to let them use **your Will save modifier** instead of their own.
- **Drawback — Neural Bleed:** While the link is active, if any linked creature takes **psychic damage**, all other linked creatures take **half that damage** (no save). If a linked creature is subjected to the **Charmed** or **Confused** condition, you must make a **DC 14 Will save** or also gain the condition for 1 round.
- **[Broken When Found]:** When first discovered, the circlet links only 1 creature and the telepathy is one-directional (you can send, not receive). Repair requires a **DC 18 Technology check** and 500 credits worth of pre-war micro-components.

---

**Kethara Symbiotic Graft** (Faction-Crafted — Kethara Collective, Tier 4, Weapon — Melee, Attunement)

*A mass of living alien tissue — dark green, veined with bioluminescent blue — that bonds to the wielder's forearm. Kethara bio-engineers grow these from cultivated samples of apex predator neural tissue. The graft develops a rudimentary intelligence after bonding, learning to anticipate its host's combat instincts. Hosts report that the graft "wants to fight."*

- Functions as a melee weapon: **1d8+1 bludgeoning/slashing** (the graft shifts form), reach property (extends to 10 ft). The graft is considered a **magical weapon**.
- **Regenerative Bond:** While attuned and grafted, you regenerate **1 HP at the start of each of your turns** if you have at least 1 HP.
- **Adaptive Form** (1/short rest): As a bonus action, reshape the graft into one of: a shield (+2 DV until end of your next turn), a grasping tendril (make a grapple attempt at 10-ft range), or an armored carapace over one limb (resistance to one physical damage type until end of your next turn).
- **Drawback — Humanity Cost 2.** The graft counts as an augmentation for all purposes (Humanity Cost, augmentation limits, detection). If forcibly removed, you take **2d6 damage** and the graft takes 1 week to re-bond with any host.
- **Faction-Gated:** Kethara Collective standing +2 to receive a graft.

---

**Nullstone Ring** (Voidscar Artifact, Tier 4, Wondrous Item, Attunement)

*A ring carved from a dull gray stone that seems to absorb light. Found in a Voidscar zone where all magic within a 100-foot radius simply... stopped. Researchers who wore the ring discovered their own spellcasting dampened in exchange for near-immunity to hostile magic. The Ashen Veil considers these stones heretical. Operatives who don't trust magic consider them essential.*

- While attuned, you gain **advantage on all saving throws against spells and magical effects**.
- Once per long rest, as a **reaction** when you are targeted by a spell, you can activate the ring to create a **10-foot radius antimagic field** centered on you for 1 round. All magical effects within the field are suppressed (including your own).
- **Drawback — Magic Dampening:** While attuned, your **spell save DC is reduced by 2** and your **spell attack bonus is reduced by 2**. Additionally, you **cannot benefit from beneficial spells or magical effects cast by allies** (including healing spells, buffs, wards, and magical condition removal). The ring's suppression field does not distinguish between hostile and helpful magic. Mundane healing (field medicine, stims, Medic build features) functions normally.
- **Discovery Context:** Found in deep Voidscar zones, usually near collapsed anomalies. The Ashen Veil will pay well for these — and pay more to keep them out of circulation.

---

**Flicker Boots** (Pre-War Relic, Tier 4, Wondrous Item — Boots, Attunement) **[Broken When Found]**

*Military-grade phase-shift boots, originally prototypes for a stealth infiltration program. The Fall's magical contamination completed what the engineers couldn't — the boots now genuinely shift the wearer between dimensional states for fractions of a second. Pre-war documentation calls this "Project Flicker." Post-war documentation calls it "terrifying."*

- Once per short rest, as a **bonus action**, teleport up to **30 feet** to an unoccupied space you can see. You leave a brief afterimage at your origin point (cosmetic).
- While attuned, you can move through **difficult terrain** without speed reduction (the boots phase through obstacles at ankle height).
- **Drawback — Phase Sickness:** Each time you teleport, make a **DC 10 Fortitude save** (DC increases by 2 for each teleport after the first in the same day, resetting after a long rest). On a failure, you are **Dazed** until the end of your next turn as your body recalibrates to local spacetime.
- **[Broken When Found]:** When first discovered, the boots can only teleport 10 feet and the phase sickness DC starts at 14. Repair requires a **DC 16 Technology check** and rare phase-conductive materials worth 800 credits.

---

#### Tier 5 Items (Legendary)

Campaign-defining artifacts. 1-2 per campaign maximum. Found in the deepest vaults, the most dangerous Voidscar zones, or created through extraordinary ritual sacrifice. Each has a significant cost.

---

**The Ledger Absolute** (Faction-Crafted — Kromath, Tier 5, Legendary, Wondrous Item, Attunement)

*A massive book — too heavy for its size, as if it carries the weight of every promise ever made. Its pages are covered in cramped Kromath script that no one remembers writing. The Ledger Absolute was created by Elder Broker Thass-Korr during the Year-Settling of Year 22, using ink mixed with the blood of every Kromath elder in attendance. It records every transaction, promise, and oath spoken in its presence. It has never been wrong. It has never been kind.*

- **Oath Recording (passive):** The Ledger automatically records every verbal promise, deal, or oath made within **30 feet** of it. Entries appear in real-time. The Ledger cannot be deceived — it records intent, not just words.
- **Compel the Oath-Breaker** (1/long rest): As **2 actions**, read an entry aloud naming a creature that has broken a recorded oath. That creature, if within 120 feet, must make a **DC 18 Will save**. On a failure, they are **Compelled** for 1 minute: at the start of each of their turns, they must use their actions to fulfill the broken oath to the best of their ability (or take the most reasonable approximation). They can repeat the save at the end of each of their turns to end the effect. On a success, they are immune to this effect for 24 hours.
- **Ledger's Insight** (1/short rest): As 1 action, read the Ledger's entries about a specific creature or organization. You learn whether they have any outstanding broken oaths and the general nature of those oaths (no specific details).
- **Drawback — The Ledger Judges All:** The wielder's own oaths are also recorded with heightened scrutiny. If you break **any** promise made while carrying the Ledger — even a casual "I'll be right back" — you take **3d6 psychic damage** (no save) and the Ledger's entries about you glow red for 24 hours, visible to anyone who opens the book. Breaking 3 oaths while attuned causes the Ledger to **end your attunement permanently** — it considers you unworthy.

---

**Riftwalker's Mantle** (Voidscar Artifact, Tier 5, Legendary, Wondrous Item — Cloak, Attunement)

*A cloak that isn't entirely here. Its edges blur into something that isn't shadow — more like the space between two photographs taken a second apart. Recovered from the deepest explored point of the northern Voidscars by a team that reported walking for six hours in a straight line and arriving back where they started. The cloak was draped over a stone that hadn't been carved yet — or had already been carved and un-carved. The team's chronologist aged seven years during the expedition. She said it was worth it.*

- While attuned, you exist partially between dimensions. You gain **resistance to force damage** and cannot be forcibly teleported or dimensionally displaced against your will.
- **Phase Walk** (3/long rest): As 1 action, become **incorporeal** for up to 1 minute. While incorporeal, you can move through solid objects and creatures (ending your turn inside a solid object shunts you to the nearest empty space and deals 2d10 force damage). You cannot attack or cast spells while incorporeal. You can end the effect early as a free action.
- **Rift Step** (1/long rest): As 1 action, tear a temporary rift in space. You and up to 5 willing creatures within 10 feet are teleported to a location you have visited before on the same plane, up to **1 mile** away. The rift is visible from both sides for 1 round before closing.
- **Drawback — Dimensional Erosion:** While attuned, you are **vulnerable to psychic damage** (you take double damage). Your connection to the space between realities leaves your mind exposed. Additionally, each time you use Phase Walk or Rift Step, roll a **d20**. On a **1**, a hostile Voidscar entity (GM determines type and CR) is pulled through with you and must be dealt with.

---

**The First Spark** (Pre-War Relic, Tier 5, Legendary, Weapon — Any Firearm, Attunement) **[Broken When Found]**

*No one knows what this weapon was before the Fall. It might have been a standard military sidearm, or a prototype energy weapon, or something from a research lab that shouldn't have existed. What it is now: the oldest known magical weapon on Kael Morra. It changes form to match the wielder's preferred firearm — a pistol for one owner, a rifle for another, a shotgun for a third. The only constant is the flame. When it fires, the rounds burn with a white light that casts no shadows.*

- Takes the form of **any firearm** the wielder is proficient with (chosen at attunement, can be changed during a long rest). Uses that firearm's base stats.
- All attacks with the First Spark deal an additional **+2d6 radiant damage**. This damage bypasses all resistance and immunity to fire damage (it isn't fire — it's something older).
- **Purifying Shot** (1/long rest): As 2 actions, fire a shot of pure white flame at a creature within range. The target makes a **DC 18 Fortitude save**. On a failure, they take **6d6 radiant damage** and any conditions caused by magic, poison, disease, or radiation are **removed**. On a success, half damage and conditions remain. This can be used on allies (they make the save at advantage) — the purification burns away corruption but it isn't gentle.
- **Drawback — The Spark Remembers:** The weapon has a fragmentary consciousness — echoes of every wielder who held it before. After each long rest while attuned, roll a **d6**. On a **1**, the weapon is in a "contemplative" state and deals only base weapon damage (no radiant bonus) for the first encounter of the day. On a **6**, the weapon is in a "wrathful" state and its radiant damage increases to **3d6** for the first encounter, but you have **disadvantage on Persuasion and Deception checks** for 24 hours — the weapon's fury bleeds into your demeanor.
- **[Broken When Found]:** When first discovered, the First Spark deals only 1d6 radiant damage, cannot change form, and Purifying Shot is unavailable. Repair requires a **DC 20 Arcana check**, 2,000 credits of arcane components, and access to a Voidscar zone (the weapon must be "re-ignited" in a place where reality is thin). This is a quest, not a crafting check.

---

**Dreamcatcher Helm** (Voidscar Artifact, Tier 5, Legendary, Wondrous Item — Helmet, Attunement)

*A helmet of layered crystal and dark metal, its interior lined with filaments that press gently against the wearer's temples. Recovered from a Voidscar zone where everyone who entered fell asleep and dreamed the same dream — a city that existed before the Fall, perfect and whole, burning from the inside out. The helm was at the center of the zone, worn by a skeleton in a chair. The skeleton was smiling.*

- While attuned, you are **immune to the Unconscious condition** caused by sleep effects (magical or otherwise). You still need to rest, but you remain aware during sleep — you can be woken instantly and cannot be caught unaware while sleeping.
- **Dream Walk** (1/long rest): During a long rest, you can enter the dreams of any creature you have met that is currently sleeping within 1 mile. You can communicate with them, observe their subconscious (the GM may reveal fears, desires, or hidden knowledge at their discretion), or attempt to implant a suggestion: the target makes a **DC 17 Will save**. On a failure, they wake with a strong inclination to follow a single course of action you specified (this is not mind control — they interpret the suggestion through their own personality and may resist if it contradicts their core values). On a success, they wake knowing someone entered their dreams but not who.
- **Psychic Shield** (passive): While attuned, you gain **+2 to Will saves** against psychic damage, telepathy, and mind-reading effects.
- **Drawback — The Dream Bleeds:** While attuned, you experience reality and dreams simultaneously. You have **disadvantage on Perception checks** during the first hour after waking from any rest (the boundary between dream and waking is slow to reassert itself). Additionally, once per week (GM's timing), you experience a **waking dream** — a vivid hallucination lasting 1d4 rounds during which you are Dazed. The hallucination is always meaningful (visions of the past, warnings of the future, or echoes of the Voidscar's memories), but the timing is never convenient.

---

**Marrowchain** (Ritual-Forged, Tier 5, Legendary, Weapon — Flail/Chain, Attunement)

*A heavy chain of blackened iron, each link inscribed with a name. A channeler named Varek Doss forged it over seven months, burning one sigil per link — 77 links, 77 names, 77 days of escalating Burnout that should have killed him. He survived. The chain didn't care whether he survived; it cared that he finished. When swung, the chain makes a sound like a choir singing a single, sustained note.*

- Functions as a flail: **2d6+2 bludgeoning damage**, heavy, reach (10 ft). The weapon is magical.
- **Soul Anchor** (passive): Creatures hit by Marrowchain cannot teleport, become incorporeal, or use any dimensional movement until the end of their next turn. The chain binds them to physical reality.
- **Chain of Names** (1/long rest): As 2 actions, call out a name inscribed on the chain. A spectral chain erupts from the weapon and wraps around a creature within 30 feet. The target must make a **DC 18 Fortitude save**. On a failure, they are **Restrained** and take **4d6 necrotic damage** per round until they escape (DC 18 Athletics check, 2 actions) or the effect ends (1 minute maximum). On a success, they take half damage and are not restrained.
- **Drawback — The Chain Demands Names:** After each long rest while attuned, one of Marrowchain's 77 names fades slightly. After 77 long rests of attunement (roughly 77 weeks with the gritty rest economy), all names are gone and Marrowchain becomes a mundane chain. To restore a name, you must **inscribe a new one** — the true name of a creature you have personally slain since the last inscription. If you go 30 days without inscribing a new name, the chain deals **1d6 necrotic damage** to you at each dawn. The chain remembers that Varek fed it names. It expects you to do the same.

---

#### Magic Item Summary Table

| Item | Tier | Origin | Type | Attunement | Key System Interaction |
|------|------|--------|------|-----------|----------------------|
| Threshold Needle | 2 | Voidscar | Wondrous | No | Rest economy (failed rest), Voidscar exploration |
| Ancestor's Bone Dice | 2 | Ritual-Forged | Wondrous | No | Ability checks, roleplay (speaking names) |
| Cinderstone Amulet | 2 | Ritual-Forged | Wondrous | Yes | Cold resistance, Conditions (fire burst) |
| Ironbound Grimoire | 3 | Ritual-Forged | Wondrous | Yes | Burnout Threshold, spell preparation |
| Convergence Power Cell | 3 | Faction (Convergence) | Wondrous | No | Faction standing, non-caster spell access |
| Leash of the Tamed Storm | 3 | Voidscar | Weapon | Yes | Stealth disadvantage, electric damage |
| Void Shard | 4 | Voidscar | Wondrous | Yes | Conditions (Slowed, Stunned), Voidscar hazards |
| Warchief's Fangs | 4 | Faction (Iron Wolves) | Weapon | Yes | Faction standing, action restriction (no Retreat/Dodge) |
| Mindlink Circlet | 4 | Pre-War | Wondrous | Yes | Telepathy, Conditions (Charmed, Confused), broken item |
| Kethara Symbiotic Graft | 4 | Faction (Kethara) | Weapon | Yes | Humanity Cost, augmentation system |
| Nullstone Ring | 4 | Voidscar | Wondrous | Yes | Anti-magic, no allied spell benefits |
| Flicker Boots | 4 | Pre-War | Wondrous | Yes | Teleportation, Conditions (Dazed), broken item |
| The Ledger Absolute | 5 | Faction (Kromath) | Wondrous | Yes | Social encounters, oaths, psychic damage |
| Riftwalker's Mantle | 5 | Voidscar | Wondrous | Yes | Incorporeal condition, teleportation, psychic vulnerability |
| The First Spark | 5 | Pre-War | Weapon | Yes | Radiant damage, condition removal, broken item |
| Dreamcatcher Helm | 5 | Voidscar | Wondrous | Yes | Rest economy, Conditions (Dazed), social/infiltration |
| Marrowchain | 5 | Ritual-Forged | Weapon | Yes | Anti-teleport, Restrained condition, name economy |

**Origin Distribution:** 5 Voidscar, 4 Ritual-Forged, 4 Faction-Crafted, 3 Pre-War
**Tier Distribution:** 3 Tier 2 (Uncommon), 3 Tier 3 (Uncommon), 6 Tier 4 (Rare), 5 Tier 5 (Legendary)
**Broken When Found:** 3 items (Mindlink Circlet, Flicker Boots, The First Spark)
**Bounded Lethality:** No item grants more than +2 to attack rolls. Damage bonuses are bounded by die count, not flat modifiers.

<!--
```
game_data:
  magic_items:
    - name: Threshold Needle
      tier: 2
      origin: Voidscar
      attunement: false
      effect: "Points to nearest Voidscar. Advantage on saves vs Voidscar hazards within 1 mile."
      drawback: "DC 12 Will save after long rest or gain no benefit from rest."
    - name: Ancestor's Bone Dice
      tier: 2
      origin: Ritual-Forged
      attunement: false
      effect: "1/LR advantage on one check or save. Must speak the whispered name aloud."
      drawback: "Dice crack if name not spoken; shatter after 3 refusals."
    - name: Cinderstone Amulet
      tier: 2
      origin: Ritual-Forged
      attunement: true
      effect: "Cold resistance. 1/LR 5-ft fire burst (2d6, DC 13 Reflex)."
      drawback: "Cannot benefit from cold-based healing or effects."
    - name: Ironbound Grimoire
      tier: 3
      origin: Ritual-Forged
      attunement: true
      effect: "Prepare 1 of 3 stored spells (≤3rd level) per long rest."
      drawback: "Each cast reduces Burnout Threshold by 1 for 24 hours (stacks)."
    - name: Convergence Power Cell
      tier: 3
      origin: Faction (Convergence)
      attunement: false
      effect: "Powers any device 1 week. Expend to cast 1 spell ≤3rd level (DC 14, +6)."
      drawback: "Single use for spell. Requires Convergence +1 standing to purchase."
    - name: Leash of the Tamed Storm
      tier: 3
      origin: Voidscar
      attunement: true
      effect: "Whip: 1d4+1 + 1d6 electric. 1/SR 20-ft lightning line (3d6, DC 14 Reflex)."
      drawback: "Disadvantage on Stealth checks while attuned."
    - name: Void Shard
      tier: 4
      origin: Voidscar
      attunement: true
      effect: "1/LR 10-ft zone: reverse gravity, time stutter, or spatial compression."
      drawback: "On d20 roll of 1, releases Voidscar anomaly. On 2-3, 48hr cooldown."
    - name: Warchief's Fangs
      tier: 4
      origin: Faction (Iron Wolves)
      attunement: true
      effect: "Paired knives: +1d4 when dual-wielded. Advantage + crit 19-20 when bloodied."
      drawback: "Cannot Retreat or Dodge while wielding both."
    - name: Mindlink Circlet
      tier: 4
      origin: Pre-War
      attunement: true
      effect: "Telepathic link (3 creatures, 120 ft, 1 hr). 1/LR share Will save with ally."
      drawback: "Psychic damage and mental conditions bleed through link. Broken when found."
    - name: Kethara Symbiotic Graft
      tier: 4
      origin: Faction (Kethara)
      attunement: true
      effect: "1d8+1 melee, reach, magical. Regenerate 1 HP/turn. 1/SR adaptive form."
      drawback: "Humanity Cost 2. 2d6 damage if removed."
    - name: Nullstone Ring
      tier: 4
      origin: Voidscar
      attunement: true
      effect: "Advantage on saves vs spells. 1/LR 10-ft antimagic field for 1 round."
      drawback: "Spell save DC and attack -2. Cannot benefit from allied spells or magical effects."
    - name: Flicker Boots
      tier: 4
      origin: Pre-War
      attunement: true
      effect: "1/SR teleport 30 ft. Ignore difficult terrain."
      drawback: "Fortitude save or Dazed after teleport (DC escalates). Broken when found."
    - name: The Ledger Absolute
      tier: 5
      origin: Faction (Kromath)
      attunement: true
      effect: "Records all oaths in 30 ft. 1/LR compel oath-breaker (DC 18 Will)."
      drawback: "3d6 psychic if you break any promise. Ends attunement after 3 broken oaths."
    - name: Riftwalker's Mantle
      tier: 5
      origin: Voidscar
      attunement: true
      effect: "Force resistance. 3/LR incorporeal 1 min. 1/LR group teleport 1 mile."
      drawback: "Vulnerable to psychic damage. D20 roll of 1 summons hostile entity."
    - name: The First Spark
      tier: 5
      origin: Pre-War
      attunement: true
      effect: "Any firearm form. +2d6 radiant. 1/LR purifying shot (6d6, removes conditions)."
      drawback: "Daily d6: 1=no radiant bonus first fight, 6=+3d6 but social disadvantage. Broken when found."
    - name: Dreamcatcher Helm
      tier: 5
      origin: Voidscar
      attunement: true
      effect: "Immune to magical sleep. 1/LR dream walk (suggestion, DC 17 Will). +2 Will vs psychic."
      drawback: "Disadvantage on Perception 1hr after waking. Weekly waking dream (Dazed 1d4 rounds)."
    - name: Marrowchain
      tier: 5
      origin: Ritual-Forged
      attunement: true
      effect: "2d6+2 flail, reach. Anti-teleport on hit. 1/LR spectral chain (Restrained, 4d6/round)."
      drawback: "Names fade over time. Must inscribe names of slain creatures or take 1d6 necrotic/dawn."
```
-->

### Wondrous Items

**Pathfinder's Compass** (Wondrous, Tier 3, Pre-Fall)
*A gyroscopic navigation device from a pre-Fall military survival kit. It doesn't just point north — it points toward the nearest source of whatever you need: water, shelter, civilization, or danger. How it works is a mystery. The manufacturer's label says "DYNAXIS PATHFINDER v3.2" but Dynaxis claims no record of the product line.*

- The compass has three modes, switched as a free action:
  - **Find Water:** Points toward the nearest potable water source within 5 miles.
  - **Find Shelter:** Points toward the nearest defensible structure within 5 miles.
  - **Find Danger:** Points toward the nearest hostile creature or active hazard within 1 mile. The needle spins faster as you approach.
- Your party **cannot become lost** while you carry the Compass and it is functioning.
- **Tradeoff — Unreliable:** The Compass occasionally fixates on false readings — pointing at water that's contaminated, shelter that's occupied by hostiles, or danger that's already passed. The GM rolls a **d20 in secret** when you consult the Compass: on a **1**, the reading is misleading. At Tier 4+, this false reading threshold drops to only on a natural 1 that also fails a DC 5 check (essentially eliminated).

**Broker's Ledger** (Wondrous, Tier 3, Hearthstone Compact)
*A battered pre-war tablet loaded with trade route data, market prices, and contact networks maintained by generations of Compact traders. The information is outdated, incomplete, and wildly valuable. Whoever carries this knows the Wasteland's economy better than anyone.*

- You gain **+2 to Streetwise checks** related to trade, pricing, or finding buyers/sellers.
- Once per long rest, you can consult the Ledger to find a **buyer for any item** in the current settlement (even items that are normally unsellable). The sale price is 75% of base value (instead of the normal 50%).
- During downtime, the Ledger provides **advantage on any check** related to commerce, negotiation, or investment.
- **Tradeoff — Coveted:** The Ledger is well-known among traders. NPCs with Streetwise proficiency recognize it on sight (Perception DC 12). Thieves, rival merchants, and faction agents may attempt to steal or copy it. Carrying it openly marks you as either wealthy or connected.

**Echo Core** (Wondrous, Tier 5, Pre-Fall)
*A crystalline sphere containing a fragment of a pre-Fall AI — not a full intelligence, but an echo of one. It remembers. Ask it a question, and it searches its fragmented memory banks. Sometimes the answers are exactly what you need. Sometimes they're from a world that no longer exists.*

| Property | Value |
|----------|-------|
| Properties | Requires attunement |

- Once per long rest, you can ask the Echo Core **one question** about any topic. The Core makes an **INT check** with a +8 modifier. On a result of 15+, it provides a detailed, accurate answer drawn from pre-Fall databases. On 10-14, it provides a partial or slightly outdated answer. On 9 or below, it provides a fragment that may or may not be relevant ("ERROR: file corrupted. Partial recovery: 'Project Meridian was authorized by—' [data loss]").
- The Echo Core can **translate any pre-Fall language or code** without a check.
- **Tradeoff — Fragile Intelligence:** The Echo Core is fragile (10 HP, DV 8, Hardness 0). If reduced to 0 HP, it is destroyed permanently — the AI fragment is lost forever. Additionally, the Core occasionally volunteers information unprompted, sometimes at inopportune moments ("ALERT: structural analysis indicates this building will collapse within forty minutes"). The GM may use the Core to deliver plot hooks, warnings, or red herrings.

**Kethara Biofilter** (Wondrous, Tier 3, Kethara Collective)
*A living symbiote worn as a collar or wristband — a Kethara biosculpted organism that filters toxins, neutralizes pathogens, and adjusts your body chemistry. The Collective sells these to trusted allies. The Convergence considers them an abomination. Everyone else considers them invaluable.*

- You are **immune to the Poisoned condition** and have **advantage on saves against disease and radiation**.
- Once per short rest, the Biofilter can neutralize one **poison, disease, or radiation effect** currently affecting you (no action required — the Biofilter acts automatically when you rest).
- **Tradeoff — Living Symbiote:** The Biofilter is a living organism that requires sustenance: it absorbs 1 ration's worth of nutrients from your food daily (you need double rations while wearing it, or take 1 level of exhaustion per day without extra food). If you are a Synthetic, the Biofilter **cannot bond with you** — it requires biological tissue. Removing the Biofilter after more than 1 week of wear causes **1d6 damage** and leaves you **vulnerable to poison** for 24 hours (withdrawal).

**Ghostlight Lantern** (Wondrous, Tier 4, Ashen Veil / Voidscars)
*A lantern that burns with pale blue fire drawn from the Voidscars. It doesn't illuminate — it reveals. In its light, hidden things become visible: invisible creatures, concealed doors, magical auras, and the faint outlines of things that aren't quite there anymore.*

| Property | Value |
|----------|-------|
| Properties | Requires attunement |

- The Ghostlight illuminates a **30-foot radius** with pale blue light that does not count as bright light for any game effect (it does not end darkness-based concealment for other creatures).
- Within the Ghostlight's radius: **invisible creatures and objects become visible**, **hidden doors and compartments are outlined**, and **active magical effects glow** with a color corresponding to their school (the wielder can identify the school with an Arcana check DC 12).
- Once per long rest, the wielder can focus the Ghostlight on a **5-foot area** for 1 minute to reveal the **psychic imprint** of the last significant event that occurred there (a murder, a battle, a powerful spell). The GM describes a brief, fragmented vision.
- **Tradeoff — Voidscar Resonance:** The Ghostlight attracts attention from Voidscar entities. While the lantern is lit, the GM rolls a **d20** every hour: on a **1**, something from the Voidscars notices the light and takes interest (manifestation, whisper, or distant attention — severity at GM discretion). The lantern also causes mild headaches and disturbing dreams in those who sleep within 30 feet of it while it's lit.

## Encumbrance (Optional)

### Carrying Capacity

- **Light Load:** MIG score x 5 lbs (no penalties)
- **Medium Load:** MIG score x 10 lbs (-10 ft speed)
- **Heavy Load:** MIG score x 15 lbs (-20 ft speed, disadvantage on AGI checks)
- **Maximum Drag:** MIG score x 30 lbs (5 ft speed, cannot act effectively)

### Simplified Encumbrance

- Don't track weight precisely
- GM rules if you're carrying "too much" based on narrative sense
- Typical adventurer with backpack = fine
- Trying to carry 6 rifles, 50 lbs of loot, and full plate armor = problem
