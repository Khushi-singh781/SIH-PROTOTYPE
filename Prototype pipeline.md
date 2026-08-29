# 🚀 ₹0-Cost SIH Crypto Fraud Investigation Intelligence Platform

> **Evidence → Analytics → AI → Verification → Decision Support**

This prototype is designed for **Smart India Hackathon (SIH)** with a strict **₹0 software/API cost objective**.

The system transforms a reported cryptocurrency wallet address into structured transaction intelligence, fund-flow analysis, suspicious-pattern detection, ML signals, multi-LLM analysis, evidence validation, an explainable risk score, investigator recommendations, and a standardized investigation report.

---

# 🎯 Core Objective

The platform assists investigators in analyzing suspected cryptocurrency fraud by combining:

- Blockchain transaction analysis
- Transaction graph construction
- Multi-hop fund tracing
- Fund-flow analysis
- Suspicious behavior detection
- Curated VASP/entity intelligence
- Rule-based risk analysis
- Machine-learning signals
- Local Qwen, Mistral, and Llama models
- Evidence correlation
- Explainable risk scoring
- Investigator visualization
- Evidence-backed PDF reporting

> **Important:** A high-risk score is not a criminal verdict. VASP interaction does not automatically imply involvement in fraud. AI-generated statements must be supported by evidence and reviewed by a human investigator.

---

# 💰 ₹0-Cost SIH Architecture

