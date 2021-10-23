//dependencies
const express = require('express');
const mysql = require('mysql2');

//ports
const PORT = process.env.PORT || 3001;
const app = express();

//Express middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //Your MySQL username,
        user: 'root',
        //Your MySQL password
        password: '264169Ty!',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

//Default response for any other request (not found)
app.use((req, res) => {
    res.status(404).end();
});

// connection function to show connection to port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});