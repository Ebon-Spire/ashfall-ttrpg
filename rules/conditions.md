# Conditions & Status Effects
![A warrior fights through multiple afflictions — frost, bleeding, radiation, and binding energy](/images/illustrations/conditions-afflicted.png)

## Core Conditions

### Addicted

- You must use the addictive substance at least once every 24 hours or suffer **disadvantage on all ability checks** until you do
- **Curing Addiction:** Requires either a dose of Detox (500 cr) or **1 week of complete abstinence** followed by a Fortitude save (DC 18) at the end of the week. On failure, the addiction persists and the week must be attempted again.
- A character can be addicted to multiple substances simultaneously. Each addiction is tracked separately.
- **Duration:** Indefinite until cured.

### Blinded
- Auto-fail sight-based checks
- Attacks have disadvantage
- Attacks against you have advantage
- -10 to Passive Perception
- *Duration: Source-dependent. Ends when the blinding effect ends. Temporary blindness from flash effects (Flashbang, Flare) typically lasts 1 round.*

### Bleeding
- Take 1d4 damage at the start of each of your turns (no save)
- A creature can use 1 action to make a Medicine check (DC 12) to stop the bleeding
- Receiving any magical healing also stops the bleeding
- Multiple bleeding effects stack (take damage from each source separately)

### Burning

You are on fire. At the start of each of your turns, you take **1d6 fire damage**.

- **Save to End:** At the end of each of your turns, make a **Fortitude save** against the source's DC to end the condition. If the Burning was caused by an environmental effect with no listed DC, the default DC is **13**.
- **Extinguish (Self):** You can spend **1 action** to smother the flames (drop prone and roll), ending the condition automatically.
- **Extinguish (Ally):** An adjacent ally can spend **1 action** to smother the flames on you, ending the condition.
- **Full Submersion:** Entering a body of water or being fully doused ends the condition immediately (no action required).
- **Fire Resistance/Immunity:** A creature with resistance to fire damage takes half damage from Burning (round down, minimum 1). A creature immune to fire damage cannot gain the Burning condition.
- **Stacking:** Burning does not stack with itself. If a new Burning effect is applied while you are already Burning, use the higher damage or the higher save DC — whichever is more severe. Unlike Bleeding, which stacks from multiple sources, Burning replaces with the more severe effect. A creature can be both Bleeding and Burning simultaneously.
- *Duration: Until extinguished via save, action, or submersion.*

> *Cross-Reference — Environmental Fire:* Standing in or entering a burning square (see **Combat: Spreading Hazards: Fire**) deals 1d6 fire damage as terrain damage. This is separate from the Burning condition. Environmental fire does not automatically inflict Burning unless the GM rules the creature's clothing or gear has caught fire, or a specific ability (such as Scorched Earth) explicitly applies the condition.

> *"The worst part isn't the heat. It's the smell — your own gear melting into your skin."* — Mox, Slagtown scavenger

### Buried

A creature trapped under rubble, collapsed earth, or other heavy debris gains the Buried condition.

- You are **restrained** and **cannot breathe** (you begin holding your breath; see **Combat: Underwater Combat: Breath-Holding** for duration)
- You are **blinded** and **deafened**
- You take **1d6 bludgeoning damage** at the start of each of your turns from crushing weight
- When your held breath runs out, you gain the **Suffocating** condition
- **Escape:** You can spend **2 actions** on your turn to attempt an **Athletics check (DC 15)** to dig yourself free. On success, you emerge prone in the nearest unoccupied space.
- **Rescue:** An adjacent ally can spend **1 action** to dig you out (no check required — they can see and reach the debris). If two adjacent allies each spend **1 action** on the same round, you are freed automatically.
- **Heavy Burial (GM discretion):** In cases of massive collapse (entire building, cave-in), the GM may increase the escape DC to 18 or 20, or require multiple successful checks to fully free the creature.

### Charmed
- Cannot attack or target charmer with harmful effects
- Charmer has advantage on social checks against you
- Ends if charmer or charmer's allies harm you
- Charmed also ends after 24 hours unless the source specifies a longer duration.

### Confused
- At the start of your turn, roll 1d4:
  - **1:** Move in a random direction (use full movement)
  - **2:** Take no action this turn (stand dazed)
  - **3:** Attack the nearest creature (ally or enemy) with a melee attack
  - **4:** Act normally this turn
