import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Navbar from './components/common/navBar';
import QuestionList from './components/questionList';
import QuestionDetails from './components/questionDetails';
import VotedSuccessfully from './components/votedSuccessfully';
import "bootswatch/dist/lux/bootstrap.min.css";

function App() {
  return (
  	<BrowserRouter>
  		<React.Fragment>
  			<Navbar />
		    <main className="container">
			    <Switch>
					<Redirect from="/" exact to="/questions" />
					<Route path="/questions/:questionId/votedSuccessfully" component={VotedSuccessfully} />
					<Route path="/questions/:questionId" component={QuestionDetails} />
					<Route path="/questions" component={QuestionList} />
				</Switch> 
		    </main>
  		</React.Fragment>
  	</BrowserRouter>
  );
}

export default App;
