import React from 'react'
import { Field, reduxForm } from 'redux-form'
import PropTypes from 'prop-types'
import { required, email } from '../../../helpers/validator'

const renderField = ({
  input,
  placeholder,
  type,
  meta: { touched, error, warning }
}) => (
  <div className="controls">
    <div className="form-group">
      {/* eslint-disable-next-line jsx-a11y/label-has-for */}
      <label htmlFor={input.name}>{placeholder}</label>
      <input className="form-control" {...input} placeholder={placeholder} type={type} />
      <div className="form-control-border" />
      <div className="help-block with-errors">
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  </div>
)

const LoginForm = ({ handleSubmit }) => (
  <form className="login-form" onSubmit={handleSubmit}>
    <Field
      name="username"
      component={renderField}
      type="email"
      placeholder="Username"
      validate={[required, email]}
    />
    <Field
      name="password"
      component={renderField}
      type="password"
      placeholder="Password"
      validate={[required]}
    />
    <button className="login-btn" type="submit">Submit</button>
  </form>
)

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'login'
})(LoginForm)
