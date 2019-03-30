import {
  HOME_PAGE,
  RESUME_PAGE,
  BLOG_PAGE,
  PORTFOLIO_PAGE
} from '../constants/navigation'

import Home from '../components/Home'
import Resume from '../components/Resume'
import Blog from '../containers/pages/Blog/BlogPage'
import Portfolio from '../components/Portfolio'

const mainRoutes = [
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
  }
]

export default mainRoutes
