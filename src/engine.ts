import {Inject} from 'injection-js';

import Piston from './engine/piston';
import SparkPlug from './engine/sparkPlug';

export default class Engine {

    static get parameters() {
        return [
            new Inject(Piston),
            new Inject(SparkPlug)
        ];
      }     

    constructor(
        private piston: Piston,
        private sparkplug: SparkPlug
    ){}

    start(){
        console.log('Engine is on');
        this.piston.move();
        this.sparkplug.fire();
    }

}