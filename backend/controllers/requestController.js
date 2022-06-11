const Request = require('../models/requestModel')

exports.requestMedicine = async (req, res, next) => {
    try {
        const { email, medicine, dosage } = req.body;

        await Request.create({
            email,
            medicine,
            dosage
        })

        res.status(200).json({
            success: true
        })

    } catch (error) {
        console.log(error)
        // next(error)
    }
}