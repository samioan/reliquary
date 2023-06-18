import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ breakpoints }) => ({
  page: {
    width: "100vw",
    backgroundColor: "rgb(192, 159, 128)",
    margin: "auto",
    minHeight: "100vh",
    [breakpoints.up("lg")]: {
      maxWidth: "60vw",
    },
  },
  title: {
    paddingTop: 16,
    paddingBottom: 16,
    color: "#76323F",
  },
  tabs: {
    marginBottom: 16,
    padding: "0px 8px",
  },
  tooltip: {
    top: 16,
  },
}));

export { styles };
export default styles;
