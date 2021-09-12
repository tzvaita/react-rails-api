import {
  // eslint-disable-next-line no-unused-vars
  Switch, Route, NavLink, Redirect,
} from 'react-router-dom';
import CarsList from './containers/CarsList';
import Car from './containers/Car';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={CarsList} />
        <Route path="/car/:car" exact component={Car} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
