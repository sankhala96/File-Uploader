import React, { Component } from "react";

export default class FileUploader extends Component {

    constructor(props){
        super(props)

        this.state = {
            selectedFile: null
        }
    }

    onChangeHandler = (e) => {
        console.log(e.target.files)
        this.setState({
            selectedFile: e.target.files
        })
    }

    onClickHandler = () => {
        this.props.uploadFile(this.state.selectedFile)
    }
  render() {
    return (
      <div>
        <form >
          <div className="form-group files">
            <label>Upload Your File </label>
            <input type="file" className="form-control" multiple onChange={this.onChangeHandler} />
          </div>
        </form>
        <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button> 
      </div>
    );
  }
}
