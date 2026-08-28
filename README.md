##Real-Time Crypto Fraud Attribution & Investigation Platform

Overview

The Real-Time Crypto Fraud Attribution & Investigation Platform is an investigator-focused intelligence system designed to trace cryptocurrency funds from a victim-reported wallet, reconstruct the movement of funds across multiple transaction hops, identify intermediary wallets and exchange/VASP associations, detect suspicious transaction patterns, calculate an explainable risk score, and generate standardized investigation reports.

The platform is designed around the central investigative question:

A victim reported this wallet. Where did the money go, which intermediary wallets were involved, did it reach a VASP, what suspicious patterns occurred, what evidence supports the findings, and what should the investigator examine next?

This is intentionally more than a blockchain explorer. A blockchain explorer shows what transactions occurred; this platform combines blockchain intelligence, graph analytics, entity/VASP intelligence, machine learning, rule-based analysis, multiple LLMs, evidence correlation, case management, and investigator-facing visualization.

The proposed architecture also supports real-time monitoring, multi-chain expansion, cross-chain bridge detection, and integration with future law-enforcement workflows such as NCRP/SAHYOG-style systems.

1. Problem Statement

Cryptocurrency fraud investigations can become difficult when stolen funds move rapidly through multiple wallets, split across addresses, are consolidated later, interact with exchange/VASP wallets, or cross blockchain boundaries.

Manual investigation can require investigators to:

Collect transaction data from different blockchain sources.

Follow funds across multiple transaction hops.

Identify intermediary wallets.

Recognize suspicious movement patterns.

Determine whether a destination belongs to an exchange/VASP.

Correlate evidence from different sources.

Assess the risk of wallets and transaction paths.

Preserve transaction hashes, blocks, timestamps and relationships.

Prepare standardized investigation reports.

The platform automates and assists this workflow while keeping the final investigative decision with the investigator.

2. Core Objectives

The system aims to:

Accept a victim-reported cryptocurrency wallet.

Validate the wallet and create an investigation case.

Retrieve blockchain transactions through multiple data providers.

Normalize heterogeneous blockchain data into a common schema.

Construct a transaction graph.

Perform configurable multi-hop fund tracing.

Analyze inflows, outflows, counterparties and transaction timing.

Detect suspicious typologies such as rapid movement, layering, splitting, consolidation and peel chains.

Detect cross-chain movement and bridge interactions.

Identify known or likely exchange/VASP associations.

Cluster related exchange wallets where evidence supports the relationship.

Extract behavioral features for ML analysis.

Use multiple ML signals rather than a single classifier.

Use a deterministic rule engine for explainable risk factors.

Use multiple LLMs as mandatory specialized intelligence components.

Correlate structured evidence with LLM-generated investigative explanations.

Produce an explainable final risk assessment.

Generate investigative recommendations.

Provide real-time or near-real-time alerts.

Preserve evidence and produce standardized PDF reports.

3. High-Level Architecture

                         VICTIM / COMPLAINT
                                |
                                v
                       INVESTIGATOR INPUT
                                |
                                v
                     +----------------------+
                     |      API GATEWAY     |
                     |       FastAPI        |
                     +----------+-----------+
                                |
                                v
                    +-----------------------+
                    |   CASE MANAGEMENT      |
                    | PostgreSQL + Pydantic  |
                    +-----------+------------+
                                |
                                v
                    +-----------------------+
                    | BLOCKCHAIN DATA LAYER |
                    +-----------+------------+
                                |
          +---------------------+----------------------+
          |                     |                      |
          v                     v                      v
     Blockscout             Etherscan               Web3.py
          |                     |                      |
          +---------------------+----------------------+
                                |
                                v
                    +-----------------------+
                    | DATA NORMALIZATION     |
                    | Pandas + NumPy         |
                    +-----------+------------+
                                |
              +-----------------+------------------+
              |                                    |
              v                                    v
      TRANSACTION ENGINE                     GRAPH ENGINE
              |                              NetworkX + Neo4j
              |                                    |
              v                                    v
      FEATURE ENGINEERING                 GRAPH FEATURES / PATHS
              |                                    |
       +------+-------+                             |
       |              |                             |
       v              v                             |
    XGBoost     Isolation Forest                    |
       |              |                             |
       +------+-------+-----------------------------+
              |
              v
       +-------------------+
       |   RULE ENGINE     |
       | Explainable Rules |
       +---------+---------+
                 |
                 v
       +-------------------+
       |  MULTI-LLM LAYER  |
       +---------+---------+
                 |
       +---------+---------+---------+
       |                   |         |
       v                   v         v
  LLM Analyst        LLM Evidence  LLM Report
  (Qwen/Llama)       Reviewer       Writer
                     (Mistral)      (Qwen/Llama)
       |                   |         |
       +-------------------+---------+
                 |
                 v
       +-------------------------+
       | ENTITY / VASP INTEL     |
       | OpenSanctions / FTM     |
       +------------+------------+
                    |
                    v
          +----------------------+
          | EVIDENCE CORRELATION |
          +----------+-----------+
                     |
                     v
              FINAL RISK ENGINE
                     |
          +----------+-----------+
          |                      |
          v                      v
   INVESTIGATOR UI          ALERT SERVICE
 React + Cytoscape.js       Real-time polling
 Recharts + Tailwind
          |
          v
      REPORT ENGINE
     ReportLab / PDF

