/* Variaveis Globais */
let cartas;
let jogadas = 0;
let todasAsCartas;
let cartasJaViradas = [];
let cartax;
let todasAsCartasTras;
const cardsParaBaixo = document.querySelector(".parrot-place");

//Comeco do jogo//
comecarJogo();

function embaralhador() {
  return Math.random() - 0.5;
}

function comecarJogo() {
  while (cartas < 4 || cartas > 14 || cartas % 2 !== 0 || cartas === null) {
    cartas = prompt(
      "Quantos cartas deseja no jogo ?(Insira um valor de 4 até 14)"
    );
  }

  const nomeImg = [
    "bobrossparrot",
    "explodyparrot",
    "fiestaparrot",
    "metalparrot",
    "revertitparrot",
    "tripletsparrot",
    "unicornparrot",
  ];

  const arrayComCartas = [];

  for (let i = 0; i < cartas / 2; i++) {
    const cartaNova = `<div class="card" data-identifier="card">
      
      <div class="back-face face" data-identifier="back-face" onclick="vira(this)">
        <img src="assets/front.png" alt="erro" />
      </div>
      <div class="front-face face"  data-identifier="front-face">
        <img src="assets/${nomeImg[i]}.gif" alt="erro" />
      </div>
    </div>`;
    arrayComCartas.push(cartaNova);
    arrayComCartas.push(cartaNova);
  }
  const cardsParaBaixo = document.querySelector(".parrot-place");

  arrayComCartas.sort(embaralhador);
  for (let i = 0; i < arrayComCartas.length; i++) {
    cardsParaBaixo.innerHTML += arrayComCartas[i];
  }
}

function viraVolta() {
  todasAsCartasTras = document.querySelectorAll(".vira-tras");
  for (let i = 0; i < todasAsCartasTras.length; i++) {
    todasAsCartasTras[i].classList.remove("vira-tras");
  }
  todasAsCartas[0].classList.remove("escolhida");
  todasAsCartas[1].classList.remove("escolhida");
}

function vira(tras) {
  tras.classList.add("vira-tras");
  cartax = tras.nextElementSibling;
  cartax.classList.add("escolhida");
  todasAsCartas = document.querySelectorAll(".escolhida");

  jogo();
  terminarJogo();
}

function jogo() {
  if (todasAsCartas.length === 2) {
    if (todasAsCartas[0].innerHTML === todasAsCartas[1].innerHTML) {
      todasAsCartas[0].removeAttribute("onclick");
      todasAsCartas[1].removeAttribute("onclick");
      cartasJaViradas.push(todasAsCartas[0]);
      cartasJaViradas.push(todasAsCartas[1]);
      todasAsCartas[0].classList.remove("escolhida");
      todasAsCartas[1].classList.remove("escolhida");
      todasAsCartas[0].classList.add("escolhida-locked");
      todasAsCartas[1].classList.add("escolhida-locked");
      jogadas++;
    } else {
      setTimeout(viraVolta, 1000);
      jogadas++;
    }
  }
}
function alertaFinal() {
  alert(`Você ganhou em ${jogadas} jogadas!`);
  /* let gameplay = prompt("Gostaria de jogar novamente?");
  if (gameplay === "sim") {
    cardsParaBaixo.innerHTML = "";
    cartas = 0;
    comecarJogo();
  } else {
  } */
}

function terminarJogo() {
  if (cartasJaViradas.length === parseInt(cartas)) {
    setTimeout(alertaFinal, 1000);
  }
}
