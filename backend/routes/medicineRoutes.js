const express = require('express')
const router = express.Router()

const { requestMedicine, donateMedicine, createMedicine, getAllMedicines, getSingleMedicine } = require('../controllers/medicineController')

router.route('/request').post(requestMedicine)
router.route('/medicines').get(getAllMedicines)
router.route('/donate').post(donateMedicine)
router.route('/medicine/new').post(createMedicine)
router.route('/medicine/:id').get(getSingleMedicine)

module.exports = router