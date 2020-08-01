import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Game from './Game';
import AppMenu from './AppMenu';
import ReactAsync from './ReactAsync';

const App = () => {
  return(
    <Router>
        <AppMenu/>
        <Route path="/game" component={Game} />
        <Route path="/reactAsync" component={ReactAsync} />
    </Router>
  );
}

export default App;