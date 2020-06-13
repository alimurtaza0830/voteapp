import React from 'react';
import { Link } from 'react-router-dom';


const QuestionTemplate = ({ title, published_at, choices, url }) => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-4">
	        <div className="card border-primary mb-3">
			  <div className="card-header">{title}</div>
			  <div className="card-body">
			    <h4 className="card-title">Number of Choices :{choices}</h4>

			    <p className="card-text">
			    published at: {new Date(published_at).toDateString()}</p>
			  </div>
				<div className="question-footer text-right">
		       		<Link to={`${url}`}><button className="btn btn-primary pull-right">Vote Now</button></Link>
		      	</div>
			</div>
		</div>
    );
};



export default QuestionTemplate;
