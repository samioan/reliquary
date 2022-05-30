import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ breakpoints }) => ({
  page: {
    width: "100vw",
    backgroundColor: "rgba(192, 159, 128, 0.8)",
    margin: "auto",
    minHeight: "100vh",
    [breakpoints.up("sm")]: {
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
