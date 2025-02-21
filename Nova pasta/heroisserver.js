const express = require('express')
const app = express()
const port = 3000
app.use(express.json());  // Habilita o middleware para interpretar JSON



const cadastrarHeroi = [
    {
        id: 1,
        heroi: "Homem Aranha",
        poder: 1000000
    }
]

const cadastrarVilao = [
    {
        id: 1,
        vilao: "Homem de Ferro",
        poder: 1000000
    }
]

app.post('/cadastrar-heroi', (req,res) => {
    cadastrarHeroi.push(req.body); 
    res.json(cadastrarHeroi)
})

app.post('/cadastrar-vilao', (req,res) => {
    cadastrarVilao.push(req.body); 
    res.json(cadastrarVilao)
})

app.post('/batalhar', (req,res) => {
    const resultadoHeroi = cadastrarHeroi.find(cadastrar => cadastrar.id === req.body.idHeroi);
    const resultadoVilao = cadastrarVilao.find(cadastrar => cadastrar.id === req.body.idVilao);
    if (resultadoHeroi.poder > resultadoVilao.poder){
        res.json("Batalha: " + resultadoHeroi.heroi + " Ganhou de " + resultadoVilao.vilao)
    }else if(resultadoVilao.poder > resultadoHeroi.poder){
        res.json("Batalha: " + resultadoVilao.vilao + " Ganhou de " + resultadoHeroi.heroi)
    }else{
        res.json("Empate")
    }
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})