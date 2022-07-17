import React, { useState } from "react";

import LinkIcon from "@material-ui/icons/Link";
import InfoIcon from "@material-ui/icons/Info";
import GetAppIcon from "@material-ui/icons/GetApp";

import styles from "./styles";

const withItemCardProps = (Component) => (props) => {
  const { websiteLink, downloadLink } = props;

  const classes = styles();

  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  const iconButtons = [
    {
      title: "More Info",
      icon: <InfoIcon />,
      onClick: toggleOpen,
      href: null,
    },
    {
      title: "Visit Website",
      icon: <LinkIcon />,
      onClick: null,
      href: !!websiteLink ? websiteLink : null,
    },
    {
      title: "Download",
      icon: <GetAppIcon />,
      onClick: null,
      href: !!downloadLink ? downloadLink : null,
    },
  ];

  const newProps = {
    ...props,
    classes,
    iconButtons,
    open,
    toggleOpen,
  };

  return <Component {...newProps} />;
};

export { withItemCardProps };
export default withItemCardProps;
