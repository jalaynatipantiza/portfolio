import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  profilePicture: {
    width: "27em",
    height: "35em",
    borderRadius: "50%",
    margin: "2em",
    padding: "5em 3em 5em 3em;"
  },
  aboutProfileImg:{
   display: "flex",
   backgroundColor: " rgba(0,0,0,.5)"
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
    margin: theme.spacing(1),
  },
 
  
}));

export default useStyles;