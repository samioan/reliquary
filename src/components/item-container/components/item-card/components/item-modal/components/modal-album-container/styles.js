import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ breakpoints }) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    marginRight: 16,
  },
  album: {
    border: "none",
    borderRadius: 8,
    width: 100,
    height: 100,
    [breakpoints.up("md")]: {
      width: 350,
      height: 350,
    },
  },
}));

export { styles };
export default styles;
