import React from "react";

import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import styles from "./styles";

const DescriptionBlock = ({ label, content }) => {
  const classes = styles();

  return (
    <>
      <Typography variant="h6" className={classes.bottomMargin}>
        {label}
      </Typography>
      <Divider className={classes.bottomMargin} />
      <Typography variant="body2" className={classes.dividingMargin}>
        {content}
      </Typography>
    </>
  );
};

export { DescriptionBlock };
export default DescriptionBlock;
