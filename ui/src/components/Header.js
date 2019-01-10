import React from "react";
import Navigation from './Navigation';

import myPhoto from "../static/images/my_photo.png";

const Header = ({ headerOpen, routeName, toggleHeader }) => (
  <header className={"header " + (!headerOpen ? "mobile-menu-hide" : "")} id="site_header">
    <div className="my-photo">
      <img alt="image" src={myPhoto} />
      <div className="mask" />
    </div>
    <div className="site-title-block">
      <h1 className="site-title">Duy Nguyen</h1>
      <p className="site-description">Software Engineer</p>
    </div>
    <Navigation toggleHeader={toggleHeader} routeName={routeName} />
  </header>
);

export default Header;
