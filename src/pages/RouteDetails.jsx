import { Link, useParams } from "react-router-dom";
import { API_ROUTES } from "../data";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export default function RouteDetails() {
  const { cardId } = useParams();
  const isDarkMode = useContext(ThemeContext);

  const route = API_ROUTES.find((route) => route.id === parseInt(cardId));
  if (!route) {
    return (
      <div className={`route-details-page ${isDarkMode ? "dark" : ""}`}>
        <h2>Route not found 🏔️</h2>
        <Link to="/routes" className="back-button">
          ← Back to Trails
        </Link>
      </div>
    );
  }

  return (
    <div className={`route-details-page ${isDarkMode ? "dark" : ""}`}>
      <div className="details-header">
        <Link to="/routes" className="back-button">
          ← Back to Trails
        </Link>
      </div>
      <div className={`details-card ${isDarkMode ? "dark" : ""}`}>
        <img
          src={route.image}
          alt={route.name}
          className="details-hero-image"
        />

        <div className="details-body">
          <h1>{route.name}</h1>
          <div className="badges-container">
            <span className="badge distance">{route.distance} km</span>
            <span className={`badge difficulty ${route.difficulty}`}>
              {route.difficulty.toUpperCase()}
            </span>
            {route.hasCableCar && (
              <span className="badge cable-car">🚠 Cable Car</span>
            )}
          </div>
          <div className="description-section">
            <h3>About the trail</h3>
            <p>{route.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
