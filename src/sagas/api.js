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