import { makeStyles } from '@material-ui/core/styles';
import background1 from "../../documents/aboutMe1.jpg"

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
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100vh",
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background1})`
  }
}));

export default useStyles;