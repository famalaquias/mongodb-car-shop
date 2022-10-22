// template para criação dos testes de cobertura da camada de model
import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import Car from '../../../models/Car';
import { carId, carMock, carMockWithId } from '../../unit/mocks/cars.mock'

describe('Car Model', () => {
	const carModel = new Car();

  before(() => {
		sinon.stub(Model, 'create').resolves(carMockWithId);
		sinon.stub(Model, 'find').resolves([carMockWithId]);
		sinon.stub(Model, 'findOne').resolves(carMockWithId);
	});

	after(() => {
		sinon.restore();
	})

	describe('Creating a Car', () => {
		it('successfully created', async () => {
			const newCar = await carModel.create(carMock);
			expect(newCar).to.be.deep.equal(carMockWithId);
		});
	});

	describe('Changing a Car', () => {
		it('Successfuly changed', async () => {
			const carChanged = await carModel.read();
			expect(carChanged).to.be.deep.equal([carMockWithId]);
		});
	});

	describe('Searching a Car', () => {
		it('successfully found', async () => {
			const carFound = await carModel.readOne('62cf1fc6498565d94eba52cd');
			expect(carFound).to.be.deep.equal(carMockWithId);
		});
		
		it('_id not found', async () => {
			try {
				await carModel.readOne('123ERRADO');
		} catch (error: any) {
			expect(error.message).to.be.eq('InvalidMongoId');
		}
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