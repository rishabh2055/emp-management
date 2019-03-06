let express = require('express');
let router = express.Router();

let auth = require('../middlewares/auth');

let Controller = require('../controllers/Users');

router.post('/login', auth.optional, Controller.login);

module.exports = router;