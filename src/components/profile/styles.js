import { makeStyles } from '@material-ui/core/styles';
import background1 from "../../documents/background1.png"

const useStyles = makeStyles((theme) => ({
  profilePic: {
    height: "73vh"
  },
  profileContainer:{
    display: "flex",
    justifyContent: "center",
  },
  caption: {
    padding: "4em 4em 0 4em"
    },
  words: {
    fontFamily: "Abhaya Libre",
    color: "Black",
    fontSize: "4em",
    display: "flex",
    textAlign: "center"
  },
  background1: {
    backgroundImage: `url(${background1})`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100vh"
  }
}));

export default useStyles;