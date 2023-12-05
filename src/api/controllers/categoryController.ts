import { Request, Response } from 'express';

const Category = require('../models/categoryModel');

export const getCategories = async (req: Request, res: Response) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error: any) {
        res.status(500).send(error.message);
    }
};

export const createCategory = async (req: Request, res: Response) => {
    try {
        const newCategory = new Category(req.body);
        const savedCategory = await newCategory.save();
        res.status(201).json(savedCategory);
    } catch (error: any) {
        res.status(400).send(error.message);
    }
};

export const updateCategory = async (req: Request, res: Response) => {
    try {
        const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedCategory);
    } catch (error: any) {
        res.status(400).send(error.message);
    }
};

export const deleteCategory = async (req: Request, res: Response) => {
    try {
        await Category.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error: any) {
        res.status(500).send(error.message);
    }
};
