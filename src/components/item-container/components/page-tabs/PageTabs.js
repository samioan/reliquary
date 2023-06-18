import React from "react";
import { Link } from "react-router-dom";

import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Tooltip from "@material-ui/core/Tooltip";

import styles from "./styles";

const PageTabs = ({ tabs }) => {
  const classes = styles();
  return (
    <Tabs value={window.location.pathname} centered className={classes.tabs}>
      {tabs.map(({ title, icon, link }) => (
        <Tooltip
          key={title}
          arrow
          placement="top"
          title={title}
          classes={{ tooltip: classes.tooltip }}
        >
          <Tab icon={icon} value={link} component={Link} to={link} />
        </Tooltip>
      ))}
    </Tabs>
  );
};

export { PageTabs };
export default PageTabs;
