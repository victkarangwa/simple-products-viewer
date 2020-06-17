import { check, validationResult } from 'express-validator';
import Response from '../helpers/Response';
import HttpStatus from 'http-status-codes';


class Validator {
  static productRules() {
    return [check('id', 'Please provide valid pruduct ID').isUUID()];
  }

  static newProductRules() {
        const d = new Date();
        const year = d.getFullYear();
        const month = d.getMonth();
        const day = d.getDate();
        const MaxDate = new Date(year , month, day).toDateString();
    return [
      check('name', 'Please provide valid product name').isString(),
      check('price', 'Please provide valid product price').isString(),
      check('md', 'Please provide valid manifacture date(as md) [format: DD-MM-YYYY]').isBefore(
        MaxDate
      ),
    ];
  }
}
export default Validator;
