# Bynry Case Study

A responsive profile management application built with React and Vite.

# 🌐 Live Demo:- [MapLinkProfiles](https://maplinkprofiles.netlify.app/)

# 📹 Video Demo:- [Watch the video](https://www.youtube.com/watch?v=MzmUsGqmy0M)


This project is a profile management application built with **React** and **Vite**, featuring a responsive design using **Tailwind CSS** and navigation via **React Router**. It allows users to **view, add, edit, and delete profiles**, with state management handled by **React Context API**.

---

## 🚀 Features

- ✅ View a list of profiles with search functionality  
- ➕ Add, ✏️ Edit, 🗑️ Delete profiles with detailed fields (name, email, image, etc.)  
- 📱 Responsive design for mobile, tablet, and desktop  
- 🗺️ Optional location mapping with Google Maps (requires API key)  

---

## 🛠️ Tech Stack

- **Frontend**: React  
- **Build Tool**: Vite with HMR (Hot Module Replacement)  
- **Styling**: Tailwind CSS  
- **Routing**: React Router  
- **State Management**: React Context API  

---

## 🧰 Getting Started

### ✅ Prerequisites

- Node.js (v16 or later)  
- npm (v7 or later)  

---

### 📦 Installation

#### Clone the repository:
```bash
git clone https://github.com/Amanc77/bynry-CaseStudy.git
cd bynry-CaseStudy
```

#### Install dependencies:
```bash
npm install
```

#### Start the development server:
```bash
npm run dev
```

Visit: http://localhost:5173

---

## 📚 Dependencies

These are already included in package.json, but you can install them individually if needed.

### React and React DOM:
```bash
npm install react react-dom
```

### Vite (Build tool with HMR):
```bash
npm install vite --save-dev
```

### Vite Plugin for React:
```bash
npm install @vitejs/plugin-react --save-dev
```

### React Router DOM:
```bash
npm install react-router-dom
```

### Tailwind CSS (Utility-first CSS framework):
```bash
npm install tailwindcss postcss autoprefixer --save-dev
```

#### Initialize Tailwind CSS:
```bash
npx tailwindcss init -p
```

### ESLint (Linting and Code Quality):
```bash
npm install eslint --save-dev
```

#### Initialize ESLint:
```bash
npx eslint --init
```

---

## 🌍 Optional: Google Maps

If using the GoogleMap.jsx component for location mapping:
```bash
npm install @googlemaps/js-api-loader
```

> Note: You'll need a **Google Maps API key**. Add it to your environment variables or directly in GoogleMap.jsx.

---

## 📜 Available Scripts

```bash
npm run dev      # Starts the development server with HMR
npm run build    # Builds the app for production
npm run lint     # Runs ESLint for code quality checks
npm run preview  # Previews the production build locally
```

---

## 📂 Project Structure

```bash
src/
├── assets/            # Static assets like images
├── components/        # Reusable components (ProfileCard.jsx, ProfileList.jsx, etc.)
├── context/           # React Context for state (ProfileContext.jsx)
├── pages/             # Page components (AddProfile.jsx, ProfileDetails.jsx, etc.)
├── App.jsx            # Main app component
├── main.jsx           # Entry point
```

---

## 👤 Contact

**Author**: Aman ([@Amanc77](https://github.com/Amanc77))  
📧 **Email**: amankrc7@gmail.com  
🌐 **Portfolio**: https://amanc77.github.io/Amanc7/  
