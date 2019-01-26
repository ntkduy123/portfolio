import React, { Component } from 'react'
import { EditorState } from 'draft-js'
import PropTypes from 'prop-types'
import Form from '../../layouts/form/Form'
import Input from '../../layouts/form/Input'
import Select from '../../layouts/form/Select'
import TextEditor from '../../layouts/form/Editor'

class WritePostPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      author: '',
      image: '',
      category: {
        id: '1'
      },
      content: EditorState.createEmpty()
    }
  }

  componentDidMount() {
    const { getAllCategory } = this.props
    getAllCategory()
  }

  handleChange = (name, value) => {
    this.setState({
      [name]: value
    })
  };

  addPost = (e) => {
    const { addPost, uploadPostImage, postId } = this.props
    const {
      title, author, image, category, content
    } = this.state

    addPost({
      title,
      author,
      category,
      content,
      image: ''
    })

    const formData = new FormData()
    formData.append('postId', postId)
    formData.append('file', image[0])

    uploadPostImage(formData)
  };

  render() {
    const { categories } = this.props
    const {
      title,
      author,
      image,
      category,
      content
    } = this.state
    return (
      <section className="pt-page pt-page-6 pt-page-current" data-id="contact">
        <div className="section-title-block">
          <h2 className="section-title">Post</h2>
          <h5 className="section-description">Write your article</h5>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 subpage-block">
            <div className="block-title">
              <h3>New Post Form</h3>
            </div>
            <Form handleSubmit={this.addPost} btnSubmitText="Add new post">
              <Input
                value={title}
                handleChange={this.handleChange}
                name="title"
                type="text"
                placeholder="Title"
                icon="fa-header"
                validations={{
                  isNotEmpty: true
                }}
              />
              <Input
                value={author}
                handleChange={this.handleChange}
                name="author"
                type="text"
                placeholder="Author"
                icon="fa-user"
                validations={{
                  isNotEmpty: true
                }}
              />
              <Input
                value={image}
                handleChange={this.handleChange}
                name="image"
                type="file"
                placeholder="Image"
                icon="fa-picture-o"
                validations={{
                  isNotEmpty: true
                }}
              />
              <Select
                value={category}
                handleChange={this.handleChange}
                name="category"
                options={categories}
              />
              <TextEditor
                name="content"
                value={content}
                handleChange={this.handleChange}
              />
            </Form>
          </div>
        </div>
      </section>
    )
  }
}

WritePostPage.propTypes = {
  getAllCategory: PropTypes.func.isRequired,
  addPost: PropTypes.func.isRequired,
  uploadPostImage: PropTypes.func.isRequired,
  postId: PropTypes.number.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape())
}

export default WritePostPage
