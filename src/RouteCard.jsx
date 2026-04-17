import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"
import { Link } from "react-router-dom";

export default function RouteCard({name, distance, difficulty, hasCableCar, isFavorite, onToggle, id}){

    const isDarkMode = useContext(ThemeContext);

    return(
        <div className={`route-card-container 
        ${difficulty === "hard" ? "hard" : ""} 
        ${isDarkMode ? "dark" : ""}
        `}>
            <div className="info-container">
                <h2 className="route-name">{name}</h2>
            <p>Distance: {distance} km</p>
            <p>Difficulty of route: {difficulty}</p>
            {hasCableCar && <p className={`has-cable-car-container ${isDarkMode? "dark" : ""}`}>
                Has Cable Car🚠
                </p>}
            {distance > 10 && <p className={`reminder-container ${isDarkMode? "dark" : ""}`}>❗Long route, please take your water💧</p>}
            <Link to={`/routes/${id}`}>Show details</Link>
            </div>
            
            <button className={`button-container 
                ${isFavorite? "inFavorites" : ""}
                ${isDarkMode? "dark" : ""}`} 
                onClick={onToggle}>
                {isFavorite? "Remove from favorites": "Add to favorites"}
            </button>
        </div>
    )
}