import { STATUS_CODE_MESSAGE } from "../constants.js"
import categoryService from "../services/category.js"

const get = async (req, res) => {
  const { query } = req
  try {
    const result = await categoryService.get(query)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json({ code: 400, message: error.message })
  }
}

const getDetail = async (req, res) => {
  const { id } = req.params
  try {
    const item = await categoryService.getDetail(id)
    if (!item) throw new Error()
    res.status(200).json(item)
  } catch (error) {
    res.status(404).json({ code: 404, message: STATUS_CODE_MESSAGE[404] })
  }
}

const getFromNavbar = async (req, res) => {
  try {
    const result = await categoryService.getFromNavbar()
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json({ code: 400, message: error.message })
  }
}

const create = async (req, res) => {
  try {
    const result = await categoryService.create(req.body)
    res.status(201).json({ _id: result._id })
  } catch (error) {
    res.status(400).json({ code: 400, message: error.message })
  }
}

const update = async (req, res) => {
  const { id } = req.params
  const { body } = req

  try {
    const exist = await categoryService.getDetail(id)
    if (!exist) throw new Error()
  } catch (error) {
    res.status(404).json({ code: 404, message: STATUS_CODE_MESSAGE[404] })
    return
  }

  try {
    const result = await categoryService.update(id, body)
    res.status(201).json({ _id: result._id })
  } catch (error) {
    res.status(400).json({ code: 400, message: error.message })
  }
}

const remove = async (req, res) => {
  const { id } = req.params

  try {
    const exist = await categoryService.getDetail(id)
    if (!exist) throw new Error()
  } catch (error) {
    res.status(404).json({ code: 404, message: STATUS_CODE_MESSAGE[404] })
    return
  }

  try {
    const result = await categoryService.remove(id)
    res.status(200).json({ _id: result._id })
  } catch (error) {
    res.status(400).json({ code: 400, message: error.message })
  }
}

const categoryController = { get, getDetail, getFromNavbar, create, update, remove }

export default categoryController
