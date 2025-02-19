
const fs = require('node:fs'); // NAO TA FAZENDO NADA

const http = require("http");

const host = "localhost";

const port = 3000;

const filmes = [
    { id: 1, titulo: 'Vingadores: Ultimato', genero: 'ação' },
    { id: 2, titulo: 'O Rei Leão', genero: 'animação' },
    { id: 3, titulo: 'The Dark Knight', genero: 'ação' },
    { id: 4, titulo: 'Jumanji: Bem-Vindo à Selva', genero: 'comédia' },
    { id: 5, titulo: 'La La Land', genero: 'drama' },
    { id: 6, titulo: 'Deadpool', genero: 'ação' },
    { id: 7, titulo: 'Toy Story', genero: 'animação' },
];

const requestListener = function (req, res) {

    res.setHeader('Content-Type', 'application/json');


    if (req.url === '/filmes') {

        res.writeHead(200);
        res.end(JSON.stringify({ filmes }));
        return;
    }


    const filme = decodeURI(req.url.split("/filmes/")[1]);
    const busca = decodeURI(req.url.split("/filmes/busca")[1]);


    if (filme) {

        const filmesFiltrados = filmes.filter(cinema => cinema.genero.toLowerCase().includes(filme.toLowerCase()));


        if (filmesFiltrados.length > 0) {
            res.writeHead(200);
            res.end(JSON.stringify({ filme: filmesFiltrados }));
        } else {

            res.writeHead(404);
            res.end(JSON.stringify({ message: `Nenhum filme encontrado.` }));
        }
        return;
    }


    res.writeHead(404);
    res.end(JSON.stringify({ message: "URL não encontrada" }));
};


const server = http.createServer(requestListener);

server.listen(port, host, () => {

    console.log(`Server running at http://${host}:${port}`);
});
