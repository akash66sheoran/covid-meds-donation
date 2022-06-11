const express = require('express')
const router = express.Router()

const { requestMedicine, donateMedicine } = require('../controllers/requestController')

router.route('/request').post(requestMedicine)
router.route('/donate').post(donateMedicine)

module.exports = router