import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { formatDate } from '../../../../helpers/date'

class AdminBlogPage extends Component {
  componentDidMount() {
    const { getAllPost } = this.props
    getAllPost()
  }

  render() {
    const { postList } = this.props

    return (
      <section className="pt-page pt-page-5 pt-page-current" data-id="blog">
        <div className="section-title-block">
          <h2 className="section-title">Blog</h2>
          <h5 className="section-description">My Diary</h5>
        </div>
        <div className="blog-masonry" style={{ overflowX: 'auto' }}>
          <table className="admin-blog">
            <tbody>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Updated at</th>
                <th>Action</th>
              </tr>
              {
                postList.map(post => (
                  <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.author}</td>
                    <td>{post.postCategory.name}</td>
                    <td>{formatDate(post.updatedAt)}</td>
                    <td>
                      <Link to={`/admin/post/${post.id}`}><i className="fa fa-edit" /></Link>
                      <i className="fa fa-remove" />
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          <Link to="/admin/post/new" className="button edit-btn">New Post</Link>
        </div>
      </section>
    )
  }
}

AdminBlogPage.propTypes = {
  getAllPost: PropTypes.func.isRequired,
  postList: PropTypes.arrayOf(PropTypes.shape())
}

export default AdminBlogPage
