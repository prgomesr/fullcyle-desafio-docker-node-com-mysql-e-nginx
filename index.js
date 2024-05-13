const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const connection = mysql.createConnection(config);

const sqlInsert = `INSERT INTO people(name) values('Joesley')`;
connection.query(sqlInsert, function (err, results, fields) {
    if (err) {
        console.error('Erro ao inserir dados:', err);
        return;
    }
    console.log('Inserido com sucesso!');
});

app.get('/', (req, res) => {
    const sqlSelect = `SELECT name FROM people`;
    connection.query(sqlSelect, function (err, results, fields) {
        if (err) {
            console.error('Erro ao buscar dados:', err);
            res.send('<h1>Erro ao buscar nomes!</h1>');
            return;
        }

        let namesHtml = results.map(person => `<li>${person.name}</li>`).join('');
        res.send(`<h1>Full Cycle Rocks!</h1><ul>${namesHtml}</ul>`);
    });
});

app.listen(port, () => {
    console.log('Rodando na porta', port);
});
