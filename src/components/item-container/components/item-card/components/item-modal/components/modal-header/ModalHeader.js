import React from "react";

import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import styles from "./styles";

const ModalHeader = ({ title, onClose }) => {
  const classes = styles();

  return (
    <>
      <Grid
        container
        justify="space-between"
        alignItems="center"
        wrap="nowrap"
        className={classes.container}
      >
        <Typography variant="h5" className={classes.title}>
          {title}
        </Typography>
        <IconButton
          className={classes.iconButton}
          onClick={onClose}
          size="small"
          disableFocusRipple
          disableRipple
        >
          <CloseIcon />
        </IconButton>
      </Grid>
      <Divider />
    </>
  );
};

export { ModalHeader };
export default ModalHeader;
