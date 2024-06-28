const mongoose = require('mongoose');

async function main() {
    try{
        mongoose.set('strictQuery', true);

        await mongoose.connect('mongodb+srv://emillymelo3:JvW6TnzKnO0VWbNr@immunie-api.jnfwdbo.mongodb.net/?retryWrites=true&w=majority&appName=immunie-api');

        console.log('MongoDB connected');
    }
    catch(error){
        console.log(error);
    }
}

module.exports = main