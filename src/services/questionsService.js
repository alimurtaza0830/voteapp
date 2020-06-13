import axios from 'axios';
import { apiUrl } from '../config.json';

// fetch all questions 
export async function getQuestions() {
	try {
		const allQuestions = await axios.get(apiUrl + '/questions');
		return allQuestions;
	} catch (error) {
		console.log(error.message);
	}
}

// fetching single question by id;
export async function singleQuestion(id){
	try {
		const questionById = await axios.get(`${apiUrl}/questions/${id}`);
		return questionById;

	} catch (error) {
		console.log(error.message);
	}
}