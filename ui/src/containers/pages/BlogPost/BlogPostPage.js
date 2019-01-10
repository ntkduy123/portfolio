import { connect } from 'react-redux';

import BlogPostPage from '../../../components/pages/BlogPost/BlogPostPage';
import { getPostById } from '../../../actions/blogPost';

const mapStateToProps = ({ blogPost }) => blogPost

const mapDispatchToProps = {
  getPostById
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostPage);