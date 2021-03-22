const { Client }  = require('pg');
const fs = require('fs')
const path = require('path')

const pgConfig = {
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 15432,
}

// Read from the initDb script to automate the state restore
const initSqlPath = path.join('./', 'pg-init', 'on-first-boot.sql')
const initSqlData = fs.readFileSync(initSqlPath, 'utf-8')

describe('Use "users" table', () => {
  let client = null;

  beforeEach(async () => {
    client = new Client(pgConfig)
    await client.connect()
    await client.query(initSqlData)
  })

  afterEach(async () => {
    await client.end()
  })

  it('should pull data from the db', async () => {
    const res = await client.query('SELECT * FROM "users"')
    expect(res.rowCount).toBe(6)
  });

  it('should delete data from the db', async () => {
  
    const res = await client.query('SELECT * FROM "users"')
    expect(res.rowCount).toBe(6)

    await client.query(`DELETE FROM "users" WHERE "id" = 1`)

    const res1 = await client.query('SELECT * FROM "users"')
    expect(res1.rowCount).toBe(5)
  });

  it('should update a user from the db', async () => {
    const r1 = await client.query('SELECT * FROM "users" LIMIT 1')
    const userId = r1.rows[0].id

    await client.query(`UPDATE "users" SET "height" = 9999 WHERE "id" = ${userId}`)

    const r2 = await client.query(`SELECT * FROM "users" WHERE "height" = 9999 AND "id" = ${userId} LIMIT 1`)
    expect(r2.rowCount).toBe(1)
  });

  it('should insert user Janix in to the db', async () => {
    // const r1 = await client.query('SELECT * FROM "users" LIMIT 1')
    // const userId = r1.rows[0].id

    await client.query(`INSERT INTO "users" ("name", "bday", "height") VALUES('Janix', '1989-01-14', '172')`)
    

    const r2 = await client.query(`SELECT * FROM "users" WHERE "name" = 'Janix' LIMIT 1`)
    expect(r2.rowCount).toBe(1)
    expect(r2.rows[0].name).toBe("Janix")
  });
})

