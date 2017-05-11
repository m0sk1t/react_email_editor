import React from 'react';
import todoApp from './reducers';
import { render } from 'react-dom';
import App from './components/App';
import mySagas from './sagas';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();
const templateId = document.location.search.split('?id=').join('');

let store = createStore(todoApp, {
	templateId,
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

store.dispatch({type:"LOAD_LANGUAGE"});
store.dispatch({type:"LOAD_COMPONENTS"});
store.dispatch({type:"LOAD_TEMPLATE", templateId});

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
