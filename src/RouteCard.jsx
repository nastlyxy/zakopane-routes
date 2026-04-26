import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { Link } from "react-router-dom";

export default function RouteCard({
  name,
  distance,
  difficulty,
  hasCableCar,
  isFavorite,
  onToggle,
  id,
  image,
}) {
  const isDarkMode = useContext(ThemeContext);

  return (
    <div
      className={`route-card-container ${difficulty === "hard" ? "hard" : ""} ${isDarkMode ? "dark" : ""}`}
    >
      <div className="card-image-side">
        <img alt={name} src={image} />
        {hasCableCar && <span className="image-badge">🚠</span>}
      </div>

      <div className="card-info-side">
        <div className="card-main-content">
          <h2 className="route-name">{name}</h2>

          <div className="badges-container">
            <span className="badge distance">{distance} km</span>
            <span className={`badge difficulty ${difficulty}`}>
              {difficulty.toUpperCase()}
            </span>
          </div>

          {distance > 10 && (
            <p className="reminder-text">❗ Long route, take water</p>
          )}
        </div>

        <div className="card-footer-actions">
          <Link to={`/routes/${id}`} className="details-link">
            Details →
          </Link>
          <button
            className={`fav-button ${isFavorite ? "inFavorites" : ""} ${isDarkMode ? "dark" : ""}`}
            onClick={onToggle}
          >
            {isFavorite ? "★ Saved" : "☆ Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
