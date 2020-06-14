import React, { useEffect, useState } from 'react';
import { singleQuestion } from '../services/apiCallService';

const QuestionDetails = ( props ) => {
	const [questionDetail, setQuestionDetail] = useState({ question: '', choices: [] });

	useEffect(() => {
		async function getQuestionDetails() {
			const { questionId } = props.match.params;
			const { data } = await singleQuestion(questionId);
			
			setQuestionDetail({question: data.question, choices: data.choices});
		}
		getQuestionDetails();
	}, []);

	console.log(questionDetail);

	const choicesList = questionDetail.choices ? Object.keys(questionDetail.choices).map((key, index) => {
      return (
        <li key={key} 
        	className="list-group-item"
        >
          {questionDetail.choices[key].choice}
        </li>
      );
    }) : null ;

    return (
       <div className="card mb-3 margin-tb">
		  <h3 className="card-header">Question: { questionDetail.question } </h3>
		  <div className="card-body">
		  	<ul className="list-group list-group-flush">
		  		{choicesList}
			  </ul>
			  
		  </div>
		  
		  <div className="card-footer text-muted">
		    Card Footer
		  </div>
		</div>
    );
};

export default QuestionDetails;
