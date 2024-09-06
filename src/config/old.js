import mysql from 'mysql2/promise';

// Create the connection to database
// const connection = await mysql.createConnection({
//     host: process.env.DB_HOST,
//     port : process.env.DB_PORT,
//     user: process.env.DB_USER,  
//     password:process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//   });

const connection = await mysql.createPool({
  host: process.env.DB_HOST,
  port : process.env.DB_PORT,
  user: process.env.DB_USER,  
  password:process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

  export default connection;