import HttpStatus from 'http-status-codes';
import { v4 as uuidv4 } from 'uuid';
// import { products } from '../constants/products';
import Response from '../helpers/Response';

let products = [];
class ProductController {
  static async getAllProducts(req, res) {
    const sortedProducts = products.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    const items = sortedProducts.slice(0, 10);
    try {
      return Response.successMessage(
        res,
        `All products retrieved successfully`,
        items,
        HttpStatus.OK
      );
    } catch (err) {
      console.log(err);

      return Response.errorMessage(
        res,
        'Something went wrong. Please try again!',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  static async getProduct(req, res) {
    try {
      const { id } = req.params;

      const product = products.find((prod) => prod.id === id);

      if (!product) {
        return Response.errorMessage(
          res,
          'Product not found :(',
          HttpStatus.NOT_FOUND
        );
      }
      return Response.successMessage(
        res,
        'Product retrieved successfully',
        product,
        HttpStatus.OK
      );
    } catch (err) {
      return Response.errorMessage(res, err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  static async createProduct(req, res) {
    try {
      const { name, price, md } = req.body;
      const newProduct = { id: uuidv4(), name, price, md };
      products.push(newProduct);
      return Response.successMessage(
        res,
        'New product added successfully',
        products[products.length - 1],
        HttpStatus.OK
      );
    } catch (err) {
      return Response.errorMessage(res, err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

export default ProductController;
