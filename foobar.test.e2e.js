const { Client }  = require('pg');

const pgConfig = {
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 15432,
}

describe('Use "users" table', () => {
  let client = null;

  beforeEach(async () => {
    client = new Client(pgConfig)
    await client.connect()

    await client.query(`
      TRUNCATE "users" RESTART IDENTITY;
      INSERT INTO "users" ("name", "bday", "height") VALUES 
      ('Marco', '1981-06-30', '182'),
      ('Janis', '1989-01-14', '172'),
      ('Stefania', '1988-12-19', '164'),
      ('Khalaf', '1994-02-27', '185'),
      ('Aras', '1979-03-21', '171'),
      ('Alessio', '1980-05-03', '175');    
    `)
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
})

