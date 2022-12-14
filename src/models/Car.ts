import { model as mongooseCreateModel, Schema } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import MongoModel from './MongoModel';

const carMongooseSchema = new Schema<ICar>(
  {
    model: String,
    year: Number,
    color: String,
    status: { type: Boolean, required: false },
    buyValue: Number,
    doorsQty: Number, 
    seatsQty: Number,
  },
  { versionKey: false }, // solução proposta pelo colega de turma: Rafael Moraes.
);

export default class Car extends MongoModel<ICar> {
  constructor(model = mongooseCreateModel('Car', carMongooseSchema)) {
    super(model);
  }
}
