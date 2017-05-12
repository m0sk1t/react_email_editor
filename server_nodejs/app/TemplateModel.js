const TemplateModel = require('mongoose').model('TemplateModel', {
	template: {
		type: Array,
		default: []
	},
	html: {
		type: String,
		default: ''
	},
});

module.exports = TemplateModel;