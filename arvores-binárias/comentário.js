// =======================================================
// 🌳 ÁRVORES BINÁRIAS — EXPLICAÇÃO GERAL
// =======================================================

/*
Uma ÁRVORE BINÁRIA é uma estrutura de dados hierárquica,
formada por NÓS conectados, onde:

- Cada nó pode ter no máximo 2 FILHOS:
  → Um à esquerda (left)
  → Um à direita (right)

O primeiro nó da árvore é chamado de RAIZ (root).

Regras principais:
1. O nó à esquerda sempre possui valor MENOR que o pai.
2. O nó à direita sempre possui valor MAIOR que o pai.

Exemplo visual:
            15
           /  \
         10    20
        / \    / \
       8  12  18  25

Cada valor é um nó, e todos seguem a regra de ordem binária.
*/

// =======================================================
// 🔹 INSERÇÃO DE UM NOVO NÓ
// =======================================================

/*
1. Começamos a partir da raiz (this.root).
2. Se a árvore estiver vazia (root === null),
   o novo nó se torna a raiz.
3. Caso contrário:
   - Se o valor for menor, vamos para a esquerda (node.left)
   - Se o valor for maior, vamos para a direita (node.right)
4. O processo se repete de forma RECURSIVA,
   até encontrar um espaço vazio (null).

Esse comportamento garante que a árvore fique sempre ordenada.
*/

// =======================================================
// 🔹 PERCURSOS (TRAVESSIAS) DA ÁRVORE
// =======================================================

/*
Percorrer uma árvore significa visitar todos os nós
em uma determinada ordem. Existem três percursos principais:

-----------------------------------------------------------
1️⃣ IN-ORDER (Em Ordem)
-----------------------------------------------------------
- Percorre na sequência: ESQUERDA → RAIZ → DIREITA
- Resulta em uma saída ORDENADA (crescente).
- Muito usado para listar os valores em ordem numérica.

Exemplo:
    inOrder(raiz):
        8 → 10 → 12 → 15 → 18 → 20 → 25
*/

inOrder(node = this.root) {
    if (node !== null) {
        this.inOrder(node.left);   // visita a subárvore esquerda
        console.log(node.value);   // visita o nó atual
        this.inOrder(node.right);  // visita a subárvore direita
    }
};

/*
-----------------------------------------------------------
2️⃣ PRE-ORDER (Pré Ordem)
-----------------------------------------------------------
- Percorre na sequência: RAIZ → ESQUERDA → DIREITA
- Útil para copiar ou exportar a estrutura da árvore.
- Visita primeiro o nó atual, depois seus filhos.

Exemplo:
    preOrder(raiz):
        15 → 10 → 8 → 12 → 20 → 18 → 25
*/

preOrder(node = this.root) {
    if (node !== null) {
        console.log(node.value);   // visita o nó atual primeiro
        this.preOrder(node.left);  // depois a esquerda
        this.preOrder(node.right); // depois a direita
    }
};

/*
-----------------------------------------------------------
3️⃣ POST-ORDER (Pós Ordem)
-----------------------------------------------------------
- Percorre na sequência: ESQUERDA → DIREITA → RAIZ
- Usado em casos onde você quer DELETAR ou PROCESSAR
  todos os filhos antes do pai.

Exemplo:
    postOrder(raiz):
        8 → 12 → 10 → 18 → 25 → 20 → 15
*/

postOrder(node = this.root) {
    if (node !== null) {
        this.postOrder(node.left);   // visita esquerda primeiro
        this.postOrder(node.right);  // depois direita
        console.log(node.value);     // por último o nó atual
    }
};

// =======================================================
// 🔹 BUSCA DE UM ELEMENTO
// =======================================================

/*
A busca segue o mesmo princípio da inserção:

1. Começa pela raiz.
2. Se o valor for igual ao nó atual → Encontrado!
3. Se o valor for menor → procurar à esquerda.
4. Se o valor for maior → procurar à direita.
5. Se o nó for null → valor não está na árvore.

Esse processo é rápido, pois a árvore elimina metade
das possibilidades a cada comparação (log n).
*/

// =======================================================
// 🔹 REMOÇÃO DE UM NÓ
// =======================================================

/*
A remoção possui 3 casos possíveis:

1️⃣ Nó sem filhos → basta remover (setar null)
2️⃣ Nó com 1 filho → substitui o nó pelo seu filho
3️⃣ Nó com 2 filhos →
    - Encontra o menor valor da subárvore direita (sucessor)
    - Substitui o valor do nó a ser removido pelo sucessor
    - Remove o sucessor da posição original
*/

// =======================================================
// 🔹 ALTURA E TAMANHO
// =======================================================

/*
- ALTURA: maior caminho da raiz até uma folha.
- TAMANHO (countNodes): número total de nós.

Ambos podem ser calculados com recursão:
→ cada chamada soma 1 e desce à esquerda e à direita.
*/

// =======================================================
// 🔹 CONCLUSÃO
// =======================================================

/*
✔️ A árvore binária organiza dados de forma hierárquica.
✔️ Permite inserção, busca e remoção eficientes (O(log n)).
✔️ Os percursos determinam a forma como os dados são visitados.
✔️ Cada nó é independente e conectado apenas a dois filhos.
*/

// =======================================================
