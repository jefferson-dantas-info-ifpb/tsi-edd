// Conversão de Módulos CommonJS para ESM Comece com um módulo mathCommonJS.js em CommonJS que exporta duas funções (adicionar e subtrair). Converta-o para um módulo ESM mathESM.mjs com os mesmos métodos e use import para testá-lo em um arquivo app.mjs.

import { adicionar, subtrair } from './mathESM.mjs'

console.log(adicionar(123, 456))
console.log(subtrair(999, 250))
