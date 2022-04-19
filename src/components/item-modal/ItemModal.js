import React from "react";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Modal from "@material-ui/core/Modal";
import Divider from "@material-ui/core/Divider";
import CloseIcon from "@material-ui/icons/Close";
import GridList from "@material-ui/core/GridList";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import GridListTile from "@material-ui/core/GridListTile";

import styles from "./styles";

const ItemModal = ({
  title,
  genre,
  description,
  websiteLink,
  downloadLink,
  screenshots,
  video,
  open,
  onClose,
}) => {
  const classes = styles();

  return (
    <Modal open={open} onClose={onClose}>
      <div className={classes.modal}>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          wrap="nowrap"
          className={classes.titleContainer}
        >
          <Typography variant="h5" className={classes.title}>
            {title}
          </Typography>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Grid>
        <Divider />
        <Grid
          container
          justify="space-between"
          className={classes.contentContainer}
        >
          <Grid item xs={12} md={6} className={classes.descriptionContainer}>
            {description.map((item, index) => (
              <Typography key={index} variant="body2">
                {item}
              </Typography>
            ))}
            <Chip label={genre} className={classes.chip} />
          </Grid>
          <Grid item xs={12} md={4}>
            <GridList cols={1} className={classes.list}>
              <GridListTile>
                <iframe
                  title="video"
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video}`}
                ></iframe>
              </GridListTile>
            </GridList>
            <GridList cols={2} className={classes.list}>
              {screenshots.map((item, index) => (
                <GridListTile key={item.img} cols={item.cols || 1}>
                  <img src={item} alt={`${title} ${index + 1}`} />
                </GridListTile>
              ))}
            </GridList>
          </Grid>
        </Grid>
      </div>
    </Modal>
  );
};

ItemModal.defaultProps = {
  title: null,
  genre: null,
  description: [],
  websiteLink: null,
  downloadLink: null,
  screenshots: [],
  video: null,
  open: null,
  onClose: () => {},
};

export { ItemModal };
export default ItemModal;
