import React, { useState } from "react";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
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
        <Tab icon={<SportsEsportsIcon />} />
        <Tab icon={<MusicNoteIcon />} />
        <Tab icon={<VideocamIcon />} />
        <Tab icon={<LibraryBooksIcon />} />
      </Tabs>
      <ItemContainer
        value={value}
        index={0}
        data={gameData}
        toggleOpen={setOpen}
        open={open}
      />
    </div>
  );
};

export { Home };
export default Home;
