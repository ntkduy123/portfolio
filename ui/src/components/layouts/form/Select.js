import React, { Component } from "react";

class Select extends Component {
  handleInputChange = e => {
    const { handleChange, name } = this.props;

    const target = e.target;
    const value = target.value;

    handleChange(name, { id: value });
  };

  render() {
    const { value, name, options } = this.props;
    console.log(value)
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
    );
  }
}

export default Select;
