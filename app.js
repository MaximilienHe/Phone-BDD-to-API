const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./config');

// Create Express app
const app = express();

// Configure body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Create routes for retrieving data from database
app.get('/brands', (req, res) => {
    pool.query('SELECT * FROM brands', (error, results) => {
        if (error) {
            res.status(500).json({ error });
        } else {
            res.status(200).json({ data: results });
        }
    });
});

app.get('/devices', (req, res) => {
    pool.query('SELECT * FROM devices', (error, results) => {
        if (error) {
            res.status(500).json({ error });
        } else {
            res.status(200).json({ data: results });
        }
    });
});

app.get('/devices/:brand', (req, res) => {
    const brand = req.params.brand;
    pool.query('SELECT * FROM devices WHERE brand_name = ?', [brand], (error, results) => {
        if (error) {
            res.status(500).json({ error });
        } else {
            res.status(200).json({ data: results });
        }
    });
});

app.get('/devices/:brand/:limit', (req, res) => {
    const brand = req.params.brand;
    const limit = parseInt(req.params.limit);
    pool.query('SELECT * FROM devices WHERE brand_name = ? LIMIT ?', [brand, limit], (error, results) => {
        if (error) {
            res.status(500).json({ error });
        } else {
            res.status(200).json({ data: results });
        }
    });
});

app.get('/devicesDetail', (req, res) => {
    pool.query('SELECT * FROM devicesDetail', (error, results) => {
        if (error) {
            res.status(500).json({ error });
        } else {
            res.status(200).json({ data: results });
        }
    });
});

app.get('/devicesDetail/:title', (req, res) => {
    const { title } = req.params;
    pool.query('SELECT * FROM devicesDetail WHERE title LIKE ?', `%${title}`, (error, results) => {
      if (error) {
        res.status(500).json({ error });
      } else {
        res.status(200).json({ data: results });
      }
    });
  });
  



// Start server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
