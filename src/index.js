import React from 'react';
import todoApp from './reducers';
import { render } from 'react-dom';
import App from './components/App';
import mySagas from './sagas';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware()

let store = createStore(todoApp, {
	'common': {
		'color': '#333333',
		'backgroundColor': '#FFFFFF',
	},
	'template': [],
	'components': [],
	'tabs': {
		'blocks': true,
		'common': false,
		'options': false,
	}
}, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(mySagas);

store.dispatch({type:"LOAD_TEMPLATE"});
store.dispatch({type:"LOAD_COMPONENTS"});

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
