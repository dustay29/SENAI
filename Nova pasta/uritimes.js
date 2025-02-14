const http =  require("http");
const host = "localhost";
const port = 3000;

const partidas = [
    {id: 1, partida: 'Grêmio x Inter'},
    {id: 2, partida: 'Flamengo x Vasco'},
    {id: 3, partida: 'Inter x Avai'},
    {id: 4, partida: 'Flamengo x Grêmio'},
    {id: 5, partida: 'Real Madrid x Grêmio'},
    {id: 6, partida: 'Barcelona x Inter'},
]

for (let i = 0;i < partidas.length; i++){

const palavra = '/';

if (partidas[i].partida.includes(palavra)) {

    console.log(`A palavra "${palavra}" foi encontrada na frase.`);
} else {
    console.log(`A palavra "${palavra}" não foi encontrada na frase.`);
}

}

const requestListener = function(req,res){

    res.setHeader('Content-Type', 'application/json')


    if(req.url === '/partidas') {
        res.writeHead(200);
        res.end(JSON.stringify({ partidas }))
        

        }
    }


const server = http.createServer(requestListener);
 
server.listen(port, host,()=>{
    console.log("sucess");
});