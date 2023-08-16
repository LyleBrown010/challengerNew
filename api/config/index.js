require("dotenv").config(); 
const{createPool} = require("mysql2"); 
const connection = createPool({
    host: process.env.host, 
    database: process.env.database, 
    user: process.env.user,
    password: process.env.password, 
    multipleStatements: true, 
    connectionLimit: 30
})

module.exports = connection; 