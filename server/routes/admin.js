import express from 'express';
import Admin from '../models/admin.js';
import bcrypt from 'bcryptjs';
import { generatetoken } from '../utils/generatetoken.js'; // Correct import
import { protect } from '../middlewares/authmiddleware.js';

const router = express.Router();

// Admin login
router.post('/login', async (req, res, next) => { // Added next for potential global error handling
    try {
        const { email, password } = req.body;

        const admin = await Admin.findOne({ email });

        if (!admin || !(await bcrypt.compare(password, admin.password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = generatetoken(admin._id); // Corrected: use lowercase 'generatetoken'

        res.status(200).json({
            message: 'Login successful',
            token,
            admin: {
                id: admin._id,
                name: admin.name,
                email: admin.email,
            },
        });
    } catch (error) {
        console.error('Admin Login Error:', error.message);
        next(error); // Pass to global error handler
    }
});

// Example protected route - only accessible by logged-in admin
router.get('/dashboard', protect, (req, res) => {
    res.json({ message: `Welcome, ${req.admin.name}! This is your admin dashboard.`, admin: req.admin });
});

// Add a route to create an admin (for initial setup, protect this heavily or remove after first admin is created)
router.post('/register', async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const adminExists = await Admin.findOne({ email });

        if (adminExists) {
            return res.status(400).json({ message: 'Admin with this email already exists' });
        }

        const admin = await Admin.create({
            name,
            email,
            password,
        });

        if (admin) {
            const token = generatetoken(admin._id);
            res.status(201).json({
                message: 'Admin registered successfully',
                token,
                admin: {
                    id: admin._id,
                    name: admin.name,
                    email: admin.email,
                },
            });
        } else {
            res.status(400).json({ message: 'Invalid admin data' });
        }
    } catch (error) {
        console.error('Admin Register Error:', error.message);
        next(error);
    }
});


export default router;