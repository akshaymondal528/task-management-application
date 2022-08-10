require('dotenv').config();

exports.DB_CREDENTIALS = {
    DB_USER: process.env.DB_USER || 'postgres',
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_NAME: process.env.DB_NAME || 'tmscrud',
    DB_PASSWORD: process.env.DB_PASSWORD || '1997',
    DB_PORT: process.env.DB_PORT || '5432'
};

exports.CONST_CREDENTIALS = {
    PORT: process.env.PORT || 5151,
    API_ROUTE_PREFIX: process.env.API_ROUTE_PREFIX || '/api/v1',
    AUTH_SECRET: process.env.AUTH_SECRET || 'RgUkXp2s5v8y/B?E(H+MbQeThVmYq3t6'
}