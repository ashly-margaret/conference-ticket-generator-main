import React, { useState } from "react";
import "./DragAndDropUpload.scss";
import { IoCloudUploadSharp } from "react-icons/io5";

interface FileItem {
  name: string;
  size: number;
  type: string;
}

function DragAndDropUpload() {
  const [files, setFiles] = useState<FileItem[]>([]); // To store the uploaded files

  // Handle file selection via drag and drop
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFiles = e.dataTransfer.files;
    processFiles(droppedFiles);
  };

  // Handle file selection via file input (optional for fallback)
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      processFiles(e.target.files);
    }
  };

  // Process files and store them in state
  const processFiles = (fileList: FileList) => {
    const newFiles: FileItem[] = [];
    Array.from(fileList).forEach((file) => {
      newFiles.push({
        name: file.name,
        size: file.size,
        type: file.type,
      });
    });
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  // Handle drag over event to allow dropping
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  return (
    <div className="dragAndDropUpload">
      <div className="upload-container">
        <div
          className="drop-area"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {/* Hidden File Input */}
          <input
            id="fileInput"
            type="file"
            multiple
            onChange={handleFileInputChange}
            className="fileInput"
          />
          <div className="dragAndDropIconContainer">
            <IoCloudUploadSharp className="dragAndDropIcon" />
          </div>

        
        </div>
        <p>Drag and drop files here or click to select</p>

        {files.length > 0 && (
          <div className="file-list">
            <h3>Uploaded Files:</h3>
            <ul>
              {files.map((file, index) => (
                <li key={index}>
                  <strong>{file.name}</strong> (Size: {file.size} bytes)
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default DragAndDropUpload;
