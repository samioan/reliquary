import React from "react";

import Card from "@material-ui/core/Card";
import LinkIcon from "@material-ui/icons/Link";
import InfoIcon from "@material-ui/icons/Info";
import Tooltip from "@material-ui/core/Tooltip";
import GetAppIcon from "@material-ui/icons/GetApp";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import styles from "./styles";

const ItemCard = ({
  title,
  genre,
  websiteLink,
  downloadLink,
  image,
  toggleOpen,
}) => {
  const classes = styles();

  return (
    <>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={image}
          title={title}
          onClick={toggleOpen}
        />
        <CardContent onClick={toggleOpen}>
          <Typography gutterBottom variant="h5" className={classes.text}>
            {title}
          </Typography>
          <Typography variant="body2">{genre}</Typography>
        </CardContent>
        <CardActions>
          <Tooltip
            arrow
            placement="top"
            title="More Info"
            classes={{ tooltip: classes.tooltip }}
          >
            <IconButton onClick={toggleOpen}>
              <InfoIcon />
            </IconButton>
          </Tooltip>
          <Tooltip
            arrow
            placement="top"
            title="Visit Website"
            classes={{ tooltip: classes.tooltip }}
          >
            <IconButton href={websiteLink} target="_blank">
              <LinkIcon />
            </IconButton>
          </Tooltip>
          <Tooltip
            arrow
            placement="top"
            title="Download"
            classes={{ tooltip: classes.tooltip }}
          >
            <IconButton href={downloadLink} target="_blank">
              <GetAppIcon />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    </>
  );
};

ItemCard.defaultProps = {
  title: null,
  genre: null,
  websiteLink: null,
  downloadLink: null,
  image: null,
  toggleOpen: () => {},
};

export { ItemCard };
export default ItemCard;
