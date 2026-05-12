module.exports = {
  nodeEnv: 'development',
  host: '0.0.0.0',
  port: 3000,
  logger: true,
  swagger: {
    enabled: true
  },
  database: {
    enabled: false,
    client: 'mysql'
  },
  jobs: {
    enabled: true
  }
};
