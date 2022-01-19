import './App.css';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavbarComp';
import Main from './components/MainComp';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <p>
        <Link to="/">Home</Link>
        &nbsp;|&nbsp;
        <Link to="/about">About</Link>   
      </p>
      <Switch>
        <Main />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
