import IService from '../interfaces/IService';
import { IMotorcycle, MotorcycleZodSchema } from '../interfaces/IMotorcycle';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

export default class MotorcycleService implements IService<IMotorcycle> {
  constructor(private _model: IModel<IMotorcycle>) { }

  // Requisito 19:
  public async create(obj: unknown): Promise<IMotorcycle> {
    const parsed = MotorcycleZodSchema.safeParse(obj);

    if (!parsed.success) throw parsed.error;

    return this._model.create(parsed.data);
  }

  // Requisito 20:
  public async read(): Promise<IMotorcycle[]> {
    return this._model.read();
  }

  // Requisito 21:
  public async readOne(_id: string): Promise<IMotorcycle> {
    const result = await this._model.readOne(_id);

    if (!result) throw new Error(ErrorTypes.EntityNotFound);

    return result;
  }

  // Requisito 22:
  public async update(_id: string, obj:unknown): Promise<IMotorcycle> {
    const parsedUpdate = MotorcycleZodSchema.safeParse(obj);

    if (!parsedUpdate.success) throw parsedUpdate.error;

    const result = await this._model.update(_id, parsedUpdate.data);

    if (!result) throw new Error(ErrorTypes.EntityNotFound);

    return result;
  }
}