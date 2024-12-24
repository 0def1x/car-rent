"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarTypes = void 0;
class CarTypes {
    constructor(type_number, type_name, price_1km) {
        this.type_number = type_number;
        this.type_name = type_name;
        this.price_1km = price_1km;
    }
    get_number() { return this.type_number; }
    get_name() { return this.type_name; }
    get_price() { return this.price_1km; }
}
exports.CarTypes = CarTypes;
