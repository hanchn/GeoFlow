const mysql = require('mysql2/promise');

async function createMysqlDatabase(options, meta) {
  const pool = mysql.createPool({
    host: options.host,
    port: options.port,
    user: options.user,
    password: options.password,
    database: options.database,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    connectTimeout: meta.connectionTimeout
  });

  return {
    enabled: true,
    client: 'mysql',
    raw: pool,
    async query(sql, params = []) {
      const [rows] = await pool.query(sql, params);
      return rows;
    },
    async ping() {
      await pool.query('SELECT 1 AS ok');
      return {
        ok: true,
        client: 'mysql'
      };
    },
    async close() {
      await pool.end();
    }
  };
}

module.exports = createMysqlDatabase;
