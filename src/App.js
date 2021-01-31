import TripsList from "./components/TripsList";
import TripDetails from "./components/TripDetails";
import { Route, Switch, Link } from "react-router-dom";
import data from "./data";

function App() {
  console.log(Math.max(data.map((trip) => trip.length)));
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Link to={`/trips`}>
            <h1> Hiking Trips </h1>
          </Link>
        </Route>
        <Route path="/trips/:tripSlug">
          <TripDetails trips={data} />
        </Route>
        <Route path="/trips/">
          <h1>Hiking Trips</h1>
          <TripsList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
