const express = require('express')
const app = express()
const port = 3000
const config =  {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodeapp'
}



app.get('/', (req, res) => {

    let response = '<h1>Full Cycle Rocks!</h1>';

    const mysql = require('mysql')
    const connection = mysql.createConnection(config)

    const sql = `INSERT INTO pessoa(nome) VALUES('Willian Menezes')`
    connection.query(sql)

    connection.query('SELECT nome FROM pessoa', function (error, results, fields) {

        if (error) throw error;

        results.forEach(el => {
            response += '</br>' + el.nome;
        });

        connection.end()
        res.send(response)
    });
});

app.listen(port, () => {
    console.log('rodando na porta 3000')
})