import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  profilePicture: {
    // verticalAlign: "middle",
    maxWidth: "50%",
    maxHeight: "50%",
    borderRadius: "50%",
    // width: "27rem",
    // height: "35rem",
    // borderRadius: "50%",
    // margin: "2em",
    padding: "5em 3em 5em 3em;"
  },
  aboutBackground:{
   display: "flex",
   backgroundColor: " rgba(0,0,0,.5)",
   height: "100vh",
   
  },
  root: {
    marginTop: "5em"
  },
  wrapper: {
    width: 100 + theme.spacing(2),
  },
  paper: {
    zIndex: 1,
    position: 'relative',
    objectFit: "cover",  
    margin: theme.spacing(1),
  },
 
  
}));

export default useStyles;