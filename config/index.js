const mysql = require("mysql2");

const connection = mysql.createConnection({
	host: process.env.NEXT_PUBLIC_API_DATABASE_HOST,
	port: process.env.NEXT_PUBLIC_API_DATABASE_PORT,
	user: process.env.NEXT_PUBLIC_API_DATABASE_USER,
	database: process.env.NEXT_PUBLIC_API_DATABASE_DB,
	password: process.env.NEXT_PUBLIC_API_DATABASE_PASSWORD,
});

module.exports = connection;
