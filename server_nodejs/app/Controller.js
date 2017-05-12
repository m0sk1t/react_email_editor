// file created with filename constroller.js =))) but quikly renamed
const TemplateModel = require('./TemplateModel');

const getTemplate = (req, res) => {
	TemplateModel.findById(req.params.id, (err, tpl) => {
		if (err) return res.status(500).json(err);
		if (!tpl) return res.status(404).json({"error": 404, "msg": `Template ${req.params.id} not found...`});
		res.json(tpl);
	});
};

const setTemplate = (req, res) => {
	console.log(req.body);
	if (req.params.id === 'null') {
		let newTemplate = new TemplateModel();
		newTemplate.html = req.body.html;
		newTemplate.template = req.body.template;
		newTemplate.save(err => {
			if (err) return res.status(500).json(err);
			res.json(newTemplate);
		})
	} else {
		TemplateModel.findByIdAndUpdate(req.params.id, {
			"$set": {
				html: req.body.html,
				template: req.body.template,
			}
		}, (err, tpl) => {
			if (err) return res.status(500).json(err);
			res.json(tpl);
		});
	}
};

const uploadImage = (req, res) => {
	const imagePath = 'uploads/' + req.files.file.path.split('uploads/').join('');
	res.json({ url: imagePath });
};

module.exports = {
	uploadImage,
	getTemplate,
	setTemplate,
};