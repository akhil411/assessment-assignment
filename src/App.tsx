import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/home";
import Table from './components/table';
import PageNotFound from './components/pageNotFound';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/table" component={Table} />
                <Route component={PageNotFound} />
            </Switch>
        </Router>
    );
}

export default App;
