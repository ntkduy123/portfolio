import React, { Component } from 'react'
import { Editor } from 'react-draft-wysiwyg'
import { stateToHTML } from 'draft-js-export-html'

import PropTypes from 'prop-types'

class TextEditor extends Component {
  handleInputChange = (editorState) => {
    const value = stateToHTML(editorState.getCurrentContent())
    const { handleChange, name } = this.props
    handleChange(name, value)
  };

  render() {
    const { name, value } = this.props
    return (
      <Editor
        name={name}
        initialEditorState={value}
        wrapperClassName="form-control"
        onEditorStateChange={this.handleInputChange}
      />
    )
  }
}

TextEditor.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.shape()
}

export default TextEditor
