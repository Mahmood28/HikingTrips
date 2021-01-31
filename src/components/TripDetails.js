import { DetailWrapper } from "../styles";
import { useParams } from "react-router-dom";
import Trip from "./Trip";
import { ListWrapper } from "../styles";
const TripDetails = (props) => {
  const trips = props.trips;
  const { tripSlug } = useParams();
  let ratings = [];
  const stars = (trip) => {
    for (let i = 0; i < trip.rating; i++) {
      ratings.push("⭐");
    }
    // for (let i = 0; i < 5 - trip.rating; i++) {}
    return ratings;
  };
  const trip = trips.find((trip) => trip.slug === tripSlug);

  const recommendtrips = trips
    .filter(
      (currentTrip) =>
        currentTrip.difficulty === trip.difficulty &&
        currentTrip.name !== trip.name
    )
    .map((trip) => <Trip trip={trip} currentUnit="KM" />);
  return (
    <div className="container">
      <DetailWrapper>
        <div className="row">
          <h2>{trip.name}</h2>
        </div>
        <div className="row">
          <img src={trip.image} alt={trip.name} />
          <ul>
            <li> City: {trip.city} </li>
            <span className="fa fa-star checked"></span>
            <li> Difficulty: {trip.difficulty} </li>
            <li> Length: {trip.length} KM </li>
            <li> Rating: {stars(trip)} </li>
          </ul>
        </div>
      </DetailWrapper>
      <div className="row">
        <p>Recommended Trips:</p>
        <div className="row">
          <ListWrapper>{recommendtrips}</ListWrapper>
        </div>
      </div>
    </div>
  );
};

export default TripDetails;
