import { Router } from 'express';
import productRoute from './productRoute';

const router = Router();

router.use('/products', productRoute);

export default router;
