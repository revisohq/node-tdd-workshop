const { Client }  = require('pg');
console.log('hello pg');

const pgConfig = {
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 15432,
}


const boot = async () => {
    const client = new Client(pgConfig)
    await client.connect()

    const res = await client.query('SELECT * FROM "users"')
    console.log(res.rows)
    await client.end()
}

boot();