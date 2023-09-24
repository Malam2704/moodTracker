// next-auth.js

import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { dbConnect } from 'src/utils/dbConnect'; // Import your MongoDB connection

export default NextAuth({
    providers: [
        Providers.Credentials({
            credentials: {
                username: { label: 'Username', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            authorize: async (credentials) => {
                const { username, password } = credentials;

                // Connect to MongoDB
                const { db } = await dbConnect();

                // Check if the user exists in the database
                const user = await db.collection('users').findOne({ username });

                if (!user) {
                    return Promise.resolve(null); // User not found
                }

                // Check the password (you should hash it in the database and compare hashes)
                if (password !== user.passwordHash) {
                    return Promise.resolve(null); // Incorrect password
                }

                // User authenticated, return user object
                return Promise.resolve({ id: user._id, username: user.username });
            },
        }),
    ],
    session: {
        jwt: true,
    },
    callbacks: {
        async signIn(username, password) {
            // Handle sign-in logic
            return Promise.resolve(true);
        },
        async redirect(url, baseUrl) {
            // Handle redirection
            return Promise.resolve(url);
        },
        async session(session, user) {
            // Handle session data
            return Promise.resolve(session);
        },
        async error(error) {
            // Handle authentication error
            console.error('Authentication error:', error);
            return Promise.resolve(error);
        },
    },
});