4. End-to-End Investigation Workflow

Step 1: Wallet Intake

The investigator submits:

Wallet Address:
0x7A23....91F2

Blockchain:
Ethereum

Case ID:
CYBER-2026-00142

Amount:
₹4,50,000

Complaint Type:
Investment Fraud

The system validates:

Wallet address format.

Supported blockchain.

Required case information.

Duplicate case status.

Whether the wallet has already been investigated.

Example endpoint:

POST /api/cases

Example request:

{
  "wallet_address": "0xABC...",
  "blockchain": "ethereum",
  "case_id": "CYBER-001",
  "fraud_type": "investment_fraud"
}

5. Blockchain Data Collection

Once a case is created, the blockchain service retrieves transaction information.

                 Wallet
                    |
                    v
           Blockchain Service
                    |
       +------------+------------+
       |            |            |
       v            v            v
  Blockscout     Etherscan     Web3.py
       |            |            |
       +------------+------------+
                    |
                    v
             Transaction Data

The system can collect:

Transaction hash.

Sender.

Receiver.

Native asset amount.

Token amount.

Token symbol.

Contract address.

Timestamp.

Block number.

Transaction status.

Gas information where available.

Chain identifier.

Event/log information where applicable.

Example:

TX001
Victim -> Wallet A
₹50,000

TX002
Wallet A -> Wallet B
₹48,500

TX003
Wallet B -> Wallet C
₹47,900

TX004
Wallet C -> Exchange X
₹47,500

The system should retain the original provider/source information so that every important finding can be traced back to evidence.

6. Multi-Provider Blockchain Strategy

The platform should not depend on a single blockchain API.

             Blockchain Adapter Layer
                       |
       +---------------+---------------+
       |               |               |
       v               v               v
  Blockscout        Etherscan       Web3.py
       |               |               |
       +---------------+---------------+
                       |
                       v
             Common Transaction Model

Benefits:

Provider redundancy.

Different API coverage.

Easier multi-chain expansion.

Consistent downstream processing.

Better resilience to provider limitations.

7. Data Normalization

Different blockchain providers return data in different formats.

The normalization layer converts these responses into a common representation.

Example:

{
  "tx_hash": "...",
  "chain": "ethereum",
  "from": "0xAAA...",
  "to": "0xBBB...",
  "amount": 47500,
  "token": "ETH",
  "timestamp": "...",
  "block": 123456,
  "status": "success",
  "source": "blockscout"
}

Technology:

Python
Pandas
NumPy
Pydantic

This normalized model becomes the foundation for graph construction, ML features, LLM context and evidence records.

8. Transaction Graph Construction

This is one of the most important components.

Graph representation

Wallet = Node
Transaction = Directed Edge

Example:

                  Victim
                     |
                  ₹50K
                     |
                     v
                 Wallet A
                     |
                ₹48.5K
                     |
                     v
                 Wallet B
                 /     \
             ₹20K       ₹28K
               |           |
               v           v
           Wallet C     Wallet D
               \           /
                \         /
                  Exchange

The graph contains:

Nodes

Victim wallets.

Suspect wallets.

Intermediary wallets.

Exchange/VASP-associated wallets.

Contracts.

Bridge addresses.

Other relevant entities.

Edges

Native cryptocurrency transfers.

Token transfers.

Contract interactions.

Bridge interactions where detected.

Graph technology

NetworkX
Neo4j
Cytoscape.js

NetworkX is useful for analysis and prototyping, while Neo4j provides persistent graph storage and efficient graph traversal at larger scale.

9. Multi-Hop Fund Tracing

The system follows the funds beyond the first destination.

Victim
  |
  v
Wallet A
  |
  v
Wallet B
  |
  v
Wallet C
  |
  v
Wallet D
  |
  v
Exchange

The system records:

Hop 0 -> Victim
Hop 1 -> Wallet A
Hop 2 -> Wallet B
Hop 3 -> Wallet C
Hop 4 -> Wallet D
Hop 5 -> Exchange

For every path, the platform can calculate:

Hop count.

Path value.

Time between hops.

Intermediary count.

Percentage of original funds retained.

Destination type.

Risk factors encountered.

VASP distance.

The investigator can configure maximum tracing depth to control cost and performance.

10. Fund-Flow Analysis

For each case and wallet, the transaction engine calculates:

Total inflow
Total outflow
Transaction count
Unique senders
Unique receivers
Unique counterparties
Average transaction value
Maximum transaction value
Transaction frequency
Average time between transactions
First observed transaction
Last observed transaction
Number of intermediary wallets

Example:

