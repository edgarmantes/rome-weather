import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './components/app';
import Tabs from './components/tabs';
import Forecast from './components/forecast';
import Current from './components/current';
import Precip from './components/precip';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

let routes = (
	<Provider store={createStoreWithMiddleware(reducers)}>
		<Router history={hashHistory}> 
			<Route path='/' component={App} >
				<Route component={Tabs} >
					<IndexRoute component={Forecast} />
					<Route path='precip' component={Precip} />
				</Route>
			</Route>
		</Router>
	</Provider>

);

ReactDOM.render(routes, document.querySelector('.container'));
