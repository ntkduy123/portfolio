import React, { Component } from 'react'
import { EditorState } from 'draft-js'
import PropTypes from 'prop-types'
import { stateToHTML } from 'draft-js-export-html'
import WritePostForm from './WritePostForm'

class WritePostPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: '',
      content: EditorState.createEmpty()
    }
  }

  componentDidMount() {
    const { getAllCategory } = this.props
    getAllCategory()
  }

  handleContentChange = (content) => {
    this.setState({
      content
    })
  }

  handleImageChange = (e) => {
    const image = e.target.files[0]
    this.setState({
      image
    })
  }

  handleSubmit = (values) => {
    this.addPost(values)
    this.uploadImage()
  }

  addPost = (post) => {
    const { content } = this.state
    const { addPost } = this.props
    const postContent = stateToHTML(content.getCurrentContent())
    addPost({
      ...post,
      image: '',
      category: {
        id: post.category
      },
      content: postContent
    })
  };

  uploadImage = () => {
    const { uploadPostImage, postId } = this.props
    const { image } = this.state

    const formData = new FormData()
    formData.append('postId', postId)
    formData.append('file', image)
    uploadPostImage(formData)
  }

  render() {
    const { categories } = this.props
    const { content, image } = this.state
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
              image={image}
              categories={categories}
              onSubmit={this.handleSubmit}
            />
          </div>
        </div>
      </section>
    )
  }
}

WritePostPage.propTypes = {
  getAllCategory: PropTypes.func.isRequired,
  uploadPostImage: PropTypes.func.isRequired,
  addPost: PropTypes.func.isRequired,
  postId: PropTypes.number.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape())
}

export default WritePostPage
