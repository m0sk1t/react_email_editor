const common = (state = {}, action) => {
	switch (action.type) {
		case 'STYLIZE_ALL':
			let style = {};
			style[action.propertyName] = action.propertyValue;
			return Object.assign({}, state, style);
		default:
			return state;
	}
};

export default common;