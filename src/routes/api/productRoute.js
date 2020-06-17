import express from 'express';
import ProductController from '../../controllers/ProductController';
import Validator from '../../middlewares/Validate';
import inputError from '../../middlewares/inputError'


const productRoute = express.Router();


productRoute.post(
  '/',
  ProductController.getAllProducts
);

productRoute.post(
  '/:id',
  Validator.productRules(),
  ProductController.getProduct
);


export default productRoute;
