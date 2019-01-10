import React, { Component } from "react";
import BlogPostFull2 from "../../../static/images/blog_post_2_full.jpg";

class BlogPost extends Component {

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getPostById(id)
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
              <a>HTML5</a>
            </li>
            <li>
              <a>CSS3</a>
            </li>
            <li>
              <a>jQuery</a>
            </li>
            <li>
              <a>Ajax</a>
            </li>
            <li>
              <a>PHP5</a>
            </li>
          </ul>
          <p>
            {post.content}
          </p>
          <div className="post-info">
            <span className="autor">
              <i className="fa fa-fw fa-user" /> John Doe
            </span>
            <span className="divider">|</span>
            <span className="date">
              <i className="fa fa-fw fa-clock-o" /> {formattedDate}
            </span>
            {/* Share Buttons */}
            <div className="btn-group share-buttons pull-right hidden-xs">
              <a className="btn" href="#" target="_blank">
                <i className="fa fa-facebook" />{" "}
              </a>
              <a className="btn" href="#" target="_blank">
                <i className="fa fa-twitter" />{" "}
              </a>
              <a className="btn" href="#" target="_blank">
                <i className="fa fa-dribbble" />{" "}
              </a>
            </div>
            {/* /Share Buttons */}
          </div>
        </div>
      </div>
    );
  }
}

export default BlogPost;
