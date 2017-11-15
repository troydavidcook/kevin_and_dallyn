const express = require('express');
const router = express.Router()
const controller = require('./controller');

var app = express();

router.get('/engagement', controller.login);
router.get('/engagement', controller.process_login);

module.exports = router;