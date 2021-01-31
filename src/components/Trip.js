import { ItemWrapper } from "../styles";
function Trip(props) {
  return (
    <ItemWrapper>
      <img src={props.trip.image} alt="trip image" />
      <p>{props.trip.name}</p>
    </ItemWrapper>
  );
}

export default Trip;
