import { combineReducers } from 'redux';

import template from './template';
import components from './components';

const EmailEditor = combineReducers({
    template,
    components
});

export default EmailEditor;
