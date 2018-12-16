import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from './routes';
import BlogPost from '../components/BlogPost';

export const Routes = () => (
  <Switch>
    {
      routes.map(
        route => <Route key={route.state} exact path={route.path} component={route.component} />
      )
    }
    <Route exact path="/blog/:id" component={BlogPost} />
  </Switch>
);
