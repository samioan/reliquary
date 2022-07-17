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
    padding: 16,
    width: "calc(100% - 32px)",
    [breakpoints.up("md")]: {
      width: "50%",
    },
  },
  contentContainer: {
    marginTop: 16,
    width: "99%",
  },
}));

export { styles };
export default styles;
