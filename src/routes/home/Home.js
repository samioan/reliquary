import React, { useEffect, useState } from "react";

import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

import Typography from "@material-ui/core/Typography";

import Games from "routes/games";

import styles from "./styles";

const Home = () => {
  const classes = styles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.page}>
      <Typography className={classes.title} variant="h3" align="center">
        The Reliquary
      </Typography>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Games" />
        <Tab label="Music" />
        <Tab label="Art" />
      </Tabs>
      <Games value={value} index={0} />
    </div>
  );
};

export { Home };
export default Home;
