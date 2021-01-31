import { ItemWrapper } from "../styles";
import { Link } from "react-router-dom";

function Trip(props) {
  return (
    <ItemWrapper>
      <Link to={`/trips/${props.trip.slug}`}>
        <img src={props.trip.image} alt={props.trip.name} />
      </Link>
      <p>{props.trip.name}</p>
    </ItemWrapper>
  );
}

export default Trip;
