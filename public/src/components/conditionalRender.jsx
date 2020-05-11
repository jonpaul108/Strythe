import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Game from './gameBoard/game.jsx';

const Routing = () => {
   return (
    <Switch>
        <Route path='/about' render={() => <div>about</div>} />
        <Route path='/play' render={() => <Game/>} />
        <Route path='/'>
            <div>home</div>
        </Route>
    </Switch>  
   )
}

export default Routing;