import TripsList from "./components/TripsList";
import TripDetails from "./components/TripDetails";
import { Route, Switch } from "react-router-dom";
import data from "./data";

function App() {
  return (
    <div className="App">
      <Switch>
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
