// utils/dbConnect.js

import mongoose from 'mongoose';

const MONGODB_URI = process.env.DATABASE_URL; // Replace with your MongoDB Atlas connection string

const dbConnect = async () => {
    if (mongoose.connection.readyState === 1) {
        return;
    }

    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB Atlas');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};

export default dbConnect;
