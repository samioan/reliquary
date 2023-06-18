import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
  card: {
    width: 300,
    margin: 16,
    borderRadius: 8,
    backgroundColor: "#D7CEC7",
    transition: "0.3s",
    "&:hover": {
      boxShadow: "#565656 0px 5px 15px",
      backgroundColor: "#EFEFEF",
      cursor: "pointer",
    },
  },
  text: {
    color: "#76323F",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  media: {
    borderRadius: 8,
    height: 200,
  },
  tooltip: {
    top: 16,
  },
}));

export { styles };
export default styles;
