import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import adminRoutes from '../../../routing/adminRoutes'

const AdminNavigation = ({ routeName, toggleHeader, logOut }) => (
  <div className="site-nav">
    <ul className="site-main-menu" id="nav">
      {adminRoutes.map(route => (
        <li key={route.path} className={routeName === route.path ? 'active' : ''}>
          <Link
            className="pt-trigger"
            to={route.path}
            data-goto={1}
            data-animation={58}
            onClick={toggleHeader}
          >
            {route.caption}
          </Link>
        </li>
      ))}
      <li><a onClick={logOut} className="pt-trigger" data-goto="1" data-animation="58" href="/admin">Logout</a></li>
    </ul>
    <ul className="social-links">
      <li>
        <Link to="/" title="Twitter" className="tip social-button">
          <i className="fa fa-twitter" />
        </Link>
      </li>
      <li>
        <Link to="/" title="Facebook" className="tip social-button">
          <i className="fa fa-facebook" />
        </Link>
      </li>
      <li>
        <Link to="/" title="Google Plus" className="tip social-button">
          <i className="fa fa-google-plus" />
        </Link>
      </li>
    </ul>
  </div>
)

AdminNavigation.propTypes = {
  routeName: PropTypes.string.isRequired,
  toggleHeader: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired
}

export default AdminNavigation
