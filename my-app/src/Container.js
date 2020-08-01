import React from 'react';
import Game from './Game';
import AppMenu from './Menu';
import {BrowserRouter as Router, Route, useHistory} from 'react-router-dom';

const Container = () => {
  const history = useHistory();
  return (
    <Router>
      <AppMenu/>
      <Route path="/game" component={Game} />
   </Router>
  
  );
}

const Boom = ({match}) => {
  return (
  <div>
    Parameters
    {match.params.pathId}
  </div>
  );
}; 
export default Container;