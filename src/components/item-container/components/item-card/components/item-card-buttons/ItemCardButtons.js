import React from "react";

import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

import styles from "./styles";

const ItemCard = ({ iconButtons }) => {
  const classes = styles();

  return (
    <div className={classes.container}>
      {iconButtons.map(({ title, icon, onClick, href }) =>
        !!onClick || !!href ? (
          <Tooltip
            key={title}
            arrow
            placement="top"
            title={title}
            classes={{ tooltip: classes.tooltip }}
          >
            <IconButton onClick={onClick} href={href} target="_blank">
              {icon}
            </IconButton>
          </Tooltip>
        ) : null
      )}
    </div>
  );
};

export { ItemCard };
export default ItemCard;
