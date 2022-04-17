import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ breakpoints }) => ({
  page: {
    width: "100vw",
    backgroundColor: "rgba(192, 159, 128, 0.75)",
    margin: "auto",
    minHeight: "100vh",
    [breakpoints.up("sm")]: {
      maxWidth: "60vw",
    },
  },
  title: {
    paddingTop: 8,
    paddingBottom: 8,
    color: "#76323F",
  },
}));

export { styles };
export default styles;
