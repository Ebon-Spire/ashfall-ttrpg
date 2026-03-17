/**
 * Loads all structured game data from SRD frontmatter at build time.
 * This is the single source of truth for the character builder.
 */
import { loadRuleData } from './loadMarkdown';

export interface SkillBonus {
  skill: string;
  bonus: number;
}

export interface Ability {
  name: string;
  ap_cost: number;
  tier: number;
  effect: string;
}

export interface SkillTree {
  name: string;
  focus: string;
  abilities: Ability[];
}

export interface FeatureChoice {
  name: string;
  effect: string;
}

export interface ClassFeature {
  name: string;
  level: number;
  action: string;
  frequency: string;
  description: string;
  choices?: FeatureChoice[];
  num_choices?: number;
  choice_label?: string;
}

export interface SpellSlotLevel {
  level: number;
  slots: number[];
}

export interface SpecializationDetail {
  name: string;
  role: string;
  features: ClassFeature[];
}

export interface ClassData {
  name: string;
  primary_stats: string[];
  hit_die: string;
  hp_base: number;
  hp_per_level: number;
  starting_humanity: number;
  armor_proficiency: string[];
  weapon_proficiency: string[];
  save_proficiencies: string[];
  skill_bonuses: SkillBonus[];
  starting_ap: number;
  role: string;
  magic_type: string;
  level_1_features: string[];
  features: ClassFeature[];
  skill_trees: SkillTree[];
  specializations: string[];
  specialization_details: SpecializationDetail[];
  starting_equipment: string[];
  spell_slots?: SpellSlotLevel[];
  starting_cantrips?: number;
  cantrips_by_level?: { level: number; count: number }[];
}

export interface SpeciesTrait {
  name: string;
  effect: string;
  choices?: string[];
}

export interface Species {
  name: string;
  attribute_bonus: string;
  traits: SpeciesTrait[];
}

export interface Background {
  name: string;
  skill_bonus: string;
  feature: string;
}

export interface Skill {
  name: string;
  attribute: string;
  category: string;
}

export interface ModifierEntry {
  min: number;
  max: number;
  mod: number;
}

export interface ProficiencyEntry {
  min_level: number;
  max_level: number;
  bonus: number;
}

export interface APCost {
  name: string;
  cost: number;
  requires?: string;
}

export interface PointBuyCost {
  score: number;
  cost: number;
}

export interface WeaponData {
  name: string;
  tier: number;
  damage: string;
  stat?: string;
  range?: string;
  properties?: string[];
  cost?: number;
}

export interface ArmorData {
  name: string;
  tier: number;
  dv_bonus: number;
  special?: string;
  cost?: number;
}

export interface ShieldData {
  name: string;
  tier: number;
  dv_bonus: number;
  special?: string;
  cost?: number;
}

export interface AugmentData {
  name: string;
  tier: number;
  humanity_cost: number;
  effect: string;
  cost?: number;
}

export interface CantripData {
  name: string;
  type: string;
  effect: string;
  range: string;
}

// --- Progression system interfaces ---

export interface Doctrine {
  name: string;
  effect: string;
}

export interface DoctrinesByLevel {
  level_1: Doctrine[];
  level_6: Doctrine[];
}

export interface Talent {
  name: string;
  effect: string;
  enhances?: string;
  requires?: string;
  repeatable?: boolean;
}

export interface UniversalTalents {
  combat: Talent[];
  exploration: Talent[];
  skill: Talent[];
}

export interface MasteryPath {
  name: string;
  stats: string;
  narrative: string;
  features_11: string[];
  features_13: string[];
  capstone_15: string;
}

export interface MulticlassRequirement {
  archetype: string;
  stat: string;
}

export interface CrossTrainingTierCost {
  tier: number;
  normal: number;
  cross: number;
}

export interface CrossTrainingConfig {
  ap_multiplier: number;
  tier_costs: CrossTrainingTierCost[];
  max_other_archetypes: number;
  lock_in_threshold: number;
}

