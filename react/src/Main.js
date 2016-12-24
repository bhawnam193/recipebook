import {react} from 'react';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';
import App from './App';
import Home from 'components/pages/Home';
import About from 'components/pages/About';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="about" component={About} />
        </Route>
    </Router>, 
document.getElementById('content'));