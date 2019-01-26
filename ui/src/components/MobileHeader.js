import React from 'react'
import PropTypes from 'prop-types'

const MobileHeader = ({ toggleHeader }) => (
  <div>
    <div className="mobile-header mobile-visible">
      <div className="mobile-logo-container">
        <div className="mobile-site-title">Duy Nguyen</div>
      </div>
      <button type="button" onClick={toggleHeader} className="menu-toggle mobile-visible">
        <i className="fa fa-bars" />
      </button>
    </div>
  </div>
)

MobileHeader.propTypes = {
  toggleHeader: PropTypes.func.isRequired
}

export default MobileHeader
