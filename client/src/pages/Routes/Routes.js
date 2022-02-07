import { Switch, Route, Redirect } from 'react-router-dom';
import NavMenuDesktop from '../../components/Navigation/NavMenuDesktop';
import RightSidePanel from '../../components/RightPanel/RightSidePanel';
import QuesListPage from '../Questions/QuesListPage';
import AllTagsPage from '../Tags/AllTagsPage';
import AllUsersPage from '../Users/AllUsersPage';
import QuestionPage from '../Questions/QuestionPage';
import AskQuestionPage from '../Questions/AskQuestionPage';
import UserPage from '../Users/UserPage';
import NotFoundPage from '../OnErrors/NotFoundPage';
import { useAuthContext } from '../../utils/context/auth';

import { Container, Grid } from '@material-ui/core';

const Routes = () => {
  const { user } = useAuthContext();

  return (
    <Container disableGutters>
      <Grid container direction="row" wrap="nowrap" justify="space-between">
        <Switch>
          <Route exact path="/">
            <NavMenuDesktop />
            <QuesListPage />
            <RightSidePanel />
          </Route>
          <Route exact path="/ask">
            {user ? (
              <>
                <NavMenuDesktop />
                <AskQuestionPage />
                <RightSidePanel />
              </>
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route exact path="/tags">
            <NavMenuDesktop />
            <AllTagsPage />
          </Route>
          <Route exact path="/users">
            <NavMenuDesktop />
            <AllUsersPage />
          </Route>
          <Route exact path="/user/:username">
            <NavMenuDesktop />
            <UserPage />
          </Route>
          <Route exact path="/questions/:quesId">
            <NavMenuDesktop />
            <QuestionPage />
          </Route>
          <Route exact path="/tags/:tagName">
            <NavMenuDesktop />
            <QuesListPage tagFilterActive={true} />
            <RightSidePanel />
          </Route>
          <Route exact path="/search/:query">
            <NavMenuDesktop />
            <QuesListPage searchFilterActive={true} />
            <RightSidePanel />
          </Route>
          <Route>
            <NavMenuDesktop />
            <NotFoundPage />
            <RightSidePanel />
          </Route>
        </Switch>
      </Grid>
    </Container>
  );
};

export default Routes;
