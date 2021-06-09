const express = require ('express');
const app = express();
const port= 3000;

app.get('/', (req, res) => {
    res.send({
        message: 'Bienveido',
        icon: '😎'
    });
});

app.post('/', (req, res) => {
    res.send({
        sever: req.hostname,
        route: req.route
    });
});

app.get('/user/:name', (req,res) => {
    const {name} = req.params;
    res.send({
        name: name.length
    });
});

app.get('/suma/', (req, res) => {
    const { num1, num2 } = req.query;
    res.send({
        resultado: parseInt(num1) + paseIt(num2)
    });
});

app.listen(port, () => {
    console.log(`Servidoor en http://localhost:${port}`);
});