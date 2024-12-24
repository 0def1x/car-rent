"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    constructor(car_number, car_type, is_free) {
        this.car_number = car_number;
        this.car_type = car_type;
        this.is_free = is_free;
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
    get_is_free() { return this.is_free; }
    set_is_free(is_free_new) {
        console.log(`New is_free: ${is_free_new}`);
        this.is_free = is_free_new;
    }
}
exports.Car = Car;
