import './App.css'
import RouteCard from './RouteCard';
import Team from './Team';
import { ThemeContext } from './ThemeContext';

import { useState, useEffect} from 'react';
const API_ROUTES = [
  { id: 1, name: "Kasprowy Wierch", distance: 12, difficulty: "hard", hasCableCar: true },
  { id: 2, name: "Morskie Oko", distance: 18, difficulty: "medium", hasCableCar: false },
  { id: 3, name: "Gubałówka", distance: 4, difficulty: "easy", hasCableCar: true },
  { id: 4, name: "Dolina Chochołowska", distance: 15, difficulty: "medium", hasCableCar: false }
  ];

function App() {
  const [routes, setRoutes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setRoutes(API_ROUTES);
      setIsLoading(false);
    },2000)
  },[])

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
      <button className={`mode-button ${isDarkMode? "dark" : "light"}`} onClick={()=>setIsDarkMode(!isDarkMode)}>
        {isDarkMode? "switch to light theme": "switch to dark theme"}
      </button>
      <h3>In favorites: {favorites.length}</h3>
      <div className="routeCards-container">
        {isLoading? <p className="loading-container">Looking for the best routes in the mountains... 🏔️</p> : routes.map((route)=>(
        <RouteCard 
        key={route.id} 
        {...route} 
        isFavorite={favorites.includes(route.id)} 
        onToggle={()=> toggleFavorite(route.id)}
        />
      ))}
      </div>

      <Team/>
      
    </div>
    </ThemeContext.Provider>
    
  )
}

export default App
