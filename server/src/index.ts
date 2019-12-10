import cors from 'cors';
import express from 'express';

import colorRoutes from './routes';
import connectDb from './util/connection';

const app = express();
app.use(cors());
app.use('/json', colorRoutes);

connectDb().then(() => app.listen(process.env.PORT || 8080));
