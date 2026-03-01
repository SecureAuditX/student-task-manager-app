# 🎓 Student Task Manager (Mobile App)

![Expo](https://img.shields.io/badge/Expo%20SDK-54.x-000020?logo=expo\&logoColor=white)
![React Native](https://img.shields.io/badge/React%20Native-0.81-blue?logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2023-yellow?logo=javascript)
![Platform](https://img.shields.io/badge/Platform-iOS%20%7C%20Android-lightgrey)
![Status](https://img.shields.io/badge/Status-In%20Development-orange)

> A **React Native + Expo** mobile application for students to manage
> **subjects, tasks, and study schedules** in a clean and structured interface.
>
> 🔒 **Source Code:** Private & secured (backend integration planned)

---

## 📱 Overview

**Student Task Manager** is a cross-platform mobile app designed to help students:

* Organize academic subjects
* Track tasks and priorities
* Plan daily study schedules
* Manage time effectively

The project is currently focused on **frontend architecture, UI/UX, and state management**,
with backend services and deployment planned for later stages.

---

## 🧱 Tech Stack

### Core

* **Expo (SDK 54)** – Development tooling & build system
* **React Native** – Cross-platform mobile UI
* **JavaScript (ES6+)** – Application logic

### Navigation & UI

* **React Navigation** (Native Stack + Bottom Tabs)
* **react-native-safe-area-context** – Notch & safe-area handling
* **@expo/vector-icons** – Icons
* **@react-native-community/datetimepicker** – Date & time selection
* **Modal / FlatList / Pressable** – Core UI components

### State Management

* **React Context API**

  * AuthContext
  * SubjectContext
  * TaskContext
* Centralized state management (no prop drilling)

### Platform Handling

* iOS vs Android picker behavior
* Platform-specific UI adjustments

---

## 🖼 Screenshots

### 🏠 Home / Dashboard

![Dashboard Screenshot](dashboard.png)

---

### ⚙️ User Settings

![Settings Screenshot](settings.png)

---

## 📁 Project Structure

```
App.js
navigation/
  ├─ AuthStack.js
  ├─ AppStack.js	
  ├─ AppTabs.js
context/
  ├─ AuthContext.js
  ├─ SubjectContext.js
  ├─ TaskContext.js
screens/
  ├─ Dashboard/
  ├─ Tasks/
  ├─ Schedule/
  ├─ Settings/
components/
  ├─ TaskCard.js
  ├─ ScheduleItem.js
assets/
  ├─ images/
  ├─ fonts/
```

---

## 🧠 What I Learned

While building this project, I gained hands-on experience with:

* Designing real-world mobile UI flows
* Managing global state using **React Context**
* Structuring a mid-size React Native application
* Handling **date & time pickers** across iOS and Android
* Working with **SafeAreaView** to avoid notch issues
* Building dynamic lists using `FlatList`
* Creating modal-based forms for data input
* Sorting and filtering data by date and time
* Debugging common React Native runtime errors
* Writing scalable frontend code ready for backend integration

---

## 🔐 Code Access & Security

> ⚠️ **Notice**

This repository does **not expose the full source code**.

* Backend services, authentication, and database integration
  will be added later
* To protect the project, the codebase is currently **private**
* This repository serves as a **project overview and portfolio reference**

---

## 🚀 Future Plans

* Backend API (authentication & persistence)
* Cloud database integration
* Push notifications
* Calendar sync
* App Store deployment (iOS & Android)

---

## 📄 License

This project is intended for **personal learning and portfolio use**.
License details will be finalized upon public release.

---

### 🎯 Built to learn real-world mobile app architecture and UI design.
