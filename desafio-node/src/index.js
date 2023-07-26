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

    connection.query('create table if not exists pessoa(id int not null auto_increment, nome varchar(255) not null, primary key(id))', function (error, results, fields) {
        
        if (error) console.log(error);

        connection.query(`insert into pessoa(nome) values('Willian Menezes')`, function (error, results, fields) {

            if (error) console.log(error);
    
            connection.query('select nome from pessoa', function (error, results, fields) {

                if (error) console.log(error);
        
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
