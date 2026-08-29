Yes. If your priority is ₹0-cost for the SIH prototype, I would simplify the architecture and remove anything that could introduce paid API dependence.

The prototype can still demonstrate the complete investigation story end-to-end.

₹0-Cost SIH Prototype Pipeline
┌─────────────────────────────────────────────────────────────┐
│                    CRYPTO FRAUD CASE                        │
└─────────────────────────────┬───────────────────────────────┘
                              │
                              ▼
                    1. VICTIM COMPLAINT
                              │
                              ▼
                    2. WALLET ADDRESS INPUT
                              │
                              ▼
                    3. CASE CREATION
                              │
                              ▼
              ┌──────────────────────────────┐
              │     BLOCKCHAIN DATA          │
              │   Public / Local Dataset    │
              └──────────────┬───────────────┘
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
                  7. TRANSACTION GRAPH
                      NetworkX + Neo4j*
                             │
                             ▼
                  8. MULTI-HOP TRACING
                             │
                             ▼
                  9. FUND FLOW ANALYSIS
                             │
                             ▼
             10. SUSPICIOUS PATTERN DETECTION
                       Python Rules
                             │
                             ▼
                 11. VASP / ENTITY MATCHING
                    Open-source datasets
                             │
                             ▼
                  12. FEATURE ENGINEERING
                       Pandas + NumPy
                             │
                             ▼
             ┌───────────────┼────────────────┐
             │               │                │
             ▼               ▼                ▼
        XGBoost        Isolation Forest    Graph Analysis
             │               │                │
             └───────────────┼────────────────┘
                             │
                             ▼
                    13. RULE ENGINE
                             │
                             ▼
                 14. EVIDENCE PACKAGE
                             │
                             ▼
                    15. LOCAL LLMs
             ┌───────────────┼────────────────┐
             │               │                │
             ▼               ▼                ▼
           Qwen           Mistral           Llama
         Analyst          Reviewer          Copilot
             │               │                │
             └───────────────┼────────────────┘
                             │
                             ▼
                 16. EVIDENCE CORRELATION
                             │
                             ▼
                    17. FINAL RISK ENGINE
                             │
                             ▼
                    18. INVESTIGATOR UI
                  React + Tailwind + Vite
                             │
              ┌──────────────┼──────────────┐
              │              │              │
              ▼              ▼              ▼
           Graph          Risk Score    Transactions
              │              │              │
              └──────────────┼──────────────┘
                             │
                             ▼
                  19. RECOMMENDATIONS
                             │
                             ▼
                    20. PDF REPORT
                  ReportLab / WeasyPrint


Neo4j* can be omitted entirely for the SIH prototype. NetworkX + PostgreSQL is enough and makes the setup simpler.

Recommended ₹0 Tech Stack
Pipeline Step	Technology	Cost
Frontend	React	₹0
Build Tool	Vite	₹0
Styling	Tailwind CSS	₹0
Graph UI	Cytoscape.js	₹0
Charts	Recharts	₹0
Backend	Python	₹0
API	FastAPI	₹0
Validation	Pydantic	₹0
Blockchain library	Web3.py	₹0
Data processing	Pandas	₹0
Numerical processing	NumPy	₹0
Graph analysis	NetworkX	₹0
Database	PostgreSQL	₹0
ML	scikit-learn	₹0
ML	XGBoost	₹0
Anomaly detection	Isolation Forest	₹0
LLM runtime	Ollama	₹0
LLM 1	Qwen	₹0 local inference
LLM 2	Mistral	₹0 local inference
LLM 3	Llama	₹0 local inference
PDF	ReportLab	₹0
Containerization	Docker	₹0 for this prototype setup
Version Control	Git	₹0
Repository	GitHub Free	₹0
The important change

For the ₹0 SIH prototype, don't make the application dependent on:

❌ Paid blockchain APIs
❌ Paid LLM APIs
❌ Chain analytics SaaS
❌ Cloud GPUs
❌ Paid databases
❌ Paid hosting
❌ Paid VASP intelligence platforms


Instead, build the demonstration around local/open data + local models.

1. Victim Complaint

The investigator enters:

Case ID:
SIH-2026-001

Fraud Type:
Investment Fraud

Wallet:
0xABC123...

Blockchain:
Ethereum

Technology
React
Tailwind CSS
FastAPI
Pydantic


The frontend sends the information to FastAPI, which validates it and creates the investigation case.

2. Case Creation

Store the investigation in:

PostgreSQL


Example:

Case
├── case_id
├── wallet_address
├── blockchain
├── fraud_type
├── created_at
└── status


