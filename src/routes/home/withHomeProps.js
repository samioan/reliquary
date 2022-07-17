import React, { useState } from "react";

import VideocamIcon from "@material-ui/icons/Videocam";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";

import styles from "./styles";

const withHomeProps = (Component) => (props) => {
  const classes = styles();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = [
    {
      title: "Games",
      icon: <SportsEsportsIcon />,
    },
    {
      title: "Music",
      icon: <MusicNoteIcon />,
    },
    {
      title: "Videos",
      icon: <VideocamIcon />,
    },
    {
      title: "Books",
      icon: <LibraryBooksIcon />,
    },
  ];

  const newProps = {
    ...props,
    classes,
    value,
    handleChange,
    tabs,
  };

  return <Component {...newProps} />;
};

export { withHomeProps };
export default withHomeProps;
