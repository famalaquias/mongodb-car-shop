// template para criação dos testes de cobertura da camada de service
import { expect } from 'chai';
import chai from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import Car from '../../../models/Car';
import CarServices from '../../../services/CarService';
import { carId, carMock, carMockWithId, carMockUpdate } from '../../unit/mocks/cars.mock';

describe('Car Service', () => {
	const carModel = new Car();
	const carService = new CarServices(carModel);

  before(() => {
		sinon.stub(carModel, 'create').resolves(carMockWithId);
		sinon.stub(carModel, 'read').resolves([carMockWithId]);
		sinon.stub(carModel, 'readOne')
		.onCall(0).resolves(carMockWithId) 
		.onCall(1).resolves(null); 
		sinon.stub(carModel, 'update')
		.onCall(0).resolves(carMockWithId) 
		.onCall(1).resolves(null); 
		sinon.stub(carModel, 'delete')
		.onCall(0).resolves(carMockWithId) 
		.onCall(1).resolves(null)
		.onCall(2).resolves(null); 
	})

	after(() => {
		sinon.restore()
	})

  describe('Create Car', () => {
		it('success', async () => {
			const carCreate = await carService.create(carMock);
      expect(carCreate).to.be.deep.equal(carMockWithId);
		});

    it('faill', async () => {
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
		it('success', async () => {
			const carAll = await carService.read();		
			expect(carAll).to.be.deep.equal([carMockWithId]);
		});
	});

	describe('ReadOne Car', () => {
		it('success', async () => {
			const carRead = await carService.readOne(carMockWithId._id);
			expect(carRead).to.be.deep.equal(carMockWithId);
		});
		
		it('faill', async () => {
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

	describe('Update Car', () => {
		it('success', async () => {
			const carUpdate = await carService.update(carMockWithId._id, carMock);
			expect(carUpdate).to.be.deep.equal(carMockWithId);
		});
		
		it('faill: id invalidation', async () => {
			let error;
			
			try {
			await carService.update('123ERRADO', carMock);
		} catch (err:any) {
			error = err
		}
		
		expect(error.message).to.be.equal(ErrorTypes.EntityNotFound);
		});
	});

	describe('Delete Car', () => {
		it('success', async () => {
			const carDelete = await carService.delete(carId);
			expect(carDelete).to.be.deep.equal(carMockWithId);
		});
		
		it('faill', async () => {
			let error;
			
			try {
			await carService.delete(carMockWithId._id);
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