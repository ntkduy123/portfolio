import { connect } from 'react-redux'

import BlogPage from '../../../components/pages/Blog/BlogPage'
import { getAllPost } from '../../../actions/blog'

const mapStateToProps = ({ blog }) => blog

const mapDispatchToProps = {
  getAllPost
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage)
