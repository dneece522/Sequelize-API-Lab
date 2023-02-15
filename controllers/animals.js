const { Animal } = require('../models')

const create = async (req, res) => {
  try {
    const animal = await Animal.create(req.body)
    res.status(200).json(animal)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
}