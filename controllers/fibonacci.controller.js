const { validationResult} = require('express-validator');


exports.getFibonacciFromIndex = (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        const { index } = req.params;

        if (index === 0) {
            return res.status(200).json(0);
        } else if (index === 1) {
            return res.status(200).json(1);
        } else {
            let previous = 0;
            let current = 1;
            let result = 1;

            for (let i = 2; i <= index; i++) {
                result = previous + current;
                previous = current;
                current = result;
            }
            return res.status(200).json(result);
        }
    } catch (e) {
        return res.json(e);
    }
}