Inflow:                    ₹4,50,000
Outflow:                   ₹4,42,000
Transactions:              37
Unique counterparties:     18
Average interval:          4.2 minutes
Maximum transaction:       ₹1,20,000

11. Suspicious Pattern Detection

The platform uses deterministic rules, statistical/ML models and LLM reasoning together.

11.1 Rapid Fund Movement

Wallet A receives
      |
   2 minutes
      |
      v
Wallet B
      |
   3 minutes
      |
      v
Wallet C

Flag:

RAPID FUND MOVEMENT

11.2 Layering

A
|
v
B
|
v
C
|
v
D
|
v
E

A long chain of intermediary wallets can be investigated as potential layering.

11.3 Fund Splitting

             Wallet A
            /    |    \
           v     v     v
          B      C      D

One source distributing funds to multiple destinations can indicate a splitting pattern.

11.4 Fund Consolidation

B ----\
C -----+----> Exchange
D -----/
E ----/

Multiple wallets converging on one destination can be relevant to the investigation.

11.5 Peel Chain

A
|
v
B
|
v
C
|
v
D

The system looks for repeated forwarding patterns where funds continue through a sequence of wallets while portions may be retained or forwarded.

11.6 Exchange/VASP Interaction

Suspect Wallet
      |
      v
Intermediary
      |
      v
Known VASP Address

This is a high-value investigative signal, but a VASP interaction alone must not automatically be interpreted as proof of criminal activity.

12. VASP Identification

The system attempts to determine whether a destination address is associated with an exchange or other VASP.

The attribution layer can use:

Verified address/entity datasets.

OpenSanctions.

FollowTheMoney.

OpenAleph.

Curated exchange address intelligence.

Internal investigator-confirmed labels.

Transactional and behavioral evidence.

Example:

0xEXCHANGE123
       |
       v
Entity Intelligence
       |
       v
Known Organization?
       |
       v
Exchange / VASP

Output:

VASP IDENTIFIED

Entity:
Example Exchange

Relationship:
Receiving wallet

Distance:
3 hops

Confidence:
HIGH

13. Known Attribution vs Inference

The platform must clearly distinguish verified evidence from analytical inference.

Known attribution

Address explicitly associated with Exchange X

Inferred attribution

Address behavior is consistent with a wallet cluster
associated with Exchange X

The UI should label these differently:

VERIFIED
INFERRED
UNCONFIRMED

This distinction is critical for investigative credibility.

14. Exchange Wallet Clustering

An exchange may control many deposit, hot, operational or related addresses.

                    Exchange X
                  /     |      \
                 /      |       \
               W1       W2       W3
               |        |        |
              TX       TX       TX

The system creates an entity cluster:

Entity: Exchange X

Associated addresses:
- W1
- W2
- W3
- W4
- W5

If funds reach W3:

Suspect
   |
   v
Wallet A
   |
   v
Wallet B
   |
   v
W3
   |
   v
Exchange X

The report can show:

Nearest identified VASP: Exchange X
Distance: 3 hops
Attribution: Verified / Inferred
Confidence: High

15. ML Feature Engineering

For each wallet and transaction path, the system extracts features such as:

transaction_count
total_inflow
total_outflow
unique_senders
unique_receivers
unique_counterparties
average_transaction
maximum_transaction
transaction_frequency
average_time_between_transactions
number_of_hops
number_of_intermediaries
fund_splitting_score
fund_consolidation_score
rapid_transfer_score
vasp_interaction
cross_chain_interaction
bridge_interaction

Example:

Wallet A

Transactions:              48
Inflow:                    ₹8.2L
Outflow:                   ₹8.0L
Counterparties:            31
Average interval:          3.2 min
Hops:                      6
VASP interaction:          YES

16. Machine Learning Layer

The ML architecture uses multiple models rather than relying on one classifier.

16.1 XGBoost

Used as a supervised classification model when labeled training data is available.

Features
   |
   v
XGBoost
   |
   v
Illicit / suspicious probability

Example:

XGBoost probability = 0.89

The output is a signal, not a final legal conclusion.

16.2 Isolation Forest

Used to identify unusual transaction behavior.

Normal / mixed wallet behavior
          |
          v
Isolation Forest
          |
          v
Anomaly Score

Example:

Anomaly Score = 0.91

16.3 Graph ML

Advanced graph-based models can be introduced as the system scales.

Transaction Graph
       |
       v
PyTorch Geometric
       |
       +--> GraphSAGE
       +--> GCN
       +--> GAT
       |
       v
Graph Risk Signal

Graph ML should operate as an additional signal and should not replace deterministic evidence.

17. Rule Engine

The rule engine provides transparent, deterministic risk factors.

Example scoring configuration:

Rapid transfers             +15
Multiple intermediary hops  +15
Fund splitting              +10
Fund consolidation           +10
Known risky entity           +20
VASP interaction             +15
Abnormal transaction size    +10
Cross-chain movement          +5

Maximum:

100

The actual weights should be configurable and calibrated against validation data rather than treated as universal truth.

18. Mandatory Multi-LLM Intelligence Layer

Multiple LLMs are a required part of the architecture, not an optional feature.

