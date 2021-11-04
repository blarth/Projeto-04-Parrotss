/* Comeco do jogo, checar parametros */
function pegar_numero_cartas() {
  let resposta = parseInt(
    prompt("Quantos cartas deseja no jogo ?(Insira um valor de 4 até 14)")
  );
  if (resposta !== NaN) {
    return resposta;
  } else {
    pegar_numero_cartas();
  }
}

var numero_cartas = pegar_numero_cartas();
console.log(numero_cartas);
/* Verificacao dos parametros do jogo */
var verificacao_par = numero_cartas % 2 == 0;

function verificacao_intervalo(x, min, max) {
  return x >= min && x <= max;
}
console.log(numero_cartas);
/* loop para verificar a resposta e pedir outra se necessaria */
while (verificacao_intervalo(numero_cartas, 4, 14) !== true) {
  numero_cartas = pegar_numero_cartas();
  console.log(numero_cartas);
}
/* function loop() {
  if (numero_cartas < 14) {
    if (verificacao_par !== true) {
      numero_cartas = pegar_numero_cartas();
      loop();
    } else {
    }
  } else {
    numero_cartas = pegar_numero_cartas();
    loop();
  }
} */
