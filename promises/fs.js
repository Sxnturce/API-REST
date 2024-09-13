const { readFile } = require("fs")
const { resolve } = require("path");

const ruta = resolve("info/new.txt")
const ruta2 = resolve("info/soyUnArchivo.txt")

const readText = async (path) => {
  return new Promise((res, rej) => {
    readFile(path, { encoding: "utf-8" }, (err, data) => {
      if (err) {
        rej(err);
        return
      }
      res(data);
    })
  })
}


/* readText(ruta)
  .then(data => { console.log(data) })
  .then(() => readText(ruta2))
  .then(result => console.log(result))
  .catch(e => { console.log(e) }) */

async function readFileFunc() {
  try {
    const data = await readText(ruta)
    const data2 = await readText(ruta2)
    console.log(data);
    console.log(data2);
  } catch (e) {
    console.log(e);
  }
}
readFileFunc();