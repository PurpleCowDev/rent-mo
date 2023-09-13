"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
function errorHandlerMiddleware(err, req, res, next) {
    console.log(err.message);
    const defaultError = {
        statusCode: err.statusCode || http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR,
        message: err.message || 'Something went wrong, please try again',
        name: err.name,
    };
    if (err.name === 'ValidationError') {
        defaultError.statusCode = http_status_codes_1.StatusCodes.BAD_REQUEST;
    }
    if ((err === null || err === void 0 ? void 0 : err.code) === 11000) {
        defaultError.statusCode = http_status_codes_1.StatusCodes.BAD_REQUEST;
        defaultError.message = `field has to be unique`;
    }
    res.status(200).json({ message: defaultError.message });
}
exports.default = errorHandlerMiddleware;
//# sourceMappingURL=error-handler.js.map