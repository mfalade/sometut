const configFile = process.env.NODE_ENV || "default";
const config = require(`${__BASE}/config`);

console.log(`Using ${configFile} configuration for app`);

module.exports = config;