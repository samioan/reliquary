import React from "react";
import { Home } from "./routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import backgroundGeneral from "./backgroundGeneral.jpg";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <div
          style={{
            backgroundImage: `url(${backgroundGeneral})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
          }}
        >
          <Home />
        </div>
      </Route>
    </Switch>
  </Router>
);

export default App;
