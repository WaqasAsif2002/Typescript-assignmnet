// Question 1
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function createUser(user: User): User {
  return user;
}

const newUser: User = {
  id: 18,
  name: "John",
  email: "john@gmail.com",
  isActive: true,
};

console.log(createUser(newUser));

// Question 2
type Input = number | string;

function checkedInput(input: Input): string {
  return typeof input === "number" ? `${input} is a Number` : `${input} is a String`;
}

console.log(checkedInput(12));
console.log(checkedInput("John"));

// Question 3
class Vehicle {
  constructor(public make: string, public model: string, public year: number) {}

  getInfo(): string {
    return `${this.year} ${this.make} ${this.model}`;
  }
}

class Car extends Vehicle {
  constructor(make: string, model: string, year: number, public doors: number) {
    super(make, model, year);
  }

  getInfo(): string {
    return `${super.getInfo()} with ${this.doors} doors`;
  }
}

class Motorcycle extends Vehicle {
  constructor(make: string, model: string, year: number, public hasSidecar: boolean) {
    super(make, model, year);
  }

  getInfo(): string {
    return `${super.getInfo()} with sidecar: ${this.hasSidecar}`;
  }
}

const myCar = new Car("Honda", "Accord", 2025, 4);
const myBike = new Motorcycle("Honda", "CD125", 2025, true);

console.log(myCar.getInfo());
console.log(myBike.getInfo());

// Question 4
class BankAccount {
  private balance: number;
  private readonly accountNumber: string;

  constructor(balance: number, accountNumber: string) {
    this.balance = balance;
    this.accountNumber = accountNumber;
  }

  getBalance(): number {
    return this.balance;
  }

  getAccountNumber(): string {
    return this.accountNumber;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      throw new Error("Insufficient balance");
    }
    this.balance -= amount;
  }
}

const myAccount = new BankAccount(150000, "BA097654321");
myAccount.deposit(10000);
console.log(`Balance: ${myAccount.getBalance()}`);
try {
  myAccount.withdraw(160000);
} catch (error) {
  console.log(error.message);
}

// Question 6
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

function createProduct(product: Product): Product {
  return product;
}

console.log(createProduct({ id: 101, name: "Iron", price: 3500, category: "Electronic" }));

// Question 7
class Employee {
  constructor(public name: string, public salary: number) {}

  getDetails(): string {
    return `Name: ${this.name}, Salary: ${this.salary}`;
  }
}

class Developer extends Employee {
  constructor(name: string, salary: number, public programmingLanguage: string) {
    super(name, salary);
  }

  getDetails(): string {
    return `${super.getDetails()}, Language: ${this.programmingLanguage}`;
  }
}

class Designer extends Employee {
  constructor(name: string, salary: number, public toolUsed: string) {
    super(name, salary);
  }

  getDetails(): string {
    return `${super.getDetails()}, Tool Used: ${this.toolUsed}`;
  }
}

const dev = new Developer("John", 50000, "TypeScript");
console.log(dev.getDetails());

const designer = new Designer("Doe", 50000, "Adobe Suite");
console.log(designer.getDetails());

// Question 8
class Student {
  private grades: number[] = [];
  constructor(public name: string, protected school: string, readonly studentID: number) {}

  addGrade(grade: number): void {
    this.grades.push(grade);
  }

  getAverageGrade(): number {
    if (this.grades.length === 0) return 0;
    return this.grades.reduce((sum, grade) => sum + grade, 0) / this.grades.length;
  }
}

const student = new Student("John", "None", 89871);
student.addGrade(89);
student.addGrade(60);

console.log(`Average Grade: ${student.getAverageGrade()}`);

// Question 9
type Response0 = { success: true; data: string } | { success: false; error: string };

function handleResponse(response: Response0): void {
  console.log(response.success ? `Data received: ${response.data}` : `Error: ${response.error}`);
}

handleResponse({ success: true, data: "Operation successful" });
handleResponse({ success: false, error: "Something went wrong" });

// Question 10
abstract class Animal {
  constructor(protected species: string) {}

  abstract makeSound(): string;

  getSpecies(): string {
    return this.species;
  }
}

class Dog extends Animal {
  constructor() {
    super("Dog");
  }

  makeSound(): string {
    return "Woof!";
  }
}

class Cat extends Animal {
  constructor() {
    super("Cat");
  }

  makeSound(): string {
    return "Meow!";
  }
}

console.log(new Dog().makeSound());
console.log(new Cat().makeSound());

// Question 12
interface Car {
  drive(): string;
}

interface Bike {
  ride(): string;
}

function useVehicle(vehicle: Car | Bike) {
  "drive" in vehicle ? console.log(vehicle.drive()) : console.log(vehicle.ride());
}

class Honda implements Car {
  drive(): string {
    return "Driving a car!";
  }
}

class HondaBike implements Bike {
  ride(): string {
    return "Riding a bike!";
  }
}

useVehicle(new Honda());
useVehicle(new HondaBike());

// Question 13
interface Person {
  name: string;
  age: number;
}

interface Employee {
  jobTitle: string;
}

type FullTimeEmployee = Person & Employee;

function describeEmployee(emp: FullTimeEmployee): void {
  console.log(`Name: ${emp.name}, Age: ${emp.age}, Job Title: ${emp.jobTitle}`);
}

describeEmployee({ name: "John", age: 25, jobTitle: "Dev" });

// Question 14
interface Dog {
  bark(): string;
}

interface Cat {
  meow(): string;
}

type Pet = Dog | Cat;

function makeSound(pet: Pet) {
  "bark" in pet ? console.log(pet.bark()) : console.log(pet.meow());
}

class Dog1 implements Dog {
  bark(): string {
    return "Woof!";
  }
}

class Cat1 implements Cat {
  meow(): string {
    return "Meow!";
  }
}

makeSound(new Dog1());
makeSound(new Cat1());

