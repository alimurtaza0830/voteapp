import React, { useEffect, useState }from 'react';
import { getQuestions } from '../services/questionsService';
import QuestionTemplate from './QuestionTemplate';

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
    );
};


export default QuestionList;