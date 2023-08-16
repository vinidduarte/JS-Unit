const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    
    // ESCREVA SEUS TESTES ABAIXO:
    console.log(productDetails('Alcool', 'Máscara'));// Teste se productDetails é uma função.
    console.log(productDetails('Alcool', 'Máscara'));// Teste se o retorno da função é um array.
    console.log(productDetails('Alcool', 'Máscara'));// Teste se o array retornado pela função contém dois itens dentro.
    console.log(productDetails('Alcool', 'Máscara'));// Teste se os dois itens dentro do array retornado pela função são objetos.
    console.log(productDetails('Alcool', 'Máscara'));// Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    console.log(productDetails('Alcool', 'Máscara'));// Teste se os dois productIds terminam com 123.
  });
});
