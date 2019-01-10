import {
  HOME_PAGE,
  RESUME_PAGE,
  BLOG_PAGE,
  BLOG_POST,
  PORTFOLIO_PAGE,
  NEW_POST
} from '../constants/navigation';

import Home from '../components/Home';
import Resume from '../components/Resume';
import Blog from '../containers/pages/Blog/BlogPage';
import Portfolio from '../components/Portfolio';
import WritePost from '../containers/pages/WritePost/WritePostPage';

const routes = [
  {
    state: HOME_PAGE,
    path: HOME_PAGE,
    component: Home,
    caption: 'Home'
  },
  {
    state: RESUME_PAGE,
    path: RESUME_PAGE,
    component: Resume,
    caption: 'Resume'
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
  },
  {
    state: NEW_POST,
    path: NEW_POST,
    component: WritePost,
    caption: 'Write post'
  },
];

export default routes;