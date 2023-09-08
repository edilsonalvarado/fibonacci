# Fibonacci API

[![Node.js Version](https://img.shields.io/badge/Node.js-16.20.2-brightgreen.svg)](https://nodejs.org/)
[![npm Version](https://img.shields.io/badge/npm-8.19.4-brightgreen.svg)](https://www.npmjs.com/)
[![cors Version](https://img.shields.io/badge/cors-2.8.5-brightgreen.svg)](https://www.npmjs.com/package/cors)
[![dotenv Version](https://img.shields.io/badge/dotenv-16.3.1-brightgreen.svg)](https://www.npmjs.com/package/dotenv)
[![Express.js Version](https://img.shields.io/badge/Express.js-4.18.2-brightgreen.svg)](https://expressjs.com/)
[![express-validator Version](https://img.shields.io/badge/express--validator-7.0.1-brightgreen.svg)](https://www.npmjs.com/package/express-validator)
[![Nodemon Version](https://img.shields.io/badge/Nodemon-3.0.1-brightgreen.svg)](https://www.npmjs.com/package/nodemon)


## Description

This README file explains the `getFibonacciFromIndex` function and its associated route in the Fibonacci API. The code calculates the Fibonacci value at a specific index and returns it as a JSON response.

## `getFibonacciFromIndex` Function

The `getFibonacciFromIndex` function is responsible for calculating the Fibonacci value at a given index and returning it as a JSON response. It follows these steps:

1. **Input Validation**: It first checks for validation errors using the `express-validator` library. If there are validation errors (e.g., if the index is not an integer or is less than 0), it returns a 400 Bad Request response with the validation errors.

2. **Index Calculation**: If the input is valid, it extracts the `index` parameter from the request's URL.

3. **Fibonacci Calculation**: Depending on the value of `index`, it calculates the Fibonacci value using an iterative approach. If `index` is 0 or 1, it returns the corresponding value directly. Otherwise, it iteratively calculates the Fibonacci value using a loop.

4. **Response**: Finally, it sends a JSON response with the calculated Fibonacci value and a 200 OK status code.

## Route Configuration

The `getFibonacciFromIndex` function is associated with the following route:

- `GET /fibonacci-from-index/:index`: This route expects an integer `index` as a parameter in the URL. It uses the `express-validator` middleware to validate that the `index` is an integer greater than or equal to 0. If the validation passes, it calls the `getFibonacciFromIndex` function to calculate and return the Fibonacci value.

## Technical Decisions

- **Input Validation**: Input validation is performed to ensure that the `index` parameter is a valid integer and is greater than or equal to 0. This helps prevent invalid requests and improves the API's robustness.

- **Iterative Calculation**: The code uses an iterative approach to calculate the Fibonacci value. This approach is efficient and avoids potential stack overflow issues that can occur with a recursive solution for large indices.

## Future Optimizations

Here are some potential optimizations for the code:

- **Caching**: Implement caching to store previously calculated Fibonacci values for specific indices. This can improve response times for frequently requested values.

- **Error Handling**: Improve error handling by providing more descriptive error messages and status codes for different error scenarios.

- **Endpoint Documentation**: Add detailed documentation to describe the API endpoints, including input requirements and response formats.

- **Testing**: Implement unit tests and integration tests to ensure the correctness and reliability of the API.

- **Security**: Consider security best practices, such as rate limiting, to protect against potential abuse of the API.

## Conclusion

The `getFibonacciFromIndex` function and its associated route provide a simple and efficient way to calculate and retrieve Fibonacci values at specific indices. By following input validation and error-handling best practices, and considering future optimizations, this API can be a reliable and performant tool for Fibonacci calculations.