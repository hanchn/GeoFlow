module.exports = {
  extends: ['@commitlint/config-conventional'],
  ignores: [
    (message) => /^[\u4e00-\u9fa5\s]{2,}$/.test(String(message || '').trim())
  ],
  rules: {
    'header-min-length': [2, 'always', 2]
  }
};
