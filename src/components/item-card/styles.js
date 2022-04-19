import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
  card: {
    borderRadius: 8,
    backgroundColor: "#D7CEC7",
    boxShadow: "#565656 0px 5px 15px",
    transition: "0.3s",
    "&:hover": {
      backgroundColor: "#EFEFEF",
      cursor: "pointer",
    },
  },
  text: {
    color: "#76323F",
    textOverflow: "ellipsis",
  },
  media: {
    borderRadius: 8,
    height: 240,
  },
}));

export { styles };
export default styles;
