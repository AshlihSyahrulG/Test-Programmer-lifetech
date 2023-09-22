const express = require('express')
const router = express.Router()
const Controller = require('../controllers/controller')

router.get('/',Controller.FindAll)
router.post('/',Controller.addData)
router.delete('/:id',Controller.deleteData)
router.put('/:id',Controller.updateData)


module.exports = router 