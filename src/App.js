import TripsList from "./components/TripsList";
import TripDetails from "./components/TripDetails";
import { Route, Switch } from "react-router-dom";
import data from "./data";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <h1>Hiking Trips</h1>
          <TripsList />
        </Route>
        <Route path="/trips/:tripSlug">
          <TripDetails trips={data} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
