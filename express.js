const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');

const app = express();
const port = 3000;

// MySQL database connection
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'todo',
});

// Middleware
app.use(bodyParser.json());

// Serve static files (HTML, CSS, client-side JavaScript)
app.use(express.static(path.join(__dirname, 'to_do_list')));

// Routes
app.post('/addTask', (req, res) => {
    const { description } = req.body;
    pool.query('INSERT INTO tasks (description) VALUES (?)', [description], (error, results, fields) => {
        if (error) {
            console.error('Error executing MySQL query:', error);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json({ task: description });
    });
});

// Handle other CRUD operations similarly (e.g., updating and deleting tasks)

// Error handling middleware (must be defined after routes)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