The platform uses multiple specialized LLMs so that one model does not become the single point of failure for investigative reasoning.

Recommended initial models:

Qwen
Llama
Mistral

These models can be served locally or through a controlled model-serving layer depending on deployment requirements.

19. Multi-LLM Architecture

                 Structured Evidence
                        |
                        v
              +---------------------+
              | LLM Orchestrator    |
              +----------+----------+
                         |
          +--------------+--------------+
          |              |              |
          v              v              v
     LLM Analyst    LLM Evidence    LLM Report
       Qwen            Mistral          Llama
          |              |              |
          +--------------+--------------+
                         |
                         v
                Consensus / Conflict
                    Detection
                         |
                         v
                 Evidence Correlation
                         |
                         v
                Investigator Output

The LLMs do not independently decide that a wallet is criminal or that an individual committed an offense.

Instead, they interpret structured evidence generated by the deterministic and analytical layers.

20. Specialized LLM Roles

LLM 1 — Investigation Analyst

Suggested model:

Qwen

Responsibilities:

Summarize transaction paths.

Explain suspicious movement patterns.

Identify notable wallet relationships.

Convert graph paths into investigator-readable narratives.

Suggest investigative questions.

Input:

Structured transactions
Graph paths
Risk features
VASP findings
Rule results
ML signals

Output:

Investigation Summary
Key Wallets
Important Paths
Suspicious Patterns
Questions for Investigator

LLM 2 — Evidence Reviewer

Suggested model:

Mistral

Responsibilities:

Review the evidence-backed findings.

Check whether claims are supported by supplied evidence.

Separate fact from inference.

Identify unsupported conclusions.

Detect contradictions between data sources.

Assign an explanation/confidence category to findings.

Example:

Claim:
"Wallet C belongs to Exchange X."

Evidence:
Verified entity dataset -> supports claim.

Conclusion:
SUPPORTED

If evidence only indicates behavioral similarity:

Conclusion:
INFERENCE — NOT VERIFIED

This LLM acts as a review layer rather than as the primary analyst.

LLM 3 — Report and Investigator Copilot

Suggested model:

Llama

Responsibilities:

Generate standardized case summaries.

Convert structured evidence into report-ready language.

Generate investigative recommendations.

Answer investigator questions using only the case evidence supplied to it.

Explain graph paths in natural language.

Example question:

Why was Wallet B flagged?

Expected response structure:

Wallet B was flagged because:

1. It received funds from the reported wallet.
2. It forwarded most of the funds within a short period.
3. It participated in a multi-hop path.
4. It later interacted with an identified VASP address.

Evidence:
TX001, TX002, TX005

21. LLM Consensus and Conflict Resolution

Multiple LLM outputs should not simply be concatenated.

The LLM orchestration layer compares:

Analyst Output
       +
Evidence Reviewer Output
       +
Report/Investigator Output
       |
       v
Conflict Detection
       |
       v
Evidence Grounding
       |
       v
Final Explanation

For example:

Qwen:
"Wallet C appears associated with Exchange X."

Mistral:
"Available evidence does not verify ownership."

Llama:
"Wallet C has characteristics consistent with an exchange-associated address."

The system should preserve the conservative conclusion:

Attribution:
INFERRED

Reason:
Behavior is consistent with the exchange cluster, but
direct ownership evidence was not established.

This prevents an LLM from converting an inference into a fact.

22. LLM Guardrails

The LLM layer should receive structured, controlled context rather than unrestricted blockchain data.

Every generated statement should be categorized as:

FACT
INFERENCE
RECOMMENDATION
UNCERTAINTY

The LLM should not:

Invent transaction hashes.

Invent wallet ownership.

Invent VASP relationships.

Change numerical transaction values.

Create unsupported evidence.

Make legal conclusions.

Automatically trigger enforcement action.

Example:

FACT:
Wallet A sent 4.2 ETH to Wallet B.

INFERENCE:
Wallet B may be part of a layering path.

RECOMMENDATION:
Review Wallet B's incoming and outgoing relationships.

UNCERTAINTY:
No verified ownership information is available.

23. Final Risk Engine

The final risk assessment combines multiple independent signals.

             RULE ENGINE
                  |
                  v
             Rule Score
                  |
                  |
ML Score ----------+---------- Graph Score
                  |
                  v
            RISK ENGINE
                  |
                  v
              0 - 100

Example:

Rule Score:        82
XGBoost:           89%
Anomaly Score:     91%
Graph Risk:        HIGH
VASP:              IDENTIFIED

Example final display:

+--------------------------+
|       RISK: 91/100       |
|           HIGH           |
+--------------------------+

The exact combination formula should be configurable and validated experimentally.

24. Explainable Risk Factors

Instead of showing only:

HIGH RISK

the system displays why.

Example:

HIGH RISK — 91/100

Reasons:

- Funds moved through 6 intermediary wallets.
- 83% of funds moved within 15 minutes.
- Significant fund splitting was detected.
- Destination interacted with a VASP-associated address.
- Transaction behavior was anomalous compared with the model baseline.

