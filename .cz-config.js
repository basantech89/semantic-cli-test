module.exports = {
  types: [
    { value: "feat", name: "✨ feat:\tAdding a new feature" },
    { value: "fix", name: "🐛 fix:\tFixing a bug" },
    { value: "hotfix", name: "🚑 hotfix:\tCritical hotfix" },
    { value: "docs", name: "📝 docs:\tAdd or update documentation" },
    {
      value: "style",
      name: "💄 style:\tAdd or update styles, ui or ux",
    },
    {
      value: "refactor",
      name: "♻️ refactor:\tCode change that neither fixes a bug nor adds a feature",
    },
    {
      value: "perf",
      name: "⚡️ perf:\tCode change that improves performance",
    },
    {
      value: "test",
      name: "✅ test:\tAdding tests cases",
    },
    {
      value: "chore",
      name: "🚚 chore:\tChanges to the build process or auxiliary tools\n\t\tand libraries such as documentation generation",
    },
    { value: "revert", name: "⏪️ revert:\tRevert to a commit" },
    { value: ":construction: wip", name: "🚧 wip:\tWork in progress" },
    {
      value: "build",
      name: "👷 build:\tAdd or update regards to build process",
    },
    {
      value: "ci",
      name: "💚 ci:\tFixing CI build",
    },
    {
      value: "security",
      name: "🔒 security:\tFixing security issues",
    },
    {
      value: "init",
      name: "🎉 init:\tInitial commit",
    },
  ],

  scopes: [
    { name: "ui" },
    { name: "ci" },
    { name: "tests" },
    { name: "core" },
    { name: "tools" },
  ],

  scopeOverrides: {
    fix: [
      { name: "merge" },
      { name: "style" },
      { name: "test" },
      { name: "hotfix" },
    ],
  },

  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"],
  // skip any questions you want
  // skipQuestions: ["body"],
  subjectLimit: 100,
  appendBranchNameToCommitMessage: true,
};
