import express from 'express';

import main from './main.js';

const router = express.Router();

export default () => {
    main(router);
    
    return router;
}