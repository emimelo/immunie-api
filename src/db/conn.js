const mongoose = require('mongoose');
require('dotenv').config();

async function main() {
    try{
        mongoose.set('strictQuery', true);

        await mongoose.connect(process.env.MONGODB_CONNECT_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            connectTimeoutMS: 10000,
            socketTimeoutMS: 45000,
        });

        console.log('MongoDB connected');
    }
    catch(error){
        console.log(error);
    }
}

module.exports = main