No paid database is necessary.

3. Blockchain Data Collection

This is where I recommend a major change from the production architecture.

Instead of making your prototype dependent on Etherscan:

❌ Etherscan API


use pre-collected public blockchain data for your SIH demonstration.

For example:

datasets/
│
├── ethereum/
│   ├── transactions.csv
│   └── token_transfers.csv
│
└── cases/
    ├── case_001.json
    └── case_002.json


You can also use publicly accessible blockchain data that you download beforehand.

Then your prototype behaves like:

Dataset
   ↓
Blockchain Data Loader
   ↓
Transaction Engine


This eliminates API costs and API-key dependency.

4. Data Normalization

Use:

Pandas
NumPy
Pydantic


Convert everything into your own format:

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


Now the rest of your system doesn't care where the data originally came from.

5. Transaction Graph

Use:

NetworkX


and:

Cytoscape.js


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
  ▼
Wallet B
  ├────────► Wallet C
  │
  └────────► Wallet D
                    │
                    ▼
                Exchange


This is one of the strongest visual components for your SIH demo.

6. Multi-Hop Tracing

Implement this yourself with NetworkX.

For example:

Hop 0 → Reported Wallet

Hop 1 → Wallet A

Hop 2 → Wallet B

Hop 3 → Wallet C

Hop 4 → Wallet D

Hop 5 → Exchange


Calculate:

hop_count
path_value
time_between_hops
intermediary_count
destination


No external paid service is necessary.

7. Fund Flow Analysis

Use:

Pandas
NumPy
NetworkX


Calculate:

Total Inflow
Total Outflow
Transaction Count
Unique Senders
Unique Receivers
Average Transaction
Largest Transaction
Average Time Between Transactions
Number of Intermediaries


Example:

Total Inflow       ₹4,50,000
Total Outflow      ₹4,42,000
Transactions       37
Intermediaries     6
Avg. Interval      4.2 minutes

8. Suspicious Pattern Detection

Don't need AI here.

Use a Python rule engine.

Rapid movement
if time_between_transactions < threshold:
    flag("RAPID_MOVEMENT")

Splitting
A
├── B
├── C
├── D
└── E


Flag:

FUND_SPLITTING

Consolidation
B ──┐
C ──┤
D ──┼──► E
F ──┘


Flag:

FUND_CONSOLIDATION

Layering
A → B → C → D → E


Flag:

MULTI_HOP_MOVEMENT


This is completely local.

9. VASP / Exchange Identification

For the SIH prototype, maintain a small curated local dataset.

For example:

data/
└── entity_labels.csv

address,entity,type,confidence
0x111...,Example Exchange,exchange,verified
0x222...,Example Exchange,exchange,verified
0x333...,Example VASP,vasp,verified


Then:

Wallet Address
      ↓
Local Entity Dataset
      ↓
Match?
      ↓
VASP / Exchange


This lets you demonstrate the functionality without paying for a commercial blockchain-intelligence platform.

Important: label this in the UI as something like “Known entity match from curated dataset”, not as universal proof of ownership.

10. Feature Engineering

Create features using:

Pandas
NumPy
NetworkX


Example:

transaction_count = 37

unique_counterparties = 18

hop_count = 5

rapid_transfer_score = 0.87

splitting_score = 0.72

consolidation_score = 0.21

vasp_interaction = 1

cross_chain = 0


These features go into your ML models.

11. ML Analysis

Use local Python libraries:

scikit-learn
XGBoost

XGBoost
Transaction Features
        ↓
     XGBoost
        ↓
Suspicious Probability


Example:

XGBoost Score = 89%

Isolation Forest
Transaction Behavior
        ↓
Isolation Forest
        ↓
Anomaly Score


Example:

Anomaly Score = 91%


For SIH, you can train on publicly available research datasets or use a clearly labeled prototype/demo model if you don't have enough legitimate labeled data.

Don't present a synthetic/demo model as production-validated.

12. Rule Engine

Now combine deterministic signals.

Example:

Rapid Movement             +15
Multiple Hops              +15
Fund Splitting             +10
Fund Consolidation         +10
Known Entity Interaction   +15
Abnormal Activity          +10
Cross Chain                +5


Output:

RULE SCORE = 80/100


Keep the rules configurable in:

rules/
└── risk_rules.yaml

13. Evidence Package

This is a very important part of your SIH project.

Before sending anything to the LLMs:

Transactions
     +
Graph Paths
     +
Patterns
     +
VASP Matches
     +
ML Results
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

14. Local Multi-LLM Layer

