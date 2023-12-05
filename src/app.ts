const express = require('express');
const app = express();

const dbConnect = require('./db/dbConnect');

dbConnect();

export default app;
