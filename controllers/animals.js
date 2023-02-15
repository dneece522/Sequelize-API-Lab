const { Animal, Feeding } = require('../models')

const create = async (req, res) => {
  try {
    const animal = await Animal.create(req.body)
    res.status(200).json(animal)
  } catch (error) {
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const animals = await Animal.findAll({
      include: [{ model: Feeding, as: 'feedings' }]
    })
    res.status(200).json(animals)
  } catch (error) {
    res.status(500).json(error)
  }
}

const update = async (req, res) => {
  try {
    const animal = await Animal.findByPk(req.params.id)
    animal.set(req.body)
    await animal.save()
    res.status(200).json(animal)
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteAnimal = async (req, res) => {
  try {
    const animal = await Animal.findByPk(req.params.id)
    await animal.destroy()
    res.status(200).json(animal)
  } catch (error) {
    res.status(500).json(error)
  }
}

const addFeeding = async (req, res) => {
  try {
    req.body.animalId = req.params.id
    const feeding = await Feeding.create(req.body)
    res.status(200).json(feeding)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
  update,
  delete: deleteAnimal,
  addFeeding
}