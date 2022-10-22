import { Router } from 'express';
import Car from '../models/Car';
import CarServices from '../services/CarService';
import CarControllers from '../controllers/CarController';

const CarRoute = Router();

const car = new Car();
const carServices = new CarServices(car);
const carControllers = new CarControllers(carServices);

CarRoute.post('/cars', (req, res) => carControllers.create(req, res));
// CarRoute.get('/cars', (req, res) => carControllers.read(req, res));

export default CarRoute;