const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    // Listar todos os produtos
    async index(req, res) {
        const { page = 1, title } = req.query;
        const products = await Product.paginate({}, { page, limit: 10 });

        return res.json(products);
    },
    // Retornar um único produto
    async show(req, res) {
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },
    // Criar um produto
    async store(req, res) {
        const product = await Product.create(req.body);

        return res.json(product);
    },
    // Atualizar um produto
    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(product);
    },
    // Deleta um produto 
    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }
};