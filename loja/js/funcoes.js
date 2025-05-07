let quantidades = [0, 0, 0, 0];
let valores = [1000, 1500, 2000, 3000];

function adicionar(id) {
  quantidades[id - 1]++;
  atualizar(id);
}

function retirar(id) {
  if (quantidades[id - 1] > 0) {
    quantidades[id - 1]--;
    atualizar(id);
  } else {
    alert("A quantidade não pode ser menor que zero!");
  }
}

function atualizar(id) {
  let quantidade = quantidades[id - 1];
  let valor = valores[id - 1];
  let total = quantidade * valor;

  document.getElementById("Quantidade_" + id).innerText = quantidade;
  document.getElementById("total_" + id).innerText = "R$ " + total.toFixed(2);

  atualizarSubtotal();
}

function atualizarSubtotal() {
  let subtotal = 0;
  for (let i = 0; i < quantidades.length; i++) {
    subtotal += quantidades[i] * valores[i];
  }
  document.getElementById("subtotal").innerText = "R$ " + subtotal.toFixed(2);
}

function finalizarCompra() {
  let subtotal = 0;
  for (let i = 0; i < quantidades.length; i++) {
    subtotal += quantidades[i] * valores[i];
  }

  if (subtotal === 0) {
    alert("Você ainda não adicionou nenhum produto à compra!");
  } else {
    alert("Compra finalizada com sucesso! Total: R$ " + subtotal.toFixed(2));
  }
}
