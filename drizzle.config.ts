import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

config ({ path: '.env'});

export default defineConfig({
    schema:'./src/lib/database/schema.ts',
    out: '.migrations',
    dialect: 'sqlite',
    driver : 'turso',
    dbCredentials: {
        url: process.env.TURSO_CONNECTION_URL!,
        authToken: process.env.TURSO_AUTH_TOKEN!,
    },
});