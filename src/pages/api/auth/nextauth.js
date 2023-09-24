// pages/api/auth/[...nextauth].js

import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
    providers: [
        // Configure your authentication providers here
    ],
    session: {
        jwt: true,
    },
    callbacks: {
        async jwt(token, user) {
            // Add custom JWT token data here (if needed)
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session(session, token) {
            // Add custom session data here (if needed)
            session.user = { id: token.id };
            return session;
        },
    },
});