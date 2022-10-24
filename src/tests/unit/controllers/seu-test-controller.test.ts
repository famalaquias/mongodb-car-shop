// template para criação dos testes de cobertura da camada de controller
import { expect } from 'chai';
import * as sinon from 'sinon';
import { NextFunction, Request, Response } from 'express';
import Car from '../../../models/Car';
import CarServices from '../../../services/CarService';
import CarControllers from '../../../controllers/CarController';
import { carMock, carMockWithId } from '../../unit/mocks/cars.mock';

describe('Car Controller', () => {
  const carModel = new Car()
  const carService = new CarServices(carModel);
  const carController = new CarControllers(carService);

  const req = {} as Request; 
  const res = {} as Response;
  const next = {} as NextFunction;

  before(() => {
    sinon.stub(carService, 'create').resolves(carMock);
    sinon.stub(carService, 'read').resolves([carMockWithId]);
    sinon.stub(carService, 'readOne').resolves(carMock);
    sinon.stub(carService, 'update').resolves(carMock);
    sinon.stub(carService, 'delete').resolves(carMock);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore()
  })

  describe('Create Car', () => {
    it('success', async () => {
      req.body = carMock;

      await carController.create(req, res, next);

      const statusStub = res.status as sinon.SinonStub;
      expect(statusStub.calledWith(201)).to.be.true;

      const jsonStub = res.json as sinon.SinonStub;
      expect(jsonStub.calledWith(carMock)).to.be.true;
    });
  });

  describe('Read Car', () => {
    it('success', async () => {
      await carController.read(req, res, next);

      const statusStub = res.status as sinon.SinonStub;
      expect(statusStub.calledWith(200)).to.be.true;

      const jsonStub = res.json as sinon.SinonStub;
      expect(jsonStub.calledWith([carMockWithId])).to.be.true;
    });
  });

  describe('ReadOne Car', () => {
    it('success', async () => {
      req.params = { id: carMockWithId._id };

      await carController.readOne(req, res, next);

      const statusStub = res.status as sinon.SinonStub;
      expect(statusStub.calledWith(200)).to.be.true;

      const jsonStub = res.json as sinon.SinonStub;
      expect(jsonStub.calledWith(carMock)).to.be.true;
    });
  });

  describe('Update Car', () => {
    it('success', async () => {
      req.params = { id: carMockWithId._id };
      req.body = { ...carMock };

      await carController.update(req, res, next);

      const statusStub = res.status as sinon.SinonStub;
      expect(statusStub.calledWith(200)).to.be.true;

      const jsonStub = res.json as sinon.SinonStub;
      expect(jsonStub.calledWith(carMock)).to.be.true;
    });
  }); 
  
  describe('Delete Car', () => {
    it('success', async () => {
      req.params = { id: carMockWithId._id };

      await carController.delete(req, res, next);

      const statusStub = res.status as sinon.SinonStub;
      expect(statusStub.calledWith(204)).to.be.true;

      const jsonStub = res.json as sinon.SinonStub;
      expect(jsonStub.calledWith(carMock)).to.be.true;
    });
  });   
});

// import * as sinon from 'sinon';
// import chai from 'chai';
// const { expect } = chai;

// describe('Sua descrição', () => {

//   before(async () => {
//     sinon
//       .stub()
//       .resolves();
//   });

//   after(()=>{
//     sinon.restore();
//   })

//   it('', async () => {});

// });