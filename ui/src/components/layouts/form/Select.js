import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Select extends Component {
  handleInputChange = (e) => {
    const { handleChange, name } = this.props

    const target = e.target
    const value = target.value

    handleChange(name, { id: value })
  };

  render() {
    const { value, name, options } = this.props
    return (
      <select
        value={value.id}
        name={name}
        className="form-control"
        onChange={this.handleInputChange}
      >
        {options.map(option => (
          <option key={option.id} value={option.id}>
            {option.description}
          </option>
        ))}
      </select>
    )
  }
}

Select.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.shape(),
  options: PropTypes.arrayOf(PropTypes.shape())
}

export default Select
