import React from "react";
import { Scrollbars } from "react-custom-scrollbars-2";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { ItemCard, PageTabs } from "./components";
import styles from "./styles";

const ItemContainer = ({ data, tabs, title }) => {
  const classes = styles();

  return (
    <div className={classes.page}>
      <Typography className={classes.title} variant="h3" align="center">
        {title}
      </Typography>
      <PageTabs tabs={tabs} />
      <Scrollbars autoHeight autoHeightMin="calc(100vh - 152px)">
        <Grid container justify="center" alignItems="center">
          {Object.values(data)?.map((item, index) => (
            <ItemCard
              key={index}
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
          ))}
        </Grid>
      </Scrollbars>
    </div>
  );
};

export { ItemContainer };
export default ItemContainer;
