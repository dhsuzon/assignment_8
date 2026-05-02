import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const uri = process.env.DB_URL
const client = new MongoClient(uri)
const db = client.db("skillsphere_auth_db")
export const auth = betterAuth({
    emailAndPassword: {
        enabled: true
    },
    database: mongodbAdapter(db, client),
});