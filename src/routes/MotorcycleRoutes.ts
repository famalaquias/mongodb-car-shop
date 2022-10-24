import { Router } from 'express';
import Motorcycle from '../models/MotorcycleModel';
import MotorcycleServices from '../services/MotorcycleService';
import MotorcycleControllers from '../controllers/MotorcycleController';

const MotorcycleRoute = Router();

const motorcycle = new Motorcycle();
const motorcycleServices = new MotorcycleServices(motorcycle);
const motorcycleControllers = new MotorcycleControllers(motorcycleServices);

MotorcycleRoute.get('/:id', (req, res) => motorcycleControllers.readOne(req, res));
MotorcycleRoute.put('/:id', (req, res) => motorcycleControllers.update(req, res));
MotorcycleRoute.delete('/:id', (req, res) => motorcycleControllers.delete(req, res));
MotorcycleRoute.post('/', (req, res) => motorcycleControllers.create(req, res));
MotorcycleRoute.get('/', (req, res) => motorcycleControllers.read(req, res));

export default MotorcycleRoute;