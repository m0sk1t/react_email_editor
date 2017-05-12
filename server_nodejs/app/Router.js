const router = require('express').Router();
const multipart = require('connect-multiparty');
const {
	uploadImage,
	getTemplate,
	setTemplate,
} = require('./Controller');

router.post('/send', (req, res) => {
	res.send('OK');
});

router.post('/image', multipart({ uploadDir: 'uploads/uploads' }), uploadImage);

router.get('/template/:id', getTemplate);

router.post('/template/:id', setTemplate);

module.exports = router;