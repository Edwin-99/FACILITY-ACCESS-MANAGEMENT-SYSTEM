require('dotenv').config();
const envVars = process.env;


module.exports = {
    port : 4050,
    env: 'development',
    mongo: {
        uri: 'mongodb+srv://Edwin1234:ehyXNK1NhLjyd7YM@cluster0.mlhxoi1.mongodb.net/?retryWrites=true&w=majority',
        port: envVars.MONGO_PORT,
        isDebug:true
    },
    jwtSecret : '29fe02c1-7de9-493a-b3c5-d33e56555a98'
};


