import React from 'react';
import './style.css';
import { Switch, Route } from 'react-router';
import Donatepage from './Donatepage';
const App=()=> {
  return (
    <>
      <Switch>
        <Route exact path="/Donatepage" component={Donatepage}></Route>
      </Switch>
    </>
  );
}
export default App;
