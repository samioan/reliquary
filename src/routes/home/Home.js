import React, { useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";

import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import VideocamIcon from "@material-ui/icons/Videocam";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";

import gameData from "data/gameData";
import { ItemContainer } from "components";

import styles from "./styles";

const Home = () => {
  const classes = styles();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = useState(null);

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
        <Tooltip
          arrow
          placement="top"
          title="Games"
          classes={{ tooltip: classes.tooltip }}
        >
          <Tab icon={<SportsEsportsIcon />} />
        </Tooltip>
        <Tooltip
          arrow
          placement="top"
          title="Music"
          classes={{ tooltip: classes.tooltip }}
        >
          <Tab icon={<MusicNoteIcon />} />
        </Tooltip>
        <Tooltip
          arrow
          placement="top"
          title="Videos"
          classes={{ tooltip: classes.tooltip }}
        >
          <Tab icon={<VideocamIcon />} />
        </Tooltip>
        <Tooltip
          arrow
          placement="top"
          title="Books"
          classes={{ tooltip: classes.tooltip }}
        >
          <Tab icon={<LibraryBooksIcon />} />
        </Tooltip>
      </Tabs>
      <Scrollbars style={{ width: "100%", height: "calc(100vh - 152px)" }}>
        <ItemContainer
          value={value}
          index={0}
          data={gameData}
          toggleOpen={setOpen}
          open={open}
        />
      </Scrollbars>
    </div>
  );
};

export { Home };
export default Home;