```text
                    ┌─────────────────────────────┐
                    │       CRYPTO FRAUD CASE     │
                    └──────────────┬──────────────┘
                                   │
                                   ▼
                         1. VICTIM COMPLAINT
                                   │
                                   ▼
                         2. WALLET ADDRESS
                                   │
                                   ▼
                           3. CREATE CASE
                                   │
                                   ▼
                 ┌────────────────────────────────┐
                 │       BLOCKCHAIN DATA           │
                 │                                │
                 │ Blockscout / Public RPC /      │
                 │ Public or Local Dataset        │
                 └───────────────┬────────────────┘
                                 │
                                 ▼
                        4. DATA COLLECTION
                                 │
                                 ▼
                        5. DATA NORMALIZATION
                         Pandas + Pydantic
                                 │
                                 ▼
                        6. TRANSACTION ENGINE
                                 │
                                 ▼
                        7. NETWORKX GRAPH
                                 │
                                 ▼
                        8. MULTI-HOP TRACING
                                 │
                                 ▼
                        9. FUND FLOW ANALYSIS
                                 │
                                 ▼
                  10. SUSPICIOUS PATTERN DETECTION
                                 │
                  ┌──────────────┼──────────────┐
                  ▼              ▼              ▼
               RULES         XGBOOST      ISOLATION FOREST
                  │              │              │
                  └──────────────┼──────────────┘
                                 │
                                 ▼
                      11. VASP / ENTITY CHECK
                                 │
                                 ▼
                       12. FEATURE ENGINEERING
                                 │
                                 ▼
                        13. EVIDENCE PACKAGE
                                 │
                                 ▼
                         LOCAL LLM ORCHESTRATOR
                                 │
                    ┌────────────┼────────────┐
                    ▼            ▼            ▼
                  QWEN        MISTRAL       LLAMA
                 ANALYST       REVIEWER      COPILOT
                    │            │            │
                    └────────────┼────────────┘
                                 │
                                 ▼
                      14. EVIDENCE CORRELATION
                                 │
                                 ▼
                       15. FINAL RISK ENGINE
                                 │
                                 ▼
                       16. INVESTIGATOR UI
                                 │
                    ┌────────────┼────────────┐
                    ▼            ▼            ▼
                 GRAPH       RISK SCORE   TRANSACTIONS
                    │            │            │
                    └────────────┼────────────┘
                                 │
                                 ▼
                       17. RECOMMENDATIONS
                                 │
                                 ▼
                          18. PDF REPORT

🧩 Prototype Philosophy

The SIH prototype deliberately avoids expensive infrastructure.

Instead of building a large production platform immediately, the prototype focuses on demonstrating the complete investigative workflow:

Blockchain Evidence
        ↓
Structured Data
        ↓
Transaction Graph
        ↓
Fund Tracing
        ↓
Behavioral Analysis
        ↓
Rules + ML
        ↓
Evidence Package
        ↓
Qwen + Mistral + Llama
        ↓
Evidence Validation
        ↓
Explainable Risk
        ↓
Investigator Dashboard
        ↓
Investigation Report


The prototype is therefore not an LLM-first architecture.

The LLM layer operates on structured evidence generated by deterministic analytics.

💸 ₹0-Cost Technology Stack
Layer	Technology	Cost
Frontend	React	₹0
Build Tool	Vite	₹0
Styling	Tailwind CSS	₹0
Graph Visualization	Cytoscape.js	₹0
Charts	Recharts	₹0
Backend	Python	₹0
API	FastAPI	₹0
Validation	Pydantic	₹0
Blockchain Library	Web3.py	₹0
Data Processing	Pandas	₹0
Numerical Processing	NumPy	₹0
Graph Analysis	NetworkX	₹0
Database	SQLite / PostgreSQL	₹0
ML	scikit-learn	₹0
Gradient Boosting	XGBoost	₹0
Anomaly Detection	Isolation Forest	₹0
LLM Runtime	Ollama	₹0
LLM 1	Qwen	₹0 local inference
LLM 2	Mistral	₹0 local inference
LLM 3	Llama	₹0 local inference
PDF	ReportLab	₹0
Version Control	Git	₹0
Repository	GitHub Free	₹0
Containerization	Docker	₹0
🚫 Components Removed From the ₹0 Prototype

The following production components are intentionally excluded from the initial SIH implementation:

❌ Paid blockchain APIs
❌ Paid LLM APIs
❌ Commercial blockchain-intelligence platforms
❌ Cloud GPUs
❌ Paid databases
❌ Kubernetes
❌ Kafka
❌ Neo4j cluster
❌ Distributed model serving
❌ Graph Neural Networks
❌ Large-scale multi-chain indexing
❌ Enterprise cloud infrastructure
❌ Production observability infrastructure


This keeps the project realistic enough to implement while preserving the core investigation concept.

🏗️ Prototype vs Production
Component	Production	₹0 SIH Prototype
Blockchain Data	Multiple providers + dedicated infrastructure	Blockscout / public RPC / local datasets
Blockchain APIs	Multiple providers	Free/public sources
Database	PostgreSQL	SQLite initially, PostgreSQL optional
Graph Database	Neo4j	NetworkX
Graph UI	Cytoscape.js	Cytoscape.js
Backend	FastAPI	FastAPI
Frontend	React + Vite + Tailwind	React + Vite + Tailwind
ML	XGBoost + Isolation Forest + Graph ML	XGBoost + Isolation Forest
Graph ML	PyTorch Geometric	Removed for MVP
Entity Intelligence	Multiple intelligence providers	Curated/open datasets
LLM 1	Qwen	Local Qwen
LLM 2	Mistral	Local Mistral
LLM 3	Llama	Local Llama
LLM Serving	vLLM / distributed infrastructure	Ollama
Orchestration	Production orchestration	Python
Streaming	Kafka / event-driven	Polling
Cross-chain	Multiple chains	Start with one EVM chain
Reports	ReportLab + WeasyPrint	ReportLab
Deployment	Cloud / Kubernetes	Local / Docker Compose
Monitoring	Prometheus + Grafana	Basic logging
1. 📝 Victim Complaint

The investigator enters information such as:

Case ID:
SIH-2026-001

Fraud Type:
Investment Fraud

Wallet:
0xABC123...

Blockchain:
Ethereum

Reported Amount:
₹4,50,000


The frontend sends the information to FastAPI.

React
  ↓
FastAPI
  ↓
Pydantic Validation
  ↓
Case Creation

2. 📂 Case Creation

For the simplest ₹0 prototype, SQLite can be used.

Example case structure:

Case
├── case_id
├── wallet_address
├── blockchain
├── fraud_type
├── reported_amount
├── created_at
└── status


If PostgreSQL is already available locally, it can be used instead.

3. ⛓️ Blockchain Data Collection

The prototype should avoid depending on paid APIs.

Recommended sources:

Public RPC
     +
Blockscout
     +
Pre-downloaded public datasets
     ↓
Blockchain Data Loader


A local dataset can be structured as:

datasets/
│
├── ethereum/
│   ├── transactions.csv
│   └── token_transfers.csv
│
└── cases/
    ├── case_001.json
    └── case_002.json


This makes the SIH demo reproducible and avoids API-key dependency.

4. 🧹 Data Normalization

Different blockchain sources can return different data formats.

Convert everything into a common internal schema.

Raw Blockchain Data
        ↓
Provider Validation
        ↓
Schema Validation
        ↓
Duplicate Removal
        ↓
Address Normalization
        ↓
Token Normalization
        ↓
Timestamp Normalization
        ↓
Transaction Normalization
        ↓
Evidence Metadata
        ↓
Normalized Transaction Store


Example:

{
  "tx_hash": "0x123",
  "chain": "ethereum",
  "from": "0xAAA",
  "to": "0xBBB",
  "amount": 4.2,
  "token": "ETH",
  "timestamp": "2026-08-29T01:24:32",
  "block": 123456
}


Technology:

Python
Pydantic
Pandas
NumPy

5. 💾 Transaction Storage

Normalized transactions are stored locally.

SQLite / PostgreSQL
        │
        ├── cases
        ├── wallets
        ├── transactions
        ├── token_transfers
        ├── evidence
        ├── patterns
        ├── entity_matches
        ├── ml_signals
        ├── rule_results
        ├── llm_outputs
        ├── risk_scores
        └── reports

6. 🕸️ Transaction Graph

For the SIH prototype, NetworkX is sufficient.

Backend:

NetworkX


Frontend:

Cytoscape.js


Example:

                 Victim
                    │
                    ▼
                Wallet A
                    │
              ┌─────┴─────┐
              ▼           ▼
          Wallet B     Wallet C
              │           │
              ▼           ▼
          Wallet D     Wallet E
              │
              ▼
           Exchange


Graph representation:

(Wallet)
    |
    | TRANSFER
    ↓
(Wallet)
    |
    | TOKEN_TRANSFER
    ↓
(Wallet)
    |
    | INTERACTED_WITH
    ↓
(Contract)

7. 🔎 Multi-Hop Fund Tracing

The reported wallet becomes the starting point.

Hop 0 → Reported Wallet
   ↓
Hop 1 → Wallet A
   ↓
Hop 2 → Wallet B
   ↓
Hop 3 → Wallet C
   ↓
Hop 4 → Wallet D
   ↓
Hop 5 → Exchange / Destination


For every path, calculate:

hop_count
path_value
time_between_hops
value_retention
intermediary_count
destination_type
graph_relationships
risk_indicators


Technology:

Python
NetworkX

8. 💰 Fund Flow Analysis

Calculate deterministic financial and behavioral metrics.

Total Inflow
Total Outflow
Transaction Count
Unique Senders
Unique Receivers
Unique Counterparties
Average Transaction Value
Largest Transaction
Average Time Between Transactions
Intermediary Count


Example:

Total Inflow       ₹4,50,000
Total Outflow      ₹4,42,000
Transactions       37
Intermediaries     6
Avg. Interval      4.2 minutes


Technology:

Pandas
NumPy
NetworkX

9. 🚨 Suspicious Pattern Detection

Suspicious behavior should first be detected deterministically.

No LLM is required for this stage.

Rapid Movement
Wallet A → Wallet B → Wallet C
             │
             └── Very short time interval


Example rule:

if time_between_transactions < threshold:
    flag("RAPID_MOVEMENT")

Fund Splitting
             ┌──→ Wallet B
             │
Wallet A ────┼──→ Wallet C
             │
             ├──→ Wallet D
             │
             └──→ Wallet E


Flag:

FUND_SPLITTING

Fund Consolidation
Wallet B ──┐
Wallet C ──┤
Wallet D ──┼──→ Wallet E
Wallet F ──┘


Flag:

FUND_CONSOLIDATION

Multi-Hop Movement
Wallet A
   ↓
Wallet B
   ↓
Wallet C
   ↓
Wallet D
   ↓
Wallet E


Flag:

MULTI_HOP_MOVEMENT

10. 🏦 VASP / Entity Matching

The prototype should not depend on commercial blockchain-intelligence platforms.

Instead, maintain a local curated dataset.

data/
└── entity_labels.csv


Example:

address,entity,type,confidence
0x111...,Example Exchange,exchange,verified
0x222...,Example Exchange,exchange,verified
0x333...,Example VASP,vasp,verified


Pipeline:

Wallet Address
      ↓
Local Entity Dataset
      ↓
Address Match?
      ↓
 ┌────┴────┐
Yes        No
 ↓          ↓
Entity     Unknown
Match


The UI should clearly distinguish:

VERIFIED
INFERRED
UNCONFIRMED
UNKNOWN


A VASP interaction is not proof that the VASP participated in the fraud.

Use wording such as:

Known entity match from curated dataset


rather than:

Confirmed ownership


unless the evidence actually supports that claim.

11. 🧮 Feature Engineering

Create numerical features from transaction, graph, behavioral, and entity information.

Example:

transaction_count       = 37

unique_counterparties   = 18

hop_count               = 5

rapid_transfer_score    = 0.87

splitting_score         = 0.72

consolidation_score     = 0.21

vasp_interaction        = 1

cross_chain             = 0


Pipeline:

Transaction Data
      +
Graph Data
      +
Behavior Data
      +
Entity Data
      ↓
Feature Engineering
      ↓
ML Features


Technology:

Pandas
NumPy
NetworkX

12. 🤖 Machine Learning Analysis

The SIH prototype can use local ML libraries.

scikit-learn
XGBoost
Isolation Forest

XGBoost
Transaction Features
        ↓
      XGBoost
        ↓
Suspicious Probability


Example:

XGBoost Signal = 0.89

Isolation Forest
Transaction Behavior
        ↓
Isolation Forest
        ↓
Anomaly Signal


Example:

Anomaly Signal = 0.91


ML outputs are analytical signals, not criminal findings.

If labeled training data is insufficient, use a clearly documented prototype/demo model rather than presenting synthetic performance as production validation.

13. 📏 Rule Engine

Rules provide deterministic and explainable signals.

Example prototype rules:

Rapid Movement             +15
Multiple Hops              +15
Fund Splitting             +10
Fund Consolidation         +10
Known Entity Interaction   +15
Abnormal Activity          +10
Cross-Chain Movement        +5


Example:

RULE SCORE = 80 / 100


Store configurable rules in:

rules/
└── risk_rules.yaml


Example structure:

rules:
  rapid_movement:
    enabled: true
    weight: 15

  multiple_hops:
    enabled: true
    weight: 15

  fund_splitting:
    enabled: true
    weight: 10

  fund_consolidation:
    enabled: true
    weight: 10

  known_entity_interaction:
    enabled: true
    weight: 15


These weights are prototype scoring parameters and should not be presented as universally validated risk weights.

14. 🧾 Evidence Package

Before sending information to the LLMs, construct a structured evidence package.

Transactions
      +
Graph Paths
      +
Fund Flow
      +
Suspicious Patterns
      +
Entity Matches
      +
ML Signals
      +
Rule Results
      ↓
Evidence Package


Example:

{
  "case_id": "SIH-2026-001",
  "reported_wallet": "0xABC...",
  "transaction_count": 127,
  "paths": [],
  "patterns": [],
  "entity_matches": [],
  "ml_signals": {},
  "rule_score": 82
}


The LLM should receive structured evidence rather than unrestricted raw blockchain data.

15. 🧠 Local Multi-LLM Pipeline

The prototype keeps the three-model architecture while avoiding paid API calls.

Recommended runtime:

Ollama


Architecture:

                 Evidence Package
                       │
                       ▼
                LLM Orchestrator
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
        Qwen         Mistral       Llama
       Analyst       Reviewer      Copilot
          │            │            │
          └────────────┼────────────┘
                       ▼
                Evidence Checker

16. 🔍 Qwen — Investigation Analyst

Qwen analyzes the structured transaction evidence.

Primary role:

Explain what happened.


Expected output:

Transaction Narrative
        +
Suspicious Patterns
        +
Important Wallets
        +
Fund Movement
        +
Investigation Questions


Example:

The reported wallet transferred funds to Wallet B.
Wallet B subsequently transferred a substantial portion
of the funds to Wallet C within a short time interval.

17. 🛡️ Mistral — Evidence Reviewer

Mistral acts as a critical reviewer.

Primary role:

Is the conclusion actually supported by the evidence?


Expected output:

Claim Verification
        +
Contradiction Detection
        +
Unsupported Claim Detection
        +
Confidence Assessment


Mistral should be encouraged to disagree with unsupported Qwen findings.

18. 👨‍💻 Llama — Investigator Copilot

Llama converts validated findings into investigator-friendly assistance.

Primary role:

What should the investigator review next?


Expected output:

Case Explanation
        +
Investigation Questions
        +
Recommendations
        +
Report-Ready Language

19. 🔐 AI Guardrail Pipeline

LLM output must never automatically become truth.

LLM Output
    ↓
JSON Schema Validation
    ↓
Claim Classification
    ↓
Evidence ID Validation
    ↓
Numerical Consistency Check
    ↓
Transaction Hash Validation
    ↓
Unsupported Claim Detection
    ↓
Human Review


Every important AI statement should be classified as:

FACT
INFERENCE
RECOMMENDATION
UNCERTAINTY

20. 🔬 Evidence Correlation

Example AI claim:

"Wallet B received 4.2 ETH."


Backend validation:

LLM Claim
    ↓
Evidence ID
    ↓
Transaction Database
    ↓
TX001
    ↓
from = Wallet A
to   = Wallet B
amount = 4.2 ETH
    ↓
SUPPORTED


If no matching transaction exists:

UNSUPPORTED


or:

UNCERTAIN


This evidence-correlation layer is one of the most important components of the platform.

21. ⚖️ Finding Classification

Every important finding should have:

Finding
   ↓
Classification
   ↓
Evidence
   ↓
Confidence
   ↓
Source
   ↓
Human Verification


Example:

FACT

Wallet A sent 2.4 ETH to Wallet B.

Evidence:
TX001

INFERENCE

Wallet B may be part of a multi-hop fund movement pattern.

Evidence:
TX001
TX002

RECOMMENDATION

Review Wallet B's subsequent outgoing transactions.

UNCERTAINTY

Ownership of Wallet B is not verified.

22. 🎯 Final Risk Engine

Combine independent signals.

Rule Score
     +
XGBoost Signal
     +
Anomaly Signal
     +
Graph Signal
     +
Evidence Confidence
     ↓
Final Risk Engine


Example:

Rule Score       = 82
XGBoost Signal   = 0.89
Anomaly Signal   = 0.91
Graph Signal     = 0.85
Evidence         = HIGH


Example prototype output:

┌────────────────────────┐
│      RISK: 88 / 100    │
│          HIGH          │
└────────────────────────┘


The scoring formula should be configurable.

Example:

Final Risk =
    Rule Contribution
  + ML Contribution
  + Graph Contribution
  + Evidence Confidence


The resulting score is an explainable prototype risk indicator, not a scientifically or legally validated probability of criminal activity.

23. 📊 Investigator Dashboard

Frontend stack:

React
Vite
Tailwind CSS
Cytoscape.js
Recharts


Example dashboard:

┌─────────────────────────────────────────────────┐
│ CRYPTO FRAUD INVESTIGATION                      │
├─────────────────────────────────────────────────┤
│ Case: SIH-2026-001                              │
│ Risk: HIGH 88/100                               │
├─────────────────────────────────────────────────┤
│                                                 │
│             TRANSACTION GRAPH                   │
│                                                 │
│       Victim                                    │
│          │                                      │
│          ▼                                      │
│       Wallet A ───► Wallet C                    │
│          │                                      │
│          ▼                                      │
│       Wallet B ───► Exchange                    │
│                                                 │
├─────────────────────────────────────────────────┤
│ PATTERNS                                         │
│                                                 │
│ ✓ Rapid Movement                                │
│ ✓ Multi-Hop                                     │
│ ✓ Fund Splitting                                │
│                                                 │
├─────────────────────────────────────────────────┤
│ ENTITY MATCH                                    │
│ Example Exchange                                │
│ Source: Curated Dataset                         │
│ Status: VERIFIED DATASET MATCH                  │
├─────────────────────────────────────────────────┤
│ [Evidence] [Transactions] [AI Analysis] [Report]│
└─────────────────────────────────────────────────┘

24. 📋 Dashboard Features

The investigator should be able to view:

Case Information
Reported Wallet
Blockchain
Transaction Timeline
Fund Flow
Transaction Graph
Intermediary Wallets
Entity / VASP Matches
Suspicious Patterns
Rule Factors
ML Signals
Qwen Analysis
Mistral Review
Llama Recommendations
Evidence
Uncertainties
Risk Score
Investigation Recommendations

25. 🔔 Real-Time Monitoring

For the SIH prototype, avoid Kafka and complex streaming infrastructure.

Use polling.

Blockchain / Dataset
        ↓
Polling
        ↓
New Transaction?
        ↓
      YES
        ↓
Normalize
        ↓
Update Graph
        ↓
Update Features
        ↓
Run Rules
        ↓
Run ML
        ↓
Risk Engine
        ↓
High Risk?
      /   \
    YES    NO
     ↓      ↓
   Alert   Continue


Production evolution:

MVP

Blockchain
    ↓
Polling
    ↓
FastAPI
    ↓
Risk Engine


Future production:

Blockchain Events
       ↓
Event Listener
       ↓
Kafka / Streaming
       ↓
Stream Processing
       ↓
Risk Engine
       ↓
WebSocket
       ↓
Investigator Dashboard

26. 🌐 Cross-Chain Architecture

For the SIH prototype, begin with one EVM-compatible chain.

Recommended initial target:

Ethereum


Architecture:

Ethereum
    ↓
Blockchain Adapter
    ↓
Common Data Schema
    ↓
Normalized Transactions
    ↓
NetworkX
    ↓
Analytics


The architecture can later expand:

                 Blockchain Sources
                        │
          ┌─────────────┼─────────────┐
          ▼             ▼             ▼
      Ethereum       Polygon       BNB Chain
          │             │             │
          └─────────────┼─────────────┘
                        ▼
                Blockchain Adapters
                        ▼
                 Common Data Schema
                        ▼
                 Analytics Engine


Future support can include:

Ethereum
Polygon
BNB Chain
Bitcoin
Solana
Additional supported chains

27. 🌉 Bridge Detection

For the MVP, bridge detection can use known bridge contracts and supported event data.

Chain A
   ↓
Known Bridge Contract
   ↓
Bridge Event
   ↓
Chain B
   ↓
Destination Wallet


Correlate:

Known Bridge Address
        +
Transaction Timing
        +
Source Chain
        +
Destination Chain
        +
Bridge Event
        ↓
Cross-Chain Movement


This should be introduced only after the single-chain pipeline is working reliably.

28. 🗄️ Prototype Data Architecture
                         FastAPI
                            │
             ┌──────────────┼──────────────┐
             ▼              ▼              ▼
          SQLite         NetworkX       Evidence
             │              │           Storage
             │              │              │
             ▼              ▼              ▼
           Cases          Graphs         Reports
       Transactions       Paths          Artifacts
       Risk Scores       Relations       LLM Outputs


For a larger deployment, SQLite can be replaced by PostgreSQL and NetworkX can be complemented by Neo4j.

29. 🔐 Prototype Security

Even a local SIH prototype should follow basic security practices.

Input Validation
Secret Management
API Validation
Access Control
Audit Logging
Evidence Provenance
Model Version Tracking
Error Logging


Never hard-code secrets:

❌ API_KEY = "secret-key"


Use environment variables:

BLOCKCHAIN_RPC_URL=
OLLAMA_HOST=
DATABASE_URL=

30. 🧾 Evidence Provenance

Every important finding should answer:

What was found?
      ↓
Where did it come from?
      ↓
Which transaction supports it?
      ↓
Which provider or dataset supplied it?
      ↓
Which rule/model detected it?
      ↓
Which LLM interpreted it?
      ↓
When was it generated?
      ↓
Who reviewed it?


Example:

Finding ID: F001

Finding:
Rapid Fund Movement

Evidence:
TX001
TX002

Source:
Blockchain Dataset

Detection:
Rule R003

ML Support:
XGBoost

AI Interpretation:
Qwen

Evidence Review:
Mistral

Final Status:
SUPPORTED

31. 📄 PDF Report Pipeline

Use:

ReportLab


Pipeline:

Case
 ↓
Transactions
 ↓
Fund Flow
 ↓
Graph Analysis
 ↓
Entity Findings
 ↓
Suspicious Patterns
 ↓
ML Signals
 ↓
Rule Results
 ↓
Validated LLM Findings
 ↓
Evidence
 ↓
Uncertainties
 ↓
Recommendations
 ↓
Report Generator
 ↓
PDF


Report contents:

1. Case Information
2. Reported Wallet
3. Blockchain
4. Transaction Summary
5. Fund Flow
6. Transaction Graph
7. Intermediary Wallets
8. Entity / VASP Findings
9. Suspicious Patterns
10. Rule-Based Analysis
11. ML Signals
12. Qwen Analysis
13. Mistral Review
14. Llama Recommendations
15. Evidence Table
16. Uncertainties
17. Recommendations
18. Technical Sources
19. Report Metadata

32. 🧱 Recommended Project Structure
crypto-fraud-investigator/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── graphs/
│   │   ├── charts/
│   │   └── services/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── app/
│   │   ├── api/
│   │   ├── models/
│   │   ├── schemas/
│   │   ├── services/
│   │   ├── analytics/
│   │   ├── graph/
│   │   ├── ml/
│   │   ├── rules/
│   │   ├── llm/
│   │   ├── evidence/
│   │   ├── reports/
│   │   └── main.py
│   │
│   ├── requirements.txt
│   └── .env.example
│
├── data/
│   ├── ethereum/
│   │   ├── transactions.csv
│   │   └── token_transfers.csv
│   │
│   ├── cases/
│   │   └── case_001.json
│   │
│   └── entity_labels.csv
│
├── rules/
│   └── risk_rules.yaml
│
├── models/
│   ├── xgboost/
│   └── isolation_forest/
│
├── reports/
│
├── tests/
│
├── docker-compose.yml
├── README.md
└── .gitignore

33. 🔄 Complete Investigation Lifecycle
                    INVESTIGATOR
                         │
                         ▼
                  Submit Wallet
                         │
                         ▼
                    FastAPI API
                         │
                         ▼
                   Create Case
                         │
                         ▼
              Blockchain Data Loader
                         │
                         ▼
                  Normalize Data
                         │
                         ▼
                Store Transactions
                         │
                         ▼
                  Build NetworkX
                      Graph
                         │
                         ▼
                  Multi-Hop Trace
                         │
                         ▼
                  Fund Flow Analysis
                         │
                         ▼
               Pattern Detection
                         │
                         ▼
                 Entity Matching
                         │
                         ▼
                 Feature Engineering
                         │
             ┌───────────┼───────────┐
             ▼           ▼           ▼
          XGBoost    Isolation    Graph Score
                     Forest
             │           │           │
             └───────────┼───────────┘
                         ▼
                    Rule Engine
                         │
                         ▼
                  Evidence Package
                         │
                         ▼
                 Local LLM Runtime
                         │
             ┌───────────┼───────────┐
             ▼           ▼           ▼
           Qwen        Mistral      Llama
             │           │           │
             └───────────┼───────────┘
                         ▼
                Consensus / Conflict
                         │
                         ▼
                 Evidence Correlation
                         │
                         ▼
                  Final Risk Engine
                         │
             ┌───────────┼───────────┐
             ▼           ▼           ▼
         Dashboard     Alerts      Report
             │           │           │
             └───────────┼───────────┘
                         ▼
                  HUMAN INVESTIGATOR

34. 🧠 Core Design Principle

The entire system follows:

EVIDENCE
   ↓
ANALYTICS
   ↓
AI
   ↓
VERIFICATION
   ↓
DECISION SUPPORT


More specifically:

RAW BLOCKCHAIN DATA
        ↓
STRUCTURED TRANSACTION DATA
        ↓
TRANSACTION GRAPH
        ↓
FUND FLOW + BEHAVIOR
        ↓
RULES + ML + ENTITY INTELLIGENCE
        ↓
EVIDENCE PACKAGE
        ↓
QWEN + MISTRAL + LLAMA
        ↓
CONSENSUS / CONFLICT CHECK
        ↓
EVIDENCE CORRELATION
        ↓
EXPLAINABLE RISK
        ↓
INVESTIGATOR DECISION


The system is therefore:

NOT:

Raw Blockchain
      ↓
      LLM
      ↓
   Verdict


Instead:

Blockchain Evidence
      ↓
Deterministic Analytics
      ↓
Machine Learning
      ↓
Specialized Multi-LLM Intelligence
      ↓
Evidence Validation
      ↓
Human Investigator

35. ⚖️ Investigative Safeguards

The platform must maintain these distinctions:

HIGH RISK
    ≠
CRIMINAL / GUILTY

VASP INTERACTION
    ≠
VASP INVOLVEMENT IN FRAUD

BEHAVIORAL SIMILARITY
    ≠
VERIFIED OWNERSHIP

LLM STATEMENT
    ≠
FACT

ML SCORE
    ≠
LEGAL CONCLUSION


Every important conclusion should have:

Finding
   ↓
Classification
   ↓
Evidence
   ↓
Confidence
   ↓
Source
   ↓
Human Verification


The platform assists investigators and does not replace investigative judgment or legal decision-making.

36. 🏆 Complete ₹0 SIH Architecture
                         SIH PROTOTYPE
                              │
                              ▼
                     React + Vite
                  Tailwind + Cytoscape
                              │
                              ▼
                     FastAPI Backend
                              │
                              ▼
                    SQLite / PostgreSQL
                              │
                              ▼
              Public Blockchain Data / Dataset
                              │
                              ▼
                     Pandas + Pydantic
                              │
                              ▼
                         NetworkX
                              │
                 ┌────────────┼────────────┐
                 ▼            ▼            ▼
              Tracing      Patterns     Fund Flow
                 │            │            │
                 └────────────┼────────────┘
                              ▼
                    Local Entity Dataset
                              │
                              ▼
                    Feature Engineering
                              │
              ┌───────────────┼───────────────┐
              ▼               ▼               ▼
           XGBoost      Isolation Forest   Graph Score
              │               │               │
              └───────────────┼───────────────┘
                              ▼
                         Rule Engine
                              │
                              ▼
                      Evidence Package
                              │
                              ▼
                       Ollama / Local
                              │
             ┌────────────────┼────────────────┐
             ▼                ▼                ▼
           Qwen            Mistral           Llama
         ANALYST           REVIEWER          COPILOT
             │                │                │
             └────────────────┼────────────────┘
                              ▼
                     Evidence Correlation
                              │
                              ▼
                       Final Risk Engine
                              │
                 ┌────────────┼────────────┐
                 ▼            ▼            ▼
             Dashboard     Alerts       Report
                 │                         │
                 ▼                         ▼
           Cytoscape.js                 ReportLab

37. 🚀 Production Evolution

The SIH prototype is intentionally designed so that components can later be upgraded without changing the core investigation logic.

Prototype
Local Dataset
    ↓
NetworkX
    ↓
SQLite
    ↓
Ollama
    ↓
React

Production
Blockchain Nodes / Indexers
          ↓
Multiple Data Providers
          ↓
Streaming Infrastructure
          ↓
PostgreSQL
          +
Neo4j
          ↓
Distributed Analytics
          ↓
Scalable ML
          ↓
vLLM / Distributed LLM Serving
          ↓
React Dashboard


The production version primarily adds:

Scale
Reliability
Security
Data Coverage
Observability
High Availability
Performance


rather than changing the fundamental investigative workflow.

38. 💻 What You Need on Your Laptop
Python
Node.js
Git
SQLite or PostgreSQL
Ollama
Qwen model
Mistral model
Llama model


Everything else can be installed as open-source Python or Node.js packages.

39. 💡 Important ₹0-Cost Caveat

"₹0 cost" means:

No paid software
No paid API subscription
No paid cloud infrastructure
No paid LLM API
No paid blockchain intelligence platform


It does not mean that computing resources have zero real-world cost.

You still need:

A computer
Electricity
Storage
Internet access when downloading datasets/models
Sufficient RAM/GPU resources for local LLM inference


For the SIH demonstration, pre-downloaded datasets can be used so the core application does not depend on live paid blockchain APIs.

40. 🎯 Final Pipeline in One Line
React + FastAPI
→ Public/Local Blockchain Data
→ Pydantic/Pandas Normalization
→ SQLite/PostgreSQL
→ NetworkX Graph
→ Multi-Hop Fund Tracing
→ Fund Flow Analysis
→ Suspicious Pattern Detection
→ Curated VASP/Entity Matching
→ XGBoost + Isolation Forest + Graph Signals
→ Rule Engine
→ Evidence Package
→ Qwen + Mistral + Llama
→ Consensus + Evidence Correlation
→ Explainable Risk Engine
→ React/Cytoscape Dashboard
→ Investigator Recommendations
→ Evidence-Backed PDF Report
→ Human Investigator

🏁 Final Result

The system transforms:

Raw Wallet Address


into:

Transaction Intelligence
        +
Fund Flow
        +
Intermediary Wallets
        +
Entity / VASP Intelligence
        +
Suspicious Patterns
        +
ML Signals
        +
Rule-Based Signals
        +
Multi-LLM Analysis
        +
Evidence Correlation
        +
Explainable Risk Score
        +
Investigator Recommendations
        +
Standardized Investigation Report


The final SIH prototype is therefore not merely:

A Blockchain Explorer


and not merely:

An AI Chatbot


It is an:

┌──────────────────────────────────────────────────────┐
│     CRYPTO FRAUD INVESTIGATION INTELLIGENCE          │
│                                                      │
│  Evidence → Analytics → AI → Verification            │
│              → Decision Support                      │
│                                                      │
│          Human Investigator in the Loop              │
└──────────────────────────────────────────────────────┘


Core Principle: AI assists the investigator. Evidence remains the source of truth, and human investigators remain responsible for verification and legal decision-making.

Total cost -0 rupees .
