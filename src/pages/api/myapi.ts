// pages/api/some-api.js or where appropriate
import { connect } from '../../../db';
import { getDatabase } from '../../../db';


export default async function handler(req: any, res: any) {
    await connect(); // Initialize the MongoDB connection
    // Your API logic here

    // Example: Insert a document
    async function insertDocument(data: any) {
        const db = getDatabase();
        const collection = db.collection('your_collection_name');
        await collection.insertOne(data);
    }

    // Example: Find documents
    async function findDocuments(query: any) {
        const db = getDatabase();
        const collection = db.collection('your_collection_name');
        const documents = await collection.find(query).toArray();
        return documents;
    }
}