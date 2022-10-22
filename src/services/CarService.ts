import { ICar, CarZodSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import IService from '../interfaces/IService';

export default class CarService implements IService<ICar> {
  constructor(private _model: IModel<ICar>) { }

  // Requisito 04:
  public async create(obj: unknown): Promise<ICar> {
    const parsed = CarZodSchema.safeParse(obj);

    if (!parsed.success) {
      throw parsed.error;
    }
    return this._model.create(parsed.data);
  }

  // Requisito 08:
  public async read(): Promise<ICar[]> {
    return this._model.read();
  }
}