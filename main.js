import {searchByName, filter, alphabeticalOrder, calculatePercentage} from "./data.js";
import data from "./data/rickandmorty/rickandmorty.js";

const characters = data.results;
const searchFor = document.getElementById("input-search");
const cardContainer = document.getElementById("card-container");
const gender = document.getElementById("gender");
const status = document.getElementById("status");
const specie = document.getElementById("specie");
const order = document.getElementById("order");
const percentageReturn = document.getElementById('percentage-return');
const cleanfilter = document.getElementById("reset")

function loadCharacters(itens) {
  const arrayResults = itens.map((item) => {
    const cards = `
   <div class="cards">
     <img class="image" src="${item.image}" alt="${item.name}">
     <ul style="list-style: none">                       
     <li class="li">Nome: ${item.name}</li>
     <li class="li">Status: ${item.status}</li>
     <li class="li">Espécie: ${item.species}</li>
     <li class="li">Gênero: ${item.gender}</li>
     <li class="li">Localização: ${item.origin.name}</li>
     </ul>                
   </div>
   `;
    return cards;
  });
  return arrayResults.join(""); //O método join() junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string
}
cardContainer.innerHTML = loadCharacters(characters);

searchFor.addEventListener("keyup", (e) => {
  const value = e.target.value; // target é uma referência ao objeto que enviou o evento. Por exemplo, quando você quer capturar o que foi digitado em um campo input de um form , você utiliza o event. target. value , ou seja, você irá capturar do input do form o valor que foi digitado
  const filteredSearch = searchByName(characters, value);
  const cards = loadCharacters(filteredSearch);
  cardContainer.innerHTML = cards;
})

gender.addEventListener("change", (e) => {
  const value = e.target.value;
  const filteredSearch = filter(characters, value, "gender");
  const cards = loadCharacters(filteredSearch);
  cardContainer.innerHTML = cards;

  const percentage = calculatePercentage(characters.length, filteredSearch.length);
  percentageReturn.innerHTML = `Essa lista contém ${filteredSearch.length} personagens, que equivale á ${percentage}% dos personagens totais`; 
})

status.addEventListener("change", (e) => {
  const value = e.target.value;
  const filteredSearch = filter(characters, value, "status");
  const cards = loadCharacters(filteredSearch);
  cardContainer.innerHTML = cards;

  const percentage = calculatePercentage(characters.length, filteredSearch.length);
  percentageReturn.innerHTML = `Essa lista contém ${filteredSearch.length} personagens, que equivale á ${percentage}% dos personagens totais`;
})

specie.addEventListener("change", (e) => {
  const value = e.target.value;
  const filteredSearch = filter(characters, value, "species");
  const cards = loadCharacters(filteredSearch);
  cardContainer.innerHTML = cards;

  const percentage = calculatePercentage(characters.length, filteredSearch.length);
  percentageReturn.innerHTML = `Essa lista contém ${filteredSearch.length} personagens, que equivale á ${percentage}% dos personagens totais`;
})

order.addEventListener("change", () => {
  const charactersOrder = order.value;
  const filterOrder = alphabeticalOrder(charactersOrder, characters );
  const cards = loadCharacters(filterOrder);
  cardContainer.innerHTML = cards;  

})


cleanfilter.addEventListener('click', (event) => {
  location.reload(event);
})
