import React from 'react'
import PropTypes from 'prop-types'
import Navigation from './Navigation'
import AdminNavigation from './pages/Admin/AdminNavigation'

import myPhoto from '../static/images/my_photo.png'

const Header = ({
  headerOpen,
  routeName,
  toggleHeader,
  isAdmin,
  logOut
}) => (
  <header className={`header ${!headerOpen ? 'mobile-menu-hide' : ''}`} id="site_header">
    <div className="my-photo">
      <img alt="404" src={myPhoto} />
      <div className="mask" />
    </div>
    <div className="site-title-block">
      <h1 className="site-title">Duy Nguyen</h1>
      <p className="site-description">Software Engineer</p>
    </div>
    {
      isAdmin ? (
        <AdminNavigation logOut={logOut} toggleHeader={toggleHeader} routeName={routeName} />
      ) : (
        <Navigation toggleHeader={toggleHeader} routeName={routeName} />
      )
    }
  </header>
)

Header.propTypes = {
  headerOpen: PropTypes.bool.isRequired,
  routeName: PropTypes.string.isRequired,
  toggleHeader: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  logOut: PropTypes.func.isRequired
}

export default Header
