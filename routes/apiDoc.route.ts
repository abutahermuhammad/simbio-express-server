import { Router } from "express";
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../src/assets/open-api.json';

// Creating an Express Router instance
const router = Router();


const options = {
  explorer: true
};

router.use(swaggerUi.serve)
router.route('/doc')
    .get(swaggerUi.setup(swaggerDocument, options));

// Export the router to make it available for use in other parts of the application
export default router;
