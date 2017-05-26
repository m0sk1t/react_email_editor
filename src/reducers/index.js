import { combineReducers } from 'redux';

import tabs from './tabs';
import common from './common';
import language from './language';
import template from './template';
import components from './components';
import templateId from './templateId';
import tinymce_config from './tinymce_config';

const EmailEditor = combineReducers({
    tabs,
    common,
    language,
    template,
    components,
    templateId,
    tinymce_config
});

export default EmailEditor;
