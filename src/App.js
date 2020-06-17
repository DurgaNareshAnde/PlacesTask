import React from "react";
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";
import Places from "./Places";
import PlaceDetails from "./PlaceDetails";
import { createBrowserHistory } from "history";
const BrowserHistory = createBrowserHistory({});
class App extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "#e0ebeb", height: "100vh" }}>
        <Router history={BrowserHistory}>
          <Switch>
            <Route path="/" exact component={ClickButton} />
            <Route path="/places" exact component={Places} />
            <Route path="/places/:id" exact component={PlaceDetails} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
function ClickButton() {
  return (
    <Link to="/places">
      <button>View Places</button>
    </Link>
  );
}
