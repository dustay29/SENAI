import express from 'express'
const app = express()
const port = 3000
app.use(express.json());



const livros = {
    
    aventura: [
        {
        id: 1,nome: "As Aventuras De Gumball"
        }
    ],

    suspense: [
        {
        id: 1,nome: "O Suspense de Bela"
        }
    ],

    romance: [
        {
        id: 1,nome: "O Romance de César"
        }
    ],

    ficcao: [
        {
        id: 1,nome: "A Ficção de Sophia"
        }
    ],

} 

app.get('/livros', (req, res) => {
    res.json(livros);
})

app.post('/livros/aventura', (req, res) => {
    livros.aventura.push(req.body);
    res.json(livros.aventura)
})

app.post('/livros/romance', (req, res) => {
    livros.romance.push(req.body);
    res.json(livros.romance)
})

app.post('/livros/suspense', (req, res) => {
    livros.suspense.push(req.body);
    res.json(livros.suspense)
})

app.post('/livros/ficcao', (req, res) => {
    livros.ficcao.push(req.body);
    res.json(livros.ficcao)
})

app.get('/livros/:categoria', (req, res) => { 
    if(livros[req.params.categoria]){
        res.json(livros[req.params.categoria])
    }else{
        res.status(404).json({ erro: "Categoria não encontrada" });
    }
})

    // PARA RELEMBRAR: req.params.categoria pega "aventura".
    // Ele verifica se livros["aventura"] existe.
    // Se existir, retorna os livros da categoria "aventura".
    // Se não existir, retorna um erro 404.

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})