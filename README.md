# Data Lovers

## Índice

* [1. Protótipos](#1-protótipos)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Objetivos](#3-objetivos-de-aprendizagem)
* [4. Considerações gerais](#4-considerações-gerais)
* [5. Critérios mínimos de aceitação do projeto](#5-critérios-mínimos-de-aceitação-do-projeto)
* [6. Checklist](#9-checklist)

***

## 1. Protótipos
Inicialmente, pensamos em criar uma página de navegação simples e fácil, bem intuitiva e com cores que remetessem a série. Para criação do protótipo de média fidelidade utilizamos o Figma(figma.com)
![protótipo](./images/prototipo%20figma.PNG)
![protótipo](./images/prototipo%20figma%20pag2.jpeg)
 <br> <br>

## 2. Resumo do projeto

Como entregável final terá uma página web que permita: <br>
**✔️ visualizar dados, <br>
✔️ filtrá-los, <br> ✔️ ordená-los <br> e fazer algum cálculo agregado**. 
 <br>
 <br> 

## 3. Objetivos de aprendizagem

O <strong> objetivo principal </strong> deste projeto foi que aprender a desenhar e construir uma interface web onde fosse possível visualizar e manipular dados, entendendo a necessidade de cada usuária/o.

Reflita e depois enumere os objetivos que quer alcançar e aplique no seu projeto. Pense nisso para decidir sua estratégia de trabalho.

### 3.1 Objetivos de aprendizagem

- [✔️] **Uso de HTML semântico**

- **CSS**
  - [✔️] **Uso de seletores de CSS**

  - [✔️] **Modelo de caixa (box model): borda, margem, preenchimento**

  - [✔️] **Uso de flexbox em CSS**

- ### Web APIs

  - [✔️] **Uso de seletores de DOM**

  - [✔️] **Manipulação de eventos de DOM (listeners, propagação, delegação)**

  - [✔️] **Manipulação dinâmica de DOM**

 
- ### JavaScript

  - [✔️] **Diferenciar entre tipos de dados primitivos e não primitivos**

  - [✔️] **Arrays (arranjos)**

  - [✔️] **Objetos (key, value)**

  - [✔️] **Variáveis (declaração, atribuição, escopo)**

  - [✔️] **Uso de condicionais (if-else, switch, operador ternário, lógica booleana)**

  - [✔️] **Uso de laços (while, for, for..of)**

  - [✔️] **Funções (params, args, return)**

  - [✔️] **Testes unitários (unit tests)**

  - [✔️] **Módulos de ECMAScript (ES modules)**

  - [✔️] **Uso de linter (ESLINT)**

  - [✔️] **Uso de identificadores descritivos (Nomenclatura e Semântica)**

  - [✔️] **Diferença entre expressões (expressions) e declarações (statements)**

- ### Controle de Versões (Git e GitHub)

  - [✔️] **Git: Instalação e configuração**

  - [✔️] **Git: Controle de versão com git (init, clone, add, commit, status, push, pull, remote)**

  - [✔️] **Git: Integração de mudanças entre ramos (branch, checkout, fetch, merge, reset, rebase, tag)**

  - [✔️] **GitHub: Criação de contas e repositórios, configuração de chave SSH**

  - [✔️] **GitHub: Implantação com GitHub Pages**

  - [✔️] **GitHub: Colaboração pelo Github (branches | forks | pull requests | code review | tags)**
<br> <br>

## 4. Considerações gerais

* Este projeto será entregue através do GitHub e a interface deve ser publicada no [GitHub Pages](https://pages.github.com/).
* Tempo para completá-lo: Tome como referencia 4 semanas.
<br> <br>

## 5. Critérios mínimos de aceitação do projeto

Os critérios considerados para que tenha terminado este projeto são:

- ### Definição de produto

Documente brevemente seu trabalho no arquivo `README.md` de seu repositório,
contando como foi o processo de desenho e como você acredita que o produto possa
resolver o problema (ou problemas) de seu usuário.

- ### Histórias de usuário

![protótipo](./images/historia%20de%20usuario.PNG)
![protótipo](./images/historia%20de%20usuario2.PNG)
![protótipo](./images/historia%20de%20usuario3.PNG)
![protótipo](./images/historia%20de%20usuario4.PNG)
![protótipo](./images/historia%20de%20usuario5.PNG)
![protótipo](./images/historia%20de%20usuario6.PNG)
![protótipo](./images/historia%20de%20usuario7.PNG)

- ### Implementação da interface de usuário (HTML/CSS/JS)

  - [✔️] Ser _responsiva_, ou seja, deve ser visualizada sem problemas a partir de diversos tamanhos de tela: celulares, tablets, notebooks, etc.


- ### Testes unitários
  - [✔️] Escrever seus próprios testes para as funções encarregadas de _processar_, _filtrar_ e _ordenar_ os dados, assim como _calcular_ estatísticas. Seus testes unitários devem ter cobertura mínima de 70% de _statements_ (_sentenças_), _functions_ (_funções_), _lines_ (_linhas_), e _branches_ (_ramos_) do arquivo `src/data.js`, que irá conter suas funções.
 
 <br>

 [✔️] Recomendamos que utilize `src/main.js` para todos os códigos que tenham a ver com a exibição dos dados na tela. Com isto nos referimos basicamente à interação com o DOM. Operações como criação de nós, registro de manejadores de eventos (_event listeners_ ou _event handlers_) e etc.
 <br>  <br>

## 6. Checklist

  🆗 Usar VanillaJS. <br>
  🆗 Passa pelo linter (`npm run pretest`) <br>
  🆗 Passa pelos testes (`npm test`) <br>
  🆗 Testes unitários cobrem um mínimo de 70% de statements, functions, lines e branches. <br>
  🆗 Inclui uma _definição de produto_ clara e informativa no `README.md`. <br>
  🆗 Inclui histórias de usuário no `README.md`. <br>
  🆗 Inclui rascunho da solução (protótipo de baixa fidelidade) no `README.md`. 
  ❌ Inclui uma lista de problemas detectados nos testes de usabilidade no `README.md`. <br>
  🆗 UI: Mostra lista/tabela/etc com dados e/ou indicadores. <br>
  🆗 UI: Permite ordenar dados por um ou mais campos (asc e desc). <br>
  🆗 UI: Permite filtrar dados com base em uma condição. <br>
  🆗 UI: É _responsivo_. <br> <br>



<h2> 👩🏾‍💻 Tecnologias usadas para desenvolver o projeto </h2>

- HTML
- CSS
- JavaScript
- Git e GitHub
- Figma

#### 💞🎯💼 [Clique para acessar o projeto](https://daianedosanjos.github.io/data-lovers/src/)

#### 👩🏾‍💼🎯💼 [Clique para acessar o repositório de Geice Sousa Pinho](link)

#### 👩🏾‍💼🎯💼 [Clique para acessar o repositório de Daiane dos Anjos](link)