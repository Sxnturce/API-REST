const path = require('node:path')
const fs = require("node:fs/promises")
const { mkdirSync, existsSync, readdirSync } = require('node:fs')
const sharp = require("sharp")

const ruta = path.resolve("./img")
const output = path.resolve("./converted")

if (!fs.stat(ruta)) {
  mkdirSync(ruta, { recursive: true })
  console.log("Creando carpeta 📖");
}

readdirSync(ruta).forEach(async (file) => {
  const input = path.join(ruta, file)
  const existWebp = path.join(output, file.replace(/\.[^.]+$/, ".webp"))

  try {
    if (!existsSync(existWebp)) {
      await sharp(input)
        .webp({ quality: 80 })
        .toFile(existWebp)
      console.log(`La conversion del archivo ${file}.webp se completo ✅`);
    }
  } catch (e) {
    console.log(`Hubo un error al transformar el archivo ${file}`);
  }
})

console.log("Todos los elementos actuales ya fueron transformados 🚀");
