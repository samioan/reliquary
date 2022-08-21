import React from "react";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

import { ItemModal, ItemCardButtons } from "./components";
import withItemCardProps from "./withItemCardProps";

const ItemCard = ({
  title,
  genre,
  image,
  websiteLink,
  downloadLink,
  description,
  screenshots,
  video,
  albums,
  open,
  classes,
  iconButtons,
  toggleOpen,
  index,
}) => (
  <>
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={image} onClick={toggleOpen} />

      <CardContent onClick={toggleOpen}>
        <Typography gutterBottom variant="h5" className={classes.text}>
          {title}
        </Typography>
        <Typography variant="body2">{genre}</Typography>
      </CardContent>

      <ItemCardButtons iconButtons={iconButtons} />
    </Card>

    <ItemModal
      index={index}
      title={title}
      genre={genre}
      description={description}
      websiteLink={websiteLink}
      downloadLink={downloadLink}
      screenshots={screenshots}
      albums={albums}
      video={video}
      open={open}
      onClose={toggleOpen}
    />
  </>
);

export { ItemCard };
export default withItemCardProps(ItemCard);
