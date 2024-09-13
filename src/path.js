const path = require("path")

const ruta = __dirname
const rail = path.join("/hola", "/soy", "/una", "/ruta", "styles.sass")

console.log(path.dirname(rail));
console.log(path.basename(rail));
console.log(path.extname(rail));