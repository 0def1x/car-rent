import {CarTypes} from './car_types'

export class Car {
    private car_number: number;
    private car_type: CarTypes;
    private is_free : boolean

    constructor(car_number: number, car_type: CarTypes, is_free : boolean) {
        this.car_number = car_number;
        this.car_type = car_type;
        this.is_free = is_free
    }

    get_car() {
        return this;
    }

    get_car_number() {
        return this.car_number;
    }

    get_car_type() {
        return this.car_type;
    }

    get_is_free() { return this.is_free }

    set_is_free(is_free_new : boolean) {
        console.log(`New is_free: ${is_free_new}`)
        this.is_free = is_free_new
    }
}