import React from 'react'

const BlogPostCommentAdd = () => (
  <div className="post-comment-add">
    <div className="block-title">
      <h3>Leave a Comment</h3>
    </div>
    <form className="form-add-comment">
      <div className="form-group">
        <input name="name" className="form-control" placeholder="Your name" />
        <div className="form-control-border" />
        <i className="form-control-icon fa fa-user" />
      </div>
      <div className="form-group">
        <textarea
          name="message"
          className="form-control"
          placeholder="Message..."
          defaultValue=""
        />
        <div className="form-control-border" />
        <i className="form-control-icon fa fa-comment" />
      </div>
      <button className="button" type="submit">Add comment</button>
    </form>
  </div>
)

export default BlogPostCommentAdd
