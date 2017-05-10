import { combineReducers } from 'redux';

import tabs from './tabs';
import common from './common';
import language from './language';
import template from './template';
import components from './components';

const EmailEditor = combineReducers({
    tabs,
    common,
    language,
    template,
    components
});

export default EmailEditor;
