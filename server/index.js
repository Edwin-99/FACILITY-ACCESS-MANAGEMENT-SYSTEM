const app = require('./config/express');
require('dotenv').config();
const config = require('./config/config')

// console.log(process.env.JWT_SECRET);
// initialize mongo
require('./config/mongoose');

// listen to the port 
app.listen(config.port, () => {
    console.log(`listening on port ${config.port} (${config.env})`);
});

