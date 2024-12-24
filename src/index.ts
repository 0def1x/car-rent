import { CarTypes } from "./car_types";
import { Car } from "./car";

import promptSync from 'prompt-sync'

/*
    1. Создать множество типов автомобилей
*/

const car_types = {
    none : new CarTypes(0, "None", 0),
    econom : new CarTypes(1, "Эконом", 99),
    comfort : new CarTypes(2, "Комфорт", 199),
    business : new CarTypes(3, "Бизнес", 299),
    elite : new CarTypes(4, "Элитный", 399)
}

let cars = {
    econom: {
        car_one: new Car(0, car_types.econom, true),
        car_two: new Car(1, car_types.econom, true)
    },
    comfort: {
        car_one: new Car(0, car_types.comfort, true),
        car_two: new Car(1, car_types.comfort, true)
    },
    business: {
        car_one: new Car(0, car_types.business, true),
        car_two: new Car(1, car_types.business, true)
    },
    elite: {
        car_one: new Car(0, car_types.elite, true),
        car_two: new Car(1, car_types.elite, true)
    }
};

const prompt = promptSync()

let selected_car = cars.econom.car_one
let selected_car_type = selected_car.get_car_type()
console.log(`Выбранный автомобиль: [${selected_car.get_car_number()}] - ${selected_car_type.get_name()}`)

const required_distance_prompt = prompt("Сколько километров хотите проехать?: ")
const required_distance = parseInt(required_distance_prompt)
const total_price = selected_car_type.get_price() * required_distance
console.log(`Для достижения ${required_distance} км на данном классе автомобиля потребуется: ${total_price} руб.`)