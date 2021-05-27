import React from "react";
import { Games, Header, Home } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import backgroundGeneral from "./backgroundGeneral.jpg";

const App = () => {
  const pages = [
    { link: "/", component: <Home /> },
    { link: "/games", component: <Games /> },
  ];
  return (
    <Router>
      <Header />
      {pages.map((page) => (
        <Switch key={page.link}>
          <Route exact path={page.link}>
            <div
              style={{
                backgroundImage: `url(${backgroundGeneral})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
              }}
            >
              {page.component}
            </div>
          </Route>
        </Switch>
      ))}
    </Router>
  );
};

export default App;
