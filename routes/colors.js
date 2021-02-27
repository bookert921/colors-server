const router = require('express').Router();
const ctrl = require('../controllers');

/* ROUTES */
router.get('/', ctrl.colors.index);
router.get('/:id', ctrl.colors.show);

module.exports = router;