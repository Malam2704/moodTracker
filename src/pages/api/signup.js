// pages/api/signup.js

import dbConnect from '../../utils/dbConnect';
import User from '../../models/User';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            // Connect to the MongoDB database
            await dbConnect();

            // Create a new user in MongoDB
            const newUser = new User(req.body);
            await newUser.save();

            res.status(201).json({ message: 'User created successfully' });
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while creating the user' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
