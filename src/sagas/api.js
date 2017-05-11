const noCors = { "mode": "no-cors" };
const apiPath = "http://localhost:8888/";
const contentType = {"ContentType": "application/json"};

export const getLanguage = () => {
	const lang = /^\w+/.exec(navigator.language)[0];
	return fetch(`/translations/lang.${lang}.json`, { ...noCors, ...contentType })
		.then(res => res.json())
		.then(json => json)
};

export const getTemplate = () => {
	return fetch(`/template.json`, { ...noCors, ...contentType })
		.then(res => res.json())
		.then(json => json)
};

export const getComponents = () => {
	return fetch(`/components.json`, { ...noCors, ...contentType })
		.then(res => res.json())
		.then(json => json)
};

export const getTemplateById = (id) => {
	return fetch(`${apiPath}/template/${id}`, noCors)
		.then(res => res.json())
		.then(json => json)
};

export const saveImage = (file) => {
	const params = {
		method: 'POST',
		body: file,
		...noCors
	};
	return fetch(`${apiPath}image`, params)
		.then(res => res.json())
		.then(json => json)
};

export const saveTemplate = (id, templateJSON, templateHTML) => {
	const params = {
		...noCors,
		method: 'POST',
		body: {
			templateJSON,
			templateHTML
		}
	};
	return fetch(`${apiPath}template/${id||''}`, params)
		.then(res => res.json())
		.then(json => json)
};

export const sendTestEmail = (id, email, templateHTML) => {
	const params = {
		...noCors,
		method: 'POST',
		body: {
			email,
			templateHTML
		}
	};
	return fetch(`${apiPath}send`, params)
		.then(res => res.json())
		.then(json => json)
};
