const Category = require('../model/categoryModel');

exports.getAllCategories = async (req, res, next) => {
  const categories = await Category.find({});
  res.status(200).json({
    status: 'success',
    data: { categories },
    length: categories.length
  });
};
