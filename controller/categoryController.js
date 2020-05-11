const Category = require('../model/categoryModel');

exports.getAllCategories = async (req, res, next) => {
  const categories = await Category.find({});
  res.status(200).json({
    status: 'success',
    data: { categories },
    length: categories.length
  });
};

exports.addNewCategory = async (req, res, next) => {
  const category = await Category.create(req.body);
  res.status(201).json({
    status: 'success',
    data: { category }
  });
};

exports.updateCategory = async (req, res, next) => {
  const { id } = req.params;
  const category = await Category.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    status: 'success',
    data: { category }
  });
};
