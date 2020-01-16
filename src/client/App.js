import React, { Component, forwardRef } from 'react';
import './app.css';

import FileUploader from './FileUploader'
import axios from 'axios';

export default class App extends Component {

  uploadFile = (fileData) => {
    const data = new FormData();

    for(let x=0; x<fileData.length; x++) {
      data.append('file', fileData[x])
    }

    axios.post('/api/files/upload', data, {

    })
    .then(res => {
      console.log(res)
    })
  }

  render() {
    return (
      <div>
        <FileUploader uploadFile={this.uploadFile} />
      </div>
    );
  }
}
