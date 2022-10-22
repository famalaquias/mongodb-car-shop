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
		sinon.stub(carModel, 'readOne')
		.onCall(0).resolves(carMockWithId) 
		.onCall(1).resolves(null); 
		sinon.stub(carModel, 'update').resolves(carMockWithId);
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

	describe('ReadOne Car', () => {
		it('Success', async () => {
			const getCar = await carService.readOne(carMockWithId._id);
			expect(getCar).to.be.deep.equal(carMockWithId);
		});
		
		it('Failure', async () => {
			let error;
			
			try {
			await carService.readOne(carMockWithId._id);
		} catch (err:any) {
			error = err
		}
		
		expect(error, 'error should be defined').not.to.be.undefined;

		expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
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