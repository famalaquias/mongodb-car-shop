import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import IService from '../interfaces/IService';

export default class CarsController {
  constructor(private _service: IService<ICar>) { }

  // Requisito 04:
  public async create(
    req: Request,
    res: Response<ICar>,
  ) {
    const result = await this._service.create(req.body);
    return res.status(201).json(result);
  }

  // Requisito 08:
  // public async read(
  //   req: Request,
  //   res: Response<ICar[]>,
  // ) {
  //   const result = await this._service.read();
  //   return res.status(201).json(result);
  // }
}