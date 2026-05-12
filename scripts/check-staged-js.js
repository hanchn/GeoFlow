const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function getStagedFiles() {
  const output = execSync('git diff --cached --name-only --diff-filter=ACM', {
    encoding: 'utf8'
  });

  return output
    .split('\n')
    .map((item) => item.trim())
    .filter(Boolean)
    .filter((item) => item.endsWith('.js'));
}

function main() {
  const stagedFiles = getStagedFiles();

  if (stagedFiles.length === 0) {
    console.log('[self-check] no staged JavaScript files');
    return;
  }

  for (const relativeFile of stagedFiles) {
    const absoluteFile = path.resolve(process.cwd(), relativeFile);

    if (!fs.existsSync(absoluteFile)) {
      continue;
    }

    const source = fs.readFileSync(absoluteFile, 'utf8');

    if (!source.trim()) {
      console.error(`[self-check] empty file is not allowed: ${relativeFile}`);
      process.exit(1);
    }
  }

  console.log(`[self-check] checked ${stagedFiles.length} staged JavaScript file(s)`);
}

main();
