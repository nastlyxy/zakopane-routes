# 🏔️ Zakopane Routes

A modern, fully responsive React application designed to help travelers plan their perfect mountain adventures in the Polish Tatras.

## Features

- **Dynamic Routing:** Seamless SPA navigation between the home page, trails list, team members, and detailed route pages.
- **Theme Switcher:** Integrated Dark/Light mode utilizing the React Context API.
- **Favorites System:** Users can easily save and track their preferred mountain trails.
- **Team Finder:** A searchable directory of hiking buddies, featuring dynamic avatar generation (via UI Avatars API).
- **Responsive Design:** A mobile-first, fully adaptive UI built with CSS Grid and Flexbox, ensuring a perfect layout across desktops, tablets, and smartphones.

## Tech Stack

- **Frontend:** React 18 (Vite)
- **Routing:** React Router v6
- **Styling:** Vanilla CSS (BEM-inspired methodology)
- **State Management:** React Hooks (`useState`, `useEffect`, `useContext`)

## 📁 Project Structure

```text
src/
├── components/       # Reusable UI components (Footer, RouteCard,Team)
├── context/          # React Context providers (ThemeContext)
├── data/             # Mock data and API simulations
├── pages/            # Main route components (HomePage, RoutesPage, etc.)
├── assets/           # Static files like images
├── App.jsx           # Main application wrapper and routing logic
└── App.css           # Global and component styles
```
## How to Run Locally
1. **Clone the repository:**
   ```bash
   git clone https://github.com/nastlyxy/zakopane-routes.git
2. **Navigate to the project directory:**
   ```bash
   cd zakopane-routes  
3. **Install dependencies:**
   ```bash
   npm install  
4. **Install dependencies:**
   ```bash
   npm run dev   


## Author

**Anastasiya Haiduk** *Student at Poznań University of Technology* [GitHub Profile](https://github.com/nastlyxy)  