import { combineReducers } from 'redux';

import tabs from './tabs';
import template from './template';
import components from './components';

const EmailEditor = combineReducers({
    tabs,
    template,
    components
});

export default EmailEditor;
