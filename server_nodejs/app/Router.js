const router = require('express').Router();
const multipart = require('connect-multiparty');
const {
	sendEmail,
	uploadImage,
	getTemplate,
	setTemplate,
} = require('./Controller');

router.post('/send', sendEmail);

router.get('/template/:id', getTemplate);

router.post('/template/:id', setTemplate);

router.post('/image', multipart({ uploadDir: 'uploads/uploads' }), uploadImage);

module.exports = router;