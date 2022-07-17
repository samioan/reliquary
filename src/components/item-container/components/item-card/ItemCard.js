import React from "react";

import Card from "@material-ui/core/Card";
import Tooltip from "@material-ui/core/Tooltip";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import { ItemModal } from "./components";
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
      <CardActions>
        {iconButtons.map(({ title, icon, onClick, href }) =>
          !!onClick || !!href ? (
            <Tooltip
              key={title}
              arrow
              placement="top"
              title={title}
              classes={{ tooltip: classes.tooltip }}
              TransitionComponent={({ children }) => children}
            >
              <IconButton onClick={onClick} href={href} target="_blank">
                {icon}
              </IconButton>
            </Tooltip>
          ) : null
        )}
      </CardActions>
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
