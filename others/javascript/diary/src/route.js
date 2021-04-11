import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './components/app';

export default class AppRoute extends React.Component {
    render() {
        return <Router>
            <Switch>
                {/* <Route path="/:year?/:month?" component={App} /> */}
                <Route path="/others/javascript/diary/dist/:year?/:month?" component={App} />

                {/* <Route path="/2020/:month" exact component={App} />*/}
                {/* <Route path="/:year" exact component={App} /> */}
                <Route path="/" component={App} />
            </Switch>
        </Router>
    }
}