- Cannot take reactions
- Ends at the end of your next turn unless specified otherwise

### Dazed
- On your turn, you must choose: use your actions (up to 3) or use your movement — you cannot do both
- Cannot take reactions
- Disadvantage on attack rolls
- Ends at the end of your next turn unless specified otherwise

### Deafened
- Auto-fail hearing-based checks
- -10 to Passive Perception
- *Duration: Source-dependent. Ends when the deafening effect ends.*

### Diseased

Disease is a broad condition with effects that vary by the specific illness. When a creature becomes Diseased, the source specifies the disease's **severity**, **effects**, and **save DC**.

**General Rules:**
- At the end of each long rest, a Diseased creature makes a **Fortitude save** against the disease's DC. On success, the disease's severity decreases by 1 tier. On failure, the severity increases by 1 tier (to a maximum of Severe).
- **Three consecutive successes** cure the disease entirely.
- **Treatment:** A creature proficient in Medicine can treat a Diseased character during a long rest (Medicine check, DC = disease DC). On success, the patient has **advantage** on their next Fortitude save against the disease.

**Severity Tiers:**

| Severity | General Effects | Example |
|----------|----------------|---------|
| **Mild** | Disadvantage on one type of ability check | Common cold: disadvantage on END checks |
| **Moderate** | Disadvantage on ability checks + one additional effect (reduced speed, reduced max HP by 10%, etc.) | Rad-Flu: disadvantage on END checks, max HP reduced by 10% |
| **Severe** | Disadvantage on ability checks and saves + major effect (max HP reduced by 25%, 1 exhaustion per day, etc.) | Plague: disadvantage on all saves, max HP reduced by 25%, 1 exhaustion per long rest without treatment |

**Removal:**
- Three consecutive Fortitude save successes during long rests
- *Greater Restoration* (5th-level spell) cures any disease instantly
- Medical facility treatment (8 hours, Medicine DC 20) reduces severity by 1 tier immediately
- **Toxin Filters** augmentation grants advantage on saves against disease

**Duration:** Until cured or the creature dies.

### Dying

- You are at **0 HP** and **Unconscious** (which includes Prone — see **Condition Priority** below)
- At the start of each of your turns, you make a **death saving throw** (see **Combat — Death and Dying**)
- **3 successes:** You are **Stabilized** — no longer Dying, but remain Unconscious at 0 HP (see **Stabilized** below)
- **3 failures:** You die
- Receiving any healing ends the Dying condition immediately — you regain consciousness if healed to 1+ HP
- Taking damage while Dying causes 1 automatic death save failure (critical hit = 2 failures)
- **Duration:** Until stabilized, healed, or dead.

### Flat-Footed
- Lose AGI bonus to Defense Value (DV)
- Cannot use reactions
- Triggered by being surprised, caught unaware, or specific abilities

### Shaken
Shaken is always tied to a specific source. It is the minor form of fear — less debilitating than Frightened but still tactically significant.
- Disadvantage on **Will saving throws**
- Cannot willingly move closer to the source of the Shaken condition
- Removed by any effect that removes the Frightened condition
- *Severity: Minor (fear axis, below Frightened)*

### Frightened
Frightened is always tied to a specific source.
- Disadvantage on checks and attacks while source is visible
- Cannot willingly move closer to source
- -2 to DV while source is visible
- Unless the source specifies otherwise, a Frightened creature can **repeat the saving throw** at the end of each of its turns, ending the effect on a success.

### Grappled
- Speed becomes 0
- Cannot benefit from speed bonuses
- Ends if grappler is incapacitated or moved out of reach
- **Escape:** Use 1 action, contested check (Athletics or Acrobatics) vs grappler's Athletics

### Incapacitated
- Cannot take actions or reactions
- Lose concentration on spells

### Incorporeal
- Physical attacks and non-magical effects pass harmlessly through you
- You cannot interact with physical objects (pick up items, open doors, pull levers)
- You can move through solid objects and creatures as if they were difficult terrain
- If you end your turn inside a solid object, you take 1d10 force damage and are shunted to the nearest unoccupied space
- Magical attacks and force damage affect you normally

### Invisible
- Impossible to see without special senses
- Attacks have advantage
- Attacks against you have disadvantage
- Leave visual tracks (footprints, disturbed objects)