Every reason should link back to evidence where possible.

25. Evidence Correlation

A major design principle is:

Every important finding should be traceable to evidence.

Example:

Finding:
VASP association

Evidence:
Transaction Hash:
0x7a83...

Block:
12345678

Timestamp:
2026-08-29 01:24:32

Source:
Blockchain / Entity Intelligence

Attribution:
Verified

Confidence:
HIGH

The report should preserve:

Transaction hashes.

Block numbers.

Timestamps.

Wallet addresses.

Transaction direction.

Amount.

Data source.

Attribution source.

Graph relationship.

Detection rule.

ML signal.

LLM explanation.

Confidence/uncertainty.

26. Automated Investigative Recommendations

The recommendation engine uses deterministic findings plus the multi-LLM layer.

Example:

INVESTIGATIVE RECOMMENDATIONS

1. Review Wallet B and Wallet C as intermediary wallets.

2. Verify the identified VASP association.

3. Preserve relevant transaction evidence.

4. Review the destination wallet for additional related cases.

5. Consider appropriate VASP coordination based on verified attribution.

The platform provides recommendations to investigators; it does not automatically take legal or enforcement action.

27. Case Management

Investigators can create and manage cases.

Example:

CASE #CYBER-2026-001

Status:
ACTIVE

Fraud Type:
Investment Fraud

Reported Wallet:
0xABC...

Risk:
91 HIGH

VASP:
Exchange X

Transactions:
127

Intermediary Wallets:
8

Case objects can contain:

Evidence
Notes
Wallets
Transactions
Reports
Alerts
Investigators
LLM Analysis
Risk History

28. Investigation Dashboard

The frontend should provide a single investigation workspace.

+------------------------------------------------------+
| CRYPTO FRAUD INTELLIGENCE PLATFORM                   |
+------------------------------------------------------+
| Case: CYBER-2026-001                 HIGH 91/100     |
| Wallet: 0xABC123...                                   |
+------------+----------------+-------------------------+
| TRANSACT.  | FUND FLOW      | VASP                    |
| 127        | ₹8.2L          | Exchange X              |
+------------+----------------+-------------------------+
|                                                      |
|                 TRANSACTION GRAPH                    |
|                                                      |
|       A -------- B -------- C                        |
|                 /          \                         |
|                D            E                        |
|                 \          /                         |
|                    VASP                              |
|                                                      |
+------------------------------------------------------+
| RISK FACTORS                                         |
|                                                      |
| Rapid movement                 HIGH                  |
| Multiple hops                  HIGH                  |
| Fund splitting                 MEDIUM                |
| VASP interaction               HIGH                  |
+------------------------------------------------------+
| [TRANSACTIONS] [EVIDENCE] [LLM ANALYSIS] [REPORT]   |
+------------------------------------------------------+

Frontend technologies:

React
Vite
Tailwind CSS
Cytoscape.js
Recharts

29. Real-Time Monitoring

The platform supports real-time or near-real-time monitoring.

For an MVP, periodic polling is sufficient.

Blockchain
    |
    v
Polling / Event Listener
    |
    v
New Transaction?
    |
   YES
    |
    v
Transaction Analysis
    |
    v
Risk Engine
    |
    v
Alert

Example:

NEW HIGH-RISK TRANSACTION

Wallet:
0xABC...

Amount:
₹2,40,000

Destination:
0xXYZ...

Pattern:
Rapid forwarding

Risk:
HIGH

A production deployment can later replace polling with streaming infrastructure.

30. Cross-Chain Architecture

The architecture is designed for multiple chains.

Initial normalized design:

Ethereum ----\
Polygon ------\
BNB ------------> Normalized Transaction Model
Bitcoin ------/
Solana -------/

Each blockchain adapter outputs a common structure:

{
  "chain": "...",
  "sender": "...",
  "receiver": "...",
  "amount": "...",
  "timestamp": "...",
  "tx_hash": "..."
}

The analysis engine can therefore remain chain-agnostic.

31. Bridge Detection

Example:

Ethereum
    |
    v
 Bridge
    |
    v
Polygon
    |
    v
Wallet

The system flags:

CROSS-CHAIN MOVEMENT DETECTED

For an MVP, detection can be based on:

Known bridge contracts.

Bridge address lists.

Normalized transaction patterns.

Related source/destination timing.

Later versions can add deeper cross-chain correlation.

32. API Architecture

The platform exposes REST APIs.

POST /api/cases

POST /api/analyze-wallet

GET /api/wallet/{address}

GET /api/wallet/{address}/transactions

GET /api/wallet/{address}/graph

GET /api/wallet/{address}/risk

GET /api/wallet/{address}/vasp

GET /api/wallet/{address}/fund-flow

GET /api/cases/{case_id}

POST /api/cases/{case_id}/report

GET /api/alerts

POST /api/llm/analyze

POST /api/llm/review

This creates a clean integration boundary for future systems.

33. Database Architecture

PostgreSQL

Used for structured application data:

