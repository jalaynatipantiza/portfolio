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
  },
  root: {
    height: 180,
  },
  wrapper: {
    width: 100 + theme.spacing(2),
  },
  paper: {
    zIndex: 1,
    position: 'relative',
    margin: theme.spacing(1),
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

export default useStyles;