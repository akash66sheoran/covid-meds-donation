const Donate = require('../models/donateModel')

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

exports.donateMedicine = async (req, res, next) => {
    try {
        const { email, medicine, expiry, dosage, address } = req.body;

        await Donate.create({
            email,
            medicine,
            expiry,
            dosage,
            address
        })

        res.status(200).json({
            success: true
        })

    } catch (error) {
        console.log(error)
        // next(error)
    }
}