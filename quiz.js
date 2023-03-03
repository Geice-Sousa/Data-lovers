import  { calculatePercentage } from "./data.js";

const formQuiz = document.querySelector("#quiz");

formQuiz.addEventListener("click", (e) => {
  const elemento = e.target;
  const ehRadio = elemento.type === "radio";
  const ehCorreta = ehRadio && elemento.value === "correta";

  if (ehRadio) {
    const box = elemento.parentNode.parentNode;

    box.dataset.score = ehCorreta;
    box.classList.add("desabilita");
  }
});

const enviaQuiz = document.querySelector("#btn");
enviaQuiz.addEventListener("click", function calculaAcertos (){
  const divQuiz = document.querySelectorAll(".divQuiz");
  const mensage = document.querySelector(".mensage");
  const jogarNovamente = document.querySelector(".jogarNovamente");
  const qtdDeCorretas = document.querySelectorAll("input[type=radio][value=correta]:checked");
  const percentage = calculatePercentage(divQuiz.length,qtdDeCorretas.length );
  
  if(percentage >= 70){
    mensage.innerHTML = `Parabéns!!! Você é um super fã!!! Acertou ${percentage}% das perguntas.`
    jogarNovamente.style.display = "block";
    enviaQuiz.remove()
  } 
  
  if(percentage < 70){
    mensage.innerHTML = `Parabéns! Você acertou ${percentage}% das perguntas. Já pode dizer que é fã...`
    jogarNovamente.style.display = "block";
    enviaQuiz.remove()
  } 
  
  if(percentage <= 50){
    mensage.innerHTML = `Você acertou ${percentage}% das perguntas. Dá pra melhorar...`
    jogarNovamente.style.display = "block";
    enviaQuiz.remove()
  } 
  
  if(percentage < 20){
    mensage.innerHTML = `Você acertou ${percentage}% das perguntas. Parece que alguém precisa assistir mais epsódios...`
    jogarNovamente.style.display = "block";
    enviaQuiz.remove()
  }
 
}
);