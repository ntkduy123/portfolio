import React from "react";

const Form = ({ children, handleSubmit, btnSubmitText }) => (
  <form id="contact-form">
    <div className="controls">
      {Array.isArray(children) ? (
        children.map((element, i) => (
          <div key={element.props.name} className="form-group">
            {element}
            <div className="form-control-border" />
            <i className={"form-control-icon fa " + element.props.icon} />
            <div className="help-block with-errors" />
          </div>
        ))
      ) : (
        <div className="form-group">
          {children}
          <div className="form-control-border" />
          <i className={"form-control-icon fa " + children.props.icon} />
          <div className="help-block with-errors" />
        </div>
      )}
    </div>
    <button onClick={handleSubmit} className="button btn-send">
      {btnSubmitText}
    </button>
  </form>
);

export default Form;
