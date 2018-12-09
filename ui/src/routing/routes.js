import {
  HOME_PAGE,
  BLOG_PAGE,
  PORTFOLIO_PAGE
} from '../constants/navigation';

import Home from '../components/Home';
import Blog from '../components/Blog';
import Portfolio from '../components/Portfolio';

const routes = [
  {
    state: HOME_PAGE,
    path: HOME_PAGE,
    component: Home,
    caption: 'Home'
  },
  {
    state: BLOG_PAGE,
    path: BLOG_PAGE,
    component: Blog,
    caption: 'Blog'
  },
  {
    state: PORTFOLIO_PAGE,
    path: PORTFOLIO_PAGE,
    component: Portfolio,
    caption: 'Portfolio'
  }
];

export default routes;