import { put, takeLatest } from 'redux-saga/effects';
import { getLanguage, getComponents, getTemplate, saveImage, saveTemplate, sendTestEmail } from './api';

const messageTimeout = 3333;

function* loadLanguage() {
	try {
		const res = yield getLanguage().then(res => res);
		yield put({type: 'LANGUAGE_LOADED', language: res});
	} catch(e) {
		console.error(e);
		window.showMessage('error', e, messageTimeout);
	}
};

function* loadComponents(action) {
	try {
		const res = yield getComponents().then(res => res);
		yield put({type: 'COMPONENTS_LOADED', components: res.components});
	} catch(e) {
		console.error(e);
		window.showMessage('error', e, messageTimeout);
	}
};

function* loadTemplate(action) {
	try {
		const res = yield getTemplate(action.templateId).then(res => res);
		yield put({type: 'TEMPLATE_LOADED', template: res.template});
		yield put({type: 'SET_TEMPLATE_NAME', templateName: res.name});
	} catch(e) {
		console.error(e);
		window.showMessage('error', e, messageTimeout);
	}
};

function* uploadTemplate(action) {
	try {
		const res = yield saveTemplate(action).then(res => res);
		yield put({type: 'TEMPLATE_SAVED', templateId: res._id});
		window.showMessage('ok', `Шаблон сохранён! ID: ${res._id}`, messageTimeout);
	} catch(e) {
		console.error(e);
		window.showMessage('error', e, messageTimeout);
	}
};

function* uploadImage(action) {
	try {
		const res = yield saveImage(action.file).then(res => res);
		yield put({type: 'IMAGE_ADDED', block: action.block, index: action.index, image: res.url});
		window.showMessage('ok', 'Изображение загружено', messageTimeout);
	} catch(e) {
		console.error(e);
		window.showMessage('error', e, messageTimeout);
	}
};

function* sendEmail(action) {
	try {
		const res = yield sendTestEmail(action).then(res => res);
		window.showMessage('ok', `Письмо отправлено ${res.data || ''}`, messageTimeout);
	} catch(e) {
		console.error(e);
		window.showMessage('error', e, messageTimeout);
	}
};

function* mySagas() {
	yield takeLatest("SEND_EMAIL", sendEmail);
	yield takeLatest("ADD_IMAGE", uploadImage);
	yield takeLatest("LOAD_LANGUAGE", loadLanguage);
	yield takeLatest("LOAD_TEMPLATE", loadTemplate);
	yield takeLatest("SAVE_TEMPLATE", uploadTemplate);
	yield takeLatest("LOAD_COMPONENTS", loadComponents);
};

export default mySagas;
