import React, { Component } from 'react';
import { singleQuestion, postVote } from '../services/apiCallService';


class QuestionDetails extends Component {
  state = {
    question: '',
    choices: [],
    selectedChoice: {
    	name: '',
    	url: null
    }
  };
  
  async componentDidMount() {
      const {questionId} = this.props.match.params;
      const { data } = await singleQuestion(questionId);
      this.setState({question: data.question, choices: data.choices});
    };
  

  handleChange = ({event, choice, url, key}) => {
  	this.setState({ selectedChoice: { name: choice, url: url}}, () => {
  	});
  };

  handleSubmit = async (event) => {
  	event.preventDefault();
  	const {selectedChoice} = this.state;
	await postVote(selectedChoice);
		this.props.history.push(`${this.props.match.url}/votedSuccessfully`);
   }

  render() {
	const { question, choices } = this.state;
    const choicesList = choices ? Object.keys(choices).map((key) => {
      return (
          <div className="form-check" key={key}>
            <label className="form-check-label">
              <input
                type="radio" 
                className="form-check-input"
                name="choice"
                id={key}
                value={choices[key].choice}
                onChange={(event) => { this.handleChange(choices[key])}} 
              />
              {choices[key].choice} {choices[key].url }
            </label>
          </div>
      );
    }) : null ;

    return (
    	<div className="row">
    		<div className="col-sm-12 col-md-6 col-lg-6 offset-lg-3">
	         <div className="card mb-3 margin-tb">
	            <form onSubmit={this.handleSubmit}>
	                <h3 className="card-header">Question: { question } </h3>
	                <div className="card-body">
	                  <fieldset className="form-group">
	                    <legend>Select an Option</legend>
	                    { choicesList }
	                  </fieldset>
	                </div>
	                <div className="card-footer text-right">
	                <button type="submit" className="btn btn-primary btn-sm">Vote</button>
	                </div>
	            </form>
	          </div>
    		</div>
    	</div>
    );
  }
}

export default QuestionDetails;










