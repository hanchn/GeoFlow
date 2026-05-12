const driverFactories = {
  mysql: () => require('./drivers/mysql'),
  postgresql: () => require('./drivers/postgresql')
};

function createDisabledDatabase(config) {
  return {
    enabled: false,
    client: config.client,
    async query() {
      throw new Error('Database is disabled.');
    },
    async ping() {
      return {
        ok: false,
        client: config.client,
        reason: 'disabled'
      };
    },
    async close() {}
  };
}

async function createDatabase(config) {
  if (!config.enabled) {
    return createDisabledDatabase(config);
  }

  const loadDriver = driverFactories[config.client];

  if (!loadDriver) {
    throw new Error(`Unsupported database client: ${config.client}`);
  }

  const createDriver = loadDriver();
  return createDriver(config[config.client], config);
}

module.exports = {
  createDatabase
};
