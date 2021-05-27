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
    textShadow: "0.25vh 0.25vh #111",
    paddingTop: 80,
    color: "#76323F",
    fontSize: "5vh",
  },
}));

export { Theme };
export default Theme;
