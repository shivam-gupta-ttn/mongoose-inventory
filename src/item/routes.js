const router = require('express').Router();
const item = require('./controller');

router.post('/items', item.create);
router.get('/items', item.getAll);
router.patch('/items/:id', item.update);
router.delete('/items/:id', item.delete);


module.exports = router;
