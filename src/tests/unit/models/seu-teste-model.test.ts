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