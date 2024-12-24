export class CarTypes {
    private type_number : number
    private type_name : string
    private price_1km : number

    constructor(type_number : number, type_name : string, price_1km : number) {
        this.type_number = type_number
        this.type_name = type_name
        this.price_1km = price_1km
    }

    get_number() { return this.type_number }
    get_name() { return this.type_name }
    get_price() { return this.price_1km }
}