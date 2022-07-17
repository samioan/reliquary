import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
  container: {
    marginBottom: 16,
  },
  title: {
    color: "#76323F",
  },
  iconButton: {
    backgroundColor: "transparent !important",
    "& :hover": {
      backgroundColor: "transparent !important",
    },
  },
}));

export { styles };
export default styles;
