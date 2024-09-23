const fs = require('fs');
const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    fs.readFile('./usuarios.txt', (err, datos) => {
        datos = datos.toString();
        datos = datos.split(/\n/);
        res.json(datos);
    });
});

app.get('/getByNombre', (req, res) => {
    const nombre = req.query.nombre;
    fs.readFile('./usuarios.txt', (err, datos) => {
        datos = datos.toString();
        datos = datos.split(/\n/);
        const filtrado = datos.filter((nombreTemporal) => {
            return nombreTemporal == nombre;
        });
        if(filtrado.length == 0){
            res.json({
                nombre: ''
            });
            return;
        }
        res.json({
            nombre: filtrado[0]
        });
    });
});

app.get('/nombre/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    fs.readFile('./usuarios.txt', (err, datos) => {
        datos = datos.toString();
        datos = datos.split(/\n/);
        const filtrado = datos.filter((nombreTemporal) => {
            return nombreTemporal == nombre;
        });
        if(filtrado.length == 0){
            res.json({
                nombre: ''
            });
            return;
        }
        res.json({
            nombre: filtrado[0]
        });
    });
});

app.post('/', (req, res) => {
    const nombre = req.body.nombre;
    fs.appendFile('usuarios.txt', "\n" + nombre, () => {
        res.json({
            msg: `El usuario ${nombre} se insertó correctamente`
        });
    });
});

app.put('/', (req, res) => {
    const parametros = req.body;
    res.json(parametros);
});

app.delete('/:nombre', (req, res) => {
    const parametros = req.params;
    res.json(parametros);
});

app.listen(3000, () => {
    console.log('Funcionando en el puerto 3000');
});