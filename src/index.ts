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

// enum
// tamanho de roupas (size: Médio, size: Pequeno)
enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}

const camisa = {
    name: "Camisa gola v",
    size: Size.G
}
console.log(camisa)

// literal types
let teste: "autenticado"  | null 
teste = null
console.log(teste)

// funcoes
function sum(a: number, b: number) {
    return a + b
}
console.log(sum(1,3))

function sayHelloTo(name: string): string {
    return `hello ${name}`
}

console.log(sayHelloTo("Fábio"))

function logger(msg: string): void {
    console.log(msg)
}
logger("Teste!")

function greeting(name: string, greet?: string): void{
    if(greet) {
        console.log(`Olá ${greet} ${name}`)
        return;
    }
    console.log(`Olá ${name}`)
}
greeting("fabio")
greeting("Fabio", "Sir")

// interfaces
interface MathFunctionParams {
    n1: number;
    n2: number;
}

function sumNumbers(nums: MathFunctionParams) {
    return nums.n1 + nums.n2
}

console.log(sumNumbers({n1:1, n2:2}))

function multiplyNumbers(nums: MathFunctionParams) {
    return nums.n1 * nums.n2
}

console.log(multiplyNumbers({n1: 3, n2: 3}))

const someNumbers: MathFunctionParams = {
    n1: 5, 
    n2: 10,
}

console.log(multiplyNumbers(someNumbers))

// narrowing
// checagem de tipos
function doSomething(info: number | boolean) {
    if(typeof info === "number") {
        console.log(`O número é ${info}`)
        return
    }
    console.log("Não foi passado um número")
}

doSomething(5)
doSomething(true)

// generics
function showArrayItems<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`)
    })
}

const a1 = [1,2,3]
const a2 = ["a","b","c"]

showArrayItems(a1)
showArrayItems(a2)

// classes

class User {
    name
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name
        this.role = role
        this.isApproved = isApproved
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`)
    }

    showUserRole(canShow: boolean): void {
        if(canShow) {
            console.log(`Idade do usuário é: ${this.role}`)
            return
        }
        console.log("Informação restrita!")
    }
}
const zeca = new User("Zéca", "Admin", true)

console.log(zeca)

zeca.showUserName()

zeca.showUserRole(false)

// interface em classes
interface IVehicle {
    brand: string
    showBrand():void
}

class Car implements IVehicle {

    brand
    wheels

    constructor(brand: string, wheels: number) {
        this.brand = brand
        this.wheels = wheels
    }
    showBrand(): void {
        console.log(`A marca do carro é: ${this.brand}`)
    }
}

const fusca = new Car("VW", 4)

fusca.showBrand()

// heranca
class SuperCar extends Car {
    engine

    constructor(brand: string, wheels: number, engine: number) {
            super(brand, wheels)
            this.engine = engine
    }
}

const a4 = new SuperCar("Audi", 4, 2.0)

console.log(a4)

a4.showBrand();

// decorators

//constructor decorators
function BaseParameters() {
    return function <T extends { new (...args:any[]): {} }>(constructor:T) {
        return class extends constructor {
            id = Math.random()
            createAt = new Date()
        }
    }
}
@BaseParameters()
class Person {
    name 

    constructor(name: string) {
        this.name = name
    }
}

const sam = new Person("Sam")
console.log(sam)