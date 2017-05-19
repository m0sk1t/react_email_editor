import React from 'react';
import todoApp from './reducers';
import { render } from 'react-dom';
import App from './components/App';
import mySagas from './sagas';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

let templateId = '';
const sagaMiddleware = createSagaMiddleware();
document.location.search.substring(1).split('&').map(el => el.indexOf('id=') !== -1 && (templateId = el.split('id=').join('')));

const store = createStore(todoApp, {
	templateId,
	'common': {
		'fontSize': '16',
		'templateName': '',
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
