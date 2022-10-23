import { Request, Response } from 'express';
import IService from '../interfaces/IService';
import { IMotorcycle } from '../interfaces/IMotorcycle';

export default class MotorcycleController {
  constructor(private _service: IService<IMotorcycle>) { }

  // Requisito 19:
  public async create(
    req: Request,
    res: Response<IMotorcycle>,
  ) {
    const result = await this._service.create(req.body);
    return res.status(201).json(result);
  }

  // Requisito 20:
  public async read(
    req: Request,
    res: Response<IMotorcycle[]>,
  ) {
    const result = await this._service.read();
    return res.status(200).json(result);
  }

  // Requisito 21:
  public async readOne(
    req: Request,
    res: Response<IMotorcycle>,
  ) {
    const result = await this._service.readOne(req.params.id);
    return res.status(200).json(result);
  }

  // Requisito 22:
  public async update(
    req: Request,
    res: Response<IMotorcycle>,
  ) {
    const result = await this._service.update(req.params.id, req.body);
    return res.status(200).json(result);
  }

  // Requisito 23:
  public async delete(
    req: Request,
    res: Response<IMotorcycle>,
  ) {
    const result = await this._service.delete(req.params.id);
    return res.status(204).json(result);
  }
}