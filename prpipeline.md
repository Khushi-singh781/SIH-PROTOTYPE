# 🚀 Production-Grade Investigation Pipeline

The platform follows a layered, evidence-first architecture designed to transform a reported cryptocurrency wallet into actionable, explainable investigative intelligence.

The production pipeline is:

```text
┌───────────────────────────────────────────────────────────────────────┐
│                         1. VICTIM COMPLAINT                          │
│                                                                       │
│ Victim reports suspected cryptocurrency fraud and provides wallet    │
│ address, blockchain, amount, fraud type and other case information.  │
└──────────────────────────────────┬────────────────────────────────────┘
                                   │
                                   ▼
┌───────────────────────────────────────────────────────────────────────┐
│                         2. WALLET INTAKE                              │
│                                                                       │
│ Validate wallet address, blockchain, case information and create     │
│ a unique investigation case.                                         │
│                                                                       │
│ Tech: React + FastAPI + Pydantic + PostgreSQL                         │
└──────────────────────────────────┬────────────────────────────────────┘
                                   │
                                   ▼
┌───────────────────────────────────────────────────────────────────────┐
│                    3. BLOCKCHAIN DATA COLLECTION                      │
│                                                                       │
│ Collect transactions, token transfers, timestamps, blocks, logs,    │
│ balances and contract interactions using blockchain data providers. │
│                                                                       │
│ Tech: Web3.py + Blockscout API + Etherscan API                       │
└──────────────────────────────────┬────────────────────────────────────┘
                                   │
                                   ▼
┌───────────────────────────────────────────────────────────────────────┐
│                       4. DATA NORMALIZATION                           │
│                                                                       │
│ Different blockchain providers return different formats. Convert    │
│ them into one standardized transaction schema.                       │
│                                                                       │
│ Tech: Python + Pydantic + Pandas + NumPy                              │
└──────────────────────────────────┬────────────────────────────────────┘
                                   │
                                   ▼
┌───────────────────────────────────────────────────────────────────────┐
│                     5. TRANSACTION STORAGE                            │
│                                                                       │
│ Store normalized transactions and case information while preserving  │
│ provider, timestamp and evidence provenance.                         │
│                                                                       │
│ Tech: PostgreSQL + Object Storage                                     │
└──────────────────────────────────┬────────────────────────────────────┘
                                   │
                                   ▼
┌───────────────────────────────────────────────────────────────────────┐
│                      6. TRANSACTION GRAPH                             │
│                                                                       │
│ Convert wallets into nodes and transactions into directed edges to  │
│ understand how funds move between addresses.                         │
│                                                                       │
│ Tech: NetworkX + Neo4j + Cytoscape.js                                │
└──────────────────────────────────┬────────────────────────────────────┘
                                   │
                                   ▼
┌───────────────────────────────────────────────────────────────────────┐
│                     7. MULTI-HOP FUND TRACING                         │
│                                                                       │
│ Follow the movement of funds across multiple wallets and calculate  │
│ hop count, path value, time gaps and destination relationships.      │
│                                                                       │
│ Tech: Python + NetworkX + Neo4j                                       │
└──────────────────────────────────┬────────────────────────────────────┘
                                   │
                                   ▼
┌───────────────────────────────────────────────────────────────────────┐
│                  8. FUND FLOW & BEHAVIOR ANALYSIS                    │
│                                                                       │
│ Calculate inflow, outflow, transaction frequency, counterparties,   │
│ splitting, consolidation and rapid-movement indicators.             │
│                                                                       │
│ Tech: Python + Pandas + NumPy + NetworkX                             │
└──────────────────────────────────┬────────────────────────────────────┘
                                   │
                                   ▼
┌───────────────────────────────────────────────────────────────────────┐
│                   9. SUSPICIOUS PATTERN DETECTION                    │
│                                                                       │
│ Detect behaviors such as rapid forwarding, layering-like paths,      │
│ fund splitting, consolidation, peel-chain-like behavior and bridge  │
│ interactions.                                                        │
│                                                                       │
│ Tech: Python Rule Engine + NetworkX + Statistical Analysis           │
└──────────────────────────────────┬────────────────────────────────────┘
                                   │
                                   ▼
┌───────────────────────────────────────────────────────────────────────┐
│                    10. ENTITY / VASP INTELLIGENCE                    │
│                                                                       │
│ Compare addresses against available entity intelligence to identify │
│ known or inferred exchanges/VASPs and other relevant entities.       │
│                                                                       │
│ Tech: OpenSanctions + FollowTheMoney + OpenAleph + Curated Labels    │
└──────────────────────────────────┬────────────────────────────────────┘
                                   │
                                   ▼
┌───────────────────────────────────────────────────────────────────────┐
│                    11. FEATURE ENGINEERING                            │
│                                                                       │
│ Convert transaction, graph, behavioral and entity information into   │
│ numerical features for machine-learning and risk analysis.           │
│                                                                       │
│ Tech: Python + Pandas + NumPy + scikit-learn                          │
└──────────────────────────────────┬────────────────────────────────────┘
                                   │
                     ┌─────────────┼─────────────┐
                     │             │             │
                     ▼             ▼             ▼
          ┌────────────────┐ ┌──────────────┐ ┌─────────────────┐
          │  XGBoost       │ │ Isolation    │ │ Graph Analysis  │
          │                │ │ Forest       │ │                 │
          │ Supervised     │ │ Anomaly      │ │ Network / Path  │
          │ ML Signal      │ │ Detection    │ │ Risk Signal     │
          └───────┬────────┘ └──────┬───────┘ └────────┬────────┘
                  │                 │                  │
                  └─────────────────┼──────────────────┘
                                    ▼
┌───────────────────────────────────────────────────────────────────────┐
│                       12. ML RISK SIGNALS                             │
│                                                                       │
│ Combine independent model outputs into structured ML signals.        │
│ ML signals are treated as analytical indicators, not legal findings.│
│                                                                       │
│ Tech: scikit-learn + XGBoost + PyTorch Geometric                     │
└──────────────────────────────────┬────────────────────────────────────┘
                                   │
                                   ▼
┌───────────────────────────────────────────────────────────────────────┐
│                        13. RULE ENGINE                                │
│                                                                       │
│ Apply transparent deterministic rules such as rapid movement,        │
│ multiple hops, splitting, consolidation and known entity matches.   │
│                                                                       │
│ Tech: Python + Configurable Rule Engine                               │
└──────────────────────────────────┬────────────────────────────────────┘
                                   │
                                   ▼
┌───────────────────────────────────────────────────────────────────────┐
│                      14. EVIDENCE PACKAGE                             │
│                                                                       │
│ Build a structured investigation package containing transactions,    │
│ graph paths, rules, ML signals, entity findings and source metadata. │
│                                                                       │
│ Tech: Pydantic + PostgreSQL + JSON + Evidence Store                   │
└──────────────────────────────────┬────────────────────────────────────┘
                                   │
                                   ▼
                    ┌──────────────────────────────┐
                    │      MULTI-LLM ORCHESTRATOR  │
                    └──────────────┬───────────────┘
                                   │
                ┌──────────────────┼──────────────────┐
                │                  │                  │
                ▼                  ▼                  ▼
       ┌────────────────┐ ┌────────────────┐ ┌────────────────┐
       │      QWEN      │ │    MISTRAL     │ │     LLAMA      │
       │                │ │                │ │                │
       │ Investigation  │ │ Evidence       │ │ Investigator   │
       │ Analyst        │ │ Reviewer       │ │ Copilot       │
       └───────┬────────┘ └───────┬────────┘ └───────┬────────┘
               │                  │                  │
               └──────────────────┼──────────────────┘
                                  ▼
┌───────────────────────────────────────────────────────────────────────┐
│                   15. CONSENSUS / CONFLICT CHECK                     │
│                                                                       │
│ Compare model outputs and identify agreement, disagreement,          │
│ unsupported claims and uncertainty between the specialized models.  │
│                                                                       │
│ Tech: Python + LLM Orchestrator + Structured JSON                    │
└──────────────────────────────────┬────────────────────────────────────┘
                                   │
                                   ▼
┌───────────────────────────────────────────────────────────────────────┐
│                     16. EVIDENCE CORRELATION                          │
│                                                                       │
│ Verify that important AI-generated claims are connected to actual    │
│ transactions, graph relationships or entity evidence.               │
│                                                                       │
│ Tech: Python + Pydantic + Evidence Store                              │
└──────────────────────────────────┬────────────────────────────────────┘
                                   │
                                   ▼
┌───────────────────────────────────────────────────────────────────────┐
│                       17. FINAL RISK ENGINE                           │
│                                                                       │
│ Combine rule-based, ML, graph and validated analytical signals into  │
│ an explainable configurable risk score.                              │
│                                                                       │
│ Tech: Python + Configurable Risk Engine                               │
└──────────────────────────────────┬────────────────────────────────────┘
                                   │
                                   ▼
                         ┌─────────────────────┐
                         │   RISK SCORE        │
                         │                     │
                         │      91 / 100       │
                         │        HIGH         │
                         └──────────┬──────────┘
                                    │
                  ┌─────────────────┼─────────────────┐
                  │                 │                 │
                  ▼                 ▼                 ▼
        ┌─────────────────┐ ┌────────────────┐ ┌────────────────┐
        │ INVESTIGATOR   │ │ REAL-TIME      │ │ REPORT         │
        │ DASHBOARD      │ │ ALERTS         │ │ GENERATION     │
        │                 │ │                │ │                │
        │ React           │ │ WebSockets /   │ │ ReportLab /    │
        │ Cytoscape.js    │ │ Polling        │ │ WeasyPrint     │
        │ Recharts        │ │                │ │                │
        └────────┬────────┘ └───────┬────────┘ └───────┬────────┘
                 │                  │                  │
                 └──────────────────┼──────────────────┘
                                    ▼
┌───────────────────────────────────────────────────────────────────────┐
│                     18. INVESTIGATIVE OUTPUT                          │
│                                                                       │
│ Investigator receives an explainable view of fund movement,          │
│ intermediary wallets, VASP associations, risk factors, evidence,    │
│ uncertainties and recommended next steps.                            │
│                                                                       │
│ FINAL PRINCIPLE: AI ASSISTS THE INVESTIGATOR — IT DOES NOT REPLACE   │
│ HUMAN VERIFICATION OR LEGAL DECISION-MAKING.                          │
└───────────────────────────────────────────────────────────────────────┘

🔄 Production Data Flow

The complete production data flow can be summarized as:

Victim Complaint
      ↓
Wallet Intake
      ↓
Case Management
      ↓
Blockchain Data Collection
      ├── Blockscout
      ├── Etherscan
      └── Web3.py
      ↓
Data Normalization
      ↓
PostgreSQL / Evidence Storage
      ↓
Transaction Graph
      ├── NetworkX
      └── Neo4j
      ↓
Multi-Hop Fund Tracing
      ↓
Fund Flow Analysis
      ↓
Suspicious Pattern Detection
      ↓
Entity / VASP Intelligence
      ↓
Feature Engineering
      ↓
XGBoost
      ↓
Isolation Forest
      ↓
Graph Analytics
      ↓
ML Risk Signals
      ↓
Rule Engine
      ↓
Evidence Package
      ↓
Qwen Analyst
      ↓
Mistral Evidence Reviewer
      ↓
Llama Investigator Copilot
      ↓
Consensus / Conflict Detection
      ↓
Evidence Correlation
      ↓
Final Risk Engine
      ↓
Risk Score
      ↓
Investigator Dashboard
      ↓
Real-Time Alerts
      ↓
PDF Report
      ↓
Human Investigator

🧩 Production Architecture by Layer
Layer 1 — User & Case Management
React
  ↓
FastAPI
  ↓
Pydantic
  ↓
PostgreSQL


Responsibility

Handles investigator authentication, case creation, wallet intake, case status, investigator actions and audit information.

Layer 2 — Blockchain Intelligence
                 Blockchain Data Layer
                         |
          ┌──────────────┼──────────────┐
          ↓              ↓              ↓
     Blockscout       Etherscan       Web3.py
          |              |              |
          └──────────────┼──────────────┘
                         ↓
                Common Transaction Model


Responsibility

Collects blockchain activity from multiple sources and converts it into a common format.

Production note: Blockscout and Etherscan are external data/API services. They are not equivalent to self-hosted open-source blockchain nodes. A production deployment can add self-hosted nodes/indexers for greater independence and data control.

🧹 Data Processing Pipeline
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


Technology Stack

Python
Pydantic
Pandas
NumPy
PostgreSQL

Responsibility

Creates a reliable common representation of blockchain transactions before analytics are performed.

🕸️ Transaction Graph Pipeline
Normalized Transactions
          ↓
      Graph Builder
          ↓
 ┌────────┴────────┐
 ↓                 ↓
NetworkX          Neo4j
 ↓                 ↓
Analysis       Persistent Graph
 └────────┬────────┘
          ↓
     Graph Features
          ↓
    Fund Tracing

Graph Model
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


Technology Stack

NetworkX
Neo4j
Cytoscape.js
💰 Fund Tracing Pipeline
Reported Wallet
      ↓
     Hop 1
      ↓
     Hop 2
      ↓
     Hop 3
      ↓
     Hop 4
      ↓
     Hop 5
      ↓
VASP / Exchange / External Wallet


For each path the system calculates:

Hop Count
Path Value
Time Between Transfers
Value Retention
Intermediary Count
Destination Type
Graph Relationships
Risk Indicators

Technology

Python
NetworkX
Neo4j
🚨 Suspicious Pattern Pipeline
Transactions
     ↓
Behavioral Features
     ↓
Pattern Detection
     ↓
┌────┴─────┬──────────┬─────────────┐
↓          ↓          ↓             ↓
Rapid    Splitting  Consolidation  Layering
Movement
     ↓
Pattern Scores
     ↓
Evidence Records

Rapid Forwarding
Wallet A → Wallet B → Wallet C
                 ↓
          Minutes between transfers

Fund Splitting
          B
         ↗
A ──────→ C
         ↘
          D

Fund Consolidation
B ──────┐
C ──────┤
D ──────┼──→ Exchange
E ──────┘


Technology

Python
NetworkX
Pandas
NumPy
Rule Engine
🏦 VASP / Entity Intelligence Pipeline
Wallet Address
      ↓
Entity Intelligence Search
      ↓
Known Address?
      ↓
 ┌────┴────┐
Yes        No
 ↓          ↓
Verified   Behavioral /
Attribution Relational
           Analysis
              ↓
           Inferred
              ↓
       Confidence Score


Technology

OpenSanctions
FollowTheMoney
OpenAleph
Curated Address Labels
Internal Investigator Labels

The system should distinguish:

VERIFIED
    ↓
INFERRED
    ↓
UNCONFIRMED
    ↓
UNKNOWN


A wallet interacting with an exchange does not automatically mean the exchange is involved in fraud.

🤖 Machine Learning Pipeline
Transaction Data
       ↓
Graph Data
       ↓
Behavior Data
       ↓
Entity Data
       ↓
Feature Engineering
       ↓
┌──────┼─────────┐
↓      ↓         ↓
XGBoost  Isolation  Graph
         Forest     Analytics
↓        ↓         ↓
Supervised Anomaly  Graph
Signal    Signal    Signal
└────────┬──────────┘
         ↓
   ML Risk Signals


Technology Stack

Python
Pandas
NumPy
scikit-learn
XGBoost
PyTorch Geometric
Important Principle
ML Score ≠ Criminal Verdict


Machine learning provides analytical signals that must be interpreted together with evidence.

📏 Rule-Based Risk Pipeline

Rules provide deterministic and explainable signals.

Transaction Data
      ↓
Feature Extraction
      ↓
Rule Engine
      ↓
┌─────┬─────┬─────┬─────┬─────┐
↓     ↓     ↓     ↓     ↓
Rapid Hops Split Consolidation VASP
      ↓
Rule Scores
      ↓
Explainable Factors

Example
Rapid Movement              +15
Multiple Intermediaries     +15
Fund Splitting              +10
Fund Consolidation          +10
Known Risk Entity           +20
Abnormal Transaction Size   +10
Cross-Chain Movement         +5


The weights should be configurable and validated using appropriate data rather than treated as universal values.

🧠 Production Multi-LLM Pipeline

The LLM layer operates after structured analytics, not directly on raw blockchain data.

                 Evidence Package
                       ↓
                LLM Orchestrator
                       ↓
       ┌───────────────┼───────────────┐
       ↓               ↓               ↓
     Qwen           Mistral          Llama
       ↓               ↓               ↓
   Analyst          Reviewer        Copilot
       ↓               ↓               ↓
       └───────────────┼───────────────┘
                       ↓
              Consensus / Conflict
                       ↓
                Evidence Check
                       ↓
             Validated AI Findings

Qwen — Investigation Analyst
Structured Evidence
       ↓
      Qwen
       ↓
Transaction Narrative
       +
Suspicious Patterns
       +
Important Wallets
       +
Investigation Questions


Qwen focuses on understanding the transaction flow and producing an analytical investigation summary.

Mistral — Evidence Reviewer
Evidence Package
       ↓
     Mistral
       ↓
Claim Verification
       +
Contradiction Detection
       +
Unsupported Claim Detection
       +
Confidence Assessment


Mistral acts as the critical reviewer rather than simply generating another summary.

Llama — Investigator Copilot
Validated Evidence
       ↓
      Llama
       ↓
Case Explanation
       +
Investigator Questions
       +
Recommendations
       +
Report-Ready Language


Llama converts validated analytical findings into investigator-friendly explanations and recommendations.

🛡️ AI Guardrail Pipeline
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

Example
FACT
Wallet A sent 2.4 ETH to Wallet B.
Evidence: TX001

INFERENCE
Wallet B may be part of a layering path.
Evidence: TX001, TX002

RECOMMENDATION
Review Wallet B's subsequent transactions.

UNCERTAINTY
Ownership of Wallet B is not verified.

🔍 Evidence Correlation Pipeline
Finding
   ↓
Evidence IDs
   ↓
Transaction Database
   ↓
Graph Database
   ↓
Entity Intelligence
   ↓
Rule / ML Results
   ↓
Evidence Validation
   ↓
Supported Finding

Example
Finding:
"Wallet B forwarded funds rapidly."

        ↓

Evidence:

TX001
Wallet A → Wallet B
10:21:04

TX002
Wallet B → Wallet C
10:23:11

        ↓

Time Difference:
2 minutes 7 seconds

        ↓

Conclusion:
Rapid movement pattern detected.

⚖️ Final Risk Engine

The final risk engine combines multiple independent signals.

                ┌───────────────┐
                │ Rule Signals  │
                └───────┬───────┘
                        │
                        ▼
                ┌───────────────┐
                │               │
                │  RISK ENGINE  │
                │               │
                └───────┬───────┘
                        │
                        ▼
                Evidence Context
                        │
                        ▼
                 Final Risk Score

Example
Rule Score:          82
XGBoost Signal:      0.89
Anomaly Signal:      0.91
Graph Risk:          HIGH
VASP Signal:         VERIFIED

                ↓

Final Risk:
                  91 / 100
                     HIGH


The exact scoring formula should be configurable and calibrated using validation data.

📊 Investigator Dashboard Pipeline
Final Risk Engine
       ↓
Backend API
       ↓
React Frontend
       ↓
┌────────┬────────┬────────┬──────────┐
↓        ↓        ↓        ↓
Graph   Risk    Evidence  LLM
View    View     View     Analysis
       ↓
Transaction Timeline
       ↓
Recommendations

Frontend Stack
React
Vite
Tailwind CSS
Cytoscape.js
Recharts

The investigator can view:

Case Information
Reported Wallet
Transaction Timeline
Fund Flow
Transaction Graph
Intermediary Wallets
VASP Associations
Suspicious Patterns
ML Signals
Rule Factors
LLM Analysis
Evidence
Uncertainties
Recommendations
🔔 Real-Time Monitoring Pipeline

For the initial production architecture, periodic polling can be used. The architecture can later move to event-driven streaming.

Blockchain
    ↓
Polling / Event Listener
    ↓
New Transaction?
    ↓
   Yes
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
   / \
 Yes  No
  ↓    ↓
Alert Store
  ↓
Dashboard

Production Evolution
MVP
Blockchain
    ↓
Polling
    ↓
FastAPI
    ↓
Risk Engine

Production Scale
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

Technology
Python
FastAPI
WebSockets
Background Workers
Kafka (scalable deployment)
Redis (optional caching/queues)
🌐 Cross-Chain Pipeline

The architecture is designed to support multiple blockchain adapters.

             Blockchain Sources
                    |
       ┌────────────┼────────────┐
       ↓            ↓            ↓
   Ethereum       Polygon       BNB
       |            |            |
       └────────────┼────────────┘
                    ↓
           Blockchain Adapters
                    ↓
          Common Data Schema
                    ↓
          Normalized Transactions
                    ↓
             Graph Engine
                    ↓
             Risk Analysis

Future Chains
Ethereum
Polygon
BNB Chain
Bitcoin
Solana
Additional supported chains

The key design principle is:

Different Chains
      ↓
Different Adapters
      ↓
Same Internal Schema
      ↓
Same Analytics Engine

🌉 Bridge Detection Pipeline
Chain A
   ↓
Bridge Contract
   ↓
Cross-Chain Event
   ↓
Chain B
   ↓
Destination Wallet


The system can identify known bridge contracts and correlate supported bridge events.

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


For an MVP, this can be based on known bridge contracts. More advanced cross-chain correlation can be introduced later.

🗄️ Production Data Architecture
                         FastAPI
                            |
             ┌──────────────┼──────────────┐
             ↓              ↓              ↓
        PostgreSQL        Neo4j       Object Storage
             |              |              |
             ↓              ↓              ↓
          Cases          Graphs         Evidence
       Transactions      Paths          Reports
       Risk Scores      Relations       Artifacts
       LLM Outputs

PostgreSQL

Stores structured application data:

cases
investigators
wallets
transactions
evidence
alerts
risk_scores
llm_outputs
entity_matches
reports
audit_logs

Neo4j

Stores relationships:

Wallet → Wallet
Wallet → Contract
Wallet → VASP
Wallet → Bridge
Wallet → Entity

Object Storage

Can store:

Generated PDF reports
Evidence snapshots
Large blockchain response artifacts
Graph exports
Model artifacts

🔐 Production Security Architecture
                   Investigator
                        ↓
                Authentication
                        ↓
                 Authorization
                        ↓
                   API Gateway
                        ↓
                  FastAPI APIs
                        ↓
        ┌───────────────┼───────────────┐
        ↓               ↓               ↓
   PostgreSQL         Neo4j       Evidence Store
        ↓               ↓               ↓
             Audit Logging

Security Controls
Authentication
Authorization
Role-Based Access Control
API Rate Limiting
Input Validation
Secret Management
Encryption
Audit Logging
Evidence Provenance
Model Version Tracking
Access Logging
🧾 Evidence Provenance Pipeline

Every important finding should answer:

What was found?
      ↓
Where did it come from?
      ↓
Which transaction supports it?
      ↓
Which data provider supplied it?
      ↓
Which rule/model detected it?
      ↓
Which LLM interpreted it?
      ↓
When was it generated?
      ↓
Who reviewed it?

Example
Finding ID: F001

Finding:
Rapid Fund Movement

Evidence:
TX001
TX002

Source:
Blockchain Provider

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

📄 Production Report Pipeline
Case
 ↓
Transactions
 ↓
Fund Flow
 ↓
Graph Analysis
 ↓
VASP Findings
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

Report Stack
ReportLab
WeasyPrint
HTML/CSS Templates
Report Contents
Case Information
Reported Wallet
Blockchain
Transaction Summary
Fund Flow
Transaction Graph
Intermediary Wallets
VASP / Entity Findings
Suspicious Patterns
Rule-Based Analysis
ML Signals
Multi-LLM Analysis
Evidence Table
Uncertainties
Recommendations
Technical Sources
Report Metadata
🧱 Complete Production Technology Stack
Layer	Production Technology
Frontend	React + Vite
UI	Tailwind CSS
Graph Visualization	Cytoscape.js
Charts	Recharts
Backend	Python + FastAPI
Validation	Pydantic
Blockchain Interaction	Web3.py
Blockchain Data	Blockscout API + Etherscan API
Data Processing	Pandas + NumPy
Relational Database	PostgreSQL
Graph Database	Neo4j
Graph Analysis	NetworkX
Entity Intelligence	OpenSanctions + FollowTheMoney + OpenAleph
Rule Engine	Python
ML	scikit-learn + XGBoost
Anomaly Detection	Isolation Forest
Graph ML	PyTorch Geometric
LLM 1	Qwen
LLM 2	Mistral
LLM 3	Llama
LLM Serving	Ollama / vLLM
LLM Orchestration	Python
Cache / Queue	Redis
Streaming	Kafka
Real-Time API	WebSockets
Reports	ReportLab + WeasyPrint
Containers	Docker
CI/CD	GitHub Actions
Version Control	Git + GitHub
Monitoring	Prometheus + Grafana
Logging	Structured application logs
Secrets	Environment Variables / Secret Manager
🏭 Production-Grade Deployment Architecture
                         USERS
                           |
                           ▼
                    ┌─────────────┐
                    │Load Balancer│
                    └──────┬──────┘
                           │
                           ▼
                    ┌─────────────┐
                    │ API Gateway │
                    └──────┬──────┘
                           │
              ┌────────────┼────────────┐
              │            │            │
              ▼            ▼            ▼
          FastAPI      FastAPI      WebSocket
          Instance     Instance      Service
              │            │            │
              └────────────┼────────────┘
                           │
                           ▼
                   Background Workers
                           │
             ┌─────────────┼─────────────┐
             │             │             │
             ▼             ▼             ▼
       Blockchain       Analytics       LLM
        Workers          Workers       Workers
             │             │             │
             ▼             ▼             ▼
       ┌──────────┐   ┌──────────┐   ┌──────────┐
       │PostgreSQL│   │  Neo4j   │   │Qwen      │
       │          │   │          │   │Mistral   │
       │          │   │          │   │Llama     │
       └──────────┘   └──────────┘   └──────────┘
             │             │             │
             └─────────────┼─────────────┘
                           ▼
                    Evidence Store
                           │
                           ▼
                    Report Generator

🔄 Complete Production Investigation Lifecycle
sequenceDiagram

    participant I as Investigator
    participant API as FastAPI
    participant DB as PostgreSQL
    participant BC as Blockchain APIs
    participant G as Graph Engine
    participant ML as ML Engine
    participant E as Entity Intelligence
    participant L as Multi-LLM
    participant R as Risk Engine
    participant UI as Dashboard

    I->>API: Submit wallet
    API->>DB: Create investigation case

    API->>BC: Request transactions
    BC-->>API: Blockchain data

    API->>API: Normalize transactions
    API->>DB: Store normalized data

    API->>G: Build transaction graph
    G-->>API: Graph + paths

    API->>G: Trace multi-hop funds
    G-->>API: Fund flow

    API->>E: Check entities / VASPs
    E-->>API: Entity findings

    API->>ML: Generate features
    ML-->>API: ML risk signals

    API->>API: Execute rules

    API->>L: Send evidence package
    L-->>API: Qwen analysis
    L-->>API: Mistral review
    L-->>API: Llama recommendations

    API->>API: Correlate AI claims with evidence

    API->>R: Calculate final risk
    R-->>API: Risk score

    API->>UI: Investigation results
    UI-->>I: Dashboard + evidence + recommendations

🎯 Final Production Pipeline
┌─────────────────────┐
│   VICTIM COMPLAINT  │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│    WALLET INTAKE    │
│ React + FastAPI     │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ BLOCKCHAIN DATA     │
│ Web3.py             │
│ Blockscout          │
│ Etherscan           │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ DATA NORMALIZATION  │
│ Pydantic            │
│ Pandas + NumPy      │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ TRANSACTION STORAGE │
│ PostgreSQL          │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ TRANSACTION GRAPH   │
│ NetworkX + Neo4j    │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ MULTI-HOP TRACING   │
│ Fund Flow Analysis  │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ PATTERN DETECTION   │
│ Rules + Graph       │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ ENTITY / VASP INTEL │
│ OpenSanctions       │
│ FollowTheMoney      │
│ OpenAleph           │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ FEATURE ENGINEERING │
│ Pandas + NumPy      │
└──────────┬──────────┘
           ↓
     ┌─────┼─────┐
     ↓     ↓     ↓
  XGBoost IF   Graph ML
     ↓     ↓     ↓
     └─────┼─────┘
           ↓
┌─────────────────────┐
│    ML SIGNALS       │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│    RULE ENGINE      │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│  EVIDENCE PACKAGE   │
└──────────┬──────────┘
           ↓
      ┌────┼────┐
      ↓    ↓    ↓
    QWEN MISTRAL LLAMA
      ↓    ↓    ↓
      └────┼────┘
           ↓
┌─────────────────────┐
│ CONSENSUS / CONFLICT│
│ DETECTION            │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ EVIDENCE CORRELATION│
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│   FINAL RISK ENGINE │
└──────────┬──────────┘
           ↓
     ┌─────┼─────┐
     ↓     ↓     ↓
 Dashboard Alerts Reports
     ↓
┌─────────────────────┐
│ HUMAN INVESTIGATOR  │
└─────────────────────┘

🧠 Core Design Principle

The production architecture follows an Evidence → Analytics → AI → Verification → Decision Support model.

             RAW BLOCKCHAIN DATA
                     ↓
               STRUCTURED DATA
                     ↓
              GRAPH + FEATURES
                     ↓
          RULES + ML + ENTITY INTEL
                     ↓
               EVIDENCE PACKAGE
                     ↓
             QWEN + MISTRAL + LLAMA
                     ↓
             CONSENSUS / REVIEW
                     ↓
             EVIDENCE CORRELATION
                     ↓
             EXPLAINABLE RISK
                     ↓
          INVESTIGATOR DECISION


The system is therefore not an LLM-first architecture.

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


This ensures that the AI layer acts as an intelligence and reasoning layer over structured evidence, rather than becoming the source of truth.

⚖️ Important Investigative Safeguards

The platform must maintain the following distinctions:

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


Every important conclusion should therefore have:

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


The platform is designed to assist investigators, not replace investigative judgment or legal decision-making.

🏆 Production Architecture in One Line
React + FastAPI
→ Multi-Provider Blockchain Data
→ Pydantic/Pandas Normalization
→ PostgreSQL
→ NetworkX + Neo4j Graph
→ Multi-Hop Fund Tracing
→ Pattern Detection
→ VASP/Entity Intelligence
→ XGBoost + Isolation Forest + Graph ML
→ Rule Engine
→ Evidence Package
→ Qwen + Mistral + Llama
→ Consensus + Evidence Correlation
→ Explainable Risk Engine
→ React/Cytoscape Dashboard
→ Real-Time Alerts
→ Evidence-Backed PDF Report
→ Human Investigator

🚀 Result

The final system transforms:

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


The result is a production-grade, evidence-first Crypto Fraud Investigation Intelligence Platform rather than a conventional blockchain explorer or standalone AI chatbot.
