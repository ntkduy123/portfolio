import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BlogPostFull2 from '../../../static/images/blog_post_2_full.jpg'

class BlogPost extends Component {
  componentDidMount() {
    const { match, getPostById } = this.props
    const { id } = match.params
    getPostById(id)
  }

  render() {
    const { post } = this.props

    const date = new Date(post.updatedAt)
    const day = date.getDate()
    const month = date.toLocaleString('en-us', { month: 'long' })
    const year = date.getFullYear()
    const formattedDate = `${day} ${month}, ${year}`

    return (
      <div className="page-wrapper">
        <a className="blog-back-button" href="index.html#blog">
          <i className="fa fa-angle-left" />
        </a>
        <div className="blog-post-main-image">
          <img
            className="post-image img-responsive"
            alt="blog-post-1"
            src={BlogPostFull2}
          />
        </div>
        <div className="blog-post-content">
          <h1>{post.title}</h1>
          <ul className="tags">
            <li>
              <Link to="/">HTML5</Link>
            </li>
            <li>
              <Link to="/">CSS3</Link>
            </li>
            <li>
              <Link to="/">jQuery</Link>
            </li>
            <li>
              <Link to="/">Ajax</Link>
            </li>
            <li>
              <Link to="/">PHP5</Link>
            </li>
          </ul>
          <p>
            {post.content}
          </p>
          <div className="post-info">
            {/* <span className="autor">
              <i className="fa fa-fw fa-user" />
              John Doe
            </span> */}
            <span className="divider">|</span>
            <span className="date">
              <i className="fa fa-fw fa-clock-o" />
              {formattedDate}
            </span>
            {/* Share Buttons */}
            <div className="btn-group share-buttons pull-right hidden-xs">
              <Link to="/" className="btn" target="_blank">
                <i className="fa fa-facebook" />
              </Link>
              <Link to="/" className="btn" target="_blank">
                <i className="fa fa-twitter" />
              </Link>
              <Link to="/" className="btn" target="_blank">
                <i className="fa fa-dribbble" />
              </Link>
            </div>
            {/* /Share Buttons */}
          </div>
        </div>
      </div>
    )
  }
}

BlogPost.propTypes = {
  getPostById: PropTypes.func.isRequired,
  post: PropTypes.shape(),
  match: PropTypes.shape()
}

export default BlogPost
