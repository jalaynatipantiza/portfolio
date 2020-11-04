import { makeStyles } from '@material-ui/core/styles';
import img from "../../documents/projectBackground.jpg"

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: '2em',
    padding: '2em',
    width: '60em',
    background: "lightgray",
    '&:hover': {
      background: "#f1dada"
   },
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  projects: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    bbackgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "200vh",
    background: `url(${img})`
  }
}));

export default useStyles;