### Paralyzed
- Incapacitated, can't move or speak
- Auto-fail MIG and AGI saves
- Attacks against you have advantage
- Melee hits within 5 feet are automatic crits
- *Duration: Source-dependent. Unless the source specifies otherwise, a Paralyzed creature can repeat the saving throw at the end of each of its turns, ending the effect on a success.*

### Petrified
- Transformed to stone
- Incapacitated, can't move or speak
- Unaware of surroundings
- Resistance to all damage
- Immune to poison/disease
- Weight increases by factor of 10
- *Duration: Indefinite unless reversed. Greater Restoration or similar magic restores the creature.*

### Poisoned
- Disadvantage on attack rolls
- Disadvantage on ability checks
- May have additional effects depending on poison type
- *Duration: Source-dependent. Common poisons last 1 hour unless stated otherwise. A creature can repeat the saving throw at the end of each of its turns if the poison allows it.*

### Prone
- Can only crawl (half speed) or stand (costs 1 action)
- Disadvantage on attack rolls
- Melee attacks against you have advantage
- Ranged attacks against you have disadvantage

### Restrained
- Speed becomes 0
- Attacks have disadvantage
- AGI saves have disadvantage
- Attacks against you have advantage

### Slowed
- Movement speed halved
- Disadvantage on AGI saves
- Cannot take reactions
- Ends at the end of your next turn unless specified otherwise

### Stabilized

You have been brought back from the brink of death but remain unconscious.

- You are **Unconscious** at 0 HP (which includes Prone — see **Condition Priority** below)
- You no longer make **death saving throws**
- After **1d4 hours**, you regain 1 HP and become conscious
- Can be awakened early by receiving any healing
- You gain the **Wounded** condition when you regain consciousness (see **Wounded** below)
- **Duration:** Until you regain HP (from natural recovery or healing).

*See **Combat — Death and Dying** for the full rules on stabilization, including the Medicine check (DC 10) to stabilize a Dying creature.*

### Stunned
- Incapacitated, can't move
- Can speak falteringly (GM discretion)
- Auto-fail MIG and AGI saves
- Attacks against you have advantage
- *Duration: Source-dependent. Unless the source specifies otherwise, Stunned ends at the end of the creature's next turn.*

### Suffocating

*See the full Suffocating rules below (after Wounded).*

### Traumatized

The Traumatized condition represents a psychological break-point — a wound that rest alone cannot heal. Unlike most conditions, Traumatized has no fixed duration. It persists until resolved through narrative, downtime, or a Medic's care.

**How it's gained:** Reaching Stress Point 5 on the Stress track (see **Exploration — Stress**).

**Effect:**
- When the character enters a situation **strongly similar** to the source of their Trauma (GM defines the trigger at the time the condition is gained — it should be specific: "firefight in a civilian area," "losing an ally to an ambush," "isolation in darkness"), they must make a **Will save (DC 12)**.
  - **On failure:** The character is **Frightened** for 1 round (source is the trauma trigger), and loses **1 action** this turn. The Frightened condition ends at the end of the round regardless.
  - **On success:** The character proceeds normally. They still feel the weight of it, but their training holds.
- Outside of trauma trigger situations, the character functions normally. **Traumatized does not impose a combat death spiral.** Most combats will not trigger the save at all.
- The Traumatized condition **cannot be applied to another character by player action** — it is gained only through the Stress track.

**Removal:**
Traumatized cannot be removed by rest. Requires one of:
1. Resolving a meaningful narrative arc related to the trauma source
2. Completing the **Seeking Counsel** downtime activity (see **Downtime — Personal Recovery**)
3. A **Medic's Psychological First Aid** (DC 16 Medicine, requires a Long Rest camp)

After removal, the character's Stress returns to 3 — not zero. The trauma has been integrated, not erased.

*Severity: Moderate — meaningful but not incapacitating. The mechanical effect is limited, narrowly triggered, and imposes one lost action, not a loss of agency.*

### Unconscious
- Incapacitated, can't move or speak
- Unaware of surroundings
- Drop everything held, fall prone
- Auto-fail MIG and AGI saves
- Attacks have advantage
- Melee hits from within 5 feet are automatic crits

### Weakened
- Disadvantage on all attack rolls
- Disadvantage on all Might (MIG) checks and saves
- Carrying capacity halved

