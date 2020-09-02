import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  background: { 
    backgroundColor: '#14141f', 
    height: '100vh',
  },
  profilePic: {
    width: "48rem",
    height: "58rem",
    padding: "5rem"
  },
  profileContainer:{
    display: "flex",
    justifyContent: "center",
  }
}));

export default useStyles;