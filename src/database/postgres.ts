import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || 'user',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'database',
    synchronize: false, // Set to false in production
    logging: false, // Set to true for debugging
    entities: [
        // Add your entity classes here
    ],
    migrations: [
        // Add your migration classes here
    ],
    subscribers: [
        // Add your subscriber classes here
    ],
    extra: {
        max: 20, // Maximum number of connections
        connectionLimit: 0, // No limit on connection pool
        idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
    },
});

export default AppDataSource;