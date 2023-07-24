const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Bem vindo ao mundo encantado.....')
});

app.listen(port, () => {
    console.log('rodando na porta 3000')
})