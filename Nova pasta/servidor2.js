const http =  require("http");
const host = "localhost";
const port = 3000;

const requestListener = function(req,res){
    // DEFININDO TIPO DE DADOS COMO JSON
    res.setHeader('Content-Type', 'application/json')

    // Tratando as possiveis requisições do client
    switch(req.url) {
        case'/livros':
        res.writeHead(200);
        res.end(JSON.stringify({ livros: [] }))
        break;

        case'/autores':
        res.writeHead(200);
        res.end(JSON.stringify({ autores: [] }))
        break;

        default:
            res.writeHead(404);
            res.end("Nada encontrado")

    }
}

const server = http.createServer(requestListener);
 
server.listen(port, host,()=>{
    console.log("sucess");
});