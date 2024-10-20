const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'QbMFkJqZ#DHWBhgPjlP66Oh373Qr_yXRZvpjt_HQSzvkcMmS6BOw', // Enter Your Session ID
    MONGODB: process.env.MONGODB || 'mongodb+srv://kulathungaasitha319:yjHB0DvFfStNfwPS@cluster0.3oijd.mongodb.net/',    // Enter Your MongoDB URL
    Owner: process.env.OwnerNumber || '94750177369',    // Enter Your Owner Number
    BotNumber: process.env.BotNumber || '94750177369'    // Enter Your Bot Number
};