This is where you can keep your mandatory Qwen + Mistral + Llama architecture without paying for API calls.

Run them locally using:

Ollama


or:

vLLM


For a laptop SIH prototype, Ollama is generally simpler.

Architecture:

                 Evidence Package
                       │
                       ▼
                 LLM Orchestrator
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
        Qwen        Mistral       Llama
       Analyst      Reviewer      Copilot
          │            │            │
          └────────────┼────────────┘
                       ▼
                Evidence Checker

Qwen

Analyzes the transaction flow.

"Explain what happened."

Mistral

Challenges the analysis.

"Is this conclusion actually supported by the evidence?"

Llama

Acts as investigator assistant.

"Explain the findings and suggest next investigative steps."

15. Evidence Correlation

Never simply trust the LLM output.

Your backend checks:

LLM Claim
    ↓
Does evidence exist?
    ↓
YES → FACT / SUPPORTED
NO  → UNSUPPORTED / UNCERTAIN


Example:

LLM:

"Wallet B received 4.2 ETH."

Backend:

Transaction database
       ↓
TX001
       ↓
from = Wallet A
to = Wallet B
amount = 4.2 ETH

       ↓

SUPPORTED


This is a major differentiator for your project.

16. Final Risk Engine

Combine:

Rule Score
     +
XGBoost
     +
Anomaly Score
     +
Graph Score
     +
Evidence Confidence


For example:

Rule Score       = 82
XGBoost          = 89
Anomaly          = 91
Graph Risk       = 85
Evidence         = HIGH


Output:

┌───────────────────────┐
│     RISK: 88/100      │
│         HIGH          │
└───────────────────────┘


The exact formula should be documented as a prototype scoring methodology, not presented as scientifically or legally validated.

17. Investigator Dashboard

Build with:

React
Vite
Tailwind CSS
Cytoscape.js
Recharts


Dashboard:

┌─────────────────────────────────────────────────┐
│ CRYPTO FRAUD INVESTIGATION                      │
├─────────────────────────────────────────────────┤
│ Case: SIH-2026-001                              │
│ Risk: HIGH 88/100                               │
├─────────────────────────────────────────────────┤
│                                                 │
│             TRANSACTION GRAPH                   │
│                                                 │
│       Victim                                   │
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
│ VASP: Example Exchange                          │
│ Attribution: VERIFIED DATASET MATCH             │
├─────────────────────────────────────────────────┤
│ [Evidence] [Transactions] [AI Analysis] [Report]│
└─────────────────────────────────────────────────┘

18. Recommendations

The system generates:

1. Review Wallet B's outgoing transactions.

2. Review Wallet C as an intermediary.

3. Verify the exchange/entity association.

4. Preserve the identified transaction evidence.

5. Review related wallets for connections to other cases.


The recommendations are investigator assistance, not automated legal/enforcement decisions.

19. PDF Report

Use:

ReportLab


Generate:

Case Information
       ↓
Wallet Information
       ↓
Transaction Summary
       ↓
Fund Flow
       ↓
Graph
       ↓
Suspicious Patterns
       ↓
VASP Findings
       ↓
ML Results
       ↓
Rule Results
       ↓
Qwen Analysis
       ↓
Mistral Review
       ↓
Llama Recommendations
       ↓
Evidence
       ↓
Uncertainties
       ↓
Final Risk

Final ₹0 SIH Architecture

This is the version I would actually recommend you implement:

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
                         PostgreSQL
                              │
                              ▼
                  Local Blockchain Dataset
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

What you need on your laptop
Python
Node.js
Git
PostgreSQL
Ollama
Qwen model
Mistral model
Llama model


Everything else is installed as libraries/packages.

No paid API is required for the core SIH demonstration.

One practical caveat: “₹0” means no software/API purchase is required. You still need a computer capable of running the local LLMs, and electricity/internet access are obviously real-world costs. For the demo, you can also use pre-downloaded datasets so the application does not depend on a live paid blockchain API.

Yes. The main change is that we are optimizing the SIH prototype for ₹0 cost, while keeping the same core investigation idea.

