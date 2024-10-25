## Exercícios: Funções

### Definição

Escreva uma função chamada multiplyAndAdd que receba três parâmetros e retorne o resultado da multiplicação dos dois primeiros, somado ao terceiro, usando definição de função, usando expressão de função e usando uma arrow function.
```js
// Exemplo de uso:
console.log(multiplyAndAdd(2, 3, 4)); // (2 * 3) + 4 = 10
```

#### RESPOSTA:
```js
function multiplyAndAdd(n1, n2, n3) {
  return n1 * n2 + n3
}

const multiplyAndAdd = function (n1, n2, n3) {
  return n1 * n2 + n3
}

const multiplyAndAdd = (n1, n2, n3) => {
  return n1 * n2 + n3
}
```


### Callback

**Criando uma função que use callback**: Crie uma função chamada saudar que receba um nome e uma função de callback. O callback deve exibir uma saudação com o nome. Em seguida, chame saudar passando uma função que imprime "Olá, {nome}!".
```js
// Exemplo de uso:
saudar("Alice", function(nome) {
  console.log("Olá, " + nome + "!");
});
```

#### RESPOSTA:

```js
function saudar(nome, callback) {
  return callback(nome)
}
```



**Filtro de Array com Callback**: Crie uma função chamada filtrar que receba um array e uma função de callback que define o critério de filtro. Teste a função para filtrar apenas números pares, maiores que 10, etc.
```js
// Exemplo de uso:
let numeros = [1, 12, 5, 8, 130, 44];
let pares = filtrar(numeros, function(numero) {
  return numero % 2 === 0;
});
console.log(pares); // Deve retornar [12, 8, 130, 44]

```

#### RESPOSTA:

```js
function filtrar(numeros, callback) {
  const filtrado = []
  for (const numero of numeros) {
    const valido = callback(numero)
    if (valido) {
      filtrado.push(numero)
    }
  }
  return filtrado
}
```


**Callback com Funções Assíncronas - Simulando um Timer**: Crie uma função chamada executarComDelay que recebe um callback e um tempo (em milissegundos). A função deve chamar o callback após o tempo especificado usando setTimeout.
```js
// Exemplo de uso:
executarComDelay(function() {
  console.log("Executado após 2 segundos");
}, 2000);

```

#### RESPOSTA:

```js
function executarComDelay(callback, delay) {
  setTimeout(callback, delay)
}
```


**Transformação em Array de Objetos com Callback**: Crie uma função chamada criarObjetos que recebe um array de nomes e um callback que converte cada nome em um objeto com uma propriedade nome. A função deve retornar o novo array de objetos.

```js
// Exemplo de uso:
let nomes = ["Alice", "Bob", "Carlos"];
let objetos = criarObjetos(nomes, function(nome) {
  return { nome: nome };
});
console.log(objetos); // Deve retornar [{nome: "Alice"}, {nome: "Bob"}, {nome: "Carlos"}]

```

#### RESPOSTA:

```js
function criarObjetos(nomes, callback) {
  const nomesObj = []
  for (const nome of nomes) {
    const nomeObj = callback(nome)
    nomesObj.push(nomeObj)
  }
  return nomesObj
}
```


**Manipulação de Arrays de Objetos com Callback**: Crie uma função chamada filtrarProdutos que receba um array de objetos representando produtos (com propriedades nome e preco) e um callback que define o critério de filtro (como produtos com preco maior que 20). A função deve retornar um array de produtos filtrados.

```js

// Exemplo de uso:
let produtos = [
  { nome: "Camiseta", preco: 25 },
  { nome: "Calça", preco: 50 },
  { nome: "Meias", preco: 5 }
];
let produtosFiltrados = filtrarProdutos(produtos, function(produto) {
  return produto.preco > 20;
});
console.log(produtosFiltrados); // Deve retornar [{nome: "Camiseta", preco: 25}, 
```

#### RESPOSTA:

```js
function filtrarProdutos(produtos, callback) {
  const filtrado = []
  for (const produto of produtos) {
    const valido = callback(produto)
    if (valido) {
      filtrado.push(produto)
    }
  }
  return filtrado
}
```


### Parametros

**Passagem de Parâmetro por Valor - Números:** Crie uma função chamada incrementNumber que recebe um número como parâmetro e tenta incrementar esse valor em 1. Fora da função, chame-a com um número e imprima o valor antes e depois da chamada. O número foi alterado fora da função?

```js
// Exemplo de uso:
let num = 5;
incrementNumber(num);
console.log(num); // Deve imprimir 5
```

#### RESPOSTA:

```js
function incrementNumber(num) {
  num++
}
```

**Passagem de Parâmetro por Valor - Strings:** Crie uma função chamada appendString que receba uma string e tente adicionar um valor a ela. Chame essa função passando uma string e verifique se a string foi alterada fora da função.

```js

// Exemplo de uso:
let str = "Hello";
appendString(str, " World");
console.log(str); // Deve imprimir "Hello"
```

#### RESPOSTA:

```js
function appendString(str1, str2) {
  return str1 + str2
}
```

**Passagem de Parâmetro por Referência - Objetos:** Crie uma função chamada updatePerson que receba um objeto person com as propriedades name e age, e altere o valor de age. Fora da função, imprima o objeto antes e depois de chamar a função. O valor do objeto mudou fora da função?

