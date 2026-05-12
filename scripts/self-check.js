const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const packageJsonPath = path.join(rootDir, 'package.json');

function run(command) {
  execSync(command, {
    cwd: rootDir,
    stdio: 'inherit'
  });
}

function ensurePackageJsonExists() {
  if (!fs.existsSync(packageJsonPath)) {
    throw new Error('package.json not found');
  }
}

function main() {
  ensurePackageJsonExists();

  console.log('[self-check] package.json found');
  console.log('[self-check] checking staged JavaScript files');

  try {
    run('node scripts/check-staged-js.js');
  } catch (error) {
    process.exit(error.status || 1);
  }
}

main();
