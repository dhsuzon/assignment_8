import { betterAuth, google } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const uri = process.env.DB_URL
const client = new MongoClient(uri)
const db = client.db("skillsphere_auth_db")
export const auth = betterAuth({
    baseURL: process.env.BETTER_AUTH_URL,
    trustedOrigins: [process.env.BETTER_AUTH_URL],
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }
    },
    advanced: {
        crossOrigin: true
    },
    emailAndPassword: {
        enabled: true
    },
    database: mongodbAdapter(db, client),
});