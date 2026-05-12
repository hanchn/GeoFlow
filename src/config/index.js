const path = require('path');
const common = require('./common');
const sites = require('./sites');

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
  logger: environmentConfig.logger
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
  swagger,
  site
};