**Usage:** The Weakened condition is inflicted by:
- **Diseases** at Severe tier (see **Diseased** above)
- **Critical injuries** — when a creature takes damage equal to half its max HP from a single attack, the GM may impose Weakened until the end of the creature's next turn
- **Creature abilities** — certain powerful creatures (Corpse Titan, Breach Horrors) can inflict Weakened through melee attacks or area effects
- **Duration default:** Unless otherwise specified, Weakened lasts until the end of the creature's next long rest or until removed by *Greater Restoration* or a spell or effect that explicitly removes conditions.

### Wounded

You have sustained a serious injury that impairs you beyond simple HP loss.

- **-2 to all attack rolls**
- **-1 to DV**
- **Disadvantage on MIG and AGI checks** (not saves)
- **Trigger:** You become Wounded when you drop to 0 HP and are stabilized (or healed from 0 HP). The wound represents the lasting trauma of near-death.
- **Removal:** A **short rest** with successful Medicine check (DC 15), any effect that says "remove the Wounded condition" (such as Trauma Override stim or Pain Suppressor serum), or *Greater Restoration*
- **Stacking:** Wounded does not stack. You are either Wounded or you are not.
- **Duration:** Until removed.

> *"Everyone thinks the hard part is not dying. The hard part is moving after."* — Dr. Kaelen, Freehold field surgeon

### Suffocating

A creature that runs out of breath or is exposed to an airless environment gains the Suffocating condition.

- At the start of each of your turns, make a **Fortitude save (DC 12)**. The DC increases by **+2** for each consecutive failed save.
- **Failure:** You take **1d8 damage** (oxygen deprivation — this damage cannot be reduced or redirected) and are **Dazed** until the end of your next turn.
- **Success:** You take no damage but remain suffocating — the clock is still ticking.
- **Third Failure:** You gain the **Drowning** condition (if in water) or fall **unconscious** (if buried or in a vacuum). You continue making Fortitude saves while unconscious.
- **Removal:** The condition ends immediately when you can breathe again (reach the surface, receive air from an ally, activate a Rebreather, etc.). All accumulated DC increases reset.

### Drowning

A creature that fails 3 Suffocating saves while submerged in liquid, or that fails an Athletics check to stay afloat while submerged, gains the Drowning condition. Drowning is a more severe form of suffocation specific to submersion.

- You are **incapacitated** and your speed becomes 0
- You **sink** 10 feet at the start of each of your turns
- At the start of each of your turns, you take **2d6 damage** (this damage cannot be reduced or redirected)
- If you are reduced to 0 HP while drowning, you are dying and automatically fail one death saving throw at the start of each of your turns until rescued
- **Rescue:** An adjacent creature can use **1 action** to grab you and begin towing you (their speed is halved while towing). You can also be rescued by any effect that grants you the ability to breathe or removes you from the water.
- **Recovery:** When you can breathe again, the Drowning condition ends. You retain any damage taken and remain at your current HP. If you were dying, normal death save rules resume.

---

### Condition Severity Quick Reference

| Severity | Conditions | General Impact |
|----------|-----------|----------------|
| **Light** | Prone, Dazed, Flat-Footed, Deafened, Shaken | Minor tactical disadvantage; easily removed |
| **Moderate** | Frightened, Poisoned, Restrained, Slowed, Grappled, Bleeding, Burning, Charmed, Weakened, Wounded, Incorporeal, Invisible | Significant combat impact; may require action to remove or counter |
| **Severe** | Stunned, Paralyzed, Blinded, Incapacitated, Buried, Confused* | Near-total loss of agency; immediate priority to remove |
| **Critical** | Unconscious, Petrified, Dying, Suffocating, Drowning | Character cannot act; death risk if unresolved |

*\*Confused defaults to a 1-turn duration unless the source specifies otherwise. It is classified as Severe based on per-turn impact (complete loss of agency), not duration. A 1-turn Confused is still worth removing immediately if possible.*

*Note: The Advanced Stim's "remove 1 condition" effect currently has no severity restriction. This severity table is for GM reference only, not for limiting existing item effects.*

---

### Condition Interactions

#### Advantage and Disadvantage

Multiple sources of advantage do not stack — you roll 2d20 and take the highest regardless of how many sources of advantage you have. The same applies to disadvantage. If you have both advantage and disadvantage from any number of sources, they cancel out and you roll normally (1d20).

