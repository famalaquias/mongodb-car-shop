import { Router } from 'express';
import Motorcycle from '../models/MotorcycleModel';
import MotorcycleServices from '../services/MotorcycleService';
import MotorcycleControllers from '../controllers/MotorcycleController';

const MotorcycleRoute = Router();

const motorcycle = new Motorcycle();
const motorcycleServices = new MotorcycleServices(motorcycle);
const motorcycleControllers = new MotorcycleControllers(motorcycleServices);

MotorcycleRoute.post('/motorcycles', (req, res) => motorcycleControllers.create(req, res));
MotorcycleRoute.get('/motorcycles', (req, res) => motorcycleControllers.read(req, res));
MotorcycleRoute.get('/motorcycles/id', (req, res) => motorcycleControllers.readOne(req, res));

export default MotorcycleRoute;