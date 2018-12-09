import React from "react";
import { Link } from "react-router-dom";

import routes from "../routing/routes";

const Navigation = ({ routeName }) => (
  <div className="site-nav">
    <ul className="site-main-menu" id="nav">
      {routes.map(route => (
        <li key={route.path} className={routeName === route.path ? "active" : ""}>
          <Link
            className="pt-trigger"
            to={route.path}
            data-goto={1}
            data-animation={58}
          >
            {route.caption}
          </Link>
        </li>
      ))}
    </ul>
    <ul className="social-links">
      <li>
        <a title="Twitter" className="tip social-button" href="#">
          <i className="fa fa-twitter" />
        </a>
      </li>
      <li>
        <a title="Facebook" className="tip social-button" href="#">
          <i className="fa fa-facebook" />
        </a>
      </li>
      <li>
        <a title="Google Plus" className="tip social-button" href="#">
          <i className="fa fa-google-plus" />
        </a>
      </li>
    </ul>
  </div>
);

export default Navigation;
