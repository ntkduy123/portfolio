import React, { Component } from 'react'
import { EditorState, ContentState, convertFromHTML } from 'draft-js'
import PropTypes from 'prop-types'
import { stateToHTML } from 'draft-js-export-html'
import WritePostForm from './WritePostForm'

class WritePostPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: EditorState.createEmpty()
    }
  }

  componentDidMount() {
    const {
      getAllPostCategory,
      getPostById,
      match,
      resetForm
    } = this.props
    const { id } = match.params
    getAllPostCategory()
    if (id) {
      getPostById(id)
    } else {
      resetForm()
    }
  }

  componentWillReceiveProps(nextProps) {
    const { post } = nextProps

    if (Object.keys(post).length && post.content) {
      this.handleContentChange(EditorState.createWithContent(
        ContentState.createFromBlockArray(
          convertFromHTML(post.content)
        )
      ))
    }
  }

  handleContentChange = (content) => {
    this.setState({
      content
    })
  }

  handleImageChange = (image) => {
    const { uploadPostImage } = this.props

    const formData = new FormData()
    formData.append('image', image)
    uploadPostImage(formData)
  }

  handleSubmit = (values) => {
    this.addPost(values)
  }

  addPost = (newPost) => {
    const { content } = this.state
    const { addPost, post } = this.props
    const { postImages } = post
    const postContent = stateToHTML(content.getCurrentContent())

    addPost({
      ...newPost,
      postCategory: {
        id: newPost.postCategory
      },
      postImages,
      content: postContent
    })
  }

  render() {
    const {
      postCategoryList,
      post
    } = this.props
    const { content } = this.state
    const { postImages } = post

    const initialValues = post.postCategory ? {
      ...post,
      postCategory: post.postCategory.id
    } : {}

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
            <WritePostForm
              handleContentChange={this.handleContentChange}
              content={content}
              handleImageChange={this.handleImageChange}
              categories={postCategoryList}
              postImages={postImages}
              onSubmit={this.handleSubmit}
              initialValues={initialValues}
            />
          </div>
        </div>
      </section>
    )
  }
}

WritePostPage.propTypes = {
  getPostById: PropTypes.func.isRequired,
  getAllPostCategory: PropTypes.func.isRequired,
  addPost: PropTypes.func.isRequired,
  uploadPostImage: PropTypes.func.isRequired,
  postCategoryList: PropTypes.arrayOf(PropTypes.shape()),
  match: PropTypes.shape(),
  resetForm: PropTypes.func.isRequired,
  post: PropTypes.shape()
}

export default WritePostPage
