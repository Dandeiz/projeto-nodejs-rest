const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'dan',
    password: 'dan9943',
    database: 'agenda-petshop'
})

module.exports = conexao