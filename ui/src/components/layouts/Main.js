import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { Routes } from '../../routing'

import Header from '../Header'
import MobileHeader from '../MobileHeader'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      headerOpen: false
    }
    this.onRouteChange(props)
  }

  componentWillReceiveProps(nextProps) {
    const { routeName, changeRoute } = this.props
    const { pathname: nextRouteName } = nextProps.location
    if (routeName !== nextRouteName) {
      changeRoute(nextRouteName)
    }
  }

  onRouteChange = ({ location: { pathname: routeName } }) => {
    const { changeRoute } = this.props
    changeRoute(routeName)
  };

  toggleHeader = () => {
    this.setState(prevState => ({
      headerOpen: !prevState.headerOpen
    }))
  };

  render() {
    const { routeName } = this.props
    const { headerOpen } = this.state

    return (
      <div id="page" className="page">
        <div className="preloader" style={{ display: 'none' }}>
          <div className="preloader-animation">
            <div className="dot1" />
            <div className="dot2" />
          </div>
        </div>
        <Header
          routeName={routeName}
          headerOpen={headerOpen}
          toggleHeader={this.toggleHeader}
        />
        <MobileHeader toggleHeader={this.toggleHeader} />
        <div className="site-main" id="main">
          <div className="pt-wrapper">
            <div className="subpages">
              <Routes />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Main.propTypes = {
  routeName: PropTypes.string.isRequired,
  changeRoute: PropTypes.func.isRequired,
  location: PropTypes.shape()
}

export default Main
