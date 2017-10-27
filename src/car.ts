import {Inject} from 'injection-js';

import Engine from './engine';
import Tire from './tire';

export default class Car {

    _manufacturer: string;

    static get parameters() {
        return [
            new Inject(Tire),
            new Inject(Engine)
        ];
      }    

    constructor(
        private tire: Tire,
        private engine: Engine
    ){}

    startCar() {
        this.engine.start();
    }

    get manufacturer(): string{
        return this._manufacturer;
    }

    set manufacturer(manufacturer: string){
        this._manufacturer = manufacturer;
    }

}