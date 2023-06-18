import { makeStyles } from "@material-ui/core/styles";
import backgroundGeneral from "./backgroundGeneral.jpg";

const styles = makeStyles(() => ({
  background: {
    backgroundImage: `url(${backgroundGeneral})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  },
}));

export { styles };
export default styles;
