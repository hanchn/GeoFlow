const path = require('path');
const dotenv = require('dotenv');

const appEnv = process.env.APP_ENV || process.env.NODE_ENV || 'development';
const rootDir = path.resolve(__dirname, '..', '..');
const envFilePath = path.join(rootDir, `.env.${appEnv}`);

dotenv.config({ path: envFilePath });

const srcDir = path.join(rootDir, 'src');

module.exports = {
  appName: process.env.APP_NAME || 'GeoFlow',
  appEnv,
  host: process.env.HOST || '0.0.0.0',
  port: Number(process.env.PORT || 3000),
  nodeEnv: process.env.NODE_ENV || 'development',
  isProd: process.env.NODE_ENV === 'production',
  rootDir,
  srcDir,
  viewDir: path.join(srcDir, 'views'),
  publicDir: path.join(srcDir, 'public')
};
