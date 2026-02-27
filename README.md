# Source code: Secure 🔒

﻿# student‑task‑manager

[![Expo](https://img.shields.io/badge/Expo‑SDK‑~54.0.33‑4dc0b5)](https://expo.dev)  
[![React Native](https://img.shields.io/badge/React%20Native‑0.81.5‑61dafb)](https://reactnative.dev)  
[![Node.js](https://img.shields.io/badge/Node.js‑>=18‑339933)](https://nodejs.org/)  
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](#license)

> A lightweight React Native / Expo app for managing subjects, tasks and a simple
> study schedule.  
> **Project Status:** Currently under development 🚧

---

## 🧱 Technologies

* [Expo](https://expo.dev) – app framework & tooling  
* React Native (v0.81.5) – cross‑platform UI  
* React Navigation (native‑stack & bottom‑tabs)  
* `@react-native-community/datetimepicker`  
* `@expo/vector-icons`  
* `react-native-safe-area-context`  
* Context API (AuthContext, SubjectContext, TaskContext) for state  
* Custom fonts loaded with `expo-font`  
* Platform‑specific code (iOS/Android picker, styling)

---

## 🚀 Getting started

1. **Clone the repo**

   ```sh
   git clone https://github.com/your‑username/student-task-manager.git
   cd student-task-manager
   ```

2. **Install dependencies**

   ```sh
   npm install
   # or yarn
   ```

3. **Run the app**

   ```sh
   npm run start     # starts Expo developer tools
   npm run android   # open in Android emulator/device
   npm run ios       # open in iOS simulator/device
   npm run web       # run in the browser
   ```

   Expo handles the native build for you; make sure you have the Expo Go app
   installed on your phone or an emulator running.

---

## 📁 Project structure

```
App.js
navigation/        # React Navigation stacks & tabs
screens/           # screen components (auth, home, …)
context/           # React Context providers
components/        # reusable UI (TaskCard, ProgressBar)
assets/            # images & custom fonts
...
```

The app initially shows a login/signup flow (`AuthStack`).  
Once authenticated, the `RootNavigator` switches to the main `AppStack` which
wraps a bottom‑tab navigator (`AppTabs`).  
Context providers (`AuthContext`, `SubjectContext`, `TaskContext`) manage
state and are mounted in `App.js`.

---

## ✅ What you’ll learn by exploring this repo

* Handling authentication state with React Context  
* Building dynamic lists with `FlatList` and `Modal` screens  
* Creating custom dropdowns, date/time pickers and priority selectors  
* Passing props between navigators and screens  
* Working with Expo fonts & splash screen (`expo-font`, `expo-splash-screen`)  
* Managing platform differences (iOS vs. Android)  
* Organising a mid‑size React Native codebase  
* Simple animations with `Animated`  
* Basic task‑subject relationship and progress calculations

---

## 🛠 Development tips

* Subjects are managed in `context/SubjectContext.js`; tasks in
  `context/TaskContext.js`.
* Add/edit/delete logic lives in the providers – UI just calls the exported
  methods.
* To add a new screen, register it in `navigation/AppStack.js` (or
  `AuthStack.js`) and import it where needed.
* Fonts are declared/loaded in `App.js`; update there if you install more.

---

## 🤝 Contributing

Feel free to open issues or pull requests.  
This repository is under active development; breaking changes may land early.

---

## 📄 License

This project is open‑source and available under the [MIT License](LICENSE).

---

Happy coding! 🎓  

Build something that helps students stay organised.
