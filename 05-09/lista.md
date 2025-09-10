<h2>📘 Lista Resolvida – POO e Arrays em JavaScript</h2>

## Exercício 1
#### Pergunta: O que retorna tamanhoArray() em uma nova instância MeuArray sem itens?

### Resposta:
O construtor inicia o array vazio, logo o tamanho é 0.Assim, o retorno é 0.


## Exercício 2

#### Dado o trecho do código abaixo, qual sera o valor exibido no console? Explique a execução;

const meuArray = new MeuArray();
meuArray.adicionar(10);
meuArray.adicionar(20);
meuArray.adicionar(30);
meuArray.remover();
console.log(meuArray.tamanhoArray());

### Resposta:
A resposta é 2, pois esse código adiciona 3 elementos ao array e depois tira 1, assim exibindo 2 como o tamanho do array;

## Exercício 3

### Qual será a saída no console após a execução que leva a esse resultado.

### Resposta:
O índice do elemento 1, seria o segundo elemento, exibindo 'b'.

## Exercício 4

### O que retorna remover() quando o array está vazio?

### Resposta:
O retorno seria undefined, pois não tem itens no array, então não tem nada para remover.

## Exercício 5

### Qual o propósito de #items e #tamanho?

### Resposta:
Eles são atributos da classe, e protegem dados, sendo acessados apenas pelos métodos públicos.

## Exercício 6

### Analise a sequência de operações abaixo. Qual será o conteúdo do array interno após a execução de todo o código? Utilize o método verItens() para descrever o resultado final.

### Resposta:
O retorno será [25, 35], podemos ignorar os 2 primeiros comando de acição, já que são excluídos pelo limpar, e após isso, ele adiciona, 25 e 35, que depois são exibidos.

## Exercício 7

## Qual será o valor da variável itemRemovido após a execução do código abaixo?

### Resposta:
O valor da variavél será 'banana' pois, o remover() tira o último elemento, que era 'banana', adicionado depois de maçã;

## Exercício 8

## Preveja o resultado das três chamadas ao método obterElemento no final do script. Justifique por que cada chamada resulta em seu respectivo valor.

### Resposta:
O primeiro retorno seria 100, que corresponde de fato ao indice (0), a primeira posição, ambos os outros 2 dariam undefined, pq o indice (2) posição 3, não existe e o índice (-1) é inválido.

## Exercício 9

### Qual é o conceito fundamental da Programação Orientada a Objetos que é demonstrado pela forma como a classe MeuArray esconde seus dados (#items, #tamanho) e só permite a interação através de métodos públicos (adicionar, remover, tamanhoArray, etc.)? Explique brevemente o conceito.

### Resposta:
Encapsulamento, um conceito de proteção de dados internos, que permite que apenas métodos públicos acessem os atributos.

## Exercício 10

### Escreva uma sequência de comandos, utilizando uma instância da classe MeuArray, que realize os seguintes passos:

1) Criar instância const meuArray = new MeuArray(); 

2) Adicionar 5, 10 e 15 <br>
meuArray.adicionar(5);
meuArray.adicionar(10);
meuArray.adicionar(15);

3) Remover último <br>
meuArray.remover(); 

4) Adicionar 20 <br>
meuArray.adicionar(20);

5) Imprimir elemento no índice 1 <br>
console.log(meuArray.obterElemento(1)); 

6) Imprimir tamanho final <br>
console.log(meuArray.tamanhoArray()); 