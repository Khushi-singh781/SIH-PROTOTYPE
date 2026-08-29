Victim Complaint
      ↓
Wallet Address
      ↓
Create Case
      ↓
Collect Blockchain Transactions
      ↓
Clean & Normalize Data
      ↓
Build Transaction Graph
      ↓
Trace Money Across Wallets
      ↓
Detect Suspicious Patterns
      ↓
Identify VASP / Exchange
      ↓
ML + Rule-Based Analysis
      ↓
Qwen + Mistral + Llama
      ↓
Check AI Conclusions Against Evidence
      ↓
Final Risk Score
      ↓
Investigator Dashboard
      ↓
Recommendations + PDF Report



Complete Pipeline + Open-Source Tech Stack
Pipeline Step	Open-Source Tech Stack	What we are doing
1. Victim Complaint	React, Vite, Tailwind CSS	Investigator enters the fraud complaint and basic case information through the web interface.
2. Wallet Address	React + Pydantic + Web3.py	We accept and validate the wallet address and identify the blockchain/network it belongs to.
3. Create Case	FastAPI + PostgreSQL + SQLAlchemy	We create a unique investigation case and store the wallet, complaint details, investigator and case status.
4. Collect Blockchain Transactions	Web3.py + Blockscout API + Etherscan API	We fetch transactions involving the reported wallet, including sender, receiver, amount, timestamp, block and transaction hash.
5. Clean & Normalize Data	Python + Pandas + NumPy + Pydantic	Different blockchain providers return different formats, so we convert everything into one common transaction format.
6. Build Transaction Graph	NetworkX + Neo4j	Wallets become nodes and transactions become edges, allowing us to visually and mathematically understand the money flow.
7. Trace Money Across Wallets	NetworkX + Neo4j + Python	We follow the funds from the reported wallet through multiple wallets and calculate hops, paths, amounts and timing.
8. Detect Suspicious Patterns	Python + NetworkX + scikit-learn	We look for behaviors such as rapid transfers, splitting, consolidation, long wallet chains and unusual transaction activity.
9. Identify VASP / Exchange	OpenSanctions + FollowTheMoney + OpenAleph + curated labels	We compare wallet/entity information against open intelligence and our curated address labels to find known or potentially associated exchanges/VASPs.
10. ML + Rule-Based Analysis	XGBoost + scikit-learn + Isolation Forest + Python	ML identifies anomalous behavior while deterministic rules produce transparent risk factors.
11. Qwen + Mistral + Llama	Qwen + Mistral + Llama + Ollama/vLLM	Three specialized LLMs analyze the structured evidence: Qwen analyzes, Mistral reviews, and Llama explains/recommends.
12. Check AI Conclusions Against Evidence	Python + Pydantic + custom Evidence Validation Layer	We check whether the LLM claims are actually supported by transactions and other evidence instead of blindly trusting the AI.
13. Final Risk Score	Python + Rule Engine + ML + Graph Analytics	We combine rule, ML, graph and validated intelligence signals into an explainable risk score.
14. Investigator Dashboard	React + Tailwind CSS + Cytoscape.js + Recharts	Investigator sees the risk score, transaction graph, money flow, suspicious patterns, VASP findings and evidence in one interface.
15. Recommendations + PDF Report	Llama + ReportLab / WeasyPrint
