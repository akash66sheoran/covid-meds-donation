const express = require('express')
const router = express.Router()

const { requestMedicine } = require('../controllers/requestController')

router.route('/request').post(requestMedicine)

module.exports = router