export interface GameData {
  species: Species[];
  backgrounds: Background[];
  classes: ClassData[];
  skills: Skill[];
  attributes: string[];
  attribute_names: Record<string, string>;
  standard_array: number[];
  point_buy_points: number;
  point_buy_costs: PointBuyCost[];
  modifier_table: ModifierEntry[];
  proficiency_by_level: ProficiencyEntry[];
  ap_costs: APCost[];
  starting_ap: number;
  ap_per_level: number;
  base_movement: number;
  base_humanity: number;
  cantrips: CantripData[];
  equipment: {
    melee_weapons: WeaponData[];
    ranged_weapons: WeaponData[];
    light_armor: ArmorData[];
    medium_armor: ArmorData[];
    heavy_armor: ArmorData[];
    shields: ShieldData[];
    augmentations: AugmentData[];
  };
  // Progression systems
  doctrines: Record<string, DoctrinesByLevel>;
  talent_levels: number[];
  legendary_talent_levels: number[];
  universal_talents: UniversalTalents;
  class_talents: Record<string, Talent[]>;
  legendary_talents: Talent[];
  mastery_paths: MasteryPath[];
  multiclass_requirements: MulticlassRequirement[];
  cross_training: CrossTrainingConfig;
}

const CLASS_FILES = [
  'rules/classes/warrior.md',
  'rules/classes/gunslinger.md',
  'rules/classes/mystic.md',
  'rules/classes/technician.md',
  'rules/classes/medic.md',
  'rules/classes/operative.md',
  'rules/classes/diplomat.md',
  'rules/classes/channeler.md',
];

export function loadGameData(): GameData {
  // Load character creation data (species, backgrounds, tables)
  const charCreate = loadRuleData('rules/character-creation.md');
  const cc = charCreate.data as Record<string, any>;

  // Load skills
  const skillsFile = loadRuleData('rules/skills.md');
  const sd = skillsFile.data as Record<string, any>;

  // Load equipment
  const equipFile = loadRuleData('rules/equipment.md');
  const eq = equipFile.data as Record<string, any>;

  // Load magic data (cantrips)
  const magicFile = loadRuleData('rules/magic.md');
  const mg = magicFile.data as Record<string, any>;

  // Load all class files
  const classes: ClassData[] = CLASS_FILES.map(path => {
    const { data } = loadRuleData(path);
    return data as ClassData;
  });

  // Load progression data (doctrines, mastery paths, multiclassing, cross-training)
  const progressionFile = loadRuleData('rules/progression.md');
  const prog = progressionFile.data as Record<string, any>;

  // Load talent data
  const talentFile = loadRuleData('rules/talents.md');
  const tal = talentFile.data as Record<string, any>;

  return {
    species: cc.species ?? [],
    backgrounds: cc.backgrounds ?? [],
    classes,
    skills: sd.skills ?? [],
    attributes: cc.attributes ?? ['MIG', 'AGI', 'END', 'INT', 'WIS', 'PRE'],
    attribute_names: cc.attribute_names ?? {},
    standard_array: cc.standard_array ?? [15, 14, 13, 12, 10, 8],
    point_buy_points: cc.point_buy_points ?? 27,
    point_buy_costs: cc.point_buy_costs ?? [],
    modifier_table: cc.modifier_table ?? [],
    proficiency_by_level: cc.proficiency_by_level ?? [],
    ap_costs: cc.ap_costs ?? [],
    starting_ap: cc.starting_ap ?? 15,
    ap_per_level: cc.ap_per_level ?? 10,
    base_movement: cc.base_movement ?? 30,
    base_humanity: cc.base_humanity ?? 10,
    cantrips: mg.cantrips ?? [],
    equipment: {
      melee_weapons: eq.melee_weapons ?? [],
      ranged_weapons: eq.ranged_weapons ?? [],
      light_armor: eq.light_armor ?? [],
      medium_armor: eq.medium_armor ?? [],
      heavy_armor: eq.heavy_armor ?? [],
      shields: eq.shields ?? [],
      augmentations: eq.augmentations ?? [],
    },
    // Progression systems
    doctrines: prog.doctrines ?? {},
    talent_levels: tal.talent_levels ?? [2, 4, 7, 9, 12, 14],
    legendary_talent_levels: tal.legendary_talent_levels ?? [18, 19],
    universal_talents: tal.universal_talents ?? { combat: [], exploration: [], skill: [] },
    class_talents: tal.class_talents ?? {},
    legendary_talents: tal.legendary_talents ?? [],
    mastery_paths: prog.mastery_paths ?? [],
    multiclass_requirements: prog.multiclass_requirements ?? [],
    cross_training: prog.cross_training ?? { ap_multiplier: 1.5, tier_costs: [], max_other_archetypes: 2, lock_in_threshold: 2 },
  };
}

/** Calculate attribute modifier from score. */
export function getModifier(score: number): number {
  return Math.floor((score - 10) / 2);
}
