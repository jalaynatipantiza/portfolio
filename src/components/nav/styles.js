import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBar: {
      position: "fixed",
      backgroundColor: "transparent",
  }
}));

export default useStyles;