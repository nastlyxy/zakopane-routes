import { useState, useEffect } from "react";
import RouteCard from "../RouteCard";

export default function RoutesPage({favorites, toggleFavorite}){

    const API_ROUTES = [
      { id: 1, name: "Kasprowy Wierch", distance: 12, difficulty: "hard", hasCableCar: true },
      { id: 2, name: "Morskie Oko", distance: 18, difficulty: "medium", hasCableCar: false },
      { id: 3, name: "Gubałówka", distance: 4, difficulty: "easy", hasCableCar: true },
      { id: 4, name: "Dolina Chochołowska", distance: 15, difficulty: "medium", hasCableCar: false }
      ];

    const [routes, setRoutes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
    setTimeout(()=>{
      setRoutes(API_ROUTES);
      setIsLoading(false);
    },2000)
    },[])


    return(
        <div className="routes-page-container">
            <h1>Welcome to Zakopane routes</h1>
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
        </div>
    )
}