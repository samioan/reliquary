import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
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
            <b>Welcome!</b>
          </Typography>
          <div className={classes.separator}></div>
          <Typography className={classes.text} variant="h6">
            This is a personal archive of various obscure or old media I've
            collected from various sources. Here you can find games, music, art
            and websites that are interesting. I hope you enjoy your visit and
            find something you like. Feel free to contact me for any questions,
            suggestions or feedback. Your contributions are more than welcome.
            Take care and have fun.
          </Typography>
          <div className={classes.separator}></div>
          <Typography className={classes.text} variant="h6">
            <i>By Selfish Dream</i>
          </Typography>
        </Grid>

        <img className={classes.image} src={lordmonarch} alt="splash" />
      </Grid>
    </div>
  );
};

export { Home };
export default Home;