#### Movement Reduction Stacking

When multiple conditions reduce your movement speed, apply them in this order:
1. **Speed set to 0** (Grappled, Restrained, Buried) — overrides all other movement modifiers
2. **Speed halved** (Slowed, Exhaustion 4, Prone crawling) — apply multiplicatively if multiple halving effects exist. A creature that is Slowed and Prone crawls at **one-quarter** speed.
3. **Speed reduction** (Exhaustion 1: -5 ft) — apply after halving.

Minimum speed is 0 ft (a creature cannot have negative speed).

#### Condition Priority

Some conditions include the effects of others. When a creature is subject to a condition that encompasses a lesser condition, only the greater condition applies:
- **Unconscious** includes Incapacitated (do not track both)
- **Paralyzed** includes Incapacitated (do not track both)
- **Stunned** includes Incapacitated (do not track both)
- **Petrified** includes Incapacitated and Restrained (do not track all three)
- **Dying** includes Unconscious and Prone (do not track all three)

If the greater condition ends but the lesser was applied independently, the lesser condition persists.

#### Stacking Identical Conditions

Most conditions do not stack with themselves. A creature cannot be "double Frightened" or "double Stunned." If a new source applies a condition you already have, the longer or more severe version applies.

**Exceptions:**
- **Exhaustion** stacks (each level adds cumulative effects)
- **Irradiated** stacks (each level adds cumulative effects)
- **Bleeding** stacks (each source deals damage separately)

---

## Exhaustion System

Exhaustion is a cumulative condition with six levels. Effects of all levels apply simultaneously.

### Exhaustion Levels

**Level 1: Fatigued**
- Disadvantage on ability checks
- -5 feet movement speed

**Level 2: Weary**
- All Level 1 effects
- Disadvantage on attack rolls
- Maximum carrying capacity halved

**Level 3: Drained**
- All previous effects
- Disadvantage on saving throws
- Maximum HP reduced by 25%
- Cannot benefit from temp HP

**Level 4: Severely Weakened**
- All previous effects
- Movement speed halved
- Maximum HP reduced by 50% (replaces 25% from Level 3)
- Cannot take reactions
- Healing received reduced to 75% (see **Healing Reduction** below)

**Level 5: Critically Exhausted**
- All previous effects
- Speed reduced to 5 feet
- Cannot concentrate on spells or effects
- Disadvantage on death saving throws
- Max HP reduced by 75%
- Healing received reduced to 50% (replaces 75% from Level 4) (see **Healing Reduction** below)

**Level 6: Death**
- Character dies from complete exhaustion

---

## Gaining Exhaustion

### Environmental Sources
- **24 hours without sleep:** 1 level, then 1 per additional 24 hours
- **3 days without food:** 1 level, then 1 per day
- **1 day without water:** 1 level, then 1 per day (2 per day in heat)
- **Harsh heat/cold (2+ hours):** Fortitude save DC 12 every hour or gain 1 level
- **Extreme heat/cold (2+ hours):** Fortitude save DC 16 every hour or gain 1 level
- **High altitude:** Fortitude save DC 15 per day or gain 1 level
- **Radiation (Irradiated Level 3+):** 1 level per day without treatment; 1 level per 12 hours at Level 4 (see **Radiation** below)

### Activity Sources
- **Forced march beyond 8 hours:** Fortitude save DC 10 + (hours beyond 8) per hour or gain 1 level
- **Swimming/climbing (extended):** Fortitude save DC 15 every 30 minutes or gain 1 level
- **Running at sprint speed for 10+ minutes:** 1 level automatically

### Combat and Ability Sources
- Some spells/abilities inflict exhaustion
- Sandevistan implant causes 1 level after use
- Critical Burnout from magic causes 1-2 levels
- Diseases may cause exhaustion as symptom

### Resurrection
- Being raised from dead: 3 levels of exhaustion

---

## Removing Exhaustion

As a general rule, exhaustion is reduced by 1 level after each long rest (1 week) with adequate food, water, and shelter. The detailed recovery rules below apply for faster or more complete recovery.

