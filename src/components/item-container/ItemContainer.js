import React from "react";
import Grid from "@material-ui/core/Grid";

import ItemCard from "components/item-card";
import ItemModal from "components/item-modal";

import styles from "./styles";

const ItemContainer = ({ value, index, data, toggleOpen, open }) => {
  const classes = styles();

  return (
    <div hidden={value !== index}>
      {value === index && (
        <Grid container justify="center" alignItems="center">
          {Object.values(data).map((item, index) => (
            <Grid
              item
              xs={11}
              sm={12}
              md={6}
              lg={6}
              xl={4}
              key={item.title}
              className={classes.itemCard}
            >
              <ItemCard
                title={item.title}
                genre={item.genre}
                description={item.description}
                image={item.image}
                websiteLink={item.websiteLink}
                downloadLink={item.downloadLink}
                toggleOpen={() => toggleOpen(index)}
              />
            </Grid>
          ))}
        </Grid>
      )}
      <ItemModal
        title={Object.values(data)[open]?.title}
        genre={Object.values(data)[open]?.genre}
        description={Object.values(data)[open]?.description}
        websiteLink={Object.values(data)[open]?.websiteLink}
        downloadLink={Object.values(data)[open]?.downloadLink}
        screenshots={Object.values(data)[open]?.screenshots}
        video={Object.values(data)[open]?.video}
        open={open !== null}
        onClose={() => toggleOpen(null)}
      />
    </div>
  );
};

ItemContainer.defaultProps = {
  value: null,
  index: null,
  data: {},
  mappingFunction: () => {},
};

export { ItemContainer };
export default ItemContainer;
