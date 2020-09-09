import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  profilePic: {
    width: "35rem",
    height: "47rem",
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
    color: "white",
    fontSize: "4em",
    display: "flex",
    textAlign: "center"
  }
}));

export default useStyles;