import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Navbar from './components/common/navBar';
import QuestionList from './components/questionList';
import QuestionDetails from './components/questionDetails';
import "bootswatch/dist/lux/bootstrap.min.css";

function App() {
  return (
  	<BrowserRouter>
  		<React.Fragment>
  			<Navbar />
		    <main className="container">
				<Redirect from="/" exact to="/questions" />
			    <Switch>
					<Route path="/questions/:questionId" component={QuestionDetails} />
					<Route path="/questions" component={QuestionList} />
				</Switch> 
		    </main>
  		</React.Fragment>
  	</BrowserRouter>
  );
}

export default App;
