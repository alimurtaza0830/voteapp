import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import QuestionList from './components/QuestionList';
import QuestionDetails from './components/QuestionDetails';
import "bootswatch/dist/lux/bootstrap.min.css";

function App() {
  return (
  		<React.Fragment>
  			<Navbar />
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
