import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import Overview from './components/overview/Overview';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';


function App() {
  return (
    <div>
        <Switch>
            <Route exact path="/" component={Overview} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/hobbies" />
            <Redirect to="/" />
        </Switch>
    </div>
  );
}

export default App;
