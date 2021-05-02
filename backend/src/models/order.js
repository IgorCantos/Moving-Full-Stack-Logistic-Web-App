const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    status: {
        type: String,
        default: 'Processando'
    },
    origin_address: {
        type: String,
        required: 'Informe o endereço de origem.',
        trim: true
    },
    destiny_address: {
        type: String,
        required: 'Informe o endereço de entrega.',
        trim: true
    },
    comment: {
        type: String
    },
    distance: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;