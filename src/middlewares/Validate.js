import { check, validationResult } from 'express-validator';
import Response from '../helpers/Response';
import HttpStatus from 'http-status-codes';


class Validator {

  static productRules() {
      
    return [
      check('id', 'Please provide valid pruct ID').isUUID(),
    ];
  }

}
export default Validator;
