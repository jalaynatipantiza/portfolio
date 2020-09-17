import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
    color: "white",
    fontSize: "20px"
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 30,
    height: 30,
  },
div: {
  height:"24px",// Replace with the height your footer should be
    width: "100%",// Don't change
    backgroundRepeat: "repeat",
    backgroundAttachment: "scroll",
    backgroundPosition: "0% 0%",
    position: "fixed",
    bottom: "15pt",
    left: "0pt;"
}
}));

export default useStyles;