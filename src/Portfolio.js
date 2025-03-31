import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import "./Portfolio.css";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [screenshotPreview, setScreenshotPreview] = useState(null);

  
    const [loans, setLoans] = useState([
      {
        id: "LB12345",
        type: "Personal Loan",
        borrower: "John Doe",
        borrowerAddress: "123 Street, NY",
        coBorrower: "Jane Doe",
        coBorrowerAddress: "456 Avenue, NY",
        dpd: 30,
        amount: "$50,000",
        region: "New York",
      },
      {
        id: "LB12346",
        type: "Home Loan",
        borrower: "Alice Smith",
        borrowerAddress: "789 Road, LA",
        coBorrower: "Bob Smith",
        coBorrowerAddress: "101 Street, LA",
        dpd: 15,
        amount: "$150,000",
        region: "California",
      },
      {
        id: "LB12347",
        type: "Car Loan",
        borrower: "David Johnson",
        borrowerAddress: "111 Avenue, TX",
        coBorrower: "Emma Johnson",
        coBorrowerAddress: "222 Street, TX",
        dpd: 60,
        amount: "$20,000",
        region: "Texas",
      },
      {
        id: "LB12348",
        type: "Education Loan",
        borrower: "Michael Brown",
        borrowerAddress: "333 Parkway, FL",
        coBorrower: "Sarah Brown",
        coBorrowerAddress: "444 Lane, FL",
        dpd: 45,
        amount: "$30,000",
        region: "Florida",
      },
      {
        id: "LB12349",
        type: "Business Loan",
        borrower: "Richard Lee",
        borrowerAddress: "555 Street, IL",
        coBorrower: "Linda Lee",
        coBorrowerAddress: "666 Avenue, IL",
        dpd: 0,
        amount: "$250,000",
        region: "Illinois",
      },
      {
        id: "LB12350",
        type: "Personal Loan",
        borrower: "Emily Davis",
        borrowerAddress: "777 Road, NJ",
        coBorrower: "John Davis",
        coBorrowerAddress: "888 Avenue, NJ",
        dpd: 5,
        amount: "$12,000",
        region: "New Jersey",
      },
      {
        id: "LB12351",
        type: "Home Loan",
        borrower: "Chris Green",
        borrowerAddress: "999 Boulevard, TX",
        coBorrower: "Rachel Green",
        coBorrowerAddress: "1000 Street, TX",
        dpd: 10,
        amount: "$200,000",
        region: "Texas",
      },
      {
        id: "LB12352",
        type: "Car Loan",
        borrower: "Daniel White",
        borrowerAddress: "1211 Lane, CA",
        coBorrower: "Olivia White",
        coBorrowerAddress: "1313 Avenue, CA",
        dpd: 25,
        amount: "$35,000",
        region: "California",
      }
    ]);
    


  const portfolioRef = useRef(null);

  // Capture Screenshot Function
  const captureScreenshot = async () => {
    const element = document.getElementById("portfolio-section"); // The div to capture
    if (!element) return;

    const canvas = await html2canvas(element);
    canvas.toBlob((blob) => {
      if (blob) {
        const file = new File([blob], "screenshot.png", { type: "image/png" });
        setSelectedFile(file); // Store screenshot as a file
        setScreenshotPreview(URL.createObjectURL(file)); // Generate preview URL
      }
    }, "image/png");
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = (event) => {
    event.stopPropagation(); // Prevents unintended triggers
    if (!selectedFile) {
      alert("Please select a file before uploading.");
      return;
    }

    console.log("Uploading:", selectedFile);
  };

  const handleScreenshot = () => {
    const table = document.getElementById("loan-table");

    if (!table) {
      alert("Loan table not found!");
      return;
    }

    html2canvas(table, {
      scale: 2,
      useCORS: true, // Ensures external styles load
      backgroundColor: null, // Keeps transparent background
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      // Create a download link
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "loan_table_screenshot.png";
      link.click();
    });
  };

  return (
    <div className="portfolio-container" id="portfolio-section">
      <h2>Portfolio</h2>

      {/* Filter Buttons */}
      <div className="toolbar">
        <button className="filter-btn all-btn">All</button>
        <button className="filter-btn">Pre Sarfaesi</button>
        <button className="filter-btn">NPA</button>
        <button className="filter-btn">13(3) Responses</button>
        <button className="filter-btn">Symbolic Possession</button>
        <button className="filter-btn">DM Order</button>
        <button className="filter-btn">Physical Possessions</button>
        <button className="filter-btn">Auctions</button>
      </div>

      {/* Search and Filter Options */}
      <div className="search-section">
        <input type="text" placeholder="Search Loan No" className="small-search" />
        <select className="dropdown">
          <option>Select Column</option>
        </select>
        <button className="filter-btn">More Filters</button>
      </div>

      <div className="actions-row">
        <button>Generate Pre Sarfaesi Notice (0)</button>
        <button>Declare NPA (0)</button>
        {/* Right-Aligned Elements */}
        <div className="right-actions">
          <span>0 loans selected</span>
          <button onClick={handleScreenshot}>Capture Screenshot</button>
        </div>
      </div>

      

      {/* Loan Table */}
      <div style={{ overflowX: "auto" }}>
        <table id="loan-table">
          <thead>
            <tr>
              <th>Select</th>
              <th>Loan No</th>
              <th>Loan Type</th>
              <th>Borrower</th>
              <th>Borrower Address</th>
              <th>Co-Borrower</th>
              <th>Co-Borrower Address</th>
              <th>Current DPD</th>
              <th>Sanction Amount</th>
              <th>Region</th>
            </tr>
          </thead>
          <tbody>
            {loans && loans.length > 0 ? (
              loans.map((loan, index) => (
                <tr key={index}>
                  <td><input type="checkbox" /></td>
                  <td>
                    <Link to={`/loan-details/${loan.id}`} style={{ textDecoration: "none", color: "#007bff" }}>
                      {loan.id}
                    </Link>
                  </td>
                  <td>{loan.type}</td>
                  <td>{loan.borrower}</td>
                  <td>{loan.borrowerAddress}</td>
                  <td>{loan.coBorrower}</td>
                  <td>{loan.coBorrowerAddress}</td>
                  <td>{loan.dpd}</td>
                  <td>{loan.amount}</td>
                  <td>{loan.region}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" style={{ textAlign: "center" }}>No loans available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Buttons */}
      <div className="pagination">
        <button className="right-btn">Previous</button>
        <button className="right-btn">Next</button>
      </div>

      {/* Upload Document Section */}
      <div className="upload-section">
        <label>Document Name:</label>
        <input type="text" placeholder="Enter document name" />

        <label>Document Type:</label>
        <select>
          <option>Select</option>
          <option>PDF</option>
          <option>Image</option>
        </select>

        <label>Document Remarks:</label>
        <input type="text" placeholder="Enter remarks" />

        <label>Select File:</label>
        <input type="file" onChange={handleFileChange} />

        {/* Screenshot Preview */}
        {screenshotPreview && (
          <div>
            <p>Screenshot Preview:</p>
            <img src={screenshotPreview} alt="Screenshot Preview" width="200" />
          </div>
        )}

        <button onClick={handleUpload}>Submit</button>
      </div>
    </div>
  );
};

export default Portfolio;
