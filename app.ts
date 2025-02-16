interface Student {
    id: number;
    name: string;
    email: string;
    isActive: boolean;}

function createStudent(student: Student){
    return student;
}
const newStudent: Student = {
    id: 1,
    name: "Waqas",
    email: "waqas@GMAIL.com",
    isActive: true
};
console.log(createStudent(newStudent));




type Input = number | string;
function processInput(input: Input): string {
    if (typeof input === "number") {
        return `Number: ${input.toString()}`;
    } else {
        return `String: ${input}`;
    }
}
console.log(processInput(42));
// let rslt = processInput(42)
// console.log(typeof(rslt))
console.log(processInput("Hello"));


class Vehicle {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getInfo(): string {
        return `Vehicle: ${this.year} ${this.make} ${this.model}`;
    }
}

class Car extends Vehicle {
    doors: number;

    constructor(make: string, model: string, year: number, doors: number) {
        super(make, model, year);
        this.doors = doors;
    }

    getInfo(): string {
        return `${super.getInfo()}, Doors: ${this.doors}`;
    }
}

class Motorcycle extends Vehicle {
    Sidecar: boolean;

    constructor(make: string, model: string, year: number, Sidecar: boolean) {
        super(make, model, year);
        this.Sidecar = this.Sidecar;
    }

    getInfo(): string {
        return `${super.getInfo()}, Sidecar: ${this.Sidecar ? "Yes" : "No"}`;
    }
}

const car = new Car("Toyota", "Corolla", 2022, 4);
console.log(car.getInfo()); 

const bike = new Motorcycle("Honda", "110 CC", 2024, false);
console.log(bike.getInfo()); 
