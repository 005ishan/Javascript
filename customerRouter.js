import express from 'express';

const customerRouter = express.Router();

customerRouter.get('/users/all/get', (req, res) => {
    res.send('Customer List');
});

customerRouter.get('/users/one/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Get customer ${id}`);
});

customerRouter.get('/client/one/:user/view', (req, res) => {
    const user = req.params.user;
    res.send(`Get client ${user}`);
});

customerRouter.post('/users/new/add', (req, res) => {
    const customer = req.body;
    console.log(customer);
    console.log(req.body);
    res.status(201).send('Created cutomer');
});

customerRouter.post('/client/add/create', (req, res) => {
    const customer = req.body;
    console.log(customer);
    console.log(req.body);
    res.status(201).send('Created');
});

customerRouter.put('/users/:id/update', (req, res) => {
    const id = req.params.id;
    const customer = req.body;
    console.log(`Update ${id}`, customer);
    res.send(`Updated ${id}`);
});

customerRouter.put('/:id/change/one', (req, res) => {
    const id = req.params.id;
    const customer = req.body;
    console.log(`Update ${id}`, customer);
    res.send(`Updated ${id}`);
});

customerRouter.delete('/users/:id/delete/one', (req, res) => {
    const id = req.params.id;
    console.log(`Delete ${id}`);
    res.send(`Deleted ${id}`);
});

customerRouter.delete('/delete/one/:user_id', (req, res) => {
    const id = req.params.id;
    console.log(`Delete ${id}`);
    res.send(`Deleted ${id}`);
});

export default customerRouter;