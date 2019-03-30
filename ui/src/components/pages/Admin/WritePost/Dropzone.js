import React, { Component } from 'react'

import ReactDropzone from 'react-dropzone'

class Dropzone extends Component {
  onDrop = (files) => {
    const { handleImageChange } = this.props

    files.forEach((file) => {
      handleImageChange(file)
    })
  }

  render() {
    const { postImages } = this.props

    return (
      <div>
        <div className="thumbs-container">
          {
            postImages.map(image => (
              <div className="image-box" key={image.url}>
                <img src={image.url} alt="" />
              </div>
            ))
          }
        </div>
        <ReactDropzone
          onDrop={this.onDrop}
          onFileDialogCancel={this.onCancel}
        >
          {({ getRootProps, getInputProps }) => (
            <div className="dropzone" {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drop files here, or click to select files</p>
            </div>
          )}
        </ReactDropzone>
      </div>
    )
  }
}

export default Dropzone
