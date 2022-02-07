import NavBar from './components/Navigation/NavBar';
import ToastNotification from './components/Notifications/ToastNotification';
import Routes from './pages/Routes/Routes';
import { useStateContext } from './utils/context/state';

import customTheme from './assets/styles/customTheme';
import { useBodyStyles } from './assets/styles/muiStyles';
import { Paper } from '@material-ui/core/';
import { ThemeProvider } from '@material-ui/core/styles';

const App = () => {
  const { darkMode } = useStateContext();
  const classes = useBodyStyles();

  return (
    <ThemeProvider theme={customTheme(darkMode)}>
      <Paper className={classes.root} elevation={0}>
        <ToastNotification />
        <NavBar />
        <Routes />
      </Paper>
    </ThemeProvider>
  );
};

export default App;
