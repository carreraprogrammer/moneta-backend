const express = require('express');
const app = express();

const dbConnect = require('./config/dbConnect');

const Category = require('./routes/category');
const SubCategory = require('./routes/subCategory');
const Product = require('./routes/product');

dbConnect();

export default app;
