import './App.css';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <h1>React Routing Demonstration</h1>
      <p>
        <Link to="/">Home</Link>
        &nbsp;|&nbsp;
        <Link to="/about">About</Link>   
      </p>
      <BrowserRouter>
      <Switch>
      </Switch>
    </BrowserRouter>
    </BrowserRouter>
  );
}

export default App;
