const express = require('express');
const router = express.Router();
const con = require('../controller/controller.js');

router.get('/', con.defaultCon);
router.get('/gallery', con.galleryCon);
router.get('/contact', con.contactCon);
router.get('/destination', con.destinationCon);
router.get('/about', con.aboutCon);
router.get('/error', con.errorCon);

module.exports = router;
