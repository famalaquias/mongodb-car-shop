// template para criação dos testes de cobertura da camada de controller
import { expect } from 'chai';
import * as sinon from 'sinon';
import { Request, Response } from 'express';
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

  before(() => {
    sinon.stub(carService, 'create').resolves(carMock);
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore()
  })

  describe('Create Car', () => {
    it('Success', async () => {
      req.body = carMock;

      await carController.create(req, res);

      const statusStub = res.status as sinon.SinonStub;
      expect(statusStub.calledWith(201)).to.be.true;

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