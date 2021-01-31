import data from "../data";
import Trip from "./Trip";
import ProgressBar from './ProgressBar';
import SearchBar from "./SearchBar";
import { useState } from "react";
import { ListWrapper } from "../styles";

function TripsList() {
    const [query, setQuery] = useState("");
    const [ value, setValue ] = useState(100);
  const trips = data
    .filter((trip) =>
      trip.name.toLocaleLowerCase().includes(query.toLowerCase()) && (trip.length<value)
  )
    .map((trip) => <Trip trip={trip} />);

  return (
    <div>
          <SearchBar setQuery={setQuery} />
          <ProgressBar setValue={setValue} value={value} />
         
      <ListWrapper> {trips} </ListWrapper>
    </div>
  );
}

export default TripsList;