```js

// Exemplo de uso:
let person = { name: "Alice", age: 25 };
updatePerson(person);
console.log(person.age); // Deve refletir a mudança feita na função
```

#### RESPOSTA:

```js
function updatePerson(person) {
  person.age = 30
}
```


**Passagem de Parâmetro por Referência - Arrays :** Crie uma função chamada addItem que recebe um array e um valor, e adiciona esse valor ao final do array. Fora da função, imprima o array antes e depois de chamar a função. O array foi alterado fora da função?

```js

// Exemplo de uso:
let numbers = [1, 2, 3];
addItem(numbers, 4);
console.log(numbers); // Deve incluir o novo item [1, 2, 3, 4]
```

#### RESPOSTA:

```js
function addItem(array, valor) {
  array.push(valor)
}
```

**Imutabilidade de Tipos Primitivos**: Crie uma função chamada changePrimitive que recebe um número, altera o valor dentro da função e depois retorna o novo valor. Fora da função, veja se o número original foi modificado. O valor original mudou?

```js

// Exemplo de uso:
let x = 10;
changePrimitive(x);
console.log(x); // Deve imprimir 10
```

#### RESPOSTA:

```js
function changePrimitive(num) {
  num = 20
}
```


**Cópia de Objetos para Manter Imutabilidade**: Crie uma função chamada updatePersonCopy que receba um objeto person e altere o valor de uma de suas propriedades, mas primeiro faça uma cópia do objeto. Fora da função, verifique se o objeto original foi alterado.

```js

// Exemplo de uso:
let person = { name: "Bob", age: 30 };
updatePersonCopy(person);
console.log(person.age); // Deve imprimir 30
```

#### RESPOSTA:

```js
function updatePersonCopy(person) {
  const personCopy = {...person}
  personCopy.nome = 'João'
  personCopy.age = 60
}
```

**Copiando Arrays para Manter Imutabilidade**: Crie uma função chamada addToCopy que receba um array e um valor. A função deve adicionar o valor a uma cópia do array e retornar essa cópia sem modificar o array original. Verifique se o array original foi alterado.

```js

// Exemplo de uso:
let originalArray = [1, 2, 3];
let newArray = addToCopy(originalArray, 4);
console.log(originalArray); // Deve imprimir [1, 2, 3]
console.log(newArray); // Deve imprimir [1, 2, 3, 4]
```

#### RESPOSTA:

```js
function addToCopy(array, valor) {
  const arrayCopy = [...array]
  arrayCopy.push(valor)
  return arrayCopy
}
```

**Função de Alteração de Objetos Profundos**: Crie uma função chamada updateNestedProperty que receba um objeto com uma estrutura aninhada e altere uma propriedade dentro do objeto aninhado. Observe se a alteração persiste fora da função.

```js

// Exemplo de uso:
let user = { name: "Carol", details: { age: 28 } };
updateNestedProperty(user);
console.log(user.details.age); // Deve refletir a alteração feita na função
```

#### RESPOSTA:

```js
function updateNestedProperty(user) {
  user.details.age = 60
}
```

**Clonagem Profunda para Objetos Aninhados**: Crie uma função chamada deepCloneUpdate que receba um objeto aninhado e altere uma de suas propriedades após fazer uma cópia profunda. Fora da função, verifique se o objeto original foi alterado.

```js

    // Exemplo de uso:
    let product = { name: "Laptop", specs: { ram: "8GB" } };
    deepCloneUpdate(product);
    console.log(product.specs.ram); // Deve imprimir "8GB"
```

#### RESPOSTA:

```js
function deepCloneUpdate(product) {
  const productClone = {...product}
  productClone.specs = {...productClone.specs}
  productClone.specs.ram = '16GB'
}
```

**Alteração em Arrays Multidimensionais***
Crie uma função chamada modifyMatrix que receba uma matriz (array de arrays) e altere um de seus valores internos. Verifique se a matriz original foi alterada fora da função.

```js

// Exemplo de uso:
let matrix = [[1, 2], [3, 4]];
modifyMatrix(matrix);
console.log(matrix); // Deve refletir a alteração feita na função
```

#### RESPOSTA:

```js
function modifyMatrix(matrix) {
  matrix[0][1] = 999
}
```

### Arrow Functions

Escreva uma arrow function chamada add que receba dois números como parâmetros e retorne a soma deles.
```js
// Exemplo de uso:
console.log(add(5, 3)); // 8
```

#### RESPOSTA:
```js
const add = (n1, n2) => n1 + n2
```


Crie uma arrow function chamada greet que receba um nome como parâmetro e retorne a mensagem "Hello, [nome]!"
```js
// Exemplo de uso:
console.log(greet("Alice")); // "Hello, Alice!"
```

#### RESPOSTA:

```js
const greet = (name) => `Hello, ${name}!`
```


Dado um array de números, use filter() e uma arrow function para retornar um novo array contendo apenas os números ímpares.
```js
// Exemplo de uso:
const numbers = [1, 2, 3, 4, 5, 6, 7];
const oddNumbers = numbers.filter(/* arrow function aqui */);
console.log(oddNumbers); // [1, 3, 5, 7]

```

#### RESPOSTA:
```js
const numbers = [1, 2, 3, 4, 5, 6, 7];
const oddNumbers = numbers.filter((n) => n % 2 == 1);
console.log(oddNumbers); // [1, 3, 5, 7]
```
