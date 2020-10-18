import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: '2em',
    padding: '2em',
    maxWidth: '60em',
    backgroundColor: "lightgray"
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
    backgroundColor: "#004d4d",
    
  }
}));

export default useStyles;