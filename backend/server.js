const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

require('./src/config/database');

const app = express();
const port = process.env.port || 3000;

app.use(cookieParser());
app.use(cors({ origin: true, credentials: true}));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const auth = require('./src/routes/auth');
const login = require('./src/routes/login');
const createNewUser = require('./src/routes/create-account');
const showMyOrders = require('./src/routes/my-orders')
const createOrder = require('./src/routes/create-order');
const distance = require('./src/routes/distance');

app.use('/api',
    auth,
    login,
    createNewUser,
    showMyOrders,
    createOrder,
    distance
)


app.listen(port, () => { console.log(`Server is running on port: ${port}`); });
