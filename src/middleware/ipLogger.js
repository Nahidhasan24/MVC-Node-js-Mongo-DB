const fs = require("fs");
const path = require("path");

const logFilePath = path.join(__dirname, "../../ip_logs.txt");

const ipLogger = (req, res, next) => {
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    const log = `📌 IP: ${ip} - ${req.method} ${req.url} - ${new Date().toISOString()}\n`;


    fs.appendFile(logFilePath, log, (err) => {
        if (err) console.error("Error writing to log file:", err);
    });

    next();
};

module.exports = ipLogger;
