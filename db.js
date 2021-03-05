const { Pool } = require('pg')
require('dotenv').config()

const devConfig = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
}

// const devConfig = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`

const prodConfig = { 
    connectionString: process.env.DATABASE_URL 
}

const pool = new Pool(
    process.env.NODE_ENV === 'production' ? prodConfig : devConfig
)

module.exports = pool