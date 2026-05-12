const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const rootDir = path.resolve(__dirname, '..', '..');
const srcDir = path.join(rootDir, 'src');

module.exports = {
  appName: process.env.APP_NAME || 'GeoFlow',
  host: process.env.HOST || '0.0.0.0',
  port: Number(process.env.PORT || 3000),
  nodeEnv: process.env.NODE_ENV || 'development',
  isProd: process.env.NODE_ENV === 'production',
  rootDir,
  srcDir,
  viewDir: path.join(srcDir, 'views')
};
