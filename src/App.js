import './App.css';
import Workout from './views/Workout'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Finish from './views/Finish';
import MainMenu from './views/MainMenu';

function App() {


  return (
    <div className="App" id="app">
      <Router>
        <Switch>
          <Route path="/">
            <MainMenu />
          </Route>
          <Route exact path="/:phase/:week">
            <Workout />
          </Route>
          <Route path="/finish">
            <Finish />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
