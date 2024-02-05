import React, { useState } from 'react';
import BreakContainer2 from '../UIComponents/BreakContainer2';
import '../../App.scss';

export default function UploadFile() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Here, you can perform the upload logic using selectedFile
      console.log('Uploading file:', selectedFile);
      // You can use fetch or any other method to upload the file to your server
    } else {
      console.log('No file selected.');
    }
  };

  return (
    <>
      <div className="upload-container">
        <label className="top-label">Select a manifest that you'd like to import:</label>
        <div className="upload-zone-main">
          <div className="upload-zone">
            <label className="upload-label">
              <span className="upload-icon"><i className="fas fa-file" style={{ color: 'orange' }}></i></span>
              Drag & Drop here or <strong>Browse</strong>
            </label>
            <input
              type="file"
              required
              onChange={handleFileChange}
            />
          </div>
          <button className="uploadBtn" onClick={handleUpload}>Upload Manifest</button>
        </div>
      </div>
      <BreakContainer2 />
    </>
  );
}
