const { Pool } = require('pg'); //Импортирует модуль pg для работы с PostgreSQL.

// Настройка подключения к базе данных PostgreSQL
const pool = new Pool({
user: 'sergeiemm',             
host: 'localhost',
database: 'test_db',          
password: '9119',                 
port: 5432,
});

module.exports = {
query: (text, params) => pool.query(text, params),
};