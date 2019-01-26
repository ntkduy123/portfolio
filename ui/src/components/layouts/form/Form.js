import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Form extends Component {
  getElements = () => {
    const { children } = this.props
    return Array.isArray(children) ? children : [children]
  }

  validateElement = (validations) => {
    Object.keys(validations).forEach((element) => {
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    const { handleSubmit } = this.props

    handleSubmit()
  };

  render() {
    const { btnSubmitText } = this.props
    const elements = this.getElements()
    return (
      <form>
        <div className="controls">
          {elements.map((element, i) => (
            <div key={element.props.name} className="form-group">
              {element}
              <div className="form-control-border" />
              <i className={`form-control-icon fa ${element.props.icon}`} />
              <div className="help-block with-errors" />
            </div>
          ))}
        </div>
        <button type="button" onClick={this.handleFormSubmit} className="button btn-send">
          {btnSubmitText}
        </button>
      </form>
    )
  }
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.shape()),
  btnSubmitText: PropTypes.string.isRequired
}

export default Form
