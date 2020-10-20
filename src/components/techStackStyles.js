import { makeStyles } from '@material-ui/core/styles';
import css from '../documents/Css.png';




const useStyles = makeStyles((theme) => ({

  techStackBoxMain: {
    backgroundColor: "#ffe6e6",
    height: "50vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  centerCircle: {
    background: "lightblue",
    width: "400px",
    height: "200px ",
    borderRadius: "200px 200px 0 0",
    alignSelf: "center"
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