import { connect } from 'react-redux'

import AdminBlogPage from '../../../../components/pages/Admin/Blog/AdminBlogPage'
import { getAllPost } from '../../../../actions/blog'

const mapStateToProps = ({ blog }) => blog

const mapDispatchToProps = {
  getAllPost
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminBlogPage)
