const { database: databaseConfig } = require('../config');
const { createDatabase } = require('../database');

async function registerDatabase(fastify) {
  const database = await createDatabase(databaseConfig);

  fastify.decorate('db', database);
  fastify.decorate('databaseConfig', databaseConfig);

  if (!database.enabled) {
    return;
  }

  await database.ping();

  fastify.addHook('onClose', async (instance) => {
    await instance.db.close();
  });
}

module.exports = registerDatabase;
