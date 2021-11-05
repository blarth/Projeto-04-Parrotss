/* Comeco do jogo, checar parametros */
let cartas;
function embaralhador() {
  return Math.random() - 0.5;
}

function pegarNumeroCartas() {
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
    const cartaNova = `<div class="card">
      <div class="front-face face" >
        <img src="assets/front.png" alt="erro" />
      </div>
      <div class="face" onclick="add_backface(this)">
        <img src="assets/${nomeImg[i]}.gif" alt="erro" />
      </div>
    </div>`;
    arrayComCartas.push(cartaNova);
    arrayComCartas.push(cartaNova);

    /* cardsParaBaixo.innerHTML += `
    <div class="card">
      <div class="front-face face" >
        <img src="assets/front.png" alt="erro" />
      </div>
      <div class="face" onclick="add_backface(this)">
        img src="assets/${nomeImg}
      </div>
    </div>`; */
  }
  arrayComCartas.sort(embaralhador);
}

const cardsParaBaixo = document.querySelector(".parrot-place");
/* loop para verificar a resposta e pedir outra se necessaria */

function add_backface(parrot) {
  parrot.classList.toggle("back-face");
  parrot.innerHTML = `<img src="assets/bobrossparrot.gif" alt="erro" />`;
}

/* Se o papagaio for o primeiro a estar virado, ele fica parado esperando */

/* Se o segundo papagaio que virar não for correspondente ao primeiro papagaio, o js espera 1 segundo e vira os dois de volta */
console.log("Wait for it");
setTimeout(1000);
console.log("boas");
