'use strict';

const ModelData = require('../memory-data-model.js');
const schema = require('./categories-schema.js');

class Categories extends ModelData{
  constructor(){
    super(schema);
  }
}

module.exports = Categories;
