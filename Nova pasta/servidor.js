const http =  require("http");
const host = "localhost";
const port = 3000;

// 1 Escutando as requisições
const requestListener = function(req,res){
    res.writeHead(200);
    res.end("my first serverrrrrrrrrr");
};

// 2 Criando o servidor
const server = http.createServer(requestListener);

// 3 Iniciando o servidor
server.listen(port, host,()=>{
    console.log("sucess");
});