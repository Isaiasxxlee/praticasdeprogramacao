function adicionar(produto){
    const Quantidade = document.getElementById("Quantidade_" + produto)
    const valor = document.getElementById("valor_" + produto)
    const total = document.getElementById("total_" + produto)

    Quantidade.innerHTML++
    const preco = parseFloat(valor.innerHTML.replace("R$ ", ""))
    total.innerHTML = "R$ " + (Quantidade.innerHTML * preco).toFixed(2)
    
    atualizarSubtotal()
}


function retirar(produto){
    const Quantidade = document.getElementById("Quantidade_" + produto)
    const valor = document.getElementById("valor_" + produto)
    const total = document.getElementById("total_" + produto)

    if (Quantidade.innerHTML > 0) {
        Quantidade.innerHTML--
        const preco = parseFloat(valor.innerHTML.replace("R$ ", ""))
        total.innerHTML = "R$ " + (Quantidade.innerHTML * preco).toFixed(2)
    }

    atualizarSubtotal()

    console.log(valor.innerHTML)
}


function atualizarSubtotal() {
    let subtotal = 0;
    const elementosTotal = document.querySelectorAll("[id^='total_']");

    elementosTotal.forEach(el => {
        const valorNumerico = parseFloat(el.innerHTML.replace("R$ ", "").replace(",", "."));
        subtotal += valorNumerico;
    });

    document.getElementById("subtotal").innerHTML = "R$ " + subtotal.toFixed(2).replace(".", ",");
}



/* 

Dica extra (se quiser evoluir depois):
Se no futuro quiser deixar o código dinâmico (ex: não depender do i <= 4), pode fazer algo assim:
function atualizarSubtotal() {
    let subtotal = 0;

    for (let i = 1; i <= 4; i++) {
        const totalItem = document.getElementById("total_" + i).innerHTML;
        const valorNumerico = parseFloat(totalItem.replace("R$ ", "").replace(",", "."));
        subtotal += valorNumerico;
    }

    e agora ficou o da linha 31  >>> function atualizarSubtotal()  Assim, se tiver 10 ou 20 produtos, não precisa mudar o for.
 

Situação	Exibição	O que usamos
Sem .toFixed(2)	R$ 30	>> Valor numérico puro
Com .toFixed(2)	R$ 30.00	>>> Padrão financeiro
Com .toFixed(2).replace(".", ",")	R$ 30,00	 >>  Padrão brasileiro 🇧🇷 ✅



adicionar(produto)	Adiciona 1 unidade, recalcula total do item e subtotal	Continua sendo usada
retirar(produto)	Remove 1 unidade, recalcula total do item e subtotal	Continua sendo usada
atualizarSubtotal()	Soma todos os total_X e exibe o subtotal geral	✅ Substitui seu for fixo


*/