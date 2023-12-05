import exp from 'constants';
import { Request, Response } from 'express';

const Product = require('../models/productModel');

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const updateProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updateProduct);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};