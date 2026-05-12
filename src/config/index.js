const path = require('path');
const common = require('./common');
const sites = require('./sites');

function resolveLogger(enabledByEnv) {
  if (process.env.APP_LOGGER === 'false') {
    return false;
  }

  if (process.env.APP_LOGGER === 'true') {
    return true;
  }

  return enabledByEnv;
}

const appEnv = process.env.APP_ENV || process.env.NODE_ENV || 'development';
const rootDir = path.resolve(__dirname, '..', '..');
const srcDir = path.join(rootDir, 'src');

const environmentConfig = require(`./environments/${appEnv}`);
const siteCode = process.env.SITE_CODE || 'default';
const site = sites[siteCode] || sites.default;

const app = {
  appName: common.appName,
  appEnv,
  nodeEnv: environmentConfig.nodeEnv,
  host: environmentConfig.host,
  port: Number(environmentConfig.port),
  logger: resolveLogger(environmentConfig.logger)
};

const view = {
  root: path.join(srcDir, 'views'),
  options: common.viewOptions
};

const assets = {
  root: path.join(srcDir, 'public'),
  prefix: common.staticPrefix
};

const jobs = {
  ...common.jobs,
  ...environmentConfig.jobs
};

const database = {
  ...common.database,
  ...environmentConfig.database,
  mysql: {
    ...common.database.mysql,
    ...(environmentConfig.database && environmentConfig.database.mysql)
  },
  postgresql: {
    ...common.database.postgresql,
    ...(environmentConfig.database && environmentConfig.database.postgresql)
  }
};

const swagger = {
  enabled: Boolean(environmentConfig.swagger && environmentConfig.swagger.enabled)
};

module.exports = {
  rootDir,
  srcDir,
  siteCode,
  app,
  view,
  assets,
  jobs,
  database,
  swagger,
  site
};
