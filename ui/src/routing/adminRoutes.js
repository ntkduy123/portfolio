import {
  ADMIN_BLOG,
} from '../constants/navigation'

import AdminBlogPage from '../containers/pages/Admin/Blog/AdminBlogPage'

const adminRoutes = [
  {
    state: ADMIN_BLOG,
    path: ADMIN_BLOG,
    component: AdminBlogPage,
    caption: 'Blog'
  }
]

export default adminRoutes
