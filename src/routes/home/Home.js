import React from "react";
import { Scrollbars } from "react-custom-scrollbars-2";

import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";

import { ItemContainer } from "components";
import { gameData, musicData, videoData, bookData } from "data";

import withHomeProps from "./withHomeProps";

const Home = ({ classes, value, handleChange, tabs }) => {
  return (
    <div className={classes.page}>
      <Typography className={classes.title} variant="h3" align="center">
        The Reliquary
      </Typography>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        className={classes.tabs}
      >
        {tabs.map(({ title, icon }) => (
          <Tooltip
            key={title}
            arrow
            placement="top"
            title={title}
            classes={{ tooltip: classes.tooltip }}
            TransitionComponent={({ children }) => children}
          >
            <Tab icon={icon} />
          </Tooltip>
        ))}
      </Tabs>
      <Scrollbars autoHeight autoHeightMin="calc(100vh - 152px)">
        <ItemContainer value={value} index={0} data={gameData} />
        <ItemContainer value={value} index={1} data={musicData} />
        <ItemContainer value={value} index={2} data={videoData} />
        <ItemContainer value={value} index={3} data={bookData} />
      </Scrollbars>
    </div>
  );
};

export { Home };
export default withHomeProps(Home);
