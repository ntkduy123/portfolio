import { connect } from 'react-redux'

import WritePostPage from '../../../../components/pages/Admin/WritePost/WritePostPage'
import { getAllPostCategory } from '../../../../actions/blog'
import {
  getPostById,
  uploadPostImage,
  addPost,
  resetForm
} from '../../../../actions/blogPost'

const mapStateToProps = ({ blog, blogPost }) => ({ postCategoryList: blog.postCategoryList, post: blogPost.post })

const mapDispatchToProps = {
  uploadPostImage,
  addPost,
  getAllPostCategory,
  getPostById,
  resetForm
}

export default connect(mapStateToProps, mapDispatchToProps)(WritePostPage)
