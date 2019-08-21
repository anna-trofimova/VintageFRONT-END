import React, { Component } from "react";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
 
class FileUploadComponent extends Component {
  state = {
    isUploading: false,
    progress: 0,
    avatarURL: ""
  };
 
  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });

  handleProgress = progress => this.setState({ progress });

  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };

  handleUploadSuccess = filename => {
    this.setState({ progress: 100, isUploading: false });
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => {
        this.props.getImage(url)
        this.setState({ avatarURL: url })
      });
  };
 
  render() {
    const {isUploading, progress, avatarURL} = this.state;
    return (
      <div>
        <form className='addImage'>
          <label>Image:</label>
          {isUploading && <p>Progress: {progress}</p>}
          {avatarURL && <img src={avatarURL} alt='name' width='100px'/>}
          <FileUploader
            accept="image/*"
            name="avatar"
            randomizeFilename
            storageRef={firebase.storage().ref("images")}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
          />
        </form>
      </div>
    );
  }
}
 
export default FileUploadComponent;