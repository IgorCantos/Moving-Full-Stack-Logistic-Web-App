import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from '../components/globalStyles/styles';
import PrivateRoute from './private-route';
import HomePage from '../views/HomePage';
import Login from '../views/Login';
import CreateAccount from '../views/CreateAcount';
import MyOrders from '../views/MyOrders';
import NewOrder from '../views/NewOrder';

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <GlobalStyle />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/criar-conta" component={CreateAccount} />
                    <PrivateRoute exact path="/encomendas" component={MyOrders} />
                    <PrivateRoute exact path="/nova-encomenda" component={NewOrder} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;