"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSubCategory = exports.updateSubCategory = exports.createSubCategory = exports.getSubCategories = void 0;
const SubCategory = require('../models/subCategoryModel');
const getSubCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const subCategories = yield SubCategory.find();
        res.json(subCategories);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
exports.getSubCategories = getSubCategories;
const createSubCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, category } = req.body;
    if (!name) {
        return res.status(400).send('Name is required');
    }
    if (!category) {
        return res.status(400).send('Category is required');
    }
    const existingSubCategory = SubCategory.findSubCategoryByName(name);
    if (existingSubCategory) {
        return res.status(400).send('SubCategory already exists');
    }
    try {
        const newSubCategory = new SubCategory(req.body);
        const savedSubCategory = yield newSubCategory.save();
        res.status(201).json(savedSubCategory);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.createSubCategory = createSubCategory;
const updateSubCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedSubCategory = yield SubCategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedSubCategory);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.updateSubCategory = updateSubCategory;
const deleteSubCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield SubCategory.findByIdAndDelete(req.params.id);
        res.status(204).send();
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
exports.deleteSubCategory = deleteSubCategory;
