import { makeStyles } from "@material-ui/core/styles";

const Theme = makeStyles(({ breakpoints }) => ({
  page: {
    [breakpoints.down("sm")]: {
      width: "100vw",
    },
    [breakpoints.up("sm")]: {
      width: "60vw",
    },
    backgroundColor: "#C09F80",
    margin: "auto",
    minHeight: "100vh",
  },
  title: {
    paddingTop: 80,
    textShadow: "2px 2px #111",
    color: "#76323F",
  },
}));

export { Theme };
export default Theme;
