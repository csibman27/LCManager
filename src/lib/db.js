import dotenv from "dotenv"
dotenv.config()
import { MongoClient } from 'mongodb'

const { MONGODB_URI, MONGODB_DB } = process.env

if (!MONGODB_URI) {
    throw new Error('Please define the mongoURI property inside config/default.json');
}

if (!MONGODB_DB) {
    throw new Error('Please define the mongoDB property inside config/default.json');
}


let cached = global.mongo

if (!cached) {
    cached = global.mongo = {conn: null, promise: null}
}

export async function connectToDatabase() {
    if(cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {
        const opts = {
            useNewUrlparser: true,
            useUnifiedTopology: true
        }
    
    cached.promise = MongoClient.connect(MONGODB_URI, opts).then((client) => {
        return {
            db: client.db(MONGODB_DB)
        };
    });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}