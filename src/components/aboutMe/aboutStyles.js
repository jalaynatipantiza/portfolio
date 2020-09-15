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
   padding: "7em 10em 2em;",
  }
}));

export default useStyles;