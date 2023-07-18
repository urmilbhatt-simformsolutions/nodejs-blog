import 'dotenv/config';
import express from 'express';

const app = express();
const PORT = 5000 || process.env.PORT;

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});