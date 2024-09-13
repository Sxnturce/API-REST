const os = require('node:os')

console.table(
  {
    os: os.userInfo(),
    Memory: os.freemem(),
    System: os.platform(),
    System: os.release(),
  }
);

console.log(`Llevas conectado ${Math.round(os.uptime() / 60 / 60)} horas`);