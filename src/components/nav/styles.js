import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  appBar: {
      position: "fixed",
      backgroundColor: "transparent",
      boxShadow: "none",
  },
  buttons: {
    color: "white",
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    fontSize: "3vh",
    padding: "0 50px",
    fontFamily: "Abhaya Libre"
  },
 
  toolBar: {
    display: "flex",
    justifyContent: "space-between"
  },
  endButtons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  homeButton: {
    fontFamily: "Great Vibes",
    fontSize: "5vh",
    background: "transparent",
    border: "none",
    outline: "none",
    color: "white"

  }

 
}));

export default useStyles;