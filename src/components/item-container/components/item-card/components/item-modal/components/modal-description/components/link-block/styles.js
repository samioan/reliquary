import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
  bottomMargin: {
    marginBottom: 8,
  },
  link: {
    textDecoration: "none",
    "& :hover": {
      textDecoration: "underline",
    },
  },
}));

export { styles };
export default styles;
