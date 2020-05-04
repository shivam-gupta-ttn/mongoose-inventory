const router = require('express').Router();
const user = require('./controller');

router.post('/', user.create);
router.get('/', user.getAll);
router.get('/', user.getByName);
router.put('/', user.update);
router.delete('/:id', user.delete);


module.exports = router;
