const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json('get All');
});

app.get('/getById', (req, res) => {
    const parametros = req.query;
    res.json(parametros);
});

app.get('/id/:id/nombre/:nombre', (req, res) => {
    const parametros = req.params;
    res.json(parametros);
});

app.post('/', (req, res) => {
    const parametros = req.body;
    res.json(parametros);
});

app.put('/', (req, res) => {
    const parametros = req.body;
    res.json(parametros);
});

app.delete('/:id', (req, res) => {
    const parametros = req.params;
    res.json(parametros);
});

app.listen(3000, () => {
    console.log('Funcionando en el puerto 3000');
});