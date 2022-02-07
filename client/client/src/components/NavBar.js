import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useApolloClient } from '@apollo/client';
import NavMenuMobile from './NavMenuMobile';
import UserMenuMobile from './UserMenuMobile';
import UserMenuDesktop from './UserMenuDesktop';
import { useAuthContext } from '../utils/auth';
import AutoLogo from '../assets/images/autocomplete.png';

import {
  AppBar,
  Toolbar,
  Button,
  Container,
  useMediaQuery,
  IconButton,
} from '@material-ui/core';
import { useNavStyles } from '../assets/styles/muiStyles';
import { useTheme } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const NavBar = () => {
  const { user, logoutUser } = useAuthContext();
  const [searchOpen, setSearchOpen] = useState(false);
  const client = useApolloClient();
  const classes = useNavStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const handleLogout = () => {
    logoutUser();
    client.resetStore();
  };

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={1}
      className={classes.appBar}
    >
      <Toolbar variant="dense" disableGutters={isMobile}>
        {!searchOpen && (
          <Container disableGutters className={classes.contentContainer}>
            <div className={classes.leftPortion}>
              <div className={classes.logoWrapper}>
                {isMobile && <NavMenuMobile />}
                {isMobile ? (
                  <IconButton
                    className={classes.logo}
                    component={RouterLink}
                    to="/"
                  >
                    <img src={AutoLogo} width="25px" alt="autologo" />
                  </IconButton>
                ) : (
                  <Button
                    className={classes.logo}
                    component={RouterLink}
                    to="/"
                    size="large"
                  >
                    <img
                      src={AutoLogo}
                      width="28px"
                      alt="autologo"
                      style={{ marginRight: '5px' }}
                    />
                    Stack<strong>AutoComplete</strong>
                  </Button>
                )}
              </div>
            </div>
            {isMobile ? (
              <>
                <IconButton
                  color="primary"
                  className={classes.searchBtn}
                  onClick={() => setSearchOpen((prevState) => !prevState)}
                >
                  <SearchIcon />
                </IconButton>
                <UserMenuMobile user={user} logoutUser={handleLogout} />
              </>
            ) : (
              <>
                <UserMenuDesktop user={user} logoutUser={handleLogout} />
              </>
            )}
          </Container>
        )}

      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