cases
investigators
wallets
transactions
evidence
alerts
risk_scores
llm_outputs
reports
entity_matches

Neo4j

Used for graph relationships:

(Wallet)-[TRANSFER]->(Wallet)

(Wallet)-[INTERACTED_WITH]->(Contract)

(Wallet)-[ASSOCIATED_WITH]->(VASP)

(Wallet)-[CROSSED_VIA]->(Bridge)

This allows the relational and graph layers to serve different purposes.

34. Evidence Data Model

A finding can be represented as:

{
  "finding_type": "vasp_association",
  "wallet": "0xABC...",
  "entity": "Example Exchange",
  "attribution": "verified",
  "confidence": "high",
  "evidence": [
    {
      "tx_hash": "0x123...",
      "block": 12345678,
      "timestamp": "2026-08-29T01:24:32"
    }
  ],
  "source": "entity_intelligence"
}

This makes LLM grounding and report generation much safer.

35. LLM Context Pipeline

The LLMs should receive a structured investigation package.

Raw Blockchain Data
        |
        v
Normalization
        |
        v
Graph Analysis
        |
        v
Feature Extraction
        |
        v
Rule + ML Results
        |
        v
VASP / Entity Findings
        |
        v
Evidence Package
        |
        v
Multi-LLM Layer

The LLM should not be responsible for calculating transaction totals or graph distances when deterministic software can do it.

36. LLM Output Schema

LLM outputs should be structured.

Example:

{
  "summary": "...",
  "key_findings": [
    {
      "finding": "...",
      "classification": "FACT",
      "evidence_ids": ["E001", "E002"]
    }
  ],
  "inferences": [
    {
      "statement": "...",
      "confidence": "MEDIUM"
    }
  ],
  "recommendations": [
    "Review Wallet B"
  ],
  "uncertainties": [
    "Ownership of Wallet C is not verified"
  ]
}

This allows the backend to validate the response before displaying it.

37. Report Generation

The final investigation can be converted into a standardized PDF.

Investigation
      |
      v
Report Engine
      |
      v
PDF

Report sections:

1. Case Information
2. Reported Wallet
3. Blockchain
4. Fund Flow Summary
5. Transaction Statistics
6. Transaction Graph
7. Intermediary Wallets
8. VASP / Entity Findings
9. Suspicious Patterns
10. ML Risk Signals
11. Rule-Based Risk Factors
12. Multi-LLM Investigation Summary
13. Evidence Table
14. Uncertainties
15. Recommendations
16. Technical Sources
17. Report Metadata

Technologies:

ReportLab
WeasyPrint

38. Complete Data Flow

                         VICTIM
                           |
                           v
                     NCRP / LEA INPUT
                           |
                           v
                      WALLET ADDRESS
                           |
                           v
                  +------------------+
                  |   API GATEWAY    |
                  |     FastAPI      |
                  +--------+---------+
                           |
                           v
                   CASE MANAGEMENT
                           |
                           v
                 BLOCKCHAIN SERVICE
                           |
            +--------------+--------------+
            |              |              |
            v              v              v
       Blockscout      Etherscan       Web3.py
            |              |              |
            +--------------+--------------+
                           |
                           v
                  DATA NORMALIZATION
                           |
                           v
                 TRANSACTION ENGINE
                           |
             +-------------+-------------+
             |                           |
             v                           v
      FEATURE EXTRACTION            GRAPH ENGINE
             |                    NetworkX / Neo4j
             |                           |
       +-----+------+                    |
       |            |                    |
       v            v                    v
    XGBoost    Isolation Forest     Graph Analysis
       |            |                    |
       +------------+--------------------+
                    |
                    v
               RULE ENGINE
                    |
                    v
             ENTITY INTELLIGENCE
                    |
          +---------+---------+
          |         |         |
          v         v         v
    OpenSanctions FTM    OpenAleph
          |         |         |
          +---------+---------+
                    |
                    v
              VASP FINDINGS
                    |
                    v
             EVIDENCE PACKAGE
                    |
                    v
             MULTI-LLM LAYER
          +---------+---------+
          |         |         |
          v         v         v
        Qwen     Mistral     Llama
      Analyst    Reviewer    Copilot
          |         |         |
          +---------+---------+
                    |
                    v
           CONSENSUS / CONFLICT
                ANALYSIS
                    |
                    v
              FINAL RISK ENGINE
                    |
          +---------+---------+
          |                   |
          v                   v
   INVESTIGATOR UI         ALERTS
          |
          v
      REPORT ENGINE
          |
          v
          PDF

39. Technology Stack

Frontend

React
Vite
Tailwind CSS
Cytoscape.js
Recharts

Backend

Python
FastAPI
Pydantic
Web3.py

Blockchain / Data APIs

Blockscout API
Etherscan API
Web3.py

Additional providers such as Alchemy, Infura, QuickNode, Moralis, Covalent, Bitquery or Chainbase can be integrated through the adapter layer when required.

Data Processing

Pandas
NumPy

Graph

NetworkX
Neo4j
Cytoscape.js

