import express from 'express';
import home_router from '../routes/home.js';

const app = express();
const PORT = 6248;

app.use('/', home_router);

app.listen(PORT, () => console.log(`The node and sprout server is running on http://localhost:${PORT}`));