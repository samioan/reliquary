import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ breakpoints }) => ({
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
    textShadow: "2px 2px #111",
    paddingTop: 80,
    color: "#76323F",
  },
  text: {
    color: "#76323F",
    [breakpoints.down("sm")]: {
      fontSize: "small",
    },
    [breakpoints.up("sm")]: {
      fontSize: "2vh",
    },
  },
  container: {
    paddingTop: 24,
  },
  image: {
    borderRadius: 10,
    boxShadow: "5px 5px #565656",
    [breakpoints.down("sm")]: {
      width: "calc(100vw / 1.5)",
      height: "calc(100vw / 1.5)",
    },
    [breakpoints.up("sm")]: {
      width: "25vw",
      height: "25vw",
    },
  },
  textBox: {
    [breakpoints.down("sm")]: {
      textAlign: "center",
      width: "calc(100vw / 1.5)",
    },
    [breakpoints.up("sm")]: {
      textAlign: "justify",
      paddingRight: 20,
      width: "25vw",
    },
  },
}));

export { styles };
export default styles;
