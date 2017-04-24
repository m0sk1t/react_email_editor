const node = (state, action) => {
    switch (action.type) {
        case 'ADD_NODE':
            return {
                id: action.id,
                options: action.options,
                block_id: action.block_id,
                image_url: action.image_url,
                node_type: action.node_type,
            };
        case 'STYLISH_NODE':
            let style = {};
            style[action.propertyName] = action.propertyValue;
            return Object.assign({}, state, {
                options: {
                    ...state.options,
                    ...style
                }
            });
        default:
            return state;
    }
};

const nodes = (state = [], action) => {
    switch (action.type) {
        case 'ADD_NODE':
            return [
                ...state,
                node(undefined, action)
            ];
        case 'RM_NODE':
            return state.filter(n => n.id !== action.node_id);
        case 'STYLISH_NODE':
            return state.map(n => n.selected? node(n, action): n);
        case 'SELECT_NODE':
            return state.map(n => {
                if (n.id === action.node_id) {
                    n.selected = true;
                } else {
                    n.selected = false;
                }
                return n;
            });
        default:
            return state;
    }
};

export default nodes;
