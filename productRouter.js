import express from "express";

const productRouter = express.Router();

productRouter.get("/", (req, res) => {
    res.send('Product List');
});
//Get ONE
productRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Get one : ${id}`);
});

//POST - create
productRouter.post('/', (req, res) => {
    const product = req.body;
    console.log(product);
    console.log(req.body);
    console.log(req.body.user);
    res.status(201).send('Created');
});

//PUT - update (full update)
productRouter.put('/:id', (req, res) => {
    const id = req.params.id;
    const product = req.body;
    console.log(`Update ${id}`, product);
    res.send(`Updated ${id}`);
});

//PATCH - update (partial update)
productRouter.patch('/:id/edit', (req , res) => {
    const id = req.params.id;
    const product = req.body;
    console.log(`Partial Update ${id}`, product);
    res.send(`Patched ${id}`);
});

//DELETE
productRouter.delete('/:id', (req, res) => {
    const id = req.params.id;
    console.log(`Delete ${id}`);
    res.send(`Deleted ${id}`);
});

export default productRouter;