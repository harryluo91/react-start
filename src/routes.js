import React from "react";
import { Route } from "react-router-dom";

import Home from './components/home/home';
import NotHome from './components/notHome/notHome';

const Routes = () => (
    <div>
        <Route exact path="/" component={Home} />
        <Route strict path="/not-home" component={NotHome} />
    </div>
)

export default Routes;