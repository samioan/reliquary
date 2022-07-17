import React from "react";

import styles from "./styles";

const ModalAlbumContainer = ({ albums }) => {
  const classes = styles();

  return (
    <div className={classes.container}>
      {albums?.map((album) => (
        <iframe
          title="album"
          className={classes.album}
          src={`https://bandcamp.com/EmbeddedPlayer/album=${album}/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/`}
          seamless
        ></iframe>
      ))}
    </div>
  );
};

export { ModalAlbumContainer };
export default ModalAlbumContainer;
