import mysql from 'mysql2/promise';
const connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.passWord,
  database: process.env.database,
});

export default connection;
