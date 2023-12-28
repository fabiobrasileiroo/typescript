"use strict";
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
//# sourceMappingURL=index.js.map