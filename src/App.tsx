
import * as React from 'react';
import { hot } from "react-hot-loader/root";
import PageHome from './components/pages/home/PageHome';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageUser from './components/pages/PageUser';
import UILayoutHome from './components/ui/layout/UILayoutHome';
import AppHeader from './components/layout/AppHeader';
import AppMenu from './components/layout/menu/AppMenu';
import PageCharts from './components/pages/charts/PageCharts';
import { useRoutesStore } from '@Store/providers';

const App = () => {
  const routes = useRoutesStore();
  return (
    <Router>
      <UILayoutHome
        header={<AppHeader />}
        menu={<AppMenu />}
        footer={null}
      >
        <Switch>
          <Route exact={true} path={routes.home}>
            <PageHome />
          </Route>
          <Route path={routes.charts}>
            <PageCharts />
          </Route>
          <Route path={`${routes.user}:id`}>
            <PageUser />
          </Route>
        </Switch>
      </UILayoutHome>
    </Router>
  );
}

export default hot(App);
