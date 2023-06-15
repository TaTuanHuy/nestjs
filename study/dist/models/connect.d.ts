import mysql from 'mysql2/promise';
declare const connection: Promise<mysql.Connection>;
export default connection;
