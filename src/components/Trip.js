
function Trip(props) {
  
    return (
        <div>
        <img src={props.trip.image} alt="trip image" />
            <p>{props.trip.name}</p>
         </div>
    );
}

export default Trip;