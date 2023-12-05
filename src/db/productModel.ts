import mongoose, { Schema, model, Document } from 'mongoose';

interface IProduct extends Document {
  name: string;
  productInfo: string;
  price: number;
  image: string;
}

const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    unique: true,
  },
  productInfo: {
    type: String,
    required: [true, 'Please provide product information'],
    length: [50, 'Product information must be at least 50 characters long']
  },
  price: {
    type: Number,
    required: [true, 'Please provide a price'],
  },
  image: {
    type: String,
    required: false,
  }
});

module.exports = mongoose.models.Product || model<IProduct>('Product', productSchema);