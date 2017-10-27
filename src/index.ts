import {Injector, ReflectiveInjector} from 'injection-js';

import Car from './car';
import Engine from './engine';
import Tire from './tire';

import Piston from './engine/piston';
import SparkPlug from './engine/sparkPlug';

const injector1 = ReflectiveInjector.resolveAndCreate([Tire, Engine, Car, Piston, SparkPlug]);
const injector2 = ReflectiveInjector.resolveAndCreate([Tire, Engine, Car, Piston, SparkPlug]);

let carBinding = ReflectiveInjector.resolve([Tire, Engine, Car, Piston, SparkPlug]);

const injector3 = ReflectiveInjector.fromResolvedProviders(carBinding);
const injector4 = ReflectiveInjector.fromResolvedProviders(carBinding);

let car1 = injector1.get(Car);
let car2 = injector2.get(Car);
let car3 = injector3.get(Car);
let car4 = injector4.get(Car);

car1.startCar();

car1.manufacturer = 'Ford';
car2.manufacturer = 'Chevy';
car3.manufacturer = 'Toyota';
car4.manufacturer = 'Honda';
console.log(car1.manufacturer);
console.log(car2.manufacturer);
console.log(car3.manufacturer);
console.log(car4.manufacturer);


