import './App.css';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavbarComp';
import LinksBar from './LinksBarComp';
import Main from './components/MainComp';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <LinksBar />
      <hr />
      <Switch>
        <Main />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