What changed from the production-grade architecture?
Component	Production-grade	₹0 SIH Prototype
Blockchain data	Multiple providers + paid/fallback APIs	Free public APIs / public RPCs + Blockscout
Etherscan	Primary/fallback provider	Removed as a dependency
Blockchain nodes	Own nodes / premium RPCs	Public RPC endpoints
Database	PostgreSQL + Neo4j	SQLite + NetworkX
Graph database	Neo4j	NetworkX
Backend	FastAPI	FastAPI
Frontend	React + Vite + Tailwind	React + Vite + Tailwind
Graph UI	Cytoscape.js	Cytoscape.js
Charts	Recharts	Recharts
ML	XGBoost + Isolation Forest + Graph ML	XGBoost + Isolation Forest
Graph ML	PyTorch Geometric	Removed for MVP
VASP intelligence	Multiple external intelligence sources	OpenSanctions + curated/open labels
LLM 1	Qwen	Qwen locally
LLM 2	Mistral	Mistral locally
LLM 3	Llama	Llama locally
LLM serving	vLLM / distributed serving	Ollama
LLM orchestration	Production orchestration	Simple Python orchestrator
Real-time	Kafka/event streaming	Polling
Cross-chain	Multiple chains	Start with one EVM chain
Reports	ReportLab + WeasyPrint	ReportLab
Deployment	Cloud/Kubernetes	Local Docker / Docker Compose
Monitoring	Production observability stack	Basic application logging
The simplified ₹0 prototype pipeline
                    VICTIM COMPLAINT
                           │
                           ▼
                    WALLET ADDRESS
                           │
                           ▼
                    CREATE CASE
                           │
                           ▼
              ┌─────────────────────────┐
              │   BLOCKCHAIN DATA       │
              │                         │
              │ Blockscout / Public RPC │
              └────────────┬────────────┘
                           │
                           ▼
                  DATA NORMALIZATION
                     Python + Pydantic
                           │
                           ▼
                  TRANSACTION ENGINE
                           │
                           ▼
                  NETWORKX GRAPH
                           │
                           ▼
                  MULTI-HOP TRACING
                           │
                           ▼
                FUND FLOW ANALYSIS
                           │
                           ▼
             SUSPICIOUS PATTERN DETECTION
                           │
              ┌────────────┼────────────┐
              ▼            ▼            ▼
           RULES        XGBoost    Isolation Forest
              │            │            │
              └────────────┼────────────┘
                           ▼
                  VASP / ENTITY CHECK
                           │
                           ▼
                   EVIDENCE PACKAGE
                           │
             ┌─────────────┼─────────────┐
             ▼             ▼             ▼
           QWEN         MISTRAL        LLAMA
          Analyst       Reviewer       Copilot
             │             │             │
             └─────────────┼─────────────┘
                           ▼
                  EVIDENCE VALIDATION
                           │
                           ▼
                    FINAL RISK SCORE
                           │
                           ▼
                 INVESTIGATOR DASHBOARD
                           │
                    ┌──────┴──────┐
                    ▼             ▼
              RECOMMENDATIONS   PDF REPORT

What we are NOT building for the SIH prototype

We are deliberately not trying to build all the production infrastructure in the prototype.

Removed for now
❌ Neo4j cluster
❌ PostgreSQL production deployment
❌ Kafka
❌ Kubernetes
❌ Cloud infrastructure
❌ Paid blockchain APIs
❌ Paid commercial blockchain intelligence
❌ Distributed GPU inference
❌ Graph Neural Networks
❌ Large-scale multi-chain indexing
❌ Enterprise authentication infrastructure
❌ Production observability
❌ High-availability architecture


This makes the project much easier to actually finish and demonstrate.

What remains unchanged

The core innovation stays intact:

Blockchain Data
      ↓
Transaction Graph
      ↓
Multi-Hop Fund Tracing
      ↓
Suspicious Pattern Detection
      ↓
VASP Identification
      ↓
Rules + ML
      ↓
Qwen + Mistral + Llama
      ↓
Evidence Correlation
      ↓
Explainable Risk Score
      ↓
Investigator Dashboard
      ↓
Investigation Report


So when you present it at SIH, you can say:

"We have implemented a cost-free prototype using open-source technologies and free/public blockchain data sources. The architecture is designed to scale to production by replacing local components with PostgreSQL, Neo4j, streaming infrastructure, dedicated blockchain nodes/indexers, and scalable model serving."

The important distinction

₹0 prototype ≠ toy project.

You are building the functional core of the production system locally:

                    PROTOTYPE
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
    Blockchain      Analytics        AI
        │              │              │
    Blockscout      NetworkX       3 LLMs
    Public RPC     XGBoost        Qwen
                   Rules           Mistral
                   Isolation       Llama
        │              │              │
        └──────────────┼──────────────┘
                       ▼
                Evidence Engine
                       ▼
                  Risk Engine
                       ▼
                  React UI
                       ▼
                    Report


The production version mainly adds scale, reliability, security, richer data sources, and infrastructure rather than changing the fundamental investigation pipeline.
