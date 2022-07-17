import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
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
