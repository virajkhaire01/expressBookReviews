const express = require('express');
const axios = require('axios');

const public_users = express.Router();

// Get all books
public_users.get('/', async function (req, res) {
    try {
        const response = await axios.get('http://localhost:5000/');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving books' });
    }
});

// Get book by ISBN
public_users.get('/isbn/:isbn', async function (req, res) {
    try {
        const isbn = req.params.isbn;
        const response = await axios.get(`http://localhost:5000/isbn/${isbn}`);
        res.json(response.data);
    } catch (error) {
        res.status(404).json({ message: 'Book not found' });
    }
});

// Get books by author
public_users.get('/author/:author', async function (req, res) {
    try {
        const author = req.params.author;
        const response = await axios.get(
            `http://localhost:5000/author/${encodeURIComponent(author)}`
        );
        res.json(response.data);
    } catch (error) {
        res.status(404).json({ message: 'Books not found' });
    }
});

// Get books by title
public_users.get('/title/:title', async function (req, res) {
    try {
        const title = req.params.title;
        const response = await axios.get(
            `http://localhost:5000/title/${encodeURIComponent(title)}`
        );
        res.json(response.data);
    } catch (error) {
        res.status(404).json({ message: 'Books not found' });
    }
});

module.exports.general = public_users;
