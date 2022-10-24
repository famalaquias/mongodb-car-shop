import { ICar } from "../../../interfaces/ICar";

const carId = '62cf1fc6498565d94eba52cd';

const carMock:ICar = {
  model: 'Ferrari',
  year: 2020,
  color: 'red',
  status: true,
  buyValue: 50000000,
  doorsQty: 2,
  seatsQty: 2,
};

const carMockWithId:ICar & { _id:string } = {
_id: '62cf1fc6498565d94eba52cd',
model: 'Ferrari',
year: 2020,
color: 'red',
status: true,
buyValue: 50000000,
doorsQty: 2,
seatsQty: 2,
};

const carMockUpdate: unknown = {
  model: 'Ferrari',
  year: 2020,
  color: 'red',
  status: true,
  buyValue: 50000000,
  doorsQty: 2,
  seatsQty: 2,
};

export { carId, carMock, carMockWithId, carMockUpdate };