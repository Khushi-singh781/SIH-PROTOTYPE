# Real-Time Crypto Fraud Attribution & Investigation Platform

An evidence-grounded, multi-chain cryptocurrency fraud investigation and intelligence platform for tracing funds, identifying intermediary wallets and VASP associations, detecting suspicious transaction patterns, combining deterministic rules with machine learning, and using multiple specialized LLMs to assist investigators.

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Problem Statement](#2-problem-statement)
3. [Proposed Solution](#3-proposed-solution)
4. [Core Objectives](#4-core-objectives)
5. [Key Capabilities](#5-key-capabilities)
6. [End-to-End Investigation Pipeline](#6-end-to-end-investigation-pipeline)
7. [Production Architecture](#7-production-architecture)
8. [Technology Stack](#8-technology-stack)
9. [Pipeline 1 — Case & Wallet Intake](#9-pipeline-1--case--wallet-intake)
10. [Pipeline 2 — Blockchain Data Collection](#10-pipeline-2--blockchain-data-collection)
11. [Pipeline 3 — Data Normalization](#11-pipeline-3--data-normalization)
12. [Pipeline 4 — Transaction Graph](#12-pipeline-4--transaction-graph)
13. [Pipeline 5 — Multi-Hop Fund Tracing](#13-pipeline-5--multi-hop-fund-tracing)
14. [Pipeline 6 — Suspicious Pattern Detection](#14-pipeline-6--suspicious-pattern-detection)
15. [Pipeline 7 — VASP & Entity Intelligence](#15-pipeline-7--vasp--entity-intelligence)
16. [Pipeline 8 — ML Risk Analysis](#16-pipeline-8--ml-risk-analysis)
17. [Pipeline 9 — Rule Engine](#17-pipeline-9--rule-engine)
18. [Pipeline 10 — Multi-LLM Intelligence](#18-pipeline-10--multi-llm-intelligence)
19. [Pipeline 11 — Evidence Correlation](#19-pipeline-11--evidence-correlation)
20. [Pipeline 12 — Final Risk Engine](#20-pipeline-12--final-risk-engine)
21. [Pipeline 13 — Investigator Dashboard](#21-pipeline-13--investigator-dashboard)
22. [Pipeline 14 — Real-Time Monitoring](#22-pipeline-14--real-time-monitoring)
23. [Cross-Chain Architecture](#23-cross-chain-architecture)
24. [Bridge Detection](#24-bridge-detection)
25. [Database Architecture](#25-database-architecture)
26. [Evidence Architecture](#26-evidence-architecture)
27. [LLM Context Architecture](#27-llm-context-architecture)
28. [LLM Output Schema](#28-llm-output-schema)
29. [API Architecture](#29-api-architecture)
30. [Security Architecture](#30-security-architecture)
31. [Production Deployment](#31-production-deployment)
32. [Observability & Reliability](#32-observability--reliability)
33. [Repository Structure](#33-repository-structure)
34. [SIH MVP vs Production Architecture](#34-sih-mvp-vs-production-architecture)
35. [Development Roadmap](#35-development-roadmap)
36. [Analytical Principles](#36-analytical-principles)
37. [Example Investigation](#37-example-investigation)
38. [Expected Output](#38-expected-output)
39. [Future Enhancements](#39-future-enhancements)
40. [Project Philosophy](#40-project-philosophy)
41. [Final Architecture Summary](#41-final-architecture-summary)
42. [Production Technology Map](#42-production-technology-map)
43. [Final Outcome](#43-final-outcome)
44. [Project Positioning](#44-project-positioning)
45. [License & Responsible Use](#45-license--responsible-use)

---

# 1. Project Overview

The **Real-Time Crypto Fraud Attribution & Investigation Platform** is a production-oriented blockchain intelligence system designed to help investigators analyze cryptocurrency fraud cases.

The platform starts with a wallet reported in a complaint and progressively converts raw blockchain activity into structured investigative intelligence.

The central questions are:

- Where did the victim's funds go?
- Which wallets were involved?
- What suspicious behaviors occurred?
- Did the funds interact with a known or inferred VASP?
- What evidence supports the findings?
- How strong are the analytical signals?
- What should the investigator examine next?

The platform is designed to be more than a blockchain explorer.

```text
Blockchain Explorer
"What transactions happened?"


versus:

Investigation Intelligence Platform

"Where did the funds go?
 Which wallets were involved?
 What patterns occurred?
 Did funds reach an exchange/VASP?
 What evidence supports the findings?
 How strong are the signals?
 What should the investigator examine next?"


The production architecture is designed to support:

Multi-chain analysis
Multiple blockchain data providers
Persistent graph storage
ML and graph analytics
Real-time monitoring
Evidence provenance
Multi-model LLM analysis
Human-in-the-loop investigation
Scalable deployment
2. Problem Statement

Cryptocurrency fraud investigations can become difficult because stolen funds may:

Move through multiple intermediary wallets
Split into many addresses
Consolidate into a single destination
Move within minutes
Interact with smart contracts
Reach exchange/VASP-associated wallets
Cross blockchain networks
Pass through bridges
Create large and complex transaction graphs

A manual investigation requires investigators to collect, correlate, and interpret large quantities of blockchain information.

The proposed system automates repetitive analytical work while keeping the investigator responsible for final interpretation and decisions.

3. Proposed Solution

The platform creates an end-to-end investigation pipeline:

Victim Complaint
       |
       v
Wallet Intake
       |
       v
Case Creation
       |
       v
Blockchain Data Collection
       |
       v
Data Normalization
       |
       v
Transaction Graph
       |
       v
Multi-Hop Fund Tracing
       |
       v
Suspicious Pattern Detection
       |
       v
VASP / Entity Intelligence
       |
       v
Rules + Machine Learning
       |
       v
Multi-LLM Intelligence
       |
       v
Evidence Correlation
       |
       v
Explainable Risk Engine
       |
       v
Investigator Dashboard
       |
       +----------------+
       |                |
       v                v
Recommendations      PDF Report

4. Core Objectives

The platform aims to:

Accept a victim-reported wallet
Create a structured investigation case
Collect blockchain transactions
Normalize heterogeneous blockchain data
Build a transaction graph
Trace funds across multiple hops
Detect suspicious transaction patterns
Identify known or inferred VASP/entity relationships
Generate deterministic risk factors
Generate ML-based risk signals
Perform graph-based analysis
Run Qwen as an investigation analyst
Run Mistral as an evidence reviewer
Run Llama as an investigator copilot
Validate AI conclusions against structured evidence
Produce explainable risk scores
Monitor new transactions
Generate investigative recommendations
Generate standardized evidence-backed reports
5. Key Capabilities
Capability	Description
Case Management	Create and manage investigation cases
Wallet Intake	Accept and validate reported addresses
Blockchain Intelligence	Retrieve transaction data
Data Normalization	Convert multiple provider formats into one schema
Transaction Graph	Represent wallets and transactions as a graph
Multi-Hop Tracing	Follow funds across intermediary wallets
Pattern Detection	Identify suspicious movement patterns
VASP Intelligence	Identify known or inferred entity relationships
Wallet Clustering	Group addresses associated with entities
Rule Engine	Produce deterministic risk factors
ML Engine	Generate statistical and predictive risk signals
Graph Analytics	Analyze transaction relationships
Multi-LLM	Qwen + Mistral + Llama
Evidence Correlation	Connect findings to evidence
Risk Engine	Produce explainable final risk
Monitoring	Detect new activity
Dashboard	Provide investigator workspace
Reporting	Generate PDF investigation reports
6. End-to-End Investigation Pipeline
6.1 High-Level Pipeline
Victim Complaint
       ↓
Wallet Address
       ↓
Case Creation
       ↓
Blockchain Data Collection
       ↓
Data Normalization
       ↓
Transaction Graph
       ↓
Multi-Hop Fund Tracing
       ↓
Suspicious Pattern Detection
       ↓
VASP / Entity Intelligence
       ↓
Feature Engineering
       ↓
ML Analysis
       ↓
Rule Engine
       ↓
Evidence Package
       ↓
Multi-LLM Layer
       ↓
Evidence Correlation
       ↓
Final Risk Engine
       ↓
Investigator Dashboard
       ↓
Recommendations
       ↓
PDF Report

7. Production Architecture
flowchart TB

    USER[Investigator]

    USER --> FRONTEND

    subgraph FRONTEND["Frontend Layer"]
        FRONTEND[React]
        UI[Tailwind CSS]
        GRAPH[Cytoscape.js]
        CHARTS[Recharts]
    end

    FRONTEND --> API

    subgraph API_LAYER["API Layer"]
        API[FastAPI]
        AUTH[Authentication / RBAC]
        VALIDATION[Pydantic]
    end

    API --> ORCHESTRATOR

    subgraph CORE["Investigation Core"]
        ORCHESTRATOR[Investigation Orchestrator]
        CASE[Case Service]
        TX[Transaction Service]
        TRACE[Fund Tracing Service]
        PATTERN[Pattern Detection]
        ENTITY[Entity Intelligence]
        RISK[Risk Engine]
        EVIDENCE[Evidence Service]
    end

    ORCHESTRATOR --> BLOCKCHAIN
    ORCHESTRATOR --> GRAPH
    ORCHESTRATOR --> ML
    ORCHESTRATOR --> LLM
    ORCHESTRATOR --> DATABASE

    subgraph BLOCKCHAIN["Blockchain Data Layer"]
        WEB3[Web3.py]
        BS[Blockscout]
        ETH[Etherscan]
        PROVIDERS[Additional Providers]
    end

    subgraph GRAPH["Graph Layer"]
        NX[NetworkX]
        NEO[Neo4j]
    end

    subgraph ML["Machine Learning"]
        XGB[XGBoost]
        ISO[Isolation Forest]
        GML[Graph ML]
    end

    subgraph LLM["Multi-LLM Layer"]
        ORCH[LLM Orchestrator]
        QWEN[Qwen Analyst]
        MISTRAL[Mistral Reviewer]
        LLAMA[Llama Copilot]
    end

    subgraph DATABASE["Persistence"]
        PG[(PostgreSQL)]
        OBJ[(Object Storage)]
    end

    API --> MONITORING

    subgraph MONITORING["Monitoring"]
        STREAM[Event / Polling Layer]
        ALERT[Alert Engine]
    end

8. Technology Stack
8.1 Complete Production Stack
Layer	Technologies
Frontend	React, Vite, Tailwind CSS
Graph UI	Cytoscape.js
Charts	Recharts
Backend	Python, FastAPI
Validation	Pydantic
Blockchain	Web3.py
Blockchain APIs	Blockscout, Etherscan, additional providers
Data Processing	Pandas, NumPy
Graph Analytics	NetworkX
Graph Database	Neo4j
Relational Database	PostgreSQL
ML	scikit-learn, XGBoost
Anomaly Detection	Isolation Forest
Graph ML	PyTorch Geometric
Entity Intelligence	OpenSanctions, FollowTheMoney, OpenAleph
LLMs	Qwen, Mistral, Llama
LLM Serving	Ollama / vLLM
Reports	ReportLab / WeasyPrint
Containerization	Docker
CI/CD	GitHub Actions
API Documentation	OpenAPI / Swagger
Monitoring	Prometheus + Grafana
Logging	Python logging / structured logs
Cache	Redis
Background Jobs	Celery / Redis
Streaming	Kafka or equivalent event infrastructure
Web Communication	WebSockets
9. Pipeline 1 — Case & Wallet Intake
Objective

Start an investigation using a wallet reported by the victim or investigator.

Complaint
    |
    v
Wallet Address
    |
    v
Validation
    |
    v
Case Creation

Technologies
React
Vite
Tailwind CSS
FastAPI
Pydantic
PostgreSQL
Web3.py
Example
{
  "case_id": "CYBER-2026-001",
  "wallet_address": "0xABC...",
  "blockchain": "ethereum",
  "fraud_type": "investment_fraud"
}


The backend validates the input and creates the investigation record.

10. Pipeline 2 — Blockchain Data Collection
Objective

Retrieve transaction activity related to the reported wallet.

Reported Wallet
      ↓
Blockchain Adapter
      ↓
Blockscout
Etherscan
Web3.py
Additional Provider
      ↓
Raw Transaction Data
      ↓
Provider Reconciliation

Data Collected
Transaction Hash
Sender
Receiver
Amount
Token
Timestamp
Block Number
Chain
Status
Gas
Logs
Provider
Important Design Principle

Blockchain providers are treated as data sources, not as the core analytical engine.

The application uses an adapter layer so providers can be replaced or added later.

11. Pipeline 3 — Data Normalization

Different blockchain providers expose different response structures.

The normalization layer converts them into a common schema.

Provider A ─┐
            │
Provider B ─┼──→ Normalization Layer
            │
Provider C ─┘
                    ↓
          Common Transaction Model
                    ↓
        ┌───────────┼───────────┐
        ↓           ↓           ↓
      Graph         ML        Rules
        ↓           ↓           ↓
                  Evidence
                    ↓
                LLM Context

Technologies
Python
Pandas
NumPy
Pydantic
Normalized Transaction
{
  "tx_hash": "0x123",
  "chain": "ethereum",
  "from": "0xAAA",
  "to": "0xBBB",
  "amount": "4.2",
  "token": "ETH",
  "timestamp": "2026-08-29T01:24:32Z",
  "block": 123456,
  "status": "success",
  "source": "blockscout"
}

12. Pipeline 4 — Transaction Graph
Objective

Convert blockchain transactions into relationships.

Wallet = Node
Transaction = Edge


Example:

Victim
  |
  | TRANSFER
  v
Wallet A
  |
  | TRANSFER
  v
Wallet B

Graph Architecture
flowchart LR

    TX[Normalized Transactions]
        |
        v
    BUILDER[Graph Builder]
        |
        +----------------+
        |                |
        v                v
    NetworkX           Neo4j
        |                |
        v                v
    Analysis         Persistent Graph

Technologies
NetworkX
Neo4j
Python
Node Types
Wallet
Contract
VASP
Bridge
Entity
Relationship Types
TRANSFER
TOKEN_TRANSFER
INTERACTED_WITH
ASSOCIATED_WITH
CROSSED_VIA
13. Pipeline 5 — Multi-Hop Fund Tracing

The system follows funds beyond the first destination.

flowchart LR

    V[Reported Wallet]
      --> A[Wallet A]
      --> B[Wallet B]
      --> C[Wallet C]
      --> D[Wallet D]
      --> E[VASP / Exchange]


For each path the system calculates:

Hop count
Amount transferred
Percentage of original amount
Time between transactions
Number of intermediary wallets
Destination type
VASP distance
Suspicious behavior indicators
Example
Hop 0 → Reported Wallet
Hop 1 → Wallet A
Hop 2 → Wallet B
Hop 3 → Wallet C
Hop 4 → Wallet D
Hop 5 → Exchange

Technologies
NetworkX
Neo4j
Python
Graph traversal algorithms
14. Pipeline 6 — Suspicious Pattern Detection

The system detects behavioral patterns using deterministic graph and transaction analysis.

Rapid Movement
A
|
| 1 min
v
B
|
| 2 min
v
C

Splitting
        A
      / | \
     B  C  D

Consolidation
B ---\
C ----> D
E ---/

Layering
A → B → C → D → E → F

Pattern Detection Pipeline
Transactions
      ↓
Temporal Analysis
      ↓
Graph Analysis
      ↓
Amount Analysis
      ↓
Rapid Movement
Splitting
Consolidation
Layering
Abnormal Size
      ↓
Pattern Signals

Technologies
Python
NetworkX
Pandas
NumPy
scikit-learn
15. Pipeline 7 — VASP & Entity Intelligence
Objective

Determine whether wallets are associated with known entities or VASPs.

Potential intelligence sources include:

OpenSanctions
FollowTheMoney
OpenAleph
Curated Address Labels
Investigator-Verified Labels
Public Entity Information
Architecture
flowchart TD

    W[Wallet Address]
       |
       v
    ENTITY[Entity Intelligence Layer]
       |
       +--> O[OpenSanctions]
       +--> F[FollowTheMoney]
       +--> A[OpenAleph]
       +--> C[Curated Labels]
       |
       v
    MATCH[Entity Matching]
       |
       v
    ATTR[Attribution Classification]

Attribution Levels
Level	Meaning
VERIFIED	Supported by explicit attribution evidence
INFERRED	Supported by behavioral or relational evidence
UNCONFIRMED	Evidence is insufficient
UNKNOWN	No meaningful attribution available
Critical Principle
VASP Interaction
       !=
VASP Involvement in Fraud


Interaction with an exchange is an investigative signal, not proof that the exchange participated in wrongdoing.

16. Pipeline 8 — ML Risk Analysis

Machine learning provides additional analytical signals.

flowchart TD

    A[Normalized Transactions]
        |
        v
    B[Feature Engineering]

    B --> C[XGBoost]
    B --> D[Isolation Forest]
    B --> E[Graph ML]

    C --> F[Supervised Risk Signal]
    D --> G[Anomaly Signal]
    E --> H[Graph Risk Signal]

    F --> I[ML Signal Aggregator]
    G --> I
    H --> I

Example Features
transaction_count
total_inflow
total_outflow
unique_senders
unique_receivers
transaction_frequency
average_transaction_size
maximum_transaction_size
average_time_between_transactions
number_of_hops
intermediary_count
splitting_score
consolidation_score
rapid_transfer_score
vasp_interaction
bridge_interaction
cross_chain_activity

Models
XGBoost
Isolation Forest
PyTorch Geometric
GraphSAGE
GCN
GAT

Graph ML is intended as an additional signal rather than a replacement for deterministic evidence.

17. Pipeline 9 — Rule Engine

The rule engine produces transparent and explainable risk factors.

flowchart TD

    A[Transaction Features]
       |
       v
    B[Rule Engine]

    B --> C[Rapid Transfer Rule]
    B --> D[Multiple Hop Rule]
    B --> E[Splitting Rule]
    B --> F[Consolidation Rule]
    B --> G[VASP Interaction Rule]
    B --> H[Abnormal Amount Rule]

    C --> I[Rule Score]
    D --> I
    E --> I
    F --> I
    G --> I
    H --> I

Example Configuration
Rule	Example Weight
Rapid Transfers	+15
Multiple Hops	+15
Fund Splitting	+10
Consolidation	+10
VASP Interaction	+15
Abnormal Transaction Size	+10

Weights should be configurable and validated against appropriate evaluation data.

They should not be treated as universal truth.

18. Pipeline 10 — Multi-LLM Intelligence

The platform uses three specialized LLM roles.

flowchart TD

    E[Structured Evidence Package]
        |
        v
    O[LLM Orchestrator]

    O --> Q[Qwen<br/>Investigation Analyst]
    O --> M[Mistral<br/>Evidence Reviewer]
    O --> L[Llama<br/>Investigator Copilot]

    Q --> C[Consensus / Conflict Detection]
    M --> C
    L --> C

    C --> V[Evidence Validation]

Qwen — Investigation Analyst

Responsibilities:

Analyze transaction paths
Explain suspicious patterns
Identify important wallets
Summarize fund flows
Generate investigative questions
Evidence
   ↓
Qwen
   ↓
Investigation Analysis

Mistral — Evidence Reviewer

Responsibilities:

Challenge analytical claims
Check evidence support
Identify unsupported conclusions
Separate facts from inferences
Identify contradictions
Qwen Finding
     ↓
Mistral Review
     ↓
SUPPORTED / UNSUPPORTED / UNCERTAIN

Llama — Investigator Copilot

Responsibilities:

Explain findings
Generate investigator-readable summaries
Produce recommendations
Assist with case questions
Help generate report language
Validated Evidence
      ↓
Llama
      ↓
Explanation + Recommendations

19. Pipeline 11 — Evidence Correlation

The platform must connect important conclusions to supporting evidence.

flowchart TD

    A[Finding]
       |
       v
    B[Evidence IDs]
       |
       v
    C[Transaction Records]
       |
       v
    D[Blockchain Source]
       |
       v
    E[Validation]
       |
       v
    F[Supported Finding]

Example
{
  "finding": "Rapid fund movement",
  "classification": "FACT",
  "evidence_ids": [
    "E001",
    "E002",
    "E003"
  ],
  "confidence": "HIGH"
}


Every important finding should ideally have:

Transaction Hash
Block Number
Timestamp
Wallet
Amount
Direction
Data Source
Evidence ID
Detection Rule
Model Signal
Confidence
20. Pipeline 12 — Final Risk Engine

The final risk engine combines independent signals.

Rule Score
      +
ML Score
      +
Graph Risk
      +
Pattern Signals
      +
VASP Intelligence
      +
Evidence Validation
      ↓
Final Risk Engine
      ↓
Risk Score 0-100
      ↓
LOW / MEDIUM / HIGH

Example
Rule Score:          82
XGBoost Signal:      89%
Anomaly Score:       91%
Graph Risk:          HIGH
VASP Attribution:    INFERRED

Final Result:

RISK: 91 / 100
LEVEL: HIGH


The final scoring formula should remain configurable and be calibrated using validation data.

21. Pipeline 13 — Investigator Dashboard

The dashboard provides one unified investigation workspace.

flowchart TD

    A[Investigation Case]
       |
       v
    B[Dashboard]

    B --> C[Case Summary]
    B --> D[Transaction Statistics]
    B --> E[Fund Flow]
    B --> F[Transaction Graph]
    B --> G[VASP Findings]
    B --> H[Risk Factors]
    B --> I[ML Signals]
    B --> J[LLM Analysis]
    B --> K[Evidence]
    B --> L[Recommendations]

Frontend Technologies
React
Vite
Tailwind CSS
Cytoscape.js
Recharts
Example Interface
+------------------------------------------------------+
| CRYPTO FRAUD INVESTIGATION                           |
+------------------------------------------------------+
| Case: CYBER-2026-001                  HIGH 91/100    |
| Wallet: 0xABC123...                                  |
+------------+--------------+--------------------------+
| TX COUNT   | FUND FLOW    | VASP                     |
| 127        | ₹8.2L        | Exchange X              |
+------------+--------------+--------------------------+
|                                                      |
|              TRANSACTION GRAPH                      |
|                                                      |
|       A ------ B ------ C                            |
|              /          \                            |
|             D            E                           |
|              \          /                            |
|                 VASP                                |
|                                                      |
+------------------------------------------------------+
| RISK FACTORS                                         |
|                                                      |
| Rapid Movement              HIGH                     |
| Multiple Hops               HIGH                     |
| Splitting                   MEDIUM                   |
| VASP Interaction            HIGH                     |
+------------------------------------------------------+

22. Pipeline 14 — Real-Time Monitoring

Production deployments can monitor new blockchain activity.

Event-Driven Architecture
flowchart TD

    A[Blockchain]
       |
       v
    B[Event Listener / Indexer]
       |
       v
    C[New Transaction]
       |
       v
    D[Transaction Processor]
       |
       v
    E[Pattern Detection]
       |
       v
    F[Risk Engine]
       |
       v
    G{Risk Threshold}

    G -->|High| H[Alert]
    G -->|Normal| I[Store]


For the MVP, periodic polling is sufficient.

Production systems can use:

Blockchain events
Kafka
Stream processing
WebSockets
Redis
Background workers
23. Cross-Chain Architecture

The system is designed around a chain-agnostic normalized data model.

Ethereum
Polygon
BNB Chain
Bitcoin
Solana
      ↓
Normalized Transaction Model
      ↓
Graph Engine
      ↓
ML Engine
      ↓
Risk Engine


Each chain has its own adapter.

Chain Adapter
      ↓
Provider Adapter
      ↓
Common Transaction Model
      ↓
Analysis Engine


This prevents blockchain-specific logic from spreading throughout the application.

24. Bridge Detection

Cross-chain bridges are important because funds can move from one network to another.

Example
Ethereum
    |
    v
Bridge Contract
    |
    v
Polygon
    |
    v
Wallet

MVP Approach

Use:

Known bridge contract lists
Bridge event signatures
Known bridge addresses
Transaction timing
Cross-chain transaction correlation
Production Approach
flowchart LR

    A[Chain A]
       |
       v
    B[Bridge Detection]
       |
       v
    C[Cross-Chain Event]
       |
       v
    D[Chain B]
       |
       v
    E[Correlation Engine]


Example output:

CROSS-CHAIN MOVEMENT DETECTED

Source Chain:
Ethereum

Bridge:
Known Bridge Contract

Destination Chain:
Polygon

25. Database Architecture

The production architecture uses both relational and graph storage.

                 FastAPI
                    |
        +-----------+-----------+
        |           |           |
        v           v           v
   PostgreSQL     Neo4j       Redis
        |           |           |
        v           v           v
Cases / Users   Wallet Graph   Cache /
Evidence        Relationships  Jobs
Transactions    Paths
Risk Scores     Entities

PostgreSQL

Stores:

Cases
Investigators
Wallets
Transactions
Evidence
Alerts
Risk Scores
LLM Outputs
Reports
Entity Matches
Audit Logs
Neo4j

Stores:

Wallet Relationships
Transaction Paths
VASP Relationships
Bridge Relationships
Entity Clusters
Graph Features
Redis

Used for:

Caching
Background job coordination
Temporary state
Rate limiting
26. Evidence Architecture

Evidence is treated as a first-class object.

flowchart TD

    A[Blockchain Data]
       |
       v
    B[Evidence Record]

    B --> C[Transaction Hash]
    B --> D[Block]
    B --> E[Timestamp]
    B --> F[Wallet]
    B --> G[Amount]
    B --> H[Provider]
    B --> I[Entity Source]
    B --> J[Detection Rule]
    B --> K[ML Signal]
    B --> L[LLM Finding]

    B --> M[Evidence Store]

Example
{
  "evidence_id": "E001",
  "type": "transaction",
  "tx_hash": "0x123",
  "block": 12345678,
  "timestamp": "2026-08-29T01:24:32Z",
  "from": "0xAAA",
  "to": "0xBBB",
  "amount": "4.2",
  "source": "blockscout"
}


Evidence should retain provenance.

27. LLM Context Architecture

The LLMs should never receive uncontrolled raw blockchain data when deterministic preprocessing can provide structured facts.

flowchart TD

    A[Raw Blockchain Data]
       |
       v
    B[Normalization]
       |
       v
    C[Graph Analysis]
       |
       v
    D[Feature Engineering]
       |
       v
    E[Rules + ML]
       |
       v
    F[VASP Intelligence]
       |
       v
    G[Evidence Package]
       |
       v
    H[LLM Orchestrator]
       |
       +--------+--------+
       |        |        |
       v        v        v
     Qwen    Mistral   Llama

LLM Context Should Contain
Case Information
Relevant Transactions
Important Graph Paths
Risk Features
Detected Patterns
VASP Findings
Evidence IDs
Rule Results
ML Signals
Known Uncertainties

The LLM should not independently calculate critical numerical values when the backend can calculate them deterministically.

28. LLM Output Schema

LLM responses should be structured.

{
  "summary": "Funds moved through multiple intermediary wallets.",
  "key_findings": [
    {
      "finding": "Wallet B received funds from the reported wallet.",
      "classification": "FACT",
      "evidence_ids": [
        "E001",
        "E002"
      ],
      "confidence": "HIGH"
    }
  ],
  "inferences": [
    {
      "statement": "Wallet C may be part of a layering path.",
      "confidence": "MEDIUM",
      "evidence_ids": [
        "E004"
      ]
    }
  ],
  "recommendations": [
    "Review Wallet C's subsequent transactions."
  ],
  "uncertainties": [
    "Ownership of Wallet C has not been verified."
  ]
}

Required Classification

Every important LLM statement should be classified as:

FACT
INFERENCE
RECOMMENDATION
UNCERTAINTY

29. API Architecture

The production backend exposes REST APIs.

Case APIs
POST /api/v1/cases
GET  /api/v1/cases/{case_id}
PATCH /api/v1/cases/{case_id}

Wallet APIs
GET /api/v1/wallets/{address}
GET /api/v1/wallets/{address}/transactions
GET /api/v1/wallets/{address}/graph
GET /api/v1/wallets/{address}/fund-flow
GET /api/v1/wallets/{address}/risk
GET /api/v1/wallets/{address}/entities

Analysis APIs
POST /api/v1/analyze/wallet
POST /api/v1/analyze/trace
POST /api/v1/analyze/risk
POST /api/v1/analyze/llm

Evidence APIs
GET /api/v1/cases/{case_id}/evidence
GET /api/v1/evidence/{evidence_id}

Report APIs
POST /api/v1/cases/{case_id}/report
GET /api/v1/cases/{case_id}/report

Monitoring APIs
GET /api/v1/alerts
GET /api/v1/alerts/{alert_id}
PATCH /api/v1/alerts/{alert_id}


FastAPI automatically provides OpenAPI-compatible documentation.

30. Security Architecture

Because the system processes potentially sensitive investigative information, production deployment requires strong security controls.

flowchart TD

    USER[Investigator]
       |
       v
    AUTH[Authentication]
       |
       v
    RBAC[Role-Based Access Control]
       |
       v
    API[API Gateway]
       |
       v
    VALIDATION[Input Validation]
       |
       v
    SERVICES[Investigation Services]
       |
       +--------+--------+
       |        |        |
       v        v        v
      DB       ML       LLM

Security Controls
Authentication
OAuth2 / OIDC
JWT
MFA
Authorization
Role-Based Access Control
Case-Level Permissions
API Security
Rate Limiting
Input Validation
Request Authentication
API Logging
Secrets

Use:

Environment Variables
Secret Manager
Vault
Cloud Secret Manager

Never commit API keys or credentials to Git.

31. Production Deployment

A production deployment can use containers.

Load Balancer
      |
      v
Frontend Container
      |
      v
FastAPI Containers
      |
      +-------------------+
      |         |         |
      v         v         v
Workers   PostgreSQL    Neo4j
      |
      v
Redis
      |
      +-------------------+
      |         |         |
      v         v         v
Blockchain   ML        LLM Serving
Providers              |
                       +------+
                       |      |
                     Qwen  Mistral
                              |
                            Llama

Containerized Services
frontend
backend
worker
postgres
neo4j
redis
llm-service
monitoring

Development
Docker Compose

Production

Possible deployment targets:

Kubernetes
Managed Container Platforms
Cloud VMs
Private Infrastructure
On-Premise Infrastructure
32. Observability & Reliability

A production system should monitor every major service.

flowchart LR

    APP[Application]
       |
       v
    METRICS[Metrics]
       |
       v
    PROM[Prometheus]
       |
       v
    GRAF[Grafana]

Monitor
API latency
Blockchain provider failures
Transaction ingestion rate
Queue length
ML inference time
LLM inference time
Database latency
Graph query latency
Failed investigations
Alert processing time
Provider Failover
Provider A
    |
    | failure
    v
Provider B
    |
    | failure
    v
Provider C


The adapter layer should support provider fallback where practical.

33. Repository Structure
crypto-fraud-platform/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── graph/
│   │   ├── charts/
│   │   ├── services/
│   │   ├── hooks/
│   │   └── types/
│   │
│   ├── package.json
│   └── vite.config.ts
│
├── backend/
│   └── app/
│       ├── main.py
│       │
│       ├── api/
│       │   ├── cases.py
│       │   ├── wallets.py
│       │   ├── transactions.py
│       │   ├── analysis.py
│       │   ├── reports.py
│       │   └── alerts.py
│       │
│       ├── models/
│       ├── schemas/
│       ├── database/
│       │
│       ├── services/
│       │   ├── blockchain/
│       │   ├── normalization/
│       │   ├── graph/
│       │   ├── tracing/
│       │   ├── patterns/
│       │   ├── entity/
│       │   ├── evidence/
│       │   ├── risk/
│       │   ├── llm/
│       │   └── reports/
│       │
│       ├── ml/
│       │   ├── features/
│       │   ├── training/
│       │   └── inference/
│       │
│       └── rules/
│
├── llm/
│   ├── orchestrator/
│   ├── prompts/
│   ├── schemas/
│   └── agents/
│       ├── analyst/
│       ├── evidence_reviewer/
│       └── investigator_copilot/
│
├── graph/
│   ├── algorithms/
│   └── queries/
│
├── datasets/
│
├── reports/
│
├── tests/
│
├── docker/
│
├── docs/
│
├── docker-compose.yml
├── requirements.txt
├── .env.example
└── README.md

34. SIH MVP vs Production Architecture

The architecture above represents the production target.

The SIH prototype can implement a smaller version of the same architecture.

Component	SIH MVP	Production
Frontend	React + Vite	React + Vite
Styling	Tailwind	Tailwind
Backend	FastAPI	FastAPI
Blockchain	Blockscout / Etherscan	Multi-provider adapters
Direct Blockchain	Web3.py	Web3.py + nodes/indexers
Database	PostgreSQL	PostgreSQL + optimized storage
Graph	NetworkX	NetworkX + Neo4j
Fund Tracing	Python	Distributed graph processing where required
VASP	Curated/open datasets	Expanded entity intelligence
ML	XGBoost + Isolation Forest	ML ensemble + Graph ML
LLM	Qwen + Mistral + Llama	Multi-model serving infrastructure
LLM Serving	Ollama	vLLM / optimized inference
Monitoring	Polling	Streaming/event-driven
Alerts	Basic	Real-time alert infrastructure
Chains	Initial EVM	Multi-chain
Bridge	Known contracts	Cross-chain correlation
Reports	ReportLab	ReportLab + WeasyPrint
Deployment	Docker Compose	Containers/Kubernetes
Observability	Basic logs	Prometheus + Grafana
Authentication	Basic	OIDC/OAuth2 + RBAC + MFA
Key Principle

The MVP is not a different product.

It is a smaller implementation of the same production architecture.

                    PRODUCTION PLATFORM
                           |
             +-------------+-------------+
             |                           |
             v                           v
          SIH MVP                    FUTURE SCALE
             |                           |
        Core Pipeline              Advanced Services

35. Development Roadmap
Phase 1 — SIH MVP
Wallet Intake
      ↓
Blockchain Retrieval
      ↓
Normalization
      ↓
Graph Construction
      ↓
Multi-Hop Tracing
      ↓
Pattern Detection
      ↓
VASP Matching
      ↓
Rules + ML
      ↓
Qwen + Mistral + Llama
      ↓
Evidence Validation
      ↓
Risk Score
      ↓
Dashboard
      ↓
PDF Report

Phase 2 — Production Foundation
Authentication
      ↓
RBAC
      ↓
PostgreSQL
      ↓
Neo4j
      ↓
Provider Adapters
      ↓
Background Workers
      ↓
Redis
      ↓
Monitoring
      ↓
Audit Logging

Phase 3 — Multi-Chain
Ethereum
Polygon
BNB Chain
Bitcoin
Solana
      ↓
Chain Adapters
      ↓
Normalized Model

Phase 4 — Real-Time Intelligence
Blockchain Events
      ↓
Streaming Layer
      ↓
Transaction Processor
      ↓
Pattern Detection
      ↓
Risk Engine
      ↓
WebSocket Alert

Phase 5 — Advanced Intelligence
Graph ML
      +
Advanced Entity Resolution
      +
Cross-Case Intelligence
      +
Cross-Chain Correlation
      +
Advanced LLM Evaluation

36. Analytical Principles

The platform must distinguish between risk indicators and legal conclusions.

High Risk ≠ Criminal
HIGH RISK
    !=
CRIMINAL / GUILTY

VASP Interaction ≠ VASP Involvement
VASP INTERACTION
    !=
VASP INVOLVEMENT

Behavioral Similarity ≠ Ownership
BEHAVIORAL SIMILARITY
    !=
VERIFIED OWNERSHIP

Attribution Levels
Level	Meaning
VERIFIED	Supported by explicit attribution evidence
INFERRED	Supported by behavioral or relational evidence
UNCONFIRMED	Evidence is insufficient
UNKNOWN	No meaningful attribution available

The platform is an investigative intelligence and decision-support system.

Human investigators remain responsible for:

Verification
Evidence assessment
Interpretation
Legal decisions
Appropriate action
37. Example Investigation

Suppose a victim reports:

Wallet:
0xABC123...

Amount:
₹5,00,000

Fraud:
Investment Fraud


The platform discovers:

Victim
   |
   | ₹5,00,000
   v
Wallet A
   |
   | 2 minutes
   v
Wallet B
   |
   +------> Wallet C
   |           |
   |           v
   |        Wallet D
   |
   v
Wallet E
   |
   v
Exchange

Analysis
Transaction Count: 127

Intermediaries: 6

Rapid Movement: HIGH

Splitting: MEDIUM

Multiple Hops: HIGH

VASP Interaction: YES

Cross-Chain: DETECTED

XGBoost Signal: 89%

Anomaly Signal: 91%

Rule Score: 82/100

Multi-LLM Analysis
Qwen

Identifies rapid multi-hop movement.

Mistral

Confirms that the transaction evidence supports the movement pattern but does not establish ownership of intermediary wallets.

Llama

Generates investigator-readable explanation and recommendations.

Final Result
Risk Score: 91 / 100

Risk Level:
HIGH

Important Finding:
Funds moved through multiple intermediary
wallets before reaching a VASP-associated
destination.

Attribution:
VASP association inferred/verified depending
on available entity evidence.

Uncertainty:
Ownership of intermediary wallets is not verified.

38. Expected Output

Every investigation should generate a structured output.

====================================================
              CRYPTO FRAUD INVESTIGATION
====================================================

CASE
----------------------------------------------------
Case ID: CYBER-2026-001
Fraud Type: Investment Fraud
Blockchain: Ethereum

REPORTED WALLET
----------------------------------------------------
0xABC123...

TRANSACTION SUMMARY
----------------------------------------------------
Transactions: 127
Total Inflow: ₹8.2L
Total Outflow: ₹8.0L

FUND TRACE
----------------------------------------------------
Hop 0: Reported Wallet
Hop 1: Wallet A
Hop 2: Wallet B
Hop 3: Wallet C
Hop 4: Wallet D
Hop 5: VASP

SUSPICIOUS PATTERNS
----------------------------------------------------
Rapid Movement: HIGH
Multiple Hops: HIGH
Fund Splitting: MEDIUM
Fund Consolidation: LOW
Cross-Chain: DETECTED

VASP INTELLIGENCE
----------------------------------------------------
Entity: Exchange X
Attribution: INFERRED / VERIFIED
Distance: 3 hops
Confidence: HIGH

ML SIGNALS
----------------------------------------------------
XGBoost: 89%
Anomaly Score: 91%
Graph Risk: HIGH

RULE SCORE
----------------------------------------------------
82 / 100

FINAL RISK
----------------------------------------------------
91 / 100
HIGH

MULTI-LLM ANALYSIS
----------------------------------------------------
Qwen:
Investigation analysis available.

Mistral:
Evidence review available.

Llama:
Investigator explanation available.

CONSENSUS:
Evidence supports the identified transaction path.

UNCERTAINTIES:
Ownership of intermediary wallets requires
additional verification.

RECOMMENDATIONS
----------------------------------------------------
1. Review intermediary Wallet B and Wallet C.
2. Verify VASP attribution.
3. Preserve relevant transaction evidence.
4. Review connected destination wallets.

====================================================

39. Future Enhancements
Multi-Chain Intelligence
Ethereum
Polygon
BNB Chain
Bitcoin
Solana
Additional Networks

Advanced Graph ML
GraphSAGE
GCN
GAT
Graph Transformers
Real-Time Streaming
Blockchain Events
       ↓
Kafka
       ↓
Stream Processing
       ↓
Risk Engine
       ↓
WebSocket Alerts

Cross-Case Intelligence
Case 1
   |
Shared Wallet
   |
Case 2
   |
Case 3
   |
Shared Entity
   |
Investigation Network


This can help identify relationships across multiple investigations.

Advanced Cross-Chain Correlation
Chain A
   |
Bridge
   |
Chain B
   |
Bridge
   |
Chain C

Investigator Collaboration

Future versions can support:

Case Assignment
Evidence Sharing
Investigator Notes
Case Comments
Audit History
Team Workflows
40. Project Philosophy

The platform follows five core principles.

Principle 1 — Evidence First

Important findings should be connected to supporting evidence.

Finding
   ↓
Evidence
   ↓
Source

Principle 2 — Explainability

The platform should explain why a wallet or path received a particular risk signal.

Risk Score
     ↓
Risk Factors
     ↓
Evidence

Principle 3 — Multi-Model Intelligence

Different models perform different tasks.

Qwen
  ↓
Analyze

Mistral
  ↓
Review

Llama
  ↓
Explain / Recommend

Principle 4 — Human in the Loop
System
   ↓
Analysis
   ↓
Investigator
   ↓
Verification
   ↓
Decision


The system supports investigators rather than replacing them.

Principle 5 — Fact vs Inference

The platform must clearly distinguish:

VERIFIED FACT
      ↓
INFERENCE
      ↓
RECOMMENDATION
      ↓
UNCERTAINTY


This is particularly important when AI models are involved.

41. Final Architecture Summary
Victim Complaint
      ↓
Wallet Intake
      ↓
Case Management
      ↓
Blockchain Data Layer
      ↓
Normalization
      ↓
Transaction Engine
      ↓
Graph Engine
      ↓
Feature Engine
      ↓
NetworkX + Neo4j
      ↓
ML Engine
      ↓
Rule Engine
      ↓
Graph Risk
ML Risk
Rule Risk
      ↓
VASP / Entity Intelligence
      ↓
Evidence Package
      ↓
Qwen Analyst
      ↓
Mistral Reviewer
      ↓
Llama Copilot
      ↓
Consensus
      ↓
Evidence Correlation
      ↓
Final Risk Engine
      ↓
Investigator Dashboard
      ↓
Real-Time Alerts
      ↓
Recommendations
      ↓
PDF Report

42. Production Technology Map
                    ┌──────────────────────┐
                    │     INVESTIGATOR     │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │ React + Tailwind     │
                    │ Cytoscape + Recharts │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │ FastAPI + Pydantic   │
                    └──────────┬───────────┘
                               │
             ┌─────────────────┼─────────────────┐
             ▼                 ▼                 ▼
      ┌────────────┐    ┌────────────┐    ┌────────────┐
      │ Blockchain │    │ PostgreSQL │    │   Neo4j    │
      │   Layer    │    │            │    │   Graph    │
      └─────┬──────┘    └────────────┘    └─────┬──────┘
            │                                    │
            ▼                                    ▼
      Web3.py / APIs                       Graph Analysis
            │                                    │
            └────────────────┬───────────────────┘
                             ▼
                    ┌──────────────────────┐
                    │ Feature Engineering  │
                    │ Pandas + NumPy       │
                    └──────────┬───────────┘
                               │
                ┌──────────────┼──────────────┐
                ▼              ▼              ▼
             XGBoost     Isolation Forest   Graph ML
                │              │              │
                └──────────────┼──────────────┘
                               ▼
                       ┌─────────────┐
                       │ Rule Engine │
                       └──────┬──────┘
                              ▼
                     Entity Intelligence
                              │
                              ▼
                       Evidence Package
                              │
              ┌───────────────┼───────────────┐
              ▼               ▼               ▼
            Qwen           Mistral          Llama
          ANALYST         REVIEWER         COPILOT
              │               │               │
              └───────────────┼───────────────┘
                              ▼
                     Evidence Correlation
                              │
                              ▼
                       Final Risk Engine
                              │
                   ┌──────────┴──────────┐
                   ▼                     ▼
             Dashboard                Alerts
                   │
                   ▼
          Recommendations + PDF

43. Final Outcome

The final platform transforms:

RAW BLOCKCHAIN DATA


into:

STRUCTURED INVESTIGATIVE INTELLIGENCE


through:

Blockchain Data
      +
Transaction Graph
      +
Fund Tracing
      +
Pattern Detection
      +
Entity Intelligence
      +
Rules
      +
Machine Learning
      +
Multiple LLMs
      +
Evidence Correlation
      +
Risk Analysis


The final investigator experience becomes:

Reported Wallet
      ↓
Where did the money go?
      ↓
Which wallets were involved?
      ↓
What patterns occurred?
      ↓
Did funds reach a VASP?
      ↓
What evidence supports the findings?
      ↓
What is verified vs inferred?
      ↓
What is the risk level?
      ↓
What should be investigated next?
      ↓
Generate Evidence-Backed Report

44. Project Positioning

The platform should be positioned as:

A production-oriented Crypto Fraud Investigation Intelligence Platform that combines blockchain analytics, transaction graph analysis, entity intelligence, machine learning, deterministic rules, and evidence-grounded multi-LLM reasoning to assist investigators in tracing and understanding cryptocurrency fraud.

It is not intended to be:

A simple blockchain explorer


and it is not intended to be:

An LLM chatbot making autonomous accusations


Instead, it is:

              EVIDENCE
                  +
              ANALYTICS
                  +
             MACHINE LEARNING
                  +
             MULTI-LLM AI
                  +
             HUMAN REVIEW
                  ↓
       INVESTIGATIVE INTELLIGENCE

45. License & Responsible Use

This project is intended for:

Academic research
SIH/prototype development
Authorized cybersecurity investigations
Blockchain analytics research
Fraud investigation support

Production deployments must comply with applicable:

Laws and regulations
Data protection requirements
Evidentiary standards
Organizational policies
Blockchain provider terms
Model licenses
Entity-intelligence data licenses

The system should never automatically label a person or organization as criminal solely because a wallet receives a high risk score.

HIGH RISK
    ≠
GUILTY


All important conclusions should remain subject to human verification.

46. Summary

The production-grade platform follows this architecture:

VICTIM COMPLAINT
       ↓
WALLET INTAKE
       ↓
CASE MANAGEMENT
       ↓
BLOCKCHAIN DATA
       ↓
NORMALIZATION
       ↓
TRANSACTION GRAPH
       ↓
MULTI-HOP FUND TRACING
       ↓
SUSPICIOUS PATTERN DETECTION
       ↓
VASP / ENTITY INTELLIGENCE
       ↓
ML + RULE ENGINE
       ↓
QWEN + MISTRAL + LLAMA
       ↓
EVIDENCE CORRELATION
       ↓
EXPLAINABLE RISK ENGINE
       ↓
INVESTIGATOR DASHBOARD
       ↓
REAL-TIME ALERTS
       ↓
RECOMMENDATIONS
       ↓
EVIDENCE-BACKED PDF REPORT

Core Technology Stack
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

Blockchain
Web3.py
Blockscout
Etherscan
Blockchain Provider Adapters

Data
Pandas
NumPy

Graph
NetworkX
Neo4j
Cytoscape.js

Entity Intelligence
OpenSanctions
FollowTheMoney
OpenAleph
Curated Address Labels

Machine Learning
scikit-learn
XGBoost
Isolation Forest
PyTorch Geometric

LLM
Qwen
Mistral
Llama

LLM Serving
Ollama
vLLM

Database
PostgreSQL
Neo4j
Redis

Reports
ReportLab
WeasyPrint

Infrastructure
Docker
GitHub Actions
Prometheus
Grafana
Kafka
Celery
WebSockets

47. Central Philosophy

The central philosophy is simple:

Collect the Evidence
        ↓
Understand the Money Flow
        ↓
Identify Meaningful Patterns
        ↓
Use AI to Assist Analysis
        ↓
Verify AI Claims Against Evidence
        ↓
Generate Explainable Risk
        ↓
Support Investigator Decisions
        ↓
Produce Evidence-Backed Reports


The goal is not to replace investigators.

The goal is to give investigators a powerful, explainable, auditable, and scalable system for understanding cryptocurrency fraud investigations.
