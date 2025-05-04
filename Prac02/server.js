const express = require('express');
const path = require('path');
const app = express();
const PORT = 8085;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views/index.html')));
app.get('/autor', (req, res) => res.sendFile(path.join(__dirname, 'views/autor.html')));
app.get('/hobbies', (req, res) => res.sendFile(path.join(__dirname, 'views/hobbies.html')));
app.get('/ingSoftware', (req, res) => res.sendFile(path.join(__dirname, 'views/ingSoftware.html')));
app.get('/galeria', (req, res) => res.sendFile(path.join(__dirname, 'views/galeria.html')));
app.get('/estandaresWeb', (req, res) => res.sendFile(path.join(__dirname, 'views/estandaresWeb.html')));
app.get('/contactame', (req, res) => res.sendFile(path.join(__dirname, 'views/contactame.html')));

app.listen(PORT, () => console.log(`Servidor corriendo en http://127.0.0.1:${PORT}/lab02`));
