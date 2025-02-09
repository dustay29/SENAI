function fastfood() {
    let quantidadeTotal = 0;
    let precoTotal = 0;
    let continuar = 1;

    const pedido = {
        produto: [], 
        quantidade: [], 
        preco: [],
    };

    while (continuar === 1) {
        let produto = prompt('Qual produto você deseja?');   
        let quantidade = Number(prompt('Quantidade do produto?'));
        let preco = Number(prompt('Qual o preço do produto?'));

        if (produto === null || quantidade === null || preco === null || isNaN(quantidade) || isNaN(preco)) {
            alert("Informação inválida. Por favor, tente novamente.");
            return; 
        }

        // Armazena os dados no pedido
        pedido.produto.push(produto);
        pedido.quantidade.push(quantidade);
        pedido.preco.push(preco);

        // Atualiza os totais
        precoTotal += preco * quantidade;
        quantidadeTotal += quantidade;

        continuar = Number(prompt('Deseja continuar? (1 = Sim / 2 = Não)'));
    }

    let valorComDesconto = precoTotal;
    if (precoTotal > 30) {
        valorComDesconto = precoTotal * 0.9;
    }

    alert(`Você pediu os seguintes produtos:\n${pedido.produto.join(', ')}\nTotal de unidades: ${quantidadeTotal}\nO total com desconto é R$${valorComDesconto.toFixed(2)}.`);
}

fastfood();

