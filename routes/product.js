const express = require('express');
const { add, get, getAll, remove, update } = require('../controllers/product');

const router = express.Router();

router.get('/products', getAll);
router.get('/products/:id', get);
router.post('/products', add);
router.delete('/products/:id', remove);
router.put('/products/:id', update);

module.exports = router;
