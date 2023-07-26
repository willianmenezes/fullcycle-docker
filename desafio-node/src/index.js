const express = require('express')
const app = express()
const port = 3000
const config =  {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodeapp'
}

const mysql = require('mysql')
const connection = mysql.createConnection(config)
const sql = 'create table [IF NOT EXISTS] pessoa (id int not null auto_increment, nome varchar(255) not null, primary key(id))'
connection.query(sql)
connection.end()

app.get('/', (req, res) => {

    let response = '<h1>Full Cycle Rocks!</h1>';

    const mysql = require('mysql')
    const connection = mysql.createConnection(config)

    const sqlCreate = 'create table [IF NOT EXISTS] pessoa (id int not null auto_increment, nome varchar(255) not null, primary key(id))'
    connection.query(sqlCreate)

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
