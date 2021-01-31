import { DetailWrapper } from "../styles";
import { useParams } from "react-router-dom";
import Trip from './Trip';
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
        currentTrip.difficulty === trip.difficulty && currentTrip.name !== trip.name
    )
    .map((trip) => <Trip trip={trip} />);
  return (
    <>
    <DetailWrapper>
      <h2>{trip.name}</h2>
      <img src={trip.image} alt={trip.name} />
      <ul>
        <li> City: {trip.city} </li>
        <span className="fa fa-star checked"></span>
        <li> Difficulty: {trip.difficulty} </li>
        <li> Length: {trip.length} km </li>
        <li> Rating: {stars(trip)} </li>
      </ul>
      </DetailWrapper>
      <ListWrapper>
      <h2>Recommended Trips:</h2>
        {recommendtrips}
      </ListWrapper>
 
      </>
  );
};

export default TripDetails;
