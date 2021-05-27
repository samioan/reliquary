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
    textShadow: "0.25vh 0.25vh #111",
    paddingTop: 80,
    color: "#76323F",
    fontSize: "5vh",
  },
  text: {
    fontSize: "2vh",
    color: "#76323F",
  },
  container: {
    paddingTop: 24,
  },
  image: {
    [breakpoints.down("sm")]: {
      width: "calc(100vw / 1.5)",
      height: "calc(100vw / 1.5)",
      marginBottom: 20,
    },
    [breakpoints.up("sm")]: {
      width: "25vw",
      height: "25vw",
    },
    borderRadius: 10,
    boxShadow: "5px 5px #565656",
  },
  textBox: {
    [breakpoints.down("sm")]: {
      textAlign: "center",
      paddingBottom: 20,
      width: "calc(100vw / 1.5)",
    },
    [breakpoints.up("sm")]: {
      textAlign: "justify",
      paddingRight: 20,
      width: "25vw",
    },
  },
  separator: {
    marginTop: 8,
    marginBottom: 8,
    backgroundColor: "#76323F",
    height: "0.2vh",
    width: "100%",
  },
}));

export { styles };
export default styles;
