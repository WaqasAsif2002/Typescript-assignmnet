var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function createStudent(student) {
    return student;
}
var newStudent = {
    id: 1,
    name: "Waqas",
    email: "waqas@GMAIL.com",
    isActive: true
};
console.log(createStudent(newStudent));
function processInput(input) {
    if (typeof input === "number") {
        return "Number: ".concat(input.toString());
    }
    else {
        return "String: ".concat(input);
    }
}
console.log(processInput(42));
// let rslt = processInput(42)
// console.log(typeof(rslt))
console.log(processInput("Hello"));
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Vehicle.prototype.getInfo = function () {
        return "Vehicle: ".concat(this.year, " ").concat(this.make, " ").concat(this.model);
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, model, year, doors) {
        var _this = _super.call(this, make, model, year) || this;
        _this.doors = doors;
        return _this;
    }
    Car.prototype.getInfo = function () {
        return "".concat(_super.prototype.getInfo.call(this), ", Doors: ").concat(this.doors);
    };
    return Car;
}(Vehicle));
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle(make, model, year, Sidecar) {
        var _this = _super.call(this, make, model, year) || this;
        _this.Sidecar = _this.Sidecar;
        return _this;
    }
    Motorcycle.prototype.getInfo = function () {
        return "".concat(_super.prototype.getInfo.call(this), ", Sidecar: ").concat(this.Sidecar ? "Yes" : "No");
    };
    return Motorcycle;
}(Vehicle));
var car = new Car("Toyota", "Corolla", 2022, 4);
console.log(car.getInfo());
var bike = new Motorcycle("Honda", "110 CC", 2024, false);
console.log(bike.getInfo());
