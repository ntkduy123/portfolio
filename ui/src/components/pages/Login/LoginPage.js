import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import LoginForm from './LoginForm'
import { isLogin } from '../../../helpers/user'
import LoadingOverlay from '../../layouts/LoadingOverlay'

import { ADMIN_BLOG } from '../../../constants/navigation'

class LoginPage extends Component {
  onLogin = (user) => {
    const { logIn } = this.props
    logIn(user)
  }

  render() {
    const { loading } = this.props

    if (isLogin()) {
      return (
        <Redirect to={
          {
            pathname: ADMIN_BLOG,
            state: { redirect: true }
          }
        }
        />
      )
    }

    return (
      <section className="login-page">
        {
          loading ? <LoadingOverlay /> : ''
        }
        <LoginForm
          onSubmit={this.onLogin}
        />
      </section>
    )
  }
}

LoginPage.propTypes = {
  logIn: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
}

export default LoginPage
