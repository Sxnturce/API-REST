const fs = require("node:fs/promises")
const path = require("node:path")

//* Write and read 
const ruta1 = path.resolve("info/soyUnArchivo.txt")
const ruta2 = path.resolve("info/new.txt")

async function readText() {
  try {
    const query1 = fs.readFile(ruta1, { encoding: "utf-8" })
    const query2 = fs.readFile(ruta2, { encoding: "utf-8" })

    const [data1, data2] = await Promise.all([query1, query2])

    await fs.writeFile(ruta1, "Esto es un texto nuevo", {
      flag: "a"
    })
  } catch (e) {
    console.log(e);
  }
}

readText();

