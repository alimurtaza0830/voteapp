import React from 'react';
import {Link} from 'react-router-dom';


const VotedSuccessfully = () => {
    return (
      <div className="card text-white bg-success mb-3" style="max-width: 20rem;">
        <div className="card-header">Congratulations!</div>
        <div className="card-body">
          <h4 className="card-title">You Have Voted successfully</h4>
          <Link to="/" className="btn btn-success">Go Back</Link>
        </div>
      </div>
    );
} 



export default VotedSuccessfully;