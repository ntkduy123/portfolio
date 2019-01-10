import React, { Component } from "react";
import { Editor } from "@tinymce/tinymce-react";

class TextEditor extends Component {

  handleInputChange = e => {
    const { handleChange, name } = this.props;

    const target = e.target;
    const value = target.getContent();

    handleChange(name, { id: value });
  };

  render() {
    const { value, name } = this.props
    return (
      <Editor
        init={{
          plugins: "link image code",
          height: "480",
          name: name,
          toolbar:
            "undo redo | bold italic | alignleft aligncenter alignright | code"
        }}
        name={name}
        value={value}
        onChange={this.handleInputChange}
      />
    );
  }
};

export default TextEditor;