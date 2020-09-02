import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  background: { 
    backgroundColor: '#14141f', 
    height: '100vh',
  },
  profilePic: {
    width: "45rem",
    height: "57rem",
  },
  profileContainer:{
    display: "flex",
    justifyContent: "center",
  },
  caption: {
    padding: "4em 4em 0 4em"
    },
  words: {
    font: "initial",
    color: "white",
    fontSize: "4em",
    display: "flex",
    textAlign: "center"
  }
}));

export default useStyles;