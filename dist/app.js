"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
const express_1 = __importDefault(require("express"));
const categoryRoutes_1 = __importDefault(require("./api/routes/categoryRoutes"));
const subCategoryRoutes_1 = __importDefault(require("./api/routes/subCategoryRoutes"));
const productRoutes_1 = __importDefault(require("./api/routes/productRoutes"));
const app = (0, express_1.default)();
const dbConnect = require('./db/dbConnect');
dbConnect();
app.use(express_1.default.json());
app.use('/api/categories', categoryRoutes_1.default);
app.use('/api/subcategories', subCategoryRoutes_1.default);
app.use('/api/products', productRoutes_1.default);
exports.default = app;
