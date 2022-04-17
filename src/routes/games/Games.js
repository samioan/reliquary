import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";

import gameData from "data/gameData";

import { GameCard } from "./components";
import styles from "./styles";

const Games = ({ value, index }) => {
  const classes = styles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div hidden={value !== index}>
      {value === index && (
        <Grid container justify="center" alignItems="center">
          {Object.values(gameData).map((gameItem) => (
            <Grid
              item
              xs={11}
              sm={12}
              md={6}
              lg={6}
              xl={4}
              key={gameItem.title}
              className={classes.gameCard}
            >
              <GameCard
                image={gameItem.image}
                title={gameItem.title}
                genre={gameItem.genre}
                gameLink={gameItem.link}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export { Games };
export default Games;
