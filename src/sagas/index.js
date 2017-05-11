import { put, takeLatest } from 'redux-saga/effects';
import { getLanguage, getTemplate, saveImage, saveTemplate, getComponents } from './api';

function* loadLanguage() {
	try {
		const res = yield getLanguage().then(res => res);
		yield put({type: 'LANGUAGE_LOADED', language: res});
	} catch(e) {
		console.log(e);
	}
};

function* loadTemplate(action) {
	try {
		const res = yield getTemplate(action.templateId).then(res => res);
		yield put({type: 'TEMPLATE_LOADED', template: res.template});
	} catch(e) {
		console.log(e);
	}
};

function* uploadTemplate(action) {
	try {
		const res = yield saveTemplate(action).then(res => res);
		yield put({type: 'TEMPLATE_SAVED', templateId: res.id});
	} catch(e) {
		console.log(e);
	}
};

function* uploadImage(action) {
	try {
		const res = yield saveImage(action.file).then(res => res);
		yield put({type: 'IMAGE_ADDED', block: action.block, index: action.index, image: res.url});
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
	yield takeLatest("ADD_IMAGE", uploadImage);
	yield takeLatest("LOAD_LANGUAGE", loadLanguage);
	yield takeLatest("LOAD_TEMPLATE", loadTemplate);
	yield takeLatest("SAVE_TEMPLATE", uploadTemplate);
	yield takeLatest("LOAD_COMPONENTS", loadComponents);
};

export default mySagas;
