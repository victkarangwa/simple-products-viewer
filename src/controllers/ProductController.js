import HttpStatus from 'http-status-codes';
import { products } from '../constants/products';
import Response from '../helpers/Response';

class ProductController {
  static async getAllProducts(req, res) {
    const sortedProducts = products.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    const items = sortedProducts.slice(0, 10)
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
}

export default ProductController;
