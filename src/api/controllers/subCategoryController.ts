import { Request, Response } from 'express';

const SubCategory = require('../models/subCategoryModel');

export const getSubCategories = async (req: Request, res: Response) => {
  try {
      const subCategories = await SubCategory.find();
      res.json(subCategories);
  } catch (error: any) {
      res.status(500).send(error.message);
  }
};

export const createSubCategory = async (req: Request, res: Response) => {
  try {
    const newSubCategory = new SubCategory(req.body);
    const savedSubCategory = await newSubCategory.save();
    res.status(201).json(savedSubCategory);
  } catch (error: any) {
      res.status(400).send(error.message);
  }
};

export const updateSubCategory = async (req: Request, res: Response) => {
  try {
    const updatedSubCategory = await SubCategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedSubCategory);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};

export const deleteSubCategory = async (req: Request, res: Response) => {
  try {
    await SubCategory.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
