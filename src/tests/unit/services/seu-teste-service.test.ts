// template para criação dos testes de cobertura da camada de service
import { expect } from 'chai';
import chai from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import Car from '../../../models/Car';
import CarServices from '../../../services/CarService';
import { carMock, carMockWithId } from '../../unit/mocks/cars.mock';

describe('Car Service', () => {
	const carModel = new Car();
	const carService = new CarServices(carModel);

  before(() => {
		sinon.stub(carModel, 'create').resolves(carMockWithId);
		sinon.stub(carModel, 'read').resolves([carMockWithId]);
	})

	after(() => {
		sinon.restore()
	})

  describe('Create Car', () => {
		it('Success', async () => {
			const carCreate = await carService.create(carMock);
      expect(carCreate).to.be.deep.equal(carMockWithId);
		});

    it('Faill', async () => {
			let error;
			try {
				await carService.create({});
			} catch (err) {
				error = err;
			}
      expect(error).to.be.instanceOf(ZodError);
		});
	});

	describe('Read all Cars', () => {
		it('Success', async () => {
			const allCars = await carService.read();		
			expect(allCars).to.be.deep.equal([carMockWithId]);
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