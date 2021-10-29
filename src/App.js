import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import PlayerDashboard from "./PlayerDashboard";
import CovidDashboard from "./CovidDashboard";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/covid">Covid</Link>
            </li>
            <li>
              <Link to="/player">Player Dashboard</Link>
            </li>
          </ul>
        </nav>

       
       
      </div>
      <Switch>
          <Route path="/covid" component={CovidDashboard} />
          <Route path="/player" component={PlayerDashboard} />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
    </Router>
    )
}

function NoMatch() {
    let location = useLocation();
  
    return (
      <div>
        <h3>
          No match for <code>{location.pathname}</code>
        </h3>
      </div>
    );
  }

export default App