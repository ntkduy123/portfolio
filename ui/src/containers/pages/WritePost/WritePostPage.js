import { connect } from 'react-redux'

import WritePostPage from '../../../components/pages/WritePost/WritePostPage'
import { getAllCategory, uploadPostImage, addPost } from '../../../actions/blog'

const mapStateToProps = ({ blog }) => blog

const mapDispatchToProps = {
  uploadPostImage,
  addPost,
  getAllCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(WritePostPage)
