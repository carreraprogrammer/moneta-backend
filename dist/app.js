"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const dbConnect = require('./db/dbConnect');
dbConnect();
exports.default = app;
