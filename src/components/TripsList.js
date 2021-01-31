import data from "../data";
import Trip from "./Trip";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { ListWrapper } from "../styles";

function TripsList() {
  const [query, setQuery] = useState("");
  const trips = data
    .filter((trip) =>
      trip.name.toLocaleLowerCase().includes(query.toLowerCase())
    )
    .map((trip) => <Trip trip={trip} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper> {trips} </ListWrapper>
    </div>
  );
}

export default TripsList;
