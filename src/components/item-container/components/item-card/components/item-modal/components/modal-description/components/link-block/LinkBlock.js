import React from "react";
import { Link } from "react-router-dom";

import Typography from "@material-ui/core/Typography";

import styles from "./styles";

const LinkBlock = ({ link, label }) => {
  const classes = styles();

  return (
    <Link
      to={{
        pathname: `${link}`,
      }}
      target="_blank"
      className={classes.link}
    >
      <Typography variant="body2" className={classes.bottomMargin}>
        {label}
      </Typography>
    </Link>
  );
};

export { LinkBlock };
export default LinkBlock;
