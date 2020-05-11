const router = require('express').Router();
const categoryController = require('../controller/categoryController');

router
  .route('/')
  .get(categoryController.getAllCategories)
  .post(categoryController.addNewCategory);

router.route('/:id').put(categoryController.updateCategory);

module.exports = router;
