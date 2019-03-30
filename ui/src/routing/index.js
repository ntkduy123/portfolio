import React from 'react'
import { Switch, Route } from 'react-router-dom'

import routes from './routes'
import BlogPostPage from '../containers/pages/BlogPost/BlogPostPage'
import WritePostPage from '../containers/pages/Admin/WritePost/WritePostPage'

export const Routes = () => (
  <Switch>
    {
      routes.map(
        route => <Route key={route.state} exact path={route.path} component={route.component} />
      )
    }
    <Route exact path="/blog/:id" component={BlogPostPage} />
    <Route exact path="/admin/post/new" component={WritePostPage} />
    <Route exact path="/admin/post/:id" component={WritePostPage} />
  </Switch>
)
