import React from "react";

const BlogPostCommentList = () => (
  <div className="post-comments">
    <div className="block-title">
      <h3>Comments (3)</h3>
    </div>
    <div className="media">
      <a className="pull-left" href="#">
        <img className="media-object" />
      </a>
      <div className="media-body">
        <div className="media-heading">
          <a href="#">John Doe</a> <span className="divider">|</span>{" "}
          <span className="light-gray">1 hour ago</span>
        </div>
        <p>
          Nam pellentesque laoreet augue sed facilisis. Suspendisse nec
          sollicitudin mauris. Integer fringilla a odio sit amet fermentum. Nunc
          nibh mauris, pretium eu risus et, finibus facilisis lorem.
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
            <img className="media-object" />
          </a>
          <div className="media-body">
            <div className="media-heading">
              <a href="#">Bryan Morris</a> <span className="divider">|</span>{" "}
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
            <img className="media-object" />
          </a>
          <div className="media-body">
            <div className="media-heading">
              <a href="#">John Doe</a> <span className="divider">|</span>{" "}
              <span className="light-gray">12 hours ago</span>
            </div>
            <p>
              Nulla tincidunt augue lacinia purus scelerisque fringilla. Donec
              venenatis volutpat lacus, ac efficitur ligula imperdiet id. Nunc
              gravida ullamcorper metus, ut gravida velit condimentum vel.
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
);

export default BlogPostCommentList;
