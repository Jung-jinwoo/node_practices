const express = require('express');
const controller = require('../controllers/guestbook');

const router = express.Router();
router.route('').get(controller.index);
router.route('/insert').post(controller.insert);
router.route('/delete/:no').get(controller.form);
router.route('/delete/:no').post(controller.delete);

module.exports = router;