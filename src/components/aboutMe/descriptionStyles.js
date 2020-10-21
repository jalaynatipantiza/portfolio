import { makeStyles } from '@material-ui/core/styles';
import headshot from '../../documents/headshot.jpg'
import workspace from '../../documents/workspace.jpg'
const useStyles = makeStyles({
  mainBox: {
    backgroundColor: "white",
    height: "50vh",
    display: "flex",
    justifyContent: "space-around"
  },
  twoPic: {
    display: "flex",
    height: "25vw",
    width: "25vw",
    padding: "50px",
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
    backgroundImage: `url(${headshot})`,
    width: "90%",
    height: "70%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    alignSelf: "center",
   
  },
  descriptionOfMe: {
    height: "25vw",
    width: "35vw",
    padding: "50px",
    fontSize: "20px"
  }
});

export default useStyles;