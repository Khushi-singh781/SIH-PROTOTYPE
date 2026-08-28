````markdown
# Ethereum / EVM Basics

A beginner-friendly guide to understanding Ethereum and the concepts you need for blockchain investigation and the SIH blockchain tracing problem.

---

# Table of Contents

1. [Ethereum](#1-ethereum)
2. [EVM](#2-evm)
3. [Accounts](#3-accounts)
4. [Externally Owned Accounts (EOA)](#4-externally-owned-accounts-eoa)
5. [Smart Contracts](#5-smart-contracts)
6. [Contract Addresses](#6-contract-addresses)
7. [ERC-20 Tokens](#7-erc-20-tokens)
8. [ETH vs ERC-20](#8-eth-vs-erc-20)
9. [Transaction Hashes](#9-transaction-hashes)
10. [Block Numbers](#10-block-numbers)
11. [Gas](#11-gas)
12. [Events / Logs](#12-events--logs)
13. [Token Transfers](#13-token-transfers)
14. [Putting Everything Together](#14-putting-everything-together)
15. [Quick Revision](#15-quick-revision)

---

# 1. Ethereum

## What is Ethereum?

Ethereum is a **blockchain network** that allows people to:

- Send and receive cryptocurrency
- Create and use smart contracts
- Create tokens
- Build decentralized applications (dApps)
- Perform programmable transactions

The cryptocurrency used by Ethereum is called **ETH (Ether)**.

Think of Ethereum as:

```text
Ethereum
    |
    ├── Blockchain
    |
    ├── ETH
    |
    ├── Smart Contracts
    |
    ├── Tokens
    |
    └── Decentralized Applications
````

Bitcoin mainly focuses on digital money.

Ethereum is more like a **programmable blockchain**.

For example:

```text
Bitcoin
    ↓
Mostly digital money

Ethereum
    ↓
Digital money
    +
Smart contracts
    +
Tokens
    +
Decentralized applications
```

### Simple Definition

> Ethereum = A blockchain platform where cryptocurrency, smart contracts, tokens, and decentralized applications can operate.

---

# 2. EVM

## What is EVM?

EVM stands for:

> **Ethereum Virtual Machine**

It is the environment that executes **smart contracts on Ethereum**.

Think of the EVM as a computer that exists across the Ethereum network.

```text
Smart Contract
      ↓
     EVM
      ↓
Ethereum Blockchain
```

The EVM executes the instructions written inside smart contracts.

For example, imagine a smart contract saying:

```text
IF
Khushi sends 1 ETH

THEN
send a token to Khushi
```

The EVM executes those instructions according to Ethereum's rules.

### Important

The EVM isn't one physical computer sitting somewhere.

It is a **virtual execution environment implemented by Ethereum nodes**.

### Simple Definition

> EVM = The virtual computer that executes Ethereum smart-contract code.

---

# 3. Accounts

Ethereum has accounts.

An account is basically an entity that can:

* Hold ETH
* Send transactions
* Receive ETH
* Interact with smart contracts

There are two main types of Ethereum accounts:

```text
Ethereum Accounts
       |
       ├── Externally Owned Accounts (EOA)
       |
       └── Contract Accounts
```

---

# 4. Externally Owned Accounts (EOA)

EOA stands for:

> **Externally Owned Account**

An EOA is an Ethereum account controlled by a **private key**.

This is generally what people use when they have a crypto wallet.

For example:

```text
User
  ↓
Wallet
  ↓
Private Key
  ↓
EOA
  ↓
Ethereum Network
```

An EOA can:

* Hold ETH
* Receive ETH
* Send ETH
* Hold tokens
* Create transactions
* Interact with smart contracts

An Ethereum address might look like:

```text
0x71C...9A2
```

### Example

Khushi wants to send ETH to Rahul.

```text
Khushi's EOA
      |
      | 1 ETH
      ↓
Rahul's EOA
```

The transaction is authorized using Khushi's private key.

### Simple Definition

> EOA = A normal Ethereum account controlled by a private key.

---

# 5. Smart Contracts

A **smart contract is a program stored on the blockchain**.

It contains rules and instructions that can automatically execute when the required conditions are met.

Think of it like a program:

```text
IF condition is true
       ↓
Execute instruction
```

For example:

```text
IF
User deposits 1 ETH

THEN
Give the user 100 tokens
```

The smart contract can execute this logic automatically.

### Smart Contract Example

```text
User
  ↓
Smart Contract
  ↓
Check condition
  ↓
Execute code
  ↓
Update blockchain state
```

Smart contracts are commonly written using languages such as:

* Solidity
* Vyper

### Important Difference

A smart contract is not a normal server program.

Once deployed to Ethereum, its code and state are maintained through the blockchain network.

### Simple Definition

> Smart contract = A program stored on a blockchain that automatically executes according to predefined rules.

---

# 6. Contract Addresses

Every deployed Ethereum smart contract has an **address**.

For example:

```text
0xABC123...
```

This address identifies the smart contract on the Ethereum blockchain.

You can think of it like the address of a business:

```text
Person
  ↓
Personal Address

Smart Contract
  ↓
Contract Address
```

For example:

```text
User EOA
   ↓
0x123...

Smart Contract
   ↓
0xABC...
```

When you interact with a smart contract, your transaction is sent to its contract address.

### Example

```text
Khushi's EOA
      |
      | Transaction
      ↓
DeFi Smart Contract
      |
      ↓
Contract Address
0xABC123...
```

### Important

A contract address is different from a normal user-controlled EOA.

A contract address represents a **smart contract deployed on the blockchain**.

---

# 7. ERC-20 Tokens

ERC-20 is a **standard for creating fungible tokens on Ethereum**.

Don't worry about the word "fungible".

It basically means:

> Each unit of the token is interchangeable with another unit of the same token.

For example:

```text
1 USDC = another 1 USDC
```

ERC-20 defines common rules that tokens can follow.

Examples of ERC-20-style tokens include:

* USDC
* USDT
* DAI
* LINK

A token is generally implemented through a smart contract.

Think:

```text
ERC-20 Token
      ↓
Smart Contract
      ↓
Ethereum Blockchain
```

The token contract keeps track of balances and provides standard functions for transferring and managing tokens.

---

# 8. ETH vs ERC-20

This is VERY important.

## ETH

ETH is the **native cryptocurrency of Ethereum**.

It is built directly into the Ethereum protocol.

```text
Ethereum
    ↓
   ETH
```

ETH is used for:

* Sending value
* Paying transaction fees
* Paying for gas
* Staking

---

## ERC-20 Token

An ERC-20 token is created through a **smart contract** running on Ethereum.

For example:

```text
Ethereum
    |
    ├── ETH
    |
    └── Token Smart Contract
             |
             └── USDC
```

### Simple Comparison

| ETH                                       | ERC-20 Token                              |
| ----------------------------------------- | ----------------------------------------- |
| Native to Ethereum                        | Created using a smart contract            |
| Part of Ethereum protocol                 | Implemented through a contract            |
| Used to pay gas                           | Normally cannot directly pay Ethereum gas |
| Example: ETH                              | Examples: USDC, USDT, DAI                 |
| Doesn't require a token contract to exist | Controlled by token contract logic        |

### Important

If you have USDC on Ethereum, you still generally need some ETH to pay the Ethereum network fee when making a transaction.

---

# 9. Transaction Hashes

Every Ethereum transaction receives a unique identifier called a:

> **Transaction Hash**

It is often called a:

* Transaction hash
* Tx hash
* TxID

It looks something like:

```text
0x8f3a7c9d...
```

Think of it like a **tracking number** for a transaction.

For example:

```text
Transaction

Khushi
  ↓
1 ETH
  ↓
Rahul

Transaction Hash:
0xABC123...
```

If you have the transaction hash, you can search for it on an Ethereum blockchain explorer.

You can potentially see:

```text
Transaction Hash
Sender
Receiver
Amount
Block
Timestamp
Gas
Status
```

### Why this matters for SIH

A transaction hash gives investigators a way to identify and inspect a particular blockchain transaction.

---

# 10. Block Numbers

Blocks are given numbers.

For example:

```text
Block 100
Block 101
Block 102
Block 103
```

The block number tells you where a block appears in the blockchain's sequence.

For example:

```text
Block #20,000,000
       |
       └── Contains many transactions
```

A transaction is included in a particular block.

So you can have:

```text
Transaction Hash
       ↓
Block Number
       ↓
Block
       ↓
Other Transactions
```

### Why block numbers matter

Investigators can use block numbers to understand:

* When a transaction was included
* What other transactions occurred around the same time
* The sequence of blockchain activity

### Simple Definition

> Block number = The position/height of a block in the blockchain.

---

# 11. Gas

Gas is one of the most confusing Ethereum concepts initially.

Think of gas as the **fuel needed to perform operations on Ethereum**.

For example:

```text
Send ETH
     ↓
Use Ethereum network resources
     ↓
Pay network fee
```

More complicated operations generally require more computational work.

For example:

```text
Simple ETH transfer
      ↓
Less computational work

Complex smart contract interaction
      ↓
More computational work
```

The amount of computational work is measured in **gas**.

The actual transaction fee depends on factors including:

```text
Gas Used
    ×
Gas Price
    =
Transaction Fee
```

The exact fee mechanics have additional details, but this is a useful beginner-level model.

### Simple Analogy

Think of a car:

```text
Car
 ↓
Fuel
```

Ethereum:

```text
Transaction
 ↓
Gas
```

### Important

Gas is not the same thing as ETH.

Gas measures computational work.

ETH is the asset used to pay the network fee.

---

# 12. Events / Logs

This is VERY important when working with Ethereum data.

Smart contracts can produce **events**.

Events are records that smart contracts emit when something happens.

Imagine a smart contract says:

```text
Someone transferred tokens
```

The contract can emit an event such as:

```text
Transfer
From: 0xAAA...
To: 0xBBB...
Amount: 100
```

These events are stored in transaction logs.

Think of events as a **receipt or activity notification generated by a smart contract**.

---

## Example

Suppose Khushi transfers 100 USDC to Rahul.

The transaction interacts with the USDC smart contract.

The contract can emit:

```text
Transfer Event

From:
Khushi's Address

To:
Rahul's Address

Amount:
100 USDC
```

So you might have:

```text
Transaction
     ↓
Token Contract
     ↓
Transfer Event
     ↓
From → To → Amount
```

### Why events matter for blockchain tracing

This is extremely useful for your SIH project.

A transaction might not simply say:

```text
Wallet A → Wallet B
```

Instead, the transaction may interact with a smart contract.

The **events/logs can reveal what happened inside that contract interaction**.

For example:

```text
Wallet A
    ↓
DeFi Contract
    ↓
Swap
    ↓
Token Transfer Event
    ↓
Wallet B
```

Your tracing system can use these logs to understand token movement.

---

# 13. Token Transfers

A **token transfer** means moving tokens from one blockchain address to another.

For example:

```text
Wallet A
   ↓
100 USDC
   ↓
Wallet B
```

But remember:

USDC is an ERC-20 token.

So the transfer is usually handled by the **USDC smart contract**.

Conceptually:

```text
Wallet A
   |
   | "Transfer 100 USDC"
   ↓
USDC Smart Contract
   |
   | Updates token balances
   ↓
Wallet B
```

The blockchain records the interaction with the token contract.

A common ERC-20 event is:

```text
Transfer(
    from,
    to,
    value
)
```

For example:

```text
Transfer(
    0xAAA...,
    0xBBB...,
    100
)
```

This can tell an investigator:

```text
FROM
0xAAA...

TO
0xBBB...

AMOUNT
100 tokens
```

---

# 14. Putting Everything Together

Let's imagine Khushi wants to send 100 USDC to Rahul.

Remember:

**USDC is an ERC-20 token, not ETH.**

---

## Step 1 — Khushi has an EOA

```text
Khushi
  ↓
Wallet
  ↓
EOA
  ↓
0xKHUSHI...
```

---

## Step 2 — USDC exists through a smart contract

```text
USDC
  ↓
ERC-20 Smart Contract
  ↓
0xUSDC...
```

---

## Step 3 — Khushi creates a transaction

She interacts with the USDC contract:

```text
Khushi's EOA
      ↓
USDC Contract
      ↓
"Transfer 100 USDC"
```

---

## Step 4 — Transaction is signed

Her wallet uses her private key:

```text
Transaction
     +
Private Key
     ↓
Digital Signature
```

---

## Step 5 — Transaction is broadcast

```text
Transaction
      ↓
Ethereum Nodes
      ↓
Verification
      ↓
Consensus
```

---

## Step 6 — Transaction is included in a block

```text
Block #20,000,000

Transaction A
Transaction B
USDC Transfer ← Khushi's transaction
Transaction D
```

---

## Step 7 — Smart contract executes

The USDC contract processes the transaction.

Conceptually:

```text
USDC Balance of Khushi
        ↓
      -100
        ↓
USDC Balance of Rahul
        ↓
      +100
```

---

## Step 8 — Contract emits an event

The contract can produce:

```text
Transfer Event

From:
0xKHUSHI...

To:
0xRAHUL...

Amount:
100 USDC
```

---

## Step 9 — Transaction receives a hash

For example:

```text
0xABC123...
```

Now the transaction can be searched on a blockchain explorer.

---

# 15. The Full Ethereum Picture

Try to understand the relationship between everything:

```text
                         ETHEREUM
                            |
              ┌─────────────┴─────────────┐
              |                           |
             EVM                     BLOCKCHAIN
              |                           |
              ↓                           ↓
       Executes Code                  BLOCKS
              |                           |
              ↓                           ↓
       Smart Contracts              Transactions
              |                           |
              ↓                           ↓
       Contract Address             Transaction Hash
              |
              ↓
        ERC-20 Tokens
              |
              ↓
       Token Transfers
              |
              ↓
        Events / Logs
```

Users interact with Ethereum through accounts:

```text
                     ETHEREUM
                         |
              ┌──────────┴──────────┐
              ↓                     ↓
             EOA             Smart Contract
              |                     |
              |                     |
        Controlled by           Has Code
        Private Key                 |
              |                     |
              └─────────┬───────────┘
                        ↓
                   Transactions
                        |
                        ↓
                      Blocks
                        |
                        ↓
                   Blockchain
```

---

# 16. How This Connects to Your SIH Problem

Suppose investigators are given:

```text
Suspicious Address
0xABC123...
```

Your system can potentially investigate:

```text
Address
   ↓
Transactions
   ↓
Transaction Hashes
   ↓
Blocks
   ↓
Contract Interactions
   ↓
Events / Logs
   ↓
Token Transfers
   ↓
Other Wallets
```

For example:

```text
Suspicious Wallet
       |
       ↓
Transaction
       |
       ↓
DeFi Contract
       |
       ↓
Token Transfer
       |
       ↓
Wallet B
       |
       ↓
Wallet C
       |
       ↓
Bridge
       |
       ↓
Another Blockchain
```

This is why these Ethereum concepts are important for your SIH project.

You aren't just looking for:

```text
A → B
```

You may need to understand:

```text
A
 ↓
Transaction
 ↓
Smart Contract
 ↓
Event
 ↓
Token Transfer
 ↓
B
 ↓
Another Transaction
 ↓
C
```

The goal is to turn complicated blockchain activity into an understandable **transaction trail**.

---

# 17. Quick Revision

| Term                 | Remember it as...                                          |
| -------------------- | ---------------------------------------------------------- |
| **Ethereum**         | Programmable blockchain platform                           |
| **EVM**              | Virtual computer that executes Ethereum smart contracts    |
| **Account**          | Entity that can hold assets and interact with Ethereum     |
| **EOA**              | Normal user-controlled account controlled by a private key |
| **Smart Contract**   | Program stored and executed on the blockchain              |
| **Contract Address** | Address identifying a deployed smart contract              |
| **ERC-20**           | Standard for fungible tokens on Ethereum                   |
| **ETH**              | Ethereum's native cryptocurrency                           |
| **ERC-20 Token**     | Token created/managed through a smart contract             |
| **Transaction Hash** | Unique ID/tracking number for a transaction                |
| **Block Number**     | Position/height of a block in the blockchain               |
| **Gas**              | Measure of computational work needed for an operation      |
| **Transaction Fee**  | Amount paid to process a transaction                       |
| **Event/Log**        | Record emitted by a smart contract about an action         |
| **Token Transfer**   | Movement of tokens between blockchain addresses            |

---

# 18. One-Minute Mental Model

If you forget everything else, remember this:

```text
USER
  |
  ↓
WALLET
  |
  ↓
EOA
  |
  | signs transaction
  ↓
TRANSACTION
  |
  ↓
ETHEREUM NETWORK
  |
  ↓
EVM
  |
  ├──────────────→ Simple ETH Transfer
  |
  └──────────────→ Smart Contract
                         |
                         ↓
                    ERC-20 Token
                         |
                         ↓
                   Token Transfer
                         |
                         ↓
                     Event/Log
                         |
                         ↓
                      BLOCK
                         |
                         ↓
                    BLOCKCHAIN
```

And for blockchain investigation:

```text
Suspicious Address
        ↓
Transactions
        ↓
Transaction Hashes
        ↓
Blocks
        ↓
Smart Contracts
        ↓
Events / Logs
        ↓
Token Transfers
        ↓
Other Addresses
        ↓
Transaction Graph
        ↓
Suspicious Patterns
```

This is the foundation you need before moving into **Ethereum APIs, Etherscan, Web3 libraries, transaction graphs, wallet clustering, DeFi, bridges, and automated blockchain tracing**.

```
```
