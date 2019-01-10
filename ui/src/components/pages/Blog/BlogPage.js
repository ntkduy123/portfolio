import React, { Component } from "react";

import BlogCard from './BlogCard';

class Blog extends Component {
  componentDidMount() {
    const { getAllPost } = this.props
    getAllPost();
  }

  render() {
    return (
      <section className="pt-page pt-page-5 pt-page-current" data-id="blog">
        <div className="section-title-block">
          <h2 className="section-title">Blog</h2>
          <h5 className="section-description">My Diary</h5>
        </div>
        <div className="blog-masonry">
          {
            this.props.posts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))
          }
        </div>
      </section>
    );
  }
}

export default Blog;
