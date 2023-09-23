// pages/api/users.js

import { PrismaClient } from '../../generated/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    } finally {
        await prisma.$disconnect();
    }
}