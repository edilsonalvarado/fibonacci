const router = require('express').Router();
const fibonacciRouter = require('./fibonacci.routes');

router.use('/api', fibonacciRouter);

module.exports = router;