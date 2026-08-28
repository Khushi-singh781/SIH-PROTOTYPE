
````markdown
# Blockchain Fundamentals

---

## Table of Contents

1. [What is Blockchain?](#1-what-is-blockchain)
2. [Centralized vs Decentralized Systems](#2-centralized-vs-decentralized-systems)
3. [What is a Block?](#3-what-is-a-block)
4. [What is a Transaction?](#4-what-is-a-transaction)
5. [What are Nodes?](#5-what-are-nodes)
6. [What is Consensus?](#6-what-is-consensus)
7. [What is Hashing?](#7-what-is-hashing)
8. [Digital Signatures](#8-digital-signatures)
9. [Public Key / Private Key](#9-public-key--private-key)
10. [What is a Wallet?](#10-what-is-a-wallet)
11. [What is a Wallet Address?](#11-what-is-a-wallet-address)
12. [Cryptocurrency](#12-cryptocurrency)
13. [Gas / Transaction Fees](#13-gas--transaction-fees)
14. [Blockchain Explorers](#14-blockchain-explorers)
15. [On-Chain vs Off-Chain Data](#15-on-chain-vs-off-chain-data)
16. [Putting Everything Together](#16-putting-everything-together)
17. [Connecting This to the SIH Problem](#17-connecting-this-to-the-sih-problem)
18. [Quick Revision](#18-quick-revision)

---

# 1. What is Blockchain?

A **blockchain is a digital record book that is shared among many computers**.

Imagine a notebook containing:

```text
Khushi → Rahul : ₹500
Rahul → Ananya : ₹200
Ananya → Priya : ₹100
````

In a normal system, one organization might control that notebook.

In blockchain, **many computers keep copies of the record**.

Transactions are grouped together into **blocks**, and blocks are connected together:

```text
BLOCK 1 → BLOCK 2 → BLOCK 3 → BLOCK 4
```

That's why it is called a **blockchain**.

### In simple words

> Blockchain = a shared digital record book that is very difficult to secretly change.

---

# 2. Centralized vs Decentralized Systems

This is one of the most important concepts in blockchain.

## Centralized

Imagine your bank.

```text
             BANK
           /  |  \
          /   |   \
       You  Rahul  Ananya
```

The bank controls the system.

It maintains the database containing:

* Your balance
* Your transactions
* Your account information

If the bank's database says:

```text
Khushi has ₹10,000
```

that's the official record.

So there is **one central authority**.

This is called **centralization**.

### Examples

* Banks
* Instagram
* Google
* College ERP systems
* Amazon

Usually:

```text
Users
  ↓
Central Server
  ↓
Database
```

---

## Decentralized

Blockchain works differently.

Instead of:

```text
Everyone
   ↓
ONE Server
```

you can have many computers participating in the network:

```text
        Computer
        /      \
  Computer ---- Computer
     |             |
  Computer ---- Computer
        \      /
         Computer
```

Many computers participate in maintaining the network.

There isn't necessarily one single organization controlling the ledger.

### Simple Difference

| Centralized                            | Decentralized                   |
| -------------------------------------- | ------------------------------- |
| One central authority                  | Many participants               |
| Central database                       | Distributed copies/data         |
| Bank controls records                  | Network follows protocol rules  |
| Easier for one organization to control | Harder for one party to control |
| Example: Banking system                | Example: Bitcoin                |

---

# 3. What is a Block?

A **block is basically a container that stores a group of transactions**.

Imagine 100 people make transactions.

Instead of putting every transaction into the blockchain individually, the network groups many transactions into a block.

For example:

```text
BLOCK #105

Transaction 1
Khushi → Rahul

Transaction 2
A → B

Transaction 3
C → D

Transaction 4
X → Y

Previous Block: #104
Hash: abc123...
```

Then another block might contain:

```text
BLOCK #106

Transaction 1
P → Q

Transaction 2
R → S

Previous Block: #105
Hash: xyz456...
```

So the blocks form a chain:

```text
Block 104
    ↓
Block 105
    ↓
Block 106
    ↓
Block 107
```

That's the **chain** in blockchain.

---

# 4. What is a Transaction?

A **transaction is simply an instruction or record saying that something happened on the blockchain**.

For example:

```text
Wallet A → Wallet B
1 ETH
```

That is a transaction.

A transaction may contain information such as:

```text
Sender
Receiver
Amount
Time
Transaction ID
Fee
Digital Signature
```

Depending on the blockchain, transactions can do much more than simply transfer cryptocurrency.

For example, on Ethereum, a transaction can interact with a **smart contract**.

---

# 5. What are Nodes?

A **node is simply a computer participating in a blockchain network**.

Think of it like:

```text
          NODE
           |
           ↓
"I participate in the
 blockchain network"
```

There can be many nodes:

```text
Node A ─── Node B
  │          │
  │          │
Node C ─── Node D
  │          │
  └── Node E
```

Depending on the blockchain, nodes can:

* Store blockchain data
* Verify transactions
* Relay transactions
* Participate in consensus

### Simple Definition

> Node = a computer connected to and participating in a blockchain network.

---

# 6. What is Consensus?

Imagine there are 1,000 computers maintaining a blockchain.

Khushi says:

> "I have ₹1,000 worth of crypto."

The network needs to determine whether that statement is valid.

How do all these computers agree on what is valid?

That's where **consensus** comes in.

### Simple Definition

> Consensus is the method that allows participants in a blockchain network to agree on the valid state of the blockchain.

Think of it like a group decision:

```text
Transaction arrives
       ↓
Network checks it
       ↓
Participants follow consensus rules
       ↓
Agreement
       ↓
Transaction accepted
```

Different blockchains use different consensus mechanisms.

## Proof of Work

Used by Bitcoin.

Computers called **miners** compete to solve computational puzzles.

## Proof of Stake

Used by Ethereum.

Participants called **validators** help secure the network by staking cryptocurrency.

You don't need to understand the mathematical details yet.

Just remember:

> **Consensus = how the blockchain network agrees on what is valid.**

---

# 7. What is Hashing?

Hashing is **very important in blockchain**.

A **hash is like a digital fingerprint of some data**.

Imagine:

```text
"Hello"
    ↓
HASH FUNCTION
    ↓
2cf24dba...
```

Now change the input:

```text
"Hello!"
    ↓
HASH FUNCTION
    ↓
Different Hash
```

Even a tiny change in the input produces a very different hash.

### Think of it like a fingerprint

```text
DATA
  ↓
HASH
  ↓
DIGITAL FINGERPRINT
```

Blockchain uses hashing for things such as:

* Linking blocks
* Identifying data
* Protecting data integrity
* Supporting consensus mechanisms

For example:

```text
BLOCK 100
Hash = ABC123
     ↓
BLOCK 101
Previous Hash = ABC123
Hash = XYZ789
```

Block 101 remembers the hash of Block 100.

If someone changes Block 100, its hash changes.

Then Block 101's reference no longer matches.

That's one reason blockchain data is difficult to tamper with.

---

# 8. Digital Signatures

Imagine you send a transaction:

```text
Khushi → Rahul
1 ETH
```

How does the blockchain know:

> "This transaction was actually authorized by Khushi?"

That's where a **digital signature** comes in.

A digital signature is a cryptographic way of proving:

> "I authorized this transaction."

Think of it like a digital version of your signature on a cheque.

However, unlike a handwritten signature, it is created using cryptography.

```text
Transaction
     +
Private Key
     ↓
Digital Signature
```

The network can verify the signature **without learning your private key**.

---

# 9. Public Key / Private Key

Blockchain accounts use cryptographic keys.

You generally have two important keys:

## Public Key

The public key can be shared.

Think:

> "Here's my public identity."

```text
PUBLIC KEY
    ↓
Can be shared
```

## Private Key

The private key must be kept secret.

Think:

> "This is my secret signing authority."

```text
PRIVATE KEY
    ↓
KEEP SECRET
```

### Simple Analogy: Mailbox

Think of a mailbox.

Your **public address** is like:

```text
Apartment 204
XYZ Building
```

Anyone can know where to send something.

Your **private key** is like the key that proves you have control over the mailbox.

### Very Important

> Never share your private key or recovery phrase with anyone.

---

# 10. What is a Wallet?

This confuses almost everyone initially.

A crypto wallet doesn't work exactly like a physical wallet.

A wallet primarily helps you **manage your blockchain accounts and keys**.

For example:

```text
Crypto Wallet
      |
      ├── Public information
      |
      └── Private key
```

A wallet allows you to:

* View your assets
* Create transactions
* Sign transactions
* Interact with blockchain applications

Examples include:

* Software wallets
* Hardware wallets

### Important

Your cryptocurrency isn't literally sitting **inside the wallet app**.

The blockchain contains the record of assets and transactions.

The wallet helps you **control the account through its keys**.

---

# 11. What is a Wallet Address?

A wallet address is basically the **destination identifier used to send cryptocurrency**.

For example, an Ethereum address might look like:

```text
0x71C...9A2
```

Instead of saying:

```text
Send 1 ETH to Khushi
```

you send it to a blockchain address:

```text
Send 1 ETH
     ↓
0x71C...9A2
```

### Think of it like an Email Address

Your email:

```text
khushi@example.com
```

Crypto address:

```text
0xABC123...
```

Someone can use your address to send you cryptocurrency.

---

# 12. Cryptocurrency

**Cryptocurrency is a digital asset that operates using cryptographic and blockchain-based systems.**

Examples include:

* Bitcoin (BTC)
* Ether (ETH)
* Solana (SOL)

Think:

```text
Bitcoin
   ↓
Cryptocurrency
```

Ethereum is a:

```text
Blockchain + Ecosystem
       ↓
      ETH
       ↓
Cryptocurrency
```

Cryptocurrencies can be transferred between blockchain addresses.

---

# 13. Gas / Transaction Fees

Blockchain transactions usually aren't completely free.

You often have to pay a **transaction fee**.

On Ethereum, this is commonly associated with **gas**.

Imagine you're sending:

```text
₹1,000 worth of crypto
```

You may also need to pay a network fee.

Why?

Because network participants are doing work to process and secure transactions.

### Think of it like a Delivery Fee

```text
Crypto Transfer
      +
Network Fee
      ↓
Transaction Processed
```

On Ethereum:

> **Gas measures the computational work required for operations, while the actual fee paid depends on gas used and the network's current pricing.**

---

# 14. Blockchain Explorers

This is **very important for blockchain investigations and the SIH problem**.

A **blockchain explorer is like Google for blockchain transactions**.

It allows you to search for things such as:

* Wallet addresses
* Transactions
* Blocks
* Tokens
* Smart contracts

For example, on Ethereum you can use **Etherscan**.

You might search:

```text
0xABC123...
```

And see information such as:

```text
Address

Balance: 2.4 ETH

Transactions:

A → Address
0.5 ETH

Address → B
0.2 ETH

C → Address
1.0 ETH
```

An explorer lets humans look at publicly available blockchain data in a more understandable format.

### Why this matters for SIH

Your system may obtain blockchain transaction information and automatically analyze it instead of an investigator manually looking through thousands of transactions.

---

# 15. On-Chain vs Off-Chain Data

This is another very important concept for blockchain investigations.

## On-Chain Data

**On-chain data = information recorded on the blockchain.**

For example:

```text
Wallet A
   ↓
1 ETH
   ↓
Wallet B
```

This transaction is recorded on the blockchain.

An investigator can potentially retrieve information such as:

* Transaction hash
* Sender address
* Receiver address
* Amount
* Block number
* Timestamp
* Smart contract interactions

That's **on-chain data**.

---

## Off-Chain Data

**Off-chain data = information that exists outside the blockchain.**

For example:

```text
Blockchain
     ↓
0xABC123 sent
1 ETH
to
0xXYZ789
```

The blockchain may tell you that.

But it may NOT tell you:

> "0xABC123 belongs to Khushi Singh."

That information could exist somewhere else.

For example:

```text
Blockchain
     ↓
Wallet Address
     ↓
Exchange Database
     ↓
KYC Information
     ↓
Real Person
```

That exchange/KYC information is **off-chain data**.

---

# 16. Putting Everything Together

Let's imagine you send cryptocurrency to your friend.

## Step 1 — Wallet

You open your wallet.

```text
Your Wallet
     ↓
Your Private Key
```

---

## Step 2 — Transaction

You choose:

```text
Send 1 ETH
to
Rahul's Address
```

---

## Step 3 — Digital Signature

Your wallet uses your private key to create a digital signature proving that you authorized the transaction.

```text
Transaction
     +
Private Key
     ↓
Digital Signature
```

---

## Step 4 — Network

The transaction is broadcast to blockchain nodes.

```text
        Transaction
             ↓
        ┌────┴────┐
        ↓         ↓
      Node A    Node B
        ↓         ↓
      Node C    Node D
```

---

## Step 5 — Verification

The network checks whether the transaction is valid.

For example:

```text
Is the signature valid?
        ↓
Does the sender have enough funds?
        ↓
Does it follow blockchain rules?
```

---

## Step 6 — Consensus

The blockchain's consensus mechanism determines how the transaction becomes part of the accepted blockchain history.

---

## Step 7 — Block

The transaction gets included in a block.

```text
BLOCK #100

Transaction 1
Transaction 2
YOUR TRANSACTION
Transaction 4
```

---

## Step 8 — Blockchain

That block becomes part of the chain.

```text
Block 98
   ↓
Block 99
   ↓
Block 100 ← Your transaction
   ↓
Block 101
```

---

## Step 9 — Explorer

You can search for the transaction using a blockchain explorer.

```text
Transaction Hash
       ↓
    Explorer
       ↓
 ┌─────┼─────────┐
 ↓     ↓         ↓
Sender Receiver Amount
       ↓
    Block
       ↓
  Timestamp
       ↓
      Fee
```

---

# 17. Connecting This to the SIH Problem

This is where all these concepts become useful.

Suppose investigators receive this suspicious wallet:

```text
0xABC123
```

They can use blockchain data to trace the movement of funds:

```text
0xABC123
     ↓
Wallet B
     ↓
Wallet C
     ↓
DeFi Protocol
     ↓
Bridge
     ↓
Another Blockchain
     ↓
Wallet D
```

Your system could represent this as a **graph**:

```text
              Wallet B
                  ↓
Wallet A → Wallet C → DeFi
                  ↓
                Bridge
                  ↓
              Wallet D
```

Your system could potentially identify:

* Repeated transfers
* Suspicious wallet clusters
* Rapid movement of funds
* Interactions with known risky services
* Cross-chain movement
* Mixer interactions
* Unusual transaction patterns

That's why understanding blockchain fundamentals is important **before implementing the SIH solution**.

---

# 18. The Whole Thing in One Picture

Try remembering this:

```text
                         BLOCKCHAIN
                              │
                  ┌───────────┴───────────┐
                  │                       │
                NODES               TRANSACTIONS
                  │                       │
                  │                       ↓
                  │                    BLOCKS
                  │                       │
                  │                       ↓
                  │                     CHAIN
                  │
                  ↓
               CONSENSUS
                  │
                  ↓
          "Is this transaction valid?"
```

Your wallet works with cryptographic keys:

```text
WALLET
  │
  ├── Public Key
  │
  ├── Private Key
  │
  └── Address
         │
         ↓
    Transaction
         │
         ↓
  Digital Signature
         │
         ↓
  Blockchain Network
         │
         ↓
       Block
         │
         ↓
     Blockchain
```

And around all of this:

```text
Hashing     → Protects integrity / links blocks
Gas / Fee   → Cost of processing a transaction
Explorer    → Lets humans inspect blockchain data
On-chain    → Data recorded on the blockchain
Off-chain   → Data stored outside the blockchain
Crypto      → Digital assets using these systems
```

---

# Quick Revision

| Term                  | Remember it as...                                 |
| --------------------- | ------------------------------------------------- |
| **Blockchain**        | Shared digital record book                        |
| **Centralized**       | One authority controls the system                 |
| **Decentralized**     | Many computers participate                        |
| **Block**             | Container holding transactions                    |
| **Transaction**       | Record/instruction of an action                   |
| **Node**              | Computer participating in the network             |
| **Consensus**         | How the network agrees what's valid               |
| **Hash**              | Digital fingerprint of data                       |
| **Digital Signature** | Cryptographic proof that you authorized something |
| **Public Key**        | Information you can share                         |
| **Private Key**       | Secret key that controls your account             |
| **Wallet**            | Tool that manages your keys/accounts              |
| **Wallet Address**    | Destination for receiving crypto                  |
| **Cryptocurrency**    | Digital asset like BTC or ETH                     |
| **Gas / Fee**         | Cost of processing a blockchain transaction       |
| **Explorer**          | Search engine for blockchain data                 |
| **On-chain**          | Data recorded on blockchain                       |
| **Off-chain**         | Data stored outside blockchain                    |

---

