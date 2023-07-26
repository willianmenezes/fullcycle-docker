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

    connection.query('create table IF NOT EXISTS pessoa (id int not null auto_increment, nome varchar(255) not null, primary key(id))', function (error, results, fields) {
        
        if (error) throw error;

        connection.query(`INSERT INTO pessoa(nome) VALUES('Willian Menezes')`, function (error, results, fields) {

            if (error) throw error;
    
            connection.query('SELECT nome FROM pessoa', function (error, results, fields) {

                if (error) throw error;
        
                results.forEach(el => {
                    response += '</br>' + el.nome;
                });
        
                connection.end()
                res.send(response)
            });
        });
    });
});

app.listen(port, () => {
    console.log('rodando na porta 3000')
});
