
let funcoes = require("./js/funcoes")

const express = require("express") //importando os modulos express 
const app = express();
let port=3000
const ip='localhost'

//rota principal
app.get('/', (req,res) =>{
    res.send('<h1> 15 / 10 = <h1>' + funcoes.divide(15,10))
})

app.listen(port, ip, () => {
    console.log(`Servidor rodando em http://${ip}:${port}`)
    console.log('Para derrubar o servidor: ctrl + c');
  })