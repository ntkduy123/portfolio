import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const BlogCard = ({ post }) => {
  const { id } = post
  const date = new Date(post.updatedAt)
  const day = date.getDate()
  const month = date.toLocaleString('en-us', { month: 'short' })

  return (
    Object.keys(post).length ? (
      <div className="item">
        <div className="blog-card">
          <div className="media-block">
            <Link to={`/blog/${id}`}>
              <img
                className="post-image img-responsive"
                alt="blog-post-1"
                src={post.postImages[0].url}
              />
              <div className="mask">
                <i className="fa fa-newspaper-o" />
              </div>
              <div className="post-date">
                <span className="day">{day}</span>
                <span className="month">{month}</span>
              </div>
            </Link>
          </div>
          <div className="post-info">
            <ul className="category">
              <li>
                <Link to={`/blog/${id}`}>{post.postCategory.name}</Link>
              </li>
            </ul>
            <Link to={`/blog/${id}`}>
              <h4 className="blog-item-title">{post.title}</h4>
            </Link>
          </div>
        </div>
      </div>
    ) : ''
  )
}

BlogCard.propTypes = {
  post: PropTypes.shape()
}

export default BlogCard
