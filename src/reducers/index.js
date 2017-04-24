import { combineReducers } from 'redux';

import blocks from './blocks';

const todoApp = combineReducers({
    blocks,
});

export default todoApp;
