import { put, takeLatest } from 'redux-saga/effects';
import { getTemplate, getComponents } from './api';

function* loadTemplate(action) {
	try {
		const res = yield getTemplate().then(res => res);
		yield put({type: 'TEMPLATE_LOADED', template: res.template});
	} catch(e) {
		console.log(e);
	}
};

function* loadComponents(action) {
	try {
		const res = yield getComponents().then(res => res);
		yield put({type: 'COMPONENTS_LOADED', components: res.components});
	} catch(e) {
		console.log(e);
	}
};

function* mySagas() {
	yield takeLatest("LOAD_TEMPLATE", loadTemplate);
	yield takeLatest("LOAD_COMPONENTS", loadComponents);
};

export default mySagas;