### Normal Recovery
- Short Rest (8 hours): Remove 1 level of Exhaustion (levels 1–2 only). Levels 3+ require a Long Rest.
- Long Rest (7 days): Fully remove Exhaustion for characters at levels 1–4 (recover to 0). Characters at Exhaustion 5–6 remove 2 levels per Long Rest (2 weeks to fully recover from level 5; 2 weeks from level 6). Requires adequate food, water, shelter, and no new exhaustion during rest.

### Accelerated Recovery
- **Medical Treatment:** Medicine check DC 20, patient removes 1 additional level at next long rest (once per day)
- **Greater Restoration (5th-level spell):** Remove 1 level instantly

---

## Fatigue vs. Exhaustion

**Fatigue** is a minor, temporary condition distinct from the Exhaustion track.

**Fatigue:**
- Gained from minor overexertion (sprinting, short combat)
- Single effect: -2 to MIG and AGI checks
- Removed by 10-minute rest
- If you gain Fatigue while already Fatigued, it becomes Exhaustion 1

**Exhaustion:**
- Gained from serious deprivation or overuse
- Stacking levels with escalating penalties
- Removed by rests or magic (Short Rest removes L1-2 only; L3+ requires Long Rest)

---

## Interaction with Other Conditions

### Stacking Disadvantages
- Exhaustion levels 1, 2, and 3 impose various disadvantages
- These DO stack with disadvantages from other sources (still roll only 2d20, take lowest)

### Healing Reduction
At high Exhaustion levels, healing is less effective:
- **Exhaustion 4:** Healing restores 75% normal HP
- **Exhaustion 5:** Healing restores 50% normal HP

### Combat Danger
- Exhaustion 5 makes you extremely vulnerable in combat
- Avoiding combat is highly recommended at this level

---

## Radiation

Radiation is the invisible legacy of the Fall — orbital bombardment, nuclear detonation, bioweapon dispersal, and stellar cataclysm left vast regions of Kael Morra saturated with ionizing energy. Unlike a blade wound or a poison, radiation does not announce itself. You do not feel it entering your body. You feel it later, when the damage is already done.

Radiation exposure is tracked as a **4-level condition** called **Irradiated**. Each level represents escalating cellular damage, from mild nausea to organ failure. The effects of each level are cumulative — a character at Irradiated Level 3 suffers all effects of Levels 1, 2, and 3.

### Irradiated Levels

**Level 1 — Exposed**
- Disadvantage on END checks and saves
- Mild nausea, headache, metallic taste
- No max HP reduction

**Level 2 — Contaminated**
- All Level 1 effects
- Disadvantage on all ability checks (not just END)
- Maximum HP reduced by **10%** (round down)
- Hair loss, persistent fatigue, suppressed appetite

**Level 3 — Irradiated**
- All Level 2 effects
- Disadvantage on attack rolls
- Maximum HP reduced by **25%** (replaces Level 2 reduction)
- Gain **1 level of exhaustion** per day without treatment
- Internal bleeding, immune system collapse, open sores

**Level 4 — Critical Irradiation**
- All Level 3 effects
- Maximum HP reduced by **50%** (replaces Level 3 reduction)
- Take **1d6 necrotic damage** at the start of each hour without treatment
- Gain **1 level of exhaustion** per 12 hours without treatment (replaces Level 3 rate)
- If not reduced to Level 3 or lower within **72 hours**, the character dies — organ failure, no death saves
- Cognitive impairment, organ shutdown, hemorrhaging

> *"Three days on the glass and your teeth start singing. Five days and you're coughing red."* — Mox, Slagtown scavenger

---

### Gaining Radiation Levels

Radiation sources have an **intensity** that determines the Fortitude save DC and how quickly exposure escalates.

#### Radiation Source Intensity

| Intensity | Fortitude DC | Exposure Rate | Examples |
|-----------|-------------|---------------|----------|
| **Mild** | DC 12 | Save every **hour** of exposure | Edge of contaminated zone, old reactor site (exterior), irradiated water supply, low background radiation |
| **Moderate** | DC 15 | Save every **10 minutes** of exposure | Active contaminated zone, radiation storm, irradiated creature (prolonged proximity), Thornwall Basin deep growth |
| **Severe** | DC 18 | Save every **minute** of exposure | Nuclear blast crater (interior), unshielded reactor core, Crucible glass fields during storm, direct contact with irradiated creature |
| **Extreme** | DC 22 | Save every **round** of exposure | Ground zero of active detonation, unshielded stellar cataclysm event, weaponized radiation source |

