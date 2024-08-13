const os = require('os');

const interfaces = os.networkInterfaces();
let ipAddress = '127.0.0.1'; // Default value

for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
        if (iface.family === 'IPv4' && !iface.internal) {
            ipAddress = iface.address;
            break; // Break out of the inner loop once we find the first valid IP
        }
    }
}

module.exports = ipAddress;
