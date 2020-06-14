import axios from 'axios';
import { apiUrl } from '../config.json';

// fetch all questions 
export async function getQuestions() {
	try {
		const data = await axios.get(apiUrl + '/questions');
		return data;
	} catch (error) {
		console.log(error.message);
	}
}

// fetching single question by id;
export async function singleQuestion(id) {
	try {
		const detailedQuestion = await axios.get(`${apiUrl}/questions/${id}`);
		return detailedQuestion;

	} catch (error) {
		console.log(error.message);
	}
}

// post the vote
export async function postVote (selectedChoice) {
		const votePosted = await axios.post(`${apiUrl}${selectedChoice.url}`);
		return votePosted;
}
