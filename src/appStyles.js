import { makeStyles } from '@material-ui/core/styles';
import background1 from "./documents/background1.png"

const useStyles = makeStyles((theme) => ({
  projects: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  background: {
    backgroundImage: `url(${background1})`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100vh"
  }
}));

export default useStyles;