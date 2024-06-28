const mongoose = require('mongoose');
require('dotenv').config();

async function testConnection() {
    try {
        mongoose.set('strictQuery', true);
        
        await mongoose.connect(process.env.MONGODB_CONNECT_URL);

        console.log('MongoDB connected');
        mongoose.connection.close();
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1); 
    }
}

testConnection();
