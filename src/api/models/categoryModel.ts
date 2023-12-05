import mongoose, { Schema, model, Document } from 'mongoose';

interface ICategory extends Document {
  name: string;
  subCategories: Schema.Types.ObjectId[];
}

const categorySchema = new Schema<ICategory>({
  name: { 
    type: String, 
    required: [true, 'Please provide a name'],
    unique: true,
  },
  subCategories: [{ type: Schema.Types.ObjectId, ref: 'SubCategory' }]
});

module.exports = mongoose.models.Category || model<ICategory>('Category', categorySchema);
