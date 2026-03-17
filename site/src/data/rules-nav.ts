/**
 * Single source of truth for rules navigation.
 *
 * To add a new rule chapter:
 *   1. Create the markdown file in rules/ (e.g., rules/new-chapter.md)
 *   2. Add an entry here in the appropriate section
 *   3. Done — the Astro catch-all route auto-generates the page
 */

export interface NavLink {
  /** Display label in sidebar and index cards */
  label: string;
  /** URL slug relative to /rules/ (e.g., 'combat', 'classes/warrior') */
  slug: string;
  /** Short description shown on the rules index page */
  description: string;
}

export interface NavSection {
  /** Section heading shown in sidebar */
  title: string;
  /** Pages in this section */
  links: NavLink[];
}

export const rulesNav: NavSection[] = [
  {
    title: 'Player\'s Guide',
    links: [
      { label: 'Introduction', slug: 'introduction', description: 'Design philosophy, dice mechanics, and bounded accuracy.' },
      { label: 'Character Creation', slug: 'character-creation', description: 'Attributes, derived stats, species, and backgrounds.' },
      { label: 'Pregenerated Characters', slug: 'pregens', description: 'Four ready-to-play Level 1 characters. Grab one and start playing.' },
      { label: 'Starter Scenario', slug: 'starter-scenario', description: 'The Dead Signal — a one-shot you can run cold in 2-3 hours.' },
    ],
  },
  {
    title: 'Core Rules',
    links: [
      { label: 'Skills', slug: 'skills', description: '21 core skills, proficiency, group checks, and skill challenges.' },
      { label: 'Equipment', slug: 'equipment', description: 'Weapons, armor, gear, grenades, chems, and augmentations.' },
      { label: 'Combat', slug: 'combat', description: '3-action economy, attacks, damage, and healing.' },
      { label: 'Magic', slug: 'magic', description: 'Spell crafting, burnout, and ritual casting.' },
      { label: 'Conditions', slug: 'conditions', description: 'Status effects and the exhaustion system.' },
      { label: 'Exploration', slug: 'exploration', description: 'Rest, survival, injuries, and field medicine.' },
    ],
  },
  {
    title: 'Classes',
    links: [
      { label: 'Class Overview', slug: 'classes', description: 'Overview of all 8 archetypes and the class system.' },
      { label: 'Warrior', slug: 'classes/warrior', description: 'Tank/Striker (d12). Get hit, hit back harder.' },
      { label: 'Gunslinger', slug: 'classes/gunslinger', description: 'Ranged DPS (d8). Snipe from safety.' },
      { label: 'Mystic', slug: 'classes/mystic', description: 'AOE Mage (d6). Glass cannon, big spells.' },
      { label: 'Medic', slug: 'classes/medic', description: 'Healer/Support (d6). Keep the party alive.' },
      { label: 'Technician', slug: 'classes/technician', description: 'Pet/Support (d6). Command drones and robots.' },
      { label: 'Operative', slug: 'classes/operative', description: 'Skill/Burst (d6). Stealth, burst damage, utility.' },
      { label: 'Diplomat', slug: 'classes/diplomat', description: 'Buffer/Social (d8). Empower allies, control the field.' },
      { label: 'Channeler', slug: 'classes/channeler', description: 'Hybrid Cleric (d8). Melee + healing.' },
    ],
  },
  {
    title: 'Progression',
    links: [
      { label: 'Character Progression', slug: 'progression', description: 'Level-by-level gains, doctrines, and AP spending.' },
      { label: 'Talents', slug: 'talents', description: 'Universal, class, and legendary talents.' },
      { label: 'Mastery Paths', slug: 'mastery-paths', description: '12 cross-archetype paths for levels 11-15.' },
      { label: 'Multiclassing', slug: 'multiclassing', description: 'Requirements, AP distribution, and examples.' },
      { label: 'Cross-Training', slug: 'cross-training', description: 'Learn abilities from other archetypes without multiclassing.' },
    ],
  },
  {
    title: 'Advanced Rules',
    links: [
      { label: 'Advanced Skills', slug: 'advanced-skills', description: '8 specialized skills: Hacking, Demolitions, Forensics, and more.' },
      { label: 'Vehicles & Operations', slug: 'vehicles', description: 'Vehicle combat, crew roles, chases, and boarding.' },
      { label: 'Hacking', slug: 'hacking', description: 'Network intrusion, ICE, digital combat, and secure tunnels.' },
      { label: 'Crafting', slug: 'crafting', description: 'Equipment crafting, tech systems, AIs, synthetics, and arcane capacitors.' },
      { label: 'Downtime', slug: 'downtime', description: 'Capital economy, base building, and downtime activities.' },
    ],
  },
  {
    title: 'Game Mastering',
    links: [
      { label: 'Running the Game', slug: 'game-mastering', description: 'Encounter building, CR, the lethality dial, and GM advice.' },
      { label: 'Random Generators', slug: 'generators', description: 'Worlds, NPCs, encounters, creatures, loot, and more — full GM toolkit.' },
    ],
  },
  {
    title: 'Setting & Lore',
    links: [
      { label: 'The World of Ashfall', slug: 'setting', description: 'The Fall, Kael Morra, factions, cultures, religions, and the galaxy beyond.' },
    ],
  },
  {
    title: 'Bestiary',
    links: [
      { label: 'Mutant Fauna & Flora', slug: 'bestiary/fauna-flora', description: 'Razorbacks, blighthounds, spore colonies, and wasteland predators.' },
      { label: 'Humanoids & Constructs', slug: 'bestiary/humanoids-constructs', description: 'Raiders, warlords, rogue synthetics, and military constructs.' },
      { label: 'Eldritch Horrors & Aliens', slug: 'bestiary/eldritch-aliens', description: 'Breach-spawn, dimensional entities, and alien species.' },
      { label: 'Undead & Arcane Beasts', slug: 'bestiary/undead-arcane', description: 'Revenants, ashwalkers, and creatures warped by magic.' },
      { label: 'Parasites & Apex Predators', slug: 'bestiary/parasites-bosses', description: 'Symbiotes, hive organisms, and legendary boss creatures.' },
    ],
  },
  {
    title: 'Reference',
    links: [
      { label: 'Reference Tables', slug: 'appendices/tables', description: 'All reference tables consolidated.' },
      { label: 'Glossary', slug: 'appendices/glossary', description: 'Game terms defined.' },
    ],
  },
];

/** Flat list of all slugs in navigation order. */
export function allRuleSlugs(): string[] {
  return rulesNav.flatMap(section => section.links.map(link => link.slug));
}
