
const mongoose = require('mongoose');
require("dotenv").config()

async function connect() {
    // protocol://username:password@host:port/db_name

    return new Promise((resolve, reject) => {
        mongoose.connect(process.env.MONGODB_URL, (err) => {
            if (err) {
                console.log('Error in connecting to database')
                return reject(err);
            }
            console.log('Connected to DB')
            resolve();
        })
    })
}

module.exports = connect;