import  { calculatePercentage } from "./data.js";

const formQuiz = document.querySelector("#quiz");

formQuiz.addEventListener("click", (e) => {
  const elemento = e.target;
  const ehRadio = elemento.type === "radio";
  const ehCorreta = ehRadio && elemento.value === "correta";

  if (ehRadio) {
    elemento.parentNode.parentNode.dataset.score = ehCorreta;
    //fazer selecionar apenas uma vez

    // elemento.checked === true;
    // console.log(elemento.closest("p input").disabled = "disabled") FAZ PARAR DE FUNCIONAR O INPUT JÁ SELECIONADO
    const divQuiz = document.querySelector(".divQuiz");
    console.log(divQuiz); //com All não funciona

    divQuiz.classList.add("desabilita");

    // elemento.disabled = "disabled"
  }

  // closest("p input") vai pegar o ancestral mais proximo no caso o p do input
});

const enviaQuiz = document.querySelector("#btn");
enviaQuiz.addEventListener("click", calculaAcertos);

function calculaAcertos (){
  const divQuiz = document.querySelectorAll(".divQuiz");
  const mensage = document.querySelector(".mensage");
  const jogarNovamente = document.querySelector(".jogarNovamente");
  const inputCorretas = document.querySelectorAll("input[type=radio][value=correta]");
  const qtdDeCorretas = inputCorretas.checked;
  const percentage = calculatePercentage(qtdDeCorretas, divQuiz.length);


  mensage.innerHTML = `Parabéns! Você acertou ${percentage} das perguntas.`
  jogarNovamente.style.display = "block";
  console.log("parabens! funcionou")
  //jogarNovamente.classList.remove("jogarNovamente")
}
