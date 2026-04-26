import { useState, useEffect } from "react";
import RouteCard from "../RouteCard";
import { API_ROUTES } from "../data.js";

export default function RoutesPage({ favorites, toggleFavorite }) {
  const [routes, setRoutes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setRoutes(API_ROUTES);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="routes-page-container">
      <h1>Welcome to Zakopane routes</h1>
      <div className="routeCards-container">
        {isLoading ? (
          <p className="loading-container">
            Looking for the best routes in the mountains... 🏔️
          </p>
        ) : (
          routes.map((route) => (
            <RouteCard
              key={route.id}
              {...route}
              isFavorite={favorites.includes(route.id)}
              onToggle={() => toggleFavorite(route.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}
