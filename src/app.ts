// src/app.ts
import express from 'express';
import categoryRoutes from './api/routes/categoryRoutes'
import subCategoryRoutes from './api/routes/subCategoryRoutes';
import productRoutes from './api/routes/productRoutes';

const app = express();

app.use(express.json());

// Integrando rutas
app.use('/api/categories', categoryRoutes);
app.use('/api/subcategories', subCategoryRoutes);
app.use('/api/products', productRoutes);

// ... Resto de tu configuración de Express

export default app;
