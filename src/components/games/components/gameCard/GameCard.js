import React from "react";
import styles from "./styles";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const GameCard = ({ image, title, genre, gameLink }) => {
  const classes = styles();

  return (
    <Link
      to={{
        pathname: gameLink,
      }}
      target="_blank"
      style={{ textDecoration: "none" }}
    >
      <Grid className={classes.card}>
        <img className={classes.media} src={image} alt={title} />
        <Grid className={classes.cardContent}>
          <Typography className={classes.title} variant="body1">
            <b>{title}</b>
          </Typography>
          <Typography className={classes.genre} variant="caption">
            {genre}
          </Typography>
        </Grid>
      </Grid>
    </Link>
  );
};

export { GameCard };
export default GameCard;
