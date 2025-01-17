const mongoose = require('mongoose');
require('dotenv').config();

async function main() {
    try{
        mongoose.set('strictQuery', true);

        await mongoose.connect(process.env.MONGODB_CONNECT_URL);

        console.log('MongoDB connected');
    }
    catch(error){
        console.log(error);
    }
}

module.exports = main