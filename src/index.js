import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './components/app';
import Tabs from './components/tabs';
import Forecast from './components/forecast';
import Current from './components/current';
import Precip from './components/precip';

import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// const store = createStore(reducers, applyMiddleware(thunk))

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
let routes = (
	<Provider store={store}>
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
