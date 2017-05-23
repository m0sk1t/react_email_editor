// file created with filename constroller.js =))) but quikly renamed
const TemplateModel = require('./TemplateModel');

const sendEmail = (req, res) => {
	// TODO: use nodemailer
	console.log('POST: /email', req.body);
	res.json({msg: "OK"});
};

const getTemplate = (req, res) => {
	TemplateModel.findById(req.params.id, (err, tpl) => {
		if (err) return res.status(500).json(err);
		if (!tpl) return res.status(404).json({"error": 404, "msg": `Template ${req.params.id} not found...`});
		res.json(tpl);
	});
};

const setTemplate = (req, res) => {
	console.log('POST: /template/:id', req.body);
	if (req.params.id === 'null') {
		let newTemplate = new TemplateModel();
		newTemplate.html = req.body.html;
		newTemplate.name = req.body.name;
		// needed if no-cors enabled: newTemplate.template = JSON.parse(req.body.template);
		newTemplate.template = req.body.template;
		newTemplate.save(err => {
			if (err) return res.status(500).json(err);
			res.json(newTemplate);
		})
	} else {
		TemplateModel.findByIdAndUpdate(req.params.id, {
			"$set": {
				html: req.body.html,
				name: req.body.name,
				template: req.body.template,
			}
		}, (err, tpl) => {
			if (err) return res.status(500).json(err);
			res.json(tpl);
		});
	}
};

const uploadImage = (req, res) => {
	console.log('POST: /image', req.files);
	const imagePath = 'uploads/' + req.files.file.path.split('uploads/').join('');
	res.json({ url: imagePath });
};

module.exports = {
	sendEmail,
	uploadImage,
	getTemplate,
	setTemplate,
};