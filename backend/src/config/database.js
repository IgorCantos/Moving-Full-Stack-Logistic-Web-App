const mongoose = require('mongoose');

const dbUrl = 'mongodb://127.0.0.1:27017/userDB'

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
mongoose.Promise = global.Promise;

const dbConnection = mongoose.connection;
dbConnection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

dbConnection.on('error', console.error.bind(console, 'MongoDB connection error:'))