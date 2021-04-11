import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Calc from "./Calc";

const Appp=()=>(
    <Switch>
      <Route path="/calc" component={Calc}/>
    </Switch>
)

ReactDOM.render(
    <Router>
      <Appp/>
    </Router>,
  document.getElementById('root')
);