**On a failed save:** Gain 1 level of Irradiated. A character cannot gain more than 1 level per failed save.

**On a successful save:** No additional radiation gained. The character resists this interval of exposure but must save again at the next interval.

**Critical failure (fail by 10+):** Gain 2 levels of Irradiated instead of 1.

#### Cumulative Exposure

Radiation exposure is cumulative. Leaving a contaminated zone does not reset your Irradiated level — the damage is already done. Only treatment reduces radiation levels (see **Reducing Radiation Levels** below).

#### Ingested or Injected Radiation

Consuming irradiated food or water, or being wounded by an irradiated creature's natural weapons, bypasses external protection. The character makes a Fortitude save at the source's DC with no benefit from worn radiation protection (Hazmat Suit, Radiation-Lined Clothing). The Kethara Biofilter and Mutation Resilience still apply, as they represent internal biological resistance.

---

### Reducing Radiation Levels

Radiation does not heal on its own. Without treatment, a character's Irradiated level remains indefinitely (and worsens at Level 3+ due to exhaustion gain).

#### Treatment Options

| Treatment | Effect | Requirements |
|-----------|--------|-------------|
| **RadPurge** (consumable, 100 cr) | Remove **1 level** of Irradiated | 1 action, self or adjacent ally |
| **Anti-Rad Serum** (consumable, 350 cr) | Remove **up to 2 levels** of Irradiated | 1 action, self or adjacent ally. Tier 3 consumable. |
| **Rest in clean environment** | Remove **1 level** of Irradiated (Level 1-2 only) | 24 hours of rest with no radiation exposure. Does not work for Level 3-4. |
| **Medicine check** (DC 15 / DC 20) | Reduce by **1 level** | 1 hour of treatment. DC 15 for Level 1-2; DC 20 for Level 3-4. Requires medical supplies. Once per patient per day. |
| **Medical facility treatment** | Reduce by **up to 2 levels** | 8 hours in a Clinic or Surgery Suite. Requires trained staff (Medicine proficiency). |
| **Greater Restoration** (5th-level spell) | Remove **all levels** of Irradiated | Standard casting time and components |
| **Kethara Biofilter** (Wondrous item) | Neutralize **1 radiation level** on short rest | Automatic during short rest, no action required |
| **Pharmacology: Synthesize Compound** | Craft Anti-Rad Serum or RadPurge | Science DC 24 (Anti-Rad Serum), DC 16 (RadPurge). 1 hour, requires lab equipment. |

#### Treatment Notes

- **RadPurge** is the most accessible field treatment. A well-supplied party should carry 2-3 doses per member when entering known radiation zones.
- **Anti-Rad Serum** is the advanced option for severe exposure. It can reduce Level 4 to Level 2 in a single dose, buying time to reach a medical facility.
- **Rest in clean environment** only works for Level 1-2. At Level 3+, the damage is too severe for the body to repair without medical intervention.
- **Greater Restoration** is the nuclear option (appropriately). It removes all radiation but costs a 5th-level spell slot — a significant resource in the gritty rest economy.
- Exhaustion gained from Level 3-4 radiation must be removed separately through normal exhaustion recovery rules (see **Exhaustion System** above). Reducing radiation level stops further exhaustion gain but does not remove exhaustion already accumulated.

---

### Radiation Protection

Several items and abilities provide protection against radiation exposure. Protection applies to the Fortitude save against gaining radiation levels.

| Protection | Effect |
|-----------|--------|
| **Hazmat Suit** (200 cr) | **Immune** to Mild radiation sources. **Advantage** on saves vs Moderate sources. Normal saves vs Severe/Extreme. -5 ft movement speed while worn. |
| **Radiation-Lined Clothing** (100 cr) | **Advantage** on saves vs Mild radiation sources only. No benefit against Moderate or higher. |
| **RadBlock** (consumable, 75 cr) | **Advantage** on all radiation saves for 8 hours. Stacks with worn protection (Hazmat Suit + RadBlock = advantage + immunity to Mild). |
| **Mutation Resilience** (Mutant feature) | **Advantage** on all radiation saves. The Mutant's body has developed broad-spectrum biological resistance to mutagenic exposure. |
| **Kethara Biofilter** (Wondrous item) | **Advantage** on all radiation saves. Can neutralize 1 radiation level on short rest. |
| **Toxin Filters** (augmentation) | **Advantage** on saves against poison, disease, and radiation. |

