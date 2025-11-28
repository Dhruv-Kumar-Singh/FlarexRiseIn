# 🏋️‍♂️ FitnessScore Smart Contract

## Contract Address
**0xece9ea4A034CbE35F3611Def0e0479C2f5FcB9F2**  
https://coston2-explorer.flare.network/address/0xece9ea4A034CbE35F3611Def0e0479C2f5FcB9F2
<img width="1894" height="671" alt="image" src="https://github.com/user-attachments/assets/796bf0a4-f922-43b0-9527-48aecee9a08b" />


---

## 📘 Project Description
FitnessScore is a minimal, beginner-friendly smart contract deployed on the Flare Coston2 Testnet.  
Its purpose is simple: allow a user to store a personal fitness score on-chain and update it anytime.

This project serves as an excellent introduction to:
- Reading/writing blockchain state  
- Using wagmi/viem to interact with contracts  
- Building UI components that respond to contract state  
- Understanding on-chain app architecture  

---

## 🎯 What the Project Does
- Stores a **public fitness score** for the connected wallet.  
- Allows the user to **update their score** via the `setScore` function.  
- Reads the current score using `myScore`.  
- Displays real-time transaction status (pending, confirming, confirmed).  
- Provides a simple UI allowing the user to interact effortlessly.

---

## ⭐ Features
### 🔹 Simple Smart Contract
- Only one variable: `myScore`
- Only one function: `setScore(uint256)`
- No constructor parameters
- Easy to deploy and understand

### 🔹 Full Frontend Integration
- Connect wallet state detection  
- Wallet-gated UI  
- Error handling and validation  
- Transaction status feedback  

### 🔹 Hooks-Based Contract Interaction
- Read fitness score using `useReadContract`
- Write new scores using `useWriteContract`
- Automatic UI refresh on confirmation  

---

## 💡 How It Solves the Problem
Tracking fitness progress is normally centralized—stored in apps, devices, or servers.  
This project decentralizes that idea by storing progress **directly on the blockchain**, offering:

### ✔ Transparency  
Scores are fully visible and verifiable.

### ✔ Ownership  
Only the user can update their own score—no central authority.

### ✔ Persistence  
Data stored on-chain is permanent and censorship-resistant.

### **Use Cases**
- Personal fitness tracking  
- Web3 fitness apps  
- Progress logging in decentralized communities  
- On-chain health achievements  
- Demonstrating blockchain state updates for education  

This project acts as a foundational template for bigger Web3 fitness or reputation systems.

---


