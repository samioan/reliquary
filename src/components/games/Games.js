import React, { useEffect } from "react";
import { GameCard } from "./components";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Theme from "../theme";
import gameDetails from "./util/gameDetails";

const Games = () => {
  const classes = Theme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.page}>
      <Typography className={classes.title} variant="h3" align="center">
        <b>
          <i>Games</i>
        </b>
      </Typography>

      <Box
        display="flex"
        flexWrap="wrap"
        alignItems="stretch"
        justifyContent="center"
        p={2}
      >
        {gameDetails.map((gameItem) => (
          <Box key={gameItem.title} p={1}>
            <GameCard
              image={gameItem.image}
              title={gameItem.title}
              genre={gameItem.genre}
              gameLink={gameItem.gameLink}
            />
          </Box>
        ))}
      </Box>
    </div>
  );
};

export { Games };
export default Games;
