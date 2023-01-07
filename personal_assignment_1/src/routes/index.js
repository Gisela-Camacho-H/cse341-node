const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Gis Camacho');
});

routes.get('/fullname', (req, res) => {
    res.send('Cinthia Gisela Camacho');
});

routes.get('/course', (req, res) => {
    res.send('Cse 341');
});

module.exports = routes;