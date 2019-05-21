'use strict';

const VehicleConstructor = require('./vehicle-constructor.js');


// Implement a car and motorcycle using a Constructor
const mazda = new VehicleConstructor.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new VehicleConstructor.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

// Implement a car and motorcycle using a Class
const VehicleClass = require('./vehicle-class.js');

const elCamino = new VehicleClass.Car('El Camino');
console.log(elCamino.name, elCamino.drive(), elCamino.stop());

const ninja = new VehicleClass.Motorcycle('Ninja');
console.log(ninja.name, ninja.wheelie(), ninja.stop());

// Implement a car and motorcycle using a Factory
const VehicleFactory = require('./vehicle-factory.js');

const robin = new VehicleFactory.CarFactory('Relient Robin');
console.log(robin.name, robin.drive(), robin.stop());

const razor = new VehicleFactory.Motorcycle('Razor Scooter');
console.log(razor.name, razor.wheelie(), razor.stop());