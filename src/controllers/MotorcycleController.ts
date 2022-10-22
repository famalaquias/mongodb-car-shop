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
}