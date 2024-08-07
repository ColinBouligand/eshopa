const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const PRODUCT_ROUTE = '/product'

// Product routes
router.get(PRODUCT_ROUTE, productController.getProducts);

module.exports = router;