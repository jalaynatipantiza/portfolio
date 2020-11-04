import { makeStyles } from '@material-ui/core/styles';
// import fullShot from '../../documents/fullShot.JPG'
import workspace from '../../documents/workspace.jpg'
const useStyles = makeStyles({
  h1: {
    fontFamily: "Abhaya Libre",
    display: "flex", 
    justifyContent: "center",
    fontSize:"4vh",
    marginTop: "4px",
  },
  secondarybox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  mainBox: {
    backgroundColor: "white",
    height: "50vh",

  },
  twoPic: {
    display: "flex",
    height: "25vw",
    width: "25vw"
  },
  workspacePic: {
    backgroundImage: `url(${workspace})`,
    width: "90%",
    height: "70%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    margin: "10px"
  },
  me: {
    // backgroundImage: `url(${fullShot})`,
    width: "90%",
    height: "70%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    alignSelf: "center",
   
  },
  descriptionOfMe: {
    height: "25vw",
    width: "35vw",
    fontSize: "20px"
  }
});

export default useStyles;