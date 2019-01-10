import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  const date = new Date(post.updatedAt);
  const day = date.getDate();
  const month = date.toLocaleString('en-us', { month: 'short' });

  return (
    <div className="item">
      <div className="blog-card">
        <div className="media-block">
          <Link to="/blog/1">
            <img
              className="post-image img-responsive"
              alt="blog-post-1"
              src={post.image}
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
              <Link to="/blog/1">{post.category.name}</Link>
            </li>
          </ul>
          <Link to="/blog/1">
            <h4 className="blog-item-title">{post.title}</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
