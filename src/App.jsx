import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home';

const App = () =>  {
  return (
    <>
			 <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
        <Redirect to='/' />
      </Router>
		</>
  );
}

export default App;
