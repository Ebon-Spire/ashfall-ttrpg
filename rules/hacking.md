# Hacking

![A hooded hacker sits surrounded by tangled cables and flickering monitors, an AI guardian's ghostly face watching from the largest screen](/images/illustrations/hacker-intrusion.png)

In the wasteland, pre-Fall digital infrastructure didn't just survive — it mutated. Corporate servers still hum in sealed bunkers, their AI guardians running on corrupted directives. Settlement mesh networks stitch together salvaged routers and jury-rigged repeaters. Military installations defend themselves with intrusion countermeasures that can fry a hacker's neural interface. And buried beneath it all, the old internet — fragmented, feral, and full of secrets.

This chapter provides comprehensive rules for digital intrusion, network construction, and cyberwarfare. It expands on the Hacking advanced skill and the Technician's Cyberwarfare abilities with a full subsystem for interacting with the digital world.

For the Hacking advanced skill, see [Advanced Skills](advanced-skills.md). For the Technician's Hacker specialization, see [Technician](classes/technician.md). For crafting tech systems (servers, AIs, networks), see [Crafting](crafting.md).

---

## Network Architecture

Every hackable system is a **network** — a collection of connected **nodes** defended by **ICE** (Intrusion Countermeasures Electronics). Understanding network architecture is the first step to cracking it open.

### Network Tiers

Networks have tiers that determine their complexity, security, and the quality of data within them.

| Network Tier | Example | Nodes | ICE Layers | Base Breach DC |
|---|---|---|---|---|
| Tier 1 — Scrap Net | Settlement bulletin board, abandoned terminal | 1-3 | 0-1 | DC 12 |
| Tier 2 — Local Net | Small settlement network, merchant database, clinic records | 3-5 | 1-2 | DC 14 |
| Tier 3 — Secured Net | Faction headquarters, military outpost, research lab | 5-8 | 2-3 | DC 17 |
| Tier 4 — Hardened Net | Corporate vault, AI-defended installation, orbital relay | 8-12 | 3-4 | DC 20 |
| Tier 5 — Fortress Net | Pre-Fall megacorp mainframe, alien data construct, sentient AI core | 12-20 | 4-5 | DC 24 |

### Nodes

A node is a discrete system within a network — a server, a terminal, a sensor array, a door controller. Each node has a **type** that determines what a hacker can do once they reach it.

| Node Type | Function | What You Can Do |
|---|---|---|
| **Gateway** | Network entry point | Establish connection, authenticate, or breach |
| **Data Store** | File servers, databases, archives | Extract data, plant false records, corrupt files |
| **Control** | Door locks, turrets, environmental systems | Open/close doors, redirect turrets, adjust life support |
| **Comm Relay** | Radio, satellite uplink, mesh repeater | Intercept messages, broadcast signals, jam frequencies |
| **Security Hub** | ICE deployment, alarm systems, logging | Disable alarms, suppress ICE, erase intrusion logs |
| **AI Core** | Autonomous intelligence, expert systems | Query the AI, negotiate, attempt override, extract knowledge |
| **Processing** | Computational resources, data analysis | Run decryption, analyze datasets, compile programs |
| **Vault** | High-security isolated storage | Access top-secret data, encryption keys, system master controls |

**Node Connections:** Nodes are connected in a topology. The GM maps the network as a simple diagram — nodes connected by lines. A hacker moves through the network node by node, like moving through rooms in a dungeon.

### Network Topology Types

| Topology | Description | Hacking Implication |
|---|---|---|
| **Linear** | Nodes in a chain (A→B→C→D) | Must traverse in order. Simple but predictable. |
| **Star** | All nodes connect to a central hub | Compromise the hub = access everything. Hub is heavily defended. |
| **Mesh** | Every node connects to multiple others | Multiple paths to any target. Hard to lock down, but also hard to navigate. |
| **Tree** | Branching hierarchy (root→branches→leaves) | Must climb from leaf to branch to root. Each branch may have its own ICE. |
| **Airgapped** | No external connections | Physical access required. Cannot be hacked remotely. Must plug in. |

---

## ICE (Intrusion Countermeasures Electronics)

ICE is automated security software that protects networks. When a hacker trips ICE, it activates and begins countermeasures. ICE comes in three categories: **White**, **Gray**, and **Black**.

### White ICE (Passive Defense)

White ICE doesn't attack — it blocks, logs, and alerts.

| ICE | Tier | Effect | Bypass DC |
|---|---|---|---|
| **Firewall** | 1+ | Blocks unauthorized access to a node. Must be bypassed to proceed. | DC 14 / DC 17 / DC 20 by tier |
| **Watchdog** | 2+ | Monitors for intrusion. If the hacker fails a check by 5+, Watchdog triggers an alert to the Security Hub. | DC 16 Hacking (see **Stealth Traverse**, Phase 3) |
| **Logger** | 1+ | Records all access. Even successful hacks leave evidence unless the logger is disabled. | DC 12 to disable |
| **Lockout Protocol** | 3+ | After 3 failed breach attempts, locks the gateway for 1 hour. Physical reset required. | Cannot bypass — prevent by not failing |
| **Honeypot** | 3+ | Fake node designed to look valuable. Accessing it triggers an alert and plants a tracker on the hacker's interface. | Investigation DC 18 to identify |

### Gray ICE (Active Defense)

Gray ICE fights back — it disrupts, ejects, and traces.

| ICE | Tier | Effect | Overcome DC |
|---|---|---|---|
| **Scrambler** | 2+ | Corrupts the hacker's connection. Imposes disadvantage on next Hacking check. | DC 16 Technology to clear |
| **Trace** | 2+ | Begins tracing the hacker's physical location. After 3 rounds, the hacker's location is known to network defenders. | DC 18 Hacking to evade, or disconnect |
| **Eject** | 3+ | Forces the hacker out of the network. Will save DC 17 or connection is severed. Re-entry requires a new breach. | Will save DC 17 |
| **Feedback Loop** | 3+ | Overloads the hacker's interface. 2d6 psychic damage. Neural interface users must make Fortitude DC 15 or be stunned 1 round. | DC 19 Technology to redirect |
| **Maze** | 4+ | Traps the hacker in a recursive loop of fake nodes. Intelligence DC 20 to recognize and escape. Each failed attempt wastes 1 round (combat) or 10 minutes (downtime). | INT DC 20 |

### Black ICE (Lethal Defense)

Black ICE is designed to kill. It targets the hacker's mind through their neural interface or connected device. Black ICE is illegal in most settlements but common in military and corporate networks.

| ICE | Tier | Effect | Survive |
|---|---|---|---|
| **Neural Spike** | 4+ | 4d8 psychic damage. Will save DC 19 for half. | Will save DC 19 |
| **Flatline** | 5 | 6d8 psychic damage + Fortitude DC 20 or drop to 0 HP. | Fortitude DC 20 after taking damage |
| **Mindburn** | 5 | 3d8 psychic damage + permanently lose 1 INT unless Greater Restoration is cast within 24 hours. | Will save DC 21 for half damage, no INT loss |
| **Cortex Bomb** | 5 | If a neural interface user is killed by Black ICE, the interface overloads. 4d6 fire damage in 5-foot radius around the body. | — (post-mortem effect) |
| **Puppet** | 5 | Will save DC 22 or the AI takes control of one of your augmentations for 1 minute. Retractable blades attack allies, integrated firearms fire randomly, dermal plating locks joints (restrained). | Will save at end of each turn to end |

**Black ICE and Non-Neural Hackers:** Characters hacking through an external device (terminal, datapad) instead of a neural interface take half damage from Black ICE (the signal is attenuated through the device). However, external devices are destroyed if they take 20+ damage from a single Black ICE hit.

---

## Intrusion Procedure

A hack follows a five-phase procedure. In combat, each phase takes 1 action. During downtime, each phase takes the listed time.

### Phase 1: Reconnaissance

Before attempting a breach, a hacker scans the target network to assess its defenses.

**Check:** Hacking or Technology vs. DC 12 (Tier 1) to DC 20 (Tier 5)
**Time:** 10 minutes (downtime) or 1 action (combat, with disadvantage)

**Success reveals (choose a number equal to margin of success ÷ 2, minimum 1):**
- Network tier and topology type
- Number and type of ICE layers
- Number of nodes (approximate)
- Location of a specific node type (if you know what you're looking for)
- Whether an AI guardian is present
- Known vulnerabilities (+2 to your next Breach check)

**Failure:** You learn nothing useful. Failure by 5+ alerts the network that someone is probing.

### Phase 2: Breach

Gain initial access to the network through the Gateway node.

**Check:** Hacking vs. the network's Base Breach DC (see Network Tiers table)
**Time:** 1 minute (downtime) or 1 action (combat)

**Breach Methods:**

| Method | Modifier | Notes |
|---|---|---|
| **Brute Force** | -2 to DC | Fast but loud. Automatically triggers Watchdog ICE if present (bypasses the normal fail-by-5+ threshold — Watchdog activates regardless of check outcome). |
| **Exploit Vulnerability** | -4 to DC | Requires successful Recon that identified a vulnerability. |
| **Social Engineering** | Use Deception instead of Hacking | Trick an authorized user into providing access. Only works if a user is present. |
| **Physical Access** | -5 to DC | Direct hardwire connection to a node. Requires being physically at the terminal. |
| **Credential Theft** | Auto-success on Gateway | Requires stolen credentials (looted, pickpocketed, or socially engineered). Access level limited to the credential holder's clearance. |

**Success:** You're in. You now occupy the Gateway node and can navigate to adjacent nodes.
**Failure:** Breach fails. You can retry, but each failure after the first increases the DC by 2 (the system adapts).
**Failure by 5+:** Lockout triggers (Tier 3+) or countermeasures deploy.

### Phase 3: Navigate

Move through the network from node to node, bypassing ICE as you encounter it.

**Check:** Hacking vs. ICE bypass DC (see ICE tables) for each layer of ICE
**Time:** 1 round per node (combat) or 5 minutes per node (downtime)

**Navigation Options:**

- **Move to Adjacent Node:** Standard movement. Encounter any ICE defending that node.
- **Stealth Traverse:** Move without triggering Watchdog ICE. Hacking check vs. Watchdog's detection DC. Failure triggers the Watchdog.
- **Map Network:** Spend an action to reveal all nodes adjacent to your current node and their types.
- **Bypass ICE:** Attempt to disable or circumvent ICE blocking your path. On success, the ICE is suppressed for 1 minute (combat) or 10 minutes (downtime).
- **Destroy ICE:** Permanently disable ICE. Requires beating the bypass DC by 5+. The network administrator knows ICE was destroyed and can rebuild it during downtime.

### Phase 4: Execute

Once you reach your target node, perform the action you came for.

**Check:** Depends on the action (see Node Actions below)
**Time:** 1 action (combat) or varies (downtime)

### Phase 5: Exfiltrate

Get out cleanly. Exfiltration is automatic if no alarms have been triggered. If the network is on alert:

**Check:** Hacking vs. DC 15 (alert level 1) / DC 18 (alert level 2) / DC 22 (alert level 3)
**Time:** 1 action (combat) or 1 minute (downtime)

**Clean Exit:** No evidence of your presence beyond what Loggers recorded.
**Messy Exit:** Disconnect immediately (free action) but leave traces. Network administrators can identify your neural interface signature or device MAC address with a Technology DC 16 check.
**Trapped:** If you fail exfiltration while Black ICE is active, you take one more hit from the ICE before disconnecting.

---

## Node Actions

What you can do at each node type. All actions require 1 action in combat or the listed time in downtime.

### Data Store Actions

| Action | DC | Time (Downtime) | Effect |
|---|---|---|---|
| **Extract Data** | DC 14-22 by encryption | 10-30 min | Copy files to your storage device. |
| **Search Database** | DC 12 | 5 min | Query for specific information. |
| **Plant False Records** | DC 16 | 15 min | Insert fabricated data. Investigation DC 18 to detect. |
| **Corrupt Data** | DC 14 | 5 min | Destroy or scramble stored data. Recovery requires backup. |
| **Encrypt Data** | DC 16 | 10 min | Lock data with your own encryption. Others need your key or must crack it. |

### Control Node Actions

| Action | DC | Time (Downtime) | Effect |
|---|---|---|---|
| **Open/Close Doors** | DC 12 | Instant | Toggle door locks. Blast doors: DC 16. Vault doors: DC 20. |
| **Redirect Turret** | DC 18 | 1 min | Change turret's friend/foe designation. Lasts until reset. Redirected turrets remain under your control for 1 minute (10 rounds) or until you lose concentration (taking damage requires a Will save — DC 10 or half the damage taken, whichever is higher — to maintain control). Each turret requires a separate Redirect check. |
| **Environmental Override** | DC 16 | 5 min | Control lights, ventilation, temperature, gravity (if applicable). |
| **Lockdown** | DC 18 | 1 min | Seal all doors in a section. Override DC 20 from inside. |
| **Trigger Alarm** | DC 10 | Instant | Activate facility-wide alert. Useful as a distraction. |
| **Disable Safety Protocols** | DC 20 | 10 min | Remove safety limits on machinery, environmental systems, or power. Dangerous. |

### Comm Relay Actions

| Action | DC | Time (Downtime) | Effect |
|---|---|---|---|
| **Intercept Transmission** | DC 16-24 | 10 min setup | Monitor communications. Contested Hacking to detect. |
| **Jam Frequency** | DC 16 | 1 min | Block all radio communication within the relay's range. |
| **Broadcast** | DC 12 | Instant | Send a message on any frequency the relay supports. |
| **Spoof Signal** | DC 18 | 10 min | Send false messages that appear to originate from authorized sources. |
| **Trace Signal** | DC 16 | 10 min | Identify the physical location of a transmitter using the relay. |

### Security Hub Actions

| Action | DC | Time (Downtime) | Effect |
|---|---|---|---|
| **Disable Alarm** | DC 14 | 1 min | Suppress alarms for 10 minutes. |
| **Suppress ICE** | DC 18 | 5 min | Deactivate one ICE layer for 10 minutes. |
| **Erase Logs** | DC 14 | 5 min | Delete evidence of your intrusion. |
| **Deploy ICE** (defender only) | DC 14 | 5 min | Activate dormant ICE on a specific node. |
| **Reset Lockout** | DC 16 | 5 min | Clear lockout protocols, allowing re-entry. |

### AI Core Actions

| Action | DC | Time (Downtime) | Effect |
|---|---|---|---|
| **Query AI** | DC 14 | 5 min | Ask the AI a question. It answers truthfully if the query is within its parameters. Hostile AIs may lie — make a **contested Intelligence check** (your INT modifier + proficiency bonus vs. the AI's INT modifier + its Tier) to detect the deception. On a tie, you cannot determine whether the AI is lying. |
| **Negotiate** | Persuasion or Deception vs. AI's Will DC | 10 min | Convince the AI to cooperate, stand down, or provide access. Sapient AIs have personalities and goals. |
| **Override AI** | DC 22+ | 30 min | Force the AI to obey commands against its programming. Non-sapient AI only. Sapient AI cannot be overridden — only persuaded, deceived, or destroyed. |
| **Extract AI** | DC 20 | 1 hour | Copy the AI to a portable storage medium. Requires sufficient storage (see Tech Systems Crafting in [Crafting](crafting.md)). |
| **Destroy AI** | DC 18 | 10 min | Wipe the AI's core programming. Permanent. Sapient AIs get a Will save DC 20 to resist. |

### Vault Node Actions

| Action | DC | Time (Downtime) | Effect |
|---|---|---|---|
| **Crack Vault** | DC 22-26 | 30 min - 1 hour | Access the vault's contents. Multiple checks may be required (3-check skill challenge). |
| **Extract Vault Contents** | DC 14 after cracking | 10 min | Copy or download vault data. Physical items require physical access. |
| **Relock Vault** | DC 18 | 10 min | Seal the vault behind you, hiding evidence of access. |

---

### Processing Node

Processing nodes contain the network's computational resources — servers running calculations, decryption queues, data analysis pipelines. Most hackers skip these, but a skilled operator can leverage raw processing power for significant tactical advantages.

| Action | Check | Time | Effect |
|--------|-------|------|--------|
| **Run Decryption** | Technology DC by encryption tier (16/20/24/28) | 1 action (combat) / 10 min (downtime) | Decrypt one encrypted data file or communication. Decrypted data can be read, copied, or exfiltrated. |
| **Analyze Dataset** | Investigation DC 15 (routine) / DC 20 (buried) | 1 action (combat) / 30 min (downtime) | Extract hidden patterns from raw data. GM reveals one useful fact: security patrol schedules, financial records showing a weakness, personnel files with blackmail material, etc. |
| **Compile Program** | Technology DC 18 | 2 actions (combat) / 1 hour (downtime) | Create a temporary program from available source code. The program functions as a standard Tier 2 program (your choice) and lasts until the network reboots or you disconnect. Requires an available program slot. |
| **Brute-Force Calculation** | None (automatic) | 1 action | Dedicate processing resources to one task. Your next Navigate or Execute check in this intrusion gains a **+2 bonus**. Usable once per intrusion — the node's resources are consumed. |
| **Overclock** | Technology DC 16 | 1 action | Push the processor to maximum output. You gain **advantage** on your next Navigate or Execute check. On failure, the strain triggers a **Yellow alert** (or escalates Yellow to Red). Risk/reward: advantage on a key check, but failure is costly. |

---

## Hacking in Combat

When hacking during active combat (not leisurely downtime), the following modifications apply:

### Action Economy

- Each intrusion phase costs **1 action**
- Bypassing ICE costs **1 action per ICE layer**
- Node actions cost **1 action** unless specified
- You can hack and take other actions on the same turn (3-action economy)
- You must maintain **line of effect** (an unbroken signal path — wireless range, wired connection, or network relay; not the same as line of sight) to a connected device or be within Neural Interface range

### Concentration

Active hacking requires **concentration**, following the same core rules as spell concentration (see **Magic — Concentration**).

**Will save DC:** When you take damage while connected to a network, make a **Will save**. The DC equals **10 or half the damage taken, whichever is higher**.

**On failure:** You are **disconnected from the network entirely**. Your avatar is ejected, all active hacking effects end, and you must re-breach the network from scratch on a subsequent turn. This includes losing control of any redirected systems (turrets, doors, locks).

**Single concentration slot:** You can maintain only **one concentration effect** at a time — whether that's an active hack, a redirected turret, a redirected security system, or a spell requiring concentration. If you redirect a turret (which requires concentration), you cannot simultaneously concentrate on a spell or maintain control of another system. Starting a new concentration effect ends the previous one.

**Standing orders:** Systems you've already reprogrammed (permanently changing friend/foe designations, disabled alarms, unlocked doors) do **not** require concentration. Only active, ongoing control (turret targeting, system override, live monitoring) requires concentration.

### Combat Hacking Shortcuts

The Technician's Neural Interface and Hacker specialization bypass much of the intrusion procedure:

| Feature | Effect |
|---|---|
| **Neural Interface (Level 1)** | Breach as 1 action at DC 10/15/20. No recon phase needed for simple devices. |
| **System Breach (Hacker Level 6)** | 60 ft range, control for 1 minute with concentration. Bypass ICE automatically on Tier 1-2 networks. |
| **Encrypt (Hacker Level 6)** | Protect ally's augments from hacking. 30 ft range, 1 hour duration. |
| **Neural Spike (Hacker Level 8)** | Skip the network entirely — attack augments directly. 3d8 + stun. |
| **Data Ghost (Hacker Level 8)** | Advantage on stealth traversal. Falsify records in 10 minutes. |
| **Total System Override (Hacker Level 10)** | Skip ALL intrusion phases. Auto-control everything within 100 ft for 10 minutes. Systems defended by Tier 4+ ICE or controlled by a sapient AI are exempt from Total System Override and must be hacked individually. |

### Non-Technician Combat Hacking

Characters with the Hacking advanced skill can hack in combat, but it's slow:
- Recon: 1 action (with disadvantage)
- Breach: 1 action
- Navigate: 1 action per node
- Execute: 1 action

A typical hack during combat takes **4-6 actions** (1.5 to 2 full turns). This is intentional — the Hacking skill is designed for deliberate out-of-combat intrusion, not firefight hacking. The Technician build owns combat hacking.

---

## Digital Combat

When ICE fights back or when two hackers oppose each other in the same network, digital combat occurs.

### Initiative

Digital combat uses the same initiative as physical combat. If you're already in physical combat, your hacking actions happen on your normal turn.

### Hacker vs. ICE

ICE activates when triggered and acts on **initiative count 10** (or the network administrator's initiative, if one is actively defending). ICE attacks automatically — no roll needed from the ICE. The hacker must make saves or checks to resist.

**ICE Threat Level** scales with network tier:

| Network Tier | ICE Attack Bonus | ICE Save DC |
|---|---|---|
| Tier 1 | — | DC 12 |
| Tier 2 | — | DC 14 |
| Tier 3 | — | DC 17 |
| Tier 4 | — | DC 19 |
| Tier 5 | — | DC 22 |

> **Note:** This table provides default DCs for generic ICE effects and GM-created ICE. The specific ICE types listed in the White/Gray/Black ICE tables above have their own fixed DCs that take precedence. For example, a Firewall explicitly scales by tier (DC 14/17/20), while Neural Spike always uses DC 19 regardless of network tier.

### Digital Combat (Hacker vs. Hacker)

When two hackers meet inside a network, combat resolves through a **3-round Digital Duel** — a structured battle of wits, exploits, and nerve. Each round represents seconds of furious code execution and counter-intrusion.

**Initiative:** Both hackers roll Initiative normally. The higher Initiative acts first in each round.

**Round 1 — Probe:**
Both hackers make **contested Technology checks**. The winner learns the opponent's **loaded programs, connection method** (neural interface, deck, terminal), and **current network access level**. The loser learns nothing. Tie: both learn connection method only.

**Round 2 — Exploit:**
Both hackers make **contested Technology checks**. The winner chooses one effect:
- **Eject from Node (Safe):** Opponent is pushed out of the current node and must spend 1 action to return.
- **Deploy ICE (Aggressive):** A program you have loaded activates against the opponent as if they triggered it. The opponent must resolve the ICE normally.
- **Steal Program (Risky):** Attempt to copy one of the opponent's loaded programs. The opponent makes a **Will save (DC = your Technology DC)**. On failure, you copy the program into an empty slot. On success, you learn which program they protected but gain nothing.

**Round 3 — Resolution:**
Final **contested Technology check**. Results:
- **Win by 5+:** Opponent is ejected from the network, takes **2d8 psychic damage**, and their connection point is **traced** (you learn their physical location).
- **Win by 1-4:** Opponent is ejected from the current node only. No damage. No trace.
- **Tie:** Both hackers are ejected from the node. Neither takes damage.

**Disengage:** At the start of any round, either hacker can **Disengage** as a free action, exiting the duel. The disengaging hacker is ejected from the current node (not the network) and the network alert level increases by one step.

**Action Economy:** Each round of a Digital Duel costs **1 action** per hacker. A 3-round duel consumes all 3 actions in a turn. If one hacker has actions remaining after the duel ends (e.g., the opponent Disengaged in Round 2), they can use remaining actions normally.

### Active Network Defense

A network administrator (an NPC or player character) can actively defend their network. This takes concentration and limits them to 1 action per turn for physical actions.

**Defender Actions (1 action each):**

| Action | Effect |
|---|---|
| **Deploy ICE** | Activate dormant ICE on a specific node. |
| **Trace Intruder** | Contested Hacking check. Success reveals the hacker's current node. |
| **Eject Intruder** | Contested Hacking check. Success forces the hacker to a random adjacent node. Win by 5+: ejected from network. |
| **Lockdown Node** | Seal a node. Hacker must beat DC 18 to leave. |
| **Reroute** | Change node connections. The network topology shifts — one connection is severed and one new one is created. |
| **Call Reinforcements** | Alert physical security to the hacker's location (if traced). |

---

## Network Alerts

Networks have four alert levels that escalate as intrusion is detected.

| Alert Level | Triggers (any one) | Effect |
|-------------|-------------------|--------|
| **Green (Normal)** | Default state | No additional security. ICE operates normally. |
| **Yellow (Suspicious)** | Failed hack check by **3+**; Watchdog ICE triggered; Logger records **3+ unauthorized access events** in 1 minute; ICE bypassed but not disabled | +2 to all ICE DCs. Active administrator may engage. Patrol frequency doubles in physical facility. |
| **Red (Breach Confirmed)** | Failed hack check by **5+**; any ICE destroyed (not bypassed); alarm manually triggered by administrator or physical security; Black ICE activated; **3+ Yellow triggers** accumulated in single intrusion | +4 to all ICE DCs. All dormant ICE activates. Physical security responds in 1d4 minutes. Network may initiate controlled shutdown. |
| **Lockdown** | **3+ Red triggers** accumulated in single intrusion; Trace ICE completes its countdown | Network locks **all Gateways** for 1 hour. Physical-only access or a Tier 5+ exploit (Technology DC 26) can re-enter. All active hackers are forcibly disconnected and take **2d8 psychic damage** (Will save for half, DC 18). |

**De-escalation:** If no intrusion activity is detected for **10 minutes** (downtime) or **5 rounds** (combat), the alert level drops by one step. Reaching the Security Hub and disabling alarms drops the alert level to **Green** immediately. Lockdown cannot be de-escalated — it must expire (1 hour) or be bypassed.

**Logger clarification:** A Logger ICE records each unauthorized access event (failed check, bypassed ICE, accessed restricted node). Three recorded events within 1 minute automatically triggers a Yellow alert. The Logger itself does not count as a "Yellow trigger" for Red escalation — only the resulting Yellow alert does.

---

## Programs and Hacking Tools

Hackers can carry software tools that provide bonuses or special capabilities. These are crafted or purchased items (see [Crafting](crafting.md) for construction rules).

### Common Programs

| Program | Tier | Effect | Cost |
|---|---|---|---|
| **Icebreaker** | 2 | +2 to checks to bypass or destroy one specific type of ICE. Consumed on use. | 50 cr / 3 Salvage |
| **Skeleton Key** | 3 | Automatically bypass one Firewall (any tier). Single use. | 200 cr / 5 Salvage + 2 Tech |
| **Ghost Protocol** | 3 | Advantage on stealth traversal for 10 minutes (downtime) or 3 rounds (combat). Single use. | 150 cr / 4 Salvage + 2 Tech |
| **Data Siphon** | 2 | Extract data 50% faster. Reusable. | 100 cr / 3 Salvage + 1 Tech |
| **Decryption Suite** | 3 | +4 to checks to extract encrypted data. Reusable. | 300 cr / 8 Salvage + 3 Tech |
| **Spoofer** | 2 | +2 to Spoof Credentials checks. Can maintain 2 spoofed identities simultaneously. Reusable. | 75 cr / 4 Salvage + 1 Tech |
| **Signal Jammer** | 2 | Jam all wireless signals within 100 feet for 10 minutes. Physical device, not software. | 100 cr / 5 Salvage + 1 Tech |
| **Packet Sniffer** | 2 | Automatically intercept unencrypted transmissions within relay range. Reusable. | 75 cr / 3 Salvage + 1 Tech |
| **Virus Payload** | 3 | Plant in a node. After 1 hour, corrupts all data in that node. Technology DC 18 to detect before activation. Single use. | 200 cr / 5 Salvage + 2 Tech |
| **Worm** | 4 | Plant in a node. Spreads to adjacent nodes over 1d4 hours, corrupting each. Technology DC 20 to detect. Single use. | 500 cr / 10 Salvage + 4 Tech |
| **Trojan** | 3 | Disguised as legitimate data. When a user accesses it, grants the hacker a backdoor — future breach attempts against this network are at DC -4. Persists until discovered (Technology DC 18). Single use. | 250 cr / 6 Salvage + 3 Tech |
| **Killswitch** | 4 | Emergency disconnect. If Black ICE damages you, automatically disconnect before any further damage. Prevents Cortex Bomb. Single use. | 300 cr / 8 Salvage + 3 Tech |

### Advanced Programs

| Program | Tier | Effect | Cost |
|---|---|---|---|
| **AI Companion** | 5 | A semi-autonomous hacking assistant. Acts on your initiative, can bypass one ICE per round independently (Hacking +8). Must be loaded into your interface. See AI construction in [Crafting](crafting.md). | 2,000 cr / 20 Salvage + 8 Tech |
| **Phantom Node** | 4 | Create a fake node in the network. ICE treats it as a legitimate node and ignores the hacker for 1d4 rounds. Single use. | 400 cr / 10 Salvage + 4 Tech |
| **ICE Breaker Suite** | 4 | +2 to all ICE bypass checks (all types). Reusable. | 800 cr / 15 Salvage + 5 Tech |
| **Neural Firewall** | 3 | +4 to saves against Black ICE. Reusable. Requires neural interface. | 500 cr / 10 Salvage + 3 Tech |
| **Deep Freeze** | 5 | Target one AI Core. The AI is suspended for 1 hour. DC 24 Hacking to deploy. Sapient AIs get a Will save DC 20. Single use. | 1,500 cr / 20 Salvage + 8 Tech |

### Program Slots

A hacker can load a limited number of programs into their interface or device at once:

| Device | Program Slots |
|---|---|
| Basic datapad | 2 |
| Advanced datapad | 4 |
| Neural interface (standard) | 4 |
| Neural interface (upgraded) | 6 |
| Custom deck (crafted) | 6-10 (based on tier) |

Swapping programs requires 10 minutes and access to your program library (stored on a data chip or at a base terminal).

### Using Programs in Combat

Programs loaded into a hacking device (datapad, neural interface, custom deck) follow these rules during combat hacking:

**Passive Programs** (Ghost Protocol, Neural Firewall, Signal Mask): Always active once loaded. No action required. Their effects apply automatically as long as you are connected to a network.

**Active Programs** (Icebreaker, Skeleton Key, Virus Payload, Data Siphon): Activating an active program costs **1 action** (or replaces one Navigate/Execute action during a hack). You can activate a maximum of **1 active program per turn** — even if you have actions remaining. Programs that target ICE or nodes resolve immediately.

**Reactive Programs** (Counter-Intrusion, Tripwire): Activate automatically when their trigger condition is met. Do not cost an action. You can have multiple reactive programs loaded, and each triggers independently.

**Program Slots:** Your device's program slot limit (datapad 2-4, neural interface 4-6, custom deck 6-10) determines how many programs you can have loaded simultaneously. Swapping a loaded program for a different one requires **10 minutes** outside of combat or is not possible during combat.

---

## Secure Tunnels

A **secure tunnel** is an encrypted point-to-point communication channel that resists interception, tracing, and tampering. Tunnels are critical infrastructure for factions, trade networks, and covert operations.

### Creating a Secure Tunnel

**Requirements:**
- Two endpoints (physical devices: comm relay, server, terminal, neural interface)
- Both endpoints must be powered and operational
- Hacking or Technology proficiency

**Check:** Technology DC 16 (local, <1 mile) / DC 18 (regional, <50 miles) / DC 22 (long-range, <500 miles) / DC 26 (satellite relay, unlimited)
**Time:** 1 hour (local) / 4 hours (regional) / 1 day (long-range) / 3 days (satellite)
**Cost:** 50 cr + 2 Tech (local) / 200 cr + 5 Tech (regional) / 1,000 cr + 10 Tech (long-range) / 5,000 cr + 25 Tech (satellite)

### Tunnel Properties

| Property | Description |
|---|---|
| **Encrypted** | All data transmitted is encrypted at the tunnel tier. Intercepting requires beating the encryption DC. |
| **Authenticated** | Only authorized users can connect. Spoofing credentials requires Hacking vs. the tunnel's creation DC + 4. |
| **Point-to-Point** | Cannot be redirected. Data goes from A to B only. |
| **Bandwidth** | Supports text, voice, and low-resolution data transfer. Video requires a Tier 3+ tunnel. Streaming sensor data requires Tier 4+. |

### Tunnel Encryption Tiers

| Tier | Encryption DC to Break | Notes |
|---|---|---|
| Basic | DC 16 | Scrambled signal. Deters casual eavesdropping. |
| Standard | DC 20 | Military-grade encryption. Requires Hacking skill to break. |
| Advanced | DC 24 | Pre-Fall corporate encryption. Only master hackers can crack it. |
| Quantum | DC 28 | Theoretically unbreakable. Requires alien tech or AI assistance to establish. |

### Maintaining Tunnels

Tunnels require periodic maintenance or they degrade:
- **Check:** Technology DC 12, once per month
- **Failure:** Tunnel reliability drops. 25% chance per use that the connection drops or data is corrupted.
- **Neglected for 3+ months:** Tunnel collapses. Must be re-established from scratch.

Physical damage to either endpoint immediately severs the tunnel.

### Tunnel Operations

**Who can create a tunnel?** Any character with **Hacking or Technology proficiency** and access to a compatible endpoint device (comm relay, server, terminal, or neural interface). The initiating endpoint must be a device you physically control or are currently hacked into.

**Endpoint initiation:** Once a tunnel is established, **either endpoint** can initiate communication. The receiving endpoint does not need an operator — data can be sent to an unmanned terminal for later retrieval.

**Can tunnels be traced?** Standard ICE and network monitoring **cannot** detect an active secure tunnel. Detecting a tunnel requires one of:
- An **Adaptive AI or higher** (cognitive level 4+) actively scanning: **Investigation DC 22**
- A dedicated **counter-intrusion scan** by a skilled hacker: **Technology DC 20**, requires **10 minutes** of active scanning
- **Physical inspection** of the endpoint hardware: **Investigation DC 18**, requires physical access to the device

**Tunnel destruction:** Destroying or powering down **either endpoint** immediately closes the tunnel. Data in transit at the moment of closure is lost. The remaining endpoint receives a "connection terminated" alert but no information about why.

**Tunnel limits:** A single device can maintain a maximum of **3 simultaneous tunnels**. Each additional tunnel beyond 3 requires a Technology DC 20 check to establish (the device's bandwidth is strained).

---

## Building and Defending Your Own Network

Characters who establish a base (see [Downtime](downtime.md)) can build and maintain their own network. This provides communication infrastructure, data storage, and defensive capabilities.

### Network Construction

Use the crafting rules in [Crafting](crafting.md) for building individual components. The network as a whole is assembled from these components:

| Component | Crafting Tier | Function |
|---|---|---|
| Terminal (Gateway) | Tier 2 | Entry point for users and potential intruders |
| File Server (Data Store) | Tier 2 | Store data, records, maps, formulas |
| Control Hub | Tier 3 | Manage door locks, lighting, alarms |
| Comm Relay | Tier 3 | Enable radio and network communication |
| Security Server | Tier 3 | Run ICE, log access, deploy countermeasures |
| AI Housing (AI Core) | Tier 4+ | Host an AI guardian (see Crafting) |
| Compute Cluster (Processing) | Tier 3 | Run analysis, decryption, compilation |
| Vault Server | Tier 4 | Isolated high-security storage |

### Installing ICE on Your Network

You can install ICE on your network's nodes to defend against intrusion.

**Requirements:** Technology or Hacking proficiency. Security Server node must be present.

| ICE Type | Install DC | Cost | Time |
|---|---|---|---|
| Firewall | DC 14 | 50 cr / 3 Salvage + 1 Tech | 2 hours |
| Watchdog | DC 16 | 100 cr / 5 Salvage + 2 Tech | 4 hours |
| Logger | DC 12 | 25 cr / 1 Salvage | 1 hour |
| Lockout Protocol | DC 18 | 150 cr / 5 Salvage + 3 Tech | 1 day |
| Honeypot | DC 18 | 200 cr / 8 Salvage + 3 Tech | 1 day |
| Scrambler | DC 16 | 100 cr / 5 Salvage + 2 Tech | 4 hours |
| Trace | DC 16 | 100 cr / 5 Salvage + 2 Tech | 4 hours |
| Eject | DC 18 | 150 cr / 8 Salvage + 3 Tech | 1 day |
| Feedback Loop | DC 20 | 300 cr / 10 Salvage + 4 Tech | 2 days |
| Maze | DC 22 | 500 cr / 15 Salvage + 5 Tech | 3 days |
| Neural Spike (Black) | DC 24 | 1,000 cr / 20 Salvage + 8 Tech | 5 days |

**ICE Maintenance:** Each piece of ICE requires a Technology DC 12 check per month to maintain. Unmaintained ICE has a 25% chance of failing when triggered. ICE destroyed by intruders must be reinstalled from scratch.

---

## Build Feature Synergies

The Hacking advanced skill is available to any character, but certain build features change how characters interact with networks. The **Technician** remains the undisputed master of digital systems — the features below provide alternative approaches, not replacements.

For Technician-specific hacking features, see **Combat Hacking Shortcuts** above.

### Scavenger

- **Salvage Data (L1):** When a hack fails or you are ejected from a network, spend 1 Salvage Die to salvage data fragments. You recover partial information from the last node you accessed — enough for one useful detail (a name, a location, a partial schematic, a security rotation schedule) at the GM's discretion. This doesn't require a check but can only be used once per network per day.
- **Jury-Rig Access (L6 Tinkerer):** You can bypass a Gateway node on Tier 1-2 networks using Engineering instead of Hacking. This takes 2 actions (instead of the normal Breach phase) and requires physical access to the network's hardware. On success, you enter the network at Alert Level Yellow (the bypass is noisy). This does not work on Tier 3+ networks.

### Infiltrator

- **Intel Dice — Reconnaissance (L1):** When performing Phase 1: Reconnaissance on a network, spend 1 Intel Die to gain advantage on the Hacking check. On success, you also learn the network's topology type (Linear, Star, Mesh, Tree, or Airgapped) in addition to the normal reconnaissance results.
- **Contingency — Digital (L2):** You may prepare one of the following digital contingencies: **Dead Man's Switch** (if you are forcibly disconnected, one pre-selected data file is automatically copied to your terminal), **False Trail** (when detected, the Trace ICE targets a spoofed location — you gain 1 extra round before your physical location is identified), or **Backdoor** (if you successfully exfiltrate, you leave a hidden access point; your next Breach check on this network within 24 hours has advantage).
- **Cascade Failure (L6 Saboteur):** When you successfully compromise a Control node, you may trigger a cascade failure. The network's Alert Level increases by 2 (affecting all other hackers present) and one connected node of your choice goes offline for 1d4 rounds. This is loud, aggressive, and distinctly not how a Technician would do it.

### Psion

- **Psionic Interface (L1, requires Telepathy discipline):** You can interface with an AI Core node using Psionic Power (WIS) instead of Hacking (INT). This bypasses the Gateway entirely — you connect directly to the AI's consciousness. However: this only works on networks that have an AI Core node, you can only access the AI Core (not other nodes), and the AI gets a Will save (DC = your Psionic Power DC) to reject the connection. On a failed save, you can communicate with the AI, attempt to persuade or deceive it, or extract information it has access to. Sapient and Transcendent AIs are immune to compulsion through this method but can still be communicated with. Each round of psionic interface adds +1 Focus.
- **Psionic Breach (L5):** Spend 2 Focus to force a connection to a Tier 1-3 network's Gateway without equipment. Make a Psionic Power check against the network's Base Breach DC. On success, you enter the network in a limited psionic state: you can traverse nodes and access Data Stores, but you cannot use programs or hacking tools. You take 1d4 psychic damage each round you remain connected. On failure, you take 2d6 psychic damage and the network goes to full alert. This does not work on Tier 4-5 networks.

### Mutant

- **Biological Interface (L1, requires Heightened Senses or Prehensile Limbs mutation):** You can interface with biotech networks (Kethara Collective systems, alien-grown networks, organic computing nodes) without a terminal. Your biological tissue forms a direct connection. You use Survival or Nature instead of Hacking for checks on biotech networks. This provides no benefit on standard electronic networks. Biotech networks are uncommon — the GM determines when this applies.
- **Adaptive Response — Digital (L2):** The first time you take neural feedback damage from ICE in an encounter, you gain resistance to neural feedback damage for the remainder of that hack. Your mutant physiology rapidly adapts to the attack pattern. This does not protect against Black ICE effects other than direct damage (Puppet, Cortex Bomb, and Mindburn still apply normally).

---

## Web Hosting and Services

In the wasteland, the "web" isn't the old internet — it's a patchwork of local mesh networks, settlement intranets, and faction-operated relay chains. Hosting a service on this infrastructure is valuable and dangerous.

### Hosting a Service

A hosted service runs on a server you control and provides ongoing functionality to connected users.

| Service Type | Server Tier | Monthly Upkeep | Function |
|---|---|---|---|
| **Bulletin Board** | Tier 2 | 10 cr / 1 Salvage | Post and read messages. Local settlement range. |
| **Marketplace Portal** | Tier 3 | 50 cr / 3 Salvage + 1 Tech | List items for sale/trade. Buyers can browse remotely. Requires comm relay for range. |
| **Information Broker** | Tier 3 | 75 cr / 4 Salvage + 2 Tech | Automated query system. Store and sell intel. Faction reputation tracking. |
| **Comm Hub** | Tier 3 | 50 cr / 3 Salvage + 1 Tech | Relay encrypted voice/text between connected users. Supports secure tunnels. |
| **Medical Database** | Tier 3 | 50 cr / 3 Salvage + 1 Tech | Remote diagnosis assistance. +2 to Medicine checks for connected users. |
| **Tactical Overlay** | Tier 4 | 100 cr / 5 Salvage + 3 Tech | Real-time battlefield data. Connected allies gain +1 to Initiative. Requires sensor network. |
| **Crafting Archive** | Tier 3 | 50 cr / 3 Salvage + 1 Tech | Store and share formulas. +2 to Research checks for connected crafters. |
| **Surveillance Grid** | Tier 4 | 100 cr / 5 Salvage + 3 Tech | Network of cameras/sensors. Alerts on movement. Requires physical sensors placed. |
| **Training Simulator** | Tier 4 | 100 cr / 5 Salvage + 3 Tech | VR/AR training environment. Reduces downtime training time by 25%. |
| **Dark Market** | Tier 4 | 150 cr / 8 Salvage + 4 Tech | Anonymous marketplace. Black market goods. Attracts both buyers and unwanted attention. |

### API Interfaces

An **API (Automated Protocol Interface)** connects two services or systems, allowing them to share data and trigger actions automatically. APIs are the glue that turns isolated systems into integrated infrastructure.

**Creating an API:**
- **Check:** Technology DC 16 (simple data sharing) / DC 18 (conditional triggers) / DC 22 (complex multi-system integration)
- **Time:** 4 hours (simple) / 1 day (conditional) / 3 days (complex)
- **Cost:** 25 cr + 1 Tech (simple) / 75 cr + 2 Tech (conditional) / 200 cr + 5 Tech (complex)

### API Types

| API Type | Function | Example |
|---|---|---|
| **Data Sync** | Automatically share data between two Data Stores. | Medical Database syncs patient records with a remote clinic. |
| **Alert Trigger** | When a condition is met on one system, trigger an action on another. | Surveillance Grid detects intruder → Control Hub locks doors → Comm Hub sends alert. |
| **Remote Access** | Allow authorized users to access a system from a different network. | Crafting Archive accessible from a field terminal 50 miles away via secure tunnel. |
| **Automated Commerce** | Process buy/sell transactions between Marketplace Portals. | Settlement A's surplus grain auto-listed on Settlement B's marketplace at agreed prices. |
| **Sensor Aggregation** | Combine data from multiple sensor sources into a single feed. | Drone camera + surveillance grid + perimeter sensors → Tactical Overlay. |
| **Command Relay** | Issue commands to remote systems through an intermediary. | Hacker sends commands through a comm relay to control a turret network in another building. |

### API Security

APIs are attack vectors. Every API you create is a potential pathway for hackers.

- **Unsecured API:** Any hacker who reaches the API's node can use it to access the connected system. They don't need to breach the remote system separately.
- **Authenticated API:** Requires credentials. Adds the API creation DC as the bypass DC for unauthorized use.
- **Rate-Limited API:** Only processes a set number of requests per minute. Prevents brute-force attacks but limits legitimate throughput.
- **Encrypted API:** Data in transit is encrypted at the tunnel tier used by the connection.

**Best Practice:** Always run APIs through secure tunnels with authentication. An unsecured API connecting your base's control hub to a remote turret is an invitation for someone to turn your own guns on you.

---

## Quick Reference

### Intrusion Phases

| Phase | Check | Time (Combat) | Time (Downtime) |
|---|---|---|---|
| Recon | Hacking vs. Network DC | 1 action (disadv.) | 10 min |
| Breach | Hacking vs. Breach DC | 1 action | 1 min |
| Navigate (per node) | Hacking vs. ICE DC | 1 action | 5 min |
| Execute | Varies | 1 action | Varies |
| Exfiltrate | Hacking vs. Alert DC | 1 action | 1 min |

### Common DCs

| Task | DC |
|---|---|
| Hack civilian terminal | DC 12 |
| Breach settlement network | DC 14 |
| Bypass Firewall (Tier 2) | DC 17 |
| Bypass Black ICE (Tier 4) | DC 19 |
| Crack military encryption | DC 20 |
| Override non-sapient AI | DC 22 |
| Breach fortress network | DC 24 |
| Break quantum encryption | DC 28 |

### Hacking Skill vs. Technician Build

| Capability | Hacking Skill | Technician (Hacker) |
|---|---|---|
| Breach networks | Yes (10 min) | Yes (1 action) |
| Combat hacking | Slow (4-6 actions) | Fast (1-2 actions) |
| Bypass ICE | Yes (check per layer) | Auto-bypass Tier 1-2 |
| Damage through network | No | Yes (Neural Spike, Neural Assault) |
| Control all electronics | No | Yes (Total System Override) |
| Erase traces | No (leaves evidence) | Yes (Data Ghost, automatic) |
| Build/install ICE | Yes | Yes (with advantage) |
| Create secure tunnels | Yes | Yes (with advantage) |
| Craft programs | Yes (Technology check) | Yes (Technology check, +tier bonus) |
