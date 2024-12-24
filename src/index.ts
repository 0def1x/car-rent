import { CarTypes } from "./car_types";
import { Car } from "./car";

import promptSync from 'prompt-sync'

// ---------- [ IMPORTANT VARIABLES, DO NOT TOUCH! ] ----------

const prompt = promptSync()

// ---------- [ --- ] ----------

const car_costs = {
    none : 0,
    econom : 99,
    comfort : 199,
    business : 299,
    elite : 399
}

const car_types = {
    none : new CarTypes(0, "None", car_costs.none),
    econom : new CarTypes(1, "Эконом", car_costs.econom),
    comfort : new CarTypes(2, "Комфорт", car_costs.comfort),
    business : new CarTypes(3, "Бизнес", car_costs.business),
    elite : new CarTypes(4, "Элитный", car_costs.elite)
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

let selected_car = cars.econom.car_one
let selected_car_type = selected_car.get_car_type()
console.log(`Выбранный автомобиль: [${selected_car.get_car_number()}] - ${selected_car_type.get_name()}`)

const required_distance_prompt = prompt("Сколько километров хотите проехать?: ")
const required_distance = parseInt(required_distance_prompt)
const total_price = selected_car_type.get_price() * required_distance
console.log(`Для достижения ${required_distance} км на данном классе автомобиля потребуется: ${total_price} руб.`)