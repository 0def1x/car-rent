"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const car_types_1 = require("./car_types");
const car_1 = require("./car");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
/*
    1. Создать множество типов автомобилей
*/
const car_types = {
    none: new car_types_1.CarTypes(0, "None", 0),
    econom: new car_types_1.CarTypes(1, "Эконом", 199),
    comfort: new car_types_1.CarTypes(2, "Комфорт", 299),
    business: new car_types_1.CarTypes(3, "Бизнес", 399),
    elite: new car_types_1.CarTypes(4, "Элитный", 499)
};
let cars = {
    econom: {
        car_one: new car_1.Car(0, car_types.econom, true),
        car_two: new car_1.Car(1, car_types.econom, true)
    },
    comfort: {
        car_one: new car_1.Car(0, car_types.comfort, true),
        car_two: new car_1.Car(1, car_types.comfort, true)
    },
    business: {
        car_one: new car_1.Car(0, car_types.business, true),
        car_two: new car_1.Car(1, car_types.business, true)
    },
    elite: {
        car_one: new car_1.Car(0, car_types.elite, true),
        car_two: new car_1.Car(1, car_types.elite, true)
    }
};
const prompt = (0, prompt_sync_1.default)();
let selected_car = cars.econom.car_one;
let selected_car_type = selected_car.get_car_type();
console.log(`Selected car: [${selected_car.get_car_number()}] - ${selected_car_type.get_name()}`);
const required_distance = parseInt(prompt('Сколько хотите проехать километров?: '));
const total_price = selected_car_type.get_price() * required_distance;
console.log(`Для достижения ${required_distance} км на данном классе автомобиля потребуется: ${total_price} руб.`);
