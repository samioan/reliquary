import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ breakpoints }) => ({
  modal: {
    borderRadius: 8,
    backgroundColor: "#D7CEC7",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: "#565656 0px 5px 15px",
    padding: 8,
    width: "calc(100% - 32px)",
    [breakpoints.up("sm")]: {
      width: "50%",
    },
  },
  titleContainer: {
    padding: "8px 8px 8px",
  },
  title: {
    color: "#76323F",
  },
  contentContainer: {
    height: "80vh",
    overflowY: "auto",
    padding: "8px 8px 0px 8px",
  },
  descriptionContainer: {
    textAlign: "justify",
    textJustify: "inter-word",
  },
  chip: {
    marginTop: 8,
  },
  list: {
    "& li": {
      "& div": {
        borderRadius: 8,
      },
    },
  },
}));

export { styles };
export default styles;