**Stacking:** Advantage from multiple sources does not stack (advantage is advantage). However, immunity (Hazmat Suit vs Mild) and advantage (RadBlock) interact — if a source is Mild and you wear a Hazmat Suit, you are immune and no save is needed, regardless of other advantage sources.

---

### Radiation and Other Systems

**Radiation and Exhaustion:** Irradiated Level 3+ causes exhaustion gain over time. This creates a dangerous spiral — exhaustion reduces max HP (at Level 3 exhaustion: -25%), and radiation also reduces max HP. These reductions stack multiplicatively. A character at Irradiated 3 (max HP -25%) and Exhaustion 3 (max HP -25%) has their max HP reduced to approximately **56%** of normal. This combination is lethal if not addressed quickly.

**Radiation and Healing:** Healing spells and stims restore HP normally, but cannot exceed the reduced maximum. A character at Irradiated Level 3 with 100 max HP has an effective maximum of 75 HP — no amount of healing exceeds this until the radiation is treated.

**Radiation and Death Saves:** Radiation does not impose disadvantage on death saves (that is exhaustion's domain). However, the reduced max HP means a character stabilized at 1 HP after radiation exposure is far more fragile.

**Radiation and Mutants:** The Mutant build's **Mutation Resilience** grants advantage on all radiation saves. This makes Mutants the most radiation-resistant characters in the game — thematically appropriate, as their bodies have already been reshaped by mutagenic forces. A Mutant wearing a Hazmat Suit in a Moderate radiation zone has advantage (from Mutation Resilience) on a DC 15 save every 10 minutes. In Mild zones, the Hazmat Suit provides full immunity regardless.

**Radiation and the Kethara Biofilter:** The Biofilter provides advantage on radiation saves and can neutralize one radiation level on a short rest. "Neutralize" means remove 1 level of Irradiated — this functions identically to a RadPurge but activates automatically during rest.

---

### GM Guidance: Placing Radiation Hazards

Radiation zones should create meaningful route and resource decisions, not unavoidable damage taxes.

**Exploration Use:**
- Mark radiation zones on the map with clear visual tells: glass-fused ground, dead vegetation, discolored water, NBC detection kit readings. Players should know they're entering a zone before it's too late — the tension comes from choosing to enter anyway.
- Use Mild zones as common terrain features that tax supplies (RadBlock, RadPurge) without threatening death.
- Use Moderate zones as obstacles that force route decisions: the shortcut through the contaminated district saves 2 days of travel but requires radiation protection.
- Use Severe zones sparingly — these are dungeon-level hazards (sealed reactor room, Crucible storm) that create time pressure. Every round counts.
- Extreme sources are encounter-level threats — the collapsing reactor, the weaponized radiation beam, the heart of a stellar cataclysm artifact. These are not terrain; they are enemies.

**Encounter Use:**
- Irradiated creatures can inflict radiation through melee attacks (Fortitude save at the creature's listed intensity on a hit). This makes fighting mutant beasts in the Crucible or Thornwall Basin more dangerous than fighting the same creatures elsewhere.
- Environmental radiation during combat creates tactical decisions: do you push through the hot zone to flank, or take the long way around?
- Radiation storms can serve as encounter timers — the storm hits in 10 rounds, and anyone not in shelter makes Moderate saves every 10 minutes.

**Setting-Specific Sources:**
- **The Crucible:** Moderate to Severe radiation across the glass fields. Sealed pre-war crates and bunkers are the objective — but reaching them means exposure.
- **Thornwall Basin:** Mild radiation from mutated plant life. Ingested radiation (contaminated water, spore inhalation) is the primary threat, bypassing worn protection.
- **Pre-Fall Nuclear Sites:** Severe radiation at the core, Moderate in outer sections, Mild in surrounding terrain. Classic dungeon structure with escalating danger.
- **Radiation Storms:** Moderate intensity, save every 10 minutes of exposure. Shelter negates. These are weather events, not permanent zones — they pass in 1d4 hours.
- **Voidscar Proximity:** Some Voidscars emit intermittent radiation pulses — Mild to Moderate, unpredictable timing. An NBC Detection Kit (100 cr) warns of pulses 1 minute before they hit.
