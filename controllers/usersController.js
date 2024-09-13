import fs from "node:fs/promises"
import path from "node:path"
import crypto from "node:crypto"
import { validate, partialValidate } from "../validator/userValidator.js"
import db from "../db.json" assert {type: "json"}

const ruta = path.resolve("db.json")
let database = [...db]

export const readUsers = (req, res) => {
  res.json(database)
}


export const showUser = async (req, res) => {
  const { id } = req.params

  const idUser = database.find(item => item.id === id)

  if (!idUser) {
    res.status(404).json({ msg: "No se encontro nada" })
    return
  }
  res.json(idUser)
}

export const createUser = async (req, res) => {
  const result = validate(req.body);

  if (result.error) {
    return res.status(400).json({ msg: JSON.parse(result.error.message) })
  }

  const newUser = {
    id: crypto.randomUUID(),
    ...result.data
  }

  database = [...database, newUser]
  try {
    await fs.writeFile(ruta, JSON.stringify(database))
    res.status(200).json({ msg: "Agregado correctamente 🙌" })
  } catch (e) {
    res.status(400).json({ msg: "Hubo un error al intentar agregar el usuario 😔" })
  }
}

export const updateUser = async (req, res) => {
  const { id } = req.params
  const result = partialValidate(req.body)

  const idUser = database.find(item => item.id === id)

  //Encontrar el usuario con el id
  if (!idUser) {
    res.status(404).json({ msg: "No se encontro nada" })
    return
  }

  if (result.error) {
    return res.status(400).json({ msg: JSON.parse(result.error.message) })
  }

  //Creamos un objeto y asignamos los datos
  const user = {
    id,
    ...result.data
  }

  database = database.map(data => user.id === data.id ? { ...data, ...user } : data)

  //Almacenamos en la db
  try {
    await fs.writeFile(ruta, JSON.stringify(database))
    res.status(200).json({ msg: "Actualizado correctamente 🙌" })
  } catch (e) {
    res.status(400).json({ msg: "Hubo un error al intentar actualizar el usuario 😔" })
  }
}

export const deleteUser = async (req, res) => {
  const { id } = req.params

  const idUser = database.find(item => item.id === id)

  //Encontrar el usuario con el id
  if (!idUser) {
    res.status(404).json({ msg: "No se encontro nada" })
    return
  }

  database = database.filter(item => item.id !== id)

  try {
    await fs.writeFile(ruta, JSON.stringify(database))
    res.status(200).json({ msg: "Eliminado correctamente 🙌" })
  } catch (e) {
    res.status(400).json({ msg: "Hubo un error al intentar Eliminar el usuario 😔" })
  }
} 