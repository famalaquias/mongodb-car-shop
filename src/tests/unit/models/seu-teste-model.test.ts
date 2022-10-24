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
		sinon.stub(Model, 'findByIdAndUpdate').resolves(carMockWithId);
		sinon.stub(Model, 'findByIdAndDelete').resolves(carMockWithId);
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

	describe('Searching all Car', () => {
		it('successfuly found', async () => {
			const carAll = await carModel.read();
			expect(carAll).to.be.deep.equal([carMockWithId]);
		});
	});

	describe('Searching a Car', () => {
		it('successfully found', async () => {
			const carSearching = await carModel.readOne('62cf1fc6498565d94eba52cd');
			expect(carSearching).to.be.deep.equal(carMockWithId);
		});
		
		it('_id not found', async () => {
			try {
				await carModel.readOne('123ERRADO');
		} catch (error: any) {
			expect(error.message).to.be.eq('InvalidMongoId');
		}
		});
	});

	describe('Updating a Car', () => {
		it('successfully update', async () => {
			const carUpdate = await carModel.update(carId, carMockWithId);
			expect(carUpdate).to.be.deep.equal(carMockWithId);
		});
			
		it('_id not found', async () => {
			try {
				await carModel.update('123ERRADO', carMock);
		} catch (error: any) {
			expect(error.message).to.be.eq('InvalidMongoId');
		}
		});
	});

	describe('Deleting a Car', () => {
		it('successfully delete', async () => {
			const carDelete = await carModel.delete('62cf1fc6498565d94eba52cd');
			expect(carDelete).to.be.deep.equal(carMockWithId);
		});
			
		it('_id not found', async () => {
			try {
				await carModel.delete('123ERRADO');
		} catch (error: any) {
			expect(error.message).to.be.eq('InvalidMongoId');
		}
		});
	});
});

// template para criação dos testes de cobertura da camada de model
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