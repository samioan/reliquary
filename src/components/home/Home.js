import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import styles from "./styles";
import lordmonarch from "../../components/games/images/lordmonarch.jpg";

const Home = () => {
  const classes = styles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.page}>
      <Typography className={classes.title} variant="h3" align="center">
        <b>
          <i>The Reliquary</i>
        </b>
      </Typography>
      <Grid
        className={classes.container}
        container
        direction="row"
        justify="center"
      >
        <Grid className={classes.textBox}>
          <Typography className={classes.text} variant="h6">
            <b>Welcome to the Reliquary!</b>
          </Typography>
          <Typography className={classes.text} variant="h6">
            This is a personal archive of old and obscure media from various
            sources. Here you can find a multitude of games, music, art,
            websites and scans, among other things. I hope you enjoy your stay
            here and find something that interests you. Feel free to contact me
            for any questions, suggestions or feedback you may have. Your
            contributions are more than welcome! Take care and have fun!
          </Typography>
        </Grid>

        <img className={classes.image} src={lordmonarch} alt="splash" />
      </Grid>
    </div>
  );
};

export { Home };
export default Home;
