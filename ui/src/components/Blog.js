import React from "react";
import { Link } from "react-router-dom";

import blogPost1 from '../static/images/blog_post_1.jpg';
import blogPost2 from '../static/images/blog_post_2.jpg';
import blogPost3 from '../static/images/blog_post_3.jpg';
import blogPost4 from '../static/images/blog_post_4.jpg';
import blogPost5 from '../static/images/blog_post_5.jpg';
import blogPost6 from '../static/images/blog_post_6.jpg';
import blogPost7 from '../static/images/blog_post_7.jpg';
import blogPost8 from '../static/images/blog_post_8.jpg';

const Blog = () => (
  <section className="pt-page pt-page-5 pt-page-current" data-id="blog">
    <div className="section-title-block">
      <h2 className="section-title">Blog</h2>
      <h5 className="section-description">My Diary</h5>
    </div>
    <div
      className="blog-masonry"
    >
      <div
        className="item"
      >
        <div className="blog-card">
          <div className="media-block">
            <Link to="/blog/1">
              <img
                className="post-image img-responsive"
                alt="blog-post-1"
                src={blogPost1}
              />
              <div className="mask">
                <i className="fa fa-newspaper-o"></i>
              </div>
              <div className="post-date">
                <span className="day">6</span>
                <span className="month">Dec</span>
              </div>
            </Link>
          </div>
          <div className="post-info">
            <ul className="category">
              <li>
                <Link to="/blog/1">Travel</Link>
              </li>
            </ul>
            <Link to="/blog/1">
              <h4 className="blog-item-title">
                Bootstrap is the Most Popular Framework
              </h4>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="item"
      >
        <div className="blog-card">
          <div className="media-block">
            <a href="blog-post-1.html">
              <img
                className="post-image img-responsive"
                alt="blog-post-2"
                src={blogPost2}
              />
              <div className="mask">
                <i className="fa fa-newspaper-o"></i>
              </div>
              <div className="post-date">
                <span className="day">3</span>
                <span className="month">Nov</span>
              </div>
            </a>
          </div>
          <div className="post-info">
            <ul className="category">
              <li>
                <a href="#">jQuery</a>
              </li>
            </ul>
            <a href="blog-post-1.html">
              <h4 className="blog-item-title">One Framework, Every Device</h4>
            </a>
          </div>
        </div>
      </div>
      <div
        className="item"
      >
        <div className="blog-card">
          <div className="media-block">
            <a href="blog-post-1.html">
              <img
                className="post-image img-responsive"
                alt="blog-post-3"
                src={blogPost3}
              />
              <div className="mask">
                <i className="fa fa-newspaper-o"></i>
              </div>
              <div className="post-date">
                <span className="day">12</span>
                <span className="month">Oct</span>
              </div>
            </a>
          </div>
          <div className="post-info">
            <ul className="category">
              <li>
                <a href="#">Sport</a>
              </li>
            </ul>
            <a href="blog-post-1.html">
              <h4 className="blog-item-title">
                Designed for Everyone, Everywhere
              </h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Blog;
