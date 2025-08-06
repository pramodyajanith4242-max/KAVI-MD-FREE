const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "3YEEQIYA#6jkc3SOUngY4D9cyPtNCefpmNaKXFMb6d3syWyTfI1E", // ඔයාගෙ session id එක
MONGODB: process.env.MONGODB || "mongodb://mongo:JFbSPuHLyjzRSNJDKiiKPtVqdhGniipI@shuttle.proxy.rlwy.net:56465",  //ඔයාගෙ public mongoDb url එක
};
 
