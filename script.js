let contador = 0;

function fazerPedido(produto) {
  alert("Você escolheu: " + produto + ". Nosso time entrará em contato!");
}

function indicar() {
  contador++;
  document.getElementById("indicacoes").innerText =
    "Você já indicou " + contador + " pessoas.";
  if (contador >= 10) {
    alert("🎉 Parabéns! Você ganhou 40% de desconto na sua compra!");
  }
}
