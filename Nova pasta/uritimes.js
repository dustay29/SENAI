// Importa o módulo 'http' para criar um servidor HTTP
const http = require("http");

// Define o endereço do host onde o servidor vai rodar
const host = "localhost";

// Define a porta em que o servidor vai escutar as requisições
const port = 3000;

// Um array de objetos que representa as partidas
const partidas = [
    { id: 1, partida: 'Grêmio x Inter' },      // Partida 1
    { id: 2, partida: 'Flamengo x Vasco' },    // Partida 2
    { id: 3, partida: 'Inter x Avai' },        // Partida 3
    { id: 4, partida: 'Flamengo x Grêmio' },   // Partida 4
    { id: 5, partida: 'Real Madrid x Grêmio' },// Partida 5
    { id: 6, partida: 'Barcelona x Inter' },   // Partida 6
];

// Função que vai tratar as requisições recebidas pelo servidor
const requestListener = function (req, res) {
    // Define o cabeçalho da resposta, informando que o conteúdo será em JSON
    res.setHeader('Content-Type', 'application/json');

    // Verifica se a URL da requisição é exatamente "/partidas"
    if (req.url === '/partidas') {
        // Se for, retorna um código de resposta 200 (OK) e envia todas as partidas em formato JSON
        res.writeHead(200);
        res.end(JSON.stringify({ partidas }));
        return;
    }

    // Se a URL contiver "/partidas/{time}", extrai o nome do time da URL
    const time = decodeURI(req.url.split("/partidas/")[1]);

    // Verifica se foi encontrado um nome de time na URL
    if (time) {
        // Filtra as partidas que contêm o nome do time, ignorando maiúsculas/minúsculas
        const partidasFiltradas = partidas.filter(jogo => jogo.partida.toLowerCase().includes(time.toLowerCase()));

        // Se encontrar partidas para o time, retorna elas no formato JSON com código 200 (OK)
        if (partidasFiltradas.length > 0) {
            res.writeHead(200);
            res.end(JSON.stringify({ partidas: partidasFiltradas }));
        } else {
            // Se não encontrar partidas, retorna um erro 404 (não encontrado)
            res.writeHead(404);
            res.end(JSON.stringify({ message: `Nenhuma partida encontrada para o time: ${time}` }));
        }
        return;
    }

    // Caso a URL não seja encontrada (nem "/partidas" nem "/partidas/{time}"), retorna erro 404
    res.writeHead(404);
    res.end(JSON.stringify({ message: "URL não encontrada" }));
};

// Cria o servidor HTTP, usando a função 'requestListener' para tratar as requisições
const server = http.createServer(requestListener);

// Faz o servidor escutar na porta e host definidos
server.listen(port, host, () => {
    // Quando o servidor estiver rodando, exibe uma mensagem no console
    console.log(`Server running at http://${host}:${port}`);
});
