// seeds/seed.js
const mongoose = require('mongoose');
const dbConnect = require('../dist/db/dbConnect');
const Category = require('../dist/api/models/categoryModel');
const SubCategory = require('../dist/api/models/subCategoryModel');
const Product = require('../dist/api/models/productModel');

async function seedDB() {
    await dbConnect(); // Conexión a la base de datos

    // Limpieza de colecciones
    await Category.deleteMany({});
    await SubCategory.deleteMany({});
    await Product.deleteMany({});

    // Crear productos
    const productosHojaldre = [
        new Product({ name: 'Pastel de pollo', productInfo: 'Delicioso pastel de pollo en hojaldre', price: 4000 }),
        // ... otros productos
    ];
    for (const prod of productosHojaldre) {
        await prod.save();
    }

    const productosPasteleria = [
        new Product({ name: 'Porcion de torta', productInfo: 'Porción generosa de nuestra torta casera', price: 6000 }),
        // ... otros productos
    ];
    for (const prod of productosPasteleria) {
        await prod.save();
    }

    // Crear subcategorías y asignar productos
    const hojaldre = new SubCategory({
        name: 'Hojaldre',
        products: productosHojaldre.map(prod => prod._id)
    });
    await hojaldre.save();

    const pasteleria = new SubCategory({
        name: 'Pastelería',
        products: productosPasteleria.map(prod => prod._id)
    });
    await pasteleria.save();

    // Crear categoría y asignar subcategorías
    const acompañamientos = new Category({
        name: 'Acompañamientos',
        subCategories: [hojaldre._id, pasteleria._id]
    });
    await acompañamientos.save();

    console.log('Base de datos poblada con éxito');
    mongoose.connection.close();
}

seedDB().catch(err => {
    console.error(err);
    mongoose.connection.close();
});
