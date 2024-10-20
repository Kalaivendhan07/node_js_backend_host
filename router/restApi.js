const express = require('express');
const router = express.Router();
const Joi = require('joi');
const mysqlConnection = require('../utils/db_con/dbCon');

// Define the validation schema (as shown above)
const userSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    phone_number: Joi.string().pattern(/^[0-9]{10}$/).required(),
    registration_type: Joi.string().valid('school', 'teacher').required(),
    profession: Joi.string().optional(),
    school_name: Joi.string().optional(),
    school_code: Joi.string().optional(),
    state: Joi.string().optional(),
    district: Joi.string().optional(),
    area: Joi.string().optional(),
    pincode: Joi.string().pattern(/^[0-9]{6}$/).optional()
});

// POST route to create a user
router.post('/createUser', async (req, res) => {
    // Validate the request body against the schema
    const { error, value } = userSchema.validate(req.body);
    
    if (error) {
        return res.status(400).json({ msg: 'Data Validation Error', details: error.details });
    }

    // If validation passes, proceed with database insertion
    const query1 = `INSERT INTO eduTrackProUsers (name, email, phone_number, registration_type, profession, school_name, school_code, state, district, area, pincode) 
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const { name, email, phone_number, registration_type, profession, school_name, school_code, state, district, area, pincode } = value;

    try {
        const [data] = await mysqlConnection.execute(query1, [name, email, phone_number, registration_type, profession, school_name, school_code, state, district, area, pincode]);
        res.status(200).json({
            msg: "User created successfully!",
            data: data
        });
    } catch (err) {
        res.status(500).json({
            msg: 'Database error',
            error: err.message
        });
    }
});

module.exports = router;
