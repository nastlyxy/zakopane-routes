import { Link, useParams } from "react-router-dom"
import {API_ROUTES} from "../data";

export default function RouteDetails(){

    const {cardId} = useParams();

    const currentRoute = API_ROUTES.find(route => route.id === parseInt(cardId));
    if (!currentRoute){
        return <p>No information about this route</p>
    }

    return(
        <div className="route-details-container">
            <img alt={currentRoute.name} src={currentRoute.image}/>
            <h2 className="details-title">{currentRoute.name} route details</h2>
            <p className="distance">Distance: {currentRoute.distance} km</p>
            <p className="difficulty">Difficulty: {currentRoute.difficulty}</p>
            <p className="description">{currentRoute.description}</p>
            <Link to={"/routes"}>Return to all routes</Link>

        </div>
    )
}