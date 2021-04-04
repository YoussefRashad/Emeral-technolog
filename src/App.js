import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import EditAudience from './pages/EditAudience';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/edit/:id" component={EditAudience} />
        <Route path="*" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
