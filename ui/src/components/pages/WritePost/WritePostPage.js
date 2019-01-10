import React, { Component } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Form from "../../layouts/form/Form";
import Input from "../../layouts/form/Input";
import Select from "../../layouts/form/Select";
import TextEditor from "../../layouts/form/Editor";

class WritePostPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      image: '',
      category: {
        id: '1'
      },
      content: ''
    };
  }

  handleChange = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  componentDidMount() {
    this.props.getAllCategory();
  }

  addPost = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
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
            <Form handleSubmit={this.addPost} btnSubmitText="Add new post">
              <Input
                value={this.state.title}
                handleChange={this.handleChange}
                name="title"
                type="text"
                placeholder="Title"
                icon="fa-header"
              />
              <Input
                value={this.state.author}
                handleChange={this.handleChange}
                name="author"
                type="text"
                placeholder="Author"
                icon="fa-user"
              />
              <Input
                value={this.state.image}
                handleChange={this.handleChange}
                name="image"
                type="file"
                placeholder="Image"
                icon="fa-picture-o"
              />
              <Select
                value={this.state.category}
                handleChange={this.handleChange}
                name="category"
                options={this.props.categories}
              />
              <TextEditor
                handleChange={this.handleChange}
                value={this.state.content}
                name="cotent"
              />
            </Form>
          </div>
        </div>
      </section>
    );
  }
}

export default WritePostPage;
