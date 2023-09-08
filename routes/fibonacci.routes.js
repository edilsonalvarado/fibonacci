const { getFibonacciFromIndex } = require('../controllers/fibonacci.controller');
const { param } = require("express-validator");
const router = require('express').Router();

router.get(
    '/fibonacci-from-index/:index',
    param('index').isInt({ min: 0 }),
    getFibonacciFromIndex
);

module.exports = router;