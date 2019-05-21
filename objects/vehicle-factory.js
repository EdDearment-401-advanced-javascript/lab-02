'use strict';

const Vehicle = () => ({
  drive: () => {
    return 'Moving Forward';
  },
  stop: () => {
    return 'Stopping';
  }
});

function CarFactory() {
  let car = Object.assign(
    {wheels: 4},
    {name},
    Vehicle()
    );

  return Object.freeze(car);
}

function MotorcycleFactory() {
    let moto = Object.assign(
        {wheels: 2},
        {name},
        {wheelie},
        Vehicle()
    );
    function wheelie() {return 'Wheee!'}
    return Object.freeze(moto);
}

module.exports = {CarFactory, MotorcycleFactory};