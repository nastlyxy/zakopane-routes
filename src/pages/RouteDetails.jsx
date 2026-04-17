import { Link, useParams } from "react-router-dom"

export default function RouteDetails(){

    const {cardId} = useParams();

    return(
        <div className="route-details-container">
            <h2 className="details-title">This is route {cardId} details</h2>
            <Link to={"/routes"}>Return to all routes</Link>

        </div>
    )
}