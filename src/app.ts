import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/errorHandler';
import CarRoute from './routes/CarRoutes';
import MotorcycleRoute from './routes/MotorcycleRoutes';

const app = express();

app.use(express.json());

app.use(CarRoute);
app.use(MotorcycleRoute);

app.use(errorHandler);

export default app;
