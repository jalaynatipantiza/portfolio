import { makeStyles } from '@material-ui/core/styles';
import aboutMe1 from '../../documents/aboutMe1.jpg';

const useStyles = makeStyles((theme) => ({
  aboutBackground:{
  backgroundImage: `url(${aboutMe1})`,
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundSize: "cover",
  height: "50vh",
  borderBottom: "3px solid #bbb"
   
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