const Order = require('../models/order');

let orderController = {

    createNewOrder: async (req, res) => {
        const { origin_address, destiny_address, comment, distance, price } = req.body;
        console.log(req.body)
        const id = req.user.id;

        const newOrder = await new Order({ creator: id, origin_address, destiny_address, comment, distance, price });

        await newOrder.save()
            .then(() => res.send({ newOrder, Message: 'Ordem criada com sucesso' }))
            .catch(err => res.status(400).json('Error: ' + err))
    },

    showMyOrders: async (req, res) => {
        // user.id é setado pelo middleware anterior
        const order = await Order.find({ creator: req.user.id })
        order.creator = undefined;
        res.json(order)
    }
}

module.exports = {
    orderController
}