import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import NotHomeOne from './notHomeOne/notHomeOne';

class NotHome extends Component {
    render() {
        const path = this.props.match.url;
        console.log(this.props.match);
        return (
            <div className="not-home">
                <nav className="navbar navbar-light">
                    <ul className="nav navbar-nav">
                        <li><Link to={`${path}/sup`}>Not Home</Link></li>
                    </ul>
                </nav>
                <div>Section 1</div>
                <Route path={`${path}/:test`} component={NotHomeOne}></Route>
                <div>Section 2</div>
            </div>
        );
    }
}

export default NotHome;
