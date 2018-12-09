import React from "react";

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
            <a href="blog-post-1.html">
              <img
                className="post-image img-responsive"
                alt="blog-post-1"
                src={blogPost1}
              />
              <div className="mask" />
              <div className="post-date">
                <span className="day">6</span>
                <span className="month">Dec</span>
              </div>
            </a>
          </div>
          <div className="post-info">
            <ul className="category">
              <li>
                <a href="#">Travel</a>
              </li>
            </ul>
            <a href="blog-post-1.html">
              <h4 className="blog-item-title">
                Bootstrap is the Most Popular Framework
              </h4>
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
                alt="blog-post-2"
                src={blogPost2}
              />
              <div className="mask" />
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
              <div className="mask" />
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
      <div
        className="item"
      >
        <div className="blog-card">
          <div className="media-block">
            <a href="blog-post-1.html">
              <img
                className="post-image img-responsive"
                alt="blog-post-4"
                src={blogPost4}
              />
              <div className="mask" />
              <div className="post-date">
                <span className="day">18</span>
                <span className="month">Aug</span>
              </div>
            </a>
          </div>
          <div className="post-info">
            <ul className="category">
              <li>
                <a href="#">CSS</a>
              </li>
            </ul>
            <a href="blog-post-1.html">
              <h4 className="blog-item-title">An Introduction To PostCSS</h4>
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
                alt="blog-post-5"
                src={blogPost5}
              />
              <div className="mask" />
              <div className="post-date">
                <span className="day">2</span>
                <span className="month">Jul</span>
              </div>
            </a>
          </div>
          <div className="post-info">
            <ul className="category">
              <li>
                <a href="#">CSS3</a>
              </li>
            </ul>
            <a href="blog-post-1.html">
              <h4 className="blog-item-title">
                Original and Innovative Web Layouts
              </h4>
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
                alt="blog-post-6"
                src={blogPost6}
              />
              <div className="mask" />
              <div className="post-date">
                <span className="day">8</span>
                <span className="month">May</span>
              </div>
            </a>
          </div>
          <div className="post-info">
            <ul className="category">
              <li>
                <a href="#">HTML5</a>
              </li>
            </ul>
            <a href="blog-post-1.html">
              <h4 className="blog-item-title">
                Creative and Innovative Navigation Designs
              </h4>
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
                alt="blog-post-7"
                src={blogPost7}
              />
              <div className="mask" />
              <div className="post-date">
                <span className="day">7</span>
                <span className="month">Apr</span>
              </div>
            </a>
          </div>
          <div className="post-info">
            <ul className="category">
              <li>
                <a href="#">Design</a>
              </li>
            </ul>
            <a href="blog-post-1.html">
              <h4 className="blog-item-title">Navigation for Mega-Sites</h4>
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
                alt="blog-post-8"
                src={blogPost8}
              />
              <div className="mask" />
              <div className="post-date">
                <span className="day">21</span>
                <span className="month">Mar</span>
              </div>
            </a>
          </div>
          <div className="post-info">
            <ul className="category">
              <li>
                <a href="#">CSS3</a>
              </li>
            </ul>
            <a href="blog-post-1.html">
              <h4 className="blog-item-title">
                Front-End Challenge Accepted: CSS 3D Cube
              </h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Blog;
