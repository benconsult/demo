import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

import Error from "./pages/Error";
import NavBar from './components/NavBar';
function App() {
  return (
    <>
      
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