Entity / VASP Intelligence

OpenSanctions
FollowTheMoney
OpenAleph

Machine Learning

scikit-learn
XGBoost
Isolation Forest

Advanced Graph ML

PyTorch Geometric
GraphSAGE
GCN
GAT

Multiple LLMs — Mandatory

Qwen
Llama
Mistral

Recommended architecture:

LLM Orchestrator
    |
    +--> Qwen      -> Investigation Analyst
    |
    +--> Mistral   -> Evidence Reviewer
    |
    +--> Llama     -> Investigator Copilot / Report Writer

The exact model versions can be selected based on available GPU/CPU resources and deployment constraints.

LLM Serving / Orchestration

Ollama or vLLM
Python LLM orchestration layer
Structured JSON outputs
Prompt templates
Evidence-grounded context

Datasets

Elliptic Bitcoin Dataset
Elliptic++
BitcoinHeist
AMLSim

Databases

PostgreSQL
Neo4j

Reports

ReportLab
WeasyPrint

DevOps

Docker
Git
GitHub

40. Recommended Repository Structure

crypto-fraud-platform/
|
+-- frontend/
|   +-- src/
|   |   +-- components/
|   |   +-- pages/
|   |   +-- graph/
|   |   +-- charts/
|   |   +-- services/
|   |   +-- hooks/
|   +-- package.json
|
+-- backend/
|   +-- app/
|       +-- main.py
|       +-- api/
|       +-- models/
|       +-- schemas/
|       +-- services/
|       |   +-- blockchain/
|       |   +-- graph/
|       |   +-- vasp/
|       |   +-- risk/
|       |   +-- llm/
|       |   +-- evidence/
|       |   +-- reports/
|       +-- ml/
|       +-- rules/
|       +-- database/
|
+-- llm/
|   +-- orchestrator/
|   +-- prompts/
|   +-- agents/
|       +-- analyst/
|       +-- evidence_reviewer/
|       +-- investigator_copilot/
|
+-- graph/
|   +-- queries/
|   +-- algorithms/
|
+-- ml/
|   +-- training/
|   +-- inference/
|   +-- features/
|
+-- datasets/
|
+-- reports/
|
+-- docker/
|
+-- docs/
|
+-- tests/
|
+-- docker-compose.yml
+-- README.md

41. Two-Day SIH MVP

The full architecture is intentionally larger than the first prototype.

For a 2-day implementation, the following should be the demonstrable MVP.

Day 1

Wallet Input
    |
    v
FastAPI
    |
    v
Blockchain API
    |
    v
Transaction Retrieval
    |
    v
Data Normalization
    |
    v
Graph Construction
    |
    v
Multi-Hop Tracing
    |
    v
VASP Matching

Day 2

Rule Engine
    |
    v
XGBoost / Isolation Forest
    |
    v
Mandatory Multi-LLM Layer
    |
    +--> Qwen Analyst
    +--> Mistral Evidence Reviewer
    +--> Llama Report/Copilot
    |
    v
Risk Engine
    |
    v
Dashboard
    |
    v
Graph Visualization
    |
    v
Alerts
    |
    v
PDF Report

The prototype should demonstrate one complete investigation from wallet submission to final evidence-backed report.

42. MVP vs Scalable Architecture

Component

MVP

Scalable Version

Frontend

React + Tailwind

React + Tailwind

API

FastAPI

FastAPI + API Gateway

Blockchain

Blockscout + Etherscan + Web3.py

Multi-provider adapter layer

Database

PostgreSQL

PostgreSQL + Neo4j

Graph

NetworkX

NetworkX + Neo4j

ML

XGBoost + Isolation Forest

ML ensemble + Graph ML

Graph ML

Not required

PyTorch Geometric

VASP

OpenSanctions + curated data

Expanded entity intelligence

LLMs

Qwen + Mistral + Llama

Multi-model serving/orchestration

Real-time

Periodic polling

Event/stream processing

Chains

Initial EVM support

Multi-chain adapters

Bridges

Known bridge contracts

Cross-chain correlation engine

Reports

ReportLab

ReportLab + WeasyPrint

Deployment

Docker

Containerized/cloud deployment

43. Why Multiple LLMs Are Important

Using multiple LLMs is not merely for adding more AI models.

The purpose is specialization and cross-validation.

A single LLM can:

Misinterpret a graph relationship.

Turn an inference into a factual statement.

Miss uncertainty.

Produce an unsupported recommendation.

With multiple specialized models:

Model 1 -> Analyze
Model 2 -> Critically review
Model 3 -> Explain / generate investigator output

This gives the system a stronger reasoning pipeline.

The LLM layer therefore complements, rather than replaces:

Blockchain Evidence
+
Graph Analytics
+
Rules
+
Machine Learning
+
Entity Intelligence
+
Multiple LLMs

44. What Makes the Platform Different?

A conventional blockchain explorer answers:

"What transactions happened?"

This platform answers:

