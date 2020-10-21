import { makeStyles } from '@material-ui/core/styles';
// import css from '../documents/Css.png';
import img from '../documents/computer.jpg'


const useStyles = makeStyles((theme) => ({
  h1: {
    display: "flex", 
    justifyContent: "center",
    fontSize:"4vh",
    marginTop: "12px"
  },
  techStackBoxMain: {
    backgroundColor: "#ffe6e6",
    height: "50vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  centerCircle: {
    background: `url(${img})`,
    width: "400px",
    height: "200px ",
    borderRadius: "200px 200px 0 0",
    alignSelf: "center",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  logo: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    margin: "5em auto 0"
  },
  imgSemiCircle:{
    alignSelf: "center"
  }

}));

export default useStyles;