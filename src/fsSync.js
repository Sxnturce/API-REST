const fs = require("node:fs")
const path = require("node:path")


const rute = path.resolve("info/new.txt")
fs.writeFileSync(rute, "Holaaa")
/* const text = fs.readFileSync(rute, { encoding: "utf8" }) */

