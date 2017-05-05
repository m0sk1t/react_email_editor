export const getTemplate = () => {
	return fetch('./template.json')
		.then(res => res.json())
		.then(json => json)
};

export const getComponents = () => {
	return fetch('./components.json')
		.then(res => res.json())
		.then(json => json)
};

export const saveTemplate = (id, templateJSON, templateHTML) => {
	const params = {
		method: 'POST',
		body: {
			id: id || null,
			templateJSON,
			templateHTML
		}
	};
	return fetch('/save', params)
		.then(res => res.json())
		.then(json => json)
};

export const sendTestEmail = (id, templateJSON, templateHTML) => {
	const params = {
		method: 'POST',
		body: {
			id: id || null,
			templateJSON,
			templateHTML
		}
	};
	return fetch('./save', params)
		.then(res => res.json())
		.then(json => json)
};
