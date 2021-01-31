import data from "../data";
import Trip from "./Trip";
import ProgressBar from "./ProgressBar";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { ListWrapper } from "../styles";
import DropDown from "./DropDown";

function TripsList() {
  const [query, setQuery] = useState("");
  const [value, setValue] = useState(100);
  const [difficulty, setDifficulty] = useState(null);
  const [currentUnit, setCurrentUnit] = useState("KM");
  const trips = data
    .filter(
      (trip) =>
        trip.name.toLocaleLowerCase().includes(query.toLowerCase()) &&
        trip.length < value &&
        (difficulty ? trip.difficulty === difficulty : true)
    )
    .map((trip) => <Trip trip={trip} currentUnit={currentUnit} />);
  const toggleUnit = () => {
    setCurrentUnit(currentUnit === "KM" ? "miles" : "KM");
  };
  return (
    <div>
      <button onClick={toggleUnit}> Change Unit </button>
      <SearchBar setQuery={setQuery} />
      <ProgressBar setValue={setValue} value={value} />
      <DropDown setDifficulty={setDifficulty} difficulty={difficulty} />
      <ListWrapper> {trips} </ListWrapper>
    </div>
  );
}

export default TripsList;
