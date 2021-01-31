import data from '../data';
import Trip from './Trip';
function TripsList() {
    const trips=data.map((trip)=> <Trip trip={trip}/>)
    return (
       <div>
            { trips}
        </div>
  );
}

export default TripsList;