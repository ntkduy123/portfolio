import React from "react";
import BlogPostFull2 from '../static/images/blog_post_2_full.jpg';
import CommentPhoto1 from '../static/images/comment_photo_1.png';
import CommentPhoto2 from '../static/images/comment_photo_2.png'; 

const BlogPost = () => (
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
      <h1>Bootstrap is the Most Popular HTML, CSS, and JS Framework</h1>
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
      <p className="lead">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a
        fringilla elit, eu mattis arcu. Curabitur augue augue, scelerisque sit
        amet varius eget, tristique at nisl. In euismod suscipit tristique.
        Nulla sollicitudin pretium massa sit amet tristique.
      </p>
      <p>
        Aenean porta quam quis tempus posuere. Integer tempor, elit in auctor
        scelerisque, arcu augue rhoncus mauris, et hendrerit sem tellus vitae
        eros. Nulla feugiat ultrices posuere. Nullam aliquet dolor orci.
        Curabitur tincidunt sem et libero dignissim, sed molestie felis
        ultricies. Phasellus malesuada tellus vitae eros bibendum, nec ultricies
        massa sollicitudin. Etiam justo neque, faucibus quis urna interdum,
        interdum rutrum massa. Mauris et velit ac dolor luctus fringilla.
        Integer in mattis dui, eget eleifend mauris. Fusce sagittis ipsum nec
        est finibus, vitae congue nunc elementum. Morbi imperdiet nisl sem, at
        commodo leo posuere a. Maecenas eu laoreet lorem. Aenean fringilla
        cursus augue, sed mollis dui.
      </p>
      <blockquote>
        <p>
          Vivamus volutpat auctor metus, venenatis ornare mi dictum sit amet.
          Aliquam erat volutpat.
        </p>
        <footer>
          Someone famous in <cite title="Source Title">Source Title</cite>
        </footer>
      </blockquote>
      <p>
        Praesent ac quam sed magna gravida interdum. Vivamus sed nunc lobortis,
        tempor ante ut, gravida nibh. Praesent sed euismod odio. Maecenas dui
        dui, euismod quis lobortis quis, dignissim ut eros. Curabitur cursus
        lacinia sollicitudin. Aenean vitae erat imperdiet, egestas nisi non,
        placerat sapien. In nec commodo justo. Nunc posuere lacinia neque eu
        malesuada. Sed lacus lacus, tincidunt id faucibus eget, sagittis sed
        enim. Nunc nec dapibus odio.
      </p>
      <div className="post-info">
        <span className="autor">
          <i className="fa fa-fw fa-user" /> John Doe
        </span>
        <span className="divider">|</span>
        <span className="date">
          <i className="fa fa-fw fa-clock-o" /> 12 December, 2016
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
      <div className="post-comments">
        <div className="block-title">
          <h3>Comments (3)</h3>
        </div>
        <div className="media">
          <a className="pull-left" href="#">
            <img
              className="media-object"
              src={CommentPhoto1}
            />
          </a>
          <div className="media-body">
            <div className="media-heading">
              <a href="#">John Doe</a> <span className="divider">|</span>{" "}
              <span className="light-gray">1 hour ago</span>
            </div>
            <p>
              Nam pellentesque laoreet augue sed facilisis. Suspendisse nec
              sollicitudin mauris. Integer fringilla a odio sit amet fermentum.
              Nunc nibh mauris, pretium eu risus et, finibus facilisis lorem.
            </p>
            <div className="media-footer">
              <a href="#">
                <i className="fa fa-reply" /> Reply
              </a>
              <span className="divider" />
              <i className="fa fa-thumbs-up" />
              <span>0</span>
              <i className="fa fa-thumbs-down" />
            </div>
            <div className="media">
              <a className="pull-left" href="#">
                <img
                  className="media-object"
                  src={CommentPhoto2}
                />
              </a>
              <div className="media-body">
                <div className="media-heading">
                  <a href="#">Bryan Morris</a>{" "}
                  <span className="divider">|</span>{" "}
                  <span className="light-gray">5 hours ago</span>
                </div>
                <p>
                  Donec fermentum elementum massa nec imperdiet. Quisque iaculis
                  accumsan elit eget porttitor.
                </p>
                <div className="media-footer">
                  <a href="#">
                    <i className="fa fa-reply" /> Reply
                  </a>
                  <span className="divider" />
                  <i className="fa fa-thumbs-up" />
                  <span>0</span>
                  <i className="fa fa-thumbs-down" />
                </div>
              </div>
            </div>
            <div className="media">
              <a className="pull-left" href="#">
                <img
                  className="media-object"
                  src={CommentPhoto1}
                />
              </a>
              <div className="media-body">
                <div className="media-heading">
                  <a href="#">John Doe</a> <span className="divider">|</span>{" "}
                  <span className="light-gray">12 hours ago</span>
                </div>
                <p>
                  Nulla tincidunt augue lacinia purus scelerisque fringilla.
                  Donec venenatis volutpat lacus, ac efficitur ligula imperdiet
                  id. Nunc gravida ullamcorper metus, ut gravida velit
                  condimentum vel.
                </p>
                <div className="media-footer">
                  <a href="#">
                    <i className="fa fa-reply" /> Reply
                  </a>
                  <span className="divider" />
                  <i className="fa fa-thumbs-up" />
                  <span>0</span>
                  <i className="fa fa-thumbs-down" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="post-comment-add">
        <div className="block-title">
          <h3>Leave a Comment</h3>
        </div>
        <form className="form-add-comment">
          <div className="form-group">
            <input
              name="name"
              className="form-control"
              placeholder="Your name"
            />
            <div className="form-control-border" />
            <i className="form-control-icon fa fa-user" />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              className="form-control"
              placeholder="Message..."
              defaultValue={""}
            />
            <div className="form-control-border" />
            <i className="form-control-icon fa fa-comment" />
          </div>
          <button className="button" type="submit">
            Add comment
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default BlogPost;