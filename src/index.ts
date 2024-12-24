import { CarTypes } from "./car_types";
import { Car } from "./car";

/*
    1. Создать множество типов автомобилей
*/

const car_types = {
    none : new CarTypes(0, "None", 0),
    econom : new CarTypes(1, "Эконом", 199),
    comfort : new CarTypes(2, "Комфорт", 299),
    business : new CarTypes(3, "Бизнес", 399),
    elite : new CarTypes(4, "Элитный", 499)
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
console.log(`Selected car: [${selected_car.get_car_number()}] - ${selected_car_type.get_name()}`)

const required_distance = 3 // В километрах
const total_price = selected_car_type.get_price() * required_distance
console.log(`Для достижения ${required_distance} км на данном классе автомобиля потребуется: ${total_price} руб.`)
console.log(`На данный момент автомобиль имеет статус: ${selected_car.get_is_free() == true ? "Свободен" : "Занят"}!`)
selected_car.set_is_free(false)
console.log(`Теперь на данный момент автомобиль имеет статус: ${selected_car.get_is_free() == true ? "Свободен" : "Занят"}!`)