const {
  utils: { getPackages },
} = require('@commitlint/config-lerna-scopes');

module.exports = {
  extends: [
    '@commitlint/config-conventional',
    '@commitlint/config-lerna-scopes',
  ],
  rules: {
    'scope-enum': async (ctx) => {
      const scopes = await getPackages(ctx);

      return [2, 'always', [...scopes, 'lerna']];
    },
    'subject-case': [0],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feature',
        'fix',
        'refactor',
        'revert',
        'test',
      ],
    ],
  },
};
