<h1 align="center">🔥 Angular Firebase Auth Material</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Angular-16-DD0031?logo=angular&logoColor=white" alt="Angular" />
  <img src="https://img.shields.io/badge/Firebase-Authentication-FFCA28?logo=firebase&logoColor=black" alt="Firebase" />
  <img src="https://img.shields.io/badge/Angular_Material-UI-757575?logo=angular&logoColor=white" alt="Angular Material" />
  <img src="https://img.shields.io/badge/Status-Completed-brightgreen" alt="Completed" />
</p>

<p align="center">
  <a href="https://github.com/alobuuls/angular-firebase-auth-material" target="_blank"><img src="https://img.shields.io/badge/GitHub-Repository-181717?logo=github&logoColor=white" alt="Repository" /></a>
  <a href="https://github.com/alobuuls/angular-firebase-auth-material/stargazers" target="_blank"><img src="https://img.shields.io/github/stars/alobuuls/angular-firebase-auth-material?style=social" alt="GitHub Stars" /></a>
  <a href="https://github.com/alobuuls/angular-firebase-auth-material/commits/main" target="_blank"><img src="https://img.shields.io/github/last-commit/alobuuls/angular-firebase-auth-material" alt="Last Commit" /></a>
</p>

---

## 📑 Table of Contents

* [🔥 Angular Firebase Auth Material](#-angular-firebase-auth-material)

  * [🌐 Live Demo](#-live-demo)
  * [📖 Description](#-description)
  * [⚙️ System Requirements](#️-system-requirements)
  * [🚀 Project Installation](#-project-installation)
  * [🔥 Firebase Configuration](#-firebase-configuration)
  * [▶️ Run the Project](#️-run-the-project)
  * [🧠 Project Architecture](#-project-architecture)
  * [✨ Features](#-features)
  * [🛠 Technologies Used](#-technologies-used)
  * [📁 Project Structure](#-project-structure)
  * [🔥 Best Practices Implemented](#-best-practices-implemented)
  * [🎯 Project Goal](#-project-goal)
  * [📄 License](#-license)

---

## 🌐 Live Demo

🔗 https://alobuuls.github.io/angular-firebase-auth-material/

---

## 📖 Description

> [!NOTE]
> An Angular 16 application that implements a complete authentication system using Firebase Authentication, Angular Material, Route Guards, and Standalone Components.

The project demonstrates authentication with email and password, social login providers, protected routes, reactive forms, authentication state management, and modern Angular architecture practices.

---

## ⚙️ System Requirements

Before running the project, make sure you have installed:

- 📦 **Node.js:** `v16.14.x – v18.x` *(recommended: v18.10.0 LTS)*
- 📦 **npm:** `v8+`
- 🅰️ **Angular CLI:** `v16.x`
- 🔥 **Firebase Project**

## Recommended using nvm

```bash
nvm install 18
nvm use 18
```

---

## 🔍 Verify Installed Versions

Run the following commands in your terminal:

```bash
node -v
npm -v
ng version
```

---

## 🚀 Project Installation

### 1️⃣ Clone the repository

```bash
git clone git@github.com:alobuuls/angular-firebase-auth-material.git

cd angular-firebase-auth-material
```

### 2️⃣ Install dependencies

```bash
npm install
```

---

## 🔥 Firebase Configuration

Create a Firebase project and replace the configuration inside:

```ts
src/environments/environment.ts
```

```ts
export const environment = {
  firebase: {
    apiKey: '',
    authDomain: '',
    projectId: '',
    appId: '',
  },
};
```

Enable the following providers:

* Email / Password Authentication
* Google Authentication Provider
* GitHub Authentication Provider

From:

```text
Firebase Console
→ Authentication
→ Sign-in method
```

---

## ▶️ Run the Project

Start the development server:

```bash
ng serve
```

Then open:

```text
http://localhost:4200
```

---

## 🧠 Project Architecture

The application follows a scalable architecture based on Standalone Components, Route Guards, and centralized authentication services.

### 🔥 Auth Service

Responsible for:

* User registration
* User login
* Social authentication
* Authentication state management
* Logout functionality

### 🛡️ Auth Guard

Responsible for:

* Route protection
* Access control
* Authentication validation
* Navigation restrictions

### 📄 Authentication Pages

Responsible for:

* Login form
* Registration form
* User interaction
* Authentication workflows

### 🎨 Shared Components

Responsible for:

* Social login buttons
* UI consistency
* Reusable authentication actions

### 🏠 Home Page

Responsible for:

* Protected content
* Authenticated user access
* Logout actions

---

## ✨ Features

* 🔑 Email & Password Authentication
* 📝 User Registration
* 🔥 Firebase Authentication Integration
* 🌐 Google Sign-In
* 🐙 GitHub Sign-In
* 🛡️ Route Protection with Guards
* 🚪 Logout Functionality
* 🎨 Angular Material UI
* 📋 Reactive Forms
* 👤 Authentication State Management
* ⚡ Standalone Components
* 🚀 Modern Angular Architecture

---

## 🛠 Technologies Used

| Technology | Purpose |
|------------|---------|
| Angular 16 | Front-End Framework |
| TypeScript | Application Logic |
| Firebase Authentication | User Authentication |
| Angular Material | UI Components |
| Reactive Forms | Form Management |
| RxJS | Reactive Programming |
| Route Guards | Route Protection |
| Standalone Components | Modular Architecture |

---

## 📁 Project Structure

```text
angular-firebase-auth-material/

├── src/
│
├── app/
│   ├── core/
│   │   ├── guards/
│   │   │   ├── auth.guard.ts
│   │   │   └── index.ts
│   │   │
│   │   └── services/
│   │       └── auth.service.ts
│   │
│   ├── pages/
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   └── components/
│   │   │       └── button-providers/
│   │   │
│   │   └── home/
│   │
│   ├── firebase.config.ts
│   ├── app-routing.ts
│   └── app.config.ts
│
├── environments/
│   └── environment.ts
│
├── angular.json
├── firebase.json
├── package.json
└── README.md
```

---

## 🔥 Best Practices Implemented

* Standalone Components
* Reactive Forms
* Route Guards
* Service-based Architecture
* Separation of Concerns
* Dependency Injection
* Authentication State Management
* Firebase SDK Integration
* Reusable Components
* Strong Typing with TypeScript
* Modular Project Organization
* Scalable Angular Structure

---

## 🎯 Project Goal

Practice and strengthen modern Angular authentication concepts through the implementation of a real-world authentication system:

* Firebase Authentication
* Route Guards
* Reactive Forms
* Social Login Providers
* Authentication State
* Angular Material
* Dependency Injection
* Standalone Components
* TypeScript Best Practices
* Front-End Architecture

---

## 📄 License

This project is intended for educational and portfolio purposes.

Created by **Alondra Francisco**.