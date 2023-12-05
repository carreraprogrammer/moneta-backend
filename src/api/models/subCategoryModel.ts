import mongoose, { Schema, model, Document } from "mongoose";

interface ISubCategory extends Document {
  name: string;
  products: Schema.Types.ObjectId[];
}

const subCategorySchema = new Schema<ISubCategory>({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    unique: true,
  },
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
});

module.exports = mongoose.models.SubCategory || model<ISubCategory>("SubCategory", subCategorySchema);