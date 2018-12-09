import React, { Component } from "react";

import { Routes } from '../../routing';

import Header from '../Header';
import MobileHeader from '../MobileHeader';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      headerOpen: false
    }
    this.onRouteChange(props);
  }

  componentWillReceiveProps(nextProps) {
    const { routeName } = this.props;
    const { pathname: nextRouteName } = nextProps.location;
    if (routeName !== nextRouteName) {
      this.props.changeRoute(nextRouteName);
    }
  }

  onRouteChange = ({ location: { pathname: routeName } }) => {
    this.props.changeRoute(routeName);
  }

  toggleHeader = () => {
    this.setState(prevState => ({
      headerOpen: !prevState.headerOpen
    }));
  }

  render() {
    return (
      <div id="page" className="page">
        <div className="preloader" style={{ display: "none" }}>
          <div className="preloader-animation">
            <div className="dot1" />
            <div className="dot2" />
          </div>
        </div>
        <Header routeName={this.props.routeName} headerOpen={this.state.headerOpen} />
        <MobileHeader toggleHeader={this.toggleHeader} />
        <div className="site-main" id="main">
          <div className="pt-wrapper">
            <div className="subpages">
              <Routes />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;