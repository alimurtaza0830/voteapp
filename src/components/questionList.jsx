import React, { useEffect, useState }from 'react';
import { getQuestions } from '../services/apiCallService';
import QuestionTemplate from './questionTemplate';

const QuestionList = () => {
	const [questions, setQuestions] = useState([]);

	useEffect(() => {
		async function getAllQuestions() {
			const result = await getQuestions();
			setQuestions(result.data);
		}
		getAllQuestions();
	}, []);

	
    return (
    	<section className="margin-tb">
	    	<div className="row">
	    		{
	    			Object.keys(questions).map((key, index) => { 
	    				return <QuestionTemplate 
		    				key={key}
		    				title={questions[key].question}
							published_at={questions[key].published_at}
							choices={questions[key].choices.length}
							url={questions[key].url}
	    				/>
	    			})
	    		}
	    	</div>
    	</section>
    );
};


export default QuestionList;