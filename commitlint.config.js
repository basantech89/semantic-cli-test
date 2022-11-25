module.exports = {
  extends: ["gitmoji"],
  rules: {
    "header-max-length": [2, "always", 150],
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "module",
        "fix",
        "hotfix",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "chore",
        "revert",
        "wip",
        "build",
        "ci",
        "security",
        "init",
      ],
    ],
  },
  prompt: {
    alias: { fd: "docs: fix typos" },
    messages: {
      type: "Select the type of change that you're committing:",
      scope: "Denote the SCOPE of this change (optional):",
      customScope: "Denote the SCOPE of this change:",
      subject: "Write a SHORT, IMPERATIVE tense description of the change:\n",
      body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
      breaking:
        'List any BREAKING CHANGES (optional). Use "|" to break new line:\n',
      // footerPrefixsSelect: "Select the ISSUES type of changeList by this change (optional):",
      // customFooterPrefixs: "Input ISSUES prefix:",
      footer: "List any ISSUES by this change. E.g.: #31, #34:\n",
      confirmCommit: "Are you sure you want to proceed with the commit above?",
    },
    types: [
      {
        value: "feat",
        name: "feat:     🎉  A new feature",
        emoji: ":tada:",
      },
      {
        value: "module",
        name: "module:   ✨  A new module",
        emoji: ":sparkles:",
      },
      {
        value: "fix",
        name: "fix:      🐛  A bug fix",
        emoji: ":bug:",
      },
      {
        value: "hotfix",
        name: "hotfix:   🚑  Critical hotfix",
        emoji: ":ambulance:",
      },
      {
        value: "docs",
        name: "docs:     📝  Documentation only changes",
        emoji: ":memo:",
      },
      {
        value: "style",
        name: "style:    💄  Changes that do not affect the meaning of the code",
        emoji: ":lipstick:",
      },
      {
        value: "refactor",
        name: "refactor: ♻️  A code change that neither fixes a bug nor adds a feature",
        emoji: ":recycle:",
      },
      {
        value: "perf",
        name: "perf:     🚀  A code change that improves performance",
        emoji: ":rocket:",
      },
      {
        value: "test",
        name: "test:     ✅  Adding missing tests or correcting existing tests",
        emoji: ":white_check_mark:",
      },
      {
        value: "build",
        name: "build:    👷  Changes that affect the build system or external dependencies",
        emoji: ":construction_worker:",
      },
      {
        value: "ci",
        name: "ci:       💚  Changes to our CI configuration files and scripts",
        emoji: ":green_heart:",
      },
      {
        value: "chore",
        name: "chore:    🚚  Other changes that don't modify src or test files",
        emoji: ":truck:",
      },
      {
        value: "revert",
        name: "revert:   ⏪️ Reverts a previous commit",
        emoji: ":rewind:",
      },
      {
        value: "wip",
        name: "wip:      🚧  Work in progress",
        emoji: ":construction:",
      },
      {
        value: "security",
        name: "security: 🔒  Fixing security issues",
        emoji: ":lock:",
      },
    ],
    useEmoji: true,
    emojiAlign: "left",
    themeColorCode: "",
    scopes: [
      { name: "ui" },
      { name: "ci" },
      { name: "tests" },
      { name: "core" },
      { name: "tooling" },
      { name: "style" },
    ],
    allowCustomScopes: true,
    allowEmptyScopes: false,
    customScopesAlign: "bottom",
    customScopesAlias: "custom",
    emptyScopesAlias: "empty",
    upperCaseSubject: false,
    markBreakingChangeMode: false,
    allowBreakingChanges: ["feat", "fix", "hotfix", "module"],
    breaklineNumber: 100,
    breaklineChar: "|",
    skipQuestions: [],
    // issuePrefixs: [{ value: "closed", name: "closed:   ISSUES has been processed" }],
    // customIssuePrefixsAlign: "top",
    // emptyIssuePrefixsAlias: "skip",
    // customIssuePrefixsAlias: "custom",
    allowCustomIssuePrefixs: false,
    allowEmptyIssuePrefixs: false,
    confirmColorize: true,
    maxHeaderLength: 150,
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: "",
    defaultIssues: "",
    defaultScope: "",
    defaultSubject: "",
  },
};