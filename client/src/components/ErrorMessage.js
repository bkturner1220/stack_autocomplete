import { Alert, AlertTitle } from '@material-ui/lab';
import { useAlertStyles } from '../assets/styles/muiStyles';

const AlertMessage = ({ errorMsg, clearErrorMsg }) => {
  const classes = useAlertStyles();

  if (!errorMsg) {
    return null;
  }

  return (
    <div className={classes.root}>
      <Alert severity="error" onClose={clearErrorMsg}>
        <AlertTitle>Error</AlertTitle>
        {errorMsg}
      </Alert>
    </div>
  );
};

export default AlertMessage;
