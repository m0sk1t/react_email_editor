const components = (state = [], action) => {
	switch (action.type) {
		case 'SELECT_COMPONENT':
			return state.map((b, index) => {
				if (index === action.index){
					b.selected = true;
					return b;
				} else {
					b.selected = false;
					return b;
				}
			});
		default:
			return state;
	}
};

export default components;