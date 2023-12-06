"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const invalidPathHandler = (req, res, next) => {
    res.status(404).send('Invalid path');
};
exports.default = invalidPathHandler;
