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
    fontSize: "20px",
    padding: "0 50px"
  },
 
  toolBar: {
    display: "flex",
    justifyContent: "space-between"
  },
  endButtons: {
    display: "flex",
    justifyContent: "flex-end",
  }

 
}));

export default useStyles;