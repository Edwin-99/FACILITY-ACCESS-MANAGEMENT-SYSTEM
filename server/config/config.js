require('dotenv').config();
const envVars = process.env;


module.exports = {
    port : 4050,
    env: 'development',
    mongo: {
        uri: '',
        port: envVars.MONGO_PORT,
        isDebug:true
    },
    jwtSecret : '29fe02c1-7de9-493a-b3c5-d33e56555a98'
};


