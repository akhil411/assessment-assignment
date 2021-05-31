import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/home";
import Table from './components/table';
import PageNotFound from './components/pageNotFound';
import { connect } from 'react-redux';
import { getTableData } from './redux/actions';

type Props = {
    getTableData: typeof getTableData
}

const App: React.FC<Props> = ({ getTableData }) => {

    useEffect(()=> {
        getTableData();
    })

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

const mapDispatchToProps = {
    getTableData,
};

export default connect(null, mapDispatchToProps)(App);
