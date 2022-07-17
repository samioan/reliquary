import React from "react";
import Grid from "@material-ui/core/Grid";

import { ItemCard } from "./components";

import styles from "./styles";

const ItemContainer = ({ value, index, data }) => {
  const classes = styles();

  return (
    <>
      {value === index && (
        <Grid container justify="center" alignItems="center">
          {Object.values(data).map((item) => (
            <Grid
              key={item.title}
              item
              xs={11}
              sm={12}
              md={6}
              lg={6}
              xl={4}
              className={classes.itemCard}
            >
              <ItemCard
                index={index}
                title={item.title}
                genre={item.genre}
                description={item.description}
                image={item.image}
                video={item.video}
                screenshots={item.screenshots}
                websiteLink={item.websiteLink}
                downloadLink={item.downloadLink}
                albums={item.albums}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export { ItemContainer };
export default ItemContainer;
