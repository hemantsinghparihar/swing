import React, { useRef, useState, useEffect } from 'react';
import '../css/home.css'; 
import services from '../services/homeServices';

function DragDrop() {

  const [files, setFiles] = useState([]);
  console.log('✌️files --->', files);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [loading, setLoading] = useState(false);


  const inputRef = useRef();

  const handleDragOver = (e) => {
    e.preventDefault(); 
  };


  const handleDrop = (e) => {
    e.preventDefault(); 
    const droppedFiles = e.dataTransfer.files; 
    handleFiles(droppedFiles); 
  };


  const handleFileChange = (e) => {
    const selectedFiles = e.target.files; // Get the selected files
    handleFiles(selectedFiles); // Process the files
  };


  const handleFiles = (fileList) => {
    const newFiles = Array.from(fileList).map((file) => ({
      file, // Store the file object
      url: URL.createObjectURL(file), // Create a URL for each file
    }));
    console.log('✌️newFiles --->', newFiles);

   
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);

    newFiles.forEach(({ file }) => {
      uploadFile(file);
    });
  };

  const uploadFile = async (file) => {
    setLoading(true);
    try {
      const response = await services.postImages(file);
      setUploadedFiles((prevUploaded) => [
        ...prevUploaded,
        {
          name: file.name,
          url: response.secure_url, // Use Cloudinary's secure URL
        },
      ]);
      console.log("Image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading the image:", error);
    } finally {
      setLoading(false);
    }
  };

  


  useEffect(() => {
    return () => {
      files.forEach(({ url }) => URL.revokeObjectURL(url)); 
    };
  }, [files]);

 
  if (files.length > 0) {
    return (
      <div className="dropzone">
        <h4>Uploaded Images:</h4>
        <ul>
          {files.map(({ file, url }, idx) => (
            
            <li key={idx}>
              <img src={url} alt={file.name} style={{ width: '100px', height: '100px' }} />
              <p>{file.name}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="upload-container">
      <div
        className="dropzone"
        onDragOver={handleDragOver} 
        onDrop={handleDrop} // Handle drop event
      >
        <h3>Drag And Drop Image To Upload</h3>
        <h3>or</h3>

        <input
          type="file"
          multiple
          hidden
          onChange={handleFileChange} 
          ref={inputRef} 
          accept="image/*" // Restrict to image files
        />

        <button onClick={() => inputRef.current.click()} className='cloth-btns-designs'>Select File</button>
      </div>
    </div>
  );
}

export default DragDrop;

