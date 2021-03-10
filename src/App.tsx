
import * as React from 'react';
import { hot } from "react-hot-loader/root";
import PageHome from './components/pages/home/PageHome';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageUser from './components/pages/PageUser';
import UILayoutHome from './components/ui/layout/UILayoutHome';
import AppHeader from './components/layout/AppHeader';

const App = () => {
  return (
    <Router>
      <UILayoutHome
        header={<AppHeader />}
        footer={null}
      >
        <Switch>
          <Route exact={true} path={store.routes.home}>
            <PageHome
              store={store.pages.home}
            />
          </Route>
          <Route path={`${store.routes.user}:id`}>
            <PageUser />
          </Route>
        </Switch>
      </UILayoutHome>
    </Router>
  );
}

export default hot(App);
