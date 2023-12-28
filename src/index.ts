// string, boolean, number, ....
let x: number = 10

x = 10 
const sera: boolean = true 

console.log(x)

// Inferencia
let y = 10;
// y = 11 não consigo atualizar por estar inferido que 
// a variavel y é do tipo number 

/* Annotation */
let z: number = 25;


let nome: string = "fabio"
nome = "Brasileiro"
console.log(nome)

//objeto
const myNumbers: number[] = [1,2,3]
console.log(typeof myNumbers)
console.log(myNumbers.length)
myNumbers.push(5)
console.log(myNumbers)

// Tuplas
let myTuple: [number, string, string[]]

myTuple = [5, "teste", ["a","b"]]

// object literals -> {prop: value}
const user: {name: string, age: number} = {
    name: "Fabio",
    age: 18,
}

console.log(user)

// user.job = "programador"

// any
let a:any = 0
a = "teste"
a = true
a = []

// union type
let id: string | number = "10"
console.log(id)

// type alias
type myIdType = number | string

const userId: myIdType = "fabio"
const idade: myIdType = 20
const shirId: myIdType = 123