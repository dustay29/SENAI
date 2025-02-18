const http = require("http");
const host = "localhost";
const port = 3000;

const partidas = [
    { id: 1, partida: 'Grêmio x Inter' },
    { id: 2, partida: 'Flamengo x Vasco' },
    { id: 3, partida: 'Inter x Avai' },
    { id: 4, partida: 'Flamengo x Grêmio' },
    { id: 5, partida: 'Real Madrid x Grêmio' },
    { id: 6, partida: 'Barcelona x Inter' },
];

const requestListener = function (req, res) {
    res.setHeader('Content-Type', 'application/json');

    if (req.url === '/partidas') {
        res.writeHead(200);
        res.end(JSON.stringify({ partidas }));
        return;
    }

    const time = req.url.split("/partidas/")[1];

    if (time) {

        const partidasFiltradas = partidas.filter(jogo => jogo.partida.toLowerCase().includes(time));

        if (partidasFiltradas.length > 0) {
            res.writeHead(200);
            res.end(JSON.stringify({ partidas: partidasFiltradas }));
        } else {
            res.writeHead(404);
            res.end(JSON.stringify({ message: `Nenhuma partida encontrada para o time: ${time}` }));
        }
        return;
    }

    res.writeHead(404);
    res.end(JSON.stringify({ message: " não encontrada" }));
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
