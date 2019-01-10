import React, { Component } from "react";

class Input extends Component {
  handleInputChange = e => {
    const { handleChange, name } = this.props

    const target = e.target;
    const value = target.value;

    handleChange(name, value);
  };

  render() {
    const { value, name, type, placeholder } = this.props;
    return (
      <input
        value={value}
        name={name}
        className="form-control"
        type={type}
        placeholder={placeholder}
        onChange={this.handleInputChange}
      />
    );
  }
}

export default Input;
