import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Input extends Component {
  handleInputChange = (e) => {
    const { handleChange, name, type } = this.props

    const target = e.target
    const value = type !== 'file' ? target.value : target.files

    handleChange(name, value)
  };

  render() {
    const {
      value,
      name,
      type,
      placeholder
    } = this.props

    return (
      <input
        value={type !== 'file' ? value : value.name}
        name={name}
        className="form-control"
        type={type}
        placeholder={placeholder}
        onChange={this.handleInputChange}
      />
    )
  }
}

Input.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
}

export default Input
