import { connect } from 'react-redux';

import WritePostPage from '../../../components/pages/WritePost/WritePostPage';
import { addPost } from '../../../actions/writePost';
import { getAllCategory } from '../../../actions/blog';

const mapStateToProps = ({ blog }) => blog

const mapDispatchToProps = {
  addPost,
  getAllCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(WritePostPage);