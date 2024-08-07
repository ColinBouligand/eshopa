const express = require('express');
const router = express.Router();
const purchaseController = require('../controllers/purchaseController');

const PURCHASE_ROUTE = '/purchase'

// Product routes
router.get(PURCHASE_ROUTE, purchaseController.getPurchases);
router.post(PURCHASE_ROUTE, purchaseController.createPurchase);

module.exports = router;