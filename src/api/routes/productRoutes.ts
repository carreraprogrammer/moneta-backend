import express from 'express';
import * as productController from '../controllers/productController';

const router = express.Router();

router.get('/', productController.getProducts);
router.post('/', productController.createProduct);
router.patch('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

export default router;