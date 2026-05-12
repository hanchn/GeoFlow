module.exports = {
  nodeEnv: 'production',
  host: '0.0.0.0',
  port: 3000,
  logger: false,
  swagger: {
    enabled: false
  },
  database: {
    enabled: false,
    client: 'postgresql'
  },
  jobs: {
    enabled: true
  }
};
