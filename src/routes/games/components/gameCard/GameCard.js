import React from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import styles from "./styles";

const GameCard = ({ image, title, genre, gameLink }) => {
  const classes = styles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={image} title={title} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={classes.text}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {genre}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" href={gameLink} target="_blank">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export { GameCard };
export default GameCard;
