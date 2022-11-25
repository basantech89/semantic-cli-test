const transform = require("./transform");
const gitmojiParserOpts = require("@gitmoji/parser-opts");

module.exports = {
  branches: [
    "+([0-9])?(.{+([0-9]),x}).x",
    "main",
    "next",
    "next-major",
    {
      name: "alpha",
      prerelease: true,
      channel: "alpha",
    },
    {
      name: "beta",
      prerelease: true,
      channel: "beta",
    },
  ],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        releaseRules: [
          {
            type: "hotfix",
            release: "patch",
            emoji: ":ambulance:",
            value: "hotfix",
          },
          {
            type: "🚑 hotfix",
            release: "patch",
            emoji: ":ambulance:",
            value: "hotfix",
          },
          {
            type: ":ambulance: hotfix",
            release: "patch",
            emoji: ":ambulance:",
            value: "hotfix",
          },
          {
            type: ":ambulance: hotfix",
            release: "patch",
            value: "hotfix",
          },
          {
            type: "style",
            release: "patch",
          },
          {
            type: "module",
            release: "minor",
          },
        ],
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        config: "conventional-changelog-gitmoji-config",
        writerOpts: { transform },
      },
    ],
    "@semantic-release/changelog",
    "@semantic-release/npm",
    [
      "@semantic-release/git",
      {
        message:
          "🔖 chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
    "@semantic-release/github",
  ],
};
