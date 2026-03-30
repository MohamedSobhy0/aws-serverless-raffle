# 🎯 AWS Serverless Raffle Application

## 📌 Project Overview

This project is a **Serverless Raffle Application** built using AWS services. It allows users to register for a raffle and randomly selects winners.

The application demonstrates how to build a full backend without managing servers using AWS Lambda, API Gateway, and DynamoDB.

---

## 🏗️ Architecture

Frontend (HTML/JS) → API Gateway → Lambda → DynamoDB

---

## 🧩 Components

### 🌐 Frontend

* apply.html → User submits name, email, and phone
* draw.html → Displays total participants and winners
* Built using Bootstrap + Vanilla JavaScript

### ⚡ Backend (AWS Lambda)

* apply.js

  * Receives user data
  * Validates inputs
  * Stores data in DynamoDB

* count.js

  * Returns total number of participants

* draw.js

  * Selects random winners
  * Updates winner status in DynamoDB

### 🗄️ Database (DynamoDB)

* Table Name: devops_raffle
* Attributes:

  * email (Primary Key)
  * name
  * phone
  * won (yes/no)

### 📡 API Gateway

Endpoints:

* POST /apply
* GET /count
* GET /draw

---

## 🚀 How to Run

1. Deploy Lambda functions
2. Create DynamoDB table
3. Configure API Gateway endpoints
4. Update API URLs in frontend files
5. Open apply.html and draw.html in browser

---

## 📂 Project Structure

frontend/
apply.html
draw.html

lambda/
apply.js
count.js
draw.js

---

## 🔥 Features

* Serverless architecture
* No infrastructure management
* Scalable and event-driven
* Real-time raffle system

---

## 🧠 What I Learned

* AWS Lambda (Node.js)
* API Gateway integration
* DynamoDB operations
* Frontend & backend integration
* Serverless architecture design



## 👨‍💻 mohamed Sobhy
