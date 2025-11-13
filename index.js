// const express = require('express'); //commonjs import, synchronus
import express from 'express'; //ES module import, asynchronus

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get(
    '/api/data/:user', //path
    (req, res, next) => {
        console.log(req.params);
        const user = req.params.user;
        console.log(user);
        console.log(req.query);
        res.status(200).send(`User: ${user}`);
        //req -> client request, res -> server response 
    });

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});

// module.exports = app; //commonjs export
export default app; //ES module export

