import HomeIcon from "@material-ui/icons/Home";
import VideocamIcon from "@material-ui/icons/Videocam";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";

import { gameData, musicData, videoData, bookData } from "data";

const withApp = (Component) => (props) => {
  const tabs = [
    {
      title: "The Reliquary",
      icon: <HomeIcon />,
      link: "/",
      data: [],
    },
    {
      title: "Games",
      icon: <SportsEsportsIcon />,
      link: "/games",
      data: gameData,
    },
    {
      title: "Music",
      icon: <MusicNoteIcon />,
      link: "/music",
      data: musicData,
    },
    {
      title: "Videos",
      icon: <VideocamIcon />,
      link: "/videos",
      data: videoData,
    },
    {
      title: "Books",
      icon: <LibraryBooksIcon />,
      link: "/books",
      data: bookData,
    },
  ];

  const newProps = {
    ...props,
    tabs,
  };

  return <Component {...newProps} />;
};

export { withApp };
export default withApp;
