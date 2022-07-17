import React from "react";

import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

import styles from "./styles";

const ModalMedia = ({ title, screenshots, video }) => {
  const classes = styles();

  return (
    <Grid item xs={12} md={4}>
      <GridList cols={1} className={classes.list}>
        <GridListTile>
          <iframe title="video" width="100%" height="100%" src={video}></iframe>
        </GridListTile>
      </GridList>
      <GridList cols={1} className={classes.list}>
        {screenshots?.map((item, index) => (
          <GridListTile key={index} cols={1}>
            <img src={item} alt={`${title} ${index + 1}`} />
          </GridListTile>
        ))}
      </GridList>
    </Grid>
  );
};

export { ModalMedia };
export default ModalMedia;
