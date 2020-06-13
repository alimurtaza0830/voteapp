import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import QuestionList from './components/QuestionList';
import QuestionDetails from './components/QuestionList';
import "bootswatch/dist/lux/bootstrap.min.css";
import './App.css';

import { getQuestions } from './services/questionsService'; 

function App() {
  return (
  		<React.Fragment>
		    <main className="container">
			    <Switch>
					<Route path="/questions" 
							component={QuestionList}
					/>
					<Route path="/questions/:id" 
							component={QuestionDetails}
					/>
					<Redirect from="/" exact to="/questions" />
				</Switch> 
		    </main>
  		</React.Fragment>
  );
}

export default App;
