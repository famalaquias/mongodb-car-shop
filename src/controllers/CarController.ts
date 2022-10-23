import { Request, Response, NextFunction } from 'express';
import { ICar } from '../interfaces/ICar';
import IService from '../interfaces/IService';

export default class CarsController {
  constructor(private _service: IService<ICar>) { }

  // Requisito 04:
  public async create(
    req: Request,
    res: Response<ICar>,
    next: NextFunction,
  ) {
    try {
      const result = await this._service.create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }

  // Requisito 08:
  public async read(
    req: Request,
    res: Response<ICar[]>,
    next: NextFunction,
  ) {
    try {
      const result = await this._service.read();
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  // Requisito 09:
  public async readOne(
    req: Request,
    res: Response<ICar>,
    next: NextFunction,
  ) {
    try {
      const result = await this._service.readOne(req.params.id);
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  // Requisito 13:
  public async update(
    req: Request,
    res: Response<ICar>,
    next: NextFunction,
  ) {
    try {
      const result = await this._service.update(req.params.id, req.body);
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  // Requisito 17:
  public async delete(
    req: Request,
    res: Response<ICar>,
    next: NextFunction,
  ) {
    try {
      const result = await this._service.delete(req.params.id);
      return res.status(204).json(result);
    } catch (error) {
      next(error);
    }
  }
}