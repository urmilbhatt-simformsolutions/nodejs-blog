import 'dotenv/config';
import express from 'express';
import expressEjsLayouts from 'express-ejs-layouts';

import router from './server/router/index.js';

const app = express();
const PORT = 5000 || process.env.PORT;

app.use(express.static('public'));

// Templating Engine
app.use(expressEjsLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use('/', router())

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});