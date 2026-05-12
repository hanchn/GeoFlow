const { database: databaseConfig } = require('../config');
const { createDatabase } = require('../database');
const messages = require('../messages');

async function registerDatabase(fastify) {
  const database = await createDatabase(databaseConfig);

  fastify.decorate('db', database);
  fastify.decorate('databaseConfig', databaseConfig);

  if (!database.enabled) {
    fastify.log.warn(
      `${messages.warning.DATABASE_DISABLED} current client: ${databaseConfig.client}`
    );
    return;
  }

  await database.ping();
  fastify.log.info(
    `${messages.success.DATABASE_CONNECTED} current client: ${databaseConfig.client}`
  );

  fastify.addHook('onClose', async (instance) => {
    await instance.db.close();
  });
}

module.exports = registerDatabase;
