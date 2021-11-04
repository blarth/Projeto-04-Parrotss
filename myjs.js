/* Comeco do jogo, checar parametros */
function pegar_numero_cartas() {
  let numero_cartas = parseInt(prompt("Quantos cartas deseja no jogo ?"));
  if (numero_cartas !== NaN) {
    return numero_cartas;
  } else {
    pegar_numero_cartas();
  }
}
let numero_cartas = pegar_numero_cartas();

/* Verificacao dos parametros do jogo */
const verificacao_loop = numero_cartas % 2 !== 0;

function verificacao_intervalo(x, min, max) {
  return x >= min && x <= max;
}
console.log(numero_cartas);
/* loop para verificar a resposta e pedir outra se necessaria */

/* while (
  verificacao_intervalo(numero_cartas, 4, 14) !== true  
  verificacao_loop
) {
  numero_cartas = pegar_numero_cartas();
}
console.log(numero_cartas); */

if (verificacao_intervalo(numero_cartas, 4, 14) !== true) {
  numero_cartas = pegar_numero_cartas();
} else {
  if (verificacao_loop) {
    numero_cartas = pegar_numero_cartas();
  } else {
    console.log("ta certu");
  }
}
