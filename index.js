'use strict';

const mongoose = require('mongoose');
const Products = require('./mongo/product/products-schema.js');

const MONGOOSE_URI = 'mongodb://localhost:27017/lab05db';

mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true});

mongoose.set('useFindAndModify', false);
const product = new Products({price:15, weight:150, quantity_in_stock:250});

product.save();
