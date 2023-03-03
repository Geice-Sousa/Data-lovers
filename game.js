const grid = document.getElementById('grid-game');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');
const mensage = document.querySelector('.mensage');
const divMensage = document.querySelector('.div-mensage');
const tempo = document.querySelector(".tempo")


const characters = [
  'beth.png',
  'jerry.png',
  'jessica.png',
  'morty.png',
  'pessoa-passaro.png',
  'pickle-rick.png',
  'rick.png',
  'summer.png',
  'meeseeks.png',
  'scroopy.png',
];
const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
  const disabledCards = document.querySelectorAll('.disabled-card');

  if (disabledCards.length === 20) {
    clearInterval(this.loop);
    timer.style.opacity = 0;
    tempo.style.opacity = 0 ;
    const button = createElement('button', 'button');
    button.innerHTML = "JOGUE NOVAMENTE"
    divMensage.appendChild(button);
    button.addEventListener("click",(e) =>{
      location.reload(e);
    })
    return (mensage.innerHTML = `Parabéns,${spanPlayer.innerHTML} seu tempo foi de ${timer.innerHTML} segundos`);
   
  }
}

const checkCards = () => {
  const firstCharacter = firstCard.getAttribute('data-character');
  const secondCharacter = secondCard.getAttribute('data-character');

  if (firstCharacter === secondCharacter) {

    firstCard.firstChild.classList.add('disabled-card');
    secondCard.firstChild.classList.add('disabled-card');
    const audio = new Audio("audio/click.mp3");
    audio.play();

    firstCard = '';
    secondCard = '';

    checkEndGame();

  } else {
    setTimeout(() => {

      firstCard.classList.remove('reveal-card');
      secondCard.classList.remove('reveal-card');

      firstCard = '';
      secondCard = '';

    }, 700);
  }
}

const revealCard = ({ target }) => {

  if (target.parentNode.className.includes('reveal-card')) {
    return;
  }
  if (firstCard === '') {
    target.parentNode.classList.add('reveal-card');
    firstCard = target.parentNode;
  } else if (secondCard === '') {
    target.parentNode.classList.add('reveal-card');
    secondCard = target.parentNode;

    checkCards();
  }
}

const createCard = (character) => {
  const card = createElement('div', 'card');
  const front = createElement('div', 'face front');
  const back = createElement('div', 'face back');

  front.style.backgroundImage = `url('images/${character}')`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener('click', revealCard);
  card.setAttribute('data-character', character)

  return card;
}

const loadGame = () => {
  const duplicateCharacters = [...characters, ...characters];//spread operator js

  const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

  shuffledArray.forEach((character) => {
    const card = createCard(character);
    grid.appendChild(card);
  });
}

const startTimer = () => {
  this.loop = setInterval(() => {
    const currentTime = +timer.innerHTML;
    timer.innerHTML = currentTime + 1;
  }, 1000);

}

window.onload = () => {
  spanPlayer.innerHTML = localStorage.getItem('player');
  startTimer();
  loadGame();
}