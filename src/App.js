import React from "react";

import { ItemContainer } from "components";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import withApp from "withApp";

import styles from "./styles";

const App = ({ tabs }) => {
  const classes = styles();

  return (
    <BrowserRouter>
      <div className={classes.background}>
        <Switch>
          {tabs.map(({ link, data, title }) => (
            <Route exact path={link}>
              <ItemContainer data={data} tabs={tabs} title={title} />
            </Route>
          ))}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default withApp(App);
