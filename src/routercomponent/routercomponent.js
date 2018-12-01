import React from 'react';
import Home from '../containers/Home/Home';
import ListAllHouses from '../containers/ListAllHouses/ListAllHouses';
import {Route,Switch,Redirect} from 'react-router-dom';

const RouterComponent = (props) => {
    return (
        <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/view-all" component={ListAllHouses} />
            <Redirect from="/" to="/home" />
        </Switch>
    );
}

export default RouterComponent;