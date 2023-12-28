# Fundamentos importantes que aprendi

### No TypeSript eu tenho varios tipos primitivos assim como Js
### como string, boolean, number...

## Tipos assim no TS:
#### *obs*: chamamos de <strong>annotation</strong>, pois estavamos dizendo que aquela variavel é
do tipo number.
```typescript 
let x: number = 10;
x = 20;
console.log(typeof x);// Tipo number
console.log(x);// voltar 20 como esperado
```

#### *obs*: dessa forma chamamos de <strong>inferencia</strong>, pois o proprio compilador do TS vai inferir esse valor do primeiro tipo declarado 
```typescript
let y = 50;
y = 30;
console.log(typeof y);// Tipo number... parece mesmo resultando,
// mas agora o Ts inferiou esse valor na variavel y
console.log(y);// voltar 30
```

### Como tipar um array? 
#### *obs*: lembre que um array sempre é um objeto, isso são as estranhezas do JS, não me julge :)

```typescript
const meusNumeros: number[] = [1,2,3]
console.log(typeof meusNumeros)// tipo Object
console.log(meusNumeros.length)// tamanho de 3 arrays
meusNumeros.push(4)// adicionando no final da lista 4
console.log(meusNumeros)
```

### Tuplas?
#### *obs*: tuplas é molde de como o objeto deve ficar
```typescript
let minhaTuplas: [number, string, string[]]
minhasTuplas = [5, "teste", ["a","b"]]// observer que eu fiz um array so
// do tipo string isso que são tuplas
console.log(minhasTuplas)
```

### Objetos literais -> {propriedade: valor}
```typescript
const usuario: {nome: string, idade: number } = {
    nome: "Fábio",
    idade: 21,
}
console.log(usuario)
// tipei cada objeto e depois declarei seus respectivos valores

usuario.trabalho = "Programador"// erro
// Não consigo tipar, pois so declarei dois tipos
```

### Any(qualquer)
#### *obs*: posso declarar qualquer valor a minha variavel, muito usado quando
programadores iniciantes começam na linguagem ou se sei que aquela variavel
poder vir valores de valarios tipos

