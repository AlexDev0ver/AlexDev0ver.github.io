import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import Overview from './components/overview/Overview';

function App() {
  return (
    <div>
        <Switch>
            <Route exact path="/" component={Overview} />
            <Route exact path="/about" />
            <Route exact path="/portfolio" />
            <Route exact path="/hobbies" />
            <Redirect to="/" />
        </Switch>
    </div>
  );
}

export default App;
