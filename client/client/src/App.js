import NavBar from './components/NavBar';
import Routes from './pages/Routes';
import { useStateContext } from './utils/state';

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
        <NavBar />
        <Routes />
      </Paper>
    </ThemeProvider>
  );
};

export default App;
