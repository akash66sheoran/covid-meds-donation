const express = require('express')
const router = express.Router()

const { requestMedicine, donateMedicine, createMedicine, getAllMedicines } = require('../controllers/medicineController')

router.route('/request').post(requestMedicine)
router.route('/medicines').get(getAllMedicines)
router.route('/donate').post(donateMedicine)
router.route('/create').post(createMedicine)

module.exports = router