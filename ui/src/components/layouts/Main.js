import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { ToastContainer } from 'react-toastify'
import { Redirect } from 'react-router-dom'
import { Routes } from '../../routing'
import { isLogin } from '../../helpers/user'

import { LOGIN } from '../../constants/navigation'

import Header from '../Header'
import MobileHeader from '../MobileHeader'
import LoadingOverlay from './LoadingOverlay'


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
    const { routeName, loading, logOut } = this.props
    const { headerOpen } = this.state
    const isAdmin = routeName.includes('admin')

    if (isAdmin && !isLogin()) {
      return (
        <Redirect to={
          {
            pathname: LOGIN,
            state: { redirect: true }
          }
        }
        />
      )
    }

    return (
      <div id="page" className="page">
        <ToastContainer />
        {
          loading ? (
            <LoadingOverlay />
          ) : ''
        }
        <Header
          routeName={routeName}
          headerOpen={headerOpen}
          toggleHeader={this.toggleHeader}
          isAdmin={isAdmin}
          logOut={logOut}
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
  loading: PropTypes.bool.isRequired,
  routeName: PropTypes.string.isRequired,
  changeRoute: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  location: PropTypes.shape()
}

export default Main
