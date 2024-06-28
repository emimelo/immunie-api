const mongoose = require('mongoose');

async function main() {
    try{
        mongoose.set('strictQuery', true);

        await mongoose.connect('mongodb+srv://emillymelo3:2jnejXJ1K6otfFqa@immunie-api.jnfwdbo.mongodb.net/?retryWrites=true&w=majority&appName=immunie-apiclear');

        console.log('MongoDB connected');
    }
    catch(error){
        console.log(error);
    }
}

module.exports = main