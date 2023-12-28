## Fundamentos importantes que aprendi

No TypeSript eu tenho varios tipos primitivos assim como Js
como string, boolean, number...

Tipos assim no TS:
obs: chamamos de *annotation*, pois estavamos dizendo que aquela variavel é
do tipo number.
```typescript 
let x: number = 10;
x = 20;
console.log(typeof x);// Tipo number
console.log(x);// voltar 20 como esperado
```

obs: dessa forma chamamos de *inferencia*, pois o proprio compilador do TS vai inferir esse valor do primeiro tipo declarado 
```typescript
    let y = 50;
    y = 30;
    console.log(typeof y);// Tipo number... parece mesmo resultando, mas agora o Ts inferiou esse valor na variavel y
    console.log(y);// voltar 30
```

Como tipar um array? 
obs: lembre que um array sempre é um objeto, isso são as estranhezas do JS, não me julge :)

