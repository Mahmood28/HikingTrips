import data from "../data";
import Trip from "./Trip";
import ProgressBar from "./ProgressBar";
import SearchBar from "./SearchBar";
import { useState } from "react";
import DropDown from "./DropDown";
import { useParams } from "react-router-dom";
import { ChangeUnit, Difficulty, ListWrapper } from "../styles";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const TripsList = () => {
  const max = Math.max(...data.map((trip) => trip.length));
  const { tripdiff } = useParams();
  const [query, setQuery] = useState("");
  const [value, setValue] = useState(max);
  const [currentUnit, setCurrentUnit] = useState("KM");

  const trips = data
    .filter(
      (trip) =>
        trip.name.toLocaleLowerCase().includes(query.toLowerCase()) &&
        (currentUnit === "KM" ? trip.length : trip.length / 1.6) <= value &&
        (tripdiff ? trip.difficulty === tripdiff : true)
    )
    .map((trip) => <Trip trip={trip} currentUnit={currentUnit} />);

  const toggleUnit = () => {
    setCurrentUnit(currentUnit === "KM" ? "miles" : "KM");
    if (currentUnit === "KM") setValue(value / 1.6);
    else setValue(value * 1.6);
  };
  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <Container fluid>
        <Row>
          <Col md={3}>
            {" "}
            <ChangeUnit>
              <h2>Filter List:</h2>
              <br></br>
              <ProgressBar
                setValue={setValue}
                value={value}
                currentUnit={currentUnit}
                max={max}
              />
              <button
                type="button"
                className="btn btn-primary"
                onClick={toggleUnit}
              >
                Change Unit
              </button>
            </ChangeUnit>
            <Difficulty>
              <DropDown />
            </Difficulty>{" "}
          </Col>
          <Col md={9}>
            <ListWrapper> {trips} </ListWrapper>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TripsList;
