import IService from '../interfaces/IService';
import { IMotorcycle, MotorcycleZodSchema } from '../interfaces/IMotorcycle';
import { IModel } from '../interfaces/IModel';

export default class MotorcycleService implements IService<IMotorcycle> {
  constructor(private _model: IModel<IMotorcycle>) { }

  // Requisito 19:
  public async create(obj: unknown): Promise<IMotorcycle> {
    const parsed = MotorcycleZodSchema.safeParse(obj);

    if (!parsed.success) {
      throw parsed.error;
    }
    return this._model.create(parsed.data);
  }
}