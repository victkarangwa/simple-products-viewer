import express from 'express';
import ProductController from '../../controllers/ProductController';
import Validator from '../../middlewares/Validate';
import inputError from '../../middlewares/inputError'


const productRoute = express.Router();


productRoute.get(
  '/',
  ProductController.getAllProducts
);

productRoute.get(
  '/:id',
  Validator.productRules(),
  inputError,
  ProductController.getProduct
);


export default productRoute;
