import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from './routes';

export const Routes = () => (
  <Switch>
    {
      routes.map(
        route => <Route key={route.state} exact path={route.path} component={route.component} />
      )
    }
  </Switch>
);
