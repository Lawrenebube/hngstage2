// import Navbar from './Navbar';
import Home from './homePage';
import Show from './show';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route exact path="/" component={Home} />
          <Route exact path="/movies/:id" component={Show} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;