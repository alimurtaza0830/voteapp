import React from 'react';
import {Link} from 'react-router-dom';


const VotedSuccessfully = () => {
    return (
    	<div className="row">
    		<div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3 ">
				<div className="card text-white bg-success mb-3 margin-tb">
			        <div className="card-header">Congratulations!</div>
			        <div className="card-body">
			          <h4 className="card-title">You Have Voted successfully</h4>
			          <Link to="/" className="btn btn-sm btn-warning">Go Back</Link>
		        	</div>
		      </div>
    		</div>
    	</div>
      
    );
} 



export default VotedSuccessfully;