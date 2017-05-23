const common = (state = {}, action) => {
	switch (action.type) {
		case 'STYLIZE_ALL':
			let style = {};
			style[action.propertyName] = action.propertyValue;
			return Object.assign({}, state, style);
		case 'SET_BGCOLOR':
			let bgcolor = {};
			bgcolor.bgcolor = action.bgcolor;
			return Object.assign({}, state, bgcolor);
		case 'SET_TEMPLATE_NAME':
			let name = {};
			name.templateName = action.templateName;
			return Object.assign({}, state, name);
		default:
			return state;
	}
};

export default common;