import React from "react";

const NewPost = () => (
  <section className="pt-page pt-page-6 pt-page-current" data-id="contact">
    <div className="section-title-block">
      <h2 className="section-title">Post</h2>
      <h5 className="section-description">Write your article</h5>
    </div>
    <div className="row">
      <div className="col-sm-12 col-md-12 subpage-block">
        <div className="block-title">
          <h3>New Post Form</h3>
        </div>
        <form
          id="contact-form"
          action="#"
          method="post"
          noValidate="true"
        >
          <div className="messages" />
          <div className="controls">
            <div className="form-group">
              <input
                name="name"
                className="form-control"
                id="form_name"
                required="required"
                type="text"
                placeholder="Full Name"
                data-error="Name is required."
              />
              <div className="form-control-border" />
              <i className="form-control-icon fa fa-user" />
              <div className="help-block with-errors" />
            </div>
            <div className="form-group">
              <input
                name="email"
                className="form-control"
                id="form_email"
                required="required"
                type="email"
                placeholder="Email Address"
                data-error="Valid email is required."
              />
              <div className="form-control-border" />
              <i className="form-control-icon fa fa-envelope" />
              <div className="help-block with-errors" />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                className="form-control"
                id="form_message"
                required="required"
                placeholder="Message for me"
                rows={4}
                data-error="Please, leave me a message."
                defaultValue={""}
              />
              <div className="form-control-border" />
              <i className="form-control-icon fa fa-comment" />
              <div className="help-block with-errors" />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                className="form-control"
                id="form_message"
                required="required"
                placeholder="Message for me"
                rows={4}
                data-error="Please, leave me a message."
                defaultValue={""}
              />
              <div className="form-control-border" />
              <i className="form-control-icon fa fa-comment" />
              <div className="help-block with-errors" />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                className="form-control"
                id="form_message"
                required="required"
                placeholder="Message for me"
                rows={4}
                data-error="Please, leave me a message."
                defaultValue={""}
              />
              <div className="form-control-border" />
              <i className="form-control-icon fa fa-comment" />
              <div className="help-block with-errors" />
            </div>
            <input
              className="button btn-send disabled"
              type="submit"
              defaultValue="Send message"
            />
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default NewPost;