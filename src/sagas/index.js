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
		if (res.data && !!res.success) throw new Error(res.data);
		if (res.data && !!res.data.template) throw new Error("Пришёл пустой шаблон!");
		yield put({type: 'TEMPLATE_LOADED', template: res.data? res.data.template: res.template});
		yield put({type: 'SET_TEMPLATE_NAME', templateName: res.data? res.data.name: res.name});
	} catch(e) {
		console.error(e);
		window.showMessage('error', e, messageTimeout);
	}
};

function* uploadTemplate(action) {
	try {
		const res = yield saveTemplate(action).then(res => res);
		if (!res.success) throw new Error(res);
		yield put({type: 'TEMPLATE_SAVED', templateId: res.data? res.data.id: res.id});
		window.showMessage('ok', `Шаблон сохранён! ID: ${res.data.id}`, messageTimeout);
	} catch(e) {
		console.error(e);
		window.showMessage('error', e, messageTimeout);
	}
};

function* uploadImage(action) {
	try {
		const res = yield saveImage(action.file).then(res => res);
		if (!res.success) throw new Error(res.data);
		yield put({type: 'IMAGE_ADDED', block: action.block, index: action.index, image: res.data? res.data.url: res.url});
		window.showMessage('ok', 'Изображение загружено', messageTimeout);
	} catch(e) {
		console.error(e);
		window.showMessage('error', e, messageTimeout);
	}
};

function* sendEmail(action) {
	try {
		const res = yield sendTestEmail(action).then(res => res);
		if (!res.success) throw new Error(res.data);
		window.showMessage('ok', `Письмо отправлено`, messageTimeout);
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
