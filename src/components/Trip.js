import { ItemWrapper } from "../styles";
import { Link } from "react-router-dom";

function Trip(props) {
  return (
    <ItemWrapper>
      <Link to={`/trips/name/${props.trip.slug}`}>
        <img src={props.trip.image} alt={props.trip.name} />
      </Link>
      <p className="tripname">{props.trip.name}</p>
      <p>
         Trip Length: {' '}
        {props.currentUnit === "KM"
          ? props.trip.length
          : props.trip.length / 1.6}
        {props.currentUnit}
      </p>
    </ItemWrapper>
  );
}

export default Trip;
