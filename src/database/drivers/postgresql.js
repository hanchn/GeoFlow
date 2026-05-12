const { Pool } = require('pg');

async function createPostgresqlDatabase(options, meta) {
  const pool = new Pool({
    host: options.host,
    port: options.port,
    user: options.user,
    password: options.password,
    database: options.database,
    ssl: options.ssl ? { rejectUnauthorized: false } : false,
    connectionTimeoutMillis: meta.connectionTimeout
  });

  return {
    enabled: true,
    client: 'postgresql',
    raw: pool,
    async query(sql, params = []) {
      const result = await pool.query(sql, params);
      return result.rows;
    },
    async ping() {
      await pool.query('SELECT 1 AS ok');
      return {
        ok: true,
        client: 'postgresql'
      };
    },
    async close() {
      await pool.end();
    }
  };
}

module.exports = createPostgresqlDatabase;
