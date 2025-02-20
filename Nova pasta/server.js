const express = require('express')
const app = express()
const port = 3000
app.use(express.json());  // Habilita o middleware para interpretar JSON



const compras = [
    { id: 1, descricao: 'Playstation 5', preco: 5000.00 },
    { id: 2, descricao: 'Camisa do Grêmio', preco: 250.99 },
    { id: 3, descricao: 'Coxinha do Araujo', preco: 7.65 },
]

app.get('/compras', (req, res) => {
    res.json(compras)
})

app.post('/cadastrar-compras', (req,res) => {
    compras.push(req.body); 
    console.log(req.body)
    res.json(compras)
})

app.delete('/deletar-compras', (req,res) => {
    compras.splice(compras.indexOf(req.body), 1)
    res.json(compras)
})

app.get('/valortotal', (req,res) => {
    let precoTotal = 0
    for(let i = 0; i < compras.length; i++){
    precoTotal += compras[i].preco
}
res.json(precoTotal.toFixed(2))
})




// app.get('/partidas/:nomeDoTime', (req, res) => {
//     const nomeDoTime = req.params.nomeDoTime.toUpperCase()

//     const partidasDoTime = partidas.filter(item =>
//         item.partida.toUpperCase().includes(nomeDoTime)
//     )

//     res.json(partidasDoTime)
// })

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})