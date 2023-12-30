"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// string, boolean, number, ....
let x = 10;
x = 10;
const sera = true;
console.log(x);
// Inferencia
let y = 10;
// y = 11 não consigo atualizar por estar inferido que 
// a variavel y é do tipo number 
/* Annotation */
let z = 25;
let nome = "fabio";
nome = "Brasileiro";
console.log(nome);
//objeto
const myNumbers = [1, 2, 3];
console.log(typeof myNumbers);
console.log(myNumbers.length);
myNumbers.push(5);
console.log(myNumbers);
// Tuplas
let myTuple;
myTuple = [5, "teste", ["a", "b"]];
// object literals -> {prop: value}
const user = {
    name: "Fabio",
    age: 18,
};
console.log(user);
// user.job = "programador"
// any
let a = 0;
a = "teste";
a = true;
a = [];
// union type
let id = "10";
console.log(id);
const userId = "fabio";
const idade = 20;
const shirId = 123;
// enum
// tamanho de roupas (size: Médio, size: Pequeno)
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola v",
    size: Size.G
};
console.log(camisa);
// literal types
let teste;
teste = null;
console.log(teste);
// funcoes
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 3));
function sayHelloTo(name) {
    return `hello ${name}`;
}
console.log(sayHelloTo("Fábio"));
function logger(msg) {
    console.log(msg);
}
logger("Teste!");
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}
greeting("fabio");
greeting("Fabio", "Sir");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
console.log(multiplyNumbers({ n1: 3, n2: 3 }));
const someNumbers = {
    n1: 5,
    n2: 10,
};
console.log(multiplyNumbers(someNumbers));
// narrowing
// checagem de tipos
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}
doSomething(5);
doSomething(true);
// generics
function showArrayItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArrayItems(a1);
showArrayItems(a2);
// classes
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`Idade do usuário é: ${this.role}`);
            return;
        }
        console.log("Informação restrita!");
    }
}
const zeca = new User("Zéca", "Admin", true);
console.log(zeca);
zeca.showUserName();
zeca.showUserRole(false);
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é: ${this.brand}`);
    }
}
const fusca = new Car("VW", 4);
fusca.showBrand();
// heranca
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand();
// decorators
//constructor decorators
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParameters()
], Person);
const sam = new Person("Sam");
console.log(sam);
//# sourceMappingURL=index.js.map