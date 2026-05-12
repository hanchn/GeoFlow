module.exports = {
  appName: 'GeoFlow',
  defaultLanguage: 'zh-CN',
  staticPrefix: '/',
  viewOptions: {
    autoescape: true,
    trimBlocks: true,
    lstripBlocks: true
  },
  jobs: {
    enabled: true,
    timezone: 'Asia/Shanghai'
  },
  database: {
    enabled: false,
    client: 'mysql',
    connectionTimeout: 5000,
    mysql: {
      host: '127.0.0.1',
      port: 3306,
      user: 'root',
      password: '',
      database: 'geoflow'
    },
    postgresql: {
      host: '127.0.0.1',
      port: 5432,
      user: 'postgres',
      password: '',
      database: 'geoflow',
      ssl: false
    }
  }
};
