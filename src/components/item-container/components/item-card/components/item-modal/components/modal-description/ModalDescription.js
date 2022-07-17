import React from "react";

import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import { DescriptionBlock, LinkBlock } from "./components";

import styles from "./styles";

const ModalDescription = ({
  genre,
  description,
  websiteLink,
  downloadLink,
}) => {
  const classes = styles();

  return (
    <div className={classes.container}>
      {description && <DescriptionBlock label="About" content={description} />}
      {genre && <DescriptionBlock label="Genre" content={genre} />}

      {(websiteLink || downloadLink) && (
        <>
          <Typography variant="h6" className={classes.bottomMargin}>
            External Links
          </Typography>
          <Divider className={classes.bottomMargin} />
        </>
      )}
      {websiteLink && <LinkBlock link={websiteLink} label="Website" />}
      {downloadLink && <LinkBlock link={downloadLink} label="Download" />}
    </div>
  );
};

export { ModalDescription };
export default ModalDescription;
