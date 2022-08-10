// Global Imports
const Knex = require('knex');
const chalk = require('chalk');

// Local Imports
const { DB_CREDENTIALS } = require('../config/env');

exports.knex = Knex({
    client: 'pg',
    connection: {
        host: DB_CREDENTIALS.DB_HOST,
        port: DB_CREDENTIALS.DB_PORT,
        user: DB_CREDENTIALS.DB_USER,
        password: DB_CREDENTIALS.DB_PASSWORD,
        database: DB_CREDENTIALS.DB_NAME
    }
})

exports.connectDB = async () => {
    try {
        const conn = await this.knex.raw(`SELECT inet_server_addr()`);
        console.log(chalk.blueBright(`Database connected on ${conn.rows[0].inet_server_addr}`));
    } catch (error) {
        console.log(chalk.yellowBright(`Database not connected!`));
        console.log(chalk.redBright(error.message.toString()));
    }
}