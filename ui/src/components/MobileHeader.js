import React from "react";

const MobileHeader = ({ toggleHeader }) => (
  <div>
    <div className="mobile-header mobile-visible">
      <div className="mobile-logo-container">
        <div className="mobile-site-title">Alex Smith</div>
      </div>
      <a onClick={toggleHeader} className="menu-toggle mobile-visible">
        <i className="fa fa-bars" />
      </a>
    </div>
  </div>
);

export default MobileHeader;