"A victim reported this wallet. Where did the funds move, which intermediary wallets were involved, did the funds reach a VASP, what suspicious patterns occurred, what evidence supports those findings, how confident are the conclusions, and what should the investigator examine next?"

The key differentiators are:

Investigation-first workflow

Multi-hop fund tracing

Transaction graph analysis

VASP/entity identification

Exchange wallet clustering

Rule + ML risk analysis

Mandatory multi-LLM investigation layer

LLM cross-validation

Evidence-grounded explanations

Real-time monitoring

Cross-chain-ready architecture

Standardized investigation reports

45. Security and Reliability Principles

Because the platform handles sensitive investigative information, production deployments should include:

Authentication
Role-based access control
API key protection
Encrypted secrets
Database encryption
Audit logging
Input validation
Rate limiting
Secure LLM context handling
Evidence integrity controls

The platform should also maintain provenance:

Who created the case?
Who changed the case?
Which API supplied the transaction?
Which model generated the explanation?
Which evidence supported the finding?
When was the finding generated?

46. Important Analytical Principle

The platform should never equate:

High Risk

with:

Criminal / Guilty

Similarly:

VASP Interaction

does not automatically mean:

VASP is involved in fraud

And:

Behavioral Similarity

does not automatically mean:

Wallet Ownership Verified

The system is an investigative intelligence and decision-support platform. Human investigators remain responsible for interpretation, verification and appropriate action.

47. Final Architecture Summary

                 CRYPTO FRAUD CASE
                         |
                         v
                 WALLET INTAKE
                         |
                         v
                BLOCKCHAIN APIs
                         |
                         v
                NORMALIZATION
                         |
                         v
             TRANSACTION + GRAPH ENGINE
                         |
          +--------------+--------------+
          |              |              |
          v              v              v
        RULES            ML        GRAPH ANALYSIS
          |              |              |
          +--------------+--------------+
                         |
                         v
                 VASP / ENTITY INTEL
                         |
                         v
                  EVIDENCE PACKAGE
                         |
                         v
                 MULTIPLE LLMs
             +-----------+-----------+
             |           |           |
           Qwen       Mistral      Llama
          Analyst     Reviewer     Copilot
             |           |           |
             +-----------+-----------+
                         |
                         v
                 CONSENSUS CHECK
                         |
                         v
                  RISK ENGINE
                         |
              +----------+----------+
              |                     |
              v                     v
       INVESTIGATOR UI            ALERTS
              |
              v
         RECOMMENDATIONS
              |
              v
          PDF REPORT

48. Final Recommended Stack

FRONTEND
React
Vite
Tailwind CSS
Cytoscape.js
Recharts

BACKEND
Python
FastAPI
Pydantic
Web3.py

BLOCKCHAIN / DATA
Blockscout API
Etherscan API
Web3.py

DATA PROCESSING
Pandas
NumPy

GRAPH
NetworkX
Neo4j
Cytoscape.js

ENTITY / VASP
OpenSanctions
FollowTheMoney
OpenAleph

MACHINE LEARNING
scikit-learn
XGBoost
Isolation Forest

GRAPH ML
PyTorch Geometric
GraphSAGE
GCN
GAT

MULTIPLE LLMs
Qwen
Mistral
Llama

LLM SERVING
Ollama / vLLM
LLM Orchestrator
Structured JSON outputs

DATABASE
PostgreSQL
Neo4j

REAL-TIME
Polling / Event Listener
WebSocket-based alerts

REPORTING
ReportLab
WeasyPrint

DATASETS
Elliptic
Elliptic++
BitcoinHeist
AMLSim

DEVOPS
Docker
Git
GitHub

49. One-Line Architecture

React + Tailwind + Cytoscape.js
        ->
FastAPI + Web3.py
        ->
Blockscout / Etherscan
        ->
Pandas + NumPy
        ->
NetworkX + Neo4j
        ->
OpenSanctions / FollowTheMoney / OpenAleph
        ->
XGBoost + Isolation Forest + Graph ML
        ->
Rule Engine
        ->
Qwen + Mistral + Llama Multi-LLM Layer
        ->
Evidence Correlation + Risk Engine
        ->
Investigator Dashboard + Alerts
        ->
ReportLab / WeasyPrint

50. Expected Outcome

The completed platform should allow an investigator to:

1. Enter a reported wallet.
2. Create an investigation case.
3. Retrieve and normalize transactions.
4. Trace funds across multiple hops.
5. Visualize the transaction graph.
6. Identify intermediary wallets.
7. Detect suspicious movement patterns.
8. Detect cross-chain/bridge interactions where supported.
9. Identify known or inferred VASP associations.
10. Calculate rule, ML and graph risk signals.
11. Run multiple specialized LLM analyses.
12. Cross-check LLM conclusions against evidence.
13. Understand why a wallet/path was flagged.
14. Receive evidence-backed investigative recommendations.
15. Monitor new transactions.
16. Generate a standardized investigation report.

The resulting system is therefore positioned as a Crypto Fraud Investigation Intelligence Platform, rather than simply a blockchain transaction viewer or an LLM chatbot.
