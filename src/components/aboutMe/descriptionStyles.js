import { makeStyles } from '@material-ui/core/styles';
import img from '../../documents/jalayna.jpeg';

const useStyles = makeStyles({
  mainBox: {
    backgroundColor: "#ffe6e6",
    height: "50vh",
  },
  twoPic: {
    display: "flex",
    height: "25vw",
    width: "25vw",
    padding: "50px",
  },
  profilePicture: {
    backgroundImage: `url(${img})`,
    width: "50%",
    height: "50%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    margin: "10px"
  },
  random: {
    backgroundImage: `url(${img})`,
    width: "50%",
    height: "50%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    alignSelf: "center",
   
  }
});

export default useStyles;