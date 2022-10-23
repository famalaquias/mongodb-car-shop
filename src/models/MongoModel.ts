import { isValidObjectId, Model } from 'mongoose';
import { IModel } from '../interfaces/IModel';

export default abstract class MongoModel<T> implements IModel<T> {
  protected _model:Model<T>;

  constructor(model:Model<T>) {
    this._model = model;
  }

  // Requisito 04:
  public async create(obj:T):Promise<T> {
    return this._model.create({ ...obj });
  }

  // Requisito 08:
  public async read(): Promise<T[]> {
    return this._model.find();
  }

  // Requisito 09:
  public async readOne(_id:string):Promise<T | null> {
    if (!isValidObjectId(_id)) throw new Error('InvalidMongoId');
    return this._model.findOne({ _id });
  }

  // Requisito 13:
  public async update(_id: string, obj: T): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new Error('InvalidMongoId');
    return this._model.findByIdAndUpdate({ _id, obj });
  }

  // Requisito 17:
  public async delete(_id:string): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new Error('InvalidMongoId');
    return this._model.findByIdAndDelete({ _id });
  }
}