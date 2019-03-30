import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Editor } from 'react-draft-wysiwyg'
import PropTypes from 'prop-types'
import { required, email } from '../../../../helpers/validator'
import Dropzone from './Dropzone'

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

const WritePostForm = ({
  handleSubmit,
  categories,
  content,
  postImages,
  handleContentChange,
  handleImageChange
}) => (
  <form onSubmit={handleSubmit}>
    <Field
      name="title"
      component={renderField}
      type="text"
      placeholder="Title"
      validate={[required]}
    />
    <Field
      name="author"
      component={renderField}
      type="text"
      placeholder="Author"
      validate={[required]}
    />
    <div className="controls">
      <div className="form-group">
        {/* eslint-disable-next-line */}
        <label>Images</label>
        <Dropzone handleImageChange={handleImageChange} postImages={postImages} />
      </div>
    </div>
    <div className="controls">
      <div className="form-group">
        {/* eslint-disable-next-line */}
        <label>Category</label>
        <Field
          name="postCategory"
          component="select"
          className="form-control"
          placeholder="Category"
        >
          {
            categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.description}
              </option>
            ))
          }
        </Field>
        <div className="form-control-border" />
        <div className="help-block with-errors" />
      </div>
    </div>
    <div className="controls">
      <div className="form-group">
        {/* eslint-disable-next-line */}
        <label>Content</label>
        <Editor
          name="cotent"
          editorState={content}
          wrapperClassName="form-control"
          onEditorStateChange={handleContentChange}
        />
      </div>
    </div>
    <button type="submit">Submit</button>
  </form>
)

WritePostForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape()),
  postImages: PropTypes.arrayOf(PropTypes.shape()),
  content: PropTypes.shape(),
  handleContentChange: PropTypes.func.isRequired,
  handleImageChange: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'writePost',
  enableReinitialize: true
})(WritePostForm)
