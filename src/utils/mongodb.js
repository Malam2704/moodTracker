import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

let cachedClient = null;

export async function connectToDatabase() {
    if (cachedClient) {
        return { db: cachedClient.db('moodTracker_accounts') };
    }

    const client = await MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    cachedClient = client;

    return { db: client.db('moodTracker_accounts') };
}