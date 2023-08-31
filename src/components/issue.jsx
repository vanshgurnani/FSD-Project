import React from 'react';
import './issue.css';

const IssueForm = () => {
  const addIssue = (event) => {
    // Handle your addIssue logic here
    event.preventDefault(); // Prevent the form from submitting
    // Your logic for adding the issue goes here
  };

  return (
    <div className='body'>
      <form action="/issue" method="post" id="issueform" className='d-flex flex-column justify-content-center align-items-center'>
      <br />
        <h1 style={{ color: 'aliceblue', fontSize: '35px', fontWeight: 'bold', textDecoration: 'none' }}>Issue Form</h1>
        <label style={{ color: 'aliceblue', fontSize: '20px', fontWeight: 'bold', textDecoration: 'none' }}>Issue Date:</label>
        <input type="date" id="idate" className="form-control n1" name="idate" placeholder="issue date" />
        <input type="text" id="bname" name="bname" className="form-control n1" placeholder="BookName" />
        <input type="number" id="sno" name="sno" placeholder="Serial Number" className="form-control n1" />
        

        <br />

        <button className="w-50 btn btn-lg btn-primary" type="submit" style={{ color: 'aliceblue', fontSize: '18px', fontWeight: 'bold', textDecoration: 'none' }} onClick={addIssue}>Issue</button>
        <br />
      </form>
    </div>
  );
}

export default IssueForm;
