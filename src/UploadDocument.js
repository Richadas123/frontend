import React from "react";

const UploadDocument = () => {
  return (
    <div className="upload-document">
      <h2>Upload Document</h2>
      <form>
        <label>Document Name:</label>
        <select>
          <option>Select</option>
          <option>Loan Agreement</option>
        </select>

        <label>Document Type:</label>
        <select>
          <option>Select</option>
          <option>PDF</option>
        </select>

        <label>Document Remarks:</label>
        <input type="text" placeholder="Enter remarks" />

        <label>Select File:</label>
        <input type="file" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UploadDocument;
