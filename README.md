# Student-Care-App

## Table of Contents
1. [Introduction](#introduction)
2. [Technologies Used](#technologies-used)
3. [Project Structure](#project-structure)
4. [Components Overview](#components-overview)
   - [BottomTabNavigator](#bottomtabnavigator)
   - [Profile Component](#profile-component)
   - [Courses Component](#courses-component)
   - [Subjects Component](#subjects-component)
   - [Footer Component](#footer-component)
5. [Setup and Installation](#setup-and-installation)
6. [How to Run the Application](#how-to-run-the-application)

---

## Introduction
The **Student Care App** is a React Native application designed for the University of Vauniya. It provides seamless navigation across key features such as user profiles, course information, and subject details. The app includes a tab-based navigation system and a footer component for branding.

---

## Technologies Used
- **React Native**: Frontend framework for mobile app development
- **React Navigation**: Navigation library for routing
- **JavaScript (ES6)**: Programming language
- **Expo CLI**: Development tool for building React Native apps

---

## Project Structure
```
root/
├── components/
|   |──Login.js
│   ├── Profile.js
│   ├── Courses.js
│   ├── Subjects.js
|   |── Logo.js
│   ├── Footer.js
│   ├── BottomTabNavigator.js
├── assets/
|   |── images/
│   ├── icons/
│       ├── profile.png
│       ├── course.png
│       ├── subjects.png
├── App.js
|── data.js
└── README.md
```

---

## Components Overview

### BottomTabNavigator
**File:** `navigation/BottomTabNavigator.js`
- **Purpose:** Provides bottom tab navigation between `Login`, `Profile`, `Courses`, and `Subjects` components.
- **Props:** Passes `user` parameters to child screens.
- **Key Features:**
   - Custom tab bar icons.
   - Focused and unfocused tab styles.

---

### Profile Component
**File:** `components/Profile.js`
- **Purpose:** Displays user profile details.
- **Props:** Accepts `user` as props.
- **Key Features:**
   - User data display.
   - Personalized profile layout.

---

### Courses Component
**File:** `components/Courses.js`
- **Purpose:** Displays course details.
- **Props:** Accepts `user` as props.
- **Key Features:**
   - Course list rendering.
   - Detailed course view.

---

### Subjects Component
**File:** `components/Subjects.js`
- **Purpose:** Displays subject details.
- **Props:** Accepts `user` as props.
- **Key Features:**
   - Subject list rendering.
   - Detailed subject view.

---

### Footer Component
**File:** `components/Footer.js`
- **Purpose:** Displays a footer with branding.
- **Key Features:**
   - University branding.
   - Simple static footer design.

---

## Setup and Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd student-care-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

---

## How to Run the Application
1. Ensure that your development server is running.
2. Use an emulator or physical device with the **Expo Go** app installed.
3. Scan the QR code from the terminal or Expo DevTools.
4. The app should launch successfully.

---

## Output

https://github.com/user-attachments/assets/d985e514-0ad9-4098-a919-579edd280bf7


