import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import Home from "./containers/home";
import Users from "./containers/main";

class App extends React.Component {

    render()  {
      return (
          <Router>
            <div>
              <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/main">Users</Link></li>
              </ul>
              <hr/>
              <Route exact path="/" component={Home}/>
              <Route path="/main" component={Users}/>
            </div>
          </Router>
      )
    }
}
export default App;
