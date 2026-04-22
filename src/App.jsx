import './App.css'

import { ThemeContext } from './ThemeContext';
import { Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';

import HomePage from './pages/HomePage';
import RoutesPage from './pages/RoutesPage';
import TeamPage from './pages/TeamPage';
import RouteDetails from './pages/RouteDetails';
import Footer from './Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) =>{
    if (favorites.includes(id)){
      setFavorites(favorites.filter(favId => favId !== id));
    } else{
      setFavorites([...favorites,id])
    }
  }

  return (
    <ThemeContext.Provider value={isDarkMode}>
      <div className={`app-container ${isDarkMode? "dark": ""}`}>
      
      
      <nav className="navigation-menu">
        <Link className={`link ${isDarkMode? "dark" : ""}`} to={"/"}>Home</Link>
        <Link className={`link ${isDarkMode? "dark" : ""}`} to={"/routes"}>Trails</Link>
        <Link className={`link ${isDarkMode? "dark" : ""}`} to={"/team"}>Find Members</Link>
        <button 
        className={`mode-button ${isDarkMode? "dark" : "light"}`} 
        onClick={()=>setIsDarkMode(!isDarkMode)}>
        {isDarkMode? "switch to light theme": "switch to dark theme"}
      </button>
      </nav>

      <div className="content">
        <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/routes" element={<RoutesPage favorites={favorites} toggleFavorite={toggleFavorite}/>}/>
        <Route path="/team" element={<TeamPage/>}/>
        <Route path="/routes/:cardId" element={<RouteDetails/>}></Route>
      </Routes>
      </div>

      <h3>In favorites: {favorites.length}</h3>
      
      <Footer/>

      
      
    </div>
    </ThemeContext.Provider>
    
  )
}

export default App
