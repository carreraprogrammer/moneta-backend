// src/app.ts
import express from 'express';
import categoryRoutes from './api/routes/categoryRoutes'
import subCategoryRoutes from './api/routes/subCategoryRoutes';
import productRoutes from './api/routes/productRoutes';
import invalidPathHandler from './api/middlewares/errorPathMiddleware';

const app = express();
const dbConnect = require('./db/dbConnect');

dbConnect();

app.use(express.json());

app.use('/api/categories', categoryRoutes);
app.use('/api/subcategories', subCategoryRoutes);
app.use('/api/products', productRoutes);

app.use(invalidPathHandler);

export default app;
