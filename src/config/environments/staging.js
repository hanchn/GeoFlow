module.exports = {
  nodeEnv: 'production',
  host: '0.0.0.0',
  port: 3002,
  logger: true,
  swagger: {
    enabled: true
  },
  database: {
    enabled: false,
    client: 'postgresql'
  },
  jobs: {
    enabled: true
  }
};
