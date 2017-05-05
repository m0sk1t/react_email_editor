import { combineReducers } from 'redux';

import tabs from './tabs';
import common from './common';
import template from './template';
import components from './components';

const EmailEditor = combineReducers({
    tabs,
    common,
    template,
    components
});

export default EmailEditor;
