import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ breakpoints }) => ({
  card: {
    borderRadius: 10,
    [breakpoints.down("sm")]: { width: "calc(100vw / 1.5)" },
    [breakpoints.up("sm")]: { width: 150 },
    backgroundColor: "#D7CEC7",
    boxShadow: "5px 5px #565656",
    "&:hover": {
      backgroundColor: "#EFEFEF",
    },
  },
  title: {
    paddingLeft: 4,
    color: "#76323F",
  },
  genre: {
    paddingLeft: 4,
    color: "#76323F",
  },
  cardContent: {
    minHeight: 80,
  },
  media: {
    borderRadius: 10,
    objectFit: "cover",
    width: "inherit",
    height: 150,
  },
}));

export { styles };
export default styles;
