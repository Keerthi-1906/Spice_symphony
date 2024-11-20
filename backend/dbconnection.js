const mongoose = require("mongoose");

const conncetdb = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database Coonection", connect.connection.name, connect.connection.host)
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = conncetdb