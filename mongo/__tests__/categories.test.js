'use strict';

require('@code-fellows/supergoose');

const Categories = require('../categories/categories.js');
describe('Categories', () => {

  let categories;

  beforeEach(() => {
    categories = new Categories();
  });

  it('post(): can post a new category', () => {
    let obj = { name: 'Test1 Category' };
    return categories.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('get(): can get a category', () => {
    let obj = { name: 'Test2 Category' };
    return categories.create(obj)
      .then(record => {
        return categories.get(record._id)
          .then(category => {
            Object.keys(obj).forEach(key => {
              expect(category[key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('update(): can update a category', () => {
    let obj = { name: 'dude' };
    return categories.create(obj)
      .then(record => {
        record.name = 'update() test';
        return categories.update(record._id,record)
          .then(newCategory => {
            return categories.get(newCategory._id)
              .then(category=>{
                Object.keys(obj).forEach(key => {
                  expect(category[key]).toEqual(newCategory[key]);
                });
              });
          });
      });
  });

  it('delete(): can delete a category', () => {
    let obj = { name: 'my dog' };
    return categories.create(obj)
      .then(record => {
        return categories.get(record._id)
          .then(category => {
            return categories.delete(category._id)
              .then(()=>{
                return categories.get(category._id)
                  .then(category=>{
                    expect(category).toBe(null);
                  });
              });
          });
      });
  });
});