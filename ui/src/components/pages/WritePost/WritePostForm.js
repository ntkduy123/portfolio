import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Editor } from 'react-draft-wysiwyg'
import PropTypes from 'prop-types'
import { required, email } from '../../../helpers/validator'

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div className="controls">
    <div className="form-group">
      <input className="form-control" {...input} placeholder={label} type={type} />
      <div className="form-control-border" />
      <i className="form-control-icon fa fa-header" />
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
        <input
          name="image"
          component="input"
          type="file"
          className="form-control"
          placeholder="Image"
          onChange={handleImageChange}
        />
        <div className="form-control-border" />
        <i className="form-control-icon fa fa-picture-o" />
        <div className="help-block with-errors" />
      </div>
    </div>
    <div className="controls">
      <div className="form-group">
        <Field
          name="category"
          component="select"
          className="form-control"
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
        <Editor
          name="cotent"
          initialEditorState={content}
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
  content: PropTypes.shape(),
  handleContentChange: PropTypes.func.isRequired,
  handleImageChange: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'writePost'
})(WritePostForm)
