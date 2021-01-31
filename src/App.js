import TripsList from "./components/TripsList";
import TripDetails from "./components/TripDetails";
import { Route, Switch, Link } from "react-router-dom";
import data from "./data";
import { BsImageAlt } from "react-icons/bs";
import { GlobalStyle } from './styles';
function App() {
  return (
    
    <div className="App">
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          <BsImageAlt/> Hiking Trips 
              </a>
      </nav>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Link to={`/trips`}>
          </Link>
        </Route>
        <Route path="/trips/name/:tripSlug">
          <TripDetails trips={data} />
        </Route>
        <Route path="/trips/:tripdiff?">
          <TripsList/>
        </Route>
        </Switch>
      </div>

  );
}

export default App;
