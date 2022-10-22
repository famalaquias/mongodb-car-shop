import { ICar, CarZodSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';
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

  // Requisito 09:
  public async readOne(_id: string): Promise<ICar> {
    const result = await this._model.readOne(_id);

    if (!result) throw new Error(ErrorTypes.EntityNotFound);

    return result;
  }

  // Requisito 13:
  public async update(_id: string, obj:unknown): Promise<ICar> {
    const parsedUpdate = CarZodSchema.safeParse(obj);

    if (!parsedUpdate.success) throw parsedUpdate.error;

    const result = await this._model.update(_id, parsedUpdate.data);
    if (!result) throw new Error(ErrorTypes.EntityNotFound);

    return result;
  }
}