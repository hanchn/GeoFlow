const fs = require('fs');

function main() {
  const messageFile = process.argv[2];

  if (!messageFile || !fs.existsSync(messageFile)) {
    console.error('[commit-msg] commit message file not found');
    process.exit(1);
  }

  const rawMessage = fs.readFileSync(messageFile, 'utf8');
  const firstLine = rawMessage
    .split('\n')
    .find((line) => line.trim() && !line.startsWith('#')) || '';
  const message = firstLine.trim();

  if (!message) {
    console.error('[commit-msg] commit message cannot be empty');
    process.exit(1);
  }

  if (message.length < 2) {
    console.error('[commit-msg] commit message must be at least 2 characters');
    process.exit(1);
  }

  console.log('[commit-msg] message validation passed');